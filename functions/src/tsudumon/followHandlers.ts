// つづもん専用Botの友だち追加（follow）／ブロック（unfollow）ハンドラ。
//
// 既存 lineWebhook.ts の handleFollow / handleUnfollow は「流用しない」
// （design.md §4）。理由: handleFollow は onboardingState:'started' や
// blocked:false を無条件に書くため、既存の一問一答ユーザーがつづもんBotを
// 追加した瞬間にオンボーディング状態が壊れてしまう。uid の作り方（line:${userId}）
// は既存と同じで、同一プロバイダーのため両Botで同じ users/{uid} を指すのは意図した
// 挙動——だからこそ、書き込むフィールドをBot別（tsudumonFollowed 系）に厳密に絞る。
import type { messagingApi } from '@line/bot-sdk';

/** 新webhookが受け取る follow/unfollow イベントの最小形。 */
export interface TsudumonFollowEvent {
  source?: { type?: string; userId?: string };
  replyToken?: string;
}

/** uid の作り方は既存 lineWebhook.ts の buildUid と同じ（line:${userId}）。 */
export function buildTsudumonUid(event: TsudumonFollowEvent): string | null {
  const userId = event.source?.userId;
  if (!userId || event.source?.type !== 'user') {
    console.warn(
      '[tsudumon/followHandlers] event.source is not a user:',
      event.source?.type
    );
    return null;
  }
  return `line:${userId}`;
}

/** lineWebhook.ts の getDb() と同じ初期化パターン（既存を触らず自己完結させる）。 */
async function getTsudumonDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue };
}

const TSUDUMON_LP_URL = 'https://tsudumon.jp/';
/** 体験開始の一本道（未ログインなら LINE ログイン＝友だち追加を挟んで自動で体験開始→教材へ）。 */
const TSUDUMON_TRIAL_URL = 'https://tsudumon.jp/start/';
/**
 * 常時無料の1節（律令国家と奈良時代）が開く参考書。登録もログインも要らない。
 * `/parents/` の「まず中身を見る」と同じ場所に揃えている。
 */
const TSUDUMON_FREE_UNIT_URL = 'https://tsudumon.jp/ref/04/';
// ⚠️ 教材トップ（/map/）と設定（/settings/）は、あいさつからは**外した**（2026-08-03）。
// 友だち追加した直後の相手は、まだ何も始めていない。「登録ずみの方はこちら」も
// 「お知らせは1日2通」も、その時点では要らない情報で、本文を長くして
// いちばん読ませたい2つの入口（中身を見る／体験する）を埋めていた。
// 設定の案内は初回配信に1行だけ添える形で残している（tsudumonDailyUnit の firstTime）。

/**
 * follow直後の案内文。一問一答のおためし1問・学年選択flexは送らない。
 *
 * 主役は「スマホで進めるWeb教材（月額サブスク）」。紙のワーク・ライセンスコードは
 * ギフト／手売り用に併存しているだけなので、末尾の注記までトーンを落とす
 * （旧文面は紙のQRとコード入力が主役で、現在の商品実態と食い違っていた）。
 */
/** export はプレビュー用（scripts/_send-tsudumon-follow-admin.ts）。挙動は変わらない。 */
export function buildTsudumonFollowText(): string {
  return [
    'つづもんの公式LINEへの登録、ありがとうございます！',
    '',
    '中学歴史ぜんぶ（全19単元）を、スマホで進められる教材です。',
    '',
    // 最初に置くのは**登録が要らない入口**。いきなり体験を勧めると身構える。
    // 常時無料の1節（律令国家と奈良時代）だけが開く。
    '▼ まずは中身を見てみる（無料）',
    TSUDUMON_FREE_UNIT_URL,
    '',
    // ⚠️ 「8月15日まで」は実装と連動している（tsudumonCore の
    // TSUDUMON_TRIAL_CAMPAIGN_*）。キャンペーンが終わると体験は72時間に戻るので、
    // **この2行も戻すこと**。日付だけ残ると嘘になる。
    '▼ ぜんぶ無料でおためし',
    '今だけ、8月15日まで無料で使えます。',
    TSUDUMON_TRIAL_URL,
    '',
    // お金の不安を先に消す。中学生がためらういちばんの理由がここで、
    // 「あとで請求されるかも」と思われた時点で押してもらえない。
    // 実装上もクレカ登録は無く、期限が来れば自然に失効する（自動課金は起きない）。
    'お支払いの登録はいりません。期間が終わっても、お金が勝手にかかることはないから安心してね。',
    '',
    // 「つづ先生」はまだ知らない名前なので、最初は役割で言う。
    'わからないところは、このトークでAIの先生に何度でも聞けます。',
    '',
    'くわしくはこちら → ' + TSUDUMON_LP_URL,
  ].join('\n');
}

/**
 * 保護者アカウント（連携ずみ）が友だち追加し直したときのあいさつ。
 *
 * 上の中学生向け文面（体験の開始・つづ先生に質問）をそのまま送ると、保護者には
 * ちぐはぐに映る。ブロック解除・機種変更などで再追加した保護者はここに来る。
 *
 * ⚠️ **初回はここを通らない**。保護者は「連携ボタン → LINEログイン
 * （bot_prompt=aggressive）→ 友だち追加 → follow → その後に連携成立」の順で、
 * follow の時点ではまだ `tsudumonRole` が付いていないため。初回の受け皿は
 * `tsudumonParentLink` が連携成功時に送る push（`pushParentLinked`）が担う。
 */
/** export はプレビュー用。挙動は変わらない。 */
export function buildTsudumonParentFollowText(): string {
  return [
    'つづもんの公式LINEへの登録、ありがとうございます。',
    '',
    'お子さまの学習の記録（学習した日・時間・進んだ単元・正答率）は、こちらからご覧いただけます。',
    'https://tsudumon.jp/parents/dashboard/',
    '',
    'お支払い方法の変更・解約も、同じページからいつでもお手続きいただけます。',
    '',
    'なお、お子さまがつづ先生（AI）に送ったトークの内容や、まちがえた問題は表示されません。安心して質問できる場所であることを、続けられる条件と考えているためです。',
    '',
    'ご不明な点は、このトークにそのままお書きください。',
  ].join('\n');
}

/**
 * つづもんBotの友だち追加。
 *
 * 書き込むのは tsudumonFollowed / tsudumonFollowedAt / tsudumonBlockedAt=null の
 * みで、`blocked` / `onboardingState`（一問一答が使うフィールド）には一切触れない。
 * tsudumonFollowedAt は初回追加日時として記録するため、既存値があれば上書きしない
 * （users/{uid} を1回読み、未設定のときだけ書き込みフィールドに含める）。
 */
export async function handleTsudumonFollow(
  client: messagingApi.MessagingApiClient,
  event: TsudumonFollowEvent
): Promise<void> {
  const uid = buildTsudumonUid(event);
  if (!uid) return;
  const userId = event.source!.userId!;
  const replyToken = event.replyToken;
  let isParent = false;

  try {
    const { db, FieldValue } = await getTsudumonDb();
    const userRef = db.doc(`users/${uid}`);
    const snap = await userRef.get();
    const alreadyFollowedAt = snap.data()?.tsudumonFollowedAt;
    // 連携ずみの保護者が再追加したときは、あいさつを保護者向けに切り替える
    // （この read は既に払っているので追加コストは無い）。
    isParent = snap.data()?.tsudumonRole === 'parent';

    await userRef.set(
      {
        provider: 'line',
        lineUserId: userId,
        tsudumonFollowed: true,
        tsudumonBlockedAt: null,
        ...(alreadyFollowedAt
          ? {}
          : { tsudumonFollowedAt: FieldValue.serverTimestamp() }),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      '[tsudumon/followHandlers] handleTsudumonFollow firestore write failed:',
      error
    );
  }

  // 未体験フォロー（2日後・7日後）の予定表を作る。体験・登録した人には
  // tsudumonLifecycle 側の判定で送られない。既存の followedAt は上書きしない。
  try {
    const { ensureTsudumonFollowUp } = await import('../tsudumonLifecycle');
    await ensureTsudumonFollowUp(uid, userId);
  } catch (error) {
    console.error(
      '[tsudumon/followHandlers] ensureTsudumonFollowUp failed:',
      error
    );
  }

  if (!replyToken) {
    console.warn('[tsudumon/followHandlers] follow event without replyToken');
    return;
  }

  try {
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: 'text',
          text: isParent
            ? buildTsudumonParentFollowText()
            : buildTsudumonFollowText(),
        },
      ],
    });
  } catch (error) {
    console.error(
      '[tsudumon/followHandlers] handleTsudumonFollow reply failed:',
      error
    );
  }
}

/**
 * つづもんBotのブロック（unfollow）。
 *
 * `tsudumonFollowed=false` / `tsudumonBlockedAt` のみ書く。一問一答側の
 * `blocked` は変更しないため、つづもんをブロックしても一問一答の毎日配信は
 * 影響を受けない（design.md「ブロック」節）。unfollow に replyToken は付かない
 * ため reply/push は行わない。
 */
export async function handleTsudumonUnfollow(
  event: TsudumonFollowEvent
): Promise<void> {
  const uid = buildTsudumonUid(event);
  if (!uid) return;

  try {
    const { db, FieldValue } = await getTsudumonDb();
    await db.doc(`users/${uid}`).set(
      {
        tsudumonFollowed: false,
        tsudumonBlockedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log(
      `[tsudumon/followHandlers] handleTsudumonUnfollow: marked blocked uid=${uid}`
    );
  } catch (error) {
    console.error(
      '[tsudumon/followHandlers] handleTsudumonUnfollow firestore write failed:',
      error
    );
  }
}

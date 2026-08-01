/**
 * つづもん「今日の1単元」日次配信（**毎正時に起動し、各自の設定時刻の人にだけ送る**）。
 *
 * LPの中核の約束「今日やることが、LINEに届く」の実装。**つづもんBotから**送る
 * （一問一答＝別チャネル・別枠には一切影響しない）。
 *
 * 設計: pdf-workbook/docs/つづもん-メッセージ設計.md §3（C-3）
 *
 * 第1段階の割り当てロジック:
 *   サーバ側にはWeb教材の進捗が無い（`tzmwb-*` / `tzmref-*` は端末の localStorage）。
 *   そこで `tsudumonDaily/{uid}.cursor` を持ち、**カリキュラム順に1単元ずつ**送って
 *   毎回 +1 する。19単元を1周したら先頭へ戻る（復習として自然に2周目に入る）。
 *   LINE経由の演習は `answers`（source:'workbook'）に残るので、ニガテ優先の
 *   出し分けは記録が溜まってからの第2段階とする。
 *
 * 送らない条件（安全側）:
 *   - `active !== true`（解約・失効時に false にする）
 *   - `users/{uid}.tsudumonBlockedAt` あり（つづもんBotをブロック）
 *   - `evaluateTsudumonAccess(...) !== 'ok'`（期限切れ）→ その場で active=false に落とす
 *   - `tsudumon.source === 'trial'`（体験中は tsudumonTrialReminder が担当。二重送信しない）
 *   - 同じJST暦日に送信済み（`lastSentAt`）
 *
 * read 規律: `tsudumonDaily` を `where(active).limit(500)` で引き、対象1人につき
 *   `users/{uid}` を1件だけ読む（コレクション全件走査はしない）。
 */
import * as functions from 'firebase-functions/v1';

import { recordPushDelivery } from './deliveryStats';
import { evaluateTsudumonAccess } from './tsudumonCore';
import { getTsudumonLineClient } from './tsudumon/client';
import {
  DEFAULT_WEEKDAY_HOUR,
  DEFAULT_WEEKEND_HOUR,
  isDayEnabled,
  isWeekendJst,
  resolveDays,
} from './tsudumonSchedule';
import { unitsNeedingReview } from './tsudumonProgressCore';
import {
  buildReviewNudge,
  dueReviewUnits,
  markPrompted,
  type ReviewState,
} from './tsudumonReviewCore';
import {
  pickDailyUnit,
  pickReasonLead,
  type TsudumonExam,
} from './tsudumonExamCore';
import {
  entranceReasonLead,
  pickEntranceUnit,
  resolveEffectiveMode,
} from './tsudumonModeCore';
import {
  TSUDUMON_UNITS,
  cursorForGrade,
  referenceUrl,
  unitAtCursor,
  workbookUrl,
} from './tsudumonUnits';

/** 1回の実行で処理する上限（配信枠と実行時間の保険）。 */
const MAX_PER_RUN = 500;

/** 配信の曜日・時刻を変えるページ（初回配信にだけ添える）。 */
const SETTINGS_URL = 'https://tsudumon.jp/settings/';

/** JST の暦日 'YYYY-MM-DD'。同日二重送信の判定に使う。 */
export function jstDateKey(date: Date): string {
  return new Date(date.getTime() + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
}

/** 章番号 → 単元名（カッコなし）。間隔反復の文面で使う。 */
function unitTitleOf(no: string): string {
  return TSUDUMON_UNITS.find((x) => x.no === no)?.title ?? `第${no}章`;
}

/** 章番号から「「武士と鎌倉幕府」」のような表示名を作る。 */
function unitLabel(no: string): string {
  const u = TSUDUMON_UNITS.find((x) => x.no === no);
  return u ? `「${u.title}」` : `第${no}章`;
}

/** JST の「時」（0〜23）。どの時間帯の人に送るかの判定に使う。 */
export function jstHour(date: Date): number {
  return new Date(date.getTime() + 9 * 60 * 60 * 1000).getUTCHours();
}

/**
 * 書き出しのバリエーション。`[曜日][カーソルの偶奇]` の2次元で **14通り**。
 *
 * 以前は曜日ごとの1文だけで、しかも7つ中4つが同一文字列（「きょうの1単元です📖」）
 * だった＝**実質4パターン**で、毎日ほぼ同じ通知が並ぶ。読み飛ばされる文面は
 * 開封率がそのまま落ちるので、単元が一巡（19日）しても同じ組み合わせに
 * ならないよう、カーソルでもう1段ずらす。
 *
 * 文体は `docs/message-copy-guidelines.md` §2「タメ口やわらか」に合わせる
 * （敬体が許されるのは購入・ライセンス・料金の案内のみ）。
 */
const OPENERS: readonly (readonly [string, string])[] = [
  [
    '日曜だ。ゆっくりでいいよ、きょうの1単元',
    '休みの日こそ、10分だけやっとこう',
  ],
  ['今週もスタート。まずはここから', '月曜。とりあえず1単元だけいこう'],
  ['きょうの1単元、いってみよう', '火曜。サクッと1単元'],
  ['折り返しの水曜。ここまで来たね', '水曜。あと半分、いけるいける'],
  ['あとちょっとで週末。きょうのぶん', '木曜。1単元だけ、いこう'],
  ['金曜！週末の前に、ここだけ', '週末まであと少し。きょうの1単元'],
  ['土曜。気楽に1単元いこう', 'きょうの1単元。無理しない範囲でね'],
];

/** 見直しの一行（間隔反復 or 「間違いが残っている章」）。 */
interface DailyReview {
  unit: string;
  wrong: number;
  text?: string;
}

/** 文面（テキスト）とカード（Flex）で共通の「その日の中身」。 */
interface DailyUnitParts {
  unit: (typeof TSUDUMON_UNITS)[number];
  /** 書き出し。テスト前などの `lead` があればそれを優先する */
  opener: string;
  /** 出す価値のある見直し（今日の単元と重複していたら undefined） */
  review?: { unitNo: string; text: string };
}

/**
 * その日に見せる中身を1か所で決める。
 *
 * テキストとFlexで**別々に単元を選ばせない**ためのもの。片方だけ直して
 * 「カードには第8章、通知文には第9章」がずれて出る事故を型で防ぐ。
 */
function resolveDailyUnitParts(
  cursor: number,
  date: Date,
  review?: DailyReview,
  unitNo?: string,
  lead?: string
): DailyUnitParts {
  const unit = unitNo
    ? (TSUDUMON_UNITS.find((u) => u.no === unitNo) ?? unitAtCursor(cursor))
    : unitAtCursor(cursor);
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const variant = Math.abs(Math.trunc(cursor)) % 2;
  return {
    unit,
    opener: lead || OPENERS[jst.getUTCDay()][variant],
    review:
      review && review.unit !== unit.no
        ? {
            unitNo: review.unit,
            text:
              review.text ??
              `📝 ${unitLabel(review.unit)}に、まちがえたままの問題が${review.wrong}問のこっているよ。`,
          }
        : undefined,
  };
}

/**
 * 配信本文（テキスト版）。
 *
 * ⚠️ 通常の配信は `buildDailyUnitFlex` の**カード**で送る。こちらは
 * Flex の送信が失敗したときのフォールバック（＝行き止まりを作らない保険）。
 * 文面の正はカード側なので、片方だけ直さないこと。
 */
export function buildDailyUnitMessage(
  cursor: number,
  date: Date,
  /**
   * 見直しの一行。間隔反復（3日後・1週間後・2週間後）で「いま声をかけるべき」と
   * 判定された単元があればその文面、無ければ従来どおり「間違いが残っている章」。
   */
  review?: DailyReview,
  /** 出す章を明示する（テスト範囲・復習優先の選定結果）。未指定はカーソル順 */
  unitNo?: string,
  /** なぜこの章なのかの枕（テストまであと◯日 等） */
  lead?: string,
  /**
   * 初回配信か。初回だけ「届く曜日・時間は変えられる」を添える。
   * 毎回入れると邪魔なので1回だけ——**通知がうるさいと感じた人の逃げ道が
   * 見つからないと、設定ではなくブロックが選ばれる**ため、最初に見せておく。
   */
  firstTime?: boolean
): string {
  const parts = resolveDailyUnitParts(cursor, date, review, unitNo, lead);
  const { unit } = parts;
  return [
    parts.opener,
    '',
    `📖【${unit.grade}・${unit.no}】${unit.title}`,
    // 目次の写し（subtitle）ではなく「きょうはこういう話」の1行を見せる。
    // 「幕藩体制の確立／江戸幕府成立〜天保の改革」だけでは中身が想像できず、
    // リンクを開く理由にならない（tsudumonUnits.hook のコメント参照）。
    unit.hook,
    '',
    '▶ 参考書で確認',
    referenceUrl(unit.no),
    '',
    '▶ 問題を解く',
    workbookUrl(unit.no),
    '',
    '15分だけでも十分。「ここわからん」ってそのまま送ってくれたら、わたしが答えるよ💡',
    // 実データにもとづく見直しの提案（間違えたままの問題が残っている章だけ）
    ...(parts.review
      ? ['', parts.review.text, workbookUrl(parts.review.unitNo)]
      : []),
    ...(firstTime
      ? [
          '',
          '⏰ 届く曜日・時間は自分で変えられるよ（このトークに「平日だけにして」と送ってもOK）',
          SETTINGS_URL,
        ]
      : []),
  ].join('\n');
}

/** Flex の配色。`tsudumonParentCard.ts` と揃える（つづもんのカードは全部この色）。 */
const BRAND = '#b45309';
const INK = '#33291f';
const MUTED = '#8a7a63';

/**
 * 配信カード（Flex）。**日次配信の見た目の正本。**
 *
 * なぜテキストをやめてカードにしたか（ユーザー指摘 2026-08-01「見た目から見やすく」）:
 *   テキストで教材URLを2本並べると、LINEが**URLプレビューを2枚**下にぶら下げる。
 *   本文より大きい面積のカードが2つ積まれて、肝心の「今日はここ」が埋もれていた。
 *   Flex にすると URL は uri アクションに隠れる＝**プレビューが1枚も出ない**ので、
 *   通知1件の縦の長さがおよそ半分になり、タップ先も曖昧さなくボタン2つに絞れる。
 *
 * 情報の並びにも意味がある:
 *   ① 枕（小さく・軽く）→ ② 学年と章（バッジ）→ ③ **単元名を主役の大きさで**
 *   → ④ ツカミ → ⑤ 見直し（あれば・別ブロック）→ ⑥ ボタン
 *   ③④が読めれば「今日なにをやるか」が伝わる。①は読み飛ばして構わない情報なので上に小さく置く。
 *
 * 1通で完結させること（messages 配列に足すとその数だけ配信枠を消費する）。
 */
export function buildDailyUnitFlex(
  cursor: number,
  date: Date,
  review?: DailyReview,
  unitNo?: string,
  lead?: string,
  firstTime?: boolean
): Record<string, unknown> {
  const parts = resolveDailyUnitParts(cursor, date, review, unitNo, lead);
  const { unit } = parts;
  const text = (t: string, opts: Record<string, unknown> = {}) => ({
    type: 'text',
    text: t,
    wrap: true,
    ...opts,
  });

  return {
    type: 'flex',
    // 通知とトーク一覧に出る1行。ここが「きょうの1単元です」だけだと、
    // 開かないと何の単元か分からない＝開かれない。単元名まで入れる。
    altText: `きょうの1単元｜${unit.grade}・第${unit.no}章 ${unit.title}`,
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '18px',
        contents: [
          // ① 枕
          text(parts.opener, { size: 'xs', color: MUTED }),
          // ② 学年・章のバッジ。horizontal + filler で幅を中身ぶんに留める
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'md',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                flex: 0,
                backgroundColor: '#fef3c7',
                cornerRadius: '4px',
                paddingAll: '5px',
                paddingStart: '10px',
                paddingEnd: '10px',
                contents: [
                  text(`${unit.grade}・第${unit.no}章`, {
                    size: 'xxs',
                    weight: 'bold',
                    color: BRAND,
                  }),
                ],
              },
              { type: 'filler' },
            ],
          },
          // ③ 主役
          text(unit.title, {
            size: 'xl',
            weight: 'bold',
            color: INK,
            margin: 'md',
          }),
          // ④ ツカミ
          text(unit.hook, { size: 'sm', color: MUTED, margin: 'sm' }),
          // ⑤ 見直し（あるときだけ）。今日のぶんと混ざらないよう別ブロックにする。
          //
          // ⚠️ ボタンは**このブロックの中**に置く（ユーザー指摘 2026-08-01）。
          // フッターに3本目として並べると、説明文（どの単元の話か）から離れて
          // 「何に戻るのか分からない」ボタンになる。すぐ上の文が単元名を言って
          // いる位置に置けば、ラベルは「もう一度解く」だけで意味が通る。
          // フッターを主導線の2択に保つ意味でもこちらが正しい。
          ...(parts.review
            ? [
                { type: 'separator', margin: 'lg' },
                {
                  type: 'box',
                  layout: 'vertical',
                  margin: 'lg',
                  backgroundColor: '#fffbeb',
                  cornerRadius: '8px',
                  paddingAll: '12px',
                  contents: [
                    text(parts.review.text, { size: 'xs', color: '#92400e' }),
                    {
                      type: 'button',
                      style: 'link',
                      color: '#92400e',
                      height: 'sm',
                      action: {
                        type: 'uri',
                        label: 'もう一度解く',
                        uri: workbookUrl(parts.review.unitNo),
                      },
                    },
                  ],
                },
              ]
            : []),
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        paddingAll: '18px',
        paddingTop: 'none',
        contents: [
          // ⚠️ 主導線は**この2つだけ**に保つ（ユーザー指摘 2026-08-01）。
          // ラベルは行き先そのものの名前にする。「まずは読む」「そのまま解く」は
          // 動作しか言っておらず、押した先が参考書なのか問題集なのか分からない。
          {
            type: 'button',
            style: 'primary',
            color: BRAND,
            height: 'sm',
            action: {
              type: 'uri',
              label: '参考書で確認',
              uri: referenceUrl(unit.no),
            },
          },
          {
            type: 'button',
            style: 'secondary',
            height: 'sm',
            action: {
              type: 'uri',
              label: '問題を解く',
              uri: workbookUrl(unit.no),
            },
          },
          text(
            '15分だけでも十分。わからないところは、このトークにそのまま送ってね💡',
            {
              size: 'xxs',
              color: MUTED,
              margin: 'md',
            }
          ),
          // 初回だけ。通知がうるさいと感じた人の逃げ道を、ブロックより先に見せる
          ...(firstTime
            ? [
                text('⏰ 届く曜日・時間を変える', {
                  size: 'xxs',
                  color: BRAND,
                  margin: 'sm',
                  action: { type: 'uri', label: '設定', uri: SETTINGS_URL },
                }),
              ]
            : []),
        ],
      },
    },
  };
}

/**
 * 日次配信の予定表を作る／更新する。ライセンスが有効になった時点で呼ぶ
 * （Stripe決済完了・ライセンスコード有効化）。体験（trial）では作らない。
 *
 * @param grade 開始学年（'中1' 等）。分かるときだけ渡す。未指定は先頭（中1）から。
 */
export async function ensureTsudumonDaily(
  uid: string,
  grade?: string | null
): Promise<void> {
  const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : '';
  if (!lineUserId) return;
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();

    // 保護者アカウントは「今日の1単元」を受け取る側ではない。予定表を作らない
    // ＝配信対象にしない（保護者に学習の催促が届くのは筋が違う）。
    // 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md §4-6
    const userSnap = await db.doc(`users/${uid}`).get();
    if (userSnap.data()?.tsudumonRole === 'parent') {
      console.log(`[tsudumonDaily] skip ensure for parent uid=${uid}`);
      return;
    }

    const ref = db.doc(`tsudumonDaily/${uid}`);
    const snap = await ref.get();
    const cur = snap.data() ?? {};
    // 再開（解約→再登録）のときは cursor を引き継ぎ、続きから届くようにする。
    const hasCursor = typeof cur.cursor === 'number';
    // 配信時刻はユーザー設定。既に選んでいれば絶対に上書きしない（既定値で戻さない）。
    const hasWeekday = typeof cur.weekdayHour === 'number';
    const hasWeekend = typeof cur.weekendHour === 'number';
    await ref.set(
      {
        lineUserId,
        active: true,
        ...(hasCursor ? {} : { cursor: cursorForGrade(grade) }),
        ...(hasWeekday ? {} : { weekdayHour: DEFAULT_WEEKDAY_HOUR }),
        ...(hasWeekend ? {} : { weekendHour: DEFAULT_WEEKEND_HOUR }),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[tsudumonDailyUnit] ensureTsudumonDaily failed:', error);
  }
}

/** 配信を止める（解約・失効時）。ドキュメントは消さずに cursor を残す。 */
export async function stopTsudumonDaily(uid: string): Promise<void> {
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    await getFirestore()
      .doc(`tsudumonDaily/${uid}`)
      .set(
        { active: false, updatedAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
  } catch (error) {
    console.error('[tsudumonDailyUnit] stopTsudumonDaily failed:', error);
  }
}

export const tsudumonDailyUnit = functions
  .region('asia-northeast1')
  // 毎正時に起動し、「いまの時刻を配信時刻に選んでいる人」だけに送る。
  // 選択肢は tsudumonSchedule.TSUDUMON_HOUR_CHOICES（朝6時〜夜9時）。
  .pubsub.schedule('0 * * * *')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    const startedAt = Date.now();
    console.log('[tsudumonDailyUnit] start');

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();

    let lineClient;
    try {
      lineClient = await getTsudumonLineClient();
    } catch (error) {
      console.error(
        '[tsudumonDailyUnit] getTsudumonLineClient failed; abort:',
        error
      );
      return;
    }

    const now = new Date();
    const today = jstDateKey(now);
    const hour = jstHour(now);
    // 平日と土日で設定が別なので、その日に見るフィールドを切り替える。
    // （どちらか一方だけを引くので、複合インデックスは active × 各フィールドの2本）
    const hourField = isWeekendJst(now) ? 'weekendHour' : 'weekdayHour';

    const snap = await db
      .collection('tsudumonDaily')
      .where('active', '==', true)
      .where(hourField, '==', hour)
      .limit(MAX_PER_RUN)
      .get();

    if (snap.empty) {
      console.log(
        `[tsudumonDailyUnit] no subscribers for ${hourField}=${hour} (JST)`
      );
      return;
    }

    let sent = 0;
    let skipped = 0;
    let deactivated = 0;
    let failed = 0;

    for (const doc of snap.docs) {
      const uid = doc.id;
      const data = doc.data() as Record<string, unknown>;
      const lineUserId =
        typeof data.lineUserId === 'string' && data.lineUserId
          ? data.lineUserId
          : uid.startsWith('line:')
            ? uid.slice('line:'.length)
            : '';
      if (!lineUserId) {
        skipped++;
        continue;
      }
      if (data.lastSentDate === today) {
        skipped++;
        continue;
      }
      // ユーザーが選んだ曜日（例: 平日だけ・月水金・毎日）。既定は毎日。
      // 旧データ（frequency プリセット）も resolveDays が読み替える。
      if (!isDayEnabled(resolveDays(data), now)) {
        skipped++;
        continue;
      }
      // 通数削減＋体験の自然さ（tsudumonSessions を1 read）:
      //  ① **今日すでに学習した人には送らない**。勉強し終えた直後に
      //     「今日の1単元です」と催促するのは間が抜けているし、枠の無駄。
      //  ② **学習系pushは1日1通が上限**（おつかれさま等と合わせて）。
      try {
        const sessionSnap = await db.doc(`tsudumonSessions/${uid}`).get();
        const sessionData = sessionSnap.data() ?? {};
        const lastSyncAt = sessionData.lastSyncAt;
        if (
          typeof lastSyncAt === 'number' &&
          jstDateKey(new Date(lastSyncAt)) === today
        ) {
          skipped++;
          continue;
        }
      } catch (error) {
        console.error(
          `[tsudumonDailyUnit] session read failed uid=${uid}:`,
          error
        );
      }

      // ライセンスとブロック状態を users/{uid} 1 read で確認する。
      let userData: Record<string, unknown> = {};
      try {
        userData = (await db.doc(`users/${uid}`).get()).data() ?? {};
      } catch (error) {
        console.error(
          `[tsudumonDailyUnit] users read failed uid=${uid}:`,
          error
        );
        skipped++;
        continue;
      }
      if (userData.tsudumonBlockedAt) {
        skipped++;
        continue;
      }
      // 保護者アカウントには学習の催促を送らない。予定表は作らない設計だが、
      // 子として使っていた人が後から保護者になる経路があるので、送信側でも落とす
      // （この read は既に上で払っているので追加コストは無い）。
      if (userData.tsudumonRole === 'parent') {
        await doc.ref.set(
          { active: false, updatedAt: FieldValue.serverTimestamp() },
          { merge: true }
        );
        skipped++;
        continue;
      }
      const tsudumon = userData.tsudumon as Record<string, unknown> | undefined;
      if (evaluateTsudumonAccess(tsudumon, null, now.getTime()) !== 'ok') {
        // 期限切れ。以降は走査対象から外す（Win-back は tsudumonLifecycle が担当）。
        await doc.ref.set(
          { active: false, updatedAt: FieldValue.serverTimestamp() },
          { merge: true }
        );
        deactivated++;
        continue;
      }
      // ⚠️ 体験中（trial）も**送る**（2026-07-27 変更）。
      // 商品の中核の約束は「今日やることが毎日LINEに届く」こと。体験の3日間で
      // それを一度も受け取らないまま終わると、いちばんの価値が伝わらないまま
      // 離脱する。二重送信を避けるため、`tsudumonTrialReminder` の day1（汎用の
      // 使い方メッセージ）は廃止した。体験の残り日数・継続の案内は引き続き
      // tsudumonTrialReminder（lastday / expired）が担当する。

      const cursor = typeof data.cursor === 'number' ? data.cursor : 0;
      const exam = userData.tsudumonExam as TsudumonExam | undefined;
      // 学習モード。中1・中2＝定期テスト／中3＝両立を学年から自動判定し、
      // 両立はテスト14日前だけ定期テスト対策に切り替わる（tsudumonModeCore）。
      const mode = resolveEffectiveMode({
        setting: userData.tsudumonMode,
        grade: userData.grade,
        exam,
        nowMs: now.getTime(),
      });
      // 入試モード = 全19単元を弱点から周回 / 定期テスト = 範囲の中から。
      const picked =
        mode === 'entrance'
          ? pickEntranceUnit({
              progress: userData.tsudumonProgress as never,
              cursor,
              nowMs: now.getTime(),
            })
          : pickDailyUnit({
              exam,
              progress: userData.tsudumonProgress as never,
              cursor,
              nowMs: now.getTime(),
            });
      const lead =
        mode === 'entrance'
          ? entranceReasonLead(picked.reason as never)
          : pickReasonLead(picked.reason as never, exam, now.getTime());
      // 見直しの一行。**間隔反復（3日後・1週間後・2週間後）を優先**する。
      // push は増やさず、今日の1単元に相乗りさせるのが要点（1日2通の約束を守る）。
      // `tsudumonReview/{uid}` を1 read（状態が無ければ従来の「間違いが残っている章」）。
      let review: { unit: string; wrong: number; text?: string } | undefined;
      let promptedUnit: string | undefined;
      try {
        const reviewSnap = await db.doc(`tsudumonReview/${uid}`).get();
        const due = dueReviewUnits(
          userData.tsudumonProgress as never,
          reviewSnap.data() as ReviewState | undefined,
          now.getTime()
        )[0];
        if (due) {
          review = {
            unit: due.unitNo,
            wrong: due.wrong,
            text: buildReviewNudge(due, unitTitleOf(due.unitNo)),
          };
          promptedUnit = due.unitNo;
        }
      } catch (error) {
        console.error(
          `[tsudumonDailyUnit] review read failed uid=${uid}:`,
          error
        );
      }
      if (!review) {
        review = unitsNeedingReview(userData.tsudumonProgress as never, 1)[0];
      }
      // 初回配信（まだ一度も送っていない）だけ設定の案内を添える。
      const firstTime = typeof data.lastSentDate !== 'string';
      // ⚠️ 「終わったよ！」ボタン（クイックリプライ）はここに置かない（ユーザー指摘 2026-07-27）。
      // クイックリプライは**送った瞬間から出る**ので、まだ何もしていない段階で
      // 「終わったよ！」が並ぶのは不自然。LINE の仕様上、あとからボタンを
      // 足したり出し分けたりはできない（送信時に固定される）。
      // 報告は「終わったよ」と**打てば**受け付ける（webhook のテキスト分岐）。
      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [
            buildDailyUnitFlex(
              cursor,
              now,
              review,
              picked.unitNo,
              lead,
              firstTime
            ),
          ],
        } as never);
        await recordPushDelivery('tsudumonDaily');
      } catch (error) {
        // Flex は構造が1か所でも不正だと 400 で丸ごと落ちる。**その日の1通が
        // 消えるのがいちばん損**なので、テキストで必ず配り直す（届いていない
        // ＝配信枠も消費していないので、ここで1通ぶん使い直して構わない）。
        console.error(
          `[tsudumonDailyUnit] flex push failed uid=${uid}; falling back to text:`,
          error
        );
        try {
          await lineClient.pushMessage({
            to: lineUserId,
            messages: [
              {
                type: 'text',
                text: buildDailyUnitMessage(
                  cursor,
                  now,
                  review,
                  picked.unitNo,
                  lead,
                  firstTime
                ),
              },
            ],
          } as never);
          await recordPushDelivery('tsudumonDaily');
        } catch (fallbackError) {
          console.error(
            `[tsudumonDailyUnit] text fallback failed uid=${uid}:`,
            fallbackError
          );
          failed++;
          continue;
        }
      }

      try {
        await doc.ref.set(
          {
            cursor: (cursor + 1) % TSUDUMON_UNITS.length,
            lastSentDate: today,
            lastSentAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        // push は成功しているのでログのみ（最悪、翌日に同じ単元が届く）
        console.error(`[tsudumonDailyUnit] cursor 更新失敗 uid=${uid}:`, error);
      }
      // 間隔反復の段階を進める（同じ単元を毎日催促しないため）。
      if (promptedUnit) {
        try {
          const ref = db.doc(`tsudumonReview/${uid}`);
          const cur = (await ref.get()).data() as ReviewState | undefined;
          await ref.set(markPrompted(cur, promptedUnit, now.getTime()), {
            merge: true,
          });
        } catch (error) {
          console.error(
            `[tsudumonDailyUnit] review 更新失敗 uid=${uid}:`,
            error
          );
        }
      }
      sent++;
    }

    console.log(
      `[tsudumonDailyUnit] done(${hourField}=${hour}): sent=${sent}, ` +
        `skipped=${skipped}, deactivated=${deactivated}, failed=${failed}, ` +
        `total=${snap.size}, elapsed=${Date.now() - startedAt}ms`
    );
  });

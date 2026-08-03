/**
 * つづもんの「体験検討中」「利用終了後」のフォロー配信（JST 19:30・つづもんBotから）。
 *
 * 設計: pdf-workbook/docs/つづもん-メッセージ設計.md（A-5 / C-6）
 *
 * 扱う2種類:
 *   A-5 未体験フォロー … 友だち追加から **2日後 / 7日後** に1通ずつ。
 *                        体験も登録もしていない人だけ。各1回きり。
 *   C-6 期限終了フォロー … 解約・失効の**翌日**に1通。無料で残る範囲と戻り道を伝える。
 *
 * 走査は `tsudumonFollowUps/{uid}` のレンジクエリ＋`limit`（`users` 全件は読まない）。
 * 予定表の作成は followHandlers（友だち追加時）と tsudumonStripe（解約・失効時）が行う。
 */
import * as functions from 'firebase-functions/v1';

import { recordPushDelivery } from './deliveryStats';
import { evaluateTsudumonAccess } from './tsudumonCore';
import { getTsudumonLineClient } from './tsudumon/client';

const LP_URL = 'https://tsudumon.jp/';
const TRIAL_URL = 'https://tsudumon.jp/start/';
const SUB_URL = 'https://tsudumon.jp/account/?do=subscribe';
/** 常時無料の単元（律令国家と奈良時代＝第4章）。 */
const FREE_UNIT_URL = 'https://tsudumon.jp/wb/04/';

const MAX_PER_RUN = 500;
/** 走査レンジ（友だち追加＝直近8日、期限終了＝直近3日）。 */
const FOLLOW_RANGE_MS = 8 * 24 * 60 * 60 * 1000;
const WINBACK_RANGE_MS = 3 * 24 * 60 * 60 * 1000;

/** JST 暦日の差（b の暦日 − a の暦日）。 */
export function daysBetweenJst(a: Date, b: Date): number {
  const toJstDay = (d: Date) =>
    Math.floor((d.getTime() + 9 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000));
  return toJstDay(b) - toJstDay(a);
}

/** A-5（1通目・友だち追加から2日後）。押しつけず、無料の入口を1つ差し出す。 */
export function introDay2Message(): string {
  return [
    // ⚠️ 読み手を保護者と決めつけない（2026-08-02）。
    // このBotを友だち追加するのは LP のログイン導線を踏んだ人＝**多くは中学生本人**。
    // 友だち追加直後のあいさつ（followHandlers）は本人向けなのに、その2日後に
    // 「お子さまの反応を見てみてください」が届くと、相手が入れ替わって見える。
    // どちらが読んでも通じる書き方にする。
    'つづもんに登録してくれて、ありがとうございます。',
    'まだ教材を開いていないようなので、いちどだけご案内させてください。',
    '',
    '「律令国家と奈良時代」の単元は、登録なしでもぜんぶ読めます。',
    FREE_UNIT_URL,
    '',
    'ためしに1問だけ解いてみてください。',
    '合いそうだったら、3日間は全19単元を無料で使えます。お支払いの登録はいりません。',
    TRIAL_URL,
  ].join('\n');
}

/** A-5（2通目・友だち追加から7日後）。最後の1通。以降は送らない。 */
export function introDay7Message(): string {
  return [
    'つづもんからのご案内は、これで最後にします。',
    '',
    'テスト前に「何をやればいいか分からない」となりがちな人のために、',
    'つづもんは中学歴史ぜんぶ（全19単元）を1つにまとめた教材です。',
    '',
    '3日間は無料でお試しいただけます。お支払いの登録はいりません。',
    TRIAL_URL,
    '',
    'くわしくはこちら → ' + LP_URL,
    '',
    '必要になったときに、いつでも戻ってきてください。',
  ].join('\n');
}

/** C-6（期限終了の翌日）。引き止めず、残るものと戻り道だけ伝える。 */
export function afterExpiryMessage(): string {
  return [
    'つづもんのご利用期間が終了しました。ありがとうございました。',
    '',
    '「律令国家と奈良時代」の単元と、各単元の最初のページは、これからも無料でお読みいただけます。',
    FREE_UNIT_URL,
    '',
    'またお使いになりたくなったら、いつでもこちらから再開できます（1,280円・税込／月）。',
    SUB_URL,
  ].join('\n');
}

type FollowKind = 'intro2' | 'intro7' | 'afterExpiry';

/**
 * 友だち追加時にフォロー予定を作る（handleTsudumonFollow から呼ぶ）。
 * 既存ドキュメントがあれば `followedAt` は上書きしない＝再追加で送り直さない。
 */
export async function ensureTsudumonFollowUp(
  uid: string,
  lineUserId: string
): Promise<void> {
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const ref = getFirestore().doc(`tsudumonFollowUps/${uid}`);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.followedAt) {
      await ref.set({ lineUserId }, { merge: true });
      return;
    }
    await ref.set(
      { lineUserId, followedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
  } catch (error) {
    console.error('[tsudumonLifecycle] ensureTsudumonFollowUp failed:', error);
  }
}

/**
 * 期限終了フォローを予約する（解約・サブスク削除時に呼ぶ）。
 * @param expiresAtMs 利用できる最終日時（猶予込み）。翌日に1通送る。
 */
export async function scheduleAfterExpiryFollowUp(
  uid: string,
  expiresAtMs: number
): Promise<void> {
  const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : '';
  if (!lineUserId || !Number.isFinite(expiresAtMs)) return;
  try {
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, Timestamp } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    await getFirestore()
      .doc(`tsudumonFollowUps/${uid}`)
      .set(
        {
          lineUserId,
          // 期限の翌日に送る。再登録されたら送信時のライセンス判定で自動的に抑止される。
          winbackAt: Timestamp.fromMillis(expiresAtMs + 24 * 60 * 60 * 1000),
          // 予約し直したら未送信に戻す（解約→再開→再解約でも1回ずつ送れる）
          sentAfterExpiry: false,
        },
        { merge: true }
      );
  } catch (error) {
    console.error(
      '[tsudumonLifecycle] scheduleAfterExpiryFollowUp failed:',
      error
    );
  }
}

export const tsudumonLifecycle = functions
  .region('asia-northeast1')
  .pubsub.schedule('30 19 * * *')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    const startedAt = Date.now();
    console.log('[tsudumonLifecycle] start');

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, Timestamp, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();

    let lineClient;
    try {
      lineClient = await getTsudumonLineClient();
    } catch (error) {
      console.error(
        '[tsudumonLifecycle] getTsudumonLineClient failed; abort:',
        error
      );
      return;
    }

    const now = new Date();
    const nowMs = now.getTime();
    const toDate = (v: unknown): Date | null => {
      const t = v as { toDate?: () => Date } | null | undefined;
      return t && typeof t.toDate === 'function' ? t.toDate() : null;
    };

    // 対象候補を2本のレンジクエリで集める（コレクション全件は読まない）。
    const [followSnap, winbackSnap] = await Promise.all([
      db
        .collection('tsudumonFollowUps')
        .where(
          'followedAt',
          '>=',
          Timestamp.fromMillis(nowMs - FOLLOW_RANGE_MS)
        )
        .limit(MAX_PER_RUN)
        .get(),
      db
        .collection('tsudumonFollowUps')
        .where(
          'winbackAt',
          '>=',
          Timestamp.fromMillis(nowMs - WINBACK_RANGE_MS)
        )
        .where('winbackAt', '<=', Timestamp.fromMillis(nowMs))
        .limit(MAX_PER_RUN)
        .get(),
    ]);

    // 同じ uid が両方に入ることがある（解約者が再度あいさつを受けた等）。
    // 1人1通に保つため、緊急度の高い期限終了フォローを優先して1件に畳む。
    const targets = new Map<
      string,
      {
        kind: FollowKind;
        ref: FirebaseFirestore.DocumentReference;
        lineUserId: string;
      }
    >();

    for (const doc of winbackSnap.docs) {
      const data = doc.data() as Record<string, unknown>;
      if (data.sentAfterExpiry) continue;
      const lineUserId =
        typeof data.lineUserId === 'string' ? data.lineUserId : '';
      if (!lineUserId) continue;
      targets.set(doc.id, { kind: 'afterExpiry', ref: doc.ref, lineUserId });
    }

    for (const doc of followSnap.docs) {
      if (targets.has(doc.id)) continue;
      const data = doc.data() as Record<string, unknown>;
      const followedAt = toDate(data.followedAt);
      const lineUserId =
        typeof data.lineUserId === 'string' ? data.lineUserId : '';
      if (!followedAt || !lineUserId) continue;
      const days = daysBetweenJst(followedAt, now);
      const sent = (data.sentIntro ?? {}) as Record<string, boolean>;
      // 実行が飛んでも拾えるよう「◯日以上」で判定し、送信済みフラグで重複を防ぐ。
      let kind: FollowKind | null = null;
      if (days >= 7 && !sent.day7) kind = 'intro7';
      else if (days >= 2 && days < 7 && !sent.day2) kind = 'intro2';
      if (!kind) continue;
      targets.set(doc.id, { kind, ref: doc.ref, lineUserId });
    }

    let sentIntro2 = 0;
    let sentIntro7 = 0;
    let sentExpiry = 0;
    let skipped = 0;
    let failed = 0;

    for (const [uid, t] of targets) {
      let userData: Record<string, unknown> = {};
      try {
        userData = (await db.doc(`users/${uid}`).get()).data() ?? {};
      } catch (error) {
        console.error(
          `[tsudumonLifecycle] users read failed uid=${uid}:`,
          error
        );
        skipped++;
        continue;
      }
      if (userData.tsudumonBlockedAt) {
        skipped++;
        continue;
      }
      const access = evaluateTsudumonAccess(userData.tsudumon, null, nowMs);
      if (access === 'ok') {
        // いま使えている人には、未体験フォローも期限終了フォローも送らない
        // （再登録済みの人に「終了しました」と送る事故を防ぐ）。
        skipped++;
        continue;
      }
      if (t.kind !== 'afterExpiry' && userData.tsudumonTrialUsedAt) {
        // 体験ずみの人は「まだ試していない方へ」の対象外。
        skipped++;
        continue;
      }

      const text =
        t.kind === 'intro2'
          ? introDay2Message()
          : t.kind === 'intro7'
            ? introDay7Message()
            : afterExpiryMessage();

      try {
        await lineClient.pushMessage({
          to: t.lineUserId,
          messages: [{ type: 'text', text }],
        });
        await recordPushDelivery(
          t.kind === 'afterExpiry'
            ? 'tsudumonAfterExpiry'
            : 'tsudumonIntroFollow'
        );
      } catch (error) {
        console.error(
          `[tsudumonLifecycle] push failed uid=${uid} kind=${t.kind}:`,
          error
        );
        failed++;
        continue;
      }

      try {
        await t.ref.set(
          t.kind === 'afterExpiry'
            ? { sentAfterExpiry: true, updatedAt: FieldValue.serverTimestamp() }
            : {
                sentIntro: { [t.kind === 'intro2' ? 'day2' : 'day7']: true },
                updatedAt: FieldValue.serverTimestamp(),
              },
          { merge: true }
        );
      } catch (error) {
        // push は成功しているのでログのみ
        console.error(`[tsudumonLifecycle] フラグ更新失敗 uid=${uid}:`, error);
      }

      if (t.kind === 'intro2') sentIntro2++;
      else if (t.kind === 'intro7') sentIntro7++;
      else sentExpiry++;
    }

    console.log(
      `[tsudumonLifecycle] done: intro2=${sentIntro2}, intro7=${sentIntro7}, ` +
        `afterExpiry=${sentExpiry}, skipped=${skipped}, failed=${failed}, ` +
        `candidates=${targets.size}, elapsed=${Date.now() - startedAt}ms`
    );
  });

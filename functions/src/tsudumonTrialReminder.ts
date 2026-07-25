/**
 * つづもん「3日間無料お試し」リマインド cron。
 *
 * 設計: pdf-workbook/.steering/20260724-tsudumon-flow-overhaul/design.md §5
 *
 *   - 毎日 JST 19:00 に発火。
 *   - `tsudumonTrials` を expiresAt レンジ（now-3日 〜 now+3日）で走査（体験者数ぶんの
 *     read のみ。users 全体は舐めない = Firestore read 規律）。
 *   - JST 暦日基準で 3 種の push を1回ずつ送る（`reminded` マップで既送管理）:
 *       day1     … 開始翌暦日: 使い方＋おすすめ単元
 *       lastday  … 期限前暦日: あす終了＋つづきの案内
 *       expired  … 期限切れ後最初の実行: `trial_expired` funnel 記録＋無料単元案内
 *
 * エラー戦略（expireTrialUsers / sendWinbackMessages 踏襲）:
 *   - getLineClient 失敗は abort。
 *   - 1 ユーザーの push 失敗は console.error して続行。
 *
 * push は配信枠を消費するため `recordPushDelivery('tsudumonTrial')` で deliveryStats に計上。
 */

import * as functions from 'firebase-functions/v1';

import { getLineClient } from './lineWebhook';
import { logServerFunnelEvent } from './funnelEvent';
import { recordPushDelivery } from './deliveryStats';
import { daysBetweenJst } from './userStatus';

const MAP_URL = 'https://www.chatstudy.jp/tsudumon/map/';
const LP_URL = 'https://www.chatstudy.jp/tsudumon/';

/** 走査するレンジ（expiresAt が now ± この幅に入る doc だけ読む）。 */
const RANGE_MS = 3 * 24 * 60 * 60 * 1000;

/** 開始翌日: 使い方＋おすすめ単元。 */
function day1Message(): string {
  return [
    'つづもんの無料体験、始まっています📚',
    '',
    '教材はLINEメニューの「教材を開く」からいつでも開けます。',
    'まずは「律令国家と奈良時代」など、テスト範囲に近い単元から解いてみてください。',
    '',
    '📖 全単元はこちら',
    MAP_URL,
  ].join('\n');
}

/** 期限前日: あす終了＋つづきの案内。 */
function lastDayMessage(): string {
  return [
    'つづもんの3日間無料体験は、あすで終了します⏰',
    '',
    'お子さまに合いそうでしたら、月額プランでそのまま全単元を続けられます',
    '（準備中の場合は公式LINEでご案内します）。',
    '',
    '▶ 教材を見る',
    MAP_URL,
  ].join('\n');
}

/** 期限切れ後最初の実行: 無料単元案内＋つづきの案内。 */
function expiredMessage(): string {
  return [
    'つづもんの無料体験は終了しました。3日間おつかれさまでした！',
    '',
    '「律令国家と奈良時代」の単元は、体験のあともずっと無料で使えます。',
    'つづきが気になったら、いつでものぞいてみてくださいね。',
    '',
    '▶ つづもんについて',
    LP_URL,
  ].join('\n');
}

type ReminderKind = 'day1' | 'lastday' | 'expired';

export const tsudumonTrialReminder = functions
  .region('asia-northeast1')
  .pubsub.schedule('0 19 * * *')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    const startedAt = Date.now();
    console.log('[tsudumonTrialReminder] start');

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, Timestamp } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    let lineClient;
    try {
      lineClient = await getLineClient();
    } catch (error) {
      console.error(
        '[tsudumonTrialReminder] getLineClient failed; abort:',
        error
      );
      return;
    }

    const now = new Date();
    const nowMs = now.getTime();

    // 体験者だけを expiresAt レンジで絞る（users 全体は読まない）。
    const snap = await db
      .collection('tsudumonTrials')
      .where('expiresAt', '>=', Timestamp.fromMillis(nowMs - RANGE_MS))
      .where('expiresAt', '<=', Timestamp.fromMillis(nowMs + RANGE_MS))
      .limit(500)
      .get();

    if (snap.empty) {
      console.log('[tsudumonTrialReminder] no trials in range');
      return;
    }

    const toDate = (v: unknown): Date | null => {
      const t = v as { toDate?: () => Date } | null | undefined;
      return t && typeof t.toDate === 'function' ? t.toDate() : null;
    };

    let day1 = 0;
    let lastday = 0;
    let expired = 0;
    let skipped = 0;
    let failed = 0;

    for (const doc of snap.docs) {
      const uid = doc.id;
      const data = doc.data() as Record<string, unknown>;
      const startedAtDate = toDate(data.startedAt);
      const expiresAtDate = toDate(data.expiresAt);
      const lineUserId =
        typeof data.lineUserId === 'string' && data.lineUserId
          ? data.lineUserId
          : uid.startsWith('line:')
            ? uid.slice('line:'.length)
            : '';
      const reminded = (data.reminded ?? {}) as Record<string, boolean>;

      if (!startedAtDate || !expiresAtDate || !lineUserId) {
        console.warn(
          `[tsudumonTrialReminder] 不正な trial doc、skip uid=${uid}`
        );
        skipped++;
        continue;
      }

      // JST 暦日基準で送るべき種別を1つ決める（緊急度順: 期限切れ→前日→翌日）。
      let kind: ReminderKind | null = null;
      if (nowMs >= expiresAtDate.getTime() && !reminded.expired) {
        kind = 'expired';
      } else if (
        daysBetweenJst(now, expiresAtDate) === 1 &&
        !reminded.lastday
      ) {
        kind = 'lastday';
      } else if (daysBetweenJst(startedAtDate, now) === 1 && !reminded.day1) {
        kind = 'day1';
      }

      if (!kind) {
        skipped++;
        continue;
      }

      const text =
        kind === 'day1'
          ? day1Message()
          : kind === 'lastday'
            ? lastDayMessage()
            : expiredMessage();

      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [{ type: 'text', text }],
        });
        await recordPushDelivery('tsudumonTrial');
      } catch (error) {
        console.error(
          `[tsudumonTrialReminder] push failed uid=${uid} kind=${kind}:`,
          error
        );
        failed++;
        continue;
      }

      try {
        await doc.ref.set({ reminded: { [kind]: true } }, { merge: true });
      } catch (error) {
        console.error(
          `[tsudumonTrialReminder] reminded 更新失敗 uid=${uid}:`,
          error
        );
        // push は成功しているのでログのみ
      }

      if (kind === 'expired') {
        await logServerFunnelEvent('trial_expired', uid);
        expired++;
      } else if (kind === 'lastday') {
        lastday++;
      } else {
        day1++;
      }
    }

    const elapsed = Date.now() - startedAt;
    console.log(
      `[tsudumonTrialReminder] done: day1=${day1}, lastday=${lastday}, ` +
        `expired=${expired}, skipped=${skipped}, failed=${failed}, ` +
        `total=${snap.size}, elapsed=${elapsed}ms`
    );
  });

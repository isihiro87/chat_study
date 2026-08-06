/**
 * つづもん「無料おためし」リマインド cron。
 *
 * ⚠️ 文面に日数（「3日間」など）を書かない。体験の長さは
 * `tsudumonCore.computeTsudumonTrialExpiresAtMs` が決めており、
 * キャンペーン中は8月15日までに伸びる。日数を決め打ちすると嘘になる。
 *
 * 設計: pdf-workbook/.steering/20260724-tsudumon-flow-overhaul/design.md §5
 *
 *   - 毎日 JST 19:00 に発火。
 *   - `tsudumonTrials` を expiresAt レンジ（now-3日 〜 now+3日）で走査（体験者数ぶんの
 *     read のみ。users 全体は舐めない = Firestore read 規律）。
 *   - JST 暦日基準で 3 種の push を1回ずつ送る（`reminded` マップで既送管理）:
 *       （day1 は廃止。体験中も tsudumonDailyUnit が「今日の1単元」を届ける）
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

import { TSUDUMON_PAID_FLOW_ENABLED } from './tsudumonPaidFlow';

import { getTsudumonLineClient } from './tsudumon/client';
import { logServerFunnelEvent } from './funnelEvent';
import { recordPushDelivery } from './deliveryStats';
import { daysBetweenJst } from './userStatus';
import { parentCardQuickReply } from './tsudumonParentCard';

const MAP_URL = 'https://tsudumon.jp/map/';
const LP_URL = 'https://tsudumon.jp/';
const SUB_URL = 'https://tsudumon.jp/account/?do=subscribe';

/** 走査するレンジ（expiresAt が now ± この幅に入る doc だけ読む）。 */
const RANGE_MS = 3 * 24 * 60 * 60 * 1000;

/**
 * 期限前日: あす終了＋つづきの案内。
 *
 * 中学生本人はカードを持っていないので、「自分で登録する」だけを出しても行き止まりになる。
 * **おうちの人に見せる導線を主にする**（下の quickReply）。
 * ⚠️ 新しい push は増やさない（配信枠）。既存の2通に quickReply で載せる。
 */
function lastDayMessage(): string {
  // ⚠️ 有料受付の停止（2026-08-06）以降、この文面から購入導線を外した。
  // 「あすで終了」だけ残すと、続ける方法が無いのに終わりだけ告げることになる。
  // 現在の体験ライセンスは失効させず延長したので、この経路は通常走らない。
  // 理由は tsudumonPaidFlow.ts。
  if (!TSUDUMON_PAID_FLOW_ENABLED) {
    return [
      'つづもんを使ってくれて、ありがとう！',
      '',
      'ここまでの取り組みは、そのまま記録に残っています。',
      'いまお使いのぶんは、このまま使えるようにしてあります。',
      '',
      '▶ 教材を見る',
      MAP_URL,
    ].join('\n');
  }
  return [
    'つづもんの無料おためしは、あすで終了します⏰',
    '',
    'ここまでの取り組みは、そのまま記録に残っています。',
    'つづけたいときは、おうちの人に見てもらうのがいちばん早いです。',
    'やった時間と問題数をまとめたページを、下のボタンから出せます。',
    '',
    '（見えるのは勉強の記録だけ。トークの内容は見えません）',
    '',
    '▶ 教材を見る',
    MAP_URL,
    '',
    '▶ 自分で続ける（1,280円・税込／月・いつでも解約OK）',
    SUB_URL,
  ].join('\n');
}

/** 期限切れ後最初の実行: 無料単元案内＋つづきの案内。 */
function expiredMessage(): string {
  if (!TSUDUMON_PAID_FLOW_ENABLED) {
    return [
      'つづもんを使ってくれて、ありがとう！',
      '',
      '「律令国家と奈良時代」の単元は、これからもずっと無料で使えます。',
      'いつでものぞいてみてくださいね。',
      '',
      '▶ 教材を見る',
      MAP_URL,
    ].join('\n');
  }
  return [
    'つづもんの無料おためしが終了しました。おつかれさまでした！',
    '',
    '「律令国家と奈良時代」の単元は、体験のあともずっと無料で使えます。',
    'つづきが気になったら、いつでものぞいてみてくださいね。',
    '',
    'つづけたいときは、下のボタンから「おうちの人に見せるページ」を出せます。',
    'やった時間と問題数がそのまま出るので、言葉で説明しなくて大丈夫です。',
    '',
    '▶ つづきをはじめる（1,280円・税込／月・いつでも解約OK）',
    SUB_URL,
    '',
    '▶ つづもんについて',
    LP_URL,
  ].join('\n');
}

/**
 * 体験終了を保護者に伝える1通。
 *
 * 子に送る文面（`expiredMessage`）とは役割が違う。子には「無料で残るもの」を伝え、
 * 保護者には**続けるかどうかの判断材料と入口**を渡す。
 * ⚠️ 学習の中身（まちがえた問題・トーク）は書かない。開示範囲は記録だけ。
 */
export function expiredParentMessage(): string {
  if (!TSUDUMON_PAID_FLOW_ENABLED) {
    return [
      'お子さまのつづもん 無料おためしが終了しました。ありがとうございました。',
      '',
      'これまでの取り組み（学習した日・時間・進んだ単元）は、下のページでご覧いただけます。',
      'https://tsudumon.jp/parents/dashboard/',
      '',
      'なお、つづもんの新規のお申し込みは、現在受け付けておりません。',
      'いまお使いのぶんは、そのままご利用いただけます。',
    ].join('\n');
  }
  return [
    'お子さまのつづもん 無料おためしが終了しました。ありがとうございました。',
    '',
    'これまでの取り組み（学習した日・時間・進んだ単元）は、下のページでご覧いただけます。',
    'つづけるかどうかは、そちらを見てからご判断ください。',
    'https://tsudumon.jp/parents/dashboard/',
    '',
    '体験のあとも「律令国家と奈良時代」の単元は、ずっと無料でお使いいただけます。',
  ].join('\n');
}

type ReminderKind = 'lastday' | 'expired';

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
      lineClient = await getTsudumonLineClient();
    } catch (error) {
      console.error(
        '[tsudumonTrialReminder] getTsudumonLineClient failed; abort:',
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
      }
      // ⚠️ day1（開始翌日の汎用「使い方」）は**廃止**（2026-07-27）。
      // 体験中も `tsudumonDailyUnit` が「今日の1単元」を届けるようにしたので、
      // 汎用の使い方メッセージを重ねると1日2通の枠を無駄に使う。
      // 開始直後の案内は `tsudumonActivate.pushTrialStarted` が担当する。

      if (!kind) {
        skipped++;
        continue;
      }

      // 配信除外判定は tsudumonBlockedAt（つづもんBotのブロック）のみを見る。
      // 一問一答の `blocked` は無関係（一問一答だけブロックした人にも送ってよい）。
      let userData: Record<string, unknown> | undefined;
      try {
        const userSnap = await db.doc(`users/${uid}`).get();
        userData = userSnap.data() as Record<string, unknown> | undefined;
        if (userData?.tsudumonBlockedAt) {
          skipped++;
          continue;
        }
      } catch (error) {
        console.error(
          `[tsudumonTrialReminder] tsudumonBlockedAt check failed uid=${uid}:`,
          error
        );
        // 判定できない場合は安全側（送らない）に倒さず、従来どおり送信を試みる。
      }

      const text = kind === 'lastday' ? lastDayMessage() : expiredMessage();

      try {
        await lineClient.pushMessage({
          to: lineUserId,
          // 「おうちの人に見せる」をワンタップで出せるようにする。postback なので
          // 押されたときの応答は reply＝配信枠ゼロ。
          messages: [
            { type: 'text', text, quickReply: parentCardQuickReply() },
          ],
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

      // 体験終了は、**連携ずみの保護者にも知らせる**（2026-08-02 追加）。
      // 中学生本人は決済できないので、期限切れを子にだけ伝えても手が止まる。
      // ダッシュボードを見ている保護者は、いちばん決済に近い相手なのに
      // これまで通知が届いていなかった。
      // 宛先は上で読んだ users/{uid} から引くので **追加の read はゼロ**。
      if (kind === 'expired' && userData) {
        try {
          const { readLinkedParents } = await import('./tsudumonParentCore');
          for (const parent of readLinkedParents(userData)) {
            const parentLineId = parent.uid.startsWith('line:')
              ? parent.uid.slice('line:'.length)
              : '';
            if (!parentLineId) continue;
            await lineClient.pushMessage({
              to: parentLineId,
              messages: [{ type: 'text', text: expiredParentMessage() }],
            });
            await recordPushDelivery('tsudumonTrial');
          }
        } catch (error) {
          console.error(
            `[tsudumonTrialReminder] parent notice failed uid=${uid}:`,
            error
          );
          // 保護者への通知が失敗しても、子への通知は成立させる（既送扱いにする）。
        }
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

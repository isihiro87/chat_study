/**
 * 月末ふり返りレポート 招待 push cron。
 *
 * 月の最終日 JST 17:00 に発火し、「今月そのサービスで1問以上解いたユーザー」へ
 * 「今月のレポートを見る」ボタン（flex）を push する。タップすると
 * `handleMonthlyReportPostback` がその月の学習データを AI で分析して reply する。
 *
 * 配信枠（月次プラン上限）の消費はこの招待 push の1通のみ（レポート本体は reply で
 * 枠ゼロ）。対象を「今月回答したユーザー」に絞ることで、枠の無駄打ちと無関係な
 * ユーザーへの送信を避ける。
 *
 * cron は「月末」を直接指定できないため 28〜31 日に毎日発火させ、JST で当日が
 * その月の最終日のときだけ実処理する。
 */

import * as functions from "firebase-functions/v1";

import { getLineClient } from "./lineWebhook";
import { logServerFunnelEvent } from "./funnelEvent";
import { recordPushDelivery } from "./deliveryStats";
import {
  buildMonthlyReportInviteMessage,
  currentJstMonthKey,
  monthKeyToRange,
} from "./monthlyReport";
import type { UserDoc } from "./userDocTypes";

/** JST で date がその月の最終日かどうか。 */
function isLastDayOfMonthJst(date: Date): boolean {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const tomorrow = new Date(jst.getTime() + 24 * 60 * 60 * 1000);
  // 翌日（JST）が「1日」なら、今日が最終日。
  return tomorrow.getUTCDate() === 1;
}

export const sendMonthlyReportInvite = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 17 28-31 * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const now = new Date();
    if (!isLastDayOfMonthJst(now)) {
      // 月末以外の 28〜30 日は何もしない。
      return;
    }

    const startedAt = Date.now();
    const monthKey = currentJstMonthKey(now);
    const range = monthKeyToRange(monthKey);
    if (!range) {
      console.error("[sendMonthlyReportInvite] invalid monthKey:", monthKey);
      return;
    }
    console.log(`[sendMonthlyReportInvite] start month=${monthKey}`);

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, Timestamp } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    let lineClient;
    try {
      lineClient = await getLineClient();
    } catch (error) {
      console.error("[sendMonthlyReportInvite] getLineClient failed:", error);
      return;
    }

    const inviteMessage = buildMonthlyReportInviteMessage(monthKey);

    let processed = 0;
    let sent = 0;
    let skipped = 0;
    let failed = 0;

    // 「今月1問以上解いた」ユーザー＝ lastAnsweredAt が当月内。
    // 単一フィールドのレンジクエリ（自動インデックス）。全件スキャンしない。
    let snap;
    try {
      snap = await db
        .collection("users")
        .where("lastAnsweredAt", ">=", Timestamp.fromMillis(range.startMs))
        .get();
    } catch (error) {
      console.error("[sendMonthlyReportInvite] users query failed:", error);
      return;
    }

    for (const doc of snap.docs) {
      processed++;
      const uid = doc.id;
      const data = doc.data() as UserDoc & Record<string, unknown>;

      // ブロック中には送らない。
      if (data.blocked === true) {
        skipped++;
        continue;
      }

      const lineUserId =
        typeof data.lineUserId === "string"
          ? data.lineUserId
          : uid.startsWith("line:")
            ? uid.slice("line:".length)
            : "";
      if (!lineUserId) {
        skipped++;
        continue;
      }

      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [inviteMessage],
        });
      } catch (error) {
        console.error(
          `[sendMonthlyReportInvite] push failed uid=${uid}:`,
          error
        );
        failed++;
        continue;
      }

      await logServerFunnelEvent("monthly_report_invite_sent", uid, {
        month: monthKey,
      });
      await recordPushDelivery("monthlyReport");
      sent++;
    }

    const elapsed = Date.now() - startedAt;
    console.log(
      `[sendMonthlyReportInvite] done month=${monthKey}: processed=${processed}, ` +
        `sent=${sent}, skipped=${skipped}, failed=${failed}, elapsed=${elapsed}ms`
    );
  });

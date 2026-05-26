/**
 * 月次送信通数レポート（C-4）。
 *
 * 毎月 1 日 JST 09:00 に前月の deliveryStats を集計し、Cloud Logging に出力する。
 * プラン上限（仮: 月 30,000 通）の 80% 超過時は WARNING severity でログ。
 *
 * 同時に今月分の deliveryStats ドキュメントを初期化しておく。
 */

import * as functions from "firebase-functions/v1";

import { ensureMonthDocExists } from "./deliveryStats";
import { logServerFunnelEvent } from "./funnelEvent";

const MONTHLY_QUOTA_GUESS = 30000; // 仮の上限。実プランに合わせて要調整
const WARN_THRESHOLD_RATIO = 0.8;

function getJstYearMonth(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 7);
}

function getPreviousMonth(yyyyMm: string): string {
  const [yStr, mStr] = yyyyMm.split("-");
  const y = Number(yStr);
  const m = Number(mStr);
  if (m === 1) return `${y - 1}-12`;
  return `${y}-${String(m - 1).padStart(2, "0")}`;
}

export const monthlyDeliveryReport = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 9 1 * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const now = new Date();
    const thisMonth = getJstYearMonth(now);
    const lastMonth = getPreviousMonth(thisMonth);

    // 今月分の deliveryStats ドキュメントを初期化
    await ensureMonthDocExists(thisMonth);

    // 前月のレポート集計
    try {
      const snap = await db.doc(`deliveryStats/${lastMonth}`).get();
      if (!snap.exists) {
        console.log(
          `[monthlyDeliveryReport] no stats found for ${lastMonth}, skip`
        );
        return;
      }
      const data = snap.data() ?? {};
      const total = (data.totalPushCount as number) ?? 0;
      // recordPushDelivery の旧実装が `pushCountByType.dailyQuiz` のような
      // ドット入り top-level フィールドとして書き込んでいたため、後方互換として
      // legacy キーと nested map の両方を合算する。
      const byType: Record<string, number> = {};
      const nested =
        (data.pushCountByType as Record<string, number> | undefined) ?? {};
      for (const [k, v] of Object.entries(nested)) {
        if (typeof v === "number") byType[k] = (byType[k] ?? 0) + v;
      }
      for (const [k, v] of Object.entries(data)) {
        if (typeof v === "number" && k.startsWith("pushCountByType.")) {
          const type = k.slice("pushCountByType.".length);
          byType[type] = (byType[type] ?? 0) + v;
        }
      }
      const ratio = total / MONTHLY_QUOTA_GUESS;

      const reportLine =
        `[monthlyDeliveryReport] ${lastMonth} total=${total} ` +
        `dailyQuiz=${byType.dailyQuiz ?? 0} ` +
        `trialReminder=${byType.trialReminder ?? 0} ` +
        `winback=${byType.winback ?? 0} ` +
        `onboardingReminder=${byType.onboardingReminder ?? 0} ` +
        `premiumNudge=${byType.premiumNudge ?? 0} ` +
        `abandonReminder=${byType.abandonReminder ?? 0} ` +
        `postTrialFollowup=${byType.postTrialFollowup ?? 0}`;

      if (ratio >= WARN_THRESHOLD_RATIO) {
        console.warn(
          `${reportLine} ⚠️ quota usage ${Math.round(ratio * 100)}% ` +
            `(threshold ${WARN_THRESHOLD_RATIO * 100}%)`
        );
      } else {
        console.log(`${reportLine} quota usage ${Math.round(ratio * 100)}%`);
      }

      await logServerFunnelEvent(
        "monthly_delivery_report_generated",
        `report-${lastMonth}`,
        {
          total,
          ratio,
          byType,
        }
      );
    } catch (error) {
      console.error("[monthlyDeliveryReport] aggregation failed:", error);
    }
  });

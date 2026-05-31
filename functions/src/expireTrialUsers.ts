import * as functions from "firebase-functions/v1";

import {
  buildTrialExpiredFlexMessage,
  buildTrialReminderFlexMessage,
  getLineClient,
} from "./lineWebhook";
import {
  LineRichMenuApiError,
  LineRichMenuConfigError,
  linkRichMenuForUser,
} from "./lineRichMenu";
import { logServerFunnelEvent } from "./funnelEvent";
import { getJstDateString } from "./streakState";
import { recordPushDelivery } from "./deliveryStats";

const REMINDER_COOLDOWN_MS = 24 * 60 * 60 * 1000;
const REMINDER_DAY_NUMBERS: readonly (1 | 3 | 6 | 7)[] = [1, 3, 6, 7] as const;

// 申込から最低 12h 経過するまで Day 1 リマインダーを送らないガード（A-11）。
// 23:50 申込 → 翌3時に「1日目」push という違和感を解消する。
const MIN_HOURS_BEFORE_DAY1_REMINDER_MS = 12 * 60 * 60 * 1000;

type ReminderMilestoneKey = "day1" | "day3" | "day6" | "day7Morning";

function getReminderKey(day: 1 | 3 | 6 | 7): ReminderMilestoneKey {
  if (day === 1) return "day1";
  if (day === 3) return "day3";
  if (day === 6) return "day6";
  return "day7Morning";
}

/**
 * JST 暦日ベースで「日付 a から日付 b までの経過日数」を返す。
 * 同日なら 0, 翌日なら 1。
 */
function daysBetweenJst(fromJst: string, toJst: string): number {
  const from = new Date(`${fromJst}T00:00:00Z`).getTime();
  const to = new Date(`${toJst}T00:00:00Z`).getTime();
  return Math.round((to - from) / (24 * 60 * 60 * 1000));
}

/**
 * trial ライフサイクル管理ジョブ。
 *
 * 配信時刻（中学生への深夜配信を避けるため 2026-05-31 に 03:00 から変更）:
 *   - 平日（月〜金）: JST 07:00
 *   - 土日: JST 08:00
 * 単一 cron を 07:00 / 08:00 の両方で起動し、曜日に応じて一方だけ実処理する。
 *
 * 処理対象: `users.where(planSource=="trial").where(plan=="premium")` の各ユーザー
 *
 * 1. premiumUntil が現在より過去 → free に戻す + 終了通知 push
 * 2. trial 開始から 1 / 3 / 6 / 7 日目 → リマインダー push（24h gate）
 *    7日目（最終日）の朝 3:00 時点でまだ premiumUntil 未到達のユーザーに
 *    「今日が最後」の自然な premium お誘いを送る。premiumUntil 到達後の
 *    expire 自体は同じ cron の次回起動で処理される。
 *
 * 多重送信防止:
 * - `lastTrialReminderAt` が直近24h 以内なら同じ trial 中の別 milestone でも skip
 * - 期限切れ処理は冪等。`planSource != "trial"` になればクエリから外れる
 *
 * エラー戦略:
 * - 1ユーザーずつ順次処理（LINE API rate limit 回避）
 * - ユーザー単位で失敗してもログのみで次のユーザーへ
 */
export const expireTrialUsers = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 7,8 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    // 平日は 07:00、土日は 08:00 の起動だけ実処理する（深夜配信回避）。
    const jstNow = new Date(Date.now() + 9 * 60 * 60 * 1000);
    const jstHour = jstNow.getUTCHours();
    const jstDow = jstNow.getUTCDay(); // 0=日, 6=土
    const isWeekend = jstDow === 0 || jstDow === 6;
    const targetHour = isWeekend ? 8 : 7;
    if (jstHour !== targetHour) {
      console.log(
        `[expireTrialUsers] skip run: jstHour=${jstHour}, dow=${jstDow}, targetHour=${targetHour}`
      );
      return;
    }

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import(
      "firebase-admin/firestore"
    );
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    let lineClient;
    try {
      lineClient = await getLineClient();
    } catch (error) {
      console.error("[expireTrialUsers] getLineClient failed; abort:", error);
      return;
    }

    const snap = await db
      .collection("users")
      .where("planSource", "==", "trial")
      .where("plan", "==", "premium")
      .get();

    if (snap.empty) {
      console.log("[expireTrialUsers] no trial users to process");
      return;
    }

    const now = Date.now();
    let expired = 0;
    let reminded = 0;
    let skipped = 0;
    let blockedPushSkipped = 0;

    // 順次処理: LINE Messaging API は短時間に大量 push すると rate limit を踏む
    for (const doc of snap.docs) {
      const uid = doc.id;
      const data = doc.data();
      const lineUserId = uid.startsWith("line:")
        ? uid.slice("line:".length)
        : (typeof data.lineUserId === "string" ? data.lineUserId : "");
      if (!lineUserId) {
        console.warn(`[expireTrialUsers] lineUserId 不明、skip uid=${uid}`);
        skipped++;
        continue;
      }

      const premiumUntilRaw = data.premiumUntil as
        | { toDate?: () => Date }
        | undefined
        | null;
      if (!premiumUntilRaw || typeof premiumUntilRaw.toDate !== "function") {
        console.warn(
          `[expireTrialUsers] premiumUntil 不正、skip uid=${uid}`
        );
        skipped++;
        continue;
      }
      const premiumUntilMs = premiumUntilRaw.toDate().getTime();
      const diffMs = premiumUntilMs - now;

      if (diffMs <= 0) {
        // 体験中にサブスク登録した場合は stripeSubscriptionId が立っている。
        // この場合は trial_expired への降格を行わず、Stripe 側の subscription.updated
        // webhook で planSource='paid' に遷移するのを待つ（Stripe 側の trial_period_days で
        // ちょうど体験終了タイミングに初回課金が走り、planSource が paid に切り替わる）。
        const hasStripeSubscription =
          typeof data.stripeSubscriptionId === 'string' &&
          data.stripeSubscriptionId.length > 0;
        if (hasStripeSubscription) {
          console.log(
            `[expireTrialUsers] skip downgrade for uid=${uid} (stripeSubscriptionId set, waiting for paid activation)`
          );
          skipped++;
          continue;
        }

        // 期限切れ → free に戻す
        try {
          await linkRichMenuForUser(lineUserId, "free");
        } catch (error) {
          if (
            error instanceof LineRichMenuConfigError ||
            error instanceof LineRichMenuApiError
          ) {
            console.error(
              `[expireTrialUsers] LINE API failed for ${uid}:`,
              error
            );
          } else {
            console.error(
              `[expireTrialUsers] linkRichMenu unknown error for ${uid}:`,
              error
            );
          }
          // LINE 側に失敗しても Firestore は更新する（次回起動で LINE 側を再同期する余地あり）
        }

        try {
          await db.doc(`users/${uid}`).set(
            {
              plan: "free",
              richMenuType: "free",
              planSource: "trial_expired",
              trialExpiredAt: FieldValue.serverTimestamp(),
              lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
              updatedAt: FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
        } catch (error) {
          console.error(
            `[expireTrialUsers] Firestore 更新失敗 uid=${uid}:`,
            error
          );
          continue;
        }

        // 公式 LINE をブロック中なら DB の降格は実施するが push は送らない
        if (data.blocked === true) {
          blockedPushSkipped++;
        } else {
          try {
            await lineClient.pushMessage({
              to: lineUserId,
              messages: [buildTrialExpiredFlexMessage()],
            });
            await recordPushDelivery("trialReminder");
          } catch (error) {
            console.error(
              `[expireTrialUsers] expired push 失敗 uid=${uid}:`,
              error
            );
          }
        }
        await logServerFunnelEvent("trial_expired", uid);
        expired++;
        continue;
      }

      // 期限内のリマインダー経路: ブロック中ユーザーは push を送らない
      if (data.blocked === true) {
        blockedPushSkipped++;
        continue;
      }

      // まだ期限内 → trial 開始からの経過日数で 1/3/6 日目だけリマインド
      const trialStartedAtRaw = data.trialStartedAt as
        | { toDate?: () => Date }
        | undefined
        | null;
      const trialStartedMs =
        trialStartedAtRaw && typeof trialStartedAtRaw.toDate === "function"
          ? trialStartedAtRaw.toDate().getTime()
          : 0;
      if (trialStartedMs === 0) {
        // 旧データで trialStartedAt が無い場合は対象外（後続デプロイで自然に解消）
        skipped++;
        continue;
      }
      const trialStartJst = getJstDateString(new Date(trialStartedMs));
      const todayJst = getJstDateString(new Date());
      const daysSinceStart = daysBetweenJst(trialStartJst, todayJst);
      const matched = REMINDER_DAY_NUMBERS.find((d) => d === daysSinceStart);
      if (matched === undefined) {
        skipped++;
        continue;
      }

      // A-11: 申込から 12h 未満なら Day 1 リマインダーをスキップ
      if (
        matched === 1 &&
        now - trialStartedMs < MIN_HOURS_BEFORE_DAY1_REMINDER_MS
      ) {
        skipped++;
        continue;
      }

      // A-12: milestone 別に lastTrialReminderAt を保持し、重複送信防止を厳密化
      const reminderKey = getReminderKey(matched);
      const lastReminderMap = (data.lastTrialReminderAt ?? {}) as Record<
        string,
        { toDate?: () => Date } | undefined
      >;
      const lastForMilestone = lastReminderMap[reminderKey];
      const lastForMilestoneMs =
        lastForMilestone && typeof lastForMilestone.toDate === "function"
          ? lastForMilestone.toDate().getTime()
          : 0;
      if (
        lastForMilestoneMs > 0 &&
        now - lastForMilestoneMs < REMINDER_COOLDOWN_MS
      ) {
        skipped++;
        continue;
      }

      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [buildTrialReminderFlexMessage(matched)],
        });
        await recordPushDelivery("trialReminder");
      } catch (error) {
        console.error(
          `[expireTrialUsers] reminder push 失敗 uid=${uid}:`,
          error
        );
        continue;
      }

      try {
        // milestone 別マップに記録（既存単一フィールドは互換維持のため併記）
        await db.doc(`users/${uid}`).set(
          {
            lastTrialReminderAt: {
              [reminderKey]: FieldValue.serverTimestamp(),
            },
            lastTrialReminderAtLegacy: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error(
          `[expireTrialUsers] lastTrialReminderAt 更新失敗 uid=${uid}:`,
          error
        );
      }
      await logServerFunnelEvent("trial_reminder_sent", uid, {
        dayNumber: matched,
      });
      reminded++;
    }

    console.log(
      `[expireTrialUsers] done: expired=${expired}, reminded=${reminded}, ` +
        `skipped=${skipped}, blockedPushSkipped=${blockedPushSkipped}, total=${snap.size}`
    );
  });

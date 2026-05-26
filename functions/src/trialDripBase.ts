/**
 * Trial ドリップキャンペーン用の共通処理。
 *
 * Day 2 / Day 3 (保護者向け) / Day 4 / Day 5 (体験談) / Day 7 evening / Day 7 night
 * の各 cron から共通呼び出しされる。
 */

import { getLineClient } from "./lineWebhook";
import { logServerFunnelEvent, type ServerFunnelEventType } from "./funnelEvent";
import { recordPushDelivery } from "./deliveryStats";
import type { PushType } from "./deliveryStatsTypes";
import type { messagingApi } from "@line/bot-sdk";

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
const REMINDER_COOLDOWN_MS = 24 * 60 * 60 * 1000;

function getJstDateString(date: Date): string {
  const jst = new Date(date.getTime() + JST_OFFSET_MS);
  return jst.toISOString().slice(0, 10);
}

function daysBetweenJst(fromMs: number, toMs: number): number {
  const fromStr = getJstDateString(new Date(fromMs));
  const toStr = getJstDateString(new Date(toMs));
  const f = new Date(`${fromStr}T00:00:00Z`).getTime();
  const t = new Date(`${toStr}T00:00:00Z`).getTime();
  return Math.round((t - f) / DAY_MS);
}

export type TrialMilestoneKey =
  | "day2"
  | "day3Parent"
  | "day4"
  | "day5"
  | "day7Evening"
  | "day7Night";

const MILESTONE_TO_DAY_NUMBER: Record<TrialMilestoneKey, number> = {
  day2: 2,
  day3Parent: 3,
  day4: 4,
  day5: 5,
  day7Evening: 7,
  day7Night: 7,
};

export interface RunTrialDripInput {
  milestone: TrialMilestoneKey;
  funnelEventType: ServerFunnelEventType;
  pushType: PushType;
  /**
   * メッセージを構築する関数。userData を受け取って LINE messages 配列を返す。
   * null を返したら skip 扱い（例: 既に「じっくり学ぶ」を使ったユーザーは Day 4 を skip）
   */
  buildMessages: (
    userData: FirebaseFirestore.DocumentData
  ) => messagingApi.Message[] | null;
}

interface RunStats {
  totalScanned: number;
  sent: number;
  skipped: number;
  failed: number;
  blockedSkipped: number;
}

/**
 * trial 中のユーザーを抽出し、指定 milestone の day 数に一致する人に push する。
 * milestone 別の重複防止と 24h cooldown を実装。
 */
export async function runTrialDrip(input: RunTrialDripInput): Promise<RunStats> {
  const { milestone, funnelEventType, pushType, buildMessages } = input;
  const targetDay = MILESTONE_TO_DAY_NUMBER[milestone];

  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp();
  }
  const db = getFirestore();

  const stats: RunStats = {
    totalScanned: 0,
    sent: 0,
    skipped: 0,
    failed: 0,
    blockedSkipped: 0,
  };

  let lineClient;
  try {
    lineClient = await getLineClient();
  } catch (error) {
    console.error(`[trialDrip:${milestone}] getLineClient failed:`, error);
    return stats;
  }

  const snap = await db
    .collection("users")
    .where("planSource", "==", "trial")
    .where("plan", "==", "premium")
    .get();

  if (snap.empty) {
    console.log(`[trialDrip:${milestone}] no trial users`);
    return stats;
  }

  const now = Date.now();

  for (const doc of snap.docs) {
    stats.totalScanned++;
    const uid = doc.id;
    const data = doc.data();

    // 公式 LINE をブロック中のユーザーには送らない
    if (data.blocked === true) {
      stats.blockedSkipped++;
      continue;
    }

    const lineUserId =
      typeof data.lineUserId === "string"
        ? data.lineUserId
        : uid.startsWith("line:")
          ? uid.slice("line:".length)
          : "";
    if (!lineUserId) {
      stats.skipped++;
      continue;
    }

    const trialStartedAtRaw = data.trialStartedAt as
      | { toDate?: () => Date }
      | undefined;
    const trialStartedMs =
      trialStartedAtRaw && typeof trialStartedAtRaw.toDate === "function"
        ? trialStartedAtRaw.toDate().getTime()
        : 0;
    if (trialStartedMs === 0) {
      stats.skipped++;
      continue;
    }

    const daysSinceStart = daysBetweenJst(trialStartedMs, now);
    if (daysSinceStart !== targetDay) {
      stats.skipped++;
      continue;
    }

    // milestone 別の重複防止（24h cooldown）
    const reminderMap = (data.lastTrialReminderAt ?? {}) as Record<
      string,
      { toDate?: () => Date } | undefined
    >;
    const lastForMilestone = reminderMap[milestone];
    const lastMs =
      lastForMilestone && typeof lastForMilestone.toDate === "function"
        ? lastForMilestone.toDate().getTime()
        : 0;
    if (lastMs > 0 && now - lastMs < REMINDER_COOLDOWN_MS) {
      stats.skipped++;
      continue;
    }

    const messages = buildMessages(data);
    if (!messages) {
      stats.skipped++;
      continue;
    }

    try {
      await lineClient.pushMessage({
        to: lineUserId,
        messages,
      });
    } catch (error) {
      console.error(`[trialDrip:${milestone}] push failed uid=${uid}:`, error);
      stats.failed++;
      continue;
    }

    try {
      await doc.ref.set(
        {
          lastTrialReminderAt: {
            [milestone]: FieldValue.serverTimestamp(),
          },
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    } catch (error) {
      console.error(
        `[trialDrip:${milestone}] history update failed uid=${uid}:`,
        error
      );
    }

    await logServerFunnelEvent(funnelEventType, uid, { milestone });
    await recordPushDelivery(pushType);
    stats.sent++;
  }

  return stats;
}

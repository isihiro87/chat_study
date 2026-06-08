import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import {
  buildGradeSelectMessage,
  buildSubjectSelectMessage,
  buildTimeSelectMessage,
  getLineClient,
} from "./lineWebhook";
import { recordPushDelivery } from "./deliveryStats";

const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_USERS_PER_RUN = 100;

/**
 * 設定不完全リマインダーを送るタイミング（A-6 拡張）。
 *
 * - Day 1: 開始から 1 日経過後（既存の 24h リマインド）
 * - Day 3: 3 日経過後
 * - Day 7: 7 日経過後（これ以降は休眠扱いで停止）
 */
const REMINDER_DAYS: readonly { key: "day1" | "day3" | "day7"; days: number }[] = [
  { key: "day1", days: 1 },
  { key: "day3", days: 3 },
  { key: "day7", days: 7 },
];

/** 経過時間（ms）から、まだ送っていない milestone を返す */
function pickReminderMilestone(
  startedAtMs: number,
  nowMs: number,
  alreadySent: Record<string, unknown>
): "day1" | "day3" | "day7" | null {
  const elapsedDays = Math.floor((nowMs - startedAtMs) / DAY_MS);
  // 後ろから（最新の milestone から）探し、まだ送っていない最大の milestone を返す
  for (let i = REMINDER_DAYS.length - 1; i >= 0; i--) {
    const m = REMINDER_DAYS[i];
    if (elapsedDays >= m.days && !alreadySent[m.key]) {
      return m.key;
    }
  }
  return null;
}

type OnboardingStep = "grade" | "subject" | "time";

const stepText: Record<OnboardingStep, string> = {
  grade: "あとは学年を選ぶだけで、設定を再開できます。",
  subject: "あとは教科を選ぶだけで、設定完了まであと少しだよ。",
  time: "あとは配信時間を選ぶだけで、明日から毎日1問お届けします。",
};

function getNextStep(data: FirebaseFirestore.DocumentData): OnboardingStep {
  if (typeof data.grade !== "string") return "grade";
  if (typeof data.subject !== "string") return "subject";
  return "time";
}

function getStepMessage(step: OnboardingStep): messagingApi.Message {
  if (step === "grade") return buildGradeSelectMessage() as messagingApi.Message;
  if (step === "subject") return buildSubjectSelectMessage() as messagingApi.Message;
  return buildTimeSelectMessage() as messagingApi.Message;
}

/**
 * 友だち追加後、初期設定が途中で止まったユーザーに1回だけリマインドする。
 *
 * 対象は新規 follow 時に `onboardingState="started"` を付けたユーザー。
 * 設定完了時は `complete` に変えるため、同じ人に何度も送らない。
 */
export const remindIncompleteOnboarding = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 * * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } =
      await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    let client;
    try {
      client = await getLineClient();
    } catch (error) {
      console.error(
        "[remindIncompleteOnboarding] getLineClient failed:",
        error
      );
      return;
    }

    // Day 3 / Day 7 リマインダー追加に伴い "reminded" も対象に含める。
    // 設定完了 ("complete") は除外。Day 7 後の Onboarding 中ユーザーは
    // 別途休眠ユーザー除外システムが扱う。
    const snap = await db
      .collection("users")
      .where("onboardingState", "in", ["started", "reminded"])
      .limit(MAX_USERS_PER_RUN)
      .get();

    if (snap.empty) {
      console.log("[remindIncompleteOnboarding] no users to process");
      return;
    }

    const now = Date.now();
    let reminded = 0;
    let skipped = 0;
    let blockedSkipped = 0;

    for (const doc of snap.docs) {
      const data = doc.data();

      // 公式 LINE をブロック中のユーザーには未完了リマインドを送らない
      if (data.blocked === true) {
        blockedSkipped++;
        continue;
      }

      const lineUserId =
        typeof data.lineUserId === "string" ? data.lineUserId : "";
      if (!lineUserId) {
        skipped++;
        continue;
      }

      if (typeof data.preferredHour === "number") {
        try {
          await doc.ref.set(
            {
              onboardingState: "complete",
              onboardingCompletedAt: FieldValue.serverTimestamp(),
              updatedAt: FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
        } catch (error) {
          console.error(
            `[remindIncompleteOnboarding] complete state update failed uid=${doc.id}:`,
            error
          );
        }
        skipped++;
        continue;
      }

      const startedAtRaw = data.onboardingStartedAt as
        | { toDate?: () => Date }
        | undefined
        | null;
      const startedAtMs =
        startedAtRaw && typeof startedAtRaw.toDate === "function"
          ? startedAtRaw.toDate().getTime()
          : 0;
      if (startedAtMs === 0) {
        skipped++;
        continue;
      }

      // A-6: Day 1 / Day 3 / Day 7 のいずれかで未送信のものを選ぶ
      const alreadySent =
        (data.onboardingReminderAt as Record<string, unknown>) ?? {};
      const milestone = pickReminderMilestone(startedAtMs, now, alreadySent);
      if (!milestone) {
        skipped++;
        continue;
      }

      const step = getNextStep(data);

      // milestone ごとにトーンを変えて、複数回送られたユーザーに同じ文言で
      // 届かないようにする（押し売り感の回避）。
      const heading =
        milestone === "day1"
          ? "登録ありがとうございました🙏\n設定がまだ途中になっているみたいです。\n30秒で終わるから、良かったらこのまま続きをやってみてね！"
          : milestone === "day3"
            ? "ひさしぶり！前回の設定、まだ途中だったみたいだから、もし良ければ続きをどうぞ。"
            : "今回でリマインドはおしまいにするね。気が向いたら続きをやってみよう。設定すれば毎日1問が届くようになるよ。";

      const text =
        `${heading}\n\n${stepText[step]}\n\n下のボタンから続きができます。`;

      const messages: messagingApi.Message[] = [
        { type: "text", text },
        getStepMessage(step),
      ];

      try {
        await client.pushMessage({
          to: lineUserId,
          messages,
        });
        await recordPushDelivery("onboardingReminder");
      } catch (error) {
        console.error(
          `[remindIncompleteOnboarding] push failed uid=${doc.id}:`,
          error
        );
        skipped++;
        continue;
      }

      try {
        // onboardingReminderAt.{milestone} に送信履歴を記録
        // 互換のため state も "reminded" に更新（Day 7 送信後も同じ）
        await doc.ref.set(
          {
            onboardingState: "reminded",
            onboardingReminderAt: {
              [milestone]: FieldValue.serverTimestamp(),
            },
            onboardingReminderSentAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        console.error(
          `[remindIncompleteOnboarding] reminder state update failed uid=${doc.id}:`,
          error
        );
      }
      reminded++;
    }

    console.log(
      `[remindIncompleteOnboarding] done: reminded=${reminded}, skipped=${skipped}, ` +
        `blockedSkipped=${blockedSkipped}, total=${snap.size}`
    );
  });

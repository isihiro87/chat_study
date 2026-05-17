import * as functions from "firebase-functions/v1";

import {
  buildGradeSelectMessage,
  buildSubjectSelectMessage,
  buildTimeSelectMessage,
  getLineClient,
} from "./lineWebhook";

const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_USERS_PER_RUN = 100;

type OnboardingStep = "grade" | "subject" | "time";

const stepText: Record<OnboardingStep, string> = {
  grade: "学年を選ぶだけで、設定を再開できます。",
  subject: "教科を選ぶと、あと少しで設定完了です。",
  time: "配信時間を選ぶと、明日から毎日1問が届きます。",
};

function getNextStep(data: FirebaseFirestore.DocumentData): OnboardingStep {
  if (typeof data.grade !== "string") return "grade";
  if (typeof data.subject !== "string") return "subject";
  return "time";
}

function getStepMessage(step: OnboardingStep) {
  if (step === "grade") return buildGradeSelectMessage();
  if (step === "subject") return buildSubjectSelectMessage();
  return buildTimeSelectMessage();
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

    const snap = await db
      .collection("users")
      .where("onboardingState", "==", "started")
      .limit(MAX_USERS_PER_RUN)
      .get();

    if (snap.empty) {
      console.log("[remindIncompleteOnboarding] no users to process");
      return;
    }

    const now = Date.now();
    let reminded = 0;
    let skipped = 0;

    for (const doc of snap.docs) {
      const data = doc.data();
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
      if (startedAtMs === 0 || now - startedAtMs < DAY_MS) {
        skipped++;
        continue;
      }

      const step = getNextStep(data);
      const text =
        "設定がまだ途中のようです。30秒で終わります。\n" +
        `${stepText[step]}\n\n` +
        "このトークを開いて、表示されているボタンから続きができます。";

      try {
        await client.pushMessage({
          to: lineUserId,
          messages: [{ type: "text", text }, getStepMessage(step)],
        });
      } catch (error) {
        console.error(
          `[remindIncompleteOnboarding] push failed uid=${doc.id}:`,
          error
        );
        skipped++;
        continue;
      }

      try {
        await doc.ref.set(
          {
            onboardingState: "reminded",
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
      `[remindIncompleteOnboarding] done: reminded=${reminded}, skipped=${skipped}, total=${snap.size}`
    );
  });

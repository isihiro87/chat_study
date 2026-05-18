import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";

import {
  buildGradeSelectMessage,
  buildSubjectSelectMessage,
  buildTimeSelectMessage,
  getLineClient,
} from "./lineWebhook";

const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_USERS_PER_RUN = 100;

type OnboardingStep = "name" | "grade" | "subject" | "time";

const stepText: Record<OnboardingStep, string> = {
  name: "あとはお名前（ニックネーム）を送ってもらえれば、続きが始められます。",
  grade: "あとは学年を選ぶだけで、設定を再開できます。",
  subject: "あとは教科を選ぶだけで、設定完了まであと少しだよ。",
  time: "あとは配信時間を選ぶだけで、明日から毎日1問お届けします。",
};

function getNextStep(data: FirebaseFirestore.DocumentData): OnboardingStep {
  if (data.onboardingState === "awaiting_name" || typeof data.nickname !== "string") {
    return "name";
  }
  if (typeof data.grade !== "string") return "grade";
  if (typeof data.subject !== "string") return "subject";
  return "time";
}

function getStepMessage(step: OnboardingStep): messagingApi.Message | null {
  if (step === "name") return null;
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

    const snap = await db
      .collection("users")
      .where("onboardingState", "in", ["started", "awaiting_name"])
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
        "登録ありがとうございました🙏\n" +
        "設定がまだ途中になっているみたいです。\n" +
        "30秒で終わるから、良かったらこのまま続きをやってみてね！\n\n" +
        `${stepText[step]}` +
        (step === "name"
          ? "\n\nそのまま続きを送ってね。"
          : "\n\n下のボタンから続きができます。");

      const messages: messagingApi.Message[] = [{ type: "text", text }];
      const stepMessage = getStepMessage(step);
      if (stepMessage) messages.push(stepMessage);

      try {
        await client.pushMessage({
          to: lineUserId,
          messages,
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

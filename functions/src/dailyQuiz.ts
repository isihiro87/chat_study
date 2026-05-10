import * as functions from "firebase-functions/v1";
import { selectAndSendQuestion } from "./lineWebhook";

type ValidHour = 6 | 7 | 17 | 19;

async function runDailyQuiz(hour: ValidHour): Promise<void> {
  const startedAt = Date.now();
  console.log(`[dailyQuiz${pad(hour)}] start`);

  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp();
  }
  const db = getFirestore();

  const snap = await db
    .collection("users")
    .where("preferredHour", "==", hour)
    .where("status", "==", "active")
    .get();

  if (snap.empty) {
    console.log(`[dailyQuiz${pad(hour)}] no eligible users`);
    return;
  }

  const results = await Promise.allSettled(
    snap.docs.map((doc) => selectAndSendQuestion(doc.id))
  );

  let success = 0;
  let failed = 0;
  for (const r of results) {
    if (r.status === "fulfilled") success++;
    else failed++;
  }
  const elapsed = Date.now() - startedAt;
  console.log(
    `[dailyQuiz${pad(hour)}] done users=${snap.size} success=${success} failed=${failed} elapsed=${elapsed}ms`
  );
}

function pad(hour: number): string {
  return hour.toString().padStart(2, "0");
}

export const dailyQuiz06 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 6 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(6));

export const dailyQuiz07 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 7 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(7));

export const dailyQuiz17 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 17 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(17));

export const dailyQuiz19 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(19));

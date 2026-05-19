import * as functions from "firebase-functions/v1";
import { selectAndSendQuestion } from "./lineWebhook";

type ValidHour = 6 | 7 | 16 | 17 | 18 | 19 | 20 | 21;

/**
 * 休眠ユーザー除外システム（requirements.md §C）対応:
 *
 * status == "active" のユーザーにのみ通常配信を送る。at-risk / dormant / churned は
 * Win-back ジョブ（sendWinbackMessages）が JST 19:00 に節目だけ送信する。
 *
 * プレミアム会員は computeStatusFromLastAnswer により常に active になる仕様のため
 * 追加のフィルタは不要（実際の判定は recalculateUserStatuses cron が行う）。
 */
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

  // 旧スキーマで status フィールドがないドキュメントは Firestore の where("status", "==", "active")
  // にヒットしないため、migration スクリプトの実行が前提。migration 未実施の場合の
  // セーフティとして、結果が異常に少ない場合のみログで警告する。
  if (snap.size === 0) {
    console.warn(
      `[dailyQuiz${pad(hour)}] zero active users for hour=${hour}, ` +
        `migration-user-status の実行を確認`
    );
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

export const dailyQuiz16 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 16 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(16));

export const dailyQuiz17 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 17 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(17));

export const dailyQuiz18 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 18 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(18));

export const dailyQuiz19 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(19));

export const dailyQuiz20 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 20 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(20));

export const dailyQuiz21 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 21 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(21));

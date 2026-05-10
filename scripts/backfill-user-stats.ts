/**
 * 既存の `answers` collection を全件スキャンし、`users/{uid}.stats` を再計算して書き込む。
 *
 * onAnswerCreated 拡張（stats 事前計算）をデプロイした直後に 1 回限り実行する。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/backfill-user-stats.ts --dry-run    # 差分のみ表示
 *   npx tsx scripts/backfill-user-stats.ts              # 実書き込み
 *
 * 実行ロジック:
 *   1. answers collection を answeredAt 昇順で全件取得（古いものから処理）
 *   2. uid 別にグルーピングしながら stats を再計算
 *      - totalAnswered / totalCorrect / bySubject / byTopic を increment 集計
 *      - streak は JST 日付ごとに前日連続判定
 *      - lastAnsweredAt = 最新 answeredAt
 *   3. uid 単位で users/{uid}.stats を `set({stats}, {merge:true})` で書き込み
 *
 * 既に stats フィールドがあるユーザーは上書きされる（idempotent）。
 */

import { nextStreakState, getJstDateString, type StreakState } from "../functions/src/streakState";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

interface AnswerRecord {
  uid: string;
  isCorrect: boolean;
  subject: string;
  topic: string | null;
  answeredAt: Date;
}

interface PerCount {
  total: number;
  correct: number;
}

interface UserStats {
  totalAnswered: number;
  totalCorrect: number;
  bySubject: Record<string, PerCount>;
  byTopic: Record<string, PerCount>;
  streak: StreakState;
  lastAnsweredAt: Date;
}

function inc(counter: PerCount | undefined, isCorrect: boolean): PerCount {
  return {
    total: (counter?.total ?? 0) + 1,
    correct: (counter?.correct ?? 0) + (isCorrect ? 1 : 0),
  };
}

function applyAnswerToStats(prev: UserStats | null, ans: AnswerRecord): UserStats {
  const todayJst = getJstDateString(ans.answeredAt);
  const nextStreak = nextStreakState(prev?.streak ?? null, todayJst);

  return {
    totalAnswered: (prev?.totalAnswered ?? 0) + 1,
    totalCorrect: (prev?.totalCorrect ?? 0) + (ans.isCorrect ? 1 : 0),
    bySubject: {
      ...prev?.bySubject,
      ...(ans.subject
        ? {
            [ans.subject]: inc(prev?.bySubject?.[ans.subject], ans.isCorrect),
          }
        : {}),
    },
    byTopic: {
      ...prev?.byTopic,
      ...(ans.topic
        ? {
            [ans.topic]: inc(prev?.byTopic?.[ans.topic], ans.isCorrect),
          }
        : {}),
    },
    streak: nextStreak,
    lastAnsweredAt: ans.answeredAt,
  };
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");

  const { initializeApp, applicationDefault, getApps } = await import(
    "firebase-admin/app"
  );
  const { getFirestore, Timestamp } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const db = getFirestore();

  console.log(
    `[backfill-user-stats] mode=${dryRun ? "dry-run" : "live"} project=${FIREBASE_PROJECT_ID}`
  );

  console.log("[backfill-user-stats] fetching all answers (orderBy answeredAt asc)...");
  const snap = await db.collection("answers").orderBy("answeredAt", "asc").get();
  console.log(`[backfill-user-stats] fetched ${snap.size} answer docs`);

  const userStatsMap = new Map<string, UserStats>();

  for (const doc of snap.docs) {
    const d = doc.data();
    const uid = typeof d.uid === "string" ? d.uid : "";
    if (!uid) continue;

    const answeredAtRaw = d.answeredAt;
    let answeredAt: Date | null = null;
    if (answeredAtRaw && typeof answeredAtRaw.toDate === "function") {
      answeredAt = answeredAtRaw.toDate();
    }
    if (!answeredAt) continue;

    const ans: AnswerRecord = {
      uid,
      isCorrect: d.isCorrect === true,
      subject: typeof d.subject === "string" ? d.subject : "",
      topic:
        typeof d.topic === "string" && d.topic.trim() !== "" ? d.topic : null,
      answeredAt,
    };

    const next = applyAnswerToStats(userStatsMap.get(uid) ?? null, ans);
    userStatsMap.set(uid, next);
  }

  console.log(
    `[backfill-user-stats] computed stats for ${userStatsMap.size} unique users`
  );

  let writeCount = 0;
  for (const [uid, stats] of userStatsMap) {
    const accuracy =
      stats.totalAnswered > 0 ? (stats.totalCorrect / stats.totalAnswered) * 100 : 0;
    console.log(
      `  ${uid}: total=${stats.totalAnswered} correct=${stats.totalCorrect} (${accuracy.toFixed(1)}%) streak=${stats.streak.current}/${stats.streak.longest}`
    );

    if (dryRun) continue;

    const statsForFirestore = {
      totalAnswered: stats.totalAnswered,
      totalCorrect: stats.totalCorrect,
      bySubject: stats.bySubject,
      byTopic: stats.byTopic,
      streak: stats.streak,
      lastAnsweredAt: Timestamp.fromDate(stats.lastAnsweredAt),
    };

    try {
      await db.doc(`users/${uid}`).set({ stats: statsForFirestore }, { merge: true });
      writeCount++;
    } catch (err) {
      console.error(`  ✗ write failed for ${uid}:`, err);
    }
  }

  console.log(
    `\n[backfill-user-stats] done. ${dryRun ? "(dry-run, no writes)" : `wrote ${writeCount} user docs`}`
  );
}

main().catch((err) => {
  console.error("[backfill-user-stats] FATAL:", err);
  process.exit(1);
});

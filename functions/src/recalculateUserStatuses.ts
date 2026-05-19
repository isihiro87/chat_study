/**
 * 全ユーザーの活性状態（status）を日次で再計算する cron。
 *
 * 設計（requirements.md §C-1）:
 *   - 毎日 JST 02:00 に発火
 *   - 全 users を batch で読み込み、`lastAnsweredAt` と `plan` から新 status を計算
 *   - status が変わったら Firestore 更新 + `statusChangedAt` 更新
 *   - dormant 移行時は `dayStreak` をリセット
 *   - 集計をログ出力（モニタリング用）
 *
 * 注意:
 *   - sendWinbackMessages は今日 statusChangedAt が更新されたユーザーを抽出するため、
 *     本 cron が 02:00 に動いた後の 19:00 に Win-back が発火する想定。
 *   - プレミアム会員は常に active 扱い（computeStatusFromLastAnswer 内で判定）。
 */

import * as functions from "firebase-functions/v1";

import {
  computeStatusFromLastAnswer,
  shouldResetStreak,
} from "./userStatus";
import type { UserStatus } from "./userDocTypes";

const BATCH_SIZE = 500;

interface RecalcStats {
  totalScanned: number;
  byStatus: Record<UserStatus, number>;
  transitions: Record<string, number>; // "active->at-risk" など
  streakResets: number;
  errors: number;
}

export const recalculateUserStatuses = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 2 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const startedAt = Date.now();
    console.log("[recalculateUserStatuses] start");

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const stats: RecalcStats = {
      totalScanned: 0,
      byStatus: { active: 0, "at-risk": 0, dormant: 0, churned: 0 },
      transitions: {},
      streakResets: 0,
      errors: 0,
    };

    const now = new Date();
    let lastDoc: FirebaseFirestore.QueryDocumentSnapshot | null = null;

    while (true) {
      let query = db
        .collection("users")
        .orderBy("__name__")
        .limit(BATCH_SIZE);
      if (lastDoc) {
        query = query.startAfter(lastDoc);
      }
      const snap = await query.get();
      if (snap.empty) break;

      // batch 書き込みで高速化
      const batch = db.batch();
      let batchHasWrites = false;

      for (const doc of snap.docs) {
        stats.totalScanned++;
        const data = doc.data();

        const oldStatus: UserStatus =
          (data.status as UserStatus | undefined) ?? "active";
        const lastAnsweredAt = data.lastAnsweredAt as
          | { toDate?: () => Date }
          | undefined;
        const lastAnsweredDate =
          lastAnsweredAt && typeof lastAnsweredAt.toDate === "function"
            ? lastAnsweredAt.toDate()
            : null;
        const plan = data.plan === "premium" ? "premium" : "free";
        const premiumUntilRaw = data.premiumUntil as
          | { toDate?: () => Date }
          | undefined;
        const premiumUntil =
          premiumUntilRaw && typeof premiumUntilRaw.toDate === "function"
            ? premiumUntilRaw.toDate()
            : null;

        const newStatus = computeStatusFromLastAnswer({
          lastAnsweredAt: lastAnsweredDate,
          now,
          plan,
          premiumUntil,
        });

        stats.byStatus[newStatus]++;

        if (newStatus === oldStatus) continue;

        const transitionKey = `${oldStatus}->${newStatus}`;
        stats.transitions[transitionKey] =
          (stats.transitions[transitionKey] ?? 0) + 1;

        const updates: Record<string, unknown> = {
          status: newStatus,
          statusChangedAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        };

        if (shouldResetStreak(oldStatus, newStatus)) {
          updates.dayStreak = 0;
          stats.streakResets++;
        }

        batch.set(doc.ref, updates, { merge: true });
        batchHasWrites = true;
      }

      if (batchHasWrites) {
        try {
          await batch.commit();
        } catch (error) {
          console.error("[recalculateUserStatuses] batch commit failed:", error);
          stats.errors++;
        }
      }

      lastDoc = snap.docs[snap.docs.length - 1] ?? null;
      if (snap.size < BATCH_SIZE) break;
    }

    const elapsed = Date.now() - startedAt;
    console.log(
      `[recalculateUserStatuses] done: scanned=${stats.totalScanned}, ` +
        `active=${stats.byStatus.active}, atRisk=${stats.byStatus["at-risk"]}, ` +
        `dormant=${stats.byStatus.dormant}, churned=${stats.byStatus.churned}, ` +
        `streakResets=${stats.streakResets}, errors=${stats.errors}, ` +
        `elapsed=${elapsed}ms`
    );
    console.log(
      `[recalculateUserStatuses] transitions: ${JSON.stringify(stats.transitions)}`
    );
  });

/**
 * 既存の `users` collection 全件に対し、休眠ユーザー除外システム用の新フィールドを
 * 初期値で書き込むマイグレーションスクリプト。
 *
 * 実行タイミング:
 *   - フェーズA（型定義拡張）デプロイ直後、recalculateUserStatuses cron の初回起動前に
 *     1回限り実行する。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/migrate-user-status.ts --dry-run    # 差分のみ表示
 *   npx tsx scripts/migrate-user-status.ts              # 実書き込み
 *
 * 設定する初期値:
 *   - status: "active"（lastAnsweredAt が無くても、initial state として active 扱い）
 *   - lockedMonthlyPrice: plan == "premium" の既存ユーザーは 680（過去価格を保護）
 *     ※ trial 中の人も同様（trial 中の登録ロックは 680）
 *     ※ 既に lockedMonthlyPrice が設定済みなら上書きしない
 *   - statusChangedAt: 既存ドキュメントに無ければ createdAt または現在時刻
 *
 * スキーマ変換:
 *   - `lastTrialReminderAt` が Timestamp 型の旧データなら、map 型に変換する
 *     （変換しないと expireTrialUsers の新ロジックが正しく動かない）
 *
 * 既存フィールドは一切上書きしない（idempotent）。
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

interface MigrationStats {
  totalScanned: number;
  statusSet: number;
  lockedPriceSet: number;
  statusChangedAtSet: number;
  trialReminderConverted: number;
  skipped: number;
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  console.log(
    `[migrate-user-status] start (dryRun=${dryRun}, project=${FIREBASE_PROJECT_ID})`
  );

  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });

  const db = getFirestore();
  const snap = await db.collection("users").get();
  console.log(`[migrate-user-status] scanned ${snap.size} users`);

  const stats: MigrationStats = {
    totalScanned: snap.size,
    statusSet: 0,
    lockedPriceSet: 0,
    statusChangedAtSet: 0,
    trialReminderConverted: 0,
    skipped: 0,
  };

  const now = Timestamp.now();

  for (const doc of snap.docs) {
    const data = doc.data();
    const updates: Record<string, unknown> = {};

    if (typeof data.status !== "string") {
      updates.status = "active";
      stats.statusSet++;
    }

    if (
      data.plan === "premium" &&
      data.lockedMonthlyPrice !== 680 &&
      data.lockedMonthlyPrice !== 980
    ) {
      // 既存プレミアム会員は¥680で固定（仕様変更前に登録した人を保護）
      updates.lockedMonthlyPrice = 680;
      stats.lockedPriceSet++;
    }

    if (!data.statusChangedAt) {
      // createdAt があればそれを起点、無ければ now
      updates.statusChangedAt = data.createdAt ?? now;
      stats.statusChangedAtSet++;
    }

    // 旧 `lastTrialReminderAt`（Timestamp）→ 新 map 形式への変換
    // 旧: lastTrialReminderAt = <Timestamp>
    // 新: lastTrialReminderAt = { day7Morning: <Timestamp>, ... }
    // 旧データは最新の reminder が day7Morning にあったと推定して退避する
    const legacyTimestamp = data.lastTrialReminderAt;
    if (
      legacyTimestamp &&
      typeof (legacyTimestamp as { toDate?: () => Date }).toDate === "function" &&
      !(legacyTimestamp as Record<string, unknown>).day1 &&
      !(legacyTimestamp as Record<string, unknown>).day3 &&
      !(legacyTimestamp as Record<string, unknown>).day6 &&
      !(legacyTimestamp as Record<string, unknown>).day7Morning
    ) {
      // 旧 Timestamp を map に変換。どの milestone か特定できないため
      // 安全側に倒して最も保守的な「day7Morning」へ退避
      // （重複送信防止に寄与し、新規 milestone は別 key なので影響なし）
      updates.lastTrialReminderAt = { day7Morning: legacyTimestamp };
      // 旧データを参照する別名（互換用）にも残す
      updates.lastTrialReminderAtLegacy = legacyTimestamp;
      stats.trialReminderConverted++;
    }

    if (Object.keys(updates).length === 0) {
      stats.skipped++;
      continue;
    }

    updates.updatedAt = FieldValue.serverTimestamp();

    if (dryRun) {
      console.log(`[dry-run] users/${doc.id}: ${JSON.stringify(updates)}`);
    } else {
      try {
        await doc.ref.set(updates, { merge: true });
      } catch (error) {
        console.error(`[migrate-user-status] write failed for ${doc.id}:`, error);
      }
    }
  }

  console.log(
    `[migrate-user-status] done: scanned=${stats.totalScanned}, ` +
      `statusSet=${stats.statusSet}, lockedPriceSet=${stats.lockedPriceSet}, ` +
      `statusChangedAtSet=${stats.statusChangedAtSet}, ` +
      `trialReminderConverted=${stats.trialReminderConverted}, ` +
      `skipped=${stats.skipped}`
  );
  if (dryRun) {
    console.log("[migrate-user-status] dry-run mode — no writes performed");
  }
}

main().catch((error) => {
  console.error("[migrate-user-status] fatal error:", error);
  process.exit(1);
});

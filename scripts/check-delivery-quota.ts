/**
 * 公式LINE 月次送信枠の消費状況を確認する。
 * 再開キャンペーン前のプリフライト用 + 当日の監視用。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/check-delivery-quota.ts            # 今月の消費
 *   npx tsx scripts/check-delivery-quota.ts 2026-05    # 指定月
 *
 * 仮上限（要 LINE Developers Console で実際の上限を確認）:
 *   ライトプラン: 5,000 通 / 月
 *   スタンダードプラン: 30,000 通 / 月
 *
 * Firestore `deliveryStats/{YYYY-MM}` doc を読む。
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROJECT_ID = "chatstudy-63477";
const ASSUMED_LIMIT = 30_000;
const WARN_THRESHOLD = 0.8;

function currentMonth(): string {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

async function main() {
  const month = process.argv[2] || currentMonth();
  console.log(`[check-delivery-quota] target month: ${month}`);

  initializeApp({
    credential: applicationDefault(),
    projectId: PROJECT_ID,
  });
  const db = getFirestore();

  const snap = await db.doc(`deliveryStats/${month}`).get();
  if (!snap.exists) {
    console.log(`[check-delivery-quota] deliveryStats/${month} は存在しません（まだ送信なし）。`);
    process.exit(0);
  }

  const data = snap.data() ?? {};
  console.log(`\n=== ${month} の配信内訳 ===`);
  let total = 0;
  const entries = Object.entries(data).sort();
  for (const [key, value] of entries) {
    if (typeof value === "number") {
      console.log(`  ${key.padEnd(28)} ${String(value).padStart(6)}`);
      total += value;
    } else {
      console.log(`  ${key.padEnd(28)} ${JSON.stringify(value)}`);
    }
  }
  console.log(`  ${"TOTAL".padEnd(28)} ${String(total).padStart(6)}`);
  console.log(`\n仮上限: ${ASSUMED_LIMIT} 通`);
  console.log(
    `消費率: ${((total / ASSUMED_LIMIT) * 100).toFixed(1)}% ` +
      `(残り ${ASSUMED_LIMIT - total} 通)`
  );
  if (total / ASSUMED_LIMIT >= WARN_THRESHOLD) {
    console.log(`⚠️  WARNING: ${(WARN_THRESHOLD * 100).toFixed(0)}% を超過`);
  }

  console.log(`\n注意: 実際の月次上限は LINE Developers Console で要確認。`);
  console.log(`     プラン: https://developers.line.biz/console/`);
}

main().catch((error) => {
  console.error("[check-delivery-quota] fatal:", error);
  process.exit(1);
});

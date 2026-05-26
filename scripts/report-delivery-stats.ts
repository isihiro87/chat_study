/**
 * `deliveryStats/{YYYY-MM}` の月次配信通数を表示する運用スクリプト。
 *
 * 出力:
 *   - 当月 + 前月の月次通数（totalPushCount / uniqueUserCount / lastUpdatedAt）
 *   - pushType 別の内訳と構成比（dailyQuiz / trialReminder / winback / premiumNudge /
 *     onboardingReminder / abandonReminder / postTrialFollowup / restartWelcome / other）
 *
 * 「昨日比 +39」のような日次差分を切り分けるための診断用。
 * deliveryStats は月次集計なので、日次推移そのものは Cloud Logging から
 * 「[deliveryStats] recordPushDelivery」のログを別途確認すること。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/report-delivery-stats.ts
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

const PUSH_TYPES = [
  "dailyQuiz",
  "trialReminder",
  "winback",
  "premiumNudge",
  "onboardingReminder",
  "abandonReminder",
  "postTrialFollowup",
  "restartWelcome",
  "other",
] as const;

function getJstYearMonth(date: Date): string {
  const jst = new Date(date.getTime() + JST_OFFSET_MS);
  return jst.toISOString().slice(0, 7);
}

function shiftJstMonth(yearMonth: string, deltaMonths: number): string {
  const [y, m] = yearMonth.split("-").map(Number);
  const d = new Date(Date.UTC(y, (m - 1) + deltaMonths, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

function pct(n: number, d: number): string {
  if (d === 0) return "  -  ";
  return `${((n / d) * 100).toFixed(1)}%`.padStart(5, " ");
}

function formatJstTimestamp(ts: Timestamp | undefined): string {
  if (!ts) return "n/a";
  const jst = new Date(ts.toDate().getTime() + JST_OFFSET_MS);
  return jst.toISOString().replace("T", " ").slice(0, 19) + " JST";
}

function printMonth(yearMonth: string, doc: Record<string, unknown> | null): void {
  console.log(`\n=== deliveryStats: ${yearMonth} ===`);
  if (!doc) {
    console.log("  (document not found)");
    return;
  }
  const total = (doc.totalPushCount as number | undefined) ?? 0;
  const uniqueUser = (doc.uniqueUserCount as number | undefined) ?? 0;
  const lastUpdatedAt = doc.lastUpdatedAt as Timestamp | undefined;
  console.log(`  totalPushCount  : ${total}`);
  console.log(`  uniqueUserCount : ${uniqueUser}`);
  console.log(`  lastUpdatedAt   : ${formatJstTimestamp(lastUpdatedAt)}`);
  console.log(`  pushCountByType :`);

  // recordPushDelivery が `set({ merge: true })` + ドット記法で書き込んでいるため、
  // 実際のデータは "pushCountByType.dailyQuiz" のような top-level ドット入り
  // フィールドとして保存されている。これを後方互換として読みつつ、将来書き込み方を
  // 直したら nested map（doc.pushCountByType）も同時にマージして集計する。
  const byType: Record<string, number> = {};
  const nested = (doc.pushCountByType as Record<string, number> | undefined) ?? {};
  for (const [k, v] of Object.entries(nested)) {
    if (typeof v === "number") byType[k] = (byType[k] ?? 0) + v;
  }
  for (const [k, v] of Object.entries(doc)) {
    if (typeof v === "number" && k.startsWith("pushCountByType.")) {
      const type = k.slice("pushCountByType.".length);
      byType[type] = (byType[type] ?? 0) + v;
    }
  }

  const allKeys = new Set<string>([...PUSH_TYPES, ...Object.keys(byType)]);
  const rows = [...allKeys]
    .map((type) => ({ type, count: byType[type] ?? 0 }))
    .sort((a, b) => b.count - a.count);

  const typeWidth = Math.max(...[...allKeys].map((t) => t.length), 18);
  for (const { type, count } of rows) {
    const known = (PUSH_TYPES as readonly string[]).includes(type);
    const label = type.padEnd(typeWidth, " ");
    const countStr = String(count).padStart(5, " ");
    const marker = known ? " " : "?";
    console.log(`   ${marker}${label} : ${countStr}  (${pct(count, total)})`);
  }
  const unknownKeys = [...allKeys].filter(
    (t) => !(PUSH_TYPES as readonly string[]).includes(t)
  );
  if (unknownKeys.length > 0) {
    console.log(
      `  (? = deliveryStatsTypes.ts の PushType に未登録のキー: ${unknownKeys.join(", ")})`
    );
  }
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  const now = new Date();
  const currentMonth = getJstYearMonth(now);
  const previousMonth = shiftJstMonth(currentMonth, -1);

  console.log(`[report-delivery-stats] project=${FIREBASE_PROJECT_ID}`);
  console.log(`[report-delivery-stats] current=${currentMonth} previous=${previousMonth}`);

  for (const yearMonth of [currentMonth, previousMonth]) {
    const snap = await db.doc(`deliveryStats/${yearMonth}`).get();
    const doc = snap.exists
      ? (snap.data() as Record<string, unknown>)
      : null;
    printMonth(yearMonth, doc);
  }

  console.log("");
  console.log(
    "ヒント: 日次の cron 実行は Cloud Logging で各 push 関数の done ログを確認できる:"
  );
  console.log(
    '  resource.type="cloud_function" textPayload=~"\\[(dailyQuiz|trialDrip|sendWinbackMessages|remindIncompleteOnboarding|trialFormAbandonReminder|postTrialFollowup)"'
  );
}

main().catch((err) => {
  console.error("[report-delivery-stats] error:", err);
  process.exit(1);
});

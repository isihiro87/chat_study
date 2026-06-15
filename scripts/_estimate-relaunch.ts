/**
 * 2026-06-01 relaunchDispatcher の送信数を事前試算する read-only スクリプト。
 * dispatcher の classify ロジックを users コレクションに当ててセグメント別・
 * preferredHour 別の対象人数を集計する。1 ユーザーあたり bundle = 2 通。
 *
 *   gcloud auth application-default login
 *   npx tsx scripts/_estimate-relaunch.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const PROJECT_ID = "chatstudy-63477";

// dispatcher と同じ admin 除外リスト
const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

// dispatcher の SCHEDULE がカバーする preferredHour（none は 7 の回に同梱）
const SCHEDULED_HOURS = new Set<number | "none">([6, 7, 16, 18, 20, "none"]);

type Segment = "A" | "B" | "C" | "D" | "E";

function classify(data: any): { segment: Segment; hour: number | "none" } | null {
  const lineUserId = typeof data.lineUserId === "string" ? data.lineUserId : "";
  if (!lineUserId) return null;
  if (ADMIN_LINE_USER_IDS.has(lineUserId)) return null;
  if (data.blocked === true) return null;

  const grade = typeof data.grade === "string" ? data.grade : "";
  const subject = typeof data.subject === "string" ? data.subject : "";
  const hasProfile =
    (grade === "中1" || grade === "中2" || grade === "中3") && subject.length > 0;
  const hasPreferredHour = typeof data.preferredHour === "number";
  const totalAnswered =
    typeof data.stats?.totalAnswered === "number" ? data.stats.totalAnswered : 0;
  const scopeTopics = (data.testScope?.topics as unknown[] | undefined) ?? [];
  const hasScope = Array.isArray(scopeTopics) && scopeTopics.length > 0;

  let segment: Segment;
  if (totalAnswered >= 1) segment = "E";
  else if (!hasProfile) segment = "A";
  else if (!hasPreferredHour) segment = "B";
  else if (!hasScope) segment = "C";
  else segment = "D";

  const hour: number | "none" = hasPreferredHour ? (data.preferredHour as number) : "none";
  return { segment, hour };
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const db = getFirestore();

  const snap = await db.collection("users").get();
  const total = snap.size;

  const bySegment: Record<Segment, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const byHour = new Map<number | "none", number>();
  let excludedNoLine = 0;
  let excludedAdmin = 0;
  let excludedBlocked = 0;
  let unscheduled = 0; // 対象だが SCHEDULE 外の preferredHour で送信されないユーザー

  for (const doc of snap.docs) {
    const data = doc.data();
    const lineUserId = typeof data.lineUserId === "string" ? data.lineUserId : "";
    if (!lineUserId) { excludedNoLine++; continue; }
    if (ADMIN_LINE_USER_IDS.has(lineUserId)) { excludedAdmin++; continue; }
    if (data.blocked === true) { excludedBlocked++; continue; }

    const c = classify(data);
    if (!c) continue;
    bySegment[c.segment]++;
    byHour.set(c.hour, (byHour.get(c.hour) ?? 0) + 1);
    if (!SCHEDULED_HOURS.has(c.hour)) unscheduled++;
  }

  const eligible = bySegment.A + bySegment.B + bySegment.C + bySegment.D + bySegment.E;
  const reached = eligible - unscheduled;

  console.log(`\n=== relaunchDispatcher 2026-06-01 送信試算 ===`);
  console.log(`users コレクション総数: ${total}`);
  console.log(`除外: lineUserId なし=${excludedNoLine} / admin=${excludedAdmin} / blocked=${excludedBlocked}`);
  console.log(`\n対象（classify 通過）: ${eligible} 名`);
  console.log(`  セグメント別:`);
  (["A", "B", "C", "D", "E"] as Segment[]).forEach((s) =>
    console.log(`    ${s}: ${bySegment[s]}`)
  );
  console.log(`\n  preferredHour 別:`);
  [...byHour.entries()]
    .sort((a, b) => (a[0] === "none" ? 1 : b[0] === "none" ? -1 : (a[0] as number) - (b[0] as number)))
    .forEach(([h, n]) => {
      const scheduled = SCHEDULED_HOURS.has(h) ? "" : "  ← ⚠️ SCHEDULE 外（送信されない）";
      console.log(`    ${h === "none" ? "未設定(none)" : h + "時"}: ${n}${scheduled}`);
    });

  console.log(`\n⚠️ SCHEDULE 外で実際には送信されないユーザー: ${unscheduled} 名`);
  console.log(`\n>>> 実際に届く人数: ${reached} 名`);
  console.log(`>>> 送信通数（bundle = 2 通/人）: ${reached * 2} 通`);
  console.log(`>>> 仮上限 30,000 通に対する割合: ${((reached * 2) / 30000 * 100).toFixed(1)}%\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

/* eslint-disable @typescript-eslint/no-explicit-any */
import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
const db = getFirestore();

type Grade = "中1" | "中2" | "中3" | "(未登録)";
function gradeLabel(g: unknown): Grade {
  if (g === "中1") return "中1";
  if (g === "中2") return "中2";
  if (g === "中3") return "中3";
  return "(未登録)";
}

interface Row {
  grade: Grade;
  hasTestScope: boolean;
  topicsCount: number;
  blocked: boolean;
  answered: number;
  plan: string;
  status: string;
}

async function main() {
  const snap = await db.collection("users").get();
  const rows: Row[] = [];
  for (const doc of snap.docs) {
    const data = doc.data();
    const lineUserId = data.lineUserId as string | undefined;
    if (lineUserId && ADMIN_LINE_USER_IDS.has(lineUserId)) continue;

    const ts = data.testScope as { topics?: unknown; updatedAt?: any } | undefined;
    const topics = Array.isArray(ts?.topics)
      ? ts!.topics.filter((t: any) => typeof t === "string")
      : [];
    rows.push({
      grade: gradeLabel(data.grade),
      hasTestScope: topics.length > 0,
      topicsCount: topics.length,
      blocked: data.blocked === true,
      answered: (data.stats?.totalAnswered as number | undefined) ?? 0,
      plan: (data.plan as string | undefined) ?? "(unset)",
      status: (data.status as string | undefined) ?? "(unset)",
    });
  }

  const total = rows.length;
  const byGrade: Record<Grade, Row[]> = {
    中1: [], 中2: [], 中3: [], "(未登録)": [],
  };
  for (const r of rows) byGrade[r.grade].push(r);

  console.log(`\n========== testScope 登録状況（管理者除外、${total} 名）==========\n`);

  const grades: Grade[] = ["中1", "中2", "中3", "(未登録)"];
  console.log("学年       | 人数 | testScope 設定済 | 平均トピック数 | ブロック中 | 1問以上回答");
  console.log("-".repeat(80));
  for (const g of grades) {
    const list = byGrade[g];
    if (list.length === 0) continue;
    const hasScope = list.filter((r) => r.hasTestScope).length;
    const avgTopics = list.filter((r) => r.hasTestScope)
      .reduce((s, r) => s + r.topicsCount, 0) / Math.max(1, hasScope);
    const blocked = list.filter((r) => r.blocked).length;
    const answered = list.filter((r) => r.answered >= 1).length;
    console.log(
      `${g.padEnd(10)} | ${String(list.length).padStart(4)} | ${String(hasScope).padStart(6)} (${
        ((hasScope / list.length) * 100).toFixed(1)
      }%) | ${avgTopics.toFixed(1).padStart(8)}      | ${
        String(blocked).padStart(6)
      }     | ${String(answered).padStart(4)} (${((answered / list.length) * 100).toFixed(1)}%)`,
    );
  }

  const allHasScope = rows.filter((r) => r.hasTestScope).length;
  const allBlocked = rows.filter((r) => r.blocked).length;
  const allAnswered = rows.filter((r) => r.answered >= 1).length;
  console.log("-".repeat(80));
  console.log(
    `合計       | ${String(total).padStart(4)} | ${String(allHasScope).padStart(6)} (${
      ((allHasScope / total) * 100).toFixed(1)
    }%) |              | ${String(allBlocked).padStart(6)}     | ${
      String(allAnswered).padStart(4)
    } (${((allAnswered / total) * 100).toFixed(1)}%)`,
  );

  console.log("\n--- 学年×testScope×回答状況のクロス集計 ---\n");
  for (const g of grades) {
    const list = byGrade[g];
    if (list.length === 0) continue;
    const a = list.filter((r) => r.hasTestScope && r.answered >= 1).length;
    const b = list.filter((r) => r.hasTestScope && r.answered === 0).length;
    const c = list.filter((r) => !r.hasTestScope && r.answered >= 1).length;
    const d = list.filter((r) => !r.hasTestScope && r.answered === 0).length;
    console.log(`${g}:  scope済+回答済=${a}  scope済+未回答=${b}  scope無+回答済=${c}  scope無+未回答=${d}`);
  }

  console.log("\n========== 完了 ==========\n");
}

main().catch((e) => { console.error(e); process.exit(1); });

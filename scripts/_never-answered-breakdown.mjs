/**
 * 未出題（totalAnswered が 0/未設定）の問題を教科×学年で内訳。
 * 数学が未選択なことが主因かを検証。実行: node scripts/_never-answered-breakdown.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const pct = (a, b) => (b ? ((a / b) * 100).toFixed(1) : "-");

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const snap = await db.collection("questions").select("subject", "grade", "totalAnswered").get();

  const bySubj = new Map();   // subject -> {total, never}
  const bySG = new Map();     // "subject/grade" -> {total, never}
  let totalNever = 0;

  for (const d of snap.docs) {
    const x = d.data();
    const s = typeof x.subject === "string" ? x.subject : "(none)";
    const g = typeof x.grade === "string" ? x.grade : "(none)";
    const never = !(typeof x.totalAnswered === "number" && x.totalAnswered > 0);
    if (never) totalNever++;

    const su = bySubj.get(s) ?? { total: 0, never: 0 };
    su.total++; if (never) su.never++;
    bySubj.set(s, su);

    const key = `${s}/${g}`;
    const sg = bySG.get(key) ?? { total: 0, never: 0 };
    sg.total++; if (never) sg.never++;
    bySG.set(key, sg);
  }

  console.log(`問題マスタ ${snap.size} 問 / 未出題 ${totalNever} 問 (${pct(totalNever, snap.size)}%)\n`);

  console.log("【教科別】total / 未出題 / 未出題率 / (未出題の全体シェア)");
  for (const [s, v] of [...bySubj.entries()].sort((a, b) => b[1].never - a[1].never)) {
    console.log(`  ${s.padEnd(10)} ${String(v.total).padStart(5)} / 未${String(v.never).padStart(5)} / ${pct(v.never, v.total).padStart(5)}% / 未出題全体の${pct(v.never, totalNever).padStart(5)}%`);
  }

  console.log("\n【教科×学年】(未出題の多い順)");
  for (const [k, v] of [...bySG.entries()].sort((a, b) => b[1].never - a[1].never)) {
    if (v.never === 0) continue;
    console.log(`  ${k.padEnd(14)} total ${String(v.total).padStart(4)} / 未${String(v.never).padStart(4)} / ${pct(v.never, v.total).padStart(5)}%`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });

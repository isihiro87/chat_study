/**
 * 公式LINE 回答カバレッジ分析（ワンショット）
 *  - 総回答数
 *  - 一度も解かれていない問題の割合（questions マスタ vs answers の questionId）
 *  - 問題ごとの正答率の分布
 *
 * 読み取り: answers ~6.3k / questions ~1.5k を .select() で最小フィールドだけ全スキャン
 * （一回限りの分析。ホットパスではない。CLAUDE.md の規律: 件数把握済み・限定フィールド）
 * 実行: gcloud auth application-default login 済みで npx tsx scripts/_answer-coverage-report.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();

  // ---- 1) 問題マスタ: ID と subject/grade ----
  const qSnap = await db.collection("questions").select("subject", "grade", "syncSource").get();
  const master = new Map<string, { subject: string; grade: string; syncSource: string }>();
  for (const d of qSnap.docs) {
    const x = d.data();
    master.set(d.id, {
      subject: typeof x.subject === "string" ? x.subject : "(none)",
      grade: typeof x.grade === "string" ? x.grade : "(none)",
      syncSource: typeof x.syncSource === "string" ? x.syncSource : "(none)",
    });
  }

  // ---- 2) 回答ログ: questionId + isCorrect を全スキャン ----
  const aSnap = await db.collection("answers").select("questionId", "isCorrect").get();
  const totalAnswers = aSnap.size;
  const perQ = new Map<string, { n: number; correct: number }>();
  let nullQid = 0;
  let totalCorrect = 0;
  for (const d of aSnap.docs) {
    const x = d.data();
    const qid = typeof x.questionId === "string" ? x.questionId : null;
    const ok = x.isCorrect === true;
    if (ok) totalCorrect++;
    if (!qid) { nullQid++; continue; }
    const e = perQ.get(qid) ?? { n: 0, correct: 0 };
    e.n++;
    if (ok) e.correct++;
    perQ.set(qid, e);
  }

  // ---- 3) カバレッジ ----
  const answeredIds = new Set(perQ.keys());
  const answeredInMaster = [...answeredIds].filter((id) => master.has(id));
  const orphanAnswered = [...answeredIds].filter((id) => !master.has(id)); // マスタに無い旧問題等
  const neverAnswered = [...master.keys()].filter((id) => !answeredIds.has(id));

  // ---- 4) 正答率分布（マスタに存在し、回答のある問題） ----
  const buckets = ["0-19", "20-39", "40-59", "60-79", "80-100"];
  const distAll: Record<string, number> = Object.fromEntries(buckets.map((b) => [b, 0]));
  const dist5: Record<string, number> = Object.fromEntries(buckets.map((b) => [b, 0]));
  function bkt(rate: number) {
    if (rate < 20) return "0-19";
    if (rate < 40) return "20-39";
    if (rate < 60) return "40-59";
    if (rate < 80) return "60-79";
    return "80-100";
  }
  let q5count = 0;
  for (const id of answeredInMaster) {
    const e = perQ.get(id)!;
    const rate = (e.correct / e.n) * 100;
    distAll[bkt(rate)]++;
    if (e.n >= 5) { dist5[bkt(rate)]++; q5count++; }
  }

  // ---- 5) 出力 ----
  const pct = (a: number, b: number) => (b ? ((a / b) * 100).toFixed(1) : "0.0");
  console.log("==== 公式LINE 回答カバレッジ分析 ====\n");
  console.log("【総回答数】");
  console.log(`  総回答ログ: ${totalAnswers} 件`);
  console.log(`  うち正解:   ${totalCorrect} 件 (全体正答率 ${pct(totalCorrect, totalAnswers)}%)`);
  if (nullQid) console.log(`  questionId 欠損: ${nullQid} 件`);
  console.log("");
  console.log("【問題カバレッジ】");
  console.log(`  問題マスタ総数:           ${master.size} 問`);
  console.log(`  一度でも解かれた(マスタ内): ${answeredInMaster.length} 問 (${pct(answeredInMaster.length, master.size)}%)`);
  console.log(`  一度も解かれていない:       ${neverAnswered.length} 問 (${pct(neverAnswered.length, master.size)}%)  ★未出題率`);
  console.log(`  回答ログにあるがマスタに無い(旧問題等): ${orphanAnswered.length} 問`);
  console.log("");
  console.log("【正答率の分布】(マスタ内・回答のある問題 = " + answeredInMaster.length + " 問)");
  for (const b of buckets) console.log(`  ${b.padStart(6)}% : ${String(distAll[b]).padStart(4)} 問 (${pct(distAll[b], answeredInMaster.length)}%)`);
  console.log("");
  console.log("【正答率の分布】(回答5件以上に限定 = " + q5count + " 問・統計的に意味あり)");
  for (const b of buckets) console.log(`  ${b.padStart(6)}% : ${String(dist5[b]).padStart(4)} 問 (${pct(dist5[b], q5count)}%)`);
  console.log("");

  // 教科別の未出題内訳
  const bySubjNever: Record<string, number> = {};
  const bySubjTotal: Record<string, number> = {};
  for (const [id, m] of master) {
    bySubjTotal[m.subject] = (bySubjTotal[m.subject] || 0) + 1;
    if (!answeredIds.has(id)) bySubjNever[m.subject] = (bySubjNever[m.subject] || 0) + 1;
  }
  console.log("【教科別 未出題内訳】");
  for (const s of Object.keys(bySubjTotal).sort()) {
    console.log(`  ${s}: 未出題 ${bySubjNever[s] || 0} / ${bySubjTotal[s]} 問 (${pct(bySubjNever[s] || 0, bySubjTotal[s])}%)`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });

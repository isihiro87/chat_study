/**
 * 公式LINE 回答カバレッジ — 詳細リスト（回答5件以上に限定）
 *  A) 難問リスト: 正答率20%未満
 *  B) トピック別正答率
 * 実行: gcloud auth application-default login 済みで npx tsx scripts/_answer-coverage-lists.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const MIN_N = 5;

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();

  const qSnap = await db.collection("questions").select("subject", "grade", "topic", "text").get();
  const master = new Map<string, { subject: string; grade: string; topic: string; text: string }>();
  for (const d of qSnap.docs) {
    const x = d.data();
    master.set(d.id, {
      subject: typeof x.subject === "string" ? x.subject : "(none)",
      grade: typeof x.grade === "string" ? x.grade : "(none)",
      topic: typeof x.topic === "string" ? x.topic : "(none)",
      text: typeof x.text === "string" ? x.text : "",
    });
  }

  const aSnap = await db.collection("answers").select("questionId", "isCorrect").get();
  const perQ = new Map<string, { n: number; correct: number }>();
  for (const d of aSnap.docs) {
    const x = d.data();
    const qid = typeof x.questionId === "string" ? x.questionId : null;
    if (!qid) continue;
    const e = perQ.get(qid) ?? { n: 0, correct: 0 };
    e.n++;
    if (x.isCorrect === true) e.correct++;
    perQ.set(qid, e);
  }

  // ---- A) 難問リスト (n>=5, rate<20%) ----
  type Row = { id: string; topic: string; grade: string; n: number; correct: number; rate: number; text: string };
  const hard: Row[] = [];
  for (const [id, m] of master) {
    const e = perQ.get(id);
    if (!e || e.n < MIN_N) continue;
    const rate = (e.correct / e.n) * 100;
    if (rate < 20) hard.push({ id, topic: m.topic, grade: m.grade, n: e.n, correct: e.correct, rate, text: m.text });
  }
  hard.sort((a, b) => a.rate - b.rate || b.n - a.n);

  console.log(`==== A) 難問リスト: 正答率20%未満（回答${MIN_N}件以上）= ${hard.length} 問 ====\n`);
  for (const r of hard) {
    const t = r.text.replace(/\s+/g, " ").slice(0, 60);
    console.log(`[${r.rate.toFixed(0).padStart(3)}%] ${r.correct}/${r.n}  ${r.grade} ${r.topic}`);
    console.log(`        ${t}${r.text.length > 60 ? "…" : ""}`);
    console.log(`        ${r.id}`);
  }

  // ---- B) トピック別正答率（n>=5 の問題のみ集計） ----
  const perTopic = new Map<string, { subject: string; grade: string; q: number; n: number; correct: number }>();
  for (const [id, m] of master) {
    const e = perQ.get(id);
    if (!e || e.n < MIN_N) continue;
    const key = `${m.grade}\t${m.topic}`;
    const t = perTopic.get(key) ?? { subject: m.subject, grade: m.grade, q: 0, n: 0, correct: 0 };
    t.q++;
    t.n += e.n;
    t.correct += e.correct;
    perTopic.set(key, t);
  }
  const topicRows = [...perTopic.entries()].map(([key, v]) => {
    const [grade, topic] = key.split("\t");
    return { grade, topic, q: v.q, n: v.n, correct: v.correct, rate: (v.correct / v.n) * 100 };
  });
  topicRows.sort((a, b) => a.rate - b.rate);

  console.log(`\n\n==== B) トピック別正答率（回答${MIN_N}件以上の問題で集計）= ${topicRows.length} トピック ====`);
  console.log(`（正答率の低い順。q=対象問題数 n=総回答数）\n`);
  console.log("正答率  q   n   学年  トピック");
  for (const r of topicRows) {
    console.log(`${r.rate.toFixed(0).padStart(4)}%  ${String(r.q).padStart(2)}  ${String(r.n).padStart(3)}  ${r.grade.padEnd(4)}  ${r.topic}`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });

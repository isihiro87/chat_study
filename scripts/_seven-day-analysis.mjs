/**
 * 公式LINE 直近7日間の詳細分析（ワンショット・Windows/node 直実行）:
 *  - 全体正答率
 *  - 特筆すべき問題: 出題数が多い / 正答率が異常に低い(難) / 高い(易)
 *  - 特筆すべきユーザー: 回答数が異常に多い / 正答率が異常に低い(乱打疑い)
 * 読み取り: answers(7日 ~2.4万)を .select(questionId,isCorrect,uid,topic,subject,grade) で最小取得。
 * 一回限りの分析。ホットパスではない。実行: node scripts/_seven-day-analysis.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const DAY = 24 * 3600 * 1000;
const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const now = Date.now();
  const since7 = Timestamp.fromMillis(now - 7 * DAY);

  const snap = await db
    .collection("answers")
    .where("answeredAt", ">=", since7)
    .select("questionId", "isCorrect", "uid", "lineUserId", "topic", "subject", "grade")
    .get();

  let total = 0;
  let correct = 0;
  let adminSkipped = 0;
  const perQ = new Map(); // qid -> {n, c, topic, subject, grade}
  const perU = new Map(); // uid -> {n, c}
  const perSubj = new Map(); // subject -> {n, c}

  for (const d of snap.docs) {
    const x = d.data();
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) { adminSkipped++; continue; }
    const ok = x.isCorrect === true;
    total++;
    if (ok) correct++;

    const qid = typeof x.questionId === "string" ? x.questionId : "(none)";
    const q = perQ.get(qid) ?? { n: 0, c: 0, topic: x.topic ?? "", subject: x.subject ?? "", grade: x.grade ?? "" };
    q.n++; if (ok) q.c++;
    perQ.set(qid, q);

    const uid = typeof x.uid === "string" ? x.uid : "(none)";
    const u = perU.get(uid) ?? { n: 0, c: 0 };
    u.n++; if (ok) u.c++;
    perU.set(uid, u);

    const s = x.subject ?? "(none)";
    const sa = perSubj.get(s) ?? { n: 0, c: 0 };
    sa.n++; if (ok) sa.c++;
    perSubj.set(s, sa);
  }

  const pct = (a, b) => (b ? ((a / b) * 100).toFixed(1) : "-");

  console.log(`集計時刻(UTC): ${new Date(now).toISOString()}`);
  console.log(`対象: 直近7日間 / 管理者除外後の回答 ${total.toLocaleString()} 問（管理者分 ${adminSkipped} 件除外）`);
  console.log(`回答ユーザー(ユニーク): ${perU.size} 人 / 出題された問題(ユニーク): ${perQ.size} 問`);
  console.log(`\n【全体正答率】 ${pct(correct, total)}%  (正 ${correct.toLocaleString()} / 誤 ${(total - correct).toLocaleString()})`);

  console.log(`\n【教科別】`);
  for (const [s, v] of [...perSubj.entries()].sort((a, b) => b[1].n - a[1].n)) {
    console.log(`  ${String(s).padEnd(10)} 回答 ${String(v.n).padStart(6)} / 正答率 ${pct(v.c, v.n).padStart(5)}%`);
  }

  const short = (t) => (t && t.length > 34 ? t.slice(0, 33) + "…" : t || "");

  // ---- 問題: 出題数上位 ----
  const qByN = [...perQ.entries()].sort((a, b) => b[1].n - a[1].n);
  console.log(`\n【出題数の多い問題 TOP15】`);
  for (const [qid, q] of qByN.slice(0, 15)) {
    console.log(`  ${String(q.n).padStart(4)}回  正${pct(q.c, q.n).padStart(5)}%  [${q.subject}/${q.grade}] ${short(q.topic)}  (${qid})`);
  }

  // ---- 問題: 正答率が異常に低い (n>=15) ----
  const meaningful = qByN.filter(([, q]) => q.n >= 15);
  const hardest = [...meaningful].sort((a, b) => a[1].c / a[1].n - b[1].c / b[1].n).slice(0, 15);
  console.log(`\n【正答率が異常に低い問題 TOP15】(15回以上出題)`);
  for (const [qid, q] of hardest) {
    console.log(`  正${pct(q.c, q.n).padStart(5)}%  ${String(q.n).padStart(4)}回  [${q.subject}/${q.grade}] ${short(q.topic)}  (${qid})`);
  }

  // ---- 問題: 正答率が異常に高い (n>=15) 易しすぎ ----
  const easiest = [...meaningful].sort((a, b) => b[1].c / b[1].n - a[1].c / a[1].n).slice(0, 8);
  console.log(`\n【正答率が異常に高い問題 TOP8】(15回以上出題・易しすぎ候補)`);
  for (const [qid, q] of easiest) {
    console.log(`  正${pct(q.c, q.n).padStart(5)}%  ${String(q.n).padStart(4)}回  [${q.subject}/${q.grade}] ${short(q.topic)}  (${qid})`);
  }

  // ---- ユーザー: 回答数上位 ----
  const uByN = [...perU.entries()].sort((a, b) => b[1].n - a[1].n);
  console.log(`\n【回答数が異常に多いユーザー TOP15】`);
  for (const [uid, u] of uByN.slice(0, 15)) {
    console.log(`  ${String(u.n).padStart(5)}問  正${pct(u.c, u.n).padStart(5)}%  uid=${uid.slice(0, 12)}…`);
  }

  // ---- ユーザー: 回答数分布 ----
  const buckets = { "1": 0, "2-5": 0, "6-10": 0, "11-30": 0, "31-100": 0, "101+": 0 };
  for (const [, u] of perU) {
    const n = u.n;
    if (n === 1) buckets["1"]++;
    else if (n <= 5) buckets["2-5"]++;
    else if (n <= 10) buckets["6-10"]++;
    else if (n <= 30) buckets["11-30"]++;
    else if (n <= 100) buckets["31-100"]++;
    else buckets["101+"]++;
  }
  console.log(`\n【ユーザー別 回答数の分布】`);
  for (const [k, v] of Object.entries(buckets)) {
    console.log(`  ${k.padStart(7)}問: ${String(v).padStart(4)} 人 (${pct(v, perU.size)}%)`);
  }

  // ---- ユーザー: 正答率が異常に低い (n>=20) 乱打疑い ----
  const lowU = [...perU.entries()].filter(([, u]) => u.n >= 20).sort((a, b) => a[1].c / a[1].n - b[1].c / b[1].n).slice(0, 12);
  console.log(`\n【正答率が異常に低いユーザー TOP12】(20問以上回答・乱打/苦戦疑い)`);
  for (const [uid, u] of lowU) {
    console.log(`  正${pct(u.c, u.n).padStart(5)}%  ${String(u.n).padStart(4)}問  uid=${uid.slice(0, 12)}…`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });

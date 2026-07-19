/**
 * 分布の自然さ検査（ワンショット）:
 *  問題ごと: 正答率ヒストグラム(累計 totalCorrect/totalAnswered) / 出題数分布 / 未出題
 *  ユーザーごと: 正答率ヒストグラム / 回答数分布 / 集中度(上位何%が何%の回答)
 * 読み取り: questions 全件 select、answers 全件 select(uid,isCorrect,lineUserId)。一回限り。
 * 実行: node scripts/_distribution-check.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

const bar = (n, max, width = 40) => "█".repeat(Math.round((n / Math.max(max, 1)) * width));
const pct = (a, b) => (b ? ((a / b) * 100).toFixed(1) : "-");

function rateHist(pairs, minN, label) {
  // pairs: [{n, c}]; 10%刻みのヒストグラム（n>=minN のみ）
  const elig = pairs.filter((p) => p.n >= minN);
  const buckets = Array.from({ length: 10 }, () => 0);
  for (const p of elig) {
    const r = p.c / p.n;
    let b = Math.floor(r * 10);
    if (b > 9) b = 9;
    buckets[b]++;
  }
  const max = Math.max(...buckets);
  console.log(`\n【${label} 正答率ヒストグラム】(母数 ${elig.length}, ${minN}回以上に限定)`);
  for (let i = 0; i < 10; i++) {
    const lo = i * 10, hi = i * 10 + 10;
    console.log(`  ${String(lo).padStart(3)}-${String(hi).padStart(3)}% | ${String(buckets[i]).padStart(4)} ${bar(buckets[i], max)}`);
  }
  const mean = elig.reduce((a, p) => a + p.c / p.n, 0) / Math.max(elig.length, 1);
  console.log(`  平均正答率(単純平均): ${(mean * 100).toFixed(1)}%`);
  return buckets;
}

function countHist(counts, edges, label) {
  const buckets = edges.map(() => 0);
  for (const n of counts) {
    let idx = edges.findIndex((e) => n <= e);
    if (idx < 0) idx = edges.length - 1;
    buckets[idx]++;
  }
  const max = Math.max(...buckets);
  console.log(`\n【${label} 回答数の分布】(母数 ${counts.length})`);
  let prev = 0;
  edges.forEach((e, i) => {
    const range = e === Infinity ? `${prev + 1}+` : prev + 1 === e ? `${e}` : `${prev + 1}-${e}`;
    console.log(`  ${range.padStart(9)} | ${String(buckets[i]).padStart(4)} (${pct(buckets[i], counts.length).padStart(4)}%) ${bar(buckets[i], max)}`);
    prev = e === Infinity ? prev : e;
  });
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();

  // ---- 問題ごと（累計フィールド） ----
  const qSnap = await db.collection("questions").select("totalAnswered", "totalCorrect").get();
  const qPairs = [];
  const qCounts = [];
  let neverAnswered = 0;
  for (const d of qSnap.docs) {
    const x = d.data();
    const n = typeof x.totalAnswered === "number" ? x.totalAnswered : 0;
    const c = typeof x.totalCorrect === "number" ? x.totalCorrect : 0;
    if (n === 0) { neverAnswered++; continue; }
    qPairs.push({ n, c });
    qCounts.push(n);
  }
  console.log(`問題マスタ ${qSnap.size} 問 / 一度でも解かれた ${qPairs.length} 問 / 未出題 ${neverAnswered} 問 (${pct(neverAnswered, qSnap.size)}%)`);
  rateHist(qPairs, 10, "問題ごと");
  countHist(qCounts, [1, 5, 10, 20, 50, 100, Infinity], "問題ごと(累計出題数)");

  // ---- ユーザーごと（answers 全件） ----
  const aSnap = await db.collection("answers").select("uid", "isCorrect", "lineUserId").get();
  const perU = new Map();
  let adminSkipped = 0;
  for (const d of aSnap.docs) {
    const x = d.data();
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) { adminSkipped++; continue; }
    const uid = typeof x.uid === "string" ? x.uid : "(none)";
    const u = perU.get(uid) ?? { n: 0, c: 0 };
    u.n++; if (x.isCorrect === true) u.c++;
    perU.set(uid, u);
  }
  const uPairs = [...perU.values()];
  const uCounts = uPairs.map((u) => u.n).sort((a, b) => b - a);
  const totalAns = uCounts.reduce((a, b) => a + b, 0);
  console.log(`\n\nanswers 全件 ${aSnap.size}（管理者${adminSkipped}除外）/ 回答ユーザー ${perU.size} 人`);
  rateHist(uPairs, 10, "ユーザーごと");
  countHist(uCounts, [1, 5, 10, 20, 50, 100, 300, Infinity], "ユーザーごと(累計回答数)");

  // 集中度
  const median = uCounts[Math.floor(uCounts.length / 2)];
  const mean = totalAns / uCounts.length;
  const topShare = (frac) => {
    const k = Math.max(1, Math.floor(uCounts.length * frac));
    const sum = uCounts.slice(0, k).reduce((a, b) => a + b, 0);
    return pct(sum, totalAns);
  };
  console.log(`\n【ユーザー回答数の集中度】`);
  console.log(`  平均 ${mean.toFixed(1)} 問 / 中央値 ${median} 問 (平均>>中央値なら右肩の長い裾)`);
  console.log(`  上位 1% のユーザーが全回答の ${topShare(0.01)}%`);
  console.log(`  上位 5% のユーザーが全回答の ${topShare(0.05)}%`);
  console.log(`  上位10% のユーザーが全回答の ${topShare(0.10)}%`);
}
main().catch((e) => { console.error(e); process.exit(1); });

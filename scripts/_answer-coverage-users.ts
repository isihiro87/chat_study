/**
 * 公式LINE ユーザーごとの正答率の分布（ワンショット）
 * 実行: gcloud auth application-default login 済みで npx tsx scripts/_answer-coverage-users.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();

  const aSnap = await db.collection("answers").select("uid", "isCorrect").get();
  const perUser = new Map<string, { n: number; correct: number }>();
  let nullUid = 0;
  for (const d of aSnap.docs) {
    const x = d.data();
    const uid = typeof x.uid === "string" ? x.uid : null;
    if (!uid) { nullUid++; continue; }
    const e = perUser.get(uid) ?? { n: 0, correct: 0 };
    e.n++;
    if (x.isCorrect === true) e.correct++;
    perUser.set(uid, e);
  }

  const users = [...perUser.values()];
  const totalUsers = users.length;
  const pct = (a: number, b: number) => (b ? ((a / b) * 100).toFixed(1) : "0.0");

  // 正答率分布（しきい値別の母集団）
  const buckets = ["0-19", "20-39", "40-59", "60-79", "80-100"];
  function bkt(rate: number) {
    if (rate < 20) return "0-19";
    if (rate < 40) return "20-39";
    if (rate < 60) return "40-59";
    if (rate < 80) return "60-79";
    return "80-100";
  }
  function distFor(minN: number) {
    const d: Record<string, number> = Object.fromEntries(buckets.map((b) => [b, 0]));
    let cnt = 0;
    for (const u of users) {
      if (u.n < minN) continue;
      d[bkt((u.correct / u.n) * 100)]++;
      cnt++;
    }
    return { d, cnt };
  }

  // 回答数（活動量）の分布
  const actBuckets = [
    ["1", (n: number) => n === 1],
    ["2-4", (n: number) => n >= 2 && n <= 4],
    ["5-9", (n: number) => n >= 5 && n <= 9],
    ["10-19", (n: number) => n >= 10 && n <= 19],
    ["20-49", (n: number) => n >= 20 && n <= 49],
    ["50+", (n: number) => n >= 50],
  ] as const;

  console.log("==== 公式LINE ユーザーごとの正答率の分布 ====\n");
  console.log(`回答したユニークユーザー数: ${totalUsers} 人`);
  if (nullUid) console.log(`uid 欠損レコード: ${nullUid} 件`);
  const totalAns = users.reduce((a, u) => a + u.n, 0);
  const totalCor = users.reduce((a, u) => a + u.correct, 0);
  console.log(`総回答: ${totalAns} 件 / 平均 ${(totalAns / totalUsers).toFixed(1)} 件/人 / 全体正答率 ${pct(totalCor, totalAns)}%`);

  // 中央値の正答率（全ユーザー / 5問以上）
  function medianRate(minN: number) {
    const rates = users.filter((u) => u.n >= minN).map((u) => (u.correct / u.n) * 100).sort((a, b) => a - b);
    if (!rates.length) return NaN;
    const m = Math.floor(rates.length / 2);
    return rates.length % 2 ? rates[m] : (rates[m - 1] + rates[m]) / 2;
  }

  console.log("\n【回答数（活動量）の分布】");
  for (const [label, f] of actBuckets) {
    const c = users.filter((u) => f(u.n)).length;
    console.log(`  ${label.padStart(6)} 問: ${String(c).padStart(4)} 人 (${pct(c, totalUsers)}%)`);
  }

  for (const minN of [1, 5, 10]) {
    const { d, cnt } = distFor(minN);
    const med = medianRate(minN);
    console.log(`\n【正答率の分布】回答${minN}件以上 = ${cnt} 人（中央値 ${isNaN(med) ? "-" : med.toFixed(0) + "%"}）`);
    for (const b of buckets) console.log(`  ${b.padStart(6)}% : ${String(d[b]).padStart(4)} 人 (${pct(d[b], cnt)}%)`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });

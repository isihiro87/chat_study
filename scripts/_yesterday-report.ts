/**
 * 昨日（JST）の配信数・解いたユーザー数・範囲設定状況をまとめる。
 * Firestore コスト規律: count() 集計 + limit クエリのみ（全件 .get() 禁止）。
 *
 * 実行: npx tsx scripts/_yesterday-report.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);
const JST = 9 * 3600 * 1000;
const ANSWER_LIMIT = 1500;
const DELIVERED_SAMPLE = 600;
const ACTIVE_SAMPLE = 400;

const pct = (n: number, d: number) =>
  d > 0 ? `${((n / d) * 100).toFixed(1)}%` : "—";

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const now = Date.now();

  const yStr = new Date(now + JST - 86400000).toISOString().slice(0, 10);
  const tStr = new Date(now + JST).toISOString().slice(0, 10);
  const yStart = Timestamp.fromMillis(new Date(yStr + "T00:00:00Z").getTime() - JST);
  const yEnd = Timestamp.fromMillis(new Date(tStr + "T00:00:00Z").getTime() - JST);

  // ===== 1) 昨日の配信 =====
  // 配信は push 1通ごとのログが無いため、users.lastQuestionDeliveredAt を使う。
  // 「最終配信日=昨日」のユーザー数 + 「今日すでに再配信された(=昨日も配信された可能性大)」ユーザー数。
  const delYesterdayLast = (
    await db
      .collection("users")
      .where("lastQuestionDeliveredAt", ">=", yStart)
      .where("lastQuestionDeliveredAt", "<", yEnd)
      .count()
      .get()
  ).data().count;
  const delTodayAlready = (
    await db
      .collection("users")
      .where("lastQuestionDeliveredAt", ">=", yEnd)
      .count()
      .get()
  ).data().count;

  // 配信ユーザーのサンプルで 範囲設定率 / preferredHour 分布 / ブロック率
  const delSample = await db
    .collection("users")
    .where("lastQuestionDeliveredAt", ">=", yStart)
    .where("lastQuestionDeliveredAt", "<", yEnd)
    .limit(DELIVERED_SAMPLE)
    .get();
  let delScopeSet = 0;
  let delBlocked = 0;
  let delSampleN = 0;
  const hourDist: Record<string, number> = {};
  delSample.docs.forEach((doc) => {
    const x = doc.data() as Record<string, unknown>;
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) return;
    delSampleN++;
    const topics = (x.testScope as { topics?: unknown } | undefined)?.topics;
    if (Array.isArray(topics) && topics.length > 0) delScopeSet++;
    if (x.blocked === true) delBlocked++;
    const ph = typeof x.preferredHour === "number" ? `${x.preferredHour}時` : "未設定";
    hourDist[ph] = (hourDist[ph] || 0) + 1;
  });

  // ===== 2) 昨日 解いた数・解いたユーザー数 =====
  const solvedCount = (
    await db
      .collection("answers")
      .where("answeredAt", ">=", yStart)
      .where("answeredAt", "<", yEnd)
      .count()
      .get()
  ).data().count;

  const ansSnap = await db
    .collection("answers")
    .where("answeredAt", ">=", yStart)
    .where("answeredAt", "<", yEnd)
    .orderBy("answeredAt", "desc")
    .limit(ANSWER_LIMIT)
    .get();
  const solvers = new Set<string>();
  let correct = 0;
  const perUser: Record<string, number> = {};
  const topicC: Record<string, number> = {};
  ansSnap.docs.forEach((doc) => {
    const x = doc.data() as Record<string, unknown>;
    const uid = typeof x.uid === "string" ? x.uid : "(none)";
    solvers.add(uid);
    perUser[uid] = (perUser[uid] || 0) + 1;
    if (x.isCorrect === true) correct++;
    const topic = typeof x.topic === "string" ? x.topic : "(none)";
    topicC[topic] = (topicC[topic] || 0) + 1;
  });
  const ansCapped = ansSnap.size >= ANSWER_LIMIT;
  const multiSolvers = Object.values(perUser).filter((n) => n >= 2).length;

  // ===== 3) 範囲設定状況（active 全体サンプル） =====
  const actSnap = await db
    .collection("users")
    .where("status", "==", "active")
    .limit(ACTIVE_SAMPLE)
    .get();
  let actN = 0;
  let actScopeSet = 0;
  let actWithProfile = 0;
  let actProfileScopeSet = 0;
  actSnap.docs.forEach((doc) => {
    const x = doc.data() as Record<string, unknown>;
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) return;
    actN++;
    const topics = (x.testScope as { topics?: unknown } | undefined)?.topics;
    const hasScope = Array.isArray(topics) && topics.length > 0;
    if (hasScope) actScopeSet++;
    const g = x.grade;
    const hasProfile =
      (g === "中1" || g === "中2" || g === "中3") && typeof x.subject === "string";
    if (hasProfile) {
      actWithProfile++;
      if (hasScope) actProfileScopeSet++;
    }
  });

  // ===== 出力 =====
  const topTopics = Object.entries(topicC).sort((a, b) => b[1] - a[1]).slice(0, 8);
  console.log(`==== 昨日サマリー JST=${yStr}（取得 ${new Date(now + JST).toISOString().slice(0, 16)}） ====\n`);

  console.log(`【配信（問題の届いた数）】`);
  console.log(`  昨日が最終配信日のユーザー : ${delYesterdayLast}`);
  console.log(`  （参考）今日すでに再配信済み: ${delTodayAlready}  ← 朝6/7時枠。多くは昨日も配信されている`);
  console.log(`  → 昨日の配信ユーザー数 ≈ ${delYesterdayLast} 〜 ${delYesterdayLast + delTodayAlready}`);
  console.log(`     ※push 1通ごとのログが無いため lastQuestionDeliveredAt ベースの推計`);
  console.log(`     配信サンプル${delSampleN}件: 範囲設定済 ${delScopeSet}(${pct(delScopeSet, delSampleN)}) / ブロック ${delBlocked}`);
  console.log(`     配信時刻分布: ${JSON.stringify(hourDist)}`);

  console.log(`\n【解いた数・解いたユーザー数】`);
  console.log(`  昨日の回答数(count)   : ${solvedCount}`);
  console.log(`  解いたユニークユーザー : ${solvers.size}${ansCapped ? " ※limit到達で過小" : ""}`);
  console.log(`  正答率                : ${correct}/${ansSnap.size} (${pct(correct, ansSnap.size)})`);
  console.log(`  1人あたり平均回答数    : ${(solvedCount / Math.max(solvers.size, 1)).toFixed(2)}`);
  console.log(`  2問以上解いた人        : ${multiSolvers} (${pct(multiSolvers, solvers.size)})`);
  console.log(`  多出題トピック上位:`);
  topTopics.forEach(([t, n]) => console.log(`    ${t}: ${n}`));

  console.log(`\n【範囲設定状況】`);
  console.log(`  配信を受けた人のうち範囲設定済 : ${delScopeSet}/${delSampleN} (${pct(delScopeSet, delSampleN)})`);
  console.log(`  active サンプル(${actN})の範囲設定済 : ${actScopeSet} (${pct(actScopeSet, actN)})`);
  console.log(`  └ うちプロフィール有(学年+教科)の人 ${actWithProfile} の範囲設定済 : ${actProfileScopeSet} (${pct(actProfileScopeSet, actWithProfile)})`);

  // ざっくり配信→回答の転換
  const reachLow = delYesterdayLast;
  console.log(`\n【配信→回答の転換（概算）】`);
  console.log(`  解いたユニーク ${solvers.size} / 配信ユーザー≈${reachLow}〜${reachLow + delTodayAlready} → 概ね ${pct(solvers.size, reachLow + delTodayAlready)}〜${pct(solvers.size, reachLow)}`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});

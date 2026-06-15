/**
 * 最近のユーザー使用状況 + 今日の登録者のテスト範囲設定状況を、
 * Firestore 読み取りコスト規律（CLAUDE.md）を守って取得するワンショット。
 *
 * 読み取り設計（全件 .get() は禁止）:
 *  - status 分布 / 総数 / 回答数(24h,7d) は count() 集計クエリ（1000件=1read 相当で激安）
 *  - 直近回答サンプルは answers を answeredAt desc で limit(500)
 *  - 今日の登録者は users.where(onboardingStartedAt >= 今日0:00 JST).limit(300)
 *
 * いずれも単一フィールドの index で動く（複合 index 不要）。
 *
 * 実行: gcloud auth application-default login 済みで
 *   npx tsx scripts/_usage-scope-snapshot.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);
const JST = 9 * 3600 * 1000;
const RECENT_ANSWER_SAMPLE = 500;
const TODAY_REG_LIMIT = 300;

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();

  const now = Date.now();
  const todayStr = new Date(now + JST).toISOString().slice(0, 10);
  const todayStartMs = new Date(todayStr + "T00:00:00Z").getTime() - JST;
  const d24 = now - 24 * 3600 * 1000;
  const d7 = now - 7 * 24 * 3600 * 1000;

  let reads = 0;

  // ---- 1) ユーザー status 分布（count 集計・激安） ----
  const statuses = ["active", "at-risk", "dormant", "churned"] as const;
  const statusCounts: Record<string, number> = {};
  for (const s of statuses) {
    const c = await db.collection("users").where("status", "==", s).count().get();
    statusCounts[s] = c.data().count;
    reads++;
  }
  const totalUsers = (await db.collection("users").count().get()).data().count;
  reads++;
  const noStatus =
    totalUsers - statuses.reduce((a, s) => a + statusCounts[s], 0);

  // ---- 2) 回答ボリューム（count 集計） ----
  const ans24 = (
    await db
      .collection("answers")
      .where("answeredAt", ">=", Timestamp.fromMillis(d24))
      .count()
      .get()
  ).data().count;
  reads++;
  const ans7d = (
    await db
      .collection("answers")
      .where("answeredAt", ">=", Timestamp.fromMillis(d7))
      .count()
      .get()
  ).data().count;
  reads++;

  // ---- 3) 直近回答サンプル（limit）→ ユニークユーザー・正答率 ----
  const recentSnap = await db
    .collection("answers")
    .orderBy("answeredAt", "desc")
    .limit(RECENT_ANSWER_SAMPLE)
    .get();
  reads += recentSnap.size;
  const uniq24 = new Set<string>();
  const uniq7 = new Set<string>();
  let sampleCorrect = 0;
  let sampleTotal = 0;
  const topicC: Record<string, number> = {};
  let oldestSampleMs = now;
  recentSnap.docs.forEach((doc) => {
    const x = doc.data() as Record<string, unknown>;
    const t =
      (x.answeredAt as { toMillis?: () => number } | undefined)?.toMillis?.() ??
      0;
    const uid = typeof x.uid === "string" ? x.uid : "(none)";
    if (t < oldestSampleMs) oldestSampleMs = t;
    if (t >= d7) {
      uniq7.add(uid);
      sampleTotal++;
      if (x.isCorrect === true) sampleCorrect++;
      const topic = typeof x.topic === "string" ? x.topic : "(none)";
      topicC[topic] = (topicC[topic] || 0) + 1;
    }
    if (t >= d24) uniq24.add(uid);
  });

  // ---- 4) 今日の登録者 + テスト範囲設定状況（limit） ----
  const regSnap = await db
    .collection("users")
    .where("onboardingStartedAt", ">=", Timestamp.fromMillis(todayStartMs))
    .limit(TODAY_REG_LIMIT)
    .get();
  reads += regSnap.size;
  let regToday = 0;
  let regComplete = 0; // preferredHour まで設定（オンボ完了）
  let regScopeSet = 0; // testScope.topics 1件以上
  let regBlocked = 0;
  const gradeC: Record<string, number> = {};
  const subjC: Record<string, number> = {};
  regSnap.docs.forEach((doc) => {
    const x = doc.data() as Record<string, unknown>;
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) return;
    regToday++;
    if (typeof x.preferredHour === "number") regComplete++;
    const topics = (x.testScope as { topics?: unknown } | undefined)?.topics;
    if (Array.isArray(topics) && topics.length > 0) regScopeSet++;
    if (x.blocked === true) regBlocked++;
    if (typeof x.grade === "string") gradeC[x.grade] = (gradeC[x.grade] || 0) + 1;
    if (typeof x.subject === "string")
      subjC[x.subject] = (subjC[x.subject] || 0) + 1;
  });
  const regCapped = regSnap.size >= TODAY_REG_LIMIT;

  // ---- 出力 ----
  const pct = (n: number, d: number) =>
    d > 0 ? `${((n / d) * 100).toFixed(1)}%` : "—";
  const sampleOldest = new Date(oldestSampleMs + JST).toISOString().slice(0, 16);
  const topTopics = Object.entries(topicC)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  console.log(`==== 取得日時(JST): ${new Date(now + JST).toISOString().slice(0, 16)} / today=${todayStr} ====`);
  console.log(`概算 read 消費: ~${reads}（count分は実際さらに少ない）\n`);

  console.log(`【ユーザー status 分布（count集計・管理者含む）】 総数=${totalUsers}`);
  statuses.forEach((s) =>
    console.log(`  ${s.padEnd(8)}: ${statusCounts[s]}  (${pct(statusCounts[s], totalUsers)})`)
  );
  console.log(`  (status無)  : ${noStatus}  (${pct(noStatus, totalUsers)})`);

  console.log(`\n【回答ボリューム（count集計）】`);
  console.log(`  直近24h の回答数 : ${ans24}`);
  console.log(`  直近7日 の回答数 : ${ans7d}`);

  console.log(`\n【直近回答サンプル（最新${recentSnap.size}件 / 最古=${sampleOldest} JST）】`);
  console.log(`  サンプル内ユニーク回答者: 24h=${uniq24.size}人 / 7日=${uniq7.size}人`);
  console.log(`  サンプル正答率(7日内): ${sampleCorrect}/${sampleTotal} (${pct(sampleCorrect, sampleTotal)})`);
  console.log(`  サンプル多出題トピック上位:`);
  topTopics.forEach(([t, n]) => console.log(`    ${t}: ${n}`));

  console.log(`\n【今日の登録者（onboardingStartedAt>=今日0:00 JST, 管理者除く）】${regCapped ? ` ※limit${TODAY_REG_LIMIT}到達` : ""}`);
  console.log(`  今日の登録者数        : ${regToday}`);
  console.log(`  うちオンボ完了(時刻設定): ${regComplete}  (${pct(regComplete, regToday)})`);
  console.log(`  うちテスト範囲 設定済み : ${regScopeSet}  (${pct(regScopeSet, regToday)})`);
  console.log(`  うちブロック          : ${regBlocked}`);
  console.log(`  学年分布: ${JSON.stringify(gradeC)}`);
  console.log(`  教科分布: ${JSON.stringify(subjC)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

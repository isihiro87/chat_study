/**
 * 現在の公式LINE登録者の統計情報を出力する一回限り（運用）スクリプト。
 *
 * 出力:
 *   - 全アカウント数（users コレクション件数）
 *   - LINE 連携済み（lineUserId あり）
 *   - オンボーディング完了 / 未完了
 *   - 学年別件数
 *   - 教科別件数
 *   - 配信時刻別件数
 *   - プラン別件数（free / premium）
 *     - うち trial 中 / paid / trial_expired
 *   - status 別件数（active / at-risk / dormant / churned）
 *   - クイズ回答有無 / 回答ユーザー比率
 *   - answers コレクション件数（全クイズ回答数）
 *   - bySubject 合計（正答率）
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/report-user-stats.ts
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

/** 集計対象から除外する管理者の lineUserId */
const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

function inc(map: Record<string, number>, key: string) {
  map[key] = (map[key] ?? 0) + 1;
}

function pct(n: number, d: number): string {
  if (d === 0) return "-";
  return `${((n / d) * 100).toFixed(1)}%`;
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  const now = Timestamp.now();

  console.log(`[report-user-stats] project=${FIREBASE_PROJECT_ID}`);
  console.log(`[report-user-stats] fetching users ...`);
  const usersSnap = await db.collection("users").get();
  console.log(`[report-user-stats] users.size=${usersSnap.size}`);

  // 管理者アカウントを除外したドキュメント集合を作る
  let adminExcluded = 0;
  const targetDocs = usersSnap.docs.filter((doc) => {
    const u = doc.data() as Record<string, unknown>;
    const lineId = typeof u.lineUserId === "string" ? u.lineUserId : "";
    if (ADMIN_LINE_USER_IDS.has(lineId)) {
      adminExcluded++;
      return false;
    }
    return true;
  });
  console.log(
    `[report-user-stats] excluded admin accounts=${adminExcluded}, target users=${targetDocs.length}`
  );

  let withLineUserId = 0;
  let onboardingCompleted = 0;
  const onboardingState: Record<string, number> = {};
  const gradeCounts: Record<string, number> = {};
  const subjectCounts: Record<string, number> = {};
  const hourCounts: Record<string, number> = {};
  const planCounts: Record<string, number> = {};
  const planSourceCounts: Record<string, number> = {};
  const statusCounts: Record<string, number> = {};
  let premiumActive = 0;          // plan === "premium" かつ premiumUntil 未到来
  let premiumExpired = 0;         // plan === "premium" だが premiumUntil 過去
  let trialNow = 0;               // planSource === "trial" かつ premiumUntil 未到来
  let answeredAny = 0;            // lastAnsweredAt あり
  let answeredLast7d = 0;
  let answeredLast30d = 0;
  let withGrade = 0;
  let withSubject = 0;
  let withNickname = 0;
  let withPreferredHour = 0;
  let totalAnsweredFromStats = 0;
  let totalCorrectFromStats = 0;
  let usersWithStats = 0;

  const sevenDaysAgo = Timestamp.fromMillis(now.toMillis() - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = Timestamp.fromMillis(now.toMillis() - 30 * 24 * 60 * 60 * 1000);

  for (const doc of targetDocs) {
    const u = doc.data() as Record<string, unknown>;
    if (typeof u.lineUserId === "string" && u.lineUserId) withLineUserId++;

    const ob = typeof u.onboardingState === "string" ? u.onboardingState : "(unset)";
    inc(onboardingState, ob);
    if (ob === "completed") onboardingCompleted++;

    if (typeof u.grade === "string" && u.grade) {
      withGrade++;
      inc(gradeCounts, u.grade);
    }
    if (typeof u.subject === "string" && u.subject) {
      withSubject++;
      inc(subjectCounts, u.subject);
    }
    if (typeof u.preferredHour === "number") {
      withPreferredHour++;
      inc(hourCounts, String(u.preferredHour));
    }
    if (typeof u.nickname === "string" && u.nickname) withNickname++;

    const plan = typeof u.plan === "string" ? u.plan : "(unset)";
    inc(planCounts, plan);
    const planSource = typeof u.planSource === "string" ? u.planSource : "(null)";
    inc(planSourceCounts, planSource);

    if (plan === "premium") {
      const pu = u.premiumUntil as Timestamp | undefined;
      if (pu && pu.toMillis() >= now.toMillis()) {
        premiumActive++;
        if (planSource === "trial") trialNow++;
      } else {
        premiumExpired++;
      }
    }

    const status = typeof u.status === "string" ? u.status : "(unset)";
    inc(statusCounts, status);

    const la = u.lastAnsweredAt as Timestamp | undefined;
    if (la) {
      answeredAny++;
      if (la.toMillis() >= sevenDaysAgo.toMillis()) answeredLast7d++;
      if (la.toMillis() >= thirtyDaysAgo.toMillis()) answeredLast30d++;
    }

    const stats = u.stats as
      | {
          totalAnswered?: number;
          totalCorrect?: number;
        }
      | undefined;
    if (stats && typeof stats.totalAnswered === "number") {
      usersWithStats++;
      totalAnsweredFromStats += stats.totalAnswered;
      totalCorrectFromStats += stats.totalCorrect ?? 0;
    }
  }

  // answers コレクション件数（管理者を除いた uid 集合に絞って手動カウント）
  const targetUids = new Set<string>(targetDocs.map((d) => d.id));
  let answersCount: number | null = null;
  try {
    const ansSnap = await db.collection("answers").select("uid").get();
    let n = 0;
    for (const d of ansSnap.docs) {
      const uid = (d.data() as { uid?: string }).uid;
      if (uid && targetUids.has(uid)) n++;
    }
    answersCount = n;
  } catch (e) {
    console.warn(`[report-user-stats] answers scan failed: ${(e as Error).message}`);
  }

  // premiumApplications も参考に
  let premiumAppCount: number | null = null;
  try {
    const c = await db.collection("premiumApplications").count().get();
    premiumAppCount = c.data().count;
  } catch {
    // 無視
  }

  const total = targetDocs.length;

  console.log("\n========== 公式LINE 登録者サマリ ==========");
  console.log(`(管理者アカウント除外: ${adminExcluded} 件)`);
  console.log(`登録アカウント総数（users コレクション）: ${total}`);
  console.log(`LINE 連携済み（lineUserId あり）        : ${withLineUserId}  (${pct(withLineUserId, total)})`);

  console.log("\n--- オンボーディング ---");
  console.log(`完了                                    : ${onboardingCompleted}  (${pct(onboardingCompleted, total)})`);
  for (const [k, v] of Object.entries(onboardingState).sort((a, b) => b[1] - a[1])) {
    console.log(`  state=${k.padEnd(20)} : ${v}`);
  }

  console.log("\n--- 登録項目（プロフィール充足率） ---");
  console.log(`ニックネーム入力済                      : ${withNickname}  (${pct(withNickname, total)})`);
  console.log(`学年登録済                              : ${withGrade}  (${pct(withGrade, total)})`);
  for (const [k, v] of Object.entries(gradeCounts).sort()) {
    console.log(`  ${k.padEnd(6)} : ${v}`);
  }
  console.log(`教科登録済                              : ${withSubject}  (${pct(withSubject, total)})`);
  for (const [k, v] of Object.entries(subjectCounts).sort()) {
    console.log(`  ${k.padEnd(10)} : ${v}`);
  }
  console.log(`配信時刻登録済                          : ${withPreferredHour}  (${pct(withPreferredHour, total)})`);
  for (const [k, v] of Object.entries(hourCounts).sort((a, b) => Number(a[0]) - Number(b[0]))) {
    console.log(`  ${k.padStart(2)}時 : ${v}`);
  }

  console.log("\n--- プラン ---");
  for (const [k, v] of Object.entries(planCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  plan=${k.padEnd(10)} : ${v}  (${pct(v, total)})`);
  }
  console.log(`  └ 現在 premium 有効（premiumUntil 未到来）: ${premiumActive}`);
  console.log(`     └ うち trial 中                          : ${trialNow}`);
  console.log(`     └ paid 想定                              : ${premiumActive - trialNow}`);
  console.log(`  └ premium ラベルだが期限切れ              : ${premiumExpired}`);
  console.log(`\n  planSource 内訳:`);
  for (const [k, v] of Object.entries(planSourceCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${k.padEnd(18)} : ${v}`);
  }
  if (premiumAppCount !== null) {
    console.log(`\n  premiumApplications コレクション件数       : ${premiumAppCount}`);
  }

  console.log("\n--- 活性状態（status） ---");
  for (const [k, v] of Object.entries(statusCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  status=${k.padEnd(12)} : ${v}  (${pct(v, total)})`);
  }

  console.log("\n--- クイズ回答 ---");
  console.log(`1問でも回答したユーザー                 : ${answeredAny}  (${pct(answeredAny, total)})`);
  console.log(`  直近7日に回答                          : ${answeredLast7d}  (${pct(answeredLast7d, total)})`);
  console.log(`  直近30日に回答                         : ${answeredLast30d}  (${pct(answeredLast30d, total)})`);

  if (answersCount !== null) {
    console.log(`\nanswers コレクション件数（全回答）      : ${answersCount}`);
    console.log(`  １アカウント当たり平均回答数           : ${(answersCount / Math.max(answeredAny, 1)).toFixed(2)} 問 / 回答者`);
    console.log(`  全アカウント平均                       : ${(answersCount / Math.max(total, 1)).toFixed(2)} 問 / 登録者`);
  }

  if (usersWithStats > 0) {
    console.log(`\nstats フィールドあり                    : ${usersWithStats}`);
    console.log(`  集計 totalAnswered                    : ${totalAnsweredFromStats}`);
    console.log(`  集計 totalCorrect                     : ${totalCorrectFromStats}`);
    console.log(`  正答率                                : ${pct(totalCorrectFromStats, totalAnsweredFromStats)}`);
  }

  console.log("\n========== 完了 ==========\n");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

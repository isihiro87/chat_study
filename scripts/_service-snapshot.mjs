/**
 * 公式LINE サービス全体スナップショット（count() 集計中心・read 激安）。
 * 登録/ブロック/ステータス構成/週次アクティブ/累計回答・正答/問題カバレッジ。
 * 実行: node scripts/_service-snapshot.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const DAY = 24 * 3600 * 1000;

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const now = Date.now();
  const since7 = Timestamp.fromMillis(now - 7 * DAY);
  const since30 = Timestamp.fromMillis(now - 30 * DAY);

  const users = db.collection("users");
  const answers = db.collection("answers");
  const questions = db.collection("questions");
  const cnt = async (q) => (await q.count().get()).data().count;

  const totalUsers = await cnt(users);
  const blocked = await cnt(users.where("blocked", "==", true));
  const weekly = await cnt(users.where("lastAnsweredAt", ">=", since7));
  const monthlyActive = await cnt(users.where("lastAnsweredAt", ">=", since30));
  const new7 = await cnt(users.where("onboardingStartedAt", ">=", since7));
  const new30 = await cnt(users.where("onboardingStartedAt", ">=", since30));

  const statuses = ["active", "at-risk", "dormant", "churned"];
  const statusCounts = {};
  for (const s of statuses) statusCounts[s] = await cnt(users.where("status", "==", s));

  const totalAns = await cnt(answers);
  const correctAns = await cnt(answers.where("isCorrect", "==", true));
  const ans7 = await cnt(answers.where("answeredAt", ">=", since7));

  const totalQ = await cnt(questions);

  const pct = (a, b) => (b ? ((a / b) * 100).toFixed(1) : "-");
  const reachable = totalUsers - blocked;

  console.log(`集計時刻(UTC): ${new Date(now).toISOString()}\n`);
  console.log("【ユーザー】");
  console.log(`  登録総数            : ${totalUsers}`);
  console.log(`  ブロック済み        : ${blocked} (${pct(blocked, totalUsers)}%)`);
  console.log(`  到達可能(非ブロック): ${reachable}`);
  console.log(`  新規登録(直近7日)   : ${new7}`);
  console.log(`  新規登録(直近30日)  : ${new30}`);
  console.log("\n【アクティブ】");
  console.log(`  週1学習UU(7日/1問+) : ${weekly}  (登録比 ${pct(weekly, totalUsers)}% / 非ブロック比 ${pct(weekly, reachable)}%)`);
  console.log(`  月間アクティブ(30日): ${monthlyActive}  (登録比 ${pct(monthlyActive, totalUsers)}%)`);
  console.log("\n【ステータス構成(recalc cron 基準)】");
  for (const s of statuses) console.log(`  ${s.padEnd(8)}: ${String(statusCounts[s]).padStart(4)} (${pct(statusCounts[s], totalUsers)}%)`);
  const sumStatus = statuses.reduce((a, s) => a + statusCounts[s], 0);
  console.log(`  (その他/未設定): ${totalUsers - sumStatus}`);
  console.log("\n【学習量】");
  console.log(`  累計回答数          : ${totalAns.toLocaleString()} 問`);
  console.log(`  累計正答数          : ${correctAns.toLocaleString()} 問 (累計正答率 ${pct(correctAns, totalAns)}%)`);
  console.log(`  直近7日の回答数     : ${ans7.toLocaleString()} 問`);
  console.log(`  問題マスタ総数      : ${totalQ.toLocaleString()} 問`);
}
main().catch((e) => { console.error(e); process.exit(1); });

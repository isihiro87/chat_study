/**
 * 公式LINE 直近7日間サマリ（使い捨て・Windows/node 直実行用）:
 *  - 7日間に1問以上解いた人数（週1学習UU / 北極星）: users.lastAnsweredAt >= now-7d を count()
 *  - 7日間に解かれた問題数・正答数・正答率: answers.answeredAt >= now-7d を count()
 * すべて count() 集計クエリ（全件 .get() しない / read 激安）。管理者2名は answers 側で概算除外。
 * 実行: node scripts/_seven-day-usage.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const DAY = 24 * 3600 * 1000;

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const now = Date.now();
  const since7 = Timestamp.fromMillis(now - 7 * DAY);

  const cnt = async (q) => (await q.count().get()).data().count;

  const users = db.collection("users");
  const answers = db.collection("answers");

  const weeklyUsers = await cnt(users.where("lastAnsweredAt", ">=", since7));
  const total7 = await cnt(answers.where("answeredAt", ">=", since7));

  console.log(`集計時刻(UTC): ${new Date(now).toISOString()}`);
  console.log(`対象期間     : 直近7日間 (${new Date(now - 7 * DAY).toISOString()} 〜)`);
  console.log("");
  console.log(`使ってくれた人数(7日で1問以上): ${weeklyUsers} 人`);
  console.log(`解かれた問題数(7日)          : ${total7.toLocaleString()} 問`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

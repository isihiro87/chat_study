/**
 * 公式LINE「直近1週間に1回でも問題を解いた人数」(= 週1学習UU / 北極星指標)。
 * lastAnsweredAt >= now-7d のユーザー数を count() 集計で取得（全件 .get() しない）。
 * blocked との内訳も出す。実行: npx tsx scripts/_weekly-active-uu.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const DAY = 24 * 3600 * 1000;

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const now = Date.now();
  const since7 = Timestamp.fromMillis(now - 7 * DAY);

  const cnt = async (q: FirebaseFirestore.Query) =>
    (await q.count().get()).data().count;

  const users = db.collection("users");

  const total = await cnt(users);
  const blocked = await cnt(users.where("blocked", "==", true));
  const weekly = await cnt(users.where("lastAnsweredAt", ">=", since7));

  // 週1アクティブ かつ ブロック: ブロック側(167件)だけ読んで最終回答日を見る(複合index不要・安い)
  const blockedSnap = await users
    .where("blocked", "==", true)
    .select("lastAnsweredAt")
    .get();
  let weeklyBlocked = 0;
  blockedSnap.docs.forEach((d) => {
    const la = (d.get("lastAnsweredAt") as Timestamp | undefined)?.toMillis?.();
    if (la && la >= since7.toMillis()) weeklyBlocked++;
  });

  const pct = (n: number) => `${((n / total) * 100).toFixed(1)}%`;

  console.log(`集計時刻: ${new Date(now).toISOString()}`);
  console.log(`総登録ユーザー(admin等含む): ${total}`);
  console.log(`ブロック済み: ${blocked} (${pct(blocked)})`);
  console.log(`未ブロック(到達可能): ${total - blocked}`);
  console.log("--- 週1学習UU(過去7日に1問以上回答) ---");
  console.log(`週1アクティブ 合計: ${weekly} (登録比 ${pct(weekly)})`);
  const reachableActive = weekly - weeklyBlocked;
  console.log(`  うちブロック済み: ${weeklyBlocked}`);
  console.log(`  うち未ブロック(現役): ${reachableActive}`);
  console.log(`未ブロック母数での週1アクティブ率: ${((reachableActive / (total - blocked)) * 100).toFixed(1)}%`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

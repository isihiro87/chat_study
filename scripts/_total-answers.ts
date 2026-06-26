/**
 * 全ユーザー合計の回答数・正答数・正答率。
 * answers コレクションの count() 集計クエリで取得（全件 .get() しない / read 激安）。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();

  const totalSnap = await db.collection("answers").count().get();
  const correctSnap = await db
    .collection("answers")
    .where("isCorrect", "==", true)
    .count()
    .get();

  const total = totalSnap.data().count;
  const correct = correctSnap.data().count;
  const rate = total > 0 ? ((correct / total) * 100).toFixed(1) : "-";

  console.log("=== みんなで解いた累計（全ユーザー・全期間） ===");
  console.log(`合計回答数 : ${total.toLocaleString()} 問`);
  console.log(`正答数     : ${correct.toLocaleString()} 問`);
  console.log(`誤答数     : ${(total - correct).toLocaleString()} 問`);
  console.log(`正答率     : ${rate}%`);
}

main().catch((e) => { console.error(e); process.exit(1); });

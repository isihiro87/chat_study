/**
 * ヘルス指標: 総ユーザー数 / status分布 / DAU・WAU / 範囲設定率（直近登録）。
 * count() 集計とレンジ+limitのみ（全件スキャン回避）。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

async function countWhere(db: FirebaseFirestore.Firestore, field: string, op: FirebaseFirestore.WhereFilterOp, val: unknown) {
  const s = await db.collection("users").where(field, op as any, val).count().get();
  return s.data().count;
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();
  const nowMs = Number(process.argv[2]);

  const total = (await db.collection("users").count().get()).data().count;
  console.log(`総ユーザー数: ${total}`);

  console.log(`\nstatus 分布:`);
  for (const st of ["active", "at-risk", "dormant", "churned"]) {
    const c = await countWhere(db, "status", "==", st);
    console.log(`  ${st.padEnd(8)}: ${String(c).padStart(4)} (${((c / total) * 100).toFixed(1)}%)`);
  }
  const noStatus = total - (await countWhere(db, "status", "in", ["active", "at-risk", "dormant", "churned"]));
  if (noStatus > 0) console.log(`  (status未設定): ${noStatus}`);

  // DAU / WAU: answers の distinct uid
  for (const [label, hours] of [["DAU(24h)", 24], ["WAU(7d)", 24 * 7]] as [string, number][]) {
    const since = Timestamp.fromMillis(nowMs - hours * 3600 * 1000);
    const snap = await db.collection("answers").where("answeredAt", ">=", since).limit(20000).get();
    const uids = new Set<string>();
    for (const d of snap.docs) { const u = d.get("uid"); if (typeof u === "string") uids.add(u); }
    console.log(`\n${label}: ${uids.size} 人（回答数 ${snap.size}）`);
  }

  // 範囲設定率: testScope.topics を持つ割合（全体）
  const withScope = (await db.collection("users").where("testScope.topics", "!=", null).count().get()).data().count;
  console.log(`\n範囲設定済み（testScope.topicsあり）: ${withScope} / ${total} (${((withScope / total) * 100).toFixed(1)}%)`);
}

main().catch((e) => { console.error(e); process.exit(1); });

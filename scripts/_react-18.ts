import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  // 18時ユーザーの uid 集合
  const us = await db.collection("users").get();
  const u18 = new Set<string>();
  us.docs.forEach(d=>{ if((d.data() as any).preferredHour===18) u18.add(d.id); });
  // 17:30 JST(08:30Z) 以降の answers
  const since = Timestamp.fromDate(new Date("2026-06-01T08:30:00Z"));
  const ans = await db.collection("answers").where("answeredAt",">=",since).get();
  const reacted18 = new Set<string>();
  ans.docs.forEach(d=>{ const u=(d.data() as any).uid; if(u18.has(u)) reacted18.add(u); });
  console.log(`18時ユーザー数: ${u18.size}`);
  console.log(`17:30以降の全回答: ${ans.size}件`);
  console.log(`うち18時ユーザーの反応: ${reacted18.size}名 → ${reacted18.size>0?"✅ 18時バケットに配信は届いている(個別ミスの可能性)":"⚠️ 反応ゼロ(systemic未着の可能性)"}`);
  // メッセージ送信ログ(deliveryStats relaunchSegmented)で D が増えたか
  const ds = await db.doc("deliveryStats/2026-05").get();
  const dd=(ds.data()??{}) as any;
  console.log(`\ndeliveryStats relaunchSegmentedD(累計): ${dd.relaunchSegmentedD}`);
}
main().catch(e=>{console.error(e);process.exit(1);});

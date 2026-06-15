import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  // 6時バッチ発火: 2026-05-31T20:50Z。それ以降の回答=反応
  const since = Timestamp.fromDate(new Date("2026-05-31T20:50:00Z"));
  const snap = await db.collection("answers").where("answeredAt", ">=", since).orderBy("answeredAt","asc").get();
  console.log(`\n=== relaunch発火(05:50 JST)以降の回答: ${snap.size}件 ===`);
  const byUser = new Map<string, number>();
  let restart = 0;
  snap.docs.forEach(d=>{
    const u = d.get("uid") as string;
    byUser.set(u, (byUser.get(u)??0)+1);
  });
  console.log(`回答したユニークユーザー数: ${byUser.size}`);
  console.log(`\nユーザー別 回答数（上位）:`);
  [...byUser.entries()].sort((a,b)=>b[1]-a[1]).slice(0,15).forEach(([u,n])=>console.log(`  ${u}: ${n}問`));

  // 復帰系: status が active に戻ったユーザー（statusChangedAt が発火後）
  const us = await db.collection("users").get();
  let reactivated = 0;
  us.docs.forEach(d=>{
    const x=d.data() as any;
    const sc = x.statusChangedAt?.toDate?.();
    if (sc && sc.getTime() >= new Date("2026-05-31T20:50:00Z").getTime() && x.status==="active") reactivated++;
  });
  console.log(`\n発火後に status=active へ復帰したユーザー: ${reactivated}名`);

  // admin 2アカウントの状態
  console.log(`\n=== admin 除外アカウントの確認 ===`);
  for (const lid of ["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]){
    const d = await db.doc(`users/line:${lid}`).get();
    const x=(d.data()??{}) as any;
    console.log(`  ${lid.slice(0,6)}…${lid.slice(-4)}: total=${x.stats?.totalAnswered??0} ph=${x.preferredHour} status=${x.status} → relaunch対象外(admin)`);
  }
}
main().catch(e=>{console.error(e);process.exit(1);});

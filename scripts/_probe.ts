import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const JST = 9*3600*1000;
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const now = Date.now();
  console.log("now JST:", new Date(now+JST).toISOString().slice(0,16));
  // deliveryStats 当月
  const ym = new Date(now+JST).toISOString().slice(0,7);
  const ds = await db.doc(`deliveryStats/${ym}`).get();
  console.log(`deliveryStats/${ym}:`, ds.exists ? JSON.stringify(ds.data()) : "(none)");
  // 昨日範囲
  const yStr = new Date(now+JST-86400000).toISOString().slice(0,10);
  const tStr = new Date(now+JST).toISOString().slice(0,10);
  console.log("yesterday(JST)=", yStr, " today=", tStr);
  const yStart = Timestamp.fromMillis(new Date(yStr+"T00:00:00Z").getTime()-JST);
  const yEnd = Timestamp.fromMillis(new Date(tStr+"T00:00:00Z").getTime()-JST);
  const ansY = await db.collection("answers").where("answeredAt",">=",yStart).where("answeredAt","<",yEnd).count().get();
  console.log("answers yesterday count():", ansY.data().count);
  // 今日すでに配信が走ったか（lastQuestionDeliveredAt >= today）
  const delToday = await db.collection("users").where("lastQuestionDeliveredAt",">=",yEnd).count().get();
  console.log("users lastQuestionDeliveredAt >= today count():", delToday.data().count);
}
main().catch(e=>{console.error(e.message||e);process.exit(1);});

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000; const day=(d:Date)=>new Date(d.getTime()+JST).toISOString().slice(0,10);
const tsOf=(x:any)=>x?.toDate?.()??null;
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const fe = await db.collection("premiumFunnelEvents").where("eventType","==","trial_reminder_sent").get();
  let total6_2=0; const byCtx:Record<string,number>={};
  const sample:any[]=[];
  fe.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(line&&ADMIN.has(line))return;
    const t=tsOf(x.occurredAt)??tsOf(x.createdAt); if(!t||day(t)!=="2026-06-02")return; total6_2++;
    const ctx=JSON.stringify(x.context??{}); byCtx[ctx]=(byCtx[ctx]||0)+1;
    if(sample.length<3)sample.push(x.context);});
  console.log(`6/2 の trial_reminder_sent: ${total6_2}件`);
  console.log(`context 別内訳:`);
  Object.entries(byCtx).sort((a,b)=>b[1]-a[1]).forEach(([c,n])=>console.log(`  ${n}件: ${c}`));
  console.log(`\nサンプル context: ${JSON.stringify(sample,null,2)}`);
}
main().catch(e=>{console.error(e);process.exit(1);});

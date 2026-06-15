import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000; const today=new Date(Date.now()+JST).toISOString().slice(0,10);
const todStartMs=new Date(today+"T00:00:00Z").getTime()-JST;
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  let total=0, newToday=0, neverDel=0, neverNew=0, neverNoPH=0, neverHasPH=0;
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return; total++;
    const c=x.createdAt?.toDate?.(); const isNew=c&&c.getTime()>=todStartMs; if(isNew)newToday++;
    const g=x.grade; const hasP=(g==="中1"||g==="中2"||g==="中3")&&typeof x.subject==="string"&&x.subject;
    if(hasP && x.blocked!==true && !x.lastQuestionDeliveredAt){ neverDel++; if(isNew)neverNew++; if(typeof x.preferredHour==="number")neverHasPH++; else neverNoPH++; }
  });
  console.log(`総ユーザー(管理者除く): ${total}  / 本日新規(createdAt today): ${newToday}`);
  console.log(`一度も配信なし(profile有非block): ${neverDel}（うち本日新規 ${neverNew} / preferredHour有 ${neverHasPH} / 未設定 ${neverNoPH}）`);
  // ファネル(本日)
  const fe = await db.collection("premiumFunnelEvents").get();
  const todayBy:Record<string,Set<string>>={};
  fe.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(line&&ADMIN.has(line))return;
    const c=x.createdAt?.toDate?.(); if(!(c&&c.getTime()>=todStartMs))return;
    (todayBy[x.eventType]??=new Set()).add(x.uid??x.lineUserId??Math.random().toString());});
  console.log(`\n【本日のファネル(UU)】`);
  ["richmenu_premium_info_tap","liff_units_open","liff_premium_info_view","liff_premium_apply_view","liff_premium_apply_submit","trial_started","paid_contract_started"].forEach(k=>{
    console.log(`  ${k}: ${todayBy[k]?.size??0}`);});
}
main().catch(e=>{console.error(e);process.exit(1);});

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000;
const d2=(d:Date)=>new Date(d.getTime()+JST).toISOString().slice(5,16).replace("T"," ");
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();

  // --- relaunch 当日(6/1)の反応: 05:50 JST(20:50Z 5/31) 以降の answers ---
  const relaunchFire = new Date("2026-05-31T20:50:00Z");
  const ans = await db.collection("answers").where("answeredAt",">=",Timestamp.fromDate(relaunchFire)).get();
  const users = new Set<string>(); const byHourJST:Record<number,number>={};
  ans.docs.forEach(d=>{const x=d.data() as any; users.add(x.uid);
    const h=new Date((x.answeredAt.toDate().getTime()+JST)).getUTCHours(); byHourJST[h]=(byHourJST[h]||0)+1;});
  console.log(`\n=== relaunch発火(6/1 05:50)以降の回答 ===`);
  console.log(`回答数: ${ans.size} / ユニーク: ${users.size}名`);
  console.log(`JST時間帯別: ${Object.entries(byHourJST).sort((a,b)=>+a[0]-+b[0]).map(([h,n])=>`${h}時:${n}`).join(" ")}`);

  // --- users 全体: testScope 設定率 / scope nudge / trial 利用 ---
  const us = await db.collection("users").get();
  let scopeSet=0, total=0, trial=0, trialAnswered=0, nudgeGot=0, igRef=0;
  const trialUids:string[]=[];
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId;
    if(typeof line==="string" && ADMIN.has(line)) return; total++;
    if(Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0) scopeSet++;
    if(typeof x.scopeSetupNudgeCount==="number"&&x.scopeSetupNudgeCount>0) nudgeGot++;
    if(x.referrer) igRef++;
    if(x.planSource==="trial"){ trial++; trialUids.push(d.id);
      const fe=x.firstExtraQuestionAt; if(fe) trialAnswered++; }
  });
  console.log(`\n=== 設定・利用実態（対象${total}名）===`);
  console.log(`testScope 設定済み: ${scopeSet}名 (${(scopeSet/total*100).toFixed(1)}%)  ← 未設定 ${total-scopeSet}名`);
  console.log(`範囲設定nudge受信(count>0): ${nudgeGot}名 ※deep-link/nudgeは本日デプロイ`);
  console.log(`trial中: ${trial}名 / うち「追加で解く」起動経験: ${trialAnswered}名`);
  console.log(`Instagram 流入(referrer有): ${igRef}名`);

  // --- trial_started のタイミング（本日分か）---
  const fe = await db.collection("premiumFunnelEvents").where("eventType","==","trial_started").get();
  let today=0; const since=new Date("2026-05-31T15:00:00Z"); // 6/1 00:00 JST
  fe.docs.forEach(d=>{const t=(d.data() as any).createdAt?.toDate?.(); if(t&&t>=since) today++;});
  console.log(`\n=== trial_started ${fe.size}件中、6/1 以降: ${today}件 ===`);
}
main().catch(e=>{console.error(e);process.exit(1);});

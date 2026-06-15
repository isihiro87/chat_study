import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000;
const dayJST=(d:Date)=>new Date(d.getTime()+JST).toISOString().slice(0,10);
const hourJST=(d:Date)=>new Date(d.getTime()+JST).getUTCHours();
const tsOf=(x:any)=> x?.toDate?.() ?? (x?._seconds?new Date(x._seconds*1000):null);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const D1="2026-06-01", D2="2026-06-02";

  // ---- answers 日別 ----
  const since=Timestamp.fromDate(new Date("2026-05-31T15:00:00Z")); // 6/1 0:00 JST
  const ans=await db.collection("answers").where("answeredAt",">=",since).get();
  const day:Record<string,{n:number;u:Set<string>;c:number;hr:Record<number,number>}>={};
  ans.docs.forEach(d=>{const x=d.data() as any; const t=x.answeredAt?.toDate?.(); if(!t)return; const dd=dayJST(t);
    (day[dd]??={n:0,u:new Set(),c:0,hr:{}}); day[dd].n++; day[dd].u.add(x.uid); if(x.isCorrect)day[dd].c++;
    const h=hourJST(t); day[dd].hr[h]=(day[dd].hr[h]||0)+1;});
  console.log(`\n【回答（answers）日別】`);
  for(const dd of [D1,D2]){const v=day[dd]; if(!v){console.log(`  ${dd}: なし`);continue;}
    console.log(`  ${dd}: 回答${v.n} / ユニーク${v.u.size}名 / 正答率${Math.round(v.c/v.n*100)}%`);}
  if(day[D2])console.log(`  6/2 時間帯(JST): ${Object.entries(day[D2].hr).sort((a,b)=>+a[0]-+b[0]).map(([h,n])=>`${h}時:${n}`).join(" ")}`);

  // ---- users スナップショット ----
  const us=await db.collection("users").get();
  let total=0,prem=0,scope=0,delToday=0;
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return; total++;
    if(x.plan==="premium")prem++;
    if(Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0)scope++;
    const ld=x.lastQuestionDeliveredAt?.toDate?.(); if(ld&&dayJST(ld)===D2)delToday++;});
  console.log(`\n【現在のスナップショット（管理者除く）】`);
  console.log(`  総ユーザー: ${total} / premium(trial): ${prem} / testScope設定済み: ${scope} / 本日(6/2)配信済み: ${delToday}`);

  // ---- funnelEvents 日別（occurredAt or createdAt or occurredAt）----
  const fe=await db.collection("premiumFunnelEvents").get();
  const fday:Record<string,Record<string,Set<string>>>={};
  fe.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(line&&ADMIN.has(line))return;
    const t=tsOf(x.occurredAt)??tsOf(x.createdAt); if(!t)return; const dd=dayJST(t);
    (fday[dd]??={}); (fday[dd][x.eventType]??=new Set()).add(x.uid||x.lineUserId||Math.random().toString());});
  console.log(`\n【funnelイベント 日別 UU】`);
  for(const dd of [D1,D2]){const v=fday[dd]; console.log(`  ${dd}: ${v?Object.entries(v).map(([k,s])=>`${k}=${s.size}`).join(" / "):"なし"}`);}
}
main().catch(e=>{console.error(e);process.exit(1);});

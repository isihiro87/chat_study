import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const ADMIN_UID = new Set([...ADMIN].map(x=>"line:"+x));
const JST=9*3600*1000; const day=(d:Date)=>new Date(d.getTime()+JST).toISOString().slice(0,10);
const tsOf=(x:any)=>x?.toDate?.()??null;
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const D1="2026-06-01", D2="2026-06-02";

  const us=await db.collection("users").get();
  let total=0, prem=0, free=0, scope=0, blocked=0;
  let trial=0, trialUsedExtra=0, delToday=0;
  const trialUids=new Set<string>();
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return; total++;
    if(x.blocked===true)blocked++;
    if(x.plan==="premium")prem++; else free++;
    if(Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0)scope++;
    if(x.planSource==="trial"){trial++; trialUids.add(d.id); if(x.firstExtraQuestionAt)trialUsedExtra++;}
    const ld=x.lastQuestionDeliveredAt?.toDate?.(); if(ld&&day(ld)===D2)delToday++;
  });

  // answers
  const since=Timestamp.fromDate(new Date("2026-05-31T15:00:00Z"));
  const ans=await db.collection("answers").where("answeredAt",">=",since).get();
  const ansBy:Record<string,Set<string>>={[D1]:new Set(),[D2]:new Set()};
  let correctToday=0, ansCntToday=0;
  ans.docs.forEach(d=>{const x=d.data() as any; if(ADMIN_UID.has(x.uid))return; const t=x.answeredAt?.toDate?.(); if(!t)return; const dd=day(t); if(ansBy[dd])ansBy[dd].add(x.uid);
    if(dd===D2){ansCntToday++; if(x.isCorrect)correctToday++;}});

  // 配信済み(6/2)集合（回答率用）
  const delTodaySet=new Set<string>();
  us.docs.forEach(d=>{const x=d.data() as any; if(ADMIN_UID.has(d.id))return; const ld=x.lastQuestionDeliveredAt?.toDate?.(); if(ld&&day(ld)===D2)delTodaySet.add(d.id);});
  const inter=(a:Set<string>,b:Set<string>)=>[...a].filter(x=>b.has(x)).length;

  // funnel (UU, 全期間 & 6/2)
  const fe=await db.collection("premiumFunnelEvents").get();
  const uuAll:Record<string,Set<string>>={}; const uu62:Record<string,Set<string>>={};
  const unitsUsers=new Set<string>();
  fe.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(line&&ADMIN.has(line))return;
    const id=x.uid||x.lineUserId; (uuAll[x.eventType]??=new Set()).add(id);
    if(x.eventType==="liff_units_open")unitsUsers.add(x.uid||("line:"+x.lineUserId));
    const t=tsOf(x.occurredAt)??tsOf(x.createdAt); if(t&&day(t)===D2)(uu62[x.eventType]??=new Set()).add(id);});

  const trialUnitsUsed=[...trialUids].filter(u=>unitsUsers.has(u)).length;

  console.log(`\n========== 現状分析 (${D2}) ==========`);
  console.log(`\n【規模】総${total} / premium(trial)${prem} / free${free} / blocked${blocked}`);
  console.log(`\n【範囲設定】設定済み ${scope} (${Math.round(scope/total*100)}%) / 未設定 ${total-scope}`);
  console.log(`  6/2 scope funnel: open=${uu62.liff_scope_open?.size??0} save=${uu62.liff_scope_save?.size??0}`);
  console.log(`\n【回答状況】`);
  console.log(`  本日配信済み ${delTodaySet.size} / うち本日回答 ${inter(ansBy[D2],delTodaySet)} → 回答率 ${delTodaySet.size?Math.round(inter(ansBy[D2],delTodaySet)/delTodaySet.size*100):0}%`);
  console.log(`  本日回答ユニーク ${ansBy[D2].size} / 回答数 ${ansCntToday} / 正答率 ${ansCntToday?Math.round(correctToday/ansCntToday*100):0}%`);
  console.log(`  継続率 6/1→6/2: ${ansBy[D1].size?Math.round(inter(ansBy[D1],ansBy[D2])/ansBy[D1].size*100):0}% (6/1回答${ansBy[D1].size}→両日${inter(ansBy[D1],ansBy[D2])})`);
  console.log(`\n【プレミアム機能 利用率（trial ${trial}名中）】`);
  console.log(`  「追加で解く」起動(firstExtraQuestionAt): ${trialUsedExtra} (${trial?Math.round(trialUsedExtra/trial*100):0}%)`);
  console.log(`  「じっくり学ぶ」起動(liff_units_open): ${trialUnitsUsed} (${trial?Math.round(trialUnitsUsed/trial*100):0}%)`);
  console.log(`\n【転換ファネル（累計UU）】`);
  ["richmenu_premium_info_tap","liff_premium_apply_view","liff_apply_consent_checked","liff_apply_checkout_opened","liff_apply_parent_link_shared","liff_premium_apply_submit","paid_contract_started"].forEach(k=>console.log(`  ${k}: ${uuAll[k]?.size??0}`));
}
main().catch(e=>{console.error(e);process.exit(1);});

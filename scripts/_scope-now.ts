import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000; const day=(d:Date)=>new Date(d.getTime()+JST).toISOString().slice(0,10);
const tsOf=(x:any)=>x?.toDate?.()??null;
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  let total=0, scope=0, scopeUpdatedToday=0;
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return; total++;
    if(Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0){scope++;
      const u=tsOf(x.testScope?.updatedAt); if(u&&day(u)==="2026-06-02")scopeUpdatedToday++;}
  });
  console.log(`総ユーザー(管理者除く): ${total}`);
  console.log(`testScope 設定済み: ${scope}（うち 6/2 に更新: ${scopeUpdatedToday}）`);

  // scope funnel イベント（6/2）
  const fe = await db.collection("premiumFunnelEvents").get();
  const byDay:Record<string,Record<string,Set<string>>>={};
  fe.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(line&&ADMIN.has(line))return;
    if(!["liff_scope_open","liff_scope_save"].includes(x.eventType))return;
    const t=tsOf(x.occurredAt)??tsOf(x.createdAt); if(!t)return; const dd=day(t);
    (byDay[dd]??={}); (byDay[dd][x.eventType]??=new Set()).add(x.uid||x.lineUserId);});
  console.log(`\n範囲設定 funnel（UU）:`);
  ["2026-06-01","2026-06-02"].forEach(dd=>{const v=byDay[dd];
    console.log(`  ${dd}: open=${v?.liff_scope_open?.size??0} / save=${v?.liff_scope_save?.size??0}`);});
}
main().catch(e=>{console.error(e);process.exit(1);});

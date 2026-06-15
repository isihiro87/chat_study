import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const ADMIN_UID = new Set(["line:U429b1d951fc7236c9e8e85e5ca96b910","line:U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000; const day=(d:Date)=>new Date(d.getTime()+JST).toISOString().slice(0,10);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const D1="2026-06-01", D2="2026-06-02";

  // answers 6/1以降
  const since=Timestamp.fromDate(new Date("2026-05-31T15:00:00Z"));
  const ans=await db.collection("answers").where("answeredAt",">=",since).get();
  const ansBy:Record<string,Set<string>>={[D1]:new Set(),[D2]:new Set()};
  ans.docs.forEach(d=>{const x=d.data() as any; if(ADMIN_UID.has(x.uid))return; const t=x.answeredAt?.toDate?.(); if(!t)return; const dd=day(t); if(ansBy[dd])ansBy[dd].add(x.uid);});

  // 配信済み(6/2) ユーザー集合
  const us=await db.collection("users").get();
  const deliveredToday=new Set<string>(); const deliveredYesterday=new Set<string>();
  us.docs.forEach(d=>{const x=d.data() as any; if(ADMIN_UID.has(d.id))return;
    const ld=x.lastQuestionDeliveredAt?.toDate?.(); if(!ld)return; const dd=day(ld);
    if(dd===D2)deliveredToday.add(d.id); if(dd===D1)deliveredYesterday.add(d.id);});

  const inter=(a:Set<string>,b:Set<string>)=>[...a].filter(x=>b.has(x)).length;

  console.log(`\n=== 今日(6/2)の一問一答 回答率（配信済みユーザーのみ・途中経過）===`);
  const dToday=deliveredToday.size;
  const answeredAmongDelivered=inter(ansBy[D2],deliveredToday);
  console.log(`  本日配信済み: ${dToday}名`);
  console.log(`  うち本日回答: ${answeredAmongDelivered}名`);
  console.log(`  → 回答率: ${dToday?Math.round(answeredAmongDelivered/dToday*100):0}%`);
  console.log(`  （参考）本日回答ユニーク総数: ${ansBy[D2].size}`);

  console.log(`\n=== 昨日(6/1)→今日(6/2)の継続率（途中経過）===`);
  const a1=ansBy[D1].size, a2=ansBy[D2].size, both=inter(ansBy[D1],ansBy[D2]);
  console.log(`  6/1 回答者: ${a1}名 / 6/2 回答者: ${a2}名`);
  console.log(`  両日とも回答(継続): ${both}名`);
  console.log(`  → 継続率(6/1回答者のうち6/2も回答): ${a1?Math.round(both/a1*100):0}%`);
  console.log(`  （注: 6/2は18/20時コホート未回答のため過小評価。終日後に再計測推奨）`);
}
main().catch(e=>{console.error(e);process.exit(1);});

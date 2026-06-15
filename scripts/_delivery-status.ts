import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000; const today=new Date(Date.now()+JST).toISOString().slice(0,10);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  let neverDelivered=0, deliveredToday=0, deliveredPast=0;
  let neverDeliveredScoped=0, neverDeliveredNoScope=0, neverNoQuestionsRisk=0;
  let excluded=0;
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId;
    if(typeof line==="string"&&ADMIN.has(line)){excluded++;return;}
    if(x.blocked===true){excluded++;return;}
    const g=x.grade; const hasP=(g==="中1"||g==="中2"||g==="中3")&&typeof x.subject==="string"&&x.subject;
    if(!hasP){excluded++;return;}
    const ld=x.lastQuestionDeliveredAt?.toDate?.();
    const ldDate= ld? new Date(ld.getTime()+JST).toISOString().slice(0,10): null;
    if(!ldDate){ neverDelivered++; const sc=Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0; if(sc)neverDeliveredScoped++; else neverDeliveredNoScope++; }
    else if(ldDate===today) deliveredToday++;
    else deliveredPast++;
  });
  console.log(`今日(JST)=${today}`);
  console.log(`対象外(admin/blocked/profile無): ${excluded}`);
  console.log(`\n配信対象になり得る(profile有・非blocked) の内訳:`);
  console.log(`  一度も配信なし(=1問目未送信): ${neverDelivered}  ← 今回の対象`);
  console.log(`     └ 範囲設定あり: ${neverDeliveredScoped} / 範囲なし(全範囲): ${neverDeliveredNoScope}`);
  console.log(`  今日配信済み: ${deliveredToday}`);
  console.log(`  過去に配信あり(今日未配信): ${deliveredPast}`);
}
main().catch(e=>{console.error(e);process.exit(1);});

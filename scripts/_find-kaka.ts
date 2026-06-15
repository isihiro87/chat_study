import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  // displayName/nickname に「華夏」を含む、または preferredHour=18 を列挙
  const hit:any[]=[];
  us.docs.forEach(d=>{const x=d.data() as any;
    const name=`${x.displayName??""} ${x.nickname??""}`;
    if(name.includes("華夏")) hit.push({uid:d.id,x,why:"name"});
  });
  console.log(`=== 「華夏」名で一致: ${hit.length}件 ===`);
  const classify=(x:any)=>{const g=x.grade;const hasP=(g==="中1"||g==="中2"||g==="中3")&&typeof x.subject==="string"&&x.subject;const hasT=typeof x.preferredHour==="number";const ta=x.stats?.totalAnswered??0;const sc=Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0;
    if(!x.lineUserId)return"除外:lineなし"; if(ADMIN.has(x.lineUserId))return"除外:admin"; if(x.blocked===true)return"除外:blocked";
    if(ta>=1)return"E"; if(!hasP)return"A"; if(!hasT)return"B"; if(!sc)return"C"; return"D";};
  hit.forEach(h=>{const x=h.x;
    console.log(`\nuid=${h.uid}`);
    console.log(`  displayName=${x.displayName} nickname=${x.nickname}`);
    console.log(`  line=${x.lineUserId?.slice(0,8)}… blocked=${x.blocked} grade=${x.grade} subject=${x.subject} preferredHour=${x.preferredHour}(${typeof x.preferredHour})`);
    console.log(`  plan=${x.plan} planSource=${x.planSource} status=${x.status} totalAnswered=${x.stats?.totalAnswered} scope=${(x.testScope?.topics?.length)||0}`);
    console.log(`  → relaunch分類: ${classify(x)} / 18時バケット対象か: ${x.preferredHour===18?"YES":"NO("+x.preferredHour+")"}`);
  });
  if(!hit.length){
    console.log("displayName一致なし。preferredHour=18 のユーザー一覧(分類付き):");
    us.docs.forEach(d=>{const x=d.data() as any; if(x.preferredHour===18){console.log(`  ${x.displayName??x.nickname??d.id} line=${x.lineUserId?.slice(0,8)} blocked=${x.blocked} ans=${x.stats?.totalAnswered} → ${classify(x)}`);}});
  }
}
main().catch(e=>{console.error(e);process.exit(1);});

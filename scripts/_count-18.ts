import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  const classify=(x:any)=>{const g=x.grade;const hasP=(g==="中1"||g==="中2"||g==="中3")&&typeof x.subject==="string"&&x.subject;const hasT=typeof x.preferredHour==="number";const ta=x.stats?.totalAnswered??0;const sc=Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0;
    if(!x.lineUserId)return"x:line無"; if(ADMIN.has(x.lineUserId))return"x:admin"; if(x.blocked===true)return"x:blocked";
    if(ta>=1)return"E"; if(!hasP)return"A"; if(!hasT)return"B"; if(!sc)return"C"; return"D";};
  const seg:Record<string,number>={};
  let total18=0, kaka=false;
  us.docs.forEach(d=>{const x=d.data() as any; if(x.preferredHour!==18)return; total18++;
    const c=classify(x); seg[c]=(seg[c]||0)+1;
    if(x.displayName==="華夏") kaka=true;
  });
  console.log(`preferredHour=18 のユーザー総数: ${total18}`);
  console.log(`セグメント分布: ${JSON.stringify(seg)}`);
  console.log(`17:30 lock の送信実績: C=32 D=12 E=4 (計48)`);
  const sendable=(seg.C||0)+(seg.D||0)+(seg.E||0)+(seg.A||0)+(seg.B||0);
  console.log(`現在の送信可能(非除外)合計: ${sendable}`);
  console.log(`華夏 は preferredHour=18 集合に含まれる: ${kaka}`);
}
main().catch(e=>{console.error(e);process.exit(1);});

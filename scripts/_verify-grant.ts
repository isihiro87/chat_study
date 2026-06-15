import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  let prem=0, premTrial=0, free=0, premNoMenu=0;
  let pendingFree=0; // 18/20時でまだfree
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return;
    if(x.plan==="premium"){prem++; if(x.planSource==="trial")premTrial++; if(x.richMenuType!=="trial")premNoMenu++;}
    else { free++; if(x.preferredHour===18||x.preferredHour===20)pendingFree++; }
  });
  console.log(`premium: ${prem}（うち trial: ${premTrial} / richMenuType!=trial: ${premNoMenu}）`);
  console.log(`free: ${free}（うち18/20時のfree残: ${pendingFree}）`);
}
main().catch(e=>{console.error(e);process.exit(1);});

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  const vals=new Set<string>(); let withScope=0;
  us.docs.forEach(d=>{const x=d.data() as any; vals.add(JSON.stringify(x.grade));
    if(Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0)withScope++;});
  console.log("users.grade のユニーク生値:", [...vals].join(" "));
  console.log("scope設定済み:", withScope);
}
main().catch(e=>{console.error(e);process.exit(1);});

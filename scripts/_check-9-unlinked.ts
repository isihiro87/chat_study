import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const snap = await db.collection("questions").where("subject","==","history").get();
  const noTopic = snap.docs.filter(d=>{const t=(d.data() as any).topic; return typeof t!=="string" || t.trim()==="";});
  console.log(`topic 無し/空の history 問題: ${noTopic.length}件`);
  noTopic.forEach(d=>{const x=d.data() as any; console.log(`  id=${d.id} topic=${JSON.stringify(x.topic)} src=${x.syncSource} grade=${x.grade}`);});
}
main().catch(e=>{console.error(e);process.exit(1);});

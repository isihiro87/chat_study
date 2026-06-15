import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const d = await db.doc("questions/q-history-nanban-trade-q1").get();
  console.log("exists:", d.exists);
  if(d.exists){ const x=d.data() as any; console.log("fields:", JSON.stringify({topic:x.topic, topicId:x.topicId, subject:x.subject, grade:x.grade, syncSource:x.syncSource})); }
}
main().catch(e=>{console.error(e);process.exit(1);});

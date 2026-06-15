import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as reg from "../src/data/generated/topic-registry.generated";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const q = await db.collection("questions").get();
  const qTopics=new Set<string>(); q.docs.forEach(d=>{const t=(d.data() as any).topic; if(t)qTopics.add(t);});
  const metas:any[] = (reg as any).topicMetas || [];
  console.log(`topic-registry topicMetas: ${metas.length} / questions distinct topic: ${qTopics.size}`);
  const names = metas.map((m:any)=>m.name);
  const missing = names.filter((n:string)=>!qTopics.has(n));
  console.log(`\nregistryにあるが questions に無い単元: ${missing.length}/${names.length}`);
  console.log("（範囲設定で選べるが配信されない単元）:");
  missing.slice(0,40).forEach((n:string)=>console.log(`  - ${n}`));
}
main().catch(e=>{console.error(e);process.exit(1);});

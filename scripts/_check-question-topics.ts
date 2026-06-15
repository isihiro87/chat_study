import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const q = await db.collection("questions").get();
  const bySubject: Record<string,number> = {};
  const bySource: Record<string,number> = {};
  q.docs.forEach(d=>{ const x=d.data() as any;
    bySubject[x.subject??"(none)"]=(bySubject[x.subject??"(none)"]||0)+1;
    bySource[x.syncSource??"(none)"]=(bySource[x.syncSource??"(none)"]||0)+1;
  });
  console.log("questions 総数:", q.size);
  console.log("subject別:", JSON.stringify(bySubject));
  console.log("syncSource別:", JSON.stringify(bySource));
  console.log("\nhistory の topic サンプル(10):");
  q.docs.filter(d=>d.data().subject==="history").slice(0,10).forEach(d=>{
    const x=d.data() as any; console.log(`  src=${x.syncSource} topic="${x.topic}"`);
  });
  // users の subject 分布
  const u = await db.collection("users").get();
  const us: Record<string,number> = {};
  u.docs.forEach(d=>{ const s=d.data().subject??"(none)"; us[s]=(us[s]||0)+1; });
  console.log("\nusers の subject 分布:", JSON.stringify(us));
}
main().catch(e=>{console.error(e);process.exit(1);});

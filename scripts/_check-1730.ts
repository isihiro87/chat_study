import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const snap = await db.collection("relaunchSends").get();
  console.log(`=== relaunchSends lock 一覧 (${snap.size}) ===`);
  snap.docs.sort((a,b)=>a.id.localeCompare(b.id)).forEach(d=>{
    const x=d.data() as any;
    console.log(`[${d.id}] started=${x.startedAt?.toDate?.()?.toISOString?.()??"-"} finished=${x.finishedAt?.toDate?.()?.toISOString?.()??"未完"} stats=${x.stats?JSON.stringify(x.stats):"-"}`);
  });
}
main().catch(e=>{console.error(e);process.exit(1);});

import { initializeApp, getApps, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
if (getApps().length === 0) initializeApp({ credential: applicationDefault() });
const db = getFirestore();
(async () => {
  const months = ["2026-06", "2026-05", "2026-04"];
  for (const m of months) {
    const snap = await db.doc(`deliveryStats/${m}`).get();
    if (!snap.exists) { console.log(`\n[${m}] (no doc)`); continue; }
    const d: any = snap.data();
    console.log(`\n[${m}] total=${d.totalPushCount ?? 0}  uniqueUsers=${d.uniqueUserCount ?? "n/a"}`);
    const byType = d.pushCountByType ?? {};
    const entries = Object.entries(byType).sort((a:any,b:any)=>(b[1]as number)-(a[1]as number));
    for (const [k,v] of entries) console.log(`   ${k.padEnd(20)} : ${v}`);
  }
  process.exit(0);
})().catch(e=>{console.error(e);process.exit(1);});

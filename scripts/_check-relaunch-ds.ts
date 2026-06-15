import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  for (const m of ["2026-05", "2026-06"]) {
    const ds = await db.doc(`deliveryStats/${m}`).get();
    const dd = (ds.data() ?? {}) as any;
    const rk = Object.keys(dd).filter((k) => k.startsWith("relaunch")).sort();
    console.log(`\n=== deliveryStats/${m} relaunch* ===`);
    if (rk.length === 0) console.log("  (なし)");
    rk.forEach((k) => console.log(`  ${k}: ${JSON.stringify(dd[k])}`));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });

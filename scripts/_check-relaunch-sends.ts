import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const PROJECT_ID = "chatstudy-63477";
async function main() {
  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const db = getFirestore();
  const snap = await db.collection("relaunchSends").get();
  console.log(`\n=== relaunchSends (${snap.size} docs) ===`);
  snap.docs
    .sort((a, b) => a.id.localeCompare(b.id))
    .forEach((d) => {
      const x = d.data() as any;
      const started = x.startedAt?.toDate?.()?.toISOString?.() ?? "-";
      const finished = x.finishedAt?.toDate?.()?.toISOString?.() ?? "(未完了/失敗?)";
      console.log(`\n[${d.id}]`);
      console.log(`  startedAt : ${started}`);
      console.log(`  finishedAt: ${finished}`);
      if (x.stats) console.log(`  stats     : ${JSON.stringify(x.stats)}`);
    });
  const ds = await db.doc("deliveryStats/2026-06").get();
  console.log(`\n=== deliveryStats/2026-06 relaunch 関連 ===`);
  const dd = (ds.data() ?? {}) as any;
  Object.keys(dd).filter((k) => k.startsWith("relaunch")).sort().forEach((k) =>
    console.log(`  ${k}: ${JSON.stringify(dd[k])}`)
  );
  console.log(`  totalPushCount: ${dd.totalPushCount ?? 0}`);
}
main().catch((e) => { console.error(e); process.exit(1); });

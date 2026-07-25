import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: 'chatstudy-63477',
  });
  const db = getFirestore();
  const uid = process.argv[2] || 'line:TESTSTRIPE001';
  const snap = await db.doc(`users/${uid}`).get();
  if (!snap.exists) {
    console.log(`users/${uid}: NOT FOUND`);
    return;
  }
  const d = snap.data() as any;
  console.log(`users/${uid}:`);
  console.log('  tsudumon:', JSON.stringify(d.tsudumon));
  console.log('  stripeTsudumon:', JSON.stringify(d.stripeTsudumon));
  console.log(
    '  tsudumonTrialUsedAt:',
    d.tsudumonTrialUsedAt?.toDate?.() ?? d.tsudumonTrialUsedAt
  );
  const exp = d.tsudumon?.expiresAt?.toDate?.() ?? d.tsudumon?.expiresAt;
  if (exp)
    console.log(
      '  expiresAt(JST):',
      new Date(exp).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
    );
  console.log('  other keys:', Object.keys(d).join(', '));
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});

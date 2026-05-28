/**
 * 指定 uid の Firestore user doc と関連状態をダンプ。
 * Usage: npx tsx scripts/check-user-state.ts --uid line:Uxxxx
 */
const FIREBASE_PROJECT_ID = 'chatstudy-63477';

async function main() {
  const args = process.argv.slice(2);
  const uidIdx = args.indexOf('--uid');
  const uid = uidIdx >= 0 ? args[uidIdx + 1] : null;
  if (!uid) {
    console.error('Usage: npx tsx scripts/check-user-state.ts --uid line:Uxxxx');
    process.exit(1);
  }

  const { initializeApp, applicationDefault, getApps } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  }
  const db = getFirestore();

  const snap = await db.doc(`users/${uid}`).get();
  if (!snap.exists) {
    console.log(`users/${uid} NOT FOUND`);
    return;
  }
  console.log(`=== users/${uid} ===`);
  console.log(JSON.stringify(snap.data(), null, 2));

  const ans = await db.collection('answers').where('uid', '==', uid).get();
  console.log(`\n=== answers (${ans.size}) ===`);
  ans.docs.forEach((d) => console.log(d.id, JSON.stringify(d.data())));
}

main().catch((e) => { console.error(e); process.exit(1); });

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// テスト決済で作られたダミーユーザーの後片付け（line:TESTSTRIPE001 など）
async function main() {
  const uid = process.argv[2] || 'line:TESTSTRIPE001';
  if (!uid.startsWith('line:TEST'))
    throw new Error(`安全のため line:TEST* のみ削除可: ${uid}`);
  initializeApp({
    credential: applicationDefault(),
    projectId: 'chatstudy-63477',
  });
  const db = getFirestore();
  await db.doc(`users/${uid}`).delete();
  console.log(`deleted users/${uid}`);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});

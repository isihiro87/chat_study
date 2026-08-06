import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const uid = 'line:U429b1d951fc7236c9e8e85e5ca96b910';

const u = (await db.doc(`users/${uid}`).get()).data();
console.log('=== workbookSession ===');
console.log(JSON.stringify(u?.workbookSession, null, 2));

console.log('\n=== 直近の workbook 回答（新しい順）===');
const snap = await db.collection('answers')
  .where('uid', '==', uid).orderBy('answeredAt', 'desc').limit(12).get();
for (const d of snap.docs) {
  const x = d.data();
  const t = x.answeredAt?.toDate?.().toISOString().slice(11, 19) ?? '?';
  console.log(`${t} src=${String(x.source).padEnd(9)} qid=${String(x.questionId).slice(-34).padEnd(36)} correct=${x.isCorrect}${x.aiScore != null ? ' score=' + x.aiScore : ''}`);
  if (x.userAnswer) console.log(`         入力: ${String(x.userAnswer).slice(0, 60)}`);
}

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const ADMINS = ['U429b1d951fc7236c9e8e85e5ca96b910', 'U732828c7b975479c97a104c5cbc45b7a'];
for (const id of ADMINS) {
  const snap = await db.collection('users').where('lineUserId', '==', id).limit(2).get();
  console.log(`\n=== ${id} ===`);
  if (snap.empty) { console.log('  users ドキュメントが存在しない'); continue; }
  for (const d of snap.docs) {
    const x = d.data();
    const f = (v) => (v?.toDate ? v.toDate().toISOString().slice(0, 16).replace('T', ' ') : v ?? '(なし)');
    console.log(`  uid            : ${d.id}`);
    console.log(`  status         : ${x.status ?? '(なし)'}`);
    console.log(`  blocked        : ${x.blocked ?? '(なし)'}  blockedAt: ${f(x.blockedAt)}`);
    console.log(`  deliveryPaused : ${x.deliveryPaused ?? '(なし)'}`);
    console.log(`  grade/subject  : ${x.grade ?? '(なし)'} / ${x.subject ?? '(なし)'}`);
    console.log(`  preferredHour  : ${x.preferredHour ?? '(なし)'}`);
    console.log(`  登録日          : ${f(x.onboardingStartedAt)}`);
    console.log(`  最終回答        : ${f(x.lastAnsweredAt)}`);
    console.log(`  最終配信        : ${f(x.lastQuestionDeliveredAt)}`);
    console.log(`  augNoticeSentAt: ${f(x.augNoticeSentAt)}   ← 8/3のおしらせ`);
    console.log(`  tsudumon利用権  : ${x.tsudumon ? JSON.stringify(x.tsudumon) : '(なし)'}`);
  }
}

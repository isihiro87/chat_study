/**
 * 「今日の分が届かない」の原因切り分け。count() 集計のみ（1000件=1read相当・激安）。
 * dailyQuiz は status==='active' かつ preferredHour 一致のユーザーにしか配信しない。
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const users = db.collection('users');
const n = async (q) => (await q.count().get()).data().count;

console.log('=== status 別（全ユーザー）===');
for (const s of ['active', 'at-risk', 'dormant', 'churned']) {
  console.log(`  ${s.padEnd(8)}: ${await n(users.where('status', '==', s))}`);
}
console.log(`  合計      : ${await n(users)}`);

console.log('\n=== 朝6時/7時に設定している人の status 内訳 ===');
for (const h of [6, 7]) {
  const total = await n(users.where('preferredHour', '==', h));
  const act = await n(users.where('preferredHour', '==', h).where('status', '==', 'active'));
  console.log(`  ${h}時: 設定者 ${total}人 / うち active ${act}人 → 今日届いたのは active のみ`);
}

console.log('\n=== 参考: 配信時刻ごとの設定者数 ===');
for (const h of [6, 7, 16, 18, 20]) {
  console.log(`  ${h}時: ${await n(users.where('preferredHour', '==', h))}人`);
}

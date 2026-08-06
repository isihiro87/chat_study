/** 復旧後に非activeで残っている人が「いつ離脱したのか」を切り分ける。 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const users = db.collection('users');
const n = async (q) => (await q.count().get()).data().count;

console.log('=== 復旧後の status ===');
for (const s of ['active', 'at-risk', 'dormant', 'churned']) {
  console.log(`  ${s.padEnd(8)}: ${await n(users.where('status', '==', s))}`);
}
console.log(`  合計      : ${await n(users)}`);

// 単一フィールドの範囲クエリ（複合indexが要らない）＋メモリで status 別に集計。
const since = Timestamp.fromDate(new Date('2026-05-01T00:00:00+09:00'));
const snap = await users.where('lastAnsweredAt', '>=', since).get();
console.log(`\n5/1以降に回答がある人: ${snap.size}件（read=${snap.size}）`);

const B = [
  ['A 7/23以降＝停止時点で active だった（停止の直撃）', '2026-07-23', '2026-07-26'],
  ['B 7/1〜7/22＝停止前から失速',                        '2026-07-01', '2026-07-23'],
  ['C 6/26〜6/30＝救済ウィンドウの端',                   '2026-06-26', '2026-07-01'],
  ['D 5/1〜6/25＝停止の1か月以上前に離脱',               '2026-05-01', '2026-06-26'],
  ['E 7/26以降＝停止中/再開後に回答あり',                '2026-07-26', '2030-01-01'],
];
const ms = (d) => new Date(`${d}T00:00:00+09:00`).getTime();
const tally = {};
for (const d of snap.docs) {
  const x = d.data();
  const st = typeof x.status === 'string' ? x.status : '(なし)';
  if (st === 'active') continue;
  const t = x.lastAnsweredAt.toDate().getTime();
  const b = B.find(([, f, to]) => t >= ms(f) && t < ms(to));
  const key = `${b ? b[0] : '(範囲外)'} | ${st}`;
  tally[key] = (tally[key] ?? 0) + 1;
}
console.log('\n=== 非active のまま残っている人の内訳 ===');
const keys = Object.keys(tally).sort();
if (!keys.length) console.log('  （なし）');
for (const k of keys) console.log(`  ${k}: ${tally[k]}`);

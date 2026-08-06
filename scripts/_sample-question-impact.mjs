/**
 * 「おためし1問」（follow直後の静的1問・2026-07 追加）の効果測定。
 * 導入前後で「登録者のブロック率（48h以内/全体）」「オンボ完了率」を比較する。
 * count集計＋必要最小限の範囲クエリのみ。
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const n = async (q) => (await q.count().get()).data().count;
const T = (iso) => Timestamp.fromDate(new Date(iso));

// 1) sample_question_answered の最初と最後、総数
const ev = db.collection('premiumFunnelEvents').where('eventType', '==', 'sample_question_answered');
console.log('=== おためし1問の回答イベント ===');
console.log(`  総数: ${await n(ev)}`);
// ⚠️ premiumFunnelEvents は (eventType, occurredAt) の複合indexが無いので orderBy しない。
// 日付分布は無索引の limit フェッチをメモリで集計する。
const sample = await ev.limit(2000).get();
let ok = 0; const byMonth = {};
let min = null, max = null;
for (const d of sample.docs) {
  const x = d.data();
  if (x.context?.correct === true) ok++;
  const t = x.occurredAt?.toDate?.();
  if (!t) continue;
  const m = new Date(t.getTime() + 9 * 3600000).toISOString().slice(0, 7);
  byMonth[m] = (byMonth[m] ?? 0) + 1;
  if (!min || t < min) min = t;
  if (!max || t > max) max = t;
}
console.log(`  サンプル ${sample.size}件の正答率: ${sample.size ? Math.round((ok / sample.size) * 100) : 0}%`);
if (min) console.log(`  期間: ${min.toISOString().slice(0,10)} 〜 ${max.toISOString().slice(0,10)}`);
console.log(`  月別: ${JSON.stringify(byMonth)}`);

// 2) 導入前後の登録コホートを比較
const COHORTS = [
  ['導入前 6/03-7/02', '2026-06-03', '2026-07-03'],
  ['導入後 7/06-8/03', '2026-07-06', '2026-08-04'],
];
console.log('\n=== 登録コホート別の指標 ===');
for (const [label, from, to] of COHORTS) {
  const base = db.collection('users')
    .where('onboardingStartedAt', '>=', T(`${from}T00:00:00+09:00`))
    .where('onboardingStartedAt', '<',  T(`${to}T00:00:00+09:00`));
  const total = await n(base);
  const snap = await base.get();
  let blocked = 0, answered = 0, onbDone = 0;
  for (const d of snap.docs) {
    const x = d.data();
    if (x.blocked === true) blocked++;
    if (x.lastAnsweredAt) answered++;
    if (x.grade && x.subject) onbDone++;
  }
  const pc = (v) => (total ? `${Math.round((v / total) * 1000) / 10}%` : '-');
  console.log(`\n  [${label}] 登録 ${total}人（read=${snap.size}）`);
  console.log(`    ブロック率          : ${pc(blocked)} (${blocked})`);
  console.log(`    1問以上回答した人   : ${pc(answered)} (${answered})`);
  console.log(`    学年+教科まで登録完了: ${pc(onbDone)} (${onbDone})`);
}

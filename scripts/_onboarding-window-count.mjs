/**
 * オンボ期間中（＝曜日に関係なく毎日配信される）ユーザーの実数を数える使い捨て。
 * users 全件スキャンを避けるため onboardingStartedAt の範囲クエリで14日以内だけ読む。
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const now = Date.now();
const CUTOFF = new Date('2026-06-22T15:36:00+09:00').getTime();
const since = Timestamp.fromMillis(now - 14 * 86400000);
const snap = await db.collection('users').where('onboardingStartedAt', '>=', since).get();
const jstDay = (ms) => Math.floor((ms + 9 * 3600000) / 86400000);
let daily = 0, graduated = 0, skipped = 0;
for (const d of snap.docs) {
  const x = d.data();
  if (x.blocked === true || x.deliveryPaused === true || x.status !== 'active') { skipped++; continue; }
  const reg = x.onboardingStartedAt.toDate().getTime();
  const period = reg >= CUTOFF ? 7 : 14;
  if (jstDay(now) - jstDay(reg) < period) daily++; else graduated++;
}
console.log(`範囲クエリ read=${snap.size}（users全件ではない）`);
console.log(`オンボ期間中＝毎日配信の対象: ${daily}人`);
console.log(`同範囲だが卒業済み＝週2の対象: ${graduated}人`);
console.log(`除外（blocked/おやすみ/非active）: ${skipped}人`);

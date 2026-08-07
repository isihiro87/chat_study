/**
 * AI チャットの「利用者数（人）」を数える。
 *
 * read 規律: **count() 集計のみ**（users のスキャンはしない）。
 *
 * ⚠️ 計測上の注意: `aiChat.dateJST` は**最終利用日で上書き**されるため、
 * 「dateJST == 過去の日」は "その日が最後だった人" しか数えられず、
 * **古い日ほど過小**になる。日別の比較はこの偏りを踏まえて読むこと。
 * （`totalCount` は 2026-08-06 から入った上書きされないカウンタ）
 *
 *   node scripts/_ai-users-count.mjs
 */
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const PROJECT = 'chatstudy-63477';
if (getApps().length === 0) {
  initializeApp({ credential: applicationDefault(), projectId: PROJECT });
}
const db = getFirestore();

async function count(field, op, value) {
  try {
    const agg = await db
      .collection('users')
      .where(field, op, value)
      .count()
      .get();
    return agg.data().count;
  } catch (error) {
    return `取得失敗: ${error.message}`;
  }
}

async function countAll() {
  const agg = await db.collection('users').count().get();
  return agg.data().count;
}

console.log('=== 全体 ===');
console.log(`登録者数: ${await countAll()} 人`);

console.log('\n=== AI チャットを使ったことがある人（累計） ===');
console.log(
  `aiChat.dateJST が入っている: ${await count('aiChat.dateJST', '!=', null)} 人`
);
console.log('（2026-08-01 時点の実測は 949 人 / 7月の月間UUは 591 人）');

console.log('\n=== 入口ボタン（2026-08-06）以降に会話した人 ===');
console.log(`totalCount >= 1: ${await count('aiChat.totalCount', '>=', 1)} 人`);
console.log(`totalCount >= 2: ${await count('aiChat.totalCount', '>=', 2)} 人`);
console.log(`totalCount >= 5: ${await count('aiChat.totalCount', '>=', 5)} 人`);

console.log('\n=== 日別（最終利用日ベース＝古い日ほど過小） ===');
for (const day of [
  '2026-08-01',
  '2026-08-02',
  '2026-08-03',
  '2026-08-04',
  '2026-08-05',
  '2026-08-06',
  '2026-08-07',
]) {
  const mark = day >= '2026-08-06' ? '  ← 入口ボタン以降' : '';
  console.log(`${day}: ${await count('aiChat.dateJST', '==', day)} 人${mark}`);
}

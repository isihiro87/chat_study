/**
 * AI 入口ボタン（2026-08-06 デプロイ）の直後の利用状況を見る。
 *
 * read 規律（CLAUDE.md）: **count() 集計と単一ドキュメント read のみ**。
 * users / premiumFunnelEvents のスキャンはしない。
 *
 *   node scripts/_ai-usage-after-entry.mjs
 */
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const PROJECT = 'chatstudy-63477';
if (getApps().length === 0) {
  initializeApp({ credential: applicationDefault(), projectId: PROJECT });
}
const db = getFirestore();

const yen = (n) => `¥${(n ?? 0).toFixed(2)}`;

// ---- 1. コスト集計（1 read）: 日別の支出は AI 利用量の代理指標になる ----
const snap = await db.doc('aiCostStats/2026-08').get();
const d = snap.data() ?? {};
console.log('=== aiCostStats/2026-08 ===');
console.log(`総額: ${yen(d.totalJpy)} / 呼び出し累計: ${d.callCount ?? 0} 回`);
console.log(
  `ティア別: free=${yen(d.byTier?.free)} paid=${yen(d.byTier?.paid)}`
);

const byDay = d.byDay ?? {};
console.log('\n--- 日別（全ティア合算） ---');
for (const day of Object.keys(byDay).sort()) {
  const free = d.byTierDay?.[day]?.free;
  const mark = day >= '2026-08-06' ? '  ← 入口ボタン以降' : '';
  console.log(
    `${day}: ${yen(byDay[day])}${free !== undefined ? ` (free ${yen(free)})` : ''}${mark}`
  );
}

// ---- 2. 入口ボタンのタップ数（count 集計） ----
async function countEvents(eventType) {
  try {
    const agg = await db
      .collection('premiumFunnelEvents')
      .where('eventType', '==', eventType)
      .count()
      .get();
    return agg.data().count;
  } catch (error) {
    return `取得失敗（索引が要る可能性）: ${error.message}`;
  }
}

console.log('\n=== 入口ボタン ===');
console.log(`ai_intro_tap（全期間＝8/6のデプロイ以降）: ${await countEvents('ai_intro_tap')}`);

// ---- 3. 通算カウンタを持つ人数（count 集計） ----
// totalCount は 8/6 以降に AI を使った人にだけ付く（既存ユーザーも 0 から積算）。
async function countUsersWithField(field, op, value) {
  try {
    const agg = await db.collection('users').where(field, op, value).count().get();
    return agg.data().count;
  } catch (error) {
    return `取得失敗: ${error.message}`;
  }
}

console.log('\n=== 8/6 以降に AI を使った人 ===');
console.log(
  `aiChat.totalCount >= 1 : ${await countUsersWithField('aiChat.totalCount', '>=', 1)} 人`
);
console.log(
  `aiChat.totalCount >= 3 : ${await countUsersWithField('aiChat.totalCount', '>=', 3)} 人`
);
console.log(
  `設定ページを保存した人 : ${await countUsersWithField('aiProfile.lastSource', '==', 'page')} 人`
);
console.log(
  `性格設定チップを出した人: ${await countUsersWithField('aiChat.personaPromptedAt', '!=', null)} 人`
);

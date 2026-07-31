/**
 * 本番決済テストで上書きされた管理人アカウントの つづもんライセンスを復元する（使い捨て）。
 *
 * 経緯: 2026-07-25 の実カード決済テストで Stripe webhook が users/{uid}.tsudumon を
 * まるごと置き換えたため、付与済みだった TZM-YMXP-EXMK（set / 3年 / 2029-07-24 まで）が消えた。
 * 返金・解約済みなので、もう一方の管理人 uid と同じ内容へ書き戻す。
 *
 * 実行: npx tsx scripts/_restore-admin-tsudumon.ts        （dry-run）
 *       npx tsx scripts/_restore-admin-tsudumon.ts --apply
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

const TARGET_UID = 'line:U429b1d951fc7236c9e8e85e5ca96b910';
const TEMPLATE_UID = 'line:U732828c7b975479c97a104c5cbc45b7a';

async function main() {
  const apply = process.argv.includes('--apply');
  initializeApp({
    credential: applicationDefault(),
    projectId: 'chatstudy-63477',
  });
  const db = getFirestore();

  const tpl = (await db.doc(`users/${TEMPLATE_UID}`).get()).data()?.tsudumon;
  if (!tpl?.code || tpl.plan !== 'set') {
    throw new Error(`テンプレートが想定外: ${JSON.stringify(tpl)}`);
  }

  const cur = (await db.doc(`users/${TARGET_UID}`).get()).data();
  console.log('現在  :', JSON.stringify(cur?.tsudumon));
  console.log('復元後:', JSON.stringify(tpl));
  console.log('stripeTsudumon を削除:', JSON.stringify(cur?.stripeTsudumon));

  if (!apply) {
    console.log('\n(dry-run。実行するには --apply を付ける)');
    return;
  }

  await db.doc(`users/${TARGET_UID}`).set(
    {
      tsudumon: {
        code: tpl.code,
        plan: tpl.plan,
        years: tpl.years,
        activatedAt: tpl.activatedAt as Timestamp,
        expiresAt: tpl.expiresAt as Timestamp,
      },
      stripeTsudumon: FieldValue.delete(),
    },
    { mergeFields: ['tsudumon', 'stripeTsudumon'] }
  );

  const after = (await db.doc(`users/${TARGET_UID}`).get()).data();
  console.log('\n書き込み後:', JSON.stringify(after?.tsudumon));
  console.log('stripeTsudumon:', JSON.stringify(after?.stripeTsudumon));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

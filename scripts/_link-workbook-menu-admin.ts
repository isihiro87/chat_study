/**
 * 管理人アカウントにワーク用タブ付きリッチメニューをリンクする（動作確認用・1回限り）。
 * 実行: npx tsx scripts/_link-workbook-menu-admin.ts
 */
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const ADMIN_LINE_USER_ID = 'U429b1d951fc7236c9e8e85e5ca96b910';

async function main(): Promise<void> {
  const env = readFileSync(join(REPO_ROOT, 'functions', '.env'), 'utf-8');
  const token = /^LINE_MESSAGING_CHANNEL_ACCESS_TOKEN=(.+)$/m
    .exec(env)?.[1]
    ?.trim();
  const menuId = /^LINE_RICHMENU_WORKBOOK_ID=(.+)$/m.exec(env)?.[1]?.trim();
  if (!token || !menuId)
    throw new Error('token / LINE_RICHMENU_WORKBOOK_ID not found');

  const res = await fetch(
    `https://api.line.me/v2/bot/user/${ADMIN_LINE_USER_ID}/richmenu/${menuId}`,
    { method: 'POST', headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok)
    throw new Error(`link failed: ${res.status} ${await res.text()}`);
  console.log(`linked: ${ADMIN_LINE_USER_ID} -> ${menuId}`);

  // Firestore の richMenuType も揃える（webhook の再リンク判定と整合）
  const { initializeApp, applicationDefault, getApps } =
    await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: 'chatstudy-63477',
    });
  }
  await getFirestore()
    .doc(`users/line:${ADMIN_LINE_USER_ID}`)
    .set(
      {
        richMenuType: 'workbook',
        lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  console.log('users doc updated (richMenuType=workbook)');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

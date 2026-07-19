/**
 * ワーク用タブ付きリッチメニューのリンクを全員分解除して既定メニューに戻す（緊急ロールバック）。
 * richMenuType=='workbook' のユーザーを対象に個別リンクを DELETE する。
 * 実行: npx tsx scripts/_unlink-workbook-menu.ts
 */
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

async function main(): Promise<void> {
  const env = readFileSync(join(REPO_ROOT, 'functions', '.env'), 'utf-8');
  const token = /^LINE_MESSAGING_CHANNEL_ACCESS_TOKEN=(.+)$/m
    .exec(env)?.[1]
    ?.trim();
  if (!token) throw new Error('token not found');

  const { initializeApp, applicationDefault, getApps } =
    await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: 'chatstudy-63477',
    });
  }
  const db = getFirestore();

  const snap = await db
    .collection('users')
    .where('richMenuType', '==', 'workbook')
    .limit(50)
    .get();
  console.log(`対象: ${snap.size} 人`);

  for (const doc of snap.docs) {
    const lineUserId =
      typeof doc.get('lineUserId') === 'string'
        ? (doc.get('lineUserId') as string)
        : doc.id.startsWith('line:')
          ? doc.id.slice('line:'.length)
          : '';
    if (!lineUserId) continue;
    const res = await fetch(
      `https://api.line.me/v2/bot/user/${lineUserId}/richmenu`,
      { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(`unlink ${lineUserId}: ${res.status}`);
    await doc.ref.set(
      {
        richMenuType: 'free',
        lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  }
  console.log('完了（個別リンク解除 → 既定メニューに戻りました）');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

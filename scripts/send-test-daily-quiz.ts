/**
 * 自分のアカウントに「毎日配信の1問」をテスト送信するスクリプト。
 *
 * - functions/lib/lineWebhook.js の selectAndSendQuestion を直接呼ぶので、
 *   本番の dailyQuiz06/07/16/.. と完全に同じメッセージ構造で届く。
 * - bypassDailyLimit を立てて「今日もう送った」フラグを無視するので、
 *   昼間に何度でも push できる。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   cd functions && npm run build && cd ..           # 事前にビルド
 *   npx tsx scripts/send-test-daily-quiz.ts <uid>
 *
 * 注意:
 *   - 送信すると lastQuestionDeliveredAt が「今」に更新されるため、
 *     その日の本番 dailyQuiz は「既に配信済み」として skip される。
 *   - LINE_MESSAGING_CHANNEL_ACCESS_TOKEN は functions/.env から読み込む。
 */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

function loadFunctionsEnv(): void {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const envPath = resolve(__dirname, '../functions/.env');
  let raw: string;
  try {
    raw = readFileSync(envPath, 'utf8');
  } catch (error) {
    console.error(`[test-daily-quiz] cannot read ${envPath}:`, error);
    process.exit(1);
  }
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

async function main(): Promise<void> {
  const uid = process.argv[2];
  if (!uid) {
    console.error('Usage: npx tsx scripts/send-test-daily-quiz.ts <uid>');
    process.exit(1);
  }

  loadFunctionsEnv();
  if (!process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN) {
    console.error(
      '[test-daily-quiz] LINE_MESSAGING_CHANNEL_ACCESS_TOKEN missing from functions/.env'
    );
    process.exit(1);
  }

  // 注意: コンパイル済み functions/lib/lineWebhook.js は functions/node_modules
  // 配下の firebase-admin を読み込むため、スクリプト側の initializeApp は
  // そのインスタンスに届かない。両方が projectId を自動検出できるよう、
  // env vars でプロジェクトを明示してから import する。
  process.env.GOOGLE_CLOUD_PROJECT =
    process.env.GOOGLE_CLOUD_PROJECT || FIREBASE_PROJECT_ID;
  process.env.GCLOUD_PROJECT =
    process.env.GCLOUD_PROJECT || FIREBASE_PROJECT_ID;

  const { initializeApp, applicationDefault, getApps } = await import(
    'firebase-admin/app'
  );
  const { getFirestore } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const db = getFirestore();

  const userSnap = await db.doc(`users/${uid}`).get();
  if (!userSnap.exists) {
    console.error(`[test-daily-quiz] user not found: ${uid}`);
    process.exit(1);
  }
  const u = userSnap.data() ?? {};
  if (!u.lineUserId) {
    console.error(`[test-daily-quiz] user has no lineUserId: ${uid}`);
    process.exit(1);
  }
  console.log(
    `[test-daily-quiz] target: uid=${uid} lineUserId=${u.lineUserId} nickname=${u.nickname ?? '-'} subject=${u.subject ?? '-'} grade=${u.grade ?? '-'} plan=${u.plan ?? '-'} status=${u.status ?? '-'}`
  );

  const mod = await import('../functions/lib/lineWebhook.js');
  if (typeof mod.selectAndSendQuestion !== 'function') {
    console.error('[test-daily-quiz] selectAndSendQuestion is not exported');
    process.exit(1);
  }
  await mod.selectAndSendQuestion(uid, { bypassDailyLimit: true });
  console.log('[test-daily-quiz] done. LINE で受信を確認してね。');
}

main().catch((error) => {
  console.error('[test-daily-quiz] failed:', error);
  process.exit(1);
});

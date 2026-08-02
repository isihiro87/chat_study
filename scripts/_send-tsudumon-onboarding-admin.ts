/**
 * 登録直後のオンボーディングを、管理人だけに送って見た目を確認する。
 *
 * 本番（`tsudumonStripe` の決済完了 push / `tsudumonOnboarding` の postback）と
 * **同じビルダー**を呼ぶので、ここで直せばそのまま本番に効く。
 *
 * 送るのは2通:
 *   ① 学年をえらぶカード（これを押すと登録は完了）
 *   ② 学年を押したあとに出る「きょうはここから」カード
 * ②は本来 postback の返事なので、ここでは push で見た目だけ確かめる。
 *
 * ⚠️ ①のボタンを実際に押すと**管理人の学年が本当に保存される**（本番の
 * ハンドラが動く）。見た目だけ見たいときは押さないこと。
 *
 * 前提: `cd functions && npm run build`
 *
 * 使い方:
 *   npx tsx scripts/_send-tsudumon-onboarding-admin.ts            # dry-run
 *   npx tsx scripts/_send-tsudumon-onboarding-admin.ts --execute  # 実送信
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';

const ADMIN_LINE_USER_ID = 'U429b1d951fc7236c9e8e85e5ca96b910';
const ENV_FILE = resolve(import.meta.dirname, '../functions/.env');
const requireCjs = createRequire(import.meta.url);

function loadEnvValue(key: string): string {
  const raw = readFileSync(ENV_FILE, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1) continue;
    if (t.slice(0, eq).trim() !== key) continue;
    let v = t.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    return v;
  }
  throw new Error(`${key} 未設定`);
}

async function main() {
  const execute = process.argv.includes('--execute');
  process.env.GCLOUD_PROJECT ??= 'chatstudy-63477';

  const { buildStep1Flex, buildStartFlex } = requireCjs(
    '../functions/lib/tsudumonOnboarding'
  ) as typeof import('../functions/src/tsudumonOnboarding');

  // 08＝幕藩体制の確立（これまでの確認と同じ単元で見比べられるように）
  const messages = [buildStep1Flex(), buildStartFlex('08', false)];

  const token = loadEnvValue('LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN');
  const basicId = loadEnvValue('LINE_TSUDUMON_BOT_BASIC_ID');

  console.log(`送信元アカウント: ${basicId}`);
  console.log(`送信先: ${ADMIN_LINE_USER_ID}`);
  console.log(
    `メッセージ数: ${messages.length}（① 学年えらび / ② 開始カード）`
  );
  for (const m of messages) {
    console.log(`  altText: ${(m as { altText: string }).altText}`);
  }

  if (!execute) {
    console.log('\n--- dry-run（送信していません）---');
    console.log(JSON.stringify(messages, null, 2));
    console.log('\n実送信するには --execute を付けてください。');
    return;
  }

  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ to: ADMIN_LINE_USER_ID, messages }),
  });

  const body = await res.text();
  console.log(`\nHTTP ${res.status}`);
  console.log(body || '(空レスポンス＝成功)');
  if (!res.ok) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

/**
 * 友だち追加直後のあいさつを、管理人だけに送って見た目を確認する。
 *
 * 本番（`handleTsudumonFollow` の reply）と **同じビルダー**を呼ぶので、
 * ここで見たものがそのまま新規ユーザーに届く。ブロック→解除で follow を
 * 起こし直す必要がない（ブロックは tsudumonBlockedAt が立って配信が止まるので、
 * 確認のためにやりたくない）。
 *
 * 2種類ある:
 *   ① 中学生向け（ふつうの新規）… 既定
 *   ② 保護者向け（連携ずみの人が再追加したとき）… --parent
 *
 * 前提: `npm --prefix functions run build`
 *
 * 使い方:
 *   npx tsx scripts/_send-tsudumon-follow-admin.ts             # 本文を表示するだけ
 *   npx tsx scripts/_send-tsudumon-follow-admin.ts --execute   # 実送信
 *   npx tsx scripts/_send-tsudumon-follow-admin.ts --parent --execute
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';

const ADMIN_LINE_USER_ID = 'U429b1d951fc7236c9e8e85e5ca96b910';
const ENV_FILE = resolve(import.meta.dirname, '../functions/.env');
const requireCjs = createRequire(import.meta.url);

function env(key: string): string {
  for (const line of readFileSync(ENV_FILE, 'utf8').split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq > 0 && t.slice(0, eq) === key) return t.slice(eq + 1).trim();
  }
  throw new Error(`${key} が functions/.env にありません`);
}

async function main() {
  const execute = process.argv.includes('--execute');
  const asParent = process.argv.includes('--parent');

  const { buildTsudumonFollowText, buildTsudumonParentFollowText } = requireCjs(
    '../functions/lib/tsudumon/followHandlers'
  ) as typeof import('../functions/src/tsudumon/followHandlers');

  const text = asParent
    ? buildTsudumonParentFollowText()
    : buildTsudumonFollowText();

  console.log(`--- ${asParent ? '保護者向け' : '中学生向け'} あいさつ ---`);
  console.log(text);
  console.log('---');
  console.log(`文字数: ${text.length} / 行数: ${text.split('\n').length}`);

  if (!execute) {
    console.log('\n(表示のみ。送るには --execute)');
    return;
  }

  const r = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env('LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: ADMIN_LINE_USER_ID,
      messages: [{ type: 'text', text }],
    }),
  });
  if (!r.ok) throw new Error(`push failed: ${r.status} ${await r.text()}`);
  console.log('\n送信しました。つづもんBotのトークを確認してください。');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

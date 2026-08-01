/**
 * つづもん「おうちの人に送る」用の LIFF アプリを作る／確認する。
 *
 * この LIFF が無いと、カードのボタンは QR ページ（/handoff/）のままになる。
 * LIFF があると `liff.shareTargetPicker()` が使えて、
 * ボタン → 送り先の一覧 → 保護者をえらぶ、で終わる。
 *
 * ## どのチャネルに作るか
 *
 * LIFF は **LINE Login チャネル**にしか置けない。つづもんのログインは
 * `web/login/index.html` が示すとおり **2009587166**（LINE_LOGIN_CHANNEL_ID）を使っている。
 * `LINE_TSUDUMON_CHANNEL_ID`(2010838149) は Messaging API チャネルなので置けない。
 * 子はつづもんのログイン時点でこのチャネルに同意済みなので、同意画面が増えて驚くこともない。
 *
 * ## scope
 *
 * `chat_message.write` が **コンソールでいう「シェアターゲットピッカー」**。
 * これが無いと `liff.isApiAvailable('shareTargetPicker')` が false になる。
 *
 * 使い方:
 *   npx tsx scripts/setup-tsudumon-share-liff.ts            # 一覧だけ（作らない）
 *   npx tsx scripts/setup-tsudumon-share-liff.ts --create   # 無ければ作る
 *   npx tsx scripts/setup-tsudumon-share-liff.ts --delete <liffId>
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ENDPOINT = 'https://tsudumon.jp/share/';
const ENV_FILE = resolve(import.meta.dirname, '../functions/.env');

/** functions/.env から値を読む（値はログに出さない）。 */
function env(key: string): string {
  const raw = readFileSync(ENV_FILE, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq > 0 && t.slice(0, eq) === key) return t.slice(eq + 1).trim();
  }
  throw new Error(`${key} が functions/.env にありません`);
}

async function channelToken(): Promise<string> {
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: env('LINE_LOGIN_CHANNEL_ID'),
    client_secret: env('LINE_LOGIN_CHANNEL_SECRET'),
  });
  const r = await fetch('https://api.line.me/v2/oauth/accessToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!r.ok) throw new Error(`token failed: ${r.status} ${await r.text()}`);
  return (await r.json()).access_token as string;
}

interface LiffApp {
  liffId: string;
  view: { type: string; url: string };
  description?: string;
}

async function list(token: string): Promise<LiffApp[]> {
  const r = await fetch('https://api.line.me/liff/v1/apps', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!r.ok) throw new Error(`list failed: ${r.status} ${await r.text()}`);
  return ((await r.json()).apps ?? []) as LiffApp[];
}

async function main() {
  const token = await channelToken();
  const apps = await list(token);

  console.log(
    `LINE Login チャネル ${env('LINE_LOGIN_CHANNEL_ID')} の LIFF アプリ:`
  );
  for (const a of apps) {
    const mark = a.view.url.startsWith(ENDPOINT) ? ' ★' : '';
    console.log(`  ${a.liffId}  ${a.view.type.padEnd(7)} ${a.view.url}${mark}`);
  }

  const deleteAt = process.argv.indexOf('--delete');
  if (deleteAt >= 0) {
    const id = process.argv[deleteAt + 1];
    const r = await fetch(`https://api.line.me/liff/v1/apps/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(
      r.ok ? `\n削除しました: ${id}` : `\n削除失敗: ${await r.text()}`
    );
    return;
  }

  const existing = apps.find((a) => a.view.url.startsWith(ENDPOINT));
  if (existing) {
    console.log(`\nすでにあります → LIFF ID: ${existing.liffId}`);
    console.log(`URL: https://liff.line.me/${existing.liffId}`);
    return;
  }

  if (!process.argv.includes('--create')) {
    console.log('\n未作成。作るには --create を付ける');
    return;
  }

  const r = await fetch('https://api.line.me/liff/v1/apps', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      view: { type: 'compact', url: ENDPOINT },
      description: 'つづもん おうちの人に送る',
      features: { ble: false, qrCode: false },
      // chat_message.write = コンソールの「シェアターゲットピッカー」
      scope: ['profile', 'chat_message.write'],
      botPrompt: 'none',
    }),
  });
  if (!r.ok) throw new Error(`create failed: ${r.status} ${await r.text()}`);
  const liffId = (await r.json()).liffId as string;
  console.log(`\n作成しました → LIFF ID: ${liffId}`);
  console.log(`URL: https://liff.line.me/${liffId}`);
  console.log('\n次の2か所に入れる:');
  console.log(`  1. functions/.env に  LIFF_TSUDUMON_SHARE_ID=${liffId}`);
  console.log(`  2. pdf-workbook/web/share/index.html の LIFF_ID`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

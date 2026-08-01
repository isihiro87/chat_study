/**
 * 「おうちの人にわたすカード」を管理人だけに push して、実機で見た目と導線を確かめる。
 *
 * Bot に「おうちの人に見せたい」と打つのと同じものが届く（発行される招待も本物）。
 * 違いは reply ではなく push で送る点だけ。
 *
 * 確認したいこと:
 *   - 2通で届くか（1通目＝指示、2通目＝そのまま転送するもの）
 *   - 2通目を長おし → 転送 で保護者に渡せるか
 *   - 転送された側でリンクのプレビューが出て、保護者ページへ行けるか
 *
 * 使い方:
 *   npx tsx scripts/_send-tsudumon-parent-card-admin.ts            # dry-run（作らない・送らない）
 *   npx tsx scripts/_send-tsudumon-parent-card-admin.ts --execute
 *
 * ⚠️ --execute は本物の招待を発行する。子1人につき有効なカードは1枚なので、
 *    以前のカードのURLは失効する（設計どおり）。
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';

const ADMIN_LINE_USER_ID = 'U429b1d951fc7236c9e8e85e5ca96b910';
const ADMIN_UID = `line:${ADMIN_LINE_USER_ID}`;
const ENV_FILE = resolve(import.meta.dirname, '../functions/.env');
const requireCjs = createRequire(import.meta.url);

/** functions/.env を process.env に流し込む（値はログに出さない）。 */
function loadEnv(): void {
  for (const line of readFileSync(ENV_FILE, 'utf8').split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq <= 0) continue;
    const key = t.slice(0, eq);
    if (!process.env[key]) process.env[key] = t.slice(eq + 1).trim();
  }
}

async function main() {
  const execute = process.argv.includes('--execute');
  loadEnv();
  process.env.GCLOUD_PROJECT ??= 'chatstudy-63477';

  console.log(
    'LIFF_TSUDUMON_SHARE_ID :',
    process.env.LIFF_TSUDUMON_SHARE_ID || '(未設定)'
  );
  console.log(
    'TSUDUMON_INVITE_SECRET :',
    process.env.TSUDUMON_INVITE_SECRET ? '設定あり' : '(未設定)'
  );

  // firebase-admin を ADC で先に初期化する（functions 側の initializeApp() は引数なしのため）
  const { initializeApp, applicationDefault, getApps } = requireCjs(
    'firebase-admin/app'
  ) as typeof import('firebase-admin/app');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: 'chatstudy-63477',
    });
  }

  // 本体はビルド済みの lib/ から読む（src の TS を直接 require しない）
  const { createTsudumonInvite } = requireCjs(
    '../functions/lib/tsudumonParent'
  ) as typeof import('../functions/src/tsudumonParent');
  const { buildParentCardGuide, buildParentForwardMessage } = requireCjs(
    '../functions/lib/tsudumonParentCard'
  ) as typeof import('../functions/src/tsudumonParentCard');

  if (!execute) {
    console.log('\n(dry-run。実際に発行・送信するには --execute を付ける)');
    return;
  }

  const invite = await createTsudumonInvite(ADMIN_UID);
  if (!invite) {
    throw new Error(
      'カードを発行できませんでした（TSUDUMON_INVITE_SECRET を確認）'
    );
  }
  console.log('\n発行しました:');
  console.log('  childName :', invite.childName);
  console.log('  parentUrl :', invite.url);
  console.log('  期限      :', invite.expiresLabel);

  const messages = [
    buildParentCardGuide(invite.expiresLabel),
    buildParentForwardMessage(invite.url),
  ];

  const token = process.env.LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN || '';
  if (!token)
    throw new Error('LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN が未設定');

  const r = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ to: ADMIN_LINE_USER_ID, messages }),
  });
  if (!r.ok) throw new Error(`push failed: ${r.status} ${await r.text()}`);
  console.log('\n送信しました。つづもんBotのトークを確認してください。');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

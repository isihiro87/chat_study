/**
 * つづもん専用公式LINE（@215uijik）から「管理人だけ」に動作確認用の push を送るスクリプト。
 *
 * 何を確認できるか:
 *   1. push 送信   — つづもん用チャネルアクセストークンで push が通るか
 *                    （＝管理人がつづもんBotを友だち追加済みか、トークンが正しいか）
 *   2. postback    — メッセージのボタンをタップすると postback `type=wb_help` が
 *                    tsudumonWebhook に届き、reply が返るか
 *                    （＝Webhook URL 登録・署名検証・ディスパッチ・reply token の
 *                      チャネル一致まで、新Botの経路が丸ごと通ることの確認）
 *
 * reply が返れば「別チャネルのトークンで reply して 400 Invalid reply token になる」
 * という今回の設計上の最大の落とし穴を回避できていることの実証になる。
 *
 * 使い方:
 *   npx tsx scripts/_send-tsudumon-test-admin.ts            # dry-run（送信しない）
 *   npx tsx scripts/_send-tsudumon-test-admin.ts --execute  # 実送信（管理人のみ）
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// 送信先（管理人）。他の scripts/_*.ts と同じオーナー LINE userId。
// userId はプロバイダー単位で発行されるため、一問一答とつづもんで同じ値が使える。
const ADMIN_LINE_USER_ID = 'U429b1d951fc7236c9e8e85e5ca96b910';

const ENV_FILE = resolve(import.meta.dirname, '../functions/.env');

/** functions/.env から指定キーの値を読む（値は一切ログに出さない）。 */
function loadEnv(key: string): string {
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

function buildMessages() {
  return [
    {
      type: 'text' as const,
      text:
        '【動作確認】つづもん専用アカウントからのテスト送信です。\n\n' +
        'このメッセージが届いていれば、つづもん用のチャネルアクセストークンで ' +
        'push が通っています。\n\n' +
        '次に、下の「ワークの使い方を見る」をタップしてください。' +
        '返事が返ってくれば、Webhook・署名検証・reply まで新しいBotの経路が' +
        'すべて通っていることの確認になります。',
      quickReply: {
        items: [
          {
            type: 'action' as const,
            action: {
              type: 'postback' as const,
              label: 'ワークの使い方を見る',
              data: 'type=wb_help',
              displayText: 'ワークの使い方を見る',
            },
          },
        ],
      },
    },
  ];
}

async function main() {
  const execute = process.argv.includes('--execute');
  const token = loadEnv('LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN');
  const basicId = loadEnv('LINE_TSUDUMON_BOT_BASIC_ID');
  const messages = buildMessages();

  console.log(`送信元アカウント: ${basicId}`);
  console.log(`トークン: 読み込み済み（${token.length}文字）`);
  console.log(`送信先: ${ADMIN_LINE_USER_ID}`);
  console.log(`メッセージ数: ${messages.length}`);

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

  if (!res.ok) {
    console.error(
      '\n送信に失敗しました。よくある原因:\n' +
        '  403 → 管理人がつづもんBotをまだ友だち追加していない\n' +
        '  401 → チャネルアクセストークンが違う（一問一答のものになっている等）\n' +
        '  429 → 月間の無料メッセージ通数（コミュニケーションプランは200通）を超過'
    );
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

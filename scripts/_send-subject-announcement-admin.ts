/**
 * 「教科がふえたよ」案内（学年・教科を変更ボタン付き flex）を「管理人だけ」に push するテスト用スクリプト。
 *
 * ボタン（postback type=change_learning）をタップすると、デプロイ済み lineWebhook の
 * トーク内「学年・教科を変更」フロー（学年→教科の逐次選択）が起動する。
 *
 * 使い方:
 *   npx tsx scripts/_send-subject-announcement-admin.ts            # dry-run（送信なし）
 *   npx tsx scripts/_send-subject-announcement-admin.ts --execute  # 実送信（管理人のみ）
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// 送信先（管理人）。CLAUDE.md / 各 _*.ts と同じオーナー LINE userId。
const ADMIN_LINE_USER_ID = 'U429b1d951fc7236c9e8e85e5ca96b910';

const ENV_FILE = resolve(import.meta.dirname, '../functions/.env');

function loadToken(): string {
  const raw = readFileSync(ENV_FILE, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    if (k !== 'LINE_MESSAGING_CHANNEL_ACCESS_TOKEN') continue;
    let v = t.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    return v;
  }
  throw new Error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定');
}

const C_TITLE = '#111827';
const C_BODY = '#374151';

function txt(text: string, extra: Record<string, unknown> = {}) {
  return {
    type: 'text' as const,
    text,
    size: 'sm' as const,
    color: C_BODY,
    wrap: true,
    ...extra,
  };
}

function buildAnnouncement() {
  return {
    type: 'flex' as const,
    altText: 'えらべる教科がふえたよ！（地理・英語が登場✨）',
    contents: {
      type: 'bubble' as const,
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'md' as const,
        contents: [
          txt('📚 えらべる教科がふえたよ！', {
            weight: 'bold',
            size: 'lg',
            color: C_TITLE,
          }),
          txt(
            'いままでは「歴史」と「理科」だけだったけど、あたらしく 🌏地理（中1・中2）と 🔤英語 もくわわりました✨'
          ),
          txt(
            'いまえらべるのは、この4つ👇\n🏛 歴史\n🔬 理科\n🌏 地理（中1・中2）\n🔤 英語\n\n（数学はいま準備中！ もうちょっと待っててね🙏）'
          ),
          txt('ぜんぶ無料だよ。えらんだ教科の問題がとどくようになるよ📩'),
          { type: 'separator' as const, margin: 'md' as const },
          txt('✏️ 教科のかえ方', { weight: 'bold', color: C_TITLE }),
          txt(
            '下のボタン、または\nメニュー →「⚙️設定・サポート」→「学年・教科を変更」から、いつでも変えられるよ😊'
          ),
          { type: 'separator' as const, margin: 'md' as const },
          txt('🙏 お願いがあります', { weight: 'bold', color: C_TITLE }),
          txt(
            '想像以上のリクエストをいただき、超特急で問題をつくっています💦 一人でつくっているので、そのぶん答えや解説に まちがい・わかりにくいところ が残っているかも…！'
          ),
          txt(
            'もし「この問題、答えおかしくない🤔？」「ここ、こうしたほうがいいと思う！」があれば、このトークにそのまま送ってね📨'
          ),
          txt(
            'きみの一言で、みんなの教材がもっとよくなります✨ いつもありがとう😊'
          ),
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            action: {
              type: 'postback' as const,
              label: '🎓 学年・教科を変更',
              data: 'type=change_learning',
              displayText: '学年・教科を変更',
            },
          },
        ],
      },
    },
  };
}

async function main(): Promise<void> {
  const execute = process.argv.includes('--execute');
  const token = loadToken();
  const message = buildAnnouncement();

  console.log(
    `[subject-announcement-admin] 送信先=${ADMIN_LINE_USER_ID} execute=${execute}`
  );
  console.log(`[subject-announcement-admin] altText: ${message.altText}`);

  if (!execute) {
    console.log(
      '\n[subject-announcement-admin] dry-run のため送信なし（--execute で送信）。'
    );
    return;
  }

  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ to: ADMIN_LINE_USER_ID, messages: [message] }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    const reqId = res.headers.get('x-line-request-id');
    throw new Error(`LINE push ${res.status} reqId=${reqId} body=${body}`);
  }
  console.log('[subject-announcement-admin] ✓ 送信しました。');
}

main().catch((err) => {
  console.error('[subject-announcement-admin] fatal:', err);
  process.exit(1);
});

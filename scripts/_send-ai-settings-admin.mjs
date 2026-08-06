/**
 * AI 設定ページ（`/ai`）の案内カードを **管理人ひとりだけ** に push する検証用スクリプト。
 *
 * 本番の全ユーザーには、AI からの初回応答に付く Quick Reply「🤖 AIの性格設定」で
 * 1人1回だけ届く（`aiChat.personaPromptedAt`）。このスクリプトは
 * **見た目とリンクの動作を先に自分で確かめる**ためのもの。
 *
 * ⚠️ push なので LINE の月間配信枠を1通消費する（管理人1人ぶん）。
 *
 * 使い方:
 *   node scripts/_send-ai-settings-admin.mjs
 *   node scripts/_send-ai-settings-admin.mjs U<別のuserId>   # 宛先を変える
 */
import { readFileSync } from 'node:fs';

/** 既定の宛先＝管理人。 */
const DEFAULT_TO = 'U429b1d951fc7236c9e8e85e5ca96b910';
const TO = process.argv[2] || DEFAULT_TO;

/** 設定ページ URL（functions の `AI_SETTINGS_URL` と同じ既定値）。 */
const AI_SETTINGS_URL =
  process.env.LINE_AI_SETTINGS_URL ||
  'https://line.chatstudy.jp/ai?openExternalBrowser=1';

// functions/.env からチャネルトークンを読む（他の admin スクリプトと同じ手順）。
for (const line of readFileSync('functions/.env', 'utf8').split(/\r?\n/)) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  const eq = t.indexOf('=');
  if (eq < 0) continue;
  const k = t.slice(0, eq).trim();
  let v = t.slice(eq + 1).trim();
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1);
  }
  if (!(k in process.env)) process.env[k] = v;
}

const TOKEN = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
if (!TOKEN) {
  console.error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN が見つかりません');
  process.exit(1);
}

const flex = {
  type: 'flex',
  altText: 'AIの設定ができるようになりました',
  contents: {
    type: 'bubble',
    size: 'kilo',
    body: {
      type: 'box',
      layout: 'vertical',
      paddingAll: '18px',
      spacing: 'md',
      contents: [
        {
          type: 'text',
          text: '🤖 AIを自分好みにできるよ',
          weight: 'bold',
          size: 'md',
          color: '#111827',
          wrap: true,
        },
        {
          type: 'text',
          text: 'AIの名前、きみの呼ばれ方、話し方（性格）、知っておいてほしいことを設定できます。設定するとつぎの会話から変わるよ。',
          size: 'sm',
          color: '#4B5563',
          wrap: true,
        },
        {
          type: 'box',
          layout: 'vertical',
          spacing: 'xs',
          contents: [
            {
              type: 'text',
              text: '・AIの名前をつける',
              size: 'xs',
              color: '#6B7280',
            },
            {
              type: 'text',
              text: '・呼んでほしい名前を決める',
              size: 'xs',
              color: '#6B7280',
            },
            {
              type: 'text',
              text: '・話し方を4つから選ぶ',
              size: 'xs',
              color: '#6B7280',
            },
            {
              type: 'text',
              text: '・にがてなこと等を伝えておく',
              size: 'xs',
              color: '#6B7280',
            },
          ],
        },
        {
          type: 'button',
          style: 'primary',
          color: '#F59E0B',
          height: 'sm',
          action: {
            type: 'uri',
            label: '⚙ AIの設定をひらく',
            uri: AI_SETTINGS_URL,
          },
        },
        {
          type: 'text',
          text: 'あとから「設定・サポート」→「AIの設定」でも開けます',
          size: 'xxs',
          color: '#9CA3AF',
          wrap: true,
        },
      ],
    },
  },
};

const res = await fetch('https://api.line.me/v2/bot/message/push', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ to: TO, messages: [flex] }),
});

if (!res.ok) {
  console.error('送信失敗', res.status, await res.text());
  process.exit(1);
}
console.log(`送信しました → ${TO}`);
console.log(`リンク: ${AI_SETTINGS_URL}`);

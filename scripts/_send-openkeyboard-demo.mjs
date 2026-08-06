/**
 * Flex に入力欄は置けないが、postback の inputOption:'openKeyboard' + fillInText で
 * 「押すと『答え：』が入力済みの状態でキーボードが開く」ことができる。その体感用デモ。
 * data の type は未対応なので webhook 側は warn を出すだけで何もしない（安全）。
 */
import { readFileSync } from 'node:fs';
for (const line of readFileSync('functions/.env', 'utf8').split(/\r?\n/)) {
  const t = line.trim(); if (!t || t.startsWith('#')) continue;
  const eq = t.indexOf('='); if (eq < 0) continue;
  const k = t.slice(0, eq).trim();
  let v = t.slice(eq + 1).trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
  if (!(k in process.env)) process.env[k] = v;
}
const TOKEN = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
const TO = 'U429b1d951fc7236c9e8e85e5ca96b910';

const card = {
  type: 'bubble', size: 'kilo',
  header: {
    type: 'box', layout: 'vertical', backgroundColor: '#F59E0B', paddingAll: '12px',
    contents: [{ type: 'text', text: '✍️ 記述問題 1/3', color: '#FFFFFF', weight: 'bold', size: 'sm' }],
  },
  body: {
    type: 'box', layout: 'vertical', paddingAll: '14px', spacing: 'md',
    contents: [
      { type: 'text', text: '紀元前300年は紀元前100年よりも古い時代である。数字の大小と時代の古さの関係を説明しなさい。', size: 'sm', wrap: true, color: '#111827' },
      { type: 'separator' },
      { type: 'text', text: 'キーワード：紀元前 / 西暦1年', size: 'xs', color: '#6B7280', wrap: true },
    ],
  },
  footer: {
    type: 'box', layout: 'vertical', paddingAll: '14px', spacing: 'sm',
    contents: [
      { type: 'button', style: 'primary', color: '#F59E0B', height: 'sm',
        action: {
          type: 'postback', label: '✏️ 答えを書く', data: 'type=demo_openkeyboard',
          inputOption: 'openKeyboard', fillInText: '答え：',
        } },
      { type: 'text', text: '↑を押すと「答え：」が入った状態でキーボードが開きます', size: 'xxs', color: '#9CA3AF', wrap: true, align: 'center' },
    ],
  },
};

const res = await fetch('https://api.line.me/v2/bot/message/push', {
  method: 'POST',
  headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: TO,
    messages: [
      { type: 'text', text: '【検証】Flexに入力欄は置けませんが、これができます。\n「✏️ 答えを書く」を押してみてください。入力欄に「答え：」が入った状態でキーボードが開きます👇\n（このデモは採点まではつながっていません。押しても何も返りません）' },
      { type: 'flex', altText: '記述問題の入力デモ', contents: card },
    ],
  }),
});
console.log(`送信: ${res.status} ${res.ok ? 'OK' : await res.text()}`);

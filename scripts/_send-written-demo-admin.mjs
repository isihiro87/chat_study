/** 記述問題（AI採点）をワンタップで始められるカードを管理人へ push する。 */
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
const TOPIC = '古代文明の誕生'; // 記述3問

const btn = (label, topic) => ({
  type: 'button', style: 'primary', color: '#F59E0B', height: 'sm', margin: 'md',
  action: {
    type: 'postback', label,
    data: new URLSearchParams({ type: 'wb_kind', k: 'written', t: topic }).toString(),
    displayText: '記述問題に挑戦！',
  },
});

const card = {
  type: 'bubble', size: 'kilo',
  header: {
    type: 'box', layout: 'vertical', backgroundColor: '#F59E0B', paddingAll: '12px',
    contents: [{ type: 'text', text: '✍️ 記述問題（AI採点）', color: '#FFFFFF', weight: 'bold', size: 'sm' }],
  },
  body: {
    type: 'box', layout: 'vertical', paddingAll: '14px', contents: [
      { type: 'text', text: `単元「${TOPIC}」から全3問。`, size: 'sm', wrap: true, color: '#111827' },
      { type: 'text', text: '答えをそのままトークに打ち込んでね。Geminiが10点満点で採点して、フィードバックと採点基準を返すよ。', size: 'xs', wrap: true, color: '#6B7280', margin: 'md' },
      btn('この単元の記述問題を始める', TOPIC),
    ],
  },
};

const res = await fetch('https://api.line.me/v2/bot/message/push', {
  method: 'POST',
  headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: TO,
    messages: [
      { type: 'text', text: '【記述問題のデモ】\n下のボタンを押すと、その場で記述問題が始まります。答えはトークにそのまま文章で打ち込んでください👇' },
      { type: 'flex', altText: '記述問題（AI採点）を始める', contents: card },
    ],
  }),
});
console.log(`送信: ${res.status} ${res.ok ? 'OK' : await res.text()}`);

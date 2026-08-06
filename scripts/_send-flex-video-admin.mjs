/**
 * Flex Message の hero に video コンポーネントを入れた「動画つきカード」の見本。
 * 単体の video メッセージとの違い: 動画の下にタイトル・説明・ボタンを同居させられる。
 * 既にアップ済みの line-samples/* を再利用する（トークンはメタデータから取り出す）。
 */
import { readFileSync } from 'node:fs';
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

const PROJECT = 'chatstudy-63477';
const BUCKET = 'chatstudy-63477-tsudumon';
const TO = 'U429b1d951fc7236c9e8e85e5ca96b910';

for (const line of readFileSync('functions/.env', 'utf8').split(/\r?\n/)) {
  const t = line.trim(); if (!t || t.startsWith('#')) continue;
  const eq = t.indexOf('='); if (eq < 0) continue;
  const k = t.slice(0, eq).trim();
  let v = t.slice(eq + 1).trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
  if (!(k in process.env)) process.env[k] = v;
}
const TOKEN = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;

if (getApps().length === 0) initializeApp({ credential: applicationDefault(), projectId: PROJECT });
const bucket = getStorage().bucket(BUCKET);

async function urlOf(path) {
  const [md] = await bucket.file(path).getMetadata();
  const tok = md.metadata?.firebaseStorageDownloadTokens?.split(',')[0];
  if (!tok) throw new Error(`token なし: ${path}`);
  return `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(path)}?alt=media&token=${tok}`;
}
const videoUrl = await urlOf('line-samples/oda-nobunaga.mp4');
const previewUrl = await urlOf('line-samples/oda-nobunaga-preview.jpg');

const card = {
  type: 'bubble',
  size: 'mega',
  hero: {
    type: 'video',
    url: videoUrl,
    previewUrl,
    altContent: { type: 'image', size: 'full', aspectRatio: '9:16', aspectMode: 'cover', url: previewUrl },
    aspectRatio: '9:16',
  },
  body: {
    type: 'box', layout: 'vertical', spacing: 'sm', paddingAll: '16px',
    contents: [
      { type: 'text', text: '今日の1本｜安土桃山時代', size: 'xs', color: '#6B7280' },
      { type: 'text', text: '織田信長は「強い武将」じゃない', weight: 'bold', size: 'lg', wrap: true, color: '#111827' },
      { type: 'text', text: '55秒。見おわったら、関連する1問に挑戦してみよう。', size: 'sm', wrap: true, color: '#4B5563', margin: 'md' },
    ],
  },
  footer: {
    type: 'box', layout: 'vertical', spacing: 'sm', paddingAll: '16px',
    contents: [
      { type: 'button', style: 'primary', color: '#F59E0B', height: 'sm',
        action: { type: 'postback', label: 'この時代の1問に挑戦', data: 'type=extra_question&src=video_card', displayText: '1問解く' } },
      { type: 'button', style: 'link', height: 'sm',
        action: { type: 'message', label: 'ムビスタで続きを見る', text: 'ムビスタ' } },
    ],
  },
};

const res = await fetch('https://api.line.me/v2/bot/message/push', {
  method: 'POST',
  headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: TO,
    messages: [
      { type: 'text', text: '【見本】動画つきカード（Flex の video）\nさっきの単体の動画メッセージと見くらべてね。動画の下にタイトル・説明・ボタンを同居できるのが違い👇' },
      { type: 'flex', altText: '今日の1本｜織田信長は「強い武将」じゃない', contents: card },
    ],
  }),
});
console.log(`送信: ${res.status} ${res.ok ? 'OK' : await res.text()}`);

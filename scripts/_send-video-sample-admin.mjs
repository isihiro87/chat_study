/**
 * LINE の video メッセージ（未使用だった形式）の見本を管理人へ送る。
 * 動画は chatstudy-remotion/out/oda-nobunaga.mp4（1080x1920 / 55秒 / 4.5MB）。
 * 公開URLが要るので Firebase Storage に置き、ダウンロードトークン付きURLで配信する。
 */
import { readFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

const PROJECT = 'chatstudy-63477';
const BUCKET = 'chatstudy-63477-tsudumon';
const TO = process.argv.includes('--admin2')
  ? 'U732828c7b975479c97a104c5cbc45b7a'
  : 'U429b1d951fc7236c9e8e85e5ca96b910';

// functions/.env から LINE トークンを読む
for (const line of readFileSync('functions/.env', 'utf8').split(/\r?\n/)) {
  const t = line.trim(); if (!t || t.startsWith('#')) continue;
  const eq = t.indexOf('='); if (eq < 0) continue;
  const k = t.slice(0, eq).trim();
  let v = t.slice(eq + 1).trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
  if (!(k in process.env)) process.env[k] = v;
}
const TOKEN = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
if (!TOKEN) throw new Error('LINE token 未設定');

if (getApps().length === 0) initializeApp({ credential: applicationDefault(), projectId: PROJECT });
const bucket = getStorage().bucket(BUCKET);

async function upload(localPath, destPath, contentType) {
  const token = randomUUID();
  await bucket.upload(localPath, {
    destination: destPath,
    metadata: { contentType, metadata: { firebaseStorageDownloadTokens: token } },
  });
  const url = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(destPath)}?alt=media&token=${token}`;
  console.log(`  uploaded: ${destPath}`);
  return url;
}

const videoUrl = await upload('../chatstudy-remotion/out/oda-nobunaga.mp4', 'line-samples/oda-nobunaga.mp4', 'video/mp4');
const previewUrl = await upload(
  'C:/Users/user/AppData/Local/Temp/claude/C--Users-user-projects-education-apps/d3eee2ba-9cd1-43a0-a38a-5cfc54c93284/scratchpad/vid/preview.jpg',
  'line-samples/oda-nobunaga-preview.jpg', 'image/jpeg');

// 公開URLが本当に見えるか、送信前に確認する（403だとLINE側で無言で失敗する）
for (const [label, u] of [['video', videoUrl], ['preview', previewUrl]]) {
  const r = await fetch(u, { method: 'GET', headers: { Range: 'bytes=0-99' } });
  console.log(`  ${label} 到達確認: ${r.status} ${r.headers.get('content-type')}`);
  if (!r.ok) throw new Error(`${label} が公開されていません (${r.status})`);
}

const res = await fetch('https://api.line.me/v2/bot/message/push', {
  method: 'POST',
  headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: TO,
    messages: [
      { type: 'text', text: '【見本 追加】動画メッセージ（video）\nいままで一度も使っていなかった形式。トーク内でそのまま再生できるよ。\nこれは chatstudy-remotion で作った歴史の縦型動画（55秒）👇' },
      { type: 'video', originalContentUrl: videoUrl, previewImageUrl: previewUrl },
    ],
  }),
});
console.log(`\n送信: ${res.status} ${res.ok ? 'OK' : await res.text()}`);
console.log(`video   : ${videoUrl.slice(0, 110)}…`);

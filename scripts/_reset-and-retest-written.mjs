import { readFileSync } from 'node:fs';
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
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
if (getApps().length === 0) initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
await db.doc(`users/line:${TO}`).set({ workbookSession: FieldValue.delete() }, { merge: true });
console.log('古い workbookSession を削除しました');

const card = {
  type: 'bubble', size: 'kilo',
  header: { type: 'box', layout: 'vertical', backgroundColor: '#F59E0B', paddingAll: '12px',
    contents: [{ type: 'text', text: '✍️ 記述問題（修正版）', color: '#FFFFFF', weight: 'bold', size: 'sm' }] },
  body: { type: 'box', layout: 'vertical', paddingAll: '14px', contents: [
    { type: 'text', text: '単元「古代文明の誕生」から全3問。', size: 'sm', wrap: true },
    { type: 'text', text: '問題カードに「✏️ 答えを書く」ボタンが増えています。押すと採点対象がそのカードに固定されます。', size: 'xs', wrap: true, color: '#6B7280', margin: 'md' },
    { type: 'button', style: 'primary', color: '#F59E0B', height: 'sm', margin: 'md',
      action: { type: 'postback', label: '記述問題を始める',
        data: new URLSearchParams({ type: 'wb_kind', k: 'written', t: '古代文明の誕生' }).toString(),
        displayText: '記述問題に挑戦！' } },
  ] },
};
const res = await fetch('https://api.line.me/v2/bot/message/push', {
  method: 'POST', headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ to: TO, messages: [
    { type: 'text', text: '【修正版】記述問題の採点ズレを直しました。\n\n① 問題カードの「✏️ 答えを書く」を押す → そのカードの問題が採点対象に固定され、「答え：」入りでキーボードが開きます\n② 古いカードまでスクロールして押しても、そのカードの問題で採点されます\n③ 「答え：」の接頭辞は採点前に取り除かれます\n\n試してみてください👇' },
    { type: 'flex', altText: '記述問題（修正版）', contents: card },
  ] }),
});
console.log(`送信: ${res.status} ${res.ok ? 'OK' : await res.text()}`);

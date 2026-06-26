/**
 * 確認用: 英語の4択クイズを「学年ごと2問ずつ（計6問）」管理人だけに push する。
 * 本番 buildQuestionMessage と同一構造の Flex カードを data/content から組む。
 * 選択肢は実 postback（type=answer&questionId=...）なので、タップすれば本番の
 * 判定・解説（Firestore questions 由来）が返る。
 *
 *   npx tsx scripts/_send-english-trial-admin.ts            # ドライラン
 *   npx tsx scripts/_send-english-trial-admin.ts --execute  # 実送信（管理人のみ）
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const EXECUTE = process.argv.includes('--execute');
const ADMIN = 'U429b1d951fc7236c9e8e85e5ca96b910';
const HEADER_COLOR = '#EC4899'; // 英語＝ピンク（SUBJECT_HEADER_COLORS.english）

// 各学年から2問ずつ。最初のファイルの先頭2問（4択）を採用。
const PICKS: { grade: string; file: string; count: number }[] = [
  { grade: '中1', file: 'grade1/01-be-verbs.json', count: 2 },
  { grade: '中2', file: 'grade2/01-sentence-structures.json', count: 2 },
  { grade: '中3', file: 'grade3/01-present-perfect.json', count: 2 },
];

function buildCard(questionId: string, grade: string, text: string, choices: string[]) {
  return {
    type: 'flex' as const,
    altText: `英語｜${grade}: ${text.slice(0, 40)}`,
    contents: {
      type: 'bubble', size: 'kilo',
      header: {
        type: 'box', layout: 'vertical', backgroundColor: HEADER_COLOR, paddingAll: '14px',
        contents: [{ type: 'text', text: `英語｜${grade}`, color: '#FFFFFF', weight: 'bold', size: 'md', align: 'start' }],
      },
      body: {
        type: 'box', layout: 'vertical', paddingAll: '20px',
        contents: [{ type: 'text', text, wrap: true, weight: 'bold', size: 'lg', color: '#111827', align: 'start' }],
      },
      footer: {
        type: 'box', layout: 'vertical', spacing: 'sm', paddingAll: '16px',
        contents: choices.map((choice, i) => ({
          type: 'box', layout: 'horizontal', paddingAll: '10px', cornerRadius: 'md',
          backgroundColor: '#FFFFFF', borderColor: '#E5E7EB', borderWidth: '1px',
          action: { type: 'postback', label: choice.slice(0, 40), data: `type=answer&questionId=${questionId}&choice=${i}`, displayText: choice },
          contents: [
            { type: 'text', text: String.fromCharCode(65 + i), flex: 0, size: 'sm', weight: 'bold', color: '#F59E0B', gravity: 'top' },
            { type: 'text', text: choice, wrap: true, size: 'sm', color: '#111827', margin: 'sm', flex: 1 },
          ],
        })),
      },
    },
  };
}

function loadToken(): string {
  const raw = readFileSync(join(ROOT, 'functions/.env'), 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1 || t.slice(0, eq).trim() !== 'LINE_MESSAGING_CHANNEL_ACCESS_TOKEN') continue;
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    return v;
  }
  throw new Error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定');
}

async function pushMessages(messages: unknown[]) {
  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${loadToken()}` },
    body: JSON.stringify({ to: ADMIN, messages }),
  });
  if (!res.ok) { console.error(`送信失敗 ${res.status}: ${await res.text()}`); process.exit(1); }
}

async function main() {
  const cards: unknown[] = [];
  console.log(`[english-trial] execute=${EXECUTE} 送信先=${ADMIN}`);
  for (const p of PICKS) {
    const j = JSON.parse(readFileSync(join(ROOT, 'data/content/english', p.file), 'utf8'));
    const valid = (j.quiz?.questions ?? []).filter(
      (q: any) => Array.isArray(q.options) && q.options.length === 4 && typeof q.correctIndex === 'number'
    );
    const chosen = valid.slice(0, p.count);
    for (const q of chosen) {
      const docId = `q-english-${j.topicId}-${q.id}`;
      cards.push(buildCard(docId, p.grade, q.question, q.options));
      console.log(`  ${p.grade} ${docId} | 正解=${String.fromCharCode(65 + q.correctIndex)} | ${q.question.replace(/\n/g, ' ').slice(0, 40)}`);
    }
  }

  if (!EXECUTE) { console.log('\nドライラン完了。--execute で実送信。'); return; }

  // 1リクエスト最大5メッセージ。見出し + 6カードを分割送信。
  await pushMessages([
    { type: 'text', text: '【英語クイズ確認】中1・中2・中3から2問ずつ。選択肢をタップすると本番の判定・解説が返ります。' },
    ...cards.slice(0, 4),
  ]);
  await pushMessages(cards.slice(4));
  console.log(`\n送信成功（${cards.length}問）`);
}
main().catch((e) => { console.error(e); process.exit(1); });

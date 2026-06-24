/**
 * 修正確認用: 数学ハイブリッドカードを「タイプ別・最大5問」管理人だけに push する。
 *  - Type1: 問題文にインライン数式を含む（3x-y=4 / y= 等）→ MathJax 化されたか確認
 *  - Type2: 解説に % を含む（食塩水・割合）→ % と次文字の重なりが直ったか確認（タップして解説を表示）
 *
 * 本番 buildMathHybridMessage と同一構造のカードを manifest (_card-assets.generated.json) から組む。
 * 選択肢は実 postback（type=answer&questionId=...）なので、タップすれば本番の判定・解説（=修正版）が返る。
 *
 *   npx tsx scripts/_send-math-fix-trial-admin.ts            # ドライラン（送信内容と画像公開を確認）
 *   npx tsx scripts/_send-math-fix-trial-admin.ts --execute  # 実送信（管理人のみ）
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const EXECUTE = process.argv.includes('--execute');
const ADMIN = 'U429b1d951fc7236c9e8e85e5ca96b910';

const MATH_FORMULA_SCALE = 0.66;
const MATH_FORMULA_CAP = 258;
const MATH_CHOICE_SCALE = 0.6;
const MATH_CHOICE_CAP = 240;
const HEADER_COLOR = '#3B82F6';

// content file（folder/file）+ q.id。docId は generator と同じ `q-math-${topicId}-${q.id}`。
const TYPE1_ITEMS: { folder: string; file: string; id: string }[] = [
  { folder: 'grade2/1-expressions', file: 'literal-expressions.json', id: 'math-g2-literal-expr-q3' },  // 5,8,11,-11
  { folder: 'grade2/1-expressions', file: 'literal-expressions.json', id: 'math-g2-literal-expr-q4' },  // -3,15,-15,3
  { folder: 'grade2/1-expressions', file: 'literal-expressions.json', id: 'math-g2-literal-expr-q17' }, // 4,16,-4,10
  { folder: 'grade1/1-positive-negative', file: 'add-sub.json', id: 'math-g1-add-sub-q10' },            // 分数選択肢
  { folder: 'grade1/2-literal-expressions', file: 'notation.json', id: 'math-g1-lit-notation-q11' },    // 項の列挙
];
const TYPE2_ITEMS: { folder: string; file: string; id: string }[] = [];

const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function latexToPlain(s: string): string {
  return s
    .replace(/\\begin\{cases\}([\s\S]+?)\\end\{cases\}/g, (_m, i: string) => i.split(/\\\\/).map((x) => x.trim()).filter(Boolean).join('，  '))
    .replace(/\$([^$]+)\$/g, (_m, x: string) => x)
    .replace(/\\left|\\right/g, '')
    .replace(/\\d?frac\{([^{}]+)\}\{([^{}]+)\}/g, (_m, a: string, b: string) => { const p = (x: string) => (/[+\-]/.test(x.slice(1)) ? `(${x})` : x); return `${p(a.trim())}/${p(b.trim())}`; })
    .replace(/\\text\{([^{}]*)\}/g, '$1')
    .replace(/\\sqrt\{([^{}]+)\}/g, '√$1').replace(/\\sqrt/g, '√').replace(/\\pi/g, 'π')
    .replace(/\\times/g, '×').replace(/\\div/g, '÷').replace(/\\pm/g, '±').replace(/\\cdot/g, '・')
    .replace(/\\leqq|\\leq/g, '≦').replace(/\\geqq|\\geq/g, '≧').replace(/\\neq/g, '≠')
    .replace(/\\equiv/g, '≡').replace(/\\sim/g, '∼').replace(/\\parallel/g, '∥').replace(/\\ell/g, 'ℓ')
    .replace(/\\angle\s*/g, '∠').replace(/\\triangle\s*/g, '△')
    .replace(/\^\{(\d+)\}/g, (_m, d: string) => d.split('').map((c) => SUP[c] ?? c).join('')).replace(/\^(\d)/g, (_m, d: string) => SUP[d] ?? d)
    .replace(/\\,|\\;|\\ /g, ' ').replace(/\\\\/g, ' ').replace(/\\/g, '').replace(/[ \t]+/g, ' ').trim();
}

type Part = { t: 'text'; s: string } | { t: 'img'; u: string; w: number; h: number };
type Manifest = Record<string, { questionParts: Part[]; choiceParts: Part[]; explanationImage?: { u: string; w: number; h: number } }>;
const manifest: Manifest = JSON.parse(readFileSync(join(ROOT, 'data/content/math/_card-assets.generated.json'), 'utf8'));

function gradeOf(folder: string): string {
  if (folder.startsWith('grade1')) return '中1';
  if (folder.startsWith('grade2')) return '中2';
  return '中3';
}

function buildCard(questionId: string, grade: string, choices: string[], altText: string, qp: Part[], cp: Part[]) {
  const body: any[] = qp.map((p, idx) =>
    p.t === 'text'
      ? { type: 'text', text: p.s, wrap: true, weight: 'bold', size: 'lg', color: '#111827', ...(idx > 0 ? { margin: 'md' } : {}) }
      : { type: 'image', url: p.u, size: `${Math.min(MATH_FORMULA_CAP, Math.round(MATH_FORMULA_SCALE * p.w))}px`, aspectRatio: `${p.w}:${p.h}`, aspectMode: 'fit', align: 'start', backgroundColor: '#FFFFFF', ...(idx > 0 ? { margin: 'md' } : {}) }
  );
  const footer = cp.map((c, i) => {
    const inner = c.t === 'text'
      ? { type: 'text', text: c.s ?? choices[i], wrap: true, size: 'sm', color: '#111827', margin: 'md', gravity: 'center' }
      : { type: 'image', url: c.u, size: `${Math.min(MATH_CHOICE_CAP, Math.round(MATH_CHOICE_SCALE * (c.w ?? 100)))}px`, aspectRatio: `${c.w}:${c.h}`, aspectMode: 'fit', align: 'start', gravity: 'center', margin: 'md', backgroundColor: '#FFFFFF' };
    return {
      type: 'box', layout: 'horizontal', paddingAll: '10px', cornerRadius: 'md', spacing: 'sm',
      backgroundColor: '#FFFFFF', borderColor: '#E5E7EB', borderWidth: '1px', alignItems: 'center',
      action: { type: 'postback', label: String.fromCharCode(65 + i), data: `type=answer&questionId=${questionId}&choice=${i}`, displayText: choices[i] },
      contents: [{ type: 'text', text: String.fromCharCode(65 + i), flex: 0, size: 'sm', weight: 'bold', color: '#F59E0B', gravity: 'center' }, inner],
    };
  });
  return {
    type: 'flex' as const,
    altText: `数学｜${grade}: ${altText.slice(0, 40)}`,
    contents: {
      type: 'bubble', size: 'kilo',
      header: { type: 'box', layout: 'vertical', backgroundColor: HEADER_COLOR, paddingAll: '14px', contents: [{ type: 'text', text: `数学｜${grade}`, color: '#FFFFFF', weight: 'bold', size: 'md' }] },
      body: { type: 'box', layout: 'vertical', paddingAll: '20px', contents: body },
      footer: { type: 'box', layout: 'vertical', spacing: 'sm', paddingAll: '16px', contents: footer },
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

async function urlLive(url: string): Promise<boolean> {
  try { const r = await fetch(url, { method: 'HEAD' }); return r.ok && (r.headers.get('content-type') || '').includes('image'); } catch { return false; }
}

function makeCards(items: { folder: string; file: string; id: string }[]) {
  const cards: any[] = [];
  const urls: string[] = [];
  for (const it of items) {
    const j = JSON.parse(readFileSync(join(ROOT, 'data/content/math', it.folder, it.file), 'utf8'));
    const q = j.quiz.questions.find((x: any) => x.id === it.id);
    if (!q) throw new Error('問題なし: ' + it.id);
    const docId = `q-math-${j.topicId}-${q.id}`;
    const m = manifest[docId];
    if (!m) throw new Error('manifest なし: ' + docId);
    const grade = gradeOf(it.folder);
    const choices = q.options.map((o: string) => latexToPlain(o));
    for (const p of [...m.questionParts, ...m.choiceParts]) if (p.t === 'img') urls.push(p.u);
    cards.push({ card: buildCard(docId, grade, choices, latexToPlain(q.question), m.questionParts, m.choiceParts), q: latexToPlain(q.question).slice(0, 36), docId });
  }
  return { cards, urls };
}

async function pushMessages(messages: any[]) {
  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${loadToken()}` },
    body: JSON.stringify({ to: ADMIN, messages }),
  });
  if (!res.ok) { console.error(`送信失敗 ${res.status}: ${await res.text()}`); process.exit(1); }
}

async function main() {
  const t1 = makeCards(TYPE1_ITEMS);
  const t2 = makeCards(TYPE2_ITEMS);
  console.log(`[math-fix-trial] execute=${EXECUTE} 送信先=${ADMIN}`);
  console.log(`Type1（インライン数式）${t1.cards.length}問:`); t1.cards.forEach((c) => console.log('  - ' + c.q));
  console.log(`Type2（解説の%）${t2.cards.length}問:`); t2.cards.forEach((c) => console.log('  - ' + c.q));

  const allUrls = [...new Set([...t1.urls, ...t2.urls])];
  let dead = 0;
  for (const u of allUrls) { if (!(await urlLive(u))) { console.error('  画像未公開: ' + u); dead++; } }
  console.log(`画像公開確認: ${allUrls.length - dead}/${allUrls.length} OK`);
  if (dead > 0) { console.error('未公開画像あり。Vercel デプロイ待ち。中止。'); process.exit(1); }

  if (!EXECUTE) { console.log('\nドライラン完了。--execute で実送信。'); return; }

  // 1リクエスト最大5メッセージ。見出しテキスト + カードを分割送信。
  await pushMessages([{ type: 'text', text: '【整合性修正】選択肢が画像とテキストに割れていた5問。全選択肢が同じ書体（MathJax）で揃ったか確認してください。' }, ...t1.cards.slice(0, 4).map((c) => c.card)]);
  if (t1.cards.length > 4) await pushMessages([...t1.cards.slice(4).map((c) => c.card)]);
  console.log(`\n送信成功（${t1.cards.length}問）`);
}
main().catch((e) => { console.error(e); process.exit(1); });

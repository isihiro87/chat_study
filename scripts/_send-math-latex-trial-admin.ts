/**
 * 数学「A案（問題文をLaTeX組版した画像）」のお試しを管理人だけに push するテスト。
 *  - 問題文は MathJax+Noto CJK で画像化（render-math-image）→ public/graphs/math-tex-<id>.png
 *  - 選択肢は Unicode テキストの表示行（タップ無効・確認用）
 *
 *   npx tsx scripts/_send-math-latex-trial-admin.ts --render    # 画像を生成（→commit&push してVercel公開）
 *   npx tsx scripts/_send-math-latex-trial-admin.ts --execute   # URL公開確認後に実送信（管理人のみ）
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderQuestionToPng } from './render-math-image';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const RENDER = process.argv.includes('--render');
const EXECUTE = process.argv.includes('--execute');
const ADMIN = 'U429b1d951fc7236c9e8e85e5ca96b910';
const BASE = 'https://www.chatstudy.jp/graphs';

const TRIAL: { folder: string; file: string; id: string }[] = [
  { folder: 'grade1/3-equations', file: 'basics.json', id: 'math-g1-eq-basics-q5' }, // x/4=6 のみ
];

const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function latexToPlain(s: string): string {
  return s
    .replace(/\\begin\{cases\}([\s\S]+?)\\end\{cases\}/g, (_m, i: string) => i.split(/\\\\/).map((x) => x.trim()).filter(Boolean).join('，  '))
    .replace(/\$([^$]+)\$/g, (_m, x: string) => x)
    .replace(/\\left|\\right/g, '')
    .replace(/\\d?frac\{([^{}]+)\}\{([^{}]+)\}/g, (_m, a: string, b: string) => { const p = (x: string) => (/[+\-]/.test(x.slice(1)) ? `(${x})` : x); return `${p(a.trim())}/${p(b.trim())}`; })
    .replace(/\\sqrt\{([^{}]+)\}/g, '√$1').replace(/\\sqrt/g, '√').replace(/\\pi/g, 'π')
    .replace(/\\times/g, '×').replace(/\\div/g, '÷').replace(/\\pm/g, '±').replace(/\\cdot/g, '・')
    .replace(/\\leqq|\\leq/g, '≦').replace(/\\geqq|\\geq/g, '≧').replace(/\\neq/g, '≠')
    .replace(/\\angle\s*/g, '∠').replace(/\\triangle\s*/g, '△')
    .replace(/\^\{(\d+)\}/g, (_m, d: string) => d.split('').map((c) => SUP[c] ?? c).join('')).replace(/\^(\d)/g, (_m, d: string) => SUP[d] ?? d)
    .replace(/\\,|\\;|\\ /g, ' ').replace(/\\\\/g, ' ').replace(/\\/g, '').replace(/[ \t]+/g, ' ').trim();
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

// 方法1（ハイブリッド）: 日本語は Flex テキスト（理科と同じ lg/sm）、数式（分数等）だけ画像。
// 画像化が必要か（段組み分数・根号・連立）。これら以外は Unicode テキストで足りる。
const VER = 'v=12';
const FORMULA_SCALE = 0.66; // 問題内の数式画像の表示倍率（数式の文字 ≒ lg 相当）
const CHOICE_FRAC_SCALE = 0.55; // 選択肢の分数画像の表示倍率（sm テキストの選択肢に寄せる）
function needsImage(latex: string): boolean {
  return /\\d?frac|\\sqrt|\\begin\{cases\}/.test(latex);
}
const isPureMathLine = (line: string) => /^\$[^$]+\$$/.test(line.trim());

type Part = { type: 'text'; text: string } | { type: 'image'; url: string; w: number; h: number };

function buildCard(q: any, qParts: Part[], choiceParts: Part[]) {
  const body: any[] = qParts.map((p, idx) =>
    p.type === 'text'
      ? { type: 'text', text: p.text, wrap: true, size: 'lg', weight: 'bold', color: '#111827', ...(idx > 0 ? { margin: 'md' } : {}) }
      : { type: 'image', url: `${p.url}?${VER}`, size: `${Math.round(FORMULA_SCALE * p.w)}px`, aspectRatio: `${p.w}:${p.h}`, aspectMode: 'fit', align: 'start', margin: 'md', backgroundColor: '#FFFFFF' }
  );
  const optionRows = choiceParts.map((c, i) => {
    const inner = c.type === 'text'
      ? { type: 'text', text: c.text, wrap: true, size: 'sm', color: '#111827', margin: 'md', gravity: 'center' }
      : { type: 'image', url: `${c.url}?${VER}`, size: `${Math.round(CHOICE_FRAC_SCALE * c.w)}px`, aspectRatio: `${c.w}:${c.h}`, aspectMode: 'fit', align: 'start', margin: 'md', gravity: 'center', backgroundColor: '#FFFFFF' };
    return {
      type: 'box', layout: 'horizontal', paddingAll: '10px', cornerRadius: 'md', spacing: 'sm',
      backgroundColor: '#FFFFFF', borderColor: '#E5E7EB', borderWidth: '1px', alignItems: 'center',
      contents: [{ type: 'text', text: String.fromCharCode(65 + i), flex: 0, size: 'sm', weight: 'bold', color: '#F59E0B', gravity: 'center' }, inner],
    };
  });
  return {
    type: 'flex' as const,
    altText: `数学（試作）: ${latexToPlain(q.question).slice(0, 40)}`,
    contents: {
      type: 'bubble', size: 'kilo',
      header: { type: 'box', layout: 'vertical', backgroundColor: '#3B82F6', paddingAll: '14px',
        contents: [{ type: 'text', text: '数学｜中2', color: '#FFFFFF', weight: 'bold', size: 'md' }] },
      body: { type: 'box', layout: 'vertical', paddingAll: '20px', contents: body },
      footer: { type: 'box', layout: 'vertical', spacing: 'sm', paddingAll: '16px', contents: optionRows },
    },
  };
}

async function main() {
  console.log(`[math-latex-trial] render=${RENDER} execute=${EXECUTE} 送信先=${ADMIN}`);
  const items: { q: any; qParts: Part[]; choiceParts: Part[]; urls: string[] }[] = [];
  for (const t of TRIAL) {
    const j = JSON.parse(readFileSync(join(ROOT, 'data/content/math', t.folder, t.file), 'utf8'));
    const q = j.quiz.questions.find((x: any) => x.id === t.id);
    if (!q) throw new Error('問題が見つからない: ' + t.id);
    const urls: string[] = [];
    // 問題文: 行ごとに「数式のみ行→画像」「それ以外→Unicodeテキスト(lg)」
    const qParts: Part[] = [];
    const lines = (q.question as string).split('\n');
    for (let li = 0; li < lines.length; li++) {
      const line = lines[li];
      if (isPureMathLine(line)) {
        const fp = join(ROOT, 'public/graphs', `math-tex-${t.id}-q${li}.png`);
        const d = await renderQuestionToPng(line.trim(), fp);
        const url = `${BASE}/math-tex-${t.id}-q${li}.png`;
        qParts.push({ type: 'image', url, w: d.width, h: d.height });
        urls.push(url);
      } else if (line.trim()) {
        qParts.push({ type: 'text', text: latexToPlain(line) });
      }
    }
    // 選択肢: 分数等を含む→画像 / それ以外→Unicodeテキスト(sm)
    const choiceParts: Part[] = [];
    for (let i = 0; i < q.options.length; i++) {
      const opt = q.options[i] as string;
      if (needsImage(opt)) {
        const op = join(ROOT, 'public/graphs', `math-tex-${t.id}-opt${i}.png`);
        const d = await renderQuestionToPng(opt, op);
        const url = `${BASE}/math-tex-${t.id}-opt${i}.png`;
        choiceParts.push({ type: 'image', url, w: d.width, h: d.height });
        urls.push(url);
      } else {
        choiceParts.push({ type: 'text', text: latexToPlain(opt) });
      }
    }
    const nImg = qParts.filter((p) => p.type === 'image').length + choiceParts.filter((p) => p.type === 'image').length;
    console.log(`  ${t.id}: テキスト${qParts.filter((p) => p.type === 'text').length}+画像${nImg}（問題${qParts.length}部 / 選択肢${choiceParts.length}）`);
    items.push({ q, qParts, choiceParts, urls });
  }
  if (!EXECUTE) {
    console.log('\n[render] 画像生成のみ。commit & push → Vercel公開後に --execute で送信。');
    return;
  }
  for (const it of items) {
    for (const u of it.urls) {
      const live = await urlLive(`${u}?${VER}`);
      if (!live) { console.error(`画像が未公開です（push & Vercelデプロイ待ち）: ${u}`); process.exit(1); }
    }
    console.log(`  OK  ${it.q.id}（公開確認 ${it.urls.length}枚）`);
  }
  const cards = items.map(({ q, qParts, choiceParts }) => buildCard(q, qParts, choiceParts));
  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${loadToken()}` },
    body: JSON.stringify({ to: ADMIN, messages: cards }),
  });
  if (!res.ok) { console.error(`[math-latex-trial] 送信失敗 ${res.status}: ${await res.text()}`); process.exit(1); }
  console.log(`\n[math-latex-trial] 送信成功（${cards.length}問）`);
}
main().catch((e) => { console.error(e); process.exit(1); });

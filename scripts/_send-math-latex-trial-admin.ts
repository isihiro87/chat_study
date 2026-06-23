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
  { folder: 'grade2/2-simultaneous-equations', file: 'basics.json', id: 'math-g2-simul-eq-basics-q4' },
  { folder: 'grade2/3-linear-functions', file: 'find-equation.json', id: 'math-g2-find-linear-eq-q2' },
  { folder: 'grade1/1-positive-negative', file: 'add-sub.json', id: 'math-g1-add-sub-q10' },
  { folder: 'grade2/1-expressions', file: 'monomial-mul-div.json', id: 'math-g2-mono-mul-div-q31' },
  { folder: 'grade1/3-equations', file: 'basics.json', id: 'math-g1-eq-basics-q5' },
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

// 他教科のテキストカード（kilo bubble・問題=lg・選択肢=sm）に大きさを合わせる。
// source em=30 を「lg≈19px / sm≈13px」相当で表示するため固定倍率で出す。
const SCALE_Q = 19 / 30; // 問題文 ≈ lg
const SCALE_C = 13 / 30; // 選択肢 ≈ sm
const CAP_Q = 230; // kilo 本文幅の目安（超えたら頭打ち）

function buildCard(q: any, dim: { width: number; height: number }, optDims: { width: number; height: number }[]) {
  const url = `${BASE}/math-tex-${q.id}.png?v=6`;
  const qW = Math.min(CAP_Q, Math.round(SCALE_Q * dim.width));
  const optionRows = (q.options as string[]).map((_opt, i) => {
    const imgW = Math.min(CAP_Q - 30, Math.round(SCALE_C * optDims[i].width));
    return {
      type: 'box' as const, layout: 'horizontal' as const, paddingAll: '10px', cornerRadius: 'md' as const, spacing: 'md' as const,
      backgroundColor: '#FFFFFF', borderColor: '#E5E7EB', borderWidth: '1px', alignItems: 'center' as const,
      // 本番ではここに action: postback（回答）を付ければ画像選択肢のままタップ回答にできる
      contents: [
        { type: 'text' as const, text: String.fromCharCode(65 + i), flex: 0, size: 'sm' as const, weight: 'bold' as const, color: '#F59E0B', gravity: 'center' as const },
        { type: 'image' as const, url: `${BASE}/math-tex-${q.id}-opt${i}.png?v=6`, size: `${imgW}px`, aspectRatio: `${optDims[i].width}:${optDims[i].height}`, aspectMode: 'fit' as const, align: 'start' as const, gravity: 'center' as const, backgroundColor: '#FFFFFF' },
      ],
    };
  });
  return {
    type: 'flex' as const,
    altText: `数学（LaTeX組版・試作）: ${latexToPlain(q.question).slice(0, 40)}`,
    contents: {
      type: 'bubble' as const, size: 'kilo' as const,
      header: { type: 'box' as const, layout: 'vertical' as const, backgroundColor: '#3B82F6', paddingAll: '14px',
        contents: [{ type: 'text' as const, text: '数学｜中2', color: '#FFFFFF', weight: 'bold' as const, size: 'md' as const }] },
      body: { type: 'box' as const, layout: 'vertical' as const, paddingAll: '20px', contents: [
        { type: 'image' as const, url, size: `${qW}px`, aspectRatio: `${dim.width}:${dim.height}`, aspectMode: 'fit' as const, align: 'start' as const, backgroundColor: '#FFFFFF' },
      ] },
      footer: { type: 'box' as const, layout: 'vertical' as const, spacing: 'sm' as const, paddingAll: '16px', contents: optionRows },
    },
  };
}

async function main() {
  console.log(`[math-latex-trial] render=${RENDER} execute=${EXECUTE} 送信先=${ADMIN}`);
  const items: { q: any; dim: { width: number; height: number }; optDims: { width: number; height: number }[] }[] = [];
  for (const t of TRIAL) {
    const j = JSON.parse(readFileSync(join(ROOT, 'data/content/math', t.folder, t.file), 'utf8'));
    const q = j.quiz.questions.find((x: any) => x.id === t.id);
    if (!q) throw new Error('問題が見つからない: ' + t.id);
    const out = join(ROOT, 'public/graphs', `math-tex-${t.id}.png`);
    const dim = await renderQuestionToPng(q.question, out);
    // 選択肢はタイトに1回レンダリング（カード側で一定の高さに縮めて表示＝コンパクト）
    const optDims: { width: number; height: number }[] = [];
    for (let i = 0; i < q.options.length; i++) {
      optDims.push(await renderQuestionToPng(q.options[i], join(ROOT, 'public/graphs', `math-tex-${t.id}-opt${i}.png`)));
    }
    console.log(`  rendered Q ${dim.width}x${dim.height} + ${q.options.length}択  | ${q.question.replace(/\n/g, ' ').slice(0, 36)}`);
    items.push({ q, dim, optDims });
  }
  if (!EXECUTE) {
    console.log('\n[render] 画像生成のみ。commit & push → Vercel公開後に --execute で送信。');
    return;
  }
  // 公開確認（問題画像＋選択肢画像）
  for (let k = 0; k < TRIAL.length; k++) {
    const t = TRIAL[k];
    const urls = [`${BASE}/math-tex-${t.id}.png?v=6`, ...items[k].q.options.map((_: any, i: number) => `${BASE}/math-tex-${t.id}-opt${i}.png?v=6`)];
    for (const u of urls) {
      const live = await urlLive(u);
      if (!live) { console.error(`画像が未公開です（push & Vercelデプロイ待ち）: ${u}`); process.exit(1); }
    }
    console.log(`  OK  ${t.id}（問題＋${items[k].q.options.length}択）`);
  }
  const cards = items.map(({ q, dim, optDims }) => buildCard(q, dim, optDims));
  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${loadToken()}` },
    body: JSON.stringify({ to: ADMIN, messages: cards }),
  });
  if (!res.ok) { console.error(`[math-latex-trial] 送信失敗 ${res.status}: ${await res.text()}`); process.exit(1); }
  console.log(`\n[math-latex-trial] 送信成功（${cards.length}問）`);
}
main().catch((e) => { console.error(e); process.exit(1); });

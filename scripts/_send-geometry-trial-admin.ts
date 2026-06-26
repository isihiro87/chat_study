/**
 * 図形問題（幾何図つき）の試作を管理人だけに push するテスト用スクリプト。
 * 図は www.chatstudy.jp/graphs/<id>.png（public/graphs 由来）を Flex の body 内
 * （問題文の下・選択肢の上）に配置する。選択肢はタップ無効の表示サンプル。
 *
 *   npx tsx scripts/_send-geometry-trial-admin.ts            # dry-run
 *   npx tsx scripts/_send-geometry-trial-admin.ts --execute  # 実送信（管理人のみ）
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const EXECUTE = process.argv.includes('--execute');
const ADMIN = 'U429b1d951fc7236c9e8e85e5ca96b910';
const BASE = 'https://www.chatstudy.jp/graphs';

// 各図形タイプの代表を1問ずつ（最大5メッセージ/push）
const TRIAL: { file: string; id: string }[] = [
  { file: 'grade2/4-parallel-congruence/angles.json', id: 'math-g2-angles-q20' }, // 平行線・錯角
  { file: 'grade2/4-parallel-congruence/angles.json', id: 'math-g2-angles-q24' }, // 三角形の外角
  { file: 'grade2/4-parallel-congruence/angles.json', id: 'math-g2-angles-q25' }, // 正五角形
  { file: 'grade2/5-triangles-quadrilaterals/triangles.json', id: 'math-g2-triangles-q18' }, // 二等辺三角形
  { file: 'grade1/5-plane-figures/circle-fan.json', id: 'math-g1-circle-fan-q17' }, // おうぎ形
];

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

const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function latexToPlain(s: string): string {
  return s
    .replace(/\$(.+?)\$/g, (_, m) => m)
    .replace(/\\dfrac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2')
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2')
    .replace(/\\angle/g, '∠')
    .replace(/\\pi/g, 'π')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\leqq|\\leq/g, '≦')
    .replace(/\\geqq|\\geq/g, '≧')
    .replace(/\^\{(\d+)\}/g, (_, d: string) => d.split('').map((c) => SUP[c] ?? c).join(''))
    .replace(/\^(\d)/g, (_, d: string) => SUP[d] ?? d)
    .replace(/\\,|\\ /g, ' ')
    .replace(/\\left|\\right/g, '')
    .replace(/\\/g, '')
    .trim();
}

async function urlLive(url: string): Promise<boolean> {
  try {
    const r = await fetch(url, { method: 'HEAD' });
    return r.ok && (r.headers.get('content-type') || '').includes('image');
  } catch {
    return false;
  }
}

function buildCard(q: any) {
  const url = `${BASE}/${q.id}.png?v=2`;
  const optionRows = (q.options as string[]).map((opt, i) => ({
    type: 'box' as const, layout: 'horizontal' as const, paddingAll: '10px', cornerRadius: 'md' as const,
    backgroundColor: '#FFFFFF', borderColor: '#E5E7EB', borderWidth: '1px',
    contents: [
      { type: 'text' as const, text: String.fromCharCode(65 + i), flex: 0, size: 'sm' as const, weight: 'bold' as const, color: '#F59E0B' },
      { type: 'text' as const, text: latexToPlain(opt), wrap: true, size: 'sm' as const, color: '#111827', margin: 'sm' as const },
    ],
  }));
  return {
    type: 'flex' as const,
    altText: `数学（図つき試作）: ${latexToPlain(q.question).slice(0, 40)}`,
    contents: {
      type: 'bubble' as const, size: 'mega' as const,
      header: { type: 'box' as const, layout: 'vertical' as const, backgroundColor: '#3B82C4', paddingAll: '14px',
        contents: [{ type: 'text' as const, text: '数学（図つき試作・表示確認）', color: '#FFFFFF', weight: 'bold' as const, size: 'md' as const }] },
      body: { type: 'box' as const, layout: 'vertical' as const, paddingAll: '18px', contents: [
        { type: 'text' as const, text: latexToPlain(q.question), wrap: true, weight: 'bold' as const, size: 'md' as const, color: '#111827' },
        { type: 'image' as const, url, size: 'full' as const, aspectRatio: '1:1' as const, aspectMode: 'fit' as const, margin: 'lg' as const, backgroundColor: '#FAF9F7' },
      ] },
      footer: { type: 'box' as const, layout: 'vertical' as const, spacing: 'sm' as const, paddingAll: '16px', contents: optionRows },
    },
  };
}

async function main() {
  const cards: any[] = [];
  console.log(`[geo-trial] 送信先=${ADMIN} execute=${EXECUTE}`);
  console.log('図PNGの公開状況を確認中...');
  for (const item of TRIAL) {
    const j = JSON.parse(readFileSync(join(ROOT, 'data/content/math', item.file), 'utf8'));
    const q = j.quiz.questions.find((x: any) => x.id === item.id);
    if (!q) throw new Error('問題が見つからない: ' + item.id);
    const live = await urlLive(`${BASE}/${q.id}.png?v=2`);
    console.log(`  ${live ? "OK " : "NG "} ${BASE}/${q.id}.png?v=2  | ${latexToPlain(q.question).slice(0, 30)}`);
    if (!live) throw new Error(`画像が未公開（Vercelデプロイ待ち?）: ${q.id}`);
    cards.push(buildCard(q));
  }
  if (!EXECUTE) {
    console.log('\n[dry-run] 送信していません。--execute で実送信します。');
    return;
  }
  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${loadToken()}` },
    body: JSON.stringify({ to: ADMIN, messages: cards }),
  });
  if (!res.ok) { console.error(`[geo-trial] 送信失敗 ${res.status}: ${await res.text()}`); process.exit(1); }
  console.log(`\n[geo-trial] 送信成功（${cards.length}問）`);
}
main().catch((e) => { console.error(e); process.exit(1); });

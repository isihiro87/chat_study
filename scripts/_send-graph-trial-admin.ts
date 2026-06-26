/**
 * 図つきクイズ問題カードの「試作」を管理人だけに push するテスト用スクリプト。
 *
 * data/content/math の image 付き問題（kind:'coordinate'）について、www.chatstudy.jp に
 * 配信済みのグラフPNG（public/graphs/ 由来）のURLを使い、Flex の hero 画像つき問題カードを
 * 管理人 1 名へ push する。本番の出題パス（buildQuestionMessage）と同じ見た目を再現するが、
 * 選択肢はタップ無効（表示確認用）にしてある。
 *
 *   npx tsx scripts/_send-graph-trial-admin.ts            # dry-run（送信なし・URLだけ確認）
 *   npx tsx scripts/_send-graph-trial-admin.ts --execute  # 実送信（管理人のみ）
 */
import { readFileSync } from "node:fs";
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const EXECUTE = process.argv.includes('--execute');

const ADMIN_LINE_USER_ID = 'U429b1d951fc7236c9e8e85e5ca96b910';
const GRAPH_BASE = 'https://www.chatstudy.jp/graphs';

// 試作で送る問題（graphs.json の image 付き q17〜q20）
const TRIAL = [
  'math-g1-graphs-q17',
  'math-g1-graphs-q18',
  'math-g1-graphs-q19',
  'math-g1-graphs-q20',
];

// ---- LINE トークン ----
function loadToken(): string {
  const raw = readFileSync(join(ROOT, 'functions/.env'), 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1) continue;
    if (t.slice(0, eq).trim() !== 'LINE_MESSAGING_CHANNEL_ACCESS_TOKEN') continue;
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
      v = v.slice(1, -1);
    return v;
  }
  throw new Error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定');
}

// ---- LaTeX → LINE 表示用 Unicode 変換（数学の $...$ 対応） ----
const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function latexToPlain(s: string): string {
  return s
    .replace(/\$(.+?)\$/g, (_, m) => m) // $...$ の中身だけ残す
    .replace(/\\dfrac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2')
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\leqq|\\leq/g, '≦')
    .replace(/\\geqq|\\geq/g, '≧')
    .replace(/\\neq/g, '≠')
    .replace(/\\cdot/g, '・')
    .replace(/\^\{(\d+)\}/g, (_, d: string) => d.split('').map((c) => SUP[c] ?? c).join(''))
    .replace(/\^(\d)/g, (_, d: string) => SUP[d] ?? d)
    .replace(/\\,|\\ /g, ' ')
    .replace(/\\left|\\right/g, '')
    .replace(/\\/g, '')
    .trim();
}

// www.chatstudy.jp に配信済みのグラフPNGのURLを返す。送信前に全URLが 200 で取得できることを確認する。
async function resolveGraphUrls(): Promise<Record<string, string>> {
  const urls: Record<string, string> = {};
  for (const id of TRIAL) {
    const url = `${GRAPH_BASE}/${id}.png`;
    let ok = false;
    try {
      const res = await fetch(url, { method: 'HEAD' });
      ok = res.ok && (res.headers.get('content-type') || '').includes('image');
    } catch {
      ok = false;
    }
    console.log(`  ${ok ? 'OK ' : 'NG '} ${url}`);
    if (!ok) throw new Error(`画像がまだ公開されていません（Vercelデプロイ待ち?）: ${url}`);
    urls[id] = url;
  }
  return urls;
}

function buildCard(q: any, imageUrl: string) {
  const optionRows = (q.options as string[]).map((opt, i) => ({
    type: 'box' as const,
    layout: 'horizontal' as const,
    paddingAll: '10px',
    cornerRadius: 'md' as const,
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderWidth: '1px',
    contents: [
      { type: 'text' as const, text: String.fromCharCode(65 + i), flex: 0, size: 'sm' as const, weight: 'bold' as const, color: '#F59E0B' },
      { type: 'text' as const, text: latexToPlain(opt), wrap: true, size: 'sm' as const, color: '#111827', margin: 'sm' as const },
    ],
  }));
  return {
    type: 'flex' as const,
    altText: `数学｜中1: ${latexToPlain(q.question).slice(0, 40)}`,
    contents: {
      type: 'bubble' as const,
      size: 'mega' as const,
      header: {
        type: 'box' as const,
        layout: 'vertical' as const,
        backgroundColor: '#3B82C4',
        paddingAll: '14px',
        contents: [{ type: 'text' as const, text: '数学｜中1（試作・表示確認）', color: '#FFFFFF', weight: 'bold' as const, size: 'md' as const }],
      },
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        paddingAll: '18px',
        contents: [
          { type: 'text' as const, text: latexToPlain(q.question), wrap: true, weight: 'bold' as const, size: 'md' as const, color: '#111827' },
          {
            type: 'image' as const,
            url: imageUrl,
            size: 'full' as const,
            aspectRatio: '1:1' as const,
            aspectMode: 'fit' as const,
            margin: 'lg' as const,
            backgroundColor: '#FAF9F7',
          },
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'sm' as const,
        paddingAll: '16px',
        contents: optionRows,
      },
    },
  };
}

async function main() {
  const graphs = JSON.parse(readFileSync(join(ROOT, 'data/content/math/grade1/4-functions/graphs.json'), 'utf8'));
  const byId = new Map<string, any>(graphs.quiz.questions.map((q: any) => [q.id, q]));

  console.log(`[graph-trial] 送信先=${ADMIN_LINE_USER_ID} execute=${EXECUTE}`);
  console.log('画像URL(www.chatstudy.jp/graphs)の公開状況を確認中...');
  const urls = await resolveGraphUrls();

  const cards = TRIAL.map((id) => buildCard(byId.get(id), urls[id]));
  const intro = { type: 'text' as const, text: '【試作】図つきクイズの表示確認です📈\nグラフが問題カードの中に表示されるか見てください。（選択肢はタップ無効の表示サンプルです）' };
  const messages = [intro, ...cards];

  // 変換後テキストのプレビュー
  console.log('\n--- 送信プレビュー（テキスト変換結果）---');
  for (const id of TRIAL) {
    const q = byId.get(id);
    console.log(`${id}: ${latexToPlain(q.question)}`);
    (q.options as string[]).forEach((o, i) => console.log(`   ${String.fromCharCode(65 + i)}. ${latexToPlain(o)}`));
  }

  if (!EXECUTE) {
    console.log('\n[dry-run] 送信していません。--execute で実送信します。');
    return;
  }

  const token = loadToken();
  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ to: ADMIN_LINE_USER_ID, messages }),
  });
  if (!res.ok) {
    console.error(`[graph-trial] 送信失敗 ${res.status}: ${await res.text()}`);
    process.exit(1);
  }
  console.log(`\n[graph-trial] 送信成功（${cards.length}問）`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

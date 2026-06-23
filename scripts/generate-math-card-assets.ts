/**
 * 数学のハイブリッドカード用アセット生成。
 *  - 問題文: 行ごとに「数式のみ行」→ MathJax 画像、それ以外 → Unicode テキスト。
 *  - 選択肢: 全部 MathJax 画像（x=24 等の数字も含め書体統一）。
 *  - 図(coordinate/geometry)は別ジェネレーターの既存画像（imageUrl）をそのまま使う。
 *
 * 出力:
 *  - public/graphs/mathcard/<qid>-q<i>.png（数式行）/ <qid>-opt<i>.png（選択肢）
 *  - data/content/math/_card-assets.generated.json（docId → {questionParts, choiceParts}）
 *
 *   npx tsx scripts/generate-math-card-assets.ts            # 全学年
 *   npx tsx scripts/generate-math-card-assets.ts --grade=中2 # 学年指定
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderQuestionToPng } from './render-math-image';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'data/content/math');
const OUT_DIR = join(ROOT, 'public/graphs/mathcard');
const BASE = 'https://www.chatstudy.jp/graphs/mathcard';

const GRADE_FOLDERS: Record<string, string[]> = {
  中1: ['grade1/1-positive-negative', 'grade1/2-literal-expressions', 'grade1/3-equations', 'grade1/4-functions', 'grade1/5-plane-figures', 'grade1/6-space-figures', 'grade1/7-data'],
  中2: ['grade2/1-expressions', 'grade2/2-simultaneous-equations', 'grade2/3-linear-functions', 'grade2/4-parallel-congruence', 'grade2/5-triangles-quadrilaterals', 'grade2/6-probability', 'grade2/7-data'],
  中3: ['grade3/1-expansion-factoring', 'grade3/2-square-roots', 'grade3/3-quadratic-equations', 'grade3/4-quadratic-functions'],
};

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
const isPureMathLine = (line: string) => /^\$[^$]+\$$/.test(line.trim());
// 日本語（ひらがな・カタカナ・漢字）を含むか＝「文章がメインの選択肢」
const hasCJK = (s: string) => /[぀-ヿ㐀-鿿々〆ヶ]/.test(s);

type Part = { t: 'text'; s: string } | { t: 'img'; u: string; w: number; h: number };

async function main() {
  const gradeArg = process.argv.find((a) => a.startsWith('--grade='))?.split('=')[1];
  const grades = gradeArg ? [gradeArg] : ['中1', '中2', '中3'];
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const manifest: Record<string, { questionParts: Part[]; choiceParts: Part[]; explanationImage?: { u: string; w: number; h: number } }> = {};
  let nImg = 0, nQ = 0;

  for (const grade of grades) {
    for (const folder of GRADE_FOLDERS[grade] ?? []) {
      const dir = join(CONTENT_DIR, folder);
      if (!existsSync(dir)) continue;
      for (const file of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
        const topic = JSON.parse(readFileSync(join(dir, file), 'utf-8'));
        for (const q of topic.quiz?.questions ?? []) {
          const docId = `q-math-${topic.topicId}-${q.id}`;
          const qid = q.id as string;
          // 問題文
          const questionParts: Part[] = [];
          const lines = (q.question as string).split('\n');
          for (let li = 0; li < lines.length; li++) {
            const line = lines[li];
            if (isPureMathLine(line)) {
              const out = join(OUT_DIR, `${qid}-q${li}.png`);
              const d = await renderQuestionToPng(line.trim(), out);
              questionParts.push({ t: 'img', u: `${BASE}/${qid}-q${li}.png`, w: d.width, h: d.height });
              nImg++;
            } else if (line.trim()) {
              questionParts.push({ t: 'text', s: latexToPlain(line) });
            }
          }
          // 選択肢: 日本語を含む or $...$数式でない → テキスト / $...$数式 → MathJax 画像。
          // （「∠B」等の素テキストは画像化せずテキスト表示）
          const choiceParts: Part[] = [];
          for (let i = 0; i < q.options.length; i++) {
            const opt = q.options[i] as string;
            if (hasCJK(opt) || !/\$[^$]+\$/.test(opt)) {
              choiceParts.push({ t: 'text', s: latexToPlain(opt) });
            } else {
              const out = join(OUT_DIR, `${qid}-opt${i}.png`);
              const d = await renderQuestionToPng(opt, out);
              choiceParts.push({ t: 'img', u: `${BASE}/${qid}-opt${i}.png`, w: d.width, h: d.height });
              nImg++;
            }
          }
          // 解説: 数式（$...$）を含むものだけ MathJax 画像化（段組み分数など）
          let explanationImage: { u: string; w: number; h: number } | undefined;
          if (typeof q.explanation === 'string' && q.explanation.includes('$')) {
            const out = join(OUT_DIR, `${qid}-exp.png`);
            const d = await renderQuestionToPng(q.explanation, out);
            explanationImage = { u: `${BASE}/${qid}-exp.png`, w: d.width, h: d.height };
            nImg++;
          }
          manifest[docId] = { questionParts, choiceParts, ...(explanationImage ? { explanationImage } : {}) };
          nQ++;
          if (nQ % 50 === 0) console.log(`  ${nQ} 問 / ${nImg} 画像`);
        }
      }
    }
  }
  const manifestPath = join(CONTENT_DIR, '_card-assets.generated.json');
  writeFileSync(manifestPath, JSON.stringify(manifest));
  console.log(`[math-card-assets] ${nQ} 問・${nImg} 画像を生成 → public/graphs/mathcard/`);
  console.log(`[math-card-assets] manifest: ${manifestPath}`);
}
main().catch((e) => { console.error(e); process.exit(1); });

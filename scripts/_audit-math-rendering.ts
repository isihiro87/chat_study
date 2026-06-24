/**
 * 数学コンテンツ全体の表示崩れ・MathJax化漏れを洗い出す監査スクリプト（読み取りのみ）。
 *  Check1: $...$ の MathJax パース失敗（画像が壊れる）
 *  Check2: 数式が $...$ で囲われておらず素テキスト表示になる箇所（MathJax化漏れ）
 *          - 選択肢: CJKなし & $なし & 数式っぽい → 画像化されずテキスト
 *          - 選択肢: CJKあり だが内部に未ラップ数式
 *          - 問題文: $...$ を除いた残りに未ラップ数式
 *  Check3: latexToPlain の変換残り（{ } や未対応コマンド語）→ テキスト表示で崩れる
 *
 *   npx tsx scripts/_audit-math-rendering.ts            # 全件
 *   npx tsx scripts/_audit-math-rendering.ts --grade=中2
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'data/content/math');
const GRADE_FOLDERS: Record<string, string[]> = {
  中1: ['grade1/1-positive-negative', 'grade1/2-literal-expressions', 'grade1/3-equations', 'grade1/4-functions', 'grade1/5-plane-figures', 'grade1/6-space-figures', 'grade1/7-data'],
  中2: ['grade2/1-expressions', 'grade2/2-simultaneous-equations', 'grade2/3-linear-functions', 'grade2/4-parallel-congruence', 'grade2/5-triangles-quadrilaterals', 'grade2/6-probability', 'grade2/7-data'],
  中3: ['grade3/1-expansion-factoring', 'grade3/2-square-roots', 'grade3/3-quadratic-equations', 'grade3/4-quadratic-functions'],
};

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor as any);
const texInput = new TeX({ packages: AllPackages });
const svgOutput = new SVG({ fontCache: 'none' });
const mjDoc = mathjax.document('', { InputJax: texInput, OutputJax: svgOutput });

function texFails(tex: string): string | null {
  try {
    const node = mjDoc.convert(tex, { display: false, em: 30, ex: 15 });
    const html = adaptor.outerHTML(node as any);
    const m = html.match(/data-mjx-error="([^"]+)"/);
    if (m) return m[1];
    if (/merror/.test(html)) return 'merror';
    return null;
  } catch (e: any) {
    return e?.message || 'throw';
  }
}

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

const hasCJK = (s: string) => /[぀-ヿ㐀-鿿々〆ヶ]/.test(s);
// 数値+単位（5cm, 30kg, 120°, 1辺6cm 等）は数式ではないので除外
const UNIT = '(cm|mm|km|kg|mL|dL|L|m|g|°|度|分|秒|時間|時|個|人|才|歳|円|本|枚|冊|題|点|回|割|問|羽|台|箱|袋|皿|脚|m²|cm²|cm³|m³)';
const stripUnits = (s: string) => s.replace(new RegExp(`\\d+(?:\\.\\d+)?\\s*${UNIT}`, 'g'), ' ').replace(new RegExp('第?\\d+(?:回|章|号|位)', 'g'), ' ');
// 数式っぽい（素テキストで出ると MathJax化漏れに見える）
function looksMath(s: string): boolean {
  const t = stripUnits(s).trim();
  if (!t) return false;
  if (/[=<>≦≧≠≒±×÷√π∠△≡∥]/.test(t)) return true;       // 関係/演算記号
  if (/\^|_\{|\\frac|\\sqrt/.test(t)) return true;            // 累乗・添字・分数・根号
  if (/\b\d+\s*\/\s*\d+\b/.test(t)) return true;             // 1/2 のような分数
  if (/[0-9][a-zA-Z]|[a-zA-Z][0-9]/.test(t)) return true;    // 2x, x2
  if (/[a-zA-Z]\s*[+\-]\s*[a-zA-Z0-9]/.test(t)) return true; // x + 3
  return false;
}
// $...$ を取り除いた残り（テキスト表示される部分）
const stripMath = (s: string) => s.replace(/\$[^$]+\$/g, ' ');
// latexToPlain 後の変換残り（崩れ）
function residue(plain: string): string | null {
  if (/[{}]/.test(plain)) return 'brace';
  const cmd = plain.match(/\b(frac|sqrt|overline|vec|cdot|cdots|ldots|le|ge|approx|infty|times|div|left|right|begin|end|mathrm|mathbf|boxed|overrightarrow|bar|hat|widehat|degree|circ|perp)\b/);
  if (cmd) return 'cmd:' + cmd[1];
  return null;
}

type Hit = { docId: string; kind: string; detail: string };
const hits: Hit[] = [];

function main() {
  const gradeArg = process.argv.find((a) => a.startsWith('--grade='))?.split('=')[1];
  const grades = gradeArg ? [gradeArg] : ['中1', '中2', '中3'];
  let nQ = 0;
  for (const grade of grades) {
    for (const folder of GRADE_FOLDERS[grade] ?? []) {
      const dir = join(CONTENT_DIR, folder);
      if (!existsSync(dir)) continue;
      for (const file of readdirSync(dir).filter((f) => f.endsWith('.json') && !f.startsWith('_'))) {
        const topic = JSON.parse(readFileSync(join(dir, file), 'utf8'));
        for (const q of topic.quiz?.questions ?? []) {
          nQ++;
          const docId = `${grade} ${folder.split('/')[1]}/${file} ${q.id}`;
          const fields: [string, string][] = [['Q', q.question]];
          (q.options ?? []).forEach((o: string, i: number) => fields.push([`opt${i}`, o]));
          if (typeof q.explanation === 'string') fields.push(['exp', q.explanation]);

          // Check1: 全 $...$ の MathJax パース
          for (const [where, val] of fields) {
            const re = /\$([^$]+)\$/g; let m: RegExpExecArray | null;
            while ((m = re.exec(val)) !== null) {
              const err = texFails(m[1]);
              if (err) hits.push({ docId, kind: 'TeX失敗', detail: `${where}: $${m[1]}$ → ${err}` });
            }
          }
          // Check2: MathJax化漏れ
          // 選択肢
          (q.options ?? []).forEach((opt: string, i: number) => {
            const wrapped = /\$[^$]+\$/.test(opt);
            if (!hasCJK(opt) && !wrapped && looksMath(opt)) {
              hits.push({ docId, kind: '化漏れ選択肢', detail: `opt${i}="${opt}"（$なし→テキスト表示）` });
            } else if (hasCJK(opt)) {
              const rest = stripMath(opt);
              if (looksMath(rest) && !/\$[^$]+\$/.test(opt)) hits.push({ docId, kind: '化漏れ選択肢(文章内)', detail: `opt${i}="${opt}"` });
            }
          });
          // 問題文（行ごと）
          for (const line of (q.question as string).split('\n')) {
            if (!line.trim()) continue;
            const rest = stripMath(line);
            if (looksMath(rest)) hits.push({ docId, kind: '化漏れ問題文', detail: `"${line.trim()}"（$外に数式）` });
          }
          // Check3: latexToPlain 残り（テキスト表示される部分のみ）
          // 問題文の $なし行 / 文章選択肢 / $なし解説
          for (const line of (q.question as string).split('\n')) {
            if (line.trim() && !/\$[^$]+\$/.test(line)) { const r = residue(latexToPlain(line)); if (r) hits.push({ docId, kind: '変換残りQ', detail: `${r}: "${latexToPlain(line)}"` }); }
          }
          (q.options ?? []).forEach((opt: string, i: number) => {
            if (hasCJK(opt) || !/\$[^$]+\$/.test(opt)) { const r = residue(latexToPlain(opt)); if (r) hits.push({ docId, kind: '変換残りopt', detail: `${r}: opt${i}="${latexToPlain(opt)}"` }); }
          });
          if (typeof q.explanation === 'string' && !q.explanation.includes('$')) {
            const r = residue(latexToPlain(q.explanation)); if (r) hits.push({ docId, kind: '変換残りexp', detail: `${r}: "${latexToPlain(q.explanation).slice(0, 60)}"` });
          }
        }
      }
    }
  }
  // 集計
  const byKind: Record<string, Hit[]> = {};
  for (const h of hits) (byKind[h.kind] ??= []).push(h);
  console.log(`\n===== 数学レンダリング監査: ${nQ}問中 ${hits.length}件 =====`);
  for (const kind of Object.keys(byKind).sort()) {
    console.log(`\n## ${kind} (${byKind[kind].length}件)`);
    for (const h of byKind[kind].slice(0, 40)) console.log(`  [${h.docId}] ${h.detail}`);
    if (byKind[kind].length > 40) console.log(`  ...他 ${byKind[kind].length - 40}件`);
  }
}
main();

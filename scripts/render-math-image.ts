/**
 * 数学の問題文（日本語＋LaTeX `$...$`）を、ブラウザ無しで PNG に組版するレンダラ。
 *
 *  - 数式は MathJax（TeX→SVG）でレンダリングし、px にスケールしてベースライン整列。
 *  - 日本語・通常テキストは SVG <text>（Noto CJK）で描画。
 *  - 行内で text run と math run を左→右にフロー（必要なら折り返し）し、sharp で PNG 化。
 *
 * 使い方:
 *   import { renderQuestionToPng } from './render-math-image';
 *   await renderQuestionToPng('次の計算をしましょう。\n$\\frac{2x+1}{3}\\times 6$', '/path/out.png');
 */
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';
import sharp from 'sharp';

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor as any);
const texInput = new TeX({ packages: AllPackages });

// レイアウト定数（px）
const F = 30; // 通常テキストのフォントサイズ
const EX = F / 2; // 1ex = 15px（math の x-height 目安）
const EM = F; // 1em = 30px
const MAXW = 300; // 本文の最大幅（kilo bubble に合わせて狭めに折り返す＝文字を小さく表示できる）
const PAD = 6; // 余白（最小限。間隔はカード側の padding に任せる）
const LINE_GAP = 16; // 行間の追加スペース
const COL_TEXT = '#111827';
const COL_BG = '#FFFFFF';
const TEXT_ASCENT = F * 0.78;
const TEXT_DEPTH = F * 0.22;

const svgOutput = new SVG({ fontCache: 'none' });
const mjDoc = mathjax.document('', { InputJax: texInput, OutputJax: svgOutput });

interface MathBox {
  type: 'math';
  svgInner: string; // <svg ...>...</svg> をそのまま埋め込む
  w: number;
  ascent: number;
  depth: number;
}
interface TextAtom {
  type: 'text';
  text: string;
  w: number;
}
type Atom = MathBox | TextAtom;

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** 1文字の概算幅（px）。CJK は全角、英数は約0.55、記号や空白は控えめ。 */
function charWidth(ch: string): number {
  const c = ch.codePointAt(0)!;
  if (ch === ' ') return F * 0.28;
  if (c >= 0x3000) return F; // CJK・全角
  if (/[0-9A-Za-z]/.test(ch)) return F * 0.56;
  if (/[（）「」、。．，：；！？]/.test(ch)) return F; // 全角記号
  return F * 0.34; // 半角記号
}

/** テキストを折り返し可能な atom に分割（CJKは1文字、英数連続は1語、空白は1atom） */
function textToAtoms(text: string): TextAtom[] {
  const atoms: TextAtom[] = [];
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch === ' ') {
      atoms.push({ type: 'text', text: ' ', w: charWidth(' ') });
      i++;
    } else if (/[0-9A-Za-z.\-+=/()]/.test(ch)) {
      // 英数＋簡単な記号は1語（途中で折り返さない）
      let j = i;
      while (j < text.length && /[0-9A-Za-z.\-+=/()^]/.test(text[j])) j++;
      const word = text.slice(i, j);
      const w = word.split('').reduce((a, c) => a + charWidth(c), 0);
      atoms.push({ type: 'text', text: word, w });
      i = j;
    } else {
      atoms.push({ type: 'text', text: ch, w: charWidth(ch) });
      i++;
    }
  }
  return atoms;
}

function mathToBox(tex: string, em = EM, ex = EX, display = false): MathBox {
  const node = mjDoc.convert(tex, { display, em, ex });
  const svgEl = adaptor.firstChild(node as any);
  let svg = adaptor.outerHTML(svgEl as any);
  const wEx = parseFloat((svg.match(/width="([\d.]+)ex"/) || [])[1] || '1');
  const hEx = parseFloat((svg.match(/height="([\d.]+)ex"/) || [])[1] || '1');
  const vAlign = parseFloat((svg.match(/vertical-align:\s*(-?[\d.]+)ex/) || [])[1] || '0');
  const w = wEx * ex;
  const h = hEx * ex;
  const depth = -vAlign * ex; // ベースライン下の深さ
  const ascent = h - depth;
  // width/height を px に置換し、currentColor を本文色に
  svg = svg
    .replace(/width="[\d.]+ex"/, `width="${w.toFixed(1)}"`)
    .replace(/height="[\d.]+ex"/, `height="${h.toFixed(1)}"`)
    .replace(/style="vertical-align:[^"]*"/, '')
    .replace(/currentColor/g, COL_TEXT);
  return { type: 'math', svgInner: svg, w, ascent, depth };
}

/** 問題文（日本語＋$...$）を atom 列に変換 */
function lineToAtoms(line: string): Atom[] {
  const atoms: Atom[] = [];
  const re = /\$([^$]+)\$/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) atoms.push(...textToAtoms(line.slice(last, m.index)));
    atoms.push(mathToBox(m[1]));
    last = m.index + m[0].length;
  }
  if (last < line.length) atoms.push(...textToAtoms(line.slice(last)));
  return atoms;
}

// 数式だけの行も本文と同じ大きさで組版（大きく見せない）
const BIG_EM = 30;
const BIG_EX = 15;
const MIN_W = 200;

export async function renderQuestionToPng(
  text: string,
  outPath: string,
  opts: { forceWidth?: number } = {}
): Promise<{ width: number; height: number }> {
  const placed: string[] = [];
  let y = PAD;
  let rightEdge = MIN_W; // 実際に使った右端（タイトに幅を決める）
  const rawLines = text.split('\n');

  for (const raw of rawLines) {
    const line = raw.trim();
    if (line.length === 0) {
      y += F * 0.6; // 空行
      continue;
    }
    // 数式のみの行は大きく中央寄せ気味に（後でタイト幅にするので左寄せでOK）
    const pure = /^\$[^$]+\$$/.test(line);
    const atoms: Atom[] = pure
      ? [mathToBox(line.slice(1, -1), BIG_EM, BIG_EX, true)]
      : lineToAtoms(line);

    let lineAtoms: Atom[] = [];
    let x = PAD;
    const flush = () => {
      if (lineAtoms.length === 0) return;
      let asc = pure ? 0 : TEXT_ASCENT;
      let dep = pure ? 0 : TEXT_DEPTH;
      for (const a of lineAtoms) {
        if (a.type === 'math') {
          asc = Math.max(asc, a.ascent);
          dep = Math.max(dep, a.depth);
        }
      }
      const baseline = y + asc;
      let cx = PAD;
      for (const a of lineAtoms) {
        if (a.type === 'text') {
          if (a.text !== ' ')
            placed.push(
              `<text x="${cx.toFixed(1)}" y="${baseline.toFixed(1)}" font-size="${F}" font-family="'Noto Sans CJK JP','Noto Serif CJK JP',sans-serif" fill="${COL_TEXT}">${escapeXml(a.text)}</text>`
            );
          cx += a.w;
        } else {
          const top = baseline - a.ascent;
          placed.push(
            `<g transform="translate(${cx.toFixed(1)}, ${top.toFixed(1)})">${a.svgInner}</g>`
          );
          cx += a.w;
        }
      }
      rightEdge = Math.max(rightEdge, cx);
      y = baseline + dep + LINE_GAP;
      lineAtoms = [];
      x = PAD;
    };
    for (const a of atoms) {
      if (x + a.w > PAD + MAXW && lineAtoms.length > 0) flush();
      if (lineAtoms.length === 0 && a.type === 'text' && a.text === ' ') continue;
      lineAtoms.push(a);
      x += a.w;
    }
    flush();
  }

  const width = Math.max(Math.ceil(rightEdge + PAD), opts.forceWidth ?? 0); // 内容にタイトに合わせる（forceWidthで揃える）
  const height = Math.ceil(y - LINE_GAP + PAD);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${COL_BG}"/>${placed.join('')}</svg>`;
  await sharp(Buffer.from(svg), { density: 192 }).png().toFile(outPath);
  return { width, height };
}

/**
 * 数学クイズの図（座標グラフ）を生成するスクリプト。
 *
 * data/content/math 配下の各 JSON の quiz.questions[].image（kind:'coordinate'）を読み、
 * 座標平面のSVGを組み立てて PNG に変換し、public/graphs/<topicId>-<qid>.png に出力する。
 * 併せてデバッグ用に同名 .svg も出力する。
 *
 * 画像URLは https://line.chatstudy.jp/graphs/<topicId>-<qid>.png（Vercel public 配信）。
 *
 *   npx tsx scripts/generate-math-graphs.ts            # 生成
 *   npx tsx scripts/generate-math-graphs.ts --check    # 仕様の検証のみ（書き込みなし）
 *
 * image 仕様（quiz.questions[].image）:
 * {
 *   "kind": "coordinate",
 *   "range": 5,                                  // 軸の範囲 -range..range（既定5）
 *   "lines":  [{ "a": 2, "b": 0, "label": "" }], // 直線 y = a x + b（b省略=0）
 *   "curves": [{ "a": 6 }],                      // 双曲線 y = a / x
 *   "points": [{ "x": 3, "y": -2, "label": "A", "open": false }]
 * }
 */
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'data/content/math');
const OUT_DIR = join(ROOT, 'public/graphs');
// public/ は www ビルド（dist/）に同梱され www.chatstudy.jp で配信される
// （LINE ビルドは publicDir が public_line のため public/ は含まれない）。
const PUBLIC_BASE = 'https://www.chatstudy.jp/graphs';

const CHECK_ONLY = process.argv.includes('--check');

type LineSpec = { a: number; b?: number; label?: string };
type CurveSpec = { a: number; label?: string }; // 双曲線 y = a/x
type ParabolaSpec = { a: number; label?: string }; // 放物線 y = a x^2
type PointSpec = { x: number; y: number; label?: string; open?: boolean };
interface CoordImage {
  kind: 'coordinate';
  range?: number;
  lines?: LineSpec[];
  curves?: CurveSpec[];
  parabolas?: ParabolaSpec[];
  points?: PointSpec[];
}

// ---- 描画パラメータ ----
const SIZE = 360; // 論理サイズ（px）
const PAD = 26; // 軸ラベル用の余白
const SCALE_PX = 2; // PNG は 2倍解像度で出力

const COL_BG = '#FAF9F7';
const COL_GRID = '#E5E7EB';
const COL_AXIS = '#374151';
const COL_LINE = '#1D3557'; // 直線（青系）
const COL_CURVE = '#E63946'; // 双曲線（赤系）
const COL_PARABOLA = '#2E7D32'; // 放物線（緑系）
const COL_POINT = '#1D3557';
const COL_TEXT = '#374151';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildSvg(img: CoordImage): string {
  const R = img.range && img.range > 0 ? img.range : 5;
  const plot = SIZE - 2 * PAD;
  const scale = plot / (2 * R);
  const X = (x: number) => PAD + (x + R) * scale;
  const Y = (y: number) => PAD + (R - y) * scale;
  const clampPlot = (v: number) => Math.max(PAD, Math.min(SIZE - PAD, v));

  const parts: string[] = [];
  parts.push(
    `<rect x="0" y="0" width="${SIZE}" height="${SIZE}" fill="${COL_BG}"/>`
  );

  // グリッド（整数目もり）
  for (let i = -R; i <= R; i++) {
    const gx = X(i);
    const gy = Y(i);
    parts.push(
      `<line x1="${gx.toFixed(1)}" y1="${PAD}" x2="${gx.toFixed(1)}" y2="${SIZE - PAD}" stroke="${COL_GRID}" stroke-width="1"/>`
    );
    parts.push(
      `<line x1="${PAD}" y1="${gy.toFixed(1)}" x2="${SIZE - PAD}" y2="${gy.toFixed(1)}" stroke="${COL_GRID}" stroke-width="1"/>`
    );
  }

  // 直線 y = a x + b
  for (const ln of img.lines ?? []) {
    const b = ln.b ?? 0;
    // x=-R..R での端点を求め、プロット内にクランプ
    let x1 = -R;
    let y1 = ln.a * x1 + b;
    let x2 = R;
    let y2 = ln.a * x2 + b;
    // y がはみ出す場合は y=±R との交点に置き換え（aが大きいとき）
    const pts: Array<[number, number]> = [];
    const within = (y: number) => y >= -R - 1e-9 && y <= R + 1e-9;
    if (within(y1)) pts.push([x1, y1]);
    if (within(y2)) pts.push([x2, y2]);
    if (ln.a !== 0) {
      for (const yEdge of [-R, R]) {
        const xs = (yEdge - b) / ln.a;
        if (xs >= -R - 1e-9 && xs <= R + 1e-9) pts.push([xs, yEdge]);
      }
    }
    if (pts.length >= 2) {
      [x1, y1] = pts[0];
      [x2, y2] = pts[1];
      parts.push(
        `<line x1="${X(x1).toFixed(1)}" y1="${Y(y1).toFixed(1)}" x2="${X(x2).toFixed(1)}" y2="${Y(y2).toFixed(1)}" stroke="${COL_LINE}" stroke-width="2.5" stroke-linecap="round"/>`
      );
    }
    if (ln.label) {
      // ラベルは右端付近に
      const lx = clampPlot(X(x2) - 6);
      const ly = clampPlot(Y(y2) - 6);
      parts.push(
        `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" font-size="13" fill="${COL_LINE}" font-family="sans-serif" text-anchor="end">${esc(ln.label)}</text>`
      );
    }
  }

  // 双曲線 y = a / x（2本の枝）
  for (const cv of img.curves ?? []) {
    for (const sign of [1, -1]) {
      const seg: string[] = [];
      const step = 0.05;
      for (let x = sign * 0.001; ; x += sign * step) {
        if (sign > 0 && x > R) break;
        if (sign < 0 && x < -R) break;
        const y = cv.a / x;
        if (y < -R || y > R) continue;
        seg.push(`${X(x).toFixed(1)},${Y(y).toFixed(1)}`);
      }
      if (seg.length >= 2) {
        parts.push(
          `<polyline points="${seg.join(' ')}" fill="none" stroke="${COL_CURVE}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`
        );
      }
    }
    if (cv.label) {
      parts.push(
        `<text x="${(SIZE - PAD - 4).toFixed(1)}" y="${(PAD + 14).toFixed(1)}" font-size="13" fill="${COL_CURVE}" font-family="sans-serif" text-anchor="end">${esc(cv.label)}</text>`
      );
    }
  }

  // 放物線 y = a x^2
  for (const pb of img.parabolas ?? []) {
    const seg: string[] = [];
    const step = 0.04;
    for (let x = -R; x <= R + 1e-9; x += step) {
      const y = pb.a * x * x;
      if (y < -R || y > R) continue;
      seg.push(`${X(x).toFixed(1)},${Y(y).toFixed(1)}`);
    }
    if (seg.length >= 2) {
      parts.push(
        `<polyline points="${seg.join(' ')}" fill="none" stroke="${COL_PARABOLA}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`
      );
    }
    if (pb.label) {
      parts.push(
        `<text x="${(SIZE - PAD - 4).toFixed(1)}" y="${(PAD + 14).toFixed(1)}" font-size="13" fill="${COL_PARABOLA}" font-family="sans-serif" text-anchor="end">${esc(pb.label)}</text>`
      );
    }
  }

  // 軸（矢印つき）
  const cx = X(0);
  const cy = Y(0);
  parts.push(
    `<line x1="${PAD}" y1="${cy.toFixed(1)}" x2="${SIZE - PAD + 4}" y2="${cy.toFixed(1)}" stroke="${COL_AXIS}" stroke-width="1.5"/>`
  );
  parts.push(
    `<line x1="${cx.toFixed(1)}" y1="${SIZE - PAD}" x2="${cx.toFixed(1)}" y2="${PAD - 4}" stroke="${COL_AXIS}" stroke-width="1.5"/>`
  );
  // 矢印
  parts.push(
    `<path d="M${SIZE - PAD + 4},${cy.toFixed(1)} l-6,-3 l0,6 z" fill="${COL_AXIS}"/>`
  );
  parts.push(
    `<path d="M${cx.toFixed(1)},${PAD - 4} l-3,6 l6,0 z" fill="${COL_AXIS}"/>`
  );
  parts.push(
    `<text x="${(SIZE - PAD + 2).toFixed(1)}" y="${(cy - 6).toFixed(1)}" font-size="13" fill="${COL_TEXT}" font-family="sans-serif" text-anchor="end">x</text>`
  );
  parts.push(
    `<text x="${(cx + 6).toFixed(1)}" y="${(PAD + 6).toFixed(1)}" font-size="13" fill="${COL_TEXT}" font-family="sans-serif">y</text>`
  );
  parts.push(
    `<text x="${(cx - 5).toFixed(1)}" y="${(cy + 14).toFixed(1)}" font-size="12" fill="${COL_TEXT}" font-family="sans-serif" text-anchor="end">O</text>`
  );
  // 目もり数字（±R と中間1つ）
  for (const t of [-R, Math.round(R / 2) || 1, R]) {
    if (t === 0) continue;
    parts.push(
      `<text x="${X(t).toFixed(1)}" y="${(cy + 14).toFixed(1)}" font-size="10" fill="${COL_TEXT}" font-family="sans-serif" text-anchor="middle">${t}</text>`
    );
    parts.push(
      `<text x="${(cx - 5).toFixed(1)}" y="${(Y(t) + 4).toFixed(1)}" font-size="10" fill="${COL_TEXT}" font-family="sans-serif" text-anchor="end">${t}</text>`
    );
  }

  // 点
  for (const p of img.points ?? []) {
    const px = X(p.x);
    const py = Y(p.y);
    const fill = p.open ? COL_BG : COL_POINT;
    parts.push(
      `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="4.5" fill="${fill}" stroke="${COL_POINT}" stroke-width="2"/>`
    );
    if (p.label) {
      parts.push(
        `<text x="${(px + 8).toFixed(1)}" y="${(py - 8).toFixed(1)}" font-size="13" fill="${COL_POINT}" font-family="sans-serif" font-weight="bold">${esc(p.label)}</text>`
      );
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">${parts.join('')}</svg>`;
}

function validate(img: CoordImage, where: string): string[] {
  const errs: string[] = [];
  if (img.kind !== 'coordinate') errs.push(`${where}: kind は 'coordinate' のみ対応`);
  const R = img.range ?? 5;
  for (const p of img.points ?? []) {
    if (Math.abs(p.x) > R || Math.abs(p.y) > R)
      errs.push(`${where}: 点 (${p.x}, ${p.y}) が range=${R} の外`);
  }
  return errs;
}

async function main() {
  if (!CHECK_ONLY && !existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const files: string[] = [];
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const fp = join(dir, e.name);
      if (e.isDirectory()) walk(fp);
      else if (e.name.endsWith('.json')) files.push(fp);
    }
  };
  walk(CONTENT_DIR);

  let count = 0;
  const allErrs: string[] = [];
  const manifest: Array<{ id: string; url: string; file: string }> = [];

  for (const f of files) {
    const j = JSON.parse(readFileSync(f, 'utf8'));
    const qs = j?.quiz?.questions;
    if (!Array.isArray(qs)) continue;
    for (const q of qs) {
      const img: CoordImage | undefined = q.image;
      if (!img || img.kind !== 'coordinate') continue;
      const errs = validate(img, `${relative(ROOT, f)} ${q.id}`);
      allErrs.push(...errs);
      const base = `${q.id}`;
      manifest.push({ id: q.id, url: `${PUBLIC_BASE}/${base}.png`, file: relative(ROOT, f) });
      if (CHECK_ONLY || errs.length) continue;
      const svg = buildSvg(img);
      writeFileSync(join(OUT_DIR, `${base}.svg`), svg);
      await sharp(Buffer.from(svg), { density: 96 * SCALE_PX })
        .resize(SIZE * SCALE_PX, SIZE * SCALE_PX)
        .png()
        .toFile(join(OUT_DIR, `${base}.png`));
      count++;
    }
  }

  if (allErrs.length) {
    console.error('仕様エラー:');
    allErrs.forEach((e) => console.error('  - ' + e));
  }
  if (CHECK_ONLY) {
    console.log(`[check] image 付き問題: ${manifest.length} 件, エラー ${allErrs.length} 件`);
  } else {
    console.log(`生成完了: ${count} 枚の PNG/SVG を ${relative(ROOT, OUT_DIR)} に出力`);
    console.log(`image 付き問題: ${manifest.length} 件`);
  }
  if (allErrs.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

/**
 * 数学クイズの幾何図（三角形・おうぎ形・平行線と角・多角形・円）を生成するスクリプト。
 *
 * data/content/math 配下の各 JSON の quiz.questions[].image を読み、kind が
 * coordinate 以外（triangle / sector / parallel-lines / polygon / circle）のものを
 * SVG→PNG(sharp) で public/graphs/<id>.png に出力する。座標グラフ(kind:coordinate)は
 * generate-math-graphs.ts が担当するのでここでは無視する。
 *
 *   npx tsx scripts/generate-geometry-figures.ts          # 生成
 *   npx tsx scripts/generate-geometry-figures.ts --check  # 検証のみ
 *
 * 図タイプ別 image 仕様:
 *
 * 三角形（内角・外角・二等辺など。実際の角度で作図し、表示ラベルは別指定可）:
 *   { "kind":"triangle", "angles":[50,60,70],           // 実角度(和180)で作図
 *     "vertexNames":["A","B","C"],                       // 任意:頂点名(B左下,C右下,A上)
 *     "angleLabels":["x","60°","70°"],                   // 任意:各頂点に表示する文字(A,B,C順)
 *     "sideLabels":[{"between":"BC","text":"6cm"}],       // 任意:辺ラベル
 *     "exterior":{"at":"C","text":"y"} }                  // 任意:外角(その頂点で辺BCを延長)
 *
 * おうぎ形:
 *   { "kind":"sector", "centralAngle":120, "radiusLabel":"6cm", "angleLabel":"120°" }
 *
 * 平行線と角（2本の平行線＋斜めの横断線。角ラベルは sector 名で配置）:
 *   { "kind":"parallel-lines", "slant":65,               // 横断線の傾き=鋭角の値(度,35〜75)
 *     "labels":[ {"at":"top","sector":"lower-right","text":"115°"},  // at: top|bottom の交点
 *                {"at":"bottom","sector":"upper-left","text":"x"} ], // sector: 位置名
 *     "lineNames":["m","n"], "transversalName":"ℓ" }
 *   ※ sector は位置名 lower-left / lower-right / upper-left / upper-right。
 *      角の大きさ（横断線が右上がり）: lower-left, upper-right = slant（鋭角）／
 *      lower-right, upper-left = 180-slant（鈍角）。
 *      同位角=両交点で同じ位置名。錯角=(lower-left↔upper-right) と (lower-right↔upper-left)。
 *      figure を slant=鋭角の値 にすると見た目も実角度に一致する。
 *
 * 正多角形（内角・外角）:
 *   { "kind":"polygon", "n":5, "markAngle":true, "angleLabel":"x" }
 *
 * 円（中心角・半径）:
 *   { "kind":"circle", "radiusLabel":"5cm", "centralAngle":80, "angleLabel":"80°" }
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'data/content/math');
const OUT_DIR = join(ROOT, 'public/graphs');
const CHECK_ONLY = process.argv.includes('--check');

const SIZE = 360;
const SCALE_PX = 2;
const COL_BG = '#FAF9F7';
const COL_SHAPE = '#1D3557'; // 図形の線（青系）
const COL_FILL = '#E8EEF5'; // 図形の塗り（薄青）
const COL_ANGLE = '#E63946'; // 角の弧・ラベル（赤系）
const COL_TEXT = '#374151';
const COL_AUX = '#9CA3AF'; // 補助線

const GEOM_KINDS = new Set(['triangle', 'sector', 'parallel-lines', 'polygon', 'circle', 'parallelogram']);

function esc(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
const rad = (deg: number) => (deg * Math.PI) / 180;
function svgText(x: number, y: number, t: string, opts: { size?: number; fill?: string; anchor?: string; weight?: string } = {}) {
  const { size = 15, fill = COL_TEXT, anchor = 'middle', weight = 'normal' } = opts;
  return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${size}" fill="${fill}" font-family="sans-serif" text-anchor="${anchor}" font-weight="${weight}" dominant-baseline="middle">${esc(t)}</text>`;
}
function wrap(inner: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}"><rect width="${SIZE}" height="${SIZE}" fill="${COL_BG}"/>${inner}</svg>`;
}
// 角の弧（頂点 v、両隣 p1,p2 方向、半径 r）と弧の中点方向
function angleArc(v: [number, number], p1: [number, number], p2: [number, number], r: number) {
  const a1 = Math.atan2(p1[1] - v[1], p1[0] - v[0]);
  const a2 = Math.atan2(p2[1] - v[1], p2[0] - v[0]);
  let d = a2 - a1;
  while (d <= -Math.PI) d += 2 * Math.PI;
  while (d > Math.PI) d -= 2 * Math.PI;
  const s: [number, number] = [v[0] + r * Math.cos(a1), v[1] + r * Math.sin(a1)];
  const e: [number, number] = [v[0] + r * Math.cos(a1 + d), v[1] + r * Math.sin(a1 + d)];
  const large = 0;
  const sweep = d > 0 ? 1 : 0;
  const mid = a1 + d / 2;
  const path = `<path d="M${s[0].toFixed(1)},${s[1].toFixed(1)} A${r},${r} 0 ${large} ${sweep} ${e[0].toFixed(1)},${e[1].toFixed(1)}" fill="none" stroke="${COL_ANGLE}" stroke-width="2"/>`;
  return { path, mid };
}

// ---------- triangle ----------
function buildTriangle(img: any): string {
  const [A, B, C] = img.angles as number[]; // 角A,B,C（和180）
  // B=(0,0), C=(1,0), A 上。t=sinC/sinA
  const tA = Math.sin(rad(C)) / Math.sin(rad(A));
  let pts: Record<string, [number, number]> = {
    B: [0, 0],
    C: [1, 0],
    A: [tA * Math.cos(rad(B)), tA * Math.sin(rad(B))],
  };
  // 外角のための延長点（辺BCをCの先へ延長）を考慮してbbox
  const ext = img.exterior;
  const extra: [number, number][] = [];
  if (ext && ext.at) {
    // 頂点 at で、片方の辺を逆向きに延長した点
    const v = pts[ext.at];
    const others = ['A', 'B', 'C'].filter((k) => k !== ext.at);
    // BCの底辺延長を優先（at=C なら B→C の延長、at=B なら C→B の延長）
    const base = ext.at === 'C' ? pts.B : ext.at === 'B' ? pts.C : pts.B;
    const dir: [number, number] = [v[0] - base[0], v[1] - base[1]];
    const len = Math.hypot(dir[0], dir[1]) || 1;
    extra.push([v[0] + (dir[0] / len) * 0.5, v[1] + (dir[1] / len) * 0.5]);
  }
  // y反転＋スケール
  const all = [pts.A, pts.B, pts.C, ...extra];
  const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const pad = 56;
  const scale = Math.min((SIZE - 2 * pad) / (maxX - minX || 1), (SIZE - 2 * pad) / (maxY - minY || 1));
  const w = (maxX - minX) * scale, h = (maxY - minY) * scale;
  const ox = (SIZE - w) / 2, oy = (SIZE - h) / 2;
  const T = (p: [number, number]): [number, number] => [ox + (p[0] - minX) * scale, oy + h - (p[1] - minY) * scale];
  const P: Record<string, [number, number]> = { A: T(pts.A), B: T(pts.B), C: T(pts.C) };
  const cen: [number, number] = [(P.A[0] + P.B[0] + P.C[0]) / 3, (P.A[1] + P.B[1] + P.C[1]) / 3];
  const parts: string[] = [];
  // 外角の延長線
  if (ext && ext.at) {
    const e = T(extra[0]);
    parts.push(`<line x1="${P[ext.at][0].toFixed(1)}" y1="${P[ext.at][1].toFixed(1)}" x2="${e[0].toFixed(1)}" y2="${e[1].toFixed(1)}" stroke="${COL_AUX}" stroke-width="2" stroke-dasharray="2 0"/>`);
  }
  // 三角形本体
  parts.push(`<polygon points="${P.A[0].toFixed(1)},${P.A[1].toFixed(1)} ${P.B[0].toFixed(1)},${P.B[1].toFixed(1)} ${P.C[0].toFixed(1)},${P.C[1].toFixed(1)}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`);
  // 角の弧＋ラベル
  const labels = img.angleLabels as (string | null)[] | undefined;
  const order = ['A', 'B', 'C'];
  const neighbor: Record<string, [string, string]> = { A: ['B', 'C'], B: ['A', 'C'], C: ['A', 'B'] };
  order.forEach((k, i) => {
    const lab = labels && labels[i];
    if (!lab) return;
    const v = P[k], n = neighbor[k];
    // 狭い角ほど弧を大きめに（小さく見えるのを防ぐ）
    const ang = (img.angles as number[])[i];
    const arcR = ang < 45 ? 34 : ang < 70 ? 30 : 26;
    const arc = angleArc(v, P[n[0]], P[n[1]], arcR);
    parts.push(arc.path);
    // 狭い角ほどラベルを内側へ深く置く（辺との重なり回避）
    const lr = ang < 50 ? 54 : 44;
    const lx = v[0] + lr * Math.cos(arc.mid), ly = v[1] + lr * Math.sin(arc.mid);
    parts.push(svgText(lx, ly, lab, { fill: COL_ANGLE, weight: 'bold', size: 17 }));
  });
  // 外角ラベル
  if (ext && ext.text) {
    const v = P[ext.at];
    const e = T(extra[0]);
    const others = ['A', 'B', 'C'].filter((k) => k !== ext.at && k !== (ext.at === 'C' ? 'B' : ext.at === 'B' ? 'C' : 'B'));
    const apex = others[0]; // 上の頂点
    const arc = angleArc(v, [e[0], e[1]], P[apex], 20);
    parts.push(arc.path);
    const lx = v[0] + 38 * Math.cos(arc.mid), ly = v[1] + 38 * Math.sin(arc.mid);
    parts.push(svgText(lx, ly, ext.text, { fill: COL_ANGLE, weight: 'bold', size: 17 }));
  }
  // 頂点名
  const vn = img.vertexNames as string[] | undefined;
  if (vn) {
    order.forEach((k, i) => {
      if (!vn[i]) return;
      const v = P[k];
      const dir = [v[0] - cen[0], v[1] - cen[1]];
      const len = Math.hypot(dir[0], dir[1]) || 1;
      parts.push(svgText(v[0] + (dir[0] / len) * 18, v[1] + (dir[1] / len) * 18, vn[i], { weight: 'bold', size: 16, fill: COL_SHAPE }));
    });
  }
  // 辺ラベル
  for (const s of img.sideLabels || []) {
    const a = s.between[0], b = s.between[1];
    const m: [number, number] = [(P[a][0] + P[b][0]) / 2, (P[a][1] + P[b][1]) / 2];
    const dir = [m[0] - cen[0], m[1] - cen[1]];
    const len = Math.hypot(dir[0], dir[1]) || 1;
    parts.push(svgText(m[0] + (dir[0] / len) * 16, m[1] + (dir[1] / len) * 16, s.text, { size: 13, fill: COL_SHAPE }));
  }
  return wrap(parts.join(''));
}

// ---------- sector / circle ----------
function buildSector(img: any): string {
  const a = img.centralAngle as number;
  const O: [number, number] = [SIZE / 2, SIZE / 2 + 30];
  const R = 130;
  const s0 = 90 - a / 2; // 上向き中心に
  const p1: [number, number] = [O[0] + R * Math.cos(rad(s0)), O[1] - R * Math.sin(rad(s0))];
  const p2: [number, number] = [O[0] + R * Math.cos(rad(s0 + a)), O[1] - R * Math.sin(rad(s0 + a))];
  const large = a > 180 ? 1 : 0;
  const parts: string[] = [];
  parts.push(`<path d="M${O[0]},${O[1]} L${p1[0].toFixed(1)},${p1[1].toFixed(1)} A${R},${R} 0 ${large} 0 ${p2[0].toFixed(1)},${p2[1].toFixed(1)} Z" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`);
  // 中心角の弧
  const r2 = 30;
  const a1: [number, number] = [O[0] + r2 * Math.cos(rad(s0)), O[1] - r2 * Math.sin(rad(s0))];
  const a2: [number, number] = [O[0] + r2 * Math.cos(rad(s0 + a)), O[1] - r2 * Math.sin(rad(s0 + a))];
  parts.push(`<path d="M${a1[0].toFixed(1)},${a1[1].toFixed(1)} A${r2},${r2} 0 ${large} 0 ${a2[0].toFixed(1)},${a2[1].toFixed(1)}" fill="none" stroke="${COL_ANGLE}" stroke-width="2"/>`);
  if (img.angleLabel) parts.push(svgText(O[0], O[1] - 50, img.angleLabel, { fill: COL_ANGLE, weight: 'bold', size: 16 }));
  if (img.radiusLabel) {
    // 半径ラベルは半径の中ほど＋扇の外側へ垂直オフセット（中心角の弧と離す）
    const u: [number, number] = [(p1[0] - O[0]) / R, (p1[1] - O[1]) / R];
    const nrm: [number, number] = [-u[1], u[0]]; // 扇の外側（右半径の右どなり）
    const base: [number, number] = [O[0] + u[0] * R * 0.58, O[1] + u[1] * R * 0.58];
    parts.push(svgText(base[0] + nrm[0] * 18, base[1] + nrm[1] * 18, img.radiusLabel, { size: 14, fill: COL_SHAPE }));
  }
  parts.push(svgText(O[0] - 10, O[1] + 12, 'O', { size: 14, fill: COL_SHAPE, weight: 'bold' }));
  return wrap(parts.join(''));
}
function buildCircle(img: any): string {
  const O: [number, number] = [SIZE / 2, SIZE / 2];
  const R = 120;
  const parts: string[] = [];
  parts.push(`<circle cx="${O[0]}" cy="${O[1]}" r="${R}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5"/>`);
  parts.push(`<circle cx="${O[0]}" cy="${O[1]}" r="2.5" fill="${COL_SHAPE}"/>`);
  parts.push(svgText(O[0] - 12, O[1] + 12, 'O', { size: 14, fill: COL_SHAPE, weight: 'bold' }));
  if (img.centralAngle) {
    const a = img.centralAngle as number;
    const s0 = 90 - a / 2;
    for (const ang of [s0, s0 + a]) {
      const p: [number, number] = [O[0] + R * Math.cos(rad(ang)), O[1] - R * Math.sin(rad(ang))];
      parts.push(`<line x1="${O[0]}" y1="${O[1]}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
    }
    if (img.angleLabel) parts.push(svgText(O[0], O[1] - 30, img.angleLabel, { fill: COL_ANGLE, weight: 'bold', size: 14 }));
  }
  if (img.radiusLabel) {
    const p: [number, number] = [O[0] + R * Math.cos(rad(20)), O[1] - R * Math.sin(rad(20))];
    if (!img.centralAngle) parts.push(`<line x1="${O[0]}" y1="${O[1]}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
    parts.push(svgText((O[0] + p[0]) / 2, (O[1] + p[1]) / 2 - 12, img.radiusLabel, { size: 13, fill: COL_SHAPE }));
  }
  return wrap(parts.join(''));
}

// ---------- parallel-lines ----------
function buildParallel(img: any): string {
  const slant = (img.slant as number) ?? 60; // 横断線の傾き（度）右上がり
  const yTop = 120, yBot = 240;
  const xL = 40, xR = 320;
  const parts: string[] = [];
  // 横断線：傾き slant° の直線が yTop,yBot と交わる点
  const m = Math.tan(rad(slant));
  // 直線を中央 x=180 を通るように：x = 180 + (yc - y)/m を使う（y下向きなので注意）
  // 画面座標で「右上がり」= x増でy減。点(180, 180)を通り、方向(cos(-slant?),...) 。簡単に2交点を決める。
  const cx = 185;
  const xTop = cx + (180 - yTop) / m; // y小さいほどx大（右上がり）
  const xBot = cx + (180 - yBot) / m;
  const Ptop: [number, number] = [xTop, yTop];
  const Pbot: [number, number] = [xBot, yBot];
  // 横断線の描画（両端を延長）
  const ext = 70;
  const dir = [Pbot[0] - Ptop[0], Pbot[1] - Ptop[1]];
  const dl = Math.hypot(dir[0], dir[1]);
  const u = [dir[0] / dl, dir[1] / dl];
  parts.push(`<line x1="${(Ptop[0] - u[0] * ext).toFixed(1)}" y1="${(Ptop[1] - u[1] * ext).toFixed(1)}" x2="${(Pbot[0] + u[0] * ext).toFixed(1)}" y2="${(Pbot[1] + u[1] * ext).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2.5"/>`);
  // 2本の平行線
  parts.push(`<line x1="${xL}" y1="${yTop}" x2="${xR}" y2="${yTop}" stroke="${COL_SHAPE}" stroke-width="2.5"/>`);
  parts.push(`<line x1="${xL}" y1="${yBot}" x2="${xR}" y2="${yBot}" stroke="${COL_SHAPE}" stroke-width="2.5"/>`);
  // 平行マーク（>）
  for (const y of [yTop, yBot]) {
    const mx = xR - 36;
    parts.push(`<path d="M${mx},${y - 5} l7,5 l-7,5" fill="none" stroke="${COL_SHAPE}" stroke-width="1.6"/>`);
  }
  if (img.lineNames) {
    parts.push(svgText(xR + 12, yTop, img.lineNames[0], { size: 14, fill: COL_SHAPE, weight: 'bold' }));
    parts.push(svgText(xR + 12, yBot, img.lineNames[1], { size: 14, fill: COL_SHAPE, weight: 'bold' }));
  }
  if (img.transversalName) parts.push(svgText(Ptop[0] - u[0] * ext - 4, Ptop[1] - u[1] * ext - 8, img.transversalName, { size: 14, fill: COL_SHAPE, weight: 'bold' }));
  // sector 名（画面上の位置）→ 配置方向(度, 数学角)。横断線は右上がり(slant)。
  // 角の大きさ: lower-left / upper-right = slant（鋭角）, lower-right / upper-left = 180-slant（鈍角）
  // 同位角=同じ位置名, 錯角=(lower-left↔upper-right) と (lower-right↔upper-left)。
  const sectorDir: Record<string, number> = {
    'lower-right': -slant / 2,
    'lower-left': -(slant + 180) / 2,
    'upper-left': 180 - slant / 2,
    'upper-right': (180 - slant) / 2,
    // 後方互換の別名
    right: -slant / 2,
    top: -(slant + 180) / 2,
    left: 180 - slant / 2,
    bottom: (180 - slant) / 2,
  };
  // 角を作る実際の2本（水平線の左/右 と 横断線の上/下）から弧と二等分線を決める。
  const tDown: [number, number] = [u[0], u[1]]; // 横断線・下向き
  const tUp: [number, number] = [-u[0], -u[1]]; // 横断線・上向き
  const hLeft: [number, number] = [-1, 0];
  const hRight: [number, number] = [1, 0];
  const sectorRays: Record<string, [[number, number], [number, number]]> = {
    'lower-left': [hLeft, tDown], 'lower-right': [hRight, tDown], 'upper-left': [hLeft, tUp], 'upper-right': [hRight, tUp],
    top: [hLeft, tDown], right: [hRight, tDown], left: [hLeft, tUp], bottom: [hRight, tUp],
  };
  for (const lb of img.labels || []) {
    const v = lb.at === 'top' ? Ptop : Pbot;
    const [r1, r2] = sectorRays[lb.sector as string] || [hRight, tDown];
    // 弧は2本のray方向の点をとって描く（実際の角に一致）
    const arcR = 24;
    const p1: [number, number] = [v[0] + r1[0] * 40, v[1] + r1[1] * 40];
    const p2: [number, number] = [v[0] + r2[0] * 40, v[1] + r2[1] * 40];
    parts.push(angleArc(v, p1, p2, arcR).path);
    // 二等分線方向（2 ray の単位ベクトルの和）にラベルを離して置く
    let bx = r1[0] + r2[0], by = r1[1] + r2[1];
    const bl = Math.hypot(bx, by) || 1; bx /= bl; by /= bl;
    parts.push(svgText(v[0] + bx * 46, v[1] + by * 46, lb.text, { fill: COL_ANGLE, weight: 'bold', size: 17 }));
  }
  return wrap(parts.join(''));
}

// ---------- parallelogram ----------
function buildParallelogram(img: any): string {
  const th = (img.angle as number) ?? 110; // 頂点Dの内角
  const base = 1.5, side = 1.05;
  // D(左下), C(右下), A(左上), B(右上)
  const raw: Record<string, [number, number]> = {
    D: [0, 0], C: [base, 0],
    A: [side * Math.cos(rad(th)), side * Math.sin(rad(th))],
    B: [base + side * Math.cos(rad(th)), side * Math.sin(rad(th))],
  };
  const order = ['A', 'B', 'C', 'D'];
  const xs = order.map((k) => raw[k][0]), ys = order.map((k) => raw[k][1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const pad = 60;
  const scale = Math.min((SIZE - 2 * pad) / (maxX - minX), (SIZE - 2 * pad) / (maxY - minY));
  const w = (maxX - minX) * scale, h = (maxY - minY) * scale;
  const ox = (SIZE - w) / 2, oy = (SIZE - h) / 2;
  const T = (p: [number, number]): [number, number] => [ox + (p[0] - minX) * scale, oy + h - (p[1] - minY) * scale];
  const P: Record<string, [number, number]> = { A: T(raw.A), B: T(raw.B), C: T(raw.C), D: T(raw.D) };
  const cen: [number, number] = [(P.A[0] + P.B[0] + P.C[0] + P.D[0]) / 4, (P.A[1] + P.B[1] + P.C[1] + P.D[1]) / 4];
  const parts: string[] = [];
  parts.push(`<polygon points="${order.map((k) => `${P[k][0].toFixed(1)},${P[k][1].toFixed(1)}`).join(' ')}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`);
  const nb: Record<string, [string, string]> = { A: ['B', 'D'], B: ['A', 'C'], C: ['B', 'D'], D: ['A', 'C'] };
  const labels = img.angleLabels as (string | null)[] | undefined;
  order.forEach((k, i) => {
    const lab = labels && labels[i];
    if (!lab) return;
    const v = P[k], n = nb[k];
    const arc = angleArc(v, P[n[0]], P[n[1]], 24);
    parts.push(arc.path);
    parts.push(svgText(v[0] + 40 * Math.cos(arc.mid), v[1] + 40 * Math.sin(arc.mid), lab, { fill: COL_ANGLE, weight: 'bold', size: 16 }));
  });
  const vn = img.vertexNames as string[] | undefined;
  if (vn) order.forEach((k, i) => {
    if (!vn[i]) return;
    const v = P[k], dir = [v[0] - cen[0], v[1] - cen[1]], len = Math.hypot(dir[0], dir[1]) || 1;
    parts.push(svgText(v[0] + (dir[0] / len) * 16, v[1] + (dir[1] / len) * 16, vn[i], { weight: 'bold', size: 15, fill: COL_SHAPE }));
  });
  for (const s of img.sideLabels || []) {
    const a = s.between[0], b = s.between[1];
    const m: [number, number] = [(P[a][0] + P[b][0]) / 2, (P[a][1] + P[b][1]) / 2];
    const dir = [m[0] - cen[0], m[1] - cen[1]], len = Math.hypot(dir[0], dir[1]) || 1;
    parts.push(svgText(m[0] + (dir[0] / len) * 15, m[1] + (dir[1] / len) * 15, s.text, { size: 13, fill: COL_SHAPE }));
  }
  return wrap(parts.join(''));
}

// ---------- polygon ----------
function buildPolygon(img: any): string {
  const n = img.n as number;
  const O: [number, number] = [SIZE / 2, SIZE / 2];
  const R = 120;
  const pts: [number, number][] = [];
  const start = -90; // 上を頂点に
  for (let i = 0; i < n; i++) {
    const ang = start + (360 / n) * i;
    pts.push([O[0] + R * Math.cos(rad(ang)), O[1] + R * Math.sin(rad(ang))]);
  }
  const parts: string[] = [];
  parts.push(`<polygon points="${pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`);
  if (img.markAngle) {
    const v = pts[0];
    const arc = angleArc(v, pts[n - 1], pts[1], 22);
    parts.push(arc.path);
    if (img.angleLabel) parts.push(svgText(v[0] + 36 * Math.cos(arc.mid), v[1] + 36 * Math.sin(arc.mid), img.angleLabel, { fill: COL_ANGLE, weight: 'bold', size: 15 }));
  }
  return wrap(parts.join(''));
}

function build(img: any): string {
  switch (img.kind) {
    case 'triangle': return buildTriangle(img);
    case 'sector': return buildSector(img);
    case 'circle': return buildCircle(img);
    case 'parallel-lines': return buildParallel(img);
    case 'parallelogram': return buildParallelogram(img);
    case 'polygon': return buildPolygon(img);
    default: throw new Error('unknown kind: ' + img.kind);
  }
}

async function main() {
  if (!CHECK_ONLY && !existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  const files: string[] = [];
  const walk = (d: string) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const fp = join(d, e.name);
      if (e.isDirectory()) walk(fp);
      else if (e.name.endsWith('.json')) files.push(fp);
    }
  };
  walk(CONTENT_DIR);
  let count = 0;
  for (const f of files) {
    const j = JSON.parse(readFileSync(f, 'utf8'));
    for (const q of j?.quiz?.questions || []) {
      const img = q.image;
      if (!img || !GEOM_KINDS.has(img.kind)) continue;
      if (CHECK_ONLY) { count++; continue; }
      const svg = build(img);
      writeFileSync(join(OUT_DIR, `${q.id}.svg`), svg);
      await sharp(Buffer.from(svg), { density: 96 * SCALE_PX }).resize(SIZE * SCALE_PX, SIZE * SCALE_PX).png().toFile(join(OUT_DIR, `${q.id}.png`));
      count++;
    }
  }
  console.log(`${CHECK_ONLY ? '[check] ' : ''}幾何図 ${count} 件`);
}
main().catch((e) => { console.error(e); process.exit(1); });

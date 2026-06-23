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

const GEOM_KINDS = new Set(['triangle', 'sector', 'parallel-lines', 'polygon', 'circle', 'parallelogram', 'rect-prism', 'cylinder', 'cone', 'sphere', 'tri-prism', 'boxplot', 'histogram', 'two-triangles', 'construction', 'movement']);

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
  const s0 = 90 - a / 2; // 上向き中心に
  // 単位半径での扇の形（頂点O＋弧）から bbox を出し、キャンバスに合わせて半径を決める
  // （中心角が小さい扇ほど半径を大きく描いて余白を減らす）
  const upts: [number, number][] = [[0, 0]];
  const N = 72;
  for (let i = 0; i <= N; i++) {
    const ang = s0 + (a * i) / N;
    upts.push([Math.cos(rad(ang)), Math.sin(rad(ang))]);
  }
  const uxs = upts.map((p) => p[0]), uys = upts.map((p) => p[1]);
  const minX = Math.min(...uxs), maxX = Math.max(...uxs), minY = Math.min(...uys), maxY = Math.max(...uys);
  const MARGIN = 66;
  const avail = SIZE - 2 * MARGIN;
  const R = Math.min(avail / (maxX - minX), avail / (maxY - minY));
  const w = (maxX - minX) * R, h = (maxY - minY) * R;
  const ox = (SIZE - w) / 2, oy = (SIZE - h) / 2;
  // 数学座標(yは上)→画面座標
  const Tm = (mx: number, my: number): [number, number] => [ox + (mx - minX) * R, oy + h - (my - minY) * R];
  const O = Tm(0, 0);
  const p1 = Tm(Math.cos(rad(s0)), Math.sin(rad(s0)));
  const p2 = Tm(Math.cos(rad(s0 + a)), Math.sin(rad(s0 + a)));
  const large = a > 180 ? 1 : 0;
  const parts: string[] = [];
  parts.push(`<path d="M${O[0]},${O[1]} L${p1[0].toFixed(1)},${p1[1].toFixed(1)} A${R},${R} 0 ${large} 0 ${p2[0].toFixed(1)},${p2[1].toFixed(1)} Z" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`);
  // 中心角の弧（少し大きめにして見やすく・上限つき）
  const r2 = Math.min(42, R * 0.3);
  const a1: [number, number] = [O[0] + r2 * Math.cos(rad(s0)), O[1] - r2 * Math.sin(rad(s0))];
  const a2: [number, number] = [O[0] + r2 * Math.cos(rad(s0 + a)), O[1] - r2 * Math.sin(rad(s0 + a))];
  parts.push(`<path d="M${a1[0].toFixed(1)},${a1[1].toFixed(1)} A${r2},${r2} 0 ${large} 0 ${a2[0].toFixed(1)},${a2[1].toFixed(1)}" fill="none" stroke="${COL_ANGLE}" stroke-width="2"/>`);
  if (img.angleLabel) {
    // 中心角が狭いと「真上＝くさびの内側」に置くと重なるので、外側（左ななめ下）へ出す
    if (a < 70) {
      const dir = s0 + a + 26; // 左側の半径よりさらに外側
      const rr = r2 + 26;
      parts.push(svgText(O[0] + rr * Math.cos(rad(dir)), O[1] - rr * Math.sin(rad(dir)), img.angleLabel, { fill: COL_ANGLE, weight: 'bold', size: 16 }));
    } else {
      parts.push(svgText(O[0], O[1] - (r2 + 18), img.angleLabel, { fill: COL_ANGLE, weight: 'bold', size: 16 }));
    }
  }
  if (img.radiusLabel) {
    // 半径ラベルは半径の中ほど＋扇の外側へ垂直オフセット（半径線・弧と離す）。狭い扇ほど離す。
    const u: [number, number] = [(p1[0] - O[0]) / R, (p1[1] - O[1]) / R];
    const nrm: [number, number] = [-u[1], u[0]]; // 扇の外側（右半径の右どなり）
    const off = a < 70 ? 30 : 20;
    const base: [number, number] = [O[0] + u[0] * R * 0.55, O[1] + u[1] * R * 0.55];
    parts.push(svgText(base[0] + nrm[0] * off, base[1] + nrm[1] * off, img.radiusLabel, { size: 14, fill: COL_SHAPE }));
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

// ===== 立体（空間図形）: 斜投影で模式的に描く =====
const COL_HID = '#9CA3AF'; // 隠れ線（破線）
function line(a: [number, number], b: [number, number], dashed = false) {
  return `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${dashed ? COL_HID : COL_SHAPE}" stroke-width="${dashed ? 1.6 : 2.4}"${dashed ? ' stroke-dasharray="5 4"' : ''}/>`;
}
// 楕円の下半分(手前=実線)・上半分(奥=破線)
function ellipseHalf(cx: number, cy: number, rx: number, ry: number, lower: boolean, dashed: boolean) {
  const sweep = lower ? 0 : 1;
  return `<path d="M${(cx - rx).toFixed(1)},${cy.toFixed(1)} A${rx},${ry} 0 0 ${sweep} ${(cx + rx).toFixed(1)},${cy.toFixed(1)}" fill="none" stroke="${dashed ? COL_HID : COL_SHAPE}" stroke-width="${dashed ? 1.6 : 2.4}"${dashed ? ' stroke-dasharray="5 4"' : ''}/>`;
}

// ---------- 直方体・立方体 ----------
function buildRectPrism(img: any): string {
  const FW = img.cube ? 130 : 150, FH = img.cube ? 130 : 108;
  const odx = 56, ody = -42; // 奥行き方向
  const ox = (SIZE - (FW + odx)) / 2, oy = (SIZE + (FH - ody)) / 2 - 8;
  const A: [number, number] = [ox, oy], B: [number, number] = [ox + FW, oy], C: [number, number] = [ox + FW, oy - FH], D: [number, number] = [ox, oy - FH];
  const off = (p: [number, number]): [number, number] => [p[0] + odx, p[1] + ody];
  const A2 = off(A), B2 = off(B), C2 = off(C), D2 = off(D);
  const parts: string[] = [];
  // 面（手前・上・右）を薄く塗る
  parts.push(`<polygon points="${[A, B, C, D].map((p) => p.join(',')).join(' ')}" fill="${COL_FILL}" stroke="none"/>`);
  parts.push(`<polygon points="${[D, C, C2, D2].map((p) => p.join(',')).join(' ')}" fill="#DCE6F0" stroke="none"/>`);
  parts.push(`<polygon points="${[B, C, C2, B2].map((p) => p.join(',')).join(' ')}" fill="#E8EEF5" stroke="none"/>`);
  // 隠れ線（奥の左下 A2 まわり）
  parts.push(line(A, A2, true)); parts.push(line(A2, B2, true)); parts.push(line(A2, D2, true));
  // 実線
  for (const [p, q] of [[A, B], [B, C], [C, D], [D, A], [B, B2], [C, C2], [D, D2], [B2, C2], [C2, D2]] as [[number, number], [number, number]][]) parts.push(line(p, q));
  if (img.w) parts.push(svgText((A[0] + B[0]) / 2, A[1] + 16, img.w, { size: 13, fill: COL_SHAPE }));
  if (img.h) parts.push(svgText(B[0] + 16, (B[1] + C[1]) / 2, img.h, { size: 13, fill: COL_SHAPE }));
  if (img.d) parts.push(svgText((C[0] + C2[0]) / 2 + 10, (C[1] + C2[1]) / 2 - 2, img.d, { size: 13, fill: COL_SHAPE }));
  return wrap(parts.join(''));
}

// ---------- 円柱 ----------
function buildCylinder(img: any): string {
  const cx = SIZE / 2, rx = 74, ry = 22, topY = 96, botY = 270;
  const parts: string[] = [];
  // 胴の塗り（底面の手前のふくらみまで含める）
  parts.push(`<path d="M${cx - rx},${topY} L${cx - rx},${botY} A${rx},${ry} 0 0 0 ${cx + rx},${botY} L${cx + rx},${topY} Z" fill="${COL_FILL}" stroke="none"/>`);
  // 側線
  parts.push(`<path d="M${cx - rx},${topY} L${cx - rx},${botY} M${cx + rx},${topY} L${cx + rx},${botY}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`);
  // 底（手前実線・奥破線）→ 上面（実線楕円）
  parts.push(ellipseHalf(cx, botY, rx, ry, true, false));
  parts.push(ellipseHalf(cx, botY, rx, ry, false, true));
  parts.push(`<ellipse cx="${cx}" cy="${topY}" rx="${rx}" ry="${ry}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`);
  if (img.r) { parts.push(line([cx, topY], [cx + rx, topY])); parts.push(svgText(cx + rx / 2, topY - 10, img.r, { size: 13, fill: COL_SHAPE })); }
  if (img.h) parts.push(svgText(cx + rx + 16, (topY + botY) / 2, img.h, { size: 13, fill: COL_SHAPE }));
  return wrap(parts.join(''));
}

// ---------- 円錐 ----------
function buildCone(img: any): string {
  const cx = SIZE / 2, rx = 78, ry = 24, botY = 268, apexY = 80;
  const apex: [number, number] = [cx, apexY];
  const parts: string[] = [];
  // 塗り（底面の手前のふくらみまで含める）
  parts.push(`<path d="M${apex[0]},${apex[1]} L${cx - rx},${botY} A${rx},${ry} 0 0 0 ${cx + rx},${botY} Z" fill="${COL_FILL}" stroke="none"/>`);
  parts.push(ellipseHalf(cx, botY, rx, ry, true, false));
  parts.push(ellipseHalf(cx, botY, rx, ry, false, true));
  parts.push(line(apex, [cx - rx, botY])); parts.push(line(apex, [cx + rx, botY]));
  if (img.h) { parts.push(line(apex, [cx, botY], true)); parts.push(svgText(cx + 10, (apexY + botY) / 2, img.h, { size: 13, fill: COL_SHAPE })); }
  if (img.r) { parts.push(line([cx, botY], [cx + rx, botY])); parts.push(svgText(cx + rx / 2, botY + 16, img.r, { size: 13, fill: COL_SHAPE })); }
  return wrap(parts.join(''));
}

// ---------- 球 ----------
function buildSphere(img: any): string {
  const cx = SIZE / 2, cy = SIZE / 2, R = 116;
  const parts: string[] = [];
  parts.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`);
  parts.push(ellipseHalf(cx, cy, R, 34, true, false));
  parts.push(ellipseHalf(cx, cy, R, 34, false, true));
  if (img.r) {
    parts.push(`<circle cx="${cx}" cy="${cy}" r="2.5" fill="${COL_SHAPE}"/>`);
    parts.push(line([cx, cy], [cx + R * Math.cos(rad(35)), cy - R * Math.sin(rad(35))]));
    parts.push(svgText(cx + R * 0.5, cy - R * 0.32, img.r, { size: 13, fill: COL_SHAPE }));
  }
  return wrap(parts.join(''));
}

// ---------- 三角柱 ----------
function buildTriPrism(img: any): string {
  const odx = 70, ody = -40;
  // 手前の三角形（上頂点・底辺）
  const ox = 96, baseY = 250, tw = 120, th = 130;
  const A: [number, number] = [ox + tw / 2, baseY - th], B: [number, number] = [ox, baseY], C: [number, number] = [ox + tw, baseY];
  const off = (p: [number, number]): [number, number] => [p[0] + odx, p[1] + ody];
  const A2 = off(A), B2 = off(B), C2 = off(C);
  const parts: string[] = [];
  parts.push(`<polygon points="${[A, B, C].map((p) => p.join(',')).join(' ')}" fill="${COL_FILL}" stroke="none"/>`);
  parts.push(`<polygon points="${[A, C, C2, A2].map((p) => p.join(',')).join(' ')}" fill="#E8EEF5" stroke="none"/>`);
  // 隠れ線（奥の B2）
  parts.push(line(B, B2, true)); parts.push(line(B2, A2, true)); parts.push(line(B2, C2, true));
  for (const [p, q] of [[A, B], [B, C], [C, A], [A, A2], [C, C2], [A2, C2]] as [[number, number], [number, number]][]) parts.push(line(p, q));
  if (img.len) parts.push(svgText((C[0] + C2[0]) / 2 + 6, (C[1] + C2[1]) / 2 + 14, img.len, { size: 13, fill: COL_SHAPE }));
  if (img.base) parts.push(svgText((B[0] + C[0]) / 2, B[1] + 16, img.base, { size: 13, fill: COL_SHAPE }));
  if (img.h) parts.push(svgText(A[0] - 14, (A[1] + baseY) / 2, img.h, { size: 13, fill: COL_SHAPE }));
  return wrap(parts.join(''));
}

// ===== 統計図 =====
// ---------- 箱ひげ図 ----------
function buildBoxplot(img: any): string {
  const { min, q1, median, q3, max } = img;
  const aMin = img.axisMin, aMax = img.axisMax, aStep = img.axisStep;
  const left = 52, right = SIZE - 28, axisY = 256, boxY = 120, boxH = 84;
  const midY = boxY + boxH / 2;
  const X = (v: number) => left + ((v - aMin) / (aMax - aMin)) * (right - left);
  const parts: string[] = [];
  // 数直線
  parts.push(`<line x1="${left}" y1="${axisY}" x2="${right}" y2="${axisY}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
  for (let v = aMin; v <= aMax + 1e-9; v += aStep) {
    parts.push(`<line x1="${X(v).toFixed(1)}" y1="${axisY}" x2="${X(v).toFixed(1)}" y2="${axisY + 6}" stroke="${COL_SHAPE}" stroke-width="1.5"/>`);
    parts.push(svgText(X(v), axisY + 18, String(v), { size: 12, fill: COL_TEXT }));
  }
  // ひげ
  parts.push(`<line x1="${X(min).toFixed(1)}" y1="${midY}" x2="${X(q1).toFixed(1)}" y2="${midY}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
  parts.push(`<line x1="${X(q3).toFixed(1)}" y1="${midY}" x2="${X(max).toFixed(1)}" y2="${midY}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
  for (const v of [min, max]) parts.push(`<line x1="${X(v).toFixed(1)}" y1="${boxY + 16}" x2="${X(v).toFixed(1)}" y2="${boxY + boxH - 16}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
  // 箱
  parts.push(`<rect x="${X(q1).toFixed(1)}" y="${boxY}" width="${(X(q3) - X(q1)).toFixed(1)}" height="${boxH}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
  // 中央値
  parts.push(`<line x1="${X(median).toFixed(1)}" y1="${boxY}" x2="${X(median).toFixed(1)}" y2="${boxY + boxH}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`);
  return wrap(parts.join(''));
}

// ---------- ヒストグラム ----------
function buildHistogram(img: any): string {
  const bnd: number[] = img.boundaries; // 階級の境界（n+1個）
  const freqs: number[] = img.freqs; // 各階級の度数（n個）
  const yMax = img.yMax || Math.max(...freqs);
  const left = 54, bottom = 268, top = 56, right = SIZE - 26;
  const plotW = right - left, plotH = bottom - top;
  const n = freqs.length;
  const bw = plotW / n;
  const parts: string[] = [];
  // y軸・x軸
  parts.push(`<line x1="${left}" y1="${top}" x2="${left}" y2="${bottom}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
  parts.push(`<line x1="${left}" y1="${bottom}" x2="${right}" y2="${bottom}" stroke="${COL_SHAPE}" stroke-width="2"/>`);
  // y目盛り（度数）
  for (let v = 0; v <= yMax; v++) {
    const y = bottom - (v / yMax) * plotH;
    parts.push(`<line x1="${left - 5}" y1="${y.toFixed(1)}" x2="${left}" y2="${y.toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="1.3"/>`);
    parts.push(svgText(left - 14, y, String(v), { size: 11, fill: COL_TEXT }));
  }
  // バー＋x境界ラベル
  for (let i = 0; i < n; i++) {
    const x = left + i * bw, h = (freqs[i] / yMax) * plotH;
    if (freqs[i] > 0) parts.push(`<rect x="${x.toFixed(1)}" y="${(bottom - h).toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="1.6"/>`);
  }
  for (let i = 0; i <= n; i++) {
    const x = left + i * bw;
    parts.push(svgText(x, bottom + 14, String(bnd[i]), { size: 10, fill: COL_TEXT }));
  }
  if (img.yLabel) parts.push(svgText(left - 6, top - 16, img.yLabel, { size: 11, fill: COL_TEXT, anchor: 'start' }));
  return wrap(parts.join(''));
}

// ===== 合同・作図・移動 =====
function triLocalPts(angles: number[]): Record<string, [number, number]> {
  const [A, B, C] = angles;
  const t = Math.sin(rad(C)) / Math.sin(rad(A));
  return { A: [t * Math.cos(rad(B)), t * Math.sin(rad(B))], B: [0, 0], C: [1, 0] };
}
function fitPts(pts: Record<string, [number, number]>, cx: number, cy: number, boxW: number, boxH: number) {
  const ks = Object.keys(pts);
  const xs = ks.map((k) => pts[k][0]), ys = ks.map((k) => pts[k][1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const sc = Math.min(boxW / (maxX - minX || 1), boxH / (maxY - minY || 1));
  const w = (maxX - minX) * sc, h = (maxY - minY) * sc;
  const out: Record<string, [number, number]> = {};
  for (const k of ks) out[k] = [cx - w / 2 + (pts[k][0] - minX) * sc, cy + h / 2 - (pts[k][1] - minY) * sc];
  return out;
}
function tickMarks(P: [number, number], Q: [number, number], n: number): string {
  let s = '';
  const mid: [number, number] = [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2];
  const L = Math.hypot(Q[0] - P[0], Q[1] - P[1]) || 1;
  const u: [number, number] = [(Q[0] - P[0]) / L, (Q[1] - P[1]) / L], pp: [number, number] = [-u[1], u[0]];
  for (let k = 0; k < n; k++) {
    const o = (k - (n - 1) / 2) * 5;
    const c = [mid[0] + u[0] * o, mid[1] + u[1] * o];
    s += `<line x1="${(c[0] - pp[0] * 6).toFixed(1)}" y1="${(c[1] - pp[1] * 6).toFixed(1)}" x2="${(c[0] + pp[0] * 6).toFixed(1)}" y2="${(c[1] + pp[1] * 6).toFixed(1)}" stroke="${COL_ANGLE}" stroke-width="2"/>`;
  }
  return s;
}

// ---------- 2つの三角形（合同） ----------
function buildTwoTriangles(img: any): string {
  const PL = fitPts(triLocalPts(img.left.angles), 84, 190, 112, 150);
  const PR = fitPts(triLocalPts(img.right.angles), 276, 190, 112, 150);
  const tri: Record<string, Record<string, [number, number]>> = { left: PL, right: PR };
  const vn: Record<string, string[]> = { left: img.left.vertexNames, right: img.right.vertexNames };
  const parts: string[] = [];
  for (const side of ['left', 'right']) {
    const P = tri[side];
    parts.push(`<polygon points="${['A', 'B', 'C'].map((k) => `${P[k][0].toFixed(1)},${P[k][1].toFixed(1)}`).join(' ')}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.4" stroke-linejoin="round"/>`);
    const cen: [number, number] = [(P.A[0] + P.B[0] + P.C[0]) / 3, (P.A[1] + P.B[1] + P.C[1]) / 3];
    const names = vn[side];
    ['A', 'B', 'C'].forEach((k, i) => {
      if (!names || !names[i]) return;
      const v = P[k], d = [v[0] - cen[0], v[1] - cen[1]], len = Math.hypot(d[0], d[1]) || 1;
      parts.push(svgText(v[0] + (d[0] / len) * 16, v[1] + (d[1] / len) * 16, names[i], { weight: 'bold', size: 15, fill: COL_SHAPE }));
    });
  }
  // 表示名(D/E/F等)→内部キー(A/B/C 位置)
  const keyMap = (side: string): Record<string, string> => {
    const names = vn[side]; const map: Record<string, string> = {};
    ['A', 'B', 'C'].forEach((k, i) => { map[names[i]] = k; });
    return map;
  };
  for (const t of img.sideTicks || []) {
    const P = tri[t.tri], mp = keyMap(t.tri);
    parts.push(tickMarks(P[mp[t.side[0]]], P[mp[t.side[1]]], t.n));
  }
  const nbr: Record<string, [string, string]> = { A: ['B', 'C'], B: ['A', 'C'], C: ['A', 'B'] };
  for (const m of img.angleMarks || []) {
    const P = tri[m.tri], mp = keyMap(m.tri), key = mp[m.at], v = P[key], nb = nbr[key];
    for (let k = 0; k < m.n; k++) parts.push(angleArc(v, P[nb[0]], P[nb[1]], 13 + k * 5).path);
  }
  return wrap(parts.join(''));
}

// ---------- 作図 ----------
function arcCenter(c: [number, number], r: number, a1: number, a2: number): string {
  // a1→a2 の短い方の弧（minor arc）を描く
  const d = ((((a2 - a1) % 360) + 540) % 360) - 180; // -180..180
  const a2adj = a1 + d;
  const s: [number, number] = [c[0] + r * Math.cos(rad(a1)), c[1] - r * Math.sin(rad(a1))];
  const e: [number, number] = [c[0] + r * Math.cos(rad(a2adj)), c[1] - r * Math.sin(rad(a2adj))];
  const sweep = d > 0 ? 1 : 0;
  return `<path d="M${s[0].toFixed(1)},${s[1].toFixed(1)} A${r},${r} 0 0 ${sweep} ${e[0].toFixed(1)},${e[1].toFixed(1)}" fill="none" stroke="${COL_ANGLE}" stroke-width="1.6"/>`;
}
function angDeg(c: [number, number], p: [number, number]): number {
  return (Math.atan2(-(p[1] - c[1]), p[0] - c[0]) * 180) / Math.PI;
}
// 半径の等しい2円(中心c1,c2・半径r)の交点。pick='far'/'near' は基準点 ref からの遠近で選ぶ。
function circInter(c1: [number, number], c2: [number, number], r: number, ref: [number, number], pick: 'far' | 'near'): [number, number] {
  const dx = c2[0] - c1[0], dy = c2[1] - c1[1], dd = Math.hypot(dx, dy);
  const a = dd / 2; // r1=r2
  const h = Math.sqrt(Math.max(0, r * r - a * a));
  const mx = c1[0] + (a * dx) / dd, my = c1[1] + (a * dy) / dd;
  const ox = (-dy / dd) * h, oy = (dx / dd) * h;
  const i1: [number, number] = [mx + ox, my + oy], i2: [number, number] = [mx - ox, my - oy];
  const d1 = Math.hypot(i1[0] - ref[0], i1[1] - ref[1]), d2 = Math.hypot(i2[0] - ref[0], i2[1] - ref[1]);
  return pick === 'far' ? (d1 > d2 ? i1 : i2) : d1 < d2 ? i1 : i2;
}
// 中心cから点ptを通る小さな弧（±span度）
function arcThrough(c: [number, number], r: number, pt: [number, number], span = 24): string {
  const a = angDeg(c, pt);
  return arcCenter(c, r, a - span, a + span);
}
function buildConstruction(img: any): string {
  const parts: string[] = [];
  const type = img.ctype;
  if (type === 'perp-bisector') {
    const A: [number, number] = [120, 210], B: [number, number] = [260, 210];
    const mx = (A[0] + B[0]) / 2, half = (B[0] - A[0]) / 2, r = 96, hh = Math.sqrt(r * r - half * half);
    const top: [number, number] = [mx, 210 - hh], bot: [number, number] = [mx, 210 + hh];
    parts.push(line(A, B));
    // A,B 中心の弧（上下の交点 top/bot を通す）
    parts.push(arcCenter(A, r, angDeg(A, bot), angDeg(A, top)));
    parts.push(arcCenter(B, r, angDeg(B, top), angDeg(B, bot)));
    if (img.showLine) parts.push(`<line x1="${mx}" y1="${(top[1] - 26).toFixed(1)}" x2="${mx}" y2="${(bot[1] + 26).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2" stroke-dasharray="6 4"/>`);
    parts.push(`<circle cx="${A[0]}" cy="${A[1]}" r="2.5" fill="${COL_SHAPE}"/><circle cx="${B[0]}" cy="${B[1]}" r="2.5" fill="${COL_SHAPE}"/>`);
    parts.push(svgText(A[0] - 6, A[1] + 16, 'A', { weight: 'bold', size: 15, fill: COL_SHAPE }));
    parts.push(svgText(B[0] + 6, B[1] + 16, 'B', { weight: 'bold', size: 15, fill: COL_SHAPE }));
  } else if (type === 'angle-bisector') {
    const O: [number, number] = [104, 252];
    const a1 = 0, a2 = 54, L = 214;
    parts.push(line(O, [O[0] + L * Math.cos(rad(a1)), O[1] - L * Math.sin(rad(a1))]));
    parts.push(line(O, [O[0] + L * Math.cos(rad(a2)), O[1] - L * Math.sin(rad(a2))]));
    const rr = 80;
    const P1: [number, number] = [O[0] + rr * Math.cos(rad(a1)), O[1] - rr * Math.sin(rad(a1))];
    const P2: [number, number] = [O[0] + rr * Math.cos(rad(a2)), O[1] - rr * Math.sin(rad(a2))];
    parts.push(arcCenter(O, rr, a1 - 7, a2 + 7)); // 2辺を横切る弧
    const rr2 = 70;
    const Q = circInter(P1, P2, rr2, O, 'far'); // P1,P2中心の弧の交点（O から遠い方＝角の内側奥）
    parts.push(arcThrough(P1, rr2, Q, 22));
    parts.push(arcThrough(P2, rr2, Q, 22));
    if (img.showLine) parts.push(`<line x1="${O[0]}" y1="${O[1]}" x2="${(O[0] + (Math.hypot(Q[0] - O[0], Q[1] - O[1]) + 70) * Math.cos(rad((a1 + a2) / 2))).toFixed(1)}" y2="${(O[1] - (Math.hypot(Q[0] - O[0], Q[1] - O[1]) + 70) * Math.sin(rad((a1 + a2) / 2))).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2" stroke-dasharray="6 4"/>`);
    parts.push(`<circle cx="${O[0]}" cy="${O[1]}" r="2.5" fill="${COL_SHAPE}"/>`);
    parts.push(svgText(O[0] - 14, O[1] + 4, 'O', { weight: 'bold', size: 15, fill: COL_SHAPE }));
  } else { // perpendicular: 直線上の点Pでの垂線
    const y = 246, P: [number, number] = [180, y];
    parts.push(line([40, y], [320, y]));
    const d = 58;
    const Lp: [number, number] = [P[0] - d, y], Rp: [number, number] = [P[0] + d, y];
    const r = 92;
    const up = circInter(Lp, Rp, r, [P[0], y - 300], 'near'); // 上の交点
    const dn = circInter(Lp, Rp, r, [P[0], y + 300], 'near'); // 下の交点
    // Lp,Rp の弧を、上下の交点を通る範囲で描く
    parts.push(arcCenter(Lp, r, angDeg(Lp, dn), angDeg(Lp, up)));
    parts.push(arcCenter(Rp, r, angDeg(Rp, up), angDeg(Rp, dn)));
    if (img.showLine) parts.push(`<line x1="${P[0]}" y1="${(up[1] - 24).toFixed(1)}" x2="${P[0]}" y2="${(dn[1] + 10).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2" stroke-dasharray="6 4"/>`);
    parts.push(`<circle cx="${Lp[0]}" cy="${y}" r="2.3" fill="${COL_SHAPE}"/><circle cx="${Rp[0]}" cy="${y}" r="2.3" fill="${COL_SHAPE}"/>`);
    parts.push(`<circle cx="${P[0]}" cy="${y}" r="2.5" fill="${COL_SHAPE}"/>`);
    parts.push(svgText(P[0] - 14, y + 17, 'P', { weight: 'bold', size: 15, fill: COL_SHAPE }));
  }
  return wrap(parts.join(''));
}

// ---------- 図形の移動 ----------
function buildMovement(img: any): string {
  const type = img.mtype;
  const base = triLocalPts([70, 60, 50]);
  const parts: string[] = [];
  const drawTri = (P: Record<string, [number, number]>, dashed: boolean, label?: string[]) => {
    parts.push(`<polygon points="${['A', 'B', 'C'].map((k) => `${P[k][0].toFixed(1)},${P[k][1].toFixed(1)}`).join(' ')}" fill="${dashed ? 'none' : COL_FILL}" stroke="${dashed ? COL_HID : COL_SHAPE}" stroke-width="2.2"${dashed ? ' stroke-dasharray="6 4"' : ''} stroke-linejoin="round"/>`);
    if (label) { const cen: [number, number] = [(P.A[0] + P.B[0] + P.C[0]) / 3, (P.A[1] + P.B[1] + P.C[1]) / 3]; ['A', 'B', 'C'].forEach((k, i) => { if (label[i]) parts.push(svgText(P[k][0] + (P[k][0] - cen[0]) * 0.28, P[k][1] + (P[k][1] - cen[1]) * 0.28, label[i], { size: 13, weight: 'bold', fill: dashed ? COL_HID : COL_SHAPE })); }); }
  };
  if (type === 'translation') {
    const P1 = fitPts(base, 120, 170, 120, 130);
    const off: [number, number] = [120, 60];
    const P2: Record<string, [number, number]> = {}; for (const k of ['A', 'B', 'C']) P2[k] = [P1[k][0] + off[0], P1[k][1] + off[1]];
    drawTri(P1, false, ['A', 'B', 'C']); drawTri(P2, true, ["A'", "B'", "C'"]);
    parts.push(`<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${COL_SHAPE}"/></marker></defs>`);
    parts.push(`<line x1="${P1.A[0].toFixed(1)}" y1="${P1.A[1].toFixed(1)}" x2="${(P2.A[0] - 4).toFixed(1)}" y2="${(P2.A[1] - 2).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="1.6" marker-end="url(#ar)"/>`);
  } else if (type === 'reflection') {
    const axisX = 184;
    const P1 = fitPts(base, 110, 185, 120, 150);
    const P2: Record<string, [number, number]> = {}; for (const k of ['A', 'B', 'C']) P2[k] = [2 * axisX - P1[k][0], P1[k][1]];
    parts.push(`<line x1="${axisX}" y1="40" x2="${axisX}" y2="320" stroke="${COL_HID}" stroke-width="1.8" stroke-dasharray="7 5"/>`);
    drawTri(P1, false, ['A', 'B', 'C']); drawTri(P2, true, ["A'", "B'", "C'"]);
    parts.push(svgText(axisX + 12, 52, 'ℓ', { size: 14, fill: COL_TEXT }));
  } else { // rotation 180°（点対称）
    const O: [number, number] = [184, 188];
    const P1 = fitPts(base, 116, 130, 110, 110);
    const P2: Record<string, [number, number]> = {}; for (const k of ['A', 'B', 'C']) P2[k] = [2 * O[0] - P1[k][0], 2 * O[1] - P1[k][1]];
    drawTri(P1, false, ['A', 'B', 'C']); drawTri(P2, true, ["A'", "B'", "C'"]);
    parts.push(`<circle cx="${O[0]}" cy="${O[1]}" r="2.6" fill="${COL_SHAPE}"/>`);
    parts.push(svgText(O[0] + 10, O[1] + 12, 'O', { size: 14, weight: 'bold', fill: COL_SHAPE }));
  }
  return wrap(parts.join(''));
}

function build(img: any): string {
  switch (img.kind) {
    case 'boxplot': return buildBoxplot(img);
    case 'histogram': return buildHistogram(img);
    case 'two-triangles': return buildTwoTriangles(img);
    case 'construction': return buildConstruction(img);
    case 'movement': return buildMovement(img);
    case 'triangle': return buildTriangle(img);
    case 'sector': return buildSector(img);
    case 'circle': return buildCircle(img);
    case 'parallel-lines': return buildParallel(img);
    case 'parallelogram': return buildParallelogram(img);
    case 'polygon': return buildPolygon(img);
    case 'rect-prism': return buildRectPrism(img);
    case 'cylinder': return buildCylinder(img);
    case 'cone': return buildCone(img);
    case 'sphere': return buildSphere(img);
    case 'tri-prism': return buildTriPrism(img);
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

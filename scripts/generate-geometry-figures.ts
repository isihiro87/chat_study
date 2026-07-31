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
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
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

const GEOM_KINDS = new Set([
  'triangle',
  'sector',
  'parallel-lines',
  'polygon',
  'circle',
  'parallelogram',
  'rect-prism',
  'cylinder',
  'cone',
  'sphere',
  'tri-prism',
  'boxplot',
  'histogram',
  'two-triangles',
  'construction',
  'movement',
  'two-solids',
  'triangle-parallel',
  'trapezoid-diagonals',
  'cone-cut',
  'tri-pyramid-cut',
  'circle-angles',
  'hourglass',
  'parallel-segments',
  'midpoint-triangle',
]);

function esc(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
const rad = (deg: number) => (deg * Math.PI) / 180;
function svgText(
  x: number,
  y: number,
  t: string,
  opts: { size?: number; fill?: string; anchor?: string; weight?: string } = {}
) {
  const {
    size = 15,
    fill = COL_TEXT,
    anchor = 'middle',
    weight = 'normal',
  } = opts;
  return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${size}" fill="${fill}" font-family="sans-serif" text-anchor="${anchor}" font-weight="${weight}" dominant-baseline="middle">${esc(t)}</text>`;
}
function wrap(inner: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}"><rect width="${SIZE}" height="${SIZE}" fill="${COL_BG}"/>${inner}</svg>`;
}
// 角の弧（頂点 v、両隣 p1,p2 方向、半径 r）と弧の中点方向
function angleArc(
  v: [number, number],
  p1: [number, number],
  p2: [number, number],
  r: number
) {
  const a1 = Math.atan2(p1[1] - v[1], p1[0] - v[0]);
  const a2 = Math.atan2(p2[1] - v[1], p2[0] - v[0]);
  let d = a2 - a1;
  while (d <= -Math.PI) d += 2 * Math.PI;
  while (d > Math.PI) d -= 2 * Math.PI;
  const s: [number, number] = [
    v[0] + r * Math.cos(a1),
    v[1] + r * Math.sin(a1),
  ];
  const e: [number, number] = [
    v[0] + r * Math.cos(a1 + d),
    v[1] + r * Math.sin(a1 + d),
  ];
  const large = 0;
  const sweep = d > 0 ? 1 : 0;
  const mid = a1 + d / 2;
  const path = `<path d="M${s[0].toFixed(1)},${s[1].toFixed(1)} A${r},${r} 0 ${large} ${sweep} ${e[0].toFixed(1)},${e[1].toFixed(1)}" fill="none" stroke="${COL_ANGLE}" stroke-width="2"/>`;
  return { path, mid };
}
// 直角マーク（頂点 v、両隣 p1,p2 方向の小さな四角）。90°の角は弧でなくこれで示す
function rightAngleMark(
  v: [number, number],
  p1: [number, number],
  p2: [number, number],
  d = 15
): string {
  const u = (p: [number, number]): [number, number] => {
    const dx = p[0] - v[0],
      dy = p[1] - v[1],
      len = Math.hypot(dx, dy) || 1;
    return [dx / len, dy / len];
  };
  const u1 = u(p1),
    u2 = u(p2);
  const a: [number, number] = [v[0] + u1[0] * d, v[1] + u1[1] * d];
  const c: [number, number] = [
    v[0] + (u1[0] + u2[0]) * d,
    v[1] + (u1[1] + u2[1]) * d,
  ];
  const b: [number, number] = [v[0] + u2[0] * d, v[1] + u2[1] * d];
  return `<polyline points="${a[0].toFixed(1)},${a[1].toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)} ${b[0].toFixed(1)},${b[1].toFixed(1)}" fill="none" stroke="${COL_ANGLE}" stroke-width="2"/>`;
}

// ---------- triangle ----------
function buildTriangle(img: any): string {
  const [A, B, C] = img.angles as number[]; // 角A,B,C（和180）
  // B=(0,0), C=(1,0), A 上。t=sinC/sinA
  const tA = Math.sin(rad(C)) / Math.sin(rad(A));
  const pts: Record<string, [number, number]> = {
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
    const _others = ['A', 'B', 'C'].filter((k) => k !== ext.at);
    // BCの底辺延長を優先（at=C なら B→C の延長、at=B なら C→B の延長）
    const base = ext.at === 'C' ? pts.B : ext.at === 'B' ? pts.C : pts.B;
    const dir: [number, number] = [v[0] - base[0], v[1] - base[1]];
    const len = Math.hypot(dir[0], dir[1]) || 1;
    extra.push([v[0] + (dir[0] / len) * 0.5, v[1] + (dir[1] / len) * 0.5]);
  }
  // y反転＋スケール
  const all = [pts.A, pts.B, pts.C, ...extra];
  const xs = all.map((p) => p[0]),
    ys = all.map((p) => p[1]);
  const minX = Math.min(...xs),
    maxX = Math.max(...xs),
    minY = Math.min(...ys),
    maxY = Math.max(...ys);
  const pad = 56;
  const scale = Math.min(
    (SIZE - 2 * pad) / (maxX - minX || 1),
    (SIZE - 2 * pad) / (maxY - minY || 1)
  );
  const w = (maxX - minX) * scale,
    h = (maxY - minY) * scale;
  const ox = (SIZE - w) / 2,
    oy = (SIZE - h) / 2;
  const T = (p: [number, number]): [number, number] => [
    ox + (p[0] - minX) * scale,
    oy + h - (p[1] - minY) * scale,
  ];
  const P: Record<string, [number, number]> = {
    A: T(pts.A),
    B: T(pts.B),
    C: T(pts.C),
  };
  const cen: [number, number] = [
    (P.A[0] + P.B[0] + P.C[0]) / 3,
    (P.A[1] + P.B[1] + P.C[1]) / 3,
  ];
  const parts: string[] = [];
  // 外角の延長線
  if (ext && ext.at) {
    const e = T(extra[0]);
    parts.push(
      `<line x1="${P[ext.at][0].toFixed(1)}" y1="${P[ext.at][1].toFixed(1)}" x2="${e[0].toFixed(1)}" y2="${e[1].toFixed(1)}" stroke="${COL_AUX}" stroke-width="2" stroke-dasharray="2 0"/>`
    );
  }
  // 三角形本体
  parts.push(
    `<polygon points="${P.A[0].toFixed(1)},${P.A[1].toFixed(1)} ${P.B[0].toFixed(1)},${P.B[1].toFixed(1)} ${P.C[0].toFixed(1)},${P.C[1].toFixed(1)}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`
  );
  // 角の弧＋ラベル
  const labels = img.angleLabels as (string | null)[] | undefined;
  const order = ['A', 'B', 'C'];
  const neighbor: Record<string, [string, string]> = {
    A: ['B', 'C'],
    B: ['A', 'C'],
    C: ['A', 'B'],
  };
  order.forEach((k, i) => {
    const v = P[k],
      n = neighbor[k];
    const ang = (img.angles as number[])[i];
    // 90°の角は弧＋「90°」ラベルではなく直角マーク（小さな四角）で示す（ラベル有無に関わらず）
    if (Math.round(ang) === 90) {
      parts.push(rightAngleMark(v, P[n[0]], P[n[1]]));
      return;
    }
    const lab = labels && labels[i];
    if (!lab) return;
    // 狭い角ほど弧を大きめに（小さく見えるのを防ぐ）
    const arcR = ang < 45 ? 34 : ang < 70 ? 30 : 26;
    const arc = angleArc(v, P[n[0]], P[n[1]], arcR);
    parts.push(arc.path);
    // 狭い角ほどラベルを内側へ深く置く（辺との重なり回避）
    const lr = ang < 50 ? 54 : 44;
    const lx = v[0] + lr * Math.cos(arc.mid),
      ly = v[1] + lr * Math.sin(arc.mid);
    parts.push(
      svgText(lx, ly, lab, { fill: COL_ANGLE, weight: 'bold', size: 17 })
    );
  });
  // 外角ラベル
  if (ext && ext.text) {
    const v = P[ext.at];
    const e = T(extra[0]);
    const others = ['A', 'B', 'C'].filter(
      (k) =>
        k !== ext.at &&
        k !== (ext.at === 'C' ? 'B' : ext.at === 'B' ? 'C' : 'B')
    );
    const apex = others[0]; // 上の頂点
    const arc = angleArc(v, [e[0], e[1]], P[apex], 20);
    parts.push(arc.path);
    const lx = v[0] + 38 * Math.cos(arc.mid),
      ly = v[1] + 38 * Math.sin(arc.mid);
    parts.push(
      svgText(lx, ly, ext.text, { fill: COL_ANGLE, weight: 'bold', size: 17 })
    );
  }
  // 頂点名
  const vn = img.vertexNames as string[] | undefined;
  if (vn) {
    order.forEach((k, i) => {
      if (!vn[i]) return;
      const v = P[k];
      const dir = [v[0] - cen[0], v[1] - cen[1]];
      const len = Math.hypot(dir[0], dir[1]) || 1;
      parts.push(
        svgText(v[0] + (dir[0] / len) * 18, v[1] + (dir[1] / len) * 18, vn[i], {
          weight: 'bold',
          size: 16,
          fill: COL_SHAPE,
        })
      );
    });
  }
  // 辺ラベル
  for (const s of img.sideLabels || []) {
    const a = s.between[0],
      b = s.between[1];
    const m: [number, number] = [
      (P[a][0] + P[b][0]) / 2,
      (P[a][1] + P[b][1]) / 2,
    ];
    const dir = [m[0] - cen[0], m[1] - cen[1]];
    const len = Math.hypot(dir[0], dir[1]) || 1;
    parts.push(
      svgText(m[0] + (dir[0] / len) * 16, m[1] + (dir[1] / len) * 16, s.text, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
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
  const uxs = upts.map((p) => p[0]),
    uys = upts.map((p) => p[1]);
  const minX = Math.min(...uxs),
    maxX = Math.max(...uxs),
    minY = Math.min(...uys),
    maxY = Math.max(...uys);
  const MARGIN = 66;
  const avail = SIZE - 2 * MARGIN;
  const R = Math.min(avail / (maxX - minX), avail / (maxY - minY));
  const w = (maxX - minX) * R,
    h = (maxY - minY) * R;
  const ox = (SIZE - w) / 2,
    oy = (SIZE - h) / 2;
  // 数学座標(yは上)→画面座標
  const Tm = (mx: number, my: number): [number, number] => [
    ox + (mx - minX) * R,
    oy + h - (my - minY) * R,
  ];
  const O = Tm(0, 0);
  const p1 = Tm(Math.cos(rad(s0)), Math.sin(rad(s0)));
  const p2 = Tm(Math.cos(rad(s0 + a)), Math.sin(rad(s0 + a)));
  const large = a > 180 ? 1 : 0;
  const parts: string[] = [];
  parts.push(
    `<path d="M${O[0]},${O[1]} L${p1[0].toFixed(1)},${p1[1].toFixed(1)} A${R},${R} 0 ${large} 0 ${p2[0].toFixed(1)},${p2[1].toFixed(1)} Z" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`
  );
  // 中心角が90°なら弧＋「90°」ラベルではなく直角マーク（小さな四角）で示す
  if (Math.round(a) === 90) {
    parts.push(rightAngleMark(O, p1, p2, 18));
  } else {
    // 中心角の弧（少し大きめにして見やすく・上限つき）
    const r2 = Math.min(42, R * 0.3);
    const a1: [number, number] = [
      O[0] + r2 * Math.cos(rad(s0)),
      O[1] - r2 * Math.sin(rad(s0)),
    ];
    const a2: [number, number] = [
      O[0] + r2 * Math.cos(rad(s0 + a)),
      O[1] - r2 * Math.sin(rad(s0 + a)),
    ];
    parts.push(
      `<path d="M${a1[0].toFixed(1)},${a1[1].toFixed(1)} A${r2},${r2} 0 ${large} 0 ${a2[0].toFixed(1)},${a2[1].toFixed(1)}" fill="none" stroke="${COL_ANGLE}" stroke-width="2"/>`
    );
    if (img.angleLabel) {
      // 中心角が狭いと「真上＝くさびの内側」に置くと重なるので、外側（左ななめ下）へ出す
      if (a < 70) {
        const dir = s0 + a + 26; // 左側の半径よりさらに外側
        const rr = r2 + 26;
        parts.push(
          svgText(
            O[0] + rr * Math.cos(rad(dir)),
            O[1] - rr * Math.sin(rad(dir)),
            img.angleLabel,
            { fill: COL_ANGLE, weight: 'bold', size: 16 }
          )
        );
      } else {
        parts.push(
          svgText(O[0], O[1] - (r2 + 18), img.angleLabel, {
            fill: COL_ANGLE,
            weight: 'bold',
            size: 16,
          })
        );
      }
    }
  }
  if (img.radiusLabel) {
    // 半径ラベルは半径の中ほど＋扇の外側へ垂直オフセット（半径線・弧と離す）。狭い扇ほど離す。
    const u: [number, number] = [(p1[0] - O[0]) / R, (p1[1] - O[1]) / R];
    const nrm: [number, number] = [-u[1], u[0]]; // 扇の外側（右半径の右どなり）
    const off = a < 70 ? 30 : 20;
    const base: [number, number] = [
      O[0] + u[0] * R * 0.55,
      O[1] + u[1] * R * 0.55,
    ];
    parts.push(
      svgText(base[0] + nrm[0] * off, base[1] + nrm[1] * off, img.radiusLabel, {
        size: 14,
        fill: COL_SHAPE,
      })
    );
  }
  parts.push(
    svgText(O[0] - 10, O[1] + 12, 'O', {
      size: 14,
      fill: COL_SHAPE,
      weight: 'bold',
    })
  );
  return wrap(parts.join(''));
}
function buildCircle(img: any): string {
  const O: [number, number] = [SIZE / 2, SIZE / 2];
  const R = 120;
  const parts: string[] = [];
  parts.push(
    `<circle cx="${O[0]}" cy="${O[1]}" r="${R}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5"/>`
  );
  parts.push(`<circle cx="${O[0]}" cy="${O[1]}" r="2.5" fill="${COL_SHAPE}"/>`);
  parts.push(
    svgText(O[0] - 12, O[1] + 12, 'O', {
      size: 14,
      fill: COL_SHAPE,
      weight: 'bold',
    })
  );
  if (img.centralAngle) {
    const a = img.centralAngle as number;
    const s0 = 90 - a / 2;
    for (const ang of [s0, s0 + a]) {
      const p: [number, number] = [
        O[0] + R * Math.cos(rad(ang)),
        O[1] - R * Math.sin(rad(ang)),
      ];
      parts.push(
        `<line x1="${O[0]}" y1="${O[1]}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2"/>`
      );
    }
    if (img.angleLabel)
      parts.push(
        svgText(O[0], O[1] - 30, img.angleLabel, {
          fill: COL_ANGLE,
          weight: 'bold',
          size: 14,
        })
      );
  }
  if (img.radiusLabel) {
    const p: [number, number] = [
      O[0] + R * Math.cos(rad(20)),
      O[1] - R * Math.sin(rad(20)),
    ];
    if (!img.centralAngle)
      parts.push(
        `<line x1="${O[0]}" y1="${O[1]}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2"/>`
      );
    parts.push(
      svgText((O[0] + p[0]) / 2, (O[1] + p[1]) / 2 - 12, img.radiusLabel, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

// ---------- parallel-lines ----------
function buildParallel(img: any): string {
  const slant = (img.slant as number) ?? 60; // 横断線の傾き（度）右上がり
  const yTop = 120,
    yBot = 240;
  const xL = 40,
    xR = 320;
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
  parts.push(
    `<line x1="${(Ptop[0] - u[0] * ext).toFixed(1)}" y1="${(Ptop[1] - u[1] * ext).toFixed(1)}" x2="${(Pbot[0] + u[0] * ext).toFixed(1)}" y2="${(Pbot[1] + u[1] * ext).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2.5"/>`
  );
  // 2本の平行線
  parts.push(
    `<line x1="${xL}" y1="${yTop}" x2="${xR}" y2="${yTop}" stroke="${COL_SHAPE}" stroke-width="2.5"/>`
  );
  parts.push(
    `<line x1="${xL}" y1="${yBot}" x2="${xR}" y2="${yBot}" stroke="${COL_SHAPE}" stroke-width="2.5"/>`
  );
  // 平行マーク（>）
  for (const y of [yTop, yBot]) {
    const mx = xR - 36;
    parts.push(
      `<path d="M${mx},${y - 5} l7,5 l-7,5" fill="none" stroke="${COL_SHAPE}" stroke-width="1.6"/>`
    );
  }
  if (img.lineNames) {
    parts.push(
      svgText(xR + 12, yTop, img.lineNames[0], {
        size: 14,
        fill: COL_SHAPE,
        weight: 'bold',
      })
    );
    parts.push(
      svgText(xR + 12, yBot, img.lineNames[1], {
        size: 14,
        fill: COL_SHAPE,
        weight: 'bold',
      })
    );
  }
  if (img.transversalName)
    parts.push(
      svgText(
        Ptop[0] - u[0] * ext - 4,
        Ptop[1] - u[1] * ext - 8,
        img.transversalName,
        { size: 14, fill: COL_SHAPE, weight: 'bold' }
      )
    );
  // sector 名（画面上の位置）→ 配置方向(度, 数学角)。横断線は右上がり(slant)。
  // 角の大きさ: lower-left / upper-right = slant（鋭角）, lower-right / upper-left = 180-slant（鈍角）
  // 同位角=同じ位置名, 錯角=(lower-left↔upper-right) と (lower-right↔upper-left)。
  const _sectorDir: Record<string, number> = {
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
    'lower-left': [hLeft, tDown],
    'lower-right': [hRight, tDown],
    'upper-left': [hLeft, tUp],
    'upper-right': [hRight, tUp],
    top: [hLeft, tDown],
    right: [hRight, tDown],
    left: [hLeft, tUp],
    bottom: [hRight, tUp],
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
    let bx = r1[0] + r2[0],
      by = r1[1] + r2[1];
    const bl = Math.hypot(bx, by) || 1;
    bx /= bl;
    by /= bl;
    parts.push(
      svgText(v[0] + bx * 46, v[1] + by * 46, lb.text, {
        fill: COL_ANGLE,
        weight: 'bold',
        size: 17,
      })
    );
  }
  return wrap(parts.join(''));
}

// ---------- parallelogram ----------
function buildParallelogram(img: any): string {
  const th = (img.angle as number) ?? 110; // 頂点Dの内角
  const base = 1.5,
    side = 1.05;
  // D(左下), C(右下), A(左上), B(右上)
  const raw: Record<string, [number, number]> = {
    D: [0, 0],
    C: [base, 0],
    A: [side * Math.cos(rad(th)), side * Math.sin(rad(th))],
    B: [base + side * Math.cos(rad(th)), side * Math.sin(rad(th))],
  };
  const order = ['A', 'B', 'C', 'D'];
  const xs = order.map((k) => raw[k][0]),
    ys = order.map((k) => raw[k][1]);
  const minX = Math.min(...xs),
    maxX = Math.max(...xs),
    minY = Math.min(...ys),
    maxY = Math.max(...ys);
  const pad = 60;
  const scale = Math.min(
    (SIZE - 2 * pad) / (maxX - minX),
    (SIZE - 2 * pad) / (maxY - minY)
  );
  const w = (maxX - minX) * scale,
    h = (maxY - minY) * scale;
  const ox = (SIZE - w) / 2,
    oy = (SIZE - h) / 2;
  const T = (p: [number, number]): [number, number] => [
    ox + (p[0] - minX) * scale,
    oy + h - (p[1] - minY) * scale,
  ];
  const P: Record<string, [number, number]> = {
    A: T(raw.A),
    B: T(raw.B),
    C: T(raw.C),
    D: T(raw.D),
  };
  const cen: [number, number] = [
    (P.A[0] + P.B[0] + P.C[0] + P.D[0]) / 4,
    (P.A[1] + P.B[1] + P.C[1] + P.D[1]) / 4,
  ];
  const parts: string[] = [];
  parts.push(
    `<polygon points="${order.map((k) => `${P[k][0].toFixed(1)},${P[k][1].toFixed(1)}`).join(' ')}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`
  );
  const nb: Record<string, [string, string]> = {
    A: ['B', 'D'],
    B: ['A', 'C'],
    C: ['B', 'D'],
    D: ['A', 'C'],
  };
  const labels = img.angleLabels as (string | null)[] | undefined;
  order.forEach((k, i) => {
    const lab = labels && labels[i];
    if (!lab) return;
    const v = P[k],
      n = nb[k];
    const arc = angleArc(v, P[n[0]], P[n[1]], 24);
    parts.push(arc.path);
    parts.push(
      svgText(
        v[0] + 40 * Math.cos(arc.mid),
        v[1] + 40 * Math.sin(arc.mid),
        lab,
        { fill: COL_ANGLE, weight: 'bold', size: 16 }
      )
    );
  });
  const vn = img.vertexNames as string[] | undefined;
  if (vn)
    order.forEach((k, i) => {
      if (!vn[i]) return;
      const v = P[k],
        dir = [v[0] - cen[0], v[1] - cen[1]],
        len = Math.hypot(dir[0], dir[1]) || 1;
      parts.push(
        svgText(v[0] + (dir[0] / len) * 16, v[1] + (dir[1] / len) * 16, vn[i], {
          weight: 'bold',
          size: 15,
          fill: COL_SHAPE,
        })
      );
    });
  for (const s of img.sideLabels || []) {
    const a = s.between[0],
      b = s.between[1];
    const m: [number, number] = [
      (P[a][0] + P[b][0]) / 2,
      (P[a][1] + P[b][1]) / 2,
    ];
    const dir = [m[0] - cen[0], m[1] - cen[1]],
      len = Math.hypot(dir[0], dir[1]) || 1;
    parts.push(
      svgText(m[0] + (dir[0] / len) * 15, m[1] + (dir[1] / len) * 15, s.text, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
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
  parts.push(
    `<polygon points="${pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.5" stroke-linejoin="round"/>`
  );
  if (img.markAngle) {
    const v = pts[0];
    const arc = angleArc(v, pts[n - 1], pts[1], 22);
    parts.push(arc.path);
    if (img.angleLabel)
      parts.push(
        svgText(
          v[0] + 36 * Math.cos(arc.mid),
          v[1] + 36 * Math.sin(arc.mid),
          img.angleLabel,
          { fill: COL_ANGLE, weight: 'bold', size: 15 }
        )
      );
  }
  return wrap(parts.join(''));
}

// ===== 立体（空間図形）: 斜投影で模式的に描く =====
const COL_HID = '#9CA3AF'; // 隠れ線（破線）
function line(a: [number, number], b: [number, number], dashed = false) {
  return `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${dashed ? COL_HID : COL_SHAPE}" stroke-width="${dashed ? 1.6 : 2.4}"${dashed ? ' stroke-dasharray="5 4"' : ''}/>`;
}
// 楕円の下半分(手前=実線)・上半分(奥=破線)
function ellipseHalf(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  lower: boolean,
  dashed: boolean
) {
  const sweep = lower ? 0 : 1;
  return `<path d="M${(cx - rx).toFixed(1)},${cy.toFixed(1)} A${rx},${ry} 0 0 ${sweep} ${(cx + rx).toFixed(1)},${cy.toFixed(1)}" fill="none" stroke="${dashed ? COL_HID : COL_SHAPE}" stroke-width="${dashed ? 1.6 : 2.4}"${dashed ? ' stroke-dasharray="5 4"' : ''}/>`;
}

// ---------- 直方体・立方体 ----------
function buildRectPrism(img: any): string {
  const FW = img.cube ? 130 : 150,
    FH = img.cube ? 130 : 108;
  const odx = 56,
    ody = -42; // 奥行き方向
  const ox = (SIZE - (FW + odx)) / 2,
    oy = (SIZE + (FH - ody)) / 2 - 8;
  const A: [number, number] = [ox, oy],
    B: [number, number] = [ox + FW, oy],
    C: [number, number] = [ox + FW, oy - FH],
    D: [number, number] = [ox, oy - FH];
  const off = (p: [number, number]): [number, number] => [
    p[0] + odx,
    p[1] + ody,
  ];
  const A2 = off(A),
    B2 = off(B),
    C2 = off(C),
    D2 = off(D);
  const parts: string[] = [];
  // 面（手前・上・右）を薄く塗る
  parts.push(
    `<polygon points="${[A, B, C, D].map((p) => p.join(',')).join(' ')}" fill="${COL_FILL}" stroke="none"/>`
  );
  parts.push(
    `<polygon points="${[D, C, C2, D2].map((p) => p.join(',')).join(' ')}" fill="#DCE6F0" stroke="none"/>`
  );
  parts.push(
    `<polygon points="${[B, C, C2, B2].map((p) => p.join(',')).join(' ')}" fill="#E8EEF5" stroke="none"/>`
  );
  // 隠れ線（奥の左下 A2 まわり）
  parts.push(line(A, A2, true));
  parts.push(line(A2, B2, true));
  parts.push(line(A2, D2, true));
  // 実線
  for (const [p, q] of [
    [A, B],
    [B, C],
    [C, D],
    [D, A],
    [B, B2],
    [C, C2],
    [D, D2],
    [B2, C2],
    [C2, D2],
  ] as [[number, number], [number, number]][])
    parts.push(line(p, q));
  if (img.w)
    parts.push(
      svgText((A[0] + B[0]) / 2, A[1] + 16, img.w, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  if (img.h)
    parts.push(
      svgText(B[0] + 16, (B[1] + C[1]) / 2, img.h, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  if (img.d)
    parts.push(
      svgText((C[0] + C2[0]) / 2 + 10, (C[1] + C2[1]) / 2 - 2, img.d, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  return wrap(parts.join(''));
}

// ---------- 円柱 ----------
function buildCylinder(img: any): string {
  const cx = SIZE / 2,
    rx = 74,
    ry = 22,
    topY = 96,
    botY = 270;
  const parts: string[] = [];
  // 胴の塗り（底面の手前のふくらみまで含める）
  parts.push(
    `<path d="M${cx - rx},${topY} L${cx - rx},${botY} A${rx},${ry} 0 0 0 ${cx + rx},${botY} L${cx + rx},${topY} Z" fill="${COL_FILL}" stroke="none"/>`
  );
  // 側線
  parts.push(
    `<path d="M${cx - rx},${topY} L${cx - rx},${botY} M${cx + rx},${topY} L${cx + rx},${botY}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`
  );
  // 底（手前実線・奥破線）→ 上面（実線楕円）
  parts.push(ellipseHalf(cx, botY, rx, ry, true, false));
  parts.push(ellipseHalf(cx, botY, rx, ry, false, true));
  parts.push(
    `<ellipse cx="${cx}" cy="${topY}" rx="${rx}" ry="${ry}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`
  );
  if (img.r) {
    parts.push(line([cx, topY], [cx + rx, topY]));
    parts.push(
      svgText(cx + rx / 2, topY - 10, img.r, { size: 13, fill: COL_SHAPE })
    );
  }
  if (img.h)
    parts.push(
      svgText(cx + rx + 16, (topY + botY) / 2, img.h, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  return wrap(parts.join(''));
}

// ---------- 円錐 ----------
function buildCone(img: any): string {
  const cx = SIZE / 2,
    rx = 78,
    ry = 24,
    botY = 268,
    apexY = 80;
  const apex: [number, number] = [cx, apexY];
  const parts: string[] = [];
  // 塗り（底面の手前のふくらみまで含める）
  parts.push(
    `<path d="M${apex[0]},${apex[1]} L${cx - rx},${botY} A${rx},${ry} 0 0 0 ${cx + rx},${botY} Z" fill="${COL_FILL}" stroke="none"/>`
  );
  parts.push(ellipseHalf(cx, botY, rx, ry, true, false));
  parts.push(ellipseHalf(cx, botY, rx, ry, false, true));
  parts.push(line(apex, [cx - rx, botY]));
  parts.push(line(apex, [cx + rx, botY]));
  if (img.h) {
    parts.push(line(apex, [cx, botY], true));
    parts.push(
      svgText(cx + 10, (apexY + botY) / 2, img.h, { size: 13, fill: COL_SHAPE })
    );
  }
  if (img.r) {
    parts.push(line([cx, botY], [cx + rx, botY]));
    parts.push(
      svgText(cx + rx / 2, botY + 16, img.r, { size: 13, fill: COL_SHAPE })
    );
  }
  return wrap(parts.join(''));
}

// ---------- 球 ----------
function buildSphere(img: any): string {
  const cx = SIZE / 2,
    cy = SIZE / 2,
    R = 116;
  const parts: string[] = [];
  parts.push(
    `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`
  );
  parts.push(ellipseHalf(cx, cy, R, 34, true, false));
  parts.push(ellipseHalf(cx, cy, R, 34, false, true));
  if (img.r) {
    parts.push(`<circle cx="${cx}" cy="${cy}" r="2.5" fill="${COL_SHAPE}"/>`);
    parts.push(
      line([cx, cy], [cx + R * Math.cos(rad(35)), cy - R * Math.sin(rad(35))])
    );
    parts.push(
      svgText(cx + R * 0.5, cy - R * 0.32, img.r, { size: 13, fill: COL_SHAPE })
    );
  }
  return wrap(parts.join(''));
}

// ---------- 三角柱 ----------
function buildTriPrism(img: any): string {
  const odx = 70,
    ody = -40;
  // 手前の三角形（上頂点・底辺）
  const ox = 96,
    baseY = 250,
    tw = 120,
    th = 130;
  const A: [number, number] = [ox + tw / 2, baseY - th],
    B: [number, number] = [ox, baseY],
    C: [number, number] = [ox + tw, baseY];
  const off = (p: [number, number]): [number, number] => [
    p[0] + odx,
    p[1] + ody,
  ];
  const A2 = off(A),
    B2 = off(B),
    C2 = off(C);
  const parts: string[] = [];
  parts.push(
    `<polygon points="${[A, B, C].map((p) => p.join(',')).join(' ')}" fill="${COL_FILL}" stroke="none"/>`
  );
  parts.push(
    `<polygon points="${[A, C, C2, A2].map((p) => p.join(',')).join(' ')}" fill="#E8EEF5" stroke="none"/>`
  );
  // 隠れ線（奥の B2）
  parts.push(line(B, B2, true));
  parts.push(line(B2, A2, true));
  parts.push(line(B2, C2, true));
  for (const [p, q] of [
    [A, B],
    [B, C],
    [C, A],
    [A, A2],
    [C, C2],
    [A2, C2],
  ] as [[number, number], [number, number]][])
    parts.push(line(p, q));
  if (img.len)
    parts.push(
      svgText((C[0] + C2[0]) / 2 + 6, (C[1] + C2[1]) / 2 + 14, img.len, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  if (img.base)
    parts.push(
      svgText((B[0] + C[0]) / 2, B[1] + 16, img.base, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  if (img.h)
    parts.push(
      svgText(A[0] - 14, (A[1] + baseY) / 2, img.h, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  return wrap(parts.join(''));
}

// ===== 統計図 =====
// ---------- 箱ひげ図 ----------
function buildBoxplot(img: any): string {
  const { min, q1, median, q3, max } = img;
  const aMin = img.axisMin,
    aMax = img.axisMax,
    aStep = img.axisStep;
  const left = 52,
    right = SIZE - 28,
    axisY = 256,
    boxY = 120,
    boxH = 84;
  const midY = boxY + boxH / 2;
  const X = (v: number) => left + ((v - aMin) / (aMax - aMin)) * (right - left);
  const parts: string[] = [];
  // 数直線
  parts.push(
    `<line x1="${left}" y1="${axisY}" x2="${right}" y2="${axisY}" stroke="${COL_SHAPE}" stroke-width="2"/>`
  );
  for (let v = aMin; v <= aMax + 1e-9; v += aStep) {
    parts.push(
      `<line x1="${X(v).toFixed(1)}" y1="${axisY}" x2="${X(v).toFixed(1)}" y2="${axisY + 6}" stroke="${COL_SHAPE}" stroke-width="1.5"/>`
    );
    parts.push(
      svgText(X(v), axisY + 18, String(v), { size: 12, fill: COL_TEXT })
    );
  }
  // ひげ
  parts.push(
    `<line x1="${X(min).toFixed(1)}" y1="${midY}" x2="${X(q1).toFixed(1)}" y2="${midY}" stroke="${COL_SHAPE}" stroke-width="2"/>`
  );
  parts.push(
    `<line x1="${X(q3).toFixed(1)}" y1="${midY}" x2="${X(max).toFixed(1)}" y2="${midY}" stroke="${COL_SHAPE}" stroke-width="2"/>`
  );
  for (const v of [min, max])
    parts.push(
      `<line x1="${X(v).toFixed(1)}" y1="${boxY + 16}" x2="${X(v).toFixed(1)}" y2="${boxY + boxH - 16}" stroke="${COL_SHAPE}" stroke-width="2"/>`
    );
  // 箱
  parts.push(
    `<rect x="${X(q1).toFixed(1)}" y="${boxY}" width="${(X(q3) - X(q1)).toFixed(1)}" height="${boxH}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2"/>`
  );
  // 中央値
  parts.push(
    `<line x1="${X(median).toFixed(1)}" y1="${boxY}" x2="${X(median).toFixed(1)}" y2="${boxY + boxH}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`
  );
  return wrap(parts.join(''));
}

// ---------- ヒストグラム ----------
function buildHistogram(img: any): string {
  const bnd: number[] = img.boundaries; // 階級の境界（n+1個）
  const freqs: number[] = img.freqs; // 各階級の度数（n個）
  const yMax = img.yMax || Math.max(...freqs);
  const left = 54,
    bottom = 268,
    top = 56,
    right = SIZE - 26;
  const plotW = right - left,
    plotH = bottom - top;
  const n = freqs.length;
  const bw = plotW / n;
  const parts: string[] = [];
  // y軸・x軸
  parts.push(
    `<line x1="${left}" y1="${top}" x2="${left}" y2="${bottom}" stroke="${COL_SHAPE}" stroke-width="2"/>`
  );
  parts.push(
    `<line x1="${left}" y1="${bottom}" x2="${right}" y2="${bottom}" stroke="${COL_SHAPE}" stroke-width="2"/>`
  );
  // y目盛り（度数）
  for (let v = 0; v <= yMax; v++) {
    const y = bottom - (v / yMax) * plotH;
    parts.push(
      `<line x1="${left - 5}" y1="${y.toFixed(1)}" x2="${left}" y2="${y.toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="1.3"/>`
    );
    parts.push(svgText(left - 14, y, String(v), { size: 11, fill: COL_TEXT }));
  }
  // バー＋x境界ラベル
  for (let i = 0; i < n; i++) {
    const x = left + i * bw,
      h = (freqs[i] / yMax) * plotH;
    if (freqs[i] > 0)
      parts.push(
        `<rect x="${x.toFixed(1)}" y="${(bottom - h).toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="1.6"/>`
      );
  }
  for (let i = 0; i <= n; i++) {
    const x = left + i * bw;
    parts.push(
      svgText(x, bottom + 14, String(bnd[i]), { size: 10, fill: COL_TEXT })
    );
  }
  if (img.yLabel)
    parts.push(
      svgText(left - 6, top - 16, img.yLabel, {
        size: 11,
        fill: COL_TEXT,
        anchor: 'start',
      })
    );
  return wrap(parts.join(''));
}

// ===== 合同・作図・移動 =====
function triLocalPts(angles: number[]): Record<string, [number, number]> {
  const [A, B, C] = angles;
  const t = Math.sin(rad(C)) / Math.sin(rad(A));
  return {
    A: [t * Math.cos(rad(B)), t * Math.sin(rad(B))],
    B: [0, 0],
    C: [1, 0],
  };
}
function fitPts(
  pts: Record<string, [number, number]>,
  cx: number,
  cy: number,
  boxW: number,
  boxH: number
) {
  const ks = Object.keys(pts);
  const xs = ks.map((k) => pts[k][0]),
    ys = ks.map((k) => pts[k][1]);
  const minX = Math.min(...xs),
    maxX = Math.max(...xs),
    minY = Math.min(...ys),
    maxY = Math.max(...ys);
  const sc = Math.min(boxW / (maxX - minX || 1), boxH / (maxY - minY || 1));
  const w = (maxX - minX) * sc,
    h = (maxY - minY) * sc;
  const out: Record<string, [number, number]> = {};
  for (const k of ks)
    out[k] = [
      cx - w / 2 + (pts[k][0] - minX) * sc,
      cy + h / 2 - (pts[k][1] - minY) * sc,
    ];
  return out;
}
function tickMarks(
  P: [number, number],
  Q: [number, number],
  n: number
): string {
  let s = '';
  const mid: [number, number] = [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2];
  const L = Math.hypot(Q[0] - P[0], Q[1] - P[1]) || 1;
  const u: [number, number] = [(Q[0] - P[0]) / L, (Q[1] - P[1]) / L],
    pp: [number, number] = [-u[1], u[0]];
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
  const tri: Record<string, Record<string, [number, number]>> = {
    left: PL,
    right: PR,
  };
  const vn: Record<string, string[]> = {
    left: img.left.vertexNames,
    right: img.right.vertexNames,
  };
  const parts: string[] = [];
  for (const side of ['left', 'right']) {
    const P = tri[side];
    parts.push(
      `<polygon points="${['A', 'B', 'C'].map((k) => `${P[k][0].toFixed(1)},${P[k][1].toFixed(1)}`).join(' ')}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.4" stroke-linejoin="round"/>`
    );
    const cen: [number, number] = [
      (P.A[0] + P.B[0] + P.C[0]) / 3,
      (P.A[1] + P.B[1] + P.C[1]) / 3,
    ];
    const names = vn[side];
    ['A', 'B', 'C'].forEach((k, i) => {
      if (!names || !names[i]) return;
      const v = P[k],
        d = [v[0] - cen[0], v[1] - cen[1]],
        len = Math.hypot(d[0], d[1]) || 1;
      parts.push(
        svgText(v[0] + (d[0] / len) * 16, v[1] + (d[1] / len) * 16, names[i], {
          weight: 'bold',
          size: 15,
          fill: COL_SHAPE,
        })
      );
    });
  }
  // 表示名(D/E/F等)→内部キー(A/B/C 位置)
  const keyMap = (side: string): Record<string, string> => {
    const names = vn[side];
    const map: Record<string, string> = {};
    ['A', 'B', 'C'].forEach((k, i) => {
      map[names[i]] = k;
    });
    return map;
  };
  for (const t of img.sideTicks || []) {
    const P = tri[t.tri],
      mp = keyMap(t.tri);
    parts.push(tickMarks(P[mp[t.side[0]]], P[mp[t.side[1]]], t.n));
  }
  const nbr: Record<string, [string, string]> = {
    A: ['B', 'C'],
    B: ['A', 'C'],
    C: ['A', 'B'],
  };
  for (const m of img.angleMarks || []) {
    const P = tri[m.tri],
      mp = keyMap(m.tri),
      key = mp[m.at],
      v = P[key],
      nb = nbr[key];
    for (let k = 0; k < m.n; k++)
      parts.push(angleArc(v, P[nb[0]], P[nb[1]], 13 + k * 5).path);
  }
  // 辺の長さラベル（side は表示名2文字。例 "AB" / "EF"）
  for (const s of img.sideLabels || []) {
    const P = tri[s.tri],
      mp = keyMap(s.tri);
    const a = P[mp[s.side[0]]],
      b = P[mp[s.side[1]]];
    const cen: [number, number] = [
      (P.A[0] + P.B[0] + P.C[0]) / 3,
      (P.A[1] + P.B[1] + P.C[1]) / 3,
    ];
    const m: [number, number] = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const d = [m[0] - cen[0], m[1] - cen[1]],
      l = Math.hypot(d[0], d[1]) || 1;
    parts.push(
      svgText(m[0] + (d[0] / l) * 15, m[1] + (d[1] / l) * 15, s.text, {
        size: 12,
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

// ---------- 作図 ----------
function arcCenter(
  c: [number, number],
  r: number,
  a1: number,
  a2: number
): string {
  // a1→a2 の短い方の弧（minor arc）を描く
  const d = ((((a2 - a1) % 360) + 540) % 360) - 180; // -180..180
  const a2adj = a1 + d;
  const s: [number, number] = [
    c[0] + r * Math.cos(rad(a1)),
    c[1] - r * Math.sin(rad(a1)),
  ];
  const e: [number, number] = [
    c[0] + r * Math.cos(rad(a2adj)),
    c[1] - r * Math.sin(rad(a2adj)),
  ];
  const sweep = d > 0 ? 1 : 0;
  return `<path d="M${s[0].toFixed(1)},${s[1].toFixed(1)} A${r},${r} 0 0 ${sweep} ${e[0].toFixed(1)},${e[1].toFixed(1)}" fill="none" stroke="${COL_ANGLE}" stroke-width="1.6"/>`;
}
function angDeg(c: [number, number], p: [number, number]): number {
  return (Math.atan2(-(p[1] - c[1]), p[0] - c[0]) * 180) / Math.PI;
}
// 半径の等しい2円(中心c1,c2・半径r)の交点。pick='far'/'near' は基準点 ref からの遠近で選ぶ。
function circInter(
  c1: [number, number],
  c2: [number, number],
  r: number,
  ref: [number, number],
  pick: 'far' | 'near'
): [number, number] {
  const dx = c2[0] - c1[0],
    dy = c2[1] - c1[1],
    dd = Math.hypot(dx, dy);
  const a = dd / 2; // r1=r2
  const h = Math.sqrt(Math.max(0, r * r - a * a));
  const mx = c1[0] + (a * dx) / dd,
    my = c1[1] + (a * dy) / dd;
  const ox = (-dy / dd) * h,
    oy = (dx / dd) * h;
  const i1: [number, number] = [mx + ox, my + oy],
    i2: [number, number] = [mx - ox, my - oy];
  const d1 = Math.hypot(i1[0] - ref[0], i1[1] - ref[1]),
    d2 = Math.hypot(i2[0] - ref[0], i2[1] - ref[1]);
  return pick === 'far' ? (d1 > d2 ? i1 : i2) : d1 < d2 ? i1 : i2;
}
// 中心cから点ptを通る小さな弧（±span度）
function _arcThrough(
  c: [number, number],
  r: number,
  pt: [number, number],
  span = 24
): string {
  const a = angDeg(c, pt);
  return arcCenter(c, r, a - span, a + span);
}
function buildConstruction(img: any): string {
  const parts: string[] = [];
  const type = img.ctype;
  if (type === 'perp-bisector') {
    const A: [number, number] = [120, 210],
      B: [number, number] = [260, 210];
    const mx = (A[0] + B[0]) / 2,
      half = (B[0] - A[0]) / 2,
      r = 96,
      hh = Math.sqrt(r * r - half * half);
    const top: [number, number] = [mx, 210 - hh],
      bot: [number, number] = [mx, 210 + hh];
    parts.push(line(A, B));
    // A,B 中心の弧（上下の交点 top/bot を通す）
    parts.push(arcCenter(A, r, angDeg(A, bot), angDeg(A, top)));
    parts.push(arcCenter(B, r, angDeg(B, top), angDeg(B, bot)));
    if (img.showLine)
      parts.push(
        `<line x1="${mx}" y1="${(top[1] - 26).toFixed(1)}" x2="${mx}" y2="${(bot[1] + 26).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2" stroke-dasharray="6 4"/>`
      );
    parts.push(
      `<circle cx="${A[0]}" cy="${A[1]}" r="2.5" fill="${COL_SHAPE}"/><circle cx="${B[0]}" cy="${B[1]}" r="2.5" fill="${COL_SHAPE}"/>`
    );
    parts.push(
      svgText(A[0] - 6, A[1] + 16, 'A', {
        weight: 'bold',
        size: 15,
        fill: COL_SHAPE,
      })
    );
    parts.push(
      svgText(B[0] + 6, B[1] + 16, 'B', {
        weight: 'bold',
        size: 15,
        fill: COL_SHAPE,
      })
    );
  } else if (type === 'angle-bisector') {
    const O: [number, number] = [96, 254];
    const a1 = 0,
      a2 = 56,
      L = 220;
    parts.push(
      line(O, [O[0] + L * Math.cos(rad(a1)), O[1] - L * Math.sin(rad(a1))])
    );
    parts.push(
      line(O, [O[0] + L * Math.cos(rad(a2)), O[1] - L * Math.sin(rad(a2))])
    );
    const rr = 70;
    const P1: [number, number] = [
      O[0] + rr * Math.cos(rad(a1)),
      O[1] - rr * Math.sin(rad(a1)),
    ]; // 下辺の交点 Q
    const P2: [number, number] = [
      O[0] + rr * Math.cos(rad(a2)),
      O[1] - rr * Math.sin(rad(a2)),
    ]; // 上辺の交点 P
    // ① 2辺との交点 P,Q に小さな弧（印）
    parts.push(arcCenter(O, rr, a1 - 7, a1 + 7));
    parts.push(arcCenter(O, rr, a2 - 7, a2 + 7));
    // ② P,Q を中心に半径OP(=rr)の弧。交点は O と R。OとRの間を結ぶ弧にすると
    //    垂直二等分線・垂線と同じ「向かい合うレンズ形」になる。
    const R = circInter(P1, P2, rr, O, 'far');
    parts.push(arcCenter(P1, rr, angDeg(P1, O), angDeg(P1, R)));
    parts.push(arcCenter(P2, rr, angDeg(P2, R), angDeg(P2, O)));
    if (img.showLine)
      parts.push(
        `<line x1="${O[0]}" y1="${O[1]}" x2="${(O[0] + (Math.hypot(R[0] - O[0], R[1] - O[1]) + 70) * Math.cos(rad((a1 + a2) / 2))).toFixed(1)}" y2="${(O[1] - (Math.hypot(R[0] - O[0], R[1] - O[1]) + 70) * Math.sin(rad((a1 + a2) / 2))).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2" stroke-dasharray="6 4"/>`
      );
    parts.push(
      `<circle cx="${O[0]}" cy="${O[1]}" r="2.5" fill="${COL_SHAPE}"/>`
    );
    parts.push(
      svgText(O[0] - 14, O[1] + 4, 'O', {
        weight: 'bold',
        size: 15,
        fill: COL_SHAPE,
      })
    );
  } else {
    // perpendicular: 直線上の点Pでの垂線
    const y = 246,
      P: [number, number] = [180, y];
    parts.push(line([40, y], [320, y]));
    const d = 58;
    const Lp: [number, number] = [P[0] - d, y],
      Rp: [number, number] = [P[0] + d, y];
    const r = 92;
    const up = circInter(Lp, Rp, r, [P[0], y - 300], 'near'); // 上の交点
    const dn = circInter(Lp, Rp, r, [P[0], y + 300], 'near'); // 下の交点
    // Lp,Rp の弧を、上下の交点を通る範囲で描く
    parts.push(arcCenter(Lp, r, angDeg(Lp, dn), angDeg(Lp, up)));
    parts.push(arcCenter(Rp, r, angDeg(Rp, up), angDeg(Rp, dn)));
    if (img.showLine)
      parts.push(
        `<line x1="${P[0]}" y1="${(up[1] - 24).toFixed(1)}" x2="${P[0]}" y2="${(dn[1] + 10).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2" stroke-dasharray="6 4"/>`
      );
    parts.push(
      `<circle cx="${Lp[0]}" cy="${y}" r="2.3" fill="${COL_SHAPE}"/><circle cx="${Rp[0]}" cy="${y}" r="2.3" fill="${COL_SHAPE}"/>`
    );
    parts.push(`<circle cx="${P[0]}" cy="${y}" r="2.5" fill="${COL_SHAPE}"/>`);
    parts.push(
      svgText(P[0] - 14, y + 17, 'P', {
        weight: 'bold',
        size: 15,
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

// ---------- 図形の移動 ----------
function buildMovement(img: any): string {
  const type = img.mtype;
  const base = triLocalPts([70, 60, 50]);
  const parts: string[] = [];
  const drawTri = (
    P: Record<string, [number, number]>,
    dashed: boolean,
    label?: string[]
  ) => {
    parts.push(
      `<polygon points="${['A', 'B', 'C'].map((k) => `${P[k][0].toFixed(1)},${P[k][1].toFixed(1)}`).join(' ')}" fill="${dashed ? 'none' : COL_FILL}" stroke="${dashed ? COL_HID : COL_SHAPE}" stroke-width="2.2"${dashed ? ' stroke-dasharray="6 4"' : ''} stroke-linejoin="round"/>`
    );
    if (label) {
      const cen: [number, number] = [
        (P.A[0] + P.B[0] + P.C[0]) / 3,
        (P.A[1] + P.B[1] + P.C[1]) / 3,
      ];
      ['A', 'B', 'C'].forEach((k, i) => {
        if (label[i])
          parts.push(
            svgText(
              P[k][0] + (P[k][0] - cen[0]) * 0.28,
              P[k][1] + (P[k][1] - cen[1]) * 0.28,
              label[i],
              { size: 13, weight: 'bold', fill: dashed ? COL_HID : COL_SHAPE }
            )
          );
      });
    }
  };
  if (type === 'translation') {
    const P1 = fitPts(base, 120, 170, 120, 130);
    const off: [number, number] = [120, 60];
    const P2: Record<string, [number, number]> = {};
    for (const k of ['A', 'B', 'C'])
      P2[k] = [P1[k][0] + off[0], P1[k][1] + off[1]];
    drawTri(P1, false, ['A', 'B', 'C']);
    drawTri(P2, true, ["A'", "B'", "C'"]);
    parts.push(
      `<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${COL_SHAPE}"/></marker></defs>`
    );
    parts.push(
      `<line x1="${P1.A[0].toFixed(1)}" y1="${P1.A[1].toFixed(1)}" x2="${(P2.A[0] - 4).toFixed(1)}" y2="${(P2.A[1] - 2).toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="1.6" marker-end="url(#ar)"/>`
    );
  } else if (type === 'reflection') {
    const axisX = 184;
    const P1 = fitPts(base, 110, 185, 120, 150);
    const P2: Record<string, [number, number]> = {};
    for (const k of ['A', 'B', 'C']) P2[k] = [2 * axisX - P1[k][0], P1[k][1]];
    parts.push(
      `<line x1="${axisX}" y1="40" x2="${axisX}" y2="320" stroke="${COL_HID}" stroke-width="1.8" stroke-dasharray="7 5"/>`
    );
    drawTri(P1, false, ['A', 'B', 'C']);
    drawTri(P2, true, ["A'", "B'", "C'"]);
    parts.push(svgText(axisX + 12, 52, 'ℓ', { size: 14, fill: COL_TEXT }));
  } else {
    // rotation 180°（点対称）
    const O: [number, number] = [184, 188];
    const P1 = fitPts(base, 116, 130, 110, 110);
    const P2: Record<string, [number, number]> = {};
    for (const k of ['A', 'B', 'C'])
      P2[k] = [2 * O[0] - P1[k][0], 2 * O[1] - P1[k][1]];
    drawTri(P1, false, ['A', 'B', 'C']);
    drawTri(P2, true, ["A'", "B'", "C'"]);
    parts.push(
      `<circle cx="${O[0]}" cy="${O[1]}" r="2.6" fill="${COL_SHAPE}"/>`
    );
    parts.push(
      svgText(O[0] + 10, O[1] + 12, 'O', {
        size: 14,
        weight: 'bold',
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

// ===== 相似: 面積比・体積比の図 =====
type Pt = [number, number];
const COL_WATER = '#CFE5F7'; // 水の塗り
function lerp(a: Pt, b: Pt, t: number): Pt {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}
function lineIntersect(p1: Pt, p2: Pt, p3: Pt, p4: Pt): Pt {
  const d =
    (p1[0] - p2[0]) * (p3[1] - p4[1]) - (p1[1] - p2[1]) * (p3[0] - p4[0]);
  const a = p1[0] * p2[1] - p1[1] * p2[0],
    b = p3[0] * p4[1] - p3[1] * p4[0];
  return [
    (a * (p3[0] - p4[0]) - (p1[0] - p2[0]) * b) / d,
    (a * (p3[1] - p4[1]) - (p1[1] - p2[1]) * b) / d,
  ];
}
// 平行を示す小さなくさび（ほぼ水平な線の中点に置く・右向き）
function chevron(mx: number, my: number): string {
  return `<path d="M${(mx - 3).toFixed(1)},${(my - 5).toFixed(1)} l6,5 l-6,5" fill="none" stroke="${COL_SHAPE}" stroke-width="1.6"/>`;
}
function polyPath(
  pts: Pt[],
  fill: string,
  stroke = COL_SHAPE,
  sw = 2.5
): string {
  return `<polygon points="${pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`;
}
// 頂点名を重心の反対方向に少し離して置く
function vlabel(v: Pt, cen: Pt, name: string, off = 16): string {
  const d = [v[0] - cen[0], v[1] - cen[1]],
    len = Math.hypot(d[0], d[1]) || 1;
  return svgText(v[0] + (d[0] / len) * off, v[1] + (d[1] / len) * off, name, {
    weight: 'bold',
    size: 15,
    fill: COL_SHAPE,
  });
}

// ---------- 相似な立体を2つ並べる（体積比・表面積比） ----------
function drawSolidAt(
  shape: string,
  cx: number,
  baseY: number,
  s: number
): string {
  let out = '';
  if (shape === 'cylinder') {
    const rx = 42 * s,
      ry = 12 * s,
      topY = baseY - 150 * s;
    out += `<path d="M${(cx - rx).toFixed(1)},${topY.toFixed(1)} L${(cx - rx).toFixed(1)},${baseY} A${rx.toFixed(1)},${ry.toFixed(1)} 0 0 0 ${(cx + rx).toFixed(1)},${baseY} L${(cx + rx).toFixed(1)},${topY.toFixed(1)} Z" fill="${COL_FILL}" stroke="none"/>`;
    out += `<path d="M${(cx - rx).toFixed(1)},${topY.toFixed(1)} L${(cx - rx).toFixed(1)},${baseY} M${(cx + rx).toFixed(1)},${topY.toFixed(1)} L${(cx + rx).toFixed(1)},${baseY}" stroke="${COL_SHAPE}" stroke-width="2.2"/>`;
    out +=
      ellipseHalf(cx, baseY, rx, ry, true, false) +
      ellipseHalf(cx, baseY, rx, ry, false, true);
    out += `<ellipse cx="${cx}" cy="${topY.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.2"/>`;
  } else if (shape === 'cuboid') {
    const fw = 84 * s,
      fh = 70 * s,
      odx = 34 * s,
      ody = -26 * s;
    const ox = cx - (fw + odx) / 2,
      oy = baseY;
    const A: Pt = [ox, oy],
      B: Pt = [ox + fw, oy],
      C: Pt = [ox + fw, oy - fh],
      D: Pt = [ox, oy - fh];
    const off = (p: Pt): Pt => [p[0] + odx, p[1] + ody];
    const A2 = off(A),
      B2 = off(B),
      C2 = off(C),
      D2 = off(D);
    out += polyPath([A, B, C, D], COL_FILL, 'none', 0);
    out +=
      polyPath([D, C, C2, D2], '#DCE6F0', 'none', 0) +
      polyPath([B, C, C2, B2], '#E8EEF5', 'none', 0);
    out += line(A, A2, true) + line(A2, B2, true) + line(A2, D2, true);
    for (const [p, q] of [
      [A, B],
      [B, C],
      [C, D],
      [D, A],
      [B, B2],
      [C, C2],
      [D, D2],
      [B2, C2],
      [C2, D2],
    ] as [Pt, Pt][])
      out += line(p, q);
  } else if (shape === 'tri-pyramid') {
    const bw = 96 * s,
      hgt = 150 * s,
      odx = 30 * s,
      ody = -18 * s;
    const B: Pt = [cx - bw / 2, baseY],
      C: Pt = [cx + bw / 2, baseY];
    const D: Pt = [cx + odx, baseY + ody],
      apex: Pt = [cx - bw * 0.08, baseY - hgt];
    out += polyPath([apex, B, C], COL_FILL, 'none', 0);
    out += line(B, D, true) + line(C, D, true) + line(apex, D, true);
    out += line(apex, B) + line(apex, C) + line(B, C);
  } else {
    // cone
    const rx = 46 * s,
      ry = 13 * s,
      apexY = baseY - 152 * s;
    const apex: Pt = [cx, apexY];
    out += `<path d="M${apex[0]},${apex[1].toFixed(1)} L${(cx - rx).toFixed(1)},${baseY} A${rx.toFixed(1)},${ry.toFixed(1)} 0 0 0 ${(cx + rx).toFixed(1)},${baseY} Z" fill="${COL_FILL}" stroke="none"/>`;
    out +=
      ellipseHalf(cx, baseY, rx, ry, true, false) +
      ellipseHalf(cx, baseY, rx, ry, false, true);
    out += line(apex, [cx - rx, baseY]) + line(apex, [cx + rx, baseY]);
  }
  return out;
}
function buildTwoSolids(img: any): string {
  const shape = img.shape || 'cone';
  const ratio: number[] = img.ratio || [2, 3];
  const mx = Math.max(...ratio);
  const sL = Math.max(0.45, ratio[0] / mx),
    sR = Math.max(0.45, ratio[1] / mx);
  const baseY = 278,
    cxL = 104,
    cxR = 262;
  const names: string[] = img.names || ['P', 'Q'];
  const parts: string[] = [];
  parts.push(drawSolidAt(shape, cxL, baseY, sL));
  parts.push(drawSolidAt(shape, cxR, baseY, sR));
  parts.push(
    svgText(cxL, baseY + 26, names[0], {
      weight: 'bold',
      size: 16,
      fill: COL_SHAPE,
    })
  );
  parts.push(
    svgText(cxR, baseY + 26, names[1], {
      weight: 'bold',
      size: 16,
      fill: COL_SHAPE,
    })
  );
  if (img.ratioLabel)
    parts.push(
      svgText(SIZE / 2, 40, img.ratioLabel, { size: 14, fill: COL_TEXT })
    );
  return wrap(parts.join(''));
}

// ---------- 三角形を底辺に平行な線で分割（面積比） ----------
function buildTriangleParallel(img: any): string {
  const A: Pt = [176, 74],
    B: Pt = [56, 278],
    C: Pt = [302, 278];
  const cen: Pt = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
  const vn: string[] = img.vertexNames || ['A', 'B', 'C'];
  const cuts: number[] = (img.cuts || [0.5])
    .slice()
    .sort((a: number, b: number) => a - b); // A→底辺の割合
  const onAB = (f: number): Pt => lerp(A, B, f);
  const onAC = (f: number): Pt => lerp(A, C, f);
  const parts: string[] = [];
  // 帯ごとに薄く塗り分け（任意の regionFills 指定があれば優先）
  const bounds = [0, ...cuts, 1];
  const regionFills: string[] = img.regionFills || [];
  for (let i = 0; i < bounds.length - 1; i++) {
    const f0 = bounds[i],
      f1 = bounds[i + 1];
    const quad: Pt[] =
      f0 === 0
        ? [A, onAB(f1), onAC(f1)]
        : [onAB(f0), onAB(f1), onAC(f1), onAC(f0)];
    if (regionFills[i]) parts.push(polyPath(quad, regionFills[i], 'none', 0));
  }
  parts.push(polyPath([A, B, C], regionFills.length ? 'none' : COL_FILL));
  // 平行線とくさび印
  parts.push(chevron((B[0] + C[0]) / 2, B[1]));
  for (const f of cuts) {
    const L = onAB(f),
      R = onAC(f);
    parts.push(line(L, R));
    parts.push(chevron((L[0] + R[0]) / 2, L[1]));
  }
  // 頂点名
  parts.push(vlabel(A, cen, vn[0], 18));
  parts.push(vlabel(B, cen, vn[1], 18));
  parts.push(vlabel(C, cen, vn[2], 18));
  // 分点名（cut ごとに [左, 右]）
  const ptNames: string[][] = img.pointNames || [];
  cuts.forEach((f, i) => {
    if (!ptNames[i]) return;
    const L = onAB(f),
      R = onAC(f);
    parts.push(
      svgText(L[0] - 14, L[1], ptNames[i][0], {
        weight: 'bold',
        size: 14,
        fill: COL_SHAPE,
      })
    );
    parts.push(
      svgText(R[0] + 14, R[1], ptNames[i][1], {
        weight: 'bold',
        size: 14,
        fill: COL_SHAPE,
      })
    );
  });
  // 帯の中央に領域ラベル（⑦④ など）
  const regionLabels: string[] = img.regionLabels || [];
  for (let i = 0; i < bounds.length - 1; i++) {
    if (!regionLabels[i]) continue;
    const f0 = bounds[i],
      f1 = bounds[i + 1];
    const fm = (f0 + f1) / 2;
    const m: Pt = [
      (onAB(fm)[0] + onAC(fm)[0]) / 2,
      (onAB(fm)[1] + onAC(fm)[1]) / 2,
    ];
    parts.push(
      svgText(m[0], m[1], regionLabels[i], {
        size: 16,
        fill: COL_TEXT,
        weight: 'bold',
      })
    );
  }
  // 辺の長さラベル・等長印（名前は頂点名 + 分点名で参照）
  const pmapTP: Record<string, Pt> = { [vn[0]]: A, [vn[1]]: B, [vn[2]]: C };
  ptNames.forEach((nm, i) => {
    if (!nm) return;
    pmapTP[nm[0]] = onAB(cuts[i]);
    pmapTP[nm[1]] = onAC(cuts[i]);
  });
  for (const t of img.ticks || [])
    parts.push(tickMarks(pmapTP[t.seg[0]], pmapTP[t.seg[1]], t.n || 1));
  for (const s of img.segLabels || []) {
    const a = pmapTP[s.seg[0]],
      b = pmapTP[s.seg[1]],
      m: Pt = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const d = [m[0] - cen[0], m[1] - cen[1]],
      l = Math.hypot(d[0], d[1]) || 1;
    parts.push(
      svgText(m[0] + (d[0] / l) * 15, m[1] + (d[1] / l) * 15, s.text, {
        size: 12,
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

// ---------- 台形＋対角線（面積比） ----------
function buildTrapezoidDiagonals(img: any): string {
  const topLen = img.topLen ?? 1,
    botLen = img.botLen ?? 2;
  const mx = Math.max(topLen, botLen),
    fullW = 216;
  const topW = (fullW * topLen) / mx,
    botW = (fullW * botLen) / mx;
  const cx = SIZE / 2,
    topY = 100,
    botY = 268;
  const A: Pt = [cx - topW / 2, topY],
    D: Pt = [cx + topW / 2, topY];
  const B: Pt = [cx - botW / 2, botY],
    C: Pt = [cx + botW / 2, botY];
  const O = lineIntersect(A, C, B, D);
  const cen: Pt = [cx, (topY + botY) / 2];
  const vn: string[] = img.vertexNames || ['A', 'B', 'C', 'D'];
  const parts: string[] = [];
  parts.push(polyPath([A, D, C, B], COL_FILL));
  parts.push(line(A, C));
  parts.push(line(B, D));
  parts.push(
    `<circle cx="${O[0].toFixed(1)}" cy="${O[1].toFixed(1)}" r="2.6" fill="${COL_SHAPE}"/>`
  );
  parts.push(
    svgText(O[0] + 12, O[1], img.intersectName || 'O', {
      weight: 'bold',
      size: 14,
      fill: COL_SHAPE,
    })
  );
  parts.push(vlabel(A, cen, vn[0]));
  parts.push(vlabel(B, cen, vn[1]));
  parts.push(vlabel(C, cen, vn[2]));
  parts.push(vlabel(D, cen, vn[3]));
  if (img.topLabel)
    parts.push(
      svgText(cx, topY - 14, img.topLabel, { size: 13, fill: COL_SHAPE })
    );
  if (img.botLabel)
    parts.push(
      svgText(cx, botY + 16, img.botLabel, { size: 13, fill: COL_SHAPE })
    );
  const rl = img.regionLabels || {};
  if (rl.top)
    parts.push(
      svgText(cx, (A[1] + O[1]) / 2, rl.top, {
        size: 13,
        fill: COL_TEXT,
        weight: 'bold',
      })
    );
  if (rl.bottom)
    parts.push(
      svgText(cx, (B[1] + O[1]) / 2, rl.bottom, {
        size: 13,
        fill: COL_TEXT,
        weight: 'bold',
      })
    );
  if (rl.left)
    parts.push(
      svgText((A[0] + B[0]) / 2 + 16, cen[1], rl.left, {
        size: 13,
        fill: COL_TEXT,
        weight: 'bold',
      })
    );
  if (rl.right)
    parts.push(
      svgText((C[0] + D[0]) / 2 - 16, cen[1], rl.right, {
        size: 13,
        fill: COL_TEXT,
        weight: 'bold',
      })
    );
  return wrap(parts.join(''));
}

// ---------- 円錐の切断 / 水の入った円錐容器（体積比） ----------
function buildConeCut(img: any): string {
  const cx = SIZE / 2,
    rx = 86,
    ry = 24;
  const parts: string[] = [];
  if (img.orientation === 'down') {
    // 容器（開口が上・頂点が下）。水は頂点側にたまり小さな相似円錐になる。
    const rimY = 96,
      apexY = 290;
    const apex: Pt = [cx, apexY];
    const wt = img.waterT ?? 0.6;
    const surfY = apexY + (rimY - apexY) * wt,
      wr = rx * wt,
      wyr = ry * wt;
    parts.push(
      `<path d="M${apex[0]},${apex[1]} L${(cx - rx).toFixed(1)},${rimY} A${rx},${ry} 0 0 0 ${(cx + rx).toFixed(1)},${rimY} Z" fill="${COL_FILL}" stroke="none"/>`
    );
    // 水（小円錐）
    parts.push(
      `<path d="M${apex[0]},${apex[1]} L${(cx - wr).toFixed(1)},${surfY.toFixed(1)} A${wr.toFixed(1)},${wyr.toFixed(1)} 0 0 0 ${(cx + wr).toFixed(1)},${surfY.toFixed(1)} Z" fill="${COL_WATER}" stroke="none"/>`
    );
    parts.push(
      ellipseHalf(cx, surfY, wr, wyr, true, false) +
        ellipseHalf(cx, surfY, wr, wyr, false, true)
    );
    // 容器の輪郭
    parts.push(line(apex, [cx - rx, rimY]));
    parts.push(line(apex, [cx + rx, rimY]));
    parts.push(
      `<ellipse cx="${cx}" cy="${rimY}" rx="${rx}" ry="${ry}" fill="none" stroke="${COL_SHAPE}" stroke-width="2.4"/>`
    );
    if (img.hLabel) {
      parts.push(line(apex, [cx, rimY], true));
      parts.push(
        svgText(cx + 10, (apexY + rimY) / 2, img.hLabel, {
          size: 13,
          fill: COL_SHAPE,
        })
      );
    }
    if (img.rLabel) {
      parts.push(line([cx, rimY], [cx + rx, rimY]));
      parts.push(
        svgText(cx + rx / 2, rimY - 10, img.rLabel, {
          size: 13,
          fill: COL_SHAPE,
        })
      );
    }
    if (img.waterDepthLabel)
      parts.push(
        svgText(cx - wr - 10, (apexY + surfY) / 2, img.waterDepthLabel, {
          size: 13,
          fill: '#2563EB',
          anchor: 'end',
        })
      );
    return wrap(parts.join(''));
  }
  // 切断（頂点が上・底面が下）。平行な平面で小円錐＋円錐台に分ける。
  const apexY = 72,
    baseY = 290;
  const apex: Pt = [cx, apexY];
  const t = img.cutT ?? 0.5; // 頂点から底面までの割合
  const cutY = apexY + (baseY - apexY) * t,
    cr = rx * t,
    cyr = ry * t;
  parts.push(
    `<path d="M${apex[0]},${apex[1]} L${(cx - rx).toFixed(1)},${baseY} A${rx},${ry} 0 0 0 ${(cx + rx).toFixed(1)},${baseY} Z" fill="${COL_FILL}" stroke="none"/>`
  );
  parts.push(
    `<path d="M${apex[0]},${apex[1]} L${(cx - cr).toFixed(1)},${cutY.toFixed(1)} A${cr.toFixed(1)},${cyr.toFixed(1)} 0 0 0 ${(cx + cr).toFixed(1)},${cutY.toFixed(1)} Z" fill="#DCE6F0" stroke="none"/>`
  );
  parts.push(
    ellipseHalf(cx, baseY, rx, ry, true, false) +
      ellipseHalf(cx, baseY, rx, ry, false, true)
  );
  parts.push(
    ellipseHalf(cx, cutY, cr, cyr, true, false) +
      ellipseHalf(cx, cutY, cr, cyr, false, true)
  );
  parts.push(line(apex, [cx - rx, baseY]));
  parts.push(line(apex, [cx + rx, baseY]));
  if (img.topHLabel || img.botHLabel) parts.push(line(apex, [cx, baseY], true));
  if (img.topHLabel)
    parts.push(
      svgText(cx + 8, (apexY + cutY) / 2, img.topHLabel, {
        size: 12,
        fill: COL_SHAPE,
        anchor: 'start',
      })
    );
  if (img.botHLabel)
    parts.push(
      svgText(cx + 8, (cutY + baseY) / 2, img.botHLabel, {
        size: 12,
        fill: COL_SHAPE,
        anchor: 'start',
      })
    );
  if (img.slantLabel) {
    const sp = lerp(apex, [cx + rx, baseY], 0.66);
    parts.push(
      svgText(sp[0] + 12, sp[1], img.slantLabel, {
        size: 12,
        fill: COL_SHAPE,
        anchor: 'start',
      })
    );
  }
  if (img.topRLabel)
    parts.push(
      svgText(cx - cr / 2, cutY - 8, img.topRLabel, {
        size: 12,
        fill: COL_SHAPE,
      })
    );
  if (img.rLabel) {
    parts.push(line([cx, baseY], [cx + rx, baseY]));
    parts.push(
      svgText(cx + rx / 2, baseY + 16, img.rLabel, {
        size: 13,
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

// ---------- 三角錐を底面に平行な平面で切断（体積比） ----------
function buildTriPyramidCut(img: any): string {
  const O: Pt = [182, 64];
  const B: Pt = [66, 252],
    C: Pt = [274, 252],
    A: Pt = [150, 214]; // 底面 ABC（A=奥）
  const t = img.cutT ?? 1 / 3; // O からの割合（OD:OA = t:1）
  const D = lerp(O, A, t),
    E = lerp(O, B, t),
    F = lerp(O, C, t);
  const vn: string[] = img.vertexNames || ['O', 'A', 'B', 'C'];
  const cn: string[] = img.cutNames || ['D', 'E', 'F'];
  const parts: string[] = [];
  // 上の小三角錐を薄く塗る
  parts.push(polyPath([O, E, F], '#DCE6F0', 'none', 0));
  // 底面 + 稜線（奥 A まわりは破線）
  parts.push(line(B, C));
  parts.push(line(A, B, true));
  parts.push(line(A, C, true));
  parts.push(line(O, B));
  parts.push(line(O, C));
  parts.push(line(O, A, true));
  // 切断面 DEF
  parts.push(line(E, F));
  parts.push(line(D, E, true));
  parts.push(line(D, F, true));
  // 頂点名
  parts.push(
    svgText(O[0], O[1] - 12, vn[0], {
      weight: 'bold',
      size: 14,
      fill: COL_SHAPE,
    })
  );
  parts.push(
    svgText(A[0], A[1] - 12, vn[1], {
      weight: 'bold',
      size: 13,
      fill: COL_SHAPE,
    })
  );
  parts.push(
    svgText(B[0] - 12, B[1] + 8, vn[2], {
      weight: 'bold',
      size: 14,
      fill: COL_SHAPE,
    })
  );
  parts.push(
    svgText(C[0] + 12, C[1] + 8, vn[3], {
      weight: 'bold',
      size: 14,
      fill: COL_SHAPE,
    })
  );
  parts.push(svgText(D[0] - 12, D[1], cn[0], { size: 12, fill: COL_SHAPE }));
  parts.push(svgText(E[0] - 12, E[1], cn[1], { size: 12, fill: COL_SHAPE }));
  parts.push(svgText(F[0] + 12, F[1], cn[2], { size: 12, fill: COL_SHAPE }));
  return wrap(parts.join(''));
}

// ---------- 円周角・中心角・接線（円の単元） ----------
function buildCircleAngles(img: any): string {
  let O: Pt = [SIZE / 2, SIZE / 2 - 2];
  let R = img.r || 116;
  // 外部点があるとき、円＋外部点 P がはみ出さないよう中心と半径を調整
  if (img.external) {
    const dist = img.external.dist ?? 1.5,
      a = img.external.at ?? 180;
    R = Math.min(img.r || 112, (SIZE - 76) / (dist + 1));
    const dir: Pt = [Math.cos(rad(a)), -Math.sin(rad(a))];
    O = [
      SIZE / 2 - ((dist - 1) / 2) * R * dir[0],
      SIZE / 2 - 2 - ((dist - 1) / 2) * R * dir[1],
    ];
  }
  const parts: string[] = [];
  const pmap: Record<string, Pt> = {};
  const ptDeg: Record<string, number> = {};
  for (const p of img.points || []) {
    const c: Pt = [
      O[0] + R * Math.cos(rad(p.at)),
      O[1] - R * Math.sin(rad(p.at)),
    ];
    pmap[p.name] = c;
    ptDeg[p.name] = p.at;
  }
  if (img.center) pmap.O = O;
  // 外部点からの接線
  let ext: { P: Pt; T1: Pt; T2: Pt; tn: string[] } | null = null;
  if (img.external) {
    const a = img.external.at ?? 180,
      d = R * (img.external.dist ?? 1.5);
    const P: Pt = [O[0] + d * Math.cos(rad(a)), O[1] - d * Math.sin(rad(a))];
    const th = (Math.acos(Math.min(1, R / d)) * 180) / Math.PI;
    const T1: Pt = [
      O[0] + R * Math.cos(rad(a + th)),
      O[1] - R * Math.sin(rad(a + th)),
    ];
    const T2: Pt = [
      O[0] + R * Math.cos(rad(a - th)),
      O[1] - R * Math.sin(rad(a - th)),
    ];
    const tn: string[] = img.external.tangentNames || ['A', 'B'];
    pmap[img.external.name || 'P'] = P;
    pmap[tn[0]] = T1;
    pmap[tn[1]] = T2;
    ext = { P, T1, T2, tn };
  }
  for (const it of img.intersects || []) {
    pmap[it.name] = lineIntersect(
      pmap[it.chord1[0]],
      pmap[it.chord1[1]],
      pmap[it.chord2[0]],
      pmap[it.chord2[1]]
    );
  }
  // 円
  parts.push(
    `<circle cx="${O[0]}" cy="${O[1]}" r="${R}" fill="${img.noFill ? 'none' : COL_FILL}" stroke="${COL_SHAPE}" stroke-width="2.4"/>`
  );
  // 線分（弦・半径。"O"=中心）
  for (const s of img.segments || []) parts.push(line(pmap[s[0]], pmap[s[1]]));
  // 接線
  if (ext) {
    parts.push(line(ext.P, ext.T1));
    parts.push(line(ext.P, ext.T2));
    if (img.external.showRadii) {
      parts.push(line(O, ext.T1, true));
      parts.push(line(O, ext.T2, true));
      parts.push(rightAngleMark(ext.T1, O, ext.P, 11));
      parts.push(rightAngleMark(ext.T2, O, ext.P, 11));
    }
    parts.push(
      `<circle cx="${ext.P[0].toFixed(1)}" cy="${ext.P[1].toFixed(1)}" r="2.6" fill="${COL_SHAPE}"/>`
    );
    const pd: Pt = [ext.P[0] - O[0], ext.P[1] - O[1]],
      pl = Math.hypot(pd[0], pd[1]) || 1;
    parts.push(
      svgText(
        ext.P[0] + (pd[0] / pl) * 14,
        ext.P[1] + (pd[1] / pl) * 14,
        img.external.name || 'P',
        { weight: 'bold', size: 15, fill: COL_SHAPE }
      )
    );
    if (img.external.angleLabel) {
      const arc = angleArc(ext.P, ext.T1, ext.T2, 26);
      parts.push(arc.path);
      parts.push(
        svgText(
          ext.P[0] + 38 * Math.cos(arc.mid),
          ext.P[1] + 38 * Math.sin(arc.mid),
          img.external.angleLabel,
          { fill: COL_ANGLE, weight: 'bold', size: 16 }
        )
      );
    }
  }
  // 中心O
  if (img.center) {
    parts.push(
      `<circle cx="${O[0]}" cy="${O[1]}" r="2.6" fill="${COL_SHAPE}"/>`
    );
    parts.push(
      svgText(O[0] + (img.centerDx ?? -13), O[1] + (img.centerDy ?? 13), 'O', {
        weight: 'bold',
        size: 14,
        fill: COL_SHAPE,
      })
    );
  }
  // 弧の等長印
  for (const t of img.arcTicks || []) {
    const a1 = ptDeg[t.from],
      a2 = ptDeg[t.to];
    let mid = (a1 + a2) / 2;
    if ((((a2 - a1) % 360) + 360) % 360 > 180) mid += 180;
    const n = t.n || 1;
    for (let k = 0; k < n; k++) {
      const off = (k - (n - 1) / 2) * 6,
        ur: Pt = [Math.cos(rad(mid)), -Math.sin(rad(mid))],
        tg: Pt = [-ur[1], ur[0]];
      const c: Pt = [
        O[0] + R * ur[0] + tg[0] * off,
        O[1] + R * ur[1] + tg[1] * off,
      ];
      parts.push(
        `<line x1="${(c[0] - ur[0] * 5).toFixed(1)}" y1="${(c[1] - ur[1] * 5).toFixed(1)}" x2="${(c[0] + ur[0] * 5).toFixed(1)}" y2="${(c[1] + ur[1] * 5).toFixed(1)}" stroke="${COL_ANGLE}" stroke-width="2"/>`
      );
    }
  }
  // 角の弧＋ラベル（同一頂点に複数の角があるときはラベル半径をずらして重なり回避）
  const vUse: Record<string, number> = {};
  for (const an of img.angles || []) {
    const V = pmap[an.at],
      pf = pmap[an.from],
      pt2 = pmap[an.to];
    if (an.right) {
      parts.push(rightAngleMark(V, pf, pt2, 12));
      continue;
    }
    const rr = an.r || (an.at === 'O' ? 26 : 20);
    const arc = angleArc(V, pf, pt2, rr);
    parts.push(arc.path);
    for (let k = 1; k < (an.n || 1); k++)
      parts.push(angleArc(V, pf, pt2, rr + k * 5).path);
    if (an.label) {
      const u = vUse[an.at] || 0;
      vUse[an.at] = u + 1;
      const lr = rr + 16 + u * 18;
      parts.push(
        svgText(
          V[0] + lr * Math.cos(arc.mid),
          V[1] + lr * Math.sin(arc.mid),
          an.label,
          { fill: COL_ANGLE, weight: 'bold', size: 16 }
        )
      );
    }
  }
  // 線分ラベル（長さ）
  for (const s of img.segLabels || []) {
    const a = pmap[s.seg[0]],
      b = pmap[s.seg[1]],
      m: Pt = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const dir = [b[0] - a[0], b[1] - a[1]],
      L = Math.hypot(dir[0], dir[1]) || 1,
      nrm: Pt = [-dir[1] / L, dir[0] / L];
    const probe: Pt = [m[0] + nrm[0], m[1] + nrm[1]];
    const sign =
      Math.hypot(probe[0] - O[0], probe[1] - O[1]) >=
      Math.hypot(m[0] - O[0], m[1] - O[1])
        ? 1
        : -1;
    parts.push(
      svgText(m[0] + nrm[0] * 13 * sign, m[1] + nrm[1] * 13 * sign, s.text, {
        size: 12,
        fill: COL_SHAPE,
      })
    );
  }
  // 交点ラベル
  for (const it of img.intersects || []) {
    const c = pmap[it.name];
    parts.push(
      `<circle cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="2.4" fill="${COL_SHAPE}"/>`
    );
    parts.push(
      svgText(c[0] + (it.dx ?? 10), c[1] + (it.dy ?? -8), it.name, {
        weight: 'bold',
        size: 13,
        fill: COL_SHAPE,
      })
    );
  }
  // 点ラベル（円周上＋接点）
  const labelPts: { name: string; c: Pt }[] = (img.points || []).map(
    (p: any) => ({ name: p.name, c: pmap[p.name] })
  );
  if (ext) {
    labelPts.push({ name: ext.tn[0], c: ext.T1 });
    labelPts.push({ name: ext.tn[1], c: ext.T2 });
  }
  for (const lp of labelPts) {
    const d = [lp.c[0] - O[0], lp.c[1] - O[1]],
      l = Math.hypot(d[0], d[1]) || 1;
    parts.push(
      `<circle cx="${lp.c[0].toFixed(1)}" cy="${lp.c[1].toFixed(1)}" r="2.2" fill="${COL_SHAPE}"/>`
    );
    parts.push(
      svgText(lp.c[0] + (d[0] / l) * 15, lp.c[1] + (d[1] / l) * 15, lp.name, {
        weight: 'bold',
        size: 14,
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

// ---------- 砂時計型（X字）: AB∥CD で対角線が交わる相似三角形 ----------
function buildHourglass(img: any): string {
  const TL: Pt = [88, 86],
    TR: Pt = [272, 86]; // 上の平行線
  const BL: Pt = [118, 292],
    BR: Pt = [242, 292]; // 下の平行線
  const P = lineIntersect(TL, BR, TR, BL); // 対角線の交点
  const nm = img.names || { tl: 'A', tr: 'B', bl: 'C', br: 'D' };
  const Pname = img.intersectName || 'P';
  const pmap: Record<string, Pt> = {
    [nm.tl]: TL,
    [nm.tr]: TR,
    [nm.bl]: BL,
    [nm.br]: BR,
    [Pname]: P,
  };
  const parts: string[] = [];
  // 上下の三角形を薄く塗る
  parts.push(polyPath([P, TL, TR], COL_FILL, 'none', 0));
  parts.push(polyPath([P, BR, BL], '#F3ECDD', 'none', 0));
  // バー・対角線
  parts.push(line(TL, TR));
  parts.push(line(BL, BR));
  parts.push(line(TL, BR));
  parts.push(line(TR, BL));
  parts.push(chevron((TL[0] + TR[0]) / 2, TL[1]));
  parts.push(chevron((BL[0] + BR[0]) / 2, BL[1]));
  parts.push(
    `<circle cx="${P[0].toFixed(1)}" cy="${P[1].toFixed(1)}" r="2.5" fill="${COL_SHAPE}"/>`
  );
  // 頂点名
  parts.push(
    svgText(TL[0] - 12, TL[1] - 8, nm.tl, {
      weight: 'bold',
      size: 14,
      fill: COL_SHAPE,
    })
  );
  parts.push(
    svgText(TR[0] + 12, TR[1] - 8, nm.tr, {
      weight: 'bold',
      size: 14,
      fill: COL_SHAPE,
    })
  );
  parts.push(
    svgText(BL[0] - 12, BL[1] + 10, nm.bl, {
      weight: 'bold',
      size: 14,
      fill: COL_SHAPE,
    })
  );
  parts.push(
    svgText(BR[0] + 12, BR[1] + 10, nm.br, {
      weight: 'bold',
      size: 14,
      fill: COL_SHAPE,
    })
  );
  parts.push(
    svgText(P[0] + 12, P[1] - 2, Pname, {
      weight: 'bold',
      size: 13,
      fill: COL_SHAPE,
    })
  );
  for (const s of img.segLabels || []) {
    const a = pmap[s.seg[0]],
      b = pmap[s.seg[1]],
      m: Pt = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const dir = [b[0] - a[0], b[1] - a[1]],
      L = Math.hypot(dir[0], dir[1]) || 1,
      nrm: Pt = [-dir[1] / L, dir[0] / L];
    parts.push(
      svgText(m[0] + nrm[0] * 13, m[1] + nrm[1] * 13, s.text, {
        size: 12,
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

// ---------- 平行線にはさまれた線分の比（横平行線を2本の横断線が貫く） ----------
function buildParallelSegments(img: any): string {
  const n = img.nLines || 3;
  const topY = 70,
    gap = (300 - topY) / (n - 1);
  const ys: number[] = [];
  for (let i = 0; i < n; i++) ys.push(topY + i * gap);
  const xL = 36,
    xR = SIZE - 36;
  // 2本の横断線（やや内向き）
  const leftTop = 96,
    leftBot = 150,
    rightTop = 268,
    rightBot = 214;
  const lx = (y: number) =>
    leftTop + ((y - topY) / (gap * (n - 1))) * (leftBot - leftTop);
  const rx = (y: number) =>
    rightTop + ((y - topY) / (gap * (n - 1))) * (rightBot - rightTop);
  const parts: string[] = [];
  for (let i = 0; i < n; i++) {
    parts.push(
      `<line x1="${xL}" y1="${ys[i].toFixed(1)}" x2="${xR}" y2="${ys[i].toFixed(1)}" stroke="${COL_SHAPE}" stroke-width="2.3"/>`
    );
    parts.push(chevron(xR - 30, ys[i]));
    if (img.lineNames && img.lineNames[i])
      parts.push(
        svgText(xR + 12, ys[i], img.lineNames[i], {
          size: 13,
          fill: COL_SHAPE,
          weight: 'bold',
        })
      );
  }
  // 横断線
  parts.push(line([lx(ys[0]), ys[0]], [lx(ys[n - 1]), ys[n - 1]]));
  parts.push(line([rx(ys[0]), ys[0]], [rx(ys[n - 1]), ys[n - 1]]));
  // 区間ラベル
  const leftLabels: string[] = img.leftLabels || [],
    rightLabels: string[] = img.rightLabels || [];
  for (let i = 0; i < n - 1; i++) {
    if (leftLabels[i])
      parts.push(
        svgText(
          (lx(ys[i]) + lx(ys[i + 1])) / 2 - 14,
          (ys[i] + ys[i + 1]) / 2,
          leftLabels[i],
          { size: 12, fill: COL_SHAPE, anchor: 'end' }
        )
      );
    if (rightLabels[i])
      parts.push(
        svgText(
          (rx(ys[i]) + rx(ys[i + 1])) / 2 + 14,
          (ys[i] + ys[i + 1]) / 2,
          rightLabels[i],
          { size: 12, fill: COL_SHAPE, anchor: 'start' }
        )
      );
  }
  return wrap(parts.join(''));
}

// ---------- 中点三角形（3辺の中点を結ぶ・中点連結定理） ----------
function buildMidpointTriangle(img: any): string {
  const A: Pt = [180, 70],
    B: Pt = [60, 286],
    C: Pt = [300, 286];
  const cen: Pt = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
  const D: Pt = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]; // AB 中点
  const E: Pt = [(A[0] + C[0]) / 2, (A[1] + C[1]) / 2]; // AC 中点
  const F: Pt = [(B[0] + C[0]) / 2, (B[1] + C[1]) / 2]; // BC 中点
  const vn: string[] = img.vertexNames || ['A', 'B', 'C'];
  const mn: string[] = img.midNames || ['D', 'E', 'F'];
  const pmap: Record<string, Pt> = {
    [vn[0]]: A,
    [vn[1]]: B,
    [vn[2]]: C,
    [mn[0]]: D,
    [mn[1]]: E,
    [mn[2]]: F,
  };
  const parts: string[] = [];
  parts.push(polyPath([A, B, C], COL_FILL));
  parts.push(polyPath([D, E, F], '#F3ECDD', COL_SHAPE, 2));
  // 中点の等長印
  parts.push(tickMarks(A, D, 1) + tickMarks(D, B, 1));
  parts.push(tickMarks(A, E, 2) + tickMarks(E, C, 2));
  parts.push(tickMarks(B, F, 3) + tickMarks(F, C, 3));
  parts.push(vlabel(A, cen, vn[0], 18));
  parts.push(vlabel(B, cen, vn[1], 18));
  parts.push(vlabel(C, cen, vn[2], 18));
  // 中点名は内側（重心向き）に置き、辺の長さラベル（外側）と衝突させない
  const inLabel = (v: Pt, name: string, off = 15): string => {
    const d = [cen[0] - v[0], cen[1] - v[1]],
      l = Math.hypot(d[0], d[1]) || 1;
    return svgText(v[0] + (d[0] / l) * off, v[1] + (d[1] / l) * off, name, {
      weight: 'bold',
      size: 13,
      fill: COL_SHAPE,
    });
  };
  parts.push(inLabel(D, mn[0]));
  parts.push(inLabel(E, mn[1]));
  parts.push(inLabel(F, mn[2]));
  for (const s of img.segLabels || []) {
    const a = pmap[s.seg[0]],
      b = pmap[s.seg[1]],
      m: Pt = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const d = [m[0] - cen[0], m[1] - cen[1]],
      l = Math.hypot(d[0], d[1]) || 1;
    parts.push(
      svgText(m[0] + (d[0] / l) * 14, m[1] + (d[1] / l) * 14, s.text, {
        size: 12,
        fill: COL_SHAPE,
      })
    );
  }
  return wrap(parts.join(''));
}

function build(img: any): string {
  switch (img.kind) {
    case 'circle-angles':
      return buildCircleAngles(img);
    case 'hourglass':
      return buildHourglass(img);
    case 'parallel-segments':
      return buildParallelSegments(img);
    case 'midpoint-triangle':
      return buildMidpointTriangle(img);
    case 'two-solids':
      return buildTwoSolids(img);
    case 'triangle-parallel':
      return buildTriangleParallel(img);
    case 'trapezoid-diagonals':
      return buildTrapezoidDiagonals(img);
    case 'cone-cut':
      return buildConeCut(img);
    case 'tri-pyramid-cut':
      return buildTriPyramidCut(img);
    case 'boxplot':
      return buildBoxplot(img);
    case 'histogram':
      return buildHistogram(img);
    case 'two-triangles':
      return buildTwoTriangles(img);
    case 'construction':
      return buildConstruction(img);
    case 'movement':
      return buildMovement(img);
    case 'triangle':
      return buildTriangle(img);
    case 'sector':
      return buildSector(img);
    case 'circle':
      return buildCircle(img);
    case 'parallel-lines':
      return buildParallel(img);
    case 'parallelogram':
      return buildParallelogram(img);
    case 'polygon':
      return buildPolygon(img);
    case 'rect-prism':
      return buildRectPrism(img);
    case 'cylinder':
      return buildCylinder(img);
    case 'cone':
      return buildCone(img);
    case 'sphere':
      return buildSphere(img);
    case 'tri-prism':
      return buildTriPrism(img);
    default:
      throw new Error('unknown kind: ' + img.kind);
  }
}

async function main() {
  if (!CHECK_ONLY && !existsSync(OUT_DIR))
    mkdirSync(OUT_DIR, { recursive: true });
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
      if (CHECK_ONLY) {
        count++;
        continue;
      }
      const svg = build(img);
      writeFileSync(join(OUT_DIR, `${q.id}.svg`), svg);
      await sharp(Buffer.from(svg), { density: 96 * SCALE_PX })
        .resize(SIZE * SCALE_PX, SIZE * SCALE_PX)
        .png()
        .toFile(join(OUT_DIR, `${q.id}.png`));
      count++;
    }
  }
  console.log(`${CHECK_ONLY ? '[check] ' : ''}幾何図 ${count} 件`);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});

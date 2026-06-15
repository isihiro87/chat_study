import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = 'public/marketing/instagram-stories/line-launch-2026-06-01';
const W = 1080;
const H = 1920;

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function lines(items: string[], x: number, y: number, size: number, gap: number, color = '#1f2937', weight = 700) {
  return items
    .map(
      (text, i) =>
        `<text x="${x}" y="${y + i * gap}" fill="${color}" font-size="${size}" font-weight="${weight}">${esc(text)}</text>`,
    )
    .join('\n');
}

function wrappedText(items: string[], x: number, y: number, size: number, gap: number, color = '#374151') {
  return items
    .map((text, i) => `<text x="${x}" y="${y + i * gap}" fill="${color}" font-size="${size}" font-weight="600">${esc(text)}</text>`)
    .join('\n');
}

function phoneMock(x: number, y: number) {
  return `
  <g transform="translate(${x} ${y})">
    <rect x="0" y="0" width="430" height="730" rx="56" fill="#111827"/>
    <rect x="22" y="32" width="386" height="666" rx="40" fill="#f9fafb"/>
    <rect x="142" y="18" width="146" height="18" rx="9" fill="#111827"/>
    <rect x="22" y="32" width="386" height="82" rx="40" fill="#06C755"/>
    <text x="215" y="84" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="800">チャットでスタディ</text>
    <rect x="48" y="156" width="250" height="74" rx="26" fill="#ffffff" stroke="#e5e7eb"/>
    <text x="74" y="203" fill="#1f2937" font-size="24" font-weight="700">今日の1問が届いたよ</text>
    <rect x="132" y="260" width="248" height="92" rx="26" fill="#dcfce7"/>
    <text x="158" y="297" fill="#14532d" font-size="23" font-weight="700">英語の確認問題</text>
    <text x="158" y="328" fill="#166534" font-size="20" font-weight="600">3分でチェック</text>
    <rect x="48" y="398" width="332" height="178" rx="28" fill="#ffffff" stroke="#f3f4f6"/>
    <text x="78" y="448" fill="#1f2937" font-size="26" font-weight="800">毎日1問</text>
    <text x="78" y="492" fill="#4b5563" font-size="22" font-weight="600">テスト前の復習を</text>
    <text x="78" y="526" fill="#4b5563" font-size="22" font-weight="600">LINEでサクッと</text>
    <rect x="72" y="610" width="286" height="54" rx="27" fill="#f59e0b"/>
    <text x="215" y="646" text-anchor="middle" fill="#ffffff" font-size="23" font-weight="800">1問解いてみる</text>
  </g>`;
}

function featureCard(x: number, y: number, title: string, body: string, accent: string, icon: string) {
  return `
  <g transform="translate(${x} ${y})">
    <rect width="860" height="166" rx="28" fill="#ffffff" stroke="#f3f4f6"/>
    <circle cx="72" cy="83" r="42" fill="${accent}22"/>
    <text x="72" y="98" text-anchor="middle" fill="${accent}" font-size="42" font-weight="900">${esc(icon)}</text>
    <text x="140" y="72" fill="#1f2937" font-size="38" font-weight="900">${esc(title)}</text>
    <text x="140" y="118" fill="#4b5563" font-size="27" font-weight="600">${esc(body)}</text>
  </g>`;
}

const baseDefs = `
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#FAF9F7"/>
    <stop offset="0.48" stop-color="#ffffff"/>
    <stop offset="1" stop-color="#ECFDF5"/>
  </linearGradient>
  <linearGradient id="green" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#06C755"/>
    <stop offset="1" stop-color="#10B981"/>
  </linearGradient>
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#111827" flood-opacity="0.12"/>
  </filter>
</defs>`;

function frame(content: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
${baseDefs}
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<circle cx="955" cy="178" r="210" fill="#DCFCE7"/>
<circle cx="112" cy="1695" r="250" fill="#FEF3C7"/>
<g font-family="'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif">${content}</g>
</svg>`;
}

const stories = [
  {
    name: 'story-01-launch',
    svg: frame(`
      <text x="90" y="170" fill="#06C755" font-size="34" font-weight="900">本日 6/1 START</text>
      ${lines(['公式LINE配信', 'はじめました'], 90, 285, 88, 108)}
      ${wrappedText(['中学生のテスト対策に', '「今日の1問」がLINEで届きます。'], 94, 565, 36, 54)}
      <g filter="url(#shadow)">${phoneMock(590, 665)}</g>
      <rect x="86" y="740" width="460" height="96" rx="48" fill="url(#green)"/>
      <text x="316" y="803" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="900">友だち追加だけ</text>
      <rect x="86" y="880" width="390" height="78" rx="39" fill="#ffffff" stroke="#e5e7eb"/>
      <text x="281" y="932" text-anchor="middle" fill="#374151" font-size="31" font-weight="800">登録無料</text>
      <text x="90" y="1668" fill="#6b7280" font-size="25" font-weight="700">チャットでスタディ</text>
    `),
  },
  {
    name: 'story-02-features',
    svg: frame(`
      <text x="90" y="164" fill="#06C755" font-size="34" font-weight="900">公式LINEでできること</text>
      ${lines(['勉強のきっかけが', 'LINEに届く'], 90, 278, 76, 94)}
      ${featureCard(110, 560, '毎日1問', '決まった時間にサクッと復習', '#06C755', '1')}
      ${featureCard(110, 760, 'テスト範囲に合わせる', '必要な単元をしぼって対策', '#F59E0B', '2')}
      ${featureCard(110, 960, '暗記カード・4択クイズ', '覚える練習までLINEから', '#6366F1', '3')}
      ${featureCard(110, 1160, '苦手と記録が見える', '続けた分がちゃんと残る', '#10B981', '4')}
      <rect x="110" y="1452" width="860" height="174" rx="36" fill="#111827"/>
      <text x="540" y="1520" text-anchor="middle" fill="#ffffff" font-size="36" font-weight="900">新しいアプリを開かなくてOK</text>
      <text x="540" y="1574" text-anchor="middle" fill="#D1D5DB" font-size="27" font-weight="700">いつものLINEで、1日1分から。</text>
    `),
  },
  {
    name: 'story-03-cta',
    svg: frame(`
      <text x="90" y="164" fill="#06C755" font-size="34" font-weight="900">まずは無料で</text>
      ${lines(['今日の1問を', '受け取る'], 90, 284, 88, 108)}
      <g transform="translate(130 650)" filter="url(#shadow)">
        <rect width="820" height="510" rx="54" fill="#ffffff"/>
        <circle cx="410" cy="142" r="76" fill="#06C755"/>
        <text x="410" y="167" text-anchor="middle" fill="#ffffff" font-size="72" font-weight="900">L</text>
        <text x="410" y="286" text-anchor="middle" fill="#1f2937" font-size="50" font-weight="900">公式LINEへ</text>
        <text x="410" y="356" text-anchor="middle" fill="#4b5563" font-size="32" font-weight="700">プロフィールのリンク</text>
        <text x="410" y="404" text-anchor="middle" fill="#4b5563" font-size="32" font-weight="700">または下のリンクをタップ</text>
      </g>
      <path d="M540 1248 C540 1342 540 1410 540 1506" fill="none" stroke="#06C755" stroke-width="18" stroke-linecap="round"/>
      <path d="M492 1460 L540 1530 L588 1460" fill="none" stroke="#06C755" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="130" y="1600" width="820" height="120" rx="60" fill="url(#green)"/>
      <text x="540" y="1678" text-anchor="middle" fill="#ffffff" font-size="42" font-weight="900">ここにリンクスタンプ</text>
      <text x="540" y="1782" text-anchor="middle" fill="#6b7280" font-size="27" font-weight="700">チャットでスタディ</text>
    `),
  },
];

for (const story of stories) {
  const svgPath = join(outDir, `${story.name}.svg`);
  const pngPath = join(outDir, `${story.name}.png`);
  writeFileSync(svgPath, story.svg);
  await sharp(Buffer.from(story.svg)).png().toFile(pngPath);
  console.log(`${pngPath}`);
}

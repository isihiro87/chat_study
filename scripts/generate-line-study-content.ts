/**
 * data/content/{history,science,math,geography,english}/ を学年別に読み、
 * LIFF「じっくり学ぶ」用の学習データを TS モジュールにバンドルする。
 * （数学は flashcards を持たず quiz のみ。数学だけ LaTeX を Unicode 化する。）
 *
 * 使い方:
 *   npx tsx scripts/generate-line-study-content.ts
 *
 * 出力（科目×学年別、Lazy-load 可能）:
 *   src/data/generated/line-study-history-g1.generated.ts （export const lineStudyHistoryEras）
 *   src/data/generated/line-study-history-g2.generated.ts
 *   src/data/generated/line-study-history-g3.generated.ts
 *   src/data/generated/line-study-science-g1.generated.ts （export const lineStudyScienceEras）
 *
 * 学年マップは下記 SUBJECTS で定義。新フォルダを足したらここを更新する
 * （generate-line-scope-index.ts と対応させる）。
 *
 * 各 topic は flashcards / quiz.questions のみを保持（videos, chatId は
 * LIFF で使わないため除外しサイズ削減）。
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(REPO_ROOT, 'data', 'content');
const OUT_DIR = join(REPO_ROOT, 'src', 'data', 'generated');

// LIFF はプレーンテキスト描画（katex 非搭載の slim ビルド）なので、数学の $...$ 数式を
// 読める Unicode に変換する。sync-questions-from-content.ts と同じロジック。
const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function latexToPlain(s: string): string {
  if (typeof s !== 'string') return s;
  return s
    .replace(/\\begin\{cases\}([\s\S]+?)\\end\{cases\}/g, (_m, inner: string) =>
      inner.split(/\\\\/).map((x) => x.trim()).filter(Boolean).join('，  ')
    )
    .replace(/\$([^$]+)\$/g, (_m, x: string) => x)
    .replace(/\\d?frac\{([^{}]+)\}\{([^{}]+)\}/g, (_m, a: string, b: string) => {
      const par = (x: string) => (/[+\-]/.test(x.slice(1)) ? `(${x})` : x);
      return `${par(a.trim())}/${par(b.trim())}`;
    })
    .replace(/\\sqrt\{([^{}]+)\}/g, '√$1')
    .replace(/\\sqrt/g, '√')
    .replace(/\\pi/g, 'π')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\cdot/g, '・')
    .replace(/\\leqq|\\leq/g, '≦')
    .replace(/\\geqq|\\geq/g, '≧')
    .replace(/\\neq/g, '≠')
    .replace(/\\equiv/g, '≡')
    .replace(/\\sim/g, '∼')
    .replace(/\\parallel/g, '∥')
    .replace(/\\ell/g, 'ℓ')
    .replace(/\\text\{([^{}]*)\}/g, '$1')
    .replace(/\\angle\s*/g, '∠')
    .replace(/\\triangle\s*/g, '△')
    .replace(/\^\{(\d+)\}/g, (_m, d: string) => d.split('').map((c) => SUP[c] ?? c).join(''))
    .replace(/\^(\d)/g, (_m, d: string) => SUP[d] ?? d)
    .replace(/\\left|\\right/g, '')
    .replace(/\\,|\\;|\\ /g, ' ')
    .replace(/\\\\/g, ' ')
    .replace(/\\/g, '')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

interface SubjectConfig {
  subjectId: string; // data/content/<subjectId>
  exportVar: string; // 生成 TS の export 変数名
  outPrefix: string; // 出力ファイル接頭辞（<prefix>-g<grade>.generated.ts）
  label: string; // banner 用
  gradeFolders: Record<number, string[]>; // grade -> data/content/<subjectId>/<folder> の相対パス
}

const SUBJECTS: SubjectConfig[] = [
  {
    subjectId: 'history',
    exportVar: 'lineStudyHistoryEras',
    outPrefix: 'line-study-history',
    label: 'history',
    gradeFolders: {
      1: [
        '01-history-basics',
        '02-ancient-world',
        '03-japanese-origins',
        '04-ancient-state',
        '05-warrior-kamakura',
        '06-medieval-world',
      ],
      2: [
        '07-early-modern',
        '08-edo-establishment',
        '09-modern-era',
        '10-bakumatsu',
        '11-meiji-early',
        '12-meiji-late',
      ],
      3: [
        '13-ww1-japan',
        '14-taisho-democracy',
        '15-showa-crisis',
        '16-ww2-japan',
        '17-postwar-japan',
        '18-cold-war-era',
        '19-modern-world',
      ],
    },
  },
  {
    subjectId: 'science',
    exportVar: 'lineStudyScienceEras',
    outPrefix: 'line-study-science',
    label: 'science',
    gradeFolders: {
      1: [
        'grade1/1-biology',
        'grade1/2-chemistry',
        'grade1/3-physics',
        'grade1/4-earth',
      ],
      2: [
        'grade2/1-chemical-change',
        'grade2/2-biology',
        'grade2/3-weather',
        'grade2/4-electricity',
      ],
      3: [
        'grade3/1-chemistry',
        'grade3/2-biology',
        'grade3/3-physics',
        'grade3/4-earth',
      ],
    },
  },
  {
    // 数学は flashcards を持たない（quiz のみ）。「この分野を暗記」のカードは
    // 空になるが、「四択クイズ」は出せる（fc 以外＝クイズも作る方針）。
    subjectId: 'math',
    exportVar: 'lineStudyMathEras',
    outPrefix: 'line-study-math',
    label: 'math',
    gradeFolders: {
      1: [
        'grade1/1-positive-negative',
        'grade1/2-literal-expressions',
        'grade1/3-equations',
        'grade1/4-functions',
        'grade1/5-plane-figures',
        'grade1/6-space-figures',
        'grade1/7-data',
      ],
      2: [
        'grade2/1-expressions',
        'grade2/2-simultaneous-equations',
        'grade2/3-linear-functions',
        'grade2/4-parallel-congruence',
        'grade2/5-triangles-quadrilaterals',
        'grade2/6-probability',
        'grade2/7-data',
      ],
      3: [
        'grade3/1-expansion-factoring',
        'grade3/2-square-roots',
        'grade3/3-quadratic-equations',
        'grade3/4-quadratic-functions',
      ],
    },
  },
  {
    subjectId: 'geography',
    exportVar: 'lineStudyGeographyEras',
    outPrefix: 'line-study-geography',
    label: 'geography',
    gradeFolders: {
      1: [
        'grade1/1-world-shape',
        'grade1/2-japan-shape',
        'grade1/3-life-environment',
        'grade1/4-world-regions',
      ],
      2: [
        'grade2/1-regional-research',
        'grade2/2-japan-features',
        'grade2/3-japan-regions',
      ],
      3: [],
    },
  },
  {
    // 英語は各学年フォルダ直下に topic JSON が並ぶ（1 学年 = 1 era）。
    subjectId: 'english',
    exportVar: 'lineStudyEnglishEras',
    outPrefix: 'line-study-english',
    label: 'english',
    gradeFolders: {
      1: ['grade1'],
      2: ['grade2'],
      3: ['grade3'],
    },
  },
];

const ERA_DISPLAY_NAMES: Record<string, { name: string; icon: string; period: string }> = {
  // history grade 1
  'history-basics': { name: '歴史の基礎', icon: '📜', period: '時代の区分・年代の表し方' },
  'ancient-world': { name: '古代文明の世界', icon: '🏛️', period: '700万年前〜7世紀' },
  'japanese-origins': { name: '日本の成り立ち', icon: '🏠', period: '1万年前〜6世紀' },
  'ancient-state': { name: '古代国家の形成', icon: '🏯', period: '6世紀〜12世紀' },
  'warrior-kamakura': { name: '武士の世の中', icon: '⚔️', period: '11世紀〜14世紀' },
  'medieval-world': { name: '中世の世界と室町時代', icon: '🗡️', period: '13世紀〜16世紀' },
  // history grade 2
  'early-modern': { name: '近世の幕開け', icon: '🌍', period: '15世紀〜16世紀' },
  'edo-establishment': { name: '江戸幕府の成立', icon: '🏯', period: '17世紀' },
  'modern-era': { name: '近代革命と国家形成', icon: '🌍', period: '17世紀〜19世紀' },
  bakumatsu: { name: '幕末', icon: '⚔️', period: '1853年〜1868年' },
  'meiji-early': { name: '明治時代（前期）', icon: '🌅', period: '1868年〜1889年' },
  'meiji-late': { name: '明治時代（後期）', icon: '🏭', period: '1889年〜1912年' },
  // history grade 3
  'ww1-japan': { name: '第一次世界大戦と日本', icon: '⚔️', period: '1914年〜1920年代' },
  'taisho-democracy': { name: '大正デモクラシー', icon: '🗳️', period: '1910年代〜1920年代' },
  'showa-crisis': { name: '世界恐慌と日本の中国侵略', icon: '🌑', period: '1929年〜1937年' },
  'ww2-japan': { name: '第二次世界大戦と日本', icon: '💣', period: '1939年〜1945年' },
  'postwar-japan': { name: '戦後の日本', icon: '🕊️', period: '1945年〜1952年' },
  'cold-war-era': { name: '冷戦と日本の成長', icon: '🌐', period: '1950年代〜1970年代' },
  'modern-world': { name: '現代の世界と日本', icon: '🌏', period: '1989年〜現在' },
  // science grade 1（ワークの章・節順に細分化）
  'sci1-plant': { name: '植物の観察と分類', icon: '🌱', period: '生物分野' },
  'sci1-animal': { name: '動物の分類', icon: '🐟', period: '生物分野' },
  'sci1-substance': { name: '身のまわりの物質', icon: '⚗️', period: '化学分野' },
  'sci1-solution': { name: '水溶液と状態変化', icon: '💧', period: '化学分野' },
  'sci1-light-sound': { name: '光と音', icon: '💡', period: '物理分野' },
  'sci1-force': { name: '力', icon: '⚖️', period: '物理分野' },
  'sci1-volcano-quake': { name: '火山と地震', icon: '🌋', period: '地学分野' },
  'sci1-strata': { name: '地層', icon: '🪨', period: '地学分野' },
  // science grade 2（ワークの章・節順に細分化）
  'sci2-chem-basic': { name: '物質の成り立ちと化学変化', icon: '⚛️', period: '化学分野' },
  'sci2-chem-mass': { name: '化学変化と質量・熱', icon: '⚖️', period: '化学分野' },
  'sci2-bio-plant': { name: '植物のからだとはたらき', icon: '🔬', period: '生物分野' },
  'sci2-bio-animal': { name: '動物のからだとはたらき', icon: '🧠', period: '生物分野' },
  'sci2-weather-water': { name: '気象観測と大気中の水', icon: '☁️', period: '地学分野' },
  'sci2-weather-front': { name: '前線と日本の天気', icon: '🌀', period: '地学分野' },
  'sci2-elec-circuit': { name: '静電気と電流回路', icon: '⚡', period: '物理分野' },
  'sci2-elec-power': { name: '電力と電流の利用', icon: '🔌', period: '物理分野' },
  // science grade 3（ワークの章・節順に細分化）
  'sci3-ion-electrolysis': { name: 'イオンと電気分解', icon: '⚡', period: '化学分野' },
  'sci3-acid-neutral': { name: '酸・アルカリと中和', icon: '🧪', period: '化学分野' },
  'sci3-battery': { name: '電池のしくみ', icon: '🔋', period: '化学分野' },
  'sci3-growth-reproduction': { name: '生物の成長と生殖', icon: '🌱', period: '生物分野' },
  'sci3-heredity': { name: '遺伝の規則性', icon: '🧬', period: '生物分野' },
  'sci3-evolution': { name: '生物の進化', icon: '🦕', period: '生物分野' },
  'sci3-motion-force': { name: '運動と力・水圧', icon: '🏃', period: '物理分野' },
  'sci3-work-energy': { name: '仕事とエネルギー', icon: '🔧', period: '物理分野' },
  'sci3-celestial-motion': { name: '天体の動き', icon: '🌏', period: '地学分野' },
  'sci3-moon-venus': { name: '月と金星の見え方', icon: '🌙', period: '地学分野' },
  'sci3-solar-universe': { name: '太陽系と宇宙', icon: '🌌', period: '地学分野' },
  // math grade 1（フォルダ＝単元）
  'math-g1-pos-neg': { name: '正負の数', icon: '➖', period: '中1 数と式' },
  'math-g1-literal-exp': { name: '文字と式', icon: '🔤', period: '中1 数と式' },
  'math-g1-equations': { name: '方程式', icon: '⚖️', period: '中1 数と式' },
  'math-g1-functions': { name: '比例と反比例', icon: '📈', period: '中1 関数' },
  'math-g1-plane': { name: '平面図形', icon: '📐', period: '中1 図形' },
  'math-g1-space': { name: '空間図形', icon: '🧊', period: '中1 図形' },
  'math-g1-data': { name: 'データの活用', icon: '📊', period: '中1 データ' },
  // math grade 2
  'math-g2-expressions': { name: '式の計算', icon: '🔣', period: '中2 数と式' },
  'math-g2-simultaneous-eq': { name: '連立方程式', icon: '⚖️', period: '中2 数と式' },
  'math-g2-linear-func': { name: '一次関数', icon: '📈', period: '中2 関数' },
  'math-g2-parallel': { name: '平行と合同', icon: '📐', period: '中2 図形' },
  'math-g2-shapes': { name: '三角形と四角形', icon: '🔺', period: '中2 図形' },
  'math-g2-probability': { name: '確率', icon: '🎲', period: '中2 データ' },
  'math-g2-data': { name: '箱ひげ図とデータの活用', icon: '📦', period: '中2 データ' },
  // math grade 3
  'math-g3-expansion-factoring': { name: '展開と因数分解', icon: '✖️', period: '中3 数と式' },
  'math-g3-square-roots': { name: '平方根', icon: '√', period: '中3 数と式' },
  'math-g3-quadratic-eq': { name: '二次方程式', icon: '⚖️', period: '中3 数と式' },
  'math-g3-quadratic-func': { name: '二次関数', icon: '📈', period: '中3 関数' },
  // geography grade 1（generate-line-scope-index.ts と表示名を揃える）
  'geo1-world-shape': { name: '世界の姿', icon: '🌍', period: '世界の地域構成' },
  'geo1-japan-shape': { name: '日本の姿', icon: '🗾', period: '日本の地域構成' },
  'geo1-life-environment': { name: '人々の生活と環境', icon: '🌏', period: '世界の生活・文化' },
  'geo1-world-regions': { name: '世界の諸地域', icon: '🌎', period: '六州の地誌' },
  // geography grade 2
  'geo2-regional-research': { name: '地域調査・地形図', icon: '🗺️', period: '地理の調べ方' },
  'geo2-japan-features': { name: '日本の特色', icon: '🏔️', period: '日本の地域的特色' },
  'geo2-japan-regions': { name: '日本の諸地域', icon: '🏙️', period: '七地方の地誌' },
  // english（1 学年 = 1 era）
  'english-grade1': { name: '中1 英語', icon: '📘', period: '中1 文法・単語' },
  'english-grade2': { name: '中2 英語', icon: '📗', period: '中2 文法' },
  'english-grade3': { name: '中3 英語', icon: '📕', period: '中3 文法' },
};

interface RawFlashcard {
  id: string;
  front: string;
  back: string;
  explanation?: string;
  difficulty?: string;
}

interface RawQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  difficulty?: string;
}

interface RawTopic {
  subjectId: string;
  eraId: string;
  topicId: string;
  name: string;
  subtitle?: string;
  icon?: string;
  order?: number;
  flashcards?: RawFlashcard[];
  quiz?: { questions?: RawQuizQuestion[] };
}

interface OutTopic {
  topicId: string;
  name: string;
  subtitle: string;
  icon: string;
  order: number;
  flashcards: RawFlashcard[];
  quiz: RawQuizQuestion[];
}

interface OutEra {
  eraId: string;
  eraName: string;
  eraIcon: string;
  eraPeriod: string;
  topics: OutTopic[];
}

// フォルダ内の topic を order 順に読む。各 topic は自分の eraId を持つ
// （1 フォルダに複数 era が混在しうる＝理科の細分化に対応）。
function loadFolderTopics(
  srcDir: string,
  folder: string,
  conv: (s: string) => string
): (OutTopic & { eraId: string })[] {
  const dir = join(srcDir, folder);
  let files: string[] = [];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }
  const topics: (OutTopic & { eraId: string })[] = [];
  for (const file of files) {
    const raw = readFileSync(join(dir, file), 'utf-8');
    const data = JSON.parse(raw) as RawTopic;
    topics.push({
      eraId: data.eraId,
      topicId: data.topicId,
      name: data.name,
      subtitle: data.subtitle ?? '',
      icon: data.icon ?? '',
      order: data.order ?? 0,
      // 既知フィールドのみ明示的に取り出す（英語の hint、数学の image など、
      // StudyFlashcard / StudyQuizQuestion 型に無い余分なフィールドを落とす）。
      flashcards: (data.flashcards ?? []).map((fc) => ({
        id: fc.id,
        front: conv(fc.front),
        back: conv(fc.back),
        ...(fc.explanation ? { explanation: conv(fc.explanation) } : {}),
        ...(fc.difficulty ? { difficulty: fc.difficulty } : {}),
      })),
      // 語順並べ替え（reorder: options 空・correctIndex -1）など 4 択でない問題は
      // LIFF クイズプレイヤーが扱えないので除外。sync-questions-from-content.ts の
      // 妥当性チェックと揃える（Firestore 出題と同じ問題集合になる）。
      quiz: (data.quiz?.questions ?? [])
        .filter(
          (q) =>
            Array.isArray(q.options) &&
            q.options.length === 4 &&
            typeof q.correctIndex === 'number' &&
            q.correctIndex >= 0,
        )
        .map((q) => ({
          id: q.id,
          question: conv(q.question),
          options: q.options.map(conv),
          correctIndex: q.correctIndex,
          ...(q.explanation ? { explanation: conv(q.explanation) } : {}),
          ...(q.difficulty ? { difficulty: q.difficulty } : {}),
        })),
    });
  }
  topics.sort((a, b) => a.order - b.order);
  return topics;
}

const TYPES = `export interface StudyFlashcard {
  id: string;
  front: string;
  back: string;
  explanation?: string;
  difficulty?: string;
}

export interface StudyQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  difficulty?: string;
}

export interface StudyTopic {
  topicId: string;
  name: string;
  subtitle: string;
  icon: string;
  order: number;
  flashcards: StudyFlashcard[];
  quiz: StudyQuizQuestion[];
}

export interface StudyEra {
  eraId: string;
  eraName: string;
  eraIcon: string;
  eraPeriod: string;
  topics: StudyTopic[];
}

`;

function emitGrade(cfg: SubjectConfig, grade: number, folders: string[]) {
  const srcDir = join(CONTENT_DIR, cfg.subjectId);
  // 単元（era）の並びは「フォルダ順 × フォルダ内 order 順」での eraId 初出順。
  // フォルダ番号＝ワークの章順、topic.order＝章内の節順なので、ワーク（PDF）順になる。
  const byEra = new Map<string, OutTopic[]>();
  const eraOrder: string[] = [];
  // 数学のみ LaTeX を LINE 表示用 Unicode に変換（他教科は素通し）。
  const conv = cfg.subjectId === 'math' ? latexToPlain : (x: string) => x;
  for (const folder of folders) {
    for (const t of loadFolderTopics(srcDir, folder, conv)) {
      const { eraId, ...topic } = t;
      if (!byEra.has(eraId)) {
        byEra.set(eraId, []);
        eraOrder.push(eraId);
      }
      byEra.get(eraId)!.push(topic);
    }
  }
  const eras: OutEra[] = eraOrder.map((eraId) => {
    const meta = ERA_DISPLAY_NAMES[eraId] ?? { name: eraId, icon: '📚', period: '' };
    return {
      eraId,
      eraName: meta.name,
      eraIcon: meta.icon,
      eraPeriod: meta.period,
      topics: byEra.get(eraId)!,
    };
  });
  if (eras.length === 0) return; // 中身が無い学年はファイルを作らない

  const banner =
    '// AUTO-GENERATED by scripts/generate-line-study-content.ts\n' +
    `// Grade ${grade} – ${cfg.label}\n` +
    `// Do not edit manually. Re-run on data/content/${cfg.subjectId}/ updates.\n` +
    '// Run: npx tsx scripts/generate-line-study-content.ts\n\n';

  const body = `export const ${cfg.exportVar}: StudyEra[] = ${JSON.stringify(eras, null, 2)};\n`;

  const out = join(OUT_DIR, `${cfg.outPrefix}-g${grade}.generated.ts`);
  writeFileSync(out, banner + TYPES + body, 'utf-8');

  let totalTopics = 0;
  let totalFC = 0;
  let totalQuiz = 0;
  console.log(`\n[${cfg.subjectId} grade ${grade}] -> ${out}`);
  for (const era of eras) {
    console.log(`  ${era.eraId} (${era.eraName}): ${era.topics.length} topics`);
    for (const t of era.topics) {
      totalTopics++;
      totalFC += t.flashcards.length;
      totalQuiz += t.quiz.length;
    }
  }
  console.log(
    `  → eras=${eras.length} topics=${totalTopics} flashcards=${totalFC} quizQ=${totalQuiz}`
  );
}

function main() {
  for (const cfg of SUBJECTS) {
    for (const [grade, folders] of Object.entries(cfg.gradeFolders)) {
      emitGrade(cfg, Number(grade), folders);
    }
  }
}

main();

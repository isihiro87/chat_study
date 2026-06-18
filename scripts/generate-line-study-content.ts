/**
 * data/content/{history,science}/ を学年別に読み、LIFF「じっくり学ぶ」用の
 * 学習データを TS モジュールにバンドルする。
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
  // science grade 1
  'sci1-biology': { name: '生物の観察と分類', icon: '🔬', period: '生物分野' },
  'sci1-chemistry': { name: '身のまわりの物質', icon: '⚗️', period: '化学分野' },
  'sci1-physics': { name: '光・音・力', icon: '💡', period: '物理分野' },
  'sci1-earth': { name: '大地の変化', icon: '🌋', period: '地学分野' },
  // science grade 2
  'sci2-chemical-change': { name: '化学変化と原子・分子', icon: '⚗️', period: '化学分野' },
  'sci2-biology': { name: '生物のからだのつくり', icon: '🔬', period: '生物分野' },
  'sci2-weather': { name: '天気とその変化', icon: '🌦️', period: '地学分野' },
  'sci2-electricity': { name: '電流とその利用', icon: '⚡', period: '物理分野' },
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

function loadTopicsFromFolder(
  srcDir: string,
  folder: string
): { eraId: string; topics: OutTopic[] } {
  const dir = join(srcDir, folder);
  let files: string[] = [];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.json'));
  } catch {
    return { eraId: folder, topics: [] };
  }
  if (files.length === 0) return { eraId: folder, topics: [] };
  const topics: OutTopic[] = [];
  let eraId = folder;
  for (const file of files) {
    const raw = readFileSync(join(dir, file), 'utf-8');
    const data = JSON.parse(raw) as RawTopic;
    eraId = data.eraId;
    topics.push({
      topicId: data.topicId,
      name: data.name,
      subtitle: data.subtitle ?? '',
      icon: data.icon ?? '',
      order: data.order ?? 0,
      flashcards: data.flashcards ?? [],
      quiz: data.quiz?.questions ?? [],
    });
  }
  topics.sort((a, b) => a.order - b.order);
  return { eraId, topics };
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
  const eras: OutEra[] = [];
  for (const folder of folders) {
    const { eraId, topics } = loadTopicsFromFolder(srcDir, folder);
    if (topics.length === 0) continue;
    const meta = ERA_DISPLAY_NAMES[eraId] ?? { name: eraId, icon: '📚', period: '' };
    eras.push({
      eraId,
      eraName: meta.name,
      eraIcon: meta.icon,
      eraPeriod: meta.period,
      topics,
    });
  }
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

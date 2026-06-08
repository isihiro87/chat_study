/**
 * data/content/{history,english}/ を学年別に読み、公式LINE「出題範囲設定」
 * ページ用の *スリムな* 単元インデックスを TS モジュールにバンドルする。
 *
 * 使い方:
 *   npx tsx scripts/generate-line-scope-index.ts
 *
 * 出力:
 *   src/data/generated/line-scope-index.generated.ts
 *
 * ⚠️ 範囲設定は公式LINE の source of truth である data/content の topic.name を
 * そのまま testScope.topics に保存する必要がある（webhook は Firestore
 * questions.topic と完全一致比較する）。eras / topic-registry（Web 版専用）は
 * 使わない。CLAUDE.md「era フォルダは公式LINEとは別物」を参照。
 *
 * flashcards / quiz 本体は含めず、単元名・サブタイトル・アイコンだけを持つ
 * （範囲選択 UI に必要な情報のみ。バンドルを小さく保つ）。
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(REPO_ROOT, 'data', 'content');
const OUT_DIR = join(REPO_ROOT, 'src', 'data', 'generated');

type SubjectId = 'history' | 'english';
type Grade = 1 | 2 | 3;

// data/content/<subject>/<folder> の学年マップ。
// 新しいフォルダを足したらここを更新する（generate-line-study-content.ts と対応）。
const GRADE_FOLDERS: Record<SubjectId, Record<Grade, string[]>> = {
  history: {
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
  english: {
    1: ['01-english-grade1'],
    2: [],
    3: [],
  },
};

// eraId -> 表示名。未登録の eraId は eraId そのままにフォールバック。
const ERA_DISPLAY_NAMES: Record<
  string,
  { name: string; icon: string; period: string }
> = {
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
  // english grade 1
  'english-grade1': { name: '中1 英語の単語', icon: '📘', period: '教科書レッスンの単語' },
};

interface RawTopic {
  subjectId: string;
  eraId: string;
  topicId: string;
  name: string;
  subtitle?: string;
  icon?: string;
  order?: number;
}

interface ScopeTopic {
  name: string;
  subtitle: string;
  icon: string;
}

interface ScopeEra {
  eraId: string;
  eraName: string;
  eraIcon: string;
  eraPeriod: string;
  topics: ScopeTopic[];
}

function loadFolder(
  subject: SubjectId,
  folder: string
): { eraId: string; topics: (ScopeTopic & { order: number })[] } {
  const dir = join(CONTENT_DIR, subject, folder);
  let files: string[] = [];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.json'));
  } catch {
    return { eraId: folder, topics: [] };
  }
  const topics: (ScopeTopic & { order: number })[] = [];
  let eraId = folder;
  for (const file of files) {
    const data = JSON.parse(readFileSync(join(dir, file), 'utf-8')) as RawTopic;
    eraId = data.eraId;
    topics.push({
      name: data.name,
      subtitle: data.subtitle ?? '',
      icon: data.icon ?? '',
      order: data.order ?? 0,
    });
  }
  topics.sort((a, b) => a.order - b.order);
  return { eraId, topics };
}

function buildSubject(subject: SubjectId): Record<Grade, ScopeEra[]> {
  const out = { 1: [] as ScopeEra[], 2: [] as ScopeEra[], 3: [] as ScopeEra[] };
  for (const gradeKey of [1, 2, 3] as Grade[]) {
    const eras: ScopeEra[] = [];
    for (const folder of GRADE_FOLDERS[subject][gradeKey]) {
      const { eraId, topics } = loadFolder(subject, folder);
      if (topics.length === 0) continue;
      const meta = ERA_DISPLAY_NAMES[eraId] ?? {
        name: eraId,
        icon: '📚',
        period: '',
      };
      eras.push({
        eraId,
        eraName: meta.name,
        eraIcon: meta.icon,
        eraPeriod: meta.period,
        topics: topics.map(({ name, subtitle, icon }) => ({
          name,
          subtitle,
          icon,
        })),
      });
    }
    out[gradeKey] = eras;
  }
  return out;
}

const index: Record<SubjectId, Record<Grade, ScopeEra[]>> = {
  history: buildSubject('history'),
  english: buildSubject('english'),
};

const banner =
  '// AUTO-GENERATED by scripts/generate-line-scope-index.ts\n' +
  '// 公式LINE「出題範囲設定」ページ用の単元インデックス（data/content 由来・スリム）。\n' +
  '// Do not edit manually. Re-run on data/content/{history,english}/ updates.\n' +
  '// Run: npx tsx scripts/generate-line-scope-index.ts\n\n';

const types = `export interface ScopeTopic {
  name: string;
  subtitle: string;
  icon: string;
}

export interface ScopeEra {
  eraId: string;
  eraName: string;
  eraIcon: string;
  eraPeriod: string;
  topics: ScopeTopic[];
}

export type ScopeSubjectId = 'history' | 'english';
export type ScopeGrade = 1 | 2 | 3;

`;

const body =
  `export const lineScopeIndex: Record<ScopeSubjectId, Record<ScopeGrade, ScopeEra[]>> = ${JSON.stringify(
    index,
    null,
    2
  )};\n`;

const outPath = join(OUT_DIR, 'line-scope-index.generated.ts');
writeFileSync(outPath, banner + types + body, 'utf-8');

// サマリ出力
for (const subject of ['history', 'english'] as SubjectId[]) {
  for (const grade of [1, 2, 3] as Grade[]) {
    const eras = index[subject][grade];
    const topicCount = eras.reduce((n, e) => n + e.topics.length, 0);
    console.log(
      `[${subject} g${grade}] ${eras.length} eras / ${topicCount} topics`
    );
  }
}
console.log(`\n-> ${outPath}`);

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

type SubjectId = 'history' | 'english' | 'science';
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
  science: {
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
};

// grade×eraId -> 公式LINE トーク内 範囲設定フロー用の補助メタ。
//  - shortName: Quick Reply チップ用の短縮名（✅/⬜ を足して20字以内に収める）
//  - whenLabel: 「いつ頃習うか」の目安（標準進度ベース。ズレても生徒がチップで直せる）
//  - keyTerms:  代表的な用語（中学生が「自分が習ったところ」を判断する手がかり）
// 未登録の eraId は shortName=eraName / whenLabel,keyTerms 空 にフォールバック。
const ERA_HINTS: Record<
  string,
  { shortName: string; whenLabel: string; keyTerms: string }
> = {
  // history grade 1
  'history-basics': { shortName: '歴史の基礎', whenLabel: '中1 4月ごろ', keyTerms: '世紀・西暦・元号' },
  'ancient-world': { shortName: '古代文明', whenLabel: '中1 4〜5月ごろ', keyTerms: 'メソポタミア・ローマ・三大宗教' },
  'japanese-origins': { shortName: '日本の成り立ち', whenLabel: '中1 5月ごろ', keyTerms: '縄文・弥生・卑弥呼' },
  'ancient-state': { shortName: '古代国家', whenLabel: '中1 6〜9月ごろ', keyTerms: '聖徳太子・大化の改新・平安京' },
  'warrior-kamakura': { shortName: '武士の世', whenLabel: '中1 10〜11月ごろ', keyTerms: '源頼朝・鎌倉幕府・武士' },
  'medieval-world': { shortName: '中世・室町', whenLabel: '中1 12〜2月ごろ', keyTerms: '元寇・室町幕府・金閣銀閣' },
  // history grade 2
  'early-modern': { shortName: '近世の幕開け', whenLabel: '中2 4〜5月ごろ', keyTerms: '大航海時代・信長・秀吉' },
  'edo-establishment': { shortName: '江戸時代', whenLabel: '中2 5〜9月ごろ', keyTerms: '江戸幕府・鎖国・三大改革' },
  'modern-era': { shortName: '近代革命', whenLabel: '中2 9〜10月ごろ', keyTerms: 'フランス革命・産業革命・独立' },
  bakumatsu: { shortName: '幕末', whenLabel: '中2 10〜11月ごろ', keyTerms: '黒船・開国・大政奉還' },
  'meiji-early': { shortName: '明治前期', whenLabel: '中2 11〜1月ごろ', keyTerms: '明治維新・文明開化・自由民権' },
  'meiji-late': { shortName: '明治後期', whenLabel: '中2 1〜3月ごろ', keyTerms: '日清戦争・日露戦争・韓国併合' },
  // history grade 3
  'ww1-japan': { shortName: '第一次大戦', whenLabel: '中3 4〜5月ごろ', keyTerms: '第一次大戦・二十一か条・ロシア革命' },
  'taisho-democracy': { shortName: '大正デモクラシー', whenLabel: '中3 5〜6月ごろ', keyTerms: '普通選挙・大衆文化・社会運動' },
  'showa-crisis': { shortName: '世界恐慌と侵略', whenLabel: '中3 6〜7月ごろ', keyTerms: '世界恐慌・満州事変・日中戦争' },
  'ww2-japan': { shortName: '第二次大戦', whenLabel: '中3 9月ごろ', keyTerms: '第二次大戦・太平洋戦争・終戦' },
  'postwar-japan': { shortName: '戦後の日本', whenLabel: '中3 9〜10月ごろ', keyTerms: '占領・日本国憲法・民主化' },
  'cold-war-era': { shortName: '冷戦と成長', whenLabel: '中3 10〜11月ごろ', keyTerms: '冷戦・高度経済成長・東京五輪' },
  'modern-world': { shortName: '現代の世界', whenLabel: '中3 11〜12月ごろ', keyTerms: '冷戦終結・平成・現代の課題' },
  // english grade 1
  'english-grade1': { shortName: '中1英単語', whenLabel: '中1 通年', keyTerms: '教科書レッスンの単語' },
  // science grade 1（ワークの章・節順に細分化）
  'sci1-plant': { shortName: '植物の観察と分類', whenLabel: '中1 4〜6月ごろ', keyTerms: '観察・顕微鏡・花のつくり・植物の分類' },
  'sci1-animal': { shortName: '動物の分類', whenLabel: '中1 6〜7月ごろ', keyTerms: '脊椎動物・無脊椎動物' },
  'sci1-substance': { shortName: '身のまわりの物質', whenLabel: '中1 9〜10月ごろ', keyTerms: '物質の性質・密度・気体' },
  'sci1-solution': { shortName: '水溶液と状態変化', whenLabel: '中1 10〜12月ごろ', keyTerms: '溶解度・質量パーセント濃度・状態変化' },
  'sci1-light-sound': { shortName: '光と音', whenLabel: '中1 12〜1月ごろ', keyTerms: '光の反射・屈折・凸レンズ・音' },
  'sci1-force': { shortName: '力', whenLabel: '中1 1〜2月ごろ', keyTerms: '力のはたらき・フックの法則・つり合い' },
  'sci1-volcano-quake': { shortName: '火山と地震', whenLabel: '中1 2〜3月ごろ', keyTerms: 'マグマ・火成岩・P波S波・震度' },
  'sci1-strata': { shortName: '地層', whenLabel: '中1 3月ごろ', keyTerms: '地層・堆積岩・化石' },
  // science grade 2（ワークの章・節順に細分化）
  'sci2-chem-basic': { shortName: '物質の成り立ち・化学変化', whenLabel: '中2 4〜6月ごろ', keyTerms: '分解・原子分子・化学反応式・酸化還元' },
  'sci2-chem-mass': { shortName: '化学変化と質量・熱', whenLabel: '中2 6〜7月ごろ', keyTerms: '質量保存・質量比・発熱吸熱' },
  'sci2-bio-plant': { shortName: '植物のからだ', whenLabel: '中2 7〜9月ごろ', keyTerms: '細胞・光合成・呼吸・蒸散' },
  'sci2-bio-animal': { shortName: '動物のからだ', whenLabel: '中2 9〜10月ごろ', keyTerms: '消化・血液循環・感覚器官・神経' },
  'sci2-weather-water': { shortName: '気象観測と大気中の水', whenLabel: '中2 10〜12月ごろ', keyTerms: '圧力・気圧・湿度・雲のでき方' },
  'sci2-weather-front': { shortName: '前線と日本の天気', whenLabel: '中2 12〜1月ごろ', keyTerms: '気団・前線・日本の四季' },
  'sci2-elec-circuit': { shortName: '静電気と電流回路', whenLabel: '中2 1〜2月ごろ', keyTerms: '静電気・回路・オームの法則・抵抗' },
  'sci2-elec-power': { shortName: '電力と電流の利用', whenLabel: '中2 2〜3月ごろ', keyTerms: '電力・電力量・電流と磁界・電磁誘導' },
  // science grade 3（ワークの章・節順に細分化）
  'sci3-ion-electrolysis': { shortName: 'イオンと電気分解', whenLabel: '中3 4〜5月ごろ', keyTerms: '電解質・電気分解・原子・イオン・電離' },
  'sci3-acid-neutral': { shortName: '酸・アルカリと中和', whenLabel: '中3 5〜6月ごろ', keyTerms: '酸・アルカリ・pH・指示薬・中和・塩' },
  'sci3-battery': { shortName: '電池のしくみ', whenLabel: '中3 6〜7月ごろ', keyTerms: '電池・イオンへのなりやすさ・ダニエル電池・燃料電池' },
  'sci3-growth-reproduction': { shortName: '生物の成長と生殖', whenLabel: '中3 7〜9月ごろ', keyTerms: '細胞分裂・染色体・無性生殖・有性生殖・減数分裂' },
  'sci3-heredity': { shortName: '遺伝の規則性', whenLabel: '中3 9〜10月ごろ', keyTerms: '遺伝・形質・顕性潜性・分離の法則・DNA' },
  'sci3-evolution': { shortName: '生物の進化', whenLabel: '中3 10月ごろ', keyTerms: '脊椎動物・相同器官・進化・化石' },
  'sci3-motion-force': { shortName: '運動と力・水圧', whenLabel: '中3 10〜11月ごろ', keyTerms: '速さ・等速直線運動・慣性・水圧・浮力' },
  'sci3-work-energy': { shortName: '仕事とエネルギー', whenLabel: '中3 11〜12月ごろ', keyTerms: '仕事・仕事率・位置エネルギー・運動エネルギー・力学的エネルギー' },
  'sci3-celestial-motion': { shortName: '天体の動き', whenLabel: '中3 12〜1月ごろ', keyTerms: '日周運動・年周運動・地軸・季節の変化' },
  'sci3-moon-venus': { shortName: '月と金星', whenLabel: '中3 1〜2月ごろ', keyTerms: '月の満ち欠け・日食月食・金星の見え方' },
  'sci3-solar-universe': { shortName: '太陽系と宇宙', whenLabel: '中3 2〜3月ごろ', keyTerms: '惑星・太陽・銀河系・恒星・天文単位' },
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

// フォルダ内の topic を order 順に読む。各 topic は自分の eraId を持つ
// （1 フォルダに複数 era が混在しうる＝理科の細分化に対応）。
function loadFolderTopics(
  subject: SubjectId,
  folder: string
): (ScopeTopic & { eraId: string; order: number })[] {
  const dir = join(CONTENT_DIR, subject, folder);
  let files: string[] = [];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }
  const topics: (ScopeTopic & { eraId: string; order: number })[] = [];
  for (const file of files) {
    const data = JSON.parse(readFileSync(join(dir, file), 'utf-8')) as RawTopic;
    topics.push({
      eraId: data.eraId,
      name: data.name,
      subtitle: data.subtitle ?? '',
      icon: data.icon ?? '',
      order: data.order ?? 0,
    });
  }
  topics.sort((a, b) => a.order - b.order);
  return topics;
}

// 単元（era）の並びは「フォルダ順 × フォルダ内 order 順」での eraId 初出順。
// data/content のフォルダ番号＝ワークの章順、topic.order＝章内の節順なので、
// これがそのままワーク（PDF）の単元順になる。
function buildSubject(subject: SubjectId): Record<Grade, ScopeEra[]> {
  const out = { 1: [] as ScopeEra[], 2: [] as ScopeEra[], 3: [] as ScopeEra[] };
  for (const gradeKey of [1, 2, 3] as Grade[]) {
    const byEra = new Map<string, (ScopeTopic & { order: number })[]>();
    const eraOrder: string[] = [];
    for (const folder of GRADE_FOLDERS[subject][gradeKey]) {
      for (const t of loadFolderTopics(subject, folder)) {
        if (!byEra.has(t.eraId)) {
          byEra.set(t.eraId, []);
          eraOrder.push(t.eraId);
        }
        byEra.get(t.eraId)!.push(t);
      }
    }
    out[gradeKey] = eraOrder.map((eraId) => {
      const topics = byEra.get(eraId)!;
      const meta = ERA_DISPLAY_NAMES[eraId] ?? {
        name: eraId,
        icon: '📚',
        period: '',
      };
      return {
        eraId,
        eraName: meta.name,
        eraIcon: meta.icon,
        eraPeriod: meta.period,
        topics: topics.map(({ name, subtitle, icon }) => ({
          name,
          subtitle,
          icon,
        })),
      };
    });
  }
  return out;
}

const index: Record<SubjectId, Record<Grade, ScopeEra[]>> = {
  history: buildSubject('history'),
  english: buildSubject('english'),
  science: buildSubject('science'),
};

// --- functions 側（公式LINE トーク内 範囲設定フロー）用スリムマップ ---
// webhook が src/ を import せずに「eraId -> 表示名/短縮名/時期/代表用語/配下topic名」
// を引けるようにする。topics は testScope.topics に保存する topic.name（= questions.topic）。
interface EraMeta {
  eraId: string;
  eraName: string;
  shortName: string;
  whenLabel: string;
  keyTerms: string;
  topics: string[];
}

function buildSubjectEraMetas(
  subject: SubjectId
): Record<Grade, EraMeta[]> {
  const out = { 1: [] as EraMeta[], 2: [] as EraMeta[], 3: [] as EraMeta[] };
  for (const gradeKey of [1, 2, 3] as Grade[]) {
    out[gradeKey] = index[subject][gradeKey].map((era) => {
      const hint = ERA_HINTS[era.eraId];
      return {
        eraId: era.eraId,
        eraName: era.eraName,
        shortName: hint?.shortName ?? era.eraName,
        whenLabel: hint?.whenLabel ?? '',
        keyTerms: hint?.keyTerms ?? '',
        topics: era.topics.map((t) => t.name),
      };
    });
  }
  return out;
}

const eraMetaIndex: Record<SubjectId, Record<Grade, EraMeta[]>> = {
  history: buildSubjectEraMetas('history'),
  english: buildSubjectEraMetas('english'),
  science: buildSubjectEraMetas('science'),
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

export type ScopeSubjectId = 'history' | 'english' | 'science';
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

// functions 用スリムマップを書き出す
const FUNCTIONS_OUT_DIR = join(REPO_ROOT, 'functions', 'src', 'generated');
const eraBanner =
  '// AUTO-GENERATED by scripts/generate-line-scope-index.ts\n' +
  '// 公式LINE トーク内「出題範囲設定」フロー（Quick Reply 逐次選択）用の時代メタ。\n' +
  '// webhook が src/ を import せず eraId -> 表示名/短縮名/時期/代表用語/配下topic名 を引くためのマップ。\n' +
  '// topics は testScope.topics に保存する topic.name（= Firestore questions.topic）。\n' +
  '// Do not edit manually. Run: npx tsx scripts/generate-line-scope-index.ts\n\n';

const eraTypes = `export interface EraMeta {
  eraId: string;
  eraName: string;
  shortName: string;
  whenLabel: string;
  keyTerms: string;
  topics: string[];
}

export type ScopeSubjectId = 'history' | 'english' | 'science';
export type ScopeGrade = 1 | 2 | 3;

`;

const eraBody = `export const lineScopeEras: Record<ScopeSubjectId, Record<ScopeGrade, EraMeta[]>> = ${JSON.stringify(
  eraMetaIndex,
  null,
  2
)};\n`;

const eraOutPath = join(FUNCTIONS_OUT_DIR, 'line-scope-eras.generated.ts');
writeFileSync(eraOutPath, eraBanner + eraTypes + eraBody, 'utf-8');

// サマリ出力
for (const subject of ['history', 'english', 'science'] as SubjectId[]) {
  for (const grade of [1, 2, 3] as Grade[]) {
    const eras = index[subject][grade];
    const topicCount = eras.reduce((n, e) => n + e.topics.length, 0);
    console.log(
      `[${subject} g${grade}] ${eras.length} eras / ${topicCount} topics`
    );
  }
}
console.log(`\n-> ${outPath}`);
console.log(`-> ${eraOutPath}`);

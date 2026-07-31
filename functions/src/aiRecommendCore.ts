/**
 * 「今日のおすすめ」の決定（純粋ロジック）。
 *
 * 毎日の個別メッセージで**何をすすめるか**を、その子の状況から決める。
 *
 * ## なぜ AI に決めさせないか
 * AI に「今日は何をやろう」と自由に決めさせると、存在しない単元を勧めたり、
 * 毎日ちがう方針でブレたりする。**何をすすめるかはコードが決め、AI は言い回しだけ書く。**
 * （単元名の自由作文を禁じている `studyPlanCore` / `aiTopicResolver` と同じ思想）
 *
 * ## 優先順位（上から順に見て、最初に当たったものを採用）
 * | # | 条件 | すすめる内容 |
 * |---|---|---|
 * | 1 | 学習プランがあり、今日の単元が決まっている | **プランの今日の単元** |
 * | 2 | 期間内につまずいた単元がある | **その単元の復習** |
 * | 3 | 長期的なニガテ（`aiContext`）がある | **そのニガテの復習** |
 * | 4 | 直近に学習した単元がある | **その次の単元**（前へ進む） |
 * | 5 | しばらく学習していない | **前回の続き**（無ければ最初の単元） |
 * | 6 | 何も記録が無い | **最初の単元** |
 *
 * 副作用なし・環境非依存。
 */

import type { AiContext } from './aiContextCore';
import type { LookbackSummary } from './aiDailyMessageCore';

/** おすすめの種類（文面のトーンを変えるのに使う）。 */
export type RecommendKind =
  /** プランに沿って進める */
  | 'plan'
  /** 最近つまずいた単元の復習 */
  | 'review_recent'
  /** 長期的なニガテの復習 */
  | 'review_weak'
  /** 次の単元へ進む */
  | 'next'
  /** 久しぶりなので軽く再開 */
  | 'restart'
  /** はじめの一歩 */
  | 'start';

export interface Recommendation {
  kind: RecommendKind;
  /** すすめる単元キー（教材に実在するもの） */
  topicKey: string;
  /** なぜこれをすすめるか（AI に渡す。ユーザーにそのまま出す文ではない） */
  reason: string;
}

/** 単元の並び（章 → 章内の位置）。「次の単元」を出すのに使う。 */
export interface TopicOrderEntry {
  key: string;
  name: string;
  chapter: string;
  anchor: number;
}

export interface RecommendInput {
  /** 今日のプランの単元（`studyPlanCore.pickTodayTopicKey` の結果） */
  planTopicKey?: string | null;
  /** 期間内の実績 */
  summary: LookbackSummary;
  /** 長期の学習分析 */
  context?: AiContext;
  /** 教材の単元一覧（並び順） */
  topics: TopicOrderEntry[];
  /** 単元名 → キーの解決（`aiContext` / `summary` は単元名しか持たないため） */
  keyByName: (name: string) => string | null;
}

/**
 * 今日のおすすめを決める。
 * 教材が1件も無いときだけ null（通常は必ず何かを返す）。
 */
export function decideRecommendation(
  input: RecommendInput
): Recommendation | null {
  const { topics } = input;
  if (topics.length === 0) return null;

  // 1. プランがあればそれに従う（本人と決めたものが最優先）
  if (input.planTopicKey && hasKey(topics, input.planTopicKey)) {
    return {
      kind: 'plan',
      topicKey: input.planTopicKey,
      reason: '本人と決めた学習プランで、今日はこの単元をやる予定',
    };
  }

  // 2. 期間内につまずいた単元
  for (const t of input.summary.weakTopics) {
    const key = input.keyByName(t.topic);
    if (key && hasKey(topics, key)) {
      return {
        kind: 'review_recent',
        topicKey: key,
        reason: `${t.total}問中${t.correct}問正解で、まだ固まっていない単元`,
      };
    }
  }

  // 3. 長期的なニガテ
  for (const t of input.context?.weaknesses ?? []) {
    const key = input.keyByName(t.topic);
    if (key && hasKey(topics, key)) {
      return {
        kind: 'review_weak',
        topicKey: key,
        reason: `これまでの正答率が${t.rate}%で、くり返し間違えている単元`,
      };
    }
  }

  // 4/5. 直近に取り組んだ単元を起点にする
  const lastKey = findLastStudiedKey(input);
  if (lastKey) {
    // しばらく空いていれば「前回の続き」、続いていれば「次へ」
    if (input.summary.isSilent) {
      return {
        kind: 'restart',
        topicKey: lastKey,
        reason:
          'しばらく間があいているので、前回やっていた単元から軽く再開する',
      };
    }
    const next = findNextTopicKey(topics, lastKey);
    if (next) {
      return {
        kind: 'next',
        topicKey: next,
        reason: '直近の単元が進んでいるので、次の単元へ進む',
      };
    }
    // 最後の単元まで来ていたら、その単元の復習にする
    return {
      kind: 'review_recent',
      topicKey: lastKey,
      reason: '最後の単元まで来ているので、仕上げに復習する',
    };
  }

  // 6. 何も記録が無い
  return {
    kind: 'start',
    topicKey: topics[0].key,
    reason: 'まだ学習の記録が無いので、最初の単元からはじめる',
  };
}

function hasKey(topics: TopicOrderEntry[], key: string): boolean {
  return topics.some((t) => t.key === key);
}

/** 直近に取り組んだ単元のキー（期間内 → 長期分析の順に探す）。 */
function findLastStudiedKey(input: RecommendInput): string | null {
  for (const t of input.summary.topics) {
    const key = input.keyByName(t.topic);
    if (key && hasKey(input.topics, key)) return key;
  }
  const most = input.context?.mostPracticed;
  if (most) {
    const key = input.keyByName(most.topic);
    if (key && hasKey(input.topics, key)) return key;
  }
  return null;
}

/**
 * 教材の並び順で「次の単元」を返す。最後まで来ていたら null。
 * 並びは（章番号, 章内の位置）の昇順。
 */
export function findNextTopicKey(
  topics: TopicOrderEntry[],
  currentKey: string
): string | null {
  const sorted = [...topics].sort(
    (a, b) => a.chapter.localeCompare(b.chapter) || a.anchor - b.anchor
  );
  const idx = sorted.findIndex((t) => t.key === currentKey);
  if (idx < 0 || idx + 1 >= sorted.length) return null;
  return sorted[idx + 1].key;
}

/** おすすめの種類ごとの、AI に渡す方針。 */
const KIND_GUIDANCE: Record<RecommendKind, string> = {
  plan: '本人と決めたプラン通りなので、素直に後押しする。',
  review_recent:
    'つまずいた直後なので、責めずに「もう一回やると固まるよ」の姿勢で。できなかったことを指摘しすぎない。',
  review_weak:
    'ずっと苦戦している単元なので、重くならないよう「1問だけ」「5分だけ」と軽く誘う。',
  next: '順調なので、前へ進む気持ちよさを後押しする。',
  restart:
    '久しぶりなので、まず「おかえり」の気持ちで。ハードルをうんと下げて、前回の続きに軽く戻す。休んでいたことを責めない。',
  start: 'はじめの一歩なので、やさしく・短く・迷わせない。',
};

/**
 * おすすめを AI に渡す素材テキストにする。
 * **単元名とリンクはコードが決めた値**なので、AI に作り直させない。
 */
export function buildRecommendSourceText(opts: {
  recommendation: Recommendation;
  topicName: string;
  volume: string;
}): string {
  const { recommendation } = opts;
  return [
    '【今日のおすすめ（システムが決定済み・変更しない）】',
    `・単元: ${opts.volume} ${opts.topicName}`,
    `・理由: ${recommendation.reason}`,
    `・声かけの方針: ${KIND_GUIDANCE[recommendation.kind]}`,
    '',
    '※ この単元以外をすすめないこと。単元名を言いかえたり短くしたりしない。',
    '※ リンクは自動でボタンとして添えるので、URL は書かない。',
  ].join('\n');
}

/** AI 生成に失敗したときの、おすすめ入りフォールバック文。 */
export function buildFallbackRecommendText(
  recommendation: Recommendation,
  topicName: string
): string {
  switch (recommendation.kind) {
    case 'restart':
      return `おかえり！ムリしなくて大丈夫だよ。\nきょうは「${topicName}」を1問だけ、どうかな？`;
    case 'review_weak':
    case 'review_recent':
      return `きょうは「${topicName}」をもう一回だけ見てみない？\n5分でいいから、きっと前より分かるよ😊`;
    case 'start':
      return `はじめの一歩！\nまずは「${topicName}」からいってみよう😊`;
    case 'plan':
      return `きょうのプランは「${topicName}」だよ。\n下のボタンからすぐ始められるよ😊`;
    default:
      return `きょうは「${topicName}」に進んでみよう！\nいい調子だよ😊`;
  }
}

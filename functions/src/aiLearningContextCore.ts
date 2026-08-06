/**
 * 公式LINE の「学習のできごと」を AI の文脈へ橋渡しする（純粋ロジック）。
 *
 * ## 何を解決するか
 * AI チャットの履歴には**チャットのやり取りしか入らない**。ユーザーが
 * webhook 側（今日の1問 / もう1問 / 苦手を復習）で問題に答えても、AI から見ると
 * 「直近に出した問題1件（`lastQuestion`）」しか分からず、**解いたのか・合っていたのか
 * すら知らない**。そのため会話が学習の実態から浮く（「さっきの問題どうだった？」に
 * 答えられない／ニガテを踏まえた声かけができない）。
 *
 * ここでは追加の Firestore read/write を**1件も増やさずに**、次の2つを文脈にする:
 *
 * | 何 | 出どころ | 追加コスト |
 * |---|---|---|
 * | 直近の学習イベント（いつ・どの単元・正誤） | `users/{uid}.aiEvents`（`onAnswerCreated` の既存 transaction に相乗り） | write 0（同じ `tx.set`） |
 * | ニガテ／得意な単元 | `users/{uid}.stats.byTopic`（既に集計済み） | **read 0・write 0** |
 *
 * どちらも会話時は**取得済みの user doc から読むだけ**（CLAUDE.md の read 規律）。
 *
 * 副作用なし・環境非依存（firebase-admin を import しない）。
 */

/** `users/{uid}.aiEvents` に保持する件数。user doc を太らせない範囲に抑える。 */
export const MAX_AI_EVENTS = 10;

/** 文脈に出す「ニガテ」「得意」の最大件数。 */
export const MAX_WEAK_TOPICS = 3;
export const MAX_STRONG_TOPICS = 2;

/**
 * 単元を「ニガテ／得意」と判定するのに必要な最低出題数。
 * 1〜2問の偶然でニガテ扱いすると、事実でない決めつけを AI がしてしまう。
 */
export const MIN_TOPIC_ATTEMPTS = 3;

/** これ未満の正答率をニガテとみなす。 */
export const WEAK_ACCURACY = 0.6;
/** これ以上の正答率を得意とみなす。 */
export const STRONG_ACCURACY = 0.8;

/** 文脈に出すイベントの古さの上限（14日）。古すぎる話を持ち出さない。 */
export const EVENT_MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000;

/**
 * 学習のできごと1件。**キーを短くしてある**（3,000人 × 10件を user doc に持つため）。
 */
export interface AiLearningEvent {
  /** 発生時刻（ms） */
  t: number;
  /** 種別。いまは回答のみ。増やすときはここに足す（例 'scope' / 'review'） */
  k: 'answer';
  /** 単元名（`questions.topic` と同じ表記） */
  topic?: string;
  /** 正解したか */
  ok?: boolean;
}

/** 不正な値が混じっても壊れないように検証する。 */
function isValidEvent(v: unknown): v is AiLearningEvent {
  if (typeof v !== 'object' || v === null) return false;
  const e = v as Record<string, unknown>;
  return typeof e.t === 'number' && Number.isFinite(e.t) && e.k === 'answer';
}

/** 既存の配列を検証して取り出す（型が違う・壊れている要素は捨てる）。 */
export function readAiEvents(raw: unknown): AiLearningEvent[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(isValidEvent);
}

/**
 * イベントを1件追記して、新しい配列を返す（古いものから落ちる）。
 *
 * `onAnswerCreated` の transaction 内で呼ぶ想定。既に読んである user doc の値を
 * 渡すので**追加 read は発生しない**し、書き戻しも既存の `tx.set` に相乗りする。
 */
export function appendAiEvent(
  prev: unknown,
  event: AiLearningEvent,
  max: number = MAX_AI_EVENTS
): AiLearningEvent[] {
  const list = readAiEvents(prev);
  list.push(event);
  return list.slice(-Math.max(1, max));
}

/** JST の「M/D」表記。 */
function jstMonthDay(ms: number): string {
  const jst = new Date(ms + 9 * 60 * 60 * 1000);
  return `${jst.getUTCMonth() + 1}/${jst.getUTCDate()}`;
}

/**
 * 直近の学習イベントを文脈テキストにする。
 *
 * ⚠️ **AI に「解いた」と断言させるのはここに出ている事実だけ**にする。
 * 実会話の事故（2026-07-19）で、AI が実行していない操作を「やっておいたよ」と
 * 答える問題があったため、文言でも「ここに無いことは知らない」と釘を刺す。
 */
export function buildRecentEventsContext(raw: unknown, now: Date): string {
  const events = readAiEvents(raw)
    .filter((e) => now.getTime() - e.t <= EVENT_MAX_AGE_MS)
    .sort((a, b) => a.t - b.t);
  if (events.length === 0) return '';

  const lines = events.map((e) => {
    const mark =
      e.ok === true ? '⭕正解' : e.ok === false ? '❌まちがえた' : '回答';
    const topic = e.topic ? `「${e.topic}」` : '（単元不明）';
    return `- ${jstMonthDay(e.t)} ${topic} ${mark}`;
  });

  return (
    `\n\n# この子が最近といた問題（公式LINEでの実際の学習・新しいものが下）\n` +
    `チャットの外（毎日の1問・もう1問・苦手を復習）で解いた記録。` +
    `「さっきの問題どうだった？」「昨日なにやったっけ？」に**この記録で**答える。\n` +
    `まちがえた単元は、責めずに「もう一回やってみる？」と声をかけてよい。\n` +
    `⚠️ ここに無いことは知らない。解いていない問題を解いたことにしない。\n` +
    lines.join('\n')
  );
}

/** 単元ごとの成績（`stats.byTopic` の1件）。 */
interface TopicStat {
  topic: string;
  total: number;
  correct: number;
  accuracy: number;
}

/** `stats.byTopic` を検証して取り出す。 */
export function readTopicStats(raw: unknown): TopicStat[] {
  if (typeof raw !== 'object' || raw === null) return [];
  const out: TopicStat[] = [];
  for (const [topic, value] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof value !== 'object' || value === null) continue;
    const v = value as Record<string, unknown>;
    const total = typeof v.total === 'number' ? v.total : 0;
    const correct = typeof v.correct === 'number' ? v.correct : 0;
    // 壊れた値（correct > total・負値）は捨てる。決めつけの材料にしない。
    if (!Number.isFinite(total) || total < MIN_TOPIC_ATTEMPTS) continue;
    if (!Number.isFinite(correct) || correct < 0 || correct > total) continue;
    out.push({ topic, total, correct, accuracy: correct / total });
  }
  return out;
}

/**
 * ニガテ・得意な単元を文脈テキストにする（`stats.byTopic` 由来）。
 *
 * **追加 read ゼロ**。`onAnswerCreated` が回答のたびに集計している値をそのまま使う。
 * 「私の苦手どこ？」に実データで答えられるようになり、復習の提案も的を射る。
 */
export function buildWeakTopicsContext(raw: unknown): string {
  const stats = readTopicStats(raw);
  if (stats.length === 0) return '';

  const weak = stats
    .filter((s) => s.accuracy < WEAK_ACCURACY)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, MAX_WEAK_TOPICS);
  const strong = stats
    .filter((s) => s.accuracy >= STRONG_ACCURACY)
    .sort((a, b) => b.accuracy - a.accuracy)
    .slice(0, MAX_STRONG_TOPICS);

  if (weak.length === 0 && strong.length === 0) return '';

  const fmt = (s: TopicStat) =>
    `「${s.topic}」${s.correct}/${s.total}問正解（${Math.round(s.accuracy * 100)}%）`;

  const parts: string[] = [];
  if (weak.length > 0) {
    parts.push(`- ニガテぎみ: ${weak.map(fmt).join(' / ')}`);
  }
  if (strong.length > 0) {
    parts.push(`- とくい: ${strong.map(fmt).join(' / ')}`);
  }

  return (
    `\n\n# この子の単元ごとの成績（実データ・正確）\n` +
    `「私のニガテはどこ？」「何を復習したらいい？」には**この数字で**答える。` +
    `推測で単元名を作らない。\n` +
    `ニガテを伝えるときは責めずに、「ここを一緒にやろう」と前向きに誘う。` +
    `とくいな単元はしっかりほめる。\n` +
    `復習をすすめるときは「苦手を復習」ボタンを押すと、まちがえた問題から出せると案内してよい。\n` +
    parts.join('\n')
  );
}

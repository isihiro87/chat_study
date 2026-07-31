/**
 * 会話から「どの単元の話か」を特定し、教材への導線とプロンプト接地を作る（純粋ロジック）。
 *
 * 目的（`requirements.md` §機能4・フェーズ9）:
 *   生徒が「徳川家康の勉強がしたい」と言ったら、
 *     ① その単元の**参考書・問題集ページのリンクをすぐ渡す**（迷わせない）
 *     ② その単元の**本文をプロンプトに注入**して、教材と食い違わない説明をする
 *
 * ## なぜ全文検索 RAG を作らないか
 * 教材は 92 単元と有限で、`REFERENCE_TOPICS`（ビルド時生成）に本文・用語まで載っている。
 * キーワード照合で単元を1つ選べば、そこから本文を丸ごと渡せる。
 * **実行時の Firestore read はゼロ**（埋め込み索引は後続フェーズ）。
 *
 * ## 単元名は自由作文させない
 * AI に単元名を作らせると存在しない名前になる。**候補は必ずこの索引から選ぶ**。
 */

import {
  REFERENCE_TOPICS,
  type ReferenceTopic,
} from './generated/reference-topics.generated';

/** つづもんの教材サイト。 */
export const TSUDUMON_BASE_URL = 'https://tsudumon.jp';

/** 照合に使う索引の1件。 */
interface TopicIndexEntry {
  key: string;
  topic: ReferenceTopic;
  /** 章番号（"08" など。URL に使う） */
  chapter: string;
  /** 章内での位置（1始まり）。参考書ページの #t{n} アンカーに一致する */
  anchor: number;
  /** 照合対象のテキスト（タイトル・単元名・要点・用語） */
  haystack: string;
  /** 用語（完全一致の重み付けに使う） */
  terms: string[];
}

/**
 * 索引を1度だけ組む（モジュールスコープ＝Cloud Functions のインスタンス再利用に乗る）。
 *
 * ⚠️ `anchor` は「章内でのキーの出現順」。`export_reference_topics.py` が
 * `{chapter}.json` の `topics` 配列順にキーを積むため、参考書 Web 版の
 * `#t{i}`（`enumerate(topics, 1)`）と一致する。
 */
let indexCache: TopicIndexEntry[] | null = null;

function getIndex(): TopicIndexEntry[] {
  if (indexCache) return indexCache;
  const perChapter = new Map<string, number>();
  const entries: TopicIndexEntry[] = [];

  for (const [key, topic] of Object.entries(REFERENCE_TOPICS)) {
    const chapter = key.slice(0, 2);
    const n = (perChapter.get(chapter) ?? 0) + 1;
    perChapter.set(chapter, n);

    const terms = (topic.terms ?? []).map((t) => t.term).filter(Boolean);
    // 本文まで含めると人物名・地名を拾えて再現率が上がる。
    const haystack = [
      topic.title,
      topic.name,
      topic.summary,
      ...(topic.learn ?? []),
      ...terms,
      ...(topic.terms ?? []).map((t) => t.desc),
      topic.body,
    ]
      .filter(Boolean)
      .join('\n')
      .normalize('NFKC');

    entries.push({ key, topic, chapter, anchor: n, haystack, terms });
  }
  indexCache = entries;
  return entries;
}

/** テスト用: 索引キャッシュを捨てる。 */
export function __resetTopicIndex(): void {
  indexCache = null;
}

/** 解決結果。 */
export interface ResolvedTopic {
  key: string;
  /** 単元の表示名（例「江戸幕府の成立と支配のしくみ」） */
  name: string;
  /** 巻の表示名（例「歴史 ⑧」） */
  volume: string;
  grade: string;
  chapter: string;
  anchor: number;
  score: number;
  /** 参考書ページ（該当単元まで飛ぶ） */
  referenceUrl: string;
  /** 問題集ページ（該当単元まで飛ぶ） */
  workbookUrl: string;
}

/** 検索語として無意味な語（拾うとノイズになる）。 */
const STOP_WORDS = new Set([
  '勉強',
  'べんきょう',
  '学習',
  '問題',
  '教えて',
  'おしえて',
  'したい',
  'やりたい',
  'について',
  'ところ',
  'こと',
  'とこ',
  '時代',
  '歴史',
  '日本',
  '説明',
  'わかる',
  'わからない',
]);

/** 発話から検索語を抜き出す。 */
export function extractQueryTerms(userText: string): string[] {
  const text = (userText ?? '').normalize('NFKC');
  // 漢字2文字以上・カタカナ2文字以上・英字3文字以上を候補にする。
  // ⚠️ 漢字の並びに「ヶ / ヵ」を含める。含めないと「関ヶ原」が
  //    関 / ヶ / 原 に割れて全部1文字になり、**拾えなくなる**（実発話の検証で判明）。
  const found =
    text.match(/[一-龠々ヶヵ]{2,}|[ァ-ヴー]{2,}|[A-Za-z]{3,}/g) ?? [];
  return [...new Set(found)]
    .map((w) => w.replace(/^[ヶヵ]+|[ヶヵ]+$/g, '')) // 前後に付いた ヶ は落とす
    .filter((w) => w.length >= 2 && !STOP_WORDS.has(w));
}

/**
 * 発話から単元を解決する。
 *
 * スコア（強い順に1つだけ加点する）:
 *   - 単元名（`name`）に含まれる … +10
 *   - 用語（`terms`）と完全一致 … +6
 *   - 巻タイトル（`title`）に含まれる … +2
 *   - 要点・用語説明・本文に含まれる … +1
 *
 * ⚠️ `title` は**巻のタイトル**で章内の全単元に共通（例: 05章はどの単元も「武士と鎌倉幕府」）。
 *    これを単元名と同じ重みにすると、「鎌倉幕府」で章内の別単元（院政と平氏の政治）が
 *    当たってしまう（テストで検出）。だから `name` より明確に軽くする。
 *
 * @returns スコア降順。閾値未満は返さない（＝当たりが無ければ空配列）
 */
export function resolveTopics(
  userText: string,
  opts?: { limit?: number; minScore?: number }
): ResolvedTopic[] {
  const terms = extractQueryTerms(userText);
  if (terms.length === 0) return [];

  const limit = opts?.limit ?? 3;
  const minScore = opts?.minScore ?? 6;

  const scored: ResolvedTopic[] = [];
  for (const entry of getIndex()) {
    let score = 0;
    const nameText = entry.topic.name.normalize('NFKC');
    const volumeTitle = entry.topic.title.normalize('NFKC');

    for (const q of terms) {
      if (nameText.includes(q)) {
        score += 10;
        continue;
      }
      if (entry.terms.some((t) => t.normalize('NFKC') === q)) {
        score += 6;
        continue;
      }
      if (volumeTitle.includes(q)) {
        // 巻タイトルは章内で共通なので「章は合っている」程度の弱い信号。
        score += 2;
        continue;
      }
      if (entry.haystack.includes(q)) {
        // 本文ヒットは**語の具体性**で重みを変える。
        // 3文字以上の日本語は固有名詞・専門用語のことが多く（関ヶ原・御成敗式目）、
        // 本文に出てくれば十分強い信号。2文字は「政治」「文化」のように一般的なので弱く扱う。
        // ⚠️ 一律 +1 にすると「関ヶ原の戦いについて教えて」が拾えない（実発話の検証で判明）。
        score += q.length >= 3 ? 6 : 1;
      }
    }

    if (score >= minScore) {
      scored.push(toResolved(entry, score));
    }
  }

  scored.sort((a, b) => b.score - a.score || a.key.localeCompare(b.key));
  return scored.slice(0, limit);
}

function toResolved(entry: TopicIndexEntry, score: number): ResolvedTopic {
  return {
    key: entry.key,
    name: entry.topic.name,
    volume: entry.topic.volume,
    grade: entry.topic.grade,
    chapter: entry.chapter,
    anchor: entry.anchor,
    score,
    referenceUrl: buildReferenceUrl(entry.chapter, entry.anchor),
    workbookUrl: buildWorkbookUrl(entry.chapter, entry.anchor),
  };
}

/** 参考書ページの URL（該当単元のタブまで飛ぶ）。 */
export function buildReferenceUrl(chapter: string, anchor: number): string {
  return `${TSUDUMON_BASE_URL}/ref/${chapter}/#t${anchor}`;
}

/**
 * 問題集ページの URL。
 * ⚠️ 問題集側は先頭タブが「年表」なので、参考書の単元位置 +1 になる
 * （`generate_reference_web.py` の `wb_index[tid] = i + 2` と、参考書側の
 *  `ref_index[tid] = i`（1始まり）の差＝+1）。
 */
export function buildWorkbookUrl(chapter: string, anchor: number): string {
  return `${TSUDUMON_BASE_URL}/wb/${chapter}/#t${anchor + 1}`;
}

/** 単元キーから直接引く（ツール実行で単元を指定されたとき用）。 */
export function resolveTopicByKey(key: string): ResolvedTopic | null {
  const entry = getIndex().find((e) => e.key === key);
  return entry ? toResolved(entry, 0) : null;
}

/**
 * 全単元の一覧（キー・表示名・巻・章）。
 * プラン検証の「実在キー集合」と、AI へ渡す候補カタログの絞り込みに使う。
 */
export function listAllTopics(): Array<{
  key: string;
  name: string;
  volume: string;
  grade: string;
  chapter: string;
  /** 章内の位置（1始まり）。「次の単元」を決めるのに使う */
  anchor: number;
}> {
  return getIndex().map((e) => ({
    key: e.key,
    name: e.topic.name,
    volume: e.topic.volume,
    grade: e.topic.grade,
    chapter: e.chapter,
    anchor: e.anchor,
  }));
}

/**
 * 教材接地の文脈をプロンプトへ足す。
 *
 * 参考書の本文をそのまま渡すので、AI の説明が**教材と同じ事実・同じ流儀**になる。
 * 単元が解決できなかったときは空文字（＝接地せず、従来どおり答える）。
 */
export function buildGroundingContext(
  topic: ResolvedTopic | undefined
): string {
  if (!topic) return '';
  const t = REFERENCE_TOPICS[topic.key];
  if (!t) return '';

  const terms = (t.terms ?? [])
    .slice(0, 12)
    .map((x) => `・${x.term}（${x.reading}）: ${x.desc}`)
    .join('\n');
  const learn = (t.learn ?? []).map((x) => `・${x}`).join('\n');
  // 本文は長すぎるとトークンを食うので頭を押さえる。
  const body = (t.body ?? '').slice(0, 2500);

  return (
    `\n\n# いま話題になっている単元の教材（つづもん参考書・正本）\n` +
    `この子は「${t.name}」について聞いている。**下の教材の内容にそって答えて。**\n` +
    `⚠️ 教材に書かれていることと違う説明をしない。教材に無い年号・用語を足さない。\n` +
    `⚠️ 教材で扱っていない細部を聞かれたら、知ったかぶりせず「参考書には載っていない」と伝える。\n\n` +
    `【単元】${t.volume} ${t.name}（${t.grade}）\n` +
    `【この単元でわかること】\n${learn}\n` +
    `【要約】${t.summary}\n` +
    `【重要語】\n${terms}\n` +
    `【本文】\n${body}`
  );
}

/**
 * 「この単元を勉強したい」に対して添えるリンク導線（LINE の Quick Reply 用）。
 *
 * LINE の Quick Reply ラベルは20文字までなので、単元名は詰めて入れる。
 */
export function buildTopicQuickReply(topic: ResolvedTopic): {
  items: Array<{ type: 'action'; action: Record<string, string> }>;
} {
  return {
    items: [
      {
        type: 'action',
        action: {
          type: 'uri',
          label: '📖 参考書をひらく',
          uri: topic.referenceUrl,
        },
      },
      {
        type: 'action',
        action: {
          type: 'uri',
          label: '✏️ 問題を解く',
          uri: topic.workbookUrl,
        },
      },
    ],
  };
}

/** 「勉強したい」系の意図（リンクを添えるべきか）を判定する。 */
const STUDY_INTENT_PATTERNS: RegExp[] = [
  /(勉強|べんきょう|学習|復習|ふくしゅう|予習)[^。\n]{0,6}(したい|する|やりたい|やる|しよう)/,
  /(やりたい|やろう|はじめたい|始めたい|とりかかりたい)/,
  /(教えて|おしえて|説明して|せつめいして|知りたい|しりたい|わかりたい)/,
  /(問題|もんだい|クイズ)[^。\n]{0,6}(といて|解きたい|ときたい|ちょうだい|ある)/,
  /(参考書|テキスト)[^。\n]{0,6}(どこ|ひらき|開き|見たい|みたい)/,
  /(について|のところ|のとこ)/,
];

export function detectStudyIntent(userText: string): boolean {
  const text = (userText ?? '').normalize('NFKC');
  if (!text.trim()) return false;
  return STUDY_INTENT_PATTERNS.some((re) => re.test(text));
}

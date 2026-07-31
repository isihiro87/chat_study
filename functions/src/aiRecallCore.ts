/**
 * 過去会話の「検索的想起」の純粋ロジック。
 *
 * つづもん（有料）では全会話を `aiThreads/{uid}/segments/{seq}` に永続保存する。
 * 直近ウィンドウ（30ターン）に入らない古い会話は、**必要なターンだけ**
 * セグメント要約（digests）を照合して原文を引き戻す。
 * これが「何ヶ月前の話でも覚えている」体験の実装（`requirements.md` §機能6）。
 *
 * ## 設計上の要点
 * - **トリガーが無ければ検索しない。** 毎ターン全文検索すると read もコストも無駄。
 * - **引く量に上限を置く。** 最大2セグメント・8,000トークン（⑤層のキャップ）。
 * - 要約は「履歴の代わり」ではなく**検索インデックス**として使う。原文に戻れる。
 *
 * 副作用なし・環境非依存（Firestore を import しない）。
 */

/** セグメント要約の軽量形（照合に必要な項目だけ）。 */
export interface DigestLite {
  seq: number;
  summary: string;
  keywords: string[];
  /** 期間（ms）。同点時に新しい方を優先するのに使う */
  fromMs?: number;
  toMs?: number;
  /** 概算トークン数（未指定なら summary 長から推定） */
  approxTokens?: number;
}

/** 想起で引くセグメントの上限（⑤層）。 */
export const MAX_RECALL_SEGMENTS = 2;
export const MAX_RECALL_TOKENS = 8_000;

/**
 * 「過去の会話を参照している」ことを示す表現。
 * ここに当たらない場合は（単元名一致も無ければ）検索しない。
 */
const REFERENCE_PATTERNS: RegExp[] = [
  // 時間を指す語＋「話す/言う/相談する/聞く/質問する」。
  // ⚠️ 動詞を「話|言」だけにすると「先週相談した」を取りこぼす（テストで検出）。
  /(前|まえ|以前|いぜん|昨日|きのう|先週|せんしゅう|前回|ぜんかい)に?(話|はな|言|い|相談|そうだん|聞|き|質問|しつもん)/,
  /(さっき|この前|このまえ|あの時|あのとき)/,
  /(覚えてる|おぼえてる|覚えて[るい]|記憶して)/,
  /(言った|いった|話した|はなした|相談した|そうだんした)(よ|っけ|け|じゃん|でしょ)/,
  /(っけ|たっけ)[？?]?$/,
  /(の話|のはなし)(だけど|なんだけど|は)/,
];

/** 参照表現から手がかり語を拾うための、内容語らしい塊。 */
const CONTENT_WORD_RE = /[一-龠々]{2,}|[ァ-ヴー]{2,}|[ぁ-ん]{3,}|[A-Za-z]{3,}/g;

/** 手がかりとして無意味な語（拾っても検索精度を落とすだけ）。 */
const STOP_WORDS = new Set([
  'こと',
  'それ',
  'あれ',
  'これ',
  'とき',
  'ところ',
  'ため',
  'よう',
  'はなし',
  'おぼえてる',
  'おしえて',
  'について',
  'だけど',
  'なんだけど',
  'ちょっと',
  'いっしょ',
  'じぶん',
  'せんせい',
  'ありがとう',
]);

export interface RecallIntent {
  /** 過去会話の検索が必要か */
  needed: boolean;
  /** 照合に使う手がかり語 */
  hints: string[];
  /** どの判定で needed になったか（ログ・計測用） */
  via?: 'reference' | 'topic';
}

/**
 * 過去会話の想起が必要かを判定する（決定論）。
 *
 * @param userText ユーザーの発話
 * @param knownTopics 実在する単元名の集合（会話に単元名が出たら想起の手がかりにする）
 *
 * どちらにも当たらなければ `needed: false`。呼び出し側は、それでも曖昧な場合に
 * `classify` モデルへ回してよい（本関数は安いパスだけを担う）。
 */
export function detectRecallIntent(
  userText: string,
  knownTopics?: ReadonlySet<string>
): RecallIntent {
  const text = (userText ?? '').normalize('NFKC');
  if (!text.trim()) return { needed: false, hints: [] };

  const hasReference = REFERENCE_PATTERNS.some((re) => re.test(text));

  // 単元名の直接一致（「鎌倉幕府の続きやりたい」など）。
  const topicHits: string[] = [];
  if (knownTopics) {
    for (const topic of knownTopics) {
      if (topic.length >= 3 && text.includes(topic)) topicHits.push(topic);
    }
  }

  if (!hasReference && topicHits.length === 0) {
    return { needed: false, hints: [] };
  }

  const hints = dedupe([...topicHits, ...extractHints(text)]).slice(0, 8);
  return {
    needed: true,
    hints,
    via: hasReference ? 'reference' : 'topic',
  };
}

/** 発話から内容語を手がかりとして抜き出す。 */
function extractHints(text: string): string[] {
  const found = text.match(CONTENT_WORD_RE) ?? [];
  return found.filter((w) => !STOP_WORDS.has(w) && w.length >= 2);
}

function dedupe(list: string[]): string[] {
  return [...new Set(list)];
}

export interface ScoredSegment {
  seq: number;
  score: number;
}

/**
 * 手がかり語と digests を照合して、引くセグメントを選ぶ。
 *
 * スコア = keywords の一致数 × 2 ＋ summary への部分一致数。
 * 同点なら**新しいセグメント（seq が大きい方）を優先**する。
 *
 * トークン上限（`MAX_RECALL_TOKENS`）と件数上限（`MAX_RECALL_SEGMENTS`）の
 * 両方を満たす範囲でだけ返す。1件も一致しなければ空配列（＝原文は引かない）。
 */
export function pickRecallSegments(
  hints: string[],
  digests: DigestLite[],
  opts?: { maxSegments?: number; maxTokens?: number }
): number[] {
  const maxSegments = opts?.maxSegments ?? MAX_RECALL_SEGMENTS;
  const maxTokens = opts?.maxTokens ?? MAX_RECALL_TOKENS;
  if (hints.length === 0 || digests.length === 0) return [];

  const scored: ScoredSegment[] = [];
  for (const d of digests) {
    const score = scoreDigest(hints, d);
    if (score > 0) scored.push({ seq: d.seq, score });
  }
  if (scored.length === 0) return [];

  scored.sort((a, b) => b.score - a.score || b.seq - a.seq);

  const bySeq = new Map(digests.map((d) => [d.seq, d]));
  const picked: number[] = [];
  let tokens = 0;
  for (const s of scored) {
    if (picked.length >= maxSegments) break;
    const approx = approxSegmentTokens(bySeq.get(s.seq));
    if (tokens + approx > maxTokens) continue;
    tokens += approx;
    picked.push(s.seq);
  }
  // 時系列順（古い→新しい）で返すと、プロンプトに入れたときの流れが自然。
  return picked.sort((a, b) => a - b);
}

function scoreDigest(hints: string[], d: DigestLite): number {
  const keywords = (d.keywords ?? []).map((k) => k.normalize('NFKC'));
  const summary = (d.summary ?? '').normalize('NFKC');
  let score = 0;
  for (const hint of hints) {
    const h = hint.normalize('NFKC');
    if (keywords.some((k) => k === h || k.includes(h) || h.includes(k))) {
      score += 2;
    } else if (summary.includes(h)) {
      score += 1;
    }
  }
  return score;
}

/**
 * セグメント原文の概算トークン数。
 * `approxTokens` があればそれを使い、無ければ「1セグメント=100メッセージ」の
 * 上限を保守的に見積もる（**多めに見る**＝上限を超えにくくする）。
 */
function approxSegmentTokens(d: DigestLite | undefined): number {
  if (
    d?.approxTokens &&
    Number.isFinite(d.approxTokens) &&
    d.approxTokens > 0
  ) {
    return d.approxTokens;
  }
  return 4_000;
}

/**
 * 引いてきた原文をプロンプトへ差し込む文脈ブロックにする。
 * 「これは過去の会話の記録である」ことを明示し、AI が現在の話と混同しないようにする。
 */
export function buildRecallContext(
  segments: Array<{
    seq: number;
    messages: Array<{ role: 'user' | 'model'; text: string }>;
    periodLabel?: string;
  }>
): string {
  if (segments.length === 0) return '';
  const blocks: string[] = [];
  for (const s of segments) {
    const label = s.periodLabel ? `（${s.periodLabel}）` : '';
    const lines = s.messages
      .map((m) => `${m.role === 'user' ? '生徒' : 'あなた'}: ${m.text}`)
      .join('\n');
    blocks.push(`--- 過去の会話${label} ---\n${lines}`);
  }
  return (
    `\n\n# 過去にこの子と話した内容（記録・参考）\n` +
    `相手が「前に話した◯◯」のように過去の会話を指してきたので、該当する記録を渡す。\n` +
    `**これは過去のやり取り**なので、いま起きていることとして話さない。` +
    `内容を踏まえて「あのとき言ってたね」と自然につなげてよい。\n` +
    `記録に無いことは覚えているふりをしない（正直に「もう一度教えて」と聞く）。\n\n` +
    blocks.join('\n\n')
  );
}

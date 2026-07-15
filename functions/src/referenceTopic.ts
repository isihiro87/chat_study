// 参考書QR（t=章番号-topicId, 例 04-shotoku-asuka）→ 単元教材の解決と、
// AI（Gemini）へ渡す「接地情報」の組み立て。Firestore read はゼロ（生成TSをメモリ参照）。
import {
  REFERENCE_TOPICS,
  ReferenceTopic,
} from './generated/reference-topics.generated';

export type { ReferenceTopic } from './generated/reference-topics.generated';

export type RefLevel = 'easy' | 'normal' | 'hard';

export const REF_LEVEL_LABEL: Record<RefLevel, string> = {
  easy: 'やさしい',
  normal: 'ふつう',
  hard: 'むずかしい',
};

/** QRの t 値（例 "04-shotoku-asuka"）から単元教材を引く。無ければ null。 */
export function resolveReferenceTopic(key: string): ReferenceTopic | null {
  if (!key) return null;
  return REFERENCE_TOPICS[key.trim()] ?? null;
}

/** 表示用の単元名（例「歴史④ 古代の国家／聖徳太子と飛鳥文化」）。 */
export function referenceTopicLabel(t: ReferenceTopic): string {
  return `${t.volume} ${t.title}／${t.name}`.trim();
}

/**
 * AIのシステムプロンプトに埋め込む教材本文（RAG的な接地情報）。
 * この単元の内容から外れた話にはAIが逸れないようにする土台。
 */
export function buildReferenceContext(t: ReferenceTopic): string {
  const terms = t.terms
    .map((x) => `・${x.term}${x.reading ? `（${x.reading}）` : ''}：${x.desc}`)
    .join('\n');
  const learn = t.learn.map((x) => `・${x}`).join('\n');
  return [
    `【教科】${t.subject}（${t.grade}）`,
    `【単元】${t.volume} ${t.title}／${t.name}`,
    learn ? `【この単元でわかること】\n${learn}` : '',
    `【教材本文】\n${t.body}`,
    terms ? `【重要語】\n${terms}` : '',
    t.summary ? `【まとめ】${t.summary}` : '',
  ]
    .filter(Boolean)
    .join('\n\n');
}

/** 難易度ごとの、理解度チェック出題方針（システムプロンプトに使う）。 */
export function refLevelGuidance(level: RefLevel): string {
  switch (level) {
    case 'easy':
      return '中学生がまず覚えるべき基本用語・人物・できごとを問う、やさしい一問一答レベル。ヒントを添えてもよい。';
    case 'hard':
      return '出来事の理由・背景・つながりを自分の言葉で説明させる、記述中心の発展レベル。「なぜ」「どうして」を問う。';
    case 'normal':
    default:
      return '基本の理解を確認する標準レベル。用語の意味や出来事の流れを、短めの記述で答えさせる。';
  }
}

/**
 * ユーザーからのテキストメッセージから「再開」意思を検知する純粋関数。
 *
 * 設計（requirements.md §C-3）:
 *   - 復帰機会を逃さないため、誤検知より幅広く検知することを優先
 *   - 部分一致でマッチ
 *   - 否定文（「再開せずに」など）はある程度は受け入れる（ユーザーが
 *     主動的にこのキーワードを含むメッセージを送ること自体がレアであり、
 *     誤検知してもサーバー側の挙動は「おかえり flex + 1問」だけで害が少ないため）
 */

const RESTART_KEYWORDS: readonly string[] = [
  '再開',
  'さいかい',
  '再会', // 「再開」の変換ミスで届く実例あり（2026-07 実会話スナップショット）

  'リスタート',
  'やり直し',
  'やりなおし',
  'また',
  'また始め',
  'またやる',
  'もう一度',
  'もう一回',
  'もういちど',
  '戻って',
  '戻る',
  '戻った',
  '戻ってきた',
  '帰ってきた',
  '久しぶり',
  'ひさしぶり',
  'ひさびさ',
  '休んで',
  '休んでて',
  'サボってた',
  'ごめん',
  '再び',
  '復活',
  'カムバック',
] as const;

/**
 * テキストに復帰意思を表すキーワードが含まれているかを返す。
 *
 * 空文字や undefined は false。
 * 比較は trim 後の全文に対する部分一致。
 */
export function detectRestartIntent(text: string | undefined | null): boolean {
  if (!text) return false;
  const normalized = text.trim();
  if (normalized.length === 0) return false;
  return RESTART_KEYWORDS.some((kw) => normalized.includes(kw));
}

/** 内部公開（テスト用） */
export const RESTART_KEYWORDS_INTERNAL = RESTART_KEYWORDS;

// --- 「問題出して」系リクエストの意図検出（AI 自作問題の多発対策・2026-07） ---

/**
 * 実会話で観測された言い回し（「問題ちょーだい」「一門出して」「もう1問！」等）を
 * カバーする。誤爆を避けるため、解答・質問らしき文（「この問題教えて」等）には
 * マッチしない範囲に限定する。
 */
const QUESTION_REQUEST_RES: readonly RegExp[] = [
  /(問題|もんだい|クイズ)[^\n]{0,8}(出して|だして|出せ|ちょうだい|ちょーだい|ください|下さい|お願い|おねがい|ほしい|欲しい|やりたい|解きたい|ときたい)/,
  /^(なんか|なにか|何か)?(問題|もんだい|クイズ)[!！?？。~〜ー]*$/,
  /^(もう)?(1|一|１)(問|門)(解く|とく|出して|だして)?[!！?？。~〜ー]*$/,
  /(1|一|１)(問|門)(だけ)?(出して|だして|ちょうだい|ちょーだい|お願い|おねがい)/,
];

const SUBJECT_MENTION_WORDS: readonly string[] = [
  '歴史',
  '英語',
  '理科',
  '地理',
  '数学',
  '国語',
  '社会',
];

/**
 * 「問題を出してほしい」意図なら true。webhook はこれを AI に渡さず、
 * 公式の1問を reply で出す（記録に残り、ニガテ分析・範囲設定と連動するため）。
 *
 * 「理科の問題出して」等、教科を名指ししている場合は、登録教科と一致するときだけ
 * true（別教科・未提供教科は AI が教科変更・準備中の案内をするため false）。
 */
export function detectQuestionRequest(
  text: string,
  registeredSubjectLabel: string | null
): boolean {
  const normalized = (text ?? '').trim();
  if (normalized.length === 0) return false;
  if (!QUESTION_REQUEST_RES.some((re) => re.test(normalized))) return false;
  const mentioned = SUBJECT_MENTION_WORDS.filter((w) => normalized.includes(w));
  if (mentioned.length > 0) {
    return (
      registeredSubjectLabel !== null &&
      mentioned.every((w) => w === registeredSubjectLabel)
    );
  }
  return true;
}

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
  "再開",
  "リスタート",
  "やり直し",
  "やりなおし",
  "また",
  "また始め",
  "またやる",
  "もう一度",
  "もう一回",
  "もういちど",
  "戻って",
  "戻る",
  "戻った",
  "戻ってきた",
  "帰ってきた",
  "久しぶり",
  "ひさしぶり",
  "ひさびさ",
  "休んで",
  "休んでて",
  "サボってた",
  "ごめん",
  "再び",
  "復活",
  "カムバック",
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

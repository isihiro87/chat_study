/**
 * 印刷ワークの QR コード → 公式LINE で単元の問題を解く機能の純粋ロジック。
 *
 * QR は `https://line.me/R/oaMessage/{basicId}/?ワーク {単元名}` 形式で、
 * スキャンするとトークに「ワーク {単元名}」という定型文が送信される。
 * lineWebhook の handleMessage がこのプレフィックスを検知し、
 * ここの resolve 結果をもとに該当単元の問題を出題する。
 *
 * 出題する問題は既存の毎日配信プール（QUESTION_INDEX）ではなく、
 * **紙面に印刷された「C 実戦問題」と同一のワーク専用問題**
 * （WORKBOOK_QUESTION_INDEX / `q-wb-history-*`）を使う。
 *
 * 単元名の解決はビルド時生成の index（メモリ）だけで行い、
 * Firestore read はゼロ（CLAUDE.md 読み取りコスト規律）。
 * lineScopeFlow.ts と同じ「純粋ロジック分離」パターンで、jest でテストする。
 */

import type { WorkbookTopicMeta } from './generated/workbook-question-index.generated';
import {
  WORKBOOK_INPUT_INDEX,
  type WorkbookTermQuestion,
  type WorkbookWrittenQuestion,
} from './generated/workbook-input-questions.generated';

/** 「ワーク 律令国家と奈良時代」「ワーク:単元名」等にマッチするプレフィックス */
export const WORKBOOK_PREFIX_RE = /^ワーク[ \u3000:：]*/;

/**
 * テキストからワーク単元名を取り出す。
 * 「ワーク」プレフィックスがない、または単元名部分が空なら null。
 */
export function parseWorkbookText(text: string): string | null {
  const trimmed = text.trim();
  if (!WORKBOOK_PREFIX_RE.test(trimmed)) return null;
  const topicName = trimmed.replace(WORKBOOK_PREFIX_RE, '').trim();
  return topicName.length > 0 ? topicName : null;
}

export interface WorkbookTopicLocation {
  subject: string;
  grade: string;
}

/**
 * ワーク index から単元の subject×grade を解決する。
 * 冊子は学年をまたいで使われるため、ユーザーの設定学年に依存しない。
 * 4択 index に無い単元（「◯◯の年表」など入力問題のみの単元）は
 * 入力問題バンク側のメタで解決する。
 * 見つからなければ null（呼び出し側は AI チャットへフォールスルーさせる）。
 */
export function resolveWorkbookTopic(
  topicName: string,
  index: Record<string, WorkbookTopicMeta>
): WorkbookTopicLocation | null {
  const meta = index[topicName];
  if (meta) return { subject: meta.subject, grade: meta.grade };
  const input = WORKBOOK_INPUT_INDEX[topicName];
  if (input) return { subject: input.subject, grade: input.grade };
  return null;
}

/**
 * 単元のワーク問題 ID を「紙面の (1)〜(8) と同じ順」で返す。
 * index 生成時に紙面順で並べてあるため、そのまま返すだけでよい。
 * 存在しない単元は空配列。
 */
export function getTopicQuestionIds(
  topicName: string,
  index: Record<string, WorkbookTopicMeta>
): string[] {
  return [...(index[topicName]?.ids ?? [])];
}

// ── 入力問題（一問一答・記述）────────────────────────────────

export type WorkbookKind = 'choice' | 'term' | 'written';

export interface WorkbookInputLookup {
  kind: 'term' | 'written';
  topicName: string;
  /** 紙面の問題番号（1始まり） */
  n: number;
  term?: WorkbookTermQuestion;
  written?: WorkbookWrittenQuestion;
}

/** id → 入力問題の逆引き（モジュールロード時に一度だけ構築、read ゼロ） */
const INPUT_BY_ID: Map<string, WorkbookInputLookup> = (() => {
  const map = new Map<string, WorkbookInputLookup>();
  for (const [topicName, t] of Object.entries(WORKBOOK_INPUT_INDEX)) {
    t.terms.forEach((q, i) =>
      map.set(q.id, { kind: 'term', topicName, n: i + 1, term: q })
    );
    t.written.forEach((q, i) =>
      map.set(q.id, { kind: 'written', topicName, n: i + 1, written: q })
    );
  }
  return map;
})();

export function findWorkbookInputQuestion(
  id: string
): WorkbookInputLookup | undefined {
  return INPUT_BY_ID.get(id);
}

/**
 * 解答の接頭辞（「答え：」等）。問題カードの「✏️ 答えを書く」ボタンが
 * `fillInText` でこれを入力欄に流し込むため、採点前に必ず取り除く。
 *
 * 取り除かないと接頭辞ごと AI 採点にかかり、答案の一部として読まれてしまう
 * （2026-08-06 に実際に「答え：紀元前は…」がそのまま採点され 0 点になった）。
 */
const ANSWER_PREFIXES = ['答え：', '答え:', 'こたえ：', 'こたえ:'] as const;

/**
 * 解答テキストから接頭辞を1つだけ取り除く。付いていなければそのまま返す。
 * 接頭辞だけを送った（本文が空）場合は空文字を返し、呼び出し側で
 * 「まだ書けていない」として扱えるようにする。
 */
export function stripAnswerPrefix(text: string): string {
  const t = text.trim();
  for (const p of ANSWER_PREFIXES) {
    if (t.startsWith(p)) return t.slice(p.length).trim();
  }
  return t;
}

/** 「答え：」等の接頭辞が付いているか（＝明示的に解答として送られたか）。 */
export function hasAnswerPrefix(text: string): boolean {
  const t = text.trim();
  return ANSWER_PREFIXES.some((p) => t.startsWith(p));
}

/**
 * ワーク入力演習の解答待ち中に届いたテキストの意図。
 *
 * 従来は「解答待ちなら、届いたテキストは全部が答案」だった。そのため
 * 「ここ意味わかんない」と聞いただけで答案として採点され、0点が記録され、
 * AI採点も1回ぶん消費していた（1日40回枠）。
 */
export type WorkbookInputIntent = 'quit' | 'answer' | 'question';

/** 演習を途中でやめる言葉。 */
const QUIT_WORDS = new Set([
  'やめる',
  'やめたい',
  'おわる',
  'おわり',
  '終わる',
  '終わり',
  'ストップ',
  '中断',
]);

/**
 * 「答案ではなく先生への質問」と判断してよい言い回し。
 *
 * **保守的にしてある**。判定を誤って答案を質問に振り分けると、書いた答えが
 * 採点されずに消えてしまい体験が悪い。逆（質問が採点される）は0点が1件付くだけで
 * 復旧できるので、**迷ったら答案側に倒す**。
 */
const QUESTION_PHRASES = [
  'わからない',
  'わかんない',
  'わかりません',
  'ヒント',
  'おしえて',
  '教えて',
  'どういう意味',
  'どういうこと',
  'むずかしい',
  '難しい',
] as const;

/** 出題からこの時間を過ぎた入力は、答案ではなく雑談とみなす（分）。 */
export const WORKBOOK_ANSWER_TIMEOUT_MIN = 30;

/**
 * 解答待ち中のテキストを「中断 / 答案 / 質問」に振り分ける。
 *
 * 優先順位:
 *   1. 中断ワード（完全一致）
 *   2. 「答え：」接頭辞つき → **必ず答案**（本人が明示している）
 *   3. 質問の言い回し・末尾が「？」 → 質問
 *   4. 出題から WORKBOOK_ANSWER_TIMEOUT_MIN 超 → 質問（解き終えて雑談に戻っている）
 *   5. それ以外 → 答案（従来どおり）
 */
export function classifyWorkbookInput(
  text: string,
  opts: { minutesSinceAsked?: number | null } = {}
): WorkbookInputIntent {
  const t = text.trim();
  if (QUIT_WORDS.has(t)) return 'quit';
  // 本人が「答え：」と書いたものは、何があっても答案として扱う。
  if (hasAnswerPrefix(t)) return 'answer';

  const normalized = t.toLowerCase();
  if (/[?？]\s*$/.test(t)) return 'question';
  if (QUESTION_PHRASES.some((p) => normalized.includes(p))) return 'question';

  const mins = opts.minutesSinceAsked;
  if (typeof mins === 'number' && mins > WORKBOOK_ANSWER_TIMEOUT_MIN) {
    return 'question';
  }
  return 'answer';
}

/** 単元の入力問題（一問一答 / 記述）を取得。無い単元は空配列。 */
export function getWorkbookInput(topicName: string): {
  terms: readonly WorkbookTermQuestion[];
  written: readonly WorkbookWrittenQuestion[];
} {
  const t = WORKBOOK_INPUT_INDEX[topicName];
  return { terms: t?.terms ?? [], written: t?.written ?? [] };
}

/**
 * 用語解答の正規化: 全角/半角統一（NFKC）→ 小文字化 → カタカナ→ひらがな →
 * 空白・中点・かっこ・句読点の除去。「大宝律令」「たいほうりつりょう」
 * 「タイホウリツリョウ」「大宝 律令」等を同一視する。
 */
export function normalizeTermAnswer(s: string): string {
  const nfkc = s.normalize('NFKC').trim().toLowerCase();
  const hira = nfkc.replace(/[ァ-ヶ]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60)
  );
  return hira.replace(/[\s・･「」『』()（）。、.,ー?？!！]/g, '');
}

/** かっこ書き（全角/半角）を取り除いた表記（例: 絹（シルク）→ 絹） */
function stripParenGroups(s: string): string {
  return s.replace(/[（(][^（）()]*[）)]/g, '');
}

/** かっこ書きの中身を取り出す（例: 絹（シルク）→ [シルク]） */
function parenContents(s: string): string[] {
  const out: string[] = [];
  const re = /[（(]([^（）()]*)[）)]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s)) !== null) {
    if (m[1]) out.push(m[1]);
  }
  return out;
}

/**
 * 用語入力の採点。表記（漢字）または読み（かな）の完全一致で正解。
 * 正答に「絹（シルク）」「三宝（仏・法・僧）」のようなかっこ書きがある場合は、
 * ①かっこ込みの全体 ②かっこの前だけ（絹/三宝） ③かっこの中だけ（シルク）
 * のどれでも正解と認める（生徒の入力側のかっこ書きも同様に許容）。
 */
export function judgeTermAnswer(
  input: string,
  entry: Pick<WorkbookTermQuestion, 'a' | 'reading'>
): boolean {
  const targets = new Set<string>();
  for (const raw of [entry.a, entry.reading]) {
    if (!raw) continue;
    for (const variant of [raw, stripParenGroups(raw), ...parenContents(raw)]) {
      const n = normalizeTermAnswer(variant);
      if (n.length > 0) targets.add(n);
    }
  }
  const inputs = [input, stripParenGroups(input)]
    .map(normalizeTermAnswer)
    .filter((s) => s.length > 0);
  return inputs.some((x) => targets.has(x));
}

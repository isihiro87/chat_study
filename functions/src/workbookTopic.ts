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

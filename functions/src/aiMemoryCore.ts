/**
 * 長期記憶の第1層「構造化事実」（`users/{uid}.aiMemory`）の検証と整形（純粋ロジック）。
 *
 * 会話履歴（第2・3層）は要約や想起で劣化しうるが、ここに入れた事実は
 * **圧縮せずそのまま毎ターン注入する**ので永久に劣化しない（`requirements.md` §機能6）。
 *
 * ## 設計上の原則
 * - **AI に自由作文で上書きさせない。** 項目はホワイトリスト、値は型・長さ・妥当性を検証する。
 * - **個人情報は保存しない。** 本名・住所・学校名・電話番号は書き込み前に弾く
 *   （中学生が相手で、会話は運営が閲覧しうるため）。
 * - 検証に落ちたら**切り詰めずに拒否**する。勝手に短くすると意味が変わった記憶が残る。
 *
 * 副作用なし・環境非依存。
 */

/** 記憶できる項目（ホワイトリスト）。ここに無いキーは破棄する。 */
export const MEMORY_KEYS = [
  'nextTestDate',
  'testSubjects',
  'goal',
  'busyNote',
  'callStyle',
  'notes',
] as const;

export type MemoryKey = (typeof MEMORY_KEYS)[number];

export interface AiMemory {
  /** 次のテストの日（YYYY-MM-DD） */
  nextTestDate?: string;
  /** テスト範囲・教科（自由記述の短い配列） */
  testSubjects?: string[];
  /** 目標（例「次は80点」） */
  goal?: string;
  /** 部活・習い事などの忙しさ */
  busyNote?: string;
  /** 呼ばれ方の好み */
  callStyle?: string;
  /** 自由メモ（最大5件・古いものから落ちる） */
  notes?: string[];
}

/** 各項目の最大文字数。超えたら**拒否**（切り詰めない）。 */
export const LIMITS = {
  goal: 60,
  busyNote: 80,
  callStyle: 20,
  note: 80,
  testSubject: 30,
} as const;

/** `notes` の保持件数。 */
export const MAX_NOTES = 5;
/** `testSubjects` の保持件数。 */
export const MAX_TEST_SUBJECTS = 6;
/** テスト日として受け付ける未来の上限（日）。 */
export const MAX_FUTURE_DAYS = 365;

// ---------------------------------------------------------------------------
// 個人情報フィルタ
// ---------------------------------------------------------------------------

/**
 * 個人情報らしき表現。1つでも当たれば**保存しない**。
 *
 * 完全な検出は不可能なので、「よくある形」を確実に止めることを狙う。
 * 取りこぼしても会話自体は成立する（記憶に残らないだけ）ので、
 * 誤って保存するより誤って弾くほうを選ぶ。
 */
const PERSONAL_INFO_PATTERNS: RegExp[] = [
  // 電話番号（ハイフンあり・なし両方）
  /0\d{1,4}-\d{1,4}-\d{3,4}/,
  /\b0\d{9,10}\b/,
  // メールアドレス
  /[\w.+-]+@[\w-]+\.[\w.-]+/,
  // 郵便番号・住所
  /〒\s*\d{3}-?\d{4}/,
  /\d+丁目|\d+番地|\d+番\d+号/,
  // 学校名（固有名詞＋学校種別）。「中学校」単体は日常語なので拾わない
  /[一-龠ぁ-んァ-ヴA-Za-z]{2,}(中学校|小学校|高等学校|高校)/,
  // 本名の申告
  /(本名|ほんみょう)は/,
  /(私|わたし|僕|ぼく|俺|おれ)の(名前|なまえ)は/,
  /と(申します|もうします)/,
  // パスワード・アカウント
  /(パスワード|ぱすわーど|password)/i,
  /(クレジット|カード番号)/,
];

/** 個人情報らしき記述を含むか。 */
export function containsPersonalInfo(text: string): boolean {
  const t = (text ?? '').normalize('NFKC');
  if (!t) return false;
  return PERSONAL_INFO_PATTERNS.some((re) => re.test(t));
}

// ---------------------------------------------------------------------------
// 検証
// ---------------------------------------------------------------------------

export type ValidateResult =
  | { ok: true; value: Partial<AiMemory> }
  | { ok: false; reason: string };

/** JST の YYYY-MM-DD。 */
function jstDateKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

/**
 * AI から渡された記憶パッチを検証する。
 *
 * - ホワイトリスト外のキーは**黙って捨てる**（AI が勝手な項目を作れない）
 * - 個人情報を含むなら**パッチ全体を拒否**（一部だけ保存すると文脈が壊れる）
 * - 長さ超過・不正な日付は拒否（AI に言い直させる）
 * - 有効な項目が1つも無ければ拒否
 */
export function validateMemoryPatch(raw: unknown, now: Date): ValidateResult {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, reason: '記憶の形式が正しくありません' };
  }
  const patch = raw as Record<string, unknown>;
  const value: Partial<AiMemory> = {};

  // まず個人情報チェック（文字列値すべて）。1つでもあれば全体を拒否。
  for (const v of Object.values(patch)) {
    if (typeof v === 'string' && containsPersonalInfo(v)) {
      return { ok: false, reason: '個人情報は覚えられません' };
    }
    if (Array.isArray(v)) {
      for (const item of v) {
        if (typeof item === 'string' && containsPersonalInfo(item)) {
          return { ok: false, reason: '個人情報は覚えられません' };
        }
      }
    }
  }

  if (patch.nextTestDate !== undefined) {
    const d = validateTestDate(patch.nextTestDate, now);
    if (!d.ok) return d;
    value.nextTestDate = d.value;
  }

  if (patch.goal !== undefined) {
    const r = validateText(patch.goal, LIMITS.goal, '目標');
    if (!r.ok) return r;
    value.goal = r.value;
  }

  if (patch.busyNote !== undefined) {
    const r = validateText(patch.busyNote, LIMITS.busyNote, '予定のメモ');
    if (!r.ok) return r;
    value.busyNote = r.value;
  }

  if (patch.callStyle !== undefined) {
    const r = validateText(patch.callStyle, LIMITS.callStyle, '呼び方');
    if (!r.ok) return r;
    value.callStyle = r.value;
  }

  if (patch.testSubjects !== undefined) {
    const r = validateStringArray(
      patch.testSubjects,
      LIMITS.testSubject,
      MAX_TEST_SUBJECTS,
      'テスト範囲'
    );
    if (!r.ok) return r;
    value.testSubjects = r.value;
  }

  if (patch.notes !== undefined) {
    const r = validateStringArray(patch.notes, LIMITS.note, MAX_NOTES, 'メモ');
    if (!r.ok) return r;
    value.notes = r.value;
  }

  if (Object.keys(value).length === 0) {
    return { ok: false, reason: '覚えられる内容がありませんでした' };
  }
  return { ok: true, value };
}

function validateText(
  raw: unknown,
  max: number,
  label: string
): { ok: true; value: string } | { ok: false; reason: string } {
  if (typeof raw !== 'string') {
    return { ok: false, reason: `${label}は文字で教えてね` };
  }
  const t = raw.trim();
  if (!t) return { ok: false, reason: `${label}が空です` };
  if (t.length > max) {
    // 切り詰めない。短くすると意味が変わった記憶が残るため。
    return { ok: false, reason: `${label}は${max}文字までにしてね` };
  }
  return { ok: true, value: t };
}

function validateStringArray(
  raw: unknown,
  maxEach: number,
  maxCount: number,
  label: string
): { ok: true; value: string[] } | { ok: false; reason: string } {
  if (!Array.isArray(raw)) {
    return { ok: false, reason: `${label}の形式が正しくありません` };
  }
  const out: string[] = [];
  for (const item of raw) {
    if (typeof item !== 'string') continue;
    const t = item.trim();
    if (!t) continue;
    if (t.length > maxEach) {
      return { ok: false, reason: `${label}は1件${maxEach}文字までにしてね` };
    }
    out.push(t);
  }
  if (out.length === 0) return { ok: false, reason: `${label}が空です` };
  return { ok: true, value: out.slice(-maxCount) };
}

function validateTestDate(
  raw: unknown,
  now: Date
): { ok: true; value: string } | { ok: false; reason: string } {
  if (typeof raw !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(raw.trim())) {
    return { ok: false, reason: 'テストの日は「2026-07-10」の形で教えてね' };
  }
  const value = raw.trim();
  const ms = Date.parse(`${value}T00:00:00Z`);
  if (!Number.isFinite(ms)) {
    return { ok: false, reason: 'その日付は読み取れませんでした' };
  }
  // 実在しない日（2026-02-31 等）を弾く
  if (new Date(ms).toISOString().slice(0, 10) !== value) {
    return { ok: false, reason: 'その日付は存在しないみたい' };
  }
  const today = jstDateKey(now);
  if (value < today) {
    return { ok: false, reason: '過去の日付は覚えられません' };
  }
  const diffDays = Math.round(
    (ms - Date.parse(`${today}T00:00:00Z`)) / (24 * 3600 * 1000)
  );
  if (diffDays > MAX_FUTURE_DAYS) {
    return { ok: false, reason: '1年より先の日付は覚えられません' };
  }
  return { ok: true, value };
}

/** メモを追記する（最大 `MAX_NOTES` 件・重複を除き、古いものから落とす）。 */
export function mergeNotes(existing: string[], added: string[]): string[] {
  const merged = [...(existing ?? []), ...(added ?? [])]
    .map((n) => n.trim())
    .filter((n) => n.length > 0);
  // 後勝ちで重複排除（新しい表現を残す）
  const seen = new Set<string>();
  const out: string[] = [];
  for (let i = merged.length - 1; i >= 0; i--) {
    if (seen.has(merged[i])) continue;
    seen.add(merged[i]);
    out.unshift(merged[i]);
  }
  return out.slice(-MAX_NOTES);
}

/**
 * 既存の記憶にパッチを適用した結果を返す（`notes` だけ追記、他は置き換え）。
 */
export function applyMemoryPatch(
  existing: AiMemory | undefined,
  patch: Partial<AiMemory>
): AiMemory {
  const base: AiMemory = { ...(existing ?? {}) };
  for (const key of MEMORY_KEYS) {
    if (patch[key] === undefined) continue;
    if (key === 'notes') {
      base.notes = mergeNotes(base.notes ?? [], patch.notes ?? []);
    } else {
      // @ts-expect-error キーは MEMORY_KEYS に限定済み
      base[key] = patch[key];
    }
  }
  return base;
}

// ---------------------------------------------------------------------------
// プロンプト注入
// ---------------------------------------------------------------------------

/** テスト日までの残り日数（JST 暦日）。過去なら負値。 */
export function daysUntil(dateKey: string, now: Date): number {
  const target = Date.parse(`${dateKey}T00:00:00Z`);
  const today = Date.parse(`${jstDateKey(now)}T00:00:00Z`);
  if (!Number.isFinite(target)) return 0;
  return Math.round((target - today) / (24 * 3600 * 1000));
}

/**
 * 記憶をシステムプロンプトへ注入する節にする。
 * 何も覚えていなければ空文字（プロンプトを無駄に太らせない）。
 */
export function buildMemoryPrompt(
  memory: AiMemory | undefined,
  now: Date
): string {
  if (!memory) return '';
  const lines: string[] = [];

  if (memory.nextTestDate) {
    const left = daysUntil(memory.nextTestDate, now);
    const when =
      left > 0 ? `あと${left}日` : left === 0 ? '**今日**' : '（もう過ぎた）';
    lines.push(`- 次のテスト: ${memory.nextTestDate}（${when}）`);
  }
  if (memory.testSubjects?.length) {
    lines.push(`- テスト範囲・教科: ${memory.testSubjects.join('、')}`);
  }
  if (memory.goal) lines.push(`- 目標: ${memory.goal}`);
  if (memory.busyNote) lines.push(`- 予定・忙しさ: ${memory.busyNote}`);
  if (memory.callStyle) lines.push(`- 呼ばれ方の好み: ${memory.callStyle}`);
  if (memory.notes?.length) {
    lines.push(`- メモ: ${memory.notes.join(' / ')}`);
  }

  if (lines.length === 0) return '';

  return (
    `\n\n# この子について覚えていること（本人が教えてくれた事実）\n` +
    `会話の中で自然に踏まえてよい。ただし**毎回むし返さない**（聞かれてもいないのに` +
    `テストの話を持ち出さない）。\n` +
    `内容が古くなっていそうなら「まだ○○で合ってる？」と確かめる。\n` +
    lines.join('\n')
  );
}

/** 記憶更新の直後にユーザーへ返す確認文（AI 任せにしないため定型）。 */
export function buildMemoryAckText(patch: Partial<AiMemory>): string {
  const parts: string[] = [];
  if (patch.nextTestDate) parts.push(`テストの日（${patch.nextTestDate}）`);
  if (patch.testSubjects?.length) parts.push('テスト範囲');
  if (patch.goal) parts.push('目標');
  if (patch.busyNote) parts.push('予定');
  if (patch.callStyle) parts.push('呼び方');
  if (patch.notes?.length) parts.push('メモ');
  if (parts.length === 0) return '';
  return `（${parts.join('・')}をおぼえたよ📝）`;
}

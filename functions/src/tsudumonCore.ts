/**
 * つづもん（PDF問題集＋参考書）ライセンスの純粋ロジック。
 *
 * - ライセンスコード: `TZM-XXXX-XXXX`（紛らわしい 0/O/1/I を除いた32文字アルファベット）
 * - プラン: 学年別（中1/中2/中3）と 3学年セット（'set'）× 利用期間 1〜3年
 * - 期限: 初回登録（firstActivatedAt）から years 年（カレンダー年）
 * - アクセス判定: users/{uid}.tsudumon スナップショットだけで判定できる
 *   （ホットパスで license doc を読まない = Firestore read 規律）
 *
 * 副作用なし・環境非依存。Firestore への読み書きは lineWebhook / scripts 側で行う。
 * 設計: .steering/20260718-tsudumon-license/
 */

export type TsudumonPlan = '中1' | '中2' | '中3' | 'set';

export const TSUDUMON_PLAN_LABEL: Record<TsudumonPlan, string> = {
  中1: '中1セット',
  中2: '中2セット',
  中3: '中3セット',
  set: '3学年セット',
};

/** 紛らわしい文字（0/O/1/I）を除いた32文字。 */
export const TSUDUMON_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

/**
 * メッセージ中のライセンスコードにマッチする正規表現。
 * 全角→半角正規化（NFKC）・大文字化した後のテキストに対して使う。
 * ハイフンは省略・全角でも許容する。
 */
export const TSUDUMON_CODE_RE =
  /TZM[-‐－ー]?([ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{4})[-‐－ー]?([ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{4})/;

/**
 * テキストからライセンスコードを抽出して正規形 `TZM-XXXX-XXXX` で返す。
 * 見つからなければ null。「つづもん登録 tzm-abcd-2345」のような文中でも拾う。
 */
export function extractTsudumonCode(text: string): string | null {
  if (!text) return null;
  const normalized = text.normalize('NFKC').toUpperCase();
  const m = TSUDUMON_CODE_RE.exec(normalized);
  if (!m) return null;
  return `TZM-${m[1]}-${m[2]}`;
}

/** ランダムなライセンスコードを1つ生成する（衝突チェックは呼び出し側）。 */
export function generateTsudumonCode(
  randomInt: (maxExclusive: number) => number
): string {
  const pick = () =>
    Array.from(
      { length: 4 },
      () => TSUDUMON_CODE_ALPHABET[randomInt(TSUDUMON_CODE_ALPHABET.length)]
    ).join('');
  return `TZM-${pick()}-${pick()}`;
}

/** プランで利用できる学年の一覧。 */
export function tsudumonPlanGrades(plan: TsudumonPlan): string[] {
  return plan === 'set' ? ['中1', '中2', '中3'] : [plan];
}

/** CLI 等の入力（'セット' '3学年セット' 'set' '中1' …）をプラン値へ正規化。 */
export function parseTsudumonPlan(input: string): TsudumonPlan | null {
  const t = (input ?? '').trim();
  if (t === '中1' || t === '中2' || t === '中3') return t;
  if (t === 'set' || t === 'セット' || t === '3学年セット' || t === '3学年') {
    return 'set';
  }
  return null;
}

/** 初回登録時刻から years 年後（カレンダー年）の失効時刻を返す。 */
export function computeTsudumonExpiresAtMs(
  firstActivatedAtMs: number,
  years: number
): number {
  const d = new Date(firstActivatedAtMs);
  d.setFullYear(d.getFullYear() + years);
  return d.getTime();
}

/** users/{uid}.tsudumon の想定形（Firestore Timestamp はミリ秒に落として渡す）。 */
export interface TsudumonEntitlementSnapshot {
  plan: TsudumonPlan;
  expiresAtMs: number;
}

/**
 * Firestore user doc の tsudumon フィールド（unknown）からスナップショットを取り出す。
 * expiresAt は Firestore Timestamp（toMillis）/ Date / number のいずれも受ける。
 */
export function readTsudumonEntitlement(
  raw: unknown
): TsudumonEntitlementSnapshot | null {
  if (!raw || typeof raw !== 'object') return null;
  const t = raw as { plan?: unknown; expiresAt?: unknown };
  const plan = t.plan;
  if (plan !== '中1' && plan !== '中2' && plan !== '中3' && plan !== 'set') {
    return null;
  }
  const e = t.expiresAt as
    | { toMillis?: () => number }
    | Date
    | number
    | null
    | undefined;
  let expiresAtMs: number | null = null;
  if (typeof e === 'number') expiresAtMs = e;
  else if (e instanceof Date) expiresAtMs = e.getTime();
  else if (e && typeof e.toMillis === 'function') expiresAtMs = e.toMillis();
  if (expiresAtMs === null || !Number.isFinite(expiresAtMs)) return null;
  return { plan, expiresAtMs };
}

export type TsudumonAccessResult = 'ok' | 'none' | 'expired' | 'wrong_grade';

/**
 * つづもん機能（ワーク演習・参考書AI先生）へのアクセス判定。
 * @param raw users/{uid}.tsudumon（無ければ undefined）
 * @param grade 利用しようとしている単元の学年（'中1'等）。null なら学年不問。
 */
export function evaluateTsudumonAccess(
  raw: unknown,
  grade: string | null,
  nowMs: number
): TsudumonAccessResult {
  const ent = readTsudumonEntitlement(raw);
  if (!ent) return 'none';
  if (nowMs >= ent.expiresAtMs) return 'expired';
  if (grade && !tsudumonPlanGrades(ent.plan).includes(grade)) {
    return 'wrong_grade';
  }
  return 'ok';
}

/**
 * 無料体験で開放する単元（LP の「1単元無料で試せる」に対応）。
 * ワーク=単元名、参考書=QRキー（章番号-topicId）。
 */
export const TSUDUMON_FREE_WORKBOOK_TOPICS: readonly string[] = [
  '律令国家と奈良時代',
];
export const TSUDUMON_FREE_REFERENCE_KEYS: readonly string[] = [
  '04-ritsuryo-nara',
];

/** ダウンロードとアクティベーションの既定上限。 */
export const TSUDUMON_DEFAULT_DL_LIMIT = 10;
export const TSUDUMON_DEFAULT_MAX_ACTIVATIONS = 3;

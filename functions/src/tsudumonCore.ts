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
 * つづもん機能（ワーク演習・参考書のつづ先生対話）へのアクセス判定。
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

/** 無料お試しの有効時間（時間）。開始から 72 時間（3日間）で自然失効する。 */
export const TSUDUMON_TRIAL_HOURS = 72;

/**
 * 公開キャンペーン「8月15日まで無料でおためし」。
 *
 * 2つの日付があるので混同しないこと。
 *   - ENTRY_END … **登録の締切**（JST 2026-08-11 23:59:59）。ここまでに始めた人が対象
 *   - UNTIL     … **使える期限**（JST 2026-08-15 23:59:59）
 *
 * 8月12日以降に登録した人は、通常どおり72時間（3日間）。
 * 締切ぎりぎり（8/11 23:59）に始めても 8/15 まで使えるので、
 * 通常運用（72時間＝8/14まで）より短くなることはない。
 *
 * ⚠️ キャンペーンが終わったら**定数を消さず、日付を過去のまま残す**。
 * それだけで自動的に通常運用へ戻るので、切り替え忘れが起きない。
 */
export const TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS = Date.parse(
  '2026-08-11T14:59:59Z'
);
export const TSUDUMON_TRIAL_CAMPAIGN_UNTIL_MS = Date.parse(
  '2026-08-15T14:59:59Z'
);

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * 体験の期限を決める。
 *
 * 登録締切までに始めた人は「8月15日まで」。それ以降は通常の72時間。
 * どちらの場合も**72時間は必ず確保する**（約束より短くしない）。
 */
export function computeTsudumonTrialExpiresAtMs(nowMs: number): number {
  const normal = nowMs + TSUDUMON_TRIAL_HOURS * 60 * 60 * 1000;
  if (nowMs > TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS) return normal;
  return Math.max(normal, TSUDUMON_TRIAL_CAMPAIGN_UNTIL_MS);
}

/**
 * その時点で認めてよい体験日数の上限。
 *
 * ⚠️ Stripe の `trial_period_days` を丸めるのに使う。ここを 3 に固定したままだと、
 * キャンペーンで体験を延ばしたときに**無料期間の途中で課金が始まる**
 * （8月15日まで無料なのに、3日後に請求されてしまう）。
 */
export function tsudumonTrialMaxDays(nowMs: number): number {
  const base = Math.ceil(TSUDUMON_TRIAL_HOURS / 24);
  if (nowMs > TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS) return base;
  const campaignDays = Math.ceil(
    (TSUDUMON_TRIAL_CAMPAIGN_UNTIL_MS - nowMs) / DAY_MS
  );
  // +1 は端数と時差の保険（短く丸めて早く課金するより、長いほうが安全）。
  return Math.max(base, campaignDays + 1);
}

export type TsudumonTrialEligibility = 'ok' | 'already_licensed' | 'trial_used';

/**
 * 「3日間無料お試し」を開始できるかの純粋判定。
 *
 * @param tsudumonRaw users/{uid}.tsudumon（体験/本ライセンスのスナップショット）
 * @param trialUsedAt users/{uid}.tsudumonTrialUsedAt（過去に体験を使ったか。truthy なら使用済み）
 * @param nowMs 現在時刻ミリ秒
 *
 * - 現在有効なライセンス/体験を持っている（access === 'ok'）→ 'already_licensed'（付与不要）
 * - すでに体験を使った（trialUsedAt truthy）→ 'trial_used'
 * - それ以外 → 'ok'
 *
 * 「期限切れの本ライセンス保持者」で `trialUsedAt` が無い場合は 'ok' になる（再購入までの
 * つなぎとして体験を許す）。期限切れの「体験」利用者は `tsudumonTrialUsedAt` が立っているため
 * 'trial_used' となり、体験は 1 uid 1 回に保たれる。
 */
export function evaluateTrialEligibility(
  tsudumonRaw: unknown,
  trialUsedAt: unknown,
  nowMs: number
): TsudumonTrialEligibility {
  if (evaluateTsudumonAccess(tsudumonRaw, null, nowMs) === 'ok') {
    return 'already_licensed';
  }
  if (trialUsedAt) return 'trial_used';
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

/**
 * 初期設定（学年・教科・配信時刻）が揃っているかの判定（純粋ロジック）。
 *
 * ## なぜ切り出したか（2026-08-08）
 * ここは**壊れると自力で直せなくなる**場所なので、テストで固定したい。
 * `lineWebhook.ts` は firebase-admin を芋づるで読み込むためテストから触りにくい。
 *
 * ## 直した不具合
 * 完了判定が **`preferredHour` だけ**を見ていた。オンボは 学年 → 教科 → 時刻 の
 * 順なので「時刻があるなら前の2つもある」という前提だったが、その前提が崩れると
 * **詰む**造りだった:
 *
 *   - `handleSelectGradePostback` は先頭で「設定済みなら拒否」する。時刻だけで
 *     完了扱いになるので、**学年が欠けている人が学年カードを押しても保存されず**
 *     「すでに登録済みだよ」と返る（＝二度と設定できない）
 *   - `handleSampleAnswerPostback` も完了扱いとみなし、学年選択を出し直さない
 *   - その状態で毎日配信だけが動き、学年不明のまま出題される
 *
 * 前提が崩れる経路: 友だち追加直後の reply で「おためし1問」と「学年選択」を
 * 同時に送っており、生徒がおためしだけ触って学年を飛ばすことがある。
 * 実際に本番で1人（3,948人中）が「教科と時刻はあるのに学年が無い」状態だった。
 *
 * 副作用なし・環境非依存。
 */

/** オンボで選べる学年。 */
export const SETUP_VALID_GRADES: readonly string[] = ['中1', '中2', '中3'];

/** オンボで選べる配信時刻。`lineWebhook.VALID_HOURS` と同値に保つこと。 */
export const SETUP_VALID_HOURS: readonly number[] = [6, 7, 16, 18, 20];

/** 初期設定のステップ。オンボはこの順に進む。 */
export type SetupStep = 'grade' | 'subject' | 'hour';

/** 学年として妥当か。 */
export function hasValidGrade(userData: Record<string, unknown> | undefined) {
  const g = userData?.grade;
  return typeof g === 'string' && SETUP_VALID_GRADES.includes(g);
}

/**
 * 教科として妥当か。
 * ⚠️ 教科は今後増えるので**ホワイトリストで縛らない**（新教科を足したときに
 * 「設定済みなのに未完了扱い」になると、また詰まる人が出る）。
 */
export function hasValidSubject(userData: Record<string, unknown> | undefined) {
  const s = userData?.subject;
  return typeof s === 'string' && s.length > 0;
}

/** 配信時刻として妥当か。 */
export function hasValidHour(userData: Record<string, unknown> | undefined) {
  const h = userData?.preferredHour;
  return typeof h === 'number' && SETUP_VALID_HOURS.includes(h);
}

/**
 * 初期設定が**3つとも**揃っているか。
 *
 * ⚠️ どれか1つでも欠けていれば false。欠けている人を「完了」と扱うと、
 * 各ハンドラの「設定済みなら拒否」に引っかかって**やり直せなくなる**。
 */
export function isSetupComplete(
  userData: Record<string, unknown> | undefined
): boolean {
  if (!userData) return false;
  return (
    hasValidGrade(userData) &&
    hasValidSubject(userData) &&
    hasValidHour(userData)
  );
}

/**
 * 最初に欠けているステップ。揃っていれば null。
 * 「どこからやり直させるか」を出し分けるのに使う（常に step1 へ戻すと、
 * 教科まで進んだ人を学年選択に引き戻してしまい、かえって混乱する）。
 */
export function firstMissingStep(
  userData: Record<string, unknown> | undefined
): SetupStep | null {
  if (!userData) return 'grade';
  if (!hasValidGrade(userData)) return 'grade';
  if (!hasValidSubject(userData)) return 'subject';
  if (!hasValidHour(userData)) return 'hour';
  return null;
}

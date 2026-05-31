/**
 * Trial Day 6 継続projection の純粋ロジック。
 *
 * 副作用・重い依存を持たないので単体テストから安全に import できる。
 * メッセージ組み立ては trialDripDay6Projection.ts 側で行う。
 */

interface ProjectionPeriod {
  days: number;
  label: string;
  emoji: string;
}

/** 中1 / 中2 用（1年まで） */
const PERIODS_STANDARD: readonly ProjectionPeriod[] = [
  { days: 30, label: "1か月", emoji: "📅" },
  { days: 180, label: "半年", emoji: "🗓" },
  { days: 365, label: "1年", emoji: "🎯" },
];

/** 中3 用（受験まで1年ないため半年で打ち切り） */
const PERIODS_EXAM_YEAR: readonly ProjectionPeriod[] = [
  { days: 30, label: "1か月", emoji: "📅" },
  { days: 180, label: "半年", emoji: "🎯" },
];

/** projection 数値を読みやすい概数に丸める（100以上は10の位で丸め） */
export function roundNice(n: number): number {
  if (n >= 100) return Math.round(n / 10) * 10;
  return Math.round(n);
}

/**
 * 累計問題数projectionの箇条書きを生成する。
 *
 * @param grade ユーザーの学年（'中1' | '中2' | '中3' 等）
 * @param totalAnswered ここまでの累計回答数
 * @param daysElapsed 体験開始からの経過日数
 * @returns 箇条書き行の配列。projection を出せない場合（回答0・経過0など）は null
 */
export function buildDay6ProjectionBullets(
  grade: string | undefined,
  totalAnswered: number,
  daysElapsed: number
): string[] | null {
  if (totalAnswered <= 0 || daysElapsed <= 0) return null;
  const pace = totalAnswered / daysElapsed;
  // 中3 は受験まで1年ないので半年まで
  const periods = grade === "中3" ? PERIODS_EXAM_YEAR : PERIODS_STANDARD;
  return periods.map(
    (p) => `${p.emoji} ${p.label}で 約${roundNice(pace * p.days)}問`
  );
}

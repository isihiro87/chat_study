const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

export function getJstDateString(date: Date): string {
  const jst = new Date(date.getTime() + JST_OFFSET_MS);
  return jst.toISOString().slice(0, 10);
}

export function getYesterdayJstDateString(today: string): string {
  const d = new Date(`${today}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

/** JST 日付文字列（YYYY-MM-DD）同士の差分日数（to - from）。 */
export function jstDateDiffDays(fromJst: string, toJst: string): number {
  const fromMs = new Date(`${fromJst}T00:00:00Z`).getTime();
  const toMs = new Date(`${toJst}T00:00:00Z`).getTime();
  if (Number.isNaN(fromMs) || Number.isNaN(toMs)) return 0;
  return Math.round((toMs - fromMs) / (24 * 60 * 60 * 1000));
}

/**
 * 週1おやすみ免除（streak forgiveness）のクールダウン日数。
 * 「ちょうど1日の欠席」はこの日数に1回まで免除し、streak を継続させる。
 */
export const FORGIVENESS_COOLDOWN_DAYS = 7;

export interface StreakState {
  current: number;
  longest: number;
  lastStudyDate: string;
  /**
   * 週1おやすみ免除を最後に使った JST 日付（YYYY-MM-DD）。未使用なら無し。
   * Firestore には `users.stats.streak.lastForgivenDateJst` として永続化する。
   */
  lastForgivenDateJst?: string;
}

/** 今日おやすみ免除を使えるか（未使用 or 前回免除から 7 日以上）。 */
export function canUseStreakForgiveness(
  lastForgivenDateJst: string | undefined,
  todayJst: string
): boolean {
  if (!lastForgivenDateJst) return true;
  return (
    jstDateDiffDays(lastForgivenDateJst, todayJst) >= FORGIVENESS_COOLDOWN_DAYS
  );
}

/**
 * 既存の streak 状態と「今日の JST 日付」から次の streak を計算する純粋関数。
 *
 * - prev = null（または stats なし）なら初日として {current:1, longest:1}
 * - 同日複数回回答 → 変化なし
 * - 前回が昨日 → current+1、longest は max を維持
 * - **ちょうど1日の欠席（前回が一昨日）→ 週1おやすみ免除**（2026-07 追加）:
 *   免除が使えれば current+1 で継続し、lastForgivenDateJst に今日を記録。
 *   1日のうっかり欠席でゼロに戻る喪失感（離脱・ブロック誘因）を和らげる。
 * - それ以外（2日以上の欠席・免除使用済み）→ current=1、longest は維持
 */
export function nextStreakState(
  prev: StreakState | null,
  todayJst: string
): StreakState {
  if (!prev) {
    return { current: 1, longest: 1, lastStudyDate: todayJst };
  }
  if (prev.lastStudyDate === todayJst) {
    return prev;
  }

  const gap = jstDateDiffDays(prev.lastStudyDate, todayJst);
  const carryForgiven = prev.lastForgivenDateJst
    ? { lastForgivenDateJst: prev.lastForgivenDateJst }
    : {};

  if (gap === 1) {
    const current = prev.current + 1;
    return {
      current,
      longest: Math.max(prev.longest ?? 0, current),
      lastStudyDate: todayJst,
      ...carryForgiven,
    };
  }

  if (
    gap === 2 &&
    canUseStreakForgiveness(prev.lastForgivenDateJst, todayJst)
  ) {
    const current = prev.current + 1;
    return {
      current,
      longest: Math.max(prev.longest ?? 0, current),
      lastStudyDate: todayJst,
      lastForgivenDateJst: todayJst,
    };
  }

  return {
    current: 1,
    longest: Math.max(prev.longest ?? 0, 1),
    lastStudyDate: todayJst,
    ...carryForgiven,
  };
}

/**
 * 表示用（連続記録 flex 等）の連続日数。「まだ今日解いていない」状態でも
 * streak が生きているとみなせるなら current を返す:
 * - 最終学習が今日 or 昨日 → current
 * - 一昨日で、今日答えれば免除が効く → current（まだ切れていない扱い）
 * - それ以外 → 0（切れている）
 */
export function displayStreakDays(
  prev: StreakState | null,
  todayJst: string
): number {
  if (!prev || prev.current <= 0) return 0;
  const gap = jstDateDiffDays(prev.lastStudyDate, todayJst);
  if (gap >= 0 && gap <= 1) return prev.current;
  if (
    gap === 2 &&
    canUseStreakForgiveness(prev.lastForgivenDateJst, todayJst)
  ) {
    return prev.current;
  }
  return 0;
}

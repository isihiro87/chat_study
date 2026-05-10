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

export interface StreakState {
  current: number;
  longest: number;
  lastStudyDate: string;
}

/**
 * 既存の streak 状態と「今日の JST 日付」から次の streak を計算する純粋関数。
 *
 * - prev = null（または stats なし）なら初日として {current:1, longest:1}
 * - 同日複数回回答 → 変化なし
 * - 前回が昨日 → current+1、longest は max を維持
 * - 2 日以上空き → current=1、longest は維持
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
  const yesterday = getYesterdayJstDateString(todayJst);
  const current = prev.lastStudyDate === yesterday ? prev.current + 1 : 1;
  const longest = Math.max(prev.longest ?? 0, current);
  return { current, longest, lastStudyDate: todayJst };
}

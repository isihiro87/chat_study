import { describe, it, expect } from 'vitest';
import {
  nextStreakState,
  getYesterdayJstDateString,
  getJstDateString,
  type StreakState,
} from '../../functions/src/streakState';

describe('getYesterdayJstDateString', () => {
  it('returns 1 day before given JST date', () => {
    expect(getYesterdayJstDateString('2026-05-10')).toBe('2026-05-09');
    expect(getYesterdayJstDateString('2026-01-01')).toBe('2025-12-31');
    expect(getYesterdayJstDateString('2024-03-01')).toBe('2024-02-29'); // leap year
  });
});

describe('getJstDateString', () => {
  it('converts UTC to JST date', () => {
    // 2026-05-10 00:00 JST = 2026-05-09 15:00 UTC
    expect(getJstDateString(new Date('2026-05-09T15:00:00Z'))).toBe('2026-05-10');
    // 2026-05-10 14:59 UTC → 23:59 JST same day
    expect(getJstDateString(new Date('2026-05-10T14:59:00Z'))).toBe('2026-05-10');
    // 2026-05-10 15:00 UTC → 00:00 JST next day
    expect(getJstDateString(new Date('2026-05-10T15:00:00Z'))).toBe('2026-05-11');
  });
});

describe('nextStreakState', () => {
  it('initializes streak when prev is null (first answer ever)', () => {
    const result = nextStreakState(null, '2026-05-10');
    expect(result).toEqual({ current: 1, longest: 1, lastStudyDate: '2026-05-10' });
  });

  it('returns prev unchanged when answering twice on same day', () => {
    const prev: StreakState = { current: 5, longest: 10, lastStudyDate: '2026-05-10' };
    const result = nextStreakState(prev, '2026-05-10');
    expect(result).toBe(prev);
  });

  it('increments current when prev is yesterday (consecutive days)', () => {
    const prev: StreakState = { current: 3, longest: 7, lastStudyDate: '2026-05-09' };
    const result = nextStreakState(prev, '2026-05-10');
    expect(result).toEqual({ current: 4, longest: 7, lastStudyDate: '2026-05-10' });
  });

  it('updates longest when current exceeds it', () => {
    const prev: StreakState = { current: 9, longest: 9, lastStudyDate: '2026-05-09' };
    const result = nextStreakState(prev, '2026-05-10');
    expect(result).toEqual({ current: 10, longest: 10, lastStudyDate: '2026-05-10' });
  });

  it('resets current to 1 when 2+ days gap', () => {
    const prev: StreakState = { current: 8, longest: 12, lastStudyDate: '2026-05-07' };
    const result = nextStreakState(prev, '2026-05-10');
    expect(result).toEqual({ current: 1, longest: 12, lastStudyDate: '2026-05-10' });
  });

  it('preserves longest when current resets', () => {
    const prev: StreakState = { current: 50, longest: 50, lastStudyDate: '2026-04-01' };
    const result = nextStreakState(prev, '2026-05-10');
    expect(result.longest).toBe(50);
    expect(result.current).toBe(1);
  });

  it('treats missing longest in prev as 0', () => {
    const prev = { current: 1, lastStudyDate: '2026-05-09' } as unknown as StreakState;
    const result = nextStreakState(prev, '2026-05-10');
    expect(result.current).toBe(2);
    expect(result.longest).toBe(2);
  });
});

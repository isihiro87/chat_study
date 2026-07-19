// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  nextStreakState,
  displayStreakDays,
  canUseStreakForgiveness,
  jstDateDiffDays,
  getYesterdayJstDateString,
  type StreakState,
} from '../streakState';

describe('jstDateDiffDays', () => {
  it('同日=0 / 翌日=1 / 1週間=7', () => {
    expect(jstDateDiffDays('2026-07-01', '2026-07-01')).toBe(0);
    expect(jstDateDiffDays('2026-07-01', '2026-07-02')).toBe(1);
    expect(jstDateDiffDays('2026-07-01', '2026-07-08')).toBe(7);
  });
  it('月またぎ', () => {
    expect(jstDateDiffDays('2026-06-30', '2026-07-02')).toBe(2);
  });
});

describe('getYesterdayJstDateString', () => {
  it('月初の前日', () => {
    expect(getYesterdayJstDateString('2026-07-01')).toBe('2026-06-30');
  });
});

describe('nextStreakState - 基本', () => {
  it('初回は current=1', () => {
    expect(nextStreakState(null, '2026-07-03')).toEqual({
      current: 1,
      longest: 1,
      lastStudyDate: '2026-07-03',
    });
  });

  it('同日複数回は変化なし', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-07-03',
    };
    expect(nextStreakState(prev, '2026-07-03')).toBe(prev);
  });

  it('昨日→今日 は +1', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-07-02',
    };
    expect(nextStreakState(prev, '2026-07-03')).toEqual({
      current: 6,
      longest: 8,
      lastStudyDate: '2026-07-03',
    });
  });

  it('longest を更新する', () => {
    const prev: StreakState = {
      current: 8,
      longest: 8,
      lastStudyDate: '2026-07-02',
    };
    expect(nextStreakState(prev, '2026-07-03').longest).toBe(9);
  });

  it('3日以上の欠席はリセット（免除対象外）', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-06-30',
    };
    expect(nextStreakState(prev, '2026-07-03')).toEqual({
      current: 1,
      longest: 8,
      lastStudyDate: '2026-07-03',
    });
  });
});

describe('nextStreakState - 週1おやすみ免除', () => {
  it('ちょうど1日欠席（一昨日→今日）は免除で +1 継続し、免除日を記録', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-07-01',
    };
    expect(nextStreakState(prev, '2026-07-03')).toEqual({
      current: 6,
      longest: 8,
      lastStudyDate: '2026-07-03',
      lastForgivenDateJst: '2026-07-03',
    });
  });

  it('免除から7日未満の再欠席はリセット（免除日は保持）', () => {
    const prev: StreakState = {
      current: 6,
      longest: 8,
      lastStudyDate: '2026-07-05',
      lastForgivenDateJst: '2026-07-03',
    };
    // 07-06 を欠席して 07-07 に回答 → 前回免除(07-03)から4日 → 免除不可
    expect(nextStreakState(prev, '2026-07-07')).toEqual({
      current: 1,
      longest: 8,
      lastStudyDate: '2026-07-07',
      lastForgivenDateJst: '2026-07-03',
    });
  });

  it('免除から7日以上あけば再度免除できる', () => {
    const prev: StreakState = {
      current: 10,
      longest: 10,
      lastStudyDate: '2026-07-08',
      lastForgivenDateJst: '2026-07-01',
    };
    // 07-09 を欠席して 07-10 に回答 → 前回免除(07-01)から9日 → 免除OK
    expect(nextStreakState(prev, '2026-07-10')).toEqual({
      current: 11,
      longest: 11,
      lastStudyDate: '2026-07-10',
      lastForgivenDateJst: '2026-07-10',
    });
  });

  it('連続継続時は免除日を引き継ぐ（消さない）', () => {
    const prev: StreakState = {
      current: 6,
      longest: 8,
      lastStudyDate: '2026-07-03',
      lastForgivenDateJst: '2026-07-03',
    };
    expect(nextStreakState(prev, '2026-07-04')).toEqual({
      current: 7,
      longest: 8,
      lastStudyDate: '2026-07-04',
      lastForgivenDateJst: '2026-07-03',
    });
  });

  it('2日欠席（gap=3）は免除未使用でもリセット', () => {
    const prev: StreakState = {
      current: 5,
      longest: 5,
      lastStudyDate: '2026-07-01',
    };
    expect(nextStreakState(prev, '2026-07-04').current).toBe(1);
  });
});

describe('canUseStreakForgiveness', () => {
  it('未使用なら true', () => {
    expect(canUseStreakForgiveness(undefined, '2026-07-03')).toBe(true);
  });
  it('6日前は false / 7日前は true', () => {
    expect(canUseStreakForgiveness('2026-06-27', '2026-07-03')).toBe(false);
    expect(canUseStreakForgiveness('2026-06-26', '2026-07-03')).toBe(true);
  });
});

describe('displayStreakDays（連続記録 flex の表示用）', () => {
  it('今日回答済み → current', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-07-03',
    };
    expect(displayStreakDays(prev, '2026-07-03')).toBe(5);
  });
  it('昨日まで継続 → current（まだ切れていない）', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-07-02',
    };
    expect(displayStreakDays(prev, '2026-07-03')).toBe(5);
  });
  it('一昨日＋免除可 → current（今日答えればつながる）', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-07-01',
    };
    expect(displayStreakDays(prev, '2026-07-03')).toBe(5);
  });
  it('一昨日＋免除クールダウン中 → 0（切れている）', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-07-01',
      lastForgivenDateJst: '2026-06-30',
    };
    expect(displayStreakDays(prev, '2026-07-03')).toBe(0);
  });
  it('3日以上前 → 0', () => {
    const prev: StreakState = {
      current: 5,
      longest: 8,
      lastStudyDate: '2026-06-29',
    };
    expect(displayStreakDays(prev, '2026-07-03')).toBe(0);
  });
  it('prev なし → 0', () => {
    expect(displayStreakDays(null, '2026-07-03')).toBe(0);
  });
});

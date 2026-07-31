/**
 * ニガテの間隔反復（3日後・1週間後・2週間後）の検査。
 *
 * 守りたいこと:
 *   - **早すぎる催促をしない**（忘れる前に出しても効かないし、うるさい）
 *   - **毎日同じ単元を催促しない**（声をかけたら段階を進める）
 *   - 解けるようになった単元は予定から消える
 */

import { describe, it, expect } from 'vitest';

import {
  REVIEW_INTERVALS_DAYS,
  buildReviewNudge,
  clearSolved,
  dueReviewUnits,
  markPrompted,
  normalizeStage,
  type ReviewState,
} from '../tsudumonReviewCore';
import type { TsudumonProgress, UnitProgress } from '../tsudumonProgressCore';

const NOW = Date.parse('2026-09-01T12:00:00+09:00');
const DAY = 24 * 60 * 60 * 1000;

function unit(over: Partial<UnitProgress> = {}): UnitProgress {
  return {
    refSteps: 0,
    wbSteps: 0,
    answered: 10,
    correct: 7,
    msRef: 0,
    msWb: 0,
    wrongNow: ['q1'],
    refTotal: 0,
    qTotal: 10,
    lastAt: NOW,
    ...over,
  };
}
function progress(units: Record<string, UnitProgress>): TsudumonProgress {
  return {
    updatedAt: NOW,
    units,
    totals: { answered: 0, correct: 0, msRef: 0, msWb: 0, msTotal: 0 } as never,
  };
}

describe('間隔の判定', () => {
  it('3日たっていなければ声をかけない', () => {
    const p = progress({ '08': unit({ lastAt: NOW - 2 * DAY }) });
    expect(dueReviewUnits(p, undefined, NOW)).toHaveLength(0);
  });

  it('3日たったら声をかける', () => {
    const p = progress({ '08': unit({ lastAt: NOW - 3 * DAY }) });
    const due = dueReviewUnits(p, undefined, NOW);
    expect(due).toHaveLength(1);
    expect(due[0].unitNo).toBe('08');
    expect(due[0].stage).toBe(0);
  });

  it('2段階目は1週間たつまで待つ', () => {
    const p = progress({ '08': unit({ lastAt: NOW - 4 * DAY }) });
    const state: ReviewState = { units: { '08': { stage: 1 } } };
    expect(dueReviewUnits(p, state, NOW)).toHaveLength(0);
    const p2 = progress({ '08': unit({ lastAt: NOW - 8 * DAY }) });
    expect(dueReviewUnits(p2, state, NOW)).toHaveLength(1);
  });

  it('まちがいが残っていない単元は対象外', () => {
    const p = progress({
      '08': unit({ wrongNow: [], lastAt: NOW - 30 * DAY }),
    });
    expect(dueReviewUnits(p, undefined, NOW)).toHaveLength(0);
  });

  it('学習の記録が無い（lastAt が無い）単元は対象外', () => {
    const p = progress({ '08': unit({ lastAt: 0 }) });
    expect(dueReviewUnits(p, undefined, NOW)).toHaveLength(0);
  });

  it('直前に声をかけていたら、間隔ぶん空くまで催促しない', () => {
    const p = progress({ '08': unit({ lastAt: NOW - 10 * DAY }) });
    const state: ReviewState = {
      units: { '08': { stage: 0, lastPromptedAt: NOW - 1 * DAY } },
    };
    expect(dueReviewUnits(p, state, NOW)).toHaveLength(0);
  });

  it('予定日を大きく過ぎているものから声をかける', () => {
    const p = progress({
      '05': unit({ lastAt: NOW - 5 * DAY }),
      '09': unit({ lastAt: NOW - 20 * DAY }),
    });
    expect(dueReviewUnits(p, undefined, NOW)[0].unitNo).toBe('09');
  });

  it('同じ遅れなら、残り問題数が多いほうを先に出す', () => {
    const p = progress({
      '05': unit({ lastAt: NOW - 5 * DAY, wrongNow: ['q1'] }),
      '09': unit({ lastAt: NOW - 5 * DAY, wrongNow: ['q1', 'q2', 'q3'] }),
    });
    expect(dueReviewUnits(p, undefined, NOW)[0].unitNo).toBe('09');
  });
});

describe('段階の管理', () => {
  it('声をかけたら次の段階へ進む', () => {
    const next = markPrompted(undefined, '08', NOW);
    expect(next.units?.['08'].stage).toBe(1);
    expect(next.units?.['08'].lastPromptedAt).toBe(NOW);
  });

  it('最終段階まで来たらそこに留まる（2週間おきに出しつづける）', () => {
    const last = REVIEW_INTERVALS_DAYS.length - 1;
    const next = markPrompted({ units: { '08': { stage: last } } }, '08', NOW);
    expect(next.units?.['08'].stage).toBe(last);
  });

  it('壊れた段階の値でも落ちない', () => {
    expect(normalizeStage(undefined)).toBe(0);
    expect(normalizeStage(-5)).toBe(0);
    expect(normalizeStage(99)).toBe(REVIEW_INTERVALS_DAYS.length - 1);
  });

  it('ほかの単元の予定は消さない', () => {
    const next = markPrompted({ units: { '05': { stage: 2 } } }, '08', NOW);
    expect(next.units?.['05'].stage).toBe(2);
  });
});

describe('解けるようになった単元の後始末', () => {
  it('まちがいが残っていない単元は予定から消える', () => {
    const state: ReviewState = {
      units: { '08': { stage: 2 }, '09': { stage: 1 } },
    };
    const p = progress({
      '08': unit({ wrongNow: [] }),
      '09': unit({ wrongNow: ['q1'] }),
    });
    const next = clearSolved(state, p);
    expect(next.units?.['08']).toBeUndefined();
    expect(next.units?.['09']).toBeDefined();
  });
});

describe('声かけの文面', () => {
  it('段階に応じて「いつやったか」を言い、復習の入口を示す', () => {
    const text = buildReviewNudge(
      { unitNo: '08', wrong: 3, stage: 0, overdueDays: 0 },
      '幕藩体制の確立'
    );
    expect(text).toContain('3日前');
    expect(text).toContain('幕藩体制の確立');
    expect(text).toContain('3問');
    expect(text).toContain('復習する');
  });
});

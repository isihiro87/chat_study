// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  getDailyLimit,
  getHistoryTurns,
  getJstDate,
  trimHistory,
  evaluateRateLimit,
  DAILY_LIMIT,
  FREE_HISTORY_TURNS,
  PREMIUM_HISTORY_TURNS,
} from '../aiChatCore';
import type { AiChatTurn } from '../userDocTypes';

describe('getDailyLimit', () => {
  it('プラン統合後は全ユーザー共通で 40', () => {
    expect(getDailyLimit('free')).toBe(DAILY_LIMIT);
    expect(getDailyLimit('free')).toBe(40);
    expect(getDailyLimit('premium')).toBe(40);
  });
});

describe('getHistoryTurns', () => {
  it('free は 3 ターン', () => {
    expect(getHistoryTurns('free')).toBe(FREE_HISTORY_TURNS);
    expect(getHistoryTurns('free')).toBe(6);
  });
  it('premium は 6 ターン（微増）', () => {
    expect(getHistoryTurns('premium')).toBe(PREMIUM_HISTORY_TURNS);
    expect(getHistoryTurns('premium')).toBe(6);
  });
});

describe('getJstDate', () => {
  it('UTC 深夜でも JST の日付になる', () => {
    // 2026-06-01 23:30 UTC は JST では 2026-06-02 08:30
    const d = new Date('2026-06-01T23:30:00Z');
    expect(getJstDate(d)).toBe('2026-06-02');
  });
  it('JST 正午', () => {
    const d = new Date('2026-06-02T12:00:00+09:00');
    expect(getJstDate(d)).toBe('2026-06-02');
  });
});

describe('trimHistory', () => {
  const turn = (i: number): AiChatTurn => ({
    role: i % 2 === 0 ? 'user' : 'model',
    text: `m${i}`,
  });

  it('上限以下ならそのまま', () => {
    const h = [turn(0), turn(1)]; // 1 ターン
    expect(trimHistory(h, 3)).toHaveLength(2);
  });

  it('上限を超えたら古い方から切り捨て（直近 maxTurns*2 を残す）', () => {
    // 5 ターン = 10 メッセージ。maxTurns=3 → 6 メッセージに切る
    const h = Array.from({ length: 10 }, (_, i) => turn(i));
    const result = trimHistory(h, 3);
    expect(result).toHaveLength(6);
    expect(result[0].text).toBe('m4'); // 古い m0..m3 が落ちる
    expect(result[5].text).toBe('m9');
  });

  it('premium の 6 ターン = 12 メッセージまで保持', () => {
    const h = Array.from({ length: 20 }, (_, i) => turn(i));
    expect(trimHistory(h, 6)).toHaveLength(12);
  });
});

describe('evaluateRateLimit', () => {
  it('同日で上限未満 → limited=false、currentCount を返す', () => {
    const r = evaluateRateLimit(
      { dateJST: '2026-06-02', count: 2 },
      '2026-06-02',
      5
    );
    expect(r).toEqual({ currentCount: 2, limited: false });
  });

  it('同日で上限到達 → limited=true', () => {
    const r = evaluateRateLimit(
      { dateJST: '2026-06-02', count: 5 },
      '2026-06-02',
      5
    );
    expect(r.limited).toBe(true);
  });

  it('日付が変わると当日カウントは 0 にリセット', () => {
    const r = evaluateRateLimit(
      { dateJST: '2026-06-01', count: 5 },
      '2026-06-02',
      5
    );
    expect(r).toEqual({ currentCount: 0, limited: false });
  });

  it('state 未定義 → 0 から開始', () => {
    const r = evaluateRateLimit(undefined, '2026-06-02', 5);
    expect(r).toEqual({ currentCount: 0, limited: false });
  });

  it('統合後の上限（40）', () => {
    const r = evaluateRateLimit(
      { dateJST: '2026-06-02', count: 39 },
      '2026-06-02',
      40
    );
    expect(r.limited).toBe(false);
    const r2 = evaluateRateLimit(
      { dateJST: '2026-06-02', count: 40 },
      '2026-06-02',
      40
    );
    expect(r2.limited).toBe(true);
  });
});

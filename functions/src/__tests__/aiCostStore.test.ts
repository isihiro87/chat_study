import { describe, it, expect, beforeEach, vi } from 'vitest';

import {
  jstDayKey,
  jstMonthKey,
  readUserBudget,
  lastUserTextFromHistory,
  loadGlobalCost,
  loadCostState,
  CostStateUnavailableError,
  GLOBAL_CACHE_TTL_MS,
  GLOBAL_STALE_FALLBACK_MAX_MS,
  __resetGlobalCostCache,
  __seedGlobalCostCache,
} from '../aiCostStore';

/** 2026-07-25 12:00 JST（= 03:00 UTC） */
const NOW = new Date('2026-07-25T03:00:00Z');

beforeEach(() => {
  __resetGlobalCostCache();
});

describe('aiCostStore の JST キー', () => {
  it('JST の日付・月を返す', () => {
    expect(jstDayKey(NOW)).toBe('2026-07-25');
    expect(jstMonthKey(NOW)).toBe('2026-07');
  });

  it('UTC 深夜は JST では翌日になる', () => {
    // 2026-07-25 16:00 UTC = 2026-07-26 01:00 JST
    const d = new Date('2026-07-25T16:00:00Z');
    expect(jstDayKey(d)).toBe('2026-07-26');
  });

  it('月末の JST 繰り上がりを扱える', () => {
    // 2026-07-31 15:30 UTC = 2026-08-01 00:30 JST
    const d = new Date('2026-07-31T15:30:00Z');
    expect(jstDayKey(d)).toBe('2026-08-01');
    expect(jstMonthKey(d)).toBe('2026-08');
  });
});

describe('aiCostStore.readUserBudget', () => {
  it('当月・当日なら値をそのまま返す', () => {
    const r = readUserBudget(
      {
        monthJST: '2026-07',
        monthJpy: 120.5,
        dayJST: '2026-07-25',
        dayJpy: 12.3,
        dayCount: 7,
      },
      NOW
    );
    expect(r.monthJpy).toBeCloseTo(120.5);
    expect(r.dayJpy).toBeCloseTo(12.3);
    expect(r.dayCount).toBe(7);
  });

  it('月が変わっていれば月次は 0（前月の値を持ち越さない）', () => {
    const r = readUserBudget(
      { monthJST: '2026-06', monthJpy: 340, dayJST: '2026-06-30', dayJpy: 30 },
      NOW
    );
    expect(r.monthJpy).toBe(0);
    expect(r.dayJpy).toBe(0);
  });

  it('日が変わっていれば日次だけ 0（月次は維持）', () => {
    const r = readUserBudget(
      {
        monthJST: '2026-07',
        monthJpy: 200,
        dayJST: '2026-07-24',
        dayJpy: 30,
        dayCount: 20,
      },
      NOW
    );
    expect(r.monthJpy).toBe(200);
    expect(r.dayJpy).toBe(0);
    expect(r.dayCount).toBe(0);
  });

  it('未定義・壊れた値でも 0 を返す（例外を投げない）', () => {
    for (const raw of [undefined, null, {}, 'x', 42, { monthJpy: 'abc' }]) {
      const r = readUserBudget(raw, NOW);
      expect(r.monthJpy).toBe(0);
      expect(r.dayJpy).toBe(0);
      expect(r.dayCount).toBe(0);
      expect(r.recentMessageTimesMs).toEqual([]);
    }
  });

  it('負値は 0 に丸める', () => {
    const r = readUserBudget(
      { monthJST: '2026-07', monthJpy: -100, dayJST: '2026-07-25', dayJpy: -5 },
      NOW
    );
    expect(r.monthJpy).toBe(0);
    expect(r.dayJpy).toBe(0);
  });

  it('recentMessageTimesMs から不正値を除く', () => {
    const r = readUserBudget(
      {
        monthJST: '2026-07',
        recentMessageTimesMs: [1, 'x', null, Number.NaN, 2],
      },
      NOW
    );
    expect(r.recentMessageTimesMs).toEqual([1, 2]);
  });
});

describe('aiCostStore.lastUserTextFromHistory', () => {
  it('末尾から最初の user ターンを返す', () => {
    expect(
      lastUserTextFromHistory([
        { role: 'user', text: 'ふるい' },
        { role: 'model', text: 'へんじ' },
        { role: 'user', text: 'あたらしい' },
        { role: 'model', text: 'へんじ2' },
      ])
    ).toBe('あたらしい');
  });

  it('user が無ければ undefined', () => {
    expect(
      lastUserTextFromHistory([{ role: 'model', text: 'a' }])
    ).toBeUndefined();
    expect(lastUserTextFromHistory([])).toBeUndefined();
    expect(lastUserTextFromHistory(undefined)).toBeUndefined();
  });
});

describe('aiCostStore.loadGlobalCost（TTL キャッシュ）', () => {
  it('ドキュメントから当月と当日を取り出す', async () => {
    const fetchDoc = vi.fn().mockResolvedValue({
      totalJpy: 1234,
      byDay: { '2026-07-25': 99, '2026-07-24': 50 },
    });
    const r = await loadGlobalCost(NOW, { fetchDoc });
    expect(r.monthJpy).toBe(1234);
    expect(r.dayJpy).toBe(99);
    expect(r.fromCache).toBe(false);
  });

  // 2026-08-06: 無料ティアのサブキャップ（aiCostCore.evaluateFreeGate）の判定材料。
  it('無料ティアの当月・当日を取り出す', async () => {
    const fetchDoc = vi.fn().mockResolvedValue({
      totalJpy: 1234,
      byDay: { '2026-07-25': 99 },
      byTier: { free: 400, paid: 834 },
      byTierDay: { '2026-07-25': { free: 30, paid: 69 } },
    });
    const r = await loadGlobalCost(NOW, { fetchDoc });
    expect(r.freeMonthJpy).toBe(400);
    expect(r.freeDayJpy).toBe(30);
  });

  it('byTier / byTierDay が無い月（遡及分）は 0 として扱う', async () => {
    const fetchDoc = vi.fn().mockResolvedValue({
      totalJpy: 1234,
      byDay: { '2026-07-25': 99 },
    });
    const r = await loadGlobalCost(NOW, { fetchDoc });
    expect(r.freeMonthJpy).toBe(0);
    expect(r.freeDayJpy).toBe(0);
  });

  it('当日の byTierDay が無ければ当日分は 0（他の日の値を拾わない）', async () => {
    const fetchDoc = vi.fn().mockResolvedValue({
      byTier: { free: 400 },
      byTierDay: { '2026-07-24': { free: 380 } },
    });
    const r = await loadGlobalCost(NOW, { fetchDoc });
    expect(r.freeMonthJpy).toBe(400);
    expect(r.freeDayJpy).toBe(0);
  });

  it('ドキュメントが無ければ 0', async () => {
    const fetchDoc = vi.fn().mockResolvedValue(undefined);
    const r = await loadGlobalCost(NOW, { fetchDoc });
    expect(r.monthJpy).toBe(0);
    expect(r.dayJpy).toBe(0);
  });

  it('TTL 内の2回目は read しない（read 増を防ぐ）', async () => {
    const fetchDoc = vi.fn().mockResolvedValue({ totalJpy: 10, byDay: {} });
    await loadGlobalCost(NOW, { fetchDoc });
    const second = await loadGlobalCost(
      new Date(NOW.getTime() + GLOBAL_CACHE_TTL_MS - 1),
      { fetchDoc }
    );
    expect(fetchDoc).toHaveBeenCalledTimes(1);
    expect(second.fromCache).toBe(true);
  });

  it('TTL を過ぎたら再 read する', async () => {
    const fetchDoc = vi.fn().mockResolvedValue({ totalJpy: 10, byDay: {} });
    await loadGlobalCost(NOW, { fetchDoc });
    await loadGlobalCost(new Date(NOW.getTime() + GLOBAL_CACHE_TTL_MS + 1), {
      fetchDoc,
    });
    expect(fetchDoc).toHaveBeenCalledTimes(2);
  });

  it('日付が変わったらキャッシュを使わない', async () => {
    const fetchDoc = vi.fn().mockResolvedValue({ totalJpy: 10, byDay: {} });
    await loadGlobalCost(NOW, { fetchDoc });
    // 翌日（JST）
    await loadGlobalCost(new Date('2026-07-25T16:00:00Z'), { fetchDoc });
    expect(fetchDoc).toHaveBeenCalledTimes(2);
  });

  describe('read 失敗時', () => {
    it('新鮮でない古いキャッシュがあれば代替する（一時障害で全停止させない）', async () => {
      __seedGlobalCostCache({
        monthKey: '2026-07',
        dayKey: '2026-07-25',
        monthJpy: 500,
        dayJpy: 40,
        fetchedAtMs: NOW.getTime() - GLOBAL_CACHE_TTL_MS - 1000,
      });
      const fetchDoc = vi.fn().mockRejectedValue(new Error('firestore down'));
      const r = await loadGlobalCost(NOW, { fetchDoc });
      expect(r.monthJpy).toBe(500);
      expect(r.dayJpy).toBe(40);
      expect(r.fromCache).toBe(true);
    });

    it('キャッシュが無ければ CostStateUnavailableError（安全側に停止）', async () => {
      const fetchDoc = vi.fn().mockRejectedValue(new Error('firestore down'));
      await expect(loadGlobalCost(NOW, { fetchDoc })).rejects.toBeInstanceOf(
        CostStateUnavailableError
      );
    });

    it('キャッシュが古すぎる場合も停止する', async () => {
      __seedGlobalCostCache({
        monthKey: '2026-07',
        dayKey: '2026-07-25',
        monthJpy: 500,
        dayJpy: 40,
        fetchedAtMs: NOW.getTime() - GLOBAL_STALE_FALLBACK_MAX_MS - 1,
      });
      const fetchDoc = vi.fn().mockRejectedValue(new Error('firestore down'));
      await expect(loadGlobalCost(NOW, { fetchDoc })).rejects.toBeInstanceOf(
        CostStateUnavailableError
      );
    });

    it('代替時に日付が変わっていれば当日分は 0 にする（月次を流用しない）', async () => {
      __seedGlobalCostCache({
        monthKey: '2026-07',
        dayKey: '2026-07-24',
        monthJpy: 500,
        dayJpy: 40,
        fetchedAtMs: NOW.getTime() - GLOBAL_CACHE_TTL_MS - 1,
      });
      const fetchDoc = vi.fn().mockRejectedValue(new Error('firestore down'));
      const r = await loadGlobalCost(NOW, { fetchDoc });
      expect(r.monthJpy).toBe(500);
      expect(r.dayJpy).toBe(0);
    });
  });
});

describe('aiCostStore.loadCostState', () => {
  it('user doc（取得済み）と全体分から CostState を組む', async () => {
    const fetchDoc = vi
      .fn()
      .mockResolvedValue({ totalJpy: 900, byDay: { '2026-07-25': 80 } });
    const state = await loadCostState({
      userData: {
        aiBudget: {
          monthJST: '2026-07',
          monthJpy: 150,
          dayJST: '2026-07-25',
          dayJpy: 20,
          dayCount: 5,
          recentMessageTimesMs: [1, 2, 3],
        },
        aiChat: {
          history: [
            { role: 'user', text: 'まえのしつもん' },
            { role: 'model', text: 'こたえ' },
          ],
        },
      },
      now: NOW,
      deps: { fetchDoc },
    });

    expect(state.globalMonthJpy).toBe(900);
    expect(state.globalDayJpy).toBe(80);
    expect(state.userMonthJpy).toBe(150);
    expect(state.userDayJpy).toBe(20);
    expect(state.userDayCount).toBe(5);
    expect(state.recentMessageTimesMs).toEqual([1, 2, 3]);
    expect(state.lastUserText).toBe('まえのしつもん');
  });

  it('userData が undefined でも組める（新規ユーザー）', async () => {
    const fetchDoc = vi.fn().mockResolvedValue(undefined);
    const state = await loadCostState({
      userData: undefined,
      now: NOW,
      deps: { fetchDoc },
    });
    expect(state.userMonthJpy).toBe(0);
    expect(state.globalMonthJpy).toBe(0);
    expect(state.lastUserText).toBeUndefined();
  });

  it('全体分が取れなければ例外を投げる（呼び出し側が deny に倒す）', async () => {
    const fetchDoc = vi.fn().mockRejectedValue(new Error('down'));
    await expect(
      loadCostState({ userData: {}, now: NOW, deps: { fetchDoc } })
    ).rejects.toBeInstanceOf(CostStateUnavailableError);
  });
});

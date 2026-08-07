// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  getDailyLimit,
  getHistoryTurns,
  getJstDate,
  trimHistory,
  evaluateRateLimit,
  resolveFreeSafety,
  canRecallToday,
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
  // 2026-07-26: 6 → 10（AI が直前の発言を忘れる事故が6でも起きたため）。
  // 2026-08-06: 10 → 20（「数回前の話を忘れる」が体感の最大の不満だったため）。
  // 増える入力は aiChatPrompt の話題別ブロック化で相殺している。
  it('free は 20 ターン', () => {
    expect(getHistoryTurns('free')).toBe(FREE_HISTORY_TURNS);
    expect(getHistoryTurns('free')).toBe(20);
  });
  // 2026-08-07: 無料を20に広げたとき premium が10のまま取り残され、
  // 「課金者のほうが記憶が短い」状態になっていた（当時 premium は0人で実害なし）。
  // プレミアム再開時に事故らないよう、無料以上であることをテストで固定する。
  it('premium は 20 ターン（無料を下回らせない）', () => {
    expect(getHistoryTurns('premium')).toBe(PREMIUM_HISTORY_TURNS);
    expect(getHistoryTurns('premium')).toBe(20);
    expect(PREMIUM_HISTORY_TURNS).toBeGreaterThanOrEqual(FREE_HISTORY_TURNS);
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
    expect(r).toEqual({
      currentCount: 2,
      limited: false,
      currentMonthCount: 0,
    });
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
    expect(r).toEqual({
      currentCount: 0,
      limited: false,
      currentMonthCount: 0,
    });
  });

  it('state 未定義 → 0 から開始', () => {
    const r = evaluateRateLimit(undefined, '2026-06-02', 5);
    expect(r).toEqual({
      currentCount: 0,
      limited: false,
      currentMonthCount: 0,
    });
  });

  // 2026-08-06: 無料の月次上限（公平性）のためのカウント。
  // 上限判定そのものは aiCostCore.evaluateFreeGate が持つ（ここは数えるだけ）。
  describe('月次カウント', () => {
    it('同月なら monthCount を引き継ぐ', () => {
      const r = evaluateRateLimit(
        {
          dateJST: '2026-06-02',
          count: 2,
          monthJST: '2026-06',
          monthCount: 87,
        },
        '2026-06-02',
        40
      );
      expect(r.currentMonthCount).toBe(87);
    });

    it('月が変わると 0 にリセット', () => {
      const r = evaluateRateLimit(
        {
          dateJST: '2026-06-30',
          count: 2,
          monthJST: '2026-06',
          monthCount: 599,
        },
        '2026-07-01',
        40
      );
      expect(r.currentMonthCount).toBe(0);
    });

    it('日をまたいでも同月なら月次は続く（日次だけリセット）', () => {
      const r = evaluateRateLimit(
        {
          dateJST: '2026-06-01',
          count: 40,
          monthJST: '2026-06',
          monthCount: 40,
        },
        '2026-06-02',
        40
      );
      expect(r.currentCount).toBe(0);
      expect(r.limited).toBe(false);
      expect(r.currentMonthCount).toBe(40);
    });

    it('monthJST が無い既存ユーザーは 0 から始まる（移行時に締め出さない）', () => {
      const r = evaluateRateLimit(
        { dateJST: '2026-06-02', count: 10 },
        '2026-06-02',
        40
      );
      expect(r.currentMonthCount).toBe(0);
    });
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

// 2026-08-06: 無料の検索的想起は 1日1回まで（記憶は全員に残し、
// 「思い出す深さ」で有料と差をつける方針）。
describe('canRecallToday（無料の想起は1日1回）', () => {
  it('未使用なら想起できる', () => {
    expect(canRecallToday(undefined, '2026-08-06')).toBe(true);
    expect(canRecallToday({ dateJST: '2026-08-06' }, '2026-08-06')).toBe(true);
  });

  it('当日すでに使っていれば想起しない', () => {
    expect(canRecallToday({ recallDateJST: '2026-08-06' }, '2026-08-06')).toBe(
      false
    );
  });

  it('日付が変われば再び想起できる', () => {
    expect(canRecallToday({ recallDateJST: '2026-08-05' }, '2026-08-06')).toBe(
      true
    );
  });
});

describe('resolveFreeSafety（無料Botの安全分類・LLM を呼ばない）', () => {
  it('自傷・虐待は crisis（呼び出し側は生成を1回も行わない）', () => {
    expect(resolveFreeSafety('もう死にたい')).toBe('crisis');
    expect(resolveFreeSafety('お父さんに殴られた')).toBe('crisis');
  });

  it('慣用表現は crisis にしない（通知が鳴りっぱなしにならない）', () => {
    expect(resolveFreeSafety('テストで死んだwww')).not.toBe('crisis');
    expect(resolveFreeSafety('死ぬほど眠い')).not.toBe('crisis');
  });

  it('気持ちの相談は concern（末尾に大人へつなげる一文が付く）', () => {
    expect(resolveFreeSafety('友だちとけんかしてつらい')).toBe('concern');
  });

  it('ふつうの学習質問は normal', () => {
    expect(resolveFreeSafety('鎌倉幕府っていつできたの？')).toBe('normal');
    expect(resolveFreeSafety('')).toBe('normal');
  });

  it('判断がつかないときは concern に倒す（free は LLM で補完しないため）', () => {
    // classifyDeterministic が 'unknown' を返すケースを直接与える
    expect(['concern', 'normal', 'crisis']).toContain(
      resolveFreeSafety('なんかしんどい')
    );
    expect(resolveFreeSafety('なんかしんどい')).not.toBe('normal');
  });
});

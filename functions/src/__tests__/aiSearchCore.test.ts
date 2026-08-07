// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  parseSearchLimits,
  currentSearchCount,
  evaluateSearchGate,
  extractSearchRequest,
  searchUnavailableNote,
  SEARCH_GUIDE,
  DEFAULT_USER_DAILY_SEARCH_CAP,
  DEFAULT_GLOBAL_MONTHLY_SEARCH_CAP,
  type SearchLimits,
} from '../aiSearchCore';

const LIMITS: SearchLimits = parseSearchLimits({});

function gate(over: Partial<Parameters<typeof evaluateSearchGate>[0]> = {}) {
  return evaluateSearchGate({
    tier: 'free',
    limits: LIMITS,
    userTodayCount: 0,
    globalMonthCount: 0,
    ...over,
  });
}

describe('parseSearchLimits', () => {
  it('未設定なら free に提供・既定の上限', () => {
    expect(LIMITS.tier).toBe('free');
    expect(LIMITS.userDailyCap).toBe(DEFAULT_USER_DAILY_SEARCH_CAP);
    expect(LIMITS.globalMonthlyCap).toBe(DEFAULT_GLOBAL_MONTHLY_SEARCH_CAP);
  });

  it('全体上限は Gemini の無料枠 5,000/月 の手前に置く', () => {
    expect(DEFAULT_GLOBAL_MONTHLY_SEARCH_CAP).toBeLessThan(5000);
  });

  it('env でプレミアム限定・停止に切り替えられる', () => {
    expect(parseSearchLimits({ AI_SEARCH_TIER: 'premium' }).tier).toBe(
      'premium'
    );
    expect(parseSearchLimits({ AI_SEARCH_TIER: 'off' }).tier).toBe('off');
  });

  it('不正な値は既定へ倒す（無制限にしない）', () => {
    const l = parseSearchLimits({
      AI_SEARCH_TIER: 'ゴミ',
      AI_SEARCH_USER_DAILY_CAP: '0',
      AI_SEARCH_GLOBAL_MONTHLY_CAP: 'abc',
    });
    expect(l.tier).toBe('free');
    expect(l.userDailyCap).toBe(DEFAULT_USER_DAILY_SEARCH_CAP);
    expect(l.globalMonthlyCap).toBe(DEFAULT_GLOBAL_MONTHLY_SEARCH_CAP);
  });
});

describe('currentSearchCount', () => {
  it('同日なら引き継ぐ', () => {
    expect(
      currentSearchCount(
        { searchDateJST: '2026-08-07', searchCount: 2 },
        '2026-08-07'
      )
    ).toBe(2);
  });
  it('日付が変われば 0', () => {
    expect(
      currentSearchCount(
        { searchDateJST: '2026-08-06', searchCount: 3 },
        '2026-08-07'
      )
    ).toBe(0);
  });
  it('未設定は 0', () => {
    expect(currentSearchCount(undefined, '2026-08-07')).toBe(0);
  });
});

describe('evaluateSearchGate', () => {
  it('健全なら許可', () => {
    expect(gate()).toEqual({ allowed: true });
  });

  it('1人1日の上限で止まる', () => {
    expect(gate({ userTodayCount: DEFAULT_USER_DAILY_SEARCH_CAP })).toEqual({
      allowed: false,
      reason: 'user_daily',
    });
  });

  it('全体の月次上限で止まる（無料枠を超えさせない）', () => {
    expect(
      gate({ globalMonthCount: DEFAULT_GLOBAL_MONTHLY_SEARCH_CAP })
    ).toEqual({ allowed: false, reason: 'global_monthly' });
  });

  it('premium 限定にすると無料ティアは止まる', () => {
    const limits = parseSearchLimits({ AI_SEARCH_TIER: 'premium' });
    expect(gate({ limits, tier: 'free' })).toEqual({
      allowed: false,
      reason: 'tier',
    });
    expect(gate({ limits, tier: 'paid' })).toEqual({ allowed: true });
  });

  it('off なら誰も使えない', () => {
    const limits = parseSearchLimits({ AI_SEARCH_TIER: 'off' });
    expect(gate({ limits, tier: 'paid' })).toEqual({
      allowed: false,
      reason: 'off',
    });
  });

  // 検索は無料枠の内側で運用しているので、集計が読めない数分で事故にならない。
  // deny に倒すと機能が黙って死ぬほうが損失が大きい。
  it('全体集計が読めなくても止めない', () => {
    expect(gate({ globalMonthCount: undefined })).toEqual({ allowed: true });
  });

  it('個人の上限は全体より先に効く', () => {
    const d = gate({
      userTodayCount: DEFAULT_USER_DAILY_SEARCH_CAP,
      globalMonthCount: DEFAULT_GLOBAL_MONTHLY_SEARCH_CAP,
    });
    expect(d).toEqual({ allowed: false, reason: 'user_daily' });
  });
});

describe('extractSearchRequest', () => {
  it('マーカーを取り出して本文から取り除く', () => {
    const r = extractSearchRequest(
      'ちょっと調べてみるね！[[SEARCH: 2026年の夏の甲子園 優勝校]]'
    );
    expect(r.query).toBe('2026年の夏の甲子園 優勝校');
    expect(r.text).toBe('ちょっと調べてみるね！');
  });

  it('マーカーが無ければそのまま', () => {
    const r = extractSearchRequest('鎌倉幕府は1185年ごろに成立したよ');
    expect(r.query).toBeNull();
    expect(r.text).toBe('鎌倉幕府は1185年ごろに成立したよ');
  });

  it('文中にあっても取り除ける', () => {
    const r = extractSearchRequest('まって[[SEARCH: 最新のニュース]]調べるね');
    expect(r.query).toBe('最新のニュース');
    expect(r.text).not.toContain('SEARCH');
  });

  // マーカーが生徒に見えると意味不明なので、検索しない場合でも必ず消す。
  it('空のマーカーは query=null だが本文からは消える', () => {
    const r = extractSearchRequest('うーん[[SEARCH:   ]]');
    expect(r.query).toBeNull();
    expect(r.text).not.toContain('SEARCH');
  });

  it('長すぎるクエリのマーカーは拾わない（暴走ガード）', () => {
    const long = 'あ'.repeat(200);
    const r = extractSearchRequest(`[[SEARCH: ${long}]]`);
    expect(r.query).toBeNull();
  });
});

describe('searchUnavailableNote', () => {
  it('個人の上限は「また明日」と伝える', () => {
    expect(searchUnavailableNote('user_daily')).toContain('明日');
  });
  it('システム都合はユーザーを責めない', () => {
    expect(searchUnavailableNote('global_monthly')).toContain('使えない');
  });
});

describe('SEARCH_GUIDE（プロンプト）', () => {
  it('マーカーの書き方を示している', () => {
    expect(SEARCH_GUIDE).toContain('[[SEARCH:');
  });

  // 教科の内容を検索させると、教材の説明とズレて学習と噛み合わなくなる。
  it('教科の学習内容は検索させない', () => {
    expect(SEARCH_GUIDE).toContain('教科の学習内容そのもの');
    expect(SEARCH_GUIDE).toContain('迷ったら調べない');
  });

  it('配信中の問題の答えは調べさせない', () => {
    expect(SEARCH_GUIDE).toContain('配信中の問題の答え');
  });

  it('個人情報を検索させない', () => {
    expect(SEARCH_GUIDE).toContain('個人情報');
  });
});

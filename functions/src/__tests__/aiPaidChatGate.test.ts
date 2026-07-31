/**
 * ティア分岐とコストゲートの「入口」の回帰テスト。
 *
 * ここが漏れると**無料Bot の 3,000 人が上位モデルを使える**＝最大の請求事故に
 * なるため、`resolveTier` と `evaluateGate` の組み合わせを実データ形に近い形で固める。
 *
 * ネットワークや firebase-admin を触らないよう、純粋ロジックだけを検証する
 * （`handlePaidAiChat` 本体の I/O は実機確認とデプロイ後の手動テストで担保）。
 */
import { describe, it, expect } from 'vitest';

import { resolveTier, budgetScale } from '../aiTier';
import {
  evaluateGate,
  parseLimits,
  denyMessage,
  type CostState,
} from '../aiCostCore';
import { resolveModel, CHEAPEST_MODEL, UPPER_MODEL } from '../llmModelResolver';

const NOW = Date.UTC(2026, 6, 25, 12);
const DAY = 24 * 60 * 60 * 1000;
const LIMITS = parseLimits({});

function license(expiresAtMs: number, source?: string) {
  return {
    plan: 'set',
    ...(source ? { source } : {}),
    expiresAt: { toMillis: () => expiresAtMs },
  };
}

function healthy(over: Partial<CostState> = {}): CostState {
  return {
    globalMonthJpy: 0,
    globalDayJpy: 0,
    userMonthJpy: 0,
    userDayJpy: 0,
    userDayCount: 0,
    ...over,
  };
}

describe('入口ゲート: 誰が paid になるか', () => {
  const cases: Array<{
    label: string;
    bot: 'ichimon' | 'tsudumon';
    tsudumonRaw: unknown;
    expected: 'free' | 'paid';
  }> = [
    {
      label: '一問一答Bot・ライセンス無し（＝3,000人の大多数）',
      bot: 'ichimon',
      tsudumonRaw: undefined,
      expected: 'free',
    },
    {
      label: '一問一答Bot・つづもん購入済み（Bot が違うので free）',
      bot: 'ichimon',
      tsudumonRaw: license(NOW + 30 * DAY),
      expected: 'free',
    },
    {
      label: 'つづもんBot・ライセンス無し（友だち追加だけした人）',
      bot: 'tsudumon',
      tsudumonRaw: undefined,
      expected: 'free',
    },
    {
      label: 'つづもんBot・期限切れ（解約後）',
      bot: 'tsudumon',
      tsudumonRaw: license(NOW - 1),
      expected: 'free',
    },
    {
      label: 'つづもんBot・有効ライセンス',
      bot: 'tsudumon',
      tsudumonRaw: license(NOW + 30 * DAY),
      expected: 'paid',
    },
    {
      label: 'つづもんBot・3日間無料お試し中',
      bot: 'tsudumon',
      tsudumonRaw: license(NOW + 2 * DAY, 'trial'),
      expected: 'paid',
    },
  ];

  for (const c of cases) {
    it(`${c.label} → ${c.expected}`, () => {
      const r = resolveTier({
        bot: c.bot,
        tsudumonRaw: c.tsudumonRaw,
        nowMs: NOW,
      });
      expect(r.tier).toBe(c.expected);
    });
  }

  it('free に落ちたユーザーは上位モデルに到達できない', () => {
    const r = resolveTier({
      bot: 'ichimon',
      tsudumonRaw: undefined,
      nowMs: NOW,
    });
    for (const purpose of ['chat', 'counsel', 'plan'] as const) {
      expect(resolveModel(purpose, r.tier, 0).model).toBe(CHEAPEST_MODEL);
    }
  });

  it('paid（license）だけが上位モデルに到達できる', () => {
    const r = resolveTier({
      bot: 'tsudumon',
      tsudumonRaw: license(NOW + DAY),
      nowMs: NOW,
    });
    expect(resolveModel('counsel', r.tier, 0).model).toBe(UPPER_MODEL);
  });
});

describe('入口ゲート: deny のときは LLM を呼ばせない', () => {
  const paid = resolveTier({
    bot: 'tsudumon',
    tsudumonRaw: license(NOW + 30 * DAY),
    nowMs: NOW,
  });

  it('全体日次キャップ超過で deny＋運営通知', () => {
    const d = evaluateGate({
      tier: paid,
      purpose: 'chat',
      state: healthy({ globalDayJpy: LIMITS.globalDailyCapJpy }),
      limits: LIMITS,
      nowMs: NOW,
      userText: 'テストのやり方おしえて',
    });
    expect(d.kind).toBe('deny');
    if (d.kind === 'deny') {
      expect(d.notifyAdmin).toBe(true);
      // ユーザーには不安をあおらない文言を返す
      expect(denyMessage(d.reason)).not.toMatch(/エラー|失敗|上限/);
    }
  });

  it('集計が読めないときは deny（「読めないから無制限」にしない）', () => {
    const d = evaluateGate({
      tier: paid,
      purpose: 'chat',
      state: healthy({ globalMonthJpy: undefined }),
      limits: LIMITS,
      nowMs: NOW,
      userText: 'こんにちは、しつもんがあります',
    });
    expect(d.kind).toBe('deny');
    if (d.kind === 'deny') expect(d.reason).toBe('state_unavailable');
  });

  it('体験ユーザーは license より早く枠を使い切る', () => {
    const trial = resolveTier({
      bot: 'tsudumon',
      tsudumonRaw: license(NOW + DAY, 'trial'),
      nowMs: NOW,
    });
    expect(budgetScale(trial)).toBeLessThan(budgetScale(paid));

    const state = healthy({
      userMonthJpy: LIMITS.userMonthlyBudgetJpy * 0.5,
    });
    const asPaid = evaluateGate({
      tier: paid,
      purpose: 'chat',
      state,
      limits: LIMITS,
      nowMs: NOW,
      userText: 'しつもんです、おしえてください',
    });
    const asTrial = evaluateGate({
      tier: trial,
      purpose: 'chat',
      state,
      limits: LIMITS,
      nowMs: NOW,
      userText: 'しつもんです、おしえてください',
    });
    expect(asPaid.kind).toBe('allow');
    expect(asTrial.kind).toBe('deny');
  });
});

describe('入口ゲート: allow の内容が予算に連動する', () => {
  const paid = resolveTier({
    bot: 'tsudumon',
    tsudumonRaw: license(NOW + 30 * DAY),
    nowMs: NOW,
  });

  function allowAt(ratio: number) {
    const d = evaluateGate({
      tier: paid,
      purpose: 'counsel',
      state: healthy({ userMonthJpy: LIMITS.userMonthlyBudgetJpy * ratio }),
      limits: LIMITS,
      nowMs: NOW,
      userText: 'ちょっとそうだんしたいことがあるんだ',
    });
    if (d.kind !== 'allow') throw new Error(`expected allow at ${ratio}`);
    return d;
  }

  it('予算消費に応じてモデルが安くなる', () => {
    const m0 = resolveModel('counsel', 'paid', allowAt(0).degrade).model;
    const m1 = resolveModel('counsel', 'paid', allowAt(0.75).degrade).model;
    const m2 = resolveModel('counsel', 'paid', allowAt(0.95).degrade).model;
    expect(m0).toBe(UPPER_MODEL);
    expect(m1).not.toBe(UPPER_MODEL);
    expect(m2).toBe(CHEAPEST_MODEL);
  });

  it('入力トークン上限は常に設定される（⑤層）', () => {
    for (const ratio of [0, 0.75, 0.95]) {
      expect(allowAt(ratio).maxInputTokens).toBeGreaterThan(0);
      expect(allowAt(ratio).maxInputTokens).toBeLessThanOrEqual(
        LIMITS.maxInputTokens
      );
    }
  });
});

import { describe, it, expect } from 'vitest';

import {
  evaluateGate,
  evaluateFreeGate,
  parseLimits,
  isDuplicateMessage,
  isFlooding,
  denyMessage,
  isUserQuotaDeny,
  DEFAULT_GLOBAL_MONTHLY_CAP_JPY,
  DEFAULT_GLOBAL_DAILY_CAP_JPY,
  DEFAULT_USER_MONTHLY_BUDGET_JPY,
  DEFAULT_MAX_INPUT_TOKENS,
  DEFAULT_FREE_MONTHLY_CAP_JPY,
  DEFAULT_FREE_DAILY_CAP_JPY,
  DEFAULT_FREE_USER_MONTHLY_CALL_CAP,
  FLOOD_WINDOW_MS,
  type CostState,
  type FreeCostState,
  type GateInput,
  type DenyReason,
} from '../aiCostCore';
import type { TierResolution } from '../aiTier';

const NOW = 1_800_000_000_000;
const PAID: TierResolution = { tier: 'paid', entitlement: 'license' };
const TRIAL: TierResolution = { tier: 'paid', entitlement: 'trial' };
const FREE: TierResolution = { tier: 'free', entitlement: 'none' };

const LIMITS = parseLimits({});

/** 何の上限にも当たらない健全な状態。 */
function healthyState(over: Partial<CostState> = {}): CostState {
  return {
    globalMonthJpy: 0,
    globalDayJpy: 0,
    userMonthJpy: 0,
    userDayJpy: 0,
    userDayCount: 0,
    ...over,
  };
}

function gate(over: Partial<GateInput> = {}): GateInput {
  return {
    tier: PAID,
    purpose: 'chat',
    state: healthyState(),
    limits: LIMITS,
    nowMs: NOW,
    userText: 'きょうの勉強どうしたらいい？',
    ...over,
  };
}

describe('aiCostCore.parseLimits（不正値は既定の低い方へ倒す）', () => {
  it('未設定なら既定値', () => {
    const l = parseLimits({});
    expect(l.globalMonthlyCapJpy).toBe(DEFAULT_GLOBAL_MONTHLY_CAP_JPY);
    expect(l.globalDailyCapJpy).toBe(DEFAULT_GLOBAL_DAILY_CAP_JPY);
    expect(l.userMonthlyBudgetJpy).toBe(DEFAULT_USER_MONTHLY_BUDGET_JPY);
    expect(l.maxInputTokens).toBe(DEFAULT_MAX_INPUT_TOKENS);
  });

  it('数値でない・0・負値は既定値（無制限にしない）', () => {
    for (const bad of ['', 'abc', '0', '-1', 'Infinity', 'NaN']) {
      const l = parseLimits({
        AI_GLOBAL_MONTHLY_CAP_JPY: bad,
        AI_MONTHLY_BUDGET_JPY: bad,
      });
      expect(l.globalMonthlyCapJpy).toBe(DEFAULT_GLOBAL_MONTHLY_CAP_JPY);
      expect(l.userMonthlyBudgetJpy).toBe(DEFAULT_USER_MONTHLY_BUDGET_JPY);
    }
  });

  it('妥当な値は採用される', () => {
    const l = parseLimits({
      AI_MONTHLY_BUDGET_JPY: '400',
      AI_GLOBAL_DAILY_CAP_JPY: '500',
    });
    expect(l.userMonthlyBudgetJpy).toBe(400);
    expect(l.globalDailyCapJpy).toBe(500);
  });

  it('割合は 0<r<=1 の範囲外なら既定値', () => {
    const l = parseLimits({
      AI_SPIKE_RATIO: '5',
      AI_DAILY_BUDGET_RATIO: '-0.5',
    });
    expect(l.spikeRatio).toBeGreaterThan(0);
    expect(l.spikeRatio).toBeLessThanOrEqual(1);
    expect(l.dailyBudgetRatio).toBeGreaterThan(0);
    expect(l.dailyBudgetRatio).toBeLessThanOrEqual(1);
  });
});

describe('aiCostCore.evaluateGate', () => {
  it('健全な状態なら allow / degrade 0', () => {
    const d = evaluateGate(gate());
    expect(d.kind).toBe('allow');
    if (d.kind === 'allow') {
      expect(d.degrade).toBe(0);
      expect(d.maxInputTokens).toBe(DEFAULT_MAX_INPUT_TOKENS);
      expect(d.historyTurns).toBeGreaterThan(6);
    }
  });

  describe('集計が読めないときは止める（最重要のフェイルセーフ）', () => {
    const missingCases: Array<[string, Partial<CostState>]> = [
      ['全体月次', { globalMonthJpy: undefined }],
      ['全体日次', { globalDayJpy: undefined }],
      // @ts-expect-error 実運用で undefined が混じるケースを再現するため型を外す
      ['ユーザー月次', { userMonthJpy: undefined }],
      // @ts-expect-error 実運用で undefined が混じるケースを再現するため型を外す
      ['ユーザー日次', { userDayJpy: undefined }],
      // @ts-expect-error 実運用で undefined が混じるケースを再現するため型を外す
      ['当日回数', { userDayCount: undefined }],
    ];

    for (const [label, over] of missingCases) {
      it(`${label} が取れなければ deny: state_unavailable`, () => {
        const d = evaluateGate(gate({ state: healthyState(over) }));
        expect(d).toEqual({
          kind: 'deny',
          reason: 'state_unavailable',
          notifyAdmin: false,
        });
      });
    }

    it('NaN も deny（「読めた」と誤認しない）', () => {
      const d = evaluateGate(
        gate({ state: healthyState({ globalMonthJpy: Number.NaN }) })
      );
      expect(d.kind).toBe('deny');
    });
  });

  describe('サービス全体のキャップ', () => {
    it('全体日次を超えたら deny＋運営通知', () => {
      const d = evaluateGate(
        gate({
          state: healthyState({ globalDayJpy: LIMITS.globalDailyCapJpy }),
        })
      );
      expect(d).toEqual({
        kind: 'deny',
        reason: 'global_daily',
        notifyAdmin: true,
      });
    });

    it('全体月次を超えたら deny＋運営通知', () => {
      const d = evaluateGate(
        gate({
          state: healthyState({
            globalMonthJpy: LIMITS.globalMonthlyCapJpy + 1,
          }),
        })
      );
      expect(d).toEqual({
        kind: 'deny',
        reason: 'global_monthly',
        notifyAdmin: true,
      });
    });

    it('全体キャップはユーザー予算より先に評価される', () => {
      // ユーザーも超過しているが、全体の方が先に返る
      const d = evaluateGate(
        gate({
          state: healthyState({
            globalDayJpy: LIMITS.globalDailyCapJpy,
            userMonthJpy: 99_999,
          }),
        })
      );
      if (d.kind === 'deny') expect(d.reason).toBe('global_daily');
    });
  });

  describe('連投・反復', () => {
    it('直前と同一メッセージなら deny', () => {
      const text = 'テスト範囲ってどこまでだっけ？';
      const d = evaluateGate(
        gate({ userText: text, state: healthyState({ lastUserText: text }) })
      );
      if (d.kind === 'deny') expect(d.reason).toBe('duplicate');
      else throw new Error('should deny');
    });

    it('フラッドなら deny', () => {
      const times = Array.from({ length: 12 }, (_, i) => NOW - i * 1000);
      const d = evaluateGate(
        gate({ state: healthyState({ recentMessageTimesMs: times }) })
      );
      if (d.kind === 'deny') expect(d.reason).toBe('flood');
      else throw new Error('should deny');
    });
  });

  describe('ユーザーごとの上限', () => {
    it('当日回数上限で deny', () => {
      const d = evaluateGate(
        gate({ state: healthyState({ userDayCount: LIMITS.userDailyCallCap }) })
      );
      if (d.kind === 'deny') expect(d.reason).toBe('user_daily_count');
      else throw new Error('should deny');
    });

    it('当日コスト上限で deny', () => {
      const daily = LIMITS.userMonthlyBudgetJpy * LIMITS.dailyBudgetRatio;
      const d = evaluateGate(
        gate({ state: healthyState({ userDayJpy: daily }) })
      );
      if (d.kind === 'deny') expect(d.reason).toBe('user_daily_cost');
      else throw new Error('should deny');
    });

    it('月次100%超で deny', () => {
      const d = evaluateGate(
        gate({
          state: healthyState({
            userMonthJpy: LIMITS.userMonthlyBudgetJpy,
          }),
        })
      );
      if (d.kind === 'deny') expect(d.reason).toBe('user_monthly');
      else throw new Error('should deny');
    });

    it('急増（1日で月予算の30%）は日次コスト上限より緩いケースで通知付き deny', () => {
      // dailyBudgetRatio(0.1) < spikeRatio(0.3) なので、通常は日次上限が先に効く。
      // 日次上限を大きくした env では spike が独立して効くことを確認する。
      const limits = parseLimits({ AI_DAILY_BUDGET_RATIO: '1' });
      const d = evaluateGate(
        gate({
          limits,
          state: healthyState({
            userDayJpy: limits.userMonthlyBudgetJpy * limits.spikeRatio,
          }),
        })
      );
      expect(d).toEqual({
        kind: 'deny',
        reason: 'user_spike',
        notifyAdmin: true,
      });
    });
  });

  describe('段階デグレード', () => {
    it('70%超で degrade 1', () => {
      const d = evaluateGate(
        gate({
          state: healthyState({
            userMonthJpy: LIMITS.userMonthlyBudgetJpy * 0.7,
          }),
        })
      );
      if (d.kind === 'allow') expect(d.degrade).toBe(1);
      else throw new Error('should allow');
    });

    it('90%超で degrade 2', () => {
      const d = evaluateGate(
        gate({
          state: healthyState({
            userMonthJpy: LIMITS.userMonthlyBudgetJpy * 0.95,
          }),
        })
      );
      if (d.kind === 'allow') expect(d.degrade).toBe(2);
      else throw new Error('should allow');
    });

    it('degrade が上がるほど履歴・出力が縮む', () => {
      const at = (ratio: number) =>
        evaluateGate(
          gate({
            purpose: 'counsel',
            state: healthyState({
              userMonthJpy: LIMITS.userMonthlyBudgetJpy * ratio,
            }),
          })
        );
      const a = at(0);
      const b = at(0.75);
      const c = at(0.95);
      if (a.kind !== 'allow' || b.kind !== 'allow' || c.kind !== 'allow') {
        throw new Error('should allow');
      }
      expect(b.historyTurns).toBeLessThan(a.historyTurns);
      expect(c.historyTurns).toBeLessThan(b.historyTurns);
      expect(c.maxOutputTokens).toBeLessThan(a.maxOutputTokens);
    });
  });

  describe('3日間無料お試しは小さい予算', () => {
    it('license なら通るコストで trial は deny になる', () => {
      // license 予算の 20%（trial 予算 = license/7 なので trial では超過）
      const state = healthyState({
        userMonthJpy: LIMITS.userMonthlyBudgetJpy * 0.2,
      });
      const asLicense = evaluateGate(gate({ tier: PAID, state }));
      const asTrial = evaluateGate(gate({ tier: TRIAL, state }));
      expect(asLicense.kind).toBe('allow');
      expect(asTrial.kind).toBe('deny');
    });
  });

  describe('free は予算制の対象外（従来の回数制のまま）', () => {
    it('allow が返り、履歴・出力は free の既定値', () => {
      const d = evaluateGate(gate({ tier: FREE }));
      if (d.kind === 'allow') {
        expect(d.degrade).toBe(0);
        expect(d.historyTurns).toBe(20);
        // gate() の既定 purpose は 'chat' なので free の会話上限（700）。
        expect(d.maxOutputTokens).toBe(700);
      } else {
        throw new Error('should allow');
      }
    });
  });
});

describe('aiCostCore.evaluateFreeGate', () => {
  /** 何の上限にも当たっていない無料ティアの状態。 */
  function freeState(over: Partial<FreeCostState> = {}): FreeCostState {
    return {
      globalMonthJpy: 0,
      globalDayJpy: 0,
      freeMonthJpy: 0,
      freeDayJpy: 0,
      userMonthCount: 0,
      ...over,
    };
  }

  function freeGate(over: Partial<FreeCostState> = {}) {
    return evaluateFreeGate({
      purpose: 'chat',
      limits: LIMITS,
      state: freeState(over),
    });
  }

  it('健全なら allow（degrade 0＝最安モデル固定）', () => {
    const d = freeGate();
    expect(d.kind).toBe('allow');
    if (d.kind !== 'allow') return;
    expect(d.degrade).toBe(0);
    expect(d.maxInputTokens).toBe(LIMITS.maxInputTokens);
  });

  it('allow のときは evaluateGate(free) と同じ通行証になる（二重化していない）', () => {
    for (const purpose of ['chat', 'counsel', 'classify'] as const) {
      const viaGate = evaluateGate(gate({ tier: FREE, purpose }));
      expect(
        evaluateFreeGate({ purpose, limits: LIMITS, state: freeState() })
      ).toEqual(viaGate);
    }
  });

  // ここが今回の主目的。2026-08-06 まで free は無条件 allow だった。
  describe('全体キャップが free にも効く', () => {
    it('全体 日次超過 → deny（運営通知あり）', () => {
      const d = freeGate({ globalDayJpy: DEFAULT_GLOBAL_DAILY_CAP_JPY });
      expect(d).toEqual({
        kind: 'deny',
        reason: 'global_daily',
        notifyAdmin: true,
      });
    });

    it('全体 月次超過 → deny（運営通知あり）', () => {
      const d = freeGate({ globalMonthJpy: DEFAULT_GLOBAL_MONTHLY_CAP_JPY });
      expect(d).toEqual({
        kind: 'deny',
        reason: 'global_monthly',
        notifyAdmin: true,
      });
    });
  });

  describe('無料ティア専用のサブキャップ', () => {
    it('無料 日次超過 → deny free_daily', () => {
      const d = freeGate({ freeDayJpy: DEFAULT_FREE_DAILY_CAP_JPY });
      expect(d).toEqual({
        kind: 'deny',
        reason: 'free_daily',
        notifyAdmin: true,
      });
    });

    it('無料 月次超過 → deny free_monthly', () => {
      const d = freeGate({ freeMonthJpy: DEFAULT_FREE_MONTHLY_CAP_JPY });
      expect(d).toEqual({
        kind: 'deny',
        reason: 'free_monthly',
        notifyAdmin: true,
      });
    });

    it('全体キャップに余裕があっても、無料枠を超えたら止まる（有料の予算を食わせない）', () => {
      const d = freeGate({
        globalMonthJpy: 0,
        globalDayJpy: 0,
        freeMonthJpy: DEFAULT_FREE_MONTHLY_CAP_JPY + 1,
      });
      expect(d.kind).toBe('deny');
    });

    it('上限直前は通す（境界: cap - 1）', () => {
      expect(
        freeGate({ freeMonthJpy: DEFAULT_FREE_MONTHLY_CAP_JPY - 1 }).kind
      ).toBe('allow');
      expect(
        freeGate({ freeDayJpy: DEFAULT_FREE_DAILY_CAP_JPY - 1 }).kind
      ).toBe('allow');
    });
  });

  describe('個人の月次回数（公平性）', () => {
    it('上限到達 → deny free_user_monthly（運営通知はしない）', () => {
      const d = freeGate({
        userMonthCount: DEFAULT_FREE_USER_MONTHLY_CALL_CAP,
      });
      expect(d).toEqual({
        kind: 'deny',
        reason: 'free_user_monthly',
        notifyAdmin: false,
      });
    });

    it('1人が全体枠を食い潰せない（1日40回×30日=1200 は通らない）', () => {
      expect(freeGate({ userMonthCount: 1200 }).kind).toBe('deny');
    });

    it('上限直前は通す', () => {
      expect(
        freeGate({ userMonthCount: DEFAULT_FREE_USER_MONTHLY_CALL_CAP - 1 })
          .kind
      ).toBe('allow');
    });

    it('ユーザー都合の deny として分類される（計測用）', () => {
      expect(isUserQuotaDeny('free_user_monthly')).toBe(true);
      expect(isUserQuotaDeny('free_daily')).toBe(false);
    });
  });

  describe('集計が読めないときは止めない（paid とは意図的に逆）', () => {
    // free は最安モデル固定で「1人1日40回」が先に効くため、読めない数分間の
    // 損失は数十円。deny に倒すと 3,000人の AI が一斉に沈黙する＝損失が非対称。
    it('全体・ティア別がすべて undefined でも allow', () => {
      const d = evaluateFreeGate({
        purpose: 'chat',
        limits: LIMITS,
        state: {
          globalMonthJpy: undefined,
          globalDayJpy: undefined,
          freeMonthJpy: undefined,
          freeDayJpy: undefined,
          userMonthCount: 0,
        },
      });
      expect(d.kind).toBe('allow');
    });

    it('読めた項目だけは判定する（月次が読めて超過なら止める）', () => {
      const d = evaluateFreeGate({
        purpose: 'chat',
        limits: LIMITS,
        state: {
          globalMonthJpy: undefined,
          globalDayJpy: undefined,
          freeMonthJpy: DEFAULT_FREE_MONTHLY_CAP_JPY,
          freeDayJpy: undefined,
          userMonthCount: 0,
        },
      });
      expect(d.kind).toBe('deny');
    });

    it('集計が読めなくても個人の回数上限は効く（user doc 由来で常に読める）', () => {
      const d = evaluateFreeGate({
        purpose: 'chat',
        limits: LIMITS,
        state: {
          globalMonthJpy: undefined,
          globalDayJpy: undefined,
          freeMonthJpy: undefined,
          freeDayJpy: undefined,
          userMonthCount: DEFAULT_FREE_USER_MONTHLY_CALL_CAP,
        },
      });
      expect(d.kind).toBe('deny');
    });
  });

  describe('env で調整できる', () => {
    it('AI_FREE_MONTHLY_CAP_JPY を上げると通る', () => {
      const limits = parseLimits({ AI_FREE_MONTHLY_CAP_JPY: '10000' });
      const d = evaluateFreeGate({
        purpose: 'chat',
        limits,
        state: freeState({ freeMonthJpy: 5000 }),
      });
      expect(d.kind).toBe('allow');
    });

    it('不正値は既定値（低い方）へ倒す', () => {
      const limits = parseLimits({
        AI_FREE_MONTHLY_CAP_JPY: '0',
        AI_FREE_DAILY_CAP_JPY: 'abc',
        AI_FREE_USER_MONTHLY_CALL_CAP: '-1',
      });
      expect(limits.freeMonthlyCapJpy).toBe(DEFAULT_FREE_MONTHLY_CAP_JPY);
      expect(limits.freeDailyCapJpy).toBe(DEFAULT_FREE_DAILY_CAP_JPY);
      expect(limits.freeUserMonthlyCallCap).toBe(
        DEFAULT_FREE_USER_MONTHLY_CALL_CAP
      );
    });
  });

  describe('deny の文言', () => {
    it('個人の月次上限は責めずに次の一手を示す', () => {
      const text = denyMessage('free_user_monthly');
      expect(text).toContain('来月');
      expect(text).toMatch(/1問解く|苦手/);
    });

    it('ティア枠の超過はシステム都合の文言（ユーザーを責めない）', () => {
      expect(denyMessage('free_daily')).toContain('混み合っている');
      expect(denyMessage('free_monthly')).toContain('混み合っている');
    });
  });
});

describe('aiCostCore.isDuplicateMessage', () => {
  it('空白・全角半角の差を無視して同一と判定', () => {
    expect(
      isDuplicateMessage('テストはいつだっけ？', 'テスト は いつだっけ？')
    ).toBe(true);
  });

  it('短い相槌は対象外（自然に繰り返される）', () => {
    expect(isDuplicateMessage('うん', 'うん')).toBe(false);
    expect(isDuplicateMessage('ありがとう', 'ありがとう')).toBe(false);
  });

  it('片方が空なら false', () => {
    expect(isDuplicateMessage(undefined, 'あいうえおかきくけこ')).toBe(false);
    expect(isDuplicateMessage('あいうえおかきくけこ', undefined)).toBe(false);
  });

  it('異なるメッセージは false', () => {
    expect(
      isDuplicateMessage('鎌倉幕府について教えて', '室町幕府について教えて')
    ).toBe(false);
  });
});

describe('aiCostCore.isFlooding', () => {
  it('窓内の件数が上限以下なら false', () => {
    const times = Array.from({ length: 10 }, (_, i) => NOW - i * 1000);
    expect(isFlooding(times, NOW)).toBe(false);
  });

  it('窓内の件数が上限超なら true', () => {
    const times = Array.from({ length: 11 }, (_, i) => NOW - i * 1000);
    expect(isFlooding(times, NOW)).toBe(true);
  });

  it('窓外の古いメッセージは数えない', () => {
    const times = Array.from(
      { length: 20 },
      (_, i) => NOW - FLOOD_WINDOW_MS - i * 1000
    );
    expect(isFlooding(times, NOW)).toBe(false);
  });

  it('未定義・空配列・不正値でも壊れない', () => {
    expect(isFlooding(undefined, NOW)).toBe(false);
    expect(isFlooding([], NOW)).toBe(false);
    // @ts-expect-error 不正値混入を再現
    expect(isFlooding([null, 'x', NaN], NOW)).toBe(false);
  });
});

describe('aiCostCore.denyMessage / isUserQuotaDeny', () => {
  const reasons: DenyReason[] = [
    'state_unavailable',
    'global_daily',
    'global_monthly',
    'duplicate',
    'flood',
    'user_daily_cost',
    'user_daily_count',
    'user_spike',
    'user_monthly',
  ];

  it('すべての理由に文言があり、Markdown 記法を含まない', () => {
    for (const r of reasons) {
      const msg = denyMessage(r);
      expect(msg.length).toBeGreaterThan(0);
      expect(msg).not.toMatch(/\*\*|^#|^- /m);
    }
  });

  it('ユーザー枠の使い切りとシステム都合を区別する', () => {
    expect(isUserQuotaDeny('user_monthly')).toBe(true);
    expect(isUserQuotaDeny('user_daily_cost')).toBe(true);
    expect(isUserQuotaDeny('global_daily')).toBe(false);
    expect(isUserQuotaDeny('state_unavailable')).toBe(false);
  });
});

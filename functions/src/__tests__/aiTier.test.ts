import { describe, it, expect } from 'vitest';

import { resolveTier, budgetScale } from '../aiTier';

const NOW = Date.UTC(2026, 6, 25, 12, 0, 0);
const DAY = 24 * 60 * 60 * 1000;

/** users/{uid}.tsudumon 相当（Firestore Timestamp 風の toMillis を持つ形）。 */
function license(expiresAtMs: number, source?: string) {
  return {
    plan: 'set',
    ...(source ? { source } : {}),
    expiresAt: { toMillis: () => expiresAtMs },
  };
}

describe('aiTier.resolveTier', () => {
  describe('ゲート1: Bot（一問一答が paid になってはいけない）', () => {
    it('一問一答Botは、有効なライセンスがあっても free', () => {
      const r = resolveTier({
        bot: 'ichimon',
        tsudumonRaw: license(NOW + 30 * DAY),
        nowMs: NOW,
      });
      expect(r.tier).toBe('free');
      expect(r.freeReason).toBe('bot');
    });

    it('bot が未知の値でも free（安全側）', () => {
      const r = resolveTier({
        // @ts-expect-error 意図的に不正値
        bot: 'unknown',
        tsudumonRaw: license(NOW + 30 * DAY),
        nowMs: NOW,
      });
      expect(r.tier).toBe('free');
    });
  });

  describe('ゲート2: つづもんライセンス', () => {
    it('つづもんBot＋有効ライセンス → paid / license', () => {
      const r = resolveTier({
        bot: 'tsudumon',
        tsudumonRaw: license(NOW + 30 * DAY),
        nowMs: NOW,
      });
      expect(r.tier).toBe('paid');
      expect(r.entitlement).toBe('license');
    });

    it('ライセンス無し（undefined）→ free', () => {
      const r = resolveTier({
        bot: 'tsudumon',
        tsudumonRaw: undefined,
        nowMs: NOW,
      });
      expect(r.tier).toBe('free');
      expect(r.freeReason).toBe('no_license');
    });

    it('期限切れ → free', () => {
      const r = resolveTier({
        bot: 'tsudumon',
        tsudumonRaw: license(NOW - 1),
        nowMs: NOW,
      });
      expect(r.tier).toBe('free');
      expect(r.freeReason).toBe('expired');
    });

    it('期限ちょうど（nowMs === expiresAt）は free', () => {
      const r = resolveTier({
        bot: 'tsudumon',
        tsudumonRaw: license(NOW),
        nowMs: NOW,
      });
      expect(r.tier).toBe('free');
    });

    it('壊れた tsudumon フィールドでも例外を投げず free', () => {
      for (const raw of [
        null,
        {},
        { plan: 'unknown' },
        { plan: 'set' },
        { plan: 'set', expiresAt: 'not-a-date' },
        'string',
        42,
      ]) {
        const r = resolveTier({
          bot: 'tsudumon',
          tsudumonRaw: raw,
          nowMs: NOW,
        });
        expect(r.tier).toBe('free');
      }
    });
  });

  describe('3日間無料お試しの区別', () => {
    it('source:"trial" は paid / trial', () => {
      const r = resolveTier({
        bot: 'tsudumon',
        tsudumonRaw: license(NOW + 2 * DAY, 'trial'),
        nowMs: NOW,
      });
      expect(r.tier).toBe('paid');
      expect(r.entitlement).toBe('trial');
    });

    it('体験が失効していれば free', () => {
      const r = resolveTier({
        bot: 'tsudumon',
        tsudumonRaw: license(NOW - 1, 'trial'),
        nowMs: NOW,
      });
      expect(r.tier).toBe('free');
    });
  });
});

describe('aiTier.budgetScale', () => {
  it('free は 0（予算制の対象外）', () => {
    expect(budgetScale({ tier: 'free', entitlement: 'none' })).toBe(0);
  });

  it('license は 1（通常予算）', () => {
    expect(budgetScale({ tier: 'paid', entitlement: 'license' })).toBe(1);
  });

  it('trial は通常予算より小さい', () => {
    const trial = budgetScale({ tier: 'paid', entitlement: 'trial' });
    expect(trial).toBeGreaterThan(0);
    expect(trial).toBeLessThan(1);
  });
});

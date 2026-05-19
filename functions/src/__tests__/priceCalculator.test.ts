// @vitest-environment node

import { describe, it, expect } from "vitest";
import {
  determineApplicationPrice,
  canReopenPriceLock,
  isPriceLockActive,
} from "../priceCalculator";
import type { UserDoc } from "../userDocTypes";

/** Firestore Timestamp 的なラッパー（toDate() を持つだけ） */
function ts(date: Date) {
  return { toDate: () => date } as unknown as UserDoc["priceLockExpiresAt"];
}

const NOW = new Date("2026-05-19T12:00:00+09:00");

function daysFromNow(days: number): Date {
  return new Date(NOW.getTime() + days * 24 * 60 * 60 * 1000);
}

describe("determineApplicationPrice", () => {
  it("体験中（priceLockExpiresAt が未来） → 680", () => {
    const user: UserDoc = {
      priceLockExpiresAt: ts(daysFromNow(3)),
    };
    expect(determineApplicationPrice({ user, applicationTime: NOW })).toBe(680);
  });

  it("体験期限ちょうど（境界） → 980（厳密に > なので）", () => {
    const user: UserDoc = {
      priceLockExpiresAt: ts(NOW),
    };
    expect(determineApplicationPrice({ user, applicationTime: NOW })).toBe(980);
  });

  it("priceLockExpiresAt なし、trial 未経験 → 980", () => {
    const user: UserDoc = {};
    expect(determineApplicationPrice({ user, applicationTime: NOW })).toBe(980);
  });

  it("trial 経験者だが priceLockExpiresAt 期限切れ → 980", () => {
    const user: UserDoc = {
      priceLockExpiresAt: ts(daysFromNow(-1)),
      trialStartedAt: ts(daysFromNow(-10)),
    };
    expect(determineApplicationPrice({ user, applicationTime: NOW })).toBe(980);
  });

  it("価格ロック再オープン中（未使用、3 日以内） → 680", () => {
    const user: UserDoc = {
      trialStartedAt: ts(daysFromNow(-20)),
      priceLockReopenedAt: ts(daysFromNow(-1)),
      priceLockReopenUsed: false,
    };
    expect(determineApplicationPrice({ user, applicationTime: NOW })).toBe(680);
  });

  it("価格ロック再オープンから 3 日超 → 980", () => {
    const user: UserDoc = {
      trialStartedAt: ts(daysFromNow(-30)),
      priceLockReopenedAt: ts(daysFromNow(-4)),
      priceLockReopenUsed: false,
    };
    expect(determineApplicationPrice({ user, applicationTime: NOW })).toBe(980);
  });

  it("再オープン使用済み → 980（再々オープン不可）", () => {
    const user: UserDoc = {
      trialStartedAt: ts(daysFromNow(-30)),
      priceLockReopenedAt: ts(daysFromNow(-1)),
      priceLockReopenUsed: true,
    };
    expect(determineApplicationPrice({ user, applicationTime: NOW })).toBe(980);
  });
});

describe("canReopenPriceLock", () => {
  it("trial 経験者 + 未使用 → true", () => {
    const user: UserDoc = {
      trialStartedAt: ts(daysFromNow(-20)),
      priceLockReopenUsed: false,
    };
    expect(canReopenPriceLock(user)).toBe(true);
  });

  it("trial 経験者 + 使用済み → false", () => {
    const user: UserDoc = {
      trialStartedAt: ts(daysFromNow(-20)),
      priceLockReopenUsed: true,
    };
    expect(canReopenPriceLock(user)).toBe(false);
  });

  it("trial 未経験 → false", () => {
    const user: UserDoc = {};
    expect(canReopenPriceLock(user)).toBe(false);
  });
});

describe("isPriceLockActive", () => {
  it("priceLockExpiresAt が未来 → true", () => {
    const user: UserDoc = {
      priceLockExpiresAt: ts(daysFromNow(3)),
    };
    expect(isPriceLockActive(user, NOW)).toBe(true);
  });

  it("再オープン使用済み + 3 日以内 → true（既にロック確定済み扱い）", () => {
    const user: UserDoc = {
      trialStartedAt: ts(daysFromNow(-30)),
      priceLockReopenedAt: ts(daysFromNow(-1)),
      priceLockReopenUsed: true,
    };
    expect(isPriceLockActive(user, NOW)).toBe(true);
  });

  it("trial 期限切れ + 再オープンもなし → false", () => {
    const user: UserDoc = {
      trialStartedAt: ts(daysFromNow(-30)),
      priceLockExpiresAt: ts(daysFromNow(-20)),
    };
    expect(isPriceLockActive(user, NOW)).toBe(false);
  });
});

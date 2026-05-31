/**
 * trialProjection.ts（Day 6 継続projection ロジック）のテスト。
 */

// @vitest-environment node

import { describe, it, expect } from "vitest";
import { buildDay6ProjectionBullets, roundNice } from "../trialProjection";

describe("buildDay6ProjectionBullets", () => {
  it("中1 / 中2 は 1か月・半年・1年 の 3 行を返す", () => {
    const g1 = buildDay6ProjectionBullets("中1", 30, 6);
    const g2 = buildDay6ProjectionBullets("中2", 30, 6);
    expect(g1).toHaveLength(3);
    expect(g2).toHaveLength(3);
    expect(g1?.[0]).toContain("1か月");
    expect(g1?.[1]).toContain("半年");
    expect(g1?.[2]).toContain("1年");
  });

  it("中3 は受験まで1年ないため半年で打ち切り（2 行・1年は出さない）", () => {
    const g3 = buildDay6ProjectionBullets("中3", 30, 6);
    expect(g3).toHaveLength(2);
    expect(g3?.[0]).toContain("1か月");
    expect(g3?.[1]).toContain("半年");
    expect(g3?.some((l) => l.includes("1年"))).toBe(false);
  });

  it("ペースから累計問題数を見積もる（30問/6日 = 5問/日）", () => {
    // 5問/日 → 1か月150 / 半年900 / 1年1825→1830(概数)
    const bullets = buildDay6ProjectionBullets("中1", 30, 6);
    expect(bullets?.[0]).toContain("150");
    expect(bullets?.[1]).toContain("900");
    expect(bullets?.[2]).toContain("1830");
  });

  it("回答数 0 / 経過日数 0 では null（projection を出さない）", () => {
    expect(buildDay6ProjectionBullets("中1", 0, 6)).toBeNull();
    expect(buildDay6ProjectionBullets("中1", 10, 0)).toBeNull();
  });

  it("学年未設定（undefined）は中1/中2 と同じ 3 行扱い", () => {
    const bullets = buildDay6ProjectionBullets(undefined, 12, 6);
    expect(bullets).toHaveLength(3);
  });
});

describe("roundNice", () => {
  it("100未満は1の位で丸め、100以上は10の位で丸める", () => {
    expect(roundNice(15)).toBe(15);
    expect(roundNice(99)).toBe(99);
    expect(roundNice(150)).toBe(150);
    expect(roundNice(1825)).toBe(1830);
    expect(roundNice(123)).toBe(120);
  });
});

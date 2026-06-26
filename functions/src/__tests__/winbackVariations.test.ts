// @vitest-environment node

import { describe, it, expect } from "vitest";
import {
  DAY_3_WINBACK_VARIATIONS,
  DAY_5_WINBACK_VARIATIONS,
  DAY_7_WINBACK_VARIATIONS,
  DAY_10_WINBACK_VARIATIONS,
  DAY_14_WINBACK_VARIATIONS,
  getVariationsFor,
} from "../winbackVariations";

const CONTEXT_DEFAULTS = {
  daysSinceLastAnswer: 3,
};

describe("winbackVariations - 件数とユニーク性", () => {
  it("Day 3 バリエーションは 10 種以上", () => {
    expect(DAY_3_WINBACK_VARIATIONS.length).toBeGreaterThanOrEqual(10);
  });

  it("Day 7 バリエーションは 10 種以上", () => {
    expect(DAY_7_WINBACK_VARIATIONS.length).toBeGreaterThanOrEqual(10);
  });

  it("Day 14 バリエーションは 10 種以上", () => {
    expect(DAY_14_WINBACK_VARIATIONS.length).toBeGreaterThanOrEqual(10);
  });

  it("Day 5 / Day 10 追撃タッチは複数バリエーションを持つ", () => {
    expect(DAY_5_WINBACK_VARIATIONS.length).toBeGreaterThanOrEqual(3);
    expect(DAY_10_WINBACK_VARIATIONS.length).toBeGreaterThanOrEqual(3);
  });

  it.each([
    ["day3", DAY_3_WINBACK_VARIATIONS],
    ["day5", DAY_5_WINBACK_VARIATIONS],
    ["day7", DAY_7_WINBACK_VARIATIONS],
    ["day10", DAY_10_WINBACK_VARIATIONS],
    ["day14", DAY_14_WINBACK_VARIATIONS],
  ])("%s: variationId がユニーク", (_label, variations) => {
    const ids = variations.map((v) => v.id);
    const set = new Set(ids);
    expect(set.size).toBe(ids.length);
  });
});

describe("winbackVariations - body 関数の動作", () => {
  it.each([
    ["day3", DAY_3_WINBACK_VARIATIONS],
    ["day5", DAY_5_WINBACK_VARIATIONS],
    ["day7", DAY_7_WINBACK_VARIATIONS],
    ["day10", DAY_10_WINBACK_VARIATIONS],
    ["day14", DAY_14_WINBACK_VARIATIONS],
  ])("%s: 全 body が空文字を返さない（nickname なし）", (_label, variations) => {
    for (const v of variations) {
      const text = v.body(CONTEXT_DEFAULTS);
      expect(text.length).toBeGreaterThan(0);
    }
  });

  it.each([
    ["day3", DAY_3_WINBACK_VARIATIONS],
    ["day7", DAY_7_WINBACK_VARIATIONS],
    ["day14", DAY_14_WINBACK_VARIATIONS],
  ])("%s: nickname 付きは「、」で接続される", (_label, variations) => {
    for (const v of variations) {
      const text = v.body({ ...CONTEXT_DEFAULTS, nickname: "たろう" });
      // 名前が含まれる場合は冒頭に出現するはず（バリエーションによって省略可だが、含まれていれば「、」が前提）
      if (text.includes("たろう")) {
        expect(text).toMatch(/たろう、/);
      }
    }
  });

  it("getVariationsFor が touchpoint に対応した配列を返す", () => {
    expect(getVariationsFor("day3")).toBe(DAY_3_WINBACK_VARIATIONS);
    expect(getVariationsFor("day5")).toBe(DAY_5_WINBACK_VARIATIONS);
    expect(getVariationsFor("day7")).toBe(DAY_7_WINBACK_VARIATIONS);
    expect(getVariationsFor("day10")).toBe(DAY_10_WINBACK_VARIATIONS);
    expect(getVariationsFor("day14")).toBe(DAY_14_WINBACK_VARIATIONS);
  });
});

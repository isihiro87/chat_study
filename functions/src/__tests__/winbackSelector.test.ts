// @vitest-environment node

import { describe, it, expect } from "vitest";
import { selectNextWinbackVariation } from "../winbackSelector";
import { DAY_3_WINBACK_VARIATIONS } from "../winbackVariations";

const NOW = new Date("2026-05-19T12:00:00+09:00");

function daysAgo(days: number): Date {
  return new Date(NOW.getTime() - days * 24 * 60 * 60 * 1000);
}

describe("selectNextWinbackVariation", () => {
  it("履歴が空ならランダムに 1 件返す（固定 random で安定化）", () => {
    const selected = selectNextWinbackVariation({
      touchpoint: "day3",
      history: [],
      now: NOW,
      random: () => 0, // 先頭固定
    });
    expect(selected.id).toBe(DAY_3_WINBACK_VARIATIONS[0].id);
  });

  it("90日以内に送ったバリエーションは選ばれない", () => {
    const recent = DAY_3_WINBACK_VARIATIONS.slice(0, 5);
    const history = recent.map((v) => ({
      variationId: v.id,
      sentAt: daysAgo(30),
    }));

    const remaining = DAY_3_WINBACK_VARIATIONS.slice(5);

    // 100 回試行して、必ず recent 以外から選ばれる
    for (let i = 0; i < 100; i++) {
      const selected = selectNextWinbackVariation({
        touchpoint: "day3",
        history,
        now: NOW,
      });
      const isRecent = recent.some((r) => r.id === selected.id);
      const isRemaining = remaining.some((r) => r.id === selected.id);
      expect(isRecent).toBe(false);
      expect(isRemaining).toBe(true);
    }
  });

  it("全バリエーション送信済みなら最も古いものを返す", () => {
    const history = DAY_3_WINBACK_VARIATIONS.map((v, idx) => ({
      variationId: v.id,
      sentAt: daysAgo(idx + 1), // 末尾が一番古い
    }));

    const selected = selectNextWinbackVariation({
      touchpoint: "day3",
      history,
      now: NOW,
    });
    // 末尾の variation が一番古い sentAt
    expect(selected.id).toBe(
      DAY_3_WINBACK_VARIATIONS[DAY_3_WINBACK_VARIATIONS.length - 1].id
    );
  });

  it("90日を超えた履歴は無視される", () => {
    const history = DAY_3_WINBACK_VARIATIONS.map((v) => ({
      variationId: v.id,
      sentAt: daysAgo(91), // すべて 91日前
    }));

    const seen = new Set<string>();
    for (let i = 0; i < 200; i++) {
      const selected = selectNextWinbackVariation({
        touchpoint: "day3",
        history,
        now: NOW,
      });
      seen.add(selected.id);
    }
    // 全バリエーションが選ばれうる（履歴が窓外なので fresh 扱い）
    expect(seen.size).toBeGreaterThanOrEqual(
      Math.min(DAY_3_WINBACK_VARIATIONS.length, 5)
    );
  });

  it("touchpoint ごとに正しいバリエーション集から選ぶ", () => {
    const day7 = selectNextWinbackVariation({
      touchpoint: "day7",
      history: [],
      now: NOW,
    });
    expect(day7.id.startsWith("day7-")).toBe(true);

    const day14 = selectNextWinbackVariation({
      touchpoint: "day14",
      history: [],
      now: NOW,
    });
    expect(day14.id.startsWith("day14-")).toBe(true);
  });
});

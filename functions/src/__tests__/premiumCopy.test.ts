/**
 * premiumCopy.ts の禁止語チェック + 基本動作テスト。
 *
 * セールスコピー設計（requirements.md §D）で定めた禁止事項を
 * 自動テストで強制する。新しい scene を追加した際にも禁止語が混入しないことを保証する。
 */

// @vitest-environment node

import { describe, it, expect } from "vitest";
import {
  getPriceAnchorText,
  getRiskReversalBullets,
  getCtaText,
  getBenefitText,
  getLossAversionText,
  getSocialProofText,
  type PremiumScene,
} from "../premiumCopy";

const ALL_SCENES: PremiumScene[] = [
  "day0-start",
  "day1",
  "day3-feature",
  "day3-parent",
  "day5-story",
  "day6",
  "day7-morning",
  "day7-evening",
  "day7-night",
  "day8-expired",
  "day15-post",
  "day30-post",
  "winback-day7-trial-experienced",
  "winback-day7-trial-fresh",
  "first-answer",
  "milestone",
];

/** 禁止語（中学生向けに不適な比較対象 / 旧表記 / 煽り表現） */
const FORBIDDEN_WORDS = [
  // 中学生のリアルに合わない / 我慢して勉強感が出る比較対象
  "コーヒー",
  "カフェ",
  "ジュース",
  "お菓子",
  "マンガ",
  // コンテンツ実態と乖離する表現
  "全教科",
  "全科目",
  // 旧価格表記
  "1280",
  "1,280",
  "1280円",
  "¥1,280",
  // 煽り表現
  "急げ",
  "損する",
  "今しか",
  "絶対お得",
];

function collectAllStrings(): string[] {
  const out: string[] = [];
  for (const scene of ALL_SCENES) {
    out.push(getPriceAnchorText(scene, 680));
    out.push(getPriceAnchorText(scene, 980));
    out.push(...getRiskReversalBullets(scene));
    out.push(getCtaText(scene));
    out.push(getBenefitText(scene));
    out.push(getLossAversionText(scene, { weakCount: 12 }));
    out.push(getLossAversionText(scene, {}));
    out.push(getSocialProofText(scene));
  }
  return out;
}

describe("premiumCopy - 禁止語チェック", () => {
  const allStrings = collectAllStrings();

  for (const word of FORBIDDEN_WORDS) {
    it(`どのコピーにも禁止語「${word}」が含まれない`, () => {
      const hit = allStrings.find((s) => s.includes(word));
      expect(hit, `禁止語「${word}」を含む文字列: ${hit ?? ""}`).toBeUndefined();
    });
  }
});

describe("premiumCopy - 基本動作", () => {
  it("getPriceAnchorText が ¥680 / ¥980 で異なる出力を返す（価格訴求のあるシーン）", () => {
    const sceneWithPrice: PremiumScene = "day1";
    const at680 = getPriceAnchorText(sceneWithPrice, 680);
    const at980 = getPriceAnchorText(sceneWithPrice, 980);
    expect(at680).not.toBe(at980);
    expect(at680).toContain("680");
    expect(at980).toContain("980");
  });

  it("Day 3 / Day 5 の価格アンカリングは空文字（D-12: 価格訴求を抜く）", () => {
    expect(getPriceAnchorText("day3-feature", 680)).toBe("");
    expect(getPriceAnchorText("day5-story", 680)).toBe("");
  });

  it("getRiskReversalBullets は最低 1 項目を返す（全シーン）", () => {
    for (const scene of ALL_SCENES) {
      const bullets = getRiskReversalBullets(scene);
      expect(bullets.length).toBeGreaterThan(0);
    }
  });

  it("getCtaText は空文字を返さない（全シーン）", () => {
    for (const scene of ALL_SCENES) {
      expect(getCtaText(scene).length).toBeGreaterThan(0);
    }
  });

  it("getLossAversionText: weakCount を組み込んだ文言を生成（Day 6 / Day 7）", () => {
    const text = getLossAversionText("day6", { weakCount: 25 });
    expect(text).toContain("25");
  });

  it("getLossAversionText: weakCount が 0 / 未指定なら数字なしの文言", () => {
    const text = getLossAversionText("day6", {});
    expect(text).not.toMatch(/\d+問/);
  });

  it("CTA テキストが場面別に異なる（押し売り感の回避: D-8）", () => {
    const ctas = new Set([
      getCtaText("day1"),
      getCtaText("day6"),
      getCtaText("day7-morning"),
      getCtaText("day7-evening"),
      getCtaText("day7-night"),
    ]);
    expect(ctas.size).toBe(5);
  });
});

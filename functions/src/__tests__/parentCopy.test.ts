// @vitest-environment node

import { describe, it, expect } from "vitest";
import {
  buildParentHeading,
  buildParentCopyBody,
  buildParentCopyBullets,
  getParentCtaText,
  getParentPriceComparisons,
} from "../parentCopy";

describe("parentCopy - 基本動作", () => {
  it("見出しが空文字でない", () => {
    expect(buildParentHeading().length).toBeGreaterThan(0);
  });

  it("本文に「保護者」または塾比較が含まれる", () => {
    const body = buildParentCopyBody();
    expect(body.length).toBeGreaterThan(0);
    // 塾・授業料比較が含まれていること（保護者向けのみ許可される比較）
    expect(body).toMatch(/塾|授業/);
  });

  it("箇条書きが 3 件以上", () => {
    const bullets = buildParentCopyBullets();
    expect(bullets.length).toBeGreaterThanOrEqual(3);
  });

  it("CTA テキストに「保護者」が含まれる", () => {
    expect(getParentCtaText()).toContain("保護者");
  });

  it("補助比較が複数用意されている", () => {
    const comparisons = getParentPriceComparisons();
    expect(comparisons.length).toBeGreaterThanOrEqual(2);
  });
});

describe("parentCopy - 禁止語（中学生本人向けで禁止されている表現）は OK", () => {
  it("保護者向けでは塾比較が許可される（中学生本人向けでは禁止）", () => {
    const allText = [
      buildParentHeading(),
      buildParentCopyBody(),
      ...buildParentCopyBullets(),
      getParentCtaText(),
      ...getParentPriceComparisons(),
    ].join("\n");
    expect(allText).toMatch(/塾/);
  });

  it("「全教科」表現は使わない（コンテンツは歴史のみ）", () => {
    const allText = [
      buildParentHeading(),
      buildParentCopyBody(),
      ...buildParentCopyBullets(),
      getParentCtaText(),
      ...getParentPriceComparisons(),
    ].join("\n");
    expect(allText).not.toContain("全教科");
    expect(allText).not.toContain("全科目");
  });
});

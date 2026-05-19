// @vitest-environment node

import { describe, it, expect } from "vitest";
import {
  detectRestartIntent,
  RESTART_KEYWORDS_INTERNAL,
} from "../keywordMatcher";

describe("detectRestartIntent - 基本", () => {
  it("空文字 / undefined / null は false", () => {
    expect(detectRestartIntent("")).toBe(false);
    expect(detectRestartIntent(undefined)).toBe(false);
    expect(detectRestartIntent(null)).toBe(false);
    expect(detectRestartIntent("   ")).toBe(false);
  });

  it("全キーワード単体がマッチする", () => {
    for (const kw of RESTART_KEYWORDS_INTERNAL) {
      expect(detectRestartIntent(kw)).toBe(true);
    }
  });

  it("キーワードを含む文章もマッチ", () => {
    expect(detectRestartIntent("また始めたい")).toBe(true);
    expect(detectRestartIntent("もう一度やります")).toBe(true);
    expect(detectRestartIntent("久しぶりに戻ってきました")).toBe(true);
    expect(detectRestartIntent("再開したい")).toBe(true);
    expect(detectRestartIntent("ちょっとサボってたごめん")).toBe(true);
  });
});

describe("detectRestartIntent - 誤検知の許容範囲（仕様文書化）", () => {
  it("否定文「再開せずに」もマッチする（誤検知より復帰機会優先の仕様）", () => {
    // 害は「おかえり flex + 1問」が届くだけなので許容。
    expect(detectRestartIntent("再開せずにダラダラ過ごす")).toBe(true);
  });

  it("無関係な文章はマッチしない", () => {
    expect(detectRestartIntent("こんにちは")).toBe(false);
    expect(detectRestartIntent("質問があります")).toBe(false);
    expect(detectRestartIntent("ありがとう")).toBe(false);
    expect(detectRestartIntent("1")).toBe(false);
  });
});

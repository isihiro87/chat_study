import { describe, it, expect } from 'vitest';

import {
  estimateCostJpy,
  isPricedModel,
  resolveJpyPerUsd,
  DEFAULT_JPY_PER_USD,
  UnknownModelPriceError,
  MODEL_PRICES_USD,
} from '../llmPrices';

const CEIL = { maxInputTokens: 20_000, maxOutputTokens: 1_200 };

describe('llmPrices', () => {
  describe('未知モデルの拒否（コスト不明のまま呼ばせない）', () => {
    it('価格表に無いモデルは UnknownModelPriceError を投げる', () => {
      expect(() =>
        estimateCostJpy(
          'gemini-99-ultra',
          { inputTokens: 1, outputTokens: 1 },
          CEIL
        )
      ).toThrow(UnknownModelPriceError);
    });

    it('isPricedModel が価格表の有無を返す', () => {
      expect(isPricedModel('gemini-3.1-flash-lite')).toBe(true);
      expect(isPricedModel('gemini-99-ultra')).toBe(false);
    });

    it('用途に割り当てる予定のモデルはすべて価格表にある', () => {
      for (const model of [
        'gemini-3.1-flash-lite',
        'gemini-3.5-flash-lite',
        'gemini-3.6-flash',
      ]) {
        expect(MODEL_PRICES_USD[model]).toBeDefined();
      }
    });
  });

  describe('為替の解決（不正値は安全側の既定へ）', () => {
    it('未設定なら既定値', () => {
      expect(resolveJpyPerUsd({})).toBe(DEFAULT_JPY_PER_USD);
      expect(resolveJpyPerUsd({ JPY_PER_USD: '' })).toBe(DEFAULT_JPY_PER_USD);
    });

    it('数値でない・0以下は既定値（計上を小さくさせない）', () => {
      expect(resolveJpyPerUsd({ JPY_PER_USD: 'abc' })).toBe(
        DEFAULT_JPY_PER_USD
      );
      expect(resolveJpyPerUsd({ JPY_PER_USD: '0' })).toBe(DEFAULT_JPY_PER_USD);
      expect(resolveJpyPerUsd({ JPY_PER_USD: '-100' })).toBe(
        DEFAULT_JPY_PER_USD
      );
    });

    it('非現実的に低い値（<50）は設定ミスとみなし既定値', () => {
      expect(resolveJpyPerUsd({ JPY_PER_USD: '1' })).toBe(DEFAULT_JPY_PER_USD);
    });

    it('妥当な値は採用される', () => {
      expect(resolveJpyPerUsd({ JPY_PER_USD: '160' })).toBe(160);
    });
  });

  describe('円換算', () => {
    it('実トークンから計算する（最安モデル）', () => {
      // 1,000,000 入力 / 1,000,000 出力 なら USD 単価そのまま
      const r = estimateCostJpy(
        'gemini-3.1-flash-lite',
        { inputTokens: 1_000_000, outputTokens: 1_000_000 },
        CEIL,
        { JPY_PER_USD: '100' }
      );
      // (0.25 + 1.50) USD * 100 = 175 円
      expect(r.costJpy).toBeCloseTo(175, 5);
      expect(r.estimated).toBe(false);
    });

    it('上位モデルは最安モデルより高くなる', () => {
      const usage = { inputTokens: 15_000, outputTokens: 800 };
      const cheap = estimateCostJpy('gemini-3.1-flash-lite', usage, CEIL);
      const mid = estimateCostJpy('gemini-3.5-flash-lite', usage, CEIL);
      const upper = estimateCostJpy('gemini-3.6-flash', usage, CEIL);
      expect(mid.costJpy).toBeGreaterThan(cheap.costJpy);
      expect(upper.costJpy).toBeGreaterThan(mid.costJpy);
    });

    it('円未満を切り捨てない（小口が積み上がるようにする）', () => {
      const r = estimateCostJpy(
        'gemini-3.1-flash-lite',
        { inputTokens: 100, outputTokens: 10 },
        CEIL
      );
      expect(r.costJpy).toBeGreaterThan(0);
      expect(r.costJpy).toBeLessThan(1);
    });
  });

  describe('usage が取れないときは多めに計上（過小計上で上限をすり抜けない）', () => {
    it('missing フラグで上限値を使う', () => {
      const r = estimateCostJpy(
        'gemini-3.5-flash-lite',
        { missing: true },
        CEIL
      );
      expect(r.estimated).toBe(true);
      expect(r.inputTokens).toBe(CEIL.maxInputTokens);
      expect(r.outputTokens).toBe(CEIL.maxOutputTokens);
    });

    it('トークン数が欠けていても上限値を使う', () => {
      const r = estimateCostJpy(
        'gemini-3.5-flash-lite',
        { inputTokens: 100 },
        CEIL
      );
      expect(r.estimated).toBe(true);
      expect(r.inputTokens).toBe(CEIL.maxInputTokens);
    });

    it('推定計上は実測より高くなる', () => {
      const actual = estimateCostJpy(
        'gemini-3.5-flash-lite',
        { inputTokens: 100, outputTokens: 10 },
        CEIL
      );
      const estimated = estimateCostJpy(
        'gemini-3.5-flash-lite',
        { missing: true },
        CEIL
      );
      expect(estimated.costJpy).toBeGreaterThan(actual.costJpy);
    });
  });

  describe('入力内訳（音声・キャッシュ）', () => {
    it('音声入力は音声単価で計上される（flash-lite は音声が高い）', () => {
      const plain = estimateCostJpy(
        'gemini-3.1-flash-lite',
        { inputTokens: 10_000, outputTokens: 0 },
        CEIL
      );
      const audio = estimateCostJpy(
        'gemini-3.1-flash-lite',
        { inputTokens: 10_000, outputTokens: 0, audioInputTokens: 10_000 },
        CEIL
      );
      expect(audio.costJpy).toBeGreaterThan(plain.costJpy);
    });

    it('キャッシュ単価が未定義のモデルは割引を見込まない（安全側）', () => {
      const noCache = estimateCostJpy(
        'gemini-3.5-flash-lite',
        { inputTokens: 10_000, outputTokens: 0 },
        CEIL
      );
      const withCache = estimateCostJpy(
        'gemini-3.5-flash-lite',
        { inputTokens: 10_000, outputTokens: 0, cachedInputTokens: 10_000 },
        CEIL
      );
      expect(withCache.costJpy).toBeCloseTo(noCache.costJpy, 10);
    });

    it('内訳が入力総数を超えても壊れない', () => {
      const r = estimateCostJpy(
        'gemini-3.1-flash-lite',
        { inputTokens: 100, outputTokens: 0, audioInputTokens: 99_999 },
        CEIL
      );
      expect(Number.isFinite(r.costJpy)).toBe(true);
      expect(r.costJpy).toBeGreaterThan(0);
    });

    it('内訳が負値でも壊れない', () => {
      const r = estimateCostJpy(
        'gemini-3.1-flash-lite',
        { inputTokens: 100, outputTokens: 10, cachedInputTokens: -50 },
        CEIL
      );
      expect(Number.isFinite(r.costJpy)).toBe(true);
    });
  });
});

import { describe, it, expect } from 'vitest';

import {
  resolveModel,
  resolveMaxOutputTokens,
  resolveHistoryTurns,
  parseModelSpec,
  CHEAPEST_MODEL,
  MID_MODEL,
  UPPER_MODEL,
  FREE_MAX_OUTPUT_TOKENS,
  FREE_CHAT_MAX_OUTPUT_TOKENS,
  FREE_COUNSEL_MODEL_ENV,
  FREE_HISTORY_TURNS,
  type LlmPurpose,
} from '../llmModelResolver';
import { UnknownModelPriceError } from '../llmPrices';

const ALL_PURPOSES: LlmPurpose[] = [
  'classify',
  'chat',
  'analysis',
  'plan',
  'counsel',
  'verify',
];

describe('llmModelResolver.parseModelSpec', () => {
  it('provider:model 形式をパースする', () => {
    expect(parseModelSpec('gemini:gemini-3.6-flash')).toEqual({
      provider: 'gemini',
      model: 'gemini-3.6-flash',
    });
    expect(parseModelSpec('openai:gpt-x')).toEqual({
      provider: 'openai',
      model: 'gpt-x',
    });
  });

  it('provider 省略時は gemini', () => {
    expect(parseModelSpec('gemini-3.6-flash')).toEqual({
      provider: 'gemini',
      model: 'gemini-3.6-flash',
    });
  });

  it('壊れた指定は null（呼び出し側が既定へ倒す）', () => {
    expect(parseModelSpec(undefined)).toBeNull();
    expect(parseModelSpec('')).toBeNull();
    expect(parseModelSpec('   ')).toBeNull();
    expect(parseModelSpec('gemini:')).toBeNull();
    expect(parseModelSpec('unknownprovider:model')).toBeNull();
  });
});

describe('llmModelResolver.resolveModel', () => {
  describe('free は絶対に上位モデルへ解決されない', () => {
    it('どの purpose でも最安', () => {
      for (const p of ALL_PURPOSES) {
        expect(resolveModel(p, 'free', 0).model).toBe(CHEAPEST_MODEL);
      }
    });

    it('env で上位モデルを指定されても無視する', () => {
      for (const p of ALL_PURPOSES) {
        const r = resolveModel(p, 'free', 0, {
          [`LLM_MODEL_${p.toUpperCase()}`]: `gemini:${UPPER_MODEL}`,
        });
        expect(r.model).toBe(CHEAPEST_MODEL);
      }
    });
  });

  describe('free の唯一の例外: 悩み相談だけ env オプトインで上げられる', () => {
    it('未設定なら counsel も最安のまま（既定で 3,000人が上位モデルに触れない）', () => {
      expect(resolveModel('counsel', 'free', 0, {}).model).toBe(CHEAPEST_MODEL);
    });

    it('LLM_MODEL_FREE_COUNSEL を設定したときだけ counsel が上がる', () => {
      // free は Gemini 前提なので、1段上も Gemini の中位モデルを想定する。
      const env = { [FREE_COUNSEL_MODEL_ENV]: 'gemini:gemini-3.5-flash-lite' };
      expect(resolveModel('counsel', 'free', 0, env).model).toBe(
        'gemini-3.5-flash-lite'
      );
    });

    it('counsel 以外には効かない', () => {
      const env = { [FREE_COUNSEL_MODEL_ENV]: `gemini:${UPPER_MODEL}` };
      for (const p of ALL_PURPOSES) {
        if (p === 'counsel') continue;
        expect(resolveModel(p, 'free', 0, env).model).toBe(CHEAPEST_MODEL);
      }
    });

    it('価格表に無いモデルを設定されたら最安へ倒す（会話を落とさない）', () => {
      const env = { [FREE_COUNSEL_MODEL_ENV]: 'gemini:gemini-9-imaginary' };
      expect(resolveModel('counsel', 'free', 0, env).model).toBe(
        CHEAPEST_MODEL
      );
    });
  });

  describe('paid の既定階層', () => {
    // 2026-07-26: つづもんのメイン頭脳を OpenAI へ切替。
    // paid の階層は luna（分類・会話）／terra（分析・プラン・相談）になり、
    // 予算超過時のデグレードで最終的に最安のGeminiへ落ちる。
    // 一問一答（free）は gemini-3.1-flash-lite のまま（別テストで固定）。
    it('classify / verify は OpenAI の最安帯（luna）', () => {
      expect(resolveModel('classify', 'paid', 0).model).toBe('gpt-5.6-luna');
      expect(resolveModel('verify', 'paid', 0).model).toBe('gpt-5.6-luna');
    });

    it('chat は luna・analysis は terra', () => {
      expect(resolveModel('chat', 'paid', 0).model).toBe('gpt-5.6-luna');
      expect(resolveModel('analysis', 'paid', 0).model).toBe('gpt-5.6-terra');
    });

    it('plan / counsel は上位', () => {
      expect(resolveModel('plan', 'paid', 0).model).toBe(UPPER_MODEL);
      expect(resolveModel('counsel', 'paid', 0).model).toBe(UPPER_MODEL);
    });
  });

  describe('env による上書き（degrade 0 のときだけ）', () => {
    it('指定を尊重する', () => {
      const r = resolveModel('chat', 'paid', 0, {
        LLM_MODEL_CHAT: `gemini:${UPPER_MODEL}`,
      });
      expect(r.model).toBe(UPPER_MODEL);
    });

    it('degrade 中は env を無視して既定階層＋降格を適用する（確実に安くする）', () => {
      const r = resolveModel('chat', 'paid', 1, {
        LLM_MODEL_CHAT: `gemini:${UPPER_MODEL}`,
      });
      expect(r.model).toBe(CHEAPEST_MODEL); // MID から1段下げ
    });

    it('価格表に無いモデルを指定されたら throw（コスト不明で呼ばせない）', () => {
      expect(() =>
        resolveModel('chat', 'paid', 0, {
          LLM_MODEL_CHAT: 'gemini:mystery-model',
        })
      ).toThrow(UnknownModelPriceError);
    });

    it('openai を指定しても価格表に無ければ throw', () => {
      expect(() =>
        resolveModel('counsel', 'paid', 0, {
          LLM_MODEL_COUNSEL: 'openai:gpt-unknown',
        })
      ).toThrow(UnknownModelPriceError);
    });
  });

  describe('デグレード', () => {
    it('degrade 1 で上位用途が1段下がる', () => {
      expect(resolveModel('plan', 'paid', 1).model).toBe(MID_MODEL);
      expect(resolveModel('counsel', 'paid', 1).model).toBe(MID_MODEL);
      expect(resolveModel('chat', 'paid', 1).model).toBe(CHEAPEST_MODEL);
    });

    it('degrade 2 で全用途が最安', () => {
      for (const p of ALL_PURPOSES) {
        expect(resolveModel(p, 'paid', 2).model).toBe(CHEAPEST_MODEL);
      }
    });

    it('degrade が上がるほど安いモデルになる（逆行しない）', () => {
      const rank = (m: string) =>
        m === UPPER_MODEL ? 2 : m === MID_MODEL ? 1 : 0;
      for (const p of ALL_PURPOSES) {
        const r0 = rank(resolveModel(p, 'paid', 0).model);
        const r1 = rank(resolveModel(p, 'paid', 1).model);
        const r2 = rank(resolveModel(p, 'paid', 2).model);
        expect(r1).toBeLessThanOrEqual(r0);
        expect(r2).toBeLessThanOrEqual(r1);
      }
    });
  });
});

describe('llmModelResolver.resolveMaxOutputTokens', () => {
  it('free の会話（chat/counsel）は 700・それ以外は 500', () => {
    for (const p of ALL_PURPOSES) {
      const expected =
        p === 'chat' || p === 'counsel'
          ? FREE_CHAT_MAX_OUTPUT_TOKENS
          : FREE_MAX_OUTPUT_TOKENS;
      expect(resolveMaxOutputTokens(p, 'free', 0)).toBe(expected);
    }
  });

  it('free の会話上限を上げても paid の degrade 2 の clamp は 500 のまま', () => {
    // FREE_MAX_OUTPUT_TOKENS を動かすと paid の最終防衛線が緩むので、
    // 会話用の上限（FREE_CHAT_MAX_OUTPUT_TOKENS）とは別定数にしてある。
    expect(FREE_MAX_OUTPUT_TOKENS).toBe(500);
    expect(FREE_CHAT_MAX_OUTPUT_TOKENS).toBe(700);
  });

  it('paid の相談・プランは長め', () => {
    expect(resolveMaxOutputTokens('counsel', 'paid', 0)).toBeGreaterThan(
      FREE_MAX_OUTPUT_TOKENS
    );
    expect(resolveMaxOutputTokens('plan', 'paid', 0)).toBeGreaterThan(
      FREE_MAX_OUTPUT_TOKENS
    );
  });

  it('classify はごく短い（コスト最小）', () => {
    expect(resolveMaxOutputTokens('classify', 'paid', 0)).toBeLessThan(100);
  });

  it('degrade 2 では free 相当まで絞る', () => {
    for (const p of ALL_PURPOSES) {
      expect(resolveMaxOutputTokens(p, 'paid', 2)).toBeLessThanOrEqual(
        FREE_MAX_OUTPUT_TOKENS
      );
    }
  });
});

describe('llmModelResolver.resolveHistoryTurns', () => {
  it('free は 10 ターン（2026-07-26 に 6 から拡大）', () => {
    expect(resolveHistoryTurns('free', 0)).toBe(FREE_HISTORY_TURNS);
    expect(FREE_HISTORY_TURNS).toBe(10);
  });

  it('paid は free より広い', () => {
    expect(resolveHistoryTurns('paid', 0)).toBeGreaterThan(FREE_HISTORY_TURNS);
  });

  it('degrade で単調に縮む', () => {
    const w0 = resolveHistoryTurns('paid', 0);
    const w1 = resolveHistoryTurns('paid', 1);
    const w2 = resolveHistoryTurns('paid', 2);
    expect(w1).toBeLessThan(w0);
    expect(w2).toBeLessThan(w1);
  });
});

describe('OpenAI切替（2026-07-26）', () => {
  it('free（一問一答3,000人）は影響を受けず最安のGeminiのまま', () => {
    for (const purpose of [
      'classify',
      'chat',
      'analysis',
      'plan',
      'counsel',
      'verify',
    ] as const) {
      const r = resolveModel(purpose, 'free', 0);
      expect(r.provider, purpose).toBe('gemini');
      expect(r.model, purpose).toBe(CHEAPEST_MODEL);
    }
  });

  it('paid は provider が openai になる（gemini へ誤送信しない）', () => {
    expect(resolveModel('chat', 'paid', 0).provider).toBe('openai');
    expect(resolveModel('counsel', 'paid', 0).provider).toBe('openai');
  });

  it('sol は使わない（高すぎるため既定階層に入れない）', () => {
    for (const purpose of [
      'classify',
      'chat',
      'analysis',
      'plan',
      'counsel',
      'verify',
    ] as const) {
      expect(resolveModel(purpose, 'paid', 0).model, purpose).not.toBe(
        'gpt-5.6-sol'
      );
    }
  });

  it('予算超過のデグレードで安くなり、最終的に最安のGeminiへ落ちる', () => {
    expect(resolveModel('counsel', 'paid', 1).model).toBe('gpt-5.6-luna');
    const worst = resolveModel('counsel', 'paid', 2);
    expect(worst.model).toBe(CHEAPEST_MODEL);
    expect(worst.provider).toBe('gemini');
  });
});

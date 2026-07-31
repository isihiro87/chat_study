import { describe, it, expect } from 'vitest';

import {
  createGrant,
  createOneShotGrant,
  fitHistoryToBudget,
  estimateTokens,
  generateText,
  LlmProviderNotConfiguredError,
  LlmTimeoutError,
  LlmHttpError,
  isBillableError,
  resolveRequestModel,
  DEFAULT_TIMEOUT_MS,
} from '../llmProvider';
import { MID_MODEL } from '../llmModelResolver';
import { parseGeminiResponse } from '../llmGemini';
import { callOpenaiAdapter } from '../llmOpenai';
import { evaluateGate, parseLimits } from '../aiCostCore';
import type { AiChatTurn } from '../userDocTypes';

const LIMITS = parseLimits({});

/** allow を取り出して grant に変換する（本番と同じ経路）。 */
function paidGrant(
  purpose: Parameters<typeof evaluateGate>[0]['purpose'] = 'chat'
) {
  const decision = evaluateGate({
    tier: { tier: 'paid', entitlement: 'license' },
    purpose,
    state: {
      globalMonthJpy: 0,
      globalDayJpy: 0,
      userMonthJpy: 0,
      userDayJpy: 0,
      userDayCount: 0,
    },
    limits: LIMITS,
    nowMs: 1_800_000_000_000,
    userText: 'テスト',
  });
  if (decision.kind !== 'allow') throw new Error('expected allow');
  return createGrant('paid', decision);
}

describe('llmProvider の通行証（BudgetGrant）', () => {
  it('evaluateGate の allow から発行できる', () => {
    const grant = paidGrant();
    expect(grant.tier).toBe('paid');
    expect(grant.maxInputTokens).toBe(LIMITS.maxInputTokens);
    expect(grant.maxOutputTokens).toBeGreaterThan(0);
  });

  it('単発用途の通行証は上限を明示して作る', () => {
    const grant = createOneShotGrant({
      maxInputTokens: 5_000,
      maxOutputTokens: 700,
    });
    expect(grant.maxInputTokens).toBe(5_000);
    expect(grant.maxOutputTokens).toBe(700);
  });

  it('既定タイムアウトは replyToken の有効期間内に収まる', () => {
    expect(DEFAULT_TIMEOUT_MS).toBeLessThan(60_000);
  });
});

describe('llmProvider.estimateTokens', () => {
  it('空文字は 0', () => {
    expect(estimateTokens('')).toBe(0);
  });

  it('長い文字列ほど多い（切り上げで多めに見る）', () => {
    const short = estimateTokens('あいう');
    const long = estimateTokens('あ'.repeat(1000));
    expect(short).toBeGreaterThan(0);
    expect(long).toBeGreaterThan(short);
  });
});

describe('llmProvider.fitHistoryToBudget（入力トークン上限＝⑤層）', () => {
  const turns = (n: number, len = 100): AiChatTurn[] =>
    Array.from({ length: n }, (_, i) => ({
      role: i % 2 === 0 ? ('user' as const) : ('model' as const),
      text: `${i}`.padEnd(len, 'あ'),
    }));

  it('上限に収まるなら履歴をそのまま残す', () => {
    const r = fitHistoryToBudget('sys', turns(4), 'question', 20_000);
    expect(r.history).toHaveLength(4);
    expect(r.overflow).toBe(false);
  });

  it('上限を超えたら古い方から削る（新しい発話を優先）', () => {
    const all = turns(60, 200);
    const r = fitHistoryToBudget('sys', all, 'question', 2_000);
    expect(r.history.length).toBeLessThan(all.length);
    // 残った最後の要素は元の最後の要素と同じ（新しい方を保持）
    expect(r.history[r.history.length - 1]).toEqual(all[all.length - 1]);
    expect(r.estimatedInputTokens).toBeLessThanOrEqual(2_000);
  });

  it('system と最新発話だけで上限を超える場合は overflow を立てて履歴を空にする', () => {
    const hugeSystem = 'あ'.repeat(100_000);
    const r = fitHistoryToBudget(hugeSystem, turns(10), 'q', 1_000);
    expect(r.overflow).toBe(true);
    expect(r.history).toHaveLength(0);
  });

  it('履歴が空でも壊れない', () => {
    const r = fitHistoryToBudget('sys', [], 'q', 20_000);
    expect(r.history).toHaveLength(0);
    expect(r.overflow).toBe(false);
  });
});

describe('音声つきの呼び出しは Gemini へ振り替える', () => {
  // つづもんのメイン頭脳（OpenAI）は音声入力を受け取れない。振り替えないと
  // ボイスメッセージを送った有料ユーザーに毎回フォールバック文が返る。
  // 「どちらのプロバイダへ行ったか」はキー未設定エラーの provider 名で判別する
  // （ネットワークに出ないので実 API を叩かない）。
  const base = {
    purpose: 'chat' as const,
    grant: paidGrant(),
    system: 's',
    history: [],
    userText: 'u',
    env: {},
  };

  it('音声が無ければ OpenAI へ行く', async () => {
    await expect(generateText(base)).rejects.toThrow(/"openai"/);
  });

  it('音声があれば Gemini へ行く', async () => {
    await expect(
      generateText({
        ...base,
        media: [{ mimeType: 'audio/mp4', data: 'AAAA' }],
      })
    ).rejects.toThrow(/"gemini"/);
  });

  it('画像は OpenAI のまま（画像は扱える）', async () => {
    await expect(
      generateText({
        ...base,
        media: [{ mimeType: 'image/jpeg', data: 'AAAA' }],
      })
    ).rejects.toThrow(/"openai"/);
  });
});

describe('llmOpenai のキー解決', () => {
  it('キーが無ければ fetch する前に LlmProviderNotConfiguredError', async () => {
    await expect(
      callOpenaiAdapter({
        model: 'gpt-5.6-luna',
        system: 's',
        history: [],
        userText: 'u',
        maxOutputTokens: 100,
        timeoutMs: 1000,
        env: {},
      })
    ).rejects.toBeInstanceOf(LlmProviderNotConfiguredError);
  });
});

describe('generateText: 未設定プロバイダはフォールバック可能な形で落ちる', () => {
  it('Gemini のキーが無ければ LlmProviderNotConfiguredError', async () => {
    await expect(
      generateText({
        purpose: 'chat',
        grant: paidGrant(),
        system: 'sys',
        history: [],
        userText: 'hello',
        env: {}, // キーなし
      })
    ).rejects.toBeInstanceOf(LlmProviderNotConfiguredError);
  });

  it('キー未設定の失敗にはコストを載せない（呼ぶ前に落ちている＝トークン未消費）', async () => {
    try {
      await generateText({
        purpose: 'chat',
        grant: paidGrant(),
        system: 'sys',
        history: [],
        userText: 'hello',
        env: {},
      });
      throw new Error('should have thrown');
    } catch (error) {
      expect((error as { llmCost?: unknown }).llmCost).toBeUndefined();
    }
  });
});

describe('コスト計上の対象判定（費用上限で停止したときに架空のコストを積まない）', () => {
  it('4xx で拒否されたリクエストは課金対象外（トークン未消費）', () => {
    for (const status of [400, 401, 402, 403, 429]) {
      expect(isBillableError(new LlmHttpError(status, 'nope'))).toBe(false);
    }
  });

  it('5xx も課金対象外（Google 側の障害）', () => {
    expect(isBillableError(new LlmHttpError(500, 'oops'))).toBe(false);
    expect(isBillableError(new LlmHttpError(503, 'oops'))).toBe(false);
  });

  it('タイムアウトは課金対象（モデルが生成していた可能性がある）', () => {
    expect(isBillableError(new LlmTimeoutError(12_000))).toBe(true);
  });

  it('プロバイダ未設定は課金対象外（呼び出す前に落ちている）', () => {
    expect(isBillableError(new LlmProviderNotConfiguredError('gemini'))).toBe(
      false
    );
  });

  it('判定できないエラーは安全側（計上する）', () => {
    expect(isBillableError(new Error('unknown'))).toBe(true);
    expect(isBillableError(null)).toBe(true);
  });

  it('費用上限・レート制限を判別できる（運営通知の条件）', () => {
    expect(new LlmHttpError(429, '').isQuotaOrBilling).toBe(true);
    expect(new LlmHttpError(403, '').isQuotaOrBilling).toBe(true);
    expect(new LlmHttpError(402, '').isQuotaOrBilling).toBe(true);
    expect(new LlmHttpError(400, '').isQuotaOrBilling).toBe(false);
    expect(new LlmHttpError(500, '').isQuotaOrBilling).toBe(false);
  });

  it('プロバイダ未設定のエラーには llmCost が載らない（架空計上しない）', async () => {
    try {
      await generateText({
        purpose: 'chat',
        grant: paidGrant(),
        system: 'sys',
        history: [],
        userText: 'hello',
        env: {}, // キー無し → LlmProviderNotConfiguredError
      });
      throw new Error('should have thrown');
    } catch (error) {
      expect((error as { llmCost?: unknown }).llmCost).toBeUndefined();
    }
  });
});

describe('resolveRequestModel の modelOverride（単発生成の互換シム用）', () => {
  const resolved = (modelOverride?: string) =>
    resolveRequestModel({ purpose: 'chat', grant: paidGrant(), modelOverride })
      .model;

  it('override が無ければ purpose の既定を使う', () => {
    expect(resolved()).toBe(MID_MODEL);
  });

  it('価格表にあるモデルはそのまま使う', () => {
    expect(resolved('gemini-2.5-flash-lite')).toBe('gemini-2.5-flash-lite');
  });

  it('価格表に無いモデルは既定へフォールバックする（本番機能を落とさない）', () => {
    // ここで throw すると、GEMINI_MODEL に未収録モデルが入っている本番で
    // 月末レポート・採点・参考書チャットが一斉に壊れる。
    expect(resolved('gemini-未知-model')).toBe(MID_MODEL);
  });
});

describe('llmGemini.parseGeminiResponse', () => {
  it('テキストと usage を取り出す', () => {
    const out = parseGeminiResponse({
      candidates: [{ content: { parts: [{ text: 'こんにちは' }] } }],
      usageMetadata: { promptTokenCount: 120, candidatesTokenCount: 30 },
    });
    expect(out.text).toBe('こんにちは');
    expect(out.usage.inputTokens).toBe(120);
    expect(out.usage.outputTokens).toBe(30);
    expect(out.usage.missing).toBeUndefined();
  });

  it('複数 parts のテキストを連結する', () => {
    const out = parseGeminiResponse({
      candidates: [{ content: { parts: [{ text: 'あ' }, { text: 'い' }] } }],
      usageMetadata: { promptTokenCount: 1, candidatesTokenCount: 1 },
    });
    expect(out.text).toBe('あい');
  });

  it('usageMetadata が無ければ missing を立てる（上限値で多めに計上させる）', () => {
    const out = parseGeminiResponse({
      candidates: [{ content: { parts: [{ text: 'ok' }] } }],
    });
    expect(out.usage.missing).toBe(true);
  });

  it('キャッシュ入力トークンを拾う', () => {
    const out = parseGeminiResponse({
      candidates: [{ content: { parts: [{ text: 'ok' }] } }],
      usageMetadata: {
        promptTokenCount: 500,
        candidatesTokenCount: 10,
        cachedContentTokenCount: 400,
      },
    });
    expect(out.usage.cachedInputTokens).toBe(400);
  });

  it('function call を取り出す', () => {
    const out = parseGeminiResponse({
      candidates: [
        {
          content: {
            parts: [
              { text: 'おぼえておくね' },
              { functionCall: { name: 'remember', args: { goal: '80点' } } },
            ],
          },
        },
      ],
      usageMetadata: { promptTokenCount: 10, candidatesTokenCount: 5 },
    });
    expect(out.toolCalls).toEqual([
      { name: 'remember', args: { goal: '80点' } },
    ]);
  });

  it('テキストもツール呼び出しも無ければ throw（空応答は失敗扱い）', () => {
    expect(() =>
      parseGeminiResponse({ candidates: [{ content: { parts: [] } }] })
    ).toThrow(/empty/i);
    expect(() => parseGeminiResponse({})).toThrow(/empty/i);
  });

  it('ツール呼び出しだけでテキストが無い場合は成功扱い', () => {
    const out = parseGeminiResponse({
      candidates: [
        { content: { parts: [{ functionCall: { name: 'getStats' } }] } },
      ],
      usageMetadata: { promptTokenCount: 10, candidatesTokenCount: 2 },
    });
    expect(out.text).toBe('');
    expect(out.toolCalls).toHaveLength(1);
  });

  // 出力上限で打ち切られた応答は「文の途中で切れている」ので、
  // 呼び出し側（aiChat）が末尾を整えられるよう合図を返す。
  it('finishReason が MAX_TOKENS なら truncated を立てる', () => {
    const out = parseGeminiResponse({
      candidates: [
        {
          content: {
            parts: [{ text: '江戸幕府は1603年に開かれたよ。次に参勤交代が' }],
          },
          finishReason: 'MAX_TOKENS',
        },
      ],
      usageMetadata: { promptTokenCount: 100, candidatesTokenCount: 700 },
    });
    expect(out.truncated).toBe(true);
  });

  it('正常終了なら truncated は立たない', () => {
    const out = parseGeminiResponse({
      candidates: [
        {
          content: { parts: [{ text: 'こたえだよ。' }] },
          finishReason: 'STOP',
        },
      ],
      usageMetadata: { promptTokenCount: 10, candidatesTokenCount: 5 },
    });
    expect(out.truncated).toBeUndefined();
  });
});

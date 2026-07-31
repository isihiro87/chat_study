/**
 * OpenAI（Responses API）アダプタの検査。
 *
 * ここで固定しているのは **本番キーで実機確認した仕様**（2026-07-26）:
 *   - `temperature` は送らない（gpt-5.6 系は 400 で拒否する）
 *   - `reasoning.effort` の既定は `none`（推論トークンが出力枠を食って
 *     `classify`（上限32トークン）が本文ゼロで落ちるのを防ぐ）
 *   - `store: false`（生徒の会話を OpenAI 側に残さない）
 *   - `tools[].strict` は明示的に false（未指定だと true になる）
 */

import { describe, it, expect } from 'vitest';

import { buildOpenaiRequestBody, parseOpenaiResponse } from '../llmOpenai';
import type { LlmAdapterInput } from '../llmProvider';

function input(over: Partial<LlmAdapterInput> = {}): LlmAdapterInput {
  return {
    model: 'gpt-5.6-luna',
    system: 'あなたはつづ先生',
    history: [],
    userText: '鎌倉幕府を開いたのは？',
    maxOutputTokens: 800,
    timeoutMs: 12_000,
    env: {},
    ...over,
  };
}

describe('buildOpenaiRequestBody', () => {
  it('temperature を送らない（gpt-5.6 系は拒否する）', () => {
    const body = buildOpenaiRequestBody(input(), 'none');
    expect(body).not.toHaveProperty('temperature');
  });

  it('system は instructions、本文は input の最後の user ターンに入る', () => {
    const body = buildOpenaiRequestBody(input(), 'none');
    expect(body.instructions).toBe('あなたはつづ先生');
    const items = body.input as Array<Record<string, unknown>>;
    expect(items).toHaveLength(1);
    expect(items[0].role).toBe('user');
    expect(items[0].content).toEqual([
      { type: 'input_text', text: '鎌倉幕府を開いたのは？' },
    ]);
  });

  it('履歴の role: model を assistant に読み替える', () => {
    const body = buildOpenaiRequestBody(
      input({
        history: [
          { role: 'user', text: 'いつ？' },
          { role: 'model', text: '1185年ごろだよ' },
        ],
      }),
      'none'
    );
    const items = body.input as Array<Record<string, unknown>>;
    expect(items.map((i) => i.role)).toEqual(['user', 'assistant', 'user']);
    expect(items[1].content).toEqual([
      { type: 'output_text', text: '1185年ごろだよ' },
    ]);
  });

  it('画像は data URI にして本文より前に置く', () => {
    const body = buildOpenaiRequestBody(
      input({ media: [{ mimeType: 'image/jpeg', data: 'AAAA' }] }),
      'none'
    );
    const items = body.input as Array<Record<string, unknown>>;
    const content = items[0].content as Array<Record<string, unknown>>;
    expect(content[0]).toEqual({
      type: 'input_image',
      image_url: 'data:image/jpeg;base64,AAAA',
    });
    expect(content[1]).toEqual({
      type: 'input_text',
      text: '鎌倉幕府を開いたのは？',
    });
  });

  it('会話を OpenAI 側に残さない（store: false）', () => {
    expect(buildOpenaiRequestBody(input(), 'none').store).toBe(false);
  });

  it('出力上限と推論設定を渡す', () => {
    const body = buildOpenaiRequestBody(input({ maxOutputTokens: 32 }), 'low');
    expect(body.max_output_tokens).toBe(32);
    expect(body.reasoning).toEqual({ effort: 'low' });
  });

  it('ツールは strict:false で渡す（未指定だと true にされる）', () => {
    const body = buildOpenaiRequestBody(
      input({
        tools: [
          {
            name: 'remember',
            description: '覚える',
            parameters: { type: 'object', properties: {} },
          },
        ],
      }),
      'none'
    );
    expect(body.tools).toEqual([
      {
        type: 'function',
        name: 'remember',
        description: '覚える',
        parameters: { type: 'object', properties: {} },
        strict: false,
      },
    ]);
  });

  it('ツールが無いときは tools を送らない', () => {
    expect(buildOpenaiRequestBody(input(), 'none')).not.toHaveProperty('tools');
  });
});

describe('parseOpenaiResponse', () => {
  it('message のテキストと usage を取り出す', () => {
    const out = parseOpenaiResponse({
      status: 'completed',
      output: [
        {
          type: 'message',
          content: [{ type: 'output_text', text: '源頼朝だよ。' }],
        },
      ],
      usage: {
        input_tokens: 43,
        output_tokens: 17,
        input_tokens_details: { cached_tokens: 20 },
      },
    });
    expect(out.text).toBe('源頼朝だよ。');
    expect(out.usage).toEqual({
      inputTokens: 43,
      outputTokens: 17,
      cachedInputTokens: 20,
    });
    expect(out.truncated).toBeUndefined();
  });

  it('reasoning アイテムが混ざっていても無視する', () => {
    const out = parseOpenaiResponse({
      status: 'completed',
      output: [
        { type: 'reasoning', content: [] },
        { type: 'message', content: [{ type: 'output_text', text: 'はい' }] },
      ],
      usage: { input_tokens: 1, output_tokens: 1 },
    });
    expect(out.text).toBe('はい');
  });

  it('function_call の arguments（JSON文字列）をオブジェクトに直す', () => {
    const out = parseOpenaiResponse({
      status: 'completed',
      output: [
        {
          type: 'function_call',
          name: 'remember',
          arguments: '{"goal":"次は80点"}',
        },
      ],
      usage: { input_tokens: 93, output_tokens: 27 },
    });
    expect(out.toolCalls).toEqual([
      { name: 'remember', args: { goal: '次は80点' } },
    ]);
  });

  it('壊れた arguments のツール呼び出しは捨てる', () => {
    const out = parseOpenaiResponse({
      status: 'completed',
      output: [
        { type: 'function_call', name: 'remember', arguments: '{壊れ' },
        { type: 'message', content: [{ type: 'output_text', text: 'うん' }] },
      ],
      usage: { input_tokens: 1, output_tokens: 1 },
    });
    expect(out.toolCalls).toBeUndefined();
    expect(out.text).toBe('うん');
  });

  it('出力上限で切れたら truncated', () => {
    const out = parseOpenaiResponse({
      status: 'incomplete',
      incomplete_details: { reason: 'max_output_tokens' },
      output: [
        {
          type: 'message',
          content: [{ type: 'output_text', text: '江戸時代は' }],
        },
      ],
      usage: { input_tokens: 28, output_tokens: 800 },
    });
    expect(out.truncated).toBe(true);
  });

  it('usage が取れなければ missing（上限値で多めに計上させる）', () => {
    const out = parseOpenaiResponse({
      status: 'completed',
      output: [
        { type: 'message', content: [{ type: 'output_text', text: 'a' }] },
      ],
    });
    expect(out.usage).toEqual({ missing: true });
  });

  it('テキストもツール呼び出しも無ければ失敗させる', () => {
    expect(() =>
      parseOpenaiResponse({
        status: 'incomplete',
        incomplete_details: { reason: 'max_output_tokens' },
        output: [{ type: 'reasoning', content: [] }],
        usage: { input_tokens: 28, output_tokens: 16 },
      })
    ).toThrow(/empty text/);
  });
});

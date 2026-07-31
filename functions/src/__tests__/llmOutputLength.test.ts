/**
 * 出力トークン上限の検査（コストの主因）。
 *
 * gpt-5.6-luna は 入力$1 / **出力$6**（キャッシュ入力$0.1）で、出力は入力の60倍高い。
 * 2026-07-27 の実測で1メッセージ約1円、その大半が出力ぶんだった。
 * そこで chat を 800 → 600 に下げ、**本人が「くわしく」と頼んだときだけ**伸ばす。
 */

import { describe, it, expect } from 'vitest';

import {
  FREE_CHAT_MAX_OUTPUT_TOKENS,
  FREE_MAX_OUTPUT_TOKENS,
  PAID_CHAT_DETAILED_MAX_OUTPUT,
  resolveMaxOutputTokens,
  wantsDetailedAnswer,
} from '../llmModelResolver';

describe('wantsDetailedAnswer', () => {
  it('長い説明を求める言い方を拾う', () => {
    [
      'もっとくわしく教えて',
      '詳しく知りたい',
      'ちゃんと説明して',
      '順を追って教えて',
    ].forEach((t) => expect(wantsDetailedAnswer(t)).toBe(true));
  });

  it('ふつうの質問は拾わない（拾いすぎると節約にならない）', () => {
    [
      'なんで？',
      '鎌倉幕府はいつ？',
      'これどういう意味',
      'ありがとう',
      '',
    ].forEach((t) => expect(wantsDetailedAnswer(t)).toBe(false));
  });

  it('未定義でも落ちない', () => {
    expect(wantsDetailedAnswer(undefined)).toBe(false);
  });
});

describe('resolveMaxOutputTokens', () => {
  it('paid の通常チャットは 600', () => {
    expect(resolveMaxOutputTokens('chat', 'paid', 0)).toBe(600);
  });

  it('「くわしく」と頼まれたら伸ばす', () => {
    expect(resolveMaxOutputTokens('chat', 'paid', 0, true)).toBe(
      PAID_CHAT_DETAILED_MAX_OUTPUT
    );
  });

  it('予算がひっ迫していたら（degrade）伸ばさない', () => {
    // 節約が目的の状態で例外を作ると、上限の意味がなくなる
    expect(resolveMaxOutputTokens('chat', 'paid', 1, true)).toBe(600);
    expect(resolveMaxOutputTokens('chat', 'paid', 2, true)).toBe(
      FREE_MAX_OUTPUT_TOKENS
    );
  });

  it('相談・プランは短くしない（長さが要る用途）', () => {
    expect(resolveMaxOutputTokens('counsel', 'paid', 0)).toBe(1200);
    expect(resolveMaxOutputTokens('plan', 'paid', 0)).toBe(1200);
  });

  it('無料Bot（3,000人）の挙動は変えない', () => {
    expect(resolveMaxOutputTokens('chat', 'free', 0)).toBe(
      FREE_CHAT_MAX_OUTPUT_TOKENS
    );
    expect(resolveMaxOutputTokens('chat', 'free', 0, true)).toBe(
      FREE_CHAT_MAX_OUTPUT_TOKENS
    );
    expect(resolveMaxOutputTokens('classify', 'free', 0)).toBe(
      FREE_MAX_OUTPUT_TOKENS
    );
  });
});

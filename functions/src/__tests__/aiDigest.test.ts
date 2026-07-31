import { describe, it, expect } from 'vitest';

import {
  parseDigestJson,
  buildFallbackDigest,
  buildDigestSource,
  approxTokensOf,
} from '../aiDigest';
import type { ThreadMessage } from '../aiThreadStore';

const msg = (role: 'user' | 'model', text: string): ThreadMessage => ({
  role,
  text,
  atMs: 1_000,
});

describe('aiDigest.parseDigestJson', () => {
  it('素の JSON をパースする', () => {
    const r = parseDigestJson(
      '{"summary":"部活が忙しい相談","keywords":["部活","時間"]}'
    );
    expect(r).toEqual({
      summary: '部活が忙しい相談',
      keywords: ['部活', '時間'],
    });
  });

  it('コードフェンスや前後の文章があっても拾う', () => {
    const r = parseDigestJson(
      'はい、まとめました。\n```json\n{"summary":"テストの相談","keywords":["テスト"]}\n```\n以上です。'
    );
    expect(r?.summary).toBe('テストの相談');
  });

  it('keywords は最大12個に切る', () => {
    const many = Array.from({ length: 30 }, (_, i) => `k${i}`);
    const r = parseDigestJson(
      JSON.stringify({ summary: 'あ', keywords: many })
    );
    expect(r?.keywords).toHaveLength(12);
  });

  it('keywords から非文字列・空文字を除く', () => {
    const r = parseDigestJson(
      '{"summary":"あ","keywords":["部活",null,123,"  ","テスト"]}'
    );
    expect(r?.keywords).toEqual(['部活', 'テスト']);
  });

  it('JSON でなければ null', () => {
    expect(parseDigestJson('要約できませんでした')).toBeNull();
    expect(parseDigestJson('')).toBeNull();
    expect(parseDigestJson('{壊れた')).toBeNull();
  });

  it('summary も keywords も無ければ null', () => {
    expect(parseDigestJson('{"other":1}')).toBeNull();
  });

  it('summary だけでも有効', () => {
    const r = parseDigestJson('{"summary":"テストの話"}');
    expect(r).toEqual({ summary: 'テストの話', keywords: [] });
  });
});

describe('aiDigest.buildFallbackDigest（LLM 失敗時も索引を作る）', () => {
  it('生徒の発話から要約と手がかり語を作る', () => {
    const r = buildFallbackDigest([
      msg('user', '部活が忙しくて勉強時間がとれない'),
      msg('model', 'たいへんだね、いっしょに考えよう'),
      msg('user', 'テストは来週なんだ'),
    ]);
    expect(r.summary).toContain('部活');
    expect(r.summary).toContain('テスト');
    // AI の発話は要約に含めない（生徒の関心が索引の主役）
    expect(r.summary).not.toContain('いっしょに考えよう');
    expect(r.keywords.length).toBeGreaterThan(0);
  });

  it('summary は250字以内', () => {
    const long = 'あ'.repeat(500);
    const r = buildFallbackDigest([msg('user', long)]);
    expect(r.summary.length).toBeLessThanOrEqual(250);
  });

  it('生徒の発話が無くても壊れない', () => {
    const r = buildFallbackDigest([msg('model', 'こんにちは')]);
    expect(r.summary).toBe('（内容なし）');
    expect(r.keywords).toEqual([]);
  });

  it('手がかり語は重複せず12個以内', () => {
    const r = buildFallbackDigest([
      msg('user', '部活 部活 部活 テスト テスト 勉強 時間 friends'),
    ]);
    expect(new Set(r.keywords).size).toBe(r.keywords.length);
    expect(r.keywords.length).toBeLessThanOrEqual(12);
  });
});

describe('aiDigest.buildDigestSource', () => {
  it('話者ラベルを付けて並べる', () => {
    const src = buildDigestSource([
      msg('user', 'しつもん'),
      msg('model', 'こたえ'),
    ]);
    expect(src).toContain('生徒: しつもん');
    expect(src).toContain('AI先生: こたえ');
  });

  it('長すぎる原文は切り詰める（コストの頭を押さえる）', () => {
    const messages = Array.from({ length: 100 }, () =>
      msg('user', 'あ'.repeat(200))
    );
    const src = buildDigestSource(messages);
    expect(src.length).toBeLessThanOrEqual(6_000);
  });

  it('改行や連続空白を潰す', () => {
    const src = buildDigestSource([msg('user', 'あ\n\nい   う')]);
    expect(src).toBe('生徒: あ い う');
  });
});

describe('aiDigest.approxTokensOf', () => {
  it('文字数から概算する（多めに見る）', () => {
    const t = approxTokensOf([msg('user', 'あ'.repeat(180))]);
    expect(t).toBeGreaterThan(0);
    expect(t).toBe(Math.ceil(180 / 1.8));
  });

  it('空なら 0', () => {
    expect(approxTokensOf([])).toBe(0);
  });
});

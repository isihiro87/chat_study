// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  detectRestartIntent,
  detectQuestionRequest,
  RESTART_KEYWORDS_INTERNAL,
} from '../keywordMatcher';

describe('detectRestartIntent - 基本', () => {
  it('空文字 / undefined / null は false', () => {
    expect(detectRestartIntent('')).toBe(false);
    expect(detectRestartIntent(undefined)).toBe(false);
    expect(detectRestartIntent(null)).toBe(false);
    expect(detectRestartIntent('   ')).toBe(false);
  });

  it('全キーワード単体がマッチする', () => {
    for (const kw of RESTART_KEYWORDS_INTERNAL) {
      expect(detectRestartIntent(kw)).toBe(true);
    }
  });

  it('キーワードを含む文章もマッチ', () => {
    expect(detectRestartIntent('また始めたい')).toBe(true);
    expect(detectRestartIntent('もう一度やります')).toBe(true);
    expect(detectRestartIntent('久しぶりに戻ってきました')).toBe(true);
    expect(detectRestartIntent('再開したい')).toBe(true);
    expect(detectRestartIntent('ちょっとサボってたごめん')).toBe(true);
  });
});

describe('detectRestartIntent - 誤検知の許容範囲（仕様文書化）', () => {
  it('否定文「再開せずに」もマッチする（誤検知より復帰機会優先の仕様）', () => {
    // 害は「おかえり flex + 1問」が届くだけなので許容。
    expect(detectRestartIntent('再開せずにダラダラ過ごす')).toBe(true);
  });

  it('無関係な文章はマッチしない', () => {
    expect(detectRestartIntent('こんにちは')).toBe(false);
    expect(detectRestartIntent('質問があります')).toBe(false);
    expect(detectRestartIntent('ありがとう')).toBe(false);
    expect(detectRestartIntent('1')).toBe(false);
  });
});

describe('detectQuestionRequest - 「問題出して」意図検出', () => {
  it('実会話で観測された言い回しにマッチする', () => {
    // 2026-07 実会話スナップショットの実例
    expect(detectQuestionRequest('問題出して！', '歴史')).toBe(true);
    expect(detectQuestionRequest('問題だして', '歴史')).toBe(true);
    expect(detectQuestionRequest('問題ちょーだい！', '理科')).toBe(true);
    expect(detectQuestionRequest('なんか問題ちょうだい', '理科')).toBe(true);
    expect(detectQuestionRequest('一門出して', '英語')).toBe(true);
    expect(detectQuestionRequest('今から問題一つ出して', '英語')).toBe(true);
    expect(detectQuestionRequest('もう1問！', '英語')).toBe(true);
    expect(detectQuestionRequest('もう1問解く', '英語')).toBe(true);
    expect(detectQuestionRequest('クイズ出して', '地理')).toBe(true);
    expect(detectQuestionRequest('問題', '歴史')).toBe(true);
  });

  it('登録教科と同じ教科の名指しはマッチする', () => {
    expect(detectQuestionRequest('理科の問題出して', '理科')).toBe(true);
    expect(detectQuestionRequest('歴史の問題ちょうだい', '歴史')).toBe(true);
  });

  it('別教科・未提供教科の名指しはマッチしない（AIが教科変更を案内）', () => {
    expect(detectQuestionRequest('理科の問題出して', '歴史')).toBe(false);
    expect(detectQuestionRequest('数学の問題出して', '英語')).toBe(false);
    expect(detectQuestionRequest('国語の問題ちょうだい', '歴史')).toBe(false);
    expect(detectQuestionRequest('英語の問題出して', null)).toBe(false);
  });

  it('解答・質問・雑談にはマッチしない', () => {
    expect(detectQuestionRequest('この問題教えて', '歴史')).toBe(false);
    expect(detectQuestionRequest('さっきの問題の答えは？', '歴史')).toBe(false);
    expect(detectQuestionRequest('問題ないよ', '歴史')).toBe(false);
    expect(detectQuestionRequest('問題が難しい', '歴史')).toBe(false);
    expect(detectQuestionRequest('こんにちは', '歴史')).toBe(false);
    expect(detectQuestionRequest('', '歴史')).toBe(false);
  });
});

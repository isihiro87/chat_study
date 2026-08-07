// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  detectRestartIntent,
  detectQuestionRequest,
  detectDeliveryMissingIntent,
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

describe('detectDeliveryMissingIntent - 「問題が届かない」検出', () => {
  it('不達の訴えを拾う', () => {
    expect(detectDeliveryMissingIntent('問題が届かないんだけど')).toBe(true);
    expect(detectDeliveryMissingIntent('問題こない')).toBe(true);
    expect(detectDeliveryMissingIntent('もんだいが来ません')).toBe(true);
    expect(detectDeliveryMissingIntent('配信が止まっちゃった')).toBe(true);
    expect(detectDeliveryMissingIntent('最近１問も届いてない')).toBe(true);
    expect(detectDeliveryMissingIntent('なんで問題が来ないの？')).toBe(true);
    expect(detectDeliveryMissingIntent('通知が来なくなった')).toBe(true);
    expect(detectDeliveryMissingIntent('届かないよ問題')).toBe(true);
  });

  it('今日の1問の催促も同じ案内でよいので拾う', () => {
    expect(detectDeliveryMissingIntent('今日の問題まだ？')).toBe(true);
    expect(detectDeliveryMissingIntent('今日の1問は？')).toBe(true);
  });

  it('無関係な発話は拾わない', () => {
    expect(detectDeliveryMissingIntent('問題出して')).toBe(false);
    expect(detectDeliveryMissingIntent('この問題むずかしい')).toBe(false);
    expect(detectDeliveryMissingIntent('問題ないよ')).toBe(false);
    expect(detectDeliveryMissingIntent('こんにちは')).toBe(false);
    expect(detectDeliveryMissingIntent('')).toBe(false);
    expect(detectDeliveryMissingIntent(undefined)).toBe(false);
  });
});

/**
 * 復帰キーワードの誤検知（2026-08-08 の実会話で実害を確認）。
 *
 * 生徒:「夜今度友達と 家には入らないけど また見に行くんだけどだめかな？」
 * AI  :「おかえり！戻ってきてくれてうれしい。早速だけど今日の1問…」
 *
 * 'また' が部分一致で拾われ、生徒の本文が AI に届かなかった。同じ質問を4回送られ
 * 「話聞いてよ」と訴えられている。**相談ごとが握りつぶされる**ので実害は大きい。
 */
describe('detectRestartIntent（誤検知の防止）', () => {
  it('文章の一部の「また」は復帰とみなさない（実会話の再現）', () => {
    expect(
      detectRestartIntent(
        '夜今度友達と家には入らないけどまた見に行くんだけどだめかな？'
      )
    ).toBe(false);
  });

  it('日常会話に出る語で誤検知しない', () => {
    const everyday = [
      'また明日学校で友だちに聞いてみる',
      'ごめん、その問題まだ解けてないんだ',
      'この前の続きから戻るにはどうすればいい？',
      '部活を休んでいたから勉強が遅れちゃった',
      'また今度やってみるね、ありがとう',
    ];
    for (const text of everyday) {
      expect(detectRestartIntent(text), text).toBe(false);
    }
  });

  it('短い一言なら復帰とみなす（本来の用途）', () => {
    expect(detectRestartIntent('また')).toBe(true);
    expect(detectRestartIntent('ごめん')).toBe(true);
    expect(detectRestartIntent('また！')).toBe(true);
  });

  it('明確な復帰表現は文章中でも拾う', () => {
    expect(detectRestartIntent('しばらく休んでたけど再開したいです')).toBe(
      true
    );
    expect(detectRestartIntent('久しぶりに勉強がんばろうと思って')).toBe(true);
    expect(detectRestartIntent('またやりたいんだけどいいかな')).toBe(true);
    expect(detectRestartIntent('もう一度やってみます')).toBe(true);
    expect(detectRestartIntent('さいかい')).toBe(true);
    expect(detectRestartIntent('再会')).toBe(true);
  });

  it('空・空白は false', () => {
    expect(detectRestartIntent('')).toBe(false);
    expect(detectRestartIntent('   ')).toBe(false);
    expect(detectRestartIntent(undefined)).toBe(false);
  });
});

// @vitest-environment node
/**
 * 「おうちの人にわたすカード」の文面と判定。
 *
 * ここが誤爆すると、勉強の質問をしただけの生徒に課金の話を出すことになる。
 * 誤検知しないことを、正検知と同じ重さで固定する。
 */
import { describe, it, expect } from 'vitest';
import {
  PARENT_NAME_MAX,
  buildParentCardFlex,
  buildParentNameAskMessage,
  defaultParentNameChoice,
  detectParentAskIntent,
  parentCardQuickReply,
  sanitizeParentName,
} from '../tsudumonParentCard';
import { fallbackChildName } from '../tsudumonParentCore';

describe('detectParentAskIntent — 拾うべきもの', () => {
  it.each([
    '親に聞かないとわからない',
    'お母さんに相談してみる',
    'お父さんにお願いしてみようかな',
    'ママに言いにくいなあ',
    '保護者の許可がいるよね',
    'おうちの人に聞いてみます',
    '親に高いって言われそう',
    'お金がない',
    '自分では払えない',
    '課金できない',
  ])('%s', (text) => {
    expect(detectParentAskIntent(text)).toBe(true);
  });
});

describe('detectParentAskIntent — 拾ってはいけないもの', () => {
  it.each([
    // 学習の質問に保護者語が出てくるだけのケース
    'お母さんが好きな歴史上の人物って誰ですか',
    '親魏倭王ってなんですか',
    '母親のことを昔は何と呼んでいたの',
    '藤原氏はどうやって力を持ったの',
    // お金の語だけ（歴史の内容）
    '江戸時代のお金の仕組みを教えて',
    '年貢って高いんですか',
    '税を払うのは誰',
    '',
  ])('%s', (text) => {
    expect(detectParentAskIntent(text)).toBe(false);
  });
});

describe('sanitizeParentName', () => {
  it('ふつうの呼び名は通る', () => {
    expect(sanitizeParentName('けんた')).toBe('けんた');
    expect(sanitizeParentName('  ゆい  ')).toBe('ゆい');
    expect(sanitizeParentName('中2のこども')).toBe('中2のこども');
  });

  it.each([
    ['空文字', ''],
    ['空白だけ', '   '],
    ['記号だけ', '!!!???'],
    ['URL', 'https://example.com'],
    ['URLを含む文', 'ぼく https://example.com'],
  ])('%s は弾く', (_label, raw) => {
    expect(sanitizeParentName(raw)).toBeNull();
  });

  it('長すぎる文章は弾く（保護者画面に文章を出させない）', () => {
    expect(sanitizeParentName('あ'.repeat(PARENT_NAME_MAX))).not.toBeNull();
    expect(sanitizeParentName('あ'.repeat(PARENT_NAME_MAX + 1))).toBeNull();
  });

  it('改行は空白に潰す', () => {
    expect(sanitizeParentName('けん\nた')).toBe('けん た');
  });
});

describe('defaultParentNameChoice', () => {
  it('学年を付けない（保護者は自分の子の学年を知っている）', () => {
    expect(defaultParentNameChoice('中2')).toBe('お子さん');
    expect(defaultParentNameChoice(null)).toBe('お子さん');
    expect(defaultParentNameChoice(123)).toBe('お子さん');
  });

  it('保護者画面の既定表示と一致する（ずれると子に嘘を伝えることになる）', () => {
    expect(defaultParentNameChoice('中2')).toBe(fallbackChildName('中2'));
    expect(defaultParentNameChoice(null)).toBe(fallbackChildName(null));
  });
});

describe('buildParentNameAskMessage', () => {
  it('本名を求めないことを明示する', () => {
    const msg = buildParentNameAskMessage('中1');
    expect(msg.text).toContain('お子さん');
    expect(msg.text).toContain('本名は保存しない');
  });

  it('答えなくても進めることを伝える（カードはもう出ている）', () => {
    const msg = buildParentNameAskMessage('中1');
    expect(msg.text).toContain('何もしなくて大丈夫');
  });

  it('既定候補をワンタップで選べる', () => {
    const msg = buildParentNameAskMessage('中3');
    const action = msg.quickReply?.items[0].action as { data?: string };
    expect(action.data).toContain('type=tzm_pname');
    expect(decodeURIComponent(action.data ?? '')).toContain('お子さん');
  });
});

describe('buildParentCardFlex', () => {
  const card = buildParentCardFlex({
    childName: 'けんた',
    handoffUrl: 'https://tsudumon.jp/handoff/?t=abc',
    parentUrl: 'https://tsudumon.jp/parents/?t=abc',
    expiresLabel: '8月10日',
  });
  const json = JSON.stringify(card);

  it('「見えない」を先に、CTAより前に置く', () => {
    // 中学生がカードを出すかどうかは、監視される不安が消えるかで決まる。
    const privacyAt = json.indexOf('見えないよ');
    const ctaAt = json.indexOf('見せる画面をひらく');
    expect(privacyAt).toBeGreaterThan(-1);
    expect(ctaAt).toBeGreaterThan(-1);
    expect(privacyAt).toBeLessThan(ctaAt);
  });

  it('トーク内容が見えないことを明記する', () => {
    expect(json).toContain('トーク');
    expect(json).toContain('まちがえた問題');
    expect(json).toContain('見えないよ');
  });

  it('QRで渡せることに触れる（言葉が出ない子の逃げ道）', () => {
    expect(json).toContain('QR');
  });

  it('送り先ピッカーがあってもQRの逃げ道は消さない', () => {
    const withShare = JSON.stringify(
      buildParentCardFlex({
        childName: 'けんた',
        handoffUrl: 'https://tsudumon.jp/handoff/?t=abc',
        shareUrl: 'https://liff.line.me/1234-abcd?t=abc',
        parentUrl: 'https://tsudumon.jp/parents/?t=abc',
        expiresLabel: '8月10日',
      })
    );
    expect(withShare).toContain('QR');
    expect(withShare).toContain('おうちの人に送る');
    expect(withShare).toContain('https://liff.line.me/1234-abcd?t=abc');
  });

  it('送り先ピッカーが無いときは転送用に保護者ページのURLを載せる', () => {
    // ピッカーが使えないなら、渡す手段は「転送」しか残らない。
    expect(json).toContain('https://tsudumon.jp/parents/?t=abc');
  });

  it('有効期限を出す', () => {
    expect(json).toContain('8月10日');
  });

  it('金額を子向けカードに書かない（お金の話は保護者ページで）', () => {
    expect(json).not.toContain('1,280');
    expect(json).not.toContain('980');
  });

  it('カードに余計な選択肢を出さない（渡すことだけに集中させる）', () => {
    // 呼び名を子に決めさせない。見分けたいのは保護者なので、
    // 保護者ダッシュボードの「表示名を変える」に一本化してある。
    expect(card.quickReply).toBeUndefined();
  });
});

describe('parentCardQuickReply', () => {
  it('カードを出す postback を持つ', () => {
    const action = parentCardQuickReply().items[0].action as { data?: string };
    expect(action.data).toBe('type=tzm_parent_card');
  });
});

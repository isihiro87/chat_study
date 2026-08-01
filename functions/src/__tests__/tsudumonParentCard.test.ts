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
  buildParentCardGuide,
  buildParentForwardMessage,
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

describe('buildParentCardGuide（1通目・子への指示）', () => {
  const msg = buildParentCardGuide('8月10日');

  it('やることを最初に書く（長おし→転送）', () => {
    expect(msg.text).toContain('長おし');
    expect(msg.text).toContain('転送');
  });

  it('「見えない」を伝える（渡す気になるための条件）', () => {
    // 中学生が渡すかどうかは、監視される不安が消えるかで決まる。
    expect(msg.text).toContain('見えないよ');
    expect(msg.text).toContain('トーク');
    expect(msg.text).toContain('まちがえた問題');
  });

  it('有効期限を出す', () => {
    expect(msg.text).toContain('8月10日');
  });

  it('金額を子側に書かない（お金の話は保護者ページで）', () => {
    expect(msg.text).not.toContain('1,280');
    expect(msg.text).not.toContain('980');
  });
});

describe('buildParentForwardMessage（2通目・そのまま転送される）', () => {
  const url = 'https://tsudumon.jp/parents/?t=abc';
  const msg = buildParentForwardMessage(url);

  it('保護者ページのURLを載せる', () => {
    expect(msg.text).toContain(url);
  });

  it('子への指示を混ぜない（転送されると保護者に意味不明な文が届く）', () => {
    expect(msg.text).not.toContain('長おし');
    expect(msg.text).not.toContain('転送');
    expect(msg.text).not.toContain('おうちの人');
  });

  it('この1通だけで何のリンクか分かる', () => {
    expect(msg.text).toContain('つづもん');
    expect(msg.text).toContain('中学歴史');
  });

  it('金額を書かない（保護者ページに正本がある。二重管理にしない）', () => {
    expect(msg.text).not.toContain('1,280');
    expect(msg.text).not.toContain('980');
  });
});

describe('parentCardQuickReply', () => {
  it('カードを出す postback を持つ', () => {
    const action = parentCardQuickReply().items[0].action as { data?: string };
    expect(action.data).toBe('type=tzm_parent_card');
  });
});

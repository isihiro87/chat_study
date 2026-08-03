import { describe, expect, it } from 'vitest';

import {
  AUG_NOTICE_END,
  AUG_NOTICE_START,
  AUG_NOTICE_TEXT,
  isAugNoticeWindow,
  shouldSendAugNotice,
  type AugNoticeContext,
} from '../augNotice';

const jst = (iso: string) => new Date(`${iso}+09:00`);

/** 何も除外条件に当たらない状態（＝出す）。個別テストで1つずつ潰す。 */
function baseCtx(overrides: Partial<AugNoticeContext> = {}): AugNoticeContext {
  return {
    now: jst('2026-08-03T12:00:00'),
    alreadySent: false,
    hasTsudumonAccess: false,
    isWorkbookAnswer: false,
    ...overrides,
  };
}

describe('isAugNoticeWindow', () => {
  it('8/3 の前日は掲出しない', () => {
    expect(isAugNoticeWindow(jst('2026-08-02T23:59:59'))).toBe(false);
  });

  it('8/3 JST の一日を通して掲出する', () => {
    expect(isAugNoticeWindow(AUG_NOTICE_START)).toBe(true);
    expect(isAugNoticeWindow(jst('2026-08-03T12:00:00'))).toBe(true);
    expect(isAugNoticeWindow(new Date(AUG_NOTICE_END.getTime() - 1))).toBe(
      true
    );
  });

  it('8/4 JST 00:00 ちょうどで掲出を終える（本文の「明日」とズレさせない）', () => {
    expect(isAugNoticeWindow(AUG_NOTICE_END)).toBe(false);
    expect(isAugNoticeWindow(jst('2026-08-04T00:00:01'))).toBe(false);
    expect(isAugNoticeWindow(jst('2026-08-05T10:00:00'))).toBe(false);
  });
});

describe('shouldSendAugNotice', () => {
  it('掲出期間内で除外条件がなければ出す', () => {
    expect(shouldSendAugNotice(baseCtx())).toBe(true);
  });

  it('掲出期間外は出さない', () => {
    expect(
      shouldSendAugNotice(baseCtx({ now: jst('2026-08-04T09:00:00') }))
    ).toBe(false);
  });

  it('すでに届いている人には出さない（1人1回・経路をまたいだ重複防止）', () => {
    expect(shouldSendAugNotice(baseCtx({ alreadySent: true }))).toBe(false);
  });

  it('つづもんの利用権を持つ人には出さない', () => {
    expect(shouldSendAugNotice(baseCtx({ hasTsudumonAccess: true }))).toBe(
      false
    );
  });

  it('つづもん経由（ワーク演習）の回答には出さない', () => {
    expect(shouldSendAugNotice(baseCtx({ isWorkbookAnswer: true }))).toBe(
      false
    );
  });
});

describe('AUG_NOTICE_TEXT', () => {
  it('おわびと、8/4 の先行公開予告の両方を含む', () => {
    expect(AUG_NOTICE_TEXT).toContain('ごめんね');
    expect(AUG_NOTICE_TEXT).toContain('配信ワク');
    expect(AUG_NOTICE_TEXT).toContain('つづもん');
    expect(AUG_NOTICE_TEXT).toContain('明日8月4日');
  });

  it('つづもんが何なのかの説明を含む', () => {
    expect(AUG_NOTICE_TEXT).toContain('参考書と問題集');
  });

  it('リンクは載せない（8/4 の先行配信 push の価値を下げないため）', () => {
    expect(AUG_NOTICE_TEXT).not.toMatch(/https?:\/\//);
  });

  it('禁止表現を含まない（message-copy-guidelines.md）', () => {
    // 配信頻度を「毎日届く」と言い切らない
    expect(AUG_NOTICE_TEXT).not.toContain('毎日届く');
    expect(AUG_NOTICE_TEXT).not.toContain('毎日とどく');
    // サービス名の略称を作らない
    expect(AUG_NOTICE_TEXT).not.toContain('ちゃすた');
    // 料金には触れない（触れるなら敬体が必要になるため、この文面では出さない）
    expect(AUG_NOTICE_TEXT).not.toContain('円');
  });

  it('絵文字は控えめ（2個まで）', () => {
    const emoji = AUG_NOTICE_TEXT.match(/\p{Extended_Pictographic}/gu) ?? [];
    expect(emoji.length).toBeLessThanOrEqual(2);
  });
});

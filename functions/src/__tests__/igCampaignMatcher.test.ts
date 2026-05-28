// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  isWithinPeriod,
  matchKeyword,
  normalize,
  pickMatch,
} from '../igCampaignMatcher';
import type { IgCampaign } from '../igTypes';

function ts(date: Date) {
  return {
    toMillis: () => date.getTime(),
  } as unknown as IgCampaign['startsAt'];
}

function makeCampaign(
  override: Partial<IgCampaign> = {},
): IgCampaign {
  const now = new Date('2026-05-25T00:00:00Z');
  return {
    id: 'camp-1',
    mediaId: 'media-1',
    keywords: ['ほしい'],
    commentReplyText: 'DM 送りました📩',
    dmText: 'こちらから登録: {lineUrl}',
    lineUrl: 'https://lin.ee/xxx?liff.state=ig_ref%3Dig_camp-1',
    startsAt: ts(new Date(now.getTime() - 24 * 60 * 60 * 1000)),
    endsAt: ts(new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)),
    isActive: true,
    createdAt: ts(now),
    updatedAt: ts(now),
    createdBy: 'admin-uid',
    ...override,
  };
}

describe('normalize', () => {
  it('全角英数字を半角に正規化', () => {
    expect(normalize('ＡＢＣ１２３')).toBe('abc123');
  });

  it('大文字を小文字に正規化', () => {
    expect(normalize('HOSHII')).toBe('hoshii');
  });

  it('全角・半角スペースを除去', () => {
    expect(normalize(' ほ し い ')).toBe('ほしい');
    expect(normalize('ほ　し　い')).toBe('ほしい');
  });

  it('NFKC: 半角カナ → 全角カナ', () => {
    expect(normalize('ﾎｼｲ')).toBe('ホシイ');
  });
});

describe('matchKeyword', () => {
  it('完全一致でマッチ', () => {
    expect(matchKeyword('ほしい', ['ほしい'])).toBe('ほしい');
  });

  it('部分一致でマッチ', () => {
    expect(matchKeyword('資料がほしいです', ['ほしい'])).toBe('ほしい');
  });

  it('大文字小文字無視', () => {
    expect(matchKeyword('Want ITEM', ['want'])).toBe('want');
  });

  it('全角半角バリエーション', () => {
    expect(matchKeyword('ＨＯＳＨＩＩ', ['hoshii'])).toBe('hoshii');
  });

  it('空のテキストは null', () => {
    expect(matchKeyword('', ['ほしい'])).toBeNull();
    expect(matchKeyword('   ', ['ほしい'])).toBeNull();
  });

  it('複数キーワードのうち最初にマッチしたものを返す', () => {
    expect(matchKeyword('資料下さい', ['ほしい', '資料', 'ください'])).toBe(
      '資料',
    );
  });

  it('どれもマッチしないと null', () => {
    expect(matchKeyword('こんにちは', ['ほしい', '資料'])).toBeNull();
  });
});

describe('isWithinPeriod', () => {
  const now = new Date('2026-05-25T12:00:00Z');

  it('期間内 (start <= now < end) で true', () => {
    const c = makeCampaign();
    expect(isWithinPeriod(c, now)).toBe(true);
  });

  it('start 時刻ちょうどは true', () => {
    const c = makeCampaign({ startsAt: ts(now) });
    expect(isWithinPeriod(c, now)).toBe(true);
  });

  it('end 時刻ちょうどは false（半開区間）', () => {
    const c = makeCampaign({ endsAt: ts(now) });
    expect(isWithinPeriod(c, now)).toBe(false);
  });

  it('start 前は false', () => {
    const c = makeCampaign({
      startsAt: ts(new Date(now.getTime() + 1000)),
    });
    expect(isWithinPeriod(c, now)).toBe(false);
  });
});

describe('pickMatch', () => {
  const now = new Date('2026-05-25T12:00:00Z');

  it('アクティブ + 期間内 + キーワード一致でマッチ', () => {
    const c = makeCampaign();
    const result = pickMatch([c], 'ほしいです！', now);
    expect(result?.campaign.id).toBe('camp-1');
    expect(result?.matchedKeyword).toBe('ほしい');
  });

  it('isActive=false ならマッチしない', () => {
    const c = makeCampaign({ isActive: false });
    expect(pickMatch([c], 'ほしい', now)).toBeNull();
  });

  it('期間外ならマッチしない', () => {
    const c = makeCampaign({
      startsAt: ts(new Date(now.getTime() + 1000)),
    });
    expect(pickMatch([c], 'ほしい', now)).toBeNull();
  });

  it('キーワード不一致ならマッチしない', () => {
    const c = makeCampaign();
    expect(pickMatch([c], 'こんにちは', now)).toBeNull();
  });

  it('複数候補のうち最初にマッチしたものを返す', () => {
    const c1 = makeCampaign({ id: 'camp-1', keywords: ['不一致'] });
    const c2 = makeCampaign({ id: 'camp-2', keywords: ['ほしい'] });
    const result = pickMatch([c1, c2], 'ほしい', now);
    expect(result?.campaign.id).toBe('camp-2');
  });
});

import { describe, it, expect } from 'vitest';
import { isPublicPath } from './authGuard';

describe('isPublicPath', () => {
  it('returns true for top page', () => {
    expect(isPublicPath('/')).toBe(true);
  });

  it('returns true for era select page', () => {
    expect(isPublicPath('/subjects/history')).toBe(true);
    expect(isPublicPath('/subjects/english')).toBe(true);
  });

  it('returns true for topic select page', () => {
    expect(isPublicPath('/subjects/history/eras/jomon')).toBe(true);
    expect(isPublicPath('/subjects/english/eras/grade1')).toBe(true);
  });

  it('returns true for welcome / callback / liff entries', () => {
    expect(isPublicPath('/welcome')).toBe(true);
    expect(isPublicPath('/auth/line/callback')).toBe(true);
    expect(isPublicPath('/liff/units')).toBe(true);
    expect(isPublicPath('/liff/anything-else')).toBe(true);
  });

  it('原則公開: 学習・クイズ・チャット・設定・静的ページもログイン不要', () => {
    expect(
      isPublicPath('/subjects/history/eras/jomon/topics/joumon-jidai')
    ).toBe(true);
    expect(isPublicPath('/subjects/history/random-quiz')).toBe(true);
    expect(isPublicPath('/chat/abc123')).toBe(true);
    expect(isPublicPath('/settings')).toBe(true);
    // 静的タイピングページ（public/typing）も React 経由で来ても公開扱い
    expect(isPublicPath('/typing')).toBe(true);
    expect(isPublicPath('/typing/')).toBe(true);
  });

  it('returns true for unknown / future paths (default public)', () => {
    expect(isPublicPath('/nonexistent')).toBe(true);
    expect(isPublicPath('/foo/bar')).toBe(true);
    expect(isPublicPath('/subjects')).toBe(true);
    expect(isPublicPath('/subjects/history/eras')).toBe(true);
  });

  it('returns false only for admin (auth required)', () => {
    expect(isPublicPath('/admin')).toBe(false);
    expect(isPublicPath('/admin/')).toBe(false);
    expect(isPublicPath('/admin/dashboard')).toBe(false);
  });
});

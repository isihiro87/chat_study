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

  it('returns false for learning page (deeper than topic select)', () => {
    expect(
      isPublicPath('/subjects/history/eras/jomon/topics/joumon-jidai')
    ).toBe(false);
  });

  it('returns false for random quiz / chat / settings / admin', () => {
    expect(isPublicPath('/subjects/history/random-quiz')).toBe(false);
    expect(isPublicPath('/chat/abc123')).toBe(false);
    expect(isPublicPath('/settings')).toBe(false);
    expect(isPublicPath('/admin')).toBe(false);
  });

  it('returns false for unknown / nonexistent paths', () => {
    expect(isPublicPath('/nonexistent')).toBe(false);
    expect(isPublicPath('/foo/bar')).toBe(false);
  });

  it('handles trailing segments correctly', () => {
    // /subjects (subjectId なし) は公開パターンに合致しない
    expect(isPublicPath('/subjects')).toBe(false);
    // /subjects/x/eras (eraId なし) も合致しない
    expect(isPublicPath('/subjects/history/eras')).toBe(false);
  });
});

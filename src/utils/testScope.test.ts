import { describe, it, expect } from 'vitest';
import { normalizeTestScope } from './testScope';

describe('normalizeTestScope', () => {
  it('returns null when raw is undefined', () => {
    expect(normalizeTestScope(undefined)).toBeNull();
  });

  it('returns empty topics + null updatedAt when raw is empty object', () => {
    expect(normalizeTestScope({})).toEqual({ topics: [], updatedAt: null });
  });

  it('returns valid topics when topics is a string array', () => {
    const result = normalizeTestScope({ topics: ['縄文・弥生時代', 'be動詞'] });
    expect(result?.topics).toEqual(['縄文・弥生時代', 'be動詞']);
  });

  it('filters out non-string entries from topics', () => {
    const raw = { topics: ['縄文', 123, null, '飛鳥', undefined] } as unknown as Parameters<
      typeof normalizeTestScope
    >[0];
    const result = normalizeTestScope(raw);
    expect(result?.topics).toEqual(['縄文', '飛鳥']);
  });

  it('returns empty topics when topics is not an array', () => {
    const raw = { topics: 'not-an-array' } as unknown as Parameters<
      typeof normalizeTestScope
    >[0];
    expect(normalizeTestScope(raw)?.topics).toEqual([]);
  });

  it('converts Timestamp.updatedAt to Date', () => {
    const date = new Date('2026-05-10T00:00:00Z');
    const fakeTimestamp = { toDate: () => date };
    const raw = { topics: ['x'], updatedAt: fakeTimestamp } as unknown as Parameters<
      typeof normalizeTestScope
    >[0];
    expect(normalizeTestScope(raw)?.updatedAt).toEqual(date);
  });

  it('handles missing updatedAt gracefully', () => {
    expect(normalizeTestScope({ topics: ['x'] })?.updatedAt).toBeNull();
  });
});

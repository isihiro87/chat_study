// @vitest-environment node

import { describe, it, expect } from 'vitest';
import { summarizeMubistaForPrompt } from '../mubistaPromptCore';

const NOW = 1_700_000_000_000;
const DAY = 24 * 60 * 60 * 1000;

describe('summarizeMubistaForPrompt', () => {
  it('記録なし・空 units は null', () => {
    expect(summarizeMubistaForPrompt(undefined, NOW)).toBeNull();
    expect(summarizeMubistaForPrompt({ units: {} }, NOW)).toBeNull();
  });

  it('直近単元と進捗・まちがえた概念を含む', () => {
    const s = summarizeMubistaForPrompt(
      {
        lastUnit: 'kamakura-bakufu',
        lastViewedAtMs: NOW - DAY, // きのう
        units: {
          'kamakura-bakufu': {
            title: '鎌倉幕府の成立',
            progress: 0.7,
            viewedAtMs: NOW - DAY,
          },
        },
        recentWrong: [{ unit: 'kamakura-bakufu', concept: '御恩と奉公' }],
      },
      NOW
    );
    expect(s).toContain('スタ先生');
    expect(s).toContain('鎌倉幕府の成立');
    expect(s).toContain('きのう');
    expect(s).toContain('70%');
    expect(s).toContain('御恩と奉公');
  });

  it('進捗90%以上は「ほぼ見終わった」', () => {
    const s = summarizeMubistaForPrompt(
      {
        lastUnit: 'u1',
        lastViewedAtMs: NOW,
        units: { u1: { title: 'T', progress: 0.95, viewedAtMs: NOW } },
      },
      NOW
    );
    expect(s).toContain('ほぼ見終わった');
    expect(s).toContain('今日');
  });

  it('まちがえは上位4件まで、単元名を添える', () => {
    const recentWrong = Array.from({ length: 6 }, (_, i) => ({
      unit: 'u1',
      concept: 'c' + i,
    }));
    const s = summarizeMubistaForPrompt(
      {
        lastUnit: 'u1',
        lastViewedAtMs: NOW,
        units: { u1: { title: '単元A', progress: 0.5, viewedAtMs: NOW } },
        recentWrong,
      },
      NOW
    )!;
    expect(s).toContain('単元Aの「c0」');
    expect(s).toContain('c3');
    expect(s).not.toContain('c4'); // 上位4件まで
  });

  it('古い視聴（>10日）は時期を出さない', () => {
    const s = summarizeMubistaForPrompt(
      {
        lastUnit: 'u1',
        lastViewedAtMs: NOW - 30 * DAY,
        units: {
          u1: { title: 'T', progress: 0.5, viewedAtMs: NOW - 30 * DAY },
        },
      },
      NOW
    )!;
    expect(s).not.toMatch(/きのう|今日|最近|少し前/);
  });
});

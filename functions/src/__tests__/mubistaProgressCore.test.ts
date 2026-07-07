// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  applyMubistaEvent,
  normalizeEvent,
  clampProgress,
  MAX_UNITS,
  MAX_RECENT_WRONG,
  MAX_WRONG_CONCEPTS,
  type MubistaProgressCore,
} from '../mubistaProgressCore';

describe('clampProgress', () => {
  it('0..1 にクランプ、NaN は 0', () => {
    expect(clampProgress(0.5)).toBe(0.5);
    expect(clampProgress(-1)).toBe(0);
    expect(clampProgress(2)).toBe(1);
    expect(clampProgress('x')).toBe(0);
    expect(clampProgress(undefined)).toBe(0);
  });
});

describe('normalizeEvent', () => {
  it('view: 正常系', () => {
    expect(
      normalizeEvent({
        type: 'view',
        unit: 'kamakura-bakufu',
        title: '鎌倉幕府の成立',
        progress: 0.8,
      })
    ).toEqual({
      type: 'view',
      unit: 'kamakura-bakufu',
      title: '鎌倉幕府の成立',
      progress: 0.8,
    });
  });
  it('quiz: 正常系（correct 既定 false）', () => {
    expect(
      normalizeEvent({
        type: 'quiz',
        unit: 'u1',
        title: 'T',
        concept: '御恩と奉公',
      })
    ).toEqual({
      type: 'quiz',
      unit: 'u1',
      title: 'T',
      concept: '御恩と奉公',
      correct: false,
    });
  });
  it('不正な unit id / 空 title / 未知 type は null', () => {
    expect(
      normalizeEvent({ type: 'view', unit: 'ば/だ', title: 'T', progress: 1 })
    ).toBeNull();
    expect(
      normalizeEvent({ type: 'view', unit: 'u1', title: '', progress: 1 })
    ).toBeNull();
    expect(normalizeEvent({ type: 'quiz', unit: 'u1', title: 'T' })).toBeNull(); // concept なし
    expect(
      normalizeEvent({ type: 'other', unit: 'u1', title: 'T' })
    ).toBeNull();
    expect(normalizeEvent(null)).toBeNull();
  });
});

describe('applyMubistaEvent: view', () => {
  it('進捗は max を保持（下がらない）', () => {
    let s = applyMubistaEvent(
      undefined,
      { type: 'view', unit: 'u1', title: 'T', progress: 0.6 },
      100
    );
    expect(s.units.u1.progress).toBe(0.6);
    s = applyMubistaEvent(
      s,
      { type: 'view', unit: 'u1', title: 'T', progress: 0.3 },
      200
    );
    expect(s.units.u1.progress).toBe(0.6); // 下がらない
    s = applyMubistaEvent(
      s,
      { type: 'view', unit: 'u1', title: 'T', progress: 0.9 },
      300
    );
    expect(s.units.u1.progress).toBe(0.9);
    expect(s.lastUnit).toBe('u1');
    expect(s.lastViewedAtMs).toBe(300);
  });
});

describe('applyMubistaEvent: quiz', () => {
  it('asked/correct 集計、誤答は wrongConcepts と recentWrong に反映', () => {
    let s = applyMubistaEvent(
      undefined,
      { type: 'quiz', unit: 'u1', title: 'T', concept: 'A', correct: true },
      100
    );
    expect(s.units.u1.quiz).toEqual({
      asked: 1,
      correct: 1,
      wrongConcepts: [],
    });
    expect(s.recentWrong).toHaveLength(0);

    s = applyMubistaEvent(
      s,
      {
        type: 'quiz',
        unit: 'u1',
        title: 'T',
        concept: '御恩と奉公',
        correct: false,
      },
      200
    );
    expect(s.units.u1.quiz).toEqual({
      asked: 2,
      correct: 1,
      wrongConcepts: ['御恩と奉公'],
    });
    expect(s.recentWrong[0]).toMatchObject({
      unit: 'u1',
      concept: '御恩と奉公',
    });
  });

  it('同 concept の誤答は wrongConcepts 重複せず、recentWrong は最新へ更新', () => {
    let s = applyMubistaEvent(
      undefined,
      { type: 'quiz', unit: 'u1', title: 'T', concept: 'A', correct: false },
      100
    );
    s = applyMubistaEvent(
      s,
      { type: 'quiz', unit: 'u1', title: 'T', concept: 'B', correct: false },
      200
    );
    s = applyMubistaEvent(
      s,
      { type: 'quiz', unit: 'u1', title: 'T', concept: 'A', correct: false },
      300
    );
    expect(s.units.u1.quiz?.wrongConcepts).toEqual(['A', 'B']); // 重複なし
    expect(s.recentWrong).toHaveLength(2);
    expect(s.recentWrong[0]).toMatchObject({ concept: 'A', atMs: 300 }); // A が最新へ
    expect(s.recentWrong[1]).toMatchObject({ concept: 'B' });
  });

  it('recentWrong は上限で切られる', () => {
    let s: MubistaProgressCore | undefined;
    for (let i = 0; i < MAX_RECENT_WRONG + 5; i++) {
      s = applyMubistaEvent(
        s,
        {
          type: 'quiz',
          unit: 'u' + i,
          title: 'T',
          concept: 'c' + i,
          correct: false,
        },
        i
      );
    }
    expect(s!.recentWrong).toHaveLength(MAX_RECENT_WRONG);
    expect(s!.recentWrong[0].concept).toBe('c' + (MAX_RECENT_WRONG + 4)); // 最新
  });

  it('wrongConcepts は 1 単元あたり上限', () => {
    let s: MubistaProgressCore | undefined;
    for (let i = 0; i < MAX_WRONG_CONCEPTS + 3; i++) {
      s = applyMubistaEvent(
        s,
        {
          type: 'quiz',
          unit: 'u1',
          title: 'T',
          concept: 'c' + i,
          correct: false,
        },
        i
      );
    }
    expect(s!.units.u1.quiz?.wrongConcepts).toHaveLength(MAX_WRONG_CONCEPTS);
  });
});

describe('applyMubistaEvent: units 間引き', () => {
  it('MAX_UNITS を超えたら古い viewedAt から落とす', () => {
    let s: MubistaProgressCore | undefined;
    for (let i = 0; i < MAX_UNITS + 5; i++) {
      s = applyMubistaEvent(
        s,
        { type: 'view', unit: 'u' + i, title: 'T', progress: 0.1 },
        i
      );
    }
    const ids = Object.keys(s!.units);
    expect(ids).toHaveLength(MAX_UNITS);
    expect(s!.units['u0']).toBeUndefined(); // 最古は落ちる
    expect(s!.units['u' + (MAX_UNITS + 4)]).toBeDefined(); // 最新は残る
  });
});

describe('applyMubistaEvent: 非破壊', () => {
  it('prev を変更しない', () => {
    const prev = applyMubistaEvent(
      undefined,
      { type: 'view', unit: 'u1', title: 'T', progress: 0.5 },
      100
    );
    const snapshot = JSON.stringify(prev);
    applyMubistaEvent(
      prev,
      { type: 'view', unit: 'u1', title: 'T', progress: 0.9 },
      200
    );
    expect(JSON.stringify(prev)).toBe(snapshot);
  });
});

// @vitest-environment node

import { describe, it, expect } from 'vitest';
import { toCore, fromCore } from '../recordMubistaProgress';
import { applyMubistaEvent } from '../mubistaProgressCore';
import type { MubistaProgress } from '../userDocTypes';

/** Firestore Timestamp の最小フェイク（fromMillis / toMillis のみ）。 */
class FakeTimestamp {
  constructor(public ms: number) {}
  static fromMillis(ms: number) {
    return new FakeTimestamp(ms);
  }
  toMillis() {
    return this.ms;
  }
}

describe('recordMubistaProgress: Timestamp round-trip', () => {
  it('apply → fromCore → toCore で core が保存される（ミリ秒が壊れない）', () => {
    // core を作る
    let core = applyMubistaEvent(
      undefined,
      {
        type: 'view',
        unit: 'kamakura-bakufu',
        title: '鎌倉幕府の成立',
        progress: 0.8,
      },
      1_000
    );
    core = applyMubistaEvent(
      core,
      {
        type: 'quiz',
        unit: 'kamakura-bakufu',
        title: '鎌倉幕府の成立',
        concept: '御恩と奉公',
        correct: false,
      },
      2_000
    );

    // core → Firestore 形（Timestamp 化）→ core に戻す
    const stored = fromCore(
      core,
      FakeTimestamp as never
    ) as unknown as MubistaProgress;
    const back = toCore(stored)!;

    expect(back.lastUnit).toBe('kamakura-bakufu');
    expect(back.lastViewedAtMs).toBe(2_000);
    expect(back.units['kamakura-bakufu'].progress).toBe(0.8);
    expect(back.units['kamakura-bakufu'].viewedAtMs).toBe(2_000);
    expect(back.units['kamakura-bakufu'].quiz).toEqual({
      asked: 1,
      correct: 0,
      wrongConcepts: ['御恩と奉公'],
    });
    expect(back.recentWrong[0]).toEqual({
      unit: 'kamakura-bakufu',
      concept: '御恩と奉公',
      atMs: 2_000,
    });
  });

  it('既存 doc から読み → 追記 → 保存の一連が積み上がる', () => {
    // 1 回目
    const c1 = applyMubistaEvent(
      undefined,
      { type: 'view', unit: 'u1', title: 'T', progress: 0.5 },
      100
    );
    const stored1 = fromCore(
      c1,
      FakeTimestamp as never
    ) as unknown as MubistaProgress;
    // 2 回目（既存を読み戻して追記）
    const prev = toCore(stored1);
    const c2 = applyMubistaEvent(
      prev,
      { type: 'view', unit: 'u1', title: 'T', progress: 0.9 },
      200
    );
    expect(c2.units.u1.progress).toBe(0.9); // 積み上がり（max）
    expect(c2.units.u1.viewedAtMs).toBe(200);
  });

  it('toCore(undefined) は undefined', () => {
    expect(toCore(undefined)).toBeUndefined();
  });
});

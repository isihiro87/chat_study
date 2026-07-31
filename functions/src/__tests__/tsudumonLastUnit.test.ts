/**
 * 「直前にひらいていた単元」の記録の検査。
 *
 * ## なぜ要るか（2026-07-27 の事故）
 * 第1章を読み終えた直後に「理解度チェック」を押したら、**鎌倉幕府（第5章）**の
 * 問題が出た。原因は `lastAt` の付け方:
 * 教材ページは毎回 localStorage 全体（＝過去にやった全章）を送ってくるのに、
 * サーバは**そのすべてに「今」を刻んで**いた。結果、どの章も同じ時刻になり
 * 「最近やった章」が意味を持たなくなっていた。
 */

import { describe, it, expect } from 'vitest';

import {
  mergeProgress,
  buildTsudumonProgressContext,
} from '../tsudumonProgressCore';

const T0 = 1_785_000_000_000;
const T1 = T0 + 60_000;
const T2 = T1 + 60_000;
const name = (no: string) =>
  ({
    '01': '年代の表し方',
    '05': '武士と鎌倉幕府',
    '07': 'ヨーロッパと天下統一',
  })[no] ?? no;

describe('lastAt は「この同期で進んだ章」だけ更新する', () => {
  it('変化していない章の時刻は据え置く', () => {
    let p = mergeProgress(
      undefined,
      { units: { '05': { refSteps: 2, msRef: 300_000 } } },
      T0
    );
    // 第1章を読む。第5章は「変化なし」でスナップショットに乗ってくるだけ
    p = mergeProgress(
      p,
      {
        units: { '01': { refSteps: 1, msRef: 600_000 }, '05': { refSteps: 2 } },
      },
      T1
    );
    expect(p.units['01'].lastAt).toBe(T1);
    expect(p.units['05'].lastAt).toBe(T0); // 巻き込まれない
  });

  it('節が進んだ章は更新する（時間が乗っていなくても）', () => {
    let p = mergeProgress(undefined, { units: { '05': { refSteps: 1 } } }, T0);
    p = mergeProgress(p, { units: { '05': { refSteps: 3 } } }, T1);
    expect(p.units['05'].lastAt).toBe(T1);
  });

  it('問題を解いた章も更新する', () => {
    let p = mergeProgress(
      undefined,
      { units: { '05': { r: { 'qa-a-1': 1 } } } },
      T0
    );
    p = mergeProgress(
      p,
      { units: { '05': { r: { 'qa-a-1': 1, 'qa-a-2': 0 } } } },
      T1
    );
    expect(p.units['05'].lastAt).toBe(T1);
  });

  it('まったく同じ内容の再送では時刻が動かない', () => {
    const payload = { units: { '05': { refSteps: 2, r: { 'qa-a-1': 1 } } } };
    let p = mergeProgress(undefined, payload, T0);
    p = mergeProgress(p, payload, T1);
    expect(p.units['05'].lastAt).toBe(T0);
  });
});

describe('直前にひらいていた単元', () => {
  it('学習時間が乗っている章を「いま開いていたページ」とみなす', () => {
    const p = mergeProgress(
      undefined,
      {
        units: {
          '01': { refSteps: 1, msRef: 600_000 }, // いま読んでいた
          '05': { refSteps: 2 }, // 過去ぶんの再送
        },
      },
      T0
    );
    expect(p.lastUnit).toBe('01');
    expect(p.lastUnitAt).toBe(T0);
  });

  it('学習するたびに入れ替わる', () => {
    let p = mergeProgress(
      undefined,
      { units: { '05': { refSteps: 1, msRef: 300_000 } } },
      T0
    );
    expect(p.lastUnit).toBe('05');
    p = mergeProgress(
      p,
      {
        units: { '01': { refSteps: 1, msRef: 300_000 }, '05': { refSteps: 1 } },
      },
      T1
    );
    expect(p.lastUnit).toBe('01');
  });

  it('いちばん長く学習していた章を選ぶ（同時に複数動いたとき）', () => {
    const p = mergeProgress(
      undefined,
      {
        units: {
          '01': { refSteps: 1, msRef: 60_000 },
          '07': { refSteps: 1, msRef: 900_000 },
        },
      },
      T2
    );
    expect(p.lastUnit).toBe('07');
  });

  it('プロンプトに「直前にひらいていた章」として出る', () => {
    const p = mergeProgress(
      undefined,
      { units: { '01': { refSteps: 1, msRef: 600_000 } } },
      T0
    );
    const text = buildTsudumonProgressContext(p, name);
    expect(text).toContain('直前にひらいていた章: 年代の表し方');
    // 「さっきの」がどれを指すかまで書いておく（AIに推測させない）
    expect(text).toContain('さっきの');
  });
});

/**
 * 学習モード（定期テスト／入試／両立）の検査。
 *
 * 守りたいこと:
 *   - **既定は学年から自動**（中1・中2＝定期テスト／中3＝両立）。設定させない
 *   - 両立は**テスト14日前で自動的に定期テスト対策へ**切り替わり、終われば戻る
 *   - 入試モードは**まちがえたまま → 正答率が低い → 未着手 → 放置期間**の順に拾う
 */

import { describe, it, expect } from 'vitest';

import {
  EXAM_SWITCH_DAYS,
  entranceReasonLead,
  isExamNear,
  modeFromGrade,
  normalizeMode,
  pickEntranceUnit,
  resolveEffectiveMode,
} from '../tsudumonModeCore';
import type { TsudumonExam } from '../tsudumonExamCore';
import type { TsudumonProgress, UnitProgress } from '../tsudumonProgressCore';

const NOW = Date.parse('2026-09-01T12:00:00+09:00');
const DAY = 24 * 60 * 60 * 1000;

/** JST の「◯日後」の日付文字列。 */
function inDays(days: number): string {
  return new Date(NOW + days * DAY + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
}
function exam(days: number, unitNos: string[] = ['08']): TsudumonExam {
  return {
    date: inDays(days),
    unitNos,
    confidence: 'confirmed',
    updatedAt: NOW,
  };
}
function unit(over: Partial<UnitProgress> = {}): UnitProgress {
  return {
    refSteps: 0,
    wbSteps: 0,
    answered: 10,
    correct: 10,
    msRef: 0,
    msWb: 0,
    wrongNow: [],
    refTotal: 0,
    qTotal: 10,
    lastAt: NOW,
    ...over,
  };
}
function progress(units: Record<string, UnitProgress>): TsudumonProgress {
  return {
    updatedAt: NOW,
    units,
    totals: { answered: 0, correct: 0, msRef: 0, msWb: 0, msTotal: 0 } as never,
  };
}

describe('モード設定の正規化', () => {
  it('未設定・不正値は auto', () => {
    expect(normalizeMode(undefined)).toBe('auto');
    expect(normalizeMode('juken')).toBe('auto');
    expect(normalizeMode(3)).toBe('auto');
  });
  it('正しい値はそのまま', () => {
    expect(normalizeMode('entrance')).toBe('entrance');
  });
});

describe('学年からの自動判定', () => {
  it('中1・中2は定期テスト', () => {
    expect(modeFromGrade('中1')).toBe('exam');
    expect(modeFromGrade('中2')).toBe('exam');
  });
  it('中3は両立', () => {
    expect(modeFromGrade('中3')).toBe('both');
  });
  it('学年が分からなければ定期テスト（多数派に倒す）', () => {
    expect(modeFromGrade(undefined)).toBe('exam');
  });
});

describe('実際に使うモードの解決', () => {
  it('auto × 中1 → 定期テスト', () => {
    expect(
      resolveEffectiveMode({
        setting: undefined,
        grade: '中1',
        exam: undefined,
        nowMs: NOW,
      })
    ).toBe('exam');
  });

  it('auto × 中3 × テストなし → 入試', () => {
    expect(
      resolveEffectiveMode({
        setting: undefined,
        grade: '中3',
        exam: undefined,
        nowMs: NOW,
      })
    ).toBe('entrance');
  });

  it('auto × 中3 × テスト10日前 → 定期テストへ切り替わる', () => {
    expect(
      resolveEffectiveMode({
        setting: undefined,
        grade: '中3',
        exam: exam(10),
        nowMs: NOW,
      })
    ).toBe('exam');
  });

  it('auto × 中3 × テスト30日前 → まだ入試のまま', () => {
    expect(
      resolveEffectiveMode({
        setting: undefined,
        grade: '中3',
        exam: exam(30),
        nowMs: NOW,
      })
    ).toBe('entrance');
  });

  it('明示設定は学年より優先する', () => {
    expect(
      resolveEffectiveMode({
        setting: 'entrance',
        grade: '中1',
        exam: exam(3),
        nowMs: NOW,
      })
    ).toBe('entrance');
    expect(
      resolveEffectiveMode({
        setting: 'exam',
        grade: '中3',
        exam: undefined,
        nowMs: NOW,
      })
    ).toBe('exam');
  });

  it('テストが終われば両立は入試へ戻る', () => {
    // 終了から2日たった予定は「有効な予定ではない」＝近くもない
    expect(isExamNear(exam(-2), NOW)).toBe(false);
    expect(
      resolveEffectiveMode({
        setting: 'both',
        grade: '中3',
        exam: exam(-2),
        nowMs: NOW,
      })
    ).toBe('entrance');
  });

  it('切り替えの境目はちょうど14日前', () => {
    expect(isExamNear(exam(EXAM_SWITCH_DAYS), NOW)).toBe(true);
    expect(isExamNear(exam(EXAM_SWITCH_DAYS + 1), NOW)).toBe(false);
  });
});

describe('入試モードの単元選び', () => {
  it('まちがえたままの問題が残っている単元を最優先する', () => {
    const p = progress({
      '01': unit({ wrongNow: ['q1', 'q2', 'q3'] }),
      '02': unit({ answered: 0, correct: 0 }), // 未着手
    });
    const picked = pickEntranceUnit({ progress: p, cursor: 0, nowMs: NOW });
    expect(picked.unitNo).toBe('01');
    expect(picked.reason).toBe('entrance_wrong');
  });

  it('正答率が低い単元を、正解できている単元より先に出す', () => {
    const p = progress({
      '03': unit({ answered: 10, correct: 3 }), // 正答率30%
      '04': unit({ answered: 10, correct: 10 }), // 満点
    });
    const picked = pickEntranceUnit({ progress: p, cursor: 2, nowMs: NOW });
    expect(picked.unitNo).toBe('03');
  });

  it('記録がまったく無ければ先頭から始める', () => {
    const picked = pickEntranceUnit({
      progress: undefined,
      cursor: 0,
      nowMs: NOW,
    });
    expect(picked.unitNo).toBe('01');
    expect(picked.reason).toBe('entrance_new');
  });

  it('全部やり終えていれば、しばらく空いた単元を出す', () => {
    // 全19単元を満点で終えた状態を作り、01 だけ20日空けておく
    const units: Record<string, UnitProgress> = {};
    for (let i = 1; i <= 19; i++) {
      const no = String(i).padStart(2, '0');
      units[no] = unit({ lastAt: no === '01' ? NOW - 20 * DAY : NOW });
    }
    const picked = pickEntranceUnit({
      progress: progress(units),
      cursor: 0,
      nowMs: NOW,
    });
    expect(picked.unitNo).toBe('01');
    expect(picked.reason).toBe('entrance_stale');
  });

  it('未着手は、できている単元より先に出す（放置が長くても）', () => {
    const units: Record<string, UnitProgress> = {};
    for (let i = 1; i <= 19; i++) {
      units[String(i).padStart(2, '0')] = unit({ lastAt: NOW - 30 * DAY });
    }
    delete units['07']; // 07 だけ未着手
    const picked = pickEntranceUnit({
      progress: progress(units),
      cursor: 0,
      nowMs: NOW,
    });
    expect(picked.unitNo).toBe('07');
    expect(picked.reason).toBe('entrance_new');
  });

  it('まちがえが残っていれば、未着手より先に出す（優先順位どおり）', () => {
    // 19 に1問だけ残っている。ほかは未着手（＝段が下）
    const picked = pickEntranceUnit({
      progress: progress({ '19': unit({ wrongNow: ['q1'] }) }),
      cursor: 0,
      nowMs: NOW,
    });
    expect(picked.unitNo).toBe('19');
    expect(picked.reason).toBe('entrance_wrong');
  });

  it('どの理由にも枕の文がある', () => {
    (
      [
        'entrance_wrong',
        'entrance_lowscore',
        'entrance_new',
        'entrance_stale',
      ] as const
    ).forEach(function (r) {
      expect(entranceReasonLead(r).length).toBeGreaterThan(5);
    });
  });
});

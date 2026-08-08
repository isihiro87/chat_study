// @vitest-environment node
/**
 * 初期設定の完了判定。
 *
 * ここが緩いと**壊れた人が自力で直せなくなる**。実際に本番で
 * 「教科と時刻はあるのに学年が無い」1人が、学年カードを押しても
 * 「すでに登録済みだよ」と返されて詰まっていた（2026-08-08 修正）。
 */
import { describe, it, expect } from 'vitest';
import {
  isSetupComplete,
  firstMissingStep,
  hasValidGrade,
  hasValidSubject,
  hasValidHour,
} from '../onboardingSetupCore';

const COMPLETE = { grade: '中2', subject: 'history', preferredHour: 7 };

describe('isSetupComplete', () => {
  it('3つ揃っていれば true', () => {
    expect(isSetupComplete(COMPLETE)).toBe(true);
  });

  // ⚠️ これが今回の不具合の本体。時刻だけで完了扱いにしてはいけない。
  it('時刻があっても学年が無ければ false', () => {
    expect(isSetupComplete({ subject: 'history', preferredHour: 7 })).toBe(
      false
    );
  });

  it('時刻があっても教科が無ければ false', () => {
    expect(isSetupComplete({ grade: '中2', preferredHour: 7 })).toBe(false);
  });

  it('学年・教科があっても時刻が無ければ false', () => {
    expect(isSetupComplete({ grade: '中2', subject: 'history' })).toBe(false);
  });

  it('未定義・空は false', () => {
    expect(isSetupComplete(undefined)).toBe(false);
    expect(isSetupComplete({})).toBe(false);
  });

  it('不正な値は false（型だけ合っていても通さない）', () => {
    expect(isSetupComplete({ ...COMPLETE, grade: '高1' })).toBe(false);
    expect(isSetupComplete({ ...COMPLETE, preferredHour: 19 })).toBe(false);
    expect(isSetupComplete({ ...COMPLETE, preferredHour: '7' })).toBe(false);
    expect(isSetupComplete({ ...COMPLETE, subject: '' })).toBe(false);
  });

  // 教科はこれから増える。ホワイトリストで縛ると、新教科の登録者が
  // 「設定済みなのに未完了扱い」になって同じ詰まり方をする。
  it('未知の教科でも設定済みとみなす（新教科を足しても詰まらせない）', () => {
    expect(isSetupComplete({ ...COMPLETE, subject: 'brand-new' })).toBe(true);
  });
});

describe('firstMissingStep', () => {
  it('揃っていれば null', () => {
    expect(firstMissingStep(COMPLETE)).toBeNull();
  });

  it('欠けている最初のステップを返す', () => {
    expect(firstMissingStep({})).toBe('grade');
    expect(firstMissingStep({ grade: '中1' })).toBe('subject');
    expect(firstMissingStep({ grade: '中1', subject: 'history' })).toBe('hour');
  });

  // 教科まで進んだ人を学年選択へ引き戻すと、かえって混乱する。
  it('学年が無ければ、教科や時刻があっても grade から', () => {
    expect(firstMissingStep({ subject: 'history', preferredHour: 7 })).toBe(
      'grade'
    );
  });

  it('未定義は grade から', () => {
    expect(firstMissingStep(undefined)).toBe('grade');
  });
});

describe('個別の判定', () => {
  it('学年', () => {
    expect(hasValidGrade({ grade: '中3' })).toBe(true);
    expect(hasValidGrade({ grade: '中4' })).toBe(false);
    expect(hasValidGrade({})).toBe(false);
  });
  it('教科', () => {
    expect(hasValidSubject({ subject: 'science' })).toBe(true);
    expect(hasValidSubject({ subject: '' })).toBe(false);
  });
  it('時刻', () => {
    for (const h of [6, 7, 16, 18, 20]) {
      expect(hasValidHour({ preferredHour: h })).toBe(true);
    }
    expect(hasValidHour({ preferredHour: 19 })).toBe(false);
  });
});

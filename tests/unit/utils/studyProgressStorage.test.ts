import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  loadProgress,
  saveProgress,
  getTopicProgress,
  updateStreak,
  DEFAULT_PROGRESS,
  DEFAULT_TOPIC_PROGRESS,
} from '../../../src/utils/studyProgressStorage';
import type { StudyProgress } from '../../../src/data/types';

describe('loadProgress', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('localStorageが空の場合、デフォルト値を返す', () => {
    const result = loadProgress();
    expect(result).toEqual(DEFAULT_PROGRESS);
  });

  it('正常なデータを読み込める', () => {
    const data: StudyProgress = {
      version: 1,
      topics: {
        't1': {
          chatRead: true,
          flashcardCompleted: false,
          exampleCompleted: false,
          quizBestScore: 8,
          quizTotalQuestions: 10,
          lastStudiedAt: '2026-03-01',
        },
      },
      streak: { currentStreak: 3, lastStudyDate: '2026-03-10' },
      lastStudiedTopicId: 't1',
    };
    localStorage.setItem('marutto-study-progress', JSON.stringify(data));
    const result = loadProgress();
    expect(result).toEqual(data);
  });

  it('不正なJSONの場合、デフォルト値を返す', () => {
    localStorage.setItem('marutto-study-progress', '{invalid json');
    const result = loadProgress();
    expect(result).toEqual(DEFAULT_PROGRESS);
  });

  it('バージョン不一致の場合、デフォルト値を返す', () => {
    localStorage.setItem('marutto-study-progress', JSON.stringify({ version: 99, topics: {} }));
    const result = loadProgress();
    expect(result).toEqual(DEFAULT_PROGRESS);
  });
});

describe('saveProgress', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('正常に保存できる', () => {
    const data: StudyProgress = {
      ...DEFAULT_PROGRESS,
      lastStudiedTopicId: 'test-topic',
    };
    saveProgress(data);
    const stored = localStorage.getItem('marutto-study-progress');
    expect(stored).not.toBeNull();
    expect(JSON.parse(stored!)).toEqual(data);
  });

  it('localStorage容量超過時にエラーにならない', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const setItemOriginal = Storage.prototype.setItem;
    Storage.prototype.setItem = () => {
      throw new DOMException('QuotaExceededError');
    };
    expect(() => saveProgress(DEFAULT_PROGRESS)).not.toThrow();
    Storage.prototype.setItem = setItemOriginal;
    warnSpy.mockRestore();
  });
});

describe('getTopicProgress', () => {
  it('存在するトピックの進捗を返す', () => {
    const progress: StudyProgress = {
      ...DEFAULT_PROGRESS,
      topics: {
        't1': {
          chatRead: true,
          flashcardCompleted: true,
          exampleCompleted: false,
          quizBestScore: 5,
          quizTotalQuestions: 10,
          lastStudiedAt: '2026-03-10',
        },
      },
    };
    const result = getTopicProgress(progress, 't1');
    expect(result.chatRead).toBe(true);
    expect(result.flashcardCompleted).toBe(true);
    expect(result.quizBestScore).toBe(5);
  });

  it('存在しないトピックの場合、デフォルト値を返す', () => {
    const result = getTopicProgress(DEFAULT_PROGRESS, 'nonexistent');
    expect(result).toEqual(DEFAULT_TOPIC_PROGRESS);
  });
});

describe('updateStreak', () => {
  it('初回学習時にストリーク1を設定する', () => {
    const result = updateStreak(DEFAULT_PROGRESS);
    expect(result.streak.currentStreak).toBe(1);
    expect(result.streak.lastStudyDate).not.toBe('');
  });

  it('同日に再度呼ばれた場合、ストリークを変更しない', () => {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const progress: StudyProgress = {
      ...DEFAULT_PROGRESS,
      streak: { currentStreak: 5, lastStudyDate: todayStr },
    };
    const result = updateStreak(progress);
    expect(result.streak.currentStreak).toBe(5);
  });

  it('連続日の場合、ストリークを加算する', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
    const progress: StudyProgress = {
      ...DEFAULT_PROGRESS,
      streak: { currentStreak: 3, lastStudyDate: yesterdayStr },
    };
    const result = updateStreak(progress);
    expect(result.streak.currentStreak).toBe(4);
  });

  it('中断後は1にリセットする', () => {
    const progress: StudyProgress = {
      ...DEFAULT_PROGRESS,
      streak: { currentStreak: 10, lastStudyDate: '2025-01-01' },
    };
    const result = updateStreak(progress);
    expect(result.streak.currentStreak).toBe(1);
  });
});

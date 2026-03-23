import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadQuizPreferences,
  saveQuizPreferences,
  loadFlashcardPreferences,
  saveFlashcardPreferences,
  DEFAULT_QUIZ_PREFERENCES,
  DEFAULT_FLASHCARD_PREFERENCES,
} from '../../../src/utils/setupPreferencesStorage';

const STORAGE_KEY = 'marutto-study-setup-prefs';

describe('setupPreferencesStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('loadQuizPreferences', () => {
    it('subjectIdがundefinedの場合、デフォルト値を返す', () => {
      const result = loadQuizPreferences(undefined);
      expect(result).toEqual(DEFAULT_QUIZ_PREFERENCES);
    });

    it('保存データがない場合、デフォルト値を返す', () => {
      const result = loadQuizPreferences('history');
      expect(result).toEqual(DEFAULT_QUIZ_PREFERENCES);
    });

    it('保存したクイズ設定を読み込める', () => {
      const prefs = {
        selectedDifficulties: ['advanced' as const],
        questionCount: 5,
        shuffleOrder: false,
      };
      saveQuizPreferences('history', prefs);
      const result = loadQuizPreferences('history');
      expect(result).toEqual(prefs);
    });
  });

  describe('saveQuizPreferences', () => {
    it('subjectIdがundefinedの場合、保存しない', () => {
      saveQuizPreferences(undefined, {
        selectedDifficulties: ['advanced'],
        questionCount: 5,
        shuffleOrder: false,
      });
      expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
    });
  });

  describe('loadFlashcardPreferences', () => {
    it('subjectIdがundefinedの場合、デフォルト値を返す', () => {
      const result = loadFlashcardPreferences(undefined);
      expect(result).toEqual(DEFAULT_FLASHCARD_PREFERENCES);
    });

    it('保存データがない場合、デフォルト値を返す', () => {
      const result = loadFlashcardPreferences('science');
      expect(result).toEqual(DEFAULT_FLASHCARD_PREFERENCES);
    });

    it('保存したフラッシュカード設定を読み込める', () => {
      const prefs = {
        selectedDifficulties: ['basic' as const],
        batchSize: 20,
        shuffleOrder: false,
      };
      saveFlashcardPreferences('science', prefs);
      const result = loadFlashcardPreferences('science');
      expect(result).toEqual(prefs);
    });
  });

  describe('saveFlashcardPreferences', () => {
    it('subjectIdがundefinedの場合、保存しない', () => {
      saveFlashcardPreferences(undefined, {
        selectedDifficulties: ['basic'],
        batchSize: 10,
        shuffleOrder: true,
      });
      expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
    });
  });

  describe('教科ごとの独立性', () => {
    it('異なる教科のクイズ設定が独立して保存・読み込みされる', () => {
      const historyPrefs = {
        selectedDifficulties: ['advanced' as const],
        questionCount: 10,
        shuffleOrder: false,
      };
      const sciencePrefs = {
        selectedDifficulties: ['basic' as const, 'standard' as const],
        questionCount: 5,
        shuffleOrder: true,
      };
      saveQuizPreferences('history', historyPrefs);
      saveQuizPreferences('science', sciencePrefs);

      expect(loadQuizPreferences('history')).toEqual(historyPrefs);
      expect(loadQuizPreferences('science')).toEqual(sciencePrefs);
    });

    it('異なる教科のフラッシュカード設定が独立して保存・読み込みされる', () => {
      const englishPrefs = {
        selectedDifficulties: ['standard' as const],
        batchSize: 5,
        shuffleOrder: true,
      };
      const mathPrefs = {
        selectedDifficulties: ['basic' as const, 'advanced' as const],
        batchSize: 15,
        shuffleOrder: false,
      };
      saveFlashcardPreferences('english', englishPrefs);
      saveFlashcardPreferences('math', mathPrefs);

      expect(loadFlashcardPreferences('english')).toEqual(englishPrefs);
      expect(loadFlashcardPreferences('math')).toEqual(mathPrefs);
    });

    it('クイズとフラッシュカードの設定が互いに干渉しない', () => {
      const quizPrefs = {
        selectedDifficulties: ['advanced' as const],
        questionCount: 10,
        shuffleOrder: false,
      };
      const flashcardPrefs = {
        selectedDifficulties: ['basic' as const],
        batchSize: 20,
        shuffleOrder: true,
      };
      saveQuizPreferences('history', quizPrefs);
      saveFlashcardPreferences('history', flashcardPrefs);

      expect(loadQuizPreferences('history')).toEqual(quizPrefs);
      expect(loadFlashcardPreferences('history')).toEqual(flashcardPrefs);
    });
  });

  describe('不正なlocalStorageデータの処理', () => {
    it('JSONとして不正なデータの場合、デフォルト値を返す', () => {
      localStorage.setItem(STORAGE_KEY, 'not-valid-json{{{');
      expect(loadQuizPreferences('history')).toEqual(DEFAULT_QUIZ_PREFERENCES);
      expect(loadFlashcardPreferences('history')).toEqual(DEFAULT_FLASHCARD_PREFERENCES);
    });

    it('オブジェクトでないデータの場合、デフォルト値を返す', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify('just a string'));
      expect(loadQuizPreferences('history')).toEqual(DEFAULT_QUIZ_PREFERENCES);
      expect(loadFlashcardPreferences('history')).toEqual(DEFAULT_FLASHCARD_PREFERENCES);
    });

    it('nullが保存されている場合、デフォルト値を返す', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(null));
      expect(loadQuizPreferences('history')).toEqual(DEFAULT_QUIZ_PREFERENCES);
      expect(loadFlashcardPreferences('history')).toEqual(DEFAULT_FLASHCARD_PREFERENCES);
    });

    it('selectedDifficultiesが空配列の場合、デフォルトの難易度を使用する', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        quiz: { history: { selectedDifficulties: [], questionCount: 5, shuffleOrder: false } },
        flashcard: {},
      }));
      const result = loadQuizPreferences('history');
      expect(result.selectedDifficulties).toEqual(DEFAULT_QUIZ_PREFERENCES.selectedDifficulties);
      expect(result.questionCount).toBe(5);
      expect(result.shuffleOrder).toBe(false);
    });

    it('shuffleOrderがboolean以外の場合、デフォルト値を使用する', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        quiz: { history: { selectedDifficulties: ['basic'], questionCount: null, shuffleOrder: 'yes' } },
        flashcard: {},
      }));
      const result = loadQuizPreferences('history');
      expect(result.shuffleOrder).toBe(DEFAULT_QUIZ_PREFERENCES.shuffleOrder);
    });

    it('quizキーが存在しない場合、デフォルト値を返す', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ flashcard: {} }));
      expect(loadQuizPreferences('history')).toEqual(DEFAULT_QUIZ_PREFERENCES);
    });

    it('flashcardキーが存在しない場合、デフォルト値を返す', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ quiz: {} }));
      expect(loadFlashcardPreferences('history')).toEqual(DEFAULT_FLASHCARD_PREFERENCES);
    });
  });
});

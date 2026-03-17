import { describe, it, expect, beforeEach } from 'vitest';
import {
  addCompletedTopic,
  shouldShowSummaryQuizPopup,
  getSessionCompletedTopics,
  markPopupShown,
  resetPopupShown,
} from '../../../src/utils/sessionStudyTracker';

describe('sessionStudyTracker', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  describe('addCompletedTopic', () => {
    it('トピックを追加できる', () => {
      addCompletedTopic('topic-1', 'math', 1);
      expect(getSessionCompletedTopics('math', 1)).toEqual(['topic-1']);
    });

    it('複数のトピックを追加できる', () => {
      addCompletedTopic('topic-1', 'math', 1);
      addCompletedTopic('topic-2', 'math', 1);
      addCompletedTopic('topic-3', 'math', 1);
      expect(getSessionCompletedTopics('math', 1)).toEqual(['topic-1', 'topic-2', 'topic-3']);
    });

    it('重複するトピックは追加されない', () => {
      addCompletedTopic('topic-1', 'math', 1);
      addCompletedTopic('topic-1', 'math', 1);
      expect(getSessionCompletedTopics('math', 1)).toEqual(['topic-1']);
    });
  });

  describe('shouldShowSummaryQuizPopup', () => {
    it('同じ教科・学年の完了トピック数が3未満の場合、falseを返す', () => {
      addCompletedTopic('topic-1', 'math', 1);
      addCompletedTopic('topic-2', 'math', 1);
      expect(shouldShowSummaryQuizPopup('math', 1)).toBe(false);
    });

    it('同じ教科・学年の完了トピック数が3以上の場合、trueを返す', () => {
      addCompletedTopic('topic-1', 'math', 1);
      addCompletedTopic('topic-2', 'math', 1);
      addCompletedTopic('topic-3', 'math', 1);
      expect(shouldShowSummaryQuizPopup('math', 1)).toBe(true);
    });

    it('異なる教科・学年のトピックは別々にカウントされる', () => {
      addCompletedTopic('topic-1', 'math', 1);
      addCompletedTopic('topic-2', 'math', 1);
      addCompletedTopic('topic-3', 'english', 1); // 別教科
      expect(shouldShowSummaryQuizPopup('math', 1)).toBe(false);

      addCompletedTopic('topic-4', 'math', 2); // 同教科・別学年
      expect(shouldShowSummaryQuizPopup('math', 1)).toBe(false);
    });

    it('ポップアップ表示済みの場合、falseを返す', () => {
      addCompletedTopic('topic-1', 'math', 1);
      addCompletedTopic('topic-2', 'math', 1);
      addCompletedTopic('topic-3', 'math', 1);
      markPopupShown();
      expect(shouldShowSummaryQuizPopup('math', 1)).toBe(false);
    });
  });

  describe('markPopupShown / resetPopupShown', () => {
    it('ポップアップ表示済みを記録し、リセットできる', () => {
      addCompletedTopic('topic-1', 'math', 1);
      addCompletedTopic('topic-2', 'math', 1);
      addCompletedTopic('topic-3', 'math', 1);

      expect(shouldShowSummaryQuizPopup('math', 1)).toBe(true);
      markPopupShown();
      expect(shouldShowSummaryQuizPopup('math', 1)).toBe(false);
      resetPopupShown();
      expect(shouldShowSummaryQuizPopup('math', 1)).toBe(true);
    });
  });

  describe('getSessionCompletedTopics', () => {
    it('空の場合、空配列を返す', () => {
      expect(getSessionCompletedTopics('math', 1)).toEqual([]);
    });

    it('指定した教科・学年のトピックのみ返す', () => {
      addCompletedTopic('topic-1', 'math', 1);
      addCompletedTopic('topic-2', 'english', 1);
      addCompletedTopic('topic-3', 'math', 2);
      expect(getSessionCompletedTopics('math', 1)).toEqual(['topic-1']);
      expect(getSessionCompletedTopics('english', 1)).toEqual(['topic-2']);
      expect(getSessionCompletedTopics('math', 2)).toEqual(['topic-3']);
    });
  });
});

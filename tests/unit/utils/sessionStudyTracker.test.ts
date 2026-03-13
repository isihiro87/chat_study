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
      addCompletedTopic('topic-1');
      expect(getSessionCompletedTopics()).toEqual(['topic-1']);
    });

    it('複数のトピックを追加できる', () => {
      addCompletedTopic('topic-1');
      addCompletedTopic('topic-2');
      addCompletedTopic('topic-3');
      expect(getSessionCompletedTopics()).toEqual(['topic-1', 'topic-2', 'topic-3']);
    });

    it('重複するトピックは追加されない', () => {
      addCompletedTopic('topic-1');
      addCompletedTopic('topic-1');
      expect(getSessionCompletedTopics()).toEqual(['topic-1']);
    });
  });

  describe('shouldShowSummaryQuizPopup', () => {
    it('完了トピック数が3未満の場合、falseを返す', () => {
      addCompletedTopic('topic-1');
      addCompletedTopic('topic-2');
      expect(shouldShowSummaryQuizPopup()).toBe(false);
    });

    it('完了トピック数が3以上の場合、trueを返す', () => {
      addCompletedTopic('topic-1');
      addCompletedTopic('topic-2');
      addCompletedTopic('topic-3');
      expect(shouldShowSummaryQuizPopup()).toBe(true);
    });

    it('ポップアップ表示済みの場合、falseを返す', () => {
      addCompletedTopic('topic-1');
      addCompletedTopic('topic-2');
      addCompletedTopic('topic-3');
      markPopupShown();
      expect(shouldShowSummaryQuizPopup()).toBe(false);
    });
  });

  describe('markPopupShown / resetPopupShown', () => {
    it('ポップアップ表示済みを記録し、リセットできる', () => {
      addCompletedTopic('topic-1');
      addCompletedTopic('topic-2');
      addCompletedTopic('topic-3');

      expect(shouldShowSummaryQuizPopup()).toBe(true);
      markPopupShown();
      expect(shouldShowSummaryQuizPopup()).toBe(false);
      resetPopupShown();
      expect(shouldShowSummaryQuizPopup()).toBe(true);
    });
  });

  describe('getSessionCompletedTopics', () => {
    it('空の場合、空配列を返す', () => {
      expect(getSessionCompletedTopics()).toEqual([]);
    });
  });
});

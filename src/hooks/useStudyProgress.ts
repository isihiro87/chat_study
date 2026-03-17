import { useState, useCallback, useMemo } from 'react';
import {
  loadProgress,
  saveProgress,
  getTopicProgress as getStoredTopicProgress,
  updateStreak,
  DEFAULT_TOPIC_PROGRESS,
} from '../utils/studyProgressStorage';
import { allTopics, getTopicsByEra } from '../data/subjects/registry';
import type { TopicMeta } from '../data/subjects/registry';
import type { StudyProgress, TopicProgress, Difficulty } from '../data/types';

export type CompletionStatus = 'none' | 'in-progress' | 'completed';

interface EraProgress {
  completed: number;
  inProgress: number;
  total: number;
}

interface ReviewRecommendation {
  topic: TopicMeta;
  quizBestScore: number;
  quizTotalQuestions: number;
}

export function useStudyProgress() {
  const [progress, setProgress] = useState<StudyProgress>(loadProgress);

  const save = useCallback((updated: StudyProgress) => {
    setProgress(updated);
    saveProgress(updated);
  }, []);

  // 進捗更新の共通処理（ストリーク + lastStudiedTopicId更新）
  const recordActivity = useCallback(
    (topicId: string, updater: (tp: TopicProgress) => TopicProgress): StudyProgress => {
      const current = loadProgress(); // 最新を読み直し
      const tp = getStoredTopicProgress(current, topicId);
      const updatedTp = updater(tp);
      const withTopic: StudyProgress = {
        ...current,
        topics: { ...current.topics, [topicId]: updatedTp },
        lastStudiedTopicId: topicId,
      };
      const withStreak = updateStreak(withTopic);
      save(withStreak);
      return withStreak;
    },
    [save],
  );

  const markChatRead = useCallback(
    (topicId: string) => {
      recordActivity(topicId, (tp) => ({
        ...tp,
        chatRead: true,
        lastStudiedAt: new Date().toISOString(),
      }));
    },
    [recordActivity],
  );

  const markFlashcardCompleted = useCallback(
    (topicId: string) => {
      recordActivity(topicId, (tp) => ({
        ...tp,
        flashcardCompleted: true,
        lastStudiedAt: new Date().toISOString(),
      }));
    },
    [recordActivity],
  );

  const markExampleCompleted = useCallback(
    (topicId: string) => {
      recordActivity(topicId, (tp) => ({
        ...tp,
        exampleCompleted: true,
        lastStudiedAt: new Date().toISOString(),
      }));
    },
    [recordActivity],
  );

  const updateQuizScore = useCallback(
    (topicId: string, score: number, total: number, difficulties?: Difficulty[]): { isNewBest: boolean } => {
      let isNewBest = false;
      recordActivity(topicId, (tp) => {
        const currentBestRate =
          tp.quizBestScore !== null && tp.quizTotalQuestions !== null
            ? tp.quizBestScore / tp.quizTotalQuestions
            : -1;
        const newRate = total > 0 ? score / total : 0;

        // 完了した難易度を累積的にマージ
        const prevDifficulties = tp.quizCompletedDifficulties ?? [];
        const mergedDifficulties = difficulties
          ? Array.from(new Set([...prevDifficulties, ...difficulties]))
          : prevDifficulties;

        if (newRate > currentBestRate) {
          isNewBest = true;
          return {
            ...tp,
            quizBestScore: score,
            quizTotalQuestions: total,
            quizCompletedDifficulties: mergedDifficulties.length > 0 ? mergedDifficulties : undefined,
            lastStudiedAt: new Date().toISOString(),
          };
        }
        return {
          ...tp,
          quizCompletedDifficulties: mergedDifficulties.length > 0 ? mergedDifficulties : undefined,
          lastStudiedAt: new Date().toISOString(),
        };
      });
      return { isNewBest };
    },
    [recordActivity],
  );

  const getTopicProgress = useCallback(
    (topicId: string): TopicProgress => {
      return progress.topics[topicId] ?? { ...DEFAULT_TOPIC_PROGRESS };
    },
    [progress],
  );

  const getCompletionStatus = useCallback(
    (topicId: string): CompletionStatus => {
      const tp = progress.topics[topicId];
      if (!tp) return 'none';

      const hasAnyProgress = tp.chatRead || tp.flashcardCompleted ||
                             tp.exampleCompleted || tp.quizBestScore !== null;
      if (!hasAnyProgress) return 'none';

      // 完了条件: チャット完了 AND クイズ(基礎+標準)完了
      const chatDone = tp.chatRead;

      // difficulty対応データ: basic と standard の両方が含まれているか
      const completedDiffs = tp.quizCompletedDifficulties ?? [];
      const basicStandardDone = completedDiffs.includes('basic') && completedDiffs.includes('standard');

      // 後方互換: difficulty未設定の既存データは quizBestScore !== null で完了扱い
      const legacyQuizDone = completedDiffs.length === 0 && tp.quizBestScore !== null;

      if (chatDone && (basicStandardDone || legacyQuizDone)) return 'completed';
      return 'in-progress';
    },
    [progress],
  );

  const isTopicStudied = useCallback(
    (topicId: string): boolean => {
      return getCompletionStatus(topicId) !== 'none';
    },
    [getCompletionStatus],
  );

  const getEraProgress = useCallback(
    (eraId: string): EraProgress => {
      const topics = getTopicsByEra(eraId);
      let completed = 0;
      let inProgress = 0;
      for (const t of topics) {
        const status = getCompletionStatus(t.id);
        if (status === 'completed') completed++;
        else if (status === 'in-progress') inProgress++;
      }
      return { completed, inProgress, total: topics.length };
    },
    [getCompletionStatus],
  );

  const streak = progress.streak.currentStreak;

  const totalStudiedTopics = useMemo(() => {
    return Object.values(progress.topics).filter(
      (tp) => tp.chatRead || tp.flashcardCompleted || tp.exampleCompleted || tp.quizBestScore !== null,
    ).length;
  }, [progress]);

  const totalTopics = allTopics.length;

  const lastStudiedTopicId = progress.lastStudiedTopicId;

  const getNextTopicToStudy = useCallback((): TopicMeta | null => {
    for (const topic of allTopics) {
      const tp = progress.topics[topic.id];
      if (!tp || (!tp.chatRead && !tp.flashcardCompleted && !tp.exampleCompleted && tp.quizBestScore === null)) {
        return topic;
      }
    }
    return null;
  }, [progress]);

  const getReviewRecommendations = useCallback(
    (limit: number): ReviewRecommendation[] => {
      const candidates: ReviewRecommendation[] = [];
      for (const [topicId, tp] of Object.entries(progress.topics)) {
        if (tp.quizBestScore !== null && tp.quizTotalQuestions !== null && tp.quizTotalQuestions > 0) {
          const rate = tp.quizBestScore / tp.quizTotalQuestions;
          if (rate < 1) {
            const topic = allTopics.find((t) => t.id === topicId);
            if (topic) {
              candidates.push({
                topic,
                quizBestScore: tp.quizBestScore,
                quizTotalQuestions: tp.quizTotalQuestions,
              });
            }
          }
        }
      }
      candidates.sort((a, b) => {
        const rateA = a.quizBestScore / a.quizTotalQuestions;
        const rateB = b.quizBestScore / b.quizTotalQuestions;
        return rateA - rateB;
      });
      return candidates.slice(0, limit);
    },
    [progress],
  );

  const bookmarkedTopicIds = useMemo(() => progress.bookmarkedTopicIds ?? [], [progress]);

  const toggleBookmark = useCallback(
    (topicId: string) => {
      const current = loadProgress();
      const ids = current.bookmarkedTopicIds ?? [];
      const updated = ids.includes(topicId)
        ? ids.filter((id) => id !== topicId)
        : [...ids, topicId];
      save({ ...current, bookmarkedTopicIds: updated });
    },
    [save],
  );

  const isBookmarked = useCallback(
    (topicId: string): boolean => bookmarkedTopicIds.includes(topicId),
    [bookmarkedTopicIds],
  );

  return {
    markChatRead,
    markFlashcardCompleted,
    markExampleCompleted,
    updateQuizScore,
    getTopicProgress,
    getCompletionStatus,
    getEraProgress,
    isTopicStudied,
    streak,
    totalStudiedTopics,
    totalTopics,
    lastStudiedTopicId,
    getNextTopicToStudy,
    getReviewRecommendations,
    bookmarkedTopicIds,
    toggleBookmark,
    isBookmarked,
  };
}

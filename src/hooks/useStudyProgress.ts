import { useState, useCallback, useMemo } from 'react';
import {
  loadProgress,
  saveProgress,
  getTopicProgress as getStoredTopicProgress,
  updateStreak,
  DEFAULT_TOPIC_PROGRESS,
} from '../utils/studyProgressStorage';
import { allTopics, getTopicsByEra } from '../data/subjects/history/eras';
import type { StudyProgress, TopicProgress, Topic } from '../data/types';

interface EraProgress {
  completed: number;
  total: number;
}

interface ReviewRecommendation {
  topic: Topic;
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

  const updateQuizScore = useCallback(
    (topicId: string, score: number, total: number): { isNewBest: boolean } => {
      let isNewBest = false;
      recordActivity(topicId, (tp) => {
        const currentBestRate =
          tp.quizBestScore !== null && tp.quizTotalQuestions !== null
            ? tp.quizBestScore / tp.quizTotalQuestions
            : -1;
        const newRate = total > 0 ? score / total : 0;
        if (newRate > currentBestRate) {
          isNewBest = true;
          return {
            ...tp,
            quizBestScore: score,
            quizTotalQuestions: total,
            lastStudiedAt: new Date().toISOString(),
          };
        }
        return { ...tp, lastStudiedAt: new Date().toISOString() };
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

  const isTopicStudied = useCallback(
    (topicId: string): boolean => {
      const tp = progress.topics[topicId];
      if (!tp) return false;
      return tp.chatRead || tp.flashcardCompleted || tp.quizBestScore !== null;
    },
    [progress],
  );

  const getEraProgress = useCallback(
    (eraId: string): EraProgress => {
      const topics = getTopicsByEra(eraId);
      const completed = topics.filter((t) => {
        const tp = progress.topics[t.id];
        return tp && (tp.chatRead || tp.flashcardCompleted || tp.quizBestScore !== null);
      }).length;
      return { completed, total: topics.length };
    },
    [progress],
  );

  const streak = progress.streak.currentStreak;

  const totalStudiedTopics = useMemo(() => {
    return Object.values(progress.topics).filter(
      (tp) => tp.chatRead || tp.flashcardCompleted || tp.quizBestScore !== null,
    ).length;
  }, [progress]);

  const totalTopics = allTopics.length;

  const lastStudiedTopicId = progress.lastStudiedTopicId;

  const getNextTopicToStudy = useCallback((): Topic | null => {
    for (const topic of allTopics) {
      const tp = progress.topics[topic.id];
      if (!tp || (!tp.chatRead && !tp.flashcardCompleted && tp.quizBestScore === null)) {
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

  return {
    markChatRead,
    markFlashcardCompleted,
    updateQuizScore,
    getTopicProgress,
    getEraProgress,
    isTopicStudied,
    streak,
    totalStudiedTopics,
    totalTopics,
    lastStudiedTopicId,
    getNextTopicToStudy,
    getReviewRecommendations,
  };
}

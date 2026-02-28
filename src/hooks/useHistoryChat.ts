import { useState, useCallback, useMemo } from 'react';
import type { HistoryChat, ChatContent, QuizContent } from '../data/history-chat/types';

interface UseHistoryChatReturn {
  // 表示状態
  shownIndex: number;
  visibleContent: ChatContent[];
  totalContent: number;
  isComplete: boolean;

  // タップヒント状態
  hasTapped: boolean;

  // クイズ状態
  isWaitingForQuiz: boolean;
  currentQuizIndex: number | null;
  quizAnswers: Record<number, number | null>; // contentIndex -> 選択した選択肢のindex
  quizResults: Record<number, boolean>; // contentIndex -> 正解/不正解

  // スコア
  score: number;
  totalQuizzes: number;

  // アクション
  next: () => void;
  selectAnswer: (optionIndex: number) => void;
  reset: () => void;
}

// 初回表示時に日付・ナレーションを自動表示するため、最初のメッセージ/クイズの位置を算出
function getInitialShownIndex(content: ChatContent[]): number {
  for (let i = 0; i < content.length; i++) {
    if (content[i].type === 'message' || content[i].type === 'quiz') {
      return i;
    }
  }
  return 1;
}

export function useHistoryChat(chat: HistoryChat): UseHistoryChatReturn {
  // 表示済み要素数（日付+最初のナレーションまで自動表示）
  const [shownIndex, setShownIndex] = useState(() => getInitialShownIndex(chat.content));

  // タップ回数（3回タップするまでヒントを表示し続ける）
  const [tapCount, setTapCount] = useState(0);

  // クイズ回答状態
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({});
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  const content = chat.content;
  const totalContent = content.length;

  // 現在表示中のコンテンツ
  const visibleContent = useMemo(() => {
    return content.slice(0, shownIndex);
  }, [content, shownIndex]);

  // 全コンテンツを表示済みか
  const isComplete = shownIndex >= totalContent;

  // クイズの総数
  const totalQuizzes = useMemo(() => {
    return content.filter((c) => c.type === 'quiz').length;
  }, [content]);

  // 現在のスコア
  const score = useMemo(() => {
    return Object.values(quizResults).filter((r) => r === true).length;
  }, [quizResults]);

  // 現在表示中のクイズ（未回答のもの）を探す
  const currentQuizIndex = useMemo(() => {
    for (let i = 0; i < shownIndex && i < content.length; i++) {
      if (content[i].type === 'quiz' && quizAnswers[i] === undefined) {
        return i;
      }
    }
    return null;
  }, [content, shownIndex, quizAnswers]);

  // クイズ回答待ち状態か
  const isWaitingForQuiz = currentQuizIndex !== null;

  // 次の要素を表示
  const next = useCallback(() => {
    // クイズ回答待ち中は進めない
    if (isWaitingForQuiz) {
      return;
    }

    // タップ回数を更新（3回まで）
    setTapCount((prev) => Math.min(prev + 1, 3));

    if (shownIndex < totalContent) {
      setShownIndex((prev) => prev + 1);
    }
  }, [isWaitingForQuiz, shownIndex, totalContent]);

  // クイズに回答
  const selectAnswer = useCallback(
    (optionIndex: number) => {
      if (currentQuizIndex === null) return;

      const quiz = content[currentQuizIndex] as QuizContent;
      const isCorrect = quiz.options[optionIndex]?.correct === true;

      setQuizAnswers((prev) => ({
        ...prev,
        [currentQuizIndex]: optionIndex,
      }));

      setQuizResults((prev) => ({
        ...prev,
        [currentQuizIndex]: isCorrect,
      }));
    },
    [content, currentQuizIndex]
  );

  // リセット
  const reset = useCallback(() => {
    setShownIndex(1);
    setQuizAnswers({});
    setQuizResults({});
  }, []);

  return {
    shownIndex,
    visibleContent,
    totalContent,
    isComplete,
    hasTapped: tapCount >= 3,
    isWaitingForQuiz,
    currentQuizIndex,
    quizAnswers,
    quizResults,
    score,
    totalQuizzes,
    next,
    selectAnswer,
    reset,
  };
}

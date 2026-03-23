import { useState, useCallback, useMemo } from 'react';
import type { HistoryChat, ChatContent, QuizContent, WhiteboardContent } from '../data/history-chat/types';

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

  // ホワイトボード状態
  isWaitingForWhiteboard: boolean;
  getWhiteboardRevealedSteps: (contentIndex: number) => number;

  // アクション
  next: () => void;
  selectAnswer: (optionIndex: number) => void;
  stepBack: () => void;
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

export interface ChatSavedState {
  shownIndex: number;
  quizAnswers: Record<number, number | null>;
  quizResults: Record<number, boolean>;
}

export function useHistoryChat(chat: HistoryChat, savedState?: ChatSavedState): UseHistoryChatReturn {
  // 表示済み要素数（日付+最初のナレーションまで自動表示）
  const [shownIndex, setShownIndex] = useState(
    savedState?.shownIndex ?? getInitialShownIndex(chat.content),
  );

  // タップ回数（3回タップするまでヒントを表示し続ける）
  const [tapCount, setTapCount] = useState(savedState ? 3 : 0);

  // クイズ回答状態
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>(
    savedState?.quizAnswers ?? {},
  );
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>(
    savedState?.quizResults ?? {},
  );

  // ホワイトボードステップ進行状態（contentIndex → 表示済みステップ数）
  const [whiteboardProgress, setWhiteboardProgress] = useState<Record<number, number>>({});

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

  // ホワイトボード展開中かどうか（最後の表示コンテンツがwhiteboardで未完了の場合）
  const isWaitingForWhiteboard = useMemo(() => {
    if (shownIndex === 0) return false;
    const lastIndex = shownIndex - 1;
    const lastContent = content[lastIndex];
    if (lastContent?.type !== 'whiteboard') return false;
    const revealed = whiteboardProgress[lastIndex] ?? 0;
    const totalSteps = (lastContent as WhiteboardContent).steps.length;
    return revealed < totalSteps;
  }, [content, shownIndex, whiteboardProgress]);

  // 次の要素を表示
  const next = useCallback(() => {
    // クイズ回答待ち中は進めない
    if (isWaitingForQuiz) {
      return;
    }

    // タップ回数を更新（3回まで）
    setTapCount((prev) => Math.min(prev + 1, 3));

    // ホワイトボード展開中はステップを進める
    if (isWaitingForWhiteboard) {
      const lastIndex = shownIndex - 1;
      setWhiteboardProgress((prev) => ({
        ...prev,
        [lastIndex]: (prev[lastIndex] ?? 0) + 1,
      }));
      return;
    }

    if (shownIndex < totalContent) {
      // 次のコンテンツがwhiteboardの場合、進行と同時にステップ1を初期化
      const nextContent = content[shownIndex];
      if (nextContent?.type === 'whiteboard') {
        setWhiteboardProgress((prev) => ({
          ...prev,
          [shownIndex]: 1,
        }));
      }
      setShownIndex((prev) => prev + 1);
    }
  }, [isWaitingForQuiz, isWaitingForWhiteboard, shownIndex, totalContent, content]);

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

  // ホワイトボードの表示済みステップ数を取得
  const getWhiteboardRevealedSteps = useCallback(
    (contentIndex: number) => whiteboardProgress[contentIndex] ?? 0,
    [whiteboardProgress]
  );

  // ホワイトボードを1ステップ戻す
  const stepBack = useCallback(() => {
    if (shownIndex === 0) return;
    const lastIndex = shownIndex - 1;
    const lastContent = content[lastIndex];
    if (lastContent?.type !== 'whiteboard') return;
    const revealed = whiteboardProgress[lastIndex] ?? 0;
    if (revealed > 1) {
      setWhiteboardProgress((prev) => ({
        ...prev,
        [lastIndex]: prev[lastIndex] - 1,
      }));
    }
  }, [content, shownIndex, whiteboardProgress]);

  // リセット
  const reset = useCallback(() => {
    setShownIndex(1);
    setQuizAnswers({});
    setQuizResults({});
    setWhiteboardProgress({});
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
    isWaitingForWhiteboard,
    getWhiteboardRevealedSteps,
    next,
    selectAnswer,
    stepBack,
    reset,
  };
}

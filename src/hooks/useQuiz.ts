import { useState, useCallback, useMemo } from 'react';
import type { Quiz, QuizQuestion } from '../data/types';

interface UseQuizReturn {
  isStarted: boolean;
  currentIndex: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  isComplete: boolean;
  score: number;
  answers: (number | null)[];
  start: () => void;
  selectAnswer: (index: number) => void;
  submitReorderAnswer: (order: number[]) => void;
  reorderAnswer: number[] | null;
  nextQuestion: () => void;
  reset: () => void;
  wrongAnswers: number[];
  reviewWrongAnswers: number[];
  isReviewMode: boolean;
  startReview: () => void;
  totalQuestions: number;
  originalTotal: number;
  currentQuestion: QuizQuestion | undefined;
  reviewScore: number;
}

export interface QuizSavedState {
  isStarted: boolean;
  currentIndex: number;
  answers: (number | null)[];
  score: number;
}

export function useQuiz(quiz: Quiz, savedState?: QuizSavedState): UseQuizReturn {
  const [isStarted, setIsStarted] = useState(savedState?.isStarted ?? false);
  const [currentIndex, setCurrentIndex] = useState(savedState?.currentIndex ?? 0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    savedState?.answers ?? new Array(quiz.questions.length).fill(null),
  );
  const [score, setScore] = useState(savedState?.score ?? 0);

  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewQuestionIndices, setReviewQuestionIndices] = useState<number[]>([]);
  const [reviewScore, setReviewScore] = useState(0);
  const [reorderAnswer, setReorderAnswer] = useState<number[] | null>(null);
  const [reviewAnswers, setReviewAnswers] = useState<(boolean | null)[]>([]);

  const wrongAnswers = useMemo(() => {
    const wrong: number[] = [];
    answers.forEach((answer, index) => {
      if (answer === null) return;
      const question = quiz.questions[index];
      const isReorder = question.type === 'reorder';
      if (isReorder) {
        if (answer !== 0) wrong.push(index);
      } else {
        if (answer !== question.correctIndex) wrong.push(index);
      }
    });
    return wrong;
  }, [answers, quiz.questions]);

  const reviewWrongAnswers = useMemo(() => {
    if (!isReviewMode) return [];
    const wrong: number[] = [];
    reviewAnswers.forEach((correct, i) => {
      if (correct === false) {
        wrong.push(reviewQuestionIndices[i]);
      }
    });
    return wrong;
  }, [isReviewMode, reviewAnswers, reviewQuestionIndices]);

  const totalQuestions = isReviewMode
    ? reviewQuestionIndices.length
    : quiz.questions.length;

  const originalTotal = quiz.questions.length;

  const currentQuestion = useMemo(() => {
    if (isReviewMode) {
      const originalIndex = reviewQuestionIndices[currentIndex];
      return quiz.questions[originalIndex];
    }
    return quiz.questions[currentIndex];
  }, [isReviewMode, reviewQuestionIndices, currentIndex, quiz.questions]);

  const selectAnswer = useCallback(
    (index: number) => {
      if (isAnswered) return;

      setSelectedAnswer(index);
      setIsAnswered(true);

      if (isReviewMode) {
        const originalIndex = reviewQuestionIndices[currentIndex];
        const isCorrect = index === quiz.questions[originalIndex].correctIndex;
        if (isCorrect) {
          setReviewScore((prev) => prev + 1);
        }
        setReviewAnswers((prev) => {
          const next = [...prev];
          next[currentIndex] = isCorrect;
          return next;
        });
      } else {
        const newAnswers = [...answers];
        newAnswers[currentIndex] = index;
        setAnswers(newAnswers);

        const isCorrect = index === quiz.questions[currentIndex].correctIndex;
        if (isCorrect) {
          setScore((prev) => prev + 1);
        }
      }
    },
    [isAnswered, answers, currentIndex, quiz.questions, isReviewMode, reviewQuestionIndices],
  );

  const submitReorderAnswer = useCallback(
    (order: number[]) => {
      if (isAnswered) return;

      setReorderAnswer(order);
      setIsAnswered(true);

      const question = isReviewMode
        ? quiz.questions[reviewQuestionIndices[currentIndex]]
        : quiz.questions[currentIndex];

      const isCorrect =
        question.correctOrder != null &&
        order.length === question.correctOrder.length &&
        order.every((val, idx) => val === question.correctOrder![idx]);

      if (isReviewMode) {
        if (isCorrect) {
          setReviewScore((prev) => prev + 1);
        }
        setReviewAnswers((prev) => {
          const next = [...prev];
          next[currentIndex] = isCorrect;
          return next;
        });
      } else {
        const newAnswers = [...answers];
        newAnswers[currentIndex] = isCorrect ? 0 : -1;
        setAnswers(newAnswers);

        if (isCorrect) {
          setScore((prev) => prev + 1);
        }
      }

      setSelectedAnswer(isCorrect ? 0 : -1);
    },
    [isAnswered, answers, currentIndex, quiz.questions, isReviewMode, reviewQuestionIndices],
  );

  const nextQuestion = useCallback(() => {
    const total = isReviewMode ? reviewQuestionIndices.length : quiz.questions.length;

    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setReorderAnswer(null);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, quiz.questions.length, isReviewMode, reviewQuestionIndices.length]);

  const start = useCallback(() => {
    setIsStarted(true);
  }, []);

  const reset = useCallback(() => {
    setIsStarted(false);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsComplete(false);
    setAnswers(new Array(quiz.questions.length).fill(null));
    setScore(0);
    setIsReviewMode(false);
    setReviewQuestionIndices([]);
    setReviewScore(0);
    setReorderAnswer(null);
    setReviewAnswers([]);
  }, [quiz.questions.length]);

  const startReview = useCallback(() => {
    const indices = isReviewMode ? reviewWrongAnswers : wrongAnswers;
    if (indices.length === 0) return;

    setIsStarted(true);
    setIsReviewMode(true);
    setReviewQuestionIndices(indices);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsComplete(false);
    setReviewScore(0);
    setReorderAnswer(null);
    setReviewAnswers([]);
  }, [wrongAnswers, isReviewMode, reviewWrongAnswers]);

  return {
    isStarted,
    currentIndex,
    selectedAnswer,
    isAnswered,
    isComplete,
    score,
    answers,
    start,
    selectAnswer,
    submitReorderAnswer,
    reorderAnswer,
    nextQuestion,
    reset,
    wrongAnswers,
    reviewWrongAnswers,
    isReviewMode,
    startReview,
    totalQuestions,
    originalTotal,
    currentQuestion,
    reviewScore,
  };
}

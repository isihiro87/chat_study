import { useState, useCallback, useMemo } from 'react';
import type { Quiz } from '../data/types';

import type { QuizQuestion } from '../data/types';

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
  nextQuestion: () => void;
  reset: () => void;
  wrongAnswers: number[];
  isReviewMode: boolean;
  startReview: () => void;
  totalQuestions: number;
  originalTotal: number;
  currentQuestion: QuizQuestion | undefined;
  reviewScore: number;
}

export function useQuiz(quiz: Quiz): UseQuizReturn {
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quiz.questions.length).fill(null)
  );
  const [score, setScore] = useState(0);

  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewQuestionIndices, setReviewQuestionIndices] = useState<number[]>([]);
  const [reviewScore, setReviewScore] = useState(0);

  const wrongAnswers = useMemo(() => {
    const wrong: number[] = [];
    answers.forEach((answer, index) => {
      if (answer !== null && answer !== quiz.questions[index].correctIndex) {
        wrong.push(index);
      }
    });
    return wrong;
  }, [answers, quiz.questions]);

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
    [isAnswered, answers, currentIndex, quiz.questions, isReviewMode, reviewQuestionIndices]
  );

  const nextQuestion = useCallback(() => {
    const total = isReviewMode ? reviewQuestionIndices.length : quiz.questions.length;

    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
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
  }, [quiz.questions.length]);

  const startReview = useCallback(() => {
    if (wrongAnswers.length === 0) return;

    setIsStarted(true);
    setIsReviewMode(true);
    setReviewQuestionIndices(wrongAnswers);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsComplete(false);
    setReviewScore(0);
  }, [wrongAnswers]);

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
    nextQuestion,
    reset,
    wrongAnswers,
    isReviewMode,
    startReview,
    totalQuestions,
    originalTotal,
    currentQuestion,
    reviewScore,
  };
}

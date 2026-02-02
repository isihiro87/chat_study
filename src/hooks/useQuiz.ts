import { useState, useCallback } from 'react';
import type { Quiz } from '../data/types';

interface UseQuizReturn {
  currentIndex: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  isComplete: boolean;
  score: number;
  answers: (number | null)[];
  selectAnswer: (index: number) => void;
  nextQuestion: () => void;
  reset: () => void;
}

export function useQuiz(quiz: Quiz): UseQuizReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quiz.questions.length).fill(null)
  );
  const [score, setScore] = useState(0);

  const selectAnswer = useCallback(
    (index: number) => {
      if (isAnswered) return;

      setSelectedAnswer(index);
      setIsAnswered(true);

      const newAnswers = [...answers];
      newAnswers[currentIndex] = index;
      setAnswers(newAnswers);

      const isCorrect = index === quiz.questions[currentIndex].correctIndex;
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
    },
    [isAnswered, answers, currentIndex, quiz.questions]
  );

  const nextQuestion = useCallback(() => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, quiz.questions.length]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsComplete(false);
    setAnswers(new Array(quiz.questions.length).fill(null));
    setScore(0);
  }, [quiz.questions.length]);

  return {
    currentIndex,
    selectedAnswer,
    isAnswered,
    isComplete,
    score,
    answers,
    selectAnswer,
    nextQuestion,
    reset,
  };
}

import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useQuiz } from '../../../src/hooks/useQuiz';
import type { Quiz } from '../../../src/data/types';

const mockQuiz: Quiz = {
  questions: [
    {
      id: 'q1',
      question: 'Question 1',
      type: 'choice',
      options: ['A', 'B', 'C', 'D'],
      correctIndex: 0,
      explanation: 'Explanation 1',
    },
    {
      id: 'q2',
      question: 'Question 2',
      type: 'choice',
      options: ['A', 'B', 'C', 'D'],
      correctIndex: 1,
      explanation: 'Explanation 2',
    },
    {
      id: 'q3',
      question: 'Question 3',
      type: 'choice',
      options: ['A', 'B', 'C', 'D'],
      correctIndex: 2,
      explanation: 'Explanation 3',
    },
  ],
};

describe('useQuiz', () => {
  it('should have correct initial state', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    expect(result.current.isStarted).toBe(false);
    expect(result.current.currentIndex).toBe(0);
    expect(result.current.selectedAnswer).toBeNull();
    expect(result.current.isAnswered).toBe(false);
    expect(result.current.isComplete).toBe(false);
    expect(result.current.score).toBe(0);
    expect(result.current.answers).toEqual([null, null, null]);
    expect(result.current.isReviewMode).toBe(false);
    expect(result.current.totalQuestions).toBe(3);
    expect(result.current.originalTotal).toBe(3);
    expect(result.current.currentQuestion).toEqual(mockQuiz.questions[0]);
    expect(result.current.reviewScore).toBe(0);
    expect(result.current.wrongAnswers).toEqual([]);
    expect(result.current.reviewWrongAnswers).toEqual([]);
    expect(result.current.reorderAnswer).toBeNull();
  });

  it('should set isStarted to true when start() is called', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    act(() => {
      result.current.start();
    });

    expect(result.current.isStarted).toBe(true);
  });

  it('should increment score when selecting the correct answer', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    act(() => {
      result.current.start();
    });

    // Question 1: correctIndex is 0
    act(() => {
      result.current.selectAnswer(0);
    });

    expect(result.current.score).toBe(1);
    expect(result.current.isAnswered).toBe(true);
    expect(result.current.selectedAnswer).toBe(0);
    expect(result.current.answers[0]).toBe(0);
  });

  it('should not increment score when selecting a wrong answer', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    act(() => {
      result.current.start();
    });

    // Question 1: correctIndex is 0, select 2 (wrong)
    act(() => {
      result.current.selectAnswer(2);
    });

    expect(result.current.score).toBe(0);
    expect(result.current.isAnswered).toBe(true);
    expect(result.current.selectedAnswer).toBe(2);
    expect(result.current.answers[0]).toBe(2);
  });

  it('should advance to the next question when nextQuestion() is called', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    act(() => {
      result.current.start();
    });

    act(() => {
      result.current.selectAnswer(0);
    });

    act(() => {
      result.current.nextQuestion();
    });

    expect(result.current.currentIndex).toBe(1);
    expect(result.current.selectedAnswer).toBeNull();
    expect(result.current.isAnswered).toBe(false);
    expect(result.current.currentQuestion).toEqual(mockQuiz.questions[1]);
  });

  it('should set isComplete when all questions are answered', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    act(() => {
      result.current.start();
    });

    // Answer question 1 (correct)
    act(() => {
      result.current.selectAnswer(0);
    });
    act(() => {
      result.current.nextQuestion();
    });

    // Answer question 2 (correct)
    act(() => {
      result.current.selectAnswer(1);
    });
    act(() => {
      result.current.nextQuestion();
    });

    // Answer question 3 (correct)
    act(() => {
      result.current.selectAnswer(2);
    });
    act(() => {
      result.current.nextQuestion();
    });

    expect(result.current.isComplete).toBe(true);
    expect(result.current.score).toBe(3);
  });

  it('should compute wrongAnswers correctly', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    act(() => {
      result.current.start();
    });

    // Answer question 1 wrong (correctIndex: 0, select 3)
    act(() => {
      result.current.selectAnswer(3);
    });
    act(() => {
      result.current.nextQuestion();
    });

    // Answer question 2 correct (correctIndex: 1)
    act(() => {
      result.current.selectAnswer(1);
    });
    act(() => {
      result.current.nextQuestion();
    });

    // Answer question 3 wrong (correctIndex: 2, select 0)
    act(() => {
      result.current.selectAnswer(0);
    });
    act(() => {
      result.current.nextQuestion();
    });

    expect(result.current.wrongAnswers).toEqual([0, 2]);
    expect(result.current.score).toBe(1);
  });

  it('should return to initial state when reset() is called', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    // Go through some questions first
    act(() => {
      result.current.start();
    });
    act(() => {
      result.current.selectAnswer(0);
    });
    act(() => {
      result.current.nextQuestion();
    });
    act(() => {
      result.current.selectAnswer(1);
    });

    // Reset
    act(() => {
      result.current.reset();
    });

    expect(result.current.isStarted).toBe(false);
    expect(result.current.currentIndex).toBe(0);
    expect(result.current.selectedAnswer).toBeNull();
    expect(result.current.isAnswered).toBe(false);
    expect(result.current.isComplete).toBe(false);
    expect(result.current.score).toBe(0);
    expect(result.current.answers).toEqual([null, null, null]);
    expect(result.current.isReviewMode).toBe(false);
    expect(result.current.reviewScore).toBe(0);
    expect(result.current.reorderAnswer).toBeNull();
  });

  it('should enter review mode with wrong answers when startReview() is called', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    act(() => {
      result.current.start();
    });

    // Answer question 1 wrong (correctIndex: 0, select 1)
    act(() => {
      result.current.selectAnswer(1);
    });
    act(() => {
      result.current.nextQuestion();
    });

    // Answer question 2 correct (correctIndex: 1)
    act(() => {
      result.current.selectAnswer(1);
    });
    act(() => {
      result.current.nextQuestion();
    });

    // Answer question 3 wrong (correctIndex: 2, select 1)
    act(() => {
      result.current.selectAnswer(1);
    });
    act(() => {
      result.current.nextQuestion();
    });

    expect(result.current.isComplete).toBe(true);
    expect(result.current.wrongAnswers).toEqual([0, 2]);

    // Start review
    act(() => {
      result.current.startReview();
    });

    expect(result.current.isReviewMode).toBe(true);
    expect(result.current.isStarted).toBe(true);
    expect(result.current.currentIndex).toBe(0);
    expect(result.current.isComplete).toBe(false);
    expect(result.current.isAnswered).toBe(false);
    expect(result.current.totalQuestions).toBe(2);
    expect(result.current.currentQuestion).toEqual(mockQuiz.questions[0]);
    expect(result.current.reviewScore).toBe(0);
  });
});

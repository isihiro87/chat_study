import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFlashcard } from '../../../src/hooks/useFlashcard';
import type { Flashcard } from '../../../src/data/types';

const mockCards: Flashcard[] = [
  { id: 'card-1', front: 'Front 1', back: 'Back 1' },
  { id: 'card-2', front: 'Front 2', back: 'Back 2' },
  { id: 'card-3', front: 'Front 3', back: 'Back 3' },
];

describe('useFlashcard', () => {
  it('should have correct initial state', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    expect(result.current.currentIndex).toBe(0);
    expect(result.current.currentCard).toEqual(mockCards[0]);
    expect(result.current.isFlipped).toBe(false);
    expect(result.current.isComplete).toBe(false);
    expect(result.current.isReviewMode).toBe(false);
    expect(result.current.rememberedCount).toBe(0);
    expect(result.current.totalCards).toBe(3);
    expect(result.current.notRememberedCount).toBe(3);
  });

  it('should toggle isFlipped when flip() is called', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    act(() => {
      result.current.flip();
    });
    expect(result.current.isFlipped).toBe(true);

    act(() => {
      result.current.flip();
    });
    expect(result.current.isFlipped).toBe(false);
  });

  it('should advance currentIndex when next() is called', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    act(() => {
      result.current.next();
    });
    expect(result.current.currentIndex).toBe(1);
    expect(result.current.currentCard).toEqual(mockCards[1]);
  });

  it('should go back when prev() is called', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    act(() => {
      result.current.next();
    });
    expect(result.current.currentIndex).toBe(1);

    act(() => {
      result.current.prev();
    });
    expect(result.current.currentIndex).toBe(0);
    expect(result.current.currentCard).toEqual(mockCards[0]);
  });

  it('should not go below 0 when prev() is called at index 0', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    act(() => {
      result.current.prev();
    });
    expect(result.current.currentIndex).toBe(0);
  });

  it('should increment rememberedCount when markRemembered() is called', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    act(() => {
      result.current.markRemembered();
    });
    expect(result.current.rememberedCount).toBe(1);
    expect(result.current.notRememberedCount).toBe(2);
  });

  it('should add to review queue when markAgain() is called without changing notRememberedCount', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    const initialNotRemembered = result.current.notRememberedCount;

    act(() => {
      result.current.markAgain();
    });
    // notRememberedCount stays the same (card was never remembered)
    expect(result.current.notRememberedCount).toBe(initialNotRemembered);
    // reviewCount should increase since the card was added to the review queue
    expect(result.current.reviewCount).toBe(1);
  });

  it('should set isComplete when all cards are marked as remembered', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    // Mark card-1 as remembered and advance
    act(() => {
      result.current.markRemembered();
      result.current.next();
    });

    // Mark card-2 as remembered and advance
    act(() => {
      result.current.markRemembered();
      result.current.next();
    });

    // Mark card-3 as remembered and advance (triggers transition)
    act(() => {
      result.current.markRemembered();
      result.current.next();
    });

    expect(result.current.isComplete).toBe(true);
    expect(result.current.rememberedCount).toBe(3);
  });

  it('should return to initial state when reset() is called', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    // Modify state
    act(() => {
      result.current.markRemembered();
      result.current.next();
    });
    act(() => {
      result.current.flip();
    });

    expect(result.current.currentIndex).toBe(1);
    expect(result.current.isFlipped).toBe(true);
    expect(result.current.rememberedCount).toBe(1);

    act(() => {
      result.current.reset();
    });

    expect(result.current.currentIndex).toBe(0);
    expect(result.current.isFlipped).toBe(false);
    expect(result.current.isComplete).toBe(false);
    expect(result.current.isReviewMode).toBe(false);
    expect(result.current.rememberedCount).toBe(0);
    expect(result.current.notRememberedCount).toBe(3);
  });

  it('should mark remembered and advance when swipeRight() is called', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    act(() => {
      result.current.swipeRight();
    });

    expect(result.current.rememberedCount).toBe(1);
    expect(result.current.currentIndex).toBe(1);
    expect(result.current.currentCard).toEqual(mockCards[1]);
  });

  it('should mark again and advance when swipeLeft() is called', () => {
    const { result } = renderHook(() => useFlashcard(mockCards));

    act(() => {
      result.current.swipeLeft();
    });

    expect(result.current.reviewCount).toBe(1);
    expect(result.current.currentIndex).toBe(1);
    expect(result.current.currentCard).toEqual(mockCards[1]);
  });
});

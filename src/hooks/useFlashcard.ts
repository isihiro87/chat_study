import { useState, useCallback, useMemo } from 'react';
import type { Flashcard } from '../data/types';

interface UseFlashcardReturn {
  currentIndex: number;
  currentCard: Flashcard | null;
  isFlipped: boolean;
  isComplete: boolean;
  isReviewMode: boolean;
  rememberedCount: number;
  totalCards: number;
  reviewCount: number;
  notRememberedCount: number;
  flip: () => void;
  next: () => void;
  prev: () => void;
  markRemembered: () => void;
  markAgain: () => void;
  reset: () => void;
  resetWithReviewOnly: () => void;
  swipeLeft: () => void;
  swipeRight: () => void;
}

export function useFlashcard(cards: Flashcard[]): UseFlashcardReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [remembered, setRemembered] = useState<Set<string>>(new Set());
  const [reviewQueue, setReviewQueue] = useState<string[]>([]);
  const [pendingReview, setPendingReview] = useState<string[]>([]); // 復習モード中に「わからない」にしたカード
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // 現在のカードリスト（通常モード or 復習モード）
  const currentCards = useMemo(() => {
    if (isReviewMode) {
      return cards.filter((card) => reviewQueue.includes(card.id));
    }
    return cards;
  }, [cards, isReviewMode, reviewQueue]);

  const currentCard = currentCards[currentIndex] || null;

  const flip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const goToNext = useCallback(() => {
    setIsFlipped(false);
    if (currentIndex < currentCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // 現在のモードが終了
      if (isReviewMode) {
        // 復習モード終了 → pendingReviewがあれば次の復習サイクルへ
        if (pendingReview.length > 0) {
          setReviewQueue(pendingReview);
          setPendingReview([]);
          setCurrentIndex(0);
        } else {
          setIsComplete(true);
        }
      } else {
        // 通常モード終了 → 復習キューがあれば復習モードへ
        if (reviewQueue.length > 0) {
          setIsReviewMode(true);
          setCurrentIndex(0);
        } else {
          setIsComplete(true);
        }
      }
    }
  }, [currentIndex, currentCards.length, isReviewMode, reviewQueue.length, pendingReview]);

  const next = useCallback(() => {
    goToNext();
  }, [goToNext]);

  const prev = useCallback(() => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const markRemembered = useCallback(() => {
    if (!currentCard) return;
    const cardId = currentCard.id;
    setRemembered((prev) => new Set(prev).add(cardId));
    // 復習キューから削除
    setReviewQueue((prev) => prev.filter((id) => id !== cardId));
  }, [currentCard]);

  const markAgain = useCallback(() => {
    if (!currentCard) return;
    const cardId = currentCard.id;
    setRemembered((prev) => {
      const newSet = new Set(prev);
      newSet.delete(cardId);
      return newSet;
    });
    // 復習モード中は次の復習サイクル用のpendingReviewに追加
    // 通常モードはreviewQueueに追加
    if (isReviewMode) {
      setPendingReview((prev) => {
        if (prev.includes(cardId)) return prev;
        return [...prev, cardId];
      });
    } else {
      setReviewQueue((prev) => {
        if (prev.includes(cardId)) return prev;
        return [...prev, cardId];
      });
    }
  }, [currentCard, isReviewMode]);

  // 左スワイプ = わからない
  const swipeLeft = useCallback(() => {
    markAgain();
    goToNext();
  }, [markAgain, goToNext]);

  // 右スワイプ = わかった
  const swipeRight = useCallback(() => {
    markRemembered();
    goToNext();
  }, [markRemembered, goToNext]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setRemembered(new Set());
    setReviewQueue([]);
    setPendingReview([]);
    setIsReviewMode(false);
    setIsComplete(false);
  }, []);

  // 復習が必要なカードのみでリスタート
  const resetWithReviewOnly = useCallback(() => {
    if (reviewQueue.length === 0) {
      // 復習キューが空の場合は通常リセット
      reset();
      return;
    }
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsReviewMode(true);
    setPendingReview([]);
    setIsComplete(false);
    // reviewQueueはそのまま保持
  }, [reviewQueue.length, reset]);

  return {
    currentIndex,
    currentCard,
    isFlipped,
    isComplete,
    isReviewMode,
    rememberedCount: remembered.size,
    totalCards: cards.length,
    reviewCount: reviewQueue.length,
    notRememberedCount: cards.length - remembered.size,
    flip,
    next,
    prev,
    markRemembered,
    markAgain,
    reset,
    resetWithReviewOnly,
    swipeLeft,
    swipeRight,
  };
}

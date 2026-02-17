import { useState, useCallback, useMemo, useEffect } from 'react';
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
  const [pendingReview, setPendingReview] = useState<string[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  // 最後のカードを処理した後の遷移をuseEffectで行うためのフラグ
  const [needsTransition, setNeedsTransition] = useState(false);

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

  // 次のカードへ進む（最後のカードの場合は遷移フラグを立てる）
  const advanceToNext = useCallback(() => {
    setIsFlipped(false);
    if (currentIndex < currentCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // 最後のカード → 遷移フラグを立てる
      // 実際の遷移はuseEffectで行う（ステート更新後の正しい値で判断するため）
      setNeedsTransition(true);
    }
  }, [currentIndex, currentCards.length]);

  // 遷移ロジック（useEffectで実行し、ステートクロージャ問題を回避）
  useEffect(() => {
    if (!needsTransition) return;
    setNeedsTransition(false);

    if (isReviewMode) {
      if (pendingReview.length > 0) {
        setReviewQueue(pendingReview);
        setPendingReview([]);
        setCurrentIndex(0);
      } else {
        setIsComplete(true);
      }
    } else {
      if (reviewQueue.length > 0) {
        setIsReviewMode(true);
        setCurrentIndex(0);
      } else {
        setIsComplete(true);
      }
    }
  }, [needsTransition, isReviewMode, reviewQueue.length, pendingReview]);

  const next = useCallback(() => {
    advanceToNext();
  }, [advanceToNext]);

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
    // 復習モード中はreviewQueueを変更しない（配列縮みによるインデックス超過を防止）
    // 通常モードのみreviewQueueから削除
    if (!isReviewMode) {
      setReviewQueue((prev) => prev.filter((id) => id !== cardId));
    }
  }, [currentCard, isReviewMode]);

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
    advanceToNext();
  }, [markAgain, advanceToNext]);

  // 右スワイプ = わかった
  const swipeRight = useCallback(() => {
    markRemembered();
    advanceToNext();
  }, [markRemembered, advanceToNext]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setRemembered(new Set());
    setReviewQueue([]);
    setPendingReview([]);
    setIsReviewMode(false);
    setIsComplete(false);
    setNeedsTransition(false);
  }, []);

  // 復習が必要なカードのみでリスタート
  const resetWithReviewOnly = useCallback(() => {
    // 覚えたカードを除外した復習キューを作成
    const notRememberedIds = reviewQueue.filter((id) => !remembered.has(id));
    if (notRememberedIds.length === 0) {
      reset();
      return;
    }
    setReviewQueue(notRememberedIds);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsReviewMode(true);
    setPendingReview([]);
    setIsComplete(false);
    setNeedsTransition(false);
  }, [reviewQueue, remembered, reset]);

  return {
    currentIndex,
    currentCard,
    isFlipped,
    isComplete,
    isReviewMode,
    rememberedCount: remembered.size,
    totalCards: cards.length,
    reviewCount: isReviewMode
      ? currentCards.length
      : reviewQueue.length,
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

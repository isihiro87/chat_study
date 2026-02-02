import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import { RotateCcw, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useFlashcard } from '../../hooks/useFlashcard';
import type { Flashcard } from '../../data/types';

interface FlashcardDeckProps {
  cards: Flashcard[];
  onProgressChange?: (current: number, total: number) => void;
}

export function FlashcardDeck({ cards, onProgressChange }: FlashcardDeckProps) {
  const {
    currentIndex,
    currentCard,
    isFlipped,
    isComplete,
    isReviewMode,
    rememberedCount,
    totalCards,
    reviewCount,
    flip,
    prev,
    next,
    reset,
    swipeLeft,
    swipeRight,
  } = useFlashcard(cards);

  // ドラッグ位置を追跡
  const x = useMotionValue(0);
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);

  // ドラッグ量に応じて背景色を変化
  const cardBgColor = useTransform(
    x,
    [-150, 0, 150],
    ['rgb(254, 226, 226)', 'rgb(255, 255, 255)', 'rgb(220, 252, 231)']
  );
  const cardBorderColor = useTransform(
    x,
    [-150, -50, 0, 50, 150],
    ['rgb(239, 68, 68)', 'rgb(239, 68, 68)', 'rgb(229, 231, 235)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)']
  );

  // プログレス通知
  const total = isReviewMode ? reviewCount : totalCards;

  useEffect(() => {
    onProgressChange?.(currentIndex + 1, total || totalCards);
  }, [currentIndex, total, totalCards, onProgressChange]);

  const [showHint, setShowHint] = useState(false);

  // カード切り替え時にモーション値をリセット
  useEffect(() => {
    x.set(0);
    setDragDirection(null);
    setShowHint(false);
  }, [currentCard?.id, x]);

  if (isComplete) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-success/20"
        >
          <Check className="h-12 w-12 text-success" />
        </motion.div>
        <h2 className="mb-2 text-2xl font-bold text-gray-800">完了!</h2>
        <p className="mb-8 text-center text-lg text-gray-600">
          {rememberedCount} / {totalCards} 枚覚えたよ
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-white shadow-lg"
        >
          <RotateCcw className="h-6 w-6" />
          もう一度
        </button>
      </div>
    );
  }

  if (!currentCard) {
    return null;
  }

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -30) {
      setDragDirection('left');
    } else if (info.offset.x > 30) {
      setDragDirection('right');
    } else {
      setDragDirection(null);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold) {
      swipeLeft(); // わからない
    } else if (info.offset.x > threshold) {
      swipeRight(); // わかった
    }
    setDragDirection(null);
  };

  const currentCards = isReviewMode ? reviewCount : cards.length;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < currentCards - 1;

  return (
    <div className="flex h-full flex-col">
      {/* 復習モード表示 */}
      {isReviewMode && (
        <div className="flex-shrink-0 bg-secondary/10 px-4 py-2 text-center">
          <p className="text-sm font-medium text-secondary">
            復習モード: もう一度確認しよう!
          </p>
        </div>
      )}

      {/* カードエリア - フル表示 */}
      <div className="relative flex-1 overflow-hidden px-4 pb-10 pt-2">
        {/* スワイプ方向インジケーター */}
        <AnimatePresence>
          {dragDirection === 'left' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="pointer-events-none absolute left-8 top-1/2 z-20 -translate-y-1/2"
            >
              <div className="rounded-full bg-error px-4 py-2 text-sm font-bold text-white shadow-lg">
                もう一度
              </div>
            </motion.div>
          )}
          {dragDirection === 'right' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="pointer-events-none absolute right-8 top-1/2 z-20 -translate-y-1/2"
            >
              <div className="rounded-full bg-success px-4 py-2 text-sm font-bold text-white shadow-lg">
                覚えた!
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            className="h-full cursor-pointer"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onClick={flip}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative mx-auto h-full max-w-md"
              style={{ perspective: '1200px' }}
            >
              <motion.div
                className="relative h-full w-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
              >
                {/* 表面（問題） */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-4 p-8 shadow-xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    backgroundColor: cardBgColor,
                    borderColor: cardBorderColor,
                    transform: 'translateZ(1px)',
                    WebkitFontSmoothing: 'antialiased',
                  }}
                >
                  <p className="text-center text-3xl font-bold leading-relaxed text-gray-800">
                    {currentCard.front}
                  </p>
                  {currentCard.hint && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowHint(!showHint);
                      }}
                      className="mt-6 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-200"
                    >
                      {showHint ? currentCard.hint : 'ヒントを見る'}
                    </button>
                  )}
                  <p className="mt-8 text-sm text-gray-400">
                    タップしてめくる
                  </p>
                </motion.div>

                {/* 裏面（答え） */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-4 p-8 shadow-xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg) translateZ(1px)',
                    backgroundColor: cardBgColor,
                    borderColor: cardBorderColor,
                    WebkitFontSmoothing: 'antialiased',
                  }}
                >
                  <p className="text-center text-2xl font-bold leading-relaxed text-gray-800">
                    {currentCard.back}
                  </p>
                  <p className="mt-8 text-sm text-gray-400">
                    左右にスワイプ
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 前後ナビボタン */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          disabled={!canGoPrev}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-opacity disabled:opacity-0"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          disabled={!canGoNext}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-opacity disabled:opacity-0"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>

        {/* ドットナビゲーション */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {(isReviewMode ? Array(reviewCount).fill(0) : cards).map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-6 bg-primary'
                  : index < currentIndex
                    ? 'w-2 bg-primary/40'
                    : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

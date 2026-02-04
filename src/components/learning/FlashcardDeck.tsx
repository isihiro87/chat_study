import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import { RotateCcw, Check, ChevronLeft, ChevronRight, Layers, ArrowLeft, ArrowRight } from 'lucide-react';
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
    notRememberedCount,
    flip,
    prev,
    next,
    reset,
    resetWithReviewOnly,
    swipeLeft,
    swipeRight,
  } = useFlashcard(cards);

  // ドラッグ位置を追跡
  const x = useMotionValue(0);
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);

  // ドラッグ量に応じて背景色を変化（より明るいグラデーション）
  const cardBgColor = useTransform(
    x,
    [-150, 0, 150],
    ['rgb(254, 226, 226)', 'rgb(249, 250, 255)', 'rgb(220, 252, 231)']
  );
  const cardBorderColor = useTransform(
    x,
    [-150, -50, 0, 50, 150],
    ['rgb(239, 68, 68)', 'rgb(239, 68, 68)', 'rgb(199, 210, 254)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)']
  );

  // プログレス通知
  const total = isReviewMode ? reviewCount : totalCards;

  useEffect(() => {
    onProgressChange?.(currentIndex + 1, total || totalCards);
  }, [currentIndex, total, totalCards, onProgressChange]);

  const [showHint, setShowHint] = useState(false);
  // 初回説明表示（セッション中のみ有効、localStorageに保存しない）
  const [showIntro, setShowIntro] = useState(true);

  const dismissIntro = () => {
    setShowIntro(false);
  };

  // カード切り替え時にモーション値をリセット
  useEffect(() => {
    x.set(0);
    setDragDirection(null);
    setShowHint(false);
  }, [currentCard?.id, x]);

  if (isComplete) {
    const hasUnremembered = notRememberedCount > 0;

    return (
      <div className="flex h-full flex-col items-center justify-center px-6">
        {/* 完了アイコン */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg"
        >
          <Check className="h-12 w-12 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-2 text-3xl font-bold text-gray-800"
        >
          🎉 完了！
        </motion.h2>

        {/* 統計情報 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 w-full max-w-xs rounded-2xl bg-gray-50 p-5"
        >
          <p className="mb-3 text-center text-sm font-medium text-gray-500">📊 結果</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">総カード数</span>
              <span className="font-bold text-gray-800">{totalCards}枚</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">覚えた</span>
              <span className="font-bold text-green-600">✓ {rememberedCount}枚</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">復習が必要</span>
              <span className="font-bold text-orange-500">{notRememberedCount}枚</span>
            </div>
          </div>
        </motion.div>

        {/* アクションボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex w-full max-w-xs flex-col gap-3"
        >
          {hasUnremembered && (
            <button
              onClick={resetWithReviewOnly}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 px-6 py-4 text-base font-bold text-white shadow-lg transition-transform active:scale-95"
            >
              <RotateCcw className="h-5 w-5" />
              わからなかったカードを復習
            </button>
          )}
          <button
            onClick={reset}
            className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold shadow-lg transition-transform active:scale-95 ${
              hasUnremembered
                ? 'bg-white text-gray-700 border-2 border-gray-200'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
            }`}
          >
            <Layers className="h-5 w-5" />
            最初からやり直す
          </button>
        </motion.div>
      </div>
    );
  }

  if (!currentCard) {
    return null;
  }

  // 初回説明モーダル
  if (showIntro) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-white to-indigo-50 p-6 shadow-xl"
        >
          <div className="mb-4 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg">
              <Layers className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
            🎴 カード学習の使い方
          </h2>

          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
                <span className="text-xl">👆</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">タップでめくる</p>
                <p className="text-sm text-gray-500">カードをタップすると答えが見れるよ</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-orange-100">
                <ArrowLeft className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="font-bold text-gray-800">←左スワイプ = もう一度</p>
                <p className="text-sm text-gray-500">わからない時は左へ</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100">
                <ArrowRight className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-bold text-gray-800">右スワイプ→ = 覚えた！</p>
                <p className="text-sm text-gray-500">わかった時は右へ</p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-center text-sm text-gray-500">
            ✨ 全部覚えるまで繰り返し復習できるよ！
          </p>

          <button
            onClick={dismissIntro}
            className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-bold text-white shadow-lg transition-transform active:scale-95"
          >
            はじめる 🚀
          </button>
        </motion.div>
      </div>
    );
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

      {/* カードエリア - フル表示（TabBarとの重なりを防ぐためpb-20） */}
      <div className="relative flex-1 overflow-hidden px-4 pb-20 pt-2">
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
                {/* 表面（説明 - currentCard.back） */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-4 p-8 shadow-xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    backgroundColor: cardBgColor,
                    borderColor: cardBorderColor,
                  }}
                >
                  <p className="text-center text-xl font-bold leading-relaxed text-gray-800 sm:text-2xl">
                    {currentCard.back}
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
                    👆 タップして答えを見る
                  </p>
                </motion.div>

                {/* 裏面（用語 - currentCard.front） */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-4 p-8 shadow-xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundColor: cardBgColor,
                    borderColor: cardBorderColor,
                  }}
                >
                  <p className="text-center text-2xl font-bold leading-relaxed text-gray-800 sm:text-3xl">
                    {currentCard.front}
                  </p>
                  {/* 解説表示 */}
                  {currentCard.explanation && (
                    <p className="mt-4 text-center text-sm leading-relaxed text-gray-500">
                      {currentCard.explanation}
                    </p>
                  )}
                  {/* スワイプヒント */}
                  <div className="mt-8 flex w-full items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-1 text-red-500">
                      <ArrowLeft className="h-4 w-4" />
                      <span>もう一度</span>
                    </div>
                    <div className="h-4 w-px bg-gray-300" />
                    <div className="flex items-center gap-1 text-green-500">
                      <span>知ってた</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ナビゲーションエリア（下部に配置） */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-3">
          {/* ドットインジケーター */}
          <div className="flex gap-1.5">
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

          {/* 前後ナビボタン（下部、目立たないデザイン） */}
          <div className="flex items-center gap-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              disabled={!canGoPrev}
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs text-gray-400 transition-all hover:bg-gray-100 disabled:invisible"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>前へ</span>
            </button>
            <span className="text-xs text-gray-400">
              {currentIndex + 1} / {isReviewMode ? reviewCount : cards.length}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              disabled={!canGoNext}
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs text-gray-400 transition-all hover:bg-gray-100 disabled:invisible"
            >
              <span>次へ</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

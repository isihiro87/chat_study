import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import { RotateCcw, Check, ChevronLeft, ChevronRight, Layers, ArrowLeft, ArrowRight, AlertTriangle, MessageCircle } from 'lucide-react';
import { useFlashcard } from '../../hooks/useFlashcard';
import type { FlashcardSavedState } from '../../hooks/useFlashcard';
import type { Flashcard } from '../../data/types';
import { MathText } from '../common/MathText';
import { ProgressIndicator } from '../common/ProgressIndicator';
import { buildChatGPTUrl } from '../../utils/chatgptPrompt';
import FlashcardSetup from './FlashcardSetup';
import { saveResumeState, loadResumeState, clearResumeState } from '../../utils/resumeState';

interface FlashcardResumeState {
  activeCardIds: string[];
  batchSize?: number;
  flashcard: FlashcardSavedState;
}

interface ChatGPTInfo {
  subjectId: string;
  topicName: string;
  topicSubtitle: string;
}

interface FlashcardDeckProps {
  cards: Flashcard[];
  onProgressChange?: (current: number, total: number) => void;
  onComplete?: () => void;
  onCompleteWithDetails?: (data: { totalCards: number; firstRoundRemembered: number; firstRoundTotal: number; reviewRounds: number; cardResults: { cardId: string; rememberedCount: number; againCount: number }[] }) => void;
  chatGPTInfo?: ChatGPTInfo;
  subjectId?: string;
  topicId?: string;
  resumeMode?: boolean;
}

export function FlashcardDeck({ cards, onProgressChange, onComplete, onCompleteWithDetails, chatGPTInfo, subjectId, topicId, resumeMode }: FlashcardDeckProps) {
  // 復元状態の読み込み
  const [resumeData] = useState<FlashcardResumeState | null>(() => {
    if (resumeMode && topicId) {
      return loadResumeState<FlashcardResumeState>(topicId, 'flashcard');
    }
    return null;
  });

  // セットアップ状態
  const [setupComplete, setSetupComplete] = useState(resumeData !== null);
  const [activeCards, setActiveCards] = useState<Flashcard[]>(() => {
    if (resumeData) {
      return cards.filter((c) => resumeData.activeCardIds.includes(c.id));
    }
    return cards;
  });
  const [activeBatchSize, setActiveBatchSize] = useState<number | undefined>(
    resumeData?.batchSize,
  );

  const {
    currentIndex,
    currentCard,
    isFlipped,
    isComplete,
    isReviewMode,
    rememberedCount,
    totalCards,
    currentBatchTotal,
    reviewCount,
    notRememberedCount,
    sessionHistory,
    rememberedIds,
    reviewQueueIds,
    currentBatchIndex,
    totalBatches,
    isBatchComplete,
    nextBatch,
    flip,
    prev,
    next,
    reset,
    resetWithReviewOnly,
    swipeLeft,
    swipeRight,
  } = useFlashcard(activeCards, activeBatchSize, resumeData?.flashcard);

  // ドラッグ位置を追跡
  const x = useMotionValue(0);
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);

  // ドラッグ量に応じて背景色を変化（より明るいグラデーション）
  const cardBgColor = useTransform(
    x,
    [-150, 0, 150],
    ['rgb(254, 226, 226)', 'rgb(255, 251, 235)', 'rgb(220, 252, 231)']
  );
  const cardBorderColor = useTransform(
    x,
    [-150, -50, 0, 50, 150],
    ['rgb(239, 68, 68)', 'rgb(239, 68, 68)', 'rgb(252, 211, 77)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)']
  );

  // プログレス通知（スタート画面で指定した枚数を分母にする）
  const total = isReviewMode ? reviewCount : currentBatchTotal;

  useEffect(() => {
    onProgressChange?.(currentIndex + 1, total || currentBatchTotal);
  }, [currentIndex, total, currentBatchTotal, onProgressChange]);

  // フラッシュカード完了時のコールバック（1回のみ発火）
  const completeCalled = useRef(false);
  useEffect(() => {
    if (isComplete && !completeCalled.current) {
      completeCalled.current = true;
      onComplete?.();
      onCompleteWithDetails?.({
        totalCards: cards.length,
        firstRoundRemembered: sessionHistory.firstRoundRemembered,
        firstRoundTotal: sessionHistory.firstRoundTotal,
        reviewRounds: sessionHistory.reviewRounds,
        cardResults: Array.from(sessionHistory.cardHistories.entries()).map(([cardId, h]) => ({
          cardId,
          rememberedCount: h.rememberedCount,
          againCount: h.againCount,
        })),
      });
      if (topicId) clearResumeState(topicId, 'flashcard');
    }
  }, [isComplete, onComplete, onCompleteWithDetails, topicId, cards.length, sessionHistory]);

  // 自動保存: カード振り分けごとにsessionStorageに保存
  useEffect(() => {
    if (!topicId || !setupComplete || isComplete) return;
    if (currentIndex === 0 && rememberedIds.size === 0) return;
    saveResumeState<FlashcardResumeState>(topicId, 'flashcard', {
      activeCardIds: activeCards.map((c) => c.id),
      batchSize: activeBatchSize,
      flashcard: {
        currentIndex,
        rememberedIds: [...rememberedIds],
        reviewQueueIds,
        isReviewMode,
        currentBatchIndex,
      },
    });
  }, [topicId, setupComplete, isComplete, currentIndex, rememberedIds, reviewQueueIds, isReviewMode, currentBatchIndex, activeCards, activeBatchSize]);

  const [showHint, setShowHint] = useState(false);
  // 初回説明表示（セッション中のみ有効、localStorageに保存しない）
  const [showIntro, setShowIntro] = useState(true);
  // スワイプヒントテキストの表示回数（3回まで表示）
  const swipeHintCountRef = useRef(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const dismissIntro = () => {
    setShowIntro(false);
  };

  // カード切り替え時にモーション値をリセット & スワイプヒントカウント更新
  useEffect(() => {
    x.set(0);
    setDragDirection(null);
    setShowHint(false);
    swipeHintCountRef.current += 1;
    if (swipeHintCountRef.current > 3) {
      setShowSwipeHint(false);
    }
  }, [currentCard?.id, x]);


  // 苦手カード（2回以上「もう一度」を選択したカード）を抽出
  const difficultCards = useMemo(() => {
    const result: { card: Flashcard; againCount: number }[] = [];
    sessionHistory.cardHistories.forEach((history, cardId) => {
      if (history.againCount >= 2) {
        const card = cards.find((c) => c.id === cardId);
        if (card) {
          result.push({ card, againCount: history.againCount });
        }
      }
    });
    // againCountが多い順にソート
    return result.sort((a, b) => b.againCount - a.againCount);
  }, [sessionHistory.cardHistories, cards]);

  // パフォーマンスに応じた評価メッセージ
  const getPerformanceMessage = () => {
    const { firstRoundRemembered, reviewRounds } = sessionHistory;
    const firstRoundRate = totalCards > 0 ? firstRoundRemembered / totalCards : 0;

    if (reviewRounds === 0) {
      // 復習なしで完了（一発で全問正解）
      return { emoji: '🏆', message: '一発で完璧！すごい！', color: 'text-yellow-500' };
    } else if (firstRoundRate >= 0.8) {
      return { emoji: '🌟', message: 'とてもよくできました！', color: 'text-green-500' };
    } else if (firstRoundRate >= 0.5) {
      return { emoji: '💪', message: '復習して覚えたね！', color: 'text-amber-500' };
    } else {
      return { emoji: '🎯', message: '最後まで頑張った！', color: 'text-amber-500' };
    }
  };

  if (isComplete) {
    const hasUnremembered = notRememberedCount > 0;
    const { firstRoundRemembered, reviewRounds } = sessionHistory;
    const performanceInfo = getPerformanceMessage();

    return (
      <div className="flex h-full flex-col items-center overflow-y-auto px-6 py-8">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 shadow-sm">
          <Check className="h-10 w-10 text-white" />
        </div>

        <h2 className="mb-1 text-2xl font-bold text-gray-800">
          🎉 完了！
        </h2>

        <p className={`mb-4 text-lg font-bold ${performanceInfo.color}`}>
          {performanceInfo.emoji} {performanceInfo.message}
        </p>

        {/* 学習過程の統計情報 */}
        <div className="mb-4 w-full max-w-xs rounded-2xl bg-gray-50 p-4">
          <p className="mb-3 text-center text-sm font-medium text-gray-500">📊 学習の過程</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">初回で正解</span>
              <span className="font-bold text-gray-800">
                {firstRoundRemembered}/{totalCards}枚
                {totalCards > 0 && (
                  <span className="ml-1 text-sm text-gray-500">
                    ({Math.round((firstRoundRemembered / totalCards) * 100)}%)
                  </span>
                )}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">復習回数</span>
              <span className="font-bold text-gray-800">
                {reviewRounds === 0 ? (
                  <span className="text-green-600">なし（一発！）</span>
                ) : (
                  `${reviewRounds}回`
                )}
              </span>
            </div>

            <div className="mt-2 border-t border-gray-200 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">総カード数</span>
                <span className="font-bold text-gray-800">{totalCards}枚</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">全て覚えた</span>
                <span className="font-bold text-green-600">✓ {rememberedCount}枚</span>
              </div>
            </div>
          </div>
        </div>

        {/* 苦手カードセクション */}
        {difficultCards.length > 0 && (
          <div className="mb-4 w-full max-w-xs rounded-2xl bg-amber-50 p-4">
            <div className="mb-3 flex items-center justify-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <p className="text-sm font-medium text-orange-600">苦手なカード</p>
            </div>
            <div className="space-y-2">
              {difficultCards.slice(0, 3).map(({ card, againCount }) => (
                <div
                  key={card.id}
                  className="flex items-center justify-between rounded-lg bg-white/80 px-3 py-2"
                >
                  <MathText text={card.front} className="truncate text-sm text-gray-700" />
                  <span className="ml-2 flex-shrink-0 text-xs text-orange-500">
                    {againCount}回復習
                  </span>
                </div>
              ))}
              {difficultCards.length > 3 && (
                <p className="text-center text-xs text-orange-400">
                  他{difficultCards.length - 3}枚も苦手かも
                </p>
              )}
            </div>
          </div>
        )}

        {/* アクションボタン */}
        <div className="flex w-full max-w-xs flex-col gap-3">
          {hasUnremembered && (
            <button
              onClick={resetWithReviewOnly}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-4 text-base font-bold text-white shadow-sm transition-transform active:scale-95"
            >
              <RotateCcw className="h-5 w-5" />
              わからなかったカードを復習
            </button>
          )}
          <button
            onClick={reset}
            className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold shadow-sm transition-transform active:scale-95 ${
              hasUnremembered
                ? 'bg-white text-gray-700 border-2 border-gray-200'
                : 'bg-amber-500 text-white'
            }`}
          >
            <Layers className="h-5 w-5" />
            最初からやり直す
          </button>
        </div>

        {/* ChatGPTでもっと深く知る */}
        {chatGPTInfo && (
          <div className="mt-4 w-full max-w-xs">
            <div className="rounded-xl bg-gray-50 p-4">
              <p
                className="mb-2 text-sm font-bold text-gray-700"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                🎓 AI先生ともっと深く学ぼう！
              </p>
              <p className="mb-3 text-sm text-gray-600">
                ChatGPTのAI先生と対話しながら、理解を深めよう！
              </p>
              <button
                onClick={() => {
                  const url = buildChatGPTUrl({
                    title: chatGPTInfo.topicName,
                    subtitle: chatGPTInfo.topicSubtitle,
                    points: [],
                    subjectId: chatGPTInfo.subjectId,
                  });
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-transform active:scale-95"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                <MessageCircle className="h-4 w-4" />
                ChatGPTでもっと深く知る
              </button>
              <p className="mt-2 text-center text-xs text-gray-500">
                💡 開いたら 送信ボタン を押すだけで会話スタート！
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (!setupComplete) {
    return (
      <FlashcardSetup
        cards={cards}
        subjectId={subjectId}
        onStart={(filtered, batchSize) => {
          setActiveCards(filtered);
          setActiveBatchSize(batchSize >= filtered.length ? undefined : batchSize);
          setSetupComplete(true);
        }}
      />
    );
  }

  // セット完了画面（次のセットへの遷移）
  if (isBatchComplete) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-6 pb-14">
        <div className="w-full max-w-sm rounded-2xl bg-emerald-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 shadow-sm">
              <Check className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="mb-2 text-center text-xl font-bold text-gray-800">
            セット {currentBatchIndex + 1}/{totalBatches} 完了！
          </h2>

          <p className="mb-6 text-center text-sm text-gray-500">
            次のカードに進もう
          </p>

          <button
            onClick={nextBatch}
            className="w-full rounded-full bg-amber-500 px-6 py-3 font-bold text-white shadow-sm transition-transform active:scale-95"
          >
            次の{Math.min(activeBatchSize ?? activeCards.length, activeCards.length - (currentBatchIndex + 1) * (activeBatchSize ?? activeCards.length))}枚へ進む
          </button>
        </div>
      </div>
    );
  }

  if (!currentCard) {
    return null;
  }

  // 初回説明モーダル
  if (showIntro) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-6 pb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm rounded-2xl bg-amber-50 p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 shadow-sm">
              <Layers className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
            🎴 カード学習の使い方
          </h2>

          {/* セット情報 */}
          {totalBatches > 1 && (
            <div className="mb-4 rounded-xl bg-white/80 p-3 text-center shadow-sm">
              <p className="text-sm font-medium text-amber-700">
                セット {currentBatchIndex + 1}/{totalBatches}
              </p>
            </div>
          )}

          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                <span className="text-xl">👆</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">タップでめくる</p>
                <p className="text-sm text-gray-500">カードをタップすると答えが見れるよ</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <ArrowLeft className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="font-bold text-gray-800">←左スワイプ = もう一度</p>
                <p className="text-sm text-gray-500">わからない時は左へ</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
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
            className="w-full rounded-full bg-amber-500 px-6 py-3 font-bold text-white shadow-sm transition-transform active:scale-95"
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

  const currentCards = isReviewMode ? reviewCount : currentBatchTotal;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < currentCards - 1;

  return (
    <div className="flex h-full flex-col pb-14">
      {/* 復習モード表示 */}
      {isReviewMode && (
        <div className="flex-shrink-0 bg-secondary/10 px-4 py-2 text-center">
          <p className="text-sm font-medium text-secondary">
            復習モード: もう一度確認しよう!
          </p>
        </div>
      )}

      {/* カードエリア */}
      <div className="relative flex flex-1 flex-col overflow-hidden px-4 pt-2">
        {/* スワイプ方向インジケーター */}
        <AnimatePresence>
          {dragDirection === 'left' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="pointer-events-none absolute left-8 top-1/2 z-20 -translate-y-1/2"
            >
              <div className="rounded-full bg-error px-4 py-2 text-sm font-bold text-white shadow-sm">
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
              <div className="rounded-full bg-success px-4 py-2 text-sm font-bold text-white shadow-sm">
                覚えた!
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* カード（flex-1で残りスペースを使い、min-h-0でオーバーフロー防止） */}
        <div className="flex-1 min-h-0" style={{ touchAction: 'none', overscrollBehavior: 'none' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            className="h-full cursor-pointer"
            style={{ x, touchAction: 'none' }}
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
            <div className="relative mx-auto h-full max-w-md">
              <motion.div
                className="flex h-full w-full flex-col rounded-3xl border-4 p-5 shadow-sm"
                style={{
                  backgroundColor: cardBgColor,
                  borderColor: cardBorderColor,
                }}
              >
                {/* コンテンツ中央配置エリア */}
                <div className="flex flex-1 flex-col items-center justify-center min-h-0">
                  {!isFlipped ? (
                    <>
                      {/* 表面（説明 - currentCard.back） */}
                      <MathText text={currentCard.back} as="p" className="whitespace-pre-line text-center text-lg font-bold leading-relaxed text-gray-800 sm:text-xl" />
                      {currentCard.hint && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowHint(!showHint);
                          }}
                          className="mt-3 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-200"
                        >
                          {showHint ? currentCard.hint : 'ヒントを見る'}
                        </button>
                      )}
                    </>
                  ) : (
                    <>
                      {/* 裏面（用語 - currentCard.front） */}
                      <MathText text={currentCard.front} as="p" className="whitespace-pre-line text-center text-lg font-bold leading-relaxed text-gray-800 sm:text-xl" />
                      {/* 解説表示 */}
                      {currentCard.explanation && (
                        <MathText text={currentCard.explanation} as="p" className="mt-3 whitespace-pre-line text-center text-sm leading-relaxed text-gray-500" />
                      )}
                    </>
                  )}
                </div>
                {/* カード内下部エリア（表裏で常に同じ高さを確保） */}
                <div className="flex flex-shrink-0 flex-col items-center gap-1.5 pt-3">
                  {!isFlipped ? (
                    <p className="py-2.5 text-sm text-gray-400">
                      👆 タップして答えを見る
                    </p>
                  ) : (
                    <>
                      <div className="flex items-center justify-center gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            swipeLeft();
                          }}
                          className="flex items-center gap-2 rounded-full bg-red-400 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform active:scale-95"
                        >
                          <RotateCcw className="h-4 w-4" />
                          後で復習
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            swipeRight();
                          }}
                          className="flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform active:scale-95"
                        >
                          <Check className="h-4 w-4" />
                          わかった
                        </button>
                      </div>
                      {showSwipeHint && (
                        <p className="text-xs text-gray-400">
                          ← スワイプでもOK →
                        </p>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>

        {/* ナビゲーションエリア */}
        <div className="flex flex-shrink-0 flex-col items-center gap-2 py-2">
          {/* プログレスインジケーター */}
          <ProgressIndicator
            current={currentIndex}
            total={isReviewMode ? reviewCount : currentBatchTotal}
            variant={isReviewMode ? 'review' : 'default'}
            showLabel={false}
          />

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
            <span className="w-12 text-center text-xs text-gray-400">
              {currentIndex + 1}/{isReviewMode ? reviewCount : currentBatchTotal}
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

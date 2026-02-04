import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Trophy, RefreshCw } from 'lucide-react';
import { useQuiz } from '../../hooks/useQuiz';
import type { Quiz } from '../../data/types';

interface QuizViewProps {
  quiz: Quiz;
}

function ProgressDots({
  current,
  total,
  isReviewMode,
}: {
  current: number;
  total: number;
  isReviewMode: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <motion.div
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i < current
                ? isReviewMode
                  ? 'bg-amber-500'
                  : 'bg-gray-800'
                : i === current
                  ? isReviewMode
                    ? 'bg-amber-300'
                    : 'bg-gray-400'
                  : 'bg-gray-200'
            }`}
            initial={i === current ? { scale: 1 } : {}}
            animate={i === current ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <span className="ml-2 text-sm font-bold text-gray-500">
        Q{current + 1}/{total}
      </span>
    </div>
  );
}

function ResultMessage({ percentage }: { percentage: number }) {
  if (percentage === 100) {
    return (
      <div className="text-center">
        <motion.span
          className="mb-2 inline-block text-4xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          🎉
        </motion.span>
        <p
          className="text-base font-bold text-emerald-600"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          パーフェクト！すごい！
        </p>
      </div>
    );
  } else if (percentage >= 80) {
    return (
      <div className="text-center">
        <motion.span
          className="mb-2 inline-block text-4xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          🌟
        </motion.span>
        <p
          className="text-base font-bold text-emerald-600"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          すごい！よく覚えてるね！
        </p>
      </div>
    );
  } else if (percentage >= 60) {
    return (
      <div className="text-center">
        <motion.span
          className="mb-2 inline-block text-4xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          👍
        </motion.span>
        <p
          className="text-base font-bold text-amber-600"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          いい調子！もう少しで完璧！
        </p>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <motion.span
          className="mb-2 inline-block text-4xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          💪
        </motion.span>
        <p
          className="text-base font-bold text-gray-600"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          復習して覚えよう！
        </p>
      </div>
    );
  }
}

export function QuizView({ quiz }: QuizViewProps) {
  const {
    isStarted,
    currentIndex,
    selectedAnswer,
    isAnswered,
    isComplete,
    score,
    start,
    selectAnswer,
    nextQuestion,
    reset,
    wrongAnswers,
    isReviewMode,
    startReview,
    totalQuestions,
    currentQuestion,
    reviewScore,
  } = useQuiz(quiz);

  if (!isStarted) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100"
        >
          <span className="text-4xl">❓</span>
        </motion.div>

        <h2
          className="mb-2 text-xl font-bold text-gray-800"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          クイズに挑戦！
        </h2>

        <p className="mb-8 text-base text-gray-500">
          全{quiz.questions.length}問
        </p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={start}
          className="rounded-full bg-gray-800 px-12 py-4 font-bold text-white transition-transform active:scale-95"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          スタート
        </motion.button>
      </div>
    );
  }

  if (!currentQuestion && !isComplete) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-gray-500">問題を読み込み中...</p>
      </div>
    );
  }

  if (isComplete) {
    const displayScore = isReviewMode ? reviewScore : score;
    const displayTotal = isReviewMode ? wrongAnswers.length : quiz.questions.length;
    const percentage = Math.round((displayScore / displayTotal) * 100);

    return (
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50"
        >
          <Trophy className="h-10 w-10 text-amber-500" />
        </motion.div>

        {isReviewMode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700"
          >
            復習モード完了！
          </motion.div>
        )}

        <h2
          className="mb-4 text-xl font-bold text-gray-800"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          クイズ完了！
        </h2>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          className="mb-2"
        >
          <p className="text-center text-5xl font-bold text-gray-800">
            {displayScore} / {displayTotal}
          </p>
        </motion.div>

        <p className="mb-6 text-base text-gray-500">正解率 {percentage}%</p>

        <ResultMessage percentage={percentage} />

        <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
          {!isReviewMode && wrongAnswers.length > 0 && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={startReview}
              className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-bold text-white transition-transform active:scale-95"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              <RefreshCw className="h-5 w-5" />
              間違えた問題だけ復習（{wrongAnswers.length}問）
            </motion.button>
          )}

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={reset}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition-transform active:scale-95"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <RotateCcw className="h-5 w-5" />
            最初からやり直す
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col pb-20">
      <div className="mb-4 px-4">
        {isReviewMode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 flex justify-center"
          >
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
              復習モード
            </span>
          </motion.div>
        )}
        <ProgressDots
          current={currentIndex}
          total={totalQuestions}
          isReviewMode={isReviewMode}
        />
      </div>

      <div className="flex-1 px-4">
        <motion.div
          key={`question-${currentIndex}-${isReviewMode}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 rounded-2xl border-2 border-gray-200 bg-white p-5"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-600">
              Q{currentIndex + 1}
            </span>
          </div>
          <p
            className="text-lg font-semibold leading-relaxed text-gray-800"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {currentQuestion?.question}
          </p>
        </motion.div>

        <div className="space-y-3">
          <AnimatePresence mode="wait">
            {currentQuestion?.options.map((option: string, index: number) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctIndex;
              const showResult = isAnswered;

              let bgClass = 'bg-white hover:bg-gray-50';
              let borderClass = 'border-gray-200';
              let textClass = 'text-gray-800';
              let labelBgClass = 'bg-gray-100 text-gray-600';

              if (showResult) {
                if (isCorrect) {
                  bgClass = 'bg-emerald-50';
                  borderClass = 'border-emerald-400';
                  textClass = 'text-emerald-700';
                  labelBgClass = 'bg-emerald-500 text-white';
                } else if (isSelected && !isCorrect) {
                  bgClass = 'bg-red-50';
                  borderClass = 'border-red-400';
                  textClass = 'text-red-700';
                  labelBgClass = 'bg-red-500 text-white';
                } else {
                  bgClass = 'bg-gray-50';
                  textClass = 'text-gray-400';
                }
              } else if (isSelected) {
                borderClass = 'border-gray-800';
                labelBgClass = 'bg-gray-800 text-white';
              }

              const getAnimation = () => {
                if (showResult && isSelected && !isCorrect) {
                  return { x: [0, -5, 5, -5, 5, 0], opacity: 1, y: 0 };
                }
                if (showResult && isCorrect) {
                  return { scale: [1, 1.02, 1], opacity: 1, y: 0 };
                }
                return { opacity: 1, y: 0 };
              };

              const getTransition = () => {
                if (showResult && isSelected && !isCorrect) {
                  return { duration: 0.4 };
                }
                if (showResult && isCorrect) {
                  return { duration: 0.3 };
                }
                return { delay: index * 0.05 };
              };

              return (
                <motion.button
                  key={index}
                  onClick={() => !isAnswered && selectAnswer(index)}
                  disabled={isAnswered}
                  className={`flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${bgClass} ${borderClass}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={getAnimation()}
                  transition={getTransition()}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                >
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${labelBgClass}`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span
                    className={`flex-1 font-medium ${textClass}`}
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {option}
                  </span>
                  {showResult && isCorrect && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <Check className="h-6 w-6 text-emerald-500" />
                    </motion.div>
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <X className="h-6 w-6 text-red-500" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {isAnswered && currentQuestion?.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-xl bg-gray-50 p-4"
          >
            <p
              className="mb-1 text-sm font-bold text-gray-700"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              解説
            </p>
            <p
              className="text-sm leading-relaxed text-gray-600"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {currentQuestion.explanation}
            </p>
          </motion.div>
        )}

        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={nextQuestion}
              className="rounded-full bg-gray-800 px-10 py-3.5 font-bold text-white transition-transform active:scale-95"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {currentIndex < totalQuestions - 1 ? '次の問題へ' : '結果を見る'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

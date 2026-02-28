import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, RotateCcw, Trophy, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuiz } from '../../hooks/useQuiz';
import type { Quiz } from '../../data/types';

interface TopicNavigationInfo {
  prev: { name: string; path: string } | null;
  next: { name: string; path: string } | null;
}

interface QuizViewProps {
  quiz: Quiz;
  onProgressChange?: (current: number, total: number) => void;
  onComplete?: (score: number, total: number) => void;
  isNewBest?: boolean;
  navigation?: TopicNavigationInfo;
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
          <div
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
  const { emoji, message, color } = percentage === 100
    ? { emoji: '🎉', message: 'パーフェクト！すごい！', color: 'text-emerald-600' }
    : percentage >= 80
      ? { emoji: '🌟', message: 'すごい！よく覚えてるね！', color: 'text-emerald-600' }
      : percentage >= 60
        ? { emoji: '👍', message: 'いい調子！もう少しで完璧！', color: 'text-amber-600' }
        : { emoji: '💪', message: '復習して覚えよう！', color: 'text-gray-600' };

  return (
    <div className="text-center">
      <span className="mb-2 inline-block text-4xl">{emoji}</span>
      <p
        className={`text-base font-bold ${color}`}
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        {message}
      </p>
    </div>
  );
}

export function QuizView({ quiz, onProgressChange, onComplete, isNewBest, navigation }: QuizViewProps) {
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

  useEffect(() => {
    onProgressChange?.(currentIndex + 1, totalQuestions);
  }, [currentIndex, totalQuestions, onProgressChange]);

  // クイズ完了時のコールバック（復習モードでない初回完了時のみ）
  useEffect(() => {
    if (isComplete && !isReviewMode) {
      onComplete?.(score, quiz.questions.length);
    }
  }, [isComplete, isReviewMode, score, quiz.questions.length, onComplete]);

  if (!isStarted) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-4 pb-16">
        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
            <span className="text-4xl">❓</span>
          </div>

          <h2
            className="mb-2 text-xl font-bold text-gray-800"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            クイズに挑戦！
          </h2>

          <p className="mb-8 text-base text-gray-500">
            全{quiz.questions.length}問
          </p>

          <button
            onClick={start}
            className="rounded-full bg-gray-800 px-12 py-4 font-bold text-white transition-transform active:scale-95"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            スタート
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion && !isComplete) {
    return (
      <div className="flex h-full flex-col items-center justify-center pb-14">
        <p className="text-gray-500">問題を読み込み中...</p>
      </div>
    );
  }

  if (isComplete) {
    const displayScore = isReviewMode ? reviewScore : score;
    const displayTotal = isReviewMode ? wrongAnswers.length : quiz.questions.length;
    const percentage = Math.round((displayScore / displayTotal) * 100);

    return (
      <div className="flex h-full flex-col items-center justify-center px-4 pb-16">
        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">
            <Trophy className="h-10 w-10 text-amber-500" />
          </div>

          {isReviewMode && (
            <div className="mb-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
              復習モード完了！
            </div>
          )}

          {!isReviewMode && isNewBest && (
            <div className="mb-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-1.5 text-sm font-bold text-white shadow-md">
              🏆 自己ベスト更新！
            </div>
          )}

          <h2
            className="mb-4 text-xl font-bold text-gray-800"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            クイズ完了！
          </h2>

          <div className="mb-2">
            <p className="text-center text-5xl font-bold text-gray-800">
              {displayScore} / {displayTotal}
            </p>
          </div>

          <p className="mb-6 text-base text-gray-500">正解率 {percentage}%</p>

          <ResultMessage percentage={percentage} />

          <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
            {!isReviewMode && wrongAnswers.length > 0 && (
              <button
                onClick={startReview}
                className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-bold text-white transition-transform active:scale-95"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                <RefreshCw className="h-5 w-5" />
                間違えた問題だけ復習（{wrongAnswers.length}問）
              </button>
            )}

            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition-transform active:scale-95"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              <RotateCcw className="h-5 w-5" />
              最初からやり直す
            </button>
          </div>

          {/* 前後の内容へのナビゲーション */}
          {navigation && (navigation.prev || navigation.next) && (
            <div className="mt-6 w-full max-w-xs space-y-2">
              <p className="text-center text-xs text-gray-400">他の内容を学習する</p>
              {navigation.prev && (
                <Link
                  to={navigation.prev.path}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 transition-all hover:bg-gray-50 active:scale-[0.98] active:bg-gray-100"
                >
                  <ChevronLeft className="h-5 w-5 flex-shrink-0 text-gray-400" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-400">前の内容へ</p>
                    <p className="truncate text-sm font-medium text-gray-700">
                      {navigation.prev.name}
                    </p>
                  </div>
                </Link>
              )}
              {navigation.next && (
                <Link
                  to={navigation.next.path}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 transition-all hover:bg-gray-50 active:scale-[0.98] active:bg-gray-100"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-400">次の内容へ</p>
                    <p className="truncate text-sm font-medium text-gray-700">
                      {navigation.next.name}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-400" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  const isCorrectAnswer = selectedAnswer === currentQuestion?.correctIndex;
  const selectedOptionText = selectedAnswer !== null ? currentQuestion?.options[selectedAnswer] : '';
  const correctOptionText = currentQuestion?.options[currentQuestion.correctIndex] ?? '';

  return (
    <div className="flex h-full flex-col pb-16">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col min-h-0">
        {/* プログレスドット + 問題文 */}
        <div className="flex-shrink-0 px-4 pt-2">
          {isReviewMode && (
            <div className="mb-2 flex justify-center">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                復習モード
              </span>
            </div>
          )}
          <ProgressDots
            current={currentIndex}
            total={totalQuestions}
            isReviewMode={isReviewMode}
          />

          <div
            className="mt-3 rounded-2xl border-2 border-gray-200 bg-white p-4"
          >
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-bold text-gray-600">
                Q{currentIndex + 1}
              </span>
            </div>
            <p
              className="whitespace-pre-line text-base font-semibold leading-relaxed text-gray-800 sm:text-lg"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {currentQuestion?.question}
            </p>
          </div>
        </div>

        {/* 選択肢 / 正誤フィードバック エリア */}
        <div className="flex flex-1 flex-col min-h-0 px-4 pt-2">
            {isAnswered ? (
              /* 正誤フィードバック */
              <div className="flex flex-1 flex-col overflow-y-auto">
                {/* 正誤表示 */}
                <div className={`rounded-2xl p-4 ${isCorrectAnswer ? 'bg-emerald-50 border-2 border-emerald-300' : 'bg-red-50 border-2 border-red-300'}`}>
                  <div className="mb-3 flex items-center gap-2">
                    {isCorrectAnswer ? (
                      <>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg font-bold text-emerald-700" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                          正解！
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                          <X className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg font-bold text-red-700" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                          不正解
                        </span>
                      </>
                    )}
                  </div>

                  {/* ユーザーの回答と正答 */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 text-sm font-bold text-gray-500">あなたの回答:</span>
                      <span className={`text-sm font-medium ${isCorrectAnswer ? 'text-emerald-700' : 'text-red-700'}`}>
                        {selectedOptionText}
                      </span>
                    </div>
                    {!isCorrectAnswer && (
                      <div className="flex items-start gap-2">
                        <span className="flex-shrink-0 text-sm font-bold text-gray-500">正答:</span>
                        <span className="text-sm font-medium text-emerald-700">
                          {correctOptionText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 解説 */}
                {currentQuestion?.explanation && (
                  <div className="mt-3 rounded-xl bg-gray-50 p-4">
                    <p
                      className="mb-1 text-sm font-bold text-gray-700"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      解説
                    </p>
                    <p
                      className="whitespace-pre-line text-sm leading-relaxed text-gray-600"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* 次へボタン */}
                <div className="mt-auto flex justify-center pt-3">
                  <button
                    onClick={nextQuestion}
                    className="rounded-full bg-gray-800 px-10 py-3 font-bold text-white transition-transform active:scale-95"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {currentIndex < totalQuestions - 1 ? '次の問題へ' : '結果を見る'}
                  </button>
                </div>
              </div>
            ) : (
              /* 選択肢リスト */
              <div
                key={`options-${currentIndex}-${isReviewMode}`}
                className="flex flex-1 flex-col space-y-2.5"
              >
                {currentQuestion?.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className="flex w-full items-center gap-3 rounded-xl border-2 border-gray-200 bg-white p-3.5 text-left transition-all hover:bg-gray-50 active:scale-[0.98]"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span
                      className="flex-1 font-medium text-gray-800"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

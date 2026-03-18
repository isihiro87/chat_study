import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, RotateCcw, Trophy, RefreshCw, ChevronLeft, ChevronRight, Shuffle, Settings } from 'lucide-react';
import { useQuiz } from '../../hooks/useQuiz';
import type { Quiz, QuizQuestion, Difficulty } from '../../data/types';
import { MathText } from '../common/MathText';
import QuizSetup, { type QuizSetupConfig } from './QuizSetup';

interface TopicNavigationInfo {
  prev: { name: string; path: string } | null;
  next: { name: string; path: string } | null;
}

interface QuizViewProps {
  quiz: Quiz;
  onProgressChange?: (current: number, total: number) => void;
  onComplete?: (score: number, total: number) => void;
  onCompleteWithDifficulties?: (score: number, total: number, difficulties: Difficulty[]) => void;
  onCompleteWithWrongQuestions?: (wrongQuestions: QuizQuestion[]) => void;
  isNewBest?: boolean;
  navigation?: TopicNavigationInfo;
  extraResultButtons?: React.ReactNode;
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

function ReorderQuestionInput({
  question,
  onSubmit,
  questionKey,
}: {
  question: QuizQuestion;
  onSubmit: (order: number[]) => void;
  questionKey: string;
}) {
  const words = question.words ?? [];
  const punctuation = question.punctuation;
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  useEffect(() => {
    setSelectedIndices([]);
  }, [questionKey]);

  const handleSelectWord = (wordIndex: number) => {
    if (selectedIndices.includes(wordIndex)) return;
    setSelectedIndices([...selectedIndices, wordIndex]);
  };

  const handleRemoveWord = (positionIndex: number) => {
    setSelectedIndices(selectedIndices.filter((_, i) => i !== positionIndex));
  };

  const isAllPlaced = selectedIndices.length === words.length;

  // 解答欄での表示: 文頭は大文字化
  const getDisplayWord = (wordIndex: number, posIndex: number) => {
    const word = words[wordIndex];
    if (posIndex === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* 解答欄 */}
      <div className="mb-4 min-h-[52px] rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-3">
        {selectedIndices.length === 0 ? (
          <p className="text-center text-sm text-gray-400">単語をタップして並べよう</p>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            {selectedIndices.map((wordIndex, posIndex) => (
              <button
                key={posIndex}
                onClick={() => handleRemoveWord(posIndex)}
                className="rounded-lg border-2 border-amber-300 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800 transition-all active:scale-95"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {getDisplayWord(wordIndex, posIndex)}
              </button>
            ))}
            {punctuation && (
              <span className="text-sm font-bold text-gray-600">{punctuation}</span>
            )}
          </div>
        )}
      </div>

      {/* 単語選択肢（データに格納された通りに表示。I・固有名詞は大文字のまま） */}
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {words.map((word, index) => {
          const isSelected = selectedIndices.includes(index);
          return (
            <button
              key={index}
              onClick={() => handleSelectWord(index)}
              disabled={isSelected}
              className={`rounded-lg border-2 px-3 py-1.5 text-sm font-medium transition-all active:scale-95 ${
                isSelected
                  ? 'border-gray-200 bg-gray-100 text-gray-300'
                  : 'border-gray-300 bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50'
              }`}
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {word}
            </button>
          );
        })}
      </div>

      {/* 回答するボタン */}
      <div className="mt-auto flex justify-center pt-3">
        <button
          onClick={() => onSubmit(selectedIndices)}
          disabled={!isAllPlaced}
          className={`rounded-full px-10 py-3 font-bold transition-transform active:scale-95 ${
            isAllPlaced
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-400'
          }`}
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          回答する
        </button>
      </div>
    </div>
  );
}

export function QuizView({ quiz, onProgressChange, onComplete, onCompleteWithDifficulties, onCompleteWithWrongQuestions, isNewBest, navigation, extraResultButtons }: QuizViewProps) {
  // セットアップ状態
  const [setupComplete, setSetupComplete] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [setupConfig, setSetupConfig] = useState<QuizSetupConfig | null>(null);
  const [quizGeneration, setQuizGeneration] = useState(0);

  const filteredQuiz = useMemo<Quiz>(() => {
    if (!setupComplete) return quiz;
    return { questions: activeQuestions };
  }, [quiz, setupComplete, activeQuestions]);

  const {
    isStarted,
    currentIndex,
    selectedAnswer,
    isAnswered,
    isComplete,
    score,
    start,
    selectAnswer,
    submitReorderAnswer,
    reorderAnswer,
    nextQuestion,
    reset,
    wrongAnswers,
    reviewWrongAnswers,
    isReviewMode,
    startReview,
    totalQuestions,
    currentQuestion,
    reviewScore,
  } = useQuiz(filteredQuiz);

  useEffect(() => {
    onProgressChange?.(currentIndex + 1, totalQuestions);
  }, [currentIndex, totalQuestions, onProgressChange]);

  // 「別の問題を解く」で問題セットが変わったら、新しいquizでreset
  useEffect(() => {
    if (quizGeneration > 0) {
      reset();
    }
  }, [quizGeneration, reset]);

  // セットアップ完了後、自動的にスタート
  useEffect(() => {
    if (setupComplete && !isStarted && !isComplete) {
      start();
    }
  }, [setupComplete, isStarted, isComplete, start]);

  // クイズ完了時のコールバック（復習モードでない初回完了時のみ）
  useEffect(() => {
    if (isComplete && !isReviewMode) {
      onComplete?.(score, filteredQuiz.questions.length);
      onCompleteWithDifficulties?.(score, filteredQuiz.questions.length, selectedDifficulties);
      if (onCompleteWithWrongQuestions && wrongAnswers.length > 0) {
        const wrongQs = wrongAnswers.map((idx) => filteredQuiz.questions[idx]);
        onCompleteWithWrongQuestions(wrongQs);
      }
    }
  }, [isComplete, isReviewMode, score, filteredQuiz.questions.length, onComplete, onCompleteWithDifficulties, onCompleteWithWrongQuestions, wrongAnswers, filteredQuiz.questions, selectedDifficulties]);

  // 別の問題を解く: 同じ設定で再選定
  const handleNewQuestions = () => {
    if (!setupConfig) return;
    const allQuestions = quiz.questions;
    const filtered = allQuestions.filter((q) =>
      setupConfig.selectedDifficulties.includes(q.difficulty ?? 'standard'),
    );
    const count = setupConfig.questionCount === null || setupConfig.questionCount >= filtered.length
      ? filtered.length
      : setupConfig.questionCount;
    let selected: QuizQuestion[];
    if (setupConfig.shuffleOrder) {
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      selected = shuffled.slice(0, count);
    } else {
      selected = filtered.slice(0, count);
    }
    setActiveQuestions(selected);
    setQuizGeneration((g) => g + 1);
  };

  // 問題数を選択しなおす: セットアップ画面に戻る
  const handleReturnToSetup = () => {
    reset();
    setSetupComplete(false);
    setSetupConfig(null);
  };

  // セットアップ画面
  if (!setupComplete) {
    return (
      <QuizSetup
        questions={quiz.questions}
        onStart={(filtered, difficulties, config) => {
          setActiveQuestions(filtered);
          setSelectedDifficulties(difficulties);
          setSetupConfig(config);
          setSetupComplete(true);
        }}
      />
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
    const displayTotal = isReviewMode ? totalQuestions : filteredQuiz.questions.length;
    const percentage = Math.round((displayScore / displayTotal) * 100);
    const retryCount = isReviewMode ? reviewWrongAnswers.length : wrongAnswers.length;

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
            <div className="mb-3 rounded-full bg-amber-500 px-4 py-1.5 text-sm font-bold text-white shadow-sm">
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

          {extraResultButtons ? (
            <div className="mt-8">{extraResultButtons}</div>
          ) : (
            <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
              {retryCount > 0 && (
                <button
                  onClick={startReview}
                  className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-bold text-white transition-transform active:scale-95"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <RefreshCw className="h-5 w-5" />
                  間違えた問題だけ復習（{retryCount}問）
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

              {setupConfig && (
                <button
                  onClick={handleNewQuestions}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition-transform active:scale-95"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <Shuffle className="h-5 w-5" />
                  別の問題を解く
                </button>
              )}

              <button
                onClick={handleReturnToSetup}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition-transform active:scale-95"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                <Settings className="h-5 w-5" />
                問題数を選択しなおす
              </button>
            </div>
          )}

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

  const isReorderQuestion = currentQuestion?.type === 'reorder';
  const isCorrectAnswer = isReorderQuestion
    ? selectedAnswer === 0
    : selectedAnswer === currentQuestion?.correctIndex;

  const formatReorderSentence = (indices: number[], words: string[], punctuation?: '.' | '?') => {
    const sentence = indices.map((idx, pos) => {
      const word = words[idx];
      return pos === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }).join(' ');
    return punctuation ? sentence + punctuation : sentence;
  };

  const selectedOptionText = isReorderQuestion
    ? (reorderAnswer && currentQuestion?.words
        ? formatReorderSentence(reorderAnswer, currentQuestion.words, currentQuestion.punctuation)
        : '')
    : (selectedAnswer !== null ? currentQuestion?.options[selectedAnswer] : '');

  const correctOptionText = isReorderQuestion
    ? (currentQuestion?.correctOrder && currentQuestion?.words
        ? formatReorderSentence(currentQuestion.correctOrder, currentQuestion.words, currentQuestion.punctuation)
        : '')
    : (currentQuestion?.options[currentQuestion.correctIndex] ?? '');

  return (
    <div className="h-full overflow-y-auto pb-16">
      <div className="mx-auto w-full max-w-md">
        {/* プログレスドット + 問題文 */}
        <div className="px-4 pt-2">
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
              {isReorderQuestion && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-600">
                  並べ替え
                </span>
              )}
            </div>
            <p
              className="whitespace-pre-line text-base font-semibold leading-relaxed text-gray-800 sm:text-lg"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {currentQuestion && <MathText text={currentQuestion.question} />}
            </p>
          </div>
        </div>

        {/* 選択肢 / 正誤フィードバック エリア */}
        <div className="px-4 pt-2 pb-4">
            {isAnswered ? (
              /* 正誤フィードバック */
              <div>
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
                    {!isCorrectAnswer && (
                      <div className="flex items-start gap-2 rounded-lg bg-emerald-100 p-2.5">
                        <span className="flex-shrink-0 text-sm font-bold text-emerald-700">正答:</span>
                          <MathText text={correctOptionText ?? ''} className="text-base font-bold text-emerald-800" />
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 text-sm font-bold text-gray-400">あなたの回答:</span>
                      <MathText text={selectedOptionText ?? ''} className={`text-sm ${isCorrectAnswer ? 'font-medium text-emerald-700' : 'text-gray-500'}`} />
                    </div>
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
                    <MathText
                      text={currentQuestion.explanation}
                      as="p"
                      className="whitespace-pre-line text-sm leading-relaxed text-gray-600"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>
                )}

                {/* 次へボタン */}
                <div className="flex justify-center pt-3">
                  <button
                    onClick={nextQuestion}
                    className="rounded-full bg-gray-800 px-10 py-3 font-bold text-white transition-transform active:scale-95"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {currentIndex < totalQuestions - 1 ? '次の問題へ' : '結果を見る'}
                  </button>
                </div>
              </div>
            ) : isReorderQuestion && currentQuestion ? (
              /* 並べ替え問題 */
              <ReorderQuestionInput
                question={currentQuestion}
                onSubmit={submitReorderAnswer}
                questionKey={`${currentIndex}-${isReviewMode}`}
              />
            ) : (
              /* 選択肢リスト */
              <div
                key={`options-${currentIndex}-${isReviewMode}`}
                className="flex flex-col space-y-2.5"
              >
                {currentQuestion?.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className="flex w-full cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 bg-white p-3.5 text-left transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <MathText
                      text={option}
                      className="flex-1 font-medium text-gray-800"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </button>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

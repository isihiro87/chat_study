import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Check, RotateCcw, BookOpen } from 'lucide-react';
import type { ExampleSet } from '../../data/types';

interface ExampleViewProps {
  examples: ExampleSet;
  onProgressChange?: (current: number, total: number) => void;
  onComplete?: () => void;
}

export function ExampleView({ examples, onProgressChange, onComplete }: ExampleViewProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const totalExamples = examples.examples.length;
  const currentExample = examples.examples[currentIndex];
  const totalSteps = currentExample?.steps.length ?? 0;

  useEffect(() => {
    onProgressChange?.(currentIndex + 1, totalExamples);
  }, [currentIndex, totalExamples, onProgressChange]);

  const handleStart = useCallback(() => {
    setIsStarted(true);
    setCurrentIndex(0);
    setVisibleSteps(0);
    setShowAnswer(false);
    setIsComplete(false);
  }, []);

  const handleRevealNext = useCallback(() => {
    if (visibleSteps < totalSteps) {
      setVisibleSteps((prev) => prev + 1);
    } else if (!showAnswer) {
      setShowAnswer(true);
    }
  }, [visibleSteps, totalSteps, showAnswer]);

  const handleNextExample = useCallback(() => {
    if (currentIndex < totalExamples - 1) {
      setCurrentIndex((prev) => prev + 1);
      setVisibleSteps(0);
      setShowAnswer(false);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, totalExamples, onComplete]);

  const handleReset = useCallback(() => {
    setIsStarted(false);
    setCurrentIndex(0);
    setVisibleSteps(0);
    setShowAnswer(false);
    setIsComplete(false);
  }, []);

  // 開始前
  if (!isStarted) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-4 pb-16">
        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50"
          >
            <span className="text-4xl">📝</span>
          </motion.div>

          <h2
            className="mb-2 text-xl font-bold text-gray-800"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            例題に挑戦！
          </h2>

          <p className="mb-8 text-base text-gray-500">
            全{totalExamples}問・ステップ解説つき
          </p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={handleStart}
            className="rounded-full bg-gray-800 px-12 py-4 font-bold text-white transition-transform active:scale-95"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            スタート
          </motion.button>
        </div>
      </div>
    );
  }

  // 完了画面
  if (isComplete) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-4 pb-16">
        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50"
          >
            <Check className="h-10 w-10 text-emerald-500" />
          </motion.div>

          <h2
            className="mb-2 text-xl font-bold text-gray-800"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            例題完了！
          </h2>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="mb-2"
          >
            <p className="text-center text-5xl font-bold text-gray-800">
              {totalExamples} / {totalExamples}
            </p>
          </motion.div>

          <p className="mb-6 text-base text-gray-500">全問クリア！</p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <span className="mb-2 inline-block text-4xl">🎉</span>
            <p
              className="text-base font-bold text-emerald-600"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              よくがんばったね！
            </p>
          </motion.div>

          <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={handleReset}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition-transform active:scale-95"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              <RotateCcw className="h-5 w-5" />
              もう一度やる
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // 問題表示
  const allStepsRevealed = visibleSteps >= totalSteps;
  const canProceed = showAnswer;

  return (
    <div className="flex h-full flex-col pb-16">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col min-h-0">
        {/* プログレスドット */}
        <div className="flex-shrink-0 px-4 pt-2">
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1.5">
              {Array.from({ length: totalExamples }, (_, i) => (
                <div
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i < currentIndex
                      ? 'bg-blue-500'
                      : i === currentIndex
                        ? 'bg-blue-300'
                        : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-bold text-gray-500">
              {currentIndex + 1}/{totalExamples}
            </span>
          </div>

          {/* 問題文 */}
          <div className="mt-3 rounded-2xl border-2 border-blue-200 bg-white p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-bold text-blue-600">
                <BookOpen className="mr-1 inline h-3.5 w-3.5" />
                問題
              </span>
            </div>
            <p
              className="whitespace-pre-line text-base font-semibold leading-relaxed text-gray-800 sm:text-lg"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {currentExample.question}
            </p>
          </div>
        </div>

        {/* ステップエリア */}
        <div className="flex flex-1 flex-col min-h-0 px-4 pt-3 overflow-y-auto">
          <div className="space-y-3">
            {currentExample.steps.map((step, index) => {
              if (index >= visibleSteps) return null;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3.5"
                >
                  <p className="mb-1 text-sm font-bold text-indigo-700">{step.title}</p>
                  <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">{step.content}</p>
                  {step.highlight && (
                    <div className="mt-2 inline-block rounded-lg bg-indigo-100 px-3 py-1">
                      <span className="text-sm font-bold text-indigo-800">{step.highlight}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* 答え */}
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span
                    className="text-sm font-bold text-emerald-700"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    答え
                  </span>
                </div>
                <p
                  className="whitespace-pre-line text-base font-semibold text-emerald-800"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {currentExample.answer}
                </p>
              </motion.div>
            )}
          </div>

          {/* ボタンエリア */}
          <div className="mt-auto flex justify-center pt-4 pb-2">
            {!canProceed ? (
              <button
                onClick={handleRevealNext}
                className="flex items-center gap-2 rounded-full bg-gray-800 px-10 py-3 font-bold text-white transition-transform active:scale-95"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {!allStepsRevealed ? (
                  <>
                    次のステップ
                    <ChevronRight className="h-5 w-5" />
                  </>
                ) : (
                  '答えを見る'
                )}
              </button>
            ) : (
              <button
                onClick={handleNextExample}
                className="flex items-center gap-2 rounded-full bg-blue-600 px-10 py-3 font-bold text-white transition-transform active:scale-95"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {currentIndex < totalExamples - 1 ? (
                  <>
                    次の例題へ
                    <ChevronRight className="h-5 w-5" />
                  </>
                ) : (
                  '結果を見る'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

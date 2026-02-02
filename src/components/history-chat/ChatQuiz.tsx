import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { QuizContent } from '../../data/history-chat/types';

interface ChatQuizProps {
  quiz: QuizContent;
  selectedAnswer: number | null;
  isAnswered: boolean;
  onSelectAnswer: (optionIndex: number) => void;
}

export function ChatQuiz({
  quiz,
  selectedAnswer,
  isAnswered,
  onSelectAnswer,
}: ChatQuizProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const explanationRef = useRef<HTMLDivElement>(null);

  // 解説が表示されたら自動スクロール（解説の一番上が画面上部に来るように）
  useEffect(() => {
    if (showExplanation && explanationRef.current) {
      // block: 'start'で解説の上端を画面上部に配置（収まらない場合は可能な限りスクロール）
      explanationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showExplanation]);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    onSelectAnswer(index);
    // 少し遅れて解説を表示
    setTimeout(() => setShowExplanation(true), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-3 my-4"
    >
      <div
        className="rounded-xl p-4"
        style={{
          background: 'linear-gradient(135deg, #1A1A2E, #16213E)',
        }}
      >
        {/* 問題文 */}
        <div className="mb-4">
          <span className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-gray-900">
            クイズ
          </span>
          <p
            className="mt-2 text-base font-medium leading-relaxed text-white"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {quiz.question}
          </p>
        </div>

        {/* 選択肢 */}
        <div className="space-y-2">
          {quiz.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = option.correct;

            let bgColor = 'bg-white/10';
            let borderColor = 'border-white/20';
            let textColor = 'text-white';

            if (isAnswered) {
              if (isCorrect) {
                bgColor = 'bg-green-500/20';
                borderColor = 'border-green-400';
                textColor = 'text-green-300';
              } else if (isSelected && !isCorrect) {
                bgColor = 'bg-red-500/20';
                borderColor = 'border-red-400';
                textColor = 'text-red-300';
              } else {
                bgColor = 'bg-white/5';
                borderColor = 'border-white/10';
                textColor = 'text-gray-400';
              }
            }

            return (
              <motion.button
                key={option.letter}
                onClick={() => handleSelect(index)}
                disabled={isAnswered}
                className={`flex w-full items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-all ${bgColor} ${borderColor}`}
                animate={
                  isAnswered && isSelected
                    ? isCorrect
                      ? { scale: [1, 1.02, 1] }
                      : { x: [0, -5, 5, -5, 5, 0] }
                    : {}
                }
                transition={
                  isAnswered && isSelected
                    ? isCorrect
                      ? { duration: 0.3 }
                      : { duration: 0.4 }
                    : {}
                }
              >
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    isAnswered && isCorrect
                      ? 'bg-green-400 text-green-900'
                      : isAnswered && isSelected && !isCorrect
                        ? 'bg-red-400 text-red-900'
                        : 'bg-white/20 text-white'
                  }`}
                >
                  {option.letter}
                </span>
                <span
                  className={`text-sm font-medium ${textColor}`}
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {option.text}
                </span>
                {isAnswered && isCorrect && (
                  <span className="ml-auto text-green-400">✓</span>
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <span className="ml-auto text-red-400">✗</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* 解説 */}
        {showExplanation && (
          <motion.div
            ref={explanationRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 rounded-lg bg-white/10 p-4"
          >
            <p className="mb-1 text-xs font-bold text-yellow-400">解説</p>
            <p
              className="text-sm leading-relaxed text-white/90"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              dangerouslySetInnerHTML={{ __html: quiz.explanation }}
            />
            {/* タップで続きに進む */}
            <p
              className="mt-4 text-center text-sm text-white/60"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ▼ タップで続きに進む
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

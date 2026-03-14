// Security: dangerouslySetInnerHTML is used with static TypeScript data only (no user input or API data).
import { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { QuizContent } from '../../data/history-chat/types';
import { renderMathInHtml } from '../../utils/math-formula';

interface ChatQuizProps {
  quiz: QuizContent;
  selectedAnswer: number | null;
  isAnswered: boolean;
  onSelectAnswer: (optionIndex: number) => void;
}

const CORRECT_MESSAGES = [
  'すごい！正解！ 🎉',
  'さすが！完璧！ ✨',
  'ナイス！その通り！ 👏',
  'バッチリ！ 💯',
  'お見事！ 🌟',
];

const INCORRECT_MESSAGES = [
  '惜しい！次はいけるよ！ 💪',
  'ドンマイ！覚えておこう！ 📝',
  'もう少し！次がんばろう！ 🔥',
  'おしかった！解説を読んでみよう 👀',
];

function getRandomMessage(messages: string[]): string {
  return messages[Math.floor(Math.random() * messages.length)];
}

export function ChatQuiz({
  quiz,
  selectedAnswer,
  isAnswered,
  onSelectAnswer,
}: ChatQuizProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const explanationRef = useRef<HTMLDivElement>(null);

  // 正誤判定（回答確定後に固定）
  const isCorrectAnswer = useMemo(() => {
    if (selectedAnswer === null) return false;
    return quiz.options[selectedAnswer]?.correct === true;
  }, [selectedAnswer, quiz.options]);

  // フィードバックメッセージ（回答確定後に固定）
  const feedbackMessage = useMemo(() => {
    if (selectedAnswer === null) return '';
    return isCorrectAnswer
      ? getRandomMessage(CORRECT_MESSAGES)
      : getRandomMessage(INCORRECT_MESSAGES);
  }, [selectedAnswer, isCorrectAnswer]);

  // 解説が表示されたら自動スクロール（解説の一番上が画面上部に来るように）
  useEffect(() => {
    if (showExplanation && explanationRef.current) {
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
            dangerouslySetInnerHTML={{ __html: renderMathInHtml(quiz.question) }}
          />
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
                className={`flex w-full items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-all ${bgColor} ${borderColor} ${!isAnswered ? 'hover:bg-white/20 hover:border-white/40' : ''}`}
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
                  dangerouslySetInnerHTML={{ __html: renderMathInHtml(option.text) }}
                />
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

        {/* フィードバックメッセージ */}
        {isAnswered && feedbackMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`mt-3 rounded-lg px-4 py-2.5 text-center text-sm font-bold ${
              isCorrectAnswer
                ? 'bg-green-500/20 text-green-300'
                : 'bg-orange-500/20 text-orange-300'
            }`}
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {feedbackMessage}
          </motion.div>
        )}

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
              dangerouslySetInnerHTML={{ __html: renderMathInHtml(quiz.explanation) }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

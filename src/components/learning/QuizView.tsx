import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Trophy } from 'lucide-react';
import { useQuiz } from '../../hooks/useQuiz';
import { ProgressBar } from '../common/ProgressBar';
import type { Quiz } from '../../data/types';

interface QuizViewProps {
  quiz: Quiz;
}

export function QuizView({ quiz }: QuizViewProps) {
  const {
    currentIndex,
    selectedAnswer,
    isAnswered,
    isComplete,
    score,
    selectAnswer,
    nextQuestion,
    reset,
  } = useQuiz(quiz);

  const currentQuestion = quiz.questions[currentIndex];

  if (isComplete) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6 rounded-full bg-secondary/10 p-4"
        >
          <Trophy className="h-12 w-12 text-secondary" />
        </motion.div>
        <h2 className="mb-2 text-xl font-bold text-gray-800">クイズ完了!</h2>
        <p className="mb-2 text-4xl font-bold text-primary">
          {score} / {quiz.questions.length}
        </p>
        <p className="mb-6 text-gray-600">正解率 {percentage}%</p>

        {percentage >= 80 ? (
          <p className="mb-6 text-center text-success">すごい! よく覚えてるね!</p>
        ) : percentage >= 60 ? (
          <p className="mb-6 text-center text-secondary">いい調子! もう少しで完璧!</p>
        ) : (
          <p className="mb-6 text-center text-gray-500">もう一度やってみよう!</p>
        )}

        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white"
        >
          <RotateCcw className="h-5 w-5" />
          もう一度
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col pb-20">
      <div className="mb-4 px-4">
        <ProgressBar current={currentIndex + 1} total={quiz.questions.length} />
      </div>

      <div className="flex-1 px-4">
        <div className="mb-6 rounded-xl bg-white p-4 shadow-sm">
          <p className="text-lg font-semibold text-gray-800">
            {currentQuestion.question}
          </p>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="wait">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctIndex;
              const showResult = isAnswered;

              let bgColor = 'bg-white';
              let borderColor = 'border-gray-200';
              let textColor = 'text-gray-800';

              if (showResult) {
                if (isCorrect) {
                  bgColor = 'bg-success/10';
                  borderColor = 'border-success';
                  textColor = 'text-success';
                } else if (isSelected && !isCorrect) {
                  bgColor = 'bg-error/10';
                  borderColor = 'border-error';
                  textColor = 'text-error';
                }
              } else if (isSelected) {
                borderColor = 'border-primary';
              }

              return (
                <motion.button
                  key={index}
                  onClick={() => !isAnswered && selectAnswer(index)}
                  disabled={isAnswered}
                  className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-colors ${bgColor} ${borderColor}`}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                >
                  <span className={`font-medium ${textColor}`}>
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                  {showResult && isCorrect && (
                    <Check className="h-5 w-5 text-success" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <X className="h-5 w-5 text-error" />
                  )}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {isAnswered && currentQuestion.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-xl bg-primary/5 p-4"
          >
            <p className="text-sm font-semibold text-primary">解説</p>
            <p className="mt-1 text-sm text-gray-700">
              {currentQuestion.explanation}
            </p>
          </motion.div>
        )}

        {isAnswered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={nextQuestion}
              className="rounded-full bg-primary px-8 py-3 font-medium text-white"
            >
              {currentIndex < quiz.questions.length - 1 ? '次の問題へ' : '結果を見る'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

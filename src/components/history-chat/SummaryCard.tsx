import { motion } from 'framer-motion';
import { RotateCcw, Trophy, Layers, HelpCircle } from 'lucide-react';

interface SummaryCardProps {
  points: string[];
  score: number;
  totalQuizzes: number;
  onReplay: () => void;
  onNavigateToFlashcard?: () => void;
  onNavigateToQuiz?: () => void;
}

export function SummaryCard({ points, score, totalQuizzes, onReplay, onNavigateToFlashcard, onNavigateToQuiz }: SummaryCardProps) {
  const percentage = totalQuizzes > 0 ? Math.round((score / totalQuizzes) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-3 my-4"
    >
      <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-lg">
        {/* ヘッダー */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
            <Trophy className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <h3
              className="text-lg font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              おつかれさま！
            </h3>
            <p className="text-sm text-gray-500">学習が完了しました</p>
          </div>
        </div>

        {/* スコア */}
        {totalQuizzes > 0 && (
          <div className="mb-4 rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="mb-1 text-sm text-gray-500">クイズ正解率</p>
            <p
              className="text-3xl font-bold"
              style={{
                color: percentage >= 80 ? '#10B981' : percentage >= 60 ? '#F59E0B' : '#6B7280',
              }}
            >
              {percentage}%
            </p>
            <p className="mt-1 text-sm text-gray-600">
              {score} / {totalQuizzes} 問正解
            </p>
          </div>
        )}

        {/* 重要ポイント */}
        <div className="mb-4">
          <h4
            className="mb-2 text-sm font-bold text-gray-700"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            今回のポイント
          </h4>
          <ul className="space-y-2">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✅</span>
                <span
                  className="text-sm leading-relaxed text-gray-700"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 次のステップへのガイド */}
        {(onNavigateToFlashcard || onNavigateToQuiz) && (
          <div className="mb-4 rounded-lg bg-blue-50 p-4">
            <p
              className="mb-3 text-sm font-bold text-blue-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              💡 暗記を定着させよう！
            </p>
            <p className="mb-3 text-sm text-blue-700">
              カードで復習したり、クイズで理解度をチェックしてみよう！
            </p>
            <div className="flex gap-2">
              {onNavigateToFlashcard && (
                <button
                  onClick={onNavigateToFlashcard}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-transform active:scale-95"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <Layers className="h-4 w-4" />
                  カードで復習
                </button>
              )}
              {onNavigateToQuiz && (
                <button
                  onClick={onNavigateToQuiz}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-transform active:scale-95"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <HelpCircle className="h-4 w-4" />
                  クイズに挑戦
                </button>
              )}
            </div>
          </div>
        )}

        {/* リプレイボタン */}
        <button
          onClick={onReplay}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-medium text-white shadow-md transition-transform active:scale-95"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          <RotateCcw className="h-5 w-5" />
          もう一度見る
        </button>
      </div>
    </motion.div>
  );
}

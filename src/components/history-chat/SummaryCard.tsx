// Security: dangerouslySetInnerHTML is used with static TypeScript data only (no user input or API data).
import { motion } from 'framer-motion';
import { RotateCcw, Trophy, Layers, HelpCircle, MessageCircle, BookOpen } from 'lucide-react';
import { buildChatGPTUrl } from '../../utils/chatgptPrompt';

interface SummaryCardProps {
  points: string[];
  score: number;
  totalQuizzes: number;
  onReplay: () => void;
  onNavigateToFlashcard?: () => void;
  onNavigateToQuiz?: () => void;
  onNavigateToExample?: () => void;
  chatTitle: string;
  chatSubtitle: string;
}

interface RankInfo {
  title: string;
  emoji: string;
  color: string;
  bgColor: string;
}

function getRankInfo(percentage: number): RankInfo {
  if (percentage === 100) {
    return {
      title: '完璧マスター！',
      emoji: '👑',
      color: '#D97706',
      bgColor: 'bg-amber-50',
    };
  }
  if (percentage >= 80) {
    return {
      title: 'すごい！',
      emoji: '🌟',
      color: '#10B981',
      bgColor: 'bg-emerald-50',
    };
  }
  if (percentage >= 60) {
    return {
      title: 'がんばった！',
      emoji: '💪',
      color: '#F59E0B',
      bgColor: 'bg-amber-50',
    };
  }
  return {
    title: 'もう一回チャレンジ！',
    emoji: '🔥',
    color: '#6B7280',
    bgColor: 'bg-gray-50',
  };
}

export function SummaryCard({ points, score, totalQuizzes, onReplay, onNavigateToFlashcard, onNavigateToQuiz, onNavigateToExample, chatTitle, chatSubtitle }: SummaryCardProps) {
  const percentage = totalQuizzes > 0 ? Math.round((score / totalQuizzes) * 100) : 0;
  const rank = totalQuizzes > 0 ? getRankInfo(percentage) : null;

  const handleOpenChatGPT = () => {
    const url = buildChatGPTUrl({
      title: chatTitle,
      subtitle: chatSubtitle,
      points,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-3 my-4"
    >
      <div className={`rounded-xl ${rank?.bgColor || 'bg-amber-50'} p-5 shadow-sm`}>
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

        {/* スコア + ランク */}
        {totalQuizzes > 0 && rank && (
          <div className="mb-4 rounded-lg bg-white p-4 text-center shadow-sm">
            {/* ランク称号 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="mb-2"
            >
              <span className="text-3xl">{rank.emoji}</span>
              <p
                className="mt-1 text-base font-bold"
                style={{ color: rank.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {rank.title}
              </p>
            </motion.div>

            <p className="mb-1 text-sm text-gray-500">クイズ正解率</p>
            <p
              className="text-3xl font-bold"
              style={{ color: rank.color }}
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
          <div className="mb-4 rounded-lg bg-amber-50 p-4">
            <p
              className="mb-3 text-sm font-bold text-amber-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              💡 暗記を定着させよう！
            </p>
            <p className="mb-3 text-sm text-amber-700">
              カードで復習したり、クイズで理解度をチェックしてみよう！
            </p>
            <div className="flex gap-2">
              {onNavigateToFlashcard && (
                <button
                  onClick={onNavigateToFlashcard}
                  className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-amber-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform active:scale-95"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <Layers className="h-4 w-4 flex-shrink-0" />
                  カードで復習
                </button>
              )}
              {onNavigateToQuiz && (
                <button
                  onClick={onNavigateToQuiz}
                  className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-green-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform active:scale-95"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <HelpCircle className="h-4 w-4 flex-shrink-0" />
                  クイズに挑戦
                </button>
              )}
            </div>
          </div>
        )}

        {/* 例題の解き方を見る */}
        {onNavigateToExample && (
          <div className="mb-4 rounded-lg bg-amber-50 p-4">
            <p
              className="mb-3 text-sm font-bold text-amber-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              📝 例題で実力チェック！
            </p>
            <p className="mb-3 text-sm text-amber-700">
              実際の問題を解いて、理解度を確かめよう！
            </p>
            <button
              onClick={onNavigateToExample}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:bg-amber-600 active:scale-95"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              <BookOpen className="h-4 w-4" />
              例題の解き方を見る
            </button>
          </div>
        )}

        {/* ChatGPTでもっと深く知る */}
        <div className="mb-4 rounded-lg bg-amber-50 p-4">
          <p
            className="mb-3 text-sm font-bold text-amber-800"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            🎓 AI先生ともっと深く学ぼう！
          </p>
          <p className="mb-3 text-sm text-amber-700">
            ChatGPTのAI先生と対話しながら、理解を深めよう！
          </p>
          <button
            onClick={handleOpenChatGPT}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:bg-amber-600 active:scale-95"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <MessageCircle className="h-4 w-4" />
            ChatGPTでもっと深く知る
          </button>
          <p className="mt-3 text-center text-xs text-amber-600">
            💡 開いたら 送信ボタン を押すだけで会話スタート！
          </p>
        </div>

        {/* リプレイボタン */}
        <button
          onClick={onReplay}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-medium text-white shadow-sm transition-transform active:scale-95"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          <RotateCcw className="h-5 w-5" />
          もう一度見る
        </button>
      </div>
    </motion.div>
  );
}

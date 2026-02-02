import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ChatHeaderProps {
  icon: string;
  title: string;
  subtitle: string;
  progress: number; // 0-100
}

export function ChatHeader({ icon, title, subtitle, progress }: ChatHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="flex-shrink-0">
      {/* メインヘッダー */}
      <div
        className="px-4 pb-3 pt-4"
        style={{
          background: 'linear-gradient(135deg, #2C1810, #4A2520)',
        }}
      >
        <div className="flex items-center gap-3">
          {/* 戻るボタン */}
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 active:bg-white/30"
            aria-label="戻る"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>

          {/* タイトル */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-2xl">{icon}</span>
            <div>
              <h1
                className="text-base font-bold text-white"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {title}
              </h1>
              <p
                className="text-xs text-white/70"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {/* バッジ */}
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
            中学歴史
          </span>
        </div>
      </div>

      {/* プログレスバー */}
      <div className="h-1 w-full bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  message?: string;
  /**
   * この秒数を超えてもロードが終わらなければ、ユーザーが取れる救済 UI
   * （「再読み込み」ボタンとキャッシュクリア手順）を表示する。
   * デフォルト 8 秒。0 以下を指定すると救済 UI を出さない。
   */
  stuckThresholdMs?: number;
}

const DEFAULT_STUCK_MS = 8000;

/**
 * フルスクリーンのローディング画面。
 *
 * 3 つの amber ドットが順番に弾むアニメーションを表示。
 * LIFF / Web 版どちらでも使う共通コンポーネント。
 *
 * stuck 救済: しばらく経っても親が unmount しなければ、
 * 「読み込みに時間がかかっています…」と再読み込みボタンを出す。
 * LIFF を多重に使ったあと IDB / Auth state が固まる症状の救済。
 */
export function LoadingScreen({
  message = '読み込み中...',
  stuckThresholdMs = DEFAULT_STUCK_MS,
}: LoadingScreenProps) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    if (stuckThresholdMs <= 0) return;
    const t = window.setTimeout(() => setStuck(true), stuckThresholdMs);
    return () => window.clearTimeout(t);
  }, [stuckThresholdMs]);

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col items-center justify-center px-4">
      <div className="flex gap-2 mb-4" aria-hidden="true">
        <span
          className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
          style={{ animationDelay: '0ms', animationDuration: '900ms' }}
        />
        <span
          className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
          style={{ animationDelay: '150ms', animationDuration: '900ms' }}
        />
        <span
          className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
          style={{ animationDelay: '300ms', animationDuration: '900ms' }}
        />
      </div>
      <p
        className="text-gray-500 text-sm"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
      {stuck && (
        <div className="mt-6 max-w-sm w-full px-2">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-left">
            <p
              className="text-xs font-bold text-amber-800 mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              💡 読み込みが終わらないとき
            </p>
            <ol className="text-[11px] text-gray-700 space-y-1 leading-relaxed list-decimal list-inside">
              <li>画面右上の「⋮」（縦三点）ボタンをタップ</li>
              <li>「すべてのタブ」を開く</li>
              <li>「チャットでスタディ」のタブを全て削除</li>
              <li>メニューからもう一度開き直す</li>
            </ol>
            <p className="text-[10px] text-gray-500 mt-2">
              キャッシュされた古いページが残っていると発生することがあります。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

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
        <div className="mt-6 max-w-xs text-center">
          <p className="text-xs text-gray-500 mb-3">
            読み込みに時間がかかっています。
            <br />
            通信状況を確認して再読み込みしてください。
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-2 text-sm font-medium"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            🔄 再読み込み
          </button>
        </div>
      )}
    </div>
  );
}

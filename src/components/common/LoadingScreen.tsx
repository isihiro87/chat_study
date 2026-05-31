import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  message?: string;
  /**
   * この秒数を超えてもロードが終わらなければ、ユーザーが取れる救済 UI
   * （タブ削除手順）を表示する。
   * デフォルト 2 秒。0 以下を指定すると救済 UI を出さない。
   */
  stuckThresholdMs?: number;
}

const DEFAULT_STUCK_MS = 4000;

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
        <div className="mt-6 max-w-sm w-full px-3 space-y-3">
          <div
            className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <p className="text-sm font-bold text-amber-800 mb-2">
              ⚠️ ページに進めないようです
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              テスト範囲設定や暗記カードのページが開けない場合、
              <br />
              <b>LINE アプリを完全に終了</b>して、
              <br />
              もう一度開いてみてください。
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all rounded-full py-2.5 px-4 text-white text-sm font-medium"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ページを再読み込み
          </button>
          <details className="text-[11px] text-gray-500 px-1">
            <summary className="cursor-pointer text-center text-gray-400">
              それでも開かないとき
            </summary>
            <ol className="mt-2 px-2 space-y-1 leading-relaxed list-decimal list-inside">
              <li>画面右上の「⋮」（縦三点）ボタンをタップ</li>
              <li>「すべてのタブ」を開く</li>
              <li>「チャットでスタディ」のタブを全て削除</li>
              <li>LINE のメニューからもう一度開き直す</li>
            </ol>
          </details>
        </div>
      )}
    </div>
  );
}

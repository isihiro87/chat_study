interface LoadingScreenProps {
  message?: string;
}

/**
 * フルスクリーンのローディング画面。
 *
 * 3 つの amber ドットが順番に弾むアニメーションを表示。
 * LIFF / Web 版どちらでも使う共通コンポーネント。
 */
export function LoadingScreen({ message = '読み込み中...' }: LoadingScreenProps) {
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
    </div>
  );
}

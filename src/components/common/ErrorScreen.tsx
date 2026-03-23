import { getErrorMessage } from '../../utils/classifyError';
import type { LoadErrorType } from '../../utils/classifyError';

interface ErrorScreenProps {
  errorType: LoadErrorType;
  onRetry: () => void;
}

export function ErrorScreen({ errorType, onRetry }: ErrorScreenProps) {
  const errorMsg = getErrorMessage(errorType);
  const isChunk = errorType === 'chunk';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF9F7] px-4">
      <span className="mb-4 text-6xl">{errorMsg.emoji}</span>
      <h1
        className="mb-2 text-xl font-bold text-gray-800"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        {errorMsg.title}
      </h1>
      <p
        className="mb-6 whitespace-pre-line text-center text-sm text-gray-500"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        {errorMsg.description}
      </p>
      <button
        onClick={() => (isChunk ? window.location.reload() : onRetry())}
        className="rounded-full bg-gray-800 px-6 py-3 text-sm font-semibold text-white active:scale-95"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        {isChunk ? 'ページを読み込み直す' : 'もう一度ためす'}
      </button>
    </div>
  );
}

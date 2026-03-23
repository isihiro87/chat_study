import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { trackEvent } from '../../utils/gtag';

const LINE_URL = 'https://lin.ee/UbVQuHd';
const STORAGE_KEY = 'marutto-study-survey-done';

export function useSurveyPopup(totalStudiedTopics: number) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    if (totalStudiedTopics >= 2) {
      setVisible(true);
    }
  }, [totalStudiedTopics]);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  return { showSurvey: visible, dismissSurvey: dismiss };
}

interface SurveyPopupProps {
  onDismiss: () => void;
}

export function SurveyPopup({ onDismiss }: SurveyPopupProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating === null) return;

    // GAイベント送信
    trackEvent('survey_rating', `rating_${rating}`, rating);
    if (comment.trim()) {
      trackEvent('survey_comment', comment.trim().slice(0, 100));
    }

    localStorage.setItem(STORAGE_KEY, '1');
    setSubmitted(true);
  };

  const handleClose = () => {
    if (!submitted && rating === null) {
      trackEvent('survey_dismissed');
    }
    onDismiss();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" onClick={handleClose} />

      {/* ポップアップ */}
      <div
        className="relative z-10 mx-4 mb-4 w-full max-w-sm rounded-2xl bg-white p-5 sm:mb-0"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100"
          aria-label="閉じる"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            <h2
              className="mb-4 text-center text-lg font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              チャットでスタディはどう？
            </h2>

            {/* 5段階評価 */}
            <div className="mb-4 flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRating(n)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-xl transition-all ${
                    rating !== null && rating >= n
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                  aria-label={`${n}点`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="mb-4 flex justify-between px-1 text-xs text-gray-400">
              <span>いまいち</span>
              <span>とても良い！</span>
            </div>

            {/* 自由記載欄 */}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="感想や改善してほしいことがあれば教えてね（任意）"
              className="mb-4 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-amber-400"
              rows={2}
            />

            <button
              onClick={handleSubmit}
              disabled={rating === null}
              className="w-full rounded-full bg-gray-800 py-3 text-sm font-semibold text-white disabled:bg-gray-300 active:scale-95"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              送信する
            </button>
          </>
        ) : rating !== null && rating >= 3 ? (
          /* 3以上: LINE誘導 */
          <>
            <p className="mb-2 text-center text-3xl">🎉</p>
            <h2
              className="mb-2 text-center text-lg font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ありがとう！
            </h2>
            <p className="mb-4 text-center text-sm text-gray-500">
              公式LINEに登録すると、最新コンテンツや
              <br />
              お得な情報をお届けするよ！
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('line_click', 'survey_cta')}
              className="mb-3 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold text-white active:scale-95"
              style={{ backgroundColor: '#06C755', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              公式LINEを友だち追加
            </a>
            <button
              onClick={handleClose}
              className="w-full text-center text-xs text-gray-400"
            >
              あとで
            </button>
          </>
        ) : (
          /* 2以下: お礼のみ */
          <>
            <p className="mb-2 text-center text-3xl">🙏</p>
            <h2
              className="mb-2 text-center text-lg font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              教えてくれてありがとう！
            </h2>
            <p className="mb-4 text-center text-sm text-gray-500">
              もっと使いやすくなるようにがんばるね！
            </p>
            <button
              onClick={handleClose}
              className="w-full rounded-full bg-gray-800 py-3 text-sm font-semibold text-white active:scale-95"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              とじる
            </button>
          </>
        )}
      </div>
    </div>
  );
}

import { Shuffle, X } from 'lucide-react';
import { getTopic } from '../../data/subjects/registry';

interface SummaryQuizPopupProps {
  topicIds: string[];
  onStart: () => void;
  onDismiss: () => void;
}

export function SummaryQuizPopup({ topicIds, onStart, onDismiss }: SummaryQuizPopupProps) {
  const topics = topicIds
    .map((id) => getTopic(id))
    .filter((t): t is NonNullable<typeof t> => t != null);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onDismiss} />

      {/* Modal */}
      <div className="relative mx-4 mb-4 w-full max-w-sm animate-slide-up rounded-2xl bg-white p-5 shadow-xl sm:mb-0">
        <button
          onClick={onDismiss}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          aria-label="閉じる"
        >
          <X className="h-5 w-5 text-gray-400" />
        </button>

        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
            <span className="text-2xl">🎯</span>
          </div>
          <div>
            <h3
              className="text-lg font-bold text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              まとめクイズ！
            </h3>
            <p className="text-sm text-gray-500">
              {topics.length}つのチャプターを学習したよ
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-600">
          ここまでの内容をまとめてクイズで確認してみよう！
        </p>

        {/* トピック一覧 */}
        <div className="mb-5 space-y-1.5">
          {topics.map((topic) => (
            <div key={topic.id} className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
              <span className="text-base">{topic.icon}</span>
              <span className="text-sm font-medium text-gray-700">{topic.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={onStart}
            className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-bold text-white transition-transform active:scale-95"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <Shuffle className="h-5 w-5" />
            やってみる！
          </button>
          <button
            onClick={onDismiss}
            className="rounded-full px-6 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100"
          >
            あとで
          </button>
        </div>
      </div>
    </div>
  );
}

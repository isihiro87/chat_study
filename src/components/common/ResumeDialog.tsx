import { RotateCcw, Play } from 'lucide-react';

interface ResumeDialogProps {
  onResume: () => void;
  onRestart: () => void;
}

export function ResumeDialog({ onResume, onRestart }: ResumeDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm">
        <h2
          className="mb-2 text-center text-lg font-bold text-gray-800"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          前回の続きがあります
        </h2>
        <p className="mb-6 text-center text-sm text-gray-500">
          前回の途中から再開しますか？
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={onResume}
            className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-bold text-white transition-transform active:scale-95"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <Play className="h-5 w-5" />
            続きから
          </button>
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition-transform active:scale-95"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <RotateCcw className="h-5 w-5" />
            初めから
          </button>
        </div>
      </div>
    </div>
  );
}

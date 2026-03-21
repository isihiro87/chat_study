import { useState, useMemo } from 'react';
import type { Flashcard, Difficulty } from '../../data/types';

interface FlashcardSetupProps {
  cards: Flashcard[];
  onStart: (filteredCards: Flashcard[], batchSize: number) => void;
}

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  basic: '基礎',
  standard: '標準',
  advanced: '発展',
};

const BATCH_PRESETS = [5, 10, 15] as const;

function getDifficulty(card: Flashcard): Difficulty {
  return card.difficulty ?? 'standard';
}

export default function FlashcardSetup({ cards, onStart }: FlashcardSetupProps) {
  const [selectedDifficulties, setSelectedDifficulties] = useState<Set<Difficulty>>(
    new Set(['basic', 'standard', 'advanced']),
  );
  const [batchSize, setBatchSize] = useState<number | null>(10); // null = 全部
  const [shuffleOrder, setShuffleOrder] = useState(true); // true = ランダム

  const countByDifficulty = useMemo(() => {
    const counts: Record<Difficulty, number> = { basic: 0, standard: 0, advanced: 0 };
    for (const card of cards) {
      counts[getDifficulty(card)]++;
    }
    return counts;
  }, [cards]);

  const filteredCards = useMemo(() => {
    return cards.filter((card) => selectedDifficulties.has(getDifficulty(card)));
  }, [cards, selectedDifficulties]);

  const effectiveBatchSize = batchSize === null ? filteredCards.length : batchSize;
  const batchCount = effectiveBatchSize > 0 ? Math.ceil(filteredCards.length / effectiveBatchSize) : 0;

  const toggleDifficulty = (d: Difficulty) => {
    setSelectedDifficulties((prev) => {
      const next = new Set(prev);
      if (next.has(d)) {
        if (next.size > 1) next.delete(d);
      } else {
        next.add(d);
      }
      return next;
    });
  };

  const handleStart = () => {
    if (filteredCards.length === 0) return;
    const ordered = shuffleOrder
      ? [...filteredCards].sort(() => Math.random() - 0.5)
      : filteredCards;
    onStart(ordered, effectiveBatchSize);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-6">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-center text-lg font-bold text-gray-800">フラッシュカード設定</h3>

        {/* 難易度選択 */}
        <div className="mb-5">
          <p className="mb-2 text-sm font-medium text-gray-600">難易度</p>
          <div className="flex gap-2">
            {(['basic', 'standard', 'advanced'] as Difficulty[]).map((d) => {
              const isSelected = selectedDifficulties.has(d);
              const count = countByDifficulty[d];
              return (
                <button
                  key={d}
                  onClick={() => toggleDifficulty(d)}
                  className={`flex-1 rounded-lg border-2 px-3 py-2 text-center text-sm font-medium transition-colors ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-gray-200 bg-gray-50 text-gray-400'
                  }`}
                >
                  <div>{DIFFICULTY_LABELS[d]}</div>
                  <div className="mt-0.5 text-xs">{count}枚</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* セットサイズ選択 */}
        <div className="mb-5">
          <p className="mb-2 text-sm font-medium text-gray-600">1回に覚える枚数</p>
          <div className="flex flex-wrap gap-2">
            {BATCH_PRESETS.map((n) => (
              <button
                key={n}
                onClick={() => setBatchSize(n)}
                className={`rounded-lg border-2 px-4 py-1.5 text-sm font-medium transition-colors ${
                  batchSize === n
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                {n}枚
              </button>
            ))}
            <button
              onClick={() => setBatchSize(null)}
              className={`rounded-lg border-2 px-4 py-1.5 text-sm font-medium transition-colors ${
                batchSize === null
                  ? 'border-amber-500 bg-amber-50 text-amber-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              全部
            </button>
          </div>
        </div>

        {/* 出題順序 */}
        <div className="mb-5">
          <p className="mb-2 text-sm font-medium text-gray-600">出題順序</p>
          <div className="flex gap-2">
            <button
              onClick={() => setShuffleOrder(false)}
              className={`flex-1 rounded-lg border-2 px-3 py-2 text-center text-sm font-medium transition-colors ${
                !shuffleOrder
                  ? 'border-amber-500 bg-amber-50 text-amber-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              順番通り
            </button>
            <button
              onClick={() => setShuffleOrder(true)}
              className={`flex-1 rounded-lg border-2 px-3 py-2 text-center text-sm font-medium transition-colors ${
                shuffleOrder
                  ? 'border-amber-500 bg-amber-50 text-amber-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              ランダム
            </button>
          </div>
        </div>

        {/* 情報表示 */}
        <div className="mb-4 text-center text-sm text-gray-500">
          {filteredCards.length === 0 ? (
            <span className="text-red-500">該当するカードがありません</span>
          ) : batchSize !== null && batchCount > 1 ? (
            <span>
              {filteredCards.length}枚を{batchCount}回に分けて学習
            </span>
          ) : (
            <span>{filteredCards.length}枚を一括で学習</span>
          )}
        </div>

        {/* 品質についての注意 */}
        <p className="mb-3 text-center text-xs text-gray-400">
          ※ まだ全部チェックしきれていないので、問題のクオリティがイマイチなところがあるかも…！ごめんね🙏
        </p>

        {/* スタートボタン */}
        <button
          onClick={handleStart}
          disabled={filteredCards.length === 0}
          className="w-full rounded-xl bg-amber-500 py-3 text-base font-bold text-white transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          スタート
        </button>
      </div>
    </div>
  );
}

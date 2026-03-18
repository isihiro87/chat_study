import { useState, useMemo } from 'react';
import type { QuizQuestion, Difficulty } from '../../data/types';

export interface QuizSetupConfig {
  questionCount: number | null;
  shuffleOrder: boolean;
  selectedDifficulties: Difficulty[];
}

interface QuizSetupProps {
  questions: QuizQuestion[];
  onStart: (filteredQuestions: QuizQuestion[], selectedDifficulties: Difficulty[], config: QuizSetupConfig) => void;
}

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  basic: '基礎',
  standard: '標準',
  advanced: '発展',
};

const QUESTION_PRESETS = [5, 10, 15, 20] as const;

function getDifficulty(q: QuizQuestion): Difficulty {
  return q.difficulty ?? 'standard';
}

export default function QuizSetup({ questions, onStart }: QuizSetupProps) {
  const [selectedDifficulties, setSelectedDifficulties] = useState<Set<Difficulty>>(
    new Set(['basic', 'standard', 'advanced']),
  );
  const [questionCount, setQuestionCount] = useState<number | null>(null); // null = 全問
  const [shuffleOrder, setShuffleOrder] = useState(true); // true = ランダム

  const countByDifficulty = useMemo(() => {
    const counts: Record<Difficulty, number> = { basic: 0, standard: 0, advanced: 0 };
    for (const q of questions) {
      counts[getDifficulty(q)]++;
    }
    return counts;
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => selectedDifficulties.has(getDifficulty(q)));
  }, [questions, selectedDifficulties]);

  const finalQuestionCount = useMemo(() => {
    if (questionCount === null || questionCount >= filteredQuestions.length) {
      return filteredQuestions.length;
    }
    return questionCount;
  }, [filteredQuestions, questionCount]);

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
    if (filteredQuestions.length === 0) return;
    let selected: QuizQuestion[];
    if (shuffleOrder) {
      const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
      selected = shuffled.slice(0, finalQuestionCount);
    } else {
      selected = filteredQuestions.slice(0, finalQuestionCount);
    }
    const config: QuizSetupConfig = {
      questionCount,
      shuffleOrder,
      selectedDifficulties: Array.from(selectedDifficulties),
    };
    onStart(selected, Array.from(selectedDifficulties), config);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-6">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-center text-lg font-bold text-gray-800">クイズ設定</h3>

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
                  <div className="mt-0.5 text-xs">{count}問</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 問題数選択 */}
        <div className="mb-5">
          <p className="mb-2 text-sm font-medium text-gray-600">問題数</p>
          <div className="flex flex-wrap gap-2">
            {QUESTION_PRESETS.map((n) => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                disabled={n > filteredQuestions.length}
                className={`rounded-lg border-2 px-4 py-1.5 text-sm font-medium transition-colors ${
                  questionCount === n
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : n > filteredQuestions.length
                      ? 'cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                {n}問
              </button>
            ))}
            <button
              onClick={() => setQuestionCount(null)}
              className={`rounded-lg border-2 px-4 py-1.5 text-sm font-medium transition-colors ${
                questionCount === null
                  ? 'border-amber-500 bg-amber-50 text-amber-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              全問
            </button>
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                min={1}
                max={filteredQuestions.length}
                value={questionCount !== null && !QUESTION_PRESETS.includes(questionCount as typeof QUESTION_PRESETS[number]) ? questionCount : ''}
                placeholder="数値"
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10);
                  if (!isNaN(v) && v >= 1) {
                    setQuestionCount(Math.min(v, filteredQuestions.length));
                  } else if (e.target.value === '') {
                    setQuestionCount(null);
                  }
                }}
                className={`w-16 rounded-lg border-2 px-2 py-1.5 text-center text-sm font-medium transition-colors ${
                  questionCount !== null && !QUESTION_PRESETS.includes(questionCount as typeof QUESTION_PRESETS[number])
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : 'border-gray-200 bg-white text-gray-600'
                }`}
              />
              <span className="text-sm text-gray-500">問</span>
            </div>
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

        {/* 出題数表示 */}
        <div className="mb-4 text-center text-sm text-gray-500">
          {filteredQuestions.length === 0 ? (
            <span className="text-red-500">該当する問題がありません</span>
          ) : (
            <span>
              {finalQuestionCount}問 / {filteredQuestions.length}問中
            </span>
          )}
        </div>

        {/* スタートボタン */}
        <button
          onClick={handleStart}
          disabled={filteredQuestions.length === 0}
          className="w-full rounded-xl bg-amber-500 py-3 text-base font-bold text-white transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          スタート
        </button>
      </div>
    </div>
  );
}

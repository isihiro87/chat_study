import { useState, useMemo, useEffect } from 'react';
import { Check, CheckSquare, Square, Shuffle } from 'lucide-react';
import { getErasBySubject, getTopicsByEra } from '../../data/subjects/registry';
import { collectQuestions } from '../../utils/buildRandomQuiz';
import type { TopicMeta } from '../../data/subjects/registry';
import type { Era } from '../../data/types';

const grades = [
  { value: 1, label: '中1' },
  { value: 2, label: '中2' },
  { value: 3, label: '中3' },
] as const;

const questionCountPresets = [5, 10, 15, 20, 0] as const; // 0 = 全問

interface RandomQuizSetupProps {
  subjectId: string;
  onStart: (topicIds: string[], questionCount: number) => void;
  initialSelectedTopicIds?: string[];
}

export function RandomQuizSetup({ subjectId, onStart, initialSelectedTopicIds }: RandomQuizSetupProps) {
  const [selectedGrade, setSelectedGrade] = useState(1);
  const [selectedTopicIds, setSelectedTopicIds] = useState<Set<string>>(
    () => new Set(initialSelectedTopicIds ?? []),
  );
  const [questionCount, setQuestionCount] = useState(10);

  const allEras = useMemo(() => getErasBySubject(subjectId), [subjectId]);
  const filteredEras = useMemo(
    () => allEras.filter((era) => era.grade === selectedGrade),
    [allEras, selectedGrade],
  );

  const topicsByEra = useMemo(() => {
    const map = new Map<string, { era: Era; topics: TopicMeta[] }>();
    for (const era of filteredEras) {
      const topics = getTopicsByEra(era.id);
      if (topics.length > 0) {
        map.set(era.id, { era, topics });
      }
    }
    return map;
  }, [filteredEras]);

  const allGradeTopicIds = useMemo(() => {
    const ids: string[] = [];
    for (const { topics } of topicsByEra.values()) {
      ids.push(...topics.map((t) => t.id));
    }
    return ids;
  }, [topicsByEra]);

  const [availableQuestionCount, setAvailableQuestionCount] = useState(0);
  useEffect(() => {
    let cancelled = false;
    collectQuestions(Array.from(selectedTopicIds)).then((qs) => {
      if (!cancelled) setAvailableQuestionCount(qs.length);
    });
    return () => { cancelled = true; };
  }, [selectedTopicIds]);

  const effectiveCount = questionCount === 0 || questionCount > availableQuestionCount
    ? availableQuestionCount
    : questionCount;

  const toggleTopic = (topicId: string) => {
    setSelectedTopicIds((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  const toggleEra = (eraId: string) => {
    const entry = topicsByEra.get(eraId);
    if (!entry) return;
    const eraTopicIds = entry.topics.map((t) => t.id);
    const allSelected = eraTopicIds.every((id) => selectedTopicIds.has(id));
    setSelectedTopicIds((prev) => {
      const next = new Set(prev);
      for (const id of eraTopicIds) {
        if (allSelected) {
          next.delete(id);
        } else {
          next.add(id);
        }
      }
      return next;
    });
  };

  const selectAll = () => {
    setSelectedTopicIds(new Set(allGradeTopicIds));
  };

  const deselectAll = () => {
    setSelectedTopicIds(new Set());
  };

  const isAllSelected = allGradeTopicIds.length > 0 && allGradeTopicIds.every((id) => selectedTopicIds.has(id));

  const handleStart = () => {
    if (selectedTopicIds.size === 0) return;
    onStart(Array.from(selectedTopicIds), questionCount);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-4 pb-32">
        {/* 学年タブ */}
        <div className="mb-4 flex gap-2">
          {grades.map((grade) => (
            <button
              key={grade.value}
              onClick={() => setSelectedGrade(grade.value)}
              className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-colors ${
                selectedGrade === grade.value
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 shadow-sm hover:bg-gray-50'
              }`}
            >
              {grade.label}
            </button>
          ))}
        </div>

        {/* 全選択/全解除 */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">
            {selectedTopicIds.size}個選択中
          </span>
          <button
            onClick={isAllSelected ? deselectAll : selectAll}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-amber-600 hover:bg-amber-50"
          >
            {isAllSelected ? '全解除' : '全選択'}
          </button>
        </div>

        {/* トピック一覧（Era別グルーピング） */}
        <div className="space-y-4">
          {Array.from(topicsByEra.values()).map(({ era, topics }) => {
            const eraTopicIds = topics.map((t) => t.id);
            const eraAllSelected = eraTopicIds.every((id) => selectedTopicIds.has(id));
            const eraSomeSelected = eraTopicIds.some((id) => selectedTopicIds.has(id));

            return (
              <div key={era.id} className="rounded-xl bg-white shadow-sm">
                {/* Era ヘッダー */}
                <button
                  onClick={() => toggleEra(era.id)}
                  className="flex w-full items-center gap-3 rounded-t-xl p-3 text-left hover:bg-gray-50"
                >
                  <div className="flex h-6 w-6 items-center justify-center">
                    {eraAllSelected ? (
                      <CheckSquare className="h-5 w-5 text-amber-600" />
                    ) : eraSomeSelected ? (
                      <div className="h-5 w-5 rounded border-2 border-amber-400 bg-amber-100" />
                    ) : (
                      <Square className="h-5 w-5 text-gray-300" />
                    )}
                  </div>
                  <span className="text-lg">{era.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{era.name}</p>
                    <p className="text-xs text-gray-500">{era.period}</p>
                  </div>
                </button>

                {/* トピック一覧 */}
                <div className="border-t border-gray-100">
                  {topics.map((topic) => {
                    const isSelected = selectedTopicIds.has(topic.id);
                    return (
                      <button
                        key={topic.id}
                        onClick={() => toggleTopic(topic.id)}
                        className="flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-gray-50 last:rounded-b-xl"
                      >
                        <div className="flex h-6 w-6 items-center justify-center pl-2">
                          {isSelected ? (
                            <div className="flex h-5 w-5 items-center justify-center rounded bg-amber-600">
                              <Check className="h-3.5 w-3.5 text-white" />
                            </div>
                          ) : (
                            <div className="h-5 w-5 rounded border-2 border-gray-300" />
                          )}
                        </div>
                        <span className="text-base">{topic.icon}</span>
                        <p className="flex-1 text-sm text-gray-700">{topic.name}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {topicsByEra.size === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">この学年の内容はまだありません</p>
          </div>
        )}
      </div>

      {/* 固定フッター：問題数選択とスタートボタン */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-4 pb-4 pt-3 shadow-sm">
        <div className="mx-auto max-w-md">
          {/* 問題数プリセット */}
          <div className="mb-3 flex items-center gap-2">
            <span className="flex-shrink-0 text-xs font-medium text-gray-500">問題数:</span>
            <div className="flex flex-1 gap-1.5">
              {questionCountPresets.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setQuestionCount(preset)}
                  className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition-colors ${
                    questionCount === preset
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {preset === 0 ? '全問' : preset}
                </button>
              ))}
            </div>
          </div>

          {/* 出題数表示 + スタート */}
          <button
            onClick={handleStart}
            disabled={selectedTopicIds.size === 0}
            className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-bold transition-transform active:scale-95 ${
              selectedTopicIds.size > 0
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-400'
            }`}
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            <Shuffle className="h-5 w-5" />
            {selectedTopicIds.size > 0
              ? `${effectiveCount}問でスタート`
              : 'トピックを選択してください'}
          </button>
        </div>
      </div>
    </div>
  );
}

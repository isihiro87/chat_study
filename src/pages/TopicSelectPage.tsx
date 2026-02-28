import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';
import { Header } from '../components/common/Header';
import { getEra, getTopicsByEra } from '../data/subjects/registry';
import { useStudyProgress } from '../hooks/useStudyProgress';

export function TopicSelectPage() {
  const { subjectId, eraId } = useParams<{ subjectId: string; eraId: string }>();
  const era = eraId ? getEra(eraId) : undefined;
  const topics = eraId ? getTopicsByEra(eraId) : [];
  const { isTopicStudied, getTopicProgress, getEraProgress } = useStudyProgress();

  if (!era || !subjectId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">ページが見つかりません</p>
      </div>
    );
  }

  const eraProgress = eraId ? getEraProgress(eraId) : null;
  const allCompleted = eraProgress && eraProgress.completed === eraProgress.total && eraProgress.total > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={era.name} subtitle={era.subtitle} showBack />

      <main className="mx-auto max-w-md px-4 py-4">
        {/* 時代の概要 */}
        <div className="mb-4 rounded-xl bg-secondary/10 p-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{era.icon}</span>
            <div>
              <p className="text-sm font-medium text-secondary">{era.period}</p>
              <p className="text-xs text-gray-600">{era.subtitle}</p>
            </div>
          </div>
        </div>

        {/* 全完了お祝いバナー */}
        {allCompleted && (
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3">
            <span className="text-xl">🎉</span>
            <p className="text-sm font-bold text-emerald-700">
              このセクションのトピックをすべて学習したよ！
            </p>
          </div>
        )}

        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          学びたいトピックをえらぼう
        </h2>

        <div className="space-y-3">
          {topics.map((topic) => {
            const studied = isTopicStudied(topic.id);
            const tp = getTopicProgress(topic.id);
            const hasQuizScore = tp.quizBestScore !== null && tp.quizTotalQuestions !== null;

            return (
              <Link
                key={topic.id}
                to={`/subjects/${subjectId}/eras/${eraId}/topics/${topic.id}`}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-transform active:scale-98"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{topic.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">{topic.subtitle}</p>
                  </div>
                  {hasQuizScore && (
                    <p className="mt-0.5 text-xs text-indigo-500 font-medium">
                      Q: {tp.quizBestScore}/{tp.quizTotalQuestions}
                    </p>
                  )}
                </div>
                {studied ? (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                )}
              </Link>
            );
          })}
        </div>

        {topics.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">トピックがありません</p>
          </div>
        )}
      </main>
    </div>
  );
}

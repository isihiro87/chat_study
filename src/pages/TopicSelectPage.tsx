import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Header } from '../components/common/Header';
import { getEra, getTopicsByEra } from '../data/subjects/history';

export function TopicSelectPage() {
  const { subjectId, eraId } = useParams<{ subjectId: string; eraId: string }>();
  const era = eraId ? getEra(eraId) : undefined;
  const topics = eraId ? getTopicsByEra(eraId) : [];

  if (!era) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">時代が見つかりません</p>
      </div>
    );
  }

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

        <h2 className="mb-3 text-sm font-semibold text-gray-600">
          学びたいトピックをえらぼう
        </h2>

        <div className="space-y-3">
          {topics.map((topic) => (
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
                <p className="text-sm text-gray-500">{topic.subtitle}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          ))}
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

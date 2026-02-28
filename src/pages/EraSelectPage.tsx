import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';
import { Header } from '../components/common/Header';
import { getSubject } from '../data/subjects';
import { getErasBySubject, getTopicsByEra } from '../data/subjects/registry';
import { useStudyProgress } from '../hooks/useStudyProgress';

const grades = [
  { value: 1, label: '中1' },
  { value: 2, label: '中2' },
  { value: 3, label: '中3' },
] as const;

export function EraSelectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? getSubject(subjectId) : undefined;
  const [selectedGrade, setSelectedGrade] = useState(1);
  const { getEraProgress, isTopicStudied, getTopicProgress } = useStudyProgress();

  // 学年切り替え時にスクロール位置をリセット
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedGrade]);

  const allEras = subjectId ? getErasBySubject(subjectId) : [];
  const filteredEras = allEras.filter((era) => era.grade === selectedGrade);

  // Eraが1つだけの場合（英語など）、直接トピック一覧を表示
  const singleEra = filteredEras.length === 1 ? filteredEras[0] : null;
  const directTopics = singleEra ? getTopicsByEra(singleEra.id) : [];

  if (!subject) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">科目が見つかりません</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={subject.name} subtitle={subjectId === 'history' ? '学びたい時代をえらぼう' : '学びたい単元をえらぼう'} showBack />

      <main className="mx-auto max-w-md px-4 py-4">
        {/* 学年タブ */}
        <div className="mb-4 flex gap-2">
          {grades.map((grade) => (
            <button
              key={grade.value}
              onClick={() => setSelectedGrade(grade.value)}
              className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-colors ${
                selectedGrade === grade.value
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-600 shadow-sm hover:bg-gray-50'
              }`}
            >
              {grade.label}
            </button>
          ))}
        </div>

        {singleEra ? (
          /* Eraが1つの場合: トピック一覧を直接表示 */
          <div className="space-y-3">
            {directTopics.map((topic) => {
              const studied = isTopicStudied(topic.id);
              const tp = getTopicProgress(topic.id);
              const hasQuizScore = tp.quizBestScore !== null && tp.quizTotalQuestions !== null;

              return (
                <Link
                  key={topic.id}
                  to={`/subjects/${subjectId}/eras/${singleEra.id}/topics/${topic.id}`}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-transform active:scale-98"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                    {topic.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{topic.name}</h3>
                    <p className="text-sm text-gray-500">{topic.subtitle}</p>
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
        ) : (
          /* Eraが複数の場合: Era一覧を表示（歴史など） */
          <div className="space-y-3">
            {filteredEras.map((era) => {
              const progress = getEraProgress(era.id);
              const allDone = progress.completed === progress.total && progress.total > 0;

              return (
                <Link
                  key={era.id}
                  to={`/subjects/${subjectId}/eras/${era.id}`}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-transform active:scale-98"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-2xl">
                    {era.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{era.name}</h3>
                    <p className="text-sm text-gray-500">{era.period}</p>
                  </div>
                  {allDone ? (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  ) : progress.completed > 0 ? (
                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-600">
                      {progress.completed}/{progress.total}
                    </span>
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </Link>
              );
            })}
          </div>
        )}

        {filteredEras.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">{subjectId === 'history' ? '時代がありません' : '単元がありません'}</p>
          </div>
        )}
      </main>
    </div>
  );
}

import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Header } from '../components/common/Header';
import { getSubject } from '../data/subjects';
import { eras } from '../data/subjects/history';

export function EraSelectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? getSubject(subjectId) : undefined;

  if (!subject) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">科目が見つかりません</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={subject.name} subtitle="学びたい時代をえらぼう" showBack />

      <main className="mx-auto max-w-md px-4 py-4">
        <div className="space-y-3">
          {eras.map((era) => (
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
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          ))}
        </div>

        {eras.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">時代がありません</p>
          </div>
        )}
      </main>
    </div>
  );
}

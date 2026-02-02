import { Link, useParams } from 'react-router-dom';
import { Landmark, ChevronRight } from 'lucide-react';
import { Header } from '../components/common/Header';
import { getSubject } from '../data/subjects';
import { units } from '../data/subjects/history/units';

const iconMap: Record<string, React.ElementType> = {
  landmark: Landmark,
};

export function UnitSelectPage() {
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
      <Header
        title={subject.name}
        subtitle="学びたい単元をえらぼう"
        showBack
      />

      <main className="mx-auto max-w-md px-4 py-4">
        <div className="space-y-3">
          {units.map((unit) => {
            const Icon = iconMap[unit.icon] || Landmark;

            return (
              <Link
                key={unit.id}
                to={`/subjects/${subjectId}/units/${unit.id}`}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-transform active:scale-98"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{unit.name}</h3>
                  <p className="text-sm text-gray-500">{unit.subtitle}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
            );
          })}
        </div>

        {units.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">単元がありません</p>
          </div>
        )}
      </main>
    </div>
  );
}

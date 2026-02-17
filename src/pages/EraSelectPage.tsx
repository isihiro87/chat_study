import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Header } from '../components/common/Header';
import { getSubject } from '../data/subjects';
import { eras } from '../data/subjects/history';

const grades = [
  { value: 1, label: '中1' },
  { value: 2, label: '中2' },
  { value: 3, label: '中3' },
] as const;

export function EraSelectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? getSubject(subjectId) : undefined;
  const [selectedGrade, setSelectedGrade] = useState(1);

  // 学年切り替え時にスクロール位置をリセット
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedGrade]);

  const filteredEras = eras.filter((era) => era.grade === selectedGrade);

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

        <div className="space-y-3">
          {filteredEras.map((era) => (
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

        {filteredEras.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">時代がありません</p>
          </div>
        )}
      </main>
    </div>
  );
}

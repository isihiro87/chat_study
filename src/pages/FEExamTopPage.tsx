import { Link } from 'react-router-dom';
import { ChevronRight, Monitor } from 'lucide-react';
import { getErasBySubject } from '../data/subjects/registry';

// 分野定義（grade値で分類）
const fields = [
  { grade: 1, name: 'テクノロジ系', icon: '💻', description: 'ハードウェア・ソフトウェア・ネットワーク・データベース等' },
  { grade: 2, name: 'マネジメント系', icon: '📋', description: 'プロジェクトマネジメント・サービスマネジメント' },
  { grade: 3, name: 'ストラテジ系', icon: '📊', description: '経営戦略・法務・システム戦略' },
] as const;

export function FEExamTopPage() {
  const allEras = getErasBySubject('fe-exam');

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* ヘッダー */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
            <Monitor className="h-5 w-5 text-amber-600" />
          </div>
          <div className="ml-3 flex-1">
            <h1 className="text-lg font-bold text-gray-800">基本情報技術者試験</h1>
            <p className="text-sm text-gray-500">分野をえらんで学習しよう</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-4">
        {fields.map((field) => {
          const eras = allEras.filter((e) => e.grade === field.grade);
          if (eras.length === 0) return null;

          return (
            <section key={field.grade} className="mb-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">{field.icon}</span>
                <div>
                  <h2 className="text-base font-bold text-gray-800">{field.name}</h2>
                  <p className="text-xs text-gray-500">{field.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                {eras.map((era) => (
                  <Link
                    key={era.id}
                    to={`/subjects/fe-exam/eras/${era.id}`}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-transform active:scale-98"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-xl">
                      {era.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{era.name}</h3>
                      <p className="text-sm text-gray-500">{era.subtitle}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {allEras.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">コンテンツを準備中です</p>
          </div>
        )}
      </main>
    </div>
  );
}

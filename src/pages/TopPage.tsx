import { Link } from 'react-router-dom';
import { Scroll, Calculator, Languages, Lock } from 'lucide-react';
import { subjects } from '../data/subjects';

const iconMap: Record<string, React.ElementType> = {
  scroll: Scroll,
  calculator: Calculator,
  languages: Languages,
};

export function TopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-6 shadow-sm">
        <h1 className="text-center text-2xl font-bold text-primary">
          チャットでスタディ
        </h1>
        <p className="mt-1 text-center text-sm text-gray-500">
          中学生のためのスマホ学習
        </p>
      </header>

      <main className="mx-auto max-w-md px-4 py-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          科目をえらぶ
        </h2>

        <div className="space-y-3">
          {subjects.map((subject) => {
            const Icon = iconMap[subject.icon] || Scroll;
            const isAvailable = subject.isAvailable;

            if (isAvailable) {
              return (
                <Link
                  key={subject.id}
                  to={`/subjects/${subject.id}`}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-transform active:scale-98"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-gray-500">{subject.description}</p>
                  </div>
                </Link>
              );
            }

            return (
              <div
                key={subject.id}
                className="flex items-center gap-4 rounded-xl bg-gray-100 p-4 opacity-60"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200">
                  <Lock className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-500">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-400">{subject.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

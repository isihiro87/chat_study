import { useEffect, useMemo, useState } from 'react';
import {
  eraMetas,
  topicMetas,
} from '../data/generated/topic-registry.generated';

const WEB_BASE_URL = 'https://www.chatstudy.jp';

type Subject = 'english' | 'history';
type Grade = 1 | 2 | 3;

const SUBJECTS: { id: Subject; label: string; emoji: string }[] = [
  { id: 'english', label: '英語', emoji: '🔤' },
  { id: 'history', label: '歴史', emoji: '⏳' },
];

const GRADES: { value: Grade; label: string }[] = [
  { value: 1, label: '中1' },
  { value: 2, label: '中2' },
  { value: 3, label: '中3' },
];

/**
 * 公式LINE のリッチメニュー「じっくり学ぶ」から開かれる LIFF ページ。
 *
 * 英語・歴史の単元一覧を学年タブで切り替えて表示する。
 * トピックをタップすると Web 版（www.chatstudy.jp）の学習ページに遷移し、
 * フラッシュカードでの暗記・四択クイズの連続学習ができる。
 *
 * 実装メモ:
 * - 単元メタデータは `src/data/generated/topic-registry.generated.ts` の
 *   `eraMetas` / `topicMetas` から取得（学習体験データ本体は含まれない）
 * - 英語・歴史以外は当 UI に含めない
 * - LIFF SDK は VITE_LIFF_ID_UNITS が設定されていれば初期化、未設定なら通常 SPA として動作
 */
export function LiffUnitsPage() {
  const [subject, setSubject] = useState<Subject>('english');
  const [grade, setGrade] = useState<Grade>(1);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const liffId = import.meta.env.VITE_LIFF_ID_UNITS as string | undefined;
      if (!liffId) return;
      try {
        const liff = (await import('@line/liff')).default;
        if (cancelled) return;
        await liff.init({ liffId });
      } catch (err) {
        console.warn('[LiffUnitsPage] liff.init failed', err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // 表示中の教科×学年 に該当する Era 一覧
  const visibleEras = useMemo(() => {
    return eraMetas
      .filter((e) => e.subjectId === subject && (e.grade ?? null) === grade)
      .sort((a, b) => a.order - b.order);
  }, [subject, grade]);

  // 表示中の era 配下のトピックを era 単位でグループ化
  const groupedTopics = useMemo(() => {
    return visibleEras.map((era) => ({
      era,
      topics: topicMetas
        .filter((t) => t.eraId === era.id)
        .sort((a, b) => a.order - b.order),
    }));
  }, [visibleEras]);

  const handleTopicClick = (eraId: string, topicId: string) => {
    const url = `${WEB_BASE_URL}/subjects/${subject}/eras/${eraId}/topics/${topicId}`;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-12">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1
            className="text-lg font-bold text-gray-800 text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            📚 じっくり学ぶ
          </h1>
          <p className="text-xs text-gray-500 text-center mt-1">
            選んだ単元を、フラッシュカード暗記＋連続クイズで深く学習しよう
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {/* 教科タブ */}
        <div className="flex gap-2 mt-4">
          {SUBJECTS.map((s) => {
            const active = subject === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSubject(s.id)}
                className={`flex-1 rounded-full py-2.5 px-4 text-sm font-medium transition ${
                  active
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                }`}
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                <span className="mr-1">{s.emoji}</span>
                {s.label}
              </button>
            );
          })}
        </div>

        {/* 学年タブ */}
        <div className="flex gap-2 mt-3">
          {GRADES.map((g) => {
            const active = grade === g.value;
            return (
              <button
                key={g.value}
                onClick={() => setGrade(g.value)}
                className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                }`}
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        {/* 単元一覧 */}
        {groupedTopics.length === 0 && (
          <p className="text-center text-sm text-gray-400 mt-12">
            この学年の単元はまだありません。
          </p>
        )}

        {groupedTopics.map(({ era, topics }) => (
          <section key={era.id} className="mt-6">
            <div className="flex items-baseline gap-2 mb-2 px-1">
              <span className="text-lg">{era.icon}</span>
              <h2
                className="text-base font-bold text-gray-800"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {era.name}
              </h2>
              <span className="text-xs text-gray-400">{era.period}</span>
            </div>
            <ul className="space-y-2">
              {topics.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => handleTopicClick(era.id, t.id)}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-left hover:border-amber-300 active:scale-[0.99] transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl flex-shrink-0">{t.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-medium text-gray-800 text-sm truncate"
                          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          {t.name}
                        </div>
                        {t.subtitle && (
                          <div className="text-xs text-gray-500 truncate mt-0.5">
                            {t.subtitle}
                          </div>
                        )}
                      </div>
                      <span className="text-gray-300">›</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
            {topics.length === 0 && (
              <p className="text-xs text-gray-400 px-1">準備中...</p>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { LiffAuthFailedScreen } from '../components/common/LiffAuthFailedScreen';
import { TrialPremiumBanner } from '../components/common/TrialPremiumBanner';
import { withFirestoreTimeout } from '../utils/firestoreTimeout';

const REPORT_DOC_TIMEOUT_MS = 5000;

interface PerCount {
  total: number;
  correct: number;
}

interface UserStats {
  totalAnswered: number;
  totalCorrect: number;
  bySubject: Record<string, PerCount>;
  byTopic: Record<string, PerCount>;
  streak: {
    current: number;
    longest: number;
    lastStudyDate: string;
  };
}

interface ReportData {
  stats: UserStats | null;
  testScopeCount: number;
}

const SUBJECT_ORDER = ['english', 'math', 'science', 'history', 'geography'];
const SUBJECT_LABEL: Record<string, string> = {
  english: '英語',
  math: '数学',
  science: '理科',
  history: '歴史',
  geography: '地理',
};

type Status = 'loading' | 'ready' | 'error';

function pct(count: PerCount | undefined): number {
  if (!count || count.total === 0) return 0;
  return Math.round((count.correct / count.total) * 100);
}

function isPerCount(v: unknown): v is PerCount {
  return (
    typeof v === 'object' &&
    v !== null &&
    typeof (v as PerCount).total === 'number'
  );
}

/**
 * 公式LINE のリッチメニュー「成績・記録」から開かれる LIFF ページ。
 *
 * users/{uid}.stats を 1 件 read して streak / 累計 / 教科別 / topic 別 を表示する。
 * stats は onAnswerCreated で自動的に increment 更新されている前提。
 */
export function LiffReportPage() {
  const { user, loading } = useAuth();
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_REPORT as string | undefined
  );

  const [status, setStatus] = useState<Status>('loading');
  const [data, setData] = useState<ReportData | null>(null);

  useEffect(() => {
    if (loading) return;
    if (!user) return;
    let cancelled = false;
    (async () => {
      try {
        const snap = await withFirestoreTimeout(
          getDoc(doc(db, 'users', user.uid)),
          REPORT_DOC_TIMEOUT_MS,
          `getDoc users/${user.uid} (report)`,
        );
        if (cancelled) return;

        if (!snap.exists()) {
          setData({ stats: null, testScopeCount: 0 });
          setStatus('ready');
          return;
        }

        const userData = snap.data();
        const rawStats = userData.stats as Record<string, unknown> | undefined;

        let stats: UserStats | null = null;
        if (rawStats && typeof rawStats.totalAnswered === 'number') {
          const bySubjectRaw = (rawStats.bySubject as Record<string, unknown>) ?? {};
          const byTopicRaw = (rawStats.byTopic as Record<string, unknown>) ?? {};
          const streakRaw = (rawStats.streak as Record<string, unknown>) ?? {};

          const bySubject: Record<string, PerCount> = {};
          for (const [k, v] of Object.entries(bySubjectRaw)) {
            if (isPerCount(v)) {
              bySubject[k] = { total: v.total, correct: v.correct ?? 0 };
            }
          }
          const byTopic: Record<string, PerCount> = {};
          for (const [k, v] of Object.entries(byTopicRaw)) {
            if (isPerCount(v)) {
              byTopic[k] = { total: v.total, correct: v.correct ?? 0 };
            }
          }

          stats = {
            totalAnswered: rawStats.totalAnswered,
            totalCorrect: typeof rawStats.totalCorrect === 'number' ? rawStats.totalCorrect : 0,
            bySubject,
            byTopic,
            streak: {
              current: typeof streakRaw.current === 'number' ? streakRaw.current : 0,
              longest: typeof streakRaw.longest === 'number' ? streakRaw.longest : 0,
              lastStudyDate:
                typeof streakRaw.lastStudyDate === 'string'
                  ? streakRaw.lastStudyDate
                  : '',
            },
          };
        }

        const testScopeRaw = userData.testScope as
          | { topics?: unknown }
          | undefined;
        const testScopeCount = Array.isArray(testScopeRaw?.topics)
          ? (testScopeRaw.topics as unknown[]).filter(
              (t) => typeof t === 'string'
            ).length
          : 0;

        setData({ stats, testScopeCount });
        setStatus('ready');
      } catch (err) {
        console.error('[LiffReportPage] load failed', err);
        if (!cancelled) {
          setStatus('error');
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, loading]);

  const sortedTopics = useMemo(() => {
    if (!data?.stats) return [];
    return Object.entries(data.stats.byTopic)
      .map(([topic, count]) => ({ topic, ...count, accuracy: pct(count) }))
      .sort((a, b) => a.accuracy - b.accuracy);
  }, [data]);

  const [showAllTopics, setShowAllTopics] = useState(false);
  const visibleTopics = showAllTopics ? sortedTopics : sortedTopics.slice(0, 10);

  const sortedSubjects = useMemo(() => {
    if (!data?.stats) return [];
    return SUBJECT_ORDER.filter((s) => data.stats!.bySubject[s])
      .concat(
        Object.keys(data.stats.bySubject).filter((s) => !SUBJECT_ORDER.includes(s))
      )
      .map((s) => ({
        subject: s,
        label: SUBJECT_LABEL[s] ?? s,
        ...data.stats!.bySubject[s],
        accuracy: pct(data.stats!.bySubject[s]),
      }));
  }, [data]);

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <LiffAuthFailedScreen nextPath="/liff/report" />;
  }

  if (status === 'loading') {
    return <LoadingScreen message="記録を集計中..." />;
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-sm text-red-600 mb-3">
            記録を取得できませんでした。
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-2 text-sm font-medium"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  const stats = data?.stats;

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-12">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1
            className="text-lg font-bold text-gray-800 text-center"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            📊 成績・記録
          </h1>
        </div>
      </header>

      <TrialPremiumBanner />

      <main className="max-w-2xl mx-auto px-4">
        {!stats ? (
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">
              まだ記録がありません。
              <br />
              LINE で 1 問解いてみよう！
            </p>
            <a
              href="https://liff.line.me/2009587166-LjyCza2c"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-2 text-sm font-medium"
            >
              単元を選ぶ
            </a>
          </div>
        ) : (
          <>
            {data && data.testScopeCount > 0 && (
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-center">
                <span className="text-xs text-amber-700 font-medium">
                  🎯 出題範囲: {data.testScopeCount} 単元
                </span>
              </div>
            )}

            {/* Streak カード */}
            <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-1">連続記録</div>
                <div className="text-4xl font-bold text-amber-600">
                  {stats.streak.current}
                  <span className="text-base text-gray-500 ml-1">日</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  最長: {stats.streak.longest} 日
                  {stats.streak.lastStudyDate && (
                    <> ・ 最終: {stats.streak.lastStudyDate}</>
                  )}
                </div>
              </div>
            </section>

            {/* 累計サマリ */}
            <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-xs text-gray-500">解いた</div>
                  <div className="text-2xl font-bold text-gray-800">
                    {stats.totalAnswered}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">正解</div>
                  <div className="text-2xl font-bold text-gray-800">
                    {stats.totalCorrect}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">正答率</div>
                  <div className="text-2xl font-bold text-amber-600">
                    {pct({ total: stats.totalAnswered, correct: stats.totalCorrect })}
                    <span className="text-xs">%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 教科別 */}
            {sortedSubjects.length > 0 && (
              <section className="mt-4">
                <h2
                  className="text-sm font-bold text-gray-700 px-1 mb-2"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  教科別
                </h2>
                <ul className="space-y-2">
                  {sortedSubjects.map((s) => (
                    <li
                      key={s.subject}
                      className="bg-white rounded-2xl shadow-sm px-4 py-3 flex items-center gap-3"
                    >
                      <span
                        className="flex-1 text-sm font-medium text-gray-800"
                        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        {s.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {s.correct}/{s.total}
                      </span>
                      <span className="text-sm font-bold text-amber-600 w-12 text-right">
                        {s.accuracy}%
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* topic 別（苦手から順） */}
            {sortedTopics.length > 0 && (
              <section className="mt-4">
                <h2
                  className="text-sm font-bold text-gray-700 px-1 mb-2"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  単元別（苦手な順）
                </h2>
                <ul className="space-y-2">
                  {visibleTopics.map((t) => (
                    <li
                      key={t.topic}
                      className="bg-white rounded-2xl shadow-sm px-4 py-3 flex items-center gap-3"
                    >
                      <span
                        className="flex-1 text-sm text-gray-800 truncate"
                        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        {t.topic}
                      </span>
                      <span className="text-xs text-gray-500">
                        {t.correct}/{t.total}
                      </span>
                      <span
                        className={`text-sm font-bold w-12 text-right ${
                          t.accuracy >= 70
                            ? 'text-green-600'
                            : t.accuracy >= 40
                              ? 'text-amber-600'
                              : 'text-red-500'
                        }`}
                      >
                        {t.accuracy}%
                      </span>
                    </li>
                  ))}
                </ul>
                {sortedTopics.length > 10 && (
                  <button
                    onClick={() => setShowAllTopics(!showAllTopics)}
                    className="mt-3 w-full text-center text-xs text-amber-600 font-medium"
                  >
                    {showAllTopics
                      ? '▲ 上位10件だけ表示'
                      : `▼ もっと見る（残り${sortedTopics.length - 10}件）`}
                  </button>
                )}
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  Timestamp,
  where,
} from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/common/Header';
import { InstagramCampaignsTab } from './admin/InstagramCampaignsTab';

/**
 * 管理ダッシュボード（ローカル開発限定）
 *
 * 公式LINE / LIFF 経由のユーザー動きに絞った 4 タブ:
 *  1. 配信反応  : push 通数の種別内訳 + dailyQuiz 配信 vs answers のファネル
 *  2. LIFF 利用 : users.studyStats 合算 + 月間 liff_units_open 件数
 *  3. 継続率    : status 内訳 + streak 分布 + DAU/WAU/MAU
 *  4. 問題別    : questions.totalAnswered / totalCorrect から算出
 *
 * App.tsx 側で `import.meta.env.DEV` ガード経由でルート登録されるため、
 * 本番ビルド (`vite build`) からは到達不能。
 */

const ADMIN_EMAIL = 'ishimotty.gst@gmail.com';

type Subject = 'history' | 'english' | 'math' | 'science' | 'geography';
type Grade = '中1' | '中2' | '中3';
type TabKey = 'reach' | 'liff' | 'retention' | 'questions' | 'instagram';

interface QuestionRow {
  id: string;
  subject: Subject;
  grade: Grade;
  topic: string;
  text: string;
  totalAnswered: number;
  totalCorrect: number;
  accuracy: number | null;
}

interface DeliveryStatsDoc {
  yearMonth: string;
  totalPushCount: number;
  pushCountByType: Record<string, number>;
}

interface StreakBucket {
  label: string;
  count: number;
}

interface UserSnapshot {
  uid: string;
  status: string;
  streakCurrent: number;
  studyStats: Record<
    string,
    { fcClearCount?: number; quizClearCount?: number }
  >;
}

interface AnswerRow {
  uid: string;
  answeredAt: Date;
  isCorrect: boolean;
}

function formatPercent(rate: number | null): string {
  if (rate === null) return '—';
  return `${Math.round(rate * 100)}%`;
}

function getJstYearMonth(date: Date): string {
  const jstMs = date.getTime() + 9 * 60 * 60 * 1000;
  return new Date(jstMs).toISOString().slice(0, 7);
}

function getStartOfJstMonth(date: Date): Date {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const startJst = new Date(
    Date.UTC(jst.getUTCFullYear(), jst.getUTCMonth(), 1),
  );
  return new Date(startJst.getTime() - 9 * 60 * 60 * 1000);
}

function bucketizeStreaks(values: number[]): StreakBucket[] {
  const buckets: { label: string; range: [number, number] }[] = [
    { label: '0 日', range: [0, 0] },
    { label: '1–2 日', range: [1, 2] },
    { label: '3–6 日', range: [3, 6] },
    { label: '7–13 日', range: [7, 13] },
    { label: '14–29 日', range: [14, 29] },
    { label: '30 日以上', range: [30, Infinity] },
  ];
  return buckets.map(({ label, range }) => ({
    label,
    count: values.filter((v) => v >= range[0] && v <= range[1]).length,
  }));
}

export function AdminDashboardPage() {
  const { user } = useAuth();
  const isAdmin = user?.email === ADMIN_EMAIL;

  const [activeTab, setActiveTab] = useState<TabKey>('reach');
  const [questionRows, setQuestionRows] = useState<QuestionRow[]>([]);
  const [deliveryStats, setDeliveryStats] = useState<DeliveryStatsDoc | null>(null);
  const [users, setUsers] = useState<UserSnapshot[]>([]);
  const [recentAnswers, setRecentAnswers] = useState<AnswerRow[]>([]);
  const [monthlyLiffOpenCount, setMonthlyLiffOpenCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 問題別タブのフィルタ
  const [subjectFilter, setSubjectFilter] = useState<Subject | 'all'>('all');
  const [gradeFilter, setGradeFilter] = useState<Grade | 'all'>('all');
  const [sortMode, setSortMode] = useState<'accuracy-asc' | 'answered-desc'>(
    'accuracy-asc',
  );

  useEffect(() => {
    if (!isAdmin) return;

    let cancelled = false;
    async function loadAll() {
      setLoading(true);
      setError(null);
      try {
        const now = new Date();
        const yearMonth = getJstYearMonth(now);
        const startOfMonth = getStartOfJstMonth(now);
        // DAU/WAU/MAU 用に直近 31 日分を一度に取る（月初境界もカバー）
        const thirtyOneDaysAgo = new Date(
          now.getTime() - 31 * 24 * 60 * 60 * 1000,
        );
        const answersFromTs = Timestamp.fromDate(
          startOfMonth < thirtyOneDaysAgo ? startOfMonth : thirtyOneDaysAgo,
        );

        const [
          questionsSnap,
          usersSnap,
          deliveryDocSnap,
          answersSnap,
          liffOpenSnap,
        ] = await Promise.all([
          getDocs(collection(db, 'questions')),
          getDocs(collection(db, 'users')),
          getDoc(doc(db, 'deliveryStats', yearMonth)),
          getDocs(
            query(
              collection(db, 'answers'),
              where('answeredAt', '>=', answersFromTs),
            ),
          ),
          getDocs(
            query(
              collection(db, 'premiumFunnelEvents'),
              where('eventType', '==', 'liff_units_open'),
              where('occurredAt', '>=', Timestamp.fromDate(startOfMonth)),
            ),
          ),
        ]);
        if (cancelled) return;

        setQuestionRows(
          questionsSnap.docs.map((d) => {
            const data = d.data() as Partial<QuestionRow> & {
              totalAnswered?: number;
              totalCorrect?: number;
            };
            const total = data.totalAnswered ?? 0;
            const correct = data.totalCorrect ?? 0;
            return {
              id: d.id,
              subject: (data.subject ?? 'history') as Subject,
              grade: (data.grade ?? '中1') as Grade,
              topic: data.topic ?? '',
              text: data.text ?? '',
              totalAnswered: total,
              totalCorrect: correct,
              accuracy: total > 0 ? correct / total : null,
            };
          }),
        );

        setUsers(
          usersSnap.docs.map((d) => {
            const data = d.data() as {
              status?: string;
              stats?: {
                streak?: { current?: number };
              };
              studyStats?: Record<
                string,
                { fcClearCount?: number; quizClearCount?: number }
              >;
            };
            return {
              uid: d.id,
              status: data.status ?? '(未設定)',
              streakCurrent: data.stats?.streak?.current ?? 0,
              studyStats: data.studyStats ?? {},
            };
          }),
        );

        if (deliveryDocSnap.exists()) {
          const data = deliveryDocSnap.data() as Partial<DeliveryStatsDoc>;
          setDeliveryStats({
            yearMonth: data.yearMonth ?? yearMonth,
            totalPushCount: data.totalPushCount ?? 0,
            pushCountByType: data.pushCountByType ?? {},
          });
        } else {
          setDeliveryStats({
            yearMonth,
            totalPushCount: 0,
            pushCountByType: {},
          });
        }

        setRecentAnswers(
          answersSnap.docs
            .map((d) => {
              const data = d.data() as {
                uid?: string;
                answeredAt?: { toDate?: () => Date };
                isCorrect?: boolean;
              };
              const ts = data.answeredAt?.toDate?.();
              if (!ts || typeof data.uid !== 'string') return null;
              return {
                uid: data.uid,
                answeredAt: ts,
                isCorrect: data.isCorrect === true,
              };
            })
            .filter((r): r is AnswerRow => r !== null),
        );

        setMonthlyLiffOpenCount(liffOpenSnap.size);
      } catch (e) {
        console.error('[AdminDashboardPage] load failed:', e);
        if (!cancelled) {
          setError(e instanceof Error ? e.message : '読み込みに失敗しました');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadAll();
    return () => {
      cancelled = true;
    };
  }, [isAdmin]);

  // ---- 集計 ----

  const reachMetrics = useMemo(() => {
    const startOfMonth = getStartOfJstMonth(new Date());
    const monthlyAnswers = recentAnswers.filter(
      (a) => a.answeredAt >= startOfMonth,
    );
    const dailyQuizCount = deliveryStats?.pushCountByType.dailyQuiz ?? 0;
    const answersThisMonth = monthlyAnswers.length;
    const funnelRate =
      dailyQuizCount > 0 ? answersThisMonth / dailyQuizCount : null;
    return { dailyQuizCount, answersThisMonth, funnelRate };
  }, [deliveryStats, recentAnswers]);

  const liffMetrics = useMemo(() => {
    let totalFc = 0;
    let totalQuiz = 0;
    const fcByTopic = new Map<string, number>();
    const quizByTopic = new Map<string, number>();
    let usersWithStudy = 0;

    for (const u of users) {
      let hasStudy = false;
      for (const [topicId, s] of Object.entries(u.studyStats ?? {})) {
        const fc = s.fcClearCount ?? 0;
        const quiz = s.quizClearCount ?? 0;
        totalFc += fc;
        totalQuiz += quiz;
        if (fc > 0) fcByTopic.set(topicId, (fcByTopic.get(topicId) ?? 0) + fc);
        if (quiz > 0)
          quizByTopic.set(topicId, (quizByTopic.get(topicId) ?? 0) + quiz);
        if (fc > 0 || quiz > 0) hasStudy = true;
      }
      if (hasStudy) usersWithStudy++;
    }

    const topFc = Array.from(fcByTopic.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    const topQuiz = Array.from(quizByTopic.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    return {
      totalFc,
      totalQuiz,
      usersWithStudy,
      topFc,
      topQuiz,
    };
  }, [users]);

  const retentionMetrics = useMemo(() => {
    const statusMap = new Map<string, number>();
    const streakValues: number[] = [];
    users.forEach((u) => {
      statusMap.set(u.status, (statusMap.get(u.status) ?? 0) + 1);
      streakValues.push(u.streakCurrent);
    });
    const statusRows = Array.from(statusMap.entries())
      .map(([status, count]) => ({ status, count }))
      .sort((a, b) => b.count - a.count);
    const streakBuckets = bucketizeStreaks(streakValues);

    const now = Date.now();
    const dau = new Set<string>();
    const wau = new Set<string>();
    const mau = new Set<string>();
    for (const a of recentAnswers) {
      const ageMs = now - a.answeredAt.getTime();
      if (ageMs <= 24 * 60 * 60 * 1000) dau.add(a.uid);
      if (ageMs <= 7 * 24 * 60 * 60 * 1000) wau.add(a.uid);
      if (ageMs <= 30 * 24 * 60 * 60 * 1000) mau.add(a.uid);
    }

    return {
      statusRows,
      streakBuckets,
      dau: dau.size,
      wau: wau.size,
      mau: mau.size,
    };
  }, [users, recentAnswers]);

  const filteredQuestions = useMemo(() => {
    const filtered = questionRows.filter((r) => {
      if (subjectFilter !== 'all' && r.subject !== subjectFilter) return false;
      if (gradeFilter !== 'all' && r.grade !== gradeFilter) return false;
      return true;
    });
    if (sortMode === 'accuracy-asc') {
      return filtered.slice().sort((a, b) => {
        const aa = a.accuracy ?? 1.1;
        const bb = b.accuracy ?? 1.1;
        if (aa !== bb) return aa - bb;
        return b.totalAnswered - a.totalAnswered;
      });
    }
    return filtered.slice().sort((a, b) => b.totalAnswered - a.totalAnswered);
  }, [questionRows, subjectFilter, gradeFilter, sortMode]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <p className="text-gray-500">アクセス権限がありません</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Header title="管理ダッシュボード" subtitle="ローカル限定" showBack />
      <main className="mx-auto max-w-3xl px-4 py-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {(
            [
              { key: 'reach', label: '配信反応' },
              { key: 'liff', label: 'LIFF 利用' },
              { key: 'retention', label: '継続率' },
              { key: 'questions', label: '問題別' },
              { key: 'instagram', label: 'インスタ' },
            ] as { key: TabKey; label: string }[]
          ).map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeTab === t.key
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {loading && <p className="text-sm text-gray-400">読み込み中...</p>}
        {error && (
          <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg">
            {error}
          </div>
        )}

        {!loading && !error && activeTab === 'reach' && deliveryStats && (
          <ReachTab
            deliveryStats={deliveryStats}
            funnel={reachMetrics}
          />
        )}

        {!loading && !error && activeTab === 'liff' && (
          <LiffTab
            metrics={liffMetrics}
            monthlyLiffOpenCount={monthlyLiffOpenCount}
            yearMonth={deliveryStats?.yearMonth ?? ''}
            totalUsers={users.length}
          />
        )}

        {!loading && !error && activeTab === 'retention' && (
          <RetentionTab metrics={retentionMetrics} totalUsers={users.length} />
        )}

        {!loading && !error && activeTab === 'questions' && (
          <QuestionsTab
            rows={filteredQuestions}
            subjectFilter={subjectFilter}
            gradeFilter={gradeFilter}
            sortMode={sortMode}
            onSubject={setSubjectFilter}
            onGrade={setGradeFilter}
            onSort={setSortMode}
          />
        )}

        {activeTab === 'instagram' && user && (
          <InstagramCampaignsTab adminUid={user.uid} />
        )}
      </main>
    </div>
  );
}

// ---- Tab components ----

function ReachTab({
  deliveryStats,
  funnel,
}: {
  deliveryStats: DeliveryStatsDoc;
  funnel: {
    dailyQuizCount: number;
    answersThisMonth: number;
    funnelRate: number | null;
  };
}) {
  return (
    <section className="space-y-3">
      <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">
        <p className="text-xs text-gray-500">
          {deliveryStats.yearMonth} の累計配信
        </p>
        <p className="text-2xl font-bold text-gray-800">
          {deliveryStats.totalPushCount.toLocaleString()} 通
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">
        <p className="text-xs text-gray-500">配信 → 回答ファネル</p>
        <div className="grid grid-cols-3 gap-2">
          <Stat
            label="dailyQuiz 配信"
            value={`${funnel.dailyQuizCount.toLocaleString()} 通`}
          />
          <Stat
            label="今月 answers"
            value={`${funnel.answersThisMonth.toLocaleString()} 件`}
          />
          <Stat label="ファネル率" value={formatPercent(funnel.funnelRate)} />
        </div>
        <p className="text-[10px] text-gray-400">
          ※ ファネル率は「今月の dailyQuiz 配信通数」に対する「今月の answers
          記録数」の比。1人が複数回答した場合も answers に加算されるため
          開封率の代替指標として扱う。
        </p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          種別ごと
        </h2>
        <div className="bg-white rounded-xl shadow-sm divide-y">
          {Object.entries(deliveryStats.pushCountByType)
            .sort((a, b) => b[1] - a[1])
            .map(([type, count]) => (
              <div
                key={type}
                className="p-3 text-xs flex items-center gap-2"
              >
                <span className="text-gray-700 flex-1">{type}</span>
                <span className="font-bold text-gray-800">
                  {count.toLocaleString()} 通
                </span>
              </div>
            ))}
          {Object.keys(deliveryStats.pushCountByType).length === 0 && (
            <p className="text-xs text-gray-400 p-4">
              今月の送信記録はまだありません
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function LiffTab({
  metrics,
  monthlyLiffOpenCount,
  yearMonth,
  totalUsers,
}: {
  metrics: {
    totalFc: number;
    totalQuiz: number;
    usersWithStudy: number;
    topFc: [string, number][];
    topQuiz: [string, number][];
  };
  monthlyLiffOpenCount: number;
  yearMonth: string;
  totalUsers: number;
}) {
  const studyRate = totalUsers > 0 ? metrics.usersWithStudy / totalUsers : null;
  return (
    <section className="space-y-3">
      <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">
        <p className="text-xs text-gray-500">{yearMonth} の LIFF 利用</p>
        <div className="grid grid-cols-3 gap-2">
          <Stat
            label="開封 (units_open)"
            value={`${monthlyLiffOpenCount.toLocaleString()} 件`}
          />
          <Stat
            label="累計 FC 完了"
            value={`${metrics.totalFc.toLocaleString()} 回`}
          />
          <Stat
            label="累計 Quiz 完了"
            value={`${metrics.totalQuiz.toLocaleString()} 回`}
          />
        </div>
        <p className="text-[10px] text-gray-400">
          ※ FC/Quiz 完了は累計値（users.studyStats の合算）。月次分割は未対応。
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 space-y-1">
        <p className="text-xs text-gray-500">
          LIFF 学習体験を 1 回以上完了したユーザー
        </p>
        <p className="text-lg font-bold text-gray-800">
          {metrics.usersWithStudy.toLocaleString()} / {totalUsers.toLocaleString()}{' '}
          人 <span className="text-amber-500 ml-1">
            ({formatPercent(studyRate)})
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            FC 完了 Top 10
          </h2>
          <div className="bg-white rounded-xl shadow-sm divide-y">
            {metrics.topFc.length === 0 ? (
              <p className="text-xs text-gray-400 p-4">データなし</p>
            ) : (
              metrics.topFc.map(([topicId, count]) => (
                <div key={topicId} className="p-3 text-xs flex gap-2">
                  <span className="text-gray-700 flex-1 truncate">
                    {topicId}
                  </span>
                  <span className="font-bold">{count}</span>
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Quiz 完了 Top 10
          </h2>
          <div className="bg-white rounded-xl shadow-sm divide-y">
            {metrics.topQuiz.length === 0 ? (
              <p className="text-xs text-gray-400 p-4">データなし</p>
            ) : (
              metrics.topQuiz.map(([topicId, count]) => (
                <div key={topicId} className="p-3 text-xs flex gap-2">
                  <span className="text-gray-700 flex-1 truncate">
                    {topicId}
                  </span>
                  <span className="font-bold">{count}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function RetentionTab({
  metrics,
  totalUsers,
}: {
  metrics: {
    statusRows: { status: string; count: number }[];
    streakBuckets: StreakBucket[];
    dau: number;
    wau: number;
    mau: number;
  };
  totalUsers: number;
}) {
  return (
    <section className="space-y-3">
      <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">
        <p className="text-xs text-gray-500">アクティブユーザー（回答ベース）</p>
        <div className="grid grid-cols-3 gap-2">
          <Stat label="DAU (24h)" value={metrics.dau.toLocaleString()} />
          <Stat label="WAU (7d)" value={metrics.wau.toLocaleString()} />
          <Stat label="MAU (30d)" value={metrics.mau.toLocaleString()} />
        </div>
        <p className="text-[10px] text-gray-400">
          ※ 直近 N 日に answers を 1 件以上記録したユニーク uid。
        </p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          status 内訳（全 {totalUsers.toLocaleString()} 人）
        </h2>
        <div className="bg-white rounded-xl shadow-sm divide-y">
          {metrics.statusRows.length === 0 ? (
            <p className="text-xs text-gray-400 p-4">データなし</p>
          ) : (
            metrics.statusRows.map((r) => (
              <div
                key={r.status}
                className="p-3 text-xs flex items-center gap-2"
              >
                <span className="text-gray-700 flex-1">{r.status}</span>
                <span className="font-bold text-gray-800">
                  {r.count.toLocaleString()} 人
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          連続日数 (streak.current) 分布
        </h2>
        <div className="bg-white rounded-xl shadow-sm divide-y">
          {metrics.streakBuckets.map((b) => (
            <div key={b.label} className="p-3 text-xs flex items-center gap-2">
              <span className="text-gray-700 flex-1">{b.label}</span>
              <span className="font-bold text-gray-800">
                {b.count.toLocaleString()} 人
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuestionsTab({
  rows,
  subjectFilter,
  gradeFilter,
  sortMode,
  onSubject,
  onGrade,
  onSort,
}: {
  rows: QuestionRow[];
  subjectFilter: Subject | 'all';
  gradeFilter: Grade | 'all';
  sortMode: 'accuracy-asc' | 'answered-desc';
  onSubject: (v: Subject | 'all') => void;
  onGrade: (v: Grade | 'all') => void;
  onSort: (v: 'accuracy-asc' | 'answered-desc') => void;
}) {
  return (
    <section className="space-y-3">
      <div className="flex flex-wrap gap-2 items-center text-xs">
        <select
          value={subjectFilter}
          onChange={(e) => onSubject(e.target.value as Subject | 'all')}
          className="border rounded px-2 py-1"
        >
          <option value="all">教科すべて</option>
          <option value="history">歴史</option>
          <option value="english">英語</option>
          <option value="math">数学</option>
          <option value="science">理科</option>
          <option value="geography">地理</option>
        </select>
        <select
          value={gradeFilter}
          onChange={(e) => onGrade(e.target.value as Grade | 'all')}
          className="border rounded px-2 py-1"
        >
          <option value="all">学年すべて</option>
          <option value="中1">中1</option>
          <option value="中2">中2</option>
          <option value="中3">中3</option>
        </select>
        <select
          value={sortMode}
          onChange={(e) =>
            onSort(e.target.value as 'accuracy-asc' | 'answered-desc')
          }
          className="border rounded px-2 py-1"
        >
          <option value="accuracy-asc">正答率の低い順</option>
          <option value="answered-desc">回答数の多い順</option>
        </select>
        <span className="text-gray-500 ml-auto">{rows.length} 問</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm divide-y">
        {rows.length === 0 ? (
          <p className="text-xs text-gray-400 p-4">該当する問題なし</p>
        ) : (
          rows.map((r) => (
            <div key={r.id} className="p-3 text-xs space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-[10px] shrink-0">
                  {r.subject}/{r.grade}
                </span>
                <span className="text-gray-600 flex-1 truncate">
                  {r.topic}
                </span>
                <span
                  className={`font-bold shrink-0 ${
                    r.accuracy === null
                      ? 'text-gray-400'
                      : r.accuracy >= 0.8
                        ? 'text-emerald-600'
                        : r.accuracy >= 0.5
                          ? 'text-amber-500'
                          : 'text-red-500'
                  }`}
                >
                  {formatPercent(r.accuracy)}
                </span>
                <span className="text-gray-400 w-16 text-right shrink-0">
                  {r.totalCorrect}/{r.totalAnswered}
                </span>
              </div>
              <p className="text-gray-700 line-clamp-2">{r.text}</p>
              <p className="text-[10px] text-gray-400">{r.id}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-2">
      <p className="text-[10px] text-gray-500">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  );
}

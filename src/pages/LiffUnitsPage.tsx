import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import {
  lineStudyHistoryG1,
  type StudyEra,
  type StudyTopic,
  type StudyFlashcard,
  type StudyQuizQuestion,
} from '../data/generated/line-study-history-g1.generated';

type ViewMode = 'list' | 'setup' | 'fc' | 'quiz' | 'fc-end' | 'quiz-end';
type SetupKind = 'fc' | 'quiz';
type Difficulty = 'any' | 'basic' | 'standard' | 'advanced';

const DIFFICULTY_OPTIONS: { value: Difficulty; label: string }[] = [
  { value: 'any', label: 'すべて' },
  { value: 'basic', label: '基本' },
  { value: 'standard', label: '標準' },
  { value: 'advanced', label: '応用' },
];

const COUNT_OPTIONS = [5, 10, 20] as const;

interface PerTopicStat {
  fcClearCount: number;
  quizClearCount: number;
  quizBestAccuracy: number;
  quizLastAccuracy: number;
}

const EMPTY_STAT: PerTopicStat = {
  fcClearCount: 0,
  quizClearCount: 0,
  quizBestAccuracy: 0,
  quizLastAccuracy: 0,
};

type StudyStatsMap = Record<string, PerTopicStat>;

function difficultyMatch(itemDiff: string | undefined, sel: Difficulty): boolean {
  if (sel === 'any') return true;
  return itemDiff === sel;
}

/**
 * 公式LINE のリッチメニュー「じっくり学ぶ」から開かれる LIFF ページ。
 *
 * インライン学習体験を提供（歴史・中1、data/content/history/01〜04）:
 *  - トピック一覧（時代別 + テスト範囲フィルタ + クリア回数 / 正答率の表示）
 *  - セットアップ: 枚数・問題数の指定、難易度フィルタ
 *  - 暗記カード: フリップ + わかった/わからない振り分け
 *  - クイズ: 4 択 + 間違えた問題のみ復習
 *  - 完了時に Firestore `users/{uid}.studyStats[topicId]` を更新
 *
 * 認証は `useLiffAuth` 経由で LIFF SDK ID トークン → Firebase Auth。
 */
export function LiffUnitsPage() {
  const { user, loading } = useAuth();
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_UNITS as string | undefined
  );

  const [view, setView] = useState<ViewMode>('list');
  const [currentTopic, setCurrentTopic] = useState<StudyTopic | null>(null);
  const [setupKind, setSetupKind] = useState<SetupKind>('fc');
  const [setupDifficulty, setSetupDifficulty] = useState<Difficulty>('any');
  const [setupCount, setSetupCount] = useState<number | 'all'>('all');

  const [testScopeTopics, setTestScopeTopics] = useState<Set<string>>(new Set());
  const [testScopeLoaded, setTestScopeLoaded] = useState(false);
  const [scopeFilterOn, setScopeFilterOn] = useState(true);
  const [studyStats, setStudyStats] = useState<StudyStatsMap>({});

  // 実行中セッションのアイテム配列
  const [activeFcItems, setActiveFcItems] = useState<StudyFlashcard[]>([]);
  const [activeQuizItems, setActiveQuizItems] = useState<StudyQuizQuestion[]>([]);

  // 振り分け結果（end view で利用）
  const [unknownIds, setUnknownIds] = useState<string[]>([]);
  const [knownIds, setKnownIds] = useState<string[]>([]);
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [lastQuizCorrect, setLastQuizCorrect] = useState(0);
  const [lastQuizTotal, setLastQuizTotal] = useState(0);

  // testScope と studyStats を Firestore から読む
  useEffect(() => {
    if (loading || !user) return;
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (cancelled) return;
        const data = snap.exists() ? snap.data() : {};
        const topics = Array.isArray(data.testScope?.topics)
          ? (data.testScope.topics as unknown[]).filter(
              (t): t is string => typeof t === 'string'
            )
          : [];
        setTestScopeTopics(new Set(topics));

        const statsRaw = (data.studyStats as Record<string, unknown> | undefined) ?? {};
        const stats: StudyStatsMap = {};
        for (const [k, v] of Object.entries(statsRaw)) {
          if (v && typeof v === 'object') {
            const s = v as Partial<PerTopicStat>;
            stats[k] = {
              fcClearCount: typeof s.fcClearCount === 'number' ? s.fcClearCount : 0,
              quizClearCount: typeof s.quizClearCount === 'number' ? s.quizClearCount : 0,
              quizBestAccuracy: typeof s.quizBestAccuracy === 'number' ? s.quizBestAccuracy : 0,
              quizLastAccuracy: typeof s.quizLastAccuracy === 'number' ? s.quizLastAccuracy : 0,
            };
          }
        }
        setStudyStats(stats);
      } catch (err) {
        console.warn('[LiffUnitsPage] testScope/studyStats load failed', err);
      } finally {
        if (!cancelled) setTestScopeLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, loading]);

  const filteredEras: StudyEra[] = useMemo(() => {
    if (!scopeFilterOn || testScopeTopics.size === 0) {
      return lineStudyHistoryG1;
    }
    return lineStudyHistoryG1
      .map((era) => ({
        ...era,
        topics: era.topics.filter((t) => testScopeTopics.has(t.name)),
      }))
      .filter((era) => era.topics.length > 0);
  }, [scopeFilterOn, testScopeTopics]);

  const totalTopics = useMemo(
    () => lineStudyHistoryG1.reduce((s, e) => s + e.topics.length, 0),
    []
  );
  const visibleTopics = useMemo(
    () => filteredEras.reduce((s, e) => s + e.topics.length, 0),
    [filteredEras]
  );

  // ---- 共通: セットアップ画面起動 ----
  const openSetup = (topic: StudyTopic, kind: SetupKind) => {
    setCurrentTopic(topic);
    setSetupKind(kind);
    setSetupDifficulty('any');
    setSetupCount('all');
    setView('setup');
  };

  // ---- 共通: セットアップから FC/Quiz を開始 ----
  const startWithSetup = () => {
    if (!currentTopic) return;
    if (setupKind === 'fc') {
      const filtered = currentTopic.flashcards.filter((c) =>
        difficultyMatch(c.difficulty, setupDifficulty)
      );
      const sampled =
        setupCount === 'all' || filtered.length <= setupCount
          ? filtered
          : filtered.slice(0, setupCount);
      if (sampled.length === 0) return;
      setActiveFcItems(sampled);
      setKnownIds([]);
      setUnknownIds([]);
      setView('fc');
    } else {
      const filtered = currentTopic.quiz.filter((q) =>
        difficultyMatch(q.difficulty, setupDifficulty)
      );
      const sampled =
        setupCount === 'all' || filtered.length <= setupCount
          ? filtered
          : filtered.slice(0, setupCount);
      if (sampled.length === 0) return;
      setActiveQuizItems(sampled);
      setWrongIds([]);
      setView('quiz');
    }
  };

  // ---- FC 完了処理 ----
  const handleFcFinish = (known: string[], unknown: string[]) => {
    setKnownIds(known);
    setUnknownIds(unknown);
    setView('fc-end');
    void persistStudyStats('fc', currentTopic?.topicId, { increment: true });
  };

  // ---- Quiz 完了処理 ----
  const handleQuizFinish = (
    correct: number,
    total: number,
    wrong: string[]
  ) => {
    setLastQuizCorrect(correct);
    setLastQuizTotal(total);
    setWrongIds(wrong);
    setView('quiz-end');
    const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
    void persistStudyStats('quiz', currentTopic?.topicId, {
      increment: true,
      accuracy: acc,
    });
  };

  // ---- Firestore に stats を保存 ----
  const persistStudyStats = async (
    kind: SetupKind,
    topicId: string | undefined,
    args: { increment: boolean; accuracy?: number }
  ) => {
    if (!user || !topicId) return;
    const prev = studyStats[topicId] ?? EMPTY_STAT;
    const updated: PerTopicStat = {
      ...prev,
    };
    if (kind === 'fc' && args.increment) {
      updated.fcClearCount = prev.fcClearCount + 1;
    }
    if (kind === 'quiz' && args.increment) {
      updated.quizClearCount = prev.quizClearCount + 1;
      if (typeof args.accuracy === 'number') {
        updated.quizLastAccuracy = args.accuracy;
        updated.quizBestAccuracy = Math.max(prev.quizBestAccuracy, args.accuracy);
      }
    }
    setStudyStats((prevMap) => ({ ...prevMap, [topicId]: updated }));
    try {
      await setDoc(
        doc(db, 'users', user.uid),
        {
          studyStats: {
            [topicId]: { ...updated, updatedAt: serverTimestamp() },
          },
        },
        { merge: true }
      );
    } catch (err) {
      console.warn('[LiffUnitsPage] studyStats save failed', err);
    }
  };

  // ---- 振り分けで「わからなかった/間違えた」分だけ繰り返す ----
  const reviewUnknownFc = () => {
    if (!currentTopic) return;
    const items = currentTopic.flashcards.filter((c) => unknownIds.includes(c.id));
    if (items.length === 0) return;
    setActiveFcItems(items);
    setKnownIds([]);
    setUnknownIds([]);
    setView('fc');
  };
  const reviewWrongQuiz = () => {
    if (!currentTopic) return;
    const items = currentTopic.quiz.filter((q) => wrongIds.includes(q.id));
    if (items.length === 0) return;
    setActiveQuizItems(items);
    setWrongIds([]);
    setView('quiz');
  };
  const retrySameFc = () => {
    setKnownIds([]);
    setUnknownIds([]);
    setView('fc');
  };
  const retrySameQuiz = () => {
    setWrongIds([]);
    setView('quiz');
  };
  const backToList = () => {
    setView('list');
    setCurrentTopic(null);
  };

  // ---- レンダー分岐 ----

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }
  if (!user) {
    return <Navigate to="/welcome?next=/liff/units" replace />;
  }
  if (!testScopeLoaded) {
    return <LoadingScreen />;
  }

  if (view === 'setup' && currentTopic) {
    return (
      <SetupView
        topic={currentTopic}
        kind={setupKind}
        difficulty={setupDifficulty}
        count={setupCount}
        onChangeDifficulty={setSetupDifficulty}
        onChangeCount={setSetupCount}
        onStart={startWithSetup}
        onBack={backToList}
      />
    );
  }
  if (view === 'fc' && currentTopic) {
    return (
      <FlashcardView
        topic={currentTopic}
        items={activeFcItems}
        onFinish={handleFcFinish}
        onBack={backToList}
      />
    );
  }
  if (view === 'fc-end' && currentTopic) {
    return (
      <FcEndView
        topic={currentTopic}
        total={activeFcItems.length}
        known={knownIds.length}
        unknown={unknownIds.length}
        canReview={unknownIds.length > 0}
        onReviewUnknown={reviewUnknownFc}
        onRetry={retrySameFc}
        onBack={backToList}
      />
    );
  }
  if (view === 'quiz' && currentTopic) {
    return (
      <QuizView
        topic={currentTopic}
        items={activeQuizItems}
        onFinish={handleQuizFinish}
        onBack={backToList}
      />
    );
  }
  if (view === 'quiz-end' && currentTopic) {
    return (
      <QuizEndView
        topic={currentTopic}
        correct={lastQuizCorrect}
        total={lastQuizTotal}
        canReview={wrongIds.length > 0}
        onReviewWrong={reviewWrongQuiz}
        onRetry={retrySameQuiz}
        onBack={backToList}
      />
    );
  }

  // ─── List view ───
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
            暗記カード＋クイズで深く覚えよう（歴史・中1）
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={scopeFilterOn}
              onChange={(e) => setScopeFilterOn(e.target.checked)}
              className="w-4 h-4 accent-amber-500"
              disabled={testScopeTopics.size === 0}
            />
            <span
              className="text-sm font-medium text-gray-800"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              🎯 テスト範囲のみ表示
            </span>
          </label>
          <span className="text-xs text-gray-500">
            {visibleTopics} / {totalTopics} 単元
          </span>
        </section>
        {testScopeTopics.size === 0 && (
          <p className="text-xs text-gray-400 mt-2 px-1">
            テスト範囲が設定されていません。先に「テスト範囲設定」から範囲を選ぶと、ここで絞り込めるよ。
          </p>
        )}

        {filteredEras.length === 0 ? (
          <p className="mt-8 text-center text-sm text-gray-400">
            テスト範囲に該当する単元がありません。チェックを外すと全範囲表示。
          </p>
        ) : (
          <div className="mt-4 space-y-4">
            {filteredEras.map((era) => (
              <section
                key={era.eraId}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg">{era.eraIcon}</span>
                    <h2
                      className="text-base font-bold text-gray-800"
                      style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {era.eraName}
                    </h2>
                    {era.eraPeriod && (
                      <span className="text-xs text-gray-400">{era.eraPeriod}</span>
                    )}
                  </div>
                </div>
                <ul className="divide-y divide-gray-100">
                  {era.topics.map((t) => {
                    const stat = studyStats[t.topicId] ?? EMPTY_STAT;
                    return (
                      <li key={t.topicId} className="px-4 py-3">
                        <div className="flex items-center gap-3 mb-2">
                          {t.icon && (
                            <span className="text-xl flex-shrink-0">{t.icon}</span>
                          )}
                          <div className="flex-1 min-w-0">
                            <div
                              className="text-sm font-medium text-gray-800 truncate"
                              style={{
                                fontFamily: "'Zen Maru Gothic', sans-serif",
                              }}
                            >
                              {t.name}
                            </div>
                            {t.subtitle && (
                              <div className="text-xs text-gray-500 truncate mt-0.5">
                                {t.subtitle}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => openSetup(t, 'fc')}
                            disabled={t.flashcards.length === 0}
                            className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-200 disabled:text-gray-400 text-white text-xs font-bold rounded-full py-2 transition"
                            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                          >
                            🃏 暗記カード ({t.flashcards.length})
                          </button>
                          <button
                            onClick={() => openSetup(t, 'quiz')}
                            disabled={t.quiz.length === 0}
                            className="flex-1 bg-white border border-amber-300 hover:border-amber-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 text-amber-700 text-xs font-bold rounded-full py-2 transition"
                            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                          >
                            ❓ クイズ ({t.quiz.length})
                          </button>
                        </div>
                        {(stat.fcClearCount > 0 || stat.quizClearCount > 0) && (
                          <div className="mt-2 flex gap-3 text-[11px] text-gray-500">
                            {stat.fcClearCount > 0 && (
                              <span>🃏 {stat.fcClearCount}回クリア</span>
                            )}
                            {stat.quizClearCount > 0 && (
                              <span>
                                ❓ {stat.quizClearCount}回 / 最高{' '}
                                <span className="text-amber-600 font-bold">
                                  {stat.quizBestAccuracy}%
                                </span>
                              </span>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ─── Setup View ───────────────────────────────────────────────────

function SetupView({
  topic,
  kind,
  difficulty,
  count,
  onChangeDifficulty,
  onChangeCount,
  onStart,
  onBack,
}: {
  topic: StudyTopic;
  kind: SetupKind;
  difficulty: Difficulty;
  count: number | 'all';
  onChangeDifficulty: (d: Difficulty) => void;
  onChangeCount: (c: number | 'all') => void;
  onStart: () => void;
  onBack: () => void;
}) {
  const sourceItems = kind === 'fc' ? topic.flashcards : topic.quiz;
  const filteredCount = sourceItems.filter((it) =>
    difficultyMatch(it.difficulty, difficulty)
  ).length;
  const effectiveCount =
    count === 'all' ? filteredCount : Math.min(count, filteredCount);
  const kindLabel = kind === 'fc' ? '暗記カード' : 'クイズ';
  const kindEmoji = kind === 'fc' ? '🃏' : '❓';

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-12 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-sm text-amber-600 font-medium hover:text-amber-700"
          >
            ← 戻る
          </button>
          <div
            className="flex-1 text-sm font-bold text-gray-800 truncate"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {kindEmoji} {topic.name}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 w-full flex-1">
        <section className="mt-4 bg-white rounded-2xl shadow-sm p-5">
          <div className="text-xs text-gray-500 mb-2">{kindLabel}を始める前に</div>
          <div
            className="text-base font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            やる枚数と難易度を選ぼう
          </div>

          {/* 難易度 */}
          <div className="mt-2">
            <div className="text-xs text-gray-500 mb-2">難易度</div>
            <div className="grid grid-cols-4 gap-2">
              {DIFFICULTY_OPTIONS.map((d) => {
                const active = difficulty === d.value;
                return (
                  <button
                    key={d.value}
                    onClick={() => onChangeDifficulty(d.value)}
                    className={`rounded-full py-2 text-xs font-medium transition ${
                      active
                        ? 'bg-amber-500 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                    }`}
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {d.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 枚数 */}
          <div className="mt-4">
            <div className="text-xs text-gray-500 mb-2">
              {kind === 'fc' ? '枚数' : '問題数'}
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => onChangeCount('all')}
                className={`rounded-full py-2 text-xs font-medium transition ${
                  count === 'all'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                }`}
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                全部
              </button>
              {COUNT_OPTIONS.map((c) => {
                const active = count === c;
                const disabled = filteredCount < c;
                return (
                  <button
                    key={c}
                    onClick={() => !disabled && onChangeCount(c)}
                    disabled={disabled}
                    className={`rounded-full py-2 text-xs font-medium transition ${
                      active
                        ? 'bg-amber-500 text-white'
                        : disabled
                          ? 'bg-gray-100 text-gray-300'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                    }`}
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* サマリ */}
          <div className="mt-5 p-3 bg-amber-50 rounded-xl text-xs text-amber-800">
            この設定で <strong className="font-bold">{effectiveCount}</strong>{' '}
            {kind === 'fc' ? '枚' : '問'} を{kindLabel}します。
          </div>

          <button
            onClick={onStart}
            disabled={effectiveCount === 0}
            className="mt-5 w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-full py-3 text-sm font-bold transition"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            開始する
          </button>
        </section>
      </main>
    </div>
  );
}

// ─── Flashcard View ───────────────────────────────────────────────

function FlashcardView({
  topic,
  items,
  onFinish,
  onBack,
}: {
  topic: StudyTopic;
  items: StudyFlashcard[];
  onFinish: (known: string[], unknown: string[]) => void;
  onBack: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<string[]>([]);
  const [unknown, setUnknown] = useState<string[]>([]);

  if (items.length === 0) {
    return (
      <EmptyView title={topic.name} message="暗記カードがありません。" onBack={onBack} />
    );
  }

  const card: StudyFlashcard = items[idx];
  const isLast = idx === items.length - 1;

  const grade = (gotIt: boolean) => {
    const nextKnown = gotIt ? [...known, card.id] : known;
    const nextUnknown = gotIt ? unknown : [...unknown, card.id];
    setKnown(nextKnown);
    setUnknown(nextUnknown);
    if (isLast) {
      onFinish(nextKnown, nextUnknown);
      return;
    }
    setIdx((i) => i + 1);
    setFlipped(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-sm text-amber-600 font-medium hover:text-amber-700"
          >
            ← 戻る
          </button>
          <div className="flex-1 min-w-0">
            <div
              className="text-sm font-bold text-gray-800 truncate"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              🃏 {topic.name}
            </div>
          </div>
          <span className="text-xs text-gray-500 flex-shrink-0">
            {idx + 1} / {items.length}
          </span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 flex-1 flex flex-col w-full">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="mt-6 bg-white rounded-2xl shadow-sm p-6 min-h-[200px] flex items-center justify-center text-center active:scale-[0.99] transition"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          {!flipped ? (
            <div>
              <div className="text-xs text-gray-400 mb-2">語句</div>
              <div className="text-2xl font-bold text-gray-800 leading-relaxed">
                {card.front}
              </div>
              <div className="text-xs text-gray-400 mt-4">タップで答えを表示</div>
            </div>
          ) : (
            <div className="w-full">
              <div className="text-xs text-amber-600 mb-2">説明</div>
              <div className="text-base text-gray-800 leading-relaxed whitespace-pre-wrap text-left">
                {card.back}
              </div>
              {card.explanation && (
                <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600 text-left whitespace-pre-wrap leading-relaxed">
                  {card.explanation}
                </div>
              )}
            </div>
          )}
        </button>

        <div className="mt-6 flex gap-2 mb-4">
          <button
            onClick={() => grade(false)}
            className="flex-1 bg-white border-2 border-red-300 hover:border-red-400 text-red-600 rounded-full py-3 text-sm font-bold transition active:scale-[0.99]"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ✗ わからなかった
          </button>
          <button
            onClick={() => grade(true)}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold transition active:scale-[0.99]"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ✓ わかった
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mb-4">
          {flipped ? '振り分けると次のカードへ' : 'カードをめくってから振り分けよう'}
        </p>
      </main>
    </div>
  );
}

// ─── Flashcard End View ───────────────────────────────────────────

function FcEndView({
  topic,
  total,
  known,
  unknown,
  canReview,
  onReviewUnknown,
  onRetry,
  onBack,
}: {
  topic: StudyTopic;
  total: number;
  known: number;
  unknown: number;
  canReview: boolean;
  onReviewUnknown: () => void;
  onRetry: () => void;
  onBack: () => void;
}) {
  const rate = total > 0 ? Math.round((known / total) * 100) : 0;
  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-sm text-amber-600 font-medium hover:text-amber-700"
          >
            ← 戻る
          </button>
          <div
            className="flex-1 text-sm font-bold text-gray-800 truncate"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            🃏 {topic.name}
          </div>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 flex-1 flex items-center justify-center w-full">
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center w-full">
          <div className="text-xs text-gray-500 mb-2">完了！</div>
          <div className="text-4xl font-bold text-amber-600 mb-1">
            {rate}
            <span className="text-2xl text-gray-400">%</span>
          </div>
          <div className="text-xs text-gray-500 mb-6">わかった率</div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-amber-50 rounded-xl p-3">
              <div className="text-xs text-amber-800">✓ わかった</div>
              <div className="text-2xl font-bold text-amber-700">{known}</div>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <div className="text-xs text-red-700">✗ わからなかった</div>
              <div className="text-2xl font-bold text-red-600">{unknown}</div>
            </div>
          </div>

          {canReview && (
            <button
              onClick={onReviewUnknown}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ✗ わからなかった {unknown} 枚を復習
            </button>
          )}
          <button
            onClick={onRetry}
            className="w-full bg-white border border-gray-200 hover:border-gray-400 text-gray-700 rounded-full py-3 text-sm font-medium mb-2"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            🔄 もう一度はじめから
          </button>
          <button
            onClick={onBack}
            className="w-full bg-white border border-gray-200 hover:border-gray-400 text-gray-700 rounded-full py-3 text-sm font-medium"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            一覧に戻る
          </button>
        </div>
      </main>
    </div>
  );
}

// ─── Quiz View ────────────────────────────────────────────────────

function QuizView({
  topic,
  items,
  onFinish,
  onBack,
}: {
  topic: StudyTopic;
  items: StudyQuizQuestion[];
  onFinish: (correct: number, total: number, wrong: string[]) => void;
  onBack: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrong, setWrong] = useState<string[]>([]);

  if (items.length === 0) {
    return (
      <EmptyView title={topic.name} message="クイズがありません。" onBack={onBack} />
    );
  }

  const q: StudyQuizQuestion = items[idx];
  const isLast = idx === items.length - 1;
  const answered = selected !== null;
  const correct = selected === q.correctIndex;

  const choose = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (i === q.correctIndex) {
      setCorrectCount((c) => c + 1);
    } else {
      setWrong((w) => [...w, q.id]);
    }
  };

  const next = () => {
    if (isLast) {
      onFinish(correctCount, items.length, wrong);
      return;
    }
    setIdx((i) => i + 1);
    setSelected(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-sm text-amber-600 font-medium hover:text-amber-700"
          >
            ← 戻る
          </button>
          <div className="flex-1 min-w-0">
            <div
              className="text-sm font-bold text-gray-800 truncate"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ❓ {topic.name}
            </div>
          </div>
          <span className="text-xs text-gray-500 flex-shrink-0">
            Q {idx + 1} / {items.length}
          </span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 w-full pb-8">
        <div className="mt-6 bg-white rounded-2xl shadow-sm p-5">
          <div
            className="text-base font-medium text-gray-800 leading-relaxed mb-4"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {q.question}
          </div>
          <ul className="space-y-2">
            {q.options.map((opt, i) => {
              const isCorrectOpt = i === q.correctIndex;
              const isSelected = selected === i;
              let cls =
                'w-full text-left rounded-2xl px-4 py-3 border transition active:scale-[0.99] ';
              if (!answered) {
                cls += 'bg-white border-gray-200 hover:border-amber-300';
              } else if (isCorrectOpt) {
                cls += 'bg-green-50 border-green-400';
              } else if (isSelected) {
                cls += 'bg-red-50 border-red-400';
              } else {
                cls += 'bg-white border-gray-200 opacity-60';
              }
              return (
                <li key={i}>
                  <button
                    onClick={() => choose(i)}
                    disabled={answered}
                    className={cls}
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="flex-1 text-sm text-gray-800">{opt}</span>
                      {answered && isCorrectOpt && (
                        <span className="text-green-600 text-lg">✓</span>
                      )}
                      {answered && isSelected && !isCorrectOpt && (
                        <span className="text-red-500 text-lg">✗</span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
          {answered && (
            <div className="mt-4 p-3 rounded-xl bg-gray-50">
              <div
                className={`text-sm font-bold mb-1 ${correct ? 'text-green-700' : 'text-red-600'}`}
              >
                {correct ? '✓ 正解！' : '✗ 不正解'}
              </div>
              {q.explanation && (
                <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {q.explanation}
                </div>
              )}
            </div>
          )}
        </div>

        {answered && (
          <button
            onClick={next}
            className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold transition"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {isLast ? '結果を見る' : '次の問題 →'}
          </button>
        )}
      </main>
    </div>
  );
}

// ─── Quiz End View ────────────────────────────────────────────────

function QuizEndView({
  topic,
  correct,
  total,
  canReview,
  onReviewWrong,
  onRetry,
  onBack,
}: {
  topic: StudyTopic;
  correct: number;
  total: number;
  canReview: boolean;
  onReviewWrong: () => void;
  onRetry: () => void;
  onBack: () => void;
}) {
  const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
  const wrong = total - correct;
  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-sm text-amber-600 font-medium hover:text-amber-700"
          >
            ← 戻る
          </button>
          <div
            className="flex-1 text-sm font-bold text-gray-800 truncate"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ❓ {topic.name}
          </div>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 flex-1 flex items-center justify-center w-full">
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center w-full">
          <div className="text-xs text-gray-500 mb-2">スコア</div>
          <div className="text-5xl font-bold text-amber-600 mb-1">
            {correct}
            <span className="text-2xl text-gray-400"> / {total}</span>
          </div>
          <div className="text-sm text-gray-600 mb-6">正答率 {acc}%</div>

          {canReview && (
            <button
              onClick={onReviewWrong}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ✗ 間違えた {wrong} 問だけ復習
            </button>
          )}
          <button
            onClick={onRetry}
            className="w-full bg-white border border-gray-200 hover:border-gray-400 text-gray-700 rounded-full py-3 text-sm font-medium mb-2"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            🔄 もう一度はじめから
          </button>
          <button
            onClick={onBack}
            className="w-full bg-white border border-gray-200 hover:border-gray-400 text-gray-700 rounded-full py-3 text-sm font-medium"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            一覧に戻る
          </button>
        </div>
      </main>
    </div>
  );
}

// ─── Shared empty view ────────────────────────────────────────────

function EmptyView({
  title,
  message,
  onBack,
}: {
  title: string;
  message: string;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-sm text-amber-600 font-medium hover:text-amber-700"
          >
            ← 戻る
          </button>
          <div
            className="flex-1 text-sm font-bold text-gray-800 truncate"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {title}
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-6">
        <p className="text-sm text-gray-500 text-center">{message}</p>
      </main>
    </div>
  );
}

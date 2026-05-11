import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { LoadingScreen } from '../components/common/LoadingScreen';
import {
  loadItemStats,
  loadAllItemStatsByTopic,
  updateItemStats,
  applyResultsToLocalStats,
  type ItemStatsMap,
  type ItemResult,
} from '../firebase/itemStats';
import { pickItems, countTiers, type PickMode } from '../utils/pickItems';
// 型は g1 ファイルから（同じ型を g2 も持つ）。データ本体は動的 import で
// 学年別に lazy load し、chunk size を最小化する。
import type {
  StudyEra,
  StudyTopic,
  StudyFlashcard,
  StudyQuizQuestion,
} from '../data/generated/line-study-history-g1.generated';

type GradeNum = 1 | 2 | 3;

async function loadHistoryEras(grade: GradeNum): Promise<StudyEra[] | null> {
  switch (grade) {
    case 1: {
      const m = await import('../data/generated/line-study-history-g1.generated');
      return m.lineStudyHistoryEras;
    }
    case 2: {
      const m = await import('../data/generated/line-study-history-g2.generated');
      return m.lineStudyHistoryEras;
    }
    case 3: {
      const m = await import('../data/generated/line-study-history-g3.generated');
      return m.lineStudyHistoryEras;
    }
    default:
      return null;
  }
}

const GRADE_LABEL_TO_NUMBER: Record<string, GradeNum> = {
  中1: 1,
  中2: 2,
  中3: 3,
};

type ViewMode = 'list' | 'setup' | 'fc' | 'quiz' | 'fc-end' | 'quiz-end';
type SetupKind = 'fc' | 'quiz';
type Difficulty = 'basic' | 'standard' | 'advanced';

const ALL_DIFFICULTIES: Difficulty[] = ['basic', 'standard', 'advanced'];

const DIFFICULTY_OPTIONS: { value: Difficulty; label: string }[] = [
  { value: 'basic', label: '基本' },
  { value: 'standard', label: '標準' },
  { value: 'advanced', label: '応用' },
];

const COUNT_OPTIONS = [5, 10, 20] as const;

const LS_KEY_SETUP_PREFS = 'liff-units:setupPrefs:v1';

interface PersistedSetupPrefs {
  count?: number | 'all';
  randomize?: boolean;
}

function loadPersistedSetupPrefs(): PersistedSetupPrefs {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(LS_KEY_SETUP_PREFS);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as PersistedSetupPrefs;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function savePersistedSetupPrefs(prefs: PersistedSetupPrefs) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LS_KEY_SETUP_PREFS, JSON.stringify(prefs));
  } catch {
    /* ignore quota / privacy mode errors */
  }
}

// LIFF 現状スコープは歴史のみ。将来教科切替する場合はここに subject を渡す。
const CURRENT_SUBJECT_ID = 'history';

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

function difficultyMatch(
  itemDiff: string | undefined,
  selected: Set<Difficulty>
): boolean {
  if (selected.size === 0 || selected.size === ALL_DIFFICULTIES.length) return true;
  if (!itemDiff) return false;
  return selected.has(itemDiff as Difficulty);
}

/**
 * 公式LINE のリッチメニュー「じっくり学ぶ」から開かれる LIFF ページ。
 *
 * インライン学習体験を提供（歴史、grade1/2 対応、data/content/history/01〜12）:
 *  - トピック一覧（時代別 + テスト範囲フィルタ + クリア回数 / 正答率の表示）
 *  - セットアップ: 枚数・問題数の指定、難易度フィルタ
 *  - 暗記カード: フリップ + わかった/わからない振り分け
 *  - クイズ: 4 択 + 間違えた問題のみ復習
 *  - 完了時に Firestore `users/{uid}.studyStats[topicId]` を更新
 *
 * 認証は `useLiffAuth` 経由で LIFF SDK ID トークン → Firebase Auth。
 * 学年別データは grade に応じて動的 import（chunk lazy load）。
 */
export function LiffUnitsPage() {
  const { user, loading } = useAuth();
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_UNITS as string | undefined
  );

  const [view, setView] = useState<ViewMode>('list');
  const [currentTopic, setCurrentTopic] = useState<StudyTopic | null>(null);
  const [setupKind, setSetupKind] = useState<SetupKind>('fc');
  const [setupDifficulties, setSetupDifficulties] = useState<Set<Difficulty>>(
    new Set(ALL_DIFFICULTIES)
  );
  const [setupCount, setSetupCount] = useState<number | 'all'>(() => {
    const p = loadPersistedSetupPrefs();
    return p.count ?? 10;
  });
  const [setupRandomize, setSetupRandomize] = useState<boolean>(() => {
    const p = loadPersistedSetupPrefs();
    return p.randomize ?? true;
  });
  // 現在のトピックの per-item 統計（Firestore からロード）
  const [itemStats, setItemStats] = useState<ItemStatsMap>(new Map());
  // 全トピックの per-item 統計（トピック一覧での進捗ピル用、一括ロード）
  const [allItemStats, setAllItemStats] = useState<Map<string, ItemStatsMap>>(new Map());
  // 同一トピック内のセッションで既に出題済みの itemId を追跡（次のN問用）
  const [sessionSeenFcIds, setSessionSeenFcIds] = useState<Set<string>>(new Set());
  const [sessionSeenQuizIds, setSessionSeenQuizIds] = useState<Set<string>>(new Set());
  // 直前の setupCount を保持して end 画面で「次のN問」ボタンに使う
  const [lastSetupCount, setLastSetupCount] = useState<number | 'all'>(10);

  // setupCount / setupRandomize の変更を localStorage に反映
  useEffect(() => {
    savePersistedSetupPrefs({ count: setupCount, randomize: setupRandomize });
  }, [setupCount, setupRandomize]);

  const [testScopeTopics, setTestScopeTopics] = useState<Set<string>>(new Set());
  const [testScopeLoaded, setTestScopeLoaded] = useState(false);
  // ユーザーの登録学年（初期値の決定に使う）。
  const [userGrade, setUserGrade] = useState<GradeNum | null>(null);
  // 表示中の学年（ユーザー操作で切り替え可能）。初期 = 登録学年。
  const [selectedGrade, setSelectedGrade] = useState<GradeNum | null>(null);
  const [historyEras, setHistoryEras] = useState<StudyEra[] | null>(null);
  const [erasLoading, setErasLoading] = useState(false);
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

        // 学年を取得（中1 / 中2 / 中3）。selectedGrade の初期値にも使う。
        const gradeLabel = typeof data.grade === 'string' ? data.grade : undefined;
        const gradeNum = gradeLabel ? GRADE_LABEL_TO_NUMBER[gradeLabel] : undefined;
        setUserGrade(gradeNum ?? null);
        setSelectedGrade((prev) => prev ?? gradeNum ?? null);

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

        // 教科ごとの直近難易度選択を復元（未設定なら全部 ON）
        const prefsRaw = (data.studyPrefs as Record<string, unknown> | undefined) ?? {};
        const subjectPref = prefsRaw[CURRENT_SUBJECT_ID] as
          | { difficulties?: unknown }
          | undefined;
        if (subjectPref && Array.isArray(subjectPref.difficulties)) {
          const saved = (subjectPref.difficulties as unknown[]).filter(
            (d): d is Difficulty =>
              typeof d === 'string' && (ALL_DIFFICULTIES as string[]).includes(d)
          );
          if (saved.length > 0) {
            setSetupDifficulties(new Set(saved));
          }
        }
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

  // 初回ロード後、全トピックの itemStats を一括取得（一覧の進捗ピル用）
  useEffect(() => {
    if (loading || !user) return;
    let cancelled = false;
    void (async () => {
      const map = await loadAllItemStatsByTopic();
      if (!cancelled) setAllItemStats(map);
    })();
    return () => {
      cancelled = true;
    };
  }, [user, loading]);

  // 選択学年が変わったら対応する教材データを動的 import
  useEffect(() => {
    if (selectedGrade === null) {
      setHistoryEras(null);
      return;
    }
    let cancelled = false;
    setErasLoading(true);
    setHistoryEras(null);
    (async () => {
      const eras = await loadHistoryEras(selectedGrade);
      if (cancelled) return;
      setHistoryEras(eras ?? []);
      setErasLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedGrade]);

  const allEras: StudyEra[] = useMemo(() => historyEras ?? [], [historyEras]);

  const filteredEras: StudyEra[] = useMemo(() => {
    if (!scopeFilterOn || testScopeTopics.size === 0) {
      return allEras;
    }
    return allEras
      .map((era) => ({
        ...era,
        topics: era.topics.filter((t) => testScopeTopics.has(t.name)),
      }))
      .filter((era) => era.topics.length > 0);
  }, [scopeFilterOn, testScopeTopics, allEras]);

  const totalTopics = useMemo(
    () => allEras.reduce((s, e) => s + e.topics.length, 0),
    [allEras]
  );
  const visibleTopics = useMemo(
    () => filteredEras.reduce((s, e) => s + e.topics.length, 0),
    [filteredEras]
  );

  // ---- 共通: セットアップ画面起動（前回難易度は維持、itemStats 読込） ----
  const openSetup = (topic: StudyTopic, kind: SetupKind) => {
    setCurrentTopic(topic);
    setSetupKind(kind);
    setView('setup');
    // セッション内の既出 ID をリセット（新トピックなので）
    setSessionSeenFcIds(new Set());
    setSessionSeenQuizIds(new Set());
    // 既存の選択値（count, randomize）はそのまま維持＝前回学習体験を保つ
    // 既に一括ロード済みの stats があれば即時にセット、なければ個別ロード
    const cached = allItemStats.get(topic.topicId);
    if (cached) {
      setItemStats(cached);
    } else {
      void (async () => {
        const stats = await loadItemStats(topic.topicId);
        setItemStats(stats);
      })();
    }
  };

  // ---- 共通: セットアップから FC/Quiz を開始 ----
  const startWithSetup = () => {
    if (!currentTopic) return;
    const mode: PickMode = setupRandomize ? 'random' : 'sequential';
    if (setupKind === 'fc') {
      const filtered = currentTopic.flashcards.filter((c) =>
        difficultyMatch(c.difficulty, setupDifficulties)
      );
      const picked = pickItems(filtered, itemStats, setupCount, mode);
      if (picked.length === 0) return;
      setActiveFcItems(picked);
      setSessionSeenFcIds(new Set(picked.map((i) => i.id)));
      setKnownIds([]);
      setUnknownIds([]);
      setView('fc');
    } else {
      const filtered = currentTopic.quiz.filter((q) =>
        difficultyMatch(q.difficulty, setupDifficulties)
      );
      const picked = pickItems(filtered, itemStats, setupCount, mode);
      if (picked.length === 0) return;
      setActiveQuizItems(picked);
      setSessionSeenQuizIds(new Set(picked.map((i) => i.id)));
      setWrongIds([]);
      setView('quiz');
    }
    setLastSetupCount(setupCount);
    // 直近の難易度選択を教科ごとに保存（次回セットアップの初期値に使う）
    void persistDifficultyPref();
  };

  // ---- 同条件で次のN問を出題（end 画面から） ----
  const startNextBatch = () => {
    if (!currentTopic) return;
    const mode: PickMode = setupRandomize ? 'random' : 'sequential';
    if (setupKind === 'fc') {
      const filtered = currentTopic.flashcards.filter((c) =>
        difficultyMatch(c.difficulty, setupDifficulties)
      );
      const picked = pickItems(filtered, itemStats, lastSetupCount, mode, sessionSeenFcIds);
      if (picked.length === 0) return;
      setActiveFcItems(picked);
      setSessionSeenFcIds((prev) => {
        const next = new Set(prev);
        picked.forEach((p) => next.add(p.id));
        return next;
      });
      setKnownIds([]);
      setUnknownIds([]);
      setView('fc');
    } else {
      const filtered = currentTopic.quiz.filter((q) =>
        difficultyMatch(q.difficulty, setupDifficulties)
      );
      const picked = pickItems(filtered, itemStats, lastSetupCount, mode, sessionSeenQuizIds);
      if (picked.length === 0) return;
      setActiveQuizItems(picked);
      setSessionSeenQuizIds((prev) => {
        const next = new Set(prev);
        picked.forEach((p) => next.add(p.id));
        return next;
      });
      setWrongIds([]);
      setView('quiz');
    }
  };

  // ---- フラッシュカード end からクイズに進む ----
  const goToQuizFromFcEnd = () => {
    if (!currentTopic) return;
    setSetupKind('quiz');
    setSessionSeenQuizIds(new Set());
    setView('setup');
  };

  // ---- クイズ end から次の単元（同じ era 内の次トピック）に進む ----
  const getNextTopic = (): StudyTopic | null => {
    if (!currentTopic) return null;
    const flat: StudyTopic[] = filteredEras.flatMap((e) => e.topics);
    const idx = flat.findIndex((t) => t.topicId === currentTopic.topicId);
    if (idx < 0 || idx >= flat.length - 1) return null;
    return flat[idx + 1];
  };
  const goToNextTopicSetup = () => {
    const next = getNextTopic();
    if (!next) return;
    openSetup(next, 'fc');
  };

  // ---- 教科ごとの最後の難易度選択を保存 ----
  const persistDifficultyPref = async () => {
    if (!user) return;
    try {
      const sortedDiffs = ALL_DIFFICULTIES.filter((d) => setupDifficulties.has(d));
      await setDoc(
        doc(db, 'users', user.uid),
        {
          studyPrefs: {
            [CURRENT_SUBJECT_ID]: {
              difficulties: sortedDiffs,
              updatedAt: serverTimestamp(),
            },
          },
        },
        { merge: true }
      );
    } catch (err) {
      console.warn('[LiffUnitsPage] studyPrefs save failed', err);
    }
  };

  // ---- FC 完了処理 ----
  const handleFcFinish = (known: string[], unknown: string[]) => {
    setKnownIds(known);
    setUnknownIds(unknown);
    setView('fc-end');
    void persistStudyStats('fc', currentTopic?.topicId, { increment: true });
    if (currentTopic) {
      const results: ItemResult[] = [
        ...known.map((id) => ({ itemId: id, isCorrect: true })),
        ...unknown.map((id) => ({ itemId: id, isCorrect: false })),
      ];
      const updatedStats = applyResultsToLocalStats(itemStats, results);
      setItemStats(updatedStats);
      setAllItemStats((prev) => {
        const next = new Map(prev);
        next.set(currentTopic.topicId, updatedStats);
        return next;
      });
      void updateItemStats(currentTopic.topicId, results);
    }
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
    if (currentTopic) {
      const wrongSet = new Set(wrong);
      const results: ItemResult[] = activeQuizItems.map((q) => ({
        itemId: q.id,
        isCorrect: !wrongSet.has(q.id),
      }));
      const updatedStats = applyResultsToLocalStats(itemStats, results);
      setItemStats(updatedStats);
      setAllItemStats((prev) => {
        const next = new Map(prev);
        next.set(currentTopic.topicId, updatedStats);
        return next;
      });
      void updateItemStats(currentTopic.topicId, results);
    }
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
        difficulties={setupDifficulties}
        count={setupCount}
        randomize={setupRandomize}
        itemStats={itemStats}
        onToggleDifficulty={(d) => {
          setSetupDifficulties((prev) => {
            const next = new Set(prev);
            if (next.has(d)) next.delete(d);
            else next.add(d);
            return next;
          });
        }}
        onChangeCount={setSetupCount}
        onChangeRandomize={setSetupRandomize}
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
    const totalFcInScope = currentTopic.flashcards.filter((c) =>
      difficultyMatch(c.difficulty, setupDifficulties)
    ).length;
    const remainingFcCount = Math.max(0, totalFcInScope - sessionSeenFcIds.size);
    const nextBatchCount =
      lastSetupCount === 'all'
        ? remainingFcCount
        : Math.min(lastSetupCount, remainingFcCount);
    return (
      <FcEndView
        topic={currentTopic}
        total={activeFcItems.length}
        known={knownIds.length}
        unknown={unknownIds.length}
        canReview={unknownIds.length > 0}
        nextBatchCount={nextBatchCount}
        canGoToQuiz={remainingFcCount === 0 && currentTopic.quiz.length > 0}
        onReviewUnknown={reviewUnknownFc}
        onRetry={retrySameFc}
        onNextBatch={startNextBatch}
        onGoToQuiz={goToQuizFromFcEnd}
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
    const totalQuizInScope = currentTopic.quiz.filter((q) =>
      difficultyMatch(q.difficulty, setupDifficulties)
    ).length;
    const remainingQuizCount = Math.max(0, totalQuizInScope - sessionSeenQuizIds.size);
    const nextBatchCount =
      lastSetupCount === 'all'
        ? remainingQuizCount
        : Math.min(lastSetupCount, remainingQuizCount);
    const nextTopic = getNextTopic();
    return (
      <QuizEndView
        topic={currentTopic}
        correct={lastQuizCorrect}
        total={lastQuizTotal}
        canReview={wrongIds.length > 0}
        nextBatchCount={nextBatchCount}
        nextTopicName={remainingQuizCount === 0 ? nextTopic?.name ?? null : null}
        onReviewWrong={reviewWrongQuiz}
        onRetry={retrySameQuiz}
        onNextBatch={startNextBatch}
        onGoToNextTopic={goToNextTopicSetup}
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
            暗記カード＋クイズで深く覚えよう（歴史）
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4">
        {selectedGrade === null && (
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>先に教科と学年を設定してください。</p>
            <p className="text-xs text-gray-400 mt-1">
              リッチメニュー「設定・サポート」から登録できます。
            </p>
          </div>
        )}

        {selectedGrade !== null && (
          <section className="mt-4 bg-white rounded-2xl shadow-sm p-3">
            <div className="text-xs text-gray-500 mb-1.5">学年</div>
            <div className="grid grid-cols-3 gap-2">
              {([1, 2, 3] as const).map((g) => {
                const active = selectedGrade === g;
                const isOwn = userGrade === g;
                return (
                  <button
                    key={g}
                    onClick={() => setSelectedGrade(g)}
                    className={`rounded-full py-2 text-xs font-medium transition ${
                      active
                        ? 'bg-amber-500 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                    }`}
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    中{g}
                    {isOwn && <span className="ml-1 opacity-75">（自分）</span>}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {selectedGrade !== null && historyEras !== null && historyEras.length === 0 && !erasLoading && (
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>中{selectedGrade} の歴史コンテンツは準備中です。</p>
            <p className="text-xs text-gray-400 mt-1">
              上のタブから他の学年に切り替えてみてください。
            </p>
          </div>
        )}

        {selectedGrade !== null && erasLoading && <LoadingScreen />}

        {selectedGrade !== null && historyEras !== null && historyEras.length > 0 && (
          <>
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
          </>
        )}

        {selectedGrade !== null && historyEras !== null && historyEras.length > 0 && (
          filteredEras.length === 0 ? (
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
                    const tStats = allItemStats.get(t.topicId);
                    const totalItems = t.flashcards.length + t.quiz.length;
                    const attemptedItems = tStats
                      ? Array.from(tStats.values()).filter((s) => s.attempts > 0).length
                      : 0;
                    const progressPct =
                      totalItems > 0 ? Math.round((attemptedItems / totalItems) * 100) : 0;
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
                          {totalItems > 0 && (
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${
                                progressPct === 0
                                  ? 'bg-gray-100 text-gray-500'
                                  : progressPct < 100
                                    ? 'bg-amber-50 text-amber-700'
                                    : 'bg-green-50 text-green-700'
                              }`}
                              title={`${attemptedItems} / ${totalItems} 問解いた`}
                            >
                              {attemptedItems}/{totalItems}
                            </span>
                          )}
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
        ))}
      </main>
    </div>
  );
}

// ─── Setup View ───────────────────────────────────────────────────

function SetupView({
  topic,
  kind,
  difficulties,
  count,
  randomize,
  itemStats,
  onToggleDifficulty,
  onChangeCount,
  onChangeRandomize,
  onStart,
  onBack,
}: {
  topic: StudyTopic;
  kind: SetupKind;
  difficulties: Set<Difficulty>;
  count: number | 'all';
  randomize: boolean;
  itemStats: ItemStatsMap;
  onToggleDifficulty: (d: Difficulty) => void;
  onChangeCount: (c: number | 'all') => void;
  onChangeRandomize: (r: boolean) => void;
  onStart: () => void;
  onBack: () => void;
}) {
  const sourceItems = kind === 'fc' ? topic.flashcards : topic.quiz;
  const filtered = sourceItems.filter((it) =>
    difficultyMatch(it.difficulty, difficulties)
  );
  const filteredCount = filtered.length;
  const effectiveCount =
    count === 'all' ? filteredCount : Math.min(count, filteredCount);
  const kindLabel = kind === 'fc' ? '暗記カード' : 'クイズ';
  const kindEmoji = kind === 'fc' ? '🃏' : '❓';
  const noDifficultySelected = difficulties.size === 0;
  const tierCounts = countTiers(filtered, itemStats);

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

          {/* 難易度（複数選択可・前回の選択を記憶） */}
          <div className="mt-2">
            <div className="text-xs text-gray-500 mb-2">難易度（複数選べる）</div>
            <div className="grid grid-cols-3 gap-2">
              {DIFFICULTY_OPTIONS.map((d) => {
                const active = difficulties.has(d.value);
                return (
                  <button
                    key={d.value}
                    onClick={() => onToggleDifficulty(d.value)}
                    className={`rounded-full py-2 text-xs font-medium transition ${
                      active
                        ? 'bg-amber-500 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                    }`}
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {active && <span className="mr-1">✓</span>}
                    {d.label}
                  </button>
                );
              })}
            </div>
            {noDifficultySelected && (
              <p className="text-xs text-red-500 mt-1">
                難易度を 1 つ以上選んでください
              </p>
            )}
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

          {/* 出題順 */}
          <div className="mt-4">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={randomize}
                onChange={(e) => onChangeRandomize(e.target.checked)}
                className="w-4 h-4 accent-amber-500"
              />
              <span
                className="text-xs text-gray-700"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                ランダム順で出題する
              </span>
            </label>
            <p className="text-[11px] text-gray-400 mt-1 ml-6">
              チェックを外すと {kind === 'fc' ? 'カード' : '問題'}は登場順に並びます
            </p>
          </div>

          {/* 学習進捗プリビュー */}
          {filteredCount > 0 && (
            <div className="mt-4 p-3 bg-gray-50 rounded-xl">
              <div className="text-[11px] text-gray-500 mb-2">
                この{kindLabel}の学習状況
              </div>
              <div className="flex gap-2 text-[11px]">
                <span className="px-2 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                  未着手 <strong>{tierCounts.unseen}</strong>
                </span>
                <span className="px-2 py-1 rounded-full bg-red-50 text-red-700">
                  要復習 <strong>{tierCounts.wrongHeavy}</strong>
                </span>
                <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700">
                  正解多 <strong>{tierCounts.correctHeavy}</strong>
                </span>
              </div>
            </div>
          )}

          {/* サマリ */}
          <div className="mt-5 p-3 bg-amber-50 rounded-xl text-xs text-amber-800">
            この設定で <strong className="font-bold">{effectiveCount}</strong>{' '}
            {kind === 'fc' ? '枚' : '問'} を{kindLabel}します。
            <span className="block text-[11px] text-amber-700 mt-1">
              未着手 → 要復習 → 正解多 の順で優先的に出題されます
            </span>
          </div>

          <button
            onClick={onStart}
            disabled={effectiveCount === 0 || noDifficultySelected}
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
            <div className="w-full">
              <div className="text-xs text-gray-400 mb-2">問題</div>
              <div className="text-base text-gray-800 leading-relaxed whitespace-pre-wrap text-left">
                {card.back}
              </div>
              <div className="text-xs text-gray-400 mt-4 text-center">
                タップで答えを表示
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="text-xs text-amber-600 mb-2">答え</div>
              <div className="text-2xl font-bold text-gray-800 leading-relaxed text-center">
                {card.front}
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
  nextBatchCount,
  canGoToQuiz,
  onReviewUnknown,
  onRetry,
  onNextBatch,
  onGoToQuiz,
  onBack,
}: {
  topic: StudyTopic;
  total: number;
  known: number;
  unknown: number;
  canReview: boolean;
  nextBatchCount: number;
  canGoToQuiz: boolean;
  onReviewUnknown: () => void;
  onRetry: () => void;
  onNextBatch: () => void;
  onGoToQuiz: () => void;
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

          {canGoToQuiz && (
            <button
              onClick={onGoToQuiz}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ❓ 問題に進む
            </button>
          )}
          {!canGoToQuiz && nextBatchCount > 0 && (
            <button
              onClick={onNextBatch}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ▶ 次の {nextBatchCount} 枚を解く
            </button>
          )}
          {canReview && (
            <button
              onClick={onReviewUnknown}
              className="w-full bg-white border border-amber-300 hover:bg-amber-50 text-amber-700 rounded-full py-3 text-sm font-medium mb-2"
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
  nextBatchCount,
  nextTopicName,
  onReviewWrong,
  onRetry,
  onNextBatch,
  onGoToNextTopic,
  onBack,
}: {
  topic: StudyTopic;
  correct: number;
  total: number;
  canReview: boolean;
  nextBatchCount: number;
  nextTopicName: string | null;
  onReviewWrong: () => void;
  onRetry: () => void;
  onNextBatch: () => void;
  onGoToNextTopic: () => void;
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

          {nextTopicName && (
            <button
              onClick={onGoToNextTopic}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ▶ 次の単元へ：{nextTopicName}
            </button>
          )}
          {!nextTopicName && nextBatchCount > 0 && (
            <button
              onClick={onNextBatch}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ▶ 次の {nextBatchCount} 問を解く
            </button>
          )}
          {canReview && (
            <button
              onClick={onReviewWrong}
              className="w-full bg-white border border-amber-300 hover:bg-amber-50 text-amber-700 rounded-full py-3 text-sm font-medium mb-2"
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

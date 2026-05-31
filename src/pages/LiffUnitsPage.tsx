import { useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore/lite';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { useLiffAuth } from '../hooks/useLiffAuth';
import { logFunnelEvent } from '../utils/funnelEvent';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { RubyText } from '../components/common/RubyText';
import { TrialPremiumBanner } from '../components/common/TrialPremiumBanner';
import {
  loadItemStats,
  loadAllItemStatsByTopic,
  updateItemStats,
  applyResultsToLocalStats,
  type ItemStatsMap,
  type ItemResult,
} from '../firebase/itemStats';
import { pickItems, countTiers, type PickMode } from '../utils/pickItems';
import {
  readCachedItemStats,
  writeCachedItemStats,
  readSavedSession,
  writeSavedSession,
  clearSavedSession,
  readLatestSession,
  type SavedSession,
  type SavedSessionFc,
  type SavedSessionQuiz,
} from '../utils/liffStudyCache';
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
 *  - トピック一覧（時代別 + 出題範囲フィルタ + クリア回数 / 正答率の表示）
 *  - セットアップ: 枚数・問題数の指定、難易度フィルタ
 *  - 暗記カード: フリップ + わかった/わからない振り分け
 *  - クイズ: 4 択 + 間違えた問題のみ復習
 *  - 完了時に Firestore `users/{uid}.studyStats[topicId]` を更新
 *
 * 認証は `useLiffAuth` 経由で LIFF SDK ID トークン → Firebase Auth。
 * 学年別データは grade に応じて動的 import（chunk lazy load）。
 */
export function LiffUnitsPage() {
  const { user, loading, userDoc, userDocLoaded } = useAuth();
  const { attempted: liffAuthAttempted } = useLiffAuth(
    import.meta.env.VITE_LIFF_ID_UNITS as string | undefined
  );

  // 公式LINE の解説 flex から `?topic=<細かい日本語名>&kind=fc|quiz` で開かれた場合に、
  // そのトピックの setup view へ自動遷移する。一致するトピックが見つからなければ
  // 通常通り list view を表示する（フォールバック）。
  const [searchParams] = useSearchParams();
  const deepLinkTopicName = searchParams.get('topic');
  const deepLinkKindRaw = searchParams.get('kind');
  const deepLinkKind: SetupKind | null =
    deepLinkKindRaw === 'fc' || deepLinkKindRaw === 'quiz'
      ? deepLinkKindRaw
      : null;
  const deepLinkAppliedRef = useRef(false);
  // liff_units_open イベントは 1 マウントあたり 1 回だけ記録する
  const openEventLoggedRef = useRef(false);

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

  // testScope.topics は AuthContext の userDoc から派生（重複 getDoc 排除）。
  const testScopeTopics = useMemo<Set<string>>(
    () => new Set(userDoc?.testScopeTopics ?? []),
    [userDoc],
  );
  // ユーザーの登録学年（初期値の決定に使う）。
  const userGrade: GradeNum | null = userDoc?.grade ?? null;
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

  // セッション再開用: 学習開始時の初期状態（resume なら値あり、新規なら null）
  const [resumeFc, setResumeFc] = useState<SavedSessionFc | null>(null);
  const [resumeQuiz, setResumeQuiz] = useState<SavedSessionQuiz | null>(null);

  // LIFF ページ開封イベントを 1 回だけ記録する。公式LINE flex のクリック相当の
  // 計測指標として管理ダッシュボードで利用する（liff_units_open）。
  useEffect(() => {
    if (openEventLoggedRef.current) return;
    if (loading || !user) return;
    openEventLoggedRef.current = true;
    void logFunnelEvent('liff_units_open', {
      src: searchParams.get('src'),
      topic: deepLinkTopicName,
      kind: deepLinkKindRaw,
    });
  }, [loading, user, searchParams, deepLinkTopicName, deepLinkKindRaw]);

  // userDoc がロードされたら、ローカル state（studyStats / setupDifficulties /
  // selectedGrade）を userDoc 由来の値で初期化する。getDoc は AuthContext が
  // 1 回だけ行っているので、ここでは追加の Firestore 読み込みは発生しない。
  useEffect(() => {
    if (!userDoc) return;
    setStudyStats(userDoc.studyStats);
    setSelectedGrade((prev) => prev ?? userDoc.grade ?? null);
    const subjectPref = userDoc.studyPrefs[CURRENT_SUBJECT_ID];
    if (subjectPref?.difficulties && subjectPref.difficulties.length > 0) {
      const saved = subjectPref.difficulties.filter((d): d is Difficulty =>
        (ALL_DIFFICULTIES as string[]).includes(d),
      );
      if (saved.length > 0) {
        setSetupDifficulties(new Set(saved));
      }
    }
  }, [userDoc]);

  // 全トピックの itemStats を取得（一覧の進捗ピル用）。
  // localStorage キャッシュがあれば即描画 → 裏で fetch して差分反映する SWR 風。
  useEffect(() => {
    if (loading || !user) return;
    let cancelled = false;

    const cached = readCachedItemStats(user.uid);
    if (cached) {
      setAllItemStats(cached.value);
    }
    // キャッシュヒットしていても TTL 内なら fetch をスキップしてネットワーク往復を完全に省く。
    if (cached && !cached.isStale) return;

    void (async () => {
      const map = await loadAllItemStatsByTopic();
      if (cancelled) return;
      setAllItemStats(map);
      writeCachedItemStats(user.uid, map);
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

  // 公式LINE の post-answer flex からの deep-link 適用。historyEras がロードされた
  // タイミングでトピック名が一致するものを探し、見つかれば該当 kind のセッションを
  // **自動的に開始**して fc / quiz view に直行する（旧版は setup view 止まり）。
  // 一度だけ走らせるため deepLinkAppliedRef でガード。
  useEffect(() => {
    if (deepLinkAppliedRef.current) return;
    if (!deepLinkTopicName || !deepLinkKind) return;
    if (historyEras === null) return; // まだロード中
    const topic = historyEras
      .flatMap((e) => e.topics)
      .find((t) => t.name === deepLinkTopicName);
    if (!topic) {
      // 別学年の topic 等で見つからない場合は list view にフォールバック
      deepLinkAppliedRef.current = true;
      return;
    }
    deepLinkAppliedRef.current = true;
    setCurrentTopic(topic);
    setSetupKind(deepLinkKind);
    setSessionSeenFcIds(new Set());
    setSessionSeenQuizIds(new Set());

    const startNow = (topic: StudyTopic, statsForTopic: ItemStatsMap) => {
      const mode: PickMode = setupRandomize ? 'random' : 'sequential';
      if (deepLinkKind === 'fc') {
        const filtered = topic.flashcards.filter((c) =>
          difficultyMatch(c.difficulty, setupDifficulties),
        );
        const picked = pickItems(filtered, statsForTopic, setupCount, mode);
        if (picked.length === 0) {
          // 候補ゼロのときだけ setup view に落として手動で条件を変えてもらう
          setView('setup');
          return;
        }
        if (user) clearSavedSession(user.uid, topic.topicId, 'fc');
        setResumeFc(null);
        setActiveFcItems(picked);
        setSessionSeenFcIds(new Set(picked.map((i) => i.id)));
        setKnownIds([]);
        setUnknownIds([]);
        setView('fc');
      } else {
        const filtered = topic.quiz.filter((q) =>
          difficultyMatch(q.difficulty, setupDifficulties),
        );
        const picked = pickItems(filtered, statsForTopic, setupCount, mode);
        if (picked.length === 0) {
          setView('setup');
          return;
        }
        if (user) clearSavedSession(user.uid, topic.topicId, 'quiz');
        setResumeQuiz(null);
        setActiveQuizItems(picked);
        setSessionSeenQuizIds(new Set(picked.map((i) => i.id)));
        setWrongIds([]);
        setView('quiz');
      }
    };

    const cached = allItemStats.get(topic.topicId);
    if (cached) {
      setItemStats(cached);
      startNow(topic, cached);
    } else {
      void (async () => {
        const stats = await loadItemStats(topic.topicId);
        setItemStats(stats);
        startNow(topic, stats);
      })();
    }
  }, [
    historyEras,
    deepLinkTopicName,
    deepLinkKind,
    allItemStats,
    setupRandomize,
    setupDifficulties,
    setupCount,
    user,
  ]);

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

  // ---- 共通: セットアップから FC/Quiz を開始（新規） ----
  const startWithSetup = () => {
    if (!currentTopic) return;
    // 新規開始なので保存中の中断セッションをクリアし、resume 状態もリセット
    if (user) clearSavedSession(user.uid, currentTopic.topicId, setupKind);
    setResumeFc(null);
    setResumeQuiz(null);

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

  // ---- 中断セッションを続きから再開（任意の topic / kind） ----
  const resumeSavedSession = (topic: StudyTopic, kind: SetupKind) => {
    if (!user) return;
    const saved = readSavedSession(user.uid, topic.topicId, kind);
    if (!saved) return;
    setCurrentTopic(topic);
    setSetupKind(kind);
    const cachedStats = allItemStats.get(topic.topicId);
    if (cachedStats) {
      setItemStats(cachedStats);
    } else {
      void (async () => {
        const stats = await loadItemStats(topic.topicId);
        setItemStats(stats);
      })();
    }
    if (kind === 'fc' && saved.kind === 'fc') {
      const byId = new Map(topic.flashcards.map((c) => [c.id, c]));
      const items = saved.itemIds.map((id) => byId.get(id)).filter(Boolean) as StudyFlashcard[];
      if (items.length === 0) return;
      setActiveFcItems(items);
      setSessionSeenFcIds(new Set(items.map((i) => i.id)));
      setResumeFc(saved);
      setView('fc');
    } else if (kind === 'quiz' && saved.kind === 'quiz') {
      const byId = new Map(topic.quiz.map((q) => [q.id, q]));
      const items = saved.itemIds.map((id) => byId.get(id)).filter(Boolean) as StudyQuizQuestion[];
      if (items.length === 0) return;
      setActiveQuizItems(items);
      setSessionSeenQuizIds(new Set(items.map((i) => i.id)));
      setResumeQuiz(saved);
      setView('quiz');
    }
  };

  // Setup 画面の「続きから」用（currentTopic 前提）
  const resumeFromSavedSession = () => {
    if (!currentTopic) return;
    resumeSavedSession(currentTopic, setupKind);
  };

  // 一覧画面の「前回の続き」バナー用: 最終セッション + 対応 topic + saved を集約
  const latestResumeInfo = useMemo<
    | { topic: StudyTopic; kind: SetupKind; saved: SavedSession }
    | null
  >(() => {
    if (!user) return null;
    const latest = readLatestSession(user.uid);
    if (!latest) return null;
    const topic = allEras
      .flatMap((e) => e.topics)
      .find((t) => t.topicId === latest.topicId);
    if (!topic) return null;
    const saved = readSavedSession(user.uid, latest.topicId, latest.kind);
    if (!saved) return null;
    return { topic, kind: latest.kind, saved };
    // view 切替時にも再評価したいので view も依存に入れる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, allEras, view]);

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

  // ---- フラッシュカード end / 学習中 からクイズに進む ----
  const goToQuizFromFcEnd = () => {
    if (!currentTopic) return;
    setSetupKind('quiz');
    setSessionSeenQuizIds(new Set());
    setView('setup');
  };

  // ---- 学習中にフラッシュカード ⇔ クイズを切り替える ----
  const switchToQuizSetup = () => {
    if (!currentTopic || currentTopic.quiz.length === 0) return;
    setSetupKind('quiz');
    setView('setup');
  };
  const switchToFcSetup = () => {
    if (!currentTopic || currentTopic.flashcards.length === 0) return;
    setSetupKind('fc');
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
    if (currentTopic && user) clearSavedSession(user.uid, currentTopic.topicId, 'fc');
    setResumeFc(null);
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
        if (user) writeCachedItemStats(user.uid, next);
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
    if (currentTopic && user) clearSavedSession(user.uid, currentTopic.topicId, 'quiz');
    setResumeQuiz(null);
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
        if (user) writeCachedItemStats(user.uid, next);
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
  if (!userDocLoaded) {
    return <LoadingScreen />;
  }

  if (view === 'setup' && currentTopic) {
    const savedSession = user
      ? readSavedSession(user.uid, currentTopic.topicId, setupKind)
      : null;
    return (
      <SetupView
        topic={currentTopic}
        kind={setupKind}
        difficulties={setupDifficulties}
        count={setupCount}
        randomize={setupRandomize}
        itemStats={itemStats}
        savedSession={savedSession}
        canSwitchToOtherKind={
          setupKind === 'fc'
            ? currentTopic.quiz.length > 0
            : currentTopic.flashcards.length > 0
        }
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
        onResume={resumeFromSavedSession}
        onSwitchKind={() =>
          setupKind === 'fc' ? switchToQuizSetup() : switchToFcSetup()
        }
        onBack={backToList}
      />
    );
  }
  if (view === 'fc' && currentTopic) {
    return (
      <FlashcardView
        topic={currentTopic}
        items={activeFcItems}
        initialState={resumeFc}
        uid={user?.uid ?? null}
        onFinish={handleFcFinish}
        onBack={backToList}
        onSwitchToQuiz={currentTopic.quiz.length > 0 ? switchToQuizSetup : null}
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
        initialState={resumeQuiz}
        uid={user?.uid ?? null}
        onFinish={handleQuizFinish}
        onBack={backToList}
        onSwitchToFc={currentTopic.flashcards.length > 0 ? switchToFcSetup : null}
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

      <TrialPremiumBanner />

      <main className="max-w-2xl mx-auto px-4">
        {latestResumeInfo && (
          <section className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <div className="text-xs text-amber-800 mb-1">📍 前回の続きから</div>
            <div className="flex items-center gap-2 text-sm text-amber-900 mb-3">
              {latestResumeInfo.topic.icon && (
                <span className="text-lg">{latestResumeInfo.topic.icon}</span>
              )}
              <span className="truncate flex-1">
                <span className="font-bold">{latestResumeInfo.topic.name}</span>
                <span className="text-xs text-amber-700 ml-1">
                  {latestResumeInfo.kind === 'fc' ? '🃏 暗記カード' : '❓ クイズ'}{' '}
                  {latestResumeInfo.saved.idx} / {latestResumeInfo.saved.itemIds.length}
                </span>
              </span>
            </div>
            <button
              onClick={() =>
                resumeSavedSession(latestResumeInfo.topic, latestResumeInfo.kind)
              }
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-2 text-sm font-bold"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              ▶ 続きから始める
            </button>
          </section>
        )}

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
                  🎯 出題範囲のみ表示
                </span>
              </label>
              <span className="text-xs text-gray-500">
                {visibleTopics} / {totalTopics} 単元
              </span>
            </section>
            {testScopeTopics.size === 0 && (
              <p className="text-xs text-gray-400 mt-2 px-1">
                出題範囲が設定されていません。先に「出題範囲設定」から範囲を選ぶと、ここで絞り込めるよ。
              </p>
            )}
          </>
        )}

        {selectedGrade !== null && historyEras !== null && historyEras.length > 0 && (
          filteredEras.length === 0 ? (
          <p className="mt-8 text-center text-sm text-gray-400">
            出題範囲に該当する単元がありません。チェックを外すと全範囲表示。
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
  savedSession,
  canSwitchToOtherKind,
  onToggleDifficulty,
  onChangeCount,
  onChangeRandomize,
  onStart,
  onResume,
  onSwitchKind,
  onBack,
}: {
  topic: StudyTopic;
  kind: SetupKind;
  difficulties: Set<Difficulty>;
  count: number | 'all';
  randomize: boolean;
  itemStats: ItemStatsMap;
  savedSession: SavedSessionFc | SavedSessionQuiz | null;
  canSwitchToOtherKind: boolean;
  onToggleDifficulty: (d: Difficulty) => void;
  onChangeCount: (c: number | 'all') => void;
  onChangeRandomize: (r: boolean) => void;
  onStart: () => void;
  onResume: () => void;
  onSwitchKind: () => void;
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

  const otherKindLabel = kind === 'fc' ? '❓ クイズへ' : '🃏 カードへ';
  const sessionProgress =
    savedSession && savedSession.kind === kind
      ? { done: savedSession.idx, total: savedSession.itemIds.length }
      : null;

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
          {canSwitchToOtherKind && (
            <button
              onClick={onSwitchKind}
              className="text-xs bg-white border border-amber-300 hover:bg-amber-50 text-amber-700 rounded-full px-3 py-1 font-medium flex-shrink-0"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              title={kind === 'fc' ? 'クイズに切り替え' : '暗記カードに切り替え'}
            >
              {otherKindLabel}
            </button>
          )}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 w-full flex-1">
        {sessionProgress && (
          <section className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <div className="text-xs text-amber-800 mb-1">
              📍 前回の続きがあります
            </div>
            <div className="text-sm text-amber-900 mb-3">
              {kind === 'fc' ? 'カード' : '問題'} {sessionProgress.done} / {sessionProgress.total} まで進めました
            </div>
            <div className="flex gap-2">
              <button
                onClick={onResume}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-full py-2 text-xs font-bold"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                続きから
              </button>
              <button
                onClick={onStart}
                className="flex-1 bg-white border border-amber-300 hover:bg-amber-50 text-amber-700 rounded-full py-2 text-xs font-medium"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                はじめから
              </button>
            </div>
          </section>
        )}

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
  initialState,
  uid,
  onFinish,
  onBack,
  onSwitchToQuiz,
}: {
  topic: StudyTopic;
  items: StudyFlashcard[];
  initialState: SavedSessionFc | null;
  uid: string | null;
  onFinish: (known: string[], unknown: string[]) => void;
  onBack: () => void;
  onSwitchToQuiz: (() => void) | null;
}) {
  const [idx, setIdx] = useState(() => initialState?.idx ?? 0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<string[]>(() => initialState?.known ?? []);
  const [unknown, setUnknown] = useState<string[]>(() => initialState?.unknown ?? []);

  // 進捗を localStorage に保存（同じトピックの fc セッション）
  useEffect(() => {
    if (items.length === 0) return;
    // 完了直前は親側で clear するのでここでは保存し続けて OK
    writeSavedSession(uid, {
      kind: 'fc',
      topicId: topic.topicId,
      itemIds: items.map((i) => i.id),
      idx,
      known,
      unknown,
      savedAt: Date.now(),
    });
  }, [uid, topic.topicId, items, idx, known, unknown]);

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
          {onSwitchToQuiz && (
            <button
              onClick={onSwitchToQuiz}
              className="text-xs bg-white border border-amber-300 hover:bg-amber-50 text-amber-700 rounded-full px-3 py-1 font-medium flex-shrink-0"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              title="クイズに切り替え"
            >
              ❓ クイズへ
            </button>
          )}
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
              <RubyText
                text={card.front}
                as="div"
                className="text-2xl font-bold text-gray-800 leading-relaxed text-center"
              />

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
  initialState,
  uid,
  onFinish,
  onBack,
  onSwitchToFc,
}: {
  topic: StudyTopic;
  items: StudyQuizQuestion[];
  initialState: SavedSessionQuiz | null;
  uid: string | null;
  onFinish: (correct: number, total: number, wrong: string[]) => void;
  onBack: () => void;
  onSwitchToFc: (() => void) | null;
}) {
  const [idx, setIdx] = useState(() => initialState?.idx ?? 0);
  const [selected, setSelected] = useState<number | null>(() => initialState?.selected ?? null);
  const [correctCount, setCorrectCount] = useState(() => initialState?.correctCount ?? 0);
  const [wrong, setWrong] = useState<string[]>(() => initialState?.wrong ?? []);

  // 進捗を localStorage に保存
  useEffect(() => {
    if (items.length === 0) return;
    writeSavedSession(uid, {
      kind: 'quiz',
      topicId: topic.topicId,
      itemIds: items.map((i) => i.id),
      idx,
      selected,
      correctCount,
      wrong,
      savedAt: Date.now(),
    });
  }, [uid, topic.topicId, items, idx, selected, correctCount, wrong]);

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
          {onSwitchToFc && (
            <button
              onClick={onSwitchToFc}
              className="text-xs bg-white border border-amber-300 hover:bg-amber-50 text-amber-700 rounded-full px-3 py-1 font-medium flex-shrink-0"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              title="暗記カードに切り替え"
            >
              🃏 カードへ
            </button>
          )}
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

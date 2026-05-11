import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore/lite';
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

type ViewMode = 'list' | 'fc' | 'quiz';

/**
 * 公式LINE のリッチメニュー「じっくり学ぶ」から開かれる LIFF ページ。
 *
 * 現状は歴史・中1（data/content/history/01〜04）に限定したインライン学習体験を提供する:
 *  - トピック一覧（時代ごとにグループ）
 *  - 「テスト範囲のみ表示」フィルタ（初期 ON）
 *  - 暗記カード（フリップ式）
 *  - 4 択クイズ（即時フィードバック + スコア）
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
  const [testScopeTopics, setTestScopeTopics] = useState<Set<string>>(new Set());
  const [testScopeLoaded, setTestScopeLoaded] = useState(false);
  // 初期 ON
  const [scopeFilterOn, setScopeFilterOn] = useState(true);

  // testScope を Firestore から読む
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
      } catch (err) {
        console.warn('[LiffUnitsPage] testScope load failed', err);
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

  const openFlashcard = (topic: StudyTopic) => {
    setCurrentTopic(topic);
    setView('fc');
  };
  const openQuiz = (topic: StudyTopic) => {
    setCurrentTopic(topic);
    setView('quiz');
  };
  const backToList = () => {
    setView('list');
    setCurrentTopic(null);
  };

  if (loading || !liffAuthAttempted) {
    return <LoadingScreen />;
  }
  if (!user) {
    return <Navigate to="/welcome?next=/liff/units" replace />;
  }
  if (!testScopeLoaded) {
    return <LoadingScreen />;
  }

  if (view === 'fc' && currentTopic) {
    return <FlashcardView topic={currentTopic} onBack={backToList} />;
  }
  if (view === 'quiz' && currentTopic) {
    return <QuizView topic={currentTopic} onBack={backToList} />;
  }

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
        {/* テスト範囲フィルタ */}
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

        {/* 時代別トピック一覧 */}
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
                      <span className="text-xs text-gray-400">
                        {era.eraPeriod}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="divide-y divide-gray-100">
                  {era.topics.map((t) => (
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
                          onClick={() => openFlashcard(t)}
                          disabled={t.flashcards.length === 0}
                          className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-200 disabled:text-gray-400 text-white text-xs font-bold rounded-full py-2 transition"
                          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          🃏 暗記カード ({t.flashcards.length})
                        </button>
                        <button
                          onClick={() => openQuiz(t)}
                          disabled={t.quiz.length === 0}
                          className="flex-1 bg-white border border-amber-300 hover:border-amber-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 text-amber-700 text-xs font-bold rounded-full py-2 transition"
                          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          ❓ クイズ ({t.quiz.length})
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ─── Flashcard View ───────────────────────────────────────────────

function FlashcardView({
  topic,
  onBack,
}: {
  topic: StudyTopic;
  onBack: () => void;
}) {
  const cards = topic.flashcards;
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (cards.length === 0) {
    return (
      <EmptyView title={topic.name} message="暗記カードがありません。" onBack={onBack} />
    );
  }

  const card: StudyFlashcard = cards[idx];
  const isLast = idx === cards.length - 1;

  const next = () => {
    if (isLast) {
      onBack();
      return;
    }
    setIdx((i) => i + 1);
    setFlipped(false);
  };
  const prev = () => {
    if (idx === 0) return;
    setIdx((i) => i - 1);
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
            {idx + 1} / {cards.length}
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
            onClick={prev}
            disabled={idx === 0}
            className="flex-1 bg-white border border-gray-200 hover:border-gray-400 disabled:opacity-40 text-gray-700 rounded-full py-3 text-sm font-medium transition"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ← 前
          </button>
          <button
            onClick={next}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold transition"
            style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {isLast ? '完了' : '次 →'}
          </button>
        </div>
      </main>
    </div>
  );
}

// ─── Quiz View ────────────────────────────────────────────────────

function QuizView({
  topic,
  onBack,
}: {
  topic: StudyTopic;
  onBack: () => void;
}) {
  const questions = topic.quiz;
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (questions.length === 0) {
    return (
      <EmptyView title={topic.name} message="クイズがありません。" onBack={onBack} />
    );
  }

  const q: StudyQuizQuestion = questions[idx];
  const isLast = idx === questions.length - 1;
  const answered = selected !== null;
  const correct = selected === q.correctIndex;

  const choose = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (i === q.correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (isLast) {
      setDone(true);
      return;
    }
    setIdx((i) => i + 1);
    setSelected(null);
  };

  if (done) {
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
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 flex-1 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center w-full">
            <div className="text-xs text-gray-500 mb-2">スコア</div>
            <div className="text-5xl font-bold text-amber-600 mb-2">
              {score}
              <span className="text-2xl text-gray-400"> / {questions.length}</span>
            </div>
            <div className="text-sm text-gray-600 mb-6">
              正答率 {Math.round((score / questions.length) * 100)}%
            </div>
            <button
              onClick={() => {
                setIdx(0);
                setSelected(null);
                setScore(0);
                setDone(false);
              }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-sm font-bold mb-2"
              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              もう一度挑戦
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
            Q {idx + 1} / {questions.length}
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

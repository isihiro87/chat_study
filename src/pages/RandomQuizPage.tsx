import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Home, Settings, ChevronRight, AlertTriangle, BookOpen } from 'lucide-react';
import { RandomQuizSetup } from '../components/random-quiz/RandomQuizSetup';
import { QuizView } from '../components/learning/QuizView';
import { Header } from '../components/common/Header';
import { getSubject } from '../data/subjects';
import { getTopic, getEra } from '../data/subjects/registry';
import { buildRandomQuiz } from '../utils/buildRandomQuiz';
import type { Quiz, QuizQuestion } from '../data/types';

interface LocationState {
  preselectedTopicIds?: string[];
  returnTo?: { path: string; name: string };
}

export function RandomQuizPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const subject = subjectId ? getSubject(subjectId) : undefined;

  const locationState = location.state as LocationState | null;
  const returnTo = locationState?.returnTo;
  const initialTopicIds = locationState?.preselectedTopicIds;
  const autoStarted = useRef(false);

  const [mode, setMode] = useState<'setup' | 'quiz'>('setup');
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [quizKey, setQuizKey] = useState(0);
  const [quizProgress, setQuizProgress] = useState({ current: 1, total: 1 });
  const [lastConfig, setLastConfig] = useState<{ topicIds: string[]; count: number } | null>(null);
  const [wrongQuestions, setWrongQuestions] = useState<QuizQuestion[]>([]);

  // Auto-start when navigated with preselected topics (from popup)
  useEffect(() => {
    if (initialTopicIds && initialTopicIds.length > 0 && !autoStarted.current) {
      autoStarted.current = true;
      const generated = buildRandomQuiz(initialTopicIds, 0); // 0 = all questions
      if (generated.questions.length > 0) {
        setQuiz(generated);
        setLastConfig({ topicIds: initialTopicIds, count: 0 });
        setQuizKey((prev) => prev + 1);
        setMode('quiz');
      }
    }
  }, [initialTopicIds]);

  const handleStart = useCallback((topicIds: string[], questionCount: number) => {
    const generated = buildRandomQuiz(topicIds, questionCount);
    if (generated.questions.length === 0) return;
    setQuiz(generated);
    setLastConfig({ topicIds, count: questionCount });
    setQuizKey((prev) => prev + 1);
    setMode('quiz');
  }, []);

  const handleRetry = useCallback(() => {
    if (!lastConfig) return;
    const generated = buildRandomQuiz(lastConfig.topicIds, lastConfig.count);
    setQuiz(generated);
    setQuizKey((prev) => prev + 1);
    setWrongQuestions([]);
  }, [lastConfig]);

  const handleBackToSetup = useCallback(() => {
    setMode('setup');
    setQuiz(null);
    setWrongQuestions([]);
  }, []);

  const handleProgressChange = useCallback((current: number, total: number) => {
    setQuizProgress({ current, total });
  }, []);

  const handleCompleteWithWrongQuestions = useCallback((wrongs: QuizQuestion[]) => {
    setWrongQuestions(wrongs);
  }, []);

  // Compute weak topics from wrong questions
  const weakTopics = useMemo(() => {
    if (wrongQuestions.length === 0) return [];
    const countByTopic = new Map<string, number>();
    for (const q of wrongQuestions) {
      if (q.sourceTopicId) {
        countByTopic.set(q.sourceTopicId, (countByTopic.get(q.sourceTopicId) ?? 0) + 1);
      }
    }
    return Array.from(countByTopic.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([topicId, wrongCount]) => {
        const topic = getTopic(topicId);
        const era = topic ? getEra(topic.eraId) : undefined;
        return { topicId, wrongCount, topic, era };
      })
      .filter((entry) => entry.topic != null);
  }, [wrongQuestions]);

  if (!subject || !subjectId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">科目が見つかりません</p>
      </div>
    );
  }

  if (mode === 'setup') {
    return (
      <div className="flex h-dvh flex-col bg-gray-50">
        <Header title="まとめクイズ" subtitle={`${subject.name} - 範囲と問題数をえらぼう`} showBack />
        <main className="flex-1 overflow-hidden">
          <RandomQuizSetup
            subjectId={subjectId}
            onStart={handleStart}
            initialSelectedTopicIds={initialTopicIds}
          />
        </main>
      </div>
    );
  }

  // Quiz mode
  return (
    <div className="flex h-dvh flex-col bg-gray-50">
      <header className="flex-shrink-0 bg-white shadow-sm">
        <div className="flex items-center px-4 py-3">
          <button
            onClick={handleBackToSetup}
            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
            aria-label="設定に戻る"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-lg font-bold text-gray-800">まとめクイズ</h1>
            <p className="truncate text-sm text-gray-500">{subject.name}</p>
          </div>
          <div className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {quizProgress.current}/{quizProgress.total}
          </div>
          <button
            onClick={() => navigate('/')}
            className="ml-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
            aria-label="ホーム"
          >
            <Home className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        {quiz && (
          <QuizView
            key={quizKey}
            quiz={quiz}
            onProgressChange={handleProgressChange}
            onCompleteWithWrongQuestions={handleCompleteWithWrongQuestions}
            extraResultButtons={
              <div className="flex w-full max-w-xs flex-col gap-3">
                {/* 苦手分野の表示 */}
                {weakTopics.length > 0 && (
                  <div className="mb-2 rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <p
                        className="text-sm font-bold text-amber-800"
                        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                      >
                        苦手な分野
                      </p>
                    </div>
                    <div className="space-y-2">
                      {weakTopics.map(({ topicId, wrongCount, topic, era }) => (
                        <Link
                          key={topicId}
                          to={`/subjects/${era!.subjectId}/eras/${topic!.eraId}/topics/${topicId}`}
                          className="flex items-center gap-3 rounded-lg bg-white p-3 transition-all hover:bg-gray-50 active:scale-[0.98]"
                        >
                          <span className="text-lg">{topic!.icon}</span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-800">
                              {topic!.name}
                            </p>
                            <p className="text-xs text-red-500">
                              {wrongCount}問ミス
                            </p>
                          </div>
                          <BookOpen className="h-4 w-4 flex-shrink-0 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {returnTo && (
                  <Link
                    to={returnTo.path}
                    className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-bold text-white transition-transform active:scale-95"
                    style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    次のチャプターへ
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                )}
                <button
                  onClick={handleRetry}
                  className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold transition-transform active:scale-95 ${
                    returnTo
                      ? 'border-2 border-gray-200 bg-white text-gray-700'
                      : 'bg-gray-800 text-white'
                  }`}
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  もう一度シャッフル
                </button>
                <button
                  onClick={handleBackToSetup}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition-transform active:scale-95"
                  style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  <Settings className="h-5 w-5" />
                  設定を変更
                </button>
              </div>
            }
          />
        )}
      </main>
    </div>
  );
}

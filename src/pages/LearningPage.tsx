import { useState, useCallback, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Clock, Star, X } from 'lucide-react';
import { SummaryQuizPopup } from '../components/random-quiz/SummaryQuizPopup';
import {
  addCompletedTopic,
  shouldShowSummaryQuizPopup,
  getSessionCompletedTopics,
  markPopupShown,
} from '../utils/sessionStudyTracker';
import { TabBar } from '../components/common/TabBar';
import { VideoPlayer } from '../components/learning/VideoPlayer';
import { FlashcardDeck } from '../components/learning/FlashcardDeck';
import { QuizView } from '../components/learning/QuizView';
import { ExampleView } from '../components/learning/ExampleView';
import { ChatContainer } from '../components/history-chat/ChatContainer';
import { Header } from '../components/common/Header';
import { getTopic, loadChat, loadTopicContent, getEra } from '../data/subjects/registry';
import { getSubject } from '../data/subjects';
import { SEOHead } from '../components/common/SEOHead';
import { estimateReadingTime } from '../utils/estimateReadingTime';
import { trackEvent } from '../utils/gtag';
import { useStudyProgress } from '../hooks/useStudyProgress';
import { useTopicNavigation } from '../hooks/useTopicNavigation';
import type { TabType, TopicContent, Difficulty } from '../data/types';
import type { HistoryChat } from '../data/history-chat/types';

export function LearningPage() {
  const { subjectId, eraId, topicId } = useParams<{
    subjectId: string;
    eraId: string;
    topicId: string;
  }>();
  const navigate = useNavigate();

  const topic = topicId ? getTopic(topicId) : undefined;
  const era = eraId ? getEra(eraId) : undefined;
  const subject = subjectId ? getSubject(subjectId) : undefined;
  const { prevTopic, nextTopic } = useTopicNavigation(topicId);

  const [content, setContent] = useState<TopicContent | null>(null);
  const [chat, setChat] = useState<HistoryChat | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const [activeTab, setActiveTabRaw] = useState<TabType>(() => {
    if (topicId) {
      const saved = sessionStorage.getItem(`activeTab:${topicId}`);
      if (saved === 'chat' || saved === 'flashcard' || saved === 'quiz' || saved === 'example' || saved === 'video') {
        return saved;
      }
    }
    return topic?.chatId ? 'chat' : 'flashcard';
  });
  const setActiveTab = useCallback((tab: TabType) => {
    setActiveTabRaw(tab);
    if (topicId) {
      sessionStorage.setItem(`activeTab:${topicId}`, tab);
    }
  }, [topicId]);
  const [cardProgress, setCardProgress] = useState({ current: 1, total: 1 });
  const [quizProgress, setQuizProgress] = useState({ current: 1, total: 1 });
  const [exampleProgress, setExampleProgress] = useState({ current: 1, total: 1 });
  const [chatProgress, setChatProgress] = useState({ current: 0, total: 1 });
  const [quizNewBest, setQuizNewBest] = useState(false);
  const [showSummaryPopup, setShowSummaryPopup] = useState(false);
  const [summaryTopicIds, setSummaryTopicIds] = useState<string[]>([]);
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return !localStorage.getItem('learningpage_onboarded');
  });

  const {
    markChatRead,
    markFlashcardCompleted,
    markExampleCompleted,
    updateQuizScore,
    getTopicProgress,
    isBookmarked,
    toggleBookmark,
  } = useStudyProgress();

  // 現在のトピックの進捗
  const topicProgress = topicId ? getTopicProgress(topicId) : null;
  const completedTabs: TabType[] = useMemo(() => {
    if (!topicProgress) return [];
    const tabs: TabType[] = [];
    if (topicProgress.chatRead) tabs.push('chat');
    if (topicProgress.exampleCompleted) tabs.push('example');
    if (topicProgress.flashcardCompleted) tabs.push('flashcard');
    if (topicProgress.quizBestScore !== null) tabs.push('quiz');
    return tabs;
  }, [topicProgress]);

  // 非同期でコンテンツとチャットをロード
  const loadContent = useCallback(async (tid: string, chatId?: string) => {
    setIsLoading(true);
    setLoadError(false);
    setContent(null);
    setChat(null);
    try {
      const [loadedContent, loadedChat] = await Promise.all([
        loadTopicContent(tid),
        chatId ? loadChat(chatId) : Promise.resolve(undefined),
      ]);
      setContent(loadedContent ?? null);
      setChat(loadedChat ?? null);
    } catch {
      setLoadError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!topicId || !topic) {
      setIsLoading(false);
      return;
    }
    void loadContent(topicId, topic.chatId ?? undefined);
  }, [topicId, topic?.chatId, loadContent]);

  // 前後トピックのプリフェッチ（メインコンテンツ読み込み後）
  useEffect(() => {
    if (isLoading || loadError) return;
    const prefetchIds = [prevTopic?.id, nextTopic?.id].filter(Boolean) as string[];
    prefetchIds.forEach((id) => {
      const t = getTopic(id);
      if (t) {
        void loadTopicContent(id).catch(() => {});
        if (t.chatId) void loadChat(t.chatId).catch(() => {});
      }
    });
  }, [isLoading, loadError, prevTopic?.id, nextTopic?.id]);

  // チャットの推定読了時間
  const chatEstimatedMinutes = useMemo(() => {
    return chat ? estimateReadingTime(chat.content) : 0;
  }, [chat]);

  const hasExamples = !!topic?.hasExamples;
  const hiddenTabs: TabType[] = useMemo(() => {
    const hidden: TabType[] = [];
    if (!chat) hidden.push('chat');
    if (!hasExamples) hidden.push('example');
    return hidden;
  }, [chat, hasExamples]);

  const disabledTabs: TabType[] = ['video'];

  // 前後トピックのナビゲーション情報（era をまたぐ場合は各トピックの eraId を使用）
  const topicNavigation = useMemo(() => {
    return {
      prev: prevTopic
        ? { name: prevTopic.name, path: `/subjects/${subjectId}/eras/${prevTopic.eraId}/topics/${prevTopic.id}` }
        : null,
      next: nextTopic
        ? { name: nextTopic.name, path: `/subjects/${subjectId}/eras/${nextTopic.eraId}/topics/${nextTopic.id}` }
        : null,
    };
  }, [subjectId, prevTopic, nextTopic]);

  // トピック変更時にデフォルトタブにリセット（別トピックへの遷移対応）
  useEffect(() => {
    setActiveTab(topic?.chatId ? 'chat' : 'flashcard');
  }, [topicId, topic?.chatId]);

  // タブ切り替え時にスクロール位置をリセット
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // クイズ・フラッシュカード進行中のページ離脱確認
  const isInProgress =
    (activeTab === 'quiz' && quizProgress.current > 1 && quizProgress.current <= quizProgress.total) ||
    (activeTab === 'flashcard' && cardProgress.current > 1 && cardProgress.current <= cardProgress.total);
  useEffect(() => {
    if (!isInProgress) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [isInProgress]);

  const handleCardProgressChange = useCallback((current: number, total: number) => {
    setCardProgress({ current, total });
  }, []);

  const handleQuizProgressChange = useCallback((current: number, total: number) => {
    setQuizProgress({ current, total });
    if (current === 1) {
      setQuizNewBest(false);
    }
  }, []);

  const handleExampleProgressChange = useCallback((current: number, total: number) => {
    setExampleProgress({ current, total });
  }, []);

  const handleChatProgressChange = useCallback((current: number, total: number) => {
    setChatProgress({ current, total });
  }, []);

  const handleChatComplete = useCallback(() => {
    if (topicId) markChatRead(topicId);
  }, [topicId, markChatRead]);

  const handleFlashcardComplete = useCallback(() => {
    if (topicId) {
      markFlashcardCompleted(topicId);
      trackEvent('flashcard_complete', topicId);
    }
  }, [topicId, markFlashcardCompleted]);

  const handleExampleComplete = useCallback(() => {
    if (topicId) markExampleCompleted(topicId);
  }, [topicId, markExampleCompleted]);

  const handleQuizComplete = useCallback(
    (score: number, total: number) => {
      if (topicId) {
        const { isNewBest } = updateQuizScore(topicId, score, total);
        setQuizNewBest(isNewBest);
        trackEvent('quiz_complete', topicId, Math.round((score / total) * 100));
        if (subjectId && era?.grade) {
          addCompletedTopic(topicId, subjectId, era.grade);
          if (shouldShowSummaryQuizPopup(subjectId, era.grade)) {
            markPopupShown();
            setSummaryTopicIds(getSessionCompletedTopics(subjectId, era.grade));
            setShowSummaryPopup(true);
          }
        }
      }
    },
    [topicId, updateQuizScore],
  );

  const handleQuizCompleteWithDifficulties = useCallback(
    (score: number, total: number, difficulties: Difficulty[]) => {
      if (topicId) {
        updateQuizScore(topicId, score, total, difficulties);
      }
    },
    [topicId, updateQuizScore],
  );

  if (!topic) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">トピックが見つかりません</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF9F7] px-4">
        <span className="mb-4 text-6xl">😵</span>
        <h1
          className="mb-2 text-xl font-bold text-gray-800"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          読み込みに失敗しました
        </h1>
        <p
          className="mb-6 text-center text-sm text-gray-500"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          コンテンツの取得中にエラーが発生しました。
          <br />
          もう一度お試しください。
        </p>
        <button
          onClick={() => loadContent(topicId!, topic.chatId ?? undefined)}
          className="rounded-full bg-gray-800 px-6 py-3 text-sm font-semibold text-white active:scale-95"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          再試行
        </button>
      </div>
    );
  }

  if (isLoading || !content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF9F7]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-amber-500" />
          <p className="mt-3 text-sm text-gray-500">読み込み中...</p>
        </div>
      </div>
    );
  }

  // 戻るボタン付きヘッダーのJSX（進捗表示あり）
  const progressHeader = (progress: { current: number; total: number }) => (
    <header className="flex-shrink-0 bg-white shadow-sm">
      <div className="flex items-center px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="mr-3 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
          aria-label="戻る"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="truncate text-lg font-bold text-gray-800">{topic.name}</h1>
          <p className="truncate text-xs text-gray-400">
            {subject?.name}{era ? ` › ${era.name}` : ''}
          </p>
        </div>
        <div className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {progress.current}/{progress.total}
        </div>
        {topicId && (
          <button
            onClick={() => toggleBookmark(topicId)}
            className="ml-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
            aria-label={isBookmarked(topicId) ? 'お気に入りから削除' : 'お気に入りに追加'}
          >
            <Star className={`h-5 w-5 ${isBookmarked(topicId) ? 'fill-amber-500 text-amber-500' : 'text-gray-400'}`} />
          </button>
        )}
        <button
          onClick={() => navigate('/')}
          className="ml-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
          aria-label="ホーム"
        >
          <Home className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  );

  // チャットの進捗率
  const chatProgressPercent = chatProgress.total > 0
    ? Math.round((chatProgress.current / chatProgress.total) * 100)
    : 0;

  // 戻るボタン付きヘッダーのJSX（チャット用：読了時間・進捗表示あり）
  const chatHeader = (
    <header className="flex-shrink-0 bg-white shadow-sm">
      <div className="flex items-center px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="mr-3 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
          aria-label="戻る"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="truncate text-lg font-bold text-gray-800">{topic.name}</h1>
          <p className="truncate text-xs text-gray-400">
            {subject?.name}{era ? ` › ${era.name}` : ''}
          </p>
        </div>
        {chatEstimatedMinutes > 0 && (
          <span className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
            <Clock className="h-3 w-3" />
            約{chatEstimatedMinutes}分
          </span>
        )}
        <button
          onClick={() => navigate('/')}
          className="ml-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
          aria-label="ホーム"
        >
          <Home className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      {/* プログレスバー */}
      <div className="relative">
        <div className="h-1 w-full bg-gray-100">
          <div
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${chatProgressPercent}%` }}
          />
        </div>
        {chatProgressPercent > 0 && (
          <div className="absolute right-2 top-1.5">
            <span className="text-[10px] font-medium text-gray-400">
              {chatProgressPercent}%
            </span>
          </div>
        )}
      </div>
    </header>
  );

  return (
    <>
      <SEOHead
        title={`${topic.name} - ${subject?.name ?? '学習'}`}
        description={`${topic.name}（${topic.subtitle}）をチャット解説・フラッシュカード・クイズで学べます。中学${subject?.name ?? ''}の定期テスト対策に。`}
        path={`/subjects/${subjectId}/eras/${eraId}/topics/${topicId}`}
        breadcrumbs={[
          { name: 'ホーム', path: '/' },
          { name: subject?.name ?? '', path: `/subjects/${subjectId}` },
          ...(era ? [{ name: era.name, path: `/subjects/${subjectId}/eras/${eraId}` }] : []),
          { name: topic.name, path: `/subjects/${subjectId}/eras/${eraId}/topics/${topicId}` },
        ]}
      />
      {/* チャットタブ（常にマウント、display制御で表示切替） */}
      {chat && (
        <div
          className="fixed inset-0 z-10 flex flex-col pb-16"
          style={{ display: activeTab === 'chat' ? 'flex' : 'none' }}
        >
          {chatHeader}
          <ChatContainer
            key={topicId}
            chat={chat}
            embedded
            onNavigateToFlashcard={() => setActiveTab('flashcard')}
            onNavigateToQuiz={() => setActiveTab('quiz')}
            onNavigateToExample={content.examples ? () => setActiveTab('example') : undefined}
            onComplete={handleChatComplete}
            onProgressChange={handleChatProgressChange}
            subjectId={subjectId}
          />
        </div>
      )}

      {/* 例題タブ（常にマウント、display制御で表示切替） */}
      {content.examples && (
        <div
          className="flex h-dvh flex-col bg-gray-50"
          style={{ display: activeTab === 'example' ? 'flex' : 'none' }}
        >
          {progressHeader(exampleProgress)}
          <main className="flex-1 overflow-hidden">
            <ExampleView
              key={topicId}
              examples={content.examples}
              onProgressChange={handleExampleProgressChange}
              onComplete={handleExampleComplete}
            />
          </main>
        </div>
      )}

      {/* フラッシュカードタブ（常にマウント、display制御で表示切替） */}
      <div
        className="flex h-dvh flex-col bg-gray-50"
        style={{ display: activeTab === 'flashcard' ? 'flex' : 'none' }}
      >
        {progressHeader(cardProgress)}
        <main className="flex-1 overflow-hidden">
          <FlashcardDeck
            key={topicId}
            cards={content.flashcards}
            onProgressChange={handleCardProgressChange}
            onComplete={handleFlashcardComplete}
            chatGPTInfo={subjectId ? { subjectId, topicName: topic.name, topicSubtitle: topic.subtitle } : undefined}
          />
        </main>
      </div>

      {/* クイズタブ（常にマウント、display制御で表示切替） */}
      <div
        className="flex h-dvh flex-col bg-gray-50"
        style={{ display: activeTab === 'quiz' ? 'flex' : 'none' }}
      >
        {progressHeader(quizProgress)}
        <main className="flex-1 overflow-hidden">
          <QuizView
            key={topicId}
            quiz={content.quiz}
            onProgressChange={handleQuizProgressChange}
            onComplete={handleQuizComplete}
            onCompleteWithDifficulties={handleQuizCompleteWithDifficulties}
            isNewBest={quizNewBest}
            navigation={topicNavigation}
            chatGPTInfo={subjectId ? { subjectId, topicName: topic.name, topicSubtitle: topic.subtitle } : undefined}
          />
        </main>
      </div>

      {/* 動画タブ（常にマウント、display制御で表示切替） */}
      <div
        className="min-h-screen bg-gray-50 pb-16"
        style={{ display: activeTab === 'video' ? 'block' : 'none' }}
      >
        <Header title={topic.name} subtitle={topic.subtitle} showBack />
        <main className="mx-auto max-w-md px-4 py-4">
          <VideoPlayer videos={content.videos} />
        </main>
      </div>

      {/* 初回オンボーディングバナー */}
      {showOnboarding && (
        <div className="fixed bottom-16 left-0 right-0 z-30 flex items-center justify-between bg-amber-50 px-4 py-2.5 text-xs text-amber-700 shadow-sm">
          <span>下のタブで「チャット解説」「フラッシュカード」「クイズ」を切り替えられます</span>
          <button
            onClick={() => {
              setShowOnboarding(false);
              localStorage.setItem('learningpage_onboarded', '1');
            }}
            className="ml-2 flex-shrink-0 rounded-full p-1 hover:bg-amber-100"
            aria-label="閉じる"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* TabBar（共通、常に表示） */}
      <TabBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        hiddenTabs={hiddenTabs}
        disabledTabs={disabledTabs}
        completedTabs={completedTabs}
      />

      {/* まとめクイズポップアップ */}
      {showSummaryPopup && (
        <SummaryQuizPopup
          topicIds={summaryTopicIds}
          onStart={() => {
            setShowSummaryPopup(false);
            const nextPath = nextTopic
              ? `/subjects/${subjectId}/eras/${eraId}/topics/${nextTopic.id}`
              : undefined;
            navigate(`/subjects/${subjectId}/random-quiz`, {
              state: {
                preselectedTopicIds: summaryTopicIds,
                returnTo: nextPath
                  ? { path: nextPath, name: nextTopic!.name }
                  : undefined,
              },
            });
          }}
          onDismiss={() => setShowSummaryPopup(false)}
        />
      )}
    </>
  );
}

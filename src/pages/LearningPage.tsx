import { useState, useCallback, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Clock } from 'lucide-react';
import { TabBar } from '../components/common/TabBar';
import { VideoPlayer } from '../components/learning/VideoPlayer';
import { FlashcardDeck } from '../components/learning/FlashcardDeck';
import { QuizView } from '../components/learning/QuizView';
import { ExampleView } from '../components/learning/ExampleView';
import { ChatContainer } from '../components/history-chat/ChatContainer';
import { Header } from '../components/common/Header';
import { getTopic, getChat } from '../data/subjects/registry';
import { estimateReadingTime } from '../utils/estimateReadingTime';
import { useStudyProgress } from '../hooks/useStudyProgress';
import { useTopicNavigation } from '../hooks/useTopicNavigation';
import type { TabType } from '../data/types';

export function LearningPage() {
  const { subjectId, eraId, topicId } = useParams<{
    subjectId: string;
    eraId: string;
    topicId: string;
  }>();
  const navigate = useNavigate();

  const topic = topicId ? getTopic(topicId) : undefined;
  const { prevTopic, nextTopic } = useTopicNavigation(topicId);

  const [activeTab, setActiveTab] = useState<TabType>(() =>
    topic?.content.chatId ? 'chat' : 'flashcard'
  );
  const [cardProgress, setCardProgress] = useState({ current: 1, total: 1 });
  const [quizProgress, setQuizProgress] = useState({ current: 1, total: 1 });
  const [exampleProgress, setExampleProgress] = useState({ current: 1, total: 1 });
  const [chatProgress, setChatProgress] = useState({ current: 0, total: 1 });
  const [quizNewBest, setQuizNewBest] = useState(false);

  const {
    markChatRead,
    markFlashcardCompleted,
    markExampleCompleted,
    updateQuizScore,
    getTopicProgress,
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

  const chat = useMemo(() => {
    if (topic?.content.chatId) {
      return getChat(topic.content.chatId);
    }
    return undefined;
  }, [topic?.content.chatId]);

  // チャットの推定読了時間
  const chatEstimatedMinutes = useMemo(() => {
    return chat ? estimateReadingTime(chat.content) : 0;
  }, [chat]);

  const hasExamples = !!topic?.content.examples;
  const hiddenTabs: TabType[] = useMemo(() => {
    const hidden: TabType[] = [];
    if (!chat) hidden.push('chat');
    if (!hasExamples) hidden.push('example');
    return hidden;
  }, [chat, hasExamples]);

  const disabledTabs: TabType[] = ['video'];

  // 前後トピックのナビゲーション情報
  const topicNavigation = useMemo(() => {
    const basePath = `/subjects/${subjectId}/eras/${eraId}/topics`;
    return {
      prev: prevTopic
        ? { name: prevTopic.name, path: `${basePath}/${prevTopic.id}` }
        : null,
      next: nextTopic
        ? { name: nextTopic.name, path: `${basePath}/${nextTopic.id}` }
        : null,
    };
  }, [subjectId, eraId, prevTopic, nextTopic]);

  // トピック変更時にデフォルトタブにリセット（別トピックへの遷移対応）
  useEffect(() => {
    setActiveTab(topic?.content.chatId ? 'chat' : 'flashcard');
  }, [topicId, topic?.content.chatId]);

  // タブ切り替え時にスクロール位置をリセット
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

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
    if (topicId) markFlashcardCompleted(topicId);
  }, [topicId, markFlashcardCompleted]);

  const handleExampleComplete = useCallback(() => {
    if (topicId) markExampleCompleted(topicId);
  }, [topicId, markExampleCompleted]);

  const handleQuizComplete = useCallback(
    (score: number, total: number) => {
      if (topicId) {
        const { isNewBest } = updateQuizScore(topicId, score, total);
        setQuizNewBest(isNewBest);
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
          <p className="truncate text-sm text-gray-500">{topic.subtitle}</p>
        </div>
        <div className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {progress.current}/{progress.total}
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
          <p className="truncate text-sm text-gray-500">{topic.subtitle}</p>
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
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
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
      {/* チャットタブ（常にマウント、display制御で表示切替） */}
      {chat && (
        <div
          className="flex h-dvh flex-col overflow-hidden pb-16"
          style={{ display: activeTab === 'chat' ? 'flex' : 'none' }}
        >
          {chatHeader}
          <ChatContainer
            key={topicId}
            chat={chat}
            embedded
            onNavigateToFlashcard={() => setActiveTab('flashcard')}
            onNavigateToQuiz={() => setActiveTab('quiz')}
            onComplete={handleChatComplete}
            onProgressChange={handleChatProgressChange}
          />
        </div>
      )}

      {/* 例題タブ（常にマウント、display制御で表示切替） */}
      {topic.content.examples && (
        <div
          className="flex h-dvh flex-col bg-gray-50"
          style={{ display: activeTab === 'example' ? 'flex' : 'none' }}
        >
          {progressHeader(exampleProgress)}
          <main className="flex-1 overflow-hidden">
            <ExampleView
              key={topicId}
              examples={topic.content.examples}
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
            cards={topic.content.flashcards}
            onProgressChange={handleCardProgressChange}
            onComplete={handleFlashcardComplete}
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
            quiz={topic.content.quiz}
            onProgressChange={handleQuizProgressChange}
            onComplete={handleQuizComplete}
            isNewBest={quizNewBest}
            navigation={topicNavigation}
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
          <VideoPlayer videos={topic.content.videos} />
        </main>
      </div>

      {/* TabBar（共通、常に表示） */}
      <TabBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        hiddenTabs={hiddenTabs}
        disabledTabs={disabledTabs}
        completedTabs={completedTabs}
      />
    </>
  );
}

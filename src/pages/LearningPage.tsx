import { useState, useCallback, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { TabBar } from '../components/common/TabBar';
import { VideoPlayer } from '../components/learning/VideoPlayer';
import { FlashcardDeck } from '../components/learning/FlashcardDeck';
import { QuizView } from '../components/learning/QuizView';
import { ChatContainer } from '../components/history-chat/ChatContainer';
import { Header } from '../components/common/Header';
import { getTopic } from '../data/subjects/history';
import { getHistoryChat } from '../data/history-chat';
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
  const [quizNewBest, setQuizNewBest] = useState(false);

  const {
    markChatRead,
    markFlashcardCompleted,
    updateQuizScore,
    getTopicProgress,
  } = useStudyProgress();

  // 現在のトピックの進捗
  const topicProgress = topicId ? getTopicProgress(topicId) : null;
  const completedTabs: TabType[] = useMemo(() => {
    if (!topicProgress) return [];
    const tabs: TabType[] = [];
    if (topicProgress.chatRead) tabs.push('chat');
    if (topicProgress.flashcardCompleted) tabs.push('flashcard');
    if (topicProgress.quizBestScore !== null) tabs.push('quiz');
    return tabs;
  }, [topicProgress]);

  const chat = useMemo(() => {
    if (topic?.content.chatId) {
      return getHistoryChat(topic.content.chatId);
    }
    return undefined;
  }, [topic?.content.chatId]);

  const hiddenTabs: TabType[] = useMemo(() => {
    return chat ? [] : ['chat'];
  }, [chat]);

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

  const handleChatComplete = useCallback(() => {
    if (topicId) markChatRead(topicId);
  }, [topicId, markChatRead]);

  const handleFlashcardComplete = useCallback(() => {
    if (topicId) markFlashcardCompleted(topicId);
  }, [topicId, markFlashcardCompleted]);

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

  // 戻るボタン付きヘッダーのJSX（進捗表示なし）
  const simpleHeader = (
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

  return (
    <>
      {/* チャットタブ（常にマウント、display制御で表示切替） */}
      {chat && (
        <div
          className="flex h-dvh flex-col pb-16"
          style={{ display: activeTab === 'chat' ? 'flex' : 'none' }}
        >
          {simpleHeader}
          <ChatContainer
            chat={chat}
            embedded
            onNavigateToFlashcard={() => setActiveTab('flashcard')}
            onNavigateToQuiz={() => setActiveTab('quiz')}
            onComplete={handleChatComplete}
          />
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

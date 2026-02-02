import { useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { TabBar } from '../components/common/TabBar';
import { ExplanationView } from '../components/learning/ExplanationView';
import { VideoPlayer } from '../components/learning/VideoPlayer';
import { FlashcardDeck } from '../components/learning/FlashcardDeck';
import { QuizView } from '../components/learning/QuizView';
import { ChatContainer } from '../components/history-chat/ChatContainer';
import { Header } from '../components/common/Header';
import { getTopic } from '../data/subjects/history';
import { getHistoryChat } from '../data/history-chat';
import type { TabType } from '../data/types';

export function LearningPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('chat'); // チャットを初期タブに
  const [slideProgress, setSlideProgress] = useState({ current: 1, total: 1 });
  const [cardProgress, setCardProgress] = useState({ current: 1, total: 1 });

  const topic = topicId ? getTopic(topicId) : undefined;

  // チャットデータを取得
  const chat = useMemo(() => {
    if (topic?.content.chatId) {
      return getHistoryChat(topic.content.chatId);
    }
    return undefined;
  }, [topic?.content.chatId]);

  // チャットがない場合はチャットタブを非表示
  const hiddenTabs: TabType[] = useMemo(() => {
    return chat ? [] : ['chat'];
  }, [chat]);

  // 動画タブは準備中のため無効化
  const disabledTabs: TabType[] = ['video'];

  const handleSlideProgressChange = useCallback((current: number, total: number) => {
    setSlideProgress({ current, total });
  }, []);

  const handleCardProgressChange = useCallback((current: number, total: number) => {
    setCardProgress({ current, total });
  }, []);

  if (!topic) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">トピックが見つかりません</p>
      </div>
    );
  }

  // フルスクリーン表示用のヘッダー
  const FullScreenHeader = ({ progress }: { progress: { current: number; total: number } }) => (
    <header className="flex-shrink-0 bg-white shadow-sm">
      <div className="flex items-center px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="mr-3 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
          aria-label="戻る"
        >
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold text-gray-800">{topic.name}</h1>
          <p className="text-sm text-gray-500">{topic.subtitle}</p>
        </div>
        <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {progress.current}/{progress.total}
        </div>
      </div>
    </header>
  );

  // タップモード（スライド）はフルスクリーン表示
  if (activeTab === 'explanation') {
    return (
      <div className="flex h-screen flex-col bg-gray-50">
        <FullScreenHeader progress={slideProgress} />
        <main className="flex-1 overflow-hidden">
          <ExplanationView
            explanation={topic.content.explanation}
            onProgressChange={handleSlideProgressChange}
          />
        </main>
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} hiddenTabs={hiddenTabs} disabledTabs={disabledTabs} />
      </div>
    );
  }

  // フラッシュカードもフルスクリーン表示
  if (activeTab === 'flashcard') {
    return (
      <div className="flex h-screen flex-col bg-gray-50">
        <FullScreenHeader progress={cardProgress} />
        <main className="flex-1 overflow-hidden">
          <FlashcardDeck
            cards={topic.content.flashcards}
            onProgressChange={handleCardProgressChange}
          />
        </main>
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} hiddenTabs={hiddenTabs} disabledTabs={disabledTabs} />
      </div>
    );
  }

  // チャットタブはフルスクリーン表示（TabBarの上に）
  if (activeTab === 'chat' && chat) {
    return (
      <div className="flex h-screen flex-col pb-16">
        <header className="flex-shrink-0 bg-white shadow-sm">
          <div className="flex items-center px-4 py-3">
            <button
              onClick={() => navigate(-1)}
              className="mr-3 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
              aria-label="戻る"
            >
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-gray-800">{topic.name}</h1>
              <p className="text-sm text-gray-500">{topic.subtitle}</p>
            </div>
          </div>
        </header>
        <ChatContainer chat={chat} embedded />
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} hiddenTabs={hiddenTabs} disabledTabs={disabledTabs} />
      </div>
    );
  }

  // その他のタブは通常表示
  const renderContent = () => {
    switch (activeTab) {
      case 'video':
        return <VideoPlayer videos={topic.content.videos} />;
      case 'quiz':
        return <QuizView quiz={topic.content.quiz} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header title={topic.name} subtitle={topic.subtitle} showBack />

      <main className="mx-auto max-w-md px-4 py-4">{renderContent()}</main>

      <TabBar activeTab={activeTab} onTabChange={setActiveTab} hiddenTabs={hiddenTabs} disabledTabs={disabledTabs} />
    </div>
  );
}

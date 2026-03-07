import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChatContainer } from '../components/history-chat/ChatContainer';
import { SEOHead } from '../components/common/SEOHead';
import { loadChat } from '../data/subjects/registry';
import type { HistoryChat } from '../data/history-chat/types';

export function HistoryChatPage() {
  const { chatId } = useParams<{ chatId: string }>();
  const [chat, setChat] = useState<HistoryChat | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!chatId) {
      setIsLoading(false);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    loadChat(chatId).then((data) => {
      if (!cancelled) {
        setChat(data);
        setIsLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [chatId]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-amber-500" />
      </div>
    );
  }

  if (!chat) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <span className="mb-4 text-6xl">📜</span>
        <h1
          className="mb-2 text-xl font-bold text-gray-800"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          チャットが見つかりません
        </h1>
        <p
          className="text-center text-sm text-gray-500"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          指定されたチャットは存在しないか、
          <br />
          削除された可能性があります。
        </p>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${chat.title} - 歴史チャット`}
        description={`${chat.title}（${chat.subtitle}）をチャット形式で楽しく学べます。`}
        path={`/chat/${chatId}`}
        breadcrumbs={[
          { name: 'ホーム', path: '/' },
          { name: chat.title, path: `/chat/${chatId}` },
        ]}
      />
      <ChatContainer chat={chat} />
    </>
  );
}

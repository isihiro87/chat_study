import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ChatContainer } from '../components/history-chat/ChatContainer';
import { SEOHead } from '../components/common/SEOHead';
import { loadChat } from '../data/subjects/registry';
import type { HistoryChat } from '../data/history-chat/types';

export function HistoryChatPage() {
  const { chatId } = useParams<{ chatId: string }>();
  const [chat, setChat] = useState<HistoryChat | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const loadChatData = useCallback(async (id: string) => {
    setIsLoading(true);
    setLoadError(false);
    try {
      const data = await loadChat(id);
      setChat(data);
    } catch {
      setLoadError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!chatId) {
      setIsLoading(false);
      return;
    }
    void loadChatData(chatId);
  }, [chatId, loadChatData]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF9F7]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-amber-500" />
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
          チャットの取得中にエラーが発生しました。
          <br />
          もう一度お試しください。
        </p>
        <button
          onClick={() => chatId && loadChatData(chatId)}
          className="rounded-full bg-gray-800 px-6 py-3 text-sm font-semibold text-white active:scale-95"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          再試行
        </button>
      </div>
    );
  }

  if (!chat) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF9F7] px-4">
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

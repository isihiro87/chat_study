import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ChatContainer } from '../components/history-chat/ChatContainer';
import { SEOHead } from '../components/common/SEOHead';
import { loadChat } from '../data/subjects/registry';
import { classifyError, handleChunkError } from '../utils/classifyError';
import { ErrorScreen } from '../components/common/ErrorScreen';
import type { LoadErrorType } from '../utils/classifyError';
import type { HistoryChat } from '../data/history-chat/types';

export function HistoryChatPage() {
  const { chatId } = useParams<{ chatId: string }>();
  const [chat, setChat] = useState<HistoryChat | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<LoadErrorType | null>(null);

  const loadChatData = useCallback(async (id: string) => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const data = await loadChat(id);
      setChat(data);
    } catch (err) {
      const errorType = classifyError(err);
      if (errorType === 'chunk') {
        handleChunkError();
      }
      setLoadError(errorType);
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
      <div className="flex min-h-screen flex-col bg-[#FAF9F7]">
        {/* ヘッダースケルトン */}
        <div className="bg-white shadow-sm">
          <div className="flex items-center px-4 py-3">
            <div className="mr-3 h-10 w-10 animate-pulse rounded-full bg-gray-200" />
            <div className="flex-1">
              <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
              <div className="mt-1 h-3 w-24 animate-pulse rounded bg-gray-100" />
            </div>
          </div>
          <div className="mx-4 mb-2 h-1.5 animate-pulse rounded-full bg-gray-200" />
        </div>
        {/* チャットメッセージスケルトン */}
        <div className="flex-1 space-y-4 p-4">
          <div className="flex gap-3">
            <div className="h-8 w-8 flex-shrink-0 animate-pulse rounded-full bg-gray-200" />
            <div className="h-16 w-3/4 animate-pulse rounded-2xl bg-gray-200" />
          </div>
          <div className="flex justify-end">
            <div className="h-12 w-2/3 animate-pulse rounded-2xl bg-gray-200" />
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 flex-shrink-0 animate-pulse rounded-full bg-gray-200" />
            <div className="h-24 w-3/4 animate-pulse rounded-2xl bg-gray-200" />
          </div>
          <div className="flex justify-end">
            <div className="h-10 w-1/2 animate-pulse rounded-2xl bg-gray-200" />
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 flex-shrink-0 animate-pulse rounded-full bg-gray-200" />
            <div className="h-16 w-2/3 animate-pulse rounded-2xl bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <ErrorScreen
        errorType={loadError}
        onRetry={() => chatId && loadChatData(chatId)}
      />
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

import { useParams } from 'react-router-dom';
import { ChatContainer } from '../components/history-chat/ChatContainer';
import { getHistoryChat } from '../data/history-chat';

export function HistoryChatPage() {
  const { chatId } = useParams<{ chatId: string }>();

  const chat = chatId ? getHistoryChat(chatId) : undefined;

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

  return <ChatContainer chat={chat} />;
}

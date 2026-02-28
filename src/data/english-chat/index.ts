import type { HistoryChat } from '../history-chat/types';
import { beVerbsChat } from '../subjects/english/grades/grade1/topics/1-be-verbs/chat';
import { generalVerbsChat } from '../subjects/english/grades/grade1/topics/2-general-verbs/chat';

const chatMap: Record<string, HistoryChat> = {
  [beVerbsChat.id]: beVerbsChat,
  [generalVerbsChat.id]: generalVerbsChat,
};

export function getEnglishChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

export function getAllEnglishChats(): HistoryChat[] {
  return Object.values(chatMap);
}

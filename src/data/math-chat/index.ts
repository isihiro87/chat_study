import type { HistoryChat } from '../history-chat/types';
// Grade 1
import { linearEquationsChat } from '../subjects/math/units/grade1/topics/1-linear-equations/chat';
// Grade 2
import { simultaneousEquationsChat } from '../subjects/math/units/grade2/topics/1-simultaneous-equations/chat';
// Grade 3
import { quadraticEquationsChat } from '../subjects/math/units/grade3/topics/1-quadratic-equations/chat';

const chatMap: Record<string, HistoryChat> = {
  // Grade 1
  [linearEquationsChat.id]: linearEquationsChat,
  // Grade 2
  [simultaneousEquationsChat.id]: simultaneousEquationsChat,
  // Grade 3
  [quadraticEquationsChat.id]: quadraticEquationsChat,
};

export function getMathChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

export function getAllMathChats(): HistoryChat[] {
  return Object.values(chatMap);
}

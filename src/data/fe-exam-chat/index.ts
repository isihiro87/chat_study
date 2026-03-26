import type { HistoryChat } from '../history-chat/types';
// Project Management
import { projectPlanningChat } from '../subjects/fe-exam/management/project-management/topics/project-planning/chat';

const chatMap: Record<string, HistoryChat> = {
  [projectPlanningChat.id]: projectPlanningChat,
};

export function getFeExamChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

export function getAllFeExamChats(): HistoryChat[] {
  return Object.values(chatMap);
}

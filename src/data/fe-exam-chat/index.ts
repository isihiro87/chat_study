import type { HistoryChat } from '../history-chat/types';
// Basic Theory
import { numberSystemsChat } from '../subjects/fe-exam/technology/basic-theory/topics/number-systems/chat';
import { complementFixedPointChat } from '../subjects/fe-exam/technology/basic-theory/topics/complement-fixed-point/chat';
import { floatingPointChat } from '../subjects/fe-exam/technology/basic-theory/topics/floating-point/chat';
import { errorsChat } from '../subjects/fe-exam/technology/basic-theory/topics/errors/chat';
import { shiftOperationsChat } from '../subjects/fe-exam/technology/basic-theory/topics/shift-operations/chat';
import { logicOperationsChat } from '../subjects/fe-exam/technology/basic-theory/topics/logic-operations/chat';
import { adderCircuitsChat } from '../subjects/fe-exam/technology/basic-theory/topics/adder-circuits/chat';
import { measurementControlChat } from '../subjects/fe-exam/technology/basic-theory/topics/measurement-control/chat';
// Project Management
import { projectPlanningChat } from '../subjects/fe-exam/management/project-management/topics/project-planning/chat';

const chatMap: Record<string, HistoryChat> = {
  [numberSystemsChat.id]: numberSystemsChat,
  [complementFixedPointChat.id]: complementFixedPointChat,
  [floatingPointChat.id]: floatingPointChat,
  [errorsChat.id]: errorsChat,
  [shiftOperationsChat.id]: shiftOperationsChat,
  [logicOperationsChat.id]: logicOperationsChat,
  [adderCircuitsChat.id]: adderCircuitsChat,
  [measurementControlChat.id]: measurementControlChat,
  [projectPlanningChat.id]: projectPlanningChat,
};

export function getFeExamChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

export function getAllFeExamChats(): HistoryChat[] {
  return Object.values(chatMap);
}

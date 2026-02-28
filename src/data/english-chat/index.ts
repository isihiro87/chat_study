import type { HistoryChat } from '../history-chat/types';
import { beVerbsChat } from '../subjects/english/grades/grade1/topics/1-be-verbs/chat';
import { generalVerbsChat } from '../subjects/english/grades/grade1/topics/2-general-verbs/chat';
import { nounsChat } from '../subjects/english/grades/grade1/topics/3-nouns/chat';
import { questionWordsChat } from '../subjects/english/grades/grade1/topics/4-question-words/chat';
import { thirdPersonSingularChat } from '../subjects/english/grades/grade1/topics/5-third-person-singular/chat';
import { pronounsChat } from '../subjects/english/grades/grade1/topics/6-pronouns/chat';
import { presentProgressiveChat } from '../subjects/english/grades/grade1/topics/7-present-progressive/chat';
import { pastTenseChat } from '../subjects/english/grades/grade1/topics/8-past-tense/chat';

const chatMap: Record<string, HistoryChat> = {
  [beVerbsChat.id]: beVerbsChat,
  [generalVerbsChat.id]: generalVerbsChat,
  [nounsChat.id]: nounsChat,
  [questionWordsChat.id]: questionWordsChat,
  [thirdPersonSingularChat.id]: thirdPersonSingularChat,
  [pronounsChat.id]: pronounsChat,
  [presentProgressiveChat.id]: presentProgressiveChat,
  [pastTenseChat.id]: pastTenseChat,
};

export function getEnglishChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

export function getAllEnglishChats(): HistoryChat[] {
  return Object.values(chatMap);
}

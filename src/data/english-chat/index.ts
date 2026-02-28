import type { HistoryChat } from '../history-chat/types';
// Grade 1
import { beVerbsChat } from '../subjects/english/grades/grade1/topics/1-be-verbs/chat';
import { generalVerbsChat } from '../subjects/english/grades/grade1/topics/2-general-verbs/chat';
import { nounsChat } from '../subjects/english/grades/grade1/topics/3-nouns/chat';
import { questionWordsChat } from '../subjects/english/grades/grade1/topics/4-question-words/chat';
import { thirdPersonSingularChat } from '../subjects/english/grades/grade1/topics/5-third-person-singular/chat';
import { pronounsChat } from '../subjects/english/grades/grade1/topics/6-pronouns/chat';
import { presentProgressiveChat } from '../subjects/english/grades/grade1/topics/7-present-progressive/chat';
import { pastTenseChat } from '../subjects/english/grades/grade1/topics/8-past-tense/chat';
// Grade 2
import { sentenceStructuresChat } from '../subjects/english/grades/grade2/topics/1-sentence-structures/chat';
import { conjunctionsChat } from '../subjects/english/grades/grade2/topics/2-conjunctions/chat';
import { infinitivesChat } from '../subjects/english/grades/grade2/topics/3-infinitives/chat';
import { modalVerbsChat } from '../subjects/english/grades/grade2/topics/4-modal-verbs/chat';
import { comparisonChat } from '../subjects/english/grades/grade2/topics/5-comparison/chat';
import { passiveVoiceChat } from '../subjects/english/grades/grade2/topics/6-passive-voice/chat';
// Grade 3
import { presentPerfectChat } from '../subjects/english/grades/grade3/topics/1-present-perfect/chat';
import { makeShowChat } from '../subjects/english/grades/grade3/topics/2-make-show/chat';
import { presentPerfectProgressiveChat } from '../subjects/english/grades/grade3/topics/3-present-perfect-progressive/chat';
import { infinitivesAdvancedChat } from '../subjects/english/grades/grade3/topics/4-infinitives-advanced/chat';
import { indirectQuestionsChat } from '../subjects/english/grades/grade3/topics/5-indirect-questions/chat';
import { pastParticipleModifierChat } from '../subjects/english/grades/grade3/topics/6-past-participle-modifier/chat';
import { presentParticipleModifierChat } from '../subjects/english/grades/grade3/topics/7-present-participle-modifier/chat';
import { contactClauseChat } from '../subjects/english/grades/grade3/topics/8-contact-clause/chat';
import { relativePronounsChat } from '../subjects/english/grades/grade3/topics/9-relative-pronouns/chat';
import { subjunctiveChat } from '../subjects/english/grades/grade3/topics/10-subjunctive/chat';

const chatMap: Record<string, HistoryChat> = {
  // Grade 1
  [beVerbsChat.id]: beVerbsChat,
  [generalVerbsChat.id]: generalVerbsChat,
  [nounsChat.id]: nounsChat,
  [questionWordsChat.id]: questionWordsChat,
  [thirdPersonSingularChat.id]: thirdPersonSingularChat,
  [pronounsChat.id]: pronounsChat,
  [presentProgressiveChat.id]: presentProgressiveChat,
  [pastTenseChat.id]: pastTenseChat,
  // Grade 2
  [sentenceStructuresChat.id]: sentenceStructuresChat,
  [conjunctionsChat.id]: conjunctionsChat,
  [infinitivesChat.id]: infinitivesChat,
  [modalVerbsChat.id]: modalVerbsChat,
  [comparisonChat.id]: comparisonChat,
  [passiveVoiceChat.id]: passiveVoiceChat,
  // Grade 3
  [presentPerfectChat.id]: presentPerfectChat,
  [makeShowChat.id]: makeShowChat,
  [presentPerfectProgressiveChat.id]: presentPerfectProgressiveChat,
  [infinitivesAdvancedChat.id]: infinitivesAdvancedChat,
  [indirectQuestionsChat.id]: indirectQuestionsChat,
  [pastParticipleModifierChat.id]: pastParticipleModifierChat,
  [presentParticipleModifierChat.id]: presentParticipleModifierChat,
  [contactClauseChat.id]: contactClauseChat,
  [relativePronounsChat.id]: relativePronounsChat,
  [subjunctiveChat.id]: subjunctiveChat,
};

export function getEnglishChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

export function getAllEnglishChats(): HistoryChat[] {
  return Object.values(chatMap);
}

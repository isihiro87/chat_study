import type { Era, Topic } from '../types';
import type { HistoryChat } from '../history-chat/types';
import {
  eras as historyEras,
  allTopics as historyAllTopics,
  getTopicsByEra as getHistoryTopicsByEra,
} from './history/eras';
import {
  eras as englishEras,
  allTopics as englishAllTopics,
  getTopicsByEra as getEnglishTopicsByEra,
} from './english/grades';
import {
  eras as mathEras,
  allTopics as mathAllTopics,
  getTopicsByEra as getMathTopicsByEra,
} from './math/units';
import { getHistoryChat, getAllHistoryChats } from '../history-chat';
import { getEnglishChat, getAllEnglishChats } from '../english-chat';
import { getMathChat, getAllMathChats } from '../math-chat';

// 全科目のEra集約
const erasBySubject: Record<string, Era[]> = {
  history: historyEras,
  english: englishEras,
  math: mathEras,
};

// 全科目のTopic集約
const allTopicsBySubject: Record<string, Topic[]> = {
  history: historyAllTopics,
  english: englishAllTopics,
  math: mathAllTopics,
};

// 全トピック（科目横断）
export const allTopics: Topic[] = [...historyAllTopics, ...englishAllTopics, ...mathAllTopics];

// 科目別Era取得
export function getErasBySubject(subjectId: string): Era[] {
  return erasBySubject[subjectId] ?? [];
}

// Era取得（科目横断検索）
export function getEra(eraId: string): Era | undefined {
  for (const eras of Object.values(erasBySubject)) {
    const found = eras.find((e) => e.id === eraId);
    if (found) return found;
  }
  return undefined;
}

// Era内トピック取得
export function getTopicsByEra(eraId: string): Topic[] {
  // 歴史から先に検索
  const historyTopics = getHistoryTopicsByEra(eraId);
  if (historyTopics.length > 0) return historyTopics;
  const engTopics = getEnglishTopicsByEra(eraId);
  if (engTopics.length > 0) return engTopics;
  const mathTopics = getMathTopicsByEra(eraId);
  if (mathTopics.length > 0) return mathTopics;
  return [];
}

// トピック取得（科目横断検索）
export function getTopic(topicId: string): Topic | undefined {
  for (const topics of Object.values(allTopicsBySubject)) {
    const found = topics.find((t) => t.id === topicId);
    if (found) return found;
  }
  return undefined;
}

// 全トピック取得
export function getAllTopics(): Topic[] {
  return allTopics;
}

// チャット取得（科目横断検索）
export function getChat(chatId: string): HistoryChat | undefined {
  return getHistoryChat(chatId) ?? getEnglishChat(chatId) ?? getMathChat(chatId);
}

// 全チャット取得
export function getAllChats(): HistoryChat[] {
  return [...getAllHistoryChats(), ...getAllEnglishChats(), ...getAllMathChats()];
}

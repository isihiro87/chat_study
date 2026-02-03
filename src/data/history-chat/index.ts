import { sampleChat } from './sample-chat';
// 江戸時代（後半）のチャット
import { kyohoReformChat } from '../subjects/history/eras/edo-late/topics/6-kyoho-reform/chat';
import { genrokuCultureChat } from '../subjects/history/eras/edo-late/topics/5-genroku-culture/chat';
import { tanumaPoliticsChat } from '../subjects/history/eras/edo-late/topics/7-tanuma-politics/chat';
import { kanseiReformChat } from '../subjects/history/eras/edo-late/topics/8-kansei-reform/chat';
import { kaseiCultureChat } from '../subjects/history/eras/edo-late/topics/10-kasei-culture/chat';
import { newLearningChat } from '../subjects/history/eras/edo-late/topics/9-new-learning/chat';
import { tempoReformChat } from '../subjects/history/eras/edo-late/topics/12-tempo-reform/chat';
import { foreignShipsChat } from '../subjects/history/eras/edo-late/topics/11-foreign-ships/chat';
import { agricultureIndustryChat } from '../subjects/history/eras/edo-late/topics/1-agriculture-industry/chat';
import { threeCapitalsChat } from '../subjects/history/eras/edo-late/topics/2-three-capitals/chat';
import { transportationChat } from '../subjects/history/eras/edo-late/topics/3-transportation/chat';
import { bakuhanSystemChat } from '../subjects/history/eras/edo-late/topics/4-bakuhan-system/chat';
import type { HistoryChat } from './types';

// チャットデータのマップ
const chatMap: Record<string, HistoryChat> = {
  sample: sampleChat,
  'kyoho-reform': kyohoReformChat,
  'genroku-culture': genrokuCultureChat,
  'tanuma-politics': tanumaPoliticsChat,
  'kansei-reform': kanseiReformChat,
  'kasei-culture': kaseiCultureChat,
  'new-learning': newLearningChat,
  'tempo-reform': tempoReformChat,
  'foreign-ships': foreignShipsChat,
  'agriculture-industry': agricultureIndustryChat,
  'three-capitals': threeCapitalsChat,
  transportation: transportationChat,
  'bakuhan-system': bakuhanSystemChat,
};

// IDからチャットデータを取得
export function getHistoryChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

// 全チャット一覧を取得
export function getAllHistoryChats(): HistoryChat[] {
  return Object.values(chatMap);
}

// 型のエクスポート
export type {
  HistoryChat,
  ChatCharacter,
  ChatContent,
  DateContent,
  NarratorContent,
  MessageContent,
  QuizContent,
  QuizOption,
  EndContent,
} from './types';

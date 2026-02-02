import { sampleChat } from './sample-chat';
// 江戸時代（後半）のチャット
import { kyohoReformChat } from '../subjects/history/eras/edo-late/topics/kyoho-reform/chat';
import { genrokuCultureChat } from '../subjects/history/eras/edo-late/topics/genroku-culture/chat';
import { tanumaPoliticsChat } from '../subjects/history/eras/edo-late/topics/tanuma-politics/chat';
import { kanseiReformChat } from '../subjects/history/eras/edo-late/topics/kansei-reform/chat';
import { kaseiCultureChat } from '../subjects/history/eras/edo-late/topics/kasei-culture/chat';
import { newLearningChat } from '../subjects/history/eras/edo-late/topics/new-learning/chat';
import { tempoReformChat } from '../subjects/history/eras/edo-late/topics/tempo-reform/chat';
import { foreignShipsChat } from '../subjects/history/eras/edo-late/topics/foreign-ships/chat';
import { agricultureIndustryChat } from '../subjects/history/eras/edo-late/topics/agriculture-industry/chat';
import { threeCapitalsChat } from '../subjects/history/eras/edo-late/topics/three-capitals/chat';
import { transportationChat } from '../subjects/history/eras/edo-late/topics/transportation/chat';
import { bakuhanSystemChat } from '../subjects/history/eras/edo-late/topics/bakuhan-system/chat';
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

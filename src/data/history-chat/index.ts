import { sampleChat } from './sample-chat';
// 江戸時代②（経済）のチャット
import { agricultureIndustryChat } from '../subjects/history/eras/edo-economy/topics/1-agriculture-industry/chat';
import { threeCapitalsChat } from '../subjects/history/eras/edo-economy/topics/2-three-capitals/chat';
import { transportationChat } from '../subjects/history/eras/edo-economy/topics/3-transportation/chat';
import { bakuhanSystemChat } from '../subjects/history/eras/edo-economy/topics/4-bakuhan-system/chat';
// 江戸時代③（元禄）のチャット
import { genrokuCultureChat } from '../subjects/history/eras/edo-genroku/topics/5-genroku-culture/chat';
import { kyohoReformChat } from '../subjects/history/eras/edo-genroku/topics/6-kyoho-reform/chat';
import { tanumaPoliticsChat } from '../subjects/history/eras/edo-genroku/topics/7-tanuma-politics/chat';
// 江戸時代④（改革）のチャット
import { kanseiReformChat } from '../subjects/history/eras/edo-reforms/topics/8-kansei-reform/chat';
import { newLearningChat } from '../subjects/history/eras/edo-reforms/topics/9-new-learning/chat';
import { kaseiCultureChat } from '../subjects/history/eras/edo-reforms/topics/10-kasei-culture/chat';
import { foreignShipsChat } from '../subjects/history/eras/edo-reforms/topics/11-foreign-ships/chat';
import { tempoReformChat } from '../subjects/history/eras/edo-reforms/topics/12-tempo-reform/chat';
import { threeReformsSummaryChat } from '../subjects/history/eras/edo-reforms/topics/13-three-reforms-summary/chat';
// 近代革命と国家形成のチャット
import { britishRevolutionChat } from '../subjects/history/eras/modern-era/topics/1-british-revolution/chat';
import { americanIndependenceChat } from '../subjects/history/eras/modern-era/topics/2-american-independence/chat';
import { frenchRevolutionChat } from '../subjects/history/eras/modern-era/topics/3-french-revolution/chat';
import { nationalismEuropeChat } from '../subjects/history/eras/modern-era/topics/4-nationalism-europe/chat';
import { russiaExpansionChat } from '../subjects/history/eras/modern-era/topics/5-russia-expansion/chat';
import { americaExpansionChat } from '../subjects/history/eras/modern-era/topics/6-america-expansion/chat';
import { industrialRevolutionChat } from '../subjects/history/eras/modern-era/topics/7-industrial-revolution/chat';
import { westernAsiaInvasionChat } from '../subjects/history/eras/modern-era/topics/8-western-asia-invasion/chat';
// 幕末のチャット
import { openingJapanChat } from '../subjects/history/eras/bakumatsu/topics/1-opening-japan/chat';
import { postOpeningChat } from '../subjects/history/eras/bakumatsu/topics/2-post-opening/chat';
import { fallOfBakufuChat } from '../subjects/history/eras/bakumatsu/topics/3-fall-of-bakufu/chat';
// 明治時代（前期）のチャット
import { meijiRestorationChat } from '../subjects/history/eras/meiji-early/topics/1-meiji-restoration/chat';
import { threeReformsChat } from '../subjects/history/eras/meiji-early/topics/2-three-reforms/chat';
import { fukokuKyoheiChat } from '../subjects/history/eras/meiji-early/topics/3-fukoku-kyohei/chat';
import { internationalRelationsChat } from '../subjects/history/eras/meiji-early/topics/4-international-relations/chat';
import { freedomMovementChat } from '../subjects/history/eras/meiji-early/topics/5-freedom-movement/chat';
import { constitutionChat } from '../subjects/history/eras/meiji-early/topics/6-constitution/chat';
// 明治時代（後期）のチャット
import { treatyRevisionChat } from '../subjects/history/eras/meiji-late/topics/1-treaty-revision/chat';
import { sinoJapaneseWarChat } from '../subjects/history/eras/meiji-late/topics/2-sino-japanese-war/chat';
import { russoJapaneseWarChat } from '../subjects/history/eras/meiji-late/topics/3-russo-japanese-war/chat';
import { koreaAnnexationChat } from '../subjects/history/eras/meiji-late/topics/4-korea-annexation/chat';
import { japanIndustrialRevolutionChat } from '../subjects/history/eras/meiji-late/topics/5-industrial-revolution/chat';
import { meijiCultureChat } from '../subjects/history/eras/meiji-late/topics/6-meiji-culture/chat';
// 第一次世界大戦と日本のチャット
import { ww1OutbreakChat } from '../subjects/history/eras/ww1-japan/topics/1-ww1-outbreak/chat';
import { japanInWw1Chat } from '../subjects/history/eras/ww1-japan/topics/2-japan-in-ww1/chat';
import { russianRevolutionChat } from '../subjects/history/eras/ww1-japan/topics/3-russian-revolution/chat';
import { postwarOrderChat } from '../subjects/history/eras/ww1-japan/topics/4-postwar-order/chat';
// 大正デモクラシーのチャット
import { politicalReformChat } from '../subjects/history/eras/taisho-democracy/topics/1-political-reform/chat';
import { socialMovementsChat } from '../subjects/history/eras/taisho-democracy/topics/2-social-movements/chat';
import { massCultureChat } from '../subjects/history/eras/taisho-democracy/topics/3-mass-culture/chat';
// 世界恐慌と日本の中国侵略のチャット
import { greatDepressionChat } from '../subjects/history/eras/showa-crisis/topics/1-great-depression/chat';
import { manchurianIncidentChat } from '../subjects/history/eras/showa-crisis/topics/2-manchurian-incident/chat';
import { sinoJapaneseWarShowaChat } from '../subjects/history/eras/showa-crisis/topics/3-sino-japanese-war/chat';
// 第二次世界大戦と日本のチャット
import { ww2OutbreakChat } from '../subjects/history/eras/ww2-japan/topics/1-ww2-outbreak/chat';
import { pacificWarChat } from '../subjects/history/eras/ww2-japan/topics/2-pacific-war/chat';
import { wartimeLifeChat } from '../subjects/history/eras/ww2-japan/topics/3-wartime-life/chat';
import { endOfWarChat } from '../subjects/history/eras/ww2-japan/topics/4-end-of-war/chat';
import type { HistoryChat } from './types';

// チャットデータのマップ
const chatMap: Record<string, HistoryChat> = {
  sample: sampleChat,
  // 江戸時代②（経済）
  'agriculture-industry': agricultureIndustryChat,
  'three-capitals': threeCapitalsChat,
  transportation: transportationChat,
  'bakuhan-system': bakuhanSystemChat,
  // 江戸時代③（元禄）
  'genroku-culture': genrokuCultureChat,
  'kyoho-reform': kyohoReformChat,
  'tanuma-politics': tanumaPoliticsChat,
  // 江戸時代④（改革）
  'kansei-reform': kanseiReformChat,
  'new-learning': newLearningChat,
  'kasei-culture': kaseiCultureChat,
  'foreign-ships': foreignShipsChat,
  'tempo-reform': tempoReformChat,
  'three-reforms-summary': threeReformsSummaryChat,
  // 近代革命と国家形成
  'british-revolution': britishRevolutionChat,
  'american-independence': americanIndependenceChat,
  'french-revolution': frenchRevolutionChat,
  'nationalism-europe': nationalismEuropeChat,
  'russia-expansion': russiaExpansionChat,
  'america-expansion': americaExpansionChat,
  'industrial-revolution': industrialRevolutionChat,
  'western-asia-invasion': westernAsiaInvasionChat,
  // 幕末
  'opening-japan': openingJapanChat,
  'post-opening': postOpeningChat,
  'fall-of-bakufu': fallOfBakufuChat,
  // 明治時代（前期）
  'meiji-restoration': meijiRestorationChat,
  'three-reforms': threeReformsChat,
  'fukoku-kyohei': fukokuKyoheiChat,
  'international-relations': internationalRelationsChat,
  'freedom-movement': freedomMovementChat,
  constitution: constitutionChat,
  // 明治時代（後期）
  'treaty-revision': treatyRevisionChat,
  'sino-japanese-war': sinoJapaneseWarChat,
  'russo-japanese-war': russoJapaneseWarChat,
  'korea-annexation': koreaAnnexationChat,
  'japan-industrial-revolution': japanIndustrialRevolutionChat,
  'meiji-culture': meijiCultureChat,
  // 第一次世界大戦と日本
  'ww1-outbreak': ww1OutbreakChat,
  'japan-in-ww1': japanInWw1Chat,
  'russian-revolution': russianRevolutionChat,
  'postwar-order': postwarOrderChat,
  // 大正デモクラシー
  'political-reform': politicalReformChat,
  'social-movements': socialMovementsChat,
  'mass-culture': massCultureChat,
  // 世界恐慌と日本の中国侵略
  'great-depression': greatDepressionChat,
  'manchurian-incident': manchurianIncidentChat,
  'sino-japanese-war-showa': sinoJapaneseWarShowaChat,
  // 第二次世界大戦と日本
  'ww2-outbreak': ww2OutbreakChat,
  'pacific-war': pacificWarChat,
  'wartime-life': wartimeLifeChat,
  'end-of-war': endOfWarChat,
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

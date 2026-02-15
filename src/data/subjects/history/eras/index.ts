import type { Era, Topic } from '../../../types';
// Grade 1
import { ancientWorldEra, ancientWorldTopics } from './grade1/1-ancient-world';
import { japaneseOriginsEra, japaneseOriginsTopics } from './grade1/2-japanese-origins';
import { ancientStateEra, ancientStateTopics } from './grade1/3-ancient-state';
import { warriorKamakuraEra, warriorKamakuraTopics } from './grade1/4-warrior-kamakura';
import { medievalWorldEra, medievalWorldTopics } from './grade1/5-medieval-world';
// Grade 2
import { earlyModernEra, earlyModernTopics } from './grade2/1-early-modern';
import { edoEstablishmentEra, edoEstablishmentTopics } from './grade2/2-edo-establishment';
import { edoEconomyEra, edoEconomyTopics } from './grade2/3-edo-economy';
import { edoGenrokuEra, edoGenrokuTopics } from './grade2/4-edo-genroku';
import { edoReformsEra, edoReformsTopics } from './grade2/5-edo-reforms';
import { modernEra, modernEraTopics } from './grade2/6-modern-era';
import { bakumatsuEra, bakumatsuTopics } from './grade2/7-bakumatsu';
import { meijiEarlyEra, meijiEarlyTopics } from './grade2/8-meiji-early';
import { meijiLateEra, meijiLateTopics } from './grade2/9-meiji-late';
// Grade 3
import { ww1JapanEra, ww1JapanTopics } from './grade3/1-ww1-japan';
import { taishoDemocracyEra, taishoDemocracyTopics } from './grade3/2-taisho-democracy';
import { showaCrisisEra, showaCrisisTopics } from './grade3/3-showa-crisis';
import { ww2JapanEra, ww2JapanTopics } from './grade3/4-ww2-japan';
import { postwarJapanEra, postwarJapanTopics } from './grade3/5-postwar-japan';
import { coldWarEra, coldWarTopics } from './grade3/6-cold-war-era';
import { modernWorldEra, modernWorldTopics } from './grade3/7-modern-world';

// 全時代一覧
export const eras: Era[] = [
  // Grade 1
  ancientWorldEra,
  japaneseOriginsEra,
  ancientStateEra,
  warriorKamakuraEra,
  medievalWorldEra,
  // Grade 2
  earlyModernEra,
  edoEstablishmentEra,
  edoEconomyEra,
  edoGenrokuEra,
  edoReformsEra,
  modernEra,
  bakumatsuEra,
  meijiEarlyEra,
  meijiLateEra,
  // Grade 3
  ww1JapanEra,
  taishoDemocracyEra,
  showaCrisisEra,
  ww2JapanEra,
  postwarJapanEra,
  coldWarEra,
  modernWorldEra,
].sort((a, b) => a.order - b.order);

// 全トピック一覧
export const allTopics: Topic[] = [
  // Grade 1
  ...ancientWorldTopics,
  ...japaneseOriginsTopics,
  ...ancientStateTopics,
  ...warriorKamakuraTopics,
  ...medievalWorldTopics,
  // Grade 2
  ...earlyModernTopics,
  ...edoEstablishmentTopics,
  ...edoEconomyTopics,
  ...edoGenrokuTopics,
  ...edoReformsTopics,
  ...modernEraTopics,
  ...bakumatsuTopics,
  ...meijiEarlyTopics,
  ...meijiLateTopics,
  // Grade 3
  ...ww1JapanTopics,
  ...taishoDemocracyTopics,
  ...showaCrisisTopics,
  ...ww2JapanTopics,
  ...postwarJapanTopics,
  ...coldWarTopics,
  ...modernWorldTopics,
];

// 時代を取得
export function getEra(eraId: string): Era | undefined {
  return eras.find((e) => e.id === eraId);
}

// 時代に属するトピック一覧を取得
export function getTopicsByEra(eraId: string): Topic[] {
  return allTopics.filter((t) => t.eraId === eraId).sort((a, b) => a.order - b.order);
}

// トピックを取得
export function getTopic(topicId: string): Topic | undefined {
  return allTopics.find((t) => t.id === topicId);
}

// Grade 1
export { ancientWorldEra, ancientWorldTopics } from './grade1/1-ancient-world';
export { japaneseOriginsEra, japaneseOriginsTopics } from './grade1/2-japanese-origins';
export { ancientStateEra, ancientStateTopics } from './grade1/3-ancient-state';
export { warriorKamakuraEra, warriorKamakuraTopics } from './grade1/4-warrior-kamakura';
export { medievalWorldEra, medievalWorldTopics } from './grade1/5-medieval-world';
// Grade 2
export { earlyModernEra, earlyModernTopics } from './grade2/1-early-modern';
export { edoEstablishmentEra, edoEstablishmentTopics } from './grade2/2-edo-establishment';
export { edoEconomyEra, edoEconomyTopics } from './grade2/3-edo-economy';
export { edoGenrokuEra, edoGenrokuTopics } from './grade2/4-edo-genroku';
export { edoReformsEra, edoReformsTopics } from './grade2/5-edo-reforms';
export { modernEra, modernEraTopics } from './grade2/6-modern-era';
export { bakumatsuEra, bakumatsuTopics } from './grade2/7-bakumatsu';
export { meijiEarlyEra, meijiEarlyTopics } from './grade2/8-meiji-early';
export { meijiLateEra, meijiLateTopics } from './grade2/9-meiji-late';
// Grade 3
export { ww1JapanEra, ww1JapanTopics } from './grade3/1-ww1-japan';
export { taishoDemocracyEra, taishoDemocracyTopics } from './grade3/2-taisho-democracy';
export { showaCrisisEra, showaCrisisTopics } from './grade3/3-showa-crisis';
export { ww2JapanEra, ww2JapanTopics } from './grade3/4-ww2-japan';
export { postwarJapanEra, postwarJapanTopics } from './grade3/5-postwar-japan';
export { coldWarEra, coldWarTopics } from './grade3/6-cold-war-era';
export { modernWorldEra, modernWorldTopics } from './grade3/7-modern-world';

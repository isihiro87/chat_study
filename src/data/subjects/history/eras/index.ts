import type { Era, Topic } from '../../../types';
import { edoEconomyEra, edoEconomyTopics } from './edo-economy';
import { edoGenrokuEra, edoGenrokuTopics } from './edo-genroku';
import { edoReformsEra, edoReformsTopics } from './edo-reforms';
import { modernEra, modernEraTopics } from './modern-era';
import { bakumatsuEra, bakumatsuTopics } from './bakumatsu';
import { meijiEarlyEra, meijiEarlyTopics } from './meiji-early';
import { meijiLateEra, meijiLateTopics } from './meiji-late';
import { ww1JapanEra, ww1JapanTopics } from './ww1-japan';
import { taishoDemocracyEra, taishoDemocracyTopics } from './taisho-democracy';
import { showaCrisisEra, showaCrisisTopics } from './showa-crisis';
import { ww2JapanEra, ww2JapanTopics } from './ww2-japan';

// 全時代一覧
export const eras: Era[] = [
  edoEconomyEra,
  edoGenrokuEra,
  edoReformsEra,
  modernEra,
  bakumatsuEra,
  meijiEarlyEra,
  meijiLateEra,
  ww1JapanEra,
  taishoDemocracyEra,
  showaCrisisEra,
  ww2JapanEra,
].sort((a, b) => a.order - b.order);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...edoEconomyTopics,
  ...edoGenrokuTopics,
  ...edoReformsTopics,
  ...modernEraTopics,
  ...bakumatsuTopics,
  ...meijiEarlyTopics,
  ...meijiLateTopics,
  ...ww1JapanTopics,
  ...taishoDemocracyTopics,
  ...showaCrisisTopics,
  ...ww2JapanTopics,
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

export { edoEconomyEra, edoEconomyTopics } from './edo-economy';
export { edoGenrokuEra, edoGenrokuTopics } from './edo-genroku';
export { edoReformsEra, edoReformsTopics } from './edo-reforms';
export { modernEra, modernEraTopics } from './modern-era';
export { bakumatsuEra, bakumatsuTopics } from './bakumatsu';
export { meijiEarlyEra, meijiEarlyTopics } from './meiji-early';
export { meijiLateEra, meijiLateTopics } from './meiji-late';
export { ww1JapanEra, ww1JapanTopics } from './ww1-japan';
export { taishoDemocracyEra, taishoDemocracyTopics } from './taisho-democracy';
export { showaCrisisEra, showaCrisisTopics } from './showa-crisis';
export { ww2JapanEra, ww2JapanTopics } from './ww2-japan';

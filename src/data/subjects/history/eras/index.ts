import type { Era, Topic } from '../../../types';
import { asukaEra, asukaTopics } from './asuka';
import { edoFoundationEra, edoFoundationTopics } from './edo-foundation';
import { edoEconomyEra, edoEconomyTopics } from './edo-economy';
import { edoGenrokuEra, edoGenrokuTopics } from './edo-genroku';
import { edoReformsEra, edoReformsTopics } from './edo-reforms';
import { modernEra, modernEraTopics } from './modern-era';
import { bakumatsuEra, bakumatsuTopics } from './bakumatsu';
import { meijiEarlyEra, meijiEarlyTopics } from './meiji-early';
import { meijiLateEra, meijiLateTopics } from './meiji-late';

// 全時代一覧
export const eras: Era[] = [
  asukaEra,
  edoFoundationEra,
  edoEconomyEra,
  edoGenrokuEra,
  edoReformsEra,
  modernEra,
  bakumatsuEra,
  meijiEarlyEra,
  meijiLateEra,
].sort((a, b) => a.order - b.order);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...asukaTopics,
  ...edoFoundationTopics,
  ...edoEconomyTopics,
  ...edoGenrokuTopics,
  ...edoReformsTopics,
  ...modernEraTopics,
  ...bakumatsuTopics,
  ...meijiEarlyTopics,
  ...meijiLateTopics,
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

export { asukaEra, asukaTopics } from './asuka';
export { edoFoundationEra, edoFoundationTopics } from './edo-foundation';
export { edoEconomyEra, edoEconomyTopics } from './edo-economy';
export { edoGenrokuEra, edoGenrokuTopics } from './edo-genroku';
export { edoReformsEra, edoReformsTopics } from './edo-reforms';
export { modernEra, modernEraTopics } from './modern-era';
export { bakumatsuEra, bakumatsuTopics } from './bakumatsu';
export { meijiEarlyEra, meijiEarlyTopics } from './meiji-early';
export { meijiLateEra, meijiLateTopics } from './meiji-late';

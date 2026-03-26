import type { Era, Topic } from '../../types';
import { technologyEras, technologyTopics } from './technology';
import { managementEras, managementTopics } from './management';
import { strategyEras, strategyTopics } from './strategy';

// 全Era一覧
export const eras: Era[] = [
  ...technologyEras,
  ...managementEras,
  ...strategyEras,
].sort((a, b) => a.order - b.order);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...technologyTopics,
  ...managementTopics,
  ...strategyTopics,
];

// Era取得
export function getEra(eraId: string): Era | undefined {
  return eras.find((e) => e.id === eraId);
}

// Era内トピック取得
export function getTopicsByEra(eraId: string): Topic[] {
  return allTopics.filter((t) => t.eraId === eraId).sort((a, b) => a.order - b.order);
}

// トピック取得
export function getTopic(topicId: string): Topic | undefined {
  return allTopics.find((t) => t.id === topicId);
}

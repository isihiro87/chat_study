import type { Era, Topic } from '../../../types';
import { worldShapeEra, worldShapeTopics } from './grade1/1-world-shape';
import { japanShapeEra, japanShapeTopics } from './grade1/2-japan-shape';
import { lifeEnvironmentEra, lifeEnvironmentTopics } from './grade1/3-life-environment';
import { worldRegionsEra, worldRegionsTopics } from './grade1/4-world-regions';

// 全Era一覧
export const eras: Era[] = [
  worldShapeEra,
  japanShapeEra,
  lifeEnvironmentEra,
  worldRegionsEra,
].sort((a, b) => a.order - b.order);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...worldShapeTopics,
  ...japanShapeTopics,
  ...lifeEnvironmentTopics,
  ...worldRegionsTopics,
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

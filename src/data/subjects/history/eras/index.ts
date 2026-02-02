import type { Era, Topic } from '../../../types';
import { asukaEra, asukaTopics } from './asuka';
import { edoEarlyEra, edoEarlyTopics } from './edo-early';
import { edoLateEra, edoLateTopics } from './edo-late';

// 全時代一覧
export const eras: Era[] = [asukaEra, edoEarlyEra, edoLateEra].sort(
  (a, b) => a.order - b.order
);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...asukaTopics,
  ...edoEarlyTopics,
  ...edoLateTopics,
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
export { edoEarlyEra, edoEarlyTopics } from './edo-early';
export { edoLateEra, edoLateTopics } from './edo-late';

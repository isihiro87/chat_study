import type { Era, Topic } from '../../../types';
import { englishGrade1Era, englishGrade1Topics } from './grade1';
import { englishGrade2Era, englishGrade2Topics } from './grade2';
import { englishGrade3Era, englishGrade3Topics } from './grade3';

// 全Era一覧
export const eras: Era[] = [englishGrade1Era, englishGrade2Era, englishGrade3Era].sort(
  (a, b) => a.order - b.order,
);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...englishGrade1Topics,
  ...englishGrade2Topics,
  ...englishGrade3Topics,
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

import type { Era, Topic } from '../../../types';
import { mathGrade1Era, mathGrade1Topics } from './grade1';
import { mathGrade2Era, mathGrade2Topics } from './grade2';
import { mathGrade3Era, mathGrade3Topics } from './grade3';

// 全Era一覧
export const eras: Era[] = [mathGrade1Era, mathGrade2Era, mathGrade3Era].sort(
  (a, b) => a.order - b.order,
);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...mathGrade1Topics,
  ...mathGrade2Topics,
  ...mathGrade3Topics,
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

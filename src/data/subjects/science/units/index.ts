import type { Era, Topic } from '../../../types';
import { chemicalChangeEra, chemicalChangeTopics } from './grade2/1-chemical-change';
import { biologyGrade2Era, biologyGrade2Topics } from './grade2/2-biology';
import { weatherEra, weatherTopics } from './grade2/3-weather';
import { electricityEra, electricityTopics } from './grade2/4-electricity';
import { chemistryEra, chemistryTopics } from './grade3/1-chemistry';
import { biologyEra, biologyTopics } from './grade3/2-biology';
import { physicsEra, physicsTopics } from './grade3/3-physics';
import { earthEra, earthTopics } from './grade3/4-earth';

// 全Era一覧
export const eras: Era[] = [
  chemicalChangeEra,
  biologyGrade2Era,
  weatherEra,
  electricityEra,
  chemistryEra,
  biologyEra,
  physicsEra,
  earthEra,
].sort((a, b) => a.order - b.order);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...chemicalChangeTopics,
  ...biologyGrade2Topics,
  ...weatherTopics,
  ...electricityTopics,
  ...chemistryTopics,
  ...biologyTopics,
  ...physicsTopics,
  ...earthTopics,
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

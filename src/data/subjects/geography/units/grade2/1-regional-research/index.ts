import type { Era, Topic } from '../../../../../types';
import { researchMethods } from './topics/1-research-methods';
import { topographicMaps } from './topics/2-topographic-maps';
import { fieldwork } from './topics/3-fieldwork';

export const regionalResearchEra: Era = {
  id: 'geo2-regional-research',
  subjectId: 'geography',
  name: '地域調査の手法',
  subtitle: '調査の進め方・地形図の活用・フィールドワーク',
  period: '日本地理',
  icon: '🔍',
  order: 25,
  grade: 2,
};

export const regionalResearchTopics: Topic[] = [
  researchMethods,
  topographicMaps,
  fieldwork,
];

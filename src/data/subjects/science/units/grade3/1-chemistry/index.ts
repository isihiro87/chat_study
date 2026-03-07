import type { Era, Topic } from '../../../../../types';
import { solutionIons } from './topics/1-solution-ions';
import { acidAlkali } from './topics/2-acid-alkali';
import { chemicalBattery } from './topics/3-chemical-battery';

export const chemistryEra: Era = {
  id: 'sci3-chemistry',
  subjectId: 'science',
  name: '化学変化とイオン',
  subtitle: '電離・酸とアルカリ・電池のしくみ',
  period: '化学分野',
  icon: '⚗️',
  order: 1,
  grade: 3,
};

export const chemistryTopics: Topic[] = [
  solutionIons,
  acidAlkali,
  chemicalBattery,
];

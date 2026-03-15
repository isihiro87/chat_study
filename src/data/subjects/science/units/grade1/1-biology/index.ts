import type { Era, Topic } from '../../../../../types';
import { observation } from './topics/1-observation';
import { microscopeDetail } from './topics/2-microscope-detail';
import { flowerSeed } from './topics/3-flower-seed';
import { plantGroups } from './topics/4-plant-groups';
import { vertebrates } from './topics/5-vertebrates';
import { invertebrates } from './topics/6-invertebrates';

export const biologyGrade1Era: Era = {
  id: 'sci1-biology',
  subjectId: 'science',
  name: '生物の観察と分類',
  subtitle: '観察・植物の分類・動物の分類',
  period: '生物分野',
  icon: '🔍',
  order: 9,
  grade: 1,
};

export const biologyGrade1Topics: Topic[] = [
  observation,
  microscopeDetail,
  flowerSeed,
  plantGroups,
  vertebrates,
  invertebrates,
];

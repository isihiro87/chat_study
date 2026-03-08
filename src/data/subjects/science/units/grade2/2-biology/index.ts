import type { Era, Topic } from '../../../../../types';
import { cells } from './topics/1-cells';
import { plantBody } from './topics/2-plant-body';
import { animalBody } from './topics/3-animal-body';
import { stimuliResponse } from './topics/4-stimuli-response';

export const biologyGrade2Era: Era = {
  id: 'sci2-biology',
  subjectId: 'science',
  name: '生物の体のつくりとはたらき',
  subtitle: '細胞・植物・動物・刺激と反応',
  period: '生物分野',
  icon: '🌿',
  order: 6,
  grade: 2,
};

export const biologyGrade2Topics: Topic[] = [
  cells,
  plantBody,
  animalBody,
  stimuliResponse,
];

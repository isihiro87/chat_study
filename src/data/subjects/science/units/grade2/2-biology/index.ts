import type { Era, Topic } from '../../../../../types';
import { cells } from './topics/1-cells';
import { plantPhotosynthesis } from './topics/2-plant-photosynthesis';
import { plantTransport } from './topics/3-plant-transport';
import { animalBody } from './topics/3-animal-body';
import { sensoryOrgans } from './topics/5-sensory-organs';
import { nervesMuscles } from './topics/6-nerves-muscles';

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
  plantPhotosynthesis,
  plantTransport,
  animalBody,
  sensoryOrgans,
  nervesMuscles,
];

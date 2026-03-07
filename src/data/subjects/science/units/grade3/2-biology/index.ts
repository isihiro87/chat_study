import type { Era, Topic } from '../../../../../types';
import { growthReproduction } from './topics/1-growth-reproduction';
import { genetics } from './topics/2-genetics';
import { evolution } from './topics/3-evolution';

export const biologyEra: Era = {
  id: 'sci3-biology',
  subjectId: 'science',
  name: '生命の連続性',
  subtitle: '細胞分裂・遺伝・進化のつながり',
  period: '生物分野',
  icon: '🧬',
  order: 2,
  grade: 3,
};

export const biologyTopics: Topic[] = [
  growthReproduction,
  genetics,
  evolution,
];

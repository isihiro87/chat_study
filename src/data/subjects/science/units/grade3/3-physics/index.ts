import type { Era, Topic } from '../../../../../types';
import { objectMotion } from './topics/1-object-motion';
import { forceAction } from './topics/2-force-action';
import { energyWork } from './topics/3-energy-work';

export const physicsEra: Era = {
  id: 'sci3-physics',
  subjectId: 'science',
  name: '運動とエネルギー',
  subtitle: '速さ・力・仕事とエネルギー',
  period: '物理分野',
  icon: '🏃',
  order: 3,
  grade: 3,
};

export const physicsTopics: Topic[] = [
  objectMotion,
  forceAction,
  energyWork,
];

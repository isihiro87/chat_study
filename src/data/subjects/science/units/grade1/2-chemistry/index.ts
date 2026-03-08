import type { Era, Topic } from '../../../../../types';
import { substanceProperties } from './topics/1-substance-properties';
import { gasProperties } from './topics/2-gas-properties';
import { solutionProperties } from './topics/3-solution-properties';
import { stateChange } from './topics/4-state-change';

export const chemistryGrade1Era: Era = {
  id: 'sci1-chemistry',
  subjectId: 'science',
  name: '物質の性質と状態変化',
  subtitle: '物質の性質・気体・水溶液・状態変化',
  period: '化学分野',
  icon: '🧪',
  order: 10,
  grade: 1,
};

export const chemistryGrade1Topics: Topic[] = [substanceProperties, gasProperties, solutionProperties, stateChange];

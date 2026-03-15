import type { Era, Topic } from '../../../../../types';
import { eqBasics } from './topics/1-basics';
import { eqFractions } from './topics/2-fractions';
import { eqApplications } from './topics/3-applications';

export const equationsEra: Era = {
  id: 'math-g1-equations',
  subjectId: 'math',
  name: '方程式',
  subtitle: '一次方程式の解き方と利用',
  period: '中1代数',
  icon: '📐',
  order: 3,
  grade: 1,
};

export const equationsTopics: Topic[] = [
  eqBasics,
  eqFractions,
  eqApplications,
];

import type { Era, Topic } from '../../../../../types';
import { quadEqBasics } from './topics/1-basics';
import { quadEqFactoring } from './topics/2-factoring';
import { quadFormula } from './topics/3-formula';
import { quadEqApps } from './topics/4-applications';

export const quadraticEqEra: Era = {
  id: 'math-g3-quadratic-eq',
  subjectId: 'math',
  name: '二次方程式',
  subtitle: '因数分解・解の公式で解く',
  period: '中3代数',
  icon: '✖️',
  order: 9,
  grade: 3,
};

export const quadraticEqTopics: Topic[] = [quadEqBasics, quadEqFactoring, quadFormula, quadEqApps];

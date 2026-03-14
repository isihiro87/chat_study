import type { Era, Topic } from '../../../../../types';
import { expansionBasics } from './topics/1-expansion-basics';
import { expansionFormulas } from './topics/2-expansion-formulas';
import { factoringBasics } from './topics/3-factoring-basics';
import { factoringFormulas } from './topics/4-factoring-formulas';

export const expansionFactoringEra: Era = {
  id: 'math-g3-expansion-factoring',
  subjectId: 'math',
  name: '式の展開と因数分解',
  subtitle: '展開の公式と因数分解のテクニック',
  period: '中3代数',
  icon: '🔢',
  order: 7,
  grade: 3,
};

export const expansionFactoringTopics: Topic[] = [
  expansionBasics,
  expansionFormulas,
  factoringBasics,
  factoringFormulas,
];

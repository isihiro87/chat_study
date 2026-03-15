import type { Era, Topic } from '../../../../../types';
import { literalNotation } from './topics/1-notation';
import { literalCalc } from './topics/2-calculations';
import { literalRelations } from './topics/3-relations';

export const literalExpEra: Era = {
  id: 'math-g1-literal-exp',
  subjectId: 'math',
  name: '文字の式',
  subtitle: '文字を使った式の表し方と計算',
  period: '中1代数',
  icon: '🔤',
  order: 2,
  grade: 1,
};

export const literalExpTopics: Topic[] = [
  literalNotation,
  literalCalc,
  literalRelations,
];

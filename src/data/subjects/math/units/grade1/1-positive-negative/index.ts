import type { Era, Topic } from '../../../../../types';
import { posNegMeaning } from './topics/1-meaning';
import { addSub } from './topics/2-add-sub';
import { mulDiv } from './topics/3-mul-div';
import { variousCalc } from './topics/4-various';

export const posNegEra: Era = {
  id: 'math-g1-pos-neg',
  subjectId: 'math',
  name: '正の数・負の数',
  subtitle: '正負の数の計算をマスター',
  period: '中1代数',
  icon: '➕',
  order: 1,
  grade: 1,
};

export const posNegTopics: Topic[] = [
  posNegMeaning,
  addSub,
  mulDiv,
  variousCalc,
];

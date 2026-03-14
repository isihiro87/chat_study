import type { Era, Topic } from '../../../../../types';
import { sqrtMeaning } from './topics/1-meaning';
import { sqrtMulDiv } from './topics/2-mul-div';
import { rationalization } from './topics/3-rationalization';
import { sqrtAddExpand } from './topics/4-add-expand';

export const squareRootsEra: Era = {
  id: 'math-g3-square-roots',
  subjectId: 'math',
  name: '平方根',
  subtitle: '根号の計算と有理化',
  period: '中3代数',
  icon: '√',
  order: 8,
  grade: 3,
};

export const squareRootsTopics: Topic[] = [sqrtMeaning, sqrtMulDiv, rationalization, sqrtAddExpand];

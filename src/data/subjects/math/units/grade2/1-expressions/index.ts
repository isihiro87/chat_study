import type { Era, Topic } from '../../../../../types';
import { monomialPolynomial } from './topics/1-monomial-polynomial';
import { polynomialAddSub } from './topics/2-polynomial-add-sub';
import { monomialMulDiv } from './topics/3-monomial-mul-div';
import { literalExpressions } from './topics/4-literal-expressions';

export const expressionsEra: Era = {
  id: 'math-g2-expressions',
  subjectId: 'math',
  name: '式の計算',
  subtitle: '単項式・多項式の計算と利用',
  period: '中2代数',
  icon: '📝',
  order: 4,
  grade: 2,
};

export const expressionsTopics: Topic[] = [
  monomialPolynomial,
  polynomialAddSub,
  monomialMulDiv,
  literalExpressions,
];

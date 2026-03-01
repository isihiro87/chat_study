import type { Era, Topic } from '../../../../types';
import { linearEquations } from './topics/1-linear-equations';

export const mathGrade1Era: Era = {
  id: 'math-grade1',
  subjectId: 'math',
  name: '中1数学',
  subtitle: '計算力＋方程式の基礎',
  period: '代数1単元',
  icon: '📐',
  order: 1,
  grade: 1,
};

export const mathGrade1Topics: Topic[] = [linearEquations];

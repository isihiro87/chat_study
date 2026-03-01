import type { Era, Topic } from '../../../../types';
import { quadraticEquations } from './topics/1-quadratic-equations';

export const mathGrade3Era: Era = {
  id: 'math-grade3',
  subjectId: 'math',
  name: '中3数学',
  subtitle: '高校内容への入り口',
  period: '代数1単元',
  icon: '📊',
  order: 3,
  grade: 3,
};

export const mathGrade3Topics: Topic[] = [quadraticEquations];

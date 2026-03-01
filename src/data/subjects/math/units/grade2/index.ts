import type { Era, Topic } from '../../../../types';
import { simultaneousEquations } from './topics/1-simultaneous-equations';

export const mathGrade2Era: Era = {
  id: 'math-grade2',
  subjectId: 'math',
  name: '中2数学',
  subtitle: '式の操作＋証明の基礎',
  period: '代数1単元',
  icon: '🔗',
  order: 2,
  grade: 2,
};

export const mathGrade2Topics: Topic[] = [simultaneousEquations];

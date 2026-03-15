import type { Era, Topic } from '../../../../../types';
import { proportion } from './topics/1-proportion';
import { inverseProportion } from './topics/2-inverse';
import { funcGraphs } from './topics/3-graphs';

export const functionsEra: Era = {
  id: 'math-g1-functions',
  subjectId: 'math',
  name: '変化と対応',
  subtitle: '比例・反比例とグラフ',
  period: '中1代数',
  icon: '📈',
  order: 4,
  grade: 1,
};

export const functionsTopics: Topic[] = [
  proportion,
  inverseProportion,
  funcGraphs,
];

import type { Era, Topic } from '../../../../../types';
import { quadFuncParabola } from './topics/1-parabola';
import { quadFuncRange } from './topics/2-range';
import { rateOfChange } from './topics/3-rate-of-change';
import { quadFuncRealWorld } from './topics/4-real-world';

export const quadraticFuncEra: Era = {
  id: 'math-g3-quadratic-func',
  subjectId: 'math',
  name: '関数 y=ax²',
  subtitle: '放物線と変化の割合',
  period: '中3代数',
  icon: '〰️',
  order: 10,
  grade: 3,
};

export const quadraticFuncTopics: Topic[] = [
  quadFuncParabola,
  quadFuncRange,
  rateOfChange,
  quadFuncRealWorld,
];

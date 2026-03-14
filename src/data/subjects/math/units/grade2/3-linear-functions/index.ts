import type { Era, Topic } from '../../../../../types';
import { linearFuncMeaning } from './topics/1-meaning';
import { slopeIntercept } from './topics/2-slope-intercept';
import { findLinearEquation } from './topics/3-find-equation';
import { equationsAndGraphs } from './topics/4-equations-and-graphs';

export const linearFuncEra: Era = {
  id: 'math-g2-linear-func',
  subjectId: 'math',
  name: '一次関数',
  subtitle: 'グラフの傾きと式の求め方',
  period: '中2代数',
  icon: '📈',
  order: 6,
  grade: 2,
};

export const linearFuncTopics: Topic[] = [
  linearFuncMeaning,
  slopeIntercept,
  findLinearEquation,
  equationsAndGraphs,
];

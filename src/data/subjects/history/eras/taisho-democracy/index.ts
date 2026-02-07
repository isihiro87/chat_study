import type { Era, Topic } from '../../../../types';
import { politicalReform } from './topics/1-political-reform';
import { socialMovements } from './topics/2-social-movements';
import { massCulture } from './topics/3-mass-culture';

// 大正デモクラシー
export const taishoDemocracyEra: Era = {
  id: 'taisho-democracy',
  subjectId: 'history',
  name: '大正デモクラシー',
  subtitle: '民衆の力と大衆文化',
  period: '1910年代〜1920年代',
  icon: '🗳️',
  order: 13,
  grade: 3,
};

// 大正デモクラシーのトピック一覧
export const taishoDemocracyTopics: Topic[] = [
  politicalReform,
  socialMovements,
  massCulture,
];

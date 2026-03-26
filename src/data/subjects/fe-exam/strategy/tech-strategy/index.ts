import type { Era, Topic } from '../../../../types';
import { mot } from './topics/mot';

export const fetech_strategyEra: Era = {
  id: 'fe-tech-strategy',
  subjectId: 'fe-exam',
  name: '技術戦略マネジメント',
  subtitle: 'MOT・技術ロードマップ・イノベーション',
  period: 'ストラテジ系',
  icon: '🚀',
  order: 20,
  grade: 3,
};

export const fetech_strategyTopics: Topic[] = [
  mot,
];

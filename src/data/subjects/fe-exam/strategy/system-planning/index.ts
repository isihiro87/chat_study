import type { Era, Topic } from '../../../../types';
import { planning } from './topics/planning';
import { procurement } from './topics/procurement';

export const fesystem_planningEra: Era = {
  id: 'fe-system-planning',
  subjectId: 'fe-exam',
  name: 'システム企画',
  subtitle: 'システム化計画・要件定義・調達',
  period: 'ストラテジ系',
  icon: '📝',
  order: 18,
  grade: 3,
};

export const fesystem_planningTopics: Topic[] = [
  planning,
  procurement,
];

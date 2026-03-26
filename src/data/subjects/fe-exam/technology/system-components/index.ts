import type { Era, Topic } from '../../../../types';
import { systemConfig } from './topics/system-config';
import { clientServer } from './topics/client-server';
import { raidReliability } from './topics/raid-reliability';
import { performanceEvaluation } from './topics/performance-evaluation';

export const fesystem_componentsEra: Era = {
  id: 'fe-system-components',
  subjectId: 'fe-exam',
  name: 'システム構成要素',
  subtitle: 'システム構成・CS・RAID・性能評価・稼働率',
  period: 'テクノロジ系',
  icon: '🏗️',
  order: 4,
  grade: 1,
};

export const fesystem_componentsTopics: Topic[] = [
  systemConfig,
  clientServer,
  raidReliability,
  performanceEvaluation,
];

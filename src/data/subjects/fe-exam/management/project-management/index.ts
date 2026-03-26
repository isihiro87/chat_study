import type { Era, Topic } from '../../../../types';
import { projectPlanning } from './topics/project-planning';
import { scheduleCost } from './topics/schedule-cost';
import { riskManagement } from './topics/risk-management';
import { qualityManagement } from './topics/quality-management';

export const feproject_managementEra: Era = {
  id: 'fe-project-management',
  subjectId: 'fe-exam',
  name: 'プロジェクトマネジメント',
  subtitle: 'スコープ・スケジュール・コスト・リスク管理',
  period: 'マネジメント系',
  icon: '📋',
  order: 14,
  grade: 2,
};

export const feproject_managementTopics: Topic[] = [
  projectPlanning,
  scheduleCost,
  riskManagement,
  qualityManagement,
];

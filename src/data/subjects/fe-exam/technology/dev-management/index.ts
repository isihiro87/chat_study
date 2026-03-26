import type { Era, Topic } from '../../../../types';
import { devProcess } from './topics/dev-process';
import { configManagement } from './topics/config-management';

export const fedev_managementEra: Era = {
  id: 'fe-dev-management',
  subjectId: 'fe-exam',
  name: 'ソフトウェア開発管理技術',
  subtitle: '開発プロセス・構成管理・DevOps',
  period: 'テクノロジ系',
  icon: '📦',
  order: 13,
  grade: 1,
};

export const fedev_managementTopics: Topic[] = [
  devProcess,
  configManagement,
];

import type { Era, Topic } from '../../../../types';
import { strategyMethods } from './topics/strategy-methods';
import { marketing } from './topics/marketing';
import { managementSystems } from './topics/management-systems';

export const febusiness_strategyEra: Era = {
  id: 'fe-business-strategy',
  subjectId: 'fe-exam',
  name: '経営戦略マネジメント',
  subtitle: '経営戦略・マーケティング・経営管理システム',
  period: 'ストラテジ系',
  icon: '📊',
  order: 19,
  grade: 3,
};

export const febusiness_strategyTopics: Topic[] = [
  strategyMethods,
  marketing,
  managementSystems,
];

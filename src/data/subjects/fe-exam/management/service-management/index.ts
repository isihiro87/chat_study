import type { Era, Topic } from '../../../../types';
import { itilBasics } from './topics/itil-basics';
import { serviceOperation } from './topics/service-operation';

export const feservice_managementEra: Era = {
  id: 'fe-service-management',
  subjectId: 'fe-exam',
  name: 'サービスマネジメント',
  subtitle: 'ITIL・SLA・インシデント管理',
  period: 'マネジメント系',
  icon: '🎯',
  order: 15,
  grade: 2,
};

export const feservice_managementTopics: Topic[] = [
  itilBasics,
  serviceOperation,
];

import type { Era, Topic } from '../../../../types';
import { auditBasics } from './topics/audit-basics';
import { internalControl } from './topics/internal-control';

export const fesystem_auditEra: Era = {
  id: 'fe-system-audit',
  subjectId: 'fe-exam',
  name: 'システム監査',
  subtitle: '監査基準・監査手続・内部統制',
  period: 'マネジメント系',
  icon: '🔎',
  order: 16,
  grade: 2,
};

export const fesystem_auditTopics: Topic[] = [
  auditBasics,
  internalControl,
];

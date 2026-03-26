import type { Era, Topic } from '../../../../types';
import { intellectualProperty } from './topics/intellectual-property';
import { securityLaw } from './topics/security-law';
import { laborTradeLaw } from './topics/labor-trade-law';
import { standards } from './topics/standards';

export const felawEra: Era = {
  id: 'fe-law',
  subjectId: 'fe-exam',
  name: '法務',
  subtitle: '知的財産権・セキュリティ法規・労働法・標準化',
  period: 'ストラテジ系',
  icon: '⚖️',
  order: 23,
  grade: 3,
};

export const felawTopics: Topic[] = [
  intellectualProperty,
  securityLaw,
  laborTradeLaw,
  standards,
];

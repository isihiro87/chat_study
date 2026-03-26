import type { Era, Topic } from '../../../../types';
import { businessSystems } from './topics/business-systems';
import { aiIot } from './topics/ai-iot';

export const febusiness_industryEra: Era = {
  id: 'fe-business-industry',
  subjectId: 'fe-exam',
  name: 'ビジネスインダストリ',
  subtitle: 'ビジネスシステム・e-ビジネス・AI/IoT',
  period: 'ストラテジ系',
  icon: '🏭',
  order: 21,
  grade: 3,
};

export const febusiness_industryTopics: Topic[] = [
  businessSystems,
  aiIot,
];

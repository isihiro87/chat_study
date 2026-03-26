import type { Era, Topic } from '../../../../types';
import { organization } from './topics/organization';
import { orIe } from './topics/or-ie';
import { accounting } from './topics/accounting';

export const fecorporate_activityEra: Era = {
  id: 'fe-corporate-activity',
  subjectId: 'fe-exam',
  name: '企業活動',
  subtitle: '経営組織・OR/IE・会計・財務',
  period: 'ストラテジ系',
  icon: '🏢',
  order: 22,
  grade: 3,
};

export const fecorporate_activityTopics: Topic[] = [
  organization,
  orIe,
  accounting,
];

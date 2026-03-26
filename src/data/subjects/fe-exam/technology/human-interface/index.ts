import type { Era, Topic } from '../../../../types';
import { uiDesign } from './topics/ui-design';
import { usability } from './topics/usability';

export const fehuman_interfaceEra: Era = {
  id: 'fe-human-interface',
  subjectId: 'fe-exam',
  name: 'ヒューマンインタフェース',
  subtitle: 'UI設計・ユーザビリティ・アクセシビリティ',
  period: 'テクノロジ系',
  icon: '🎨',
  order: 7,
  grade: 1,
};

export const fehuman_interfaceTopics: Topic[] = [
  uiDesign,
  usability,
];

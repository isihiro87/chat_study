import type { Era, Topic } from '../../../../../types';
import { coldWarEnd } from './topics/1-cold-war-end';
import { heiseiJapan } from './topics/2-heisei-japan';
import { modernIssues } from './topics/3-modern-issues';

export const modernWorldEra: Era = {
  id: 'modern-world',
  subjectId: 'history',
  name: '現代の世界と日本',
  subtitle: '冷戦終結からグローバル化へ',
  period: '1989年〜現在',
  icon: '🌏',
  order: 21,
  grade: 3,
};

export const modernWorldTopics: Topic[] = [coldWarEnd, heiseiJapan, modernIssues];

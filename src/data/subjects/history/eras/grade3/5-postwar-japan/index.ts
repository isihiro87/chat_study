import type { Era, Topic } from '../../../../../types';
import { occupation } from './topics/1-occupation';
import { constitution } from './topics/2-constitution';

export const postwarJapanEra: Era = {
  id: 'postwar-japan',
  subjectId: 'history',
  name: '戦後の日本',
  subtitle: '占領と民主化',
  period: '1945年〜1952年',
  icon: '🕊️',
  order: 19,
  grade: 3,
};

export const postwarJapanTopics: Topic[] = [occupation, constitution];

import type { Era, Topic } from '../../../../../types';
import { volcano } from './topics/1-volcano';
import { earthquake } from './topics/2-earthquake';
import { strata } from './topics/3-strata';

export const earthGrade1Era: Era = {
  id: 'sci1-earth',
  subjectId: 'science',
  name: '大地の変化',
  subtitle: '火山・地震・地層',
  period: '地学分野',
  icon: '🌋',
  order: 12,
  grade: 1,
};

export const earthGrade1Topics: Topic[] = [volcano, earthquake, strata];

import type { Era, Topic } from '../../../../types';
import { mediaTech } from './topics/media-tech';
import { mediaApplication } from './topics/media-application';

export const femultimediaEra: Era = {
  id: 'fe-multimedia',
  subjectId: 'fe-exam',
  name: 'マルチメディア',
  subtitle: '画像・音声・動画処理・AR/VR',
  period: 'テクノロジ系',
  icon: '🎬',
  order: 8,
  grade: 1,
};

export const femultimediaTopics: Topic[] = [
  mediaTech,
  mediaApplication,
];

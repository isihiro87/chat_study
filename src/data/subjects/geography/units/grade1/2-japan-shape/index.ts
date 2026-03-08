import type { Era, Topic } from '../../../../../types';
import { japanPosition } from './topics/1-japan-position';
import { timeDifference } from './topics/2-time-difference';
import { territory } from './topics/3-territory';
import { prefectures } from './topics/4-prefectures';

export const japanShapeEra: Era = {
  id: 'geo1-japan-shape',
  subjectId: 'geography',
  name: '日本の姿',
  subtitle: '日本の位置・時差・領域・都道府県',
  period: '日本地理',
  icon: '🗾',
  order: 22,
  grade: 1,
};

export const japanShapeTopics: Topic[] = [
  japanPosition,
  timeDifference,
  territory,
  prefectures,
];

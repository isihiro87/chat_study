import type { Era, Topic } from '../../../../../types';
import { landforms } from './topics/1-landforms';
import { climate } from './topics/2-climate';
import { disasters } from './topics/3-disasters';
import { population } from './topics/4-population';
import { energy } from './topics/5-energy';
import { industry } from './topics/6-industry';
import { regionalDivision } from './topics/7-regional-division';

export const japanFeaturesEra: Era = {
  id: 'geo2-japan-features',
  subjectId: 'geography',
  name: '日本の地域的特色',
  subtitle: '地形・気候・災害・人口・エネルギー・産業・地域区分',
  period: '日本地理',
  icon: '🗾',
  order: 26,
  grade: 2,
};

export const japanFeaturesTopics: Topic[] = [
  landforms,
  climate,
  disasters,
  population,
  energy,
  industry,
  regionalDivision,
];

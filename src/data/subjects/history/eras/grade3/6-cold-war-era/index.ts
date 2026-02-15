import type { Era, Topic } from '../../../../../types';
import { coldWar } from './topics/1-cold-war';
import { independence } from './topics/2-independence';
import { international } from './topics/3-international';
import { economicGrowth } from './topics/4-economic-growth';
import { postwarCulture } from './topics/5-postwar-culture';

export const coldWarEra: Era = {
  id: 'cold-war-era',
  subjectId: 'history',
  name: '冷戦と日本の成長',
  subtitle: '独立回復から高度経済成長へ',
  period: '1950年代〜1970年代',
  icon: '🌐',
  order: 20,
  grade: 3,
};

export const coldWarTopics: Topic[] = [
  coldWar,
  independence,
  international,
  economicGrowth,
  postwarCulture,
];

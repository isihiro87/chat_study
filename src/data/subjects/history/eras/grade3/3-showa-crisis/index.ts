import type { Era, Topic } from '../../../../../types';
import { greatDepression } from './topics/1-great-depression';
import { manchurianIncident } from './topics/2-manchurian-incident';
import { sinoJapaneseWar } from './topics/3-sino-japanese-war';

// 世界恐慌と日本の中国侵略
export const showaCrisisEra: Era = {
  id: 'showa-crisis',
  subjectId: 'history',
  name: '世界恐慌と日本の中国侵略',
  subtitle: '経済崩壊からファシズムへ',
  period: '1929年〜1937年',
  icon: '🌑',
  order: 17,
  grade: 3,
};

// 世界恐慌と日本の中国侵略のトピック一覧
export const showaCrisisTopics: Topic[] = [
  greatDepression,
  manchurianIncident,
  sinoJapaneseWar,
];

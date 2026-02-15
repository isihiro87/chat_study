import type { Era, Topic } from '../../../../../types';
import { europeChange } from './topics/1-europe-change';
import { europeSpread } from './topics/2-europe-spread';
import { nanbanTrade } from './topics/3-nanban-trade';
import { nobunagaHideyoshi } from './topics/4-nobunaga-hideyoshi';
import { hideyoshiPolicy } from './topics/5-hideyoshi-policy';
import { momoyamaCulture } from './topics/6-momoyama-culture';

export const earlyModernEra: Era = {
  id: 'early-modern',
  subjectId: 'history',
  name: '近世の幕開け',
  subtitle: 'ヨーロッパの進出と天下統一',
  period: '15世紀〜16世紀',
  icon: '🌍',
  order: 6,
  grade: 2,
};

export const earlyModernTopics: Topic[] = [
  europeChange,
  europeSpread,
  nanbanTrade,
  nobunagaHideyoshi,
  hideyoshiPolicy,
  momoyamaCulture,
];

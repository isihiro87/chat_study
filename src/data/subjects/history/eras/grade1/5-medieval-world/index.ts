import type { Era, Topic } from '../../../../../types';
import { medievalEuropeIslam } from './topics/1-medieval-europe-islam';
import { mongolEmpire } from './topics/2-mongol-empire';
import { mongolInvasion } from './topics/3-mongol-invasion';
import { muromachiBakufu } from './topics/4-muromachi-bakufu';
import { eastAsiaTrade } from './topics/5-east-asia-trade';
import { muromachiIndustry } from './topics/6-muromachi-industry';
import { muromachiPeople } from './topics/7-muromachi-people';
import { sengokuEra } from './topics/7-sengoku-era';
import { kitayamaCulture } from './topics/9-kitayama-culture';
import { higashiyamaCulture } from './topics/10-higashiyama-culture';

export const medievalWorldEra: Era = {
  id: 'medieval-world',
  subjectId: 'history',
  name: '中世の世界と室町時代',
  subtitle: 'モンゴル帝国から戦国時代へ',
  period: '13世紀〜16世紀',
  icon: '🗡️',
  order: 5,
  grade: 1,
};

export const medievalWorldTopics: Topic[] = [
  medievalEuropeIslam,
  mongolEmpire,
  mongolInvasion,
  muromachiBakufu,
  eastAsiaTrade,
  muromachiIndustry,
  muromachiPeople,
  sengokuEra,
  kitayamaCulture,
  higashiyamaCulture,
];

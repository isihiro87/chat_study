import type { Era, Topic } from '../../../../../types';
import { riseOfBushi } from './topics/1-rise-of-bushi';
import { inseiTaira } from './topics/2-insei-taira';
import { kamakuraBakufu } from './topics/3-kamakura-bakufu';
import { kamakuraSociety } from './topics/4-kamakura-society';
import { kamakuraCulture } from './topics/5-kamakura-culture';

export const warriorKamakuraEra: Era = {
  id: 'warrior-kamakura',
  subjectId: 'history',
  name: '武士の世の中',
  subtitle: '院政から鎌倉幕府へ',
  period: '11世紀〜14世紀',
  icon: '⚔️',
  order: 4,
  grade: 1,
};

export const warriorKamakuraTopics: Topic[] = [
  riseOfBushi,
  inseiTaira,
  kamakuraBakufu,
  kamakuraSociety,
  kamakuraCulture,
];

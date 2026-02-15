import type { Era, Topic } from '../../../../../types';
import { humanOrigins } from './topics/1-human-origins';
import { ancientCivilizations } from './topics/2-ancient-civilizations';
import { chineseCivilization } from './topics/3-chinese-civilization';
import { greeceRome } from './topics/4-greece-rome';
import { worldReligions } from './topics/5-world-religions';

export const ancientWorldEra: Era = {
  id: 'ancient-world',
  subjectId: 'history',
  name: '古代文明の世界',
  subtitle: '人類の出現から世界宗教まで',
  period: '700万年前〜7世紀',
  icon: '🏛️',
  order: 1,
  grade: 1,
};

export const ancientWorldTopics: Topic[] = [
  humanOrigins,
  ancientCivilizations,
  chineseCivilization,
  greeceRome,
  worldReligions,
];

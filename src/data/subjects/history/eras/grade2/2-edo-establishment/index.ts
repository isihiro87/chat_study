import type { Era, Topic } from '../../../../../types';
import { edoBakufu } from './topics/1-edo-bakufu';
import { sakoku } from './topics/2-sakoku';
import { foreignRelations } from './topics/3-foreign-relations';
import { ryukyuAinu } from './topics/4-ryukyu-ainu';
import { socialClasses } from './topics/5-social-classes';

export const edoEstablishmentEra: Era = {
  id: 'edo-establishment',
  subjectId: 'history',
  name: '江戸幕府の成立',
  subtitle: '幕藩体制と鎖国',
  period: '17世紀',
  icon: '🏯',
  order: 7,
  grade: 2,
};

export const edoEstablishmentTopics: Topic[] = [
  edoBakufu,
  sakoku,
  foreignRelations,
  ryukyuAinu,
  socialClasses,
];

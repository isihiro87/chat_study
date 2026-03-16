import type { Era, Topic } from '../../../../../types';
import { celestialBasic } from './topics/1-celestial-basic';
import { celestialObservation } from './topics/2-celestial-observation';
import { moonVenusBasic } from './topics/3-moon-venus-basic';
import { moonVenusDetail } from './topics/4-moon-venus-detail';
import { solarSystemPlanets } from './topics/5-solar-system-planets';
import { universe } from './topics/6-universe';

export const earthEra: Era = {
  id: 'sci3-earth',
  subjectId: 'science',
  name: '地球と宇宙',
  subtitle: '天体の動き・月と金星・太陽系',
  period: '地学分野',
  icon: '🌍',
  order: 4,
  grade: 3,
};

export const earthTopics: Topic[] = [
  celestialBasic,
  celestialObservation,
  moonVenusBasic,
  moonVenusDetail,
  solarSystemPlanets,
  universe,
];

import type { Era, Topic } from '../../../../../types';
import { celestialMotion } from './topics/1-celestial-motion';
import { moonVenus } from './topics/2-moon-venus';
import { solarSystemUniverse } from './topics/3-solar-system';

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
  celestialMotion,
  moonVenus,
  solarSystemUniverse,
];

import type { Era, Topic } from '../../../../../types';
import { observationPressure } from './topics/1-observation-pressure';
import { pressureHumidity } from './topics/2-pressure-humidity';
import { cloudsFronts } from './topics/3-clouds-fronts';
import { japanWeather } from './topics/4-japan-weather';

export const weatherEra: Era = {
  id: 'sci2-weather',
  subjectId: 'science',
  name: '気象のしくみと天気の変化',
  subtitle: '気圧・湿度・前線・日本の四季',
  period: '地学分野',
  icon: '🌦️',
  order: 7,
  grade: 2,
};

export const weatherTopics: Topic[] = [
  observationPressure,
  pressureHumidity,
  cloudsFronts,
  japanWeather,
];

import type { Era, Topic } from '../../../../../types';
import { weatherObservation } from './topics/1-weather-observation';
import { pressureAtmosphere } from './topics/2-pressure-atmosphere';
import { isobarsWind } from './topics/3-isobars-wind';
import { humidityDewpoint } from './topics/4-humidity-dewpoint';
import { cloudFormation } from './topics/5-cloud-formation';
import { fronts } from './topics/6-fronts';
import { atmosphericCirculation } from './topics/7-atmospheric-circulation';
import { japanSeasons } from './topics/8-japan-seasons';

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
  weatherObservation,
  pressureAtmosphere,
  isobarsWind,
  humidityDewpoint,
  cloudFormation,
  fronts,
  atmosphericCirculation,
  japanSeasons,
];

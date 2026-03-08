import type { Era, Topic } from '../../../../../types';
import { earthShape } from './topics/1-earth-shape';
import { worldCountries } from './topics/2-world-countries';
import { locationMaps } from './topics/3-location-maps';

export const worldShapeEra: Era = {
  id: 'geo1-world-shape',
  subjectId: 'geography',
  name: '世界の姿',
  subtitle: '大陸・大洋・国々・緯度経度・地図',
  period: '世界地理',
  icon: '🌍',
  order: 21,
  grade: 1,
};

export const worldShapeTopics: Topic[] = [
  earthShape,
  worldCountries,
  locationMaps,
];

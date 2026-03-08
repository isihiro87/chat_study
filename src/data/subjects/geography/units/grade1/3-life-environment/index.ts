import type { Era, Topic } from '../../../../../types';
import { climateLife } from './topics/1-climate-life';
import { climateZones } from './topics/2-climate-zones';
import { cultureReligion } from './topics/3-culture-religion';

export const lifeEnvironmentEra: Era = {
  id: 'geo1-life-environment',
  subjectId: 'geography',
  name: '人々の生活と環境',
  subtitle: '気候と暮らし・気候区分・文化と宗教',
  period: '世界地理',
  icon: '🏠',
  order: 23,
  grade: 1,
};

export const lifeEnvironmentTopics: Topic[] = [
  climateLife,
  climateZones,
  cultureReligion,
];

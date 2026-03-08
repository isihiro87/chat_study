import type { Era, Topic } from '../../../../../types';
import { asia } from './topics/1-asia';
import { europe } from './topics/2-europe';
import { africa } from './topics/3-africa';
import { northAmerica } from './topics/4-north-america';
import { southAmerica } from './topics/5-south-america';
import { oceania } from './topics/6-oceania';

export const worldRegionsEra: Era = {
  id: 'geo1-world-regions',
  subjectId: 'geography',
  name: '世界の諸地域',
  subtitle: 'アジア・ヨーロッパ・アフリカ・南北アメリカ・オセアニア',
  period: '世界地理',
  icon: '🌐',
  order: 24,
  grade: 1,
};

export const worldRegionsTopics: Topic[] = [
  asia,
  europe,
  africa,
  northAmerica,
  southAmerica,
  oceania,
];

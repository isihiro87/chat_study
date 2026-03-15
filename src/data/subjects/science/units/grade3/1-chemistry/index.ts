import type { Era, Topic } from '../../../../../types';
import { electrolyteElectrolysis } from './topics/1-electrolyte-electrolysis';
import { atomIon } from './topics/2-atom-ion';
import { acidAlkaliProperty } from './topics/3-acid-alkali-property';
import { neutralization } from './topics/4-neutralization';
import { batteryBasics } from './topics/5-battery-basics';
import { batteryTypes } from './topics/6-battery-types';

export const chemistryEra: Era = {
  id: 'sci3-chemistry',
  subjectId: 'science',
  name: '化学変化とイオン',
  subtitle: '電離・酸とアルカリ・電池のしくみ',
  period: '化学分野',
  icon: '⚗️',
  order: 1,
  grade: 3,
};

export const chemistryTopics: Topic[] = [
  electrolyteElectrolysis,
  atomIon,
  acidAlkaliProperty,
  neutralization,
  batteryBasics,
  batteryTypes,
];

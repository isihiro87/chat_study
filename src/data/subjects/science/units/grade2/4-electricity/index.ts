import type { Era, Topic } from '../../../../../types';
import { staticElectricity } from './topics/1-static-electricity';
import { circuitOhm } from './topics/2-circuit-ohm';
import { electricEnergy } from './topics/3-electric-energy';
import { currentMagnetism } from './topics/4-current-magnetism';

export const electricityEra: Era = {
  id: 'sci2-electricity',
  subjectId: 'science',
  name: '電流とその利用',
  subtitle: '静電気・回路・電力・電磁誘導',
  period: '物理分野',
  icon: '⚡',
  order: 8,
  grade: 2,
};

export const electricityTopics: Topic[] = [
  staticElectricity,
  circuitOhm,
  electricEnergy,
  currentMagnetism,
];

import type { Era, Topic } from '../../../../../types';
import { staticElectricity } from './topics/1-static-electricity';
import { cathodeElectron } from './topics/2-cathode-electron';
import { circuitOhm } from './topics/2-circuit-ohm';
import { ohmsLaw } from './topics/3-ohms-law';
import { electricEnergy } from './topics/3-electric-energy';
import { currentMagnetism } from './topics/4-current-magnetism';
import { electromagneticInduction } from './topics/5-electromagnetic-induction';

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
  cathodeElectron,
  circuitOhm,
  ohmsLaw,
  electricEnergy,
  currentMagnetism,
  electromagneticInduction,
];

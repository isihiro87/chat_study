import type { Era, Topic } from '../../../../../types';
import { matterComposition } from './topics/1-matter-composition';
import { chemicalCombination } from './topics/2-chemical-combination';
import { oxidationReduction } from './topics/3-oxidation-reduction';
import { massConservation } from './topics/4-mass-conservation';
import { chemicalEnergy } from './topics/5-chemical-energy';

export const chemicalChangeEra: Era = {
  id: 'sci2-chemical-change',
  subjectId: 'science',
  name: '化学変化と原子・分子',
  subtitle: '分解・化合・酸化還元・質量保存',
  period: '化学分野',
  icon: '⚗️',
  order: 5,
  grade: 2,
};

export const chemicalChangeTopics: Topic[] = [
  matterComposition,
  chemicalCombination,
  oxidationReduction,
  massConservation,
  chemicalEnergy,
];

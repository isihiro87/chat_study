import type { Era, Topic } from '../../../../types';
import { agricultureIndustry } from './topics/1-agriculture-industry';
import { threeCapitals } from './topics/2-three-capitals';
import { transportation } from './topics/3-transportation';
import { bakuhanSystem } from './topics/4-bakuhan-system';

// 江戸時代②（経済の発展）
export const edoEconomyEra: Era = {
  id: 'edo-economy',
  subjectId: 'history',
  name: '江戸時代②',
  subtitle: '経済の発展',
  period: '17世紀後半〜18世紀',
  icon: '💰',
  order: 7,
  grade: 2,
};

// 江戸時代②（経済）のトピック一覧
export const edoEconomyTopics: Topic[] = [
  agricultureIndustry,
  threeCapitals,
  transportation,
  bakuhanSystem,
];

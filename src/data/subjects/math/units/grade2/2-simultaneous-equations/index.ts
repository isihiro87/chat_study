import type { Era, Topic } from '../../../../../types';
import { simulEqBasics } from './topics/1-basics';
import { elimination } from './topics/2-elimination';
import { substitution } from './topics/3-substitution';
import { variousSimulEq } from './topics/4-various';
import { simulEqApps } from './topics/5-applications';
import { simulEqAppsAdv } from './topics/6-applications-advanced';

export const simultaneousEqEra: Era = {
  id: 'math-g2-simultaneous-eq',
  subjectId: 'math',
  name: '連立方程式',
  subtitle: '加減法・代入法で方程式を解く',
  period: '中2代数',
  icon: '🔗',
  order: 5,
  grade: 2,
};

export const simultaneousEqTopics: Topic[] = [
  simulEqBasics,
  elimination,
  substitution,
  variousSimulEq,
  simulEqApps,
  simulEqAppsAdv,
];

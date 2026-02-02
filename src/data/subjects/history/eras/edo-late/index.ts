import type { Era, Topic } from '../../../../types';
import { agricultureIndustry } from './topics/agriculture-industry';
import { threeCapitals } from './topics/three-capitals';
import { transportation } from './topics/transportation';
import { bakuhanSystem } from './topics/bakuhan-system';
import { genrokuCulture } from './topics/genroku-culture';
import { kyohoReform } from './topics/kyoho-reform';
import { tanumaPolitics } from './topics/tanuma-politics';
import { kanseiReform } from './topics/kansei-reform';
import { newLearning } from './topics/new-learning';
import { kaseiCulture } from './topics/kasei-culture';
import { foreignShips } from './topics/foreign-ships';
import { tempoReform } from './topics/tempo-reform';

// 江戸時代（後半）
export const edoLateEra: Era = {
  id: 'edo-late',
  subjectId: 'history',
  name: '江戸時代（後半）',
  subtitle: '改革と文化の時代',
  period: '1716年〜1868年',
  icon: '🎭',
  order: 7,
};

// 江戸時代（後半）のトピック一覧
export const edoLateTopics: Topic[] = [
  agricultureIndustry,
  threeCapitals,
  transportation,
  bakuhanSystem,
  genrokuCulture,
  kyohoReform,
  tanumaPolitics,
  kanseiReform,
  newLearning,
  kaseiCulture,
  foreignShips,
  tempoReform,
];

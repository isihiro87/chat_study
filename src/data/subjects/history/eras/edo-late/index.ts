import type { Era, Topic } from '../../../../types';
import { agricultureIndustry } from './topics/1-agriculture-industry';
import { threeCapitals } from './topics/2-three-capitals';
import { transportation } from './topics/3-transportation';
import { bakuhanSystem } from './topics/4-bakuhan-system';
import { genrokuCulture } from './topics/5-genroku-culture';
import { kyohoReform } from './topics/6-kyoho-reform';
import { tanumaPolitics } from './topics/7-tanuma-politics';
import { kanseiReform } from './topics/8-kansei-reform';
import { newLearning } from './topics/9-new-learning';
import { kaseiCulture } from './topics/10-kasei-culture';
import { foreignShips } from './topics/11-foreign-ships';
import { tempoReform } from './topics/12-tempo-reform';

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

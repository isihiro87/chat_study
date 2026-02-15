import type { Era, Topic } from '../../../../../types';
import { kanseiReform } from './topics/8-kansei-reform';
import { newLearning } from './topics/9-new-learning';
import { kaseiCulture } from './topics/10-kasei-culture';
import { foreignShips } from './topics/11-foreign-ships';
import { tempoReform } from './topics/12-tempo-reform';
import { threeReformsSummary } from './topics/13-three-reforms-summary';

// 江戸時代④（改革の時代）
export const edoReformsEra: Era = {
  id: 'edo-reforms',
  subjectId: 'history',
  name: '江戸時代④',
  subtitle: '寛政〜天保の改革',
  period: '1787年〜1853年',
  icon: '📜',
  order: 10,
  grade: 2,
};

// 江戸時代④（改革）のトピック一覧
export const edoReformsTopics: Topic[] = [
  kanseiReform,
  newLearning,
  kaseiCulture,
  foreignShips,
  tempoReform,
  threeReformsSummary,
];

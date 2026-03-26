import type { Era, Topic } from '../../../../types';
import { isStrategy } from './topics/is-strategy';
import { dxCloud } from './topics/dx-cloud';

export const fesystem_strategyEra: Era = {
  id: 'fe-system-strategy',
  subjectId: 'fe-exam',
  name: 'システム戦略',
  subtitle: '情報システム戦略・業務プロセス・DX推進',
  period: 'ストラテジ系',
  icon: '🗺️',
  order: 17,
  grade: 3,
};

export const fesystem_strategyTopics: Topic[] = [
  isStrategy,
  dxCloud,
];

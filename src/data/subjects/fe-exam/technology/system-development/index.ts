import type { Era, Topic } from '../../../../types';
import { requirements } from './topics/requirements';
import { design } from './topics/design';
import { implementation } from './topics/implementation';
import { testing } from './topics/testing';
import { deploymentMaintenance } from './topics/deployment-maintenance';

export const fesystem_developmentEra: Era = {
  id: 'fe-system-development',
  subjectId: 'fe-exam',
  name: 'システム開発技術',
  subtitle: '要件定義・設計・テスト・導入・保守',
  period: 'テクノロジ系',
  icon: '🔨',
  order: 12,
  grade: 1,
};

export const fesystem_developmentTopics: Topic[] = [
  requirements,
  design,
  implementation,
  testing,
  deploymentMaintenance,
];

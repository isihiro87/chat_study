import type { Era, Topic } from '../../../types';
import { feproject_managementEra, feproject_managementTopics } from './project-management';
import { feservice_managementEra, feservice_managementTopics } from './service-management';
import { fesystem_auditEra, fesystem_auditTopics } from './system-audit';

// マネジメント系の全Era
export const managementEras: Era[] = [
  feproject_managementEra,
  feservice_managementEra,
  fesystem_auditEra,
].sort((a, b) => a.order - b.order);

// マネジメント系の全トピック
export const managementTopics: Topic[] = [
  ...feproject_managementTopics,
  ...feservice_managementTopics,
  ...fesystem_auditTopics,
];

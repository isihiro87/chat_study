import type { Era, Topic } from '../../../types';
import { fesystem_strategyEra, fesystem_strategyTopics } from './system-strategy';
import { fesystem_planningEra, fesystem_planningTopics } from './system-planning';
import { febusiness_strategyEra, febusiness_strategyTopics } from './business-strategy';
import { fetech_strategyEra, fetech_strategyTopics } from './tech-strategy';
import { febusiness_industryEra, febusiness_industryTopics } from './business-industry';
import { fecorporate_activityEra, fecorporate_activityTopics } from './corporate-activity';
import { felawEra, felawTopics } from './law';

// ストラテジ系の全Era
export const strategyEras: Era[] = [
  fesystem_strategyEra,
  fesystem_planningEra,
  febusiness_strategyEra,
  fetech_strategyEra,
  febusiness_industryEra,
  fecorporate_activityEra,
  felawEra,
].sort((a, b) => a.order - b.order);

// ストラテジ系の全トピック
export const strategyTopics: Topic[] = [
  ...fesystem_strategyTopics,
  ...fesystem_planningTopics,
  ...febusiness_strategyTopics,
  ...fetech_strategyTopics,
  ...febusiness_industryTopics,
  ...fecorporate_activityTopics,
  ...felawTopics,
];

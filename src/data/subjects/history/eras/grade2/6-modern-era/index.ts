import type { Era, Topic } from '../../../../../types';
import { britishRevolution } from './topics/1-british-revolution';
import { americanIndependence } from './topics/2-american-independence';
import { frenchRevolution } from './topics/3-french-revolution';
import { nationalismEurope } from './topics/4-nationalism-europe';
import { russiaExpansion } from './topics/5-russia-expansion';
import { americaExpansion } from './topics/6-america-expansion';
import { industrialRevolution } from './topics/7-industrial-revolution';
import { westernAsiaInvasion } from './topics/8-western-asia-invasion';

// 近代革命と国家形成
export const modernEra: Era = {
  id: 'modern-era',
  subjectId: 'history',
  name: '近代革命と国家形成',
  subtitle: '市民革命と産業革命の時代',
  period: '17世紀〜19世紀',
  icon: '🌍',
  order: 11,
  grade: 2,
};

// 近代革命と国家形成のトピック一覧
export const modernEraTopics: Topic[] = [
  britishRevolution,
  americanIndependence,
  frenchRevolution,
  nationalismEurope,
  russiaExpansion,
  americaExpansion,
  industrialRevolution,
  westernAsiaInvasion,
];

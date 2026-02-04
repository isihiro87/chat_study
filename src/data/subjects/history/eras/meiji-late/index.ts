import type { Era, Topic } from '../../../../types';
import { treatyRevision } from './topics/1-treaty-revision';
import { sinoJapaneseWar } from './topics/2-sino-japanese-war';
import { russoJapaneseWar } from './topics/3-russo-japanese-war';
import { koreaAnnexation } from './topics/4-korea-annexation';
import { japanIndustrialRevolution } from './topics/5-industrial-revolution';
import { meijiCulture } from './topics/6-meiji-culture';

// 明治時代（後期）
export const meijiLateEra: Era = {
  id: 'meiji-late',
  subjectId: 'history',
  name: '明治時代（後期）',
  subtitle: '帝国主義と近代化',
  period: '1889年〜1912年',
  icon: '🏭',
  order: 11,
};

// 明治時代（後期）のトピック一覧
export const meijiLateTopics: Topic[] = [
  treatyRevision,
  sinoJapaneseWar,
  russoJapaneseWar,
  koreaAnnexation,
  japanIndustrialRevolution,
  meijiCulture,
];

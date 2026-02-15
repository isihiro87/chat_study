import type { Era, Topic } from '../../../../../types';
import { ww2Outbreak } from './topics/1-ww2-outbreak';
import { pacificWar } from './topics/2-pacific-war';
import { wartimeLife } from './topics/3-wartime-life';
import { endOfWar } from './topics/4-end-of-war';

// 第二次世界大戦と日本
export const ww2JapanEra: Era = {
  id: 'ww2-japan',
  subjectId: 'history',
  name: '第二次世界大戦と日本',
  subtitle: '総力戦の悲劇と敗戦',
  period: '1939年〜1945年',
  icon: '💣',
  order: 18,
  grade: 3,
};

// 第二次世界大戦と日本のトピック一覧
export const ww2JapanTopics: Topic[] = [
  ww2Outbreak,
  pacificWar,
  wartimeLife,
  endOfWar,
];

import type { Era, Topic } from '../../../../../types';
import { openingJapan } from './topics/1-opening-japan';
import { postOpening } from './topics/2-post-opening';
import { fallOfBakufu } from './topics/3-fall-of-bakufu';

// 幕末
export const bakumatsuEra: Era = {
  id: 'bakumatsu',
  subjectId: 'history',
  name: '幕末',
  subtitle: '開国から明治維新へ',
  period: '1853年〜1868年',
  icon: '⚔️',
  order: 12,
  grade: 2,
};

// 幕末のトピック一覧
export const bakumatsuTopics: Topic[] = [openingJapan, postOpening, fallOfBakufu];

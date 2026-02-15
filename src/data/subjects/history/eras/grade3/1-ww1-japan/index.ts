import type { Era, Topic } from '../../../../../types';
import { ww1Outbreak } from './topics/1-ww1-outbreak';
import { japanInWw1 } from './topics/2-japan-in-ww1';
import { russianRevolution } from './topics/3-russian-revolution';
import { postwarOrder } from './topics/4-postwar-order';

// 第一次世界大戦と日本
export const ww1JapanEra: Era = {
  id: 'ww1-japan',
  subjectId: 'history',
  name: '第一次世界大戦と日本',
  subtitle: '世界大戦とアジアの目覚め',
  period: '1914年〜1920年代',
  icon: '⚔️',
  order: 15,
  grade: 3,
};

// 第一次世界大戦と日本のトピック一覧
export const ww1JapanTopics: Topic[] = [
  ww1Outbreak,
  japanInWw1,
  russianRevolution,
  postwarOrder,
];

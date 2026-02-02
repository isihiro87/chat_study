import type { Era, Topic } from '../../../../types';
import { taikaReform } from './topics/taika-reform';

// 飛鳥時代
export const asukaEra: Era = {
  id: 'asuka',
  subjectId: 'history',
  name: '飛鳥時代',
  subtitle: '日本が国としてまとまり始めた',
  period: '592年〜710年',
  icon: '🏛️',
  order: 1,
};

// 飛鳥時代のトピック一覧
export const asukaTopics: Topic[] = [taikaReform];

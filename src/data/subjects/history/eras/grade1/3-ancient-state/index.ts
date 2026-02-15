import type { Era, Topic } from '../../../../../types';
import { shotokuAsuka } from './topics/1-shotoku-asuka';
import { taikaReform } from './topics/2-taika-reform';
import { ritsuryoNara } from './topics/3-ritsuryo-nara';
import { handenTax } from './topics/4-handen-tax';
import { tenpyoCulture } from './topics/5-tenpyo-culture';
import { heianCapital } from './topics/6-heian-capital';
import { sekkanPolitics } from './topics/7-sekkan-politics';
import { kokufuCulture } from './topics/8-kokufu-culture';

export const ancientStateEra: Era = {
  id: 'ancient-state',
  subjectId: 'history',
  name: '古代国家の形成',
  subtitle: '飛鳥・奈良・平安時代',
  period: '6世紀〜12世紀',
  icon: '🏯',
  order: 3,
  grade: 1,
};

export const ancientStateTopics: Topic[] = [
  shotokuAsuka,
  taikaReform,
  ritsuryoNara,
  handenTax,
  tenpyoCulture,
  heianCapital,
  sekkanPolitics,
  kokufuCulture,
];

import type { Era, Topic } from '../../../../types';
import { genrokuCulture } from './topics/5-genroku-culture';
import { kyohoReform } from './topics/6-kyoho-reform';
import { tanumaPolitics } from './topics/7-tanuma-politics';

// 江戸時代③（元禄〜田沼時代）
export const edoGenrokuEra: Era = {
  id: 'edo-genroku',
  subjectId: 'history',
  name: '江戸時代③',
  subtitle: '元禄文化と享保の改革',
  period: '1680年〜1786年',
  icon: '🎭',
  order: 8,
};

// 江戸時代③（元禄）のトピック一覧
export const edoGenrokuTopics: Topic[] = [
  genrokuCulture,
  kyohoReform,
  tanumaPolitics,
];

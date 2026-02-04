import type { Era, Topic } from '../../../../types';
import { meijiRestoration } from './topics/1-meiji-restoration';
import { threeReforms } from './topics/2-three-reforms';
import { fukokuKyohei } from './topics/3-fukoku-kyohei';
import { internationalRelations } from './topics/4-international-relations';
import { freedomMovement } from './topics/5-freedom-movement';
import { constitution } from './topics/6-constitution';

// 明治時代（前期）
export const meijiEarlyEra: Era = {
  id: 'meiji-early',
  subjectId: 'history',
  name: '明治時代（前期）',
  subtitle: '維新から立憲国家へ',
  period: '1868年〜1889年',
  icon: '🌅',
  order: 10,
};

// 明治時代（前期）のトピック一覧
export const meijiEarlyTopics: Topic[] = [
  meijiRestoration,
  threeReforms,
  fukokuKyohei,
  internationalRelations,
  freedomMovement,
  constitution,
];

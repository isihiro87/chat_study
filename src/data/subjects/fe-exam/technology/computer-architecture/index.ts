import type { Era, Topic } from '../../../../types';
import { processor } from './topics/processor';
import { memory } from './topics/memory';
import { busIo } from './topics/bus-io';

export const fecomputer_architectureEra: Era = {
  id: 'fe-computer-architecture',
  subjectId: 'fe-exam',
  name: 'コンピュータ構成要素',
  subtitle: 'プロセッサ・メモリ・バス・入出力',
  period: 'テクノロジ系',
  icon: '🖥️',
  order: 3,
  grade: 1,
};

export const fecomputer_architectureTopics: Topic[] = [
  processor,
  memory,
  busIo,
];

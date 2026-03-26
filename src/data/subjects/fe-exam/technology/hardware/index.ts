import type { Era, Topic } from '../../../../types';
import { logicCircuits } from './topics/logic-circuits';
import { semiconductors } from './topics/semiconductors';
import { embeddedIot } from './topics/embedded-iot';

export const fehardwareEra: Era = {
  id: 'fe-hardware',
  subjectId: 'fe-exam',
  name: 'ハードウェア',
  subtitle: '論理回路・半導体・組込みシステム・IoT',
  period: 'テクノロジ系',
  icon: '🔧',
  order: 6,
  grade: 1,
};

export const fehardwareTopics: Topic[] = [
  logicCircuits,
  semiconductors,
  embeddedIot,
];

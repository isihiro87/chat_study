import type { Era, Topic } from '../../../../types';
import { networkBasics } from './topics/network-basics';
import { protocol } from './topics/protocol';
import { ipAddress } from './topics/ip-address';
import { networkServices } from './topics/network-services';

export const fenetworkEra: Era = {
  id: 'fe-network',
  subjectId: 'fe-exam',
  name: 'ネットワーク',
  subtitle: 'LAN/WAN・TCP/IP・IPアドレス・ネットワーク機器',
  period: 'テクノロジ系',
  icon: '🌍',
  order: 10,
  grade: 1,
};

export const fenetworkTopics: Topic[] = [
  networkBasics,
  protocol,
  ipAddress,
  networkServices,
];

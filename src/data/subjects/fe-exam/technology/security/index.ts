import type { Era, Topic } from '../../../../types';
import { securityManagement } from './topics/security-management';
import { threatsMalware } from './topics/threats-malware';
import { encryptionTech } from './topics/encryption-tech';
import { authenticationAccess } from './topics/authentication-access';
import { networkSecurity } from './topics/network-security';

export const fesecurityEra: Era = {
  id: 'fe-security',
  subjectId: 'fe-exam',
  name: 'セキュリティ',
  subtitle: '情報セキュリティ管理・暗号化・認証・サイバー攻撃対策',
  period: 'テクノロジ系',
  icon: '🔐',
  order: 11,
  grade: 1,
};

export const fesecurityTopics: Topic[] = [
  securityManagement,
  threatsMalware,
  encryptionTech,
  authenticationAccess,
  networkSecurity,
];

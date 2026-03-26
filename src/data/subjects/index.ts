import type { Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'history',
    name: '歴史',
    icon: 'scroll',
    description: '古代から現代まで',
    isAvailable: true,
  },
  {
    id: 'english',
    name: '英語',
    icon: 'languages',
    description: '中学英文法をマスター',
    isAvailable: true,
  },
  {
    id: 'math',
    name: '数学',
    icon: 'calculator',
    description: '代数を中心に学ぼう',
    isAvailable: true,
  },
  {
    id: 'science',
    name: '理科',
    icon: 'flask-conical',
    description: '化学・生物・物理・地学',
    isAvailable: true,
  },
  {
    id: 'geography',
    name: '地理',
    icon: 'globe',
    description: '世界と日本の地理を学ぼう',
    isAvailable: true,
  },
  {
    id: 'fe-exam',
    name: '基本情報技術者',
    icon: 'monitor',
    description: '基本情報技術者試験対策',
    isAvailable: false,
  },
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

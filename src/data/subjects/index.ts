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
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

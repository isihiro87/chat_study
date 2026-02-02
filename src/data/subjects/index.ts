import type { Subject } from '../types';
import { history } from './history';

export const subjects: Subject[] = [
  {
    id: 'history',
    name: '歴史',
    icon: 'scroll',
    description: '古代から現代まで',
    isAvailable: true,
  },
  {
    id: 'math',
    name: '数学',
    icon: 'calculator',
    description: '準備中...',
    isAvailable: false,
  },
  {
    id: 'english',
    name: '英語',
    icon: 'languages',
    description: '準備中...',
    isAvailable: false,
  },
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export { history };

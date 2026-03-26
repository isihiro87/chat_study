import type { Era, Topic } from '../../../../types';
import { osBasics } from './topics/os-basics';
import { middleware } from './topics/middleware';
import { fileSystem } from './topics/file-system';
import { devTools } from './topics/dev-tools';
import { oss } from './topics/oss';

export const fesoftwareEra: Era = {
  id: 'fe-software',
  subjectId: 'fe-exam',
  name: 'ソフトウェア',
  subtitle: 'OS・ミドルウェア・開発ツール・OSS',
  period: 'テクノロジ系',
  icon: '📀',
  order: 5,
  grade: 1,
};

export const fesoftwareTopics: Topic[] = [
  osBasics,
  middleware,
  fileSystem,
  devTools,
  oss,
];

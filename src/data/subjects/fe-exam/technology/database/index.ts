import type { Era, Topic } from '../../../../types';
import { rdbmsBasics } from './topics/rdbms-basics';
import { sql } from './topics/sql';
import { transaction } from './topics/transaction';
import { nosql } from './topics/nosql';

export const fedatabaseEra: Era = {
  id: 'fe-database',
  subjectId: 'fe-exam',
  name: 'データベース',
  subtitle: 'RDB・SQL・正規化・トランザクション・NoSQL',
  period: 'テクノロジ系',
  icon: '🗄️',
  order: 9,
  grade: 1,
};

export const fedatabaseTopics: Topic[] = [
  rdbmsBasics,
  sql,
  transaction,
  nosql,
];

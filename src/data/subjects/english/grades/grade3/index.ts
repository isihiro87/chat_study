import type { Era, Topic } from '../../../../types';
import { presentPerfect } from './topics/1-present-perfect';
import { makeShow } from './topics/2-make-show';
import { presentPerfectProgressive } from './topics/3-present-perfect-progressive';
import { infinitivesAdvanced } from './topics/4-infinitives-advanced';
import { indirectQuestions } from './topics/5-indirect-questions';
import { pastParticipleModifier } from './topics/6-past-participle-modifier';
import { presentParticipleModifier } from './topics/7-present-participle-modifier';
import { contactClause } from './topics/8-contact-clause';
import { relativePronouns } from './topics/9-relative-pronouns';
import { subjunctive } from './topics/10-subjunctive';

export const englishGrade3Era: Era = {
  id: 'english-grade3',
  subjectId: 'english',
  name: '中3英文法',
  subtitle: '高校文法への橋渡し',
  period: '発展文法10単元',
  icon: '📘',
  order: 3,
  grade: 3,
};

export const englishGrade3Topics: Topic[] = [
  presentPerfect,
  makeShow,
  presentPerfectProgressive,
  infinitivesAdvanced,
  indirectQuestions,
  pastParticipleModifier,
  presentParticipleModifier,
  contactClause,
  relativePronouns,
  subjunctive,
];

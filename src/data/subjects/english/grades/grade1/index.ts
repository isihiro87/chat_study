import type { Era, Topic } from '../../../../types';
import { beVerbs } from './topics/1-be-verbs';
import { generalVerbs } from './topics/2-general-verbs';
import { nouns } from './topics/3-nouns';
import { nounsAdvanced } from './topics/3b-nouns-advanced';
import { questionWords } from './topics/4-question-words';
import { questionPatterns } from './topics/4b-question-patterns';
import { thirdPersonSingular } from './topics/5-third-person-singular';
import { pronouns } from './topics/6-pronouns';
import { presentProgressive } from './topics/7-present-progressive';
import { pastTense } from './topics/8-past-tense';

export const englishGrade1Era: Era = {
  id: 'english-grade1',
  subjectId: 'english',
  name: '中1英文法',
  subtitle: '英語の土台を作ろう',
  period: '基本文法10単元',
  icon: '📖',
  order: 1,
  grade: 1,
};

export const englishGrade1Topics: Topic[] = [
  beVerbs,
  generalVerbs,
  nouns,
  nounsAdvanced,
  questionWords,
  questionPatterns,
  thirdPersonSingular,
  pronouns,
  presentProgressive,
  pastTense,
];

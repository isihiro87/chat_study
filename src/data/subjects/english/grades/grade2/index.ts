import type { Era, Topic } from '../../../../types';
import { sentenceStructures } from './topics/1-sentence-structures';
import { conjunctions } from './topics/2-conjunctions';
import { infinitives } from './topics/3-infinitives';
import { modalVerbs } from './topics/4-modal-verbs';
import { comparison } from './topics/5-comparison';
import { passiveVoice } from './topics/6-passive-voice';

export const englishGrade2Era: Era = {
  id: 'english-grade2',
  subjectId: 'english',
  name: '中2英文法',
  subtitle: '文を広げよう',
  period: '応用文法6単元',
  icon: '📗',
  order: 2,
  grade: 2,
};

export const englishGrade2Topics: Topic[] = [
  sentenceStructures,
  conjunctions,
  infinitives,
  modalVerbs,
  comparison,
  passiveVoice,
];

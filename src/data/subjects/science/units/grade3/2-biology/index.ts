import type { Era, Topic } from '../../../../../types';
import { cellDivision } from './topics/1-cell-division';
import { reproduction } from './topics/2-reproduction';
import { heredityRules } from './topics/3-heredity-rules';
import { dnaTechnology } from './topics/4-dna-technology';
import { vertebrateEvolution } from './topics/5-vertebrate-evolution';
import { evolutionEvidence } from './topics/6-evolution-evidence';

export const biologyEra: Era = {
  id: 'sci3-biology',
  subjectId: 'science',
  name: '生命の連続性',
  subtitle: '細胞分裂・遺伝・進化のつながり',
  period: '生物分野',
  icon: '🧬',
  order: 2,
  grade: 3,
};

export const biologyTopics: Topic[] = [
  cellDivision,
  reproduction,
  heredityRules,
  dnaTechnology,
  vertebrateEvolution,
  evolutionEvidence,
];

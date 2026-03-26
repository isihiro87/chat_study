import type { Era, Topic } from '../../../../types';
import { dataStructures } from './topics/data-structures';
import { sortingSearching } from './topics/sorting-searching';
import { programmingBasics } from './topics/programming-basics';
import { objectOriented } from './topics/object-oriented';
import { markupLanguages } from './topics/markup-languages';

export const fealgorithmsEra: Era = {
  id: 'fe-algorithms',
  subjectId: 'fe-exam',
  name: 'アルゴリズムとプログラミング',
  subtitle: 'データ構造・探索・整列・プログラム言語',
  period: 'テクノロジ系',
  icon: '⚙️',
  order: 2,
  grade: 1,
};

export const fealgorithmsTopics: Topic[] = [
  dataStructures,
  sortingSearching,
  programmingBasics,
  objectOriented,
  markupLanguages,
];

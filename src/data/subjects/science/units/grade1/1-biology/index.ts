import type { Era, Topic } from '../../../../../types';
import { observationMethod } from './topics/1-observation-method';
import { plantClassification } from './topics/2-plant-classification';
import { animalClassification } from './topics/3-animal-classification';

export const biologyGrade1Era: Era = {
  id: 'sci1-biology',
  subjectId: 'science',
  name: '生物の観察と分類',
  subtitle: '観察・植物の分類・動物の分類',
  period: '生物分野',
  icon: '🔍',
  order: 9,
  grade: 1,
};

export const biologyGrade1Topics: Topic[] = [
  observationMethod,
  plantClassification,
  animalClassification,
];

import type { Era, Topic } from '../../../../../types';
import { light } from './topics/1-light';
import { sound } from './topics/2-sound';
import { force } from './topics/3-force';

export const physicsGrade1Era: Era = {
  id: 'sci1-physics',
  subjectId: 'science',
  name: '光・音・力の世界',
  subtitle: '光の反射と屈折・音の性質・力のはたらき',
  period: '物理分野',
  icon: '💡',
  order: 11,
  grade: 1,
};

export const physicsGrade1Topics: Topic[] = [light, sound, force];

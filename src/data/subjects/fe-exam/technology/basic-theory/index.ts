import type { Era, Topic } from '../../../../types';
import { numberSystems } from './topics/number-systems';
import { complementFixedPoint } from './topics/complement-fixed-point';
import { floatingPoint } from './topics/floating-point';
import { errors } from './topics/errors';
import { shiftOperations } from './topics/shift-operations';
import { logicOperations } from './topics/logic-operations';
import { adderCircuits } from './topics/adder-circuits';
import { measurementControl } from './topics/measurement-control';

export const febasic_theoryEra: Era = {
  id: 'fe-basic-theory',
  subjectId: 'fe-exam',
  name: '基礎理論',
  subtitle: '基数変換・補数・浮動小数点・論理演算',
  period: 'テクノロジ系',
  icon: '🧮',
  order: 1,
  grade: 1,
};

export const febasic_theoryTopics: Topic[] = [
  numberSystems,
  complementFixedPoint,
  floatingPoint,
  errors,
  shiftOperations,
  logicOperations,
  adderCircuits,
  measurementControl,
];

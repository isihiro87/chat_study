import type { Unit } from '../../../types';
import { asuka } from './asuka';

export const units: Unit[] = [asuka];

export function getUnit(unitId: string): Unit | undefined {
  return units.find((u) => u.id === unitId);
}

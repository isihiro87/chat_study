import type { Topic } from '../../types';
import { eras, getEra, getTopicsByEra, getTopic } from './eras';

export const history = {
  id: 'history',
  name: '歴史',
  eras,
};

export { eras, getEra, getTopicsByEra, getTopic };

// 後方互換性のためのエイリアス
export const units = eras.flatMap((era) => getTopicsByEra(era.id));
export function getUnit(unitId: string): Topic | undefined {
  return getTopic(unitId);
}

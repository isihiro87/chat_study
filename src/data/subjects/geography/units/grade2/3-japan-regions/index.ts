import type { Era, Topic } from '../../../../../types';
import { kyushu } from './topics/1-kyushu';
import { chugokuShikoku } from './topics/2-chugoku-shikoku';
import { kinki } from './topics/3-kinki';
import { chubu } from './topics/4-chubu';
import { kanto } from './topics/5-kanto';
import { tohoku } from './topics/6-tohoku';
import { hokkaido } from './topics/7-hokkaido';

export const japanRegionsEra: Era = {
  id: 'geo2-japan-regions',
  subjectId: 'geography',
  name: '日本の諸地域',
  subtitle: '九州・中国四国・近畿・中部・関東・東北・北海道',
  period: '日本地理',
  icon: '🗺️',
  order: 27,
  grade: 2,
};

export const japanRegionsTopics: Topic[] = [
  kyushu,
  chugokuShikoku,
  kinki,
  chubu,
  kanto,
  tohoku,
  hokkaido,
];

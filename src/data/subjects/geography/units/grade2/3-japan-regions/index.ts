import type { Era, Topic } from '../../../../../types';
import { kyushu } from './topics/1-kyushu';
import { chugokuShikokuNature } from './topics/2-chugoku-shikoku-nature';
import { chugokuShikokuIndustry } from './topics/3-chugoku-shikoku-industry';
import { kinkiNature } from './topics/4-kinki-nature';
import { kinkiUrban } from './topics/5-kinki-urban';
import { chubuTokai } from './topics/6-chubu-tokai';
import { chubuHighland } from './topics/7-chubu-highland';
import { kantoNature } from './topics/8-kanto-nature';
import { kantoIndustry } from './topics/9-kanto-industry';
import { tohoku } from './topics/10-tohoku';
import { hokkaido } from './topics/11-hokkaido';

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
  chugokuShikokuNature,
  chugokuShikokuIndustry,
  kinkiNature,
  kinkiUrban,
  chubuTokai,
  chubuHighland,
  kantoNature,
  kantoIndustry,
  tohoku,
  hokkaido,
];

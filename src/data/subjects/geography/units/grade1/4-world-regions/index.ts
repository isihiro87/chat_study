import type { Era, Topic } from '../../../../../types';
import { asiaBasics } from './topics/1-asia-basics';
import { asiaEastSoutheast } from './topics/2-asia-east-southeast';
import { asiaSouthWest } from './topics/3-asia-south-west';
import { europeNature } from './topics/4-europe-nature';
import { europeEu } from './topics/5-europe-eu';
import { europeIssues } from './topics/6-europe-issues';
import { africaNature } from './topics/7-africa-nature';
import { africaEconomy } from './topics/8-africa-economy';
import { africaSociety } from './topics/9-africa-society';
import { northAmericaNature } from './topics/10-north-america-nature';
import { northAmericaIndustry } from './topics/11-north-america-industry';
import { southAmericaNature } from './topics/12-south-america-nature';
import { southAmericaDevelopment } from './topics/13-south-america-development';
import { oceaniaNature } from './topics/14-oceania-nature';
import { oceaniaSociety } from './topics/15-oceania-society';

export const worldRegionsEra: Era = {
  id: 'geo1-world-regions',
  subjectId: 'geography',
  name: '世界の諸地域',
  subtitle: 'アジア・ヨーロッパ・アフリカ・南北アメリカ・オセアニア',
  period: '世界地理',
  icon: '🌐',
  order: 24,
  grade: 1,
};

export const worldRegionsTopics: Topic[] = [
  asiaBasics,
  asiaEastSoutheast,
  asiaSouthWest,
  europeNature,
  europeEu,
  europeIssues,
  africaNature,
  africaEconomy,
  africaSociety,
  northAmericaNature,
  northAmericaIndustry,
  southAmericaNature,
  southAmericaDevelopment,
  oceaniaNature,
  oceaniaSociety,
];

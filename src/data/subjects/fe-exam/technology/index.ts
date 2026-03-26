import type { Era, Topic } from '../../../types';
import { febasic_theoryEra, febasic_theoryTopics } from './basic-theory';
import { fealgorithmsEra, fealgorithmsTopics } from './algorithms';
import { fecomputer_architectureEra, fecomputer_architectureTopics } from './computer-architecture';
import { fesystem_componentsEra, fesystem_componentsTopics } from './system-components';
import { fesoftwareEra, fesoftwareTopics } from './software';
import { fehardwareEra, fehardwareTopics } from './hardware';
import { fehuman_interfaceEra, fehuman_interfaceTopics } from './human-interface';
import { femultimediaEra, femultimediaTopics } from './multimedia';
import { fedatabaseEra, fedatabaseTopics } from './database';
import { fenetworkEra, fenetworkTopics } from './network';
import { fesecurityEra, fesecurityTopics } from './security';
import { fesystem_developmentEra, fesystem_developmentTopics } from './system-development';
import { fedev_managementEra, fedev_managementTopics } from './dev-management';

// テクノロジ系の全Era
export const technologyEras: Era[] = [
  febasic_theoryEra,
  fealgorithmsEra,
  fecomputer_architectureEra,
  fesystem_componentsEra,
  fesoftwareEra,
  fehardwareEra,
  fehuman_interfaceEra,
  femultimediaEra,
  fedatabaseEra,
  fenetworkEra,
  fesecurityEra,
  fesystem_developmentEra,
  fedev_managementEra,
].sort((a, b) => a.order - b.order);

// テクノロジ系の全トピック
export const technologyTopics: Topic[] = [
  ...febasic_theoryTopics,
  ...fealgorithmsTopics,
  ...fecomputer_architectureTopics,
  ...fesystem_componentsTopics,
  ...fesoftwareTopics,
  ...fehardwareTopics,
  ...fehuman_interfaceTopics,
  ...femultimediaTopics,
  ...fedatabaseTopics,
  ...fenetworkTopics,
  ...fesecurityTopics,
  ...fesystem_developmentTopics,
  ...fedev_managementTopics,
];

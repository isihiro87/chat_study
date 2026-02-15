import type { Era, Topic } from '../../../../../types';
import { jomonEra } from './topics/1-jomon-era';
import { yayoiEra } from './topics/2-yayoi-era';
import { kofunEra } from './topics/3-kofun-era';

export const japaneseOriginsEra: Era = {
  id: 'japanese-origins',
  subjectId: 'history',
  name: '日本の成り立ち',
  subtitle: '縄文・弥生・古墳時代',
  period: '1万年前〜6世紀',
  icon: '🏠',
  order: 2,
  grade: 1,
};

export const japaneseOriginsTopics: Topic[] = [jomonEra, yayoiEra, kofunEra];

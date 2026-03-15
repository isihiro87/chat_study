import type { Era, Topic } from '../../../types';
// Grade 1
import { posNegEra, posNegTopics } from './grade1';
import { literalExpEra, literalExpTopics } from './grade1';
import { equationsEra as g1EquationsEra, equationsTopics as g1EquationsTopics } from './grade1';
import { functionsEra, functionsTopics } from './grade1';
// Grade 2
import { expressionsEra, expressionsTopics } from './grade2';
import { simultaneousEqEra, simultaneousEqTopics } from './grade2';
import { linearFuncEra, linearFuncTopics } from './grade2';
// Grade 3
import { expansionFactoringEra, expansionFactoringTopics } from './grade3';
import { squareRootsEra, squareRootsTopics } from './grade3';
import { quadraticEqEra, quadraticEqTopics } from './grade3';
import { quadraticFuncEra, quadraticFuncTopics } from './grade3';

// 全Era一覧
export const eras: Era[] = [
  posNegEra,
  literalExpEra,
  g1EquationsEra,
  functionsEra,
  expressionsEra,
  simultaneousEqEra,
  linearFuncEra,
  expansionFactoringEra,
  squareRootsEra,
  quadraticEqEra,
  quadraticFuncEra,
].sort((a, b) => a.order - b.order);

// 全トピック一覧
export const allTopics: Topic[] = [
  ...posNegTopics,
  ...literalExpTopics,
  ...g1EquationsTopics,
  ...functionsTopics,
  ...expressionsTopics,
  ...simultaneousEqTopics,
  ...linearFuncTopics,
  ...expansionFactoringTopics,
  ...squareRootsTopics,
  ...quadraticEqTopics,
  ...quadraticFuncTopics,
];

// Era取得
export function getEra(eraId: string): Era | undefined {
  return eras.find((e) => e.id === eraId);
}

// Era内トピック取得
export function getTopicsByEra(eraId: string): Topic[] {
  return allTopics.filter((t) => t.eraId === eraId).sort((a, b) => a.order - b.order);
}

// トピック取得
export function getTopic(topicId: string): Topic | undefined {
  return allTopics.find((t) => t.id === topicId);
}

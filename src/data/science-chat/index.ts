import type { HistoryChat } from '../history-chat/types';
// Chemistry
import { solutionIonsChat } from '../subjects/science/units/grade3/1-chemistry/topics/1-solution-ions/chat';
import { acidAlkaliChat } from '../subjects/science/units/grade3/1-chemistry/topics/2-acid-alkali/chat';
import { chemicalBatteryChat } from '../subjects/science/units/grade3/1-chemistry/topics/3-chemical-battery/chat';
// Biology
import { growthReproductionChat } from '../subjects/science/units/grade3/2-biology/topics/1-growth-reproduction/chat';
import { geneticsChat } from '../subjects/science/units/grade3/2-biology/topics/2-genetics/chat';
import { evolutionChat } from '../subjects/science/units/grade3/2-biology/topics/3-evolution/chat';
// Physics
import { objectMotionChat } from '../subjects/science/units/grade3/3-physics/topics/1-object-motion/chat';
import { forceActionChat } from '../subjects/science/units/grade3/3-physics/topics/2-force-action/chat';
import { energyWorkChat } from '../subjects/science/units/grade3/3-physics/topics/3-energy-work/chat';
// Earth Science
import { celestialMotionChat } from '../subjects/science/units/grade3/4-earth/topics/1-celestial-motion/chat';
import { moonVenusChat } from '../subjects/science/units/grade3/4-earth/topics/2-moon-venus/chat';
import { solarSystemUniverseChat } from '../subjects/science/units/grade3/4-earth/topics/3-solar-system/chat';

const chatMap: Record<string, HistoryChat> = {
  // Chemistry
  [solutionIonsChat.id]: solutionIonsChat,
  [acidAlkaliChat.id]: acidAlkaliChat,
  [chemicalBatteryChat.id]: chemicalBatteryChat,
  // Biology
  [growthReproductionChat.id]: growthReproductionChat,
  [geneticsChat.id]: geneticsChat,
  [evolutionChat.id]: evolutionChat,
  // Physics
  [objectMotionChat.id]: objectMotionChat,
  [forceActionChat.id]: forceActionChat,
  [energyWorkChat.id]: energyWorkChat,
  // Earth Science
  [celestialMotionChat.id]: celestialMotionChat,
  [moonVenusChat.id]: moonVenusChat,
  [solarSystemUniverseChat.id]: solarSystemUniverseChat,
};

export function getScienceChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

export function getAllScienceChats(): HistoryChat[] {
  return Object.values(chatMap);
}

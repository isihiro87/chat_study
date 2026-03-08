import type { HistoryChat } from '../history-chat/types';
// Grade 2: Chemical Change
import { matterCompositionChat } from '../subjects/science/units/grade2/1-chemical-change/topics/1-matter-composition/chat';
import { chemicalCombinationChat } from '../subjects/science/units/grade2/1-chemical-change/topics/2-chemical-combination/chat';
import { oxidationReductionChat } from '../subjects/science/units/grade2/1-chemical-change/topics/3-oxidation-reduction/chat';
import { massConservationChat } from '../subjects/science/units/grade2/1-chemical-change/topics/4-mass-conservation/chat';
import { chemicalEnergyChat } from '../subjects/science/units/grade2/1-chemical-change/topics/5-chemical-energy/chat';
// Grade 2: Biology
import { cellsChat } from '../subjects/science/units/grade2/2-biology/topics/1-cells/chat';
import { plantBodyChat } from '../subjects/science/units/grade2/2-biology/topics/2-plant-body/chat';
import { animalBodyChat } from '../subjects/science/units/grade2/2-biology/topics/3-animal-body/chat';
import { stimuliResponseChat } from '../subjects/science/units/grade2/2-biology/topics/4-stimuli-response/chat';
// Grade 2: Weather
import { observationPressureChat } from '../subjects/science/units/grade2/3-weather/topics/1-observation-pressure/chat';
import { pressureHumidityChat } from '../subjects/science/units/grade2/3-weather/topics/2-pressure-humidity/chat';
import { cloudsFrontsChat } from '../subjects/science/units/grade2/3-weather/topics/3-clouds-fronts/chat';
import { japanWeatherChat } from '../subjects/science/units/grade2/3-weather/topics/4-japan-weather/chat';
// Grade 2: Electricity
import { staticElectricityChat } from '../subjects/science/units/grade2/4-electricity/topics/1-static-electricity/chat';
import { circuitOhmChat } from '../subjects/science/units/grade2/4-electricity/topics/2-circuit-ohm/chat';
import { electricEnergyChat } from '../subjects/science/units/grade2/4-electricity/topics/3-electric-energy/chat';
import { currentMagnetismChat } from '../subjects/science/units/grade2/4-electricity/topics/4-current-magnetism/chat';
// Grade 3: Chemistry
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
  // Grade 2: Chemical Change
  [matterCompositionChat.id]: matterCompositionChat,
  [chemicalCombinationChat.id]: chemicalCombinationChat,
  [oxidationReductionChat.id]: oxidationReductionChat,
  [massConservationChat.id]: massConservationChat,
  [chemicalEnergyChat.id]: chemicalEnergyChat,
  // Grade 2: Biology
  [cellsChat.id]: cellsChat,
  [plantBodyChat.id]: plantBodyChat,
  [animalBodyChat.id]: animalBodyChat,
  [stimuliResponseChat.id]: stimuliResponseChat,
  // Grade 2: Weather
  [observationPressureChat.id]: observationPressureChat,
  [pressureHumidityChat.id]: pressureHumidityChat,
  [cloudsFrontsChat.id]: cloudsFrontsChat,
  [japanWeatherChat.id]: japanWeatherChat,
  // Grade 2: Electricity
  [staticElectricityChat.id]: staticElectricityChat,
  [circuitOhmChat.id]: circuitOhmChat,
  [electricEnergyChat.id]: electricEnergyChat,
  [currentMagnetismChat.id]: currentMagnetismChat,
  // Grade 3: Chemistry
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

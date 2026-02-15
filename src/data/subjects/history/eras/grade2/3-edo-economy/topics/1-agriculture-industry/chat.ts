import type { HistoryChat } from '../../../../../../../history-chat/types';

export const agricultureIndustryChat: HistoryChat = {
  id: 'agriculture-industry',
  icon: '🌾',
  title: '新田開発と産業の発展',
  subtitle: '〜江戸時代〜 農業技術と商工業の成長',
  characters: [
    {
      id: 'farmer',
      name: '農民',
      emoji: '👨‍🌾',
      colorFrom: '#65a30d',
      colorTo: '#84cc16',
    },
    {
      id: 'merchant',
      name: '商人',
      emoji: '🏪',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '江戸時代、農業技術が大きく進歩し、<strong>新田開発</strong>が盛んに行われました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: 'この備中ぐわがあれば、深く耕せるぞ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '千歯こきで脱穀も楽になった！',
    },
    {
      type: 'narrator',
      text: '<strong>備中ぐわ</strong>で深く耕し、<strong>千歯こき</strong>で脱穀を効率化。農業生産力が飛躍的に向上しました。',
    },
    {
      type: 'quiz',
      question: '江戸時代に稲の脱穀を効率化した農具は？',
      options: [
        { letter: 'A', text: '千歯こき', correct: true },
        { letter: 'B', text: '備中ぐわ', correct: false },
        { letter: 'C', text: '唐箕', correct: false },
        { letter: 'D', text: '水車', correct: false },
      ],
      explanation:
        '<strong>正解はA「千歯こき」</strong>です。歯の間に稲穂を通して脱穀する道具で、作業効率が大幅に向上しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: '干鰯（ほしか）を肥料に使えば、もっと収穫が増えますよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: 'お金で買う肥料か。金肥というやつだな',
    },
    {
      type: 'narrator',
      text: '<strong>干鰯</strong>や油かすなど、お金で買う肥料（<strong>金肥</strong>）が普及し、商品作物の栽培も広がりました。',
    },
    {
      type: 'quiz',
      question: 'いわしを干した肥料を何という？',
      options: [
        { letter: 'A', text: '金肥', correct: false },
        { letter: 'B', text: '堆肥', correct: false },
        { letter: 'C', text: '油かす', correct: false },
        { letter: 'D', text: '干鰯（ほしか）', correct: true },
      ],
      explanation:
        '<strong>正解はD「干鰯（ほしか）」</strong>です。いわしを干した肥料で、金肥の代表的なものでした。',
    },
    {
      type: 'end',
      points: [
        '<strong>新田開発</strong>で耕地面積が大幅に増加',
        '<strong>備中ぐわ</strong>（深耕）、<strong>千歯こき</strong>（脱穀）など農具が改良',
        '<strong>干鰯</strong>など<strong>金肥</strong>の普及',
        '農業の発展が商工業の成長につながった',
      ],
    },
  ],
};

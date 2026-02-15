import type { HistoryChat } from '../../../../../../../history-chat/types';

export const transportationChat: HistoryChat = {
  id: 'transportation',
  icon: '🛤️',
  title: '五街道と水運',
  subtitle: '〜江戸時代〜 交通網の整備',
  characters: [
    {
      id: 'traveler',
      name: '旅人',
      emoji: '🚶',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
    },
    {
      id: 'innkeeper',
      name: '宿場の主人',
      emoji: '🏠',
      colorFrom: '#65a30d',
      colorTo: '#84cc16',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '幕府は江戸を起点とする<strong>五街道</strong>を整備し、全国の交通網を発達させました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'traveler',
      text: '東海道を歩いて京都へ向かうぞ。53の宿場があるそうだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'innkeeper',
      text: 'ようこそ。参勤交代の大名行列も通られますよ',
    },
    {
      type: 'narrator',
      text: '<strong>東海道</strong>は江戸と京都を結ぶ主要街道で、53の宿場が設けられました。',
    },
    {
      type: 'quiz',
      question: '江戸と京都を結び、53の宿場があった街道は？',
      options: [
        { letter: 'A', text: '中山道', correct: false },
        { letter: 'B', text: '日光街道', correct: false },
        { letter: 'C', text: '甲州街道', correct: false },
        { letter: 'D', text: '東海道', correct: true },
      ],
      explanation:
        '<strong>正解はD「東海道」</strong>です。「東海道五十三次」として広重の浮世絵にも描かれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'traveler',
      text: '五街道は他に何があるのだろう？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'innkeeper',
      text: '中山道、日光街道、奥州街道、甲州街道ですな',
    },
    {
      type: 'narrator',
      text: '海上では<strong>西廻り航路</strong>・東廻り航路が開かれ、大阪と全国を結びました。',
    },
    {
      type: 'quiz',
      question: '江戸を起点とする5つの主要街道を何という？',
      options: [
        { letter: 'A', text: '五街道', correct: true },
        { letter: 'B', text: '三街道', correct: false },
        { letter: 'C', text: '七街道', correct: false },
        { letter: 'D', text: '十街道', correct: false },
      ],
      explanation:
        '<strong>正解はA「五街道」</strong>です。東海道・中山道・日光街道・奥州街道・甲州街道の5つです。',
    },
    {
      type: 'end',
      points: [
        '<strong>五街道</strong>：東海道・中山道・日光街道・奥州街道・甲州街道',
        '<strong>東海道</strong>は江戸〜京都間、53の宿場',
        '街道沿いに<strong>宿場町</strong>が発達',
        '<strong>西廻り航路</strong>など海運も発達',
      ],
    },
  ],
};

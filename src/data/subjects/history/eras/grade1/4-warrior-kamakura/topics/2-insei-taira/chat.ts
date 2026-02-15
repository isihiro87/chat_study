import type { HistoryChat } from '../../../../../../../history-chat/types';

export const inseiTairaChat: HistoryChat = {
  id: 'insei-taira',
  icon: '👑',
  title: '院政と平氏の政治',
  subtitle: '〜12世紀〜 上皇の政治と平清盛',
  characters: [
    {
      id: 'kiyomori',
      name: '平清盛',
      emoji: '👑',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
    {
      id: 'yoshitomo',
      name: '源義朝',
      emoji: '⚔️',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '12世紀',
    },
    {
      type: 'narrator',
      text: '藤原氏の摂関政治が衰えると、退位した天皇（<strong>上皇</strong>）が<strong>院政</strong>を始めました。やがて武士の力が政治を左右するようになります。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshitomo',
      text: '朝廷内部の争いに武士が動員されるようになった。1156年の<strong>保元の乱</strong>では、源氏・平氏ともに朝廷の争いに巻き込まれた',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshitomo',
      text: '続く1159年の<strong>平治の乱</strong>で私は平清盛に敗れてしまった…。これにより平氏が武士の頂点に立ったのだ',
    },
    {
      type: 'quiz',
      question: '退位した天皇（上皇）が行った政治を何というか？',
      options: [
        { letter: 'A', text: '摂関政治', correct: false },
        { letter: 'B', text: '執権政治', correct: false },
        { letter: 'C', text: '院政', correct: true },
        { letter: 'D', text: '親政', correct: false },
      ],
      explanation: '<strong>正解はC「院政」</strong>です。退位した天皇（上皇）が院で政治を行うことを院政といいます。',
    },
    {
      type: 'narrator',
      text: '<strong>平清盛</strong>は武士として初めて<strong>太政大臣</strong>に就任し、一族で朝廷の要職を独占しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kiyomori',
      text: '私は武士として初めて<strong>太政大臣</strong>となった。「平氏にあらずんば人にあらず」とまで言われたものだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kiyomori',
      text: '宋との貿易（<strong>日宋貿易</strong>）で大きな利益を得て、大輪田泊（神戸）を整備した。平氏の繁栄の基盤だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshitomo',
      text: 'しかし平氏の横暴に不満が高まり、源頼朝や義経が挙兵する。1185年の<strong>壇ノ浦の戦い</strong>で平氏は滅亡した',
    },
    {
      type: 'quiz',
      question: '平清盛が就任した、武士として初の最高職は？',
      options: [
        { letter: 'A', text: '征夷大将軍', correct: false },
        { letter: 'B', text: '関白', correct: false },
        { letter: 'C', text: '執権', correct: false },
        { letter: 'D', text: '太政大臣', correct: true },
      ],
      explanation: '<strong>正解はD「太政大臣」</strong>です。平清盛は武士として初めて太政大臣に就任し、平氏一族で朝廷の要職を独占しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>院政</strong>：退位した天皇（<strong>上皇</strong>）が行う政治',
        '<strong>保元の乱</strong>・<strong>平治の乱</strong>：武士が政治の実権を握るきっかけ',
        '<strong>平清盛</strong>：武士初の<strong>太政大臣</strong>、<strong>日宋貿易</strong>で繁栄',
        '1185年 <strong>壇ノ浦の戦い</strong>で平氏滅亡',
      ],
    },
  ],
};

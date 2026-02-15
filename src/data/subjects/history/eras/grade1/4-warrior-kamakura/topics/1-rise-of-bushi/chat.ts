import type { HistoryChat } from '../../../../../../../history-chat/types';

export const riseOfBushiChat: HistoryChat = {
  id: 'rise-of-bushi',
  icon: '⚔️',
  title: '武士の成長',
  subtitle: '〜10世紀〜 武士団の形成',
  characters: [
    {
      id: 'bushi',
      name: '武士',
      emoji: '⚔️',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
    {
      id: 'ryoshu',
      name: '領主',
      emoji: '🏠',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
  ],
  content: [
    {
      type: 'date',
      text: '10世紀ごろ',
    },
    {
      type: 'narrator',
      text: '地方では治安が乱れ、自分の土地を守るために武装する者が現れます。こうして<strong>武士</strong>が誕生しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'bushi',
      text: '荘園や公領を守るために武装した我々は<strong>武士</strong>と呼ばれるようになった。血縁や主従関係で結ばれた集団を<strong>武士団</strong>という',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'bushi',
      text: '武士団の中心となるのが<strong>惣領</strong>だ。一族をまとめ、土地を守る役割を担っている',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ryoshu',
      text: '特に力を持った武士団が<strong>源氏</strong>と<strong>平氏</strong>です。朝廷にも仕え、武力で反乱を鎮めました',
    },
    {
      type: 'quiz',
      question: '武士が血縁や主従関係で結んだ集団を何というか？',
      options: [
        { letter: 'A', text: '武士団', correct: true },
        { letter: 'B', text: '御家人', correct: false },
        { letter: 'C', text: '守護', correct: false },
        { letter: 'D', text: '地頭', correct: false },
      ],
      explanation: '<strong>正解はA「武士団」</strong>です。武士たちは血縁関係や主従関係で結ばれた武士団を形成し、惣領を中心にまとまりました。',
    },
    {
      type: 'narrator',
      text: '東北地方では<strong>前九年合戦</strong>・<strong>後三年合戦</strong>が起こり、源氏が東国武士の信頼を得ました。その後、<strong>奥州藤原氏</strong>が東北で栄えます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ryoshu',
      text: '奥州藤原氏は東北で約100年にわたり独自の文化を築きました。<strong>中尊寺金色堂</strong>は黄金に輝く見事な建築です',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'bushi',
      text: '貴族の<strong>荘園</strong>や国が管理する<strong>公領</strong>を武士が管理するようになり、武士の力はますます強くなっていった',
    },
    {
      type: 'quiz',
      question: '奥州藤原氏が建てた黄金の建築物は？',
      options: [
        { letter: 'A', text: '平等院鳳凰堂', correct: false },
        { letter: 'B', text: '金閣', correct: false },
        { letter: 'C', text: '中尊寺金色堂', correct: true },
        { letter: 'D', text: '東大寺大仏殿', correct: false },
      ],
      explanation: '<strong>正解はC「中尊寺金色堂」</strong>です。奥州藤原氏が平泉に建てた中尊寺金色堂は、金箔で覆われた豪華な仏堂です。',
    },
    {
      type: 'end',
      points: [
        '<strong>武士</strong>：土地を守るために武装した者。<strong>武士団</strong>を形成し、<strong>惣領</strong>が一族を統率',
        '<strong>源氏</strong>と<strong>平氏</strong>：有力な武士団として成長',
        '<strong>前九年合戦</strong>・<strong>後三年合戦</strong>：源氏が東国武士の信頼を獲得',
        '<strong>奥州藤原氏</strong>：東北で栄え、<strong>中尊寺金色堂</strong>を建立',
      ],
    },
  ],
};

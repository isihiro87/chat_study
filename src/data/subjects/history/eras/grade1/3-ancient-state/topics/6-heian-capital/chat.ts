import type { HistoryChat } from '../../../../../../../history-chat/types';

export const heianCapitalChat: HistoryChat = {
  id: 'heian-capital',
  icon: '⛩️',
  title: '平安京と新しい仏教',
  subtitle: '〜794年〜 桓武天皇の遷都と最澄・空海',
  characters: [
    {
      id: 'kanmu',
      name: '桓武天皇',
      emoji: '👑',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'kukai',
      name: '空海',
      emoji: '🙏',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '794年',
    },
    {
      type: 'narrator',
      text: '<strong>桓武天皇</strong>は政治を立て直すため、<strong>794年</strong>に都を<strong>平安京</strong>（京都）に移しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kanmu',
      text: '奈良の寺院の政治介入が目に余る。新しい都<strong>平安京</strong>で政治を一新するぞ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kanmu',
      text: '東北の蝦夷を従わせるため、<strong>坂上田村麻呂</strong>を<strong>征夷大将軍</strong>に任命した。蝦夷の指導者<strong>アテルイ</strong>を降伏させたぞ',
    },
    {
      type: 'quiz',
      question: '794年に遷都された都は？',
      options: [
        { letter: 'A', text: '平城京', correct: false },
        { letter: 'B', text: '藤原京', correct: false },
        { letter: 'C', text: '平安京', correct: true },
        { letter: 'D', text: '長岡京', correct: false },
      ],
      explanation: '<strong>正解はC「平安京」</strong>です。桓武天皇が794年に遷都し、以後約400年間都となりました。',
    },
    {
      type: 'narrator',
      text: '唐で学んだ<strong>最澄</strong>と<strong>空海</strong>が、新しい仏教を日本に伝えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'kukai',
      text: '私は唐で密教を学び、<strong>真言宗</strong>を開きました。高野山に金剛峯寺を建てています',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'kukai',
      text: '<strong>最澄</strong>は比叡山に延暦寺を建て<strong>天台宗</strong>を開きました。のちに<strong>菅原道真</strong>の進言で<strong>遣唐使</strong>は中止されましたね',
    },
    {
      type: 'quiz',
      question: '真言宗を開き、高野山に寺を建てた僧は？',
      options: [
        { letter: 'A', text: '最澄', correct: false },
        { letter: 'B', text: '鑑真', correct: false },
        { letter: 'C', text: '行基', correct: false },
        { letter: 'D', text: '空海', correct: true },
      ],
      explanation: '<strong>正解はD「空海」</strong>です。空海は唐で密教を学び、真言宗を開いて高野山に金剛峯寺を建てました。',
    },
    {
      type: 'end',
      points: [
        '<strong>794年</strong>：<strong>桓武天皇</strong>が<strong>平安京</strong>に遷都',
        '<strong>坂上田村麻呂</strong>：<strong>征夷大将軍</strong>として蝦夷の<strong>アテルイ</strong>を降伏させる',
        '<strong>最澄</strong>：<strong>天台宗</strong>（比叡山延暦寺）、<strong>空海</strong>：<strong>真言宗</strong>（高野山金剛峯寺）',
        '<strong>菅原道真</strong>の進言で<strong>遣唐使</strong>を中止',
      ],
    },
  ],
};

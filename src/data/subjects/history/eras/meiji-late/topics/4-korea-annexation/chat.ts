import type { HistoryChat } from '../../../../../../history-chat/types';

export const koreaAnnexationChat: HistoryChat = {
  id: 'korea-annexation',
  icon: '🌏',
  title: '韓国併合と辛亥革命',
  subtitle: '〜明治〜 東アジアの変動',
  characters: [
    {
      id: 'ito',
      name: '伊藤博文',
      emoji: '🎩',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'sun',
      name: '孫文',
      emoji: '🇨🇳',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1906年〜1912年',
    },
    {
      type: 'narrator',
      text: '日露戦争に勝利した日本は、アジアでの影響力をさらに強めていきました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ito',
      text: '韓国統監府を設置し、私が初代統監として韓国を監督する',
    },
    {
      type: 'narrator',
      text: '1906年、ソウルに<strong>韓国統監府</strong>を設置。<strong>伊藤博文</strong>が初代統監になりました。',
    },
    {
      type: 'narrator',
      text: '1910年、日本は<strong>韓国併合</strong>を断行。<strong>朝鮮総督府</strong>を置いて植民地として支配しました。',
    },
    {
      type: 'quiz',
      question: '1910年に日本が韓国を植民地にしたことを何という？',
      options: [
        { letter: 'A', text: '韓国併合', correct: true },
        { letter: 'B', text: '琉球処分', correct: false },
        { letter: 'C', text: '版籍奉還', correct: false },
        { letter: 'D', text: '廃藩置県', correct: false },
      ],
      explanation:
        '<strong>正解はA「韓国併合」</strong>です。朝鮮総督府を置いて植民地として支配しました。',
    },
    {
      type: 'narrator',
      text: '満州では<strong>南満州鉄道（満鉄）</strong>を設立し、大陸への影響力を拡大しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sun',
      text: '民族・民権・民生の三民主義で、清を倒して新しい国を作る！',
    },
    {
      type: 'narrator',
      text: '<strong>孫文</strong>は<strong>三民主義</strong>を掲げ、1911年に<strong>辛亥革命</strong>を起こしました。清は滅亡し、<strong>中華民国</strong>が建国されました。',
    },
    {
      type: 'quiz',
      question: '1911年に清を倒した中国の革命は？',
      options: [
        { letter: 'A', text: 'フランス革命', correct: false },
        { letter: 'B', text: '辛亥革命', correct: true },
        { letter: 'C', text: '名誉革命', correct: false },
        { letter: 'D', text: 'ロシア革命', correct: false },
      ],
      explanation:
        '<strong>正解はB「辛亥革命」</strong>です。アジア初の共和国である中華民国が建国されました。',
    },
    {
      type: 'end',
      points: [
        '<strong>韓国統監府</strong>（1906年）：伊藤博文が初代統監',
        '<strong>韓国併合</strong>（1910年）：朝鮮総督府を設置',
        '<strong>南満州鉄道</strong>（満鉄）で満州に進出',
        '<strong>辛亥革命</strong>（1911年）で清滅亡、<strong>中華民国</strong>建国',
      ],
    },
  ],
};

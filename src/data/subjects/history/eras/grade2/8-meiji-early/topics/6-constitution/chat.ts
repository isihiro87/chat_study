import type { HistoryChat } from '../../../../../../../history-chat/types';

export const constitutionChat: HistoryChat = {
  id: 'constitution',
  icon: '📜',
  title: '大日本帝国憲法と議会',
  subtitle: '〜明治〜 立憲国家への歩み',
  characters: [
    {
      id: 'ito',
      name: '伊藤博文',
      emoji: '🎩',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'emperor',
      name: '明治天皇',
      emoji: '👑',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1885年〜1890年',
    },
    {
      type: 'narrator',
      text: '国会開設の約束から10年。日本は憲法を持つ<strong>立憲国家</strong>へと歩みを進めます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ito',
      text: 'ドイツの憲法を学んできた。強い皇帝の権力を持つ仕組みが日本に合っている',
    },
    {
      type: 'narrator',
      text: '<strong>伊藤博文</strong>はドイツで憲法を調査。1885年には<strong>内閣制度</strong>が発足し、伊藤が<strong>初代内閣総理大臣</strong>になりました。',
    },
    {
      type: 'quiz',
      question: '初代内閣総理大臣となった人物は？',
      options: [
        { letter: 'A', text: '伊藤博文', correct: true },
        { letter: 'B', text: '大隈重信', correct: false },
        { letter: 'C', text: '板垣退助', correct: false },
        { letter: 'D', text: '岩倉具視', correct: false },
      ],
      explanation:
        '<strong>正解はA「伊藤博文」</strong>です。1885年に内閣制度が発足し、伊藤が初代総理大臣になりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'emperor',
      text: 'この憲法を国民に授ける',
    },
    {
      type: 'narrator',
      text: '1889年2月11日、<strong>大日本帝国憲法</strong>が発布されました。主権は<strong>天皇</strong>にあり、国民は「<strong>臣民</strong>」と呼ばれました。',
    },
    {
      type: 'narrator',
      text: '<strong>帝国議会</strong>は貴族院と衆議院の二院制。1890年の最初の選挙では、選挙権は人口の約<strong>1.1%</strong>だけでした。',
    },
    {
      type: 'quiz',
      question: '大日本帝国憲法で、国の主権者とされたのは？',
      options: [
        { letter: 'A', text: '国民', correct: false },
        { letter: 'B', text: '天皇', correct: true },
        { letter: 'C', text: '内閣総理大臣', correct: false },
        { letter: 'D', text: '帝国議会', correct: false },
      ],
      explanation:
        '<strong>正解はB「天皇」</strong>です。天皇は国の元首で神聖な存在とされました（天皇主権）。',
    },
    {
      type: 'end',
      points: [
        '<strong>伊藤博文</strong>がドイツで憲法を調査、<strong>初代内閣総理大臣</strong>に',
        '<strong>大日本帝国憲法</strong>発布（1889年）：<strong>天皇主権</strong>',
        '<strong>帝国議会</strong>：貴族院と衆議院の二院制',
        '最初の選挙権は人口の約1.1%（制限選挙）',
      ],
    },
  ],
};

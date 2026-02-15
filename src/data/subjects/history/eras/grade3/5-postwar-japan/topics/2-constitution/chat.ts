import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postwarConstitutionChat: HistoryChat = {
  id: 'postwar-constitution',
  icon: '📜',
  title: '日本国憲法と民主化',
  subtitle: '〜戦後〜 三大原則と社会改革',
  characters: [
    {
      id: 'citizen',
      name: '国民',
      emoji: '🧑',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'politician',
      name: '政治家',
      emoji: '👨‍💼',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1946年〜1947年',
    },
    {
      type: 'narrator',
      text: 'GHQの指導のもと、新しい憲法が作られることになりました。1946年11月3日に<strong>日本国憲法</strong>が公布されます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'politician',
      text: '新しい憲法には三つの大きな原則が定められたぞ。国民主権、基本的人権の尊重、そして平和主義だ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      text: '国民主権ということは、政治の主役は私たち国民ということですね！',
    },
    {
      type: 'narrator',
      text: '日本国憲法の三大原則は<strong>国民主権</strong>・<strong>基本的人権の尊重</strong>・<strong>平和主義</strong>です。天皇は「日本国および日本国民統合の<strong>象徴</strong>」と定められました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'politician',
      text: '戦争を永久に放棄する第9条も盛り込まれた。二度と戦争を起こさないという決意だ',
    },
    {
      type: 'quiz',
      question: '日本国憲法の三大原則に含まれないものはどれ？',
      options: [
        { letter: 'A', text: '国民主権', correct: false },
        { letter: 'B', text: '平和主義', correct: false },
        { letter: 'C', text: '富国強兵', correct: true },
        { letter: 'D', text: '基本的人権の尊重', correct: false },
      ],
      explanation:
        '<strong>正解はC「富国強兵」</strong>です。富国強兵は明治時代のスローガンで、日本国憲法の三大原則は国民主権・基本的人権の尊重・平和主義です。',
    },
    {
      type: 'narrator',
      text: '憲法の制定とともに、社会を変えるための改革も進められました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      text: '農地改革で自分の田んぼを持てるようになりました。今まで地主に高い小作料を払っていたのが嘘のようです',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'politician',
      text: '<strong>農地改革</strong>で自作農が増えた。さらに<strong>財閥解体</strong>で経済の民主化も進めている。<strong>労働組合法</strong>や<strong>教育基本法</strong>も制定されたぞ',
    },
    {
      type: 'quiz',
      question: '政府が地主の土地を買い上げ小作人に安く売った改革は？',
      options: [
        { letter: 'A', text: '財閥解体', correct: false },
        { letter: 'B', text: '農地改革', correct: true },
        { letter: 'C', text: '地租改正', correct: false },
        { letter: 'D', text: '殖産興業', correct: false },
      ],
      explanation:
        '<strong>正解はB「農地改革」</strong>です。政府が地主の農地を買い上げ、小作人に安く売ることで多くの自作農が生まれました。',
    },
    {
      type: 'end',
      points: [
        '<strong>日本国憲法</strong>：1946年公布、1947年施行',
        '三大原則：<strong>国民主権</strong>・<strong>基本的人権の尊重</strong>・<strong>平和主義</strong>',
        '天皇は「<strong>象徴</strong>」と規定',
        '<strong>農地改革</strong>・<strong>財閥解体</strong>・<strong>教育基本法</strong>などの民主化改革',
      ],
    },
  ],
};

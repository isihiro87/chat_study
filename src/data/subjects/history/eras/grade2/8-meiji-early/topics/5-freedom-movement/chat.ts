import type { HistoryChat } from '../../../../../../../history-chat/types';

export const freedomMovementChat: HistoryChat = {
  id: 'freedom-movement',
  icon: '✊',
  title: '自由民権運動',
  subtitle: '〜明治〜 国民の権利を求めて',
  characters: [
    {
      id: 'itagaki',
      name: '板垣退助',
      emoji: '✊',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'saigo',
      name: '西郷隆盛',
      emoji: '⚔️',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1874年',
    },
    {
      type: 'narrator',
      text: '政府が一方的に改革を進める中、国民の間から「政治に参加したい！」という声が高まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'itagaki',
      text: '藩閥政治はおかしい！国民が選んだ議員による国会を開くべきだ！',
    },
    {
      type: 'narrator',
      text: '1874年、<strong>板垣退助</strong>らは<strong>民撰議院設立の建白書</strong>を提出。<strong>自由民権運動</strong>が始まりました。',
    },
    {
      type: 'quiz',
      question: '1874年に板垣退助らが提出した、国会開設を求める文書は？',
      options: [
        { letter: 'A', text: '民撰議院設立の建白書', correct: true },
        { letter: 'B', text: '五箇条の御誓文', correct: false },
        { letter: 'C', text: '大日本帝国憲法', correct: false },
        { letter: 'D', text: '教育勅語', correct: false },
      ],
      explanation:
        '<strong>正解はA「民撰議院設立の建白書」</strong>です。国会開設を求める自由民権運動の始まりとなりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'saigo',
      text: '政府のやり方には我慢できない。武力で立ち上がるぞ',
    },
    {
      type: 'narrator',
      text: '1877年、<strong>西郷隆盛</strong>を中心に<strong>西南戦争</strong>が起きましたが、徴兵制の政府軍が勝利しました。',
    },
    {
      type: 'narrator',
      text: '武力による抵抗は終わり、言論による運動が中心になりました。政府は10年後の国会開設を約束しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'itagaki',
      text: '国会に備えて政党を作ろう。私は自由党を結成する',
    },
    {
      type: 'narrator',
      text: '板垣退助の<strong>自由党</strong>、大隈重信の<strong>立憲改進党</strong>など、日本初の政党が誕生しました。',
    },
    {
      type: 'quiz',
      question: '1881年に板垣退助を党首として結成された政党は？',
      options: [
        { letter: 'A', text: '立憲改進党', correct: false },
        { letter: 'B', text: '自由党', correct: true },
        { letter: 'C', text: '立憲政友会', correct: false },
        { letter: 'D', text: '国民党', correct: false },
      ],
      explanation:
        '<strong>正解はB「自由党」</strong>です。フランス流の急進的な自由主義を主張しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>板垣退助</strong>が<strong>民撰議院設立の建白書</strong>を提出（1874年）',
        '<strong>西南戦争</strong>（1877年）で武力抵抗が終結',
        '国会開設の約束（1881年）',
        '<strong>自由党</strong>（板垣）、<strong>立憲改進党</strong>（大隈）の誕生',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../history-chat/types';

export const shotokuAsukaChat: HistoryChat = {
  id: 'shotoku-asuka',
  icon: '🏯',
  title: '聖徳太子と飛鳥文化',
  subtitle: '〜6世紀末〜 新しい政治の仕組みと仏教文化',
  characters: [
    {
      id: 'shotoku',
      name: '聖徳太子',
      emoji: '👑',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'soga',
      name: '蘇我馬子',
      emoji: '🏛️',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
  ],
  content: [
    {
      type: 'date',
      text: '593年〜',
    },
    {
      type: 'narrator',
      text: '<strong>推古天皇</strong>のもと、<strong>聖徳太子</strong>が<strong>摂政</strong>として政治を行いました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shotoku',
      text: '家柄ではなく才能や功績で役人を評価する<strong>冠位十二階</strong>の制度を作ったのだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shotoku',
      text: '役人の心構えを示す<strong>十七条の憲法</strong>も定めた。「和を以て貴しとなす」が大切だ',
    },
    {
      type: 'quiz',
      question: '才能や功績で地位を決める制度は？',
      options: [
        { letter: 'A', text: '冠位十二階', correct: true },
        { letter: 'B', text: '十七条の憲法', correct: false },
        { letter: 'C', text: '班田収授法', correct: false },
        { letter: 'D', text: '大宝律令', correct: false },
      ],
      explanation: '<strong>正解はA「冠位十二階」</strong>です。家柄にとらわれず、才能や功績に応じて地位を与える制度です。',
    },
    {
      type: 'narrator',
      text: '聖徳太子は<strong>遣隋使</strong>として<strong>小野妹子</strong>を隋に送り、対等な外交を目指しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'soga',
      text: '仏教を広めるために力を尽くしたぞ。太子とともに寺を建てたのだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shotoku',
      text: '日本最古の木造建築<strong>法隆寺</strong>を建てた。これが<strong>飛鳥文化</strong>を代表する寺だ',
    },
    {
      type: 'quiz',
      question: '聖徳太子が建立した飛鳥文化を代表する寺は？',
      options: [
        { letter: 'A', text: '東大寺', correct: false },
        { letter: 'B', text: '法隆寺', correct: true },
        { letter: 'C', text: '唐招提寺', correct: false },
        { letter: 'D', text: '平等院', correct: false },
      ],
      explanation: '<strong>正解はB「法隆寺」</strong>です。世界最古の木造建築として知られ、飛鳥文化を代表する寺院です。',
    },
    {
      type: 'end',
      points: [
        '<strong>冠位十二階</strong>：才能・功績で地位を決定',
        '<strong>十七条の憲法</strong>：役人の心構え、<strong>遣隋使</strong>（<strong>小野妹子</strong>）',
        '<strong>飛鳥文化</strong>：日本初の仏教文化、<strong>法隆寺</strong>',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../history-chat/types';

export const tempoReformChat: HistoryChat = {
  id: 'tempo-reform',
  icon: '⚖️',
  title: '天保の改革',
  subtitle: '〜1841年〜 幕府最後の改革',
  characters: [
    {
      id: 'tadakuni',
      name: '水野忠邦',
      emoji: '⚖️',
      colorFrom: '#4338ca',
      colorTo: '#6366f1',
    },
    {
      id: 'townsman',
      name: '町人',
      emoji: '👤',
      colorFrom: '#64748b',
      colorTo: '#94a3b8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '天保12年（1841年）',
    },
    {
      type: 'narrator',
      text: '老中<strong>水野忠邦</strong>は、幕府最後の大改革に乗り出しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tadakuni',
      text: '幕府の威信を取り戻す。厳しく改革を断行する',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tadakuni',
      text: '倹約令を出す。贅沢は一切禁止じゃ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'townsman',
      text: '株仲間も解散ですか…商売がしにくくなります',
    },
    {
      type: 'narrator',
      text: '水野は<strong>株仲間の解散</strong>を命じました。物価を下げるためでしたが、かえって流通が混乱しました。',
    },
    {
      type: 'quiz',
      question: '天保の改革を行った老中は？',
      options: [
        { letter: 'A', text: '松平定信', correct: false },
        { letter: 'B', text: '田沼意次', correct: false },
        { letter: 'C', text: '水野忠邦', correct: true },
        { letter: 'D', text: '徳川吉宗', correct: false },
      ],
      explanation:
        '<strong>正解はC「水野忠邦」</strong>です。江戸幕府最後の幕政改革を行いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tadakuni',
      text: '江戸に流れ込んだ農民は故郷に帰れ。人返し令じゃ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'townsman',
      text: 'そんな…もう帰る場所もないのに…',
    },
    {
      type: 'narrator',
      text: '<strong>人返し令</strong>で農民を農村に帰そうとしましたが、反発を招きました。わずか2年で水野は失脚します。',
    },
    {
      type: 'quiz',
      question: '天保の改革で、江戸から農民を帰郷させようとした命令は？',
      options: [
        { letter: 'A', text: '倹約令', correct: false },
        { letter: 'B', text: '人返し令', correct: true },
        { letter: 'C', text: '異国船打払令', correct: false },
        { letter: 'D', text: '上知令', correct: false },
      ],
      explanation:
        '<strong>正解はB「人返し令」</strong>です。江戸に流入した農民を農村に帰す命令でしたが、反発を招きました。',
    },
    {
      type: 'end',
      points: [
        '<strong>天保の改革</strong>は老中水野忠邦が行った幕府最後の改革',
        '<strong>株仲間の解散</strong>を命じたが、流通が混乱',
        '<strong>人返し令</strong>で農民を農村に帰そうとした',
        '厳しすぎる政策で2年で失脚した',
      ],
    },
  ],
};

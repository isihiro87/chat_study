import type { HistoryChat } from '../../../../../../../history-chat/types';

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
      text: '内外の危機的状況を乗り切るため、老中・<strong>水野忠邦</strong>が改革を開始。しかし、その内容はあまりに厳しかった。',
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
      text: '倹約令を出す。芝居や祭りまで制限じゃ',
    },
    {
      type: 'narrator',
      text: '<strong>倹約令と風俗統制</strong>で、芝居や祭りまで制限する徹底した質素倹約を強制しました。',
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
        '<strong>正解はC「水野忠邦」</strong>です。江戸幕府最後の幕政改革を行いましたが、厳しすぎて失敗しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'townsman',
      text: '株仲間も解散ですか…商売がしにくくなります',
    },
    {
      type: 'narrator',
      text: '<strong>株仲間の解散</strong>を命じました。物価高の原因だとして解散させましたが、逆に経済が混乱してしまいました。',
    },
    {
      type: 'quiz',
      question: '天保の改革で、物価を下げるために解散させられたものは？',
      options: [
        { letter: 'A', text: '藩校', correct: false },
        { letter: 'B', text: '寺子屋', correct: false },
        { letter: 'C', text: '問屋', correct: false },
        { letter: 'D', text: '株仲間', correct: true },
      ],
      explanation:
        '<strong>正解はD「株仲間」</strong>です。物価高の原因として解散させましたが、かえって流通が混乱しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tadakuni',
      text: '江戸・大坂周辺の土地を幕府の直轄地にする',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'townsman',
      text: '大名たちが猛反対しております！',
    },
    {
      type: 'narrator',
      text: '<strong>上知令</strong>で江戸・大坂周辺の大名の領地を幕府の直轄地にしようとしましたが、大名たちの猛反対にあって失敗しました。',
    },
    {
      type: 'quiz',
      question: '天保の改革で、大名の領地を幕府直轄にしようとして失敗した法令は？',
      options: [
        { letter: 'A', text: '株仲間解散令', correct: false },
        { letter: 'B', text: '上知令', correct: true },
        { letter: 'C', text: '倹約令', correct: false },
        { letter: 'D', text: '人返し令', correct: false },
      ],
      explanation:
        '<strong>正解はB「上知令」</strong>です。大名たちの猛反対にあい、水野忠邦は失脚しました。',
    },
    {
      type: 'narrator',
      text: 'この改革の失敗で幕府の権威は大きく低下。一方、薩摩藩や長州藩など、独自の改革で力をつけた<strong>雄藩</strong>が成長し、次の時代の主役となっていきます。',
    },
    {
      type: 'end',
      points: [
        '<strong>天保の改革</strong>は老中水野忠邦が行った幕府最後の改革',
        '<strong>倹約令</strong>で芝居や祭りまで制限',
        '<strong>株仲間の解散</strong>で経済が混乱',
        '<strong>上知令</strong>は大名の反対で失敗、水野は失脚',
        '薩摩・長州など<strong>雄藩</strong>が力をつけた',
      ],
    },
  ],
};

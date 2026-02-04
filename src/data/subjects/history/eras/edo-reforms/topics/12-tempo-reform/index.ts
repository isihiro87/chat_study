import type { Topic } from '../../../../../../types';

export const tempoReform: Topic = {
  id: 'tempo-reform',
  eraId: 'edo-reforms',
  name: '天保の改革',
  subtitle: '水野忠邦による最後の幕政改革',
  icon: '⚖️',
  order: 12,
  content: {
    explanation: {
      sections: [
        {
          title: '天保の改革とは',
          content: '老中水野忠邦が行った江戸幕府最後の幕政改革です。倹約令、株仲間の解散、人返し令（農村への帰還命令）などを実施しましたが、厳しすぎる政策は失敗し、わずか2年で失脚しました。',
          keyPoints: [
            '老中水野忠邦が実施',
            '株仲間の解散',
            '人返し令（江戸から農村へ帰還）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '水野忠邦',
        back: '天保の改革を行った老中は？',
        explanation: '江戸幕府最後の幕政改革を行ったが、厳しすぎて失敗した。',
      },
      {
        id: 'fc2',
        front: '株仲間の解散',
        back: '物価を下げるため同業組合を解散させた政策は？',
        explanation: '株仲間を物価高の原因として解散させたが、かえって流通が混乱した。',
      },
      {
        id: 'fc3',
        front: '人返し令',
        back: '江戸に流入した農民を農村に帰す命令は？',
        explanation: '農村の復興を目指したが、効果は限定的だった。',
      },
      {
        id: 'fc4',
        front: '上知令',
        back: '江戸・大阪周辺の土地を幕府領にする計画（撤回）は？',
        explanation: '大名たちの猛反対にあい、水野忠邦は失脚した。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '天保の改革を行った老中は？',
          options: ['松平定信', '田沼意次', '水野忠邦', '徳川吉宗'],
          correctIndex: 2,
          explanation:
            '水野忠邦は江戸幕府最後の幕政改革を行いましたが、厳しすぎて失敗しました。',
        },
        {
          id: 'q2',
          question: '天保の改革で、物価を下げるために解散させられたものは？',
          options: ['藩校', '株仲間', '寺子屋', '問屋'],
          correctIndex: 1,
          explanation:
            '株仲間を物価高の原因として解散させましたが、かえって流通が混乱しました。',
        },
        {
          id: 'q3',
          question: '天保の改革で、大名の領地を幕府直轄にしようとして失敗した法令は？',
          options: ['倹約令', '株仲間解散令', '上知令', '人返し令'],
          correctIndex: 2,
          explanation:
            '上知令は大名たちの猛反対にあい、水野忠邦は失脚しました。',
        },
      ],
    },
    chatId: 'tempo-reform',
  },
};

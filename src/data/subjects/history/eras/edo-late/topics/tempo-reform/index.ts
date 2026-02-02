import type { Topic } from '../../../../../../types';

export const tempoReform: Topic = {
  id: 'tempo-reform',
  eraId: 'edo-late',
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
      { id: 'fc1', front: '水野忠邦', back: '天保の改革を行った老中' },
      { id: 'fc2', front: '株仲間の解散', back: '物価を下げるため同業組合を解散させた政策' },
      { id: 'fc3', front: '人返し令', back: '江戸に流入した農民を農村に帰す命令' },
      { id: 'fc4', front: '上知令', back: '江戸・大阪周辺の土地を幕府領にする計画（撤回）' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '天保の改革を行った老中は？',
          options: ['松平定信', '田沼意次', '水野忠邦', '徳川吉宗'],
          correctIndex: 2,
          explanation: '水野忠邦は厳しい改革を行いましたが、反発を受けて2年で失脚しました。',
        },
      ],
    },
    chatId: 'tempo-reform',
  },
};

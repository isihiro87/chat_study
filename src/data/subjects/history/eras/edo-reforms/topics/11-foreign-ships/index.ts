import type { Topic } from '../../../../../../types';

export const foreignShips: Topic = {
  id: 'foreign-ships',
  eraId: 'edo-reforms',
  name: '外国船の接近',
  subtitle: '開国への圧力と幕府の対応',
  icon: '🚢',
  order: 11,
  content: {
    explanation: {
      sections: [
        {
          title: '外国船の接近',
          content: '18世紀末から外国船が日本近海に現れるようになりました。ロシア船の来航、フェートン号事件、モリソン号事件などが起こり、幕府は異国船打払令を出して対応しました。やがてアヘン戦争で清が敗れたことを知り、幕府は対応を軟化させました。',
          keyPoints: [
            'ロシア・イギリス・アメリカ船の接近',
            '異国船打払令（1825年）',
            'アヘン戦争の衝撃',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '異国船打払令',
        back: '外国船を追い払う命令（1825年）',
        explanation: '外国船を見つけ次第砲撃して追い払う強硬な政策。',
      },
      {
        id: 'fc2',
        front: 'フェートン号事件',
        back: 'イギリス軍艦が長崎に侵入した事件',
        explanation: '1808年にイギリス軍艦が長崎に侵入し、オランダ商館員を人質にした。',
      },
      {
        id: 'fc3',
        front: 'アヘン戦争',
        back: '清がイギリスに敗れた戦争（1840-42年）',
        explanation: '清の敗北を知った幕府は、異国船打払令を緩和した。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1825年に幕府が出した、外国船を追い払う命令は？',
          options: ['鎖国令', '異国船打払令', '禁教令', '海防令'],
          correctIndex: 1,
          explanation:
            '異国船打払令は外国船を見つけ次第砲撃して追い払う強硬な政策でした。',
        },
        {
          id: 'q2',
          question: '異国船打払令を批判した蘭学者が処罰された事件は？',
          options: ['安政の大獄', '蛮社の獄', '禁門の変', '桜田門外の変'],
          correctIndex: 1,
          explanation:
            '蛮社の獄では渡辺崋山や高野長英らが処罰され、幕府の厳しい姿勢が示されました。',
        },
        {
          id: 'q3',
          question: '1837年に大阪で乱を起こした元幕府役人は？',
          options: ['渡辺崋山', '高野長英', '大塩平八郎', '間宮林蔵'],
          correctIndex: 2,
          explanation:
            '大塩平八郎はききんに苦しむ民を救うため乱を起こしました。元幕府役人の反乱は大きな衝撃でした。',
        },
      ],
    },
    chatId: 'foreign-ships',
  },
};

import type { Topic } from '../../../../../../../types';

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
      { id: 'fc1', front: '異国船打払令', back: '1825年に幕府が出した外国船を砲撃して追い払う命令は？', difficulty: 'basic' },
      { id: 'fc2', front: 'フェートン号事件', back: '1808年にイギリス軍艦が長崎に侵入した事件は？', difficulty: 'standard' },
      { id: 'fc3', front: 'アヘン戦争', back: '1840年に清がイギリスに敗れ、幕府に衝撃を与えた戦争は？', difficulty: 'standard' },
      { id: 'fc4', front: '蛮社の獄', back: '異国船打払令を批判した渡辺崋山・高野長英らが処罰された事件は？', difficulty: 'standard' },
      { id: 'fc5', front: '大塩平八郎', back: '1837年にききんに苦しむ民を救うため大阪で乱を起こした元幕府役人は？', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1825年に幕府が出した、外国船を追い払う命令は？',
          options: ['海防令', '禁教令', '鎖国令', '異国船打払令'],
          correctIndex: 3,
          explanation:
            '異国船打払令は外国船を見つけ次第砲撃して追い払う強硬な政策でした。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '異国船打払令を批判した蘭学者が処罰された事件は？',
          options: ['安政の大獄', '蛮社の獄', '禁門の変', '桜田門外の変'],
          correctIndex: 1,
          explanation:
            '蛮社の獄では渡辺崋山や高野長英らが処罰され、幕府の厳しい姿勢が示されました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '1837年に大阪で乱を起こした元幕府役人は？',
          options: ['渡辺崋山', '高野長英', '大塩平八郎', '間宮林蔵'],
          correctIndex: 2,
          explanation:
            '大塩平八郎はききんに苦しむ民を救うため乱を起こしました。元幕府役人の反乱は大きな衝撃でした。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'foreign-ships',
  },
};

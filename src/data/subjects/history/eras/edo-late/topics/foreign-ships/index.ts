import type { Topic } from '../../../../../../types';

export const foreignShips: Topic = {
  id: 'foreign-ships',
  eraId: 'edo-late',
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
      { id: 'fc1', front: '異国船打払令', back: '外国船を追い払う命令（1825年）' },
      { id: 'fc2', front: 'フェートン号事件', back: 'イギリス軍艦が長崎に侵入した事件' },
      { id: 'fc3', front: 'アヘン戦争', back: '清がイギリスに敗れた戦争（1840-42年）' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1825年に幕府が出した、外国船を追い払う命令は？',
          options: ['鎖国令', '異国船打払令', '禁中並公家諸法度', '武家諸法度'],
          correctIndex: 1,
          explanation: '異国船打払令は外国船を見つけ次第追い払うという強硬な政策でした。',
        },
      ],
    },
    chatId: 'foreign-ships',
  },
};

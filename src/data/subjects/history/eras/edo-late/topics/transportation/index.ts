import type { Topic } from '../../../../../../types';

export const transportation: Topic = {
  id: 'transportation',
  eraId: 'edo-late',
  name: '五街道と水運',
  subtitle: '交通網の整備と物流の発達',
  icon: '🛤️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '五街道の整備',
          content: '幕府は江戸を起点とする東海道・中山道・日光街道・奥州街道・甲州街道の五街道を整備しました。街道沿いには宿場町が発達し、参勤交代や物資の輸送に利用されました。',
          keyPoints: [
            '五街道：東海道・中山道・日光街道・奥州街道・甲州街道',
            '宿場町の発達',
            '参勤交代による人の移動',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '五街道', back: '江戸を起点とする5つの主要街道' },
      { id: 'fc2', front: '東海道', back: '江戸と京都を結ぶ街道。53の宿場' },
      { id: 'fc3', front: '西廻り航路', back: '日本海側から下関を経て大阪へ至る航路' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '江戸と京都を結ぶ街道で、53の宿場があったのは？',
          options: ['中山道', '東海道', '日光街道', '甲州街道'],
          correctIndex: 1,
          explanation: '東海道は江戸〜京都間を結び、「東海道五十三次」として知られます。',
        },
      ],
    },
    chatId: 'transportation',
  },
};

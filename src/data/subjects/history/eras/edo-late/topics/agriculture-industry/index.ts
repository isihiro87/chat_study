import type { Topic } from '../../../../../../types';

export const agricultureIndustry: Topic = {
  id: 'agriculture-industry',
  eraId: 'edo-late',
  name: '新田開発と産業の発展',
  subtitle: '農業技術の進歩と商工業の成長',
  icon: '🌾',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '農業の発展',
          content: '江戸時代には新田開発が盛んに行われ、耕地面積が大幅に増加しました。備中ぐわや千歯こきなどの農具の改良、干鰯などの金肥の使用により、農業生産力が飛躍的に向上しました。',
          keyPoints: [
            '新田開発で耕地面積が倍増',
            '備中ぐわ・千歯こきなど農具の改良',
            '干鰯・油かすなどの金肥の普及',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '備中ぐわ', back: '深く耕すための改良された鍬' },
      { id: 'fc2', front: '千歯こき', back: '稲の脱穀を効率化した農具' },
      { id: 'fc3', front: '干鰯（ほしか）', back: 'いわしを干した肥料（金肥）' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '江戸時代に稲の脱穀を効率化した農具は？',
          options: ['備中ぐわ', '千歯こき', '唐箕', '水車'],
          correctIndex: 1,
          explanation: '千歯こきは、歯の間に稲穂を通して脱穀する道具です。',
        },
      ],
    },
    chatId: 'agriculture-industry',
  },
};

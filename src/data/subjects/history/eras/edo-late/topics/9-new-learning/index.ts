import type { Topic } from '../../../../../../types';

export const newLearning: Topic = {
  id: 'new-learning',
  eraId: 'edo-late',
  name: '国学と蘭学',
  subtitle: '新しい学問の発展',
  icon: '🔬',
  order: 9,
  content: {
    explanation: {
      sections: [
        {
          title: '国学と蘭学',
          content: '江戸時代後期、日本独自の学問が発展しました。国学は日本の古典を研究し、本居宣長が「古事記伝」を著しました。蘭学はオランダ語を通じて西洋の学問を学ぶもので、杉田玄白らが「解体新書」を翻訳しました。',
          keyPoints: [
            '国学：本居宣長「古事記伝」',
            '蘭学：杉田玄白「解体新書」',
            '伊能忠敬の日本地図',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '本居宣長', back: '国学者。「古事記伝」を著した' },
      { id: 'fc2', front: '杉田玄白', back: '蘭学者。「解体新書」を翻訳' },
      { id: 'fc3', front: '伊能忠敬', back: '日本全国を測量し、精密な日本地図を作成' },
      { id: 'fc4', front: '平賀源内', back: 'エレキテルを復元した蘭学者' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '「古事記伝」を完成させた国学者は？',
          options: ['本居宣長', '杉田玄白', '伊能忠敬', '平賀源内'],
          correctIndex: 0,
          explanation:
            '本居宣長は35年をかけて古事記を研究し、国学を大成しました。',
        },
        {
          id: 'q2',
          question: '杉田玄白らが翻訳した医学書は？',
          options: ['古事記伝', '解体新書', '蘭学事始', '農学全書'],
          correctIndex: 1,
          explanation:
            '解体新書はオランダ語の解剖書を翻訳したもので、西洋医学を日本に紹介しました。',
        },
        {
          id: 'q3',
          question: '日本全国を測量して精密な日本地図を作ったのは？',
          options: ['本居宣長', '杉田玄白', '伊能忠敬', '間宮林蔵'],
          correctIndex: 2,
          explanation:
            '伊能忠敬は50歳から測量を学び、17年かけて日本全国を測量しました。',
        },
        {
          id: 'q4',
          question: '庶民の子が読み書きを学んだ教育施設は？',
          options: ['藩校', '寺子屋', '私塾', '昌平坂学問所'],
          correctIndex: 1,
          explanation:
            '寺子屋では庶民の子が「読み・書き・そろばん」を学びました。藩校は武士の子が通う学校です。',
        },
      ],
    },
    chatId: 'new-learning',
  },
};

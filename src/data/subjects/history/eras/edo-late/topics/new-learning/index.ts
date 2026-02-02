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
          question: '「解体新書」を翻訳した蘭学者は？',
          options: ['本居宣長', '杉田玄白', '伊能忠敬', '平賀源内'],
          correctIndex: 1,
          explanation: '杉田玄白は前野良沢らとオランダの解剖書を翻訳し「解体新書」として出版しました。',
        },
      ],
    },
    chatId: 'new-learning',
  },
};

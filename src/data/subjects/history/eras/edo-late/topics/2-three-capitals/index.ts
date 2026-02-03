import type { Topic } from '../../../../../../types';

export const threeCapitals: Topic = {
  id: 'three-capitals',
  eraId: 'edo-late',
  name: '三都の繁栄',
  subtitle: '江戸・大阪・京都の発展',
  icon: '🏙️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '三都とは',
          content: '江戸時代には江戸・大阪・京都の三つの都市が特に発展し、「三都」と呼ばれました。江戸は「将軍のお膝元」として政治の中心、大阪は「天下の台所」として経済の中心、京都は天皇のいる都として文化の中心でした。',
          keyPoints: [
            '江戸：政治の中心、100万都市',
            '大阪：「天下の台所」経済の中心',
            '京都：文化・伝統工芸の中心',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '天下の台所', back: '大阪の別名。全国の物資が集まる経済の中心地' },
      { id: 'fc2', front: '蔵屋敷', back: '大阪に置かれた各藩の米や特産物を売る施設' },
      { id: 'fc3', front: '株仲間', back: '幕府の許可を得た商工業者の同業組合' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '「天下の台所」と呼ばれた都市はどこ？',
          options: ['江戸', '京都', '大阪', '堺'],
          correctIndex: 2,
          explanation: '大阪は全国から米や特産物が集まり、「天下の台所」と呼ばれました。',
        },
      ],
    },
    chatId: 'three-capitals',
  },
};

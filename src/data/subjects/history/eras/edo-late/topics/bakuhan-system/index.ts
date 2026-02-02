import type { Topic } from '../../../../../../types';

export const bakuhanSystem: Topic = {
  id: 'bakuhan-system',
  eraId: 'edo-late',
  name: '幕藩体制の安定',
  subtitle: '徳川幕府による政治のしくみ',
  icon: '🏛️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '幕藩体制とは',
          content: '江戸幕府と各地の藩による支配体制を幕藩体制といいます。将軍は大名を統制するため、武家諸法度を定め、参勤交代を義務づけました。この体制により約260年の平和が続きました。',
          keyPoints: [
            '幕府と藩による二重支配',
            '武家諸法度による大名統制',
            '参勤交代で大名の力を弱める',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '幕藩体制', back: '江戸幕府と藩による支配体制' },
      { id: 'fc2', front: '武家諸法度', back: '大名を統制するための法律' },
      { id: 'fc3', front: '参勤交代', back: '大名が1年おきに江戸と領地を往復する制度' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '大名が1年おきに江戸と領地を往復する制度は？',
          options: ['武家諸法度', '参勤交代', '鎖国', '禁中並公家諸法度'],
          correctIndex: 1,
          explanation: '参勤交代は大名の経済力を弱め、幕府への反抗を防ぐ目的がありました。',
        },
      ],
    },
    chatId: 'bakuhan-system',
  },
};

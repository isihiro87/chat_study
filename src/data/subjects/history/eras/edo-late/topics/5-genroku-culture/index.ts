import type { Topic } from '../../../../../../types';

export const genrokuCulture: Topic = {
  id: 'genroku-culture',
  eraId: 'edo-late',
  name: '元禄文化',
  subtitle: '上方を中心とした町人文化',
  icon: '🎭',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '元禄文化とは',
          content: '17世紀末〜18世紀初め、5代将軍綱吉の元禄年間を中心に、大阪・京都（上方）で栄えた町人文化です。経済力をつけた町人が担い手となり、現実的で活気ある文化が生まれました。',
          keyPoints: [
            '上方（大阪・京都）中心',
            '町人が担い手',
            '俳諧・浮世草子・人形浄瑠璃が発達',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '松尾芭蕉', back: '俳諧を芸術に高めた人物。「奥の細道」' },
      { id: 'fc2', front: '井原西鶴', back: '浮世草子の作者。「好色一代男」「日本永代蔵」' },
      { id: 'fc3', front: '近松門左衛門', back: '人形浄瑠璃・歌舞伎の脚本家。「曽根崎心中」' },
      { id: 'fc4', front: '菱川師宣', back: '浮世絵の祖。「見返り美人図」' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '「奥の細道」を書いた俳諧師は？',
          options: ['井原西鶴', '近松門左衛門', '松尾芭蕉', '菱川師宣'],
          correctIndex: 2,
          explanation: '松尾芭蕉は俳諧を芸術として確立し、東北・北陸を旅して「奥の細道」を書きました。',
        },
      ],
    },
    chatId: 'genroku-culture',
  },
};

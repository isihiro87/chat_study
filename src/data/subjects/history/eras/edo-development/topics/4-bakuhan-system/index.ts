import type { Topic } from '../../../../../../types';

export const bakuhanSystem: Topic = {
  id: 'bakuhan-system',
  eraId: 'edo-development',
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
      {
        id: 'fc1',
        front: '徳川綱吉',
        back: '朱子学を奨励し、社会の秩序と礼儀を重視した第5代将軍はだれ？',
        explanation: '儒学による文治政治をすすめ、湯島に聖堂を建てるなど学問を重んじた。',
      },
      {
        id: 'fc2',
        front: '生類憐みの令',
        back: '綱吉が発令した、極端な動物愛護を命じる法令の総称は？',
        explanation: '犬をはじめとする生き物を保護の対象とし、庶民の生活に混乱を招いた。',
      },
      {
        id: 'fc3',
        front: '新井白石',
        back: '第6代・7代将軍に仕え、財政再建にあたった儒学者は？',
        explanation: '貨幣の質を元に戻すなど「正徳の治」と呼ばれる改革を行った。',
      },
      {
        id: 'fc4',
        front: '長崎貿易',
        back: '新井白石が金銀の海外流出を防ぐため制限したのは何貿易？',
        explanation: '海舶互市新例を出し、オランダや清との貿易額に上限を設けた。',
      },
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

import type { Topic } from '../../../../../../../types';

export const ancientCivilizations: Topic = {
  id: 'ancient-civilizations',
  eraId: 'ancient-world',
  name: '古代文明の誕生',
  subtitle: 'メソポタミア・エジプト・インダス文明',
  icon: '🏺',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '四大文明',
          content:
            '大河のほとりで都市や文字を持つ社会（文明）が発達しました。チグリス・ユーフラテス川流域のメソポタミア文明、ナイル川流域のエジプト文明、インダス川流域のインダス文明が代表的です。',
          keyPoints: [
            'メソポタミア文明：くさび形文字・ハンムラビ法典',
            'エジプト文明：太陽暦・ピラミッド・象形文字',
            'インダス文明：衰退後アーリヤ人が侵入',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '文明',
        back: '大河のほとりで発達した、都市や文字を持つ社会を何という？',
      },
      {
        id: 'fc2',
        front: 'メソポタミア文明',
        back: 'チグリス・ユーフラテス川流域で発達したのは何文明？',
      },
      {
        id: 'fc3',
        front: 'くさび形文字',
        back: 'メソポタミアで粘土板に刻まれたのは何文字？',
      },
      {
        id: 'fc4',
        front: 'ハンムラビ法典',
        back: '「目には目を」で知られるバビロニアの法律を何という？',
      },
      {
        id: 'fc5',
        front: 'エジプト文明',
        back: 'ナイル川流域で発達したのは何文明？',
      },
      {
        id: 'fc6',
        front: '太陽暦',
        back: 'エジプトで作られた1年365日の暦は？',
      },
      {
        id: 'fc7',
        front: 'ピラミッド',
        back: 'エジプトで死んだ王をまつる大きな石の建造物は？',
      },
      {
        id: 'fc8',
        front: '象形文字',
        back: 'エジプトで発明された絵のような文字は？',
      },
      {
        id: 'fc9',
        front: 'インダス文明',
        back: 'インダス川流域で栄えたのは何文明？',
      },
      {
        id: 'fc10',
        front: 'アーリヤ人',
        back: '衰退したインダス文明の地に侵入した民族は？',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'チグリス・ユーフラテス川流域で発達した文明は？',
          options: ['エジプト文明', 'インダス文明', 'メソポタミア文明', '中国文明'],
          correctIndex: 2,
          explanation: 'メソポタミア文明はチグリス・ユーフラテス川流域で発達しました。',
        },
        {
          id: 'q2',
          question: '「目には目を」で知られるバビロニアの法律は？',
          options: ['十二表法', 'ハンムラビ法典', 'マグナカルタ', 'ローマ法'],
          correctIndex: 1,
          explanation: 'ハンムラビ法典は「目には目を、歯には歯を」の同害復讐法で知られます。',
        },
        {
          id: 'q3',
          question: 'エジプトで死んだ王をまつるために建てられた建造物は？',
          options: ['コロッセオ', 'パルテノン神殿', 'ピラミッド', '万里の長城'],
          correctIndex: 2,
          explanation: 'ピラミッドはエジプトで王（ファラオ）の墓として建設された巨大建造物です。',
        },
      ],
    },
    chatId: 'ancient-civilizations',
  },
};

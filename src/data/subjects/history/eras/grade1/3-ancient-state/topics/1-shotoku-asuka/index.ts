import type { Topic } from '../../../../../../../types';

export const shotokuAsuka: Topic = {
  id: 'shotoku-asuka',
  eraId: 'ancient-state',
  name: '聖徳太子と飛鳥文化',
  subtitle: '冠位十二階・十七条の憲法・遣隋使',
  icon: '🛕',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '聖徳太子の政治改革',
          content:
            '推古天皇の摂政として聖徳太子（厩戸王）が政治改革を行いました。才能や功績で地位を決める冠位十二階、役人の心構えを示した十七条の憲法を定め、遣隋使を派遣して中国と対等な外交を目指しました。',
          keyPoints: [
            '冠位十二階：才能・功績で地位を決定',
            '十七条の憲法：役人の心構え',
            '遣隋使：小野妹子を派遣',
          ],
        },
        {
          title: '飛鳥文化',
          content:
            '法隆寺に代表される日本初の仏教文化が飛鳥文化です。聖徳太子は蘇我馬子と協力し、仏教を政治に取り入れました。',
          keyPoints: [
            '法隆寺：聖徳太子が建立',
            '釈迦三尊像：法隆寺金堂の仏像',
            '飛鳥文化：日本初の仏教文化',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '聖徳太子', back: '推古天皇の摂政として政治改革を行った人物は？' },
      { id: 'fc2', front: '冠位十二階', back: '才能や功績で地位を決める制度は？' },
      { id: 'fc3', front: '十七条の憲法', back: '役人の心構えを示した、聖徳太子が定めた法は？' },
      { id: 'fc4', front: '遣隋使', back: '中国の隋へ送られた使節の名称は？' },
      { id: 'fc5', front: '飛鳥文化', back: '法隆寺に代表される仏教文化は？' },
      { id: 'fc6', front: '蘇我馬子', back: '聖徳太子と協力した有力豪族は？' },
      { id: 'fc7', front: '法隆寺', back: '聖徳太子が建立した斑鳩の寺は？' },
      { id: 'fc8', front: '小野妹子', back: '推古天皇の時代に遣隋使として派遣された人物は？' },
      { id: 'fc9', front: '厩戸王', back: '聖徳太子が生きていた当時の名前は何？' },
      { id: 'fc10', front: '三宝', back: '十七条の憲法の第2条で敬えとしたのは？' },
      { id: 'fc11', front: '釈迦三尊像', back: '法隆寺金堂にある飛鳥文化の仏像は？' },
      { id: 'fc12', front: '飛鳥', back: '聖徳太子が政治を行った地域は？' },
      { id: 'fc13', front: '6世紀', back: '隋が中国を統一したのは何世紀？' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '才能や功績で役人の地位を決める制度は？',
          options: ['十七条の憲法', '冠位十二階', '班田収授法', '大宝律令'],
          correctIndex: 1,
          explanation: '冠位十二階は家柄ではなく才能や功績で地位を決める制度です。',
        },
        {
          id: 'q2',
          question: '遣隋使として中国に派遣された人物は？',
          options: ['中臣鎌足', '小野妹子', '菅原道真', '最澄'],
          correctIndex: 1,
          explanation: '小野妹子は推古天皇の時代に遣隋使として派遣されました。',
        },
        {
          id: 'q3',
          question: '聖徳太子が建立した、飛鳥文化を代表する寺は？',
          options: ['東大寺', '法隆寺', '唐招提寺', '平等院'],
          correctIndex: 1,
          explanation: '法隆寺は世界最古の木造建築として知られています。',
        },
      ],
    },
    chatId: 'shotoku-asuka',
  },
};

import type { Topic } from '../../../../../../../types';

export const tanumaPolitics: Topic = {
  id: 'tanuma-politics',
  eraId: 'edo-genroku',
  name: '田沼意次の政治',
  subtitle: '商業重視の積極財政',
  icon: '💰',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: '田沼意次の政治',
          content: '老中田沼意次は、商業を重視した積極的な経済政策を行いました。株仲間の奨励、蝦夷地の開発計画、長崎貿易の振興などを進めましたが、賄賂政治として批判され、天明の大飢饉後に失脚しました。',
          keyPoints: [
            '商業重視の経済政策',
            '株仲間の奨励',
            '賄賂政治と批判された',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '田沼意次',
        back: '商工業を重視し、株仲間の奨励などで財政再建を図った老中はだれ？',
        explanation: '18世紀後半に実権を握り、貨幣経済を利用した政治を進めた。',
      },
      {
        id: 'fc2',
        front: '株仲間',
        back: '田沼意次が推奨した、幕府から特権を得る代わりに営業税を納めた組織は？',
        explanation: '田沼意次が推奨したが、のちに水野忠邦が解散を命じた。',
      },
      {
        id: 'fc3',
        front: '俵物',
        back: '長崎貿易で輸出が拡大した、干しアワビなどの海産物は？',
        explanation: '中国への支払いに使われた、銅とともに重要な輸出品。',
      },
      {
        id: 'fc4',
        front: '天明のききん',
        back: '1783年の浅間山噴火などで起きた江戸時代最大のききんを何という？',
        explanation: '全国に餓死者が広がり、百姓一揆や打ちこわしが激増した。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '田沼意次が公認した商人の同業者組合を何という？',
          options: ['座', '両替商', '株仲間', '問屋'],
          correctIndex: 2,
          explanation:
            '田沼は株仲間を認める代わりに税金を徴収し、財政収入を増やそうとしました。',
        },
        {
          id: 'q2',
          question: '田沼意次が長崎貿易で輸出を増やした海産物を何という？',
          options: ['俵物', '干鰯', '昆布', '塩'],
          correctIndex: 0,
          explanation:
            '俵物とは干しアワビ、いりこ、ふかひれなどの海産物で、中国へ輸出されました。',
        },
        {
          id: 'q3',
          question: '田沼意次が失脚する一因となった大飢饉は？',
          options: ['享保のききん', '天明のききん', '天保のききん', '寛永のききん'],
          correctIndex: 1,
          explanation:
            '浅間山の噴火による凶作と、ワイロ政治への批判から田沼は失脚しました。',
        },
      ],
    },
    chatId: 'tanuma-politics',
  },
};

import type { Topic } from '../../../../../../../types';

export const threeCapitals: Topic = {
  id: 'three-capitals',
  eraId: 'edo-economy',
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
      {
        id: 'fc1',
        front: '三都',
        back: '江戸・大阪・京都の三つの大都市をまとめて何という？',
        explanation: '17世紀後半に大きく発展し、それぞれ政治・商業・文化の中心となった。',
      },
      {
        id: 'fc2',
        front: '大阪',
        back: '「天下の台所」と呼ばれ商業の中心地だった都市は？',
        explanation: '全国から年貢米や特産物が集まり、経済の要所として栄えた。',
      },
      {
        id: 'fc3',
        front: '江戸',
        back: '「将軍のおひざもと」と呼ばれた政治の中心地は？',
        explanation: '人口が約100万人を数え、当時としては世界最大級の都市だった。',
      },
      {
        id: 'fc4',
        front: '蔵屋敷',
        back: '諸藩が年貢米や特産物を販売するために置いた施設は？',
        explanation: '大阪に集中して設けられ、各藩の経済活動の拠点となった。',
      },
      {
        id: 'fc5',
        front: '両替商',
        back: '金銀の交換や預金、貸付などの業務を行った商人は？',
        explanation: '貨幣経済の発展に伴い大きな力を持ち、藩の財政にも深く関わった。',
      },
      {
        id: 'fc6',
        front: '株仲間',
        back: '江戸時代に、幕府から営業の独占を認められた商人の同業者組合を何という？',
        explanation: '幕府や藩に税を納めることで、特権的な販売や仕入れの権利を得た。',
      },
      {
        id: 'fc7',
        front: '西陣織',
        back: '京都を中心に、伝統技術で生産された有名な絹織物は？',
        explanation: '京都が学問・文化の中心として栄える中で、高度な工芸技術が発達した。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '「天下の台所」と呼ばれた都市はどこ？',
          options: ['大阪', '江戸', '京都', '堺'],
          correctIndex: 0,
          explanation: '大阪は全国から米や特産物が集まり、「天下の台所」と呼ばれました。',
        },
      ],
    },
    chatId: 'three-capitals',
  },
};

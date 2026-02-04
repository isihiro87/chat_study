import type { Topic } from '../../../../../../types';

export const transportation: Topic = {
  id: 'transportation',
  eraId: 'edo-development',
  name: '五街道と水運',
  subtitle: '交通網の整備と物流の発達',
  icon: '🛤️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '五街道の整備',
          content: '幕府は江戸を起点とする東海道・中山道・日光街道・奥州街道・甲州街道の五街道を整備しました。街道沿いには宿場町が発達し、参勤交代や物資の輸送に利用されました。',
          keyPoints: [
            '五街道：東海道・中山道・日光街道・奥州街道・甲州街道',
            '宿場町の発達',
            '参勤交代による人の移動',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '五街道',
        back: '江戸と各地を結ぶ東海道や中山道などの主要な陸路をまとめて何という？',
        explanation: '幕府の全国支配を目的として整備され、起点は日本橋とされた。',
      },
      {
        id: 'fc2',
        front: '関所',
        back: '江戸を守るために街道に設けられた、通行を取り締まる施設は？',
        explanation: '箱根や碓氷などに置かれ、通行人の身元や武器の持ち込みを厳しく調べた。',
      },
      {
        id: 'fc3',
        front: '飛脚',
        back: '手紙や荷物を運ぶために街道を走った運送業者は？',
        explanation: '幕府や藩が利用した継飛脚のほか、民間向けの町飛脚も活躍した。',
      },
      {
        id: 'fc4',
        front: '樽廻船',
        back: '大阪から江戸へ、主に酒などの物資を運んだ貨物船は？',
        explanation: '菱垣廻船よりも運送スピードが速く、江戸の消費生活を支えた。',
      },
      {
        id: 'fc5',
        front: '西廻り航路',
        back: '日本海を経由して東北の年貢米などを大阪へ運ぶ航路は？',
        explanation: '河村瑞賢によって整備され、北前船が各港に寄りながら往来した。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '江戸と京都を結ぶ街道で、53の宿場があったのは？',
          options: ['中山道', '東海道', '日光街道', '甲州街道'],
          correctIndex: 1,
          explanation: '東海道は江戸〜京都間を結び、「東海道五十三次」として知られます。',
        },
      ],
    },
    chatId: 'transportation',
  },
};

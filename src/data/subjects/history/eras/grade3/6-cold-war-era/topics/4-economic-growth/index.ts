import type { Topic } from '../../../../../../../types';

export const economicGrowth: Topic = {
  id: 'economic-growth',
  eraId: 'cold-war-era',
  name: '高度経済成長',
  subtitle: '奇跡の経済発展',
  icon: '📈',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '高度経済成長と国民生活の変化',
          content:
            '1950年代半ばから1970年代初めにかけて、日本は年平均10%以上の経済成長を遂げました。池田勇人首相が掲げた所得倍増計画のもと、重化学工業が発展し、エネルギー革命で石炭から石油への転換が進みました。国民総生産（GNP）は世界第2位となり、テレビ・洗濯機・冷蔵庫は「三種の神器」と呼ばれて家庭に普及しました。1964年には東海道新幹線が開通し、東京オリンピックが開催されました。1970年には日本万国博覧会（大阪万博）が開かれました。',
          keyPoints: [
            '所得倍増計画のもと、重化学工業が発展',
            'テレビ・洗濯機・冷蔵庫が「三種の神器」として普及',
            '東海道新幹線開通、東京オリンピック、大阪万博の開催',
          ],
        },
        {
          title: '公害問題と石油危機',
          content:
            '急速な工業化の代償として深刻な公害問題が発生しました。イタイイタイ病、水俣病、四日市ぜんそくなどの公害病が社会問題となり、公害対策基本法の制定や環境庁の設置が行われました。1973年の石油危機（オイル・ショック）では、中東戦争をきっかけに石油価格が急騰し、高度経済成長は終わりを迎えました。その後日本は貿易摩擦に直面する一方、政府開発援助（ODA）で途上国への支援を拡大しました。',
          keyPoints: [
            '公害問題：イタイイタイ病、水俣病、四日市ぜんそく',
            '公害対策基本法の制定と環境庁の設置',
            '石油危機（オイル・ショック）で高度経済成長が終了',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '高度経済成長', back: '1950年代半ばから1970年代初めにかけて日本が経験した急速な経済発展を何という？', difficulty: 'basic' },
      { id: 'fc2', front: '所得倍増計画', back: '池田勇人首相が掲げた、10年間で国民所得を2倍にする計画は？', difficulty: 'basic' },
      { id: 'fc3', front: '三種の神器', back: '高度経済成長期に普及したテレビ・洗濯機・冷蔵庫の総称は？', difficulty: 'basic' },
      { id: 'fc4', front: '東海道新幹線', back: '1964年に東京・大阪間で開通した、世界初の高速鉄道は？', difficulty: 'basic' },
      { id: 'fc5', front: '東京オリンピック', back: '1964年にアジアで初めて開催されたオリンピックは？', difficulty: 'basic' },
      { id: 'fc6', front: '水俣病', back: '熊本県水俣市で発生した、有機水銀が原因の公害病は？', difficulty: 'standard' },
      { id: 'fc7', front: 'イタイイタイ病', back: '富山県の神通川流域で発生した、カドミウムが原因の公害病は？', difficulty: 'standard' },
      { id: 'fc8', front: '四日市ぜんそく', back: '三重県四日市市で発生した、大気汚染が原因の公害病は？', difficulty: 'standard' },
      { id: 'fc9', front: 'エネルギー革命', back: '高度経済成長期に起きた、主要エネルギー源が石炭から石油に変わったことを何という？', difficulty: 'standard' },
      { id: 'fc10', front: '石油危機（オイル・ショック）', back: '1973年に中東戦争をきっかけに石油価格が急騰し、高度経済成長が終わった出来事は？', difficulty: 'standard' },
      { id: 'fc11', front: '公害対策基本法', back: '1967年に制定された、公害防止のための基本的な法律は？', difficulty: 'standard' },
      { id: 'fc12', front: '日本万国博覧会（大阪万博）', back: '1970年に大阪で開催された、アジア初の万国博覧会は？', difficulty: 'standard' },
      { id: 'fc13', front: '高度経済成長の光と影', back: '高度経済成長がもたらした負の側面は何か？', explanation: '急速な工業化により水俣病・イタイイタイ病・四日市ぜんそくなどの深刻な公害問題が発生した。', difficulty: 'advanced' },
      { id: 'fc14', front: '政府開発援助（ODA）', back: '経済大国となった日本が発展途上国に対して行う経済的・技術的な支援は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '高度経済成長期に「三種の神器」と呼ばれた家電製品の組み合わせは？',
          options: [
            'テレビ・ラジオ・電話',
            'テレビ・エアコン・自動車',
            'テレビ・洗濯機・冷蔵庫',
            '洗濯機・掃除機・冷蔵庫',
          ],
          correctIndex: 2,
          explanation:
            'テレビ・洗濯機・冷蔵庫は「三種の神器」と呼ばれ、高度経済成長期に家庭に普及しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '1973年の石油危機のきっかけとなった出来事は？',
          options: [
            '朝鮮戦争',
            'ベトナム戦争',
            'キューバ危機',
            '中東戦争',
          ],
          correctIndex: 3,
          explanation:
            '1973年の中東戦争をきっかけに産油国が石油価格を大幅に引き上げ、石油危機が起こりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '有機水銀が原因で発生した公害病は？',
          options: [
            '水俣病',
            'イタイイタイ病',
            '四日市ぜんそく',
            '足尾鉱毒事件',
          ],
          correctIndex: 0,
          explanation:
            '水俣病は工場排水に含まれる有機水銀が原因で発生した公害病です。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '1964年に開通し、東京と大阪を結んだ世界初の高速鉄道は？',
          options: [
            '山陽新幹線',
            '東海道新幹線',
            '北陸新幹線',
            '東北新幹線',
          ],
          correctIndex: 1,
          explanation:
            '東海道新幹線は1964年の東京オリンピックに合わせて開通し、日本の技術力を世界に示しました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '「国民の所得を10年間で2倍にする」という計画を掲げた首相は？',
          options: [
            '池田勇人',
            '岸信介',
            '吉田茂',
            '佐藤栄作',
          ],
          correctIndex: 0,
          explanation:
            '池田勇人首相が掲げた所得倍増計画のもと、高度経済成長が加速しました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '高度経済成長期に主要エネルギー源が石炭から石油に変わったことを何という？',
          options: [
            '産業革命',
            '情報革命',
            'エネルギー革命',
            '緑の革命',
          ],
          correctIndex: 2,
          explanation:
            'エネルギー革命により石油の輸入が増大し、後の石油危機の遠因にもなりました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'economic-growth',
  },
};

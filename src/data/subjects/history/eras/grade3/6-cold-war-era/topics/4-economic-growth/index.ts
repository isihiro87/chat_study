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
      { id: 'fc6', front: '池田勇人', back: '所得倍増計画を掲げて高度経済成長を加速させた首相は？', difficulty: 'basic' },
      { id: 'fc7', front: '重化学工業', back: '高度経済成長期に大きく発展した、鉄鋼・化学・機械などの産業は？', difficulty: 'basic' },
      { id: 'fc8', front: '水俣病', back: '熊本県水俣市で発生した、有機水銀が原因の公害病は？', difficulty: 'standard' },
      { id: 'fc9', front: 'イタイイタイ病', back: '富山県の神通川流域で発生した、カドミウムが原因の公害病は？', difficulty: 'standard' },
      { id: 'fc10', front: '四日市ぜんそく', back: '三重県四日市市で発生した、大気汚染が原因の公害病は？', difficulty: 'standard' },
      { id: 'fc11', front: 'エネルギー革命', back: '高度経済成長期に起きた、主要エネルギー源が石炭から石油に変わったことを何という？', difficulty: 'standard' },
      { id: 'fc12', front: '石油危機（オイル・ショック）', back: '1973年に中東戦争をきっかけに石油価格が急騰し、高度経済成長が終わった出来事は？', difficulty: 'standard' },
      { id: 'fc13', front: '公害対策基本法', back: '1967年に制定された、公害防止のための基本的な法律は？', difficulty: 'standard' },
      { id: 'fc14', front: '日本万国博覧会（大阪万博）', back: '1970年に大阪で開催された、アジア初の万国博覧会は？', difficulty: 'standard' },
      { id: 'fc15', front: '環境庁', back: '1971年に設置された、環境行政を担当する機関は？', difficulty: 'standard' },
      { id: 'fc16', front: '石油化学コンビナート', back: '石油を原料とする化学工場が集まった工業地帯を何という？', difficulty: 'standard' },
      { id: 'fc17', front: '第四次中東戦争', back: '1973年の石油危機のきっかけとなった戦争は？', difficulty: 'standard' },
      { id: 'fc18', front: '国民総生産（GNP）世界第2位', back: '1968年に日本のGNPが資本主義国の中で何位になったか？', explanation: '高度経済成長の成果により、アメリカに次ぐ経済大国となった。', difficulty: 'standard' },
      { id: 'fc19', front: '貿易摩擦', back: '高度経済成長後、日本の輸出増加により諸外国との間に生じた経済的対立は？', difficulty: 'standard' },
      { id: 'fc20', front: '高度経済成長の光と影', back: '高度経済成長がもたらした負の側面は何か？', explanation: '急速な工業化により水俣病・イタイイタイ病・四日市ぜんそくなどの深刻な公害問題が発生した。', difficulty: 'advanced' },
      { id: 'fc21', front: '政府開発援助（ODA）', back: '経済大国となった日本が発展途上国に対して行う経済的・技術的な支援は？', difficulty: 'advanced' },
      { id: 'fc22', front: '東京オリンピックの歴史的意義', back: '1964年の東京オリンピックが日本にとってどのような意義を持ったか？', explanation: '戦後復興と国際社会への完全復帰を世界に示し、新幹線などのインフラ整備で経済成長を加速させた。', difficulty: 'advanced' },
      { id: 'fc23', front: '公害問題から環境政策へ', back: '日本の公害問題への対応はどのように評価されるか？', explanation: '公害対策基本法と環境庁設置により「公害先進国」から「環境対策先進国」へ転換し、世界のモデルとなった。', difficulty: 'advanced' },
      { id: 'fc24', front: '石油危機後の日本', back: '石油危機後、日本経済はどのように対応したか？', explanation: '省エネルギー技術の開発やエネルギー源の多様化を進め、安定成長期に入った。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '高度経済成長期に「三種の神器」と呼ばれた家電製品の組み合わせは？',
          options: [
            'テレビ・洗濯機・冷蔵庫',
            'テレビ・ラジオ・電話',
            'テレビ・エアコン・自動車',
            '洗濯機・掃除機・冷蔵庫',
],
          correctIndex: 0,
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
            '中東戦争',
            'キューバ危機',
],
          correctIndex: 2,
          explanation:
            '1973年の中東戦争をきっかけに産油国が石油価格を大幅に引き上げ、石油危機が起こりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '有機水銀が原因で発生した公害病は？',
          options: [
            '神通川病',
            '四日市病',
            '足尾鉱毒病',
            '水俣病',
],
          correctIndex: 3,
          explanation:
            '水俣病は工場排水に含まれる有機水銀が原因で発生した公害病です。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '所得倍増計画を掲げた首相は？',
          options: ['吉田茂', '池田勇人', '岸信介', '佐藤栄作'],
          correctIndex: 1,
          explanation:
            '池田勇人首相が掲げた所得倍増計画のもと、高度経済成長が加速しました。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '1964年にアジアで初めて開催されたオリンピックは？',
          options: [
            '北京オリンピック',
            'ソウルオリンピック',
            'シドニーオリンピック',
            '東京オリンピック',
],
          correctIndex: 3,
          explanation:
            '1964年の東京オリンピックはアジアで初めて開催されたオリンピックです。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '高度経済成長期の年平均の経済成長率はどのくらいだったか？',
          options: ['約3%', '約5%', '約10%以上', '約20%'],
          correctIndex: 2,
          explanation:
            '高度経済成長期の日本は年平均10%以上の経済成長率を達成しました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
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
          id: 'q8',
          question:
            '高度経済成長期に主要エネルギー源が石炭から石油に変わったことを何という？',
          options: [
            'エネルギー革命',
            '産業革命',
            '情報革命',
            '緑の革命',
],
          correctIndex: 0,
          explanation:
            'エネルギー革命により石油の輸入が増大し、後の石油危機の遠因にもなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '富山県の神通川流域で発生した、カドミウムが原因の公害病は？',
          options: ['イタイイタイ病', '水俣病', '四日市ぜんそく', '新潟水俣病'],
          correctIndex: 0,
          explanation:
            'イタイイタイ病は富山県神通川流域でカドミウムが原因で発生した公害病です。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '1967年に制定された、公害防止のための基本的な法律は？',
          options: ['環境基本法', '自然保護法', '大気汚染防止法', '公害対策基本法'],
          correctIndex: 3,
          explanation:
            '公害対策基本法は1967年に制定され、公害防止の法的枠組みが整えられました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '1971年に設置された、環境行政を担当する機関は？',
          options: ['環境省', '環境庁', '厚生省', '通商産業省'],
          correctIndex: 1,
          explanation:
            '1971年に環境庁が設置され、環境行政を一元的に担当するようになりました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '1970年に大阪で開催された国際イベントは？',
          options: [
            '東京オリンピック',
            'アジア大会',
            '冬季オリンピック',
            '日本万国博覧会',
],
          correctIndex: 3,
          explanation:
            '1970年に日本万国博覧会（大阪万博）がアジアで初めて開催されました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '1968年に日本のGNPは資本主義国の中で何位になった？',
          options: ['第1位', '第3位', '第2位', '第5位'],
          correctIndex: 2,
          explanation:
            '高度経済成長の成果により、1968年に日本のGNPはアメリカに次ぐ資本主義国第2位となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '石油危機が日本経済にもたらした最大の影響は？',
          options: [
            '貿易黒字の拡大',
            '高度経済成長の終わり',
            '農業の発展',
            '軍事費の増大',
          ],
          correctIndex: 1,
          explanation:
            '石油価格の急騰により物価が上昇し、年平均10%以上の高度経済成長は終わりを迎えました。',
          difficulty: 'standard',
        },
        {
          id: 'q15',
          question: '高度経済成長の「光と影」の「影」に当たるものは？',
          options: [
            '公害病の発生',
            '東海道新幹線の開通',
            '三種の神器の普及',
            'GNP世界第2位',
],
          correctIndex: 0,
          explanation:
            '急速な工業化の代償として水俣病・イタイイタイ病・四日市ぜんそくなどの深刻な公害問題が発生しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '東京オリンピックが日本にとって持った意義として最も適切なのは？',
          options: [
            '戦後復興と国際社会への完全復帰を世界に示した',
            '米ソの対立が終わり冷戦が終結したことを国際社会に示した',
            '石油危機により高度経済成長が終わりを迎えたことを示した',
            '日本の軍事力の回復と自衛隊の実力を世界に広くアピールした',
],
          correctIndex: 0,
          explanation:
            '東京オリンピックは戦後わずか19年で開催され、日本の復興と国際社会への完全復帰を世界に示しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question: '石油危機後の日本が取った対応として正しいのは？',
          options: [
            '産油国との外交関係を断ち石油の輸入を全面的に禁止した',
            '高度経済成長の流れを維持し経済成長をさらに加速させた',
            '省エネルギー技術の開発やエネルギー源の多様化を進めた',
            '危機を乗り越えるために全国のすべての原子力発電所を廃止した',
],
          correctIndex: 2,
          explanation:
            '石油危機後、日本は省エネルギー技術の開発やエネルギー源の多様化を進め、安定成長期に入りました。',
          difficulty: 'advanced',
        },
        {
          id: 'q18',
          question: '経済大国となった日本が発展途上国に行った支援は？',
          options: [
            '軍事援助',
            '政府開発援助（ODA）',
            '移民政策',
            '技術独占',
          ],
          correctIndex: 1,
          explanation:
            '日本は政府開発援助（ODA）により発展途上国への経済的・技術的支援を拡大しました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'economic-growth',
  },
};

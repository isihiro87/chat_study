import type { Topic } from '../../../../../../../types';

export const southAmericaNature: Topic = {
  id: 'geo1-sa1',
  eraId: 'geo1-world-regions',
  name: '南アメリカ州(1) 自然・文化',
  subtitle: 'アマゾン・アンデス・パンパ・日系移民',
  icon: '🌿',
  order: 12,
  content: {
    explanation: {
      sections: [
        {
          title: '自然と文化',
          content:
            '南アメリカ州には、世界最大の流域面積を持つアマゾン川と、その流域に広がる熱帯雨林があります。また、大陸の西側には南北に約7500kmにわたるアンデス山脈がそびえています。かつてアンデス山脈の高地にはインカ帝国が栄えましたが、16世紀にスペインやポルトガルによる植民地支配を受けました。その結果、先住民とヨーロッパ系の人々が混血し、独自の混血文化（メスティーソ文化）が生まれました。公用語としてスペイン語やポルトガル語（ブラジル）が広く使われ、カトリックが主要な宗教となっています。',
          keyPoints: [
            'アマゾン川：世界最大の流域面積を持つ川、流域に熱帯雨林が広がる',
            'アンデス山脈：南北約7500km、かつてインカ帝国が栄えた',
            'スペイン・ポルトガルの植民地支配により混血文化が形成された',
          ],
        },
        {
          title: '自然を生かした暮らし',
          content:
            'アマゾン川流域では、川での漁業が人々の暮らしを支えています。熱帯雨林では伝統的に焼畑農業が行われてきましたが、近年はアグロフォレストリー（森林農業）という、森林を保全しながら農作物を育てる持続的な農業も注目されています。アグロフォレストリーでは、カカオやコーヒーなどの作物を森林の中で栽培します。また、豊かな自然を観光資源とするエコツーリズムも盛んになっており、自然を守りながら地域の収入を得る取り組みが広がっています。',
          keyPoints: [
            'アマゾン川での漁業が暮らしを支える',
            '焼畑農業からアグロフォレストリー（森林農業）への転換が進む',
            'エコツーリズム：自然を守りながら観光収入を得る取り組み',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-sa1-slide1',
          title: '自然と文化',
          slides: [
            {
              type: 'question',
              question: '南アメリカ州にはどんな自然と文化がある？',
              subtext: 'アマゾン川・アンデス山脈・混血文化',
              emoji: '🌿',
            },
            {
              type: 'reason',
              headline: 'アマゾンとアンデスが生み出す多様性！',
              points: [
                'アマゾン川は世界最大の流域面積、流域に熱帯雨林が広がる',
                'アンデス山脈は南北約7500km、インカ帝国が栄えた',
                'スペイン・ポルトガルの植民地支配で混血文化が形成',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'アマゾン川', value: '世界最大の流域面積', emoji: '🏞️' },
                  { label: 'アンデス山脈', value: '南北約7500km', emoji: '🏔️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '南アメリカ州はアマゾンの熱帯雨林とアンデス山脈の壮大な自然に、インカ帝国以来の歴史と混血文化が重なる多様な地域！',
              keywords: [
                { text: 'アマゾン川', isImportant: true },
                { text: 'アンデス山脈', isImportant: true },
                { text: 'インカ帝国' },
                { text: '混血文化' },
              ],
              nextHint: '次は自然を生かした暮らしについて学ぼう！',
            },
          ],
        },
        {
          id: 'geo1-sa1-slide2',
          title: '自然を生かした暮らし',
          slides: [
            {
              type: 'question',
              question: '南アメリカの人々は自然をどう生かして暮らしている？',
              subtext: '漁業・農業・エコツーリズム',
              emoji: '🌳',
            },
            {
              type: 'reason',
              headline: '森林と共に生きる知恵！',
              points: [
                'アマゾン川での漁業が暮らしを支える',
                'アグロフォレストリーで森林を保全しながら農業',
                'エコツーリズムで自然を守りつつ観光収入を得る',
              ],
            },
            {
              type: 'conclusion',
              conclusion:
                '焼畑農業からアグロフォレストリーへの転換やエコツーリズムなど、自然と共存する暮らし方が広がっている！',
              keywords: [
                { text: 'アグロフォレストリー', isImportant: true },
                { text: 'エコツーリズム', isImportant: true },
                { text: '焼畑農業' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-sa1-fc1', front: '世界最大の流域面積を持ち、流域に広大な熱帯雨林が広がる川', back: 'アマゾン川はどのような特徴を持つ川か？', difficulty: 'basic' },
      { id: 'geo1-sa1-fc2', front: '南北約7500kmの世界最長の山脈。インカ帝国が栄えた', back: 'アンデス山脈の特徴と、かつて高地に栄えた帝国の名前を答えよ。', difficulty: 'basic' },
      { id: 'geo1-sa1-fc3', front: 'スペイン・ポルトガルの植民地支配で先住民と混血し、言語・宗教が広まった', back: '南アメリカ州に混血文化が生まれた理由を説明せよ。', difficulty: 'basic' },
      { id: 'geo1-sa1-fc4', front: '森林を保全しながらカカオやコーヒーを育てる持続的農業', back: 'アグロフォレストリー（森林農業）とはどのような農業か？', difficulty: 'basic' },
      { id: 'geo1-sa1-fc5', front: 'ラプラタ川流域（主にアルゼンチン）の大草原で、牧畜がさかん', back: 'パンパとはどのような地形で、どこに広がっているか？', difficulty: 'basic' },
      { id: 'geo1-sa1-fc6', front: 'メスティーソ', back: '南アメリカの先住民とヨーロッパ系の人々の混血の人々を何というか？', difficulty: 'basic' },
      { id: 'geo1-sa1-fc7', front: 'セルバ', back: 'アマゾン川流域に広がる世界最大の熱帯雨林を何というか？', difficulty: 'basic' },
      { id: 'geo1-sa1-fc8', front: '20世紀初頭、コーヒー農園での労働力として渡った', back: '日系移民はいつ頃、なぜブラジルに渡ったか？', difficulty: 'basic' },
      { id: 'geo1-sa1-fc9', front: 'ブラジル高原', back: 'ブラジルの国土の大部分を占め、鉄鉱石が豊富に埋蔵される広大な高原を何というか。', difficulty: 'basic' },
      { id: 'geo1-sa1-fc10', front: '焼畑農業', back: '森林を伐採して焼き、灰を肥料として農作物を育てる伝統的農業を何というか。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc11', front: 'コーヒー豆', back: 'ブラジルが世界最大の生産量を誇る飲料用の農産物は何か。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc12', front: '大豆', back: 'ブラジルが近年、世界最大級の輸出国となっている穀物は何か。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc13', front: '鉄鉱石', back: 'ブラジルで大量に産出され、中国や日本に輸出される鉱石は何か。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc14', front: '銅鉱石', back: 'チリやペルーで多く産出される、電線などに使われる金属の鉱石は何か。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc15', front: 'バイオエタノール', back: 'サトウキビを原料として作られ、ブラジルで自動車燃料に使われる再生可能な燃料を何というか。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc16', front: '大豆畑の開発と牧場の拡大', back: '南アメリカ州で熱帯雨林が大規模に減少している主な原因を2つ答えよ。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc17', front: 'エコツーリズム', back: '自然環境を守りながら観光収入を得る取り組みを何というか。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc18', front: 'マチュピチュ', back: 'アンデス山脈の高地にあるインカ帝国の有名な遺跡の名前を答えよ。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc19', front: 'ブラジルはポルトガル語、他の多くの国はスペイン語', back: 'ブラジルの公用語は何か。他の南アメリカの多くの国の公用語は何か。', difficulty: 'advanced' },
      { id: 'geo1-sa1-fc20', front: '生物多様性', back: '熱帯雨林が減少すると失われる、植物や動物の種類の豊かさを何というか。', difficulty: 'advanced' },
      { id: 'geo1-sa1-fc21', front: '約7500km', back: 'アンデス山脈は南北約何kmにわたって連なるか。', difficulty: 'advanced' },
      { id: 'geo1-sa1-fc22', front: '持続可能な開発', back: '経済の発展と環境の保全を両立させる開発のあり方を何というか。', difficulty: 'standard' },
      { id: 'geo1-sa1-fc23', front: 'テーブル状の台地が連なり、エンジェルフォール（世界最大落差の滝）がある', back: 'ギアナ高地の地形的特徴を答えよ。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-sa1-q1',
          question: '世界最大の流域面積を持つ川はどれ？',
          options: ['ナイル川', 'ミシシッピ川', 'アマゾン川', '長江'],
          correctIndex: 2,
          explanation:
            'アマゾン川は世界最大の流域面積を持つ川で、南アメリカ大陸の北部を流れています。流域には広大な熱帯雨林が広がっています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q2',
          question: 'アンデス山脈の高地にかつて栄えた帝国はどれ？',
          options: ['アステカ帝国', 'インカ帝国', 'マヤ文明', 'オスマン帝国'],
          correctIndex: 1,
          explanation:
            'アンデス山脈の高地にはインカ帝国が栄えました。16世紀にスペインによって征服されましたが、マチュピチュなどの遺跡が現在も残っています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q3',
          question:
            '森林を保全しながら農作物を育てる持続的な農業方法を何という？',
          options: [
            '焼畑農業',
            'プランテーション',
            '遊牧',
            'アグロフォレストリー',
          ],
          correctIndex: 3,
          explanation:
            'アグロフォレストリー（森林農業）は、森林の中でカカオやコーヒーなどを栽培する方法です。焼畑農業に代わる持続的な農業として注目されています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q4',
          question:
            'ラプラタ川の流域に広がる大草原を何というか？',
          options: [
            'パンパ',
            'セルバ',
            'サバナ',
            'ステップ',
          ],
          correctIndex: 0,
          explanation:
            'パンパはラプラタ川流域に広がる大草原で、主にアルゼンチンに位置しています。牛の放牧など大規模な牧畜がさかんです。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q5',
          question:
            '先住民とヨーロッパ系の人々の混血の人々を何とよぶか？',
          options: [
            'クレオール',
            'メスティーソ',
            'ムラート',
            'イヌイット',
          ],
          correctIndex: 1,
          explanation:
            'メスティーソは先住民とヨーロッパ系の人々の混血の人々です。スペインやポルトガルの植民地支配を通じて混血が進みました。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q6',
          question:
            'アマゾン川流域の熱帯雨林を現地の言葉で何というか？',
          options: [
            'セルバ',
            'タイガ',
            'パンパ',
            'ツンドラ',
          ],
          correctIndex: 0,
          explanation:
            'セルバはアマゾン川流域に広がる広大な熱帯雨林のことです。世界最大の熱帯雨林であり、多様な生物が生息しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q7',
          question:
            'ブラジルの公用語は何か？',
          options: [
            'スペイン語',
            '英語',
            'フランス語',
            'ポルトガル語',
          ],
          correctIndex: 3,
          explanation:
            'ブラジルはポルトガルの植民地だった歴史から、公用語はポルトガル語です。南アメリカの他の多くの国ではスペイン語が使われています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q8',
          question:
            '20世紀初頭からブラジルに多く移住した日本の人々を何というか？',
          options: [
            '華人',
            '帰国子女',
            '日系移民',
            '在外邦人',
          ],
          correctIndex: 2,
          explanation:
            '日系移民は20世紀初頭からコーヒー農園などでの労働力としてブラジルに移住しました。現在もブラジルには多くの日系人コミュニティがあります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q9',
          question: 'アンデス山脈は南北約何kmにわたって連なるか。',
          options: ['約2000km', '約5000km', '約7500km', '約10000km'],
          correctIndex: 2,
          explanation: 'アンデス山脈は南アメリカ大陸の西側を南北約7500kmにわたって連なる世界最長の山脈です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q10',
          question: 'ブラジルが世界有数の生産量を誇る飲料用農産物はどれか。',
          options: ['紅茶', 'コーヒー豆', 'カカオ', 'ワイン'],
          correctIndex: 1,
          explanation: 'ブラジルは世界最大のコーヒー豆生産国です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-sa1-q11',
          question: 'ブラジルで大量に産出される鉄の原料は何か。',
          options: ['ボーキサイト', '銅鉱石', '鉄鉱石', 'レアメタル'],
          correctIndex: 2,
          explanation: 'ブラジルは世界有数の鉄鉱石産出国です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q12',
          question: 'サトウキビを原料として作られる再生可能な燃料を何というか。',
          options: ['天然ガス', 'バイオエタノール', 'ガソリン', '軽油'],
          correctIndex: 1,
          explanation: 'バイオエタノールはサトウキビから作られ、自動車の燃料として使われます。栽培すれば繰り返し収穫できる再生可能エネルギーです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q13',
          question: '南アメリカで熱帯雨林が減少している主な原因はどれか。',
          options: [
            '地球温暖化による気温上昇',
            '大豆畑の開発と牧場の拡大',
            '酸性雨の影響',
            '都市化による宅地開発',
          ],
          correctIndex: 1,
          explanation: '大豆畑の開発と牧場の拡大が熱帯雨林の減少の主な原因です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q14',
          question: '16世紀以降、南アメリカを植民地支配した2つのヨーロッパの国はどれか。',
          options: [
            'イギリスとフランス',
            'スペインとポルトガル',
            'オランダとドイツ',
            'イタリアとベルギー',
          ],
          correctIndex: 1,
          explanation: 'スペインとポルトガルが16世紀以降に南アメリカを植民地支配し、言語や宗教に大きな影響を与えました。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q15',
          question: 'チリやペルーで多く産出される金属の鉱石はどれか。',
          options: ['鉄鉱石', '金', '銅鉱石', 'ダイヤモンド'],
          correctIndex: 2,
          explanation: 'チリやペルーは銅鉱石の世界的な産出国で、電線などに使われています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q16',
          question: '南アメリカの北部にあるテーブル状の台地が連なる高地を何というか。',
          options: ['ブラジル高原', 'ギアナ高地', 'アンデス台地', 'パタゴニア台地'],
          correctIndex: 1,
          explanation: 'ギアナ高地はテーブル状の台地が連なる独特の地形で、世界最大の落差を持つエンジェルフォールがあります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q17',
          question: '経済の発展と環境の保全を両立させる開発のあり方を何というか。',
          options: ['モノカルチャー経済', '持続可能な開発', '計画経済', '自由貿易'],
          correctIndex: 1,
          explanation: '持続可能な開発は経済発展と環境保全を両立させるあり方で、アグロフォレストリーなどがその例です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q18',
          question: 'ブラジルが近年、世界最大級の輸出国となっている穀物はどれか。',
          options: ['小麦', 'とうもろこし', '米', '大豆'],
          correctIndex: 3,
          explanation: 'ブラジルは近年大豆の生産を大幅に拡大し、世界最大級の輸出国となっています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q19',
          question: 'アルゼンチンのパンパで主に行われている農業の形態はどれか。',
          options: ['焼畑農業', '稲作', '牧畜', 'プランテーション'],
          correctIndex: 2,
          explanation: 'パンパでは牛の放牧を中心とした大規模な牧畜がさかんに行われています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q20',
          question: '南アメリカ州で広く信仰されているキリスト教の宗派はどれか。',
          options: ['プロテスタント', 'カトリック', '正教会', '英国国教会'],
          correctIndex: 1,
          explanation: 'スペインとポルトガルの植民地支配を通じてカトリックが広まり、現在も広く信仰されています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q21',
          question: '森林を伐採して焼き、灰を肥料とする農業を何というか。',
          options: ['混合農業', '焼畑農業', 'プランテーション', '二期作'],
          correctIndex: 1,
          explanation: '焼畑農業は森林を焼いて灰を肥料に農作物を育て、地力が落ちたら別の土地に移動する農業です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q22',
          question: '自然環境を守りながら観光収入を得る取り組みを何というか。',
          options: ['マスツーリズム', 'ルーラル・ツーリズム', 'エコツーリズム', 'グリーンツーリズム'],
          correctIndex: 2,
          explanation: 'エコツーリズムは自然環境を守りながらその自然を観光資源として活用する取り組みです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-sa1-q23',
          question: 'インカ帝国の有名な遺跡はどれか。',
          options: ['アンコールワット', 'マチュピチュ', 'ピラミッド', 'コロッセオ'],
          correctIndex: 1,
          explanation: 'マチュピチュはアンデス山脈の高地にあるインカ帝国の有名な遺跡です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-sa1-q24',
          question: 'アマゾン川流域の熱帯雨林が減少すると起きる問題はどれか。',
          options: [
            '砂漠化が進む',
            '海面が上昇する',
            '生物多様性が失われる',
            '地震が増える',
          ],
          correctIndex: 2,
          explanation: '熱帯雨林の減少により、植物や動物の多様性（生物多様性）が失われます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-sa1-q25',
          question: 'バイオエタノールが再生可能エネルギーとされる理由はどれか。',
          options: [
            '地下から採掘するため',
            '原料のサトウキビは栽培すれば繰り返し収穫できるため',
            '太陽光で発電するため',
            '風力を利用するため',
          ],
          correctIndex: 1,
          explanation: 'バイオエタノールの原料であるサトウキビは栽培すれば繰り返し収穫できるため、再生可能エネルギーとされます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-sa1-q26',
          question: 'ブラジルの国土の大部分を占める広大な高原はどれか。',
          options: ['ギアナ高地', 'ブラジル高原', 'チベット高原', 'デカン高原'],
          correctIndex: 1,
          explanation: 'ブラジル高原はブラジルの国土の大部分を占める広大な高原です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-sa1-q27',
          question: 'アグロフォレストリーで栽培される代表的な作物の組み合わせはどれか。',
          options: ['米と小麦', 'カカオとコーヒー', '大豆ととうもろこし', 'バナナとパイナップル'],
          correctIndex: 1,
          explanation: 'アグロフォレストリーではカカオやコーヒーなどが森林を保全しながら栽培されます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-sa1-q28',
          question: 'セルバが広がる地域の気候帯はどれか。',
          options: ['温帯', '乾燥帯', '冷帯', '熱帯'],
          correctIndex: 3,
          explanation: 'セルバ（アマゾン川流域の熱帯雨林）は熱帯に分布しています。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-sa1-ex1',
          question:
            '南アメリカ州の自然・民族・文化について、次の問いに答えなさい。（1）アンデス山脈の高地にかつて栄えた帝国の名前を答えなさい。（2）南アメリカ州で混血文化が生まれた理由を、植民地支配にふれて説明しなさい。（3）ブラジルの公用語が他の南アメリカの国々と異なる理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: アンデス高地の帝国を思い出す',
              content:
                'アンデス山脈の高地には、マチュピチュなどの遺跡で知られるインカ帝国が栄えていました。',
              highlight: 'インカ帝国',
            },
            {
              title: 'Step 2: 混血文化の背景を考える',
              content:
                '16世紀にスペインやポルトガルが植民地支配を行い、先住民とヨーロッパ系の人々が混血してメスティーソとよばれる人々が生まれ、独自の混血文化が形成されました。',
              highlight: '植民地支配による先住民とヨーロッパ系の混血',
            },
            {
              title: 'Step 3: ブラジルの言語の違いを説明する',
              content:
                'ブラジルはポルトガルの植民地だったためポルトガル語が公用語です。他の多くの国はスペインの植民地だったためスペイン語が使われています。',
              highlight: 'ブラジル＝ポルトガル植民地、他＝スペイン植民地',
            },
          ],
          answer:
            '（1）インカ帝国\n（2）16世紀以降のスペイン・ポルトガルの植民地支配によって、先住民とヨーロッパ系の人々が混血し、言語（スペイン語・ポルトガル語）や宗教（カトリック）が広まり、独自の混血文化が形成された。\n（3）ブラジルはポルトガルの植民地だったためポルトガル語が公用語となった。他の南アメリカの国々はスペインの植民地だったためスペイン語が公用語となっている。',
        },
      ],
    },
    chatId: 'geo1-south-america-nature',
  },
};

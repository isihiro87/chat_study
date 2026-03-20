import type { Topic } from '../../../../../../../types';

export const occupation: Topic = {
  id: 'occupation',
  eraId: 'postwar-japan',
  name: '占領と民主化',
  subtitle: 'GHQによる改革',
  icon: '🕊️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'GHQの占領と民主化政策',
          content:
            '1945年8月、日本はポツダム宣言を受け入れて無条件降伏しました。連合国軍最高司令官総司令部（GHQ）が日本を占領し、最高司令官マッカーサーのもとで民主化改革が進められました。軍国主義の排除、戦争犯罪人の追及、財閥解体など、日本の社会を根本から変える改革が次々と行われました。',
          keyPoints: [
            'ポツダム宣言を受け入れ無条件降伏',
            'GHQ（連合国軍最高司令官総司令部）による占領',
            'マッカーサーが最高司令官として来日',
          ],
        },
        {
          title: '東京裁判と北方領土問題',
          content:
            '1946年から1948年にかけて、東京裁判（極東国際軍事裁判）が行われ、日本の戦争指導者が裁かれました。一方、第二次世界大戦の終結前後にソ連が占領した北方領土（歯舞群島・色丹島・国後島・択捉島）は、現在もロシアとの間で領土問題が続いています。',
          keyPoints: [
            '東京裁判で戦争指導者を裁く（1946〜1948年）',
            'ソ連が北方領土を占領',
            '北方領土問題は現在も未解決',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: 'GHQ', back: '占領下の日本に指令を出した連合国軍最高司令官総司令部の略称は？', difficulty: 'basic' },
      { id: 'fc2', front: 'マッカーサー', back: 'GHQの最高司令官として来日した人物は？', difficulty: 'basic' },
      { id: 'fc3', front: '東京裁判', back: '1946年から1948年にかけて日本の戦争指導者を裁いた国際裁判は？', difficulty: 'basic' },
      { id: 'fc4', front: 'ポツダム宣言', back: '1945年に日本に無条件降伏を求めた連合国の宣言は？', difficulty: 'basic' },
      { id: 'fc5', front: '間接統治', back: 'GHQが日本政府を通じて改革の指令を出す統治方法を何という？', difficulty: 'basic' },
      { id: 'fc6', front: '女性参政権', back: '戦後の選挙法改正で初めて実現した、女性が選挙に参加できる権利は？', difficulty: 'basic' },
      { id: 'fc7', front: '財閥解体', back: 'GHQの指導で行われた、巨大な独占資本を解体する経済改革は？', explanation: '三井・三菱などの財閥が対象となった。', difficulty: 'standard' },
      { id: 'fc8', front: '農地改革', back: '地主の農地を政府が買い上げて小作人に安く売った改革は？', explanation: '自作農が大幅に増加した。', difficulty: 'standard' },
      { id: 'fc9', front: '自作農', back: '農地改革の結果増加した、自分の土地を持つ農民を何という？', difficulty: 'standard' },
      { id: 'fc10', front: '労働組合法', back: '労働者の団結権や団体交渉権を認めた法律は？', difficulty: 'standard' },
      { id: 'fc11', front: '労働基準法', back: '賃金や労働時間など労働条件の最低基準を定めた法律は？', difficulty: 'standard' },
      { id: 'fc12', front: '選挙法改正', back: '戦後に満20歳以上の男女に選挙権を与えた法改正は？', explanation: '戦前は満25歳以上の男子のみだった。', difficulty: 'standard' },
      { id: 'fc13', front: '北方領土', back: '第二次大戦後にソ連が占領し、現在もロシアとの間で未解決の領土問題が続く島々は？', explanation: '歯舞群島・色丹島・国後島・択捉島の4島。', difficulty: 'standard' },
      { id: 'fc14', front: '民主化', back: 'GHQが占領下で進めた、軍国主義の排除や財閥解体など日本社会を変える改革の総称は？', difficulty: 'standard' },
      { id: 'fc15', front: '極東国際軍事裁判', back: '東京裁判の正式名称は？', difficulty: 'standard' },
      { id: 'fc16', front: 'GHQの占領政策の目的', back: 'GHQが日本を占領し民主化改革を進めた主な目的は何か？', explanation: '軍国主義を排除し、二度と戦争を起こさない平和で民主的な国家に変えること。', difficulty: 'advanced' },
      { id: 'fc17', front: '経済民主化の3本柱', back: '戦後の経済民主化改革の主な3つは何か？', explanation: '財閥解体・農地改革・労働法制定（労働組合法・労働基準法）。', difficulty: 'advanced' },
      { id: 'fc18', front: '間接統治の意義', back: 'GHQが直接統治ではなく間接統治を選択した理由は？', explanation: '日本の行政機構を活用して効率的に改革を進めるため。言語や文化の壁を乗り越えやすい。', difficulty: 'advanced' },
      { id: 'fc19', front: '戦後改革の全体像', back: 'GHQによる民主化改革を政治・経済・社会の3面から挙げよ', explanation: '政治：軍隊解散・東京裁判・女性参政権。経済：財閥解体・農地改革・労働法。社会：教育改革・男女平等。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '占領下の日本で民主化の指令を出した組織は？',
          options: ['枢密院', 'GHQ', '大政翼賛会', '国際連合'],
          correctIndex: 1,
          explanation:
            'GHQ（連合国軍最高司令官総司令部）がマッカーサーのもとで日本の民主化を進めました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '日本の戦争指導者を裁いた国際裁判は何と呼ばれる？',
          options: ['国際司法裁判', 'ニュルンベルク裁判', '東京裁判', '軍事法廷'],
          correctIndex: 2,
          explanation:
            '東京裁判（極東国際軍事裁判）は1946年から1948年にかけて行われました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '日本に無条件降伏を求めた、1945年の連合国の宣言は？',
          options: ['ポツダム宣言', 'カイロ宣言', '大西洋憲章', 'ヤルタ協定'],
          correctIndex: 0,
          explanation:
            'ポツダム宣言は1945年7月に出され、日本は8月にこれを受け入れて降伏しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: 'GHQが日本を統治した方法は何か？',
          options: ['直接統治', '軍政', '間接統治', '自治'],
          correctIndex: 2,
          explanation:
            'GHQは日本政府を通じて改革の指令を出す間接統治を行いました。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '戦後の選挙法改正で初めて実現したのは？',
          options: ['女性参政権', '秘密投票', '普通選挙', '比例代表制'],
          correctIndex: 0,
          explanation:
            '戦後の選挙法改正により、満20歳以上の男女に選挙権が与えられ、女性参政権が実現しました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '地主の農地を政府が買い上げて小作人に安く売った改革は？',
          options: ['財閥解体', '地租改正', '殖産興業', '農地改革'],
          correctIndex: 3,
          explanation:
            '農地改革により自作農が増加し、農村の民主化が進みました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question: 'GHQの最高司令官として日本に来た人物は誰？',
          options: ['トルーマン', 'マッカーサー', 'アイゼンハワー', 'チャーチル'],
          correctIndex: 1,
          explanation:
            'マッカーサーはGHQの最高司令官として来日し、日本の民主化改革を指導しました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question:
            '第二次世界大戦の終結前後にソ連が占領し、現在も領土問題が続いている地域は？',
          options: ['沖縄', '北方領土', '小笠原諸島', '対馬'],
          correctIndex: 1,
          explanation:
            'ソ連は歯舞群島・色丹島・国後島・択捉島からなる北方領土を占領し、現在もロシアとの間で未解決の問題です。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '東京裁判が行われた期間として正しいものは？',
          options: [
            '1946年〜1948年',
            '1944年〜1945年',
            '1950年〜1952年',
            '1945年〜1946年',
],
          correctIndex: 0,
          explanation:
            '東京裁判（極東国際軍事裁判）は1946年から1948年にかけて行われ、戦争指導者が裁かれました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '戦後の経済改革で、巨大な資本家集団を解体したのは？',
          options: ['財閥解体', '農地改革', '殖産興業', '地租改正'],
          correctIndex: 0,
          explanation:
            '財閥解体は三井・三菱などの巨大な独占資本を解体し、経済の民主化を進めました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '農地改革の結果、増加した農民はどれか？',
          options: ['小作人', '地主', '豪農', '自作農'],
          correctIndex: 3,
          explanation:
            '農地改革により地主の土地が小作人に売り渡され、自分の土地を持つ自作農が大幅に増加しました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '労働者の団結権や団体交渉権を認めた法律は？',
          options: ['労働組合法', '労働基準法', '治安維持法', '工場法'],
          correctIndex: 0,
          explanation:
            '労働組合法は労働者の団結権・団体交渉権・争議権を保障しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '戦後の選挙法改正で選挙権が認められたのは？',
          options: [
            '満25歳以上の男子',
            '満20歳以上の男子',
            '満20歳以上の男女',
            '満18歳以上の男女',
          ],
          correctIndex: 2,
          explanation:
            '戦後の選挙法改正により、満20歳以上の男女すべてに選挙権が与えられました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '北方領土に含まれない島は？',
          options: ['歯舞群島', '色丹島', '国後島', '佐渡島'],
          correctIndex: 3,
          explanation:
            '北方領土は歯舞群島・色丹島・国後島・択捉島の4島です。佐渡島は新潟県の島です。',
          difficulty: 'standard',
        },
        {
          id: 'q15',
          question: 'GHQの占領政策の最大の目的は何だったか？',
          options: [
            '日本の領土を縮小すること',
            '軍国主義を排除し民主的な国家に変えること',
            '日本を植民地にすること',
            '日本の経済を破壊すること',
],
          correctIndex: 1,
          explanation:
            'GHQの占領政策は、軍国主義を排除し、二度と戦争を起こさない平和で民主的な国家に変えることが目的でした。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '財閥解体と農地改革に共通する目的は？',
          options: [
            '外国からの輸入を増やすこと',
            '軍事力を強化すること',
            '経済の民主化を実現すること',
            '政府の収入を増やすこと',
          ],
          correctIndex: 2,
          explanation:
            '財閥解体と農地改革はいずれも少数の特権層への富の集中を排除し、経済の民主化を実現する改革でした。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question: 'GHQが間接統治を選択した理由として最も適切なのは？',
          options: [
            '日本の軍隊を利用するため',
            'アメリカの軍事費を節約するため',
            '日本国民の反発を招くため',
            '日本の行政機構を活用して効率的に改革を進めるため',
],
          correctIndex: 3,
          explanation:
            '間接統治は日本の既存の行政機構を活用し、言語や文化の壁を乗り越えて効率的に改革を進める方法でした。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'occupation',
  },
};

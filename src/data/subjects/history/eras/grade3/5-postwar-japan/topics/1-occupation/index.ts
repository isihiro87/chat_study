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
      { id: 'fc4', front: '財閥解体', back: 'GHQの指導で行われた、巨大な独占資本を解体する経済改革は？', explanation: '三井・三菱などの財閥が対象となった。', difficulty: 'standard' },
      { id: 'fc5', front: '北方領土', back: '第二次大戦後にソ連が占領し、現在もロシアとの間で未解決の領土問題が続く島々は？', explanation: '歯舞群島・色丹島・国後島・択捉島の4島。', difficulty: 'standard' },
      { id: 'fc6', front: '民主化', back: 'GHQが占領下で進めた、軍国主義の排除や財閥解体など日本社会を変える改革の総称は？', difficulty: 'standard' },
      { id: 'fc7', front: 'GHQの占領政策の目的', back: 'GHQが日本を占領し民主化改革を進めた主な目的は何か？', explanation: '軍国主義を排除し、二度と戦争を起こさない平和で民主的な国家に変えること。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '占領下の日本で民主化の指令を出した組織は？',
          options: ['GHQ', '枢密院', '大政翼賛会', '国際連合'],
          correctIndex: 0,
          explanation:
            'GHQ（連合国軍最高司令官総司令部）がマッカーサーのもとで日本の民主化を進めました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '日本の戦争指導者を裁いた国際裁判は何と呼ばれる？',
          options: ['国際司法裁判', 'ニュルンベルク裁判', '軍事法廷', '東京裁判'],
          correctIndex: 3,
          explanation:
            '東京裁判（極東国際軍事裁判）は1946年から1948年にかけて行われました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '日本に無条件降伏を求めた、1945年の連合国の宣言は？',
          options: ['カイロ宣言', '大西洋憲章', 'ポツダム宣言', 'ヤルタ協定'],
          correctIndex: 2,
          explanation:
            'ポツダム宣言は1945年7月に出され、日本は8月にこれを受け入れて降伏しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: 'GHQの最高司令官として日本に来た人物は誰？',
          options: ['トルーマン', 'マッカーサー', 'アイゼンハワー', 'チャーチル'],
          correctIndex: 1,
          explanation:
            'マッカーサーはGHQの最高司令官として来日し、日本の民主化改革を指導しました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '第二次世界大戦の終結前後にソ連が占領し、現在も領土問題が続いている地域は？',
          options: ['沖縄', '小笠原諸島', '北方領土', '対馬'],
          correctIndex: 2,
          explanation:
            'ソ連は歯舞群島・色丹島・国後島・択捉島からなる北方領土を占領し、現在もロシアとの間で未解決の問題です。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question: '東京裁判が行われた期間として正しいものは？',
          options: [
            '1944年〜1945年',
            '1946年〜1948年',
            '1950年〜1952年',
            '1945年〜1946年',
          ],
          correctIndex: 1,
          explanation:
            '東京裁判（極東国際軍事裁判）は1946年から1948年にかけて行われ、戦争指導者が裁かれました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'occupation',
  },
};

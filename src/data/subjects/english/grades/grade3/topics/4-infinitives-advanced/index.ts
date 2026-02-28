import type { Topic } from '../../../../../../../data/types';

export const infinitivesAdvanced: Topic = {
  id: 'eng-infinitives-advanced',
  eraId: 'english-grade3',
  name: '不定詞（応用）',
  subtitle: 'It is for to / want人to / let人do',
  icon: '🎯',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'It is ... for 人 to ~ の形',
          content:
            '「人にとって〜することは…だ」と言いたいときは It is ... for 人 to ~ の形を使うよ。この It は「それ」ではなく、特別な使い方だよ。for のうしろに「誰にとって」を入れて、to のうしろに動詞のもとの形を続けるよ。',
          keyPoints: [
            'It is important for us to study English. = 私たちにとって英語を勉強することは大切です。',
            'It is easy for me to read this book. = 私にとってこの本を読むのは簡単です。',
            'It is difficult for him to wake up early. = 彼にとって早起きするのは難しいです。',
          ],
        },
        {
          title: 'want / ask / tell + 人 + to ~',
          content:
            '「人に〜してほしい」「人に〜するように頼む / 言う」は、want / ask / tell + 人 + to + 動詞のもとの形 で表すよ。to を忘れずにつけよう！',
          keyPoints: [
            'I want you to come. = 私はあなたに来てほしいです。',
            'She asked me to help her. = 彼女は私に手伝うように頼みました。',
            'The teacher told us to be quiet. = 先生は私たちに静かにするように言いました。',
          ],
        },
        {
          title: 'let / help + 人 + 動詞のもとの形',
          content:
            '「人に〜させてあげる」「人が〜するのを手伝う」は let / help + 人 + 動詞のもとの形 で表すよ。want や ask とちがって to をつけないのがポイント！',
          keyPoints: [
            'Let me help you. = 私にあなたを手伝わせてください。',
            'My parents let me go to the concert. = 両親は私をコンサートに行かせてくれました。',
            'Can you help me carry this box? = この箱を運ぶのを手伝ってくれますか？',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-ia-fc1',
        front: 'for us to study',
        back: 'It is important (　　) English.\n（私たちにとって英語を勉強することは大切です。）',
        hint: 'It is ... for 人 to ~ の形。「私たちにとって」「勉強すること」を入れよう。',
        explanation: 'for us（私たちにとって）+ to study（勉強すること）だよ。',
      },
      {
        id: 'eng-ia-fc2',
        front: 'for him to wake up',
        back: 'It is difficult (　　) early.\n（彼にとって早起きするのは難しいです。）',
        hint: '「彼にとって」「起きること」を入れよう。',
        explanation: 'for him（彼にとって）+ to wake up（起きること）だよ。',
      },
      {
        id: 'eng-ia-fc3',
        front: 'you to come',
        back: 'I want (　　) to the party.\n（私はあなたにパーティーに来てほしいです。）',
        hint: 'want + 人 + to ~ の形。「あなたに」「来ること」を入れよう。',
        explanation: 'want you to come で「あなたに来てほしい」だよ。',
      },
      {
        id: 'eng-ia-fc4',
        front: 'me to clean',
        back: 'My mother asked (　　) my room.\n（お母さんは私に部屋をそうじするように頼みました。）',
        hint: 'ask + 人 + to ~ の形。「私に」「そうじすること」を入れよう。',
        explanation: 'asked me to clean で「私にそうじするように頼んだ」だよ。',
      },
      {
        id: 'eng-ia-fc5',
        front: 'us to be quiet',
        back: 'The teacher told (　　).\n（先生は私たちに静かにするように言いました。）',
        hint: 'tell + 人 + to ~ の形。「私たちに」「静かにすること」を入れよう。',
        explanation: 'told us to be quiet で「私たちに静かにするように言った」だよ。',
      },
      {
        id: 'eng-ia-fc6',
        front: 'help',
        back: 'Let me (　　) you.\n（私にあなたを手伝わせてください。）',
        hint: 'let のあとは to をつけないで、動詞のもとの形をそのまま使うよ。',
        explanation: 'let + 人 + 動詞のもとの形。to はつけないよ！',
      },
      {
        id: 'eng-ia-fc7',
        front: 'me go',
        back: 'My parents let (　　) to the concert.\n（両親は私をコンサートに行かせてくれました。）',
        hint: 'let + 人 + 動詞のもとの形。to はつけないよ。',
        explanation: 'let me go で「私を行かせてくれた」。to go ではないよ。',
      },
      {
        id: 'eng-ia-fc8',
        front: 'me carry',
        back: 'Can you help (　　) this box?\n（この箱を運ぶのを手伝ってくれますか？）',
        hint: 'help + 人 + 動詞のもとの形。to はなくてOK。',
        explanation: 'help me carry で「私が運ぶのを手伝う」だよ。',
      },
      {
        id: 'eng-ia-fc9',
        front: 'to',
        back: 'I want you (　　) study hard.\n（私はあなたに一生懸命勉強してほしいです。）',
        hint: 'want + 人 + ??? + 動詞のもとの形。want のあとは…？',
        explanation: 'want のあとは to が必要だよ。want you to study が正解。',
      },
      {
        id: 'eng-ia-fc10',
        front: 'なし（to はつけない）',
        back: 'let のあとの動詞に to は必要？',
        hint: 'let は特別だよ。want とちがうポイントは？',
        explanation: 'let + 人 + 動詞のもとの形。to はつけないのがルール！',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-ia-q1',
          question: '「It is important (　　) to read books.（私たちにとって本を読むことは大切です。）」\nの (　　) に入るのは？',
          options: ['for us', 'to us', 'of us', 'us'],
          correctIndex: 0,
          explanation: 'It is ... for 人 to ~ の形。「私たちにとって」は for us だよ。',
        },
        {
          id: 'eng-ia-q2',
          question: '「I want you (　　) early.（私はあなたに早く来てほしいです。）」\nの (　　) に入るのは？',
          options: ['come', 'to come', 'coming', 'came'],
          correctIndex: 1,
          explanation: 'want + 人 + to + 動詞のもとの形。to come が正解だよ。',
        },
        {
          id: 'eng-ia-q3',
          question: '「Let me (　　) you.（私にあなたを手伝わせてください。）」\nの (　　) に入るのは？',
          options: ['to help', 'help', 'helping', 'helped'],
          correctIndex: 1,
          explanation: 'let + 人 + 動詞のもとの形。to をつけないで help をそのまま使うよ。',
        },
        {
          id: 'eng-ia-q4',
          question: '「彼女は私に窓を開けるように頼みました。」を英語にすると？',
          options: [
            'She asked me to open the window.',
            'She asked me open the window.',
            'She asked to me open the window.',
            'She asked me opening the window.',
          ],
          correctIndex: 0,
          explanation: 'ask + 人 + to ~ の形。asked me to open が正解だよ。',
        },
        {
          id: 'eng-ia-q5',
          question: '次のうち、正しい英文はどれ？',
          options: [
            'My parents let me to go out.',
            'My parents let me go out.',
            'My parents let me going out.',
            'My parents let to me go out.',
          ],
          correctIndex: 1,
          explanation: 'let + 人 + 動詞のもとの形。let me go out が正しいよ。to はつけないよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-ia-ex1',
          question: '次の日本語を英語にしよう。\n「私にとって早く起きることは難しいです。」',
          steps: [
            {
              title: 'Step 1: It is ... for 人 to ~ の形を使おう',
              content: '「人にとって〜することは…だ」のパターンだね。It is で始めよう。',
              highlight: 'It is',
            },
            {
              title: 'Step 2: 「難しい」と「私にとって」を入れよう',
              content: '「難しい」= difficult、「私にとって」= for me。It is difficult for me にしよう。',
              highlight: 'difficult for me',
            },
            {
              title: 'Step 3: 「早く起きること」をつけよう',
              content: 'to + 動詞のもとの形。「早く起きる」= wake up early。to wake up early で完成！',
              highlight: 'to wake up early',
            },
          ],
          answer: 'It is difficult for me to wake up early.\n（私にとって早く起きることは難しいです。）',
        },
        {
          id: 'eng-ia-ex2',
          question: '次の日本語を英語にしよう。\n「私はあなたにいっしょに来てほしいです。」',
          steps: [
            {
              title: 'Step 1: want + 人 + to ~ の形を使おう',
              content: '「人に〜してほしい」のパターンだね。I want で始めよう。',
              highlight: 'I want',
            },
            {
              title: 'Step 2: 「あなたに」を入れよう',
              content: 'want のうしろに you を置くよ。I want you にしよう。',
              highlight: 'you',
            },
            {
              title: 'Step 3: 「いっしょに来ること」をつけよう',
              content: 'to + 動詞のもとの形。「いっしょに来る」= come with me。to come with me で完成！',
              highlight: 'to come with me',
            },
          ],
          answer: 'I want you to come with me.\n（私はあなたにいっしょに来てほしいです。）',
        },
        {
          id: 'eng-ia-ex3',
          question: '次の日本語を英語にしよう。\n「お母さんは私にゲームをさせてくれました。」',
          steps: [
            {
              title: 'Step 1: let + 人 + 動詞のもとの形を使おう',
              content: '「人に〜させてくれた」のパターンだね。My mother let で始めよう（過去の話）。',
              highlight: 'My mother let',
            },
            {
              title: 'Step 2: 「私に」を入れよう',
              content: 'let のうしろに me を置くよ。My mother let me にしよう。',
              highlight: 'me',
            },
            {
              title: 'Step 3: 「ゲームをする」をつけよう（to なし！）',
              content: 'let のあとは to をつけないで動詞のもとの形。play video games で完成！',
              highlight: 'play video games',
            },
          ],
          answer: 'My mother let me play video games.\n（お母さんは私にゲームをさせてくれました。）',
        },
      ],
    },
    chatId: 'eng-infinitives-advanced',
  },
};

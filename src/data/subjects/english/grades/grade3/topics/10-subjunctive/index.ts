import type { Topic } from '../../../../../../../data/types';

export const subjunctive: Topic = {
  id: 'eng-subjunctive',
  eraId: 'english-grade3',
  name: '仮定法',
  subtitle: 'If I were ~ / I wish ~ で想像を伝えよう',
  icon: '💭',
  order: 10,
  content: {
    explanation: {
      sections: [
        {
          title: '仮定法ってなに？',
          content:
            '仮定法（現実とちがうことを想像して言う形）を使うと、「もし〜だったら」「〜だったらいいのに」と言えるよ。大事なルールは、現実とちがうことを言うとき過去の形を使うこと。過去の形だけど、過去の話ではないよ！',
          keyPoints: [
            'If I were you, I would study harder. = もし私があなただったら、もっと一生懸命勉強するのに。',
            'If I had a lot of money, I would travel around the world. = もしたくさんお金があったら、世界中を旅するのに。',
            'ポイント: 過去の形を使うけど過去の話ではない → 「現実じゃない」ことを表す',
          ],
        },
        {
          title: 'I wish ~ で「〜だったらいいのに」',
          content:
            'I wish のうしろも仮定法と同じで、過去の形を使うよ。「〜だったらいいのに」と現実とちがう願望を伝えることができるよ。',
          keyPoints: [
            'I wish I could fly. = 空を飛べたらいいのに。（can → could）',
            'I wish I were taller. = もっと背が高ければいいのに。（be動詞 → were）',
            'I wish I had a car. = 車を持っていたらいいのに。（have → had）',
          ],
        },
        {
          title: '仮定法のルールまとめ',
          content:
            '仮定法で使う過去の形を整理しよう。be動詞は全部 were にするのがポイントだよ。',
          keyPoints: [
            'be動詞 → 全部 were にする（I were, he were, she were...）',
            'can → could / have → had / ふつうの動詞も過去の形',
            '「〜するのに」は would + 動詞',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-subj-fc1',
        front: 'If I were you, I would study harder.',
        back: '「もし私があなただったら、もっと一生懸命\n勉強するのに。」を英語にすると？',
        hint: '仮定法では be動詞は全部 were だよ',
        explanation: 'If I were 〜, I would 〜. の形で「もし〜だったら、〜するのに」だよ。',
      },
      {
        id: 'eng-subj-fc2',
        front: 'I wish I could fly.',
        back: '「空を飛べたらいいのに。」を英語にすると？',
        hint: 'I wish のうしろは過去の形。can → ???',
        explanation: 'can の過去の形は could。I wish I could fly. だよ。',
      },
      {
        id: 'eng-subj-fc3',
        front: 'If I had a lot of money, I would travel.',
        back: '「もしたくさんお金があったら、旅するのに。」\nを英語にすると？',
        hint: 'have の過去の形は？',
        explanation: 'have → had。If I had 〜, I would 〜. の形だよ。',
      },
      {
        id: 'eng-subj-fc4',
        front: 'were',
        back: '仮定法で be動詞はぜんぶ何になる？',
        hint: 'I were, he were, she were... ぜんぶ同じ形！',
        explanation: '仮定法では be動詞は主語に関係なく全部 were にするよ。',
      },
      {
        id: 'eng-subj-fc5',
        front: 'would',
        back: '仮定法で「〜するのに」を表す言葉は？\n（would / could / should）',
        hint: '「もし〜だったら、〜するのに」の「するのに」は？',
        explanation: 'would + 動詞で「〜するのに」を表すよ。',
      },
      {
        id: 'eng-subj-fc6',
        front: 'I wish I were taller.',
        back: '「もっと背が高ければいいのに。」を英語にすると？',
        hint: 'I wish のうしろ、be動詞は？',
        explanation: '仮定法では be動詞は全部 were。I wish I were taller. だよ。',
      },
      {
        id: 'eng-subj-fc7',
        front: 'I wish I had a car.',
        back: '「車を持っていたらいいのに。」を英語にすると？',
        hint: 'have の過去の形は had だよ',
        explanation: 'I wish I had a car. で「車を持っていたらいいのに」だよ。',
      },
      {
        id: 'eng-subj-fc8',
        front: 'If I knew the answer, I would tell you.',
        back: '「もし答えを知っていたら、教えるのに。」\nを英語にすると？',
        hint: 'know の過去の形は？',
        explanation: 'know → knew。If I knew 〜, I would tell 〜. の形だよ。',
      },
      {
        id: 'eng-subj-fc9',
        front: 'could',
        back: '仮定法で can を過去の形にすると？',
        hint: 'can → ???（「〜できた」の形と同じ）',
        explanation: 'can の過去の形は could だよ。',
      },
      {
        id: 'eng-subj-fc10',
        front: 'If she were here, she would help us.',
        back: '「もし彼女がここにいたら、助けてくれるのに。」\nを英語にすると？',
        hint: 'she のときも be動詞は were だよ',
        explanation: '仮定法では主語に関係なく be動詞は全部 were だよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-subj-q1',
          question: '「もし私があなただったら、もっと勉強するのに。」を英語にすると？',
          options: [
            'If I am you, I will study harder.',
            'If I were you, I would study harder.',
            'If I was you, I will study harder.',
            'If I be you, I would study harder.',
          ],
          correctIndex: 1,
          explanation: '仮定法では be動詞は全部 were。「〜するのに」は would + 動詞だよ。',
        },
        {
          id: 'eng-subj-q2',
          question: '「空を飛べたらいいのに。」を英語にすると？',
          options: [
            'I wish I can fly.',
            'I wish I will fly.',
            'I wish I could fly.',
            'I wish I flew.',
          ],
          correctIndex: 2,
          explanation: 'I wish のうしろは過去の形にするよ。can → could だね。',
        },
        {
          id: 'eng-subj-q3',
          question: '仮定法で be動詞はどうなる？',
          options: [
            '主語にあわせて am / is / are を使い分ける',
            '全部 was にする',
            '全部 were にする',
            '全部 be にする',
          ],
          correctIndex: 2,
          explanation: '仮定法では be動詞は主語に関係なく全部 were にするよ。I were, he were, she were... だよ。',
        },
        {
          id: 'eng-subj-q4',
          question: '「If I (　　) a lot of money, I would buy a house.（たくさんお金があったら、家を買うのに。）」の (　　) に入るのは？',
          options: ['have', 'has', 'had', 'having'],
          correctIndex: 2,
          explanation: '仮定法では過去の形を使うよ。have → had だね。',
        },
        {
          id: 'eng-subj-q5',
          question: '「I wish I (　　) taller.（もっと背が高ければいいのに。）」の (　　) に入るのは？',
          options: ['am', 'is', 'was', 'were'],
          correctIndex: 3,
          explanation: 'I wish のうしろも仮定法。be動詞は全部 were だよ。',
        },
        {
          id: 'eng-subj-q6',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「もし私があなたなら、勉強するのに。」という英文を完成させよう。\n(　　)(　　)(　　)(　　), I would study.',
          words: ['were', 'you', 'I', 'if'],
          correctOrder: [3, 2, 0, 1],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「If I were you, I would study.」が正解。If（もし）+ I（私が）+ were（〜だったら）+ you（あなた）の順番だよ。仮定法では be動詞は全部 were だよ。',
        },
        {
          id: 'eng-subj-q7',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「空を飛べたらいいのに。」という英文を完成させよう。\nI wish (　　)(　　)(　　).',
          words: ['fly', 'could', 'I'],
          correctOrder: [2, 1, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「I wish I could fly.」が正解。I（私が）+ could（〜できたら）+ fly（飛ぶ）の順番だよ。can の仮定法は could だよ。',
        },
        {
          id: 'eng-subj-q8',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「もっと時間があれば、旅行するのに。」という英文を完成させよう。\n(　　)(　　)(　　)(　　)(　　), I would travel.',
          words: ['more', 'had', 'I', 'if', 'time'],
          correctOrder: [3, 2, 1, 0, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「If I had more time, I would travel.」が正解。If（もし）+ I（私が）+ had（持っていたら）+ more（もっと）+ time（時間）の順番だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-subj-ex1',
          question: '次の日本語を英語にしよう。\n「もし私があなただったら、もっと一生懸命勉強するのに。」',
          steps: [
            {
              title: 'Step 1: 「もし私があなただったら」を作ろう',
              content: '「もし〜だったら」は If 〜。仮定法では be動詞は全部 were だから、If I were you になるよ。',
              highlight: 'If I were you',
            },
            {
              title: 'Step 2: 「もっと一生懸命勉強するのに」を作ろう',
              content: '「〜するのに」は would + 動詞。「もっと一生懸命勉強する」は study harder だよ。',
              highlight: 'I would study harder',
            },
            {
              title: 'Step 3: 合体させよう',
              content: 'If の部分とコンマ、would の部分をつなげると完成！',
              highlight: 'If I were you, I would study harder.',
            },
          ],
          answer: 'If I were you, I would study harder.\n（もし私があなただったら、もっと一生懸命勉強するのに。）',
        },
        {
          id: 'eng-subj-ex2',
          question: '次の日本語を英語にしよう。\n「空を飛べたらいいのに。」',
          steps: [
            {
              title: 'Step 1: 「〜だったらいいのに」の形を確認しよう',
              content: '「〜だったらいいのに」は I wish 〜 の形を使うよ。',
              highlight: 'I wish',
            },
            {
              title: 'Step 2: 「空を飛べたら」を過去の形にしよう',
              content: '「飛べる」は can fly。仮定法では can → could にするよ。',
              highlight: 'I could fly',
            },
            {
              title: 'Step 3: 完成！',
              content: 'I wish のうしろに I could fly をくっつけると完成！',
              highlight: 'I wish I could fly.',
            },
          ],
          answer: 'I wish I could fly.\n（空を飛べたらいいのに。）',
        },
        {
          id: 'eng-subj-ex3',
          question: '次の日本語を英語にしよう。\n「もしたくさんお金があったら、世界中を旅するのに。」',
          steps: [
            {
              title: 'Step 1: 「もしたくさんお金があったら」を作ろう',
              content: '「もし〜あったら」は If 〜。have の過去の形は had。「たくさんのお金」は a lot of money だよ。',
              highlight: 'If I had a lot of money',
            },
            {
              title: 'Step 2: 「世界中を旅するのに」を作ろう',
              content: '「〜するのに」は would + 動詞。「世界中を旅する」は travel around the world だよ。',
              highlight: 'I would travel around the world',
            },
            {
              title: 'Step 3: 合体させよう',
              content: 'If の部分とコンマ、would の部分をつなげると完成！',
              highlight: 'If I had a lot of money, I would travel around the world.',
            },
          ],
          answer: 'If I had a lot of money, I would travel around the world.\n（もしたくさんお金があったら、世界中を旅するのに。）',
        },
      ],
    },
    chatId: 'eng-subjunctive',
  },
};

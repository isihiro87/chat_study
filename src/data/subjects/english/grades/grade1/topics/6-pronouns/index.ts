import type { Topic } from '../../../../../../../data/types';

export const pronouns: Topic = {
  id: 'eng-pronouns',
  eraId: 'english-grade1',
  name: '代名詞',
  subtitle: 'I / you / he / she と my / your の使い分け',
  icon: '👥',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '「だれが」を表す代名詞',
          content:
            '英語には「私」「あなた」「彼」「彼女」のように、名前のかわりに使う言葉がたくさんあるよ。これらを代名詞（名前のかわりに使う言葉）と呼ぶんだ。',
          keyPoints: [
            'I = 私 / you = あなた / he = 彼 / she = 彼女',
            'it = それ（もの・動物）/ we = 私たち / they = 彼ら',
            'I は am、he/she/it は is、you/we/they は are を使うよ',
          ],
        },
        {
          title: '「〜の」を表す形',
          content:
            '「私の」「あなたの」と言いたいときは、代名詞の形がかわるよ。この形は名詞の前に置いて使うんだ。',
          keyPoints: [
            'I → my（私の）: This is my book. = これは私の本です。',
            'you → your（あなたの）: This is your pen. = これはあなたのペンです。',
            'he → his（彼の）/ she → her（彼女の）',
            'we → our（私たちの）/ they → their（彼らの）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-pn-fc1',
        front: 'my',
        back: 'This is (　　) book.\n（これは私の本です。）',
        hint: '「私の」は I じゃなくて…？',
        explanation: '「私の」は my だよ。I → my にかわるよ。',
      },
      {
        id: 'eng-pn-fc2',
        front: 'your',
        back: 'Is this (　　) pen?\n（これはあなたのペンですか？）',
        hint: '「あなたの」は you じゃなくて…？',
        explanation: '「あなたの」は your だよ。you → your にかわるよ。',
      },
      {
        id: 'eng-pn-fc3',
        front: 'his',
        back: 'That is (　　) bag.\n（あれは彼のカバンです。）',
        hint: '「彼の」は he じゃなくて…？',
        explanation: '「彼の」は his だよ。he → his にかわるよ。',
      },
      {
        id: 'eng-pn-fc4',
        front: 'her',
        back: 'I like (　　) cat.\n（私は彼女のネコが好きです。）',
        hint: '「彼女の」は she じゃなくて…？',
        explanation: '「彼女の」は her だよ。she → her にかわるよ。',
      },
      {
        id: 'eng-pn-fc5',
        front: 'our',
        back: 'This is (　　) school.\n（これは私たちの学校です。）',
        hint: '「私たちの」は we じゃなくて…？',
        explanation: '「私たちの」は our だよ。we → our にかわるよ。',
      },
      {
        id: 'eng-pn-fc6',
        front: 'their',
        back: 'I know (　　) names.\n（私は彼らの名前を知っています。）',
        hint: '「彼らの」は they じゃなくて…？',
        explanation: '「彼らの」は their だよ。they → their にかわるよ。',
      },
      {
        id: 'eng-pn-fc7',
        front: 'We',
        back: '(　　) are friends.\n（私たちは友達です。）',
        hint: '「私たち」を英語で言うと…？',
        explanation: '「私たち」は we だよ。2人以上だから are を使うよ。',
      },
      {
        id: 'eng-pn-fc8',
        front: 'They',
        back: '(　　) are students.\n（彼らは生徒です。）',
        hint: '「彼ら」を英語で言うと…？',
        explanation: '「彼ら」は they だよ。2人以上だから are を使うよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-pn-q1',
          question: '「これは私の本です。」を英語にすると？',
          options: [
            'This is I book.',
            'This is me book.',
            'This is my book.',
            'This is mine book.',
          ],
          correctIndex: 2,
          explanation: '「私の」は my だよ。This is my book.',
        },
        {
          id: 'eng-pn-q2',
          question: '「あれは彼のカバンです。」を英語にすると？',
          options: [
            'That is he bag.',
            'That is him bag.',
            'That is her bag.',
            'That is his bag.',
          ],
          correctIndex: 3,
          explanation: '「彼の」は his だよ。That is his bag.',
        },
        {
          id: 'eng-pn-q3',
          question: '「彼らは生徒です。」の「彼ら」にあたる英語は？',
          options: ['We', 'You', 'They', 'He'],
          correctIndex: 2,
          explanation: '「彼ら」は they だよ。They are students.',
        },
        {
          id: 'eng-pn-q4',
          question: '「私たちの学校」を英語にすると？',
          options: ['we school', 'us school', 'our school', 'ours school'],
          correctIndex: 2,
          explanation: '「私たちの」は our だよ。our school',
        },
        {
          id: 'eng-pn-q5',
          question: '「I like (　　) cat.（私は彼女のネコが好きです。）」\nの (　　) に入るのは？',
          options: ['she', 'her', 'his', 'hers'],
          correctIndex: 1,
          explanation: '「彼女の」は her だよ。she → her にかわるよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-pn-ex1',
          question: '次の日本語を英語にしよう。\n「これは私のペンです。」',
          steps: [
            {
              title: 'Step 1: 「これは」を英語にしよう',
              content: '「これは」は近くのものだから this を使うよ。',
              highlight: 'This',
            },
            {
              title: 'Step 2: 「〜です」を英語にしよう',
              content: '「〜です」は be動詞。this のときは is だよ。',
              highlight: 'is',
            },
            {
              title: 'Step 3: 「私のペン」を英語にしよう',
              content: '「私の」は my。ペンは pen。「my + 名詞」の形で使うよ。',
              highlight: 'my pen',
            },
          ],
          answer: 'This is my pen.（これは私のペンです。）',
        },
        {
          id: 'eng-pn-ex2',
          question: '次の日本語を英語にしよう。\n「彼女は私たちの先生です。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「彼女は」→ 英語で She だね。',
              highlight: 'She',
            },
            {
              title: 'Step 2: 「〜です」を英語にしよう',
              content: 'She は1人だから be動詞は is だよ。',
              highlight: 'is',
            },
            {
              title: 'Step 3: 「私たちの先生」を英語にしよう',
              content: '「私たちの」は our。「先生」は teacher だよ。',
              highlight: 'our teacher',
            },
          ],
          answer: 'She is our teacher.（彼女は私たちの先生です。）',
        },
        {
          id: 'eng-pn-ex3',
          question: '次の文を「〜ですか？」の文にして、Yes で答えよう。\nThis is your bag.（これはあなたのカバンです。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content: 'This is your bag. の中で be動詞は is だね。',
              highlight: 'is',
            },
            {
              title: 'Step 2: is を前にもっていこう',
              content: 'is を This の前にもっていって、おわりに ? をつけよう。',
              highlight: 'Is this your bag?',
            },
            {
              title: 'Step 3: Yes で答えよう',
              content: '「あなたの〜？」と聞かれたら「私の〜」と答えるよ。your → my にかえて答えるんだ。',
              highlight: 'Yes, it is.',
            },
          ],
          answer: 'Is this your bag? — Yes, it is.\n（これはあなたのカバンですか？ — はい、そうです。）',
        },
      ],
    },
    chatId: 'eng-pronouns',
  },
};

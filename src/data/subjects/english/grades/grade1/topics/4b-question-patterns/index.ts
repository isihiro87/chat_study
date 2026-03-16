import type { Topic } from '../../../../../../../data/types';

export const questionPatterns: Topic = {
  id: 'eng-question-patterns',
  eraId: 'english-grade1',
  name: '疑問詞の応用',
  subtitle: '前置詞 / What+名詞 / How do you ~?',
  icon: '❓',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '前置詞（場所・時間を表す言葉）',
          content:
            '場所や時間をくわしく伝えるときに使う短い言葉を「前置詞」というよ。where で聞かれたとき、答えに前置詞を使って場所を伝えるよ。交通手段を伝えるときも前置詞 by を使うよ。',
          keyPoints: [
            'in = 〜の中に（in the box / in Tokyo / in the morning）',
            'on = 〜の上に（on the desk / on Sunday）',
            'at = 〜に（at school / at seven）',
            'near = 〜の近くに（near the station）',
            'by = 〜のそばに / 〜で（by the window / by bus）',
            'under = 〜の下に（under the desk）',
            'on foot =「歩いて」（I go to school on foot.）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-qp-fc1',
        front: 'near',
        back: 'The park is (　　) the station.\n（公園は駅の近くにあります。）',
        hint: '「〜の近くに」を表す前置詞は…？',
        explanation: '「〜の近くに」は near だよ。near the station = 駅の近くに',
      },
      {
        id: 'eng-qp-fc2',
        front: 'by',
        back: 'I come to school (　　) bus.\n（私はバスで学校に来ます。）',
        hint: '交通手段を表すときに使う前置詞は…？',
        explanation: '交通手段は by を使うよ。by bus = バスで、by bike = 自転車で',
      },
      {
        id: 'eng-qp-fc3',
        front: 'under',
        back: 'The cat is (　　) the table.\n（ネコはテーブルの下にいます。）',
        hint: '「〜の下に」を表す前置詞は…？',
        explanation: '「〜の下に」は under だよ。under the table = テーブルの下に',
      },
      {
        id: 'eng-qp-fc4',
        front: 'What sport do you play?',
        back: '(　　　　　　) do you play?\n（あなたは何のスポーツをしますか？）',
        hint: '「何のスポーツ」= What + …？',
        explanation: 'What + 名詞 で「何の〜」になるよ。What sport = 何のスポーツ',
      },
      {
        id: 'eng-qp-fc5',
        front: 'What subject do you like?',
        back: '(　　　　　　) do you like?\n（あなたは何の教科が好きですか？）',
        hint: '「何の教科」= What + …？',
        explanation: 'What subject = 何の教科。What subject do you like? で「何の教科が好き？」',
      },
      {
        id: 'eng-qp-fc6',
        front: 'by bike',
        back: 'How do you come to school?\n→ I come to school (　　).\n（自転車で学校に来ます。）',
        hint: '「自転車で」= by + …？',
        explanation: 'by bike = 自転車で。How do you ~? は「どうやって〜しますか？」だよ。',
      },
      {
        id: 'eng-qp-fc7',
        front: 'on foot',
        back: 'How do you come to school?\n→ I come to school (　　).\n（歩いて学校に来ます。）',
        hint: '「歩いて」は on + …？ ※ by は使わないよ！',
        explanation: '「歩いて」は on foot だよ。by foot ではないので注意！',
      },
      {
        id: 'eng-qp-fc8',
        front: 'in',
        back: 'I live (　　) Tokyo.\n（私は東京に住んでいます。）',
        hint: '「〜の中に」「〜に」を表す前置詞は…？',
        explanation: '「〜の中に」「〜に」は in だよ。in Tokyo = 東京に、in the box = 箱の中に',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-qp-q1',
          question: 'The book is ___ the desk.（本は机の上にあります。）(　　)に入る言葉は？',
          options: ['in', 'on', 'at', 'by'],
          correctIndex: 1,
          explanation: '「〜の上に」は on だよ。on the desk = 机の上に',
        },
        {
          id: 'eng-qp-q2',
          question: '「あなたは何時に起きますか？」を英語にすると？',
          options: [
            'How time do you get up?',
            'When time do you get up?',
            'What time do you get up?',
            'What do you get up?',
          ],
          correctIndex: 2,
          explanation: '「何時」は what time だよ。What time do you get up?',
        },
        {
          id: 'eng-qp-q3',
          question: 'How do you come to school? に「自転車で来ます」と答えるとき、正しいのは？',
          options: [
            'I come to school on bike.',
            'I come to school by bike.',
            'I come to school in bike.',
            'I come to school at bike.',
          ],
          correctIndex: 1,
          explanation: '交通手段は by を使うよ。by bike = 自転車で。by のあとに a / the はつけないよ。',
        },
        {
          id: 'eng-qp-q4',
          question: 'The library is ___ the station.（図書館は駅の近くにあります。）(　　)に入る言葉は？',
          options: ['on', 'under', 'near', 'in'],
          correctIndex: 2,
          explanation: '「〜の近くに」は near だよ。near the station = 駅の近くに',
        },
        {
          id: 'eng-qp-q5',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「あなたは何時に起きますか？」という英文を作ろう。',
          words: ['do', 'time', 'get up', 'you', 'what'],
          correctOrder: [4, 1, 0, 3, 2],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation: '「What time do you get up?」が正解。What time（何時）+ do you（あなたは〜しますか）+ get up（起きる）の順番だよ。',
        },
        {
          id: 'eng-qp-q6',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「あなたはどうやって学校に来ますか？」という英文を作ろう。',
          words: ['come', 'how', 'to school', 'you', 'do'],
          correctOrder: [1, 4, 3, 0, 2],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation: '「How do you come to school?」が正解。How（どうやって）+ do you（あなたは〜しますか）+ come to school（学校に来る）の順番だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-qp-ex1',
          question: '次の日本語を英語にしよう。\n「あなたはどうやって学校に来ますか？」',
          steps: [
            {
              title: 'Step 1: 「どうやって」を英語にしよう',
              content: '「どうやって」は英語で how だよ。いちばん最初に置こう！',
              highlight: 'How',
            },
            {
              title: 'Step 2: 「〜しますか？」を英語にしよう',
              content: '「あなたは〜しますか？」は do you だね。「来る」は come だよ。',
              highlight: 'do you come',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'How + do you come + to school + ? で完成！答えるときは by bike（自転車で）、by bus（バスで）、on foot（歩いて）などを使うよ。',
              highlight: 'How do you come to school?',
            },
          ],
          answer: 'How do you come to school?（あなたはどうやって学校に来ますか？）',
        },
        {
          id: 'eng-qp-ex2',
          question: '次の日本語を英語にしよう。\n「今何時ですか？」',
          steps: [
            {
              title: 'Step 1: 「何時」を英語にしよう',
              content: '「何時」は what time だよ。what と time の2つの単語を使うよ！',
              highlight: 'What time',
            },
            {
              title: 'Step 2: 「ですか？」を英語にしよう',
              content: '「今」を表す it を使うよ。it のbe動詞は is だね。',
              highlight: 'is it',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'What time + is it + ? で完成！答えるときは It is seven. のように言うよ。',
              highlight: 'What time is it?',
            },
          ],
          answer: 'What time is it?（今何時ですか？）',
        },
      ],
    },
    chatId: 'eng-question-patterns',
  },
};

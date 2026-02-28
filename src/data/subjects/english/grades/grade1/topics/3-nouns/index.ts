import type { Topic } from '../../../../../../../data/types';

export const nouns: Topic = {
  id: 'eng-nouns',
  eraId: 'english-grade1',
  name: '名詞',
  subtitle: '単数・複数 / this・that',
  icon: '📝',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '名詞の「1つ」と「2つ以上」',
          content:
            '英語では、ものが1つのときは前に a（または an）をつけて、2つ以上のときはおしりに s をつけるよ。a と an のつかい分けは、次のことばが a, i, u, e, o の音ではじまるときは an、それ以外は a だよ。',
          keyPoints: [
            '1つのとき → a book（本が1冊）、an apple（リンゴが1つ）',
            '2つ以上のとき → books（本が2冊以上）、apples（リンゴが2つ以上）',
            'x, s, ch, sh で終わるときは es → box → boxes / class → classes',
            'y で終わるときは y を i にかえて es → city → cities',
          ],
        },
        {
          title: 'this / that のつかい方',
          content:
            'this は「これ」で近くのものを指すとき、that は「あれ」で遠くのものを指すときに使うよ。「〜ですか？」と聞くときは be動詞を前にもってきて、答えるときは it を使うよ。',
          keyPoints: [
            'this = 近くのもの → This is a pen.（これはペンです。）',
            'that = 遠くのもの → That is a book.（あれは本です。）',
            '疑問文 → Is that a school?（あれは学校ですか？）',
            '答え方 → Yes, it is. / No, it is not.',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-noun-fc1',
        front: 'books',
        back: 'I have two (　　).\n（私は本を2冊もっています。）',
        hint: '2つ以上のとき、名詞のおしりに何をつける？',
        explanation: '2つ以上のときはおしりに s をつけるよ。book → books',
      },
      {
        id: 'eng-noun-fc2',
        front: 'boxes',
        back: 'box の「2つ以上」の形は？',
        hint: 'x で終わることばには s じゃなくて…？',
        explanation: 'x で終わるときは es をつけるよ。box → boxes',
      },
      {
        id: 'eng-noun-fc3',
        front: 'cities',
        back: 'city の「2つ以上」の形は？',
        hint: 'y で終わることばはとくべつなつけ方があるよ',
        explanation: 'y を i にかえて es をつけるよ。city → cities',
      },
      {
        id: 'eng-noun-fc4',
        front: 'children',
        back: 'child の「2つ以上」の形は？',
        hint: 'これはとくべつな変わり方をするよ。そのまま覚えよう！',
        explanation: 'child → children。とくべつな形なので覚えてしまおう。',
      },
      {
        id: 'eng-noun-fc5',
        front: 'an',
        back: '(　　) apple\n（リンゴ1つ）',
        hint: 'a, i, u, e, o の音ではじまるときは a じゃなくて…？',
        explanation: 'apple は a の音ではじまるから an をつけるよ。',
      },
      {
        id: 'eng-noun-fc6',
        front: 'This',
        back: '(　　) is a pen.\n（これはペンです。）',
        hint: '近くにあるものを指すときのことばは…？',
        explanation: '近くのものは this を使うよ。This is a pen.',
      },
      {
        id: 'eng-noun-fc7',
        front: 'That',
        back: '(　　) is a school.\n（あれは学校です。）',
        hint: '遠くにあるものを指すときのことばは…？',
        explanation: '遠くのものは that を使うよ。That is a school.',
      },
      {
        id: 'eng-noun-fc8',
        front: 'it',
        back: 'Is that a library? — Yes, (　　) is.\n（あれは図書館ですか？— はい、そうです。）',
        hint: 'this / that に答えるときは何を使う？',
        explanation: 'this や that の質問に答えるときは it を使うよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-noun-q1',
          question: '「I have three (　　).（私はペンを3本もっています。）」\nの (　　) に入るのは？',
          options: ['pen', 'pens', 'a pen', 'penes'],
          correctIndex: 1,
          explanation: '2つ以上のときはおしりに s をつけるよ。pen → pens',
        },
        {
          id: 'eng-noun-q2',
          question: 'box の「2つ以上」の形で正しいのは？',
          options: ['boxs', 'boxes', 'boxies', 'box'],
          correctIndex: 1,
          explanation: 'x で終わることばには es をつけるよ。box → boxes',
        },
        {
          id: 'eng-noun-q3',
          question: '「(　　) is a dog.（あれはイヌです。）」\n遠くのイヌを指して言うとき、(　　) に入るのは？',
          options: ['This', 'That', 'It', 'A'],
          correctIndex: 1,
          explanation: '遠くのものを指すときは that を使うよ。That is a dog.',
        },
        {
          id: 'eng-noun-q4',
          question: '「1つのリンゴ」を英語にすると？',
          options: ['a apple', 'an apple', 'apple', 'one the apple'],
          correctIndex: 1,
          explanation: 'apple は a の音ではじまるから a じゃなくて an をつけるよ。an apple',
        },
        {
          id: 'eng-noun-q5',
          question: '「Is this a cat?（これはネコですか？）」に「はい」で答えるとき、正しいのは？',
          options: [
            'Yes, this is.',
            'Yes, it is.',
            'Yes, that is.',
            'Yes, a cat.',
          ],
          correctIndex: 1,
          explanation: 'this や that の質問に答えるときは it を使うよ。Yes, it is.',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-noun-ex1',
          question: '次の日本語を英語にしよう。\n「これはペンです。」',
          steps: [
            {
              title: 'Step 1: 「これ」を英語にしよう',
              content: '「これは」は近くのものを指しているから、英語では this を使うよ。',
              highlight: 'This',
            },
            {
              title: 'Step 2: 「〜です」を英語にしよう',
              content: '「〜です」は be動詞。this のときは is を使うよ。',
              highlight: 'is',
            },
            {
              title: 'Step 3: 「ペン」を英語にしよう',
              content: 'ペンは pen。1つだから前に a をつけて a pen だよ。',
              highlight: 'a pen',
            },
          ],
          answer: 'This is a pen.（これはペンです。）',
        },
        {
          id: 'eng-noun-ex2',
          question: '次の日本語を英語にしよう。\n「私はリンゴを5つもっています。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「私は」→ 英語で I だね。',
              highlight: 'I',
            },
            {
              title: 'Step 2: 「どうする？」をさがそう',
              content: '「もっている」→ 英語で have だよ。I のときはそのまま have！',
              highlight: 'have',
            },
            {
              title: 'Step 3: 「リンゴを5つ」を英語にしよう',
              content: '5つだから2つ以上！apple のおしりに s をつけて five apples にするよ。',
              highlight: 'five apples',
            },
          ],
          answer: 'I have five apples.（私はリンゴを5つもっています。）',
        },
        {
          id: 'eng-noun-ex3',
          question: '次の文を「〜ですか？」の文にして、Yes で答えよう。\nThat is a library.（あれは図書館です。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content: 'That is a library. の中で、be動詞をさがすと… is があるね！',
              highlight: 'is',
            },
            {
              title: 'Step 2: is を文のいちばん最初にもっていこう',
              content: 'is を That の前にもっていって、おわりに ? をつけよう！',
              highlight: 'Is that',
            },
            {
              title: 'Step 3: Yes で答えよう',
              content: 'this / that に答えるときは it を使うよ。「はい」だから Yes, it is.',
              highlight: 'Yes, it is.',
            },
          ],
          answer: 'Is that a library? — Yes, it is.\n（あれは図書館ですか？ — はい、そうです。）',
        },
      ],
    },
    chatId: 'eng-nouns',
  },
};

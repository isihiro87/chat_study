import type { Topic } from '../../../../../../../data/types';

export const pastParticipleModifier: Topic = {
  id: 'eng-past-participle-modifier',
  eraId: 'english-grade3',
  name: '過去分詞による後置修飾',
  subtitle: '名詞のうしろから「〜された…」と説明を加える形',
  icon: '📌',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '過去分詞で名詞をうしろから説明しよう',
          content:
            '過去分詞を使うと、名詞のうしろから「〜された」という説明を加えることができるよ。日本語だと「英語で書かれた本」のように前から説明するけど、英語では a book written in English のように名詞のうしろに置くんだ。',
          keyPoints: [
            'a book written in English = 英語で書かれた本（名詞のうしろから説明）',
            'the window broken by the ball = ボールで割られた窓',
            'a language spoken in many countries = たくさんの国で話されている言語',
          ],
        },
        {
          title: '1語だけなら前に置ける',
          content:
            '過去分詞が1語だけのときは、名詞の前に置くこともできるよ。うしろに by 〜 や in 〜 などの説明がつくときは、名詞のうしろに置くのがルールだよ。',
          keyPoints: [
            '1語だけ → 前に置ける: a broken window（壊れた窓）',
            '説明がつくとき → うしろに置く: the window broken by the ball（ボールで壊された窓）',
            'by 〜 で「〜によって」を伝えられる: a picture painted by Picasso（ピカソが描いた絵）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-ppm-fc1',
        front: 'a book written in English',
        back: '「英語で書かれた本」を英語にすると？',
        hint: '「書かれた」は write の過去分詞 written だよ',
        explanation: 'book のうしろに written in English を置いて説明するよ。',
      },
      {
        id: 'eng-ppm-fc2',
        front: 'the window broken by the ball',
        back: '「ボールで割られた窓」を英語にすると？',
        hint: '「割られた」は break の過去分詞 broken だよ',
        explanation: 'window のうしろに broken by the ball を置くよ。',
      },
      {
        id: 'eng-ppm-fc3',
        front: 'a language spoken in many countries',
        back: '「たくさんの国で話されている言語」を英語にすると？',
        hint: '「話されている」は speak の過去分詞 spoken だよ',
        explanation: 'language のうしろに spoken in many countries を置くよ。',
      },
      {
        id: 'eng-ppm-fc4',
        front: 'a picture painted by Picasso',
        back: '「ピカソが描いた絵」を英語にすると？',
        hint: '「描かれた」は paint の過去分詞 painted。「〜によって」は by だよ',
        explanation: 'picture のうしろに painted by Picasso を置くよ。',
      },
      {
        id: 'eng-ppm-fc5',
        front: 'written',
        back: 'write（書く）の過去分詞は？',
        hint: 'write - wrote - ???',
        explanation: 'write → wrote → written だよ。',
      },
      {
        id: 'eng-ppm-fc6',
        front: 'spoken',
        back: 'speak（話す）の過去分詞は？',
        hint: 'speak - spoke - ???',
        explanation: 'speak → spoke → spoken だよ。',
      },
      {
        id: 'eng-ppm-fc7',
        front: 'broken',
        back: 'break（壊す）の過去分詞は？',
        hint: 'break - broke - ???',
        explanation: 'break → broke → broken だよ。',
      },
      {
        id: 'eng-ppm-fc8',
        front: 'a song loved by everyone',
        back: '「みんなに愛されている歌」を英語にすると？',
        hint: '「愛されている」は love の過去分詞 loved だよ',
        explanation: 'song のうしろに loved by everyone を置くよ。',
      },
      {
        id: 'eng-ppm-fc9',
        front: 'a letter sent from Tokyo',
        back: '「東京から送られた手紙」を英語にすると？',
        hint: '「送られた」は send の過去分詞 sent だよ',
        explanation: 'letter のうしろに sent from Tokyo を置くよ。',
      },
      {
        id: 'eng-ppm-fc10',
        front: 'a cake made by my mother',
        back: '「お母さんが作ったケーキ」を英語にすると？',
        hint: '「作られた」は make の過去分詞 made だよ',
        explanation: 'cake のうしろに made by my mother を置くよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-ppm-q1',
          question: '「英語で書かれた本」を英語にすると？',
          options: [
            'a book written in English',
            'a written in English book',
            'a book writing in English',
            'a English written book',
          ],
          correctIndex: 0,
          explanation: '過去分詞 + 説明がつくときは名詞のうしろに置くよ。a book written in English が正しいよ。',
        },
        {
          id: 'eng-ppm-q2',
          question: '「ピカソが描いた絵は有名です。」を英語にすると？',
          options: [
            'The picture painting by Picasso is famous.',
            'The picture painted by Picasso is famous.',
            'The painted by Picasso picture is famous.',
            'The picture paint by Picasso is famous.',
          ],
          correctIndex: 1,
          explanation: '「描かれた」は過去分詞 painted。picture のうしろに painted by Picasso を置くよ。',
        },
        {
          id: 'eng-ppm-q3',
          question: '次のうち正しい英文はどれ？',
          options: [
            'This is a used by many people language.',
            'This is a language using by many people.',
            'This is a language used by many people.',
            'This is a language use by many people.',
          ],
          correctIndex: 2,
          explanation: '「たくさんの人に使われている」は過去分詞 used。language のうしろに置くよ。',
        },
        {
          id: 'eng-ppm-q4',
          question: '「壊された窓」を英語にすると？（1語で説明する場合）',
          options: [
            'a window broken',
            'a breaking window',
            'a broke window',
            'a broken window',
          ],
          correctIndex: 3,
          explanation: '過去分詞1語だけなら名詞の前に置けるよ。a broken window が正しいよ。',
        },
        {
          id: 'eng-ppm-q5',
          question: '「お母さんが作ったケーキ」を英語にすると？',
          options: [
            'a cake make by my mother',
            'a making by my mother cake',
            'a made by my mother cake',
            'a cake made by my mother',
          ],
          correctIndex: 3,
          explanation: '「作られた」は過去分詞 made。cake のうしろに made by my mother を置くよ。',
        },
        {
          id: 'eng-ppm-q6',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「これは英語で書かれた本です。」という英文を完成させよう。\nThis is a book (　　)(　　)(　　).',
          words: ['English', 'in', 'written'],
          correctOrder: [2, 1, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「This is a book written in English.」が正解。written（書かれた）+ in（〜で）+ English（英語）の順番だよ。過去分詞のかたまりを名詞のうしろに置くよ。',
        },
        {
          id: 'eng-ppm-q7',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「私は彼女によって書かれた手紙を見つけました。」という英文を完成させよう。\nI found a letter (　　)(　　)(　　).',
          words: ['her', 'by', 'written'],
          correctOrder: [2, 1, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「I found a letter written by her.」が正解。written（書かれた）+ by（〜によって）+ her（彼女）の順番だよ。',
        },
        {
          id: 'eng-ppm-q8',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「ブラジルで話されている言語はポルトガル語です。」という英文を完成させよう。\nThe language (　　)(　　)(　　) is Portuguese.',
          words: ['Brazil', 'spoken', 'in'],
          correctOrder: [1, 2, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「The language spoken in Brazil is Portuguese.」が正解。spoken（話されている）+ in（〜で）+ Brazil（ブラジル）の順番だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-ppm-ex1',
          question: '次の日本語を英語にしよう。\n「これは英語で書かれた本です。」',
          steps: [
            {
              title: 'Step 1: まず「これは〜です」の形を作ろう',
              content: '「これは〜です」は This is 〜 だね。「本」は a book だよ。',
              highlight: 'This is a book',
            },
            {
              title: 'Step 2: 「英語で書かれた」を過去分詞で表そう',
              content: '「書かれた」は write の過去分詞 written。「英語で」は in English。あわせて written in English だよ。',
              highlight: 'written in English',
            },
            {
              title: 'Step 3: 名詞のうしろに置こう',
              content: 'written in English を book のうしろに置くよ。過去分詞 + ほかの言葉がつくときは、名詞のうしろに置くのがルール！',
              highlight: 'a book written in English',
            },
          ],
          answer: 'This is a book written in English.\n（これは英語で書かれた本です。）',
        },
        {
          id: 'eng-ppm-ex2',
          question: '次の日本語を英語にしよう。\n「ピカソによって描かれた絵は有名です。」',
          steps: [
            {
              title: 'Step 1: 「絵」と「有名です」を英語にしよう',
              content: '「絵」は the picture、「有名です」は is famous だよ。',
              highlight: 'The picture is famous.',
            },
            {
              title: 'Step 2: 「ピカソによって描かれた」を作ろう',
              content: '「描かれた」は paint の過去分詞 painted。「ピカソによって」は by Picasso だよ。',
              highlight: 'painted by Picasso',
            },
            {
              title: 'Step 3: picture のうしろに入れよう',
              content: 'painted by Picasso を picture のうしろに入れると完成！',
              highlight: 'The picture painted by Picasso',
            },
          ],
          answer: 'The picture painted by Picasso is famous.\n（ピカソによって描かれた絵は有名です。）',
        },
        {
          id: 'eng-ppm-ex3',
          question: '次の日本語を英語にしよう。\n「東京から送られた手紙を読みました。」',
          steps: [
            {
              title: 'Step 1: 「〜を読みました」を英語にしよう',
              content: '「読みました」は read（過去形も read）。「手紙を」は a letter だよ。',
              highlight: 'I read a letter',
            },
            {
              title: 'Step 2: 「東京から送られた」を作ろう',
              content: '「送られた」は send の過去分詞 sent。「東京から」は from Tokyo だよ。',
              highlight: 'sent from Tokyo',
            },
            {
              title: 'Step 3: letter のうしろに入れよう',
              content: 'sent from Tokyo を letter のうしろに入れると完成！',
              highlight: 'a letter sent from Tokyo',
            },
          ],
          answer: 'I read a letter sent from Tokyo.\n（東京から送られた手紙を読みました。）',
        },
      ],
    },
    chatId: 'eng-past-participle-modifier',
  },
};

import type { Topic } from '../../../../../../../data/types';

export const infinitives: Topic = {
  id: 'eng-infinitives',
  eraId: 'english-grade2',
  name: '不定詞',
  subtitle: 'to + 動詞のもとの形 の3つの使い方',
  icon: '🎯',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '不定詞（to + 動詞のもとの形）ってなに？',
          content:
            '不定詞とは to + 動詞のもとの形 のこと。たとえば to play、to read、to study のような形だよ。不定詞には「〜すること」「〜するために」「〜するための」の3つの使い方があるんだ。形はぜんぶ同じだけど、文の中での役わりで意味がかわるよ！',
          keyPoints: [
            '「〜すること」: I want to play soccer. = 私はサッカーをしたいです。',
            '「〜するために」: I went to the park to play soccer. = サッカーをするために公園に行きました。',
            '「〜するための」: I have a book to read. = 私には読むための本があります。',
          ],
        },
        {
          title: '「〜すること」の使い方',
          content:
            'want to 〜（〜したい）、like to 〜（〜するのが好き）、begin to 〜（〜し始める）のように、動詞の後ろにつけて「〜すること」を表すよ。この使い方がいちばんよく出てくるから、まずはここをしっかり覚えよう！',
          keyPoints: [
            'want to 〜 =「〜したい」: I want to be a doctor. = 私は医者になりたいです。',
            'like to 〜 =「〜するのが好き」: She likes to sing. = 彼女は歌うのが好きです。',
            'try to 〜 =「〜しようとする」: He tried to open the door. = 彼はドアを開けようとしました。',
          ],
        },
        {
          title: '「〜するために」と「〜するための」の見分け方',
          content:
            '「〜するために」は「なんのために？」の答えになっている使い方。「〜するための」は前の言葉を説明している使い方だよ。「なんのために？」と聞いて答えが出れば「〜するために」、「どんな〜？」と聞いて答えが出れば「〜するための」だよ！',
          keyPoints: [
            '「〜するために」: I got up early to catch the train. =「なんのために早く起きた？」→「電車に乗るために」',
            '「〜するための」: I have something to eat. =「どんなもの？」→「食べるためのもの」',
            '見分けポイント:「なんのために？」→ ②、「どんな〜？」→ ③',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-inf-fc1',
        front: 'to play',
        back: 'I want (　　) soccer.\n（私はサッカーをしたいです。）',
        hint: 'want の後ろは to + 動詞のもとの形 だよ',
        explanation: 'want to play =「したい」。不定詞の「〜すること」の使い方だよ。',
      },
      {
        id: 'eng-inf-fc2',
        front: 'to read',
        back: 'I like (　　) books.\n（私は本を読むことが好きです。）',
        hint: 'like の後ろは to + 動詞のもとの形 だよ',
        explanation: 'like to read =「読むのが好き」。不定詞の「〜すること」の使い方だよ。',
      },
      {
        id: 'eng-inf-fc3',
        front: '〜すること',
        back: 'I want to be a teacher.\n（私は先生になりたいです。）\nto be はどの使い方？',
        hint: 'want の後ろにあるよ',
        explanation: 'want to 〜 は「〜したい」。「〜すること」の使い方だよ。',
      },
      {
        id: 'eng-inf-fc4',
        front: '〜するために',
        back: 'I went to the park to play soccer.\n（サッカーをするために公園に行った。）\nto play はどの使い方？',
        hint: '「なんのために公園に行った？」と聞いてみよう',
        explanation: '「なんのために？」→「サッカーをするために」。「〜するために」の使い方だよ。',
      },
      {
        id: 'eng-inf-fc5',
        front: '〜するための',
        back: 'I have a book to read.\n（私には読むための本があります。）\nto read はどの使い方？',
        hint: '「どんな本？」と聞いてみよう',
        explanation: '「どんな本？」→「読むための本」。前の言葉を説明しているから「〜するための」だよ。',
      },
      {
        id: 'eng-inf-fc6',
        front: 'to study',
        back: 'I went to the library (　　).\n（勉強するために図書館に行きました。）',
        hint: '「なんのために図書館に行った？」の答えだよ',
        explanation: '「勉強するために」= to study。「〜するために」の使い方だよ。',
      },
      {
        id: 'eng-inf-fc7',
        front: 'to drink',
        back: 'I want something (　　).\n（何か飲むものがほしいです。）',
        hint: 'something（何か）を説明しているよ。「どんなもの？」→「飲むもの」',
        explanation: 'something to drink =「飲むためのもの」。前の言葉を説明する使い方だよ。',
      },
      {
        id: 'eng-inf-fc8',
        front: 'to be',
        back: 'I want (　　) a doctor.\n（私は医者になりたいです。）',
        hint: 'want の後ろは to + 動詞のもとの形 だよ。「なる」は be だよ。',
        explanation: 'want to be =「〜になりたい」。be も動詞のもとの形だよ。',
      },
      {
        id: 'eng-inf-fc9',
        front: '〜するために',
        back: 'She got up early to catch the bus.\n（彼女はバスに乗るために早く起きた。）\nto catch はどの使い方？',
        hint: '「なんのために早く起きた？」と聞いてみよう',
        explanation: '「なんのために？」→「バスに乗るために」。「〜するために」の使い方だよ。',
      },
      {
        id: 'eng-inf-fc10',
        front: '〜すること',
        back: 'She began to sing.\n（彼女は歌い始めました。）\nto sing はどの使い方？',
        hint: 'began（始めた）の後ろにあるよ',
        explanation: 'began to sing =「歌うことを始めた」。「〜すること」の使い方だよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-inf-q1',
          question: '「I want (　　) a teacher.（私は先生になりたいです。）」\nの (　　) に入るのは？',
          options: ['be', 'to be', 'being', 'to being'],
          correctIndex: 1,
          explanation: 'want の後ろは to + 動詞のもとの形 だよ。want to be =「〜になりたい」。',
        },
        {
          id: 'eng-inf-q2',
          question: '「I went to the store to buy milk.（牛乳を買うためにお店に行きました。）」の to buy はどの使い方？',
          options: ['〜すること', '〜するために', '〜するための', 'どれでもない'],
          correctIndex: 1,
          explanation: '「なんのためにお店に行った？」→「牛乳を買うために」。「〜するために」の使い方だよ。',
        },
        {
          id: 'eng-inf-q3',
          question: '「I have a lot of homework to do.（やるべき宿題がたくさんあります。）」の to do はどの使い方？',
          options: ['〜すること', '〜するために', '〜するための', 'どれでもない'],
          correctIndex: 2,
          explanation: '「どんな宿題？」→「やるための宿題」。前の言葉（homework）を説明しているから「〜するための」だよ。',
        },
        {
          id: 'eng-inf-q4',
          question: '「She likes (　　) books.（彼女は本を読むのが好きです。）」\nの (　　) に入るのは？',
          options: ['read', 'to read', 'reading to', 'to reading'],
          correctIndex: 1,
          explanation: 'like の後ろは to + 動詞のもとの形。like to read =「読むのが好き」だよ。',
        },
        {
          id: 'eng-inf-q5',
          question: '「I want something (　　).（何か食べるものがほしいです。）」\nの (　　) に入るのは？',
          options: ['eat', 'to eat', 'eating', 'to eating'],
          correctIndex: 1,
          explanation: 'something to eat =「食べるためのもの」。前の言葉（something）を説明しているから「〜するための」の使い方だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-inf-ex1',
          question: '次の日本語を英語にしよう。\n「私はピアノをひきたいです。」',
          steps: [
            {
              title: 'Step 1: 「〜したい」は want to 〜',
              content: '「〜したい」は英語で want to 〜 だよ。主語は I だね。',
              highlight: 'I want to',
            },
            {
              title: 'Step 2: 「ピアノをひく」を英語にしよう',
              content: '「ピアノをひく」は play the piano だよ。to の後ろは動詞のもとの形だから play のままでOK。',
              highlight: 'play the piano',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'I want to + play the piano をつなげるよ。',
              highlight: 'I want to play the piano.',
            },
          ],
          answer: 'I want to play the piano.\n（私はピアノをひきたいです。）',
        },
        {
          id: 'eng-inf-ex2',
          question: '次の英文の不定詞はどの使い方か答えよう。\n「He went to the library to study English.（彼は英語を勉強するために図書館に行きました。）」',
          steps: [
            {
              title: 'Step 1: 不定詞を見つけよう',
              content: 'to + 動詞のもとの形 をさがすと… to study があるね！',
              highlight: 'to study',
            },
            {
              title: 'Step 2: 「なんのために？」と聞いてみよう',
              content: '「なんのために図書館に行った？」→「英語を勉強するために」。答えが出たね！',
              highlight: '〜するために',
            },
            {
              title: 'Step 3: 答えを決めよう',
              content: '「なんのために？」の答えになっているから、「〜するために」の使い方だよ。',
              highlight: '〜するために',
            },
          ],
          answer: '「〜するために」の使い方\n（なんのために図書館に行った？ → 英語を勉強するために）',
        },
        {
          id: 'eng-inf-ex3',
          question: '次の日本語を英語にしよう。\n「私には読むべき本がたくさんあります。」',
          steps: [
            {
              title: 'Step 1: 「たくさんある」を英語にしよう',
              content: '「〜がたくさんある」は I have a lot of 〜 だよ。',
              highlight: 'I have a lot of',
            },
            {
              title: 'Step 2: 「読むべき本」を英語にしよう',
              content: '「本」= books。「読むべき」= to read で books の後ろにつけるよ。前の言葉を説明する不定詞だね。',
              highlight: 'books to read',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'I have a lot of + books to read で完成！ 不定詞が books を後ろから説明しているよ。',
              highlight: 'I have a lot of books to read.',
            },
          ],
          answer: 'I have a lot of books to read.\n（私には読むべき本がたくさんあります。）',
        },
      ],
    },
    chatId: 'eng-infinitives',
  },
};

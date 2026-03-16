import type { Topic } from '../../../../../../../data/types';

export const presentProgressive: Topic = {
  id: 'eng-present-progressive',
  eraId: 'english-grade1',
  name: '現在進行形',
  subtitle: 'be動詞 + 〜ing で「今〜している」',
  icon: '🏃',
  order: 9,
  content: {
    explanation: {
      sections: [
        {
          title: '「今〜しているところ」の言い方',
          content:
            '「今まさにしているところ」と言いたいときは、be動詞 + 動詞ing の形にするよ。この形を現在進行形（今していることを表す形）と呼ぶんだ。be動詞は「だれが」で am / is / are を使い分けるよ。',
          keyPoints: [
            'I am playing tennis. = 私は今テニスをしています。',
            'He is reading a book. = 彼は今本を読んでいます。',
            'They are studying English. = 彼らは今英語を勉強しています。',
          ],
        },
        {
          title: 'ing のつけ方と否定文・疑問文',
          content:
            '動詞に ing をつけるとき、ふつうはそのまま ing をつけるよ。e で終わる動詞は e をとって ing（make → making）。「短い母音 + 子音」で終わるときは子音を重ねて ing（run → running）。否定文・疑問文はbe動詞のときと同じやり方だよ。',
          keyPoints: [
            'ふつう: play → playing / read → reading',
            'e で終わる: make → making / use → using',
            '子音を重ねる: run → running / swim → swimming',
            '「〜していない」: He is not sleeping.',
            '「〜していますか？」: Is he sleeping? — Yes, he is.',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-pp-fc1',
        front: 'playing',
        back: 'I am (　　) tennis now.\n（私は今テニスをしています。）',
        hint: 'play に ing をつけると…？',
        explanation: 'ふつうはそのまま ing をつけるよ。play → playing',
      },
      {
        id: 'eng-pp-fc2',
        front: 'is reading',
        back: 'He (　　) a book.\n（彼は本を読んでいます。）',
        hint: 'He のbe動詞は is。read + ing は…？',
        explanation: '「今〜している」は be動詞 + ing。He is reading.',
      },
      {
        id: 'eng-pp-fc3',
        front: 'making',
        back: 'make の ing 形は？',
        hint: 'e で終わるときは e をとってから ing をつけるよ',
        explanation: 'make は e で終わるから e をとって ing → making',
      },
      {
        id: 'eng-pp-fc4',
        front: 'running',
        back: 'run の ing 形は？',
        hint: '短い母音 + 子音で終わるときは子音を重ねるよ',
        explanation: 'run は n を重ねて running。子音が2つになるよ。',
      },
      {
        id: 'eng-pp-fc5',
        front: 'swimming',
        back: 'swim の ing 形は？',
        hint: '短い母音 + 子音で終わるときは子音を重ねるよ',
        explanation: 'swim は m を重ねて swimming。',
      },
      {
        id: 'eng-pp-fc6',
        front: 'using',
        back: 'use の ing 形は？',
        hint: 'e で終わるときは e をとってから ing をつけるよ',
        explanation: 'use は e で終わるから e をとって ing → using',
      },
      {
        id: 'eng-pp-fc7',
        front: 'is not',
        back: 'He (　　) sleeping.\n（彼は眠っていないです。）',
        hint: '「〜していない」は be動詞のあとに…？',
        explanation: 'be動詞のあとに not をつけるよ。He is not sleeping.',
      },
      {
        id: 'eng-pp-fc8',
        front: 'Are',
        back: '(　　) you studying now?\n（あなたは今勉強していますか？）',
        hint: '「〜していますか？」は be動詞をいちばん前に！',
        explanation: 'be動詞を前にもってきて Are you studying now?',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-pp-q1',
          question: '「I (　　) tennis now.（私は今テニスをしています。）」\nの (　　) に入るのは？',
          options: ['play', 'plays', 'am playing', 'am play'],
          correctIndex: 2,
          explanation: '「今〜している」は be動詞 + ing だよ。I am playing.',
        },
        {
          id: 'eng-pp-q2',
          question: 'make の ing 形として正しいのは？',
          options: ['makeing', 'making', 'makking', 'maked'],
          correctIndex: 1,
          explanation: 'make は e で終わるから、e をとって ing をつけるよ。making',
        },
        {
          id: 'eng-pp-q3',
          question: 'run の ing 形として正しいのは？',
          options: ['runing', 'running', 'runeing', 'runing'],
          correctIndex: 1,
          explanation: 'run は「短い母音 + 子音」で終わるから、n を重ねて running だよ。',
        },
        {
          id: 'eng-pp-q4',
          question: '「He is reading a book.」を「〜していない」の文にすると？',
          options: [
            "He doesn't reading a book.",
            'He not is reading a book.',
            'He is not reading a book.',
            "He don't reading a book.",
          ],
          correctIndex: 2,
          explanation: 'be動詞のあとに not をつけるよ。He is not reading a book.',
        },
        {
          id: 'eng-pp-q5',
          question: '「Is she cooking now?（彼女は今料理をしていますか？）」に「いいえ」で答えるとき、正しいのは？',
          options: [
            "No, she doesn't.",
            'No, she is not.',
            "No, she don't.",
            'No, she not.',
          ],
          correctIndex: 1,
          explanation: 'Is で聞かれたら be動詞で答えるよ。No, she is not.',
        },
        {
          id: 'eng-pp-q6',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「私は本を読んでいます。」という英文を作ろう。',
          words: ['a', 'reading', 'I', 'am', 'book'],
          correctOrder: [2, 3, 1, 0, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「I am reading a book.」が正解。I（私は）+ am（be動詞）+ reading（読んでいる）+ a book（本）の順番だよ。現在進行形は be動詞 + ing だよ。',
        },
        {
          id: 'eng-pp-q7',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼女は走っていません。」という英文を作ろう。',
          words: ['running', 'is', 'she', 'not'],
          correctOrder: [2, 1, 3, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「She is not running.」が正解。She（彼女は）+ is not（〜していない）+ running（走っている）の順番だよ。否定文は be動詞のあとに not を置くよ。',
        },
        {
          id: 'eng-pp-q8',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「あなたは今勉強していますか？」という英文を作ろう。',
          words: ['now', 'studying', 'you', 'are'],
          correctOrder: [3, 2, 1, 0],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation: '「Are you studying now?」が正解。Are（〜していますか）+ you（あなたは）+ studying（勉強している）+ now（今）の順番だよ。疑問文は be動詞をいちばん前に置くよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-pp-ex1',
          question: '次の日本語を英語にしよう。\n「私は今英語を勉強しています。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「私は」→ 英語で I だね。I のときのbe動詞は am だよ。',
              highlight: 'I am',
            },
            {
              title: 'Step 2: 「勉強している」を ing 形にしよう',
              content: '「勉強する」は study。そのまま ing をつけて studying だよ。',
              highlight: 'studying',
            },
            {
              title: 'Step 3: のこりをつけよう',
              content: '「英語を」は English。「今」は now で文のおわりにつけるよ。',
              highlight: 'English now',
            },
          ],
          answer: 'I am studying English now.（私は今英語を勉強しています。）',
        },
        {
          id: 'eng-pp-ex2',
          question: '次の文を「〜していない」の文にしよう。\nShe is watching TV.（彼女はテレビを見ています。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content: 'She is watching TV. の中でbe動詞は is だね。',
              highlight: 'is',
            },
            {
              title: 'Step 2: is のうしろに not をつけよう',
              content: '「〜していない」はbe動詞のうしろに not をつけるだけ！',
              highlight: 'is not',
            },
            {
              title: 'Step 3: 完成！',
              content: 'She is not watching TV. これで「見ていない」の文の完成！',
              highlight: 'She is not watching TV.',
            },
          ],
          answer: 'She is not watching TV.（彼女はテレビを見ていません。）',
        },
        {
          id: 'eng-pp-ex3',
          question: '次の文を「〜していますか？」の文にして、Yes で答えよう。\nThey are playing soccer.（彼らはサッカーをしています。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content: 'They are playing soccer. の中でbe動詞は are だね。',
              highlight: 'are',
            },
            {
              title: 'Step 2: are を前にもっていこう',
              content: 'are を They の前にもっていって、おわりに ? をつけよう。',
              highlight: 'Are they playing soccer?',
            },
            {
              title: 'Step 3: Yes で答えよう',
              content: 'Are で聞かれたからbe動詞で答えるよ。they はそのまま they で答えるよ。',
              highlight: 'Yes, they are.',
            },
          ],
          answer: 'Are they playing soccer? — Yes, they are.\n（彼らはサッカーをしていますか？ — はい、しています。）',
        },
      ],
    },
    chatId: 'eng-present-progressive',
  },
};

import type { Topic } from '../../../../../../../data/types';

export const thirdPersonSingular: Topic = {
  id: 'eng-third-person-singular',
  eraId: 'english-grade1',
  name: '三人称単数現在',
  subtitle: 'he / she / it + 動詞s の使い方',
  icon: '👆',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: 'he / she / it のとき動詞に s をつけよう',
          content:
            '「だれが」が he（彼）、she（彼女）、it（それ）のように1人・1つのとき、動詞のおしりに s をつけるよ。I / you / we / they のときはつけなくてOK。',
          keyPoints: [
            'I play tennis. → そのまま',
            'He plays tennis. → s がつく！',
            'She likes music. → s がつく！',
            's / x / ch / sh / o で終わるとき → es をつける（go → goes）',
            'y で終わるとき → y を i にかえて es（study → studies）',
          ],
        },
        {
          title: '「〜しない」「〜しますか？」のとき',
          content:
            "he / she / it の「〜しない」は doesn't + 動詞のもとの形。「〜しますか？」は Does をいちばん最初に置いて、動詞はもとの形にもどすよ。",
          keyPoints: [
            "He doesn't like math. = 彼は数学が好きじゃない。（likes → like にもどる！）",
            'Does she play tennis? = 彼女はテニスをしますか？',
            "答え方: Yes, she does. / No, she doesn't.",
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-tps-fc1',
        front: 'plays',
        back: 'He (　　) soccer.\n（彼はサッカーをします。）',
        hint: 'He は1人だよね。動詞のおしりに…？',
        explanation: 'He は1人なので play → plays。s をつけるよ。',
      },
      {
        id: 'eng-tps-fc2',
        front: 'likes',
        back: 'She (　　) music.\n（彼女は音楽が好きです。）',
        hint: 'She は1人。like のおしりに…？',
        explanation: 'She は1人なので like → likes。',
      },
      {
        id: 'eng-tps-fc3',
        front: 'watches',
        back: 'He (　　) TV.\n（彼はテレビを見ます。）',
        hint: 'watch は ch で終わるよ。s じゃなくて…？',
        explanation: 'ch で終わるから es をつけるよ。watch → watches',
      },
      {
        id: 'eng-tps-fc4',
        front: 'goes',
        back: 'She (　　) to school.\n（彼女は学校に行きます。）',
        hint: 'go は o で終わるよ。s じゃなくて…？',
        explanation: 'o で終わるから es をつけるよ。go → goes',
      },
      {
        id: 'eng-tps-fc5',
        front: 'studies',
        back: 'He (　　) English.\n（彼は英語を勉強します。）',
        hint: 'study は y で終わるよ。y を…？',
        explanation: 'y を i にかえて es をつけるよ。study → studies',
      },
      {
        id: 'eng-tps-fc6',
        front: 'has',
        back: 'She (　　) a cat.\n（彼女はネコを飼っています。）',
        hint: 'have はとくべつな形になるよ',
        explanation: 'have は has にかわるよ。She has a cat.',
      },
      {
        id: 'eng-tps-fc7',
        front: "doesn't",
        back: 'He (　　) like fish.\n（彼は魚が好きじゃないです。）',
        hint: 'He（1人）の「〜しない」は…？',
        explanation: "he / she / it の「〜しない」は doesn't だよ。動詞はもとの形にもどるよ。",
      },
      {
        id: 'eng-tps-fc8',
        front: 'Does',
        back: '(　　) he speak English?\n（彼は英語を話しますか？）',
        hint: 'He（1人）の「〜しますか？」は…？',
        explanation: 'he / she / it の「〜しますか？」は Does をいちばん前に置くよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-tps-q1',
          question: '「He (　　) tennis.（彼はテニスをします。）」\nの (　　) に入るのは？',
          options: ['play', 'plays', 'playing', 'to play'],
          correctIndex: 1,
          explanation: 'He は1人だから、動詞のおしりに s をつけるよ。play → plays',
        },
        {
          id: 'eng-tps-q2',
          question: '「She (　　) to school every day.（彼女は毎日学校に行きます。）」\nの (　　) に入るのは？',
          options: ['go', 'gos', 'goes', 'going'],
          correctIndex: 2,
          explanation: 'She は1人。go は o で終わるから es をつけて goes だよ。',
        },
        {
          id: 'eng-tps-q3',
          question: '「He (　　) two dogs.（彼はイヌを2匹飼っています。）」\nの (　　) に入るのは？',
          options: ['have', 'haves', 'has', 'having'],
          correctIndex: 2,
          explanation: 'have はとくべつで、he / she / it のときは has になるよ。',
        },
        {
          id: 'eng-tps-q4',
          question: '「She likes cats.（彼女はネコが好きです。）」を「〜しますか？」の文にすると？',
          options: [
            'Is she like cats?',
            'Do she like cats?',
            'Does she like cats?',
            'Does she likes cats?',
          ],
          correctIndex: 2,
          explanation: 'She は1人なので Does を使うよ。likes の s は消えて like にもどるよ。',
        },
        {
          id: 'eng-tps-q5',
          question: '「Does he play soccer?（彼はサッカーをしますか？）」に「いいえ」で答えるとき、正しいのは？',
          options: [
            "No, he don't.",
            "No, he doesn't.",
            "No, he isn't.",
            'No, he not.',
          ],
          correctIndex: 1,
          explanation: "Does で聞かれたら doesn't で答えるよ。No, he doesn't.",
        },
        {
          id: 'eng-tps-q6',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼女はピアノをひきます。」という英文を作ろう。',
          words: ['the', 'plays', 'she', 'piano'],
          correctOrder: [2, 1, 0, 3],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「She plays the piano.」が正解。She（彼女は）+ plays（ひく）+ the piano（ピアノ）の順番だよ。She は1人だから play に s がつくよ。',
        },
        {
          id: 'eng-tps-q7',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼は数学が好きではありません。」という英文を作ろう。',
          words: ['like', "doesn't", 'he', 'math'],
          correctOrder: [2, 1, 0, 3],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「He doesn\'t like math.」が正解。He（彼は）+ doesn\'t（〜しない）+ like（好き）+ math（数学）の順番だよ。doesn\'t のあとは動詞のもとの形を使うよ。',
        },
        {
          id: 'eng-tps-q8',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼女は英語を話しますか？」という英文を作ろう。',
          words: ['she', 'does', 'speak', 'English'],
          correctOrder: [1, 0, 2, 3],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation: '「Does she speak English?」が正解。Does（〜しますか）+ she（彼女は）+ speak（話す）+ English（英語）の順番だよ。Does のあとは動詞のもとの形を使うよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-tps-ex1',
          question: '次の日本語を英語にしよう。\n「彼女は英語を勉強します。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「彼女は」→ 英語で She だね。She は1人だから動詞に s をつけるよ。',
              highlight: 'She',
            },
            {
              title: 'Step 2: 「どうする？」を英語にしよう',
              content: '「勉強する」は study。She だから s つき形にするよ。study は y で終わるから y を i にかえて es → studies',
              highlight: 'studies',
            },
            {
              title: 'Step 3: 「何を？」をつけよう',
              content: '「英語を」は English。She studies English. の完成！',
              highlight: 'English',
            },
          ],
          answer: 'She studies English.（彼女は英語を勉強します。）',
        },
        {
          id: 'eng-tps-ex2',
          question: '次の文を「〜しない」の文にしよう。\nHe plays soccer.（彼はサッカーをします。）',
          steps: [
            {
              title: 'Step 1: 「だれが？」をたしかめよう',
              content: '「だれが？」→ He（彼）だね。1人の人だよ。',
              highlight: 'He',
            },
            {
              title: "Step 2: doesn't を入れよう",
              content: "He は1人だから「〜しない」は doesn't を使うよ。plays の s をとって play にもどそう！",
              highlight: "doesn't play",
            },
            {
              title: 'Step 3: 完成！',
              content: "doesn't の does にもう s のやくわりが入ってるから、動詞の s は取るんだよ。",
              highlight: "He doesn't play soccer.",
            },
          ],
          answer: "He doesn't play soccer.（彼はサッカーをしません。）",
        },
        {
          id: 'eng-tps-ex3',
          question: '次の文を「〜しますか？」の文にして、Yes で答えよう。\nShe speaks Japanese.（彼女は日本語を話します。）',
          steps: [
            {
              title: 'Step 1: 「だれが？」をたしかめよう',
              content: '「だれが？」→ She（彼女）だね。1人だから Does を使うよ。',
              highlight: 'Does',
            },
            {
              title: 'Step 2: Does を前に置こう',
              content: 'Does を文のいちばん最初に持ってきて、speaks の s は取って speak にもどすよ。',
              highlight: 'Does she speak Japanese?',
            },
            {
              title: 'Step 3: Yes で答えよう',
              content: 'Does で聞かれたら does で答えるよ。Yes, she does.',
              highlight: 'Yes, she does.',
            },
          ],
          answer: 'Does she speak Japanese? — Yes, she does.\n（彼女は日本語を話しますか？ — はい、話します。）',
        },
      ],
    },
    chatId: 'eng-third-person-singular',
  },
};

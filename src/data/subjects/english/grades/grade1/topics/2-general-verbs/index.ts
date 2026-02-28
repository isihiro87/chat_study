import type { Topic } from '../../../../../../../data/types';

export const generalVerbs: Topic = {
  id: 'eng-general-verbs',
  eraId: 'english-grade1',
  name: '一般動詞',
  subtitle: 'like / play / study ... 動きを表すことば',
  icon: '🏃',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '一般動詞ってなに？',
          content:
            'be動詞（am/is/are）は「〜です」だったよね。それいがいの「〜する」を表すことばが一般動詞だよ。like（好き）、play（する）、study（勉強する）、eat（食べる）…ぜんぶ一般動詞！ 大事なルールが1つ。「だれが」が he / she / it（1人・1つ）のときだけ、動詞のおしりに s や es をつけるよ。',
          keyPoints: [
            'I play tennis. = 私はテニスをします。（I のときはそのまま！）',
            'He plays tennis. = 彼はテニスをします。（He だから play → plays に！）',
            'She likes music. = 彼女は音楽が好きです。（She だから like → likes に！）',
          ],
        },
        {
          title: '「〜しない」「〜しますか？」の言い方',
          content:
            "一般動詞の「〜しない」は、be動詞のときとやり方がちがうよ。not じゃなくて don't を使うんだ。「だれが」が he / she / it のときは doesn't を使って、動詞のおしりの s は取ってもとの形にもどすよ。「〜しますか？」は Do / Does を文のいちばん最初に置くよ。",
          keyPoints: [
            "「〜しない」: I don't like math. = 私は数学が好きじゃない。",
            "He のとき: He doesn't like math. = 彼は数学が好きじゃない。（likes → like にもどる！）",
            '「〜しますか？」: Do you like math? / Does he like math?',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-gv-fc1',
        front: 'play',
        back: 'I (　　) tennis.\n（私はテニスをします。）',
        hint: '「する」って英語でなんだっけ？',
        explanation: 'I のときは動詞はそのままの形で使うよ。',
      },
      {
        id: 'eng-gv-fc2',
        front: 'plays',
        back: 'He (　　) tennis.\n（彼はテニスをします。）',
        hint: 'He は1人だよね。1人のときは動詞のおしりに…？',
        explanation: 'he / she / it（1人）のときは動詞のおしりに s をつけるよ。play → plays',
      },
      {
        id: 'eng-gv-fc3',
        front: 'likes',
        back: 'She (　　) music.\n（彼女は音楽が好きです。）',
        hint: 'She は1人だよね。like のおしりに…？',
        explanation: 'She は1人なので like → likes。おしりに s がつくよ。',
      },
      {
        id: 'eng-gv-fc4',
        front: "don't",
        back: "I (　　) like math.\n（私は数学が好きじゃない。）",
        hint: '一般動詞の「〜しない」でつかうことばは？',
        explanation: "I / you / we / they の「〜しない」は don't + 動詞のもとの形だよ。",
      },
      {
        id: 'eng-gv-fc5',
        front: "doesn't",
        back: "He (　　) like math.\n（彼は数学が好きじゃない。）",
        hint: 'He（1人の人）の「〜しない」でつかうことばは？',
        explanation: "he / she / it の「〜しない」は doesn't。動詞のおしりの s は消えてもとの形にもどるよ。",
      },
      {
        id: 'eng-gv-fc6',
        front: 'Do',
        back: '(　　) you play soccer?\n（あなたはサッカーをしますか？）',
        hint: '一般動詞の「〜しますか？」でいちばん最初に置くことばは？',
        explanation: 'you / we / they の「〜しますか？」は Do をいちばん最初に置くよ。',
      },
      {
        id: 'eng-gv-fc7',
        front: 'Does',
        back: '(　　) she speak English?\n（彼女は英語を話しますか？）',
        hint: 'She（1人の人）の「〜しますか？」でいちばん最初に置くことばは？',
        explanation: 'he / she / it の「〜しますか？」は Does をいちばん最初に置くよ。',
      },
      {
        id: 'eng-gv-fc8',
        front: 'studies',
        back: 'study を he/she のときの形にすると？',
        hint: 'y で終わることばにはとくべつなルールがあるよ',
        explanation: 'y を i にかえて es をつけるよ。study → studies',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-gv-q1',
          question: '「I (　　) soccer.（私はサッカーをします。）」\nの (　　) に入るのは？',
          options: ['plays', 'play', 'playing', 'am play'],
          correctIndex: 1,
          explanation: 'I のときは動詞はそのままの形だよ。play がそのまま入るよ。',
        },
        {
          id: 'eng-gv-q2',
          question: '「She (　　) English.（彼女は英語を話します。）」\nの (　　) に入るのは？',
          options: ['speak', 'speaks', 'speaking', 'is speak'],
          correctIndex: 1,
          explanation: 'She は1人だから、動詞のおしりに s をつけるよ。speak → speaks',
        },
        {
          id: 'eng-gv-q3',
          question: '「He (　　) like fish.（彼は魚が好きじゃない。）」\nの (　　) に入るのは？',
          options: ["don't", "doesn't", "isn't", 'not'],
          correctIndex: 1,
          explanation: "He は1人だから doesn't を使うよ。likes → like にもどるのもポイント！",
        },
        {
          id: 'eng-gv-q4',
          question: '「(　　) they play baseball?（彼らは野球をしますか？）」\nの (　　) に入るのは？',
          options: ['Are', 'Is', 'Do', 'Does'],
          correctIndex: 2,
          explanation: 'they は2人いじょうだから Do を使うよ。',
        },
        {
          id: 'eng-gv-q5',
          question: '「Does she like math?（彼女は数学が好きですか？）」に「はい」で答えるとき、正しいのは？',
          options: [
            'Yes, she does.',
            'Yes, she is.',
            'Yes, she likes.',
            'Yes, she do.',
          ],
          correctIndex: 0,
          explanation: 'Does で聞かれたら does で答えるよ。Yes, she does.（はい、好きです。）',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-gv-ex1',
          question: '次の日本語を英語にしよう。\n「私はテニスをします。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「私は テニスをします」の中で「だれが？」にあたるのは「私」だね。英語で「私」は I だよ。',
              highlight: 'I',
            },
            {
              title: 'Step 2: 「どうする？」のことばをえらぼう',
              content: '「テニスをする」の「する」は英語で play。I のときは play のまま、何もつけないよ。',
              highlight: 'play',
            },
            {
              title: 'Step 3: 「なにを？」をつけよう',
              content: '「テニスを」は英語で tennis。スポーツの名前には a や the はつけなくてOK！',
              highlight: 'tennis',
            },
          ],
          answer: 'I play tennis.（私はテニスをします。）',
        },
        {
          id: 'eng-gv-ex2',
          question: '次の文を「〜しない」の文にしよう。\nHe likes music.（彼は音楽が好きです。）',
          steps: [
            {
              title: 'Step 1: 「だれが？」をたしかめよう',
              content: '「だれが？」→ He（彼）だね。1人の人だよ。',
              highlight: 'He',
            },
            {
              title: "Step 2: doesn't を入れよう",
              content: "He は1人だから、「〜しない」は doesn't を使うよ。そして likes のおしりの s をとって like にもどそう！",
              highlight: "doesn't like",
            },
            {
              title: 'Step 3: なぜ s が消えるの？',
              content: "doesn't の does にもう s のやくわりが入ってるから、動詞の s は取るんだよ。s が引っこしたイメージ！",
              highlight: "doesn't like",
            },
          ],
          answer: "He doesn't like music.（彼は音楽が好きではありません。）",
        },
        {
          id: 'eng-gv-ex3',
          question: '次の文を「〜しますか？」の文にして、No で答えよう。\nYou study math.（あなたは数学を勉強します。）',
          steps: [
            {
              title: 'Step 1: 「だれが？」をたしかめよう',
              content: '「だれが？」→ You（あなた）だね。You のときは Do を使うよ。',
              highlight: 'Do',
            },
            {
              title: 'Step 2: Do をいちばん最初に置こう',
              content: 'Do を文のいちばん最初に持ってきて、そのあとに you study math をそのまま続けて、おわりに ? をつけるよ。',
              highlight: 'Do you study math?',
            },
            {
              title: 'Step 3: No で答えよう',
              content: "Do で聞かれたら do で答えるよ。「いいえ」のときは don't をつけるよ。「あなたは〜？」と聞かれたら「私は〜」と答えるよね。",
              highlight: "No, I don't.",
            },
          ],
          answer: "Do you study math? — No, I don't.\n（あなたは数学を勉強しますか？ — いいえ、しません。）",
        },
      ],
    },
    chatId: 'eng-general-verbs',
  },
};

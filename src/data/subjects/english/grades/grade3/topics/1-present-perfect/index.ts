import type { Topic } from '../../../../../../../data/types';

export const presentPerfect: Topic = {
  id: 'eng-present-perfect',
  eraId: 'english-grade3',
  name: '現在完了',
  subtitle: 'have/has + 過去分詞で「過去〜今」をつなぐ',
  icon: '⏳',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '現在完了ってなに？',
          content:
            '「過去のある時点から今までつながっていること」を表すのが現在完了だよ。作り方は have（has）+ 過去分詞。過去分詞は動詞の「3つめの形」のこと。live → lived、see → seen のように変わるよ。現在完了には大きく3つの使い方があるよ。',
          keyPoints: [
            '継続「ずっと〜している」: I have lived here for five years. = 私は5年間ここに住んでいます。',
            '経験「〜したことがある」: I have visited Kyoto. = 私は京都を訪れたことがあります。',
            '完了・結果「もう〜した」: I have finished my homework. = 私は宿題を終えました。',
          ],
        },
        {
          title: 'いっしょに使うことば',
          content:
            '現在完了は、いっしょに使うことばで意味が見分けやすくなるよ。継続なら for / since、経験なら ever / never、完了なら just / already / yet がサインになるよ。',
          keyPoints: [
            'for（〜の間）/ since（〜から）→ 継続のサイン: I have known her since 2020. = 2020年から彼女を知っています。',
            'ever（今までに）/ never（一度も〜ない）→ 経験のサイン: Have you ever been to Osaka? = 大阪に行ったことはありますか？',
            'just（ちょうど）/ already（もう）/ yet（まだ・もう）→ 完了のサイン: I have just finished. = ちょうど終えたところです。',
          ],
        },
        {
          title: '否定文と疑問文',
          content:
            '否定文は have（has）のうしろに not をつけるよ。疑問文は have（has）を文のいちばん最初にもってくるよ。',
          keyPoints: [
            '否定文: I have not seen the movie yet. = 私はまだその映画を見ていません。（have not = haven\'t）',
            '疑問文: Have you finished your homework? = 宿題は終わりましたか？',
            '答え方: Yes, I have. / No, I haven\'t.',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-pp-fc1',
        front: 'have lived',
        back: 'I (　　) here for five years.\n（私は5年間ここに住んでいます。）',
        hint: '「ずっと住んでいる」は現在完了。have + 過去分詞で…？',
        explanation: '継続の現在完了。live の過去分詞は lived だよ。',
      },
      {
        id: 'eng-pp-fc2',
        front: 'has known',
        back: 'She (　　) him since 2020.\n（彼女は2020年から彼を知っています。）',
        hint: 'She のときは have じゃなくて…？',
        explanation: '主語が she だから has を使うよ。know の過去分詞は known。',
      },
      {
        id: 'eng-pp-fc3',
        front: 'since',
        back: 'I have lived here (　　) last year.\n（私は去年からここに住んでいます。）',
        hint: '「去年から」→「いつから？」を表すことばは？',
        explanation: '「〜から」という起点を表すのは since だよ。',
      },
      {
        id: 'eng-pp-fc4',
        front: 'for',
        back: 'She has studied English (　　) three years.\n（彼女は3年間英語を勉強しています。）',
        hint: '「3年間」→「どのくらいの間？」を表すことばは？',
        explanation: '「〜の間」という期間を表すのは for だよ。',
      },
      {
        id: 'eng-pp-fc5',
        front: 'have visited',
        back: 'I (　　) Kyoto twice.\n（私は京都を2回訪れたことがあります。）',
        hint: '「〜したことがある」は経験の現在完了だよ。',
        explanation: '経験の現在完了。visit の過去分詞は visited だよ。',
      },
      {
        id: 'eng-pp-fc6',
        front: 'Have you ever',
        back: '(　　) been to Okinawa?\n（あなたは今までに沖縄に行ったことがありますか？）',
        hint: '「今までに〜したことがありますか？」は疑問文。ever を使うよ。',
        explanation: '経験をたずねるときは Have you ever + 過去分詞 だよ。',
      },
      {
        id: 'eng-pp-fc7',
        front: 'have just finished',
        back: 'I (　　) my homework.\n（私はちょうど宿題を終えたところです。）',
        hint: '「ちょうど〜したところ」は完了の現在完了。just は have のうしろに入れるよ。',
        explanation: '完了の現在完了。just は have と過去分詞の間に入れるよ。',
      },
      {
        id: 'eng-pp-fc8',
        front: 'has already read',
        back: 'She (　　) this book.\n（彼女はもうこの本を読みました。）',
        hint: '「もう〜した」は already。She だから has を使うよ。',
        explanation: 'already は has と過去分詞の間に入れるよ。read の過去分詞は read（発音はレッド）。',
      },
      {
        id: 'eng-pp-fc9',
        front: 'yet',
        back: 'I have not finished (　　).\n（私はまだ終わっていません。）',
        hint: '「まだ〜ない」のときに文の最後につけることばは？',
        explanation: 'yet は否定文・疑問文で使い、文の最後に置くよ。',
      },
      {
        id: 'eng-pp-fc10',
        front: 'never',
        back: 'I have (　　) eaten natto.\n（私は一度も納豆を食べたことがありません。）',
        hint: '「一度も〜ない」を表すことばは？',
        explanation: 'never は「一度も〜ない」。have と過去分詞の間に入れるよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-pp-q1',
          question: '「I (　　) here for three years.（私は3年間ここに住んでいます。）」\nの (　　) に入るのは？',
          options: ['live', 'lived', 'have lived', 'has lived'],
          correctIndex: 2,
          explanation: '「3年間ずっと住んでいる」は継続の現在完了。主語が I だから have lived だよ。',
        },
        {
          id: 'eng-pp-q2',
          question: '「She (　　) Kyoto twice.（彼女は京都を2回訪れたことがあります。）」\nの (　　) に入るのは？',
          options: ['visited', 'has visited', 'have visited', 'is visited'],
          correctIndex: 1,
          explanation: 'She は1人だから has を使うよ。has visited が正解。',
        },
        {
          id: 'eng-pp-q3',
          question: '「あなたは今までにすしを食べたことがありますか？」を英語にすると？',
          options: [
            'Did you ever eat sushi?',
            'Have you ever eaten sushi?',
            'Do you ever eat sushi?',
            'Were you ever eaten sushi?',
          ],
          correctIndex: 1,
          explanation: '「〜したことがありますか？」は Have you ever + 過去分詞。eat の過去分詞は eaten だよ。',
        },
        {
          id: 'eng-pp-q4',
          question: '「I have (　　) finished my homework.（私はちょうど宿題を終えたところです。）」\nの (　　) に入るのは？',
          options: ['yet', 'already', 'just', 'ever'],
          correctIndex: 2,
          explanation: '「ちょうど〜したところ」は just を使うよ。have と過去分詞の間に入れるよ。',
        },
        {
          id: 'eng-pp-q5',
          question: '「He has not called me (　　).（彼はまだ私に電話していません。）」\nの (　　) に入るのは？',
          options: ['just', 'already', 'never', 'yet'],
          correctIndex: 3,
          explanation: '「まだ〜していない」は yet を文の最後に置くよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-pp-ex1',
          question: '次の日本語を英語にしよう。\n「私は10年間この町に住んでいます。」',
          steps: [
            {
              title: 'Step 1: どの使い方か考えよう',
              content: '「10年間住んでいる」→ 過去から今までずっと続いているから「継続」の現在完了だね。',
              highlight: '継続',
            },
            {
              title: 'Step 2: 現在完了の形を作ろう',
              content: '主語は I だから have を使うよ。live の過去分詞は lived。I have lived にしよう。',
              highlight: 'I have lived',
            },
            {
              title: 'Step 3: 「10年間」をつけよう',
              content: '「10年間」は期間だから for を使うよ。for ten years で完成！',
              highlight: 'for ten years',
            },
          ],
          answer: 'I have lived in this town for ten years.\n（私は10年間この町に住んでいます。）',
        },
        {
          id: 'eng-pp-ex2',
          question: '次の日本語を英語にしよう。\n「あなたは今までにこの映画を見たことがありますか？」',
          steps: [
            {
              title: 'Step 1: どの使い方か考えよう',
              content: '「〜したことがありますか？」→ 「経験」の現在完了の疑問文だね。',
              highlight: '経験',
            },
            {
              title: 'Step 2: 疑問文を作ろう',
              content: 'Have を文のいちばん最初に。「今までに」は ever を使うよ。Have you ever …？の形にしよう。',
              highlight: 'Have you ever',
            },
            {
              title: 'Step 3: 動詞と残りを入れよう',
              content: 'see の過去分詞は seen。「この映画を」は this movie。Have you ever seen this movie? で完成！',
              highlight: 'seen this movie',
            },
          ],
          answer: 'Have you ever seen this movie?\n（あなたは今までにこの映画を見たことがありますか？）',
        },
        {
          id: 'eng-pp-ex3',
          question: '次の日本語を英語にしよう。\n「彼女はもう宿題を終えました。」',
          steps: [
            {
              title: 'Step 1: どの使い方か考えよう',
              content: '「もう〜した」→ 「完了」の現在完了だね。',
              highlight: '完了',
            },
            {
              title: 'Step 2: 主語と have/has を決めよう',
              content: '主語は「彼女」= She。She は1人だから has を使うよ。',
              highlight: 'She has',
            },
            {
              title: 'Step 3: 「もう」と動詞を入れよう',
              content: '「もう」は already。has と過去分詞の間に入れるよ。finish の過去分詞は finished。',
              highlight: 'has already finished',
            },
          ],
          answer: 'She has already finished her homework.\n（彼女はもう宿題を終えました。）',
        },
      ],
    },
    chatId: 'eng-present-perfect',
  },
};

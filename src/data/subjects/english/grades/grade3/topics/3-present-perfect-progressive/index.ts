import type { Topic } from '../../../../../../../data/types';

export const presentPerfectProgressive: Topic = {
  id: 'eng-present-perfect-progressive',
  eraId: 'english-grade3',
  name: '現在完了進行形',
  subtitle: 'have been + ~ing で「ずっと〜し続けている」',
  icon: '⏱️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '現在完了進行形ってなに？',
          content:
            '「過去のある時点から今までずっと動作を続けている」ことを表すのが現在完了進行形だよ。作り方は have（has）+ been + 〜ing。現在完了（have + 過去分詞）と進行形（be + 〜ing）が合体した形だよ。',
          keyPoints: [
            'I have been studying for two hours. = 私は2時間ずっと勉強し続けています。',
            'She has been running since this morning. = 彼女は今朝からずっと走っています。',
            'They have been waiting for thirty minutes. = 彼らは30分間ずっと待っています。',
          ],
        },
        {
          title: '現在完了とのちがい',
          content:
            '現在完了（have + 過去分詞）は「状態がずっと続いている」とき、現在完了進行形（have been + 〜ing）は「動作をずっとし続けている」ときに使うよ。live（住む）や know（知っている）のような状態は現在完了、study（勉強する）や run（走る）のような動作は現在完了進行形を使うのがポイント。',
          keyPoints: [
            '状態の継続 → 現在完了: I have lived here for ten years. = 10年間ここに住んでいます。',
            '動作の継続 → 現在完了進行形: I have been reading for two hours. = 2時間ずっと読んでいます。',
            '迷ったら「体を動かす感じがあるかな？」と考えてみよう！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-ppp-fc1',
        front: 'have been studying',
        back: 'I (　　) for two hours.\n（私は2時間ずっと勉強し続けています。）',
        hint: '「ずっと勉強し続けている」は現在完了進行形。have + been + 〜ing で…？',
        explanation: '動作の継続だから現在完了進行形。have been studying だよ。',
      },
      {
        id: 'eng-ppp-fc2',
        front: 'has been running',
        back: 'She (　　) since this morning.\n（彼女は今朝からずっと走っています。）',
        hint: 'She のときは have じゃなくて…？',
        explanation: 'She だから has を使うよ。has been running が正解。',
      },
      {
        id: 'eng-ppp-fc3',
        front: 'have been waiting',
        back: 'They (　　) for thirty minutes.\n（彼らは30分間ずっと待っています。）',
        hint: 'They のときは have。wait を 〜ing の形にすると…？',
        explanation: 'have been waiting で「ずっと待ち続けている」だよ。',
      },
      {
        id: 'eng-ppp-fc4',
        front: 'has been playing',
        back: 'He (　　) tennis since 3 p.m.\n（彼は午後3時からずっとテニスをしています。）',
        hint: 'He だから has を使うよ。play を 〜ing にすると…？',
        explanation: 'has been playing で「ずっとプレーし続けている」だよ。',
      },
      {
        id: 'eng-ppp-fc5',
        front: 'have been reading',
        back: 'I (　　) this book for three days.\n（私は3日間ずっとこの本を読んでいます。）',
        hint: 'read は動作だから現在完了進行形を使うよ。',
        explanation: '動作の継続。have been reading が正解。',
      },
      {
        id: 'eng-ppp-fc6',
        front: 'have lived',
        back: 'I (　　) here for five years.\n（私は5年間ここに住んでいます。）',
        hint: 'live は「状態」だから現在完了進行形じゃなくて…？',
        explanation: 'live は状態の動詞だから、現在完了 have lived を使うよ。',
      },
      {
        id: 'eng-ppp-fc7',
        front: 'have been walking',
        back: 'We (　　) for an hour.\n（私たちは1時間ずっと歩いています。）',
        hint: 'walk は動作だから現在完了進行形だよ。',
        explanation: '動作の継続。have been walking で「ずっと歩き続けている」。',
      },
      {
        id: 'eng-ppp-fc8',
        front: 'has been raining',
        back: 'It (　　) since yesterday.\n（昨日からずっと雨が降り続いています。）',
        hint: 'It のときは has を使うよ。rain を 〜ing にすると…？',
        explanation: 'has been raining で「ずっと降り続いている」だよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-ppp-q1',
          question: '「I (　　) for three hours.（私は3時間ずっと勉強し続けています。）」\nの (　　) に入るのは？',
          options: ['have studied', 'have been studying', 'am studying', 'studied'],
          correctIndex: 1,
          explanation: '「ずっと勉強し続けている」は動作の継続。現在完了進行形 have been studying だよ。',
        },
        {
          id: 'eng-ppp-q2',
          question: '「She (　　) him for ten years.（彼女は10年間彼を知っています。）」\nの (　　) に入るのは？',
          options: ['has been knowing', 'has known', 'have known', 'is knowing'],
          correctIndex: 1,
          explanation: 'know は状態の動詞だから現在完了 has known を使うよ。現在完了進行形にはしないよ。',
        },
        {
          id: 'eng-ppp-q3',
          question: '「It (　　) since this morning.（今朝からずっと雨が降り続いています。）」\nの (　　) に入るのは？',
          options: ['has rained', 'has been raining', 'is raining', 'have been raining'],
          correctIndex: 1,
          explanation: '「ずっと降り続いている」は動作の継続。It だから has been raining だよ。',
        },
        {
          id: 'eng-ppp-q4',
          question: '次のうち、現在完了進行形を使うのがふさわしいのは？',
          options: [
            'I have known her for five years.',
            'I have been running for an hour.',
            'She has liked chocolate since she was a child.',
            'They have lived in Tokyo for three years.',
          ],
          correctIndex: 1,
          explanation: 'run（走る）は動作だから現在完了進行形がふさわしいよ。know, like, live は状態だから現在完了を使うよ。',
        },
        {
          id: 'eng-ppp-q5',
          question: '「He (　　) tennis since 2 p.m.（彼は午後2時からずっとテニスをしています。）」\nの (　　) に入るのは？',
          options: ['has been playing', 'have been playing', 'has played', 'is playing'],
          correctIndex: 0,
          explanation: 'play は動作だから現在完了進行形。He だから has been playing だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-ppp-ex1',
          question: '次の日本語を英語にしよう。\n「私は1時間ずっと走り続けています。」',
          steps: [
            {
              title: 'Step 1: 現在完了か現在完了進行形か考えよう',
              content: '「走り続けている」→ run は動作だから現在完了進行形を使うよ。',
              highlight: '現在完了進行形',
            },
            {
              title: 'Step 2: have been + 〜ing の形を作ろう',
              content: '主語は I だから have を使うよ。run の 〜ing 形は running。I have been running にしよう。',
              highlight: 'I have been running',
            },
            {
              title: 'Step 3: 「1時間」をつけよう',
              content: '「1時間」は期間だから for を使うよ。for an hour で完成！',
              highlight: 'for an hour',
            },
          ],
          answer: 'I have been running for an hour.\n（私は1時間ずっと走り続けています。）',
        },
        {
          id: 'eng-ppp-ex2',
          question: '次の日本語を英語にしよう。\n「彼女は今朝からずっとピアノを弾いています。」',
          steps: [
            {
              title: 'Step 1: 現在完了か現在完了進行形か考えよう',
              content: '「弾いている」→ play は動作だから現在完了進行形だね。',
              highlight: '現在完了進行形',
            },
            {
              title: 'Step 2: has been + 〜ing の形を作ろう',
              content: '主語は She だから has を使うよ。play の 〜ing 形は playing。She has been playing。',
              highlight: 'She has been playing',
            },
            {
              title: 'Step 3: 「今朝から」をつけよう',
              content: '「今朝から」は起点だから since を使うよ。since this morning で完成！',
              highlight: 'since this morning',
            },
          ],
          answer: 'She has been playing the piano since this morning.\n（彼女は今朝からずっとピアノを弾いています。）',
        },
        {
          id: 'eng-ppp-ex3',
          question: '次の（　　）に have lived と have been living のどちらが入るか考えよう。\n「I (　　) in this town for ten years.（私は10年間この町に住んでいます。）」',
          steps: [
            {
              title: 'Step 1: live はどっち？',
              content: 'live（住む）は「状態」を表す動詞だね。体を動かす感じはないよ。',
              highlight: '状態',
            },
            {
              title: 'Step 2: 状態なら現在完了！',
              content: '状態の継続には現在完了（have + 過去分詞）を使うよ。have lived が正解。',
              highlight: 'have lived',
            },
            {
              title: 'Step 3: もし study だったら？',
              content: 'もし「10年間勉強し続けている」なら study は動作だから have been studying にするよ。',
              highlight: 'have been studying',
            },
          ],
          answer: 'I have lived in this town for ten years.\n（私は10年間この町に住んでいます。）\n※ live は状態だから現在完了を使うよ。',
        },
      ],
    },
    chatId: 'eng-present-perfect-progressive',
  },
};

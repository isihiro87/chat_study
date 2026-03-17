import type { Topic } from '../../../../../../../data/types';

export const makeShow: Topic = {
  id: 'eng-make-show',
  eraId: 'english-grade3',
  name: 'make・show の応用',
  subtitle: 'make 人 〜 / show 人 that の使い方',
  icon: '🎭',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'make +「〜を」+「〜に」ってなに？',
          content:
            'make は「作る」だけじゃないよ。make +「〜を」にあたることば +「〜に」にあたることば で「〜を…にする / させる」という意味になるよ。「〜に」の部分には happy, sad, angry のような気持ちや状態を表すことばが入るよ。',
          keyPoints: [
            'The news made me happy. = そのニュースは私をうれしくさせました。',
            'The movie made her sad. = その映画は彼女を悲しくさせました。',
            'This song makes me excited. = この曲は私をワクワクさせます。',
          ],
        },
        {
          title: 'show / tell + 人 + that + 文',
          content:
            'show や tell のうしろに「人」+「that + 文」を続けると、「人に〜ということを示す / 伝える」という意味になるよ。that のうしろには主語 + 動詞の文がくるよ。that は省略できることも多いよ。',
          keyPoints: [
            'He showed me that it was true. = 彼は私にそれが本当だと示しました。',
            'She told me that she was busy. = 彼女は私に忙しいと言いました。',
            'that は省略OK → She told me she was busy. でも同じ意味。',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-ms-fc1',
        front: 'happy',
        back: 'The news made me (　　).\n（そのニュースは私をうれしくさせました。）',
        hint: 'make +「〜を」+「〜に」。うれしいは英語で…？',
        explanation: 'make me happy で「私をうれしくさせる」だよ。',
      },
      {
        id: 'eng-ms-fc2',
        front: 'sad',
        back: 'The movie made her (　　).\n（その映画は彼女を悲しくさせました。）',
        hint: '「悲しい」は英語で…？',
        explanation: 'make her sad で「彼女を悲しくさせる」だよ。',
      },
      {
        id: 'eng-ms-fc3',
        front: 'angry',
        back: 'His words made me (　　).\n（彼のことばは私を怒らせました。）',
        hint: '「怒っている」は英語で…？',
        explanation: 'make me angry で「私を怒らせる」だよ。',
      },
      {
        id: 'eng-ms-fc4',
        front: 'made',
        back: 'The game (　　) us excited.\n（その試合は私たちをワクワクさせました。）',
        hint: '過去の話だよ。make の過去形は…？',
        explanation: 'make の過去形は made。made us excited で「私たちをワクワクさせた」。',
      },
      {
        id: 'eng-ms-fc5',
        front: 'that',
        back: 'He showed me (　　) it was true.\n（彼は私にそれが本当だと示しました。）',
        hint: '「〜ということ」を表すつなぎのことばは？',
        explanation: 'show + 人 + that + 文 で「人に〜ということを示す」だよ。',
      },
      {
        id: 'eng-ms-fc6',
        front: 'told',
        back: 'She (　　) me that she was tired.\n（彼女は私に疲れていると言いました。）',
        hint: '「言った」は tell の過去形だよ。',
        explanation: 'tell の過去形は told。told me that ... で「私に〜と言った」だよ。',
      },
      {
        id: 'eng-ms-fc7',
        front: 'that he was a doctor',
        back: 'She told me (　　).\n（彼女は私に彼が医者だと言いました。）',
        hint: 'that のうしろに「彼が医者だ」という文を続けよう。',
        explanation: 'that のうしろに he was a doctor という文がくるよ。',
      },
      {
        id: 'eng-ms-fc8',
        front: 'made me nervous',
        back: 'The test (　　).\n（そのテストは私を緊張させました。）',
        hint: 'make +「〜を」+「〜に」。「緊張した」は nervous。過去の話だよ。',
        explanation: 'make の過去形 made + me + nervous で「私を緊張させた」だよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-ms-q1',
          question: '「The news made me (　　).（そのニュースは私をうれしくさせました。）」\nの (　　) に入るのは？',
          options: ['happy', 'happily', 'happiness', 'to happy'],
          correctIndex: 0,
          explanation: 'make +「〜を」+「〜に」の形。「〜に」のところには happy がそのまま入るよ。',
        },
        {
          id: 'eng-ms-q2',
          question: '「The rain (　　) us sad.（雨は私たちを悲しくさせました。）」\nの (　　) に入るのは？',
          options: ['make', 'makes', 'making', 'made'],
          correctIndex: 3,
          explanation: '過去の話だから make の過去形 made を使うよ。',
        },
        {
          id: 'eng-ms-q3',
          question: '「She told me (　　) she liked English.（彼女は私に英語が好きだと言いました。）」\nの (　　) に入るのは？',
          options: ['what', 'that', 'which', 'who'],
          correctIndex: 1,
          explanation: 'tell + 人 + that + 文 で「人に〜と伝える」だよ。',
        },
        {
          id: 'eng-ms-q4',
          question: '「彼は私にそれは簡単だと示しました。」を英語にすると？',
          options: [
            'He showed me it easy.',
            'He showed that me it was easy.',
            'He showed me that it was easy.',
            'He showed that it was easy me.',
          ],
          correctIndex: 2,
          explanation: 'show + 人 + that + 文 で「人に〜ということを示す」だよ。',
        },
        {
          id: 'eng-ms-q5',
          question: '次のうち、make の使い方として正しいものは？',
          options: [
            'The music made me to happy.',
            'The music made me happily.',
            'The music made happy me.',
            'The music made me happy.',
          ],
          correctIndex: 3,
          explanation: 'make +「〜を」+「〜に」のならび。make me happy が正しい形だよ。',
        },
        {
          id: 'eng-ms-q6',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「そのニュースは私をうれしくさせました。」という英文を作ろう。',
          words: ['happy', 'me', 'made', 'the', 'news'],
          correctOrder: [3, 4, 2, 1, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「The news made me happy.」が正解。The news（そのニュース）+ made（〜させた）+ me（私を）+ happy（うれしく）の順番だよ。',
        },
        {
          id: 'eng-ms-q7',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼女はそれが本当だと私に見せてくれた。」という英文を完成させよう。\nShe showed me (　　)(　　)(　　)(　　).',
          words: ['was', 'it', 'true', 'that'],
          correctOrder: [3, 1, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「She showed me that it was true.」が正解。that（〜ということ）+ it（それが）+ was（〜だった）+ true（本当）の順番だよ。',
        },
        {
          id: 'eng-ms-q8',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼のことばは彼女を悲しくさせました。」という英文を作ろう。',
          words: ['sad', 'her', 'made', 'his', 'words'],
          correctOrder: [3, 4, 2, 1, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「His words made her sad.」が正解。His words（彼のことば）+ made（〜させた）+ her（彼女を）+ sad（悲しく）の順番だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-ms-ex1',
          question: '次の日本語を英語にしよう。\n「その映画は私を悲しくさせました。」',
          steps: [
            {
              title: 'Step 1: make の形を選ぼう',
              content: '「させました」→ 過去の話だから make の過去形 made を使うよ。',
              highlight: 'made',
            },
            {
              title: 'Step 2:「〜を」にあたることばを入れよう',
              content: '「私を」は英語で me だよ。made のうしろに置こう。',
              highlight: 'made me',
            },
            {
              title: 'Step 3:「〜に」にあたることばを入れよう',
              content: '「悲しく」は英語で sad。これで made me sad の完成！',
              highlight: 'sad',
            },
          ],
          answer: 'The movie made me sad.\n（その映画は私を悲しくさせました。）',
        },
        {
          id: 'eng-ms-ex2',
          question: '次の日本語を英語にしよう。\n「彼女は私に自分は忙しいと言いました。」',
          steps: [
            {
              title: 'Step 1: tell の形を選ぼう',
              content: '「言いました」→ 過去の話だから tell の過去形 told を使うよ。',
              highlight: 'told',
            },
            {
              title: 'Step 2:「誰に」と「that」を入れよう',
              content: '「私に」は me。そのうしろに that を置くよ。told me that …',
              highlight: 'told me that',
            },
            {
              title: 'Step 3: that のうしろに文を続けよう',
              content: '「自分は忙しい」→ she was busy。that she was busy で完成！',
              highlight: 'she was busy',
            },
          ],
          answer: 'She told me that she was busy.\n（彼女は私に自分は忙しいと言いました。）',
        },
        {
          id: 'eng-ms-ex3',
          question: '次の日本語を英語にしよう。\n「この曲は私たちを元気にさせます。」',
          steps: [
            {
              title: 'Step 1: make の形を選ぼう',
              content: '「させます」→ 現在の話。主語は This song（1つ）だから makes を使うよ。',
              highlight: 'makes',
            },
            {
              title: 'Step 2:「〜を」にあたることばを入れよう',
              content: '「私たちを」は英語で us。makes のうしろに置こう。',
              highlight: 'makes us',
            },
            {
              title: 'Step 3:「〜に」にあたることばを入れよう',
              content: '「元気な」は happy や cheerful。ここでは happy を使おう。',
              highlight: 'happy',
            },
          ],
          answer: 'This song makes us happy.\n（この曲は私たちを元気にさせます。）',
        },
      ],
    },
    chatId: 'eng-make-show',
  },
};

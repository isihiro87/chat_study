import type { Topic } from '../../../../../../../data/types';

export const pronouns: Topic = {
  id: 'eng-pronouns',
  eraId: 'english-grade1',
  name: '代名詞',
  subtitle: '主格・所有格・目的格・所有代名詞と Whose / Which の使い方',
  icon: '👥',
  order: 8,
  content: {
    explanation: {
      sections: [
        {
          title: '「だれが」を表す代名詞（主格）',
          content:
            '英語には「私」「あなた」「彼」「彼女」のように、名前のかわりに使う言葉がたくさんあるよ。これらを代名詞（名前のかわりに使う言葉）と呼ぶんだ。',
          keyPoints: [
            'I = 私 / you = あなた / he = 彼 / she = 彼女',
            'it = それ（もの・動物）/ we = 私たち / they = 彼ら',
            'I は am、he/she/it は is、you/we/they は are を使うよ',
          ],
        },
        {
          title: '「〜の」を表す形（所有格）',
          content:
            '「私の」「あなたの」と言いたいときは、代名詞の形がかわるよ。この形は名詞の前に置いて使うんだ。',
          keyPoints: [
            'I → my（私の）: This is my book. = これは私の本です。',
            'you → your（あなたの）: This is your pen. = これはあなたのペンです。',
            'he → his（彼の）/ she → her（彼女の）',
            'we → our（私たちの）/ they → their（彼らの）',
          ],
        },
        {
          title: '「〜を・〜に」を表す形（目的格）',
          content:
            '「彼を知っている」「私たちに教えて」のように、動詞のあとに代名詞を置くときは目的格を使うよ。',
          keyPoints: [
            'I → me（私を）/ you → you（あなたを）',
            'he → him（彼を）/ she → her（彼女を）',
            'we → us（私たちを）/ they → them（彼らを）',
            '動詞のあとに置く: I know him. / Please help us.',
          ],
        },
        {
          title: '「〜のもの」を表す形（所有代名詞）と Whose',
          content:
            '「私のもの」「彼女のもの」のように、名詞をつけずに「〜のもの」と言いたいときは所有代名詞を使うよ。「だれの？」と聞くときは Whose を使おう。',
          keyPoints: [
            'mine（私の）/ yours（あなたの）/ his（彼の）/ hers（彼女の）',
            'ours（私たちの）/ theirs（彼らの）',
            'my pen → mine に書きかえられる（名詞なしで使える）',
            'Whose bag is this? — It\'s mine.（だれのカバン？ — 私のです。）',
          ],
        },
        {
          title: 'Which の疑問文',
          content:
            '2つ以上のものから「どちら？」「どれ？」と選ぶときは Which を使うよ。',
          keyPoints: [
            'Which do you like, A or B? = AとBどちらが好き？',
            'Which + 名詞 do you 〜? = どの〜を…？',
            '例: Which color do you like, red or blue? — I like red.',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      // --- 所有格（既存） ---
      {
        id: 'eng-pn-fc1',
        front: 'my',
        back: 'This is (　　) book.\n（これは私の本です。）',
        hint: '「私の」は I じゃなくて…？',
        explanation: '「私の」は my だよ。I → my にかわるよ。',
      },
      {
        id: 'eng-pn-fc2',
        front: 'your',
        back: 'Is this (　　) pen?\n（これはあなたのペンですか？）',
        hint: '「あなたの」は you じゃなくて…？',
        explanation: '「あなたの」は your だよ。you → your にかわるよ。',
      },
      {
        id: 'eng-pn-fc3',
        front: 'his',
        back: 'That is (　　) bag.\n（あれは彼のカバンです。）',
        hint: '「彼の」は he じゃなくて…？',
        explanation: '「彼の」は his だよ。he → his にかわるよ。',
      },
      {
        id: 'eng-pn-fc4',
        front: 'her',
        back: 'I like (　　) cat.\n（私は彼女のネコが好きです。）',
        hint: '「彼女の」は she じゃなくて…？',
        explanation: '「彼女の」は her だよ。she → her にかわるよ。',
      },
      {
        id: 'eng-pn-fc5',
        front: 'our',
        back: 'This is (　　) school.\n（これは私たちの学校です。）',
        hint: '「私たちの」は we じゃなくて…？',
        explanation: '「私たちの」は our だよ。we → our にかわるよ。',
      },
      {
        id: 'eng-pn-fc6',
        front: 'their',
        back: 'I know (　　) names.\n（私は彼らの名前を知っています。）',
        hint: '「彼らの」は they じゃなくて…？',
        explanation: '「彼らの」は their だよ。they → their にかわるよ。',
      },
      {
        id: 'eng-pn-fc7',
        front: 'We',
        back: '(　　) are friends.\n（私たちは友達です。）',
        hint: '「私たち」を英語で言うと…？',
        explanation: '「私たち」は we だよ。2人以上だから are を使うよ。',
      },
      {
        id: 'eng-pn-fc8',
        front: 'They',
        back: '(　　) are students.\n（彼らは生徒です。）',
        hint: '「彼ら」を英語で言うと…？',
        explanation: '「彼ら」は they だよ。2人以上だから are を使うよ。',
      },
      // --- 目的格（新規） ---
      {
        id: 'eng-pn-fc9',
        front: 'me',
        back: 'Please call (　　).\n（私に電話してください。）',
        hint: '「私に」は I じゃなくて…？',
        explanation: '「私を・私に」は me だよ。動詞のあとに置くよ。',
      },
      {
        id: 'eng-pn-fc10',
        front: 'him',
        back: 'I know (　　).\n（私は彼を知っています。）',
        hint: '「彼を」は he じゃなくて…？',
        explanation: '「彼を」は him だよ。he → him にかわるよ。',
      },
      {
        id: 'eng-pn-fc11',
        front: 'her',
        back: 'Do you like (　　)?\n（あなたは彼女が好きですか。）',
        hint: '「彼女を」を英語で言うと…？',
        explanation: '「彼女を」は her だよ。所有格「彼女の」と同じ形だけど意味がちがうよ。',
      },
      {
        id: 'eng-pn-fc12',
        front: 'us',
        back: 'Please help (　　).\n（私たちを手伝ってください。）',
        hint: '「私たちを」は we じゃなくて…？',
        explanation: '「私たちを」は us だよ。we → us にかわるよ。',
      },
      {
        id: 'eng-pn-fc13',
        front: 'them',
        back: 'I like (　　) very much.\n（私は彼らがとても好きです。）',
        hint: '「彼らを」は they じゃなくて…？',
        explanation: '「彼らを」は them だよ。they → them にかわるよ。',
      },
      {
        id: 'eng-pn-fc14',
        front: 'it',
        back: 'I have a dog. I love (　　).\n（私は犬を飼っています。大好きです。）',
        hint: '「それを」は英語で…？',
        explanation: '「それを」は it だよ。it は主格と目的格が同じ形だよ。',
      },
      {
        id: 'eng-pn-fc15',
        front: 'you',
        back: 'I will help (　　).\n（あなたを手伝います。）',
        hint: '「あなたを」は英語で…？',
        explanation: '「あなたを」は you だよ。you は主格と目的格が同じ形だよ。',
      },
      // --- 所有代名詞（新規） ---
      {
        id: 'eng-pn-fc16',
        front: 'mine',
        back: 'This pen is (　　).\n（このペンは私のものです。）',
        hint: '「私のもの」を1語で言うと…？',
        explanation: '「私のもの」は mine だよ。名詞をつけずに単独で使えるよ。',
      },
      {
        id: 'eng-pn-fc17',
        front: 'yours',
        back: 'Is this book (　　)?\n（この本はあなたのものですか。）',
        hint: '「あなたのもの」を1語で言うと…？',
        explanation: '「あなたのもの」は yours だよ。your + 名詞 = yours。',
      },
      {
        id: 'eng-pn-fc18',
        front: 'hers',
        back: 'That bag is (　　).\n（あのカバンは彼女のものです。）',
        hint: '「彼女のもの」を1語で言うと…？',
        explanation: '「彼女のもの」は hers だよ。her + 名詞 = hers。',
      },
      {
        id: 'eng-pn-fc19',
        front: 'ours',
        back: 'This classroom is (　　).\n（この教室は私たちのものです。）',
        hint: '「私たちのもの」を1語で言うと…？',
        explanation: '「私たちのもの」は ours だよ。our + 名詞 = ours。',
      },
      {
        id: 'eng-pn-fc20',
        front: 'theirs',
        back: 'Those bikes are (　　).\n（あれらの自転車は彼らのものです。）',
        hint: '「彼らのもの」を1語で言うと…？',
        explanation: '「彼らのもの」は theirs だよ。their + 名詞 = theirs。',
      },
      // --- Whose / Which 関連（新規） ---
      {
        id: 'eng-pn-fc21',
        front: 'Whose',
        back: '(　　) cap is this? — It\'s mine.\n（これはだれの帽子ですか。— 私のです。）',
        hint: '「だれの」を英語で言うと…？',
        explanation: '「だれの」は Whose だよ。Whose + 名詞 is this? の形で使うよ。',
      },
      {
        id: 'eng-pn-fc22',
        front: 'Which',
        back: '(　　) do you like, tea or coffee?\n（紅茶とコーヒー、どちらが好き？）',
        hint: '2つから選ぶときの「どちら」は…？',
        explanation: '「どちら・どれ」は Which だよ。選択肢は A or B の形でつけるよ。',
      },
      {
        id: 'eng-pn-fc23',
        front: 'Which season',
        back: '(　　) do you like?\n（あなたはどの季節が好きですか。）',
        hint: '「どの季節」は Which + …？',
        explanation: 'Which + 名詞 で「どの〜」と聞けるよ。Which season = どの季節。',
      },
    ],
    quiz: {
      questions: [
        // --- 既存の4択（所有格・主格）---
        {
          id: 'eng-pn-q1',
          question: '「これは私の本です。」を英語にすると？',
          options: [
            'This is I book.',
            'This is me book.',
            'This is my book.',
            'This is mine book.',
          ],
          correctIndex: 2,
          explanation: '「私の」は my だよ。This is my book.',
        },
        {
          id: 'eng-pn-q2',
          question: '「あれは彼のカバンです。」を英語にすると？',
          options: [
            'That is he bag.',
            'That is him bag.',
            'That is her bag.',
            'That is his bag.',
          ],
          correctIndex: 3,
          explanation: '「彼の」は his だよ。That is his bag.',
        },
        {
          id: 'eng-pn-q3',
          question: '「彼らは生徒です。」の「彼ら」にあたる英語は？',
          options: ['We', 'You', 'They', 'He'],
          correctIndex: 2,
          explanation: '「彼ら」は they だよ。They are students.',
        },
        {
          id: 'eng-pn-q4',
          question: '「私たちの学校」を英語にすると？',
          options: ['we school', 'us school', 'our school', 'ours school'],
          correctIndex: 2,
          explanation: '「私たちの」は our だよ。our school',
        },
        {
          id: 'eng-pn-q5',
          question: '「I like (　　) cat.（私は彼女のネコが好きです。）」\nの (　　) に入るのは？',
          options: ['she', 'her', 'his', 'hers'],
          correctIndex: 1,
          explanation: '「彼女の」は her だよ。she → her にかわるよ。',
        },
        // --- 目的格（新規4択） ---
        {
          id: 'eng-pn-q9',
          question: '「I know (　　).（私は彼を知っています。）」\nの (　　) に入るのは？',
          options: ['he', 'his', 'him', 'her'],
          correctIndex: 2,
          explanation: '「彼を」は目的格の him だよ。動詞 know のあとに置くよ。',
        },
        {
          id: 'eng-pn-q10',
          question: '「Please help (　　).（私たちを手伝ってください。）」\nの (　　) に入るのは？',
          options: ['we', 'our', 'ours', 'us'],
          correctIndex: 3,
          explanation: '「私たちを」は目的格の us だよ。we → us にかわるよ。',
        },
        // --- 所有代名詞（新規4択） ---
        {
          id: 'eng-pn-q11',
          question: '「This pen is (　　).（このペンは私のものです。）」\nの (　　) に入るのは？',
          options: ['my', 'me', 'I', 'mine'],
          correctIndex: 3,
          explanation: '「私のもの」は所有代名詞の mine だよ。名詞なしで使えるよ。',
        },
        {
          id: 'eng-pn-q12',
          question: '「That bag is (　　).（あのカバンは彼女のものです。）」\nの (　　) に入るのは？',
          options: ['she', 'her', 'hers', 'his'],
          correctIndex: 2,
          explanation: '「彼女のもの」は所有代名詞の hers だよ。her bag = hers。',
        },
        // --- Whose / Which（新規4択） ---
        {
          id: 'eng-pn-q13',
          question: '「(　　) notebook is this? — It\'s Ken\'s.」\nの (　　) に入るのは？',
          options: ['What', 'Who', 'Whose', 'Which'],
          correctIndex: 2,
          explanation: '「だれの」は Whose だよ。Whose notebook is this?',
        },
        {
          id: 'eng-pn-q14',
          question: '「(　　) do you want, tea or juice?」\nの (　　) に入るのは？',
          options: ['What', 'Which', 'Who', 'Whose'],
          correctIndex: 1,
          explanation: '2つから選ぶときは Which を使うよ。Which do you want, tea or juice?',
        },
        // --- 既存の並べ替え ---
        {
          id: 'eng-pn-q6',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「これは私の本です。」という英文を作ろう。',
          words: ['my', 'this', 'book', 'is'],
          correctOrder: [1, 3, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「This is my book.」が正解。This（これは）+ is（です）+ my book（私の本）の順番だよ。「私の」は I じゃなくて my を使うよ。',
        },
        {
          id: 'eng-pn-q7',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼女の名前はユキです。」という英文を作ろう。',
          words: ['name', 'Yuki', 'her', 'is'],
          correctOrder: [2, 0, 3, 1],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「Her name is Yuki.」が正解。Her（彼女の）+ name（名前）+ is（です）+ Yuki（ユキ）の順番だよ。「彼女の」は she じゃなくて her を使うよ。',
        },
        {
          id: 'eng-pn-q8',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「私は彼を知っています。」という英文を作ろう。',
          words: ['him', 'I', 'know'],
          correctOrder: [1, 2, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「I know him.」が正解。I（私は）+ know（知っている）+ him（彼を）の順番だよ。「彼を」は he じゃなくて him を使うよ。',
        },
        // --- 新規の並べ替え ---
        {
          id: 'eng-pn-q15',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「これはだれの帽子ですか。」という英文を作ろう。',
          words: ['this', 'whose', 'is', 'cap'],
          correctOrder: [1, 3, 2, 0],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation: '「Whose cap is this?」が正解。Whose（だれの）+ cap（帽子）+ is this?（これですか）の順番だよ。',
        },
        {
          id: 'eng-pn-q16',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「このペンは私のものです。」という英文を作ろう。',
          words: ['is', 'this', 'mine', 'pen'],
          correctOrder: [1, 3, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「This pen is mine.」が正解。This pen（このペン）+ is（です）+ mine（私のもの）の順番だよ。所有代名詞 mine は名詞なしで使えるよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-pn-ex1',
          question: '次の日本語を英語にしよう。\n「これは私のペンです。」',
          steps: [
            {
              title: 'Step 1: 「これは」を英語にしよう',
              content: '「これは」は近くのものだから this を使うよ。',
              highlight: 'This',
            },
            {
              title: 'Step 2: 「〜です」を英語にしよう',
              content: '「〜です」は be動詞。this のときは is だよ。',
              highlight: 'is',
            },
            {
              title: 'Step 3: 「私のペン」を英語にしよう',
              content: '「私の」は my。ペンは pen。「my + 名詞」の形で使うよ。',
              highlight: 'my pen',
            },
          ],
          answer: 'This is my pen.（これは私のペンです。）',
        },
        {
          id: 'eng-pn-ex2',
          question: '次の日本語を英語にしよう。\n「彼女は私たちの先生です。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「彼女は」→ 英語で She だね。',
              highlight: 'She',
            },
            {
              title: 'Step 2: 「〜です」を英語にしよう',
              content: 'She は1人だから be動詞は is だよ。',
              highlight: 'is',
            },
            {
              title: 'Step 3: 「私たちの先生」を英語にしよう',
              content: '「私たちの」は our。「先生」は teacher だよ。',
              highlight: 'our teacher',
            },
          ],
          answer: 'She is our teacher.（彼女は私たちの先生です。）',
        },
        {
          id: 'eng-pn-ex3',
          question: '次の文を「〜ですか？」の文にして、Yes で答えよう。\nThis is your bag.（これはあなたのカバンです。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content: 'This is your bag. の中で be動詞は is だね。',
              highlight: 'is',
            },
            {
              title: 'Step 2: is を前にもっていこう',
              content: 'is を This の前にもっていって、おわりに ? をつけよう。',
              highlight: 'Is this your bag?',
            },
            {
              title: 'Step 3: Yes で答えよう',
              content: '「あなたの〜？」と聞かれたら「私の〜」と答えるよ。your → my にかえて答えるんだ。',
              highlight: 'Yes, it is.',
            },
          ],
          answer: 'Is this your bag? — Yes, it is.\n（これはあなたのカバンですか？ — はい、そうです。）',
        },
        // --- 新規の例題 ---
        {
          id: 'eng-pn-ex4',
          question: '次の日本語を英語にしよう。\n「私は彼女をよく知っています。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「私は」→ 英語で I だね。',
              highlight: 'I',
            },
            {
              title: 'Step 2: 「知っている」を英語にしよう',
              content: '「知っている」は know だよ。',
              highlight: 'know',
            },
            {
              title: 'Step 3: 「彼女を」を英語にしよう',
              content: '「彼女を」は目的格の her。動詞 know のあとに置くよ。「よく」は well。',
              highlight: 'her well',
            },
          ],
          answer: 'I know her well.（私は彼女をよく知っています。）',
        },
        {
          id: 'eng-pn-ex5',
          question: '所有代名詞を使って書きかえよう。\nThis is my book. → This book is ____.',
          steps: [
            {
              title: 'Step 1: 何を書きかえるか考えよう',
              content: '「my book」を、名詞なしの「私のもの」に言いかえたい。',
              highlight: 'my book → ?',
            },
            {
              title: 'Step 2: 「私のもの」の所有代名詞は？',
              content: '「私のもの」は mine だよ。my + 名詞 → mine に書きかえられる。',
              highlight: 'mine',
            },
            {
              title: 'Step 3: 文を完成させよう',
              content: 'This book is の後ろに mine を置いて完成！',
              highlight: 'This book is mine.',
            },
          ],
          answer: 'This book is mine.（この本は私のものです。）',
        },
        {
          id: 'eng-pn-ex6',
          question: '次の日本語を英語にしよう。\n「これはだれのギターですか。— 彼のものです。」',
          steps: [
            {
              title: 'Step 1: 「だれの」を英語にしよう',
              content: '「だれの」は Whose だよ。Whose + 名詞 の形で使うよ。',
              highlight: 'Whose guitar',
            },
            {
              title: 'Step 2: 疑問文を作ろう',
              content: 'Whose guitar is this? で「これはだれのギターですか」になるよ。',
              highlight: 'Whose guitar is this?',
            },
            {
              title: 'Step 3: 「彼のもの」で答えよう',
              content: '「彼のもの」は所有代名詞の his だよ。It\'s his. で答えられるよ。',
              highlight: "It's his.",
            },
          ],
          answer: "Whose guitar is this? — It's his.\n（これはだれのギターですか。— 彼のものです。）",
        },
      ],
    },
    chatId: 'eng-pronouns',
  },
};

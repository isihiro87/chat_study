import type { Topic } from '../../../../../../../data/types';

export const relativePronouns: Topic = {
  id: 'eng-relative-pronouns',
  eraId: 'english-grade3',
  name: '関係代名詞',
  subtitle: 'who / which / that で名詞をくわしく説明する',
  icon: '🔗',
  order: 9,
  content: {
    explanation: {
      sections: [
        {
          title: '関係代名詞ってなに？',
          content:
            '関係代名詞（2つの文をつなげるための言葉）を使うと、名詞のうしろから「どんな人？」「どんなもの？」をくわしく説明できるよ。人を説明するときは who、ものを説明するときは which を使うよ。',
          keyPoints: [
            'The boy who plays soccer is Ken. = サッカーをする男の子はケンです。（who = 人）',
            'The book which I read was interesting. = 私が読んだ本はおもしろかった。（which = もの）',
            'This is the cat that I found. = これは私が見つけた猫です。（that = 人でもものでもOK）',
          ],
        },
        {
          title: 'who / which / that の使い分け',
          content:
            'who は「人」だけ、which は「もの」だけに使えるよ。that は人にもものにも使える万能な関係代名詞。迷ったら that を使おう！',
          keyPoints: [
            'who → 人だけ: I have a friend who lives in America.',
            'which → ものだけ: The book which I read was interesting.',
            'that → 人でもものでもOK: The boy that plays soccer is Ken. / The book that I read was interesting.',
          ],
        },
        {
          title: '接触節との関係',
          content:
            '前回やった接触節は、that や which を省略した形だよ。The book that I read = The book I read のように、省略しても意味は同じだよ。',
          keyPoints: [
            'The book that I read = The book I read（that を省略 → 接触節）',
            '会話では省略するのがふつう',
            'ただし who は省略しないことが多いよ',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-rp-fc1',
        front: 'who',
        back: '「人」を説明する関係代名詞は？',
        hint: 'ふだん「誰？」と聞くときに使う言葉だよ',
        explanation: '人を説明するときは who を使うよ。',
      },
      {
        id: 'eng-rp-fc2',
        front: 'which',
        back: '「もの」を説明する関係代名詞は？',
        hint: 'ふだん「どれ？」と聞くときに使う言葉だよ',
        explanation: 'ものを説明するときは which を使うよ。',
      },
      {
        id: 'eng-rp-fc3',
        front: 'that',
        back: '人にもものにも使える関係代名詞は？',
        hint: '万能な関係代名詞だよ',
        explanation: 'that は人でもものでもOK。迷ったら that を使おう！',
      },
      {
        id: 'eng-rp-fc4',
        front: 'The boy who plays soccer is Ken.',
        back: '「サッカーをする男の子はケンです。」を英語にすると？',
        hint: '男の子は「人」だから who を使うよ',
        explanation: 'boy のうしろに who plays soccer をくっつけるよ。',
      },
      {
        id: 'eng-rp-fc5',
        front: 'The book which I read was interesting.',
        back: '「私が読んだ本はおもしろかった。」を英語にすると？',
        hint: '本は「もの」だから which を使うよ',
        explanation: 'book のうしろに which I read をくっつけるよ。',
      },
      {
        id: 'eng-rp-fc6',
        front: 'I have a friend who lives in America.',
        back: '「私にはアメリカに住んでいる友達がいます。」を英語にすると？',
        hint: '友達は「人」だから who を使うよ',
        explanation: 'friend のうしろに who lives in America をくっつけるよ。',
      },
      {
        id: 'eng-rp-fc7',
        front: 'This is the cat that I found.',
        back: '「これは私が見つけた猫です。」を英語にすると？',
        hint: '猫は「もの」扱い。which でも that でもOKだよ',
        explanation: 'cat のうしろに that I found をくっつけるよ。',
      },
      {
        id: 'eng-rp-fc8',
        front: 'who',
        back: 'I know a girl (　　) can speak French.\n（フランス語を話せる女の子を知っています。）\n(　　) に入るのは？',
        hint: 'girl は「人」だよ',
        explanation: '女の子は「人」だから who を使うよ。',
      },
      {
        id: 'eng-rp-fc9',
        front: 'which',
        back: 'This is the movie (　　) I watched yesterday.\n（これは私がきのう見た映画です。）\n(　　) に入るのは？',
        hint: 'movie は「もの」だよ',
        explanation: '映画は「もの」だから which を使うよ（that でもOK）。',
      },
      {
        id: 'eng-rp-fc10',
        front: 'The teacher who taught us English was kind.',
        back: '「私たちに英語を教えてくれた先生はやさしかった。」を英語にすると？',
        hint: '先生は「人」だから who を使うよ',
        explanation: 'teacher のうしろに who taught us English をくっつけるよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-rp-q1',
          question: '「サッカーをする男の子はケンです。」を英語にすると？',
          options: [
            'The boy which plays soccer is Ken.',
            'The boy who plays soccer is Ken.',
            'The boy what plays soccer is Ken.',
            'The boy whose plays soccer is Ken.',
          ],
          correctIndex: 1,
          explanation: '男の子は「人」だから who を使うよ。The boy who plays soccer is Ken. が正しいよ。',
        },
        {
          id: 'eng-rp-q2',
          question: '「私が読んだ本はおもしろかった。」を英語にすると？',
          options: [
            'The book who I read was interesting.',
            'The book what I read was interesting.',
            'The book which I read was interesting.',
            'The book whose I read was interesting.',
          ],
          correctIndex: 2,
          explanation: '本は「もの」だから which を使うよ。The book which I read was interesting. が正しいよ。',
        },
        {
          id: 'eng-rp-q3',
          question: '「I know a girl (　　) can speak French.（フランス語を話せる女の子を知っています。）」の (　　) に入るのは？',
          options: ['which', 'who', 'what', 'where'],
          correctIndex: 1,
          explanation: 'girl は「人」だから who を使うよ。',
        },
        {
          id: 'eng-rp-q4',
          question: '次のうち、that が使えない文はどれ？',
          options: [
            'The boy that plays soccer is Ken.',
            'The book that I read was interesting.',
            'I like the dog that runs fast.',
            'that は全部の文で使える',
          ],
          correctIndex: 3,
          explanation: 'that は人でもものでも使えるよ。全部の文で that が使えるんだ！',
        },
        {
          id: 'eng-rp-q5',
          question: '「これは私たちに英語を教えてくれた先生です。」を英語にすると？',
          options: [
            'This is the teacher which taught us English.',
            'This is the teacher who taught us English.',
            'This is the teacher what taught us English.',
            'This is the teacher whose taught us English.',
          ],
          correctIndex: 1,
          explanation: '先生は「人」だから who を使うよ。This is the teacher who taught us English. が正しいよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-rp-ex1',
          question: '2つの文を関係代名詞 who を使って1つにしよう。\n① The boy is Ken.\n② He plays soccer.',
          steps: [
            {
              title: 'Step 1: 共通する名詞を見つけよう',
              content: '①の The boy と②の He は同じ人を表しているね。',
              highlight: 'The boy / He',
            },
            {
              title: 'Step 2: He を who にかえよう',
              content: 'He plays soccer. の He を who にかえると、who plays soccer になるよ。',
              highlight: 'who plays soccer',
            },
            {
              title: 'Step 3: ①の名詞のうしろにくっつけよう',
              content: 'The boy のうしろに who plays soccer をくっつけると完成！',
              highlight: 'The boy who plays soccer is Ken.',
            },
          ],
          answer: 'The boy who plays soccer is Ken.\n（サッカーをする男の子はケンです。）',
        },
        {
          id: 'eng-rp-ex2',
          question: '2つの文を関係代名詞 which を使って1つにしよう。\n① The book was interesting.\n② I read it yesterday.',
          steps: [
            {
              title: 'Step 1: 共通する名詞を見つけよう',
              content: '①の The book と②の it は同じものを表しているね。',
              highlight: 'The book / it',
            },
            {
              title: 'Step 2: it を which にかえよう',
              content: 'I read it yesterday. の it を which にかえて文の先頭に置くと、which I read yesterday になるよ。',
              highlight: 'which I read yesterday',
            },
            {
              title: 'Step 3: ①の名詞のうしろにくっつけよう',
              content: 'The book のうしろに which I read yesterday をくっつけると完成！',
              highlight: 'The book which I read yesterday was interesting.',
            },
          ],
          answer: 'The book which I read yesterday was interesting.\n（私がきのう読んだ本はおもしろかったです。）',
        },
        {
          id: 'eng-rp-ex3',
          question: 'who / which / that のどれを使う？\n「英語を話す女の子を知っています。」',
          steps: [
            {
              title: 'Step 1: 説明する名詞は「人」？「もの」？',
              content: '「女の子」は人だね。人を説明するときは who か that を使うよ。',
              highlight: 'who / that',
            },
            {
              title: 'Step 2: 文を組み立てよう',
              content: '「女の子」= a girl、「英語を話す」= speaks English。girl のうしろに who speaks English をくっつけよう。',
              highlight: 'a girl who speaks English',
            },
            {
              title: 'Step 3: 完成！',
              content: '「知っています」= I know 〜。I know a girl who speaks English. だよ。that を使って I know a girl that speaks English. でもOK！',
              highlight: 'I know a girl who speaks English.',
            },
          ],
          answer: 'I know a girl who speaks English.\n（英語を話す女の子を知っています。）',
        },
      ],
    },
    chatId: 'eng-relative-pronouns',
  },
};

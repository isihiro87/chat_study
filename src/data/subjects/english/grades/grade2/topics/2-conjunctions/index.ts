import type { Topic } from '../../../../../../../data/types';

export const conjunctions: Topic = {
  id: 'eng-conjunctions',
  eraId: 'english-grade2',
  name: '接続詞',
  subtitle: 'when / if / because / that で文をつなげよう',
  icon: '🔗',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'when と because',
          content:
            '接続詞は2つの文をつなげることばだよ。when は「〜するとき」、because は「なぜなら〜」という意味。文の最初に置くときはカンマ（ , ）をつけるよ！',
          keyPoints: [
            'when =「〜するとき」: When I got home, I watched TV. = 家に帰ったとき、テレビを見ました。',
            'because =「なぜなら〜」: I was late because I missed the bus. = バスに乗り遅れたので、遅刻しました。',
            '文の最初に置くとき → カンマをつける。後ろに置くとき → カンマはいらない。',
          ],
        },
        {
          title: 'if と that',
          content:
            'if は「もし〜なら」という条件を表す接続詞。大事なポイントは、if の後ろでは未来のことでも will を使わないこと！ that は「〜ということ」で、think（思う）や know（知っている）の後ろで使うよ。',
          keyPoints: [
            'if =「もし〜なら」: If you are free, let\'s play soccer. = もし暇なら、サッカーをしよう。',
            'if の後ろでは will を使わない！ ✅ If it rains tomorrow... ❌ If it will rain tomorrow...',
            'that =「〜ということ」: I think that he is kind. = 彼がやさしいと思います。（that は省略OK）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-cj-fc1',
        front: 'when',
        back: '(　　) I got home, I watched TV.\n（家に帰ったとき、テレビを見ました。）',
        hint: '「〜するとき」を表す接続詞は？',
        explanation: 'when =「〜するとき」。文の最初にあるからカンマがつくよ。',
      },
      {
        id: 'eng-cj-fc2',
        front: 'because',
        back: 'I was late (　　) I missed the bus.\n（バスに乗り遅れたので、遅刻しました。）',
        hint: '「なぜなら〜」を表す接続詞は？',
        explanation: 'because =「なぜなら〜」。理由を表すよ。',
      },
      {
        id: 'eng-cj-fc3',
        front: 'if',
        back: '(　　) you are free, let\'s play soccer.\n（もし暇なら、サッカーをしよう。）',
        hint: '「もし〜なら」を表す接続詞は？',
        explanation: 'if =「もし〜なら」。条件を表す接続詞だよ。',
      },
      {
        id: 'eng-cj-fc4',
        front: 'that',
        back: 'I think (　　) he is kind.\n（私は彼がやさしいと思います。）',
        hint: '「〜ということ」を表す接続詞は？',
        explanation: 'that =「〜ということ」。think の後ろにつけて文をつなげるよ。',
      },
      {
        id: 'eng-cj-fc5',
        front: 'rains',
        back: 'If it (　　) tomorrow, I will stay home.\n（もし明日雨が降ったら、家にいます。）',
        hint: 'if の後ろでは will を使わないよ！',
        explanation: 'if の後ろでは未来のことでも現在の形を使うよ。will rain ではなく rains！',
      },
      {
        id: 'eng-cj-fc6',
        front: 'When',
        back: '(　　) I was a child, I lived in Tokyo.\n（子どものとき、東京に住んでいました。）',
        hint: '「〜のとき」を表す接続詞だよ',
        explanation: 'When =「〜のとき」。文の最初なのでカンマがつくよ。',
      },
      {
        id: 'eng-cj-fc7',
        front: 'because',
        back: 'I like summer (　　) I can swim.\n（泳げるので、夏が好きです。）',
        hint: '理由を表す接続詞は？',
        explanation: 'because =「なぜなら〜」。後ろに理由がくるよ。',
      },
      {
        id: 'eng-cj-fc8',
        front: 'that',
        back: 'I know (　　) she is a good singer.\n（彼女が歌が上手だと知っています。）',
        hint: 'know の後ろで「〜ということ」を表す接続詞は？',
        explanation: 'that =「〜ということ」。know の後ろで使うよ。省略もできるよ。',
      },
      {
        id: 'eng-cj-fc9',
        front: 'if',
        back: 'I will help you (　　) you need me.\n（もし必要なら、手伝うよ。）',
        hint: '「もし〜なら」を表す接続詞は？',
        explanation: 'if =「もし〜なら」。文の後ろにあるのでカンマはいらないよ。',
      },
      {
        id: 'eng-cj-fc10',
        front: 'hope',
        back: 'I (　　) that you will come.\n（あなたが来てくれるといいなと思います。）',
        hint: '「〜だといいなと思う」を英語で言うと？',
        explanation: 'hope =「〜を願う」。that の後ろに文をつなげるよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-cj-q1',
          question: '「(　　) I came home, my mother was cooking.（家に帰ったとき、母は料理をしていました。）」\nの (　　) に入るのは？',
          options: ['Because', 'If', 'When', 'That'],
          correctIndex: 2,
          explanation: '「〜のとき」を表す接続詞は when だよ。',
        },
        {
          id: 'eng-cj-q2',
          question: '「I stayed home (　　) it was raining.（雨が降っていたので、家にいました。）」\nの (　　) に入るのは？',
          options: ['when', 'if', 'that', 'because'],
          correctIndex: 3,
          explanation: '「雨が降っていたので」は理由。理由を表す接続詞は because だよ。',
        },
        {
          id: 'eng-cj-q3',
          question: '「If it (　　) tomorrow, we will cancel the picnic.（もし明日雨が降ったら、ピクニックは中止です。）」\nの (　　) に入るのは？',
          options: ['will rain', 'rains', 'rained', 'raining'],
          correctIndex: 1,
          explanation: 'if の後ろでは未来のことでも will を使わず、現在の形を使うよ。だから rains！',
        },
        {
          id: 'eng-cj-q4',
          question: '「I think (　　) English is fun.（英語は楽しいと思います。）」\nの (　　) に入るのは？',
          options: ['when', 'because', 'if', 'that'],
          correctIndex: 3,
          explanation: 'think の後ろで「〜ということ」を表す接続詞は that だよ。',
        },
        {
          id: 'eng-cj-q5',
          question: '次のうち、正しい英文はどれ？',
          options: [
            'If it will snow tomorrow, I will stay home.',
            'If it snows tomorrow, I will stay home.',
            'If it snowed tomorrow, I will stay home.',
            'If it is snowing tomorrow, I will stay home.',
          ],
          correctIndex: 1,
          explanation: 'if の後ろでは未来のことでも現在の形を使うよ。will snow ではなく snows が正しいね。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-cj-ex1',
          question: '次の2つの文を when でつなげよう。\n① I got up.（起きた。）\n② It was still dark.（まだ暗かった。）',
          steps: [
            {
              title: 'Step 1: どちらが「〜するとき」にあたるか考えよう',
              content: '「起きたとき、まだ暗かった」だから、①「起きた」が when の後ろにくるね。',
              highlight: 'When I got up',
            },
            {
              title: 'Step 2: when を文の最初に置いてみよう',
              content: 'when + ① の文にカンマをつけて、② の文を続けるよ。',
              highlight: 'When I got up,',
            },
            {
              title: 'Step 3: 完成！',
              content: 'When I got up, it was still dark.  後ろに置く形も OK だよ: It was still dark when I got up.',
              highlight: 'When I got up, it was still dark.',
            },
          ],
          answer: 'When I got up, it was still dark.\n（起きたとき、まだ暗かったです。）',
        },
        {
          id: 'eng-cj-ex2',
          question: '次の日本語を英語にしよう。\n「もし明日晴れたら、サッカーをしよう。」',
          steps: [
            {
              title: 'Step 1: 「もし〜なら」は if',
              content: '「もし明日晴れたら」→ If it is sunny tomorrow と書くよ。if の後ろでは will は使わないから注意！',
              highlight: 'If it is sunny tomorrow',
            },
            {
              title: 'Step 2: 「サッカーをしよう」を英語にしよう',
              content: '「〜しよう」は let\'s を使うよ。let\'s play soccer だね。',
              highlight: "let's play soccer",
            },
            {
              title: 'Step 3: if が最初だからカンマをつけよう',
              content: 'if の文が最初にくるときはカンマをつけるんだったね！',
              highlight: "If it is sunny tomorrow, let's play soccer.",
            },
          ],
          answer: "If it is sunny tomorrow, let's play soccer.\n（もし明日晴れたら、サッカーをしよう。）",
        },
        {
          id: 'eng-cj-ex3',
          question: '次の日本語を英語にしよう。\n「私は彼女がやさしいと思います。」',
          steps: [
            {
              title: 'Step 1: 「私は〜と思います」を書こう',
              content: '「〜と思う」は I think that... だよ。think の後ろに that をつけるよ。',
              highlight: 'I think that',
            },
            {
              title: 'Step 2: 「彼女がやさしい」を英語にしよう',
              content: '「彼女はやさしい」→ she is kind だね。',
              highlight: 'she is kind',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'I think that + she is kind で完成！ that は省略してもOKだよ。',
              highlight: 'I think that she is kind.',
            },
          ],
          answer: 'I think that she is kind.\n（私は彼女がやさしいと思います。）',
        },
      ],
    },
    chatId: 'eng-conjunctions',
  },
};

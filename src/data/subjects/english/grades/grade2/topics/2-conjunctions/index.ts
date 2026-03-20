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
          title: 'when「〜するとき」',
          content:
            'when は「〜するとき」「〜したとき」を表す接続詞。when の文を最初に置くときはカンマ（,）をつけるよ。後ろに置くときはカンマはいらないよ！',
          keyPoints: [
            'When I got home, I watched TV. = 家に帰ったとき、テレビを見ました。（カンマあり）',
            'I watched TV when I got home. = 家に帰ったとき、テレビを見ました。（カンマなし）',
            'When I was a child, I lived in Tokyo. = 子どものとき、東京に住んでいました。',
          ],
        },
        {
          title: 'if「もし〜なら」★ if の後ろでは will を使わない！',
          content:
            'if は「もし〜なら」という条件を表すよ。大事なポイントは、if の後ろでは未来のことでも will を使わず現在形にすること！ これはテストでよく出るよ。',
          keyPoints: [
            'If you are free, let\'s play soccer. = もし暇なら、サッカーをしよう。',
            '✅ If it rains tomorrow, I will stay home.（if の後ろは rains＝現在形）',
            '❌ If it will rain tomorrow...（if の後ろに will は使えない！）',
          ],
        },
        {
          title: 'because「〜なので」',
          content:
            'because は「なぜなら〜」「〜なので」と理由を表す接続詞。Why...? の質問に because で答えるよ。文の最初に置くときはカンマをつけるよ。',
          keyPoints: [
            'I like summer because I can swim. = 泳げるので、夏が好きです。',
            'Because it was raining, I stayed home. = 雨が降っていたので、家にいました。（文頭→カンマ）',
            '⚠️ because と so は同時に使えない！ ❌ Because it rained, so I stayed home.',
          ],
        },
        {
          title: 'that「〜ということ」と I don\'t think that...',
          content:
            'that は think（思う）/ know（知っている）/ hope（望む）/ believe（信じる）の後ろで「〜ということ」を表すよ。that は省略できるよ。否定するときは I don\'t think that... の形が自然！',
          keyPoints: [
            'I think (that) he is kind. = 彼がやさしいと思います。（that は省略OK）',
            'I know (that) she can speak English. = 彼女が英語を話せると知っています。',
            'I don\'t think (that) it is easy. = 簡単だとは思いません。（think を否定する）',
          ],
        },
        {
          title: 'カンマのルール まとめ',
          content:
            '接続詞（when / if / because）が文の最初にくるときはカンマをつける。文の後ろにくるときはカンマはいらないよ。that にはカンマのルールはないよ。',
          keyPoints: [
            '文頭 → カンマあり: When I got home, I watched TV.',
            '文中 → カンマなし: I watched TV when I got home.',
            'that → カンマなし（常に文中で使う）: I think that he is kind.',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // === when（basic）===
      {
        id: 'eng-cj-fc1',
        front: 'When',
        back: '(　　) I got home, I watched TV.\n（家に帰ったとき、テレビを見ました。）',
        hint: '「〜するとき」を表す接続詞は？',
        explanation: 'when =「〜するとき」。文の最初にあるからカンマがつくよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-cj-fc2',
        front: 'when',
        back: 'I was watching TV (　　) my mother came home.\n（母が帰ってきたとき、テレビを見ていました。）',
        hint: '「〜したとき」を表す接続詞は？',
        explanation: 'when =「〜したとき」。文の後ろにあるからカンマはいらないよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-cj-fc3',
        front: 'When',
        back: '(　　) I was a child, I lived in Tokyo.\n（子どものとき、東京に住んでいました。）',
        hint: '「〜のとき」を表す接続詞だよ',
        explanation: 'When I was a child で「子どものとき」。過去の話にも使えるよ。',
        difficulty: 'basic',
      },
      // === if（basic）===
      {
        id: 'eng-cj-fc4',
        front: 'If',
        back: '(　　) you are free, let\'s play soccer.\n（もし暇なら、サッカーをしよう。）',
        hint: '「もし〜なら」を表す接続詞は？',
        explanation: 'if =「もし〜なら」。条件を表す接続詞だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-cj-fc5',
        front: 'rains',
        back: 'If it (　　) tomorrow, I will stay home.\n（もし明日雨が降ったら、家にいます。）',
        hint: 'if の後ろでは will を使わないよ！ 現在形で…',
        explanation: 'if の後ろでは未来のことでも現在形を使う。will rain ではなく rains！',
        difficulty: 'basic',
      },
      // === because（basic）===
      {
        id: 'eng-cj-fc6',
        front: 'because',
        back: 'I was late (　　) I missed the bus.\n（バスに乗り遅れたので、遅刻しました。）',
        hint: '「なぜなら〜」を表す接続詞は？',
        explanation: 'because =「なぜなら〜」。理由を表すよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-cj-fc7',
        front: 'because',
        back: 'I like summer (　　) I can swim.\n（泳げるので、夏が好きです。）',
        hint: '理由を表す接続詞は？',
        explanation: 'because =「〜なので」。理由を後ろに続けるよ。',
        difficulty: 'basic',
      },
      // === that（basic）===
      {
        id: 'eng-cj-fc8',
        front: 'that',
        back: 'I think (　　) he is kind.\n（私は彼がやさしいと思います。）',
        hint: '「〜ということ」を表す接続詞は？',
        explanation: 'that =「〜ということ」。think の後ろにつけて文をつなげるよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-cj-fc9',
        front: 'that',
        back: 'I know (　　) she is a good singer.\n（彼女が歌が上手だと知っています。）',
        hint: 'know の後ろで「〜ということ」を表す接続詞は？',
        explanation: 'that =「〜ということ」。know の後ろでも使うよ。省略もできるよ。',
        difficulty: 'basic',
      },
      // === when / if（standard）===
      {
        id: 'eng-cj-fc10',
        front: 'When',
        back: '(　　) she is happy, she often sings.\n（彼女はうれしいとき、よく歌います。）',
        hint: '「〜するとき」を表す接続詞は？',
        explanation: 'When =「〜するとき」。現在の習慣にも使えるよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-cj-fc11',
        front: 'if',
        back: 'I will help you (　　) you need me.\n（もし必要なら、手伝うよ。）',
        hint: '「もし〜なら」を表す接続詞は？ 文の後ろにあるよ',
        explanation: 'if =「もし〜なら」。文の後ろにあるのでカンマはいらないよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-cj-fc12',
        front: 'is',
        back: 'If it (　　) sunny tomorrow, we will go hiking.\n（もし明日晴れたら、ハイキングに行きます。）',
        hint: 'if の後ろでは will を使わないよ！ 現在形で…',
        explanation: 'if の後ろでは未来のことでも現在形。will be ではなく is を使うよ。',
        difficulty: 'standard',
      },
      // === because（standard）===
      {
        id: 'eng-cj-fc13',
        front: 'because',
        back: 'She was happy (　　) she got a good grade.\n（良い成績をとったので、彼女はうれしかった。）',
        hint: '理由を表す接続詞は？',
        explanation: 'because =「〜なので」。理由を表すよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-cj-fc14',
        front: 'because',
        back: 'I like this ramen (　　) the soup is thick.\n（スープが濃いので、このラーメンが好きです。）',
        hint: '理由を表す接続詞は？',
        explanation: 'because =「〜なので」。食べ物の好みの理由を説明しているよ。',
        difficulty: 'standard',
      },
      // === that（standard）===
      {
        id: 'eng-cj-fc15',
        front: 'that',
        back: 'I hope (　　) you will come.\n（あなたが来てくれるといいなと思います。）',
        hint: '「〜ということ」を表す接続詞は？ hope の後ろで使うよ',
        explanation: 'hope + that で「〜だといいなと思う」。that は省略もOK。',
        difficulty: 'standard',
      },
      {
        id: 'eng-cj-fc16',
        front: 'believe',
        back: 'I (　　) that she can be a pilot.\n（私は彼女がパイロットになれると信じています。）',
        hint: '「信じる」を英語で？',
        explanation: 'believe + that で「〜だと信じる」。think/know/hope/believe と that がセット。',
        difficulty: 'standard',
      },
      // === I don't think that（standard）===
      {
        id: 'eng-cj-fc17',
        front: "I don't think",
        back: '(　　)(　　)(　　) that the movie is interesting.\n（私はその映画がおもしろいとは思いません。）',
        hint: '英語では think を否定する方が自然だよ',
        explanation: "英語では I don't think that... の形で否定する方が自然だよ。",
        difficulty: 'standard',
      },
      // === カンマルール（standard）===
      {
        id: 'eng-cj-fc18',
        front: 'カンマあり',
        back: 'When I got home, I watched TV.\n接続詞が文頭にあるとき、カンマは必要？不要？',
        hint: '文の最初に接続詞を置くときは…',
        explanation: '接続詞が文頭にくるときはカンマをつけるよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-cj-fc19',
        front: 'カンマなし',
        back: 'I watched TV when I got home.\n接続詞が文中にあるとき、カンマは必要？不要？',
        hint: '接続詞が文の後ろにあるときは…',
        explanation: '接続詞が文中（後ろ）にくるときはカンマは不要だよ。',
        difficulty: 'standard',
      },
      // === advanced ===
      {
        id: 'eng-cj-fc20',
        front: 'when',
        back: 'Mr. White came to Japan (　　) he was twenty.\n（ホワイト先生は20歳のとき日本に来ました。）',
        hint: '「〜のとき」を表す接続詞は？',
        explanation: 'when =「〜のとき」。過去の出来事を説明しているよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-cj-fc21',
        front: 'because',
        back: 'She didn\'t go to school (　　) she had a cold.\n（彼女は風邪をひいたので、学校を休みました。）',
        hint: '理由を表す接続詞は？',
        explanation: 'because =「〜なので」。欠席の理由を説明しているよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-cj-fc22',
        front: "I don't think that he is right.",
        back: '「私は彼が正しいとは思いません。」を英語で？',
        hint: '英語では think を否定する形が自然',
        explanation: "I don't think that... で「〜とは思わない」。thinkを否定するのが英語的！",
        difficulty: 'advanced',
      },
      {
        id: 'eng-cj-fc23',
        front: 'if',
        back: 'You can come (　　) you have time.\n（もし時間があれば、あなたは来ることができます。）',
        hint: '「もし〜なら」を表す接続詞は？',
        explanation: 'if =「もし〜なら」。文の後ろにあるのでカンマはいらないよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-cj-fc24',
        front: 'because と so は同時に使えない',
        back: '❌ Because it rained, so I stayed home.\nこの文のまちがいは？',
        hint: '理由の接続詞が2つ重なっている…',
        explanation: 'because と so は同じ意味（理由）なので同時に使えない。どちらか1つだけ！',
        difficulty: 'advanced',
      },
      {
        id: 'eng-cj-fc25',
        front: 'that',
        back: 'I believe (　　) he is honest.\n（私は彼が正直だと信じています。）',
        hint: 'believe の後ろで「〜ということ」を表す接続詞は？',
        explanation: 'believe + that で「〜だと信じる」。that は省略もOK。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-cj-fc26',
        front: 'When I go to a ramen restaurant, I order miso ramen.',
        back: '「私がラーメン店に行くとき、味噌ラーメンを\n注文します。」を英語にすると？',
        hint: '「〜するとき」= when。文頭だからカンマをつけるよ',
        explanation: 'when で習慣的な行動を表すこともできるよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-cj-fc27',
        front: 'I stayed home because it was raining.',
        back: '「雨が降っていたので、家にいました。」\nを英語にすると？',
        hint: '理由 = because。文の後ろにあるからカンマはいらないよ',
        explanation: 'because + 理由の文。文中の because にはカンマは不要だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-cj-fc28',
        front: "I don't think (that) the story is true.",
        back: '「私はその話は本当だとは思いません。」\nを英語にすると？',
        hint: '英語では think を否定する形が自然だよ',
        explanation: "I don't think that... で「〜とは思わない」。think を否定するのが英語的だよ。",
        difficulty: 'standard',
      },
      {
        id: 'eng-cj-fc29',
        front: 'I bought a rice ball because I was hungry.',
        back: '「お腹がすいたので、おにぎりを買いました。」\nを英語にすると？',
        hint: '理由 = because。「おにぎり」= rice ball',
        explanation: 'because I was hungry で「お腹がすいたので」だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-cj-fc30',
        front: 'I think (that) she will like the present.',
        back: '「彼女はそのプレゼントを気に入るでしょう、\nと私は思います。」を英語にすると？',
        hint: 'think + that + 文。that の後ろには主語+動詞の文がくるよ',
        explanation: 'that の後ろに she will like the present という文が続くよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-cj-fc31',
        front: 'If you like cats, let\'s go to a neko cafe.',
        back: '「もしあなたがネコが好きなら、猫カフェに\n行きましょう。」を英語にすると？',
        hint: '「もし〜なら」= if。文頭だからカンマをつけるよ',
        explanation: 'if + 条件 で「もし〜なら」。文頭の if にはカンマをつけるよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-cj-fc32',
        front: 'I went to bed early because I was tired.',
        back: '「疲れていたので、早く寝ました。」\nを英語にすると？',
        hint: '理由 = because。「早く寝る」= go to bed early',
        explanation: 'because I was tired で「疲れていたので」だよ。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        // === 接続詞の選択（choice / basic）===
        {
          id: 'eng-cj-q1',
          question:
            '「(　　) I came home, my mother was cooking.」\nの (　　) に入るのは？',
          options: ['Because', 'When', 'If', 'That'],
          correctIndex: 1,
          explanation: '「家に帰ったとき」→「〜のとき」= when だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-cj-q2',
          question:
            '「I stayed home (　　) it was raining.」\nの (　　) に入るのは？',
          options: ['when', 'if', 'because', 'that'],
          correctIndex: 2,
          explanation: '「雨が降っていたので」→ 理由 = because だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-cj-q3',
          question:
            '「(　　) you are free, let\'s play tennis.」\nの (　　) に入るのは？',
          options: ['When', 'Because', 'That', 'If'],
          correctIndex: 3,
          explanation: '「もし暇なら」→ 条件 = if だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-cj-q4',
          question:
            '「I think (　　) English is fun.」\nの (　　) に入るのは？',
          options: ['that', 'because', 'if', 'when'],
          correctIndex: 0,
          explanation: 'think の後ろで「〜ということ」= that だよ。',
          difficulty: 'basic',
        },
        // === if + will ルール（choice / basic）===
        {
          id: 'eng-cj-q5',
          question:
            '「If it (　　) tomorrow, we will cancel the picnic.」\nの (　　) に入るのは？',
          options: ['will rain', 'raining', 'rained', 'rains'],
          correctIndex: 3,
          explanation:
            'if の後ろでは未来のことでも will を使わず現在形。だから rains！',
          difficulty: 'basic',
        },
        {
          id: 'eng-cj-q6',
          question: '次のうち、正しい英文はどれ？',
          options: [
            'If it snows tomorrow, I will stay home.',
            'If it will snow tomorrow, I will stay home.',
            'If it snowed tomorrow, I will stay home.',
            'If it is snowing tomorrow, I will stay home.',
          ],
          correctIndex: 0,
          explanation:
            'if の後ろでは未来のことでも現在形。snows が正しいよ。',
          difficulty: 'standard',
        },
        // === that / I don't think（choice / standard）===
        {
          id: 'eng-cj-q7',
          question:
            '「私はその映画がおもしろいとは思いません。」を英語で表すとき、最も自然なのは？',
          options: [
            'I think that the movie is not interesting.',
            "I don't think that the movie is interesting.",
            'I not think that the movie is interesting.',
            "I think that the movie isn't interesting.",
          ],
          correctIndex: 1,
          explanation:
            "英語では I don't think that... の形で否定するのが自然だよ。",
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q8',
          question:
            '「I hope (　　) you will come to our concert.」\nの (　　) に入るのは？',
          options: ['when', 'if', 'because', 'that'],
          correctIndex: 3,
          explanation:
            'hope の後ろで「〜ということ」= that。「来てくれるといいなと思う」だよ。',
          difficulty: 'standard',
        },
        // === カンマルール（choice / standard）===
        {
          id: 'eng-cj-q9',
          question: '次のうち、カンマの使い方が正しい文はどれ？',
          options: [
            'When I got home I watched TV.',
            'When I got home, I watched TV.',
            'I watched TV, when I got home.',
            'I watched, TV when I got home.',
          ],
          correctIndex: 1,
          explanation:
            '接続詞が文頭のときはカンマをつける。文中のときはカンマ不要だよ。',
          difficulty: 'standard',
        },
        // === 誤文訂正（choice / standard）===
        {
          id: 'eng-cj-q10',
          question:
            '次の英文のまちがいはどれ？\n「Because it rained, so I stayed home.」',
          options: [
            'Because を When にすべき',
            'rained を rains にすべき',
            'so を削除すべき',
            'home を house にすべき',
          ],
          correctIndex: 2,
          explanation:
            'because と so は同時に使えない。どちらか1つだけ！',
          difficulty: 'standard',
        },
        // === 対話文（choice / advanced）===
        {
          id: 'eng-cj-q11',
          question:
            '「I (　　) that Japanese culture is great.」\nの (　　) に入るのは？',
          options: ['think', 'because', 'when', 'if'],
          correctIndex: 0,
          explanation:
            'that の前に置く動詞は think/know/hope/believe。ここは「〜と思う」= think。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-cj-q12',
          question:
            '「She was happy (　　) she got a good grade.」と「(　　) she got a good grade, she was happy.」\n両方に共通で入る接続詞は？',
          options: ['when', 'if', 'because', 'that'],
          correctIndex: 2,
          explanation:
            '「良い成績をとったので」= because。文頭でも文中でも使えるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-cj-q13',
          question:
            '次の文のまちがいを正すと？\n「If it will be sunny tomorrow, we will go to the beach.」',
          options: [
            'will be → is',
            'will go → go',
            'sunny → sun',
            'tomorrow → today',
          ],
          correctIndex: 0,
          explanation:
            'if の後ろでは will を使わない。will be → is に直すよ。',
          difficulty: 'advanced',
        },
        // === reorder questions ===
        {
          id: 'eng-cj-q14',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私は暇なとき、よくマンガを読みます。」という英文を作ろう。',
          words: ['I', 'when', 'free', 'am', 'I'],
          correctOrder: [1, 0, 3, 2, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「When I am free, I often read manga.」が正解。when + 主語 + 動詞 の順番だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-cj-q15',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「もし明日晴れたら、サッカーをしよう。」という英文を作ろう。\nIf it (　　)(　　)(　　), let\'s play soccer.',
          words: ['sunny', 'is', 'tomorrow'],
          correctOrder: [1, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「If it is sunny tomorrow」が正解。if の後ろは will を使わず現在形だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-cj-q16',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私はそのニュースを聞いたときうれしかった。」という英文を完成させよう。\nI was happy (　　)(　　)(　　) the news.',
          words: ['heard', 'when', 'I'],
          correctOrder: [1, 2, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「when I heard」が正解。when + 主語 + 動詞 の順番だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q17',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私は彼がやさしいと思います。」という英文を完成させよう。\nI think (　　)(　　)(　　)(　　).',
          words: ['is', 'he', 'kind', 'that'],
          correctOrder: [3, 1, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「that he is kind」が正解。that + 主語 + 動詞 + 補語 の順番だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q18',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私はこのカレーが好きです。なぜならとてもおいしいからです。」という英文を作ろう。',
          words: ['this curry', 'I', 'it', 'like', 'because', 'is', 'delicious'],
          correctOrder: [1, 3, 0, 4, 2, 5, 6],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I like this curry because it is delicious.」が正解。because の前にカンマはいらないよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q19',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私は彼女がいそがしいと知っています。」という英文を完成させよう。\nI know (　　)(　　)(　　)(　　).',
          words: ['is', 'that', 'she', 'busy'],
          correctOrder: [1, 2, 0, 3],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「that she is busy」が正解。that + 主語 + 動詞 + 形容詞 の順番だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q20',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「もし日本食に興味があるなら、この店に行ってみてください。」という英文を作ろう。\n(　　)(　　)(　　)(　　)(　　)(　　), please try this restaurant.',
          words: ['Japanese food', 'you', 'if', 'are', 'in', 'interested'],
          correctOrder: [2, 1, 3, 5, 4, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「If you are interested in Japanese food」が正解。be interested in で「〜に興味がある」だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-cj-q21',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「宿題がたくさんあったので、遊べませんでした。」という英文を作ろう。',
          words: ['play', "couldn't", 'I', 'because', 'I', 'had', 'a lot of homework'],
          correctOrder: [2, 1, 0, 3, 4, 5, 6],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            "「I couldn't play because I had a lot of homework.」が正解。理由を because で後ろにつなげるよ。",
          difficulty: 'advanced',
        },
        {
          id: 'eng-cj-q22',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私は東京はわくわくする街だと思います。」という英文を作ろう。',
          words: ['that', 'I', 'think', 'is', 'Tokyo', 'an exciting city'],
          correctOrder: [1, 2, 0, 4, 3, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I think that Tokyo is an exciting city.」が正解。think + that + 文 の形だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-cj-q23',
          question:
            '「She was washing the dishes (　　) I saw her.」\nの (　　) に入るのは？',
          options: ['because', 'if', 'when', 'that'],
          correctIndex: 2,
          explanation: '「私が彼女を見たとき」→「〜したとき」= when だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-cj-q24',
          question:
            '「I (　　) that Katy can read kanji.」\nの (　　) に入るのは？',
          options: ['because', 'when', 'if', 'think'],
          correctIndex: 3,
          explanation: 'that の前に置く動詞は think/know/hope/believe。ここは「〜と思う」= think だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q25',
          question:
            '「(　　) you finish your homework, you can play games.」\nの (　　) に入るのは？',
          options: ['When', 'Because', 'If', 'That'],
          correctIndex: 2,
          explanation: '「もし宿題を終えたら」→ 条件 = if だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q26',
          question:
            '「He studied hard (　　) he wanted to pass the test.」\nの (　　) に入るのは？',
          options: ['when', 'because', 'if', 'that'],
          correctIndex: 1,
          explanation: '「テストに受かりたかったので」→ 理由 = because だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q27',
          question:
            '「私はその話は本当だとは思いません。」を英語にすると、最も自然なのは？',
          options: [
            'I think that the story is not true.',
            "I don't think that the story is true.",
            'I not think that the story is true.',
            "I think not that the story is true.",
          ],
          correctIndex: 1,
          explanation:
            "英語では I don't think that... の形で否定するのが自然だよ。",
          difficulty: 'advanced',
        },
        {
          id: 'eng-cj-q28',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「雨が降っていたので、家にいました。」という英文を作ろう。',
          words: ['stayed', 'I', 'it', 'because', 'home', 'was', 'raining'],
          correctOrder: [1, 0, 4, 3, 2, 5, 6],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I stayed home because it was raining.」が正解。because の前にカンマはいらないよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-cj-q29',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「子どものとき、私は東京に住んでいました。」という英文を作ろう。\nWhen (　　)(　　)(　　)(　　), I lived in Tokyo.',
          words: ['a', 'was', 'I', 'child'],
          correctOrder: [2, 1, 0, 3],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「When I was a child」が正解。when + 主語 + 動詞 + 補語 の順番だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-cj-q30',
          question:
            '「I hope (　　) we can meet again.」\nの (　　) に入るのは？',
          options: ['when', 'if', 'because', 'that'],
          correctIndex: 3,
          explanation:
            'hope の後ろで「〜ということ」= that。「また会えるといいな」だよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-cj-ex1',
          question:
            '次の2つの文を when でつなげよう。\n① I got up.（起きた。）\n② It was still dark.（まだ暗かった。）',
          steps: [
            {
              title: 'Step 1: どちらが「〜するとき」にあたるか考えよう',
              content:
                '「起きたとき、まだ暗かった」だから、①「起きた」が when の後ろにくるね。',
              highlight: 'When I got up',
            },
            {
              title: 'Step 2: when を文の最初に置いてカンマをつけよう',
              content:
                'when + ① の文にカンマをつけて、② の文を続けるよ。',
              highlight: 'When I got up,',
            },
            {
              title: 'Step 3: 完成！',
              content:
                'When I got up, it was still dark. 後ろに置く形もOK: It was still dark when I got up.',
              highlight: 'When I got up, it was still dark.',
            },
          ],
          answer:
            'When I got up, it was still dark.\n（起きたとき、まだ暗かったです。）',
        },
        {
          id: 'eng-cj-ex2',
          question:
            '次の日本語を英語にしよう。\n「もし明日晴れたら、サッカーをしよう。」',
          steps: [
            {
              title: 'Step 1: 「もし〜なら」は if',
              content:
                '「もし明日晴れたら」→ If it is sunny tomorrow。★if の後ろでは will は使わない！',
              highlight: 'If it is sunny tomorrow',
            },
            {
              title: 'Step 2: 「サッカーをしよう」を英語にしよう',
              content: "「〜しよう」は let's。let's play soccer だね。",
              highlight: "let's play soccer",
            },
            {
              title: 'Step 3: if が最初だからカンマをつけよう',
              content: 'if の文が最初にくるときはカンマをつけるよ！',
              highlight: "If it is sunny tomorrow, let's play soccer.",
            },
          ],
          answer:
            "If it is sunny tomorrow, let's play soccer.\n（もし明日晴れたら、サッカーをしよう。）",
        },
        {
          id: 'eng-cj-ex3',
          question:
            '次の日本語を英語にしよう。\n「スープが濃いので、私は札幌ラーメンが好きです。」',
          steps: [
            {
              title: 'Step 1: メインの文を書こう',
              content:
                '「私は札幌ラーメンが好きです」→ I like Sapporo ramen だね。',
              highlight: 'I like Sapporo ramen',
            },
            {
              title: 'Step 2: 理由を because でつなげよう',
              content:
                '「スープが濃いので」は理由。because the soup is thick だよ。',
              highlight: 'because the soup is thick',
            },
            {
              title: 'Step 3: 完成！',
              content:
                '文の後ろに because をつけるときはカンマは不要だよ。',
              highlight:
                'I like Sapporo ramen because the soup is thick.',
            },
          ],
          answer:
            'I like Sapporo ramen because the soup is thick.\n（スープが濃いので、私は札幌ラーメンが好きです。）',
        },
        {
          id: 'eng-cj-ex4',
          question:
            '次の日本語を英語にしよう。\n「私は彼女がやさしいと思います。」',
          steps: [
            {
              title: 'Step 1: 「私は〜と思います」を書こう',
              content:
                '「〜と思う」は I think that... だよ。think の後ろに that をつけるよ。',
              highlight: 'I think that',
            },
            {
              title: 'Step 2: 「彼女がやさしい」を英語にしよう',
              content: '「彼女はやさしい」→ she is kind だね。',
              highlight: 'she is kind',
            },
            {
              title: 'Step 3: つなげて完成！',
              content:
                'I think that + she is kind で完成！ that は省略してもOKだよ。',
              highlight: 'I think that she is kind.',
            },
          ],
          answer:
            'I think that she is kind.\n（私は彼女がやさしいと思います。）',
        },
        {
          id: 'eng-cj-ex5',
          question:
            '次の日本語を英語にしよう。\n「私はその話は本当だとは思いません。」',
          steps: [
            {
              title: "Step 1: 否定は I don't think that...",
              content:
                "英語では「〜とは思わない」は I don't think that... の形が自然だよ。",
              highlight: "I don't think that",
            },
            {
              title: 'Step 2: 「その話は本当だ」を英語にしよう',
              content: 'the story is true だね。',
              highlight: 'the story is true',
            },
            {
              title: 'Step 3: 完成！',
              content:
                "I don't think that the story is true. ※ I think that the story is not true. でも間違いではないが、英語では前者がより自然。",
              highlight: "I don't think that the story is true.",
            },
          ],
          answer:
            "I don't think that the story is true.\n（私はその話は本当だとは思いません。）",
        },
      ],
    },
    chatId: 'eng-conjunctions',
  },
};

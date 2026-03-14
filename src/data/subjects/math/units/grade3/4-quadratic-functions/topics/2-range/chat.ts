import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const quadFuncRangeChat: HistoryChat = {
  id: 'math-g3-quad-func-range',
  icon: '↕️',
  title: '値の変化と変域をマスターしよう',
  subtitle: '〜中3数学〜 x=0をまたぐときに注意',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👩‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        encouraging: '💪',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵‍💫',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: 'y = ax² の<ruby>値<rt>あたい</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>では x が<ruby>増<rt>ふ</rt></ruby>えれば y も<ruby>一定<rt>いってい</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>で<ruby>変化<rt>へんか</rt></ruby>したけど、y = ax² ではそうはいかないよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'y = x² で x の<ruby>値<rt>あたい</rt></ruby>を -3 から 3 まで<ruby>変<rt>か</rt></ruby>えてみよう。y の<ruby>値<rt>あたい</rt></ruby>はどう<ruby>変<rt>か</rt></ruby>わるかな？',
    },
    {
      type: 'whiteboard',
      title: 'y = x² の<ruby>値<rt>あたい</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>',
      steps: [
        {
          formula: '$x$: $-3$ → $-2$ → $-1$ → $0$ → $1$ → $2$ → $3$',
        },
        {
          formula: '$y$:  $9$ →  $4$ →  $1$ → $0$ → $1$ → $4$ → $9$',
          annotation: '$x < 0$ では $y$ は<ruby>減少<rt>げんしょう</rt></ruby>、$x > 0$ では $y$ は<ruby>増加<rt>ぞうか</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'x = 0 のところで y が<ruby>折<rt>お</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>してる！<ruby>減<rt>へ</rt></ruby>ってから<ruby>増<rt>ふ</rt></ruby>えてますね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いいところに<ruby>気<rt>き</rt></ruby>づいた！a > 0 のとき x = 0 で y は<strong><ruby>最小値<rt>さいしょうち</rt></ruby> 0</strong> をとるんだ。a < 0 なら<ruby>逆<rt>ぎゃく</rt></ruby>に<ruby>最大値<rt>さいだいち</rt></ruby> 0 になるよ。',
    },
    {
      type: 'summary-point',
      text: 'a > 0: x = 0 で<ruby>最小値<rt>さいしょうち</rt></ruby>。a < 0: x = 0 で<ruby>最大値<rt>さいだいち</rt></ruby>。',
    },
    {
      type: 'date',
      text: '<ruby>変域<rt>へんいき</rt></ruby>の<ruby>求<rt>もと</rt></ruby>め<ruby>方<rt>かた</rt></ruby>（x = 0 の<ruby>罠<rt>わな</rt></ruby>）',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'ここからが<ruby>本番<rt>ほんばん</rt></ruby>！ y = x² で <strong>-2 ≤ x ≤ 3</strong> のとき、y の<ruby>変域<rt>へんいき</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めよう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'x = -2 のとき y = 4、x = 3 のとき y = 9 だから… 4 ≤ y ≤ 9 ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>残念<rt>ざんねん</rt></ruby>、それが<ruby>一番<rt>いちばん</rt></ruby><ruby>多<rt>おお</rt></ruby>い<ruby>間違<rt>まちが</rt></ruby>い！ x の<ruby>変域<rt>へんいき</rt></ruby>に <strong>x = 0 が<ruby>含<rt>ふく</rt></ruby>まれている</strong>ことに<ruby>注目<rt>ちゅうもく</rt></ruby>しよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>変域<rt>へんいき</rt></ruby>の<ruby>正<rt>ただ</rt></ruby>しい<ruby>求<rt>もと</rt></ruby>め<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$-2 \\leq x \\leq 3$ → $x = 0$ を<ruby>含<rt>ふく</rt></ruby>む！',
          annotation: 'まず $x = 0$ が<ruby>変域<rt>へんいき</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っているか<ruby>確認<rt>かくにん</rt></ruby>',
        },
        {
          formula: '$x = 0$ のとき $y = 0$（<ruby>最小値<rt>さいしょうち</rt></ruby>）',
          animateInsert: true,
          annotation: '$a > 0$ だから $x = 0$ で $y$ は<ruby>最小<rt>さいしょう</rt></ruby>',
        },
        {
          formula: '$x = -2$ → $y = 4$、$x = 3$ → $y = 9$',
          annotation: '<ruby>端<rt>はし</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を<ruby>比<rt>くら</rt></ruby>べる → $|3| > |-2|$ だから $y = 9$ が<ruby>最大<rt>さいだい</rt></ruby>',
        },
        {
          formula: '$0 \\leq y \\leq 9$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>正解<rt>せいかい</rt></ruby>！ $4 \\leq y \\leq 9$ ではない！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'うわ、<ruby>端<rt>はし</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>だけ<ruby>見<rt>み</rt></ruby>てたらダメなんですね…！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！<strong>x = 0 をまたぐかどうか</strong>を<ruby>必<rt>かなら</rt></ruby>ず<ruby>確認<rt>かくにん</rt></ruby>しよう。これがテストで<ruby>差<rt>さ</rt></ruby>がつくポイントだよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>逆<rt>ぎゃく</rt></ruby>に、x = 0 をまたがない<ruby>場合<rt>ばあい</rt></ruby>（<ruby>例<rt>れい</rt></ruby>：1 ≤ x ≤ 3）は<ruby>端<rt>はし</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>だけ<ruby>比<rt>くら</rt></ruby>べれば OK だよ。',
    },
    {
      type: 'quiz',
      question: 'y = -x² で -1 ≤ x ≤ 2 のとき、y の<ruby>変域<rt>へんいき</rt></ruby>は？',
      options: [
        { letter: 'A', text: '-4 ≤ y ≤ -1', correct: false },
        { letter: 'B', text: '-4 ≤ y ≤ 0', correct: true },
        { letter: 'C', text: '-1 ≤ y ≤ 0', correct: false },
        { letter: 'D', text: '-4 ≤ y ≤ 1', correct: false },
      ],
      explanation:
        'x = 0 を<ruby>含<rt>ふく</rt></ruby>むので a < 0 → y の<ruby>最大値<rt>さいだいち</rt></ruby>は 0。x = 2 で y = -4、x = -1 で y = -1。|2| > |-1| だから<ruby>最小値<rt>さいしょうち</rt></ruby>は -4。<ruby>答<rt>こた</rt></ruby>え：-4 ≤ y ≤ 0',
    },
    {
      type: 'summary-point',
      text: '<ruby>変域<rt>へんいき</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めるときは「x = 0 を<ruby>含<rt>ふく</rt></ruby>むか」を<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>！',
    },
    {
      type: 'end',
      points: [
        'y = ax² では x = 0 を<ruby>境<rt>さかい</rt></ruby>に y の<ruby>変化<rt>へんか</rt></ruby>の<ruby>向<rt>む</rt></ruby>きが<ruby>逆<rt>ぎゃく</rt></ruby>になる',
        'a > 0: x = 0 で<ruby>最小値<rt>さいしょうち</rt></ruby> 0、a < 0: x = 0 で<ruby>最大値<rt>さいだいち</rt></ruby> 0',
        'x の<ruby>変域<rt>へんいき</rt></ruby>が 0 をまたぐ → y の<ruby>最小値<rt>さいしょうち</rt></ruby>（a>0）または<ruby>最大値<rt>さいだいち</rt></ruby>（a<0）は 0',
        '<ruby>端<rt>はし</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>だけ<ruby>見<rt>み</rt></ruby>るのは NG！<ruby>必<rt>かなら</rt></ruby>ず x = 0 をチェック',
      ],
    },
  ],
};

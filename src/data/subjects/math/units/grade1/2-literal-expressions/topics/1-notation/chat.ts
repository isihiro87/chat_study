import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const literalNotationChat: HistoryChat = {
  id: 'math-g1-lit-notation',
  icon: '🔤',
  title: '<ruby>文字式<rt>もじしき</rt></ruby>の<ruby>表<rt>あらわ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 ×や÷を<ruby>省<rt>はぶ</rt></ruby>いた<ruby>表<rt>あらわ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>',
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
      text: '<ruby>文字<rt>もじ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>数量<rt>すうりょう</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>そう',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1の<ruby>数学<rt>すうがく</rt></ruby>では、わからない<ruby>数<rt>かず</rt></ruby>を<ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>すことを<ruby>学<rt>まな</rt></ruby>ぶよ。<strong><ruby>文字式<rt>もじしき</rt></ruby></strong>の<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>にはルールがあるんだ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1<ruby>個<rt>こ</rt></ruby> $a$ <ruby>円<rt>えん</rt></ruby>のりんごを5<ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>ったら、<ruby>代金<rt>だいきん</rt></ruby>はいくらになるかな？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$a$ <ruby>円<rt>えん</rt></ruby>が5<ruby>個<rt>こ</rt></ruby>だから… $a \\times 5$ <ruby>円<rt>えん</rt></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>はバッチリ！でも<ruby>文字式<rt>もじしき</rt></ruby>には<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>のルールがあるんだ。まず<strong>×の<ruby>記号<rt>きごう</rt></ruby>は<ruby>省略<rt>しょうりゃく</rt></ruby>する</strong>よ。そして<strong><ruby>数<rt>かず</rt></ruby>を<ruby>文字<rt>もじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>書<rt>か</rt></ruby>く</strong>んだ。',
    },
    {
      type: 'whiteboard',
      title: '×を<ruby>省略<rt>しょうりゃく</rt></ruby>するルール',
      steps: [
        {
          formula: '$a \\times 5$',
          annotation: '<ruby>数<rt>かず</rt></ruby>を<ruby>前<rt>まえ</rt></ruby>に<ruby>出<rt>だ</rt></ruby>して×を<ruby>省略<rt>しょうりゃく</rt></ruby>！',
        },
        {
          formula: '$\\textcolor{#D97706}{5a}$',
          annotation: 'これが<ruby>正<rt>ただ</rt></ruby>しい<ruby>文字式<rt>もじしき</rt></ruby>の<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>',
          animateInsert: true,
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '×を<ruby>書<rt>か</rt></ruby>かないんですね！$5a$ だけでいいんだ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！もっとルールがあるよ。<strong>$1$ は<ruby>省略<rt>しょうりゃく</rt></ruby></strong>するし、<strong><ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby></strong>で<ruby>書<rt>か</rt></ruby>くんだ。',
    },
    {
      type: 'whiteboard',
      title: 'いろいろな<ruby>省略<rt>しょうりゃく</rt></ruby>ルール',
      steps: [
        {
          formula: '$1 \\times a = \\textcolor{#D97706}{a}$',
          annotation: '$1$ は<ruby>省略<rt>しょうりゃく</rt></ruby>する',
        },
        {
          formula: '$(-1) \\times a = \\textcolor{#D97706}{-a}$',
          annotation: '$-1$ は<ruby>符号<rt>ふごう</rt></ruby>だけ<ruby>残<rt>のこ</rt></ruby>す',
        },
        {
          formula: '$a \\times a = \\textcolor{#D97706}{a^2}$',
          annotation: '<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す',
          animateInsert: true,
        },
        {
          formula: '$3 \\times a \\times a = \\textcolor{#D97706}{3a^2}$',
          annotation: '<ruby>数<rt>かず</rt></ruby>を<ruby>前<rt>まえ</rt></ruby>に、<ruby>指数<rt>しすう</rt></ruby>をつける',
          animateInsert: true,
          isResult: true,
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>文字式<rt>もじしき</rt></ruby>のルール：①×を<ruby>省略<rt>しょうりゃく</rt></ruby> ②<ruby>数<rt>かず</rt></ruby>を<ruby>前<rt>まえ</rt></ruby>に ③$1$ は<ruby>省略<rt>しょうりゃく</rt></ruby> ④<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>',
    },
    {
      type: 'quiz',
      question: '$(-1) \\times a \\times b$ を<ruby>文字式<rt>もじしき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>すと？',
      options: [
        { letter: 'A', text: '$-1ab$', correct: false },
        { letter: 'B', text: '$-ab$', correct: true },
        { letter: 'C', text: '$ab$', correct: false },
        { letter: 'D', text: '$1ab$', correct: false },
      ],
      explanation:
        '$-1$ の $1$ は<ruby>省略<rt>しょうりゃく</rt></ruby>して<ruby>符号<rt>ふごう</rt></ruby>だけ<ruby>残<rt>のこ</rt></ruby>すから $\\textcolor{#D97706}{-ab}$ だよ。',
    },
    {
      type: 'date',
      text: '÷は<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す',
    },
    {
      type: 'narrator',
      text: '<ruby>文字式<rt>もじしき</rt></ruby>では、<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>の÷も<ruby>使<rt>つか</rt></ruby>わないよ。<ruby>代<rt>か</rt></ruby>わりに<strong><ruby>分数<rt>ぶんすう</rt></ruby></strong>で<ruby>書<rt>か</rt></ruby>くんだ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$x \\div 3$ を<ruby>文字式<rt>もじしき</rt></ruby>で<ruby>書<rt>か</rt></ruby>いてみよう。÷は<ruby>使<rt>つか</rt></ruby>わずに<ruby>分数<rt>ぶんすう</rt></ruby>にするんだ。',
    },
    {
      type: 'whiteboard',
      title: '÷を<ruby>分数<rt>ぶんすう</rt></ruby>にする',
      steps: [
        {
          formula: '$x \\div 3$',
          annotation: '÷を<ruby>使<rt>つか</rt></ruby>わず<ruby>分数<rt>ぶんすう</rt></ruby>に！',
        },
        {
          formula: '$\\textcolor{#D97706}{\\dfrac{x}{3}}$',
          annotation: '<ruby>割<rt>わ</rt></ruby>る<ruby>数<rt>かず</rt></ruby>が<ruby>分母<rt>ぶんぼ</rt></ruby>にくる',
          animateInsert: true,
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '×も÷も<ruby>使<rt>つか</rt></ruby>わないんですね！<ruby>文字式<rt>もじしき</rt></ruby>はスッキリした<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>なんだ！',
    },
    {
      type: 'summary-point',
      text: '÷は<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>使<rt>つか</rt></ruby>わない！<ruby>必<rt>かなら</rt></ruby>ず<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>で<ruby>書<rt>か</rt></ruby>こう。',
    },
    {
      type: 'quiz',
      question: '$a \\div 7$ を<ruby>文字式<rt>もじしき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>すと？',
      options: [
        { letter: 'A', text: '$a - 7$', correct: false },
        { letter: 'B', text: '$7a$', correct: false },
        { letter: 'C', text: '$\\dfrac{7}{a}$', correct: false },
        { letter: 'D', text: '$\\dfrac{a}{7}$', correct: true },
      ],
      explanation:
        '÷は<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す！<ruby>割<rt>わ</rt></ruby>る<ruby>数<rt>かず</rt></ruby>が<ruby>分母<rt>ぶんぼ</rt></ruby>にくるから $\\textcolor{#D97706}{\\dfrac{a}{7}}$ だよ。',
    },
    {
      type: 'date',
      text: '<ruby>代入<rt>だいにゅう</rt></ruby>と<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>文字<rt>もじ</rt></ruby>に<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>数<rt>かず</rt></ruby>を<ruby>当<rt>あ</rt></ruby>てはめて<ruby>計算<rt>けいさん</rt></ruby>してみよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>文字<rt>もじ</rt></ruby>に<ruby>数<rt>かず</rt></ruby>を<ruby>当<rt>あ</rt></ruby>てはめることを<strong>「<ruby>代入<rt>だいにゅう</rt></ruby>」</strong>、<ruby>計算<rt>けいさん</rt></ruby>した<ruby>結果<rt>けっか</rt></ruby>を<strong>「<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$x = -2$ のとき、$3x + 1$ の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めてみよう。<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>するときは<strong>かっこ</strong>をつけるのがポイント！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>代入<rt>だいにゅう</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>',
      steps: [
        {
          formula: '$3x + 1$ に $x = -2$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
          annotation: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>はかっこをつける！',
        },
        {
          formula: '$= 3 \\times \\textcolor{#D97706}{(-2)} + 1$',
          annotation: '$x$ に $(-2)$ を<ruby>当<rt>あ</rt></ruby>てはめた',
          animateInsert: true,
        },
        {
          formula: '$= -6 + 1$',
          annotation: '$3 \\times (-2) = -6$',
        },
        {
          formula: '$= \\textcolor{#D97706}{-5}$',
          annotation: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>は $-5$',
          animateInsert: true,
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'かっこをつけないと<ruby>計算<rt>けいさん</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えちゃいそうですね。<ruby>気<rt>き</rt></ruby>をつけます！',
    },
    {
      type: 'quiz',
      question: '$5 \\times a \\times b \\times b$ を<ruby>文字式<rt>もじしき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>すと？',
      options: [
        { letter: 'A', text: '$5ab$', correct: false },
        { letter: 'B', text: '$5a^2b$', correct: false },
        { letter: 'C', text: '$5ab^2$', correct: true },
        { letter: 'D', text: '$5a^2b^2$', correct: false },
      ],
      explanation:
        '$b$ が2<ruby>個<rt>こ</rt></ruby>かけ<ruby>合<rt>あ</rt></ruby>わされているから $b^2$。$a$ は1<ruby>個<rt>こ</rt></ruby>なのでそのまま。\n<ruby>答<rt>こた</rt></ruby>えは $\\textcolor{#D97706}{5ab^2}$ だよ。',
    },
    {
      type: 'end',
      points: [
        '×は<ruby>省略<rt>しょうりゃく</rt></ruby>、<ruby>数<rt>かず</rt></ruby>を<ruby>文字<rt>もじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>書<rt>か</rt></ruby>く',
        '$1$ と $-1$ の $1$ は<ruby>省略<rt>しょうりゃく</rt></ruby>、<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す',
        '÷は<ruby>使<rt>つか</rt></ruby>わず<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す',
        '<ruby>代入<rt>だいにゅう</rt></ruby>は<ruby>文字<rt>もじ</rt></ruby>に<ruby>数<rt>かず</rt></ruby>を<ruby>当<rt>あ</rt></ruby>てはめること。<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>はかっこをつける',
      ],
    },
  ],
};

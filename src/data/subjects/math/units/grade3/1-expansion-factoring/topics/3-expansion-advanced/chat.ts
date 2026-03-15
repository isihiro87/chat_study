import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const expansionAdvancedChat: HistoryChat = {
  id: 'math-g3-expansion-advanced',
  icon: '🚀',
  title: '展開の応用をマスターしよう',
  subtitle: '〜中3数学〜 置き換え・式を簡単にする',
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
      text: '<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えを<ruby>使<rt>つか</rt></ruby>った<ruby>展開<rt>てんかい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>公式<rt>こうしき</rt></ruby>の a や b が<ruby>数<rt>すう</rt></ruby>ではなく<ruby>式<rt>しき</rt></ruby>のとき、かたまりを1つの<ruby>文字<rt>もじ</rt></ruby>に<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えると<ruby>公式<rt>こうしき</rt></ruby>が<ruby>使<rt>つか</rt></ruby>いやすくなるよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$(3x+1)^2$ を<ruby>展開<rt>てんかい</rt></ruby>してみよう。$a=3x$, $b=1$ とおくと<ruby>公式<rt>こうしき</rt></ruby>2がそのまま<ruby>使<rt>つか</rt></ruby>えるよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>え: $(3x+1)^2$',
      steps: [
        {
          formula: '$(3x + 1)^2$',
          annotation: '$a = 3x$, $b = 1$ とおく',
        },
        {
          formula: '$(3x)^2 + 2 \\times 3x \\times 1 + 1^2$',
          animateInsert: true,
          annotation: '<ruby>公式<rt>こうしき</rt></ruby>2: $a^2 + 2ab + b^2$ に<ruby>当<rt>あ</rt></ruby>てはめる',
        },
        {
          formula: '$9x^2 + 6x + 1$',
          isResult: true,
          animateInsert: true,
          annotation: '$(3x)^2 = 9x^2$ に<ruby>注意<rt>ちゅうい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$(3x)^2$ って $3x^2$ じゃなくて $9x^2$ なんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！$(3x)^2 = 3^2 \\times x^2 = 9x^2$ だよ。<ruby>係数<rt>けいすう</rt></ruby>も2<ruby>乗<rt>じょう</rt></ruby>するのを<ruby>忘<rt>わす</rt></ruby>れないでね。',
    },
    {
      type: 'quiz',
      question: '$(4x - 1)^2$ を<ruby>展開<rt>てんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$4x^2 - 8x + 1$', correct: false },
        { letter: 'B', text: '$16x^2 - 8x + 1$', correct: true },
        { letter: 'C', text: '$16x^2 - 4x + 1$', correct: false },
        { letter: 'D', text: '$16x^2 + 8x + 1$', correct: false },
      ],
      explanation:
        '$a=4x$, $b=1$ で<ruby>公式<rt>こうしき</rt></ruby>3。$(4x)^2 - 2 \\times 4x \\times 1 + 1^2 = \\textcolor{#D97706}{16x^2 - 8x + 1}$',
    },
    {
      type: 'summary-point',
      text: '<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えのコツ: <ruby>係数<rt>けいすう</rt></ruby>ごとまとめて a, b におく → $(3x)^2 = 9x^2$ のように<ruby>係数<rt>けいすう</rt></ruby>も2<ruby>乗<rt>じょう</rt></ruby>する！',
    },
    {
      type: 'date',
      text: '<ruby>式<rt>しき</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にする',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$3(x+4)(x+2) - (x-5)^2$ を<ruby>簡単<rt>かんたん</rt></ruby>にしてみよう。<ruby>手順<rt>てじゅん</rt></ruby>は「<ruby>展開<rt>てんかい</rt></ruby>→まとめる」の2ステップだよ。',
    },
    {
      type: 'whiteboard',
      title: '$3(x+4)(x+2) - (x-5)^2$ を<ruby>簡単<rt>かんたん</rt></ruby>に',
      steps: [
        {
          formula: '$(x+4)(x+2) = x^2 + 6x + 8$',
          annotation: '<ruby>公式<rt>こうしき</rt></ruby>1で<ruby>展開<rt>てんかい</rt></ruby>',
        },
        {
          formula: '$3(x^2+6x+8) - (x^2-10x+25)$',
          animateInsert: true,
          annotation: 'それぞれ<ruby>展開<rt>てんかい</rt></ruby>して<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$3x^2+18x+24-x^2+10x-25$',
          annotation: 'カッコを<ruby>外<rt>はず</rt></ruby>す（<ruby>符号<rt>ふごう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>）',
        },
        {
          formula: '$2x^2 + 28x - 1$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'マイナスの<ruby>前<rt>まえ</rt></ruby>のカッコを<ruby>外<rt>はず</rt></ruby>すとき、<ruby>符号<rt>ふごう</rt></ruby>が<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>変<rt>か</rt></ruby>わるんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！$-(x^2-10x+25) = -x^2+10x-25$ だよ。',
    },
    {
      type: 'quiz',
      question: '$(x+5)(x+3) - (x+4)^2$ を<ruby>簡単<rt>かんたん</rt></ruby>にすると？',
      options: [
        { letter: 'A', text: '$-1$', correct: true },
        { letter: 'B', text: '$x - 1$', correct: false },
        { letter: 'C', text: '$-x - 1$', correct: false },
        { letter: 'D', text: '$2x^2 + 8x + 15$', correct: false },
      ],
      explanation:
        '$(x+5)(x+3) = x^2+8x+15$、$(x+4)^2 = x^2+8x+16$。<ruby>引<rt>ひ</rt></ruby>くと $15-16 = \\textcolor{#D97706}{-1}$',
    },
    {
      type: 'summary-point',
      text: '<ruby>式<rt>しき</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にする<ruby>手順<rt>てじゅん</rt></ruby>: (1)<ruby>公式<rt>こうしき</rt></ruby>で<ruby>展開<rt>てんかい</rt></ruby> → (2)カッコを<ruby>外<rt>はず</rt></ruby>す → (3)<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる',
    },
    {
      type: 'date',
      text: '<ruby>式<rt>しき</rt></ruby>のおきかえ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$(x+y+4)(x+y+3)$ を<ruby>見<rt>み</rt></ruby>てみよう。$x+y$ が<ruby>両方<rt>りょうほう</rt></ruby>にあるから $M=x+y$ とおこう。',
    },
    {
      type: 'whiteboard',
      title: 'おきかえ: $(x+y+4)(x+y+3)$',
      steps: [
        {
          formula: '$M = x + y$ とおく',
          annotation: '<ruby>共通部分<rt>きょうつうぶぶん</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけて<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>え',
        },
        {
          formula: '$(M + 4)(M + 3) = M^2 + 7M + 12$',
          animateInsert: true,
          annotation: '<ruby>公式<rt>こうしき</rt></ruby>1（<ruby>足<rt>た</rt></ruby>して7、かけて12）',
        },
        {
          formula: '$x^2 + 2xy + y^2 + 7x + 7y + 12$',
          isResult: true,
          animateInsert: true,
          annotation: '$M$ を $(x+y)$ に<ruby>戻<rt>もど</rt></ruby>して<ruby>展開<rt>てんかい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えると、<ruby>見慣<rt>みな</rt></ruby>れた<ruby>公式<rt>こうしき</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>になって<ruby>簡単<rt>かんたん</rt></ruby>ですね！',
    },
    {
      type: 'quiz',
      question: '$(x-y+3)(x-y-5)$ を<ruby>展開<rt>てんかい</rt></ruby>するとき、何を<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えるとよいか？',
      options: [
        { letter: 'A', text: '$M = x + 3$', correct: false },
        { letter: 'B', text: '$M = x - y$', correct: true },
        { letter: 'C', text: '$M = y - 5$', correct: false },
        { letter: 'D', text: '$M = x - 5$', correct: false },
      ],
      explanation:
        '$M = x-y$ とおくと $(M+3)(M-5) = M^2-2M-15$ となり<ruby>公式<rt>こうしき</rt></ruby>1が<ruby>使<rt>つか</rt></ruby>える！',
    },
    {
      type: 'summary-point',
      text: 'おきかえのコツ: <ruby>共通<rt>きょうつう</rt></ruby>する<ruby>部分<rt>ぶぶん</rt></ruby>を M に<ruby>置<rt>お</rt></ruby>く → <ruby>公式<rt>こうしき</rt></ruby>で<ruby>展開<rt>てんかい</rt></ruby> → M を<ruby>元<rt>もと</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>す',
    },
    {
      type: 'end',
      points: [
        '<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>え: <ruby>係数付<rt>けいすうつ</rt></ruby>きは $a=3x$ などとおく → $(3x)^2 = 9x^2$',
        '<ruby>式<rt>しき</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>に: <ruby>展開<rt>てんかい</rt></ruby>→カッコを<ruby>外<rt>はず</rt></ruby>す→<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる',
        '<ruby>式<rt>しき</rt></ruby>のおきかえ: <ruby>共通部分<rt>きょうつうぶぶん</rt></ruby>を $M$ におく → <ruby>公式<rt>こうしき</rt></ruby>で<ruby>展開<rt>てんかい</rt></ruby> → $M$ を<ruby>戻<rt>もど</rt></ruby>す',
      ],
    },
  ],
};

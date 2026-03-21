import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const findLinearEquationChat: HistoryChat = {
  id: 'math-g2-find-linear-eq',
  icon: '🔍',
  title: '一次関数の式を求めよう',
  subtitle: '〜中2数学〜 3つのパターンをマスター',
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
      text: 'パターン①：<ruby>傾<rt>かたむ</rt></ruby>き＋<ruby>切片<rt>せっぺん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める<ruby>方法<rt>ほうほう</rt></ruby>は <strong>3パターン</strong>！ <ruby>順番<rt>じゅんばん</rt></ruby>に<ruby>見<rt>み</rt></ruby>ていこう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まずは<ruby>一番<rt>いちばん</rt></ruby>かんたんなパターン。<ruby>傾<rt>かたむ</rt></ruby>きと<ruby>切片<rt>せっぺん</rt></ruby>がそのまま<ruby>分<rt>わ</rt></ruby>かっているときだ！',
    },
    {
      type: 'whiteboard',
      title: 'パターン①：<ruby>傾<rt>かたむ</rt></ruby>き a と<ruby>切片<rt>せっぺん</rt></ruby> b が<ruby>分<rt>わ</rt></ruby>かるとき',
      steps: [
        {
          formula: '<ruby>傾<rt>かたむ</rt></ruby>き 3、<ruby>切片<rt>せっぺん</rt></ruby> $-2$ のとき',
          annotation: 'そのまま $y = ax + b$ に<ruby>当<rt>あ</rt></ruby>てはめる！',
        },
        {
          formula: '$y = 3x + (-2) = \\textcolor{#D97706}{3x - 2}$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>代入<rt>だいにゅう</rt></ruby>するだけ！ かんたん！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'これは<ruby>楽勝<rt>らくしょう</rt></ruby>ですね！',
    },
    {
      type: 'summary-point',
      text: 'パターン①：<ruby>傾<rt>かたむ</rt></ruby>き a と<ruby>切片<rt>せっぺん</rt></ruby> b が<ruby>分<rt>わ</rt></ruby>かる → そのまま y = ax + b に<ruby>代入<rt>だいにゅう</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '<ruby>傾<rt>かたむ</rt></ruby>き $-2$、<ruby>切片<rt>せっぺん</rt></ruby> $5$ の<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$y = -2x + 5$', correct: true },
        { letter: 'B', text: '$y = 5x - 2$', correct: false },
        { letter: 'C', text: '$y = 2x + 5$', correct: false },
        { letter: 'D', text: '$y = -2x - 5$', correct: false },
      ],
      explanation:
        '$y = ax + b$ に $a = -2$, $b = 5$ を<ruby>代入<rt>だいにゅう</rt></ruby>して $\\textcolor{#D97706}{y = -2x + 5}$！',
    },
    {
      type: 'date',
      text: 'パターン②：<ruby>傾<rt>かたむ</rt></ruby>き＋1<ruby>点<rt>てん</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>傾<rt>かたむ</rt></ruby>きと<ruby>通<rt>とお</rt></ruby>る<ruby>点<rt>てん</rt></ruby>が1つ<ruby>分<rt>わ</rt></ruby>かっているパターンだ。<ruby>傾<rt>かたむ</rt></ruby>き 2 で<ruby>点<rt>てん</rt></ruby>(1, 5) を<ruby>通<rt>とお</rt></ruby>る<ruby>一次関数<rt>いちじかんすう</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めてみよう！',
    },
    {
      type: 'whiteboard',
      title: 'パターン②：<ruby>傾<rt>かたむ</rt></ruby>き＋1<ruby>点<rt>てん</rt></ruby>',
      steps: [
        {
          formula: '$y = 2x + b$',
          annotation: '<ruby>傾<rt>かたむ</rt></ruby>き $a = 2$ を<ruby>代入<rt>だいにゅう</rt></ruby>。あとは $b$ を<ruby>求<rt>もと</rt></ruby>める！',
        },
        {
          formula: '$5 = 2 \\times 1 + b$',
          animateInsert: true,
          annotation: '<ruby>通<rt>とお</rt></ruby>る<ruby>点<rt>てん</rt></ruby>$(1, 5)$ の $x = 1, y = 5$ を<ruby>代入<rt>だいにゅう</rt></ruby>！',
        },
        {
          formula: '$b = 5 - 2 = \\textcolor{#D97706}{3}$',
          animateInsert: true,
          annotation: '$b$ が<ruby>求<rt>もと</rt></ruby>まった！',
        },
        {
          formula: '$y = 2x + 3$',
          isResult: true,
          annotation: '<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>通<rt>とお</rt></ruby>る<ruby>点<rt>てん</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>すれば b が<ruby>出<rt>で</rt></ruby>るんですね！',
    },
    {
      type: 'summary-point',
      text: 'パターン②：<ruby>傾<rt>かたむ</rt></ruby>き a を<ruby>代入<rt>だいにゅう</rt></ruby> → <ruby>通<rt>とお</rt></ruby>る<ruby>点<rt>てん</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>して b を<ruby>求<rt>もと</rt></ruby>める！',
    },
    {
      type: 'quiz',
      question: '<ruby>傾<rt>かたむ</rt></ruby>き $3$ で<ruby>点<rt>てん</rt></ruby>$(1, 7)$ を<ruby>通<rt>とお</rt></ruby>る<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>切片<rt>せっぺん</rt></ruby> $b$ は？',
      options: [
        { letter: 'A', text: '$b = 3$', correct: false },
        { letter: 'B', text: '$b = 7$', correct: false },
        { letter: 'C', text: '$b = 10$', correct: false },
        { letter: 'D', text: '$b = 4$', correct: true },
      ],
      explanation:
        '$y = 3x + b$ に $(1, 7)$ を<ruby>代入<rt>だいにゅう</rt></ruby>: $7 = 3 + b \\rightarrow b = \\textcolor{#D97706}{4}$。\n$y = 3x + 4$。',
    },
    {
      type: 'date',
      text: 'パターン③：2<ruby>点<rt>てん</rt></ruby>から<ruby>求<rt>もと</rt></ruby>める',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>は2つの<ruby>点<rt>てん</rt></ruby>だけ<ruby>分<rt>わ</rt></ruby>かっているパターン。(1, 3) と (3, 7) を<ruby>通<rt>とお</rt></ruby>る<ruby>一次関数<rt>いちじかんすう</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めるよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>傾<rt>かたむ</rt></ruby>きも<ruby>切片<rt>せっぺん</rt></ruby>も<ruby>分<rt>わ</rt></ruby>からないのに<ruby>求<rt>もと</rt></ruby>められるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '2<ruby>点<rt>てん</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かれば<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>計算<rt>けいさん</rt></ruby>できるんだ！',
    },
    {
      type: 'whiteboard',
      title: 'パターン③：2<ruby>点<rt>てん</rt></ruby>から<ruby>求<rt>もと</rt></ruby>める',
      steps: [
        {
          formula: '$a = (7 - 3) \\div (3 - 1) = 4 \\div 2 = \\textcolor{#D97706}{2}$',
          animateInsert: true,
          annotation: '<ruby>傾<rt>かたむ</rt></ruby>き $= y$ の<ruby>増加量<rt>ぞうかりょう</rt></ruby> $\\div$ $x$ の<ruby>増加量<rt>ぞうかりょう</rt></ruby>',
        },
        {
          formula: '$3 = 2 \\times 1 + b \\rightarrow b = 1$',
          animateInsert: true,
          annotation: '<ruby>点<rt>てん</rt></ruby>$(1, 3)$ を<ruby>代入<rt>だいにゅう</rt></ruby>して $b$ を<ruby>求<rt>もと</rt></ruby>める',
        },
        {
          formula: '$y = 2x + 1$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>完成<rt>かんせい</rt></ruby>！ もう1<ruby>点<rt>てん</rt></ruby>でも<ruby>確認<rt>かくにん</rt></ruby>: $2 \\times 3 + 1 = 7$ ✓',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'まず<ruby>傾<rt>かたむ</rt></ruby>きを<ruby>出<rt>だ</rt></ruby>して、あとはパターン②と<ruby>同<rt>おな</rt></ruby>じですね！',
    },
    {
      type: 'summary-point',
      text: 'パターン③：まず<ruby>傾<rt>かたむ</rt></ruby>き a = (<ruby>y の増加量<rt>yのぞうかりょう</rt></ruby>) ÷ (<ruby>x の増加量<rt>xのぞうかりょう</rt></ruby>) → あとはパターン②と<ruby>同<rt>おな</rt></ruby>じ！',
    },
    {
      type: 'quiz',
      question: '<ruby>傾<rt>かたむ</rt></ruby>き $4$ で<ruby>点<rt>てん</rt></ruby>$(2, 11)$ を<ruby>通<rt>とお</rt></ruby>る<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$y = 4x + 3$', correct: true },
        { letter: 'B', text: '$y = 4x + 11$', correct: false },
        { letter: 'C', text: '$y = 4x + 2$', correct: false },
        { letter: 'D', text: '$y = 4x - 3$', correct: false },
      ],
      explanation:
        '$y = 4x + b$ に $(2, 11)$ を<ruby>代入<rt>だいにゅう</rt></ruby>: $11 = 4 \\times 2 + b \\rightarrow 11 = 8 + b \\rightarrow b = \\textcolor{#D97706}{3}$。\\nよって $y = 4x + 3$',
    },
    {
      type: 'end',
      points: [
        'パターン①：<ruby>傾<rt>かたむ</rt></ruby>き＋<ruby>切片<rt>せっぺん</rt></ruby> → そのまま<ruby>代入<rt>だいにゅう</rt></ruby>',
        'パターン②：<ruby>傾<rt>かたむ</rt></ruby>き＋1<ruby>点<rt>てん</rt></ruby> → <ruby>点<rt>てん</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>して $b$ を<ruby>求<rt>もと</rt></ruby>める',
        'パターン③：2<ruby>点<rt>てん</rt></ruby> → まず<ruby>傾<rt>かたむ</rt></ruby>きを<ruby>計算<rt>けいさん</rt></ruby>してからパターン②',
        'どのパターンでも $y = ax + b$ に<ruby>代入<rt>だいにゅう</rt></ruby>するのが<ruby>基本<rt>きほん</rt></ruby>！',
      ],
    },
  ],
};

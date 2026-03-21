import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const monomialMulDivChat: HistoryChat = {
  id: 'math-g2-mono-mul-div',
  icon: '✖️',
  title: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>乗法<rt>じょうほう</rt></ruby>・<ruby>除法<rt>じょほう</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>2<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>指数<rt>しすう</rt></ruby>の<ruby>法則<rt>ほうそく</rt></ruby>を<ruby>使<rt>つか</rt></ruby>おう',
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
    // ===== 1. 単項式のかけ算 =====
    {
      type: 'date',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>どうしのかけ<ruby>算<rt>ざん</rt></ruby>は、<ruby>係数<rt>けいすう</rt></ruby>は<ruby>係数<rt>けいすう</rt></ruby>、<ruby>文字<rt>もじ</rt></ruby>は<ruby>文字<rt>もじ</rt></ruby>で<ruby>計算<rt>けいさん</rt></ruby>するのが<ruby>基本<rt>きほん</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>は、<strong><ruby>係数<rt>けいすう</rt></ruby>どうし</strong>をかけて、<strong><ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby></strong>は<span class="keyword"><ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す</span>んだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>乗法<rt>じょうほう</rt></ruby>',
      steps: [
        {
          formula: '$(-6x) \\times 2y$',
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>: $(-6) \\times 2 = -12$、<ruby>文字<rt>もじ</rt></ruby>: $x \\times y = xy$',
        },
        {
          formula: '$= -12xy$',
          animateInsert: true,
          annotation: '<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>どうしのかけ<ruby>算<rt>ざん</rt></ruby>はどうなるんですか？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す',
      steps: [
        {
          formula: '$3x^2 \\times 5x^3$',
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>: $3 \\times 5 = 15$',
        },
        {
          formula: '$= 15x^{2+3} = 15x^5$',
          animateInsert: true,
          annotation: '$x^2 \\times x^3 = x^{2+3} = x^5$（<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す！）',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>なら<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>すんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>乗法<rt>じょうほう</rt></ruby>: <ruby>係数<rt>けいすう</rt></ruby>×<ruby>係数<rt>けいすう</rt></ruby>、<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す。$x^m \\times x^n = x^{m+n}$',
    },
    {
      type: 'quiz',
      question: '$(-4ab) \\times 3a^2$ の<ruby>答<rt>こた</rt></ruby>えは？',
      options: [
        { letter: 'A', text: '$-12a^3b$', correct: true },
        { letter: 'B', text: '$-12a^2b$', correct: false },
        { letter: 'C', text: '$12a^3b$', correct: false },
        { letter: 'D', text: '$-12a^2b^2$', correct: false },
      ],
      explanation:
        '<ruby>係数<rt>けいすう</rt></ruby>: $(-4) \\times 3 = -12$。<ruby>文字<rt>もじ</rt></ruby>: $a \\times a^2 = a^3$、$b$ はそのまま。\n<ruby>答<rt>こた</rt></ruby>えは $\\textcolor{#D97706}{-12a^3b}$',
    },
    // ===== 2. 単項式の累乗 =====
    {
      type: 'date',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>累乗<rt>るいじょう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span class="keyword"><ruby>累乗<rt>るいじょう</rt></ruby></span>の<ruby>計算<rt>けいさん</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>大事<rt>だいじ</rt></ruby>なのは、<strong>かっこの<ruby>位置<rt>いち</rt></ruby></strong>だよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>累乗<rt>るいじょう</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>',
      steps: [
        {
          formula: '$(7x)^2 = 7^2 \\times x^2 = 49x^2$',
          annotation: 'かっこの<ruby>中<rt>なか</rt></ruby><ruby>全体<rt>ぜんたい</rt></ruby>を2<ruby>乗<rt>じょう</rt></ruby>する',
        },
        {
          formula: '$(-3b)^2 = (-3)^2 \\times b^2 = 9b^2$',
          annotation: '$(-)^2 = (+)$ だから<ruby>正<rt>せい</rt></ruby>になる！',
        },
        {
          formula: '$-(8a)^2 = -(64a^2) = -64a^2$',
          animateInsert: true,
          annotation: '「−」はかっこの<ruby>外<rt>そと</rt></ruby>！$8^2 = 64$ に−をつける',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '$(-3b)^2$ と $-(3b)^2$ って<ruby>違<rt>ちが</rt></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>違<rt>ちが</rt></ruby>う！$(-3b)^2 = 9b^2$（<ruby>正<rt>せい</rt></ruby>）、$-(3b)^2 = -9b^2$（<ruby>負<rt>ふ</rt></ruby>）。<strong>「−」がかっこの<ruby>中<rt>なか</rt></ruby>か<ruby>外<rt>そと</rt></ruby>か</strong>で<ruby>答<rt>こた</rt></ruby>えが<ruby>変<rt>か</rt></ruby>わるよ！',
    },
    {
      type: 'summary-point',
      text: '$(-a)^2 = a^2$（<ruby>正<rt>せい</rt></ruby>）、$-(a)^2 = -a^2$（<ruby>負<rt>ふ</rt></ruby>）。「−」がかっこの<ruby>中<rt>なか</rt></ruby>か<ruby>外<rt>そと</rt></ruby>かに<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '$(-5x)^2$ の<ruby>答<rt>こた</rt></ruby>えは？',
      options: [
        { letter: 'A', text: '$-25x^2$', correct: false },
        { letter: 'B', text: '$25x$', correct: false },
        { letter: 'C', text: '$-10x^2$', correct: false },
        { letter: 'D', text: '$25x^2$', correct: true },
      ],
      explanation:
        '$(-5)^2 = 25$、$x^2$ はそのまま。$(-)^2 = (+)$ だから $\\textcolor{#D97706}{25x^2}$。\n$-(5x)^2 = -25x^2$ と<ruby>間違<rt>まちが</rt></ruby>えないように！',
    },
    // ===== 3. 累乗をふくむかけ算 =====
    {
      type: 'date',
      text: '<ruby>累乗<rt>るいじょう</rt></ruby>をふくむかけ<ruby>算<rt>ざん</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>累乗<rt>るいじょう</rt></ruby>をふくむかけ<ruby>算<rt>ざん</rt></ruby>は、<strong>まず<ruby>累乗<rt>るいじょう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby></strong>してからかけるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>累乗<rt>るいじょう</rt></ruby>×<ruby>単項式<rt>たんこうしき</rt></ruby>',
      steps: [
        {
          formula: '$3a \\times (-4a)^2$',
          annotation: 'まず $(-4a)^2 = 16a^2$ を<ruby>計算<rt>けいさん</rt></ruby>',
        },
        {
          formula: '$= 3a \\times 16a^2 = 48a^3$',
          animateInsert: true,
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>: $3 \\times 16 = 48$、$a \\times a^2 = a^3$',
        },
      ],
    },
    {
      type: 'quiz',
      question: '$(-2x)^3 \\times 3x^2$ の<ruby>答<rt>こた</rt></ruby>えは？',
      options: [
        { letter: 'A', text: '$-24x^5$', correct: true },
        { letter: 'B', text: '$24x^5$', correct: false },
        { letter: 'C', text: '$-24x^6$', correct: false },
        { letter: 'D', text: '$-6x^5$', correct: false },
      ],
      explanation:
        '$(-2x)^3 = -8x^3$。$-8x^3 \\times 3x^2 = \\textcolor{#D97706}{-24x^5}$。\n$(-)^3 = (-)$ だから<ruby>負<rt>ふ</rt></ruby>になる！',
    },
    // ===== 4. 単項式の割り算 =====
    {
      type: 'date',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>は、<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>にして<ruby>約分<rt>やくぶん</rt></ruby>するのがコツ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<span class="keyword"><ruby>除法<rt>じょほう</rt></ruby></span>は、<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>にして<ruby>係数<rt>けいすう</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>をそれぞれ<ruby>約分<rt>やくぶん</rt></ruby>するよ。<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>除法<rt>じょほう</rt></ruby>',
      steps: [
        {
          formula: '$6xy \\div 3x = \\frac{6xy}{3x}$',
          annotation: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>にする',
        },
        {
          formula: '$= \\frac{6}{3} \\times \\frac{x}{x} \\times y = 2y$',
          animateInsert: true,
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>を<ruby>約分<rt>やくぶん</rt></ruby>、$x$ は<ruby>消<rt>き</rt></ruby>える！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>にして<ruby>約分<rt>やくぶん</rt></ruby>するだけ！<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>のときはどうするんですか？',
    },
    // ===== 5. 分数係数の割り算 =====
    {
      type: 'date',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby><ruby>係数<rt>けいすう</rt></ruby>の<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>割<rt>わ</rt></ruby>る<ruby>式<rt>しき</rt></ruby>が<ruby>分数<rt>ぶんすう</rt></ruby>のときは、<span class="keyword"><ruby>逆数<rt>ぎゃくすう</rt></ruby></span>にしてかけるよ。$a \\div \\frac{b}{c} = a \\times \\frac{c}{b}$ だ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分数<rt>ぶんすう</rt></ruby><ruby>係数<rt>けいすう</rt></ruby>の<ruby>除法<rt>じょほう</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{2}{3}x^2y \\div \\frac{4}{9}xy$',
          annotation: '$\\div \\frac{4}{9}$ を $\\times \\frac{9}{4}$ に<ruby>変<rt>か</rt></ruby>える',
        },
        {
          formula: '$= \\frac{2}{3}x^2y \\times \\frac{9}{4xy} = \\frac{18x^2y}{12xy} = \\frac{3}{2}x$',
          animateInsert: true,
          annotation: '<ruby>逆数<rt>ぎゃくすう</rt></ruby>にしてかけて<ruby>約分<rt>やくぶん</rt></ruby>！',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>割<rt>わ</rt></ruby>るときは<ruby>逆数<rt>ぎゃくすう</rt></ruby>をかける。$a \\div \\frac{b}{c} = a \\times \\frac{c}{b}$',
    },
    {
      type: 'quiz',
      question: '$12x^2y \\div 4xy$ の<ruby>答<rt>こた</rt></ruby>えは？',
      options: [
        { letter: 'A', text: '$3xy$', correct: false },
        { letter: 'B', text: '$8xy$', correct: false },
        { letter: 'C', text: '$3y$', correct: false },
        { letter: 'D', text: '$3x$', correct: true },
      ],
      explanation:
        '$\\frac{12x^2y}{4xy} = \\frac{12}{4} \\times \\frac{x^2}{x} \\times \\frac{y}{y} = \\textcolor{#D97706}{3x}$。\n$y$ は<ruby>約分<rt>やくぶん</rt></ruby>で<ruby>消<rt>き</rt></ruby>える！',
    },
    // ===== 6. 3つの式の乗除 =====
    {
      type: 'date',
      text: '3つの<ruby>式<rt>しき</rt></ruby>の<ruby>乗除<rt>じょうじょ</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '3つ<ruby>以上<rt>いじょう</rt></ruby>の<ruby>単項式<rt>たんこうしき</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>・<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>は、<strong>1つの<ruby>分数<rt>ぶんすう</rt></ruby>にまとめて</strong><ruby>約分<rt>やくぶん</rt></ruby>するのが<ruby>速<rt>はや</rt></ruby>いよ。',
    },
    {
      type: 'whiteboard',
      title: '3つの<ruby>式<rt>しき</rt></ruby>の<ruby>乗除<rt>じょうじょ</rt></ruby>',
      steps: [
        {
          formula: '$(-6xy) \\times 8x \\div (-2y)$',
          annotation: '1つの<ruby>分数<rt>ぶんすう</rt></ruby>にまとめる',
        },
        {
          formula: '$= \\frac{(-6xy) \\times 8x}{-2y} = \\frac{-48x^2y}{-2y}$',
          annotation: '÷ の<ruby>後<rt>あと</rt></ruby>は<ruby>分母<rt>ぶんぼ</rt></ruby>に<ruby>置<rt>お</rt></ruby>く',
        },
        {
          formula: '$= 24x^2$',
          animateInsert: true,
          annotation: '(−)÷(−)=(+)、$y$ は<ruby>約分<rt>やくぶん</rt></ruby>で<ruby>消<rt>き</rt></ruby>える！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '×は<ruby>分子<rt>ぶんし</rt></ruby>に、÷は<ruby>分母<rt>ぶんぼ</rt></ruby>に<ruby>置<rt>お</rt></ruby>くんですね！',
    },
    {
      type: 'quiz',
      question: '$8xy \\times (-5y) \\div (-10x)$ の<ruby>答<rt>こた</rt></ruby>えは？',
      options: [
        { letter: 'A', text: '$-4xy$', correct: false },
        { letter: 'B', text: '$-4y^2$', correct: false },
        { letter: 'C', text: '$4xy^2$', correct: false },
        { letter: 'D', text: '$4y^2$', correct: true },
      ],
      explanation:
        '$\\frac{8xy \\times (-5y)}{-10x} = \\frac{-40xy^2}{-10x} = \\textcolor{#D97706}{4y^2}$。\n(−)÷(−)=(+)、$x$ が<ruby>約分<rt>やくぶん</rt></ruby>で<ruby>消<rt>き</rt></ruby>える。',
    },
    // ===== まとめ =====
    {
      type: 'end',
      points: [
        '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>乗法<rt>じょうほう</rt></ruby>: <ruby>係数<rt>けいすう</rt></ruby>×<ruby>係数<rt>けいすう</rt></ruby>、<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す',
        '<ruby>累乗<rt>るいじょう</rt></ruby>: $(-a)^2 = a^2$、$-(a)^2 = -a^2$ の<ruby>区別<rt>くべつ</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>',
        '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>除法<rt>じょほう</rt></ruby>: <ruby>分数<rt>ぶんすう</rt></ruby>にして<ruby>約分<rt>やくぶん</rt></ruby>、<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く',
        '<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>割<rt>わ</rt></ruby>る → <ruby>逆数<rt>ぎゃくすう</rt></ruby>をかける',
        '3つ<ruby>以上<rt>いじょう</rt></ruby>の<ruby>乗除<rt>じょうじょ</rt></ruby>: 1つの<ruby>分数<rt>ぶんすう</rt></ruby>にまとめて<ruby>約分<rt>やくぶん</rt></ruby>',
      ],
    },
  ],
};

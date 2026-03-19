import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const quadFormulaChat: HistoryChat = {
  id: 'math-g3-quad-formula',
  icon: '🏆',
  title: '平方完成と解の公式をマスターしよう',
  subtitle: '〜中3数学〜 どんな二次方程式でも解ける！',
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
      text: '<ruby>平方完成<rt>へいほうかんせい</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できない<ruby>二次方程式<rt>にじほうていしき</rt></ruby>はどうする？ここで<ruby>登場<rt>とうじょう</rt></ruby>するのが<strong>「<ruby>平方完成<rt>へいほうかんせい</rt></ruby>」</strong>と<strong>「<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>」</strong>だ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できない<ruby>方程式<rt>ほうていしき</rt></ruby>もあるよね？そんなとき<ruby>使<rt>つか</rt></ruby>えるのが<ruby>平方完成<rt>へいほうかんせい</rt></ruby>だよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>平方完成<rt>へいほうかんせい</rt></ruby>…？<ruby>難<rt>むずか</rt></ruby>しそう…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>！<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>はシンプルだよ。$x^2 + bx$ の<ruby>形<rt>かたち</rt></ruby>を $(x + \\bigcirc)^2$ に<ruby>変<rt>か</rt></ruby>えるテクニックさ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>平方完成<rt>へいほうかんせい</rt></ruby>のやり<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$x^2 + bx$',
          annotation: '$b$ の<ruby>半分<rt>はんぶん</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>を<ruby>足<rt>た</rt></ruby>して<ruby>引<rt>ひ</rt></ruby>く',
        },
        {
          formula: '$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2$',
          animateInsert: true,
          annotation: '$(b/2)^2$ を<ruby>足<rt>た</rt></ruby>しても<ruby>引<rt>ひ</rt></ruby>いても<ruby>値<rt>あたい</rt></ruby>は<ruby>変<rt>か</rt></ruby>わらない！',
        },
        {
          formula: '$\\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>前半<rt>ぜんはん</rt></ruby>がきれいな2<ruby>乗<rt>じょう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>に！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$b$ の<ruby>半分<rt>はんぶん</rt></ruby>がカギなんですね。<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>例<rt>れい</rt></ruby>で<ruby>見<rt>み</rt></ruby>たいです！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'OK！ $x^2 + 4x - 5 = 0$ を<ruby>平方完成<rt>へいほうかんせい</rt></ruby>で<ruby>解<rt>と</rt></ruby>いてみよう。',
    },
    {
      type: 'whiteboard',
      title: '$x^2 + 4x - 5 = 0$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x^2 + 4x - 5 = 0$',
          annotation: '$b = 4 \\rightarrow b/2 = 2 \\rightarrow (b/2)^2 = 4$',
        },
        {
          formula: '$(x + 2)^2 - 4 - 5 = 0$',
          animateInsert: true,
          annotation: '$x^2 + 4x$ を $(x+2)^2 - 4$ に<ruby>変換<rt>へんかん</rt></ruby>',
        },
        {
          formula: '$(x + 2)^2 = 9$',
          animateInsert: true,
          annotation: '<ruby>移項<rt>いこう</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>',
        },
        {
          formula: '$x + 2 = \\pm 3$',
          animateInsert: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>の<ruby>平方根<rt>へいほうこん</rt></ruby>をとる',
        },
        {
          formula: '$x = 1, x = -5$',
          isResult: true,
          annotation: '$x = -2+3 = 1$、$x = -2-3 = -5$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'おお！$(x+m)^2 = n$ の<ruby>形<rt>かたち</rt></ruby>にすれば $\\pm\\sqrt{n}$ で<ruby>解<rt>と</rt></ruby>けるんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>平方完成<rt>へいほうかんせい</rt></ruby>：$x^2 + bx$ を $(x + \\frac{b}{2})^2 - (\\frac{b}{2})^2$ に<ruby>変<rt>か</rt></ruby>えて<ruby>解<rt>と</rt></ruby>く！',
    },
    {
      type: 'date',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>平方完成<rt>へいほうかんせい</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>を $ax^2 + bx + c = 0$ で<ruby>一般化<rt>いっぱんか</rt></ruby>すると、$\\textcolor{#D97706}{\\text{解の公式}}$ができるよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>',
      steps: [
        {
          formula: '$ax^2 + bx + c = 0$',
          annotation: '$a, b, c$ を<ruby>代入<rt>だいにゅう</rt></ruby>するだけ！',
        },
        {
          formula: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
          animateInsert: true,
          isResult: true,
          annotation: 'どんな<ruby>二次方程式<rt>にじほうていしき</rt></ruby>でも<ruby>解<rt>と</rt></ruby>ける<ruby>万能<rt>ばんのう</rt></ruby><ruby>公式<rt>こうしき</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'すごい！ $a, b, c$ を<ruby>入<rt>い</rt></ruby>れるだけで<ruby>答<rt>こた</rt></ruby>えが<ruby>出<rt>で</rt></ruby>るんですか！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>実際<rt>じっさい</rt></ruby>にやってみよう！ $2x^2 + 5x - 3 = 0$ を<ruby>解<rt>と</rt></ruby>いてみて。$a=2, b=5, c=-3$ だよ。',
    },
    {
      type: 'whiteboard',
      title: '$2x^2 + 5x - 3 = 0$ を<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で',
      steps: [
        {
          formula: '$x = \\frac{-5 \\pm \\sqrt{25 - 4 \\times 2 \\times (-3)}}{2 \\times 2}$',
          annotation: '$a=2, b=5, c=-3$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$x = \\frac{-5 \\pm \\sqrt{25 + 24}}{4}$',
          animateInsert: true,
          annotation: '$-4 \\times 2 \\times (-3) = +24$ に<ruby>注意<rt>ちゅうい</rt></ruby>！',
        },
        {
          formula: '$x = \\frac{-5 \\pm 7}{4}$',
          animateInsert: true,
          annotation: '$\\sqrt{49} = 7$',
        },
        {
          formula: '$x = \\frac{1}{2}, x = -3$',
          isResult: true,
          annotation: '$\\frac{-5+7}{4} = \\frac{1}{2}$、$\\frac{-5-7}{4} = -3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '$x^2 + 6x + 5 = 0$ だと $b=6$ だから… $x = (6 \\pm \\ldots)$ ですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'よくある<ruby>間違<rt>まちが</rt></ruby>い！<ruby>公式<rt>こうしき</rt></ruby>は $\\textcolor{#D97706}{-b}$ だから、$b=6$ のときは $\\textcolor{#D97706}{-6}$ になるよ。$x = (-6 \\pm \\ldots)$ が<ruby>正<rt>ただ</rt></ruby>しいんだ。<ruby>符号<rt>ふごう</rt></ruby>ミスに<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '$x^2 + 2x - 3 = 0$ を<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>解<rt>と</rt></ruby>くと？（$a=1, b=2, c=-3$）',
      options: [
        { letter: 'A', text: '$x = 1, x = -3$', correct: true },
        { letter: 'B', text: '$x = -1, x = 3$', correct: false },
        { letter: 'C', text: '$x = 2, x = -3$', correct: false },
        { letter: 'D', text: '$x = -2, x = 3$', correct: false },
      ],
      explanation:
        '$x = \\frac{-2 \\pm \\sqrt{4+12}}{2} = \\frac{-2 \\pm 4}{2}$。\n$x = \\frac{2}{2} = 1$ または $x = \\frac{-6}{2} = -3$ だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>は<ruby>万能<rt>ばんのう</rt></ruby>！<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できないときの<ruby>最終兵器<rt>さいしゅうへいき</rt></ruby>',
    },
    {
      type: 'date',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>の<ruby>注意点<rt>ちゅういてん</rt></ruby>と<ruby>導出<rt>どうしゅつ</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うとき、<ruby>一番<rt>いちばん</rt></ruby><ruby>多<rt>おお</rt></ruby>いミスは<ruby>符号<rt>ふごう</rt></ruby>の<ruby>間違<rt>まちが</rt></ruby>いだよ。$b$ が<ruby>負<rt>ふ</rt></ruby>のときの $-b$ が<ruby>正<rt>せい</rt></ruby>になることと、$c$ が<ruby>負<rt>ふ</rt></ruby>のときの $-4ac$ が<ruby>正<rt>せい</rt></ruby>になることに<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '「マイナスのマイナスはプラス」ですね。あと $\\sqrt{}$ の<ruby>中<rt>なか</rt></ruby>が<ruby>残<rt>のこ</rt></ruby>るときはどうするんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！ $x^2 - 5x - 5 = 0$ をやってみよう。',
    },
    {
      type: 'whiteboard',
      title: '$\\sqrt{}$ が<ruby>残<rt>のこ</rt></ruby>る<ruby>例<rt>れい</rt></ruby>：$x^2 - 5x - 5 = 0$',
      steps: [
        {
          formula: '$x = \\frac{5 \\pm \\sqrt{25 + 20}}{2}$',
          annotation: '$a=1, b=-5, c=-5$ を<ruby>代入<rt>だいにゅう</rt></ruby>。$-b = 5$ に<ruby>注意<rt>ちゅうい</rt></ruby>！',
        },
        {
          formula: '$x = \\frac{5 \\pm \\sqrt{45}}{2}$',
          animateInsert: true,
          annotation: '$\\sqrt{45}$ をさらに<ruby>簡単<rt>かんたん</rt></ruby>にできる？',
        },
        {
          formula: '$x = \\frac{5 \\pm 3\\sqrt{5}}{2}$',
          animateInsert: true,
          isResult: true,
          annotation: '$\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$\\sqrt{}$ の<ruby>中<rt>なか</rt></ruby>を<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>して<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すんですね！<ruby>約分<rt>やくぶん</rt></ruby>も<ruby>忘<rt>わす</rt></ruby>れずにチェック！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！<ruby>最後<rt>さいご</rt></ruby>に、<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>がどうやって<ruby>生<rt>う</rt></ruby>まれたかイメージしてみよう。$ax^2 + bx + c = 0$ を<ruby>平方完成<rt>へいほうかんせい</rt></ruby>していくと…<ruby>自然<rt>しぜん</rt></ruby>にあの<ruby>公式<rt>こうしき</rt></ruby>になるんだ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>の<ruby>導出<rt>どうしゅつ</rt></ruby>イメージ',
      steps: [
        {
          formula: '$ax^2 + bx + c = 0$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を $a$ で<ruby>割<rt>わ</rt></ruby>る',
        },
        {
          formula: '$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$',
          animateInsert: true,
          annotation: '<ruby>定数項<rt>ていすうこう</rt></ruby>を<ruby>移項<rt>いこう</rt></ruby>',
        },
        {
          formula: '$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$',
          animateInsert: true,
          annotation: '<ruby>左辺<rt>さへん</rt></ruby>を<ruby>平方完成<rt>へいほうかんせい</rt></ruby>',
        },
        {
          formula: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
          isResult: true,
          annotation: '<ruby>平方根<rt>へいほうこん</rt></ruby>をとって<ruby>移項<rt>いこう</rt></ruby>すれば<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'quiz',
      question: '$x^2 - 4x + 1 = 0$ を<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>解<rt>と</rt></ruby>くと？',
      options: [
        { letter: 'A', text: '$x = 2 \\pm \\sqrt{3}$', correct: true },
        { letter: 'B', text: '$x = -2 \\pm \\sqrt{3}$', correct: false },
        { letter: 'C', text: '$x = 2 \\pm \\sqrt{5}$', correct: false },
        { letter: 'D', text: '$x = 4 \\pm \\sqrt{3}$', correct: false },
      ],
      explanation:
        '$x = \\frac{4 \\pm \\sqrt{16-4}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$。\n$\\sqrt{12} = 2\\sqrt{3}$ の<ruby>約分<rt>やくぶん</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れずに！',
    },
    {
      type: 'summary-point',
      text: '<ruby>符号<rt>ふごう</rt></ruby>ミスに<ruby>注意<rt>ちゅうい</rt></ruby>！$\\sqrt{}$ は<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>で<ruby>簡単<rt>かんたん</rt></ruby>に、<ruby>約分<rt>やくぶん</rt></ruby>も<ruby>忘<rt>わす</rt></ruby>れずに',
    },
    {
      type: 'end',
      points: [
        '<ruby>平方完成<rt>へいほうかんせい</rt></ruby>：$x^2 + bx \\rightarrow (x + \\frac{b}{2})^2 - (\\frac{b}{2})^2$',
        '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>：$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$',
        '$b^2 - 4ac > 0$ → <ruby>解<rt>かい</rt></ruby>2つ、$= 0$ → <ruby>解<rt>かい</rt></ruby>1つ、$< 0$ → <ruby>解<rt>かい</rt></ruby>なし',
        '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できないときは<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>おう',
      ],
    },
  ],
};

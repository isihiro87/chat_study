import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const quadEqFactoringChat: HistoryChat = {
  id: 'math-g3-quad-eq-factoring',
  icon: '🔧',
  title: '因数分解で二次方程式を解こう',
  subtitle: '〜中3数学〜 A×B=0の原則',
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
      text: '$A \\times B = 0$ の<ruby>原則<rt>げんそく</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>で<ruby>二次方程式<rt>にじほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>く<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぼう！まずは<ruby>大事<rt>だいじ</rt></ruby>な<ruby>原則<rt>げんそく</rt></ruby>から。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>くための<ruby>最強<rt>さいきょう</rt></ruby>ルールを<ruby>教<rt>おし</rt></ruby>えるよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>最重要<rt>さいじゅうよう</rt></ruby>ルール',
      steps: [
        {
          formula: '$A \\times B = 0$',
          annotation: '2つの<ruby>数<rt>すう</rt></ruby>をかけて0になるなら…',
        },
        {
          formula: '$A = 0$ または $B = 0$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>少<rt>すく</rt></ruby>なくともどちらかが0！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'たしかに…0に<ruby>何<rt>なに</rt></ruby>をかけても0ですもんね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！だから $(x - 2)(x - 3) = 0$ なら、$x - 2 = 0$ か $x - 3 = 0$ のどちらかが<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つんだ。',
    },
    {
      type: 'summary-point',
      text: '$A \\times B = 0 \\rightarrow A = 0$ または $B = 0$。これが<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>で<ruby>解<rt>と</rt></ruby>く<ruby>原則<rt>げんそく</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '$(x - 4)(x + 7) = 0$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = -4,7$', correct: false },
        { letter: 'B', text: '$x = 4,7$', correct: false },
        { letter: 'C', text: '$x = 4,-7$', correct: true },
        { letter: 'D', text: '$x = -4,-7$', correct: false },
      ],
      explanation:
        '$x - 4 = 0$ → $x = 4$、$x + 7 = 0$ → $x = -7$。$\\textcolor{#D97706}{x = 4, -7}$',
    },
    {
      type: 'date',
      text: '<ruby>実際<rt>じっさい</rt></ruby>に<ruby>解<rt>と</rt></ruby>いてみよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'じゃあ $x^2 - 5x + 6 = 0$ を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>で<ruby>解<rt>と</rt></ruby>いてみよう！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'まず<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>するんですよね？かけて6、たして$-5$になる<ruby>数<rt>すう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>せばいいのかな…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのとおり！<ruby>前<rt>まえ</rt></ruby>の<ruby>単元<rt>たんげん</rt></ruby>で<ruby>習<rt>なら</rt></ruby>った<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>がここで<ruby>活<rt>い</rt></ruby>きるよ！',
    },
    {
      type: 'whiteboard',
      title: '$x^2 - 5x + 6 = 0$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x^2 - 5x + 6 = 0$',
          annotation: 'かけて $+6$、たして $-5$ になる2<ruby>数<rt>すう</rt></ruby>は？',
        },
        {
          formula: '$(x - 2)(x - 3) = 0$',
          animateInsert: true,
          annotation: '$-2 \\times (-3) = 6$、$-2 + (-3) = -5$ → OK！',
        },
        {
          formula: '$x - 2 = 0 \\rightarrow x = 2$',
          annotation: '$A \\times B = 0$ の<ruby>原則<rt>げんそく</rt></ruby>で<ruby>片方<rt>かたほう</rt></ruby>ずつ',
        },
        {
          formula: '$x - 3 = 0 \\rightarrow x = 3$',
          isResult: true,
          annotation: '<ruby>答<rt>こた</rt></ruby>え：$x = 2, 3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'おお！きれいに<ruby>解<rt>と</rt></ruby>けた！<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できれば<ruby>簡単<rt>かんたん</rt></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もう1<ruby>問<rt>もん</rt></ruby>！ $x^2 - 6x = 0$ はどうかな？ちょっと<ruby>違<rt>ちが</rt></ruby>うタイプだよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>定数<rt>ていすう</rt></ruby><ruby>項<rt>こう</rt></ruby>がない…<ruby>共通因数<rt>きょうつういんすう</rt></ruby>の $x$ でくくり<ruby>出<rt>だ</rt></ruby>す？',
    },
    {
      type: 'whiteboard',
      title: '$x^2 - 6x = 0$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x^2 - 6x = 0$',
          annotation: '<ruby>共通因数<rt>きょうつういんすう</rt></ruby>の $x$ をくくり<ruby>出<rt>だ</rt></ruby>す',
        },
        {
          formula: '$x(x - 6) = 0$',
          animateInsert: true,
          annotation: '$x$ が<ruby>共通<rt>きょうつう</rt></ruby>だから $x$ でまとめる',
        },
        {
          formula: '$x = 0$ または $x - 6 = 0$',
          animateInsert: true,
          annotation: '$A \\times B = 0$ の<ruby>原則<rt>げんそく</rt></ruby>',
        },
        {
          formula: '$x = 0,6$',
          isResult: true,
          annotation: '$\\textcolor{#D97706}{x = 0}$ を<ruby>忘<rt>わす</rt></ruby>れがち！<ruby>要注意<rt>ようちゅうい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '$\\textcolor{#D97706}{x = 0 \\text{ も解}}$になることを<ruby>忘<rt>わす</rt></ruby>れないで！<ruby>両辺<rt>りょうへん</rt></ruby>を $x$ で<ruby>割<rt>わ</rt></ruby>ると $x = 0$ が<ruby>消<rt>き</rt></ruby>えちゃうから<ruby>絶対<rt>ぜったい</rt></ruby>ダメだよ。',
    },
    {
      type: 'quiz',
      question: '$x^2 + x - 12 = 0$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = -3,4$', correct: false },
        { letter: 'B', text: '$x = 3,-4$', correct: true },
        { letter: 'C', text: '$x = 2,-6$', correct: false },
        { letter: 'D', text: '$x = 6,-2$', correct: false },
      ],
      explanation:
        '$x^2 + x - 12 = (x + 4)(x - 3) = 0$。\n$x = -4$ または $x = 3$ だよ。かけて$-12$、たして$+1$になる<ruby>数<rt>すう</rt></ruby>は $+4$ と $-3$！',
    },
    {
      type: 'summary-point',
      text: '<ruby>手順<rt>てじゅん</rt></ruby>：<ruby>右辺<rt>うへん</rt></ruby>を0にする → <ruby>因数分解<rt>いんすうぶんかい</rt></ruby> → <ruby>各因数<rt>かくいんすう</rt></ruby> $= 0$ で<ruby>解<rt>と</rt></ruby>く',
    },
    {
      type: 'quiz',
      question: '$x^2 + 3x = 0$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 3$', correct: false },
        { letter: 'B', text: '$x = 0,-3$', correct: true },
        { letter: 'C', text: '$x = 0,3$', correct: false },
        { letter: 'D', text: '$x = -3$', correct: false },
      ],
      explanation:
        '$x(x+3) = 0$ と<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>。$x = 0$ または $x + 3 = 0$ → $\\textcolor{#D97706}{x = 0, -3}$',
    },
    {
      type: 'date',
      text: '<ruby>完全平方式<rt>かんぜんへいほうしき</rt></ruby>と<ruby>解<rt>かい</rt></ruby>が1つだけのパターン',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>特別<rt>とくべつ</rt></ruby>なパターンだよ。$x^2 - 2x + 1 = 0$ を<ruby>解<rt>と</rt></ruby>いてみて！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えっと…かけて1、たして$-2$になる<ruby>数<rt>すう</rt></ruby>は…$-1$ と $-1$ ！',
    },
    {
      type: 'whiteboard',
      title: '$x^2 - 2x + 1 = 0$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x^2 - 2x + 1 = 0$',
          annotation: '$x^2 - 2 \\times 1 \\times x + 1^2$ の<ruby>形<rt>かたち</rt></ruby>！',
        },
        {
          formula: '$(x - 1)^2 = 0$',
          animateInsert: true,
          annotation: '<ruby>完全平方式<rt>かんぜんへいほうしき</rt></ruby>で<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
        },
        {
          formula: '$x - 1 = 0 \\rightarrow x = 1$',
          isResult: true,
          annotation: '<ruby>解<rt>かい</rt></ruby>が1つだけ → <ruby>解<rt>かい</rt></ruby>が$\\textcolor{#D97706}{\\text{1つだけ}}$になる！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>解<rt>かい</rt></ruby>が1つだけ!? <ruby>二次方程式<rt>にじほうていしき</rt></ruby>なのに？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '「$x = 1$ と $x = 1$」で<ruby>同<rt>おな</rt></ruby>じ<ruby>値<rt>あたい</rt></ruby>が2つ<ruby>重<rt>かさ</rt></ruby>なっているんだ。だから<ruby>解<rt>かい</rt></ruby>は1つだけになるんだ！',
    },
    {
      type: 'summary-point',
      text: '$(x - a)^2 = 0$ → $x = a$。<ruby>解<rt>かい</rt></ruby>が1つだけになるパターン！',
    },
    {
      type: 'quiz',
      question: '$x^2 + 6x + 9 = 0$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 3$', correct: false },
        { letter: 'B', text: '$x = -3,3$', correct: false },
        { letter: 'C', text: '$x = -9$', correct: false },
        { letter: 'D', text: '$x = -3$', correct: true },
      ],
      explanation:
        '$(x+3)^2 = 0$ なので $x + 3 = 0$ → $x = \\textcolor{#D97706}{-3}$',
    },
    {
      type: 'date',
      text: '$x^2 - a^2 = 0$ の<ruby>差<rt>さ</rt></ruby>の<ruby>平方<rt>へいほう</rt></ruby>パターン',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$x^2 - 9 = 0$ を<ruby>解<rt>と</rt></ruby>いてごらん。<ruby>定数<rt>ていすう</rt></ruby><ruby>項<rt>こう</rt></ruby>がマイナスだね。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$x^2 - 3^2$ だから…<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>ですね！$(x + 3)(x - 3) = 0$ ！',
    },
    {
      type: 'whiteboard',
      title: '$x^2 - 9 = 0$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x^2 - 9 = 0$',
          annotation: '$x^2 - 3^2$ の<ruby>形<rt>かたち</rt></ruby>',
        },
        {
          formula: '$(x + 3)(x - 3) = 0$',
          animateInsert: true,
          annotation: '$a^2 - b^2 = (a + b)(a - b)$ を<ruby>使<rt>つか</rt></ruby>う',
        },
        {
          formula: '$x = -3$ または $x = 3$',
          isResult: true,
          annotation: '<ruby>答<rt>こた</rt></ruby>え：$x = \\pm 3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！ $x^2 = 9$ と<ruby>変形<rt>へんけい</rt></ruby>して $x = \\pm 3$ でもOKだけど、<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>でも<ruby>解<rt>と</rt></ruby>けるのがポイントだよ。',
    },
    {
      type: 'quiz',
      question: '$x^2 - 25 = 0$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = \\pm 5$', correct: true },
        { letter: 'B', text: '$x = 5$', correct: false },
        { letter: 'C', text: '$x = \\pm 25$', correct: false },
        { letter: 'D', text: '$x = 25$', correct: false },
      ],
      explanation:
        '$x^2 - 25 = (x + 5)(x - 5) = 0$。\n$x = 5$ または $x = -5$ だよ。',
    },
    {
      type: 'date',
      text: '<ruby>係数<rt>けいすう</rt></ruby>をそろえる<ruby>テクニック<rt>てくにっく</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>に、$-4x^2 + 8x - 4 = 0$ のように $x^2$ の<ruby>係数<rt>けいすう</rt></ruby>が1じゃないパターンだよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'うわ、$x^2$ に $-4$ がついてる…<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できるのかな？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'まず<ruby>全体<rt>ぜんたい</rt></ruby>を $-4$ で<ruby>割<rt>わ</rt></ruby>ってみよう！そうすれば<ruby>見慣<rt>みな</rt></ruby>れた<ruby>形<rt>かたち</rt></ruby>になるよ。',
    },
    {
      type: 'whiteboard',
      title: '$-4x^2 + 8x - 4 = 0$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$-4x^2 + 8x - 4 = 0$',
          annotation: '<ruby>全体<rt>ぜんたい</rt></ruby>を $-4$ で<ruby>割<rt>わ</rt></ruby>る',
        },
        {
          formula: '$x^2 - 2x + 1 = 0$',
          animateInsert: true,
          annotation: '<ruby>見慣<rt>みな</rt></ruby>れた<ruby>形<rt>かたち</rt></ruby>になった！',
        },
        {
          formula: '$(x - 1)^2 = 0$',
          animateInsert: true,
          annotation: '<ruby>完全平方式<rt>かんぜんへいほうしき</rt></ruby>で<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
        },
        {
          formula: '$x = 1$',
          isResult: true,
          annotation: 'まず<ruby>係数<rt>けいすう</rt></ruby>をそろえるのがコツ！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！<ruby>割<rt>わ</rt></ruby>って<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すればいいんですね！',
    },
    {
      type: 'summary-point',
      text: '$x^2$ の<ruby>係数<rt>けいすう</rt></ruby>が1でないときは、<ruby>全体<rt>ぜんたい</rt></ruby>を<ruby>割<rt>わ</rt></ruby>って<ruby>係数<rt>けいすう</rt></ruby>を1にそろえてから<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '$3x^2 - 12x + 12 = 0$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 2$', correct: true },
        { letter: 'B', text: '$x = -2$', correct: false },
        { letter: 'C', text: '$x = 2,-2$', correct: false },
        { letter: 'D', text: '$x = 4$', correct: false },
      ],
      explanation:
        '3で<ruby>割<rt>わ</rt></ruby>ると $x^2 - 4x + 4 = 0$ → $(x-2)^2 = 0$ → $x = \\textcolor{#D97706}{2}$',
    },
    {
      type: 'end',
      points: [
        '$A \\times B = 0 \\rightarrow A = 0$ または $B = 0$ が<ruby>大原則<rt>だいげんそく</rt></ruby>',
        'まず<ruby>右辺<rt>うへん</rt></ruby>を0にして<ruby>左辺<rt>さへん</rt></ruby>を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
        '$x(x - a) = 0$ のとき、$x = 0$ も<ruby>解<rt>かい</rt></ruby>になる！',
        '$(x - a)^2 = 0$ → $x = a$',
        '$x^2 - a^2 = 0$ → $(x+a)(x-a) = 0$ → $x = \\pm a$',
        '<ruby>係数<rt>けいすう</rt></ruby>が1でないときは<ruby>割<rt>わ</rt></ruby>って<ruby>整理<rt>せいり</rt></ruby>してから<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
      ],
    },
  ],
};

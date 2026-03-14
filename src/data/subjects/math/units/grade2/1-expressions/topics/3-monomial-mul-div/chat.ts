import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const monomialMulDivChat: HistoryChat = {
  id: 'math-g2-mono-mul-div',
  icon: '✖️',
  title: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>乗法<rt>じょうほう</rt></ruby>・<ruby>除法<rt>じょほう</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>2<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>係数<rt>けいすう</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>を<ruby>分<rt>わ</rt></ruby>けて<ruby>計算<rt>けいさん</rt></ruby>',
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
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>どうしのかけ<ruby>算<rt>ざん</rt></ruby>は、<ruby>係数<rt>けいすう</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>を<ruby>分<rt>わ</rt></ruby>けて<ruby>考<rt>かんが</rt></ruby>えるのがコツ！<ruby>指数<rt>しすう</rt></ruby>の<ruby>法則<rt>ほうそく</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>学<rt>まな</rt></ruby>ぼう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>はカンタン！<ruby>係数<rt>けいすう</rt></ruby>は<ruby>係数<rt>けいすう</rt></ruby>どうし、<ruby>文字<rt>もじ</rt></ruby>は<ruby>文字<rt>もじ</rt></ruby>どうしをかけるんだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$3x^2 \\times 5x^3 = ?$',
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>を<ruby>分<rt>わ</rt></ruby>けて<ruby>考<rt>かんが</rt></ruby>えよう',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>係数<rt>けいすう</rt></ruby>は $3 \\times 5 = 15$ ですよね。<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>はどうすれば…？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>をかけるときは<strong><ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す</strong>んだ！ $x^2 \\times x^3$ なら $2 + 3 = 5$ で $x^5$ になるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>指数<rt>しすう</rt></ruby>の<ruby>法則<rt>ほうそく</rt></ruby>',
      steps: [
        {
          formula: '$3x^2 \\times 5x^3$',
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>を<ruby>分<rt>わ</rt></ruby>けよう',
        },
        {
          formula: '$(3 \\times 5) \\times (x^2 \\times x^3)$',
          animateInsert: true,
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>どうし、<ruby>文字<rt>もじ</rt></ruby>どうしに<ruby>分<rt>わ</rt></ruby>ける',
        },
        {
          formula: '$15 \\times x^{2+3}$',
          animateInsert: true,
          annotation: '<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す！',
        },
        {
          formula: '$15x^5$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>完成<rt>かんせい</rt></ruby>！<ruby>係数<rt>けいすう</rt></ruby>は<ruby>普通<rt>ふつう</rt></ruby>にかけて、<ruby>指数<rt>しすう</rt></ruby>は<ruby>足<rt>た</rt></ruby>す！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$x^2 \\times x^3$ は $x \\times x \\times x \\times x \\times x$ で $x^5$ になるってことか！<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>すのは<ruby>理<rt>り</rt></ruby>にかなってますね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>: <ruby>係数<rt>けいすう</rt></ruby>は<ruby>普通<rt>ふつう</rt></ruby>にかけて、<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す！',
    },
    {
      type: 'date',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>は<ruby>分数<rt>ぶんすう</rt></ruby>にして<ruby>約分<rt>やくぶん</rt></ruby>！<ruby>指数<rt>しすう</rt></ruby>は<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>になるよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>！<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>は<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>にして<ruby>約分<rt>やくぶん</rt></ruby>するのがポイントだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$12a^3b \\div 4ab = ?$',
          annotation: 'まず<ruby>分数<rt>ぶんすう</rt></ruby>にしてみよう',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>にするって、$\\frac{12a^3b}{4ab}$ にすればいいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのとおり！あとは<ruby>係数<rt>けいすう</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>をそれぞれ<ruby>約分<rt>やくぶん</rt></ruby>するだけだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$12a^3b \\div 4ab$',
          annotation: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>に<ruby>変<rt>か</rt></ruby>える',
        },
        {
          formula: '$\\frac{12a^3b}{4ab}$',
          animateInsert: true,
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>をそれぞれ<ruby>約分<rt>やくぶん</rt></ruby>！',
        },
        {
          formula: '$\\frac{12}{4} \\times \\frac{a^3}{a} \\times \\frac{b}{b}$',
          animateInsert: true,
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>: $12 \\div 4 = 3$, <ruby>文字<rt>もじ</rt></ruby>: <ruby>指数<rt>しすう</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く',
        },
        {
          formula: '$3a^2$',
          isResult: true,
          animateInsert: true,
          annotation: '$a^3 \\div a = a^2$, $b \\div b = 1$（<ruby>消<rt>き</rt></ruby>える）で<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'かけ<ruby>算<rt>ざん</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す、<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く！セットで<ruby>覚<rt>おぼ</rt></ruby>えます！',
    },
    {
      type: 'summary-point',
      text: '<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>: <ruby>分数<rt>ぶんすう</rt></ruby>にして<ruby>約分<rt>やくぶん</rt></ruby>。<ruby>係数<rt>けいすう</rt></ruby>は<ruby>普通<rt>ふつう</rt></ruby>に<ruby>割<rt>わ</rt></ruby>って、<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '$x^2 \\times x^3 = x^6$ ですよね？<ruby>指数<rt>しすう</rt></ruby>をかけるんでしたっけ？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'よくある<ruby>間違<rt>まちが</rt></ruby>い！かけ<ruby>算<rt>ざん</rt></ruby>では<ruby>指数<rt>しすう</rt></ruby>は<strong>「<ruby>足<rt>た</rt></ruby>す」</strong>だよ。$x^2 \\times x^3 = x^{2+3} = x^5$。<ruby>指数<rt>しすう</rt></ruby>どうしを「かける」のは <ruby>累乗<rt>るいじょう</rt></ruby>の<ruby>累乗<rt>るいじょう</rt></ruby> $(x^2)^3$ のときだけ！',
    },
    {
      type: 'quiz',
      question: '$6x^3y \\times (-2xy^2)$ の<ruby>答<rt>こた</rt></ruby>えは？',
      options: [
        { letter: 'A', text: '$-12x^4y^3$', correct: true },
        { letter: 'B', text: '$12x^4y^3$', correct: false },
        { letter: 'C', text: '$-12x^3y^2$', correct: false },
        { letter: 'D', text: '$-8x^4y^3$', correct: false },
      ],
      explanation:
        '<ruby>係数<rt>けいすう</rt></ruby>: $6 \\times (-2) = -12$、$x$: $x^3 \\times x = x^4$、$y$: $y \\times y^2 = y^3$ で $\\textcolor{#D97706}{-12x^4y^3}$',
    },
    {
      type: 'end',
      points: [
        'かけ<ruby>算<rt>ざん</rt></ruby>: <ruby>係数<rt>けいすう</rt></ruby>は<ruby>普通<rt>ふつう</rt></ruby>にかけて、<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>は<ruby>指数<rt>しすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す',
        '<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>: <ruby>分数<rt>ぶんすう</rt></ruby>にして<ruby>約分<rt>やくぶん</rt></ruby>。<ruby>指数<rt>しすう</rt></ruby>は<ruby>引<rt>ひ</rt></ruby>く',
        '$(-2x)^3 = -8x^3$ のようにマイナスの<ruby>累乗<rt>るいじょう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>',
        '<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>で<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>が<ruby>消<rt>き</rt></ruby>えるケースも<ruby>忘<rt>わす</rt></ruby>れずに',
      ],
    },
  ],
};

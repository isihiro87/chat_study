import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const rationalizationChat: HistoryChat = {
  id: 'math-g3-rationalization',
  icon: '📐',
  title: '分母の有理化をマスターしよう',
  subtitle: '〜中3数学〜 分母の√をなくそう',
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
      text: '<ruby>分母<rt>ぶんぼ</rt></ruby>にルートがあると<ruby>困<rt>こま</rt></ruby>る？',
    },
    {
      type: 'narrator',
      text: '<ruby>分母<rt>ぶんぼ</rt></ruby>のルートを<ruby>消<rt>け</rt></ruby>す<ruby>技<rt>わざ</rt></ruby>、<strong>「<ruby>有理化<rt>ゆうりか</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$\\frac{1}{\\sqrt{2}}$ という<ruby>式<rt>しき</rt></ruby>があるとするよ。<ruby>分母<rt>ぶんぼ</rt></ruby>が $\\sqrt{2} = 1.414...$ みたいな<ruby>無限小数<rt>むげんしょうすう</rt></ruby>だと、<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>がとても<ruby>大変<rt>たいへん</rt></ruby>だよね。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'たしかに、$1 \\div 1.414...$ は<ruby>計算<rt>けいさん</rt></ruby>しにくいです……。<ruby>分母<rt>ぶんぼ</rt></ruby>が<ruby>整数<rt>せいすう</rt></ruby>ならもっと<ruby>楽<rt>らく</rt></ruby>なのに。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そこで<ruby>使<rt>つか</rt></ruby>うのが<strong>「<ruby>有理化<rt>ゆうりか</rt></ruby>」</strong>！<ruby>分母<rt>ぶんぼ</rt></ruby>のルートを<ruby>消<rt>け</rt></ruby>すテクニックだよ。',
    },
    {
      type: 'date',
      text: '<ruby>有理化<rt>ゆうりか</rt></ruby>のやり<ruby>方<rt>かた</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ポイントは<ruby>簡単<rt>かんたん</rt></ruby>！<ruby>分母<rt>ぶんぼ</rt></ruby>と<ruby>分子<rt>ぶんし</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じルートをかけるだけだよ。',
    },
    {
      type: 'whiteboard',
      title: '$\\frac{1}{\\sqrt{2}}$ の<ruby>有理化<rt>ゆうりか</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{1}{\\sqrt{2}}$',
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby>にルートがある',
        },
        {
          formula: '$= \\frac{1 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}}$',
          animateInsert: true,
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby><ruby>分子<rt>ぶんし</rt></ruby>に $\\sqrt{2}$ をかける',
        },
        {
          formula: '$= \\frac{\\sqrt{2}}{2}$',
          isResult: true,
          animateInsert: true,
          annotation: '$\\sqrt{2} \\times \\sqrt{2} = 2$ でルートが<ruby>消<rt>き</rt></ruby>えた！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'おお！ $\\sqrt{a} \\times \\sqrt{a} = a$ になるから、ルートが<ruby>消<rt>き</rt></ruby>えるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのとおり！<ruby>分母<rt>ぶんぼ</rt></ruby><ruby>分子<rt>ぶんし</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>をかけても<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>は<ruby>変<rt>か</rt></ruby>わらないからね。',
    },
    {
      type: 'summary-point',
      text: '<ruby>有理化<rt>ゆうりか</rt></ruby>のコツ: <ruby>分母<rt>ぶんぼ</rt></ruby><ruby>分子<rt>ぶんし</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{}$ をかける → $\\sqrt{a} \\times \\sqrt{a} = a$ で<ruby>消<rt>き</rt></ruby>える！',
    },
    {
      type: 'quiz',
      question: '$\\frac{1}{\\sqrt{5}}$ を<ruby>有理化<rt>ゆうりか</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$\\frac{1}{5}$', correct: false },
        { letter: 'B', text: '$\\frac{\\sqrt{5}}{5}$', correct: true },
        { letter: 'C', text: '$\\frac{5}{\\sqrt{5}}$', correct: false },
        { letter: 'D', text: '$\\frac{\\sqrt{5}}{25}$', correct: false },
      ],
      explanation:
        '$\\frac{1}{\\sqrt{5}} = \\frac{1 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}} = \\frac{\\sqrt{5}}{5}$\n<ruby>分母<rt>ぶんぼ</rt></ruby><ruby>分子<rt>ぶんし</rt></ruby>に $\\sqrt{5}$ をかけるよ。',
    },
    {
      type: 'date',
      text: '<ruby>練習<rt>れんしゅう</rt></ruby>してみよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'じゃあ<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しいのをやってみよう。$\\frac{3}{\\sqrt{5}}$ を<ruby>有理化<rt>ゆうりか</rt></ruby>して！',
    },
    {
      type: 'whiteboard',
      title: '$\\frac{3}{\\sqrt{5}}$ の<ruby>有理化<rt>ゆうりか</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{3}{\\sqrt{5}}$',
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby><ruby>分子<rt>ぶんし</rt></ruby>に $\\sqrt{5}$ をかける',
        },
        {
          formula: '$= \\frac{3 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}}$',
          animateInsert: true,
          annotation: '<ruby>分子<rt>ぶんし</rt></ruby>は $3\\sqrt{5}$、<ruby>分母<rt>ぶんぼ</rt></ruby>は 5',
        },
        {
          formula: '$= \\frac{3\\sqrt{5}}{5}$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>完成<rt>かんせい</rt></ruby>！<ruby>約分<rt>やくぶん</rt></ruby>できるかもチェック',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>分子<rt>ぶんし</rt></ruby>に<ruby>数<rt>かず</rt></ruby>があっても、やり<ruby>方<rt>かた</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>約分<rt>やくぶん</rt></ruby>できるときは<ruby>最後<rt>さいご</rt></ruby>に<ruby>約分<rt>やくぶん</rt></ruby>するのも<ruby>忘<rt>わす</rt></ruby>れずにね！ $\\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$ のようにね。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '$\\frac{3}{\\sqrt{5}}$ の<ruby>有理化<rt>ゆうりか</rt></ruby>って、<ruby>分母<rt>ぶんぼ</rt></ruby>だけに $\\sqrt{5}$ をかければ $\\frac{3}{5}$ になりませんか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'よくある<ruby>間違<rt>まちが</rt></ruby>い！<ruby>分母<rt>ぶんぼ</rt></ruby>だけにかけたら<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>が<ruby>変<rt>か</rt></ruby>わっちゃうよ。$\\textcolor{#D97706}{\\text{分母と分子の両方}}$に<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{5}$ をかけるのがルール！',
    },
    {
      type: 'quiz',
      question: '$\\frac{4}{\\sqrt{2}}$ を<ruby>有理化<rt>ゆうりか</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$2\\sqrt{2}$', correct: true },
        { letter: 'B', text: '$4\\sqrt{2}$', correct: false },
        { letter: 'C', text: '$\\frac{\\sqrt{2}}{4}$', correct: false },
        { letter: 'D', text: '$\\frac{4\\sqrt{2}}{4}$', correct: false },
      ],
      explanation:
        '$\\frac{4}{\\sqrt{2}} = \\frac{4 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$\n<ruby>有理化<rt>ゆうりか</rt></ruby>してから<ruby>約分<rt>やくぶん</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '<ruby>有理化<rt>ゆうりか</rt></ruby>のあとは<ruby>約分<rt>やくぶん</rt></ruby>チェック！ $\\frac{6}{\\sqrt{2}} \\rightarrow \\frac{6\\sqrt{2}}{2} \\rightarrow 3\\sqrt{2}$',
    },
    {
      type: 'quiz',
      question: '$\\frac{10}{\\sqrt{5}}$ を<ruby>有理化<rt>ゆうりか</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$\\frac{10\\sqrt{5}}{5}$', correct: false },
        { letter: 'B', text: '$10\\sqrt{5}$', correct: false },
        { letter: 'C', text: '$2\\sqrt{5}$', correct: true },
        { letter: 'D', text: '$5\\sqrt{2}$', correct: false },
      ],
      explanation:
        '$\\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$\n<ruby>有理化<rt>ゆうりか</rt></ruby>のあと $10 \\div 5 = 2$ で<ruby>約分<rt>やくぶん</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>分母<rt>ぶんぼ</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>有理化<rt>ゆうりか</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$\\frac{4}{\\sqrt{8}}$ のように<ruby>分母<rt>ぶんぼ</rt></ruby>の $\\sqrt{}$ の<ruby>中<rt>なか</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいときは、<ruby>先<rt>さき</rt></ruby>に<ruby>簡単<rt>かんたん</rt></ruby>にすると<ruby>楽<rt>らく</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '$\\frac{4}{\\sqrt{8}}$ の<ruby>有理化<rt>ゆうりか</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{4}{\\sqrt{8}} = \\frac{4}{2\\sqrt{2}}$',
          annotation: '$\\sqrt{8} = 2\\sqrt{2}$ に<ruby>変形<rt>へんけい</rt></ruby>',
        },
        {
          formula: '$= \\frac{2}{\\sqrt{2}}$',
          animateInsert: true,
          annotation: '<ruby>約分<rt>やくぶん</rt></ruby>して<ruby>簡単<rt>かんたん</rt></ruby>にする',
        },
        {
          formula: '$= \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>有理化<rt>ゆうりか</rt></ruby>してさらに<ruby>約分<rt>やくぶん</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>先<rt>さき</rt></ruby>に $\\sqrt{8}$ を $2\\sqrt{2}$ にしたから<ruby>計算<rt>けいさん</rt></ruby>が<ruby>簡単<rt>かんたん</rt></ruby>になりましたね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'もう<ruby>一<rt>ひと</rt></ruby>つ！ $\\frac{6}{\\sqrt{12}} = \\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$ だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>分母<rt>ぶんぼ</rt></ruby>の $\\sqrt{}$ が<ruby>大<rt>おお</rt></ruby>きいときは、<ruby>先<rt>さき</rt></ruby>に<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>有理化<rt>ゆうりか</rt></ruby>しよう！',
    },
    {
      type: 'quiz',
      question: '$\\frac{6}{\\sqrt{12}}$ を<ruby>有理化<rt>ゆうりか</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$\\frac{6\\sqrt{12}}{12}$', correct: false },
        { letter: 'B', text: '$2\\sqrt{3}$', correct: false },
        { letter: 'C', text: '$\\frac{\\sqrt{3}}{2}$', correct: false },
        { letter: 'D', text: '$\\sqrt{3}$', correct: true },
      ],
      explanation:
        '<ruby>先<rt>さき</rt></ruby>に $\\sqrt{12} = 2\\sqrt{3}$ にして、$\\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$。',
    },
    {
      type: 'date',
      text: '$\\sqrt{}$をふくむ<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$\\sqrt{2} = 1.414$ として $\\frac{1}{\\sqrt{2}}$ の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めるときは、<ruby>先<rt>さき</rt></ruby>に<ruby>有理化<rt>ゆうりか</rt></ruby>するのがコツ！',
    },
    {
      type: 'whiteboard',
      title: '$\\frac{1}{\\sqrt{2}}$ の<ruby>値<rt>あたい</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
          annotation: '<ruby>先<rt>さき</rt></ruby>に<ruby>有理化<rt>ゆうりか</rt></ruby>',
        },
        {
          formula: '$= \\frac{1.414}{2} = 0.707$',
          isResult: true,
          animateInsert: true,
          annotation: '$\\sqrt{2} = 1.414$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>有理化<rt>ゆうりか</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>するほうが<ruby>計算<rt>けいさん</rt></ruby>しやすいですね！',
    },
    {
      type: 'quiz',
      question: '$\\sqrt{3} = 1.732$ として $\\frac{6}{\\sqrt{3}}$ の<ruby>値<rt>あたい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$3.464$', correct: true },
        { letter: 'B', text: '$1.732$', correct: false },
        { letter: 'C', text: '$5.196$', correct: false },
        { letter: 'D', text: '$0.577$', correct: false },
      ],
      explanation:
        '$\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3} = 2 \\times 1.732 = 3.464$\n<ruby>有理化<rt>ゆうりか</rt></ruby>→<ruby>約分<rt>やくぶん</rt></ruby>→<ruby>代入<rt>だいにゅう</rt></ruby>の<ruby>順<rt>じゅん</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めるときは、<ruby>先<rt>さき</rt></ruby>に<ruby>有理化<rt>ゆうりか</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>しよう！',
    },
    {
      type: 'end',
      points: [
        '<ruby>有理化<rt>ゆうりか</rt></ruby> = <ruby>分母<rt>ぶんぼ</rt></ruby>のルートを<ruby>消<rt>け</rt></ruby>すこと',
        '<ruby>分母<rt>ぶんぼ</rt></ruby><ruby>分子<rt>ぶんし</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{}$ をかける',
        '<ruby>分母<rt>ぶんぼ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいときは<ruby>先<rt>さき</rt></ruby>に<ruby>簡単<rt>かんたん</rt></ruby>にする',
        '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>は<ruby>有理化<rt>ゆうりか</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>',
      ],
    },
  ],
};

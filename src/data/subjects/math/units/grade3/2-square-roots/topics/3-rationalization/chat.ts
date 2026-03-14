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
      text: '$\\frac{1}{\\sqrt{2}}$ という<ruby>式<rt>しき</rt></ruby>があるとするよ。<ruby>分母<rt>ぶんぼ</rt></ruby>にルートがあると<ruby>計算<rt>けいさん</rt></ruby>しにくいよね。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'たしかに、<ruby>分母<rt>ぶんぼ</rt></ruby>が $\\sqrt{2}$ だと<ruby>大<rt>おお</rt></ruby>きさがわかりにくいです……。',
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
        { letter: 'A', text: '$4\\sqrt{2}$', correct: false },
        { letter: 'B', text: '$2\\sqrt{2}$', correct: true },
        { letter: 'C', text: '$\\frac{\\sqrt{2}}{4}$', correct: false },
        { letter: 'D', text: '$\\frac{4\\sqrt{2}}{4}$', correct: false },
      ],
      explanation:
        '$\\frac{4}{\\sqrt{2}} = \\frac{4 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$。<ruby>有理化<rt>ゆうりか</rt></ruby>してから<ruby>約分<rt>やくぶん</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '<ruby>有理化<rt>ゆうりか</rt></ruby>のあとは<ruby>約分<rt>やくぶん</rt></ruby>チェック！ $\\frac{6}{\\sqrt{2}} \\rightarrow \\frac{6\\sqrt{2}}{2} \\rightarrow 3\\sqrt{2}$',
    },
    {
      type: 'end',
      points: [
        '<ruby>有理化<rt>ゆうりか</rt></ruby> = <ruby>分母<rt>ぶんぼ</rt></ruby>のルートを<ruby>消<rt>け</rt></ruby>すこと',
        '<ruby>分母<rt>ぶんぼ</rt></ruby><ruby>分子<rt>ぶんし</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{}$ をかける',
        '$\\sqrt{a} \\times \\sqrt{a} = a$ でルートが<ruby>消<rt>き</rt></ruby>える',
        '<ruby>最後<rt>さいご</rt></ruby>に<ruby>約分<rt>やくぶん</rt></ruby>できるかチェック',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const sqrtMulDivChat: HistoryChat = {
  id: 'math-g3-sqrt-mul-div',
  icon: '✖️',
  title: '根号の乗法・除法をマスターしよう',
  subtitle: '〜中3数学〜 √の中身どうしを計算',
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
      text: 'ルートのかけ<ruby>算<rt>ざん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '$\\sqrt{}$のかけ<ruby>算<rt>ざん</rt></ruby>・わり<ruby>算<rt>ざん</rt></ruby>のルールを<ruby>学<rt>まな</rt></ruby>ぼう！<ruby>意外<rt>いがい</rt></ruby>とシンプルだよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ルートどうしのかけ<ruby>算<rt>ざん</rt></ruby>は、<ruby>中身<rt>なかみ</rt></ruby>どうしをかけるだけ！ $\\sqrt{2} \\times \\sqrt{3}$ をやってみよう。',
    },
    {
      type: 'whiteboard',
      title: 'ルートの<ruby>乗法<rt>じょうほう</rt></ruby>',
      steps: [
        {
          formula: '$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$',
          annotation: '<ruby>中身<rt>なかみ</rt></ruby>どうしをかけてルートの<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れる',
        },
        {
          formula: '$\\sqrt{2} \\times \\sqrt{3} = \\sqrt{2 \\times 3} = \\sqrt{6}$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>簡単<rt>かんたん</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'えっ、そんなに<ruby>簡単<rt>かんたん</rt></ruby>なんですか！<ruby>中身<rt>なかみ</rt></ruby>をかけるだけでいいんですね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'わり<ruby>算<rt>ざん</rt></ruby>も<ruby>同<rt>おな</rt></ruby>じだよ。$\\sqrt{a} \\div \\sqrt{b} = \\sqrt{\\frac{a}{b}}$ になるんだ。',
    },
    {
      type: 'whiteboard',
      title: 'ルートの<ruby>除法<rt>じょほう</rt></ruby>',
      steps: [
        {
          formula: '$\\sqrt{10} \\div \\sqrt{2} = \\sqrt{10 \\div 2}$',
          annotation: '<ruby>中身<rt>なかみ</rt></ruby>どうしをわる',
        },
        {
          formula: '$= \\sqrt{5}$',
          isResult: true,
          annotation: 'これだけ！',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$、$\\sqrt{a} \\div \\sqrt{b} = \\sqrt{\\frac{a}{b}}$。<ruby>中身<rt>なかみ</rt></ruby>どうしを<ruby>計算<rt>けいさん</rt></ruby>するだけ！',
    },
    {
      type: 'date',
      text: '$\\sqrt{}$の<ruby>中<rt>なか</rt></ruby>を<ruby>小<rt>ちい</rt></ruby>さくしよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$\\sqrt{12}$ みたいに<ruby>中身<rt>なかみ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいときは、<ruby>簡単<rt>かんたん</rt></ruby>にできるよ。<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>がカギだ！',
    },
    {
      type: 'whiteboard',
      title: '$\\sqrt{12}$ を<ruby>簡単<rt>かんたん</rt></ruby>にする',
      steps: [
        {
          formula: '$\\sqrt{12} = \\sqrt{4 \\times 3}$',
          annotation: '12を<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>して<ruby>完全平方数<rt>かんぜんへいほうすう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つける',
        },
        {
          formula: '$= \\sqrt{4} \\times \\sqrt{3}$',
          animateInsert: true,
          annotation: 'ルートを<ruby>分<rt>わ</rt></ruby>ける',
        },
        {
          formula: '$= 2\\sqrt{3}$',
          isResult: true,
          animateInsert: true,
          annotation: '$\\sqrt{4} = 2$ を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>す！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>完全平方数<rt>かんぜんへいほうすう</rt></ruby>（4とか9とか16）を<ruby>見<rt>み</rt></ruby>つけて<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！もう<ruby>一<rt>ひと</rt></ruby>つやってみよう。$\\sqrt{48}$ は？',
    },
    {
      type: 'whiteboard',
      title: '$\\sqrt{48}$ を<ruby>簡単<rt>かんたん</rt></ruby>にする',
      steps: [
        {
          formula: '$\\sqrt{48} = \\sqrt{16 \\times 3}$',
          annotation: '$48 = 16 \\times 3$（$16 = 4^2$）',
        },
        {
          formula: '$= 4\\sqrt{3}$',
          isResult: true,
          annotation: '$\\sqrt{16} = 4$ を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>す',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'できた！<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>して<ruby>完全平方数<rt>かんぜんへいほうすう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>すのがコツですね！',
    },
    {
      type: 'quiz',
      question: '$\\sqrt{50}$ を<ruby>簡単<rt>かんたん</rt></ruby>にすると？',
      options: [
        { letter: 'A', text: '$5\\sqrt{2}$', correct: true },
        { letter: 'B', text: '$2\\sqrt{5}$', correct: false },
        { letter: 'C', text: '$25\\sqrt{2}$', correct: false },
        { letter: 'D', text: '$10\\sqrt{5}$', correct: false },
      ],
      explanation:
        '$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$。$25 = 5^2$ を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すよ。',
    },
    {
      type: 'summary-point',
      text: '$\\sqrt{}$の<ruby>中<rt>なか</rt></ruby>を<ruby>小<rt>ちい</rt></ruby>さくするには、<ruby>完全平方数<rt>かんぜんへいほうすう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけて<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>す！',
    },
    {
      type: 'end',
      points: [
        '$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$（<ruby>中身<rt>なかみ</rt></ruby>をかける）',
        '$\\sqrt{a} \\div \\sqrt{b} = \\sqrt{\\frac{a}{b}}$（<ruby>中身<rt>なかみ</rt></ruby>をわる）',
        '$\\sqrt{12} = 2\\sqrt{3}$（<ruby>完全平方数<rt>かんぜんへいほうすう</rt></ruby>を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>す）',
        '<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>で<ruby>整理<rt>せいり</rt></ruby>しよう',
      ],
    },
  ],
};

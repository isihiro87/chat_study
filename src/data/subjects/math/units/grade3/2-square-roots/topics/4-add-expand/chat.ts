import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const sqrtAddExpandChat: HistoryChat = {
  id: 'math-g3-sqrt-add-expand',
  icon: '➕',
  title: '根号の和差と展開を学ぼう',
  subtitle: '〜中3数学〜 同じ√はまとめられる',
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
      text: 'ルートの<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>・<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>同<rt>おな</rt></ruby>じルートどうしは<ruby>文字式<rt>もじしき</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じようにまとめられるよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$3x + 5x = 8x$ ができるように、$3\\sqrt{2} + 5\\sqrt{2}$ も<ruby>計算<rt>けいさん</rt></ruby>できるよ。やってみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>同<rt>おな</rt></ruby>じルートの<ruby>和差<rt>わさ</rt></ruby>',
      steps: [
        {
          formula: '$3\\sqrt{2} + 5\\sqrt{2}$',
          annotation: '$\\sqrt{2}$ が<ruby>同<rt>おな</rt></ruby>じ → まとめられる！',
        },
        {
          formula: '$= (3 + 5)\\sqrt{2}$',
          animateInsert: true,
          annotation: '<ruby>前<rt>まえ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>だけ<ruby>足<rt>た</rt></ruby>す',
        },
        {
          formula: '$= 8\\sqrt{2}$',
          isResult: true,
          annotation: '<ruby>文字式<rt>もじしき</rt></ruby>の<ruby>同類項<rt>どうるいこう</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>文字<rt>もじ</rt></ruby>の<ruby>代<rt>か</rt></ruby>わりにルートが<ruby>入<rt>はい</rt></ruby>っているだけですね！<ruby>簡単<rt>かんたん</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'ただし<ruby>注意<rt>ちゅうい</rt></ruby>！$\\sqrt{2} + \\sqrt{3}$ のように<ruby>違<rt>ちが</rt></ruby>うルートはまとめられないよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$2x + 3y$ がまとめられないのと<ruby>同<rt>おな</rt></ruby>じですね。',
    },
    {
      type: 'summary-point',
      text: '<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{}$ はまとめられる。<ruby>違<rt>ちが</rt></ruby>う $\\sqrt{}$ はまとめられない！',
    },
    {
      type: 'date',
      text: '$\\sqrt{}$の<ruby>中<rt>なか</rt></ruby>を<ruby>揃<rt>そろ</rt></ruby>えてからまとめる',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$\\sqrt{8} + \\sqrt{2}$ は<ruby>一見<rt>いっけん</rt></ruby><ruby>違<rt>ちが</rt></ruby>うルートに<ruby>見<rt>み</rt></ruby>えるけど……$\\sqrt{8}$ を<ruby>簡単<rt>かんたん</rt></ruby>にすると？',
    },
    {
      type: 'whiteboard',
      title: '$\\sqrt{8} + \\sqrt{2}$ の<ruby>計算<rt>けいさん</rt></ruby>',
      steps: [
        {
          formula: '$\\sqrt{8} + \\sqrt{2}$',
          annotation: 'まず $\\sqrt{8}$ を<ruby>簡単<rt>かんたん</rt></ruby>にする',
        },
        {
          formula: '$= 2\\sqrt{2} + \\sqrt{2}$',
          animateInsert: true,
          annotation: '$\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$',
        },
        {
          formula: '$= 3\\sqrt{2}$',
          isResult: true,
          annotation: '<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{2}$ になった！ $(2+1)\\sqrt{2} = 3\\sqrt{2}$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>先<rt>さき</rt></ruby>にルートの<ruby>中<rt>なか</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にすれば、<ruby>同<rt>おな</rt></ruby>じルートになることがあるんですね！',
    },
    {
      type: 'date',
      text: '<ruby>展開公式<rt>てんかいこうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>おう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ルートが<ruby>入<rt>はい</rt></ruby>った<ruby>式<rt>しき</rt></ruby>でも<ruby>展開公式<rt>てんかいこうしき</rt></ruby>が<ruby>使<rt>つか</rt></ruby>えるよ！ $(\\sqrt{3} + 1)(\\sqrt{3} - 1)$ をやってみよう。',
    },
    {
      type: 'whiteboard',
      title: '$(\\sqrt{3} + 1)(\\sqrt{3} - 1)$ の<ruby>展開<rt>てんかい</rt></ruby>',
      steps: [
        {
          formula: '$(\\sqrt{3} + 1)(\\sqrt{3} - 1)$',
          annotation: '$(a+b)(a-b) = a^2 - b^2$ の<ruby>形<rt>かたち</rt></ruby>！',
        },
        {
          formula: '$= (\\sqrt{3})^2 - 1^2$',
          animateInsert: true,
          annotation: '$a = \\sqrt{3}$、$b = 1$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$= 3 - 1 = 2$',
          isResult: true,
          animateInsert: true,
          annotation: 'ルートが<ruby>消<rt>き</rt></ruby>えた！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'すごい！ルートが<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>消<rt>き</rt></ruby>えて<ruby>整数<rt>せいすう</rt></ruby>になりました！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '$(\\sqrt{a})^2 = a$ になるからね。<ruby>展開公式<rt>てんかいこうしき</rt></ruby>を<ruby>上手<rt>じょうず</rt></ruby>に<ruby>使<rt>つか</rt></ruby>えば<ruby>計算<rt>けいさん</rt></ruby>がラクになるよ！',
    },
    {
      type: 'quiz',
      question: '$(\\sqrt{7} + 3)(\\sqrt{7} - 3)$ を<ruby>計算<rt>けいさん</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$-2$', correct: true },
        { letter: 'B', text: '$4$', correct: false },
        { letter: 'C', text: '$7 - 3\\sqrt{7}$', correct: false },
        { letter: 'D', text: '$16$', correct: false },
      ],
      explanation:
        '$(\\sqrt{7})^2 - 3^2 = 7 - 9 = -2$。<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>一発<rt>いっぱつ</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '$(\\sqrt{a} + b)(\\sqrt{a} - b) = a - b^2$。ルートが<ruby>消<rt>き</rt></ruby>えてスッキリ！',
    },
    {
      type: 'end',
      points: [
        '<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{}$ はまとめられる: $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$',
        '$\\sqrt{}$の<ruby>中<rt>なか</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>揃<rt>そろ</rt></ruby>える',
        '<ruby>展開公式<rt>てんかいこうしき</rt></ruby>はルートでも<ruby>使<rt>つか</rt></ruby>える',
        '$(\\sqrt{a} + b)(\\sqrt{a} - b) = a - b^2$ でルートが<ruby>消<rt>き</rt></ruby>える',
      ],
    },
  ],
};

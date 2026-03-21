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
      type: 'quiz',
      question: '$7\\sqrt{3} - 4\\sqrt{3}$ はいくつ？',
      options: [
        { letter: 'A', text: '$3\\sqrt{3}$', correct: true },
        { letter: 'B', text: '$3$', correct: false },
        { letter: 'C', text: '$3\\sqrt{6}$', correct: false },
        { letter: 'D', text: '$11\\sqrt{3}$', correct: false },
      ],
      explanation:
        '$(7 - 4)\\sqrt{3} = 3\\sqrt{3}$\n<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{3}$ の<ruby>前<rt>まえ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>だけ<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>するよ。',
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
        { letter: 'A', text: '$4$', correct: false },
        { letter: 'B', text: '$16$', correct: false },
        { letter: 'C', text: '$7 - 3\\sqrt{7}$', correct: false },
        { letter: 'D', text: '$-2$', correct: true },
      ],
      explanation:
        '$(\\sqrt{7})^2 - 3^2 = 7 - 9 = -2$\n<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>一発<rt>いっぱつ</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '$(\\sqrt{a} + b)(\\sqrt{a} - b) = a - b^2$。ルートが<ruby>消<rt>き</rt></ruby>えてスッキリ！',
    },
    {
      type: 'quiz',
      question: '$(\\sqrt{11} + 1)(\\sqrt{11} - 1)$ はいくつ？',
      options: [
        { letter: 'A', text: '$12$', correct: false },
        { letter: 'B', text: '$11 - \\sqrt{11}$', correct: false },
        { letter: 'C', text: '$10$', correct: true },
        { letter: 'D', text: '$\\sqrt{11}$', correct: false },
      ],
      explanation:
        '$(\\sqrt{11})^2 - 1^2 = 11 - 1 = 10$\n<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>でルートが<ruby>消<rt>き</rt></ruby>えるよ！',
    },
    {
      type: 'date',
      text: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>計算<rt>けいさん</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$\\sqrt{3}(\\sqrt{12} - \\sqrt{3})$ のように、<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>も<ruby>使<rt>つか</rt></ruby>えるよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>',
      steps: [
        {
          formula: '$\\sqrt{3}(\\sqrt{12} - \\sqrt{3})$',
          annotation: '$\\sqrt{3}$ を<ruby>分配<rt>ぶんぱい</rt></ruby>する',
        },
        {
          formula: '$= \\sqrt{3} \\times \\sqrt{12} - \\sqrt{3} \\times \\sqrt{3}$',
          animateInsert: true,
          annotation: '<ruby>中身<rt>なかみ</rt></ruby>どうしをかける',
        },
        {
          formula: '$= \\sqrt{36} - 3 = 6 - 3 = 3$',
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
      text: '$\\sqrt{3} \\times \\sqrt{12} = \\sqrt{36} = 6$ になるんですね！<ruby>掛<rt>か</rt></ruby>け<ruby>算<rt>ざん</rt></ruby>でルートが<ruby>消<rt>き</rt></ruby>えるのが<ruby>面白<rt>おもしろ</rt></ruby>い！',
    },
    {
      type: 'summary-point',
      text: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>: $\\sqrt{a}(\\sqrt{b} + \\sqrt{c}) = \\sqrt{ab} + \\sqrt{ac}$',
    },
    {
      type: 'quiz',
      question: '$\\sqrt{5}(\\sqrt{20} + \\sqrt{5})$ を<ruby>計算<rt>けいさん</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$\\sqrt{25} + \\sqrt{10}$', correct: false },
        { letter: 'B', text: '$15$', correct: true },
        { letter: 'C', text: '$5\\sqrt{5}$', correct: false },
        { letter: 'D', text: '$10 + \\sqrt{5}$', correct: false },
      ],
      explanation:
        '$\\sqrt{5} \\times \\sqrt{20} + \\sqrt{5} \\times \\sqrt{5} = \\sqrt{100} + \\sqrt{25} = 10 + 5 = 15$\nルートが<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>消<rt>き</rt></ruby>えた！',
    },
    {
      type: 'date',
      text: '$(\\sqrt{a} + b)^2$ の<ruby>展開<rt>てんかい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$(\\sqrt{3} + 1)^2$ を<ruby>展開<rt>てんかい</rt></ruby>してみよう。$(a + b)^2 = a^2 + 2ab + b^2$ の<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うよ。',
    },
    {
      type: 'whiteboard',
      title: '$(\\sqrt{3} + 1)^2$ の<ruby>展開<rt>てんかい</rt></ruby>',
      steps: [
        {
          formula: '$(\\sqrt{3} + 1)^2$',
          annotation: '$a = \\sqrt{3}$、$b = 1$ として $(a+b)^2$ の<ruby>公式<rt>こうしき</rt></ruby>',
        },
        {
          formula: '$= (\\sqrt{3})^2 + 2 \\times \\sqrt{3} \\times 1 + 1^2$',
          animateInsert: true,
          annotation: '$a^2 + 2ab + b^2$ に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$= 3 + 2\\sqrt{3} + 1 = 4 + 2\\sqrt{3}$',
          isResult: true,
          animateInsert: true,
          annotation: '$(\\sqrt{3})^2 = 3$ を<ruby>忘<rt>わす</rt></ruby>れずに！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$(\\sqrt{5} - 2)^2$ だと $(a-b)^2 = a^2 - 2ab + b^2$ で $5 - 4\\sqrt{5} + 4 = 9 - 4\\sqrt{5}$ ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！2<ruby>乗<rt>じょう</rt></ruby>の<ruby>展開<rt>てんかい</rt></ruby>では<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>項<rt>こう</rt></ruby>（$2ab$）にルートが<ruby>残<rt>のこ</rt></ruby>ることが<ruby>多<rt>おお</rt></ruby>いよ。',
    },
    {
      type: 'quiz',
      question: '$(\\sqrt{2} + 3)^2$ を<ruby>計算<rt>けいさん</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$11 + 6\\sqrt{2}$', correct: true },
        { letter: 'B', text: '$5 + 6\\sqrt{2}$', correct: false },
        { letter: 'C', text: '$11 + 3\\sqrt{2}$', correct: false },
        { letter: 'D', text: '$14$', correct: false },
      ],
      explanation:
        '$(\\sqrt{2})^2 + 2 \\times \\sqrt{2} \\times 3 + 3^2 = 2 + 6\\sqrt{2} + 9 = 11 + 6\\sqrt{2}$',
    },
    {
      type: 'summary-point',
      text: '$(\\sqrt{a}+b)^2 = a + 2b\\sqrt{a} + b^2$。<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>項<rt>こう</rt></ruby>にルートが<ruby>残<rt>のこ</rt></ruby>る！',
    },
    {
      type: 'quiz',
      question: '$(\\sqrt{5} - 2)^2$ を<ruby>計算<rt>けいさん</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$1 - 4\\sqrt{5}$', correct: false },
        { letter: 'B', text: '$9 + 4\\sqrt{5}$', correct: false },
        { letter: 'C', text: '$9 - 4\\sqrt{5}$', correct: true },
        { letter: 'D', text: '$1 + 4\\sqrt{5}$', correct: false },
      ],
      explanation:
        '$(\\sqrt{5})^2 - 2 \\times \\sqrt{5} \\times 2 + 2^2 = 5 - 4\\sqrt{5} + 4 = \\textcolor{#D97706}{9 - 4\\sqrt{5}}$',
    },
    {
      type: 'date',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>と<ruby>平方根<rt>へいほうこん</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$x = \\sqrt{5} + 1$ のとき $x^2 - 2x + 1$ の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めてみよう。<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>がカギだよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める',
      steps: [
        {
          formula: '$x^2 - 2x + 1 = (x - 1)^2$',
          annotation: '<ruby>先<rt>さき</rt></ruby>に<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>！',
        },
        {
          formula: '$x = \\sqrt{5} + 1$ を<ruby>代入<rt>だいにゅう</rt></ruby>: $(\\sqrt{5} + 1 - 1)^2$',
          animateInsert: true,
          annotation: '$x - 1 = \\sqrt{5}$',
        },
        {
          formula: '$= (\\sqrt{5})^2 = 5$',
          isResult: true,
          animateInsert: true,
          annotation: 'スッキリ！<ruby>展開<rt>てんかい</rt></ruby>するより<ruby>簡単<rt>かんたん</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>すると、ルートが<ruby>消<rt>き</rt></ruby>えてスッキリしますね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>平方根<rt>へいほうこん</rt></ruby>は<ruby>図形<rt>ずけい</rt></ruby>にも<ruby>使<rt>つか</rt></ruby>うよ。<ruby>面積<rt>めんせき</rt></ruby>が $84\\text{cm}^2$ の<ruby>正方形<rt>せいほうけい</rt></ruby>の1<ruby>辺<rt>ぺん</rt></ruby>は $\\sqrt{84} = 2\\sqrt{21}$ cm だね。',
    },
    {
      type: 'summary-point',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>は「<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>→<ruby>代入<rt>だいにゅう</rt></ruby>」がコツ。<ruby>平方根<rt>へいほうこん</rt></ruby>は<ruby>図形<rt>ずけい</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さにも<ruby>登場<rt>とうじょう</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '$x = \\sqrt{3} - 2$ のとき $x^2 + 4x + 4$ の<ruby>値<rt>あたい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$7 + 4\\sqrt{3}$', correct: false },
        { letter: 'B', text: '$7 - 4\\sqrt{3}$', correct: false },
        { letter: 'C', text: '$1$', correct: false },
        { letter: 'D', text: '$3$', correct: true },
      ],
      explanation:
        '$x^2 + 4x + 4 = (x + 2)^2$\n$x + 2 = \\sqrt{3} - 2 + 2 = \\sqrt{3}$ を<ruby>代入<rt>だいにゅう</rt></ruby>して $(\\sqrt{3})^2 = 3$！',
    },
    {
      type: 'end',
      points: [
        '<ruby>同<rt>おな</rt></ruby>じ $\\sqrt{}$ はまとめられる: $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$',
        '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>: $\\sqrt{a}(\\sqrt{b} + \\sqrt{c}) = \\sqrt{ab} + \\sqrt{ac}$',
        '$(\\sqrt{a}+b)^2 = a + 2b\\sqrt{a} + b^2$',
        '$(\\sqrt{a}+b)(\\sqrt{a}-b) = a - b^2$',
        '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>は<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>',
      ],
    },
  ],
};

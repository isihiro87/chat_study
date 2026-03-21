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
      type: 'quiz',
      question: '$\\sqrt{5} \\times \\sqrt{7}$ はいくつ？',
      options: [
        { letter: 'A', text: '$\\sqrt{12}$', correct: false },
        { letter: 'B', text: '$\\sqrt{35}$', correct: true },
        { letter: 'C', text: '$35$', correct: false },
        { letter: 'D', text: '$\\sqrt{57}$', correct: false },
      ],
      explanation:
        '$\\sqrt{5} \\times \\sqrt{7} = \\sqrt{5 \\times 7} = \\sqrt{35}$\n<ruby>中身<rt>なかみ</rt></ruby>どうしをかけるだけだよ！',
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
          annotation: '12を<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つける',
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
      text: '<ruby>整数<rt>せいすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>（4とか9とか16）を<ruby>見<rt>み</rt></ruby>つけて<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すんですね！',
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
      text: 'できた！<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>すのがコツですね！',
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
        '$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$\n$25 = 5^2$ を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すよ。',
    },
    {
      type: 'summary-point',
      text: '$\\sqrt{}$の<ruby>中<rt>なか</rt></ruby>を<ruby>小<rt>ちい</rt></ruby>さくするには、<ruby>整数<rt>せいすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけて<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>す！',
    },
    {
      type: 'quiz',
      question: '$\\sqrt{72}$ を<ruby>簡単<rt>かんたん</rt></ruby>にすると？',
      options: [
        { letter: 'A', text: '$8\\sqrt{3}$', correct: false },
        { letter: 'B', text: '$9\\sqrt{2}$', correct: false },
        { letter: 'C', text: '$3\\sqrt{8}$', correct: false },
        { letter: 'D', text: '$6\\sqrt{2}$', correct: true },
      ],
      explanation:
        '$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$\n$72 = 6^2 \\times 2$ なので $6$ を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すよ。',
    },
    {
      type: 'date',
      text: '$a\\sqrt{b}$ と $\\sqrt{c}$ の<ruby>変換<rt>へんかん</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>逆<rt>ぎゃく</rt></ruby>に、$2\\sqrt{5}$ を $\\sqrt{\\text{□}}$ の<ruby>形<rt>かたち</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>すこともできるよ。<ruby>外<rt>そと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れるんだ。',
    },
    {
      type: 'whiteboard',
      title: '$a\\sqrt{b}$ → $\\sqrt{c}$ の<ruby>変換<rt>へんかん</rt></ruby>',
      steps: [
        {
          formula: '$2\\sqrt{5} = \\sqrt{2^2 \\times 5} = \\sqrt{20}$',
          annotation: '<ruby>外<rt>そと</rt></ruby>の2を2<ruby>乗<rt>じょう</rt></ruby>して<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れる',
        },
        {
          formula: '$3\\sqrt{2} = \\sqrt{3^2 \\times 2} = \\sqrt{18}$',
          animateInsert: true,
          annotation: '<ruby>外<rt>そと</rt></ruby>の3を2<ruby>乗<rt>じょう</rt></ruby>して<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れる',
        },
        {
          formula: '$5\\sqrt{3} = \\sqrt{25 \\times 3} = \\sqrt{75}$',
          isResult: true,
          annotation: '<ruby>外<rt>そと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を2<ruby>乗<rt>じょう</rt></ruby>するのがポイント！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すときは<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>、<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れるときは2<ruby>乗<rt>じょう</rt></ruby>するんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'この<ruby>変換<rt>へんかん</rt></ruby>は<ruby>大小比較<rt>だいしょうひかく</rt></ruby>にも<ruby>使<rt>つか</rt></ruby>えるよ。$3\\sqrt{2} = \\sqrt{18}$ と $\\sqrt{17}$ なら、$\\sqrt{17} < \\sqrt{18}$ だから $\\sqrt{17} < 3\\sqrt{2}$ だね。',
    },
    {
      type: 'summary-point',
      text: '$a\\sqrt{b} = \\sqrt{a^2 \\times b}$。<ruby>外<rt>そと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を2<ruby>乗<rt>じょう</rt></ruby>して<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れる！',
    },
    {
      type: 'quiz',
      question: '$4\\sqrt{3}$ を $\\sqrt{\\text{□}}$ の<ruby>形<rt>かたち</rt></ruby>にすると？',
      options: [
        { letter: 'A', text: '$\\sqrt{12}$', correct: false },
        { letter: 'B', text: '$\\sqrt{24}$', correct: false },
        { letter: 'C', text: '$\\sqrt{48}$', correct: true },
        { letter: 'D', text: '$\\sqrt{36}$', correct: false },
      ],
      explanation:
        '$4\\sqrt{3} = \\sqrt{4^2 \\times 3} = \\sqrt{16 \\times 3} = \\sqrt{48}$\n<ruby>外<rt>そと</rt></ruby>の $4$ を2<ruby>乗<rt>じょう</rt></ruby>して<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れるよ。',
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
      text: '$\\sqrt{2} = 1.414$ として $\\sqrt{200}$ の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めてみよう。',
    },
    {
      type: 'whiteboard',
      title: '$\\sqrt{200}$ の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める',
      steps: [
        {
          formula: '$\\sqrt{200} = \\sqrt{100 \\times 2}$',
          annotation: '100を<ruby>見<rt>み</rt></ruby>つける',
        },
        {
          formula: '$= 10\\sqrt{2}$',
          animateInsert: true,
          annotation: '$\\sqrt{100} = 10$ を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>す',
        },
        {
          formula: '$= 10 \\times 1.414 = 14.14$',
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
      text: '$\\sqrt{200}$ を<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>計算<rt>けいさん</rt></ruby>しなくても、$\\sqrt{2}$ の<ruby>値<rt>あたい</rt></ruby>から<ruby>求<rt>もと</rt></ruby>められるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '$\\sqrt{0.02}$ も<ruby>同<rt>おな</rt></ruby>じだよ。$\\sqrt{0.02} = \\sqrt{\\frac{2}{100}} = \\frac{\\sqrt{2}}{10} = \\frac{1.414}{10} = 0.1414$ だね！',
    },
    {
      type: 'quiz',
      question: '$\\sqrt{7} = 2.646$ として、$\\sqrt{63}$ の<ruby>値<rt>あたい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$5.292$', correct: false },
        { letter: 'B', text: '$7.938$', correct: true },
        { letter: 'C', text: '$26.46$', correct: false },
        { letter: 'D', text: '$18.522$', correct: false },
      ],
      explanation:
        '$\\sqrt{63} = \\sqrt{9 \\times 7} = 3\\sqrt{7} = 3 \\times 2.646 = 7.938$\n<ruby>先<rt>さき</rt></ruby>に $\\sqrt{}$ の<ruby>中<rt>なか</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>代入<rt>だいにゅう</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '$\\sqrt{}$ の<ruby>中<rt>なか</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>近似値<rt>きんじち</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>すると<ruby>値<rt>あたい</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められる！',
    },
    {
      type: 'quiz',
      question: '$\\sqrt{3} = 1.732$ として $\\sqrt{300}$ の<ruby>値<rt>あたい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$5.196$', correct: false },
        { letter: 'B', text: '$1.732$', correct: false },
        { letter: 'C', text: '$17.32$', correct: true },
        { letter: 'D', text: '$173.2$', correct: false },
      ],
      explanation:
        '$\\sqrt{300} = \\sqrt{100 \\times 3} = 10\\sqrt{3} = 10 \\times 1.732 = \\textcolor{#D97706}{17.32}$',
    },
    {
      type: 'end',
      points: [
        '$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$（<ruby>中身<rt>なかみ</rt></ruby>をかける）',
        '$\\sqrt{a} \\div \\sqrt{b} = \\sqrt{\\frac{a}{b}}$（<ruby>中身<rt>なかみ</rt></ruby>をわる）',
        '$\\sqrt{12} = 2\\sqrt{3}$（<ruby>整数<rt>せいすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>す）',
        '$a\\sqrt{b} = \\sqrt{a^2 b}$（<ruby>外<rt>そと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れる）',
        '<ruby>近似値<rt>きんじち</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>して<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>められる',
      ],
    },
  ],
};

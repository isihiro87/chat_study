import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const eqFractionsChat: HistoryChat = {
  id: 'math-g1-eq-fractions',
  icon: '➗',
  title: '小数・分数の方程式を攻略しよう',
  subtitle: '〜中1数学〜 分母をはらってスッキリ解く',
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
      text: '<ruby>小数<rt>しょうすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>や<ruby>分数<rt>ぶんすう</rt></ruby>がある<ruby>方程式<rt>ほうていしき</rt></ruby>も、ひと<ruby>工夫<rt>くふう</rt></ruby>で<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>解<rt>と</rt></ruby>けるよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>前回<rt>ぜんかい</rt></ruby>は<ruby>整数<rt>せいすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>いたけど、<ruby>今日<rt>きょう</rt></ruby>は<ruby>小数<rt>しょうすう</rt></ruby>と<ruby>分数<rt>ぶんすう</rt></ruby>が<ruby>出<rt>で</rt></ruby>てくるよ。まずはこれ！ $0.3x + 1.2 = 2.1$',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'うわ、<ruby>小数<rt>しょうすう</rt></ruby>だと<ruby>計算<rt>けいさん</rt></ruby>がめんどくさそう…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>！<strong><ruby>両辺<rt>りょうへん</rt></ruby>を 10<ruby>倍<rt>ばい</rt></ruby></strong>すれば、<ruby>小数<rt>しょうすう</rt></ruby>が<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>消<rt>き</rt></ruby>えるんだ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>小数<rt>しょうすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>の<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$0.3x + 1.2 = 2.1$',
          annotation: '<ruby>小数<rt>しょうすう</rt></ruby><ruby>第<rt>だい</rt></ruby>1<ruby>位<rt>い</rt></ruby>まで → <ruby>両辺<rt>りょうへん</rt></ruby>を 10<ruby>倍<rt>ばい</rt></ruby>！',
        },
        {
          formula: '$3x + 12 = 21$',
          annotation: '<ruby>小数<rt>しょうすう</rt></ruby>が<ruby>消<rt>き</rt></ruby>えた！あとは<ruby>普通<rt>ふつう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$3x = 21 - 12 = 9$',
          annotation: '$12$ を<ruby>移項<rt>いこう</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{x = 3}$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を 3 で<ruby>割<rt>わ</rt></ruby>る',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '10<ruby>倍<rt>ばい</rt></ruby>するだけで<ruby>整数<rt>せいすう</rt></ruby>になった！ <ruby>確<rt>たし</rt></ruby>かめ: $0.3(3)+1.2 = 0.9+1.2 = 2.1$ ✓',
    },
    {
      type: 'summary-point',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>は <strong>10<ruby>倍<rt>ばい</rt></ruby>・100<ruby>倍<rt>ばい</rt></ruby></strong>して<ruby>整数<rt>せいすう</rt></ruby>にしてから<ruby>解<rt>と</rt></ruby>こう！',
    },
    {
      type: 'date',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>だよ。$\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ を<ruby>解<rt>と</rt></ruby>いてみよう！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、どうすればいいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「<strong><ruby>分母<rt>ぶんぼ</rt></ruby>をはらう</strong>」んだ！<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>両辺<rt>りょうへん</rt></ruby>にかけると、<ruby>分数<rt>ぶんすう</rt></ruby>がきれいに<ruby>消<rt>き</rt></ruby>えるよ！',
    },
    {
      type: 'whiteboard',
      title: '「<ruby>分母<rt>ぶんぼ</rt></ruby>をはらう」テクニック',
      steps: [
        {
          formula: '$\\dfrac{x}{2} + \\dfrac{x}{3} = 5$',
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby> 2 と 3 の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby> = $\\textcolor{#D97706}{6}$',
        },
        {
          formula: '$6 \\times \\dfrac{x}{2} + 6 \\times \\dfrac{x}{3} = 6 \\times 5$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>に 6 をかける（<ruby>全<rt>すべ</rt></ruby>ての<ruby>項<rt>こう</rt></ruby>にかける！）',
          animateInsert: true,
        },
        {
          formula: '$3x + 2x = 30$',
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby>が<ruby>消<rt>き</rt></ruby>えた！',
          animateInsert: true,
        },
        {
          formula: '$5x = 30$',
          annotation: '<ruby>左辺<rt>さへん</rt></ruby>をまとめる',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{x = 6}$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を 5 で<ruby>割<rt>わ</rt></ruby>る',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'おお！<ruby>分母<rt>ぶんぼ</rt></ruby>がスッキリ<ruby>消<rt>き</rt></ruby>えた！ <ruby>確<rt>たし</rt></ruby>かめ: $\\dfrac{6}{2} + \\dfrac{6}{3} = 3 + 2 = 5$ ✓',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！もう1<ruby>問<rt>もん</rt></ruby>やってみよう。$\\dfrac{2x-1}{3} = \\dfrac{x+2}{2}$ はどうかな？',
    },
    {
      type: 'whiteboard',
      title: 'もう<ruby>少<rt>すこ</rt></ruby>し<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>',
      steps: [
        {
          formula: '$\\dfrac{2x-1}{3} = \\dfrac{x+2}{2}$',
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby> 3 と 2 の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby> = $\\textcolor{#D97706}{6}$',
        },
        {
          formula: '$2(2x - 1) = 3(x + 2)$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>に 6 をかけて<ruby>分母<rt>ぶんぼ</rt></ruby>をはらう',
          animateInsert: true,
        },
        {
          formula: '$4x - 2 = 3x + 6$',
          annotation: '<ruby>展開<rt>てんかい</rt></ruby>する（カッコをはずす）',
          animateInsert: true,
        },
        {
          formula: '$4x - 3x = 6 + 2$',
          annotation: '$3x$ と $-2$ を<ruby>移項<rt>いこう</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{x = 8}$',
          annotation: '<ruby>整理<rt>せいり</rt></ruby>して<ruby>完了<rt>かんりょう</rt></ruby>！',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>分母<rt>ぶんぼ</rt></ruby>をはらう → <ruby>展開<rt>てんかい</rt></ruby> → <ruby>移項<rt>いこう</rt></ruby>、の<ruby>流<rt>なが</rt></ruby>れですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>は<strong>「<ruby>分母<rt>ぶんぼ</rt></ruby>をはらう」</strong>のが<ruby>鉄則<rt>てっそく</rt></ruby>！ <ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>両辺<rt>りょうへん</rt></ruby>にかけよう。',
    },
    {
      type: 'quiz',
      question: '$\\dfrac{x}{4} - \\dfrac{x}{6} = 1$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 6$', correct: false },
        { letter: 'B', text: '$x = 10$', correct: false },
        { letter: 'C', text: '$x = 12$', correct: true },
        { letter: 'D', text: '$x = 24$', correct: false },
      ],
      explanation:
        '<ruby>分母<rt>ぶんぼ</rt></ruby> 4, 6 の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby> 12 をかけると $3x - 2x = 12$、つまり $x = \\textcolor{#D97706}{12}$。',
    },
    {
      type: 'end',
      points: [
        '<ruby>小数<rt>しょうすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>：<ruby>両辺<rt>りょうへん</rt></ruby>を 10<ruby>倍<rt>ばい</rt></ruby>・100<ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>にする',
        '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>：<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>両辺<rt>りょうへん</rt></ruby>にかける（<ruby>分母<rt>ぶんぼ</rt></ruby>をはらう）',
        '<ruby>全<rt>すべ</rt></ruby>ての<ruby>項<rt>こう</rt></ruby>にもれなくかけるのがポイント',
        '<ruby>整数<rt>せいすう</rt></ruby>にしたら、<ruby>移項<rt>いこう</rt></ruby> → $ax = b$ → $x = \\dfrac{b}{a}$ の<ruby>手順<rt>てじゅん</rt></ruby>で<ruby>解<rt>と</rt></ruby>く',
      ],
    },
  ],
};

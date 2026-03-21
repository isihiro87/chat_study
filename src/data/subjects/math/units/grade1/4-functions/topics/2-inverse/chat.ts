import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const inverseProportionChat: HistoryChat = {
  id: 'math-g1-inverse',
  icon: '📉',
  title: '<ruby>反比例<rt>はんぴれい</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 $y = \\frac{a}{x}$ の<ruby>双曲線<rt>そうきょくせん</rt></ruby>',
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
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>次<rt>つぎ</rt></ruby>は<strong>「<ruby>反比例<rt>はんぴれい</rt></ruby>」</strong>！<ruby>名前<rt>なまえ</rt></ruby>のとおり<ruby>比例<rt>ひれい</rt></ruby>の<ruby>反対<rt>はんたい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>関数<rt>かんすう</rt></ruby>だよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>面積<rt>めんせき</rt></ruby>が $12\\text{cm}^2$ の<ruby>長方形<rt>ちょうほうけい</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えてみよう。<ruby>縦<rt>たて</rt></ruby>を $x\\text{cm}$、<ruby>横<rt>よこ</rt></ruby>を $y\\text{cm}$ とすると…',
    },
    {
      type: 'whiteboard',
      title: '<ruby>面積<rt>めんせき</rt></ruby>が $12\\text{cm}^2$ の<ruby>長方形<rt>ちょうほうけい</rt></ruby>',
      steps: [
        {
          formula: '$x = 1$ → $y = 12$',
          annotation: '<ruby>縦<rt>たて</rt></ruby>1cm、<ruby>横<rt>よこ</rt></ruby>12cm',
        },
        {
          formula: '$x = 2$ → $y = 6$',
          annotation: '<ruby>縦<rt>たて</rt></ruby>2cm、<ruby>横<rt>よこ</rt></ruby>6cm',
        },
        {
          formula: '$x = 3$ → $y = 4$',
          annotation: '<ruby>縦<rt>たて</rt></ruby>3cm、<ruby>横<rt>よこ</rt></ruby>4cm',
        },
        {
          formula: '$x = 6$ → $y = 2$',
          annotation: '<ruby>縦<rt>たて</rt></ruby>6cm、<ruby>横<rt>よこ</rt></ruby>2cm',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$x$ が<ruby>大<rt>おお</rt></ruby>きくなると $y$ が<ruby>小<rt>ちい</rt></ruby>さくなってる！<ruby>比例<rt>ひれい</rt></ruby>と<ruby>逆<rt>ぎゃく</rt></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！しかも $x \\times y$ を<ruby>計算<rt>けいさん</rt></ruby>してみて？',
    },
    {
      type: 'whiteboard',
      title: '$x \\times y$ を<ruby>計算<rt>けいさん</rt></ruby>すると…',
      steps: [
        {
          formula: '$1 \\times 12 = 12$',
        },
        {
          formula: '$2 \\times 6 = 12$',
        },
        {
          formula: '$3 \\times 4 = 12$',
        },
        {
          formula: '$6 \\times 2 = 12$',
        },
        {
          formula: '→ $\\textcolor{#D97706}{xy = 12}$（<ruby>積<rt>せき</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>！）',
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
      text: 'ぜんぶ $12$ になる！<ruby>積<rt>せき</rt></ruby>がいつも<ruby>同<rt>おな</rt></ruby>じだ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'これが<ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>だよ！<ruby>式<rt>しき</rt></ruby>で<ruby>書<rt>か</rt></ruby>くと $y = \\frac{a}{x}$ になるんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby>',
      steps: [
        {
          formula: '$y = \\frac{a}{x}$',
          annotation: '$a$ は<ruby>比例定数<rt>ひれいていすう</rt></ruby>（$a \\neq 0$）',
        },
        {
          formula: '$xy = a$（$x$ と $y$ の<ruby>積<rt>せき</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>）',
          annotation: 'この<ruby>形<rt>かたち</rt></ruby>で<ruby>反比例<rt>はんぴれい</rt></ruby>を<ruby>判別<rt>はんべつ</rt></ruby>できる！',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>: $y = \\frac{a}{x}$。$xy = a$（<ruby>積<rt>せき</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>）で<ruby>判別<rt>はんべつ</rt></ruby>できる。',
    },
    {
      type: 'quiz',
      question: '$y$ が $x$ に<ruby>反比例<rt>はんぴれい</rt></ruby>し、$x = 4$ のとき $y = 5$。<ruby>比例定数<rt>ひれいていすう</rt></ruby> $a$ はいくつ？',
      options: [
        { letter: 'A', text: '$a = 1.25$', correct: false },
        { letter: 'B', text: '$a = 9$', correct: false },
        { letter: 'C', text: '$a = 20$', correct: true },
        { letter: 'D', text: '$a = -20$', correct: false },
      ],
      explanation:
        '<ruby>反比例<rt>はんぴれい</rt></ruby>では $a = xy$ だから $a = 4 \\times 5 = \\textcolor{#D97706}{20}$ だよ。',
    },
    {
      type: 'date',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>比例<rt>ひれい</rt></ruby>では $x$ が2<ruby>倍<rt>ばい</rt></ruby>で $y$ も2<ruby>倍<rt>ばい</rt></ruby>だったけど、<ruby>反比例<rt>はんぴれい</rt></ruby>ではどうなる？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>では、$x$ が<strong>2<ruby>倍<rt>ばい</rt></ruby></strong>になると $y$ は<strong>$\\frac{1}{2}$ <ruby>倍<rt>ばい</rt></ruby></strong>になるよ。$x$ が3<ruby>倍<rt>ばい</rt></ruby>なら $y$ は $\\frac{1}{3}$ <ruby>倍<rt>ばい</rt></ruby>だ。',
    },
    {
      type: 'whiteboard',
      title: '$x$ が $n$ <ruby>倍<rt>ばい</rt></ruby> → $y$ は $\\frac{1}{n}$ <ruby>倍<rt>ばい</rt></ruby>',
      steps: [
        {
          formula: '$y = \\frac{12}{x}$ で $x = 2$ → $y = 6$',
        },
        {
          formula: '$x$ が2<ruby>倍<rt>ばい</rt></ruby>: $x = 4$ → $y = 3$',
          annotation: '$y$ は $\\frac{1}{2}$ <ruby>倍<rt>ばい</rt></ruby>！（$6 \\times \\frac{1}{2} = 3$）',
          animateInsert: true,
        },
        {
          formula: '$x$ が3<ruby>倍<rt>ばい</rt></ruby>: $x = 6$ → $y = 2$',
          annotation: '$y$ は $\\frac{1}{3}$ <ruby>倍<rt>ばい</rt></ruby>！（$6 \\times \\frac{1}{3} = 2$）',
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>で、<ruby>倍率<rt>ばいりつ</rt></ruby>の<ruby>逆数<rt>ぎゃくすう</rt></ruby>になるんですね！だから「<ruby>反<rt>はん</rt></ruby>」<ruby>比例<rt>ひれい</rt></ruby>なんだ！',
    },
    {
      type: 'quiz',
      question: '$y = \\frac{18}{x}$ で $x = 3$ のとき $y$ はいくつ？',
      options: [
        { letter: 'A', text: '$3$', correct: false },
        { letter: 'B', text: '$15$', correct: false },
        { letter: 'C', text: '$6$', correct: true },
        { letter: 'D', text: '$54$', correct: false },
      ],
      explanation:
        '$y = \\frac{18}{3} = \\textcolor{#D97706}{6}$ だよ。',
    },
    {
      type: 'date',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>のグラフ（<ruby>双曲線<rt>そうきょくせん</rt></ruby>）',
    },
    {
      type: 'narrator',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>のグラフは<ruby>比例<rt>ひれい</rt></ruby>とはまったく<ruby>違<rt>ちが</rt></ruby>う<ruby>形<rt>かたち</rt></ruby>！<strong>「<ruby>双曲線<rt>そうきょくせん</rt></ruby>」</strong>と<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>曲線<rt>きょくせん</rt></ruby>になるよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>のグラフは<strong><ruby>双曲線<rt>そうきょくせん</rt></ruby></strong>といって、2つのなめらかな<ruby>曲線<rt>きょくせん</rt></ruby>でできているよ。$x$ <ruby>軸<rt>じく</rt></ruby>にも $y$ <ruby>軸<rt>じく</rt></ruby>にも<ruby>交<rt>まじ</rt></ruby>わらないのが<ruby>特徴<rt>とくちょう</rt></ruby>だ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なぜ<ruby>軸<rt>じく</rt></ruby>と<ruby>交<rt>まじ</rt></ruby>わらないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '$x = 0$ を $y = \\frac{a}{x}$ に<ruby>代入<rt>だいにゅう</rt></ruby>しようとすると… $0$ で<ruby>割<rt>わ</rt></ruby>ることになるよね？それはできないから $y$ <ruby>軸<rt>じく</rt></ruby>とは<ruby>交<rt>まじ</rt></ruby>わらない。$y = 0$ になる $x$ も<ruby>存在<rt>そんざい</rt></ruby>しないから $x$ <ruby>軸<rt>じく</rt></ruby>とも<ruby>交<rt>まじ</rt></ruby>わらないんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>双曲線<rt>そうきょくせん</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>',
      steps: [
        {
          formula: '$a > 0$: <ruby>右上<rt>みぎうえ</rt></ruby>と<ruby>左下<rt>ひだりした</rt></ruby>',
          annotation: '$x > 0$ で $y > 0$、$x < 0$ で $y < 0$',
        },
        {
          formula: '$a < 0$: <ruby>左上<rt>ひだりうえ</rt></ruby>と<ruby>右下<rt>みぎした</rt></ruby>',
          annotation: '$x > 0$ で $y < 0$、$x < 0$ で $y > 0$',
          animateInsert: true,
        },
        {
          formula: '<ruby>座標軸<rt>ざひょうじく</rt></ruby>とは<ruby>交<rt>まじ</rt></ruby>わらない！',
          annotation: '$x = 0$ や $y = 0$ にはならない',
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>比例<rt>ひれい</rt></ruby>は<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<ruby>直線<rt>ちょくせん</rt></ruby>なのに、<ruby>反比例<rt>はんぴれい</rt></ruby>は<ruby>軸<rt>じく</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づくけど<ruby>交<rt>まじ</rt></ruby>わらない<ruby>曲線<rt>きょくせん</rt></ruby>なんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>のグラフは<ruby>双曲線<rt>そうきょくせん</rt></ruby>。<ruby>座標軸<rt>ざひょうじく</rt></ruby>と<ruby>交<rt>まじ</rt></ruby>わらない。$a > 0$ で<ruby>右上<rt>みぎうえ</rt></ruby>・<ruby>左下<rt>ひだりした</rt></ruby>、$a < 0$ で<ruby>左上<rt>ひだりうえ</rt></ruby>・<ruby>右下<rt>みぎした</rt></ruby>。',
    },
    {
      type: 'quiz',
      question: '<ruby>反比例<rt>はんぴれい</rt></ruby> $y = \\frac{-6}{x}$ のグラフはどの<ruby>領域<rt>りょういき</rt></ruby>にある？',
      options: [
        { letter: 'A', text: '<ruby>右上<rt>みぎうえ</rt></ruby>と<ruby>左下<rt>ひだりした</rt></ruby>', correct: false },
        { letter: 'B', text: '<ruby>左上<rt>ひだりうえ</rt></ruby>と<ruby>右下<rt>みぎした</rt></ruby>', correct: true },
        { letter: 'C', text: '<ruby>右上<rt>みぎうえ</rt></ruby>と<ruby>右下<rt>みぎした</rt></ruby>', correct: false },
        { letter: 'D', text: '<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る', correct: false },
      ],
      explanation:
        '$a = -6 < 0$ なので、<ruby>左上<rt>ひだりうえ</rt></ruby>と<ruby>右下<rt>みぎした</rt></ruby>に<ruby>双曲線<rt>そうきょくせん</rt></ruby>があるよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby>: $y = \\frac{a}{x}$（$a$ は<ruby>比例定数<rt>ひれいていすう</rt></ruby>）',
        '$xy = a$（<ruby>積<rt>せき</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>）で<ruby>反比例<rt>はんぴれい</rt></ruby>を<ruby>判別<rt>はんべつ</rt></ruby>',
        '$x$ が $n$ <ruby>倍<rt>ばい</rt></ruby> → $y$ は $\\frac{1}{n}$ <ruby>倍<rt>ばい</rt></ruby>',
        'グラフは<ruby>双曲線<rt>そうきょくせん</rt></ruby>（<ruby>座標軸<rt>ざひょうじく</rt></ruby>と<ruby>交<rt>まじ</rt></ruby>わらない<ruby>曲線<rt>きょくせん</rt></ruby>）',
        '$a > 0$: <ruby>右上<rt>みぎうえ</rt></ruby>・<ruby>左下<rt>ひだりした</rt></ruby>、$a < 0$: <ruby>左上<rt>ひだりうえ</rt></ruby>・<ruby>右下<rt>みぎした</rt></ruby>',
      ],
    },
  ],
};

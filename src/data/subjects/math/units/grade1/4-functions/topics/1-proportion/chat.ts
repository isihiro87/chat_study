import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const proportionChat: HistoryChat = {
  id: 'math-g1-proportion',
  icon: '📈',
  title: '<ruby>比例<rt>ひれい</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 $y = ax$ の<ruby>世界<rt>せかい</rt></ruby>',
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
      text: '<ruby>関数<rt>かんすう</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1の<ruby>数学<rt>すうがく</rt></ruby>で<ruby>初<rt>はじ</rt></ruby>めて<ruby>登場<rt>とうじょう</rt></ruby>する<strong>「<ruby>関数<rt>かんすう</rt></ruby>」</strong>。まずは<ruby>関数<rt>かんすう</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>しよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ともなって<ruby>変<rt>か</rt></ruby>わる2つの<ruby>量<rt>りょう</rt></ruby> $x$ と $y$ があるとき、$x$ の<ruby>値<rt>あたい</rt></ruby>を<ruby>決<rt>き</rt></ruby>めると $y$ の<ruby>値<rt>あたい</rt></ruby>が<strong>ただ1つ</strong><ruby>決<rt>き</rt></ruby>まる<ruby>関係<rt>かんけい</rt></ruby>を「<ruby>関数<rt>かんすう</rt></ruby>」というよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「ただ1つ<ruby>決<rt>き</rt></ruby>まる」ってどういうことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'たとえば、1<ruby>個<rt>こ</rt></ruby> $100$ <ruby>円<rt>えん</rt></ruby>のりんごを $x$ <ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>ったときの<ruby>代金<rt>だいきん</rt></ruby> $y$ <ruby>円<rt>えん</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えてみよう。$x = 3$ なら $y = 300$ で、<ruby>答<rt>こた</rt></ruby>えは1つだけだよね？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>関数<rt>かんすう</rt></ruby>の<ruby>例<rt>れい</rt></ruby>（りんごの<ruby>代金<rt>だいきん</rt></ruby>）',
      steps: [
        {
          formula: '$x = 1$ → $y = 100$',
          annotation: '1<ruby>個<rt>こ</rt></ruby>で100<ruby>円<rt>えん</rt></ruby>',
        },
        {
          formula: '$x = 2$ → $y = 200$',
          annotation: '2<ruby>個<rt>こ</rt></ruby>で200<ruby>円<rt>えん</rt></ruby>',
        },
        {
          formula: '$x = 3$ → $y = 300$',
          animateInsert: true,
          annotation: '$x$ を<ruby>決<rt>き</rt></ruby>めると $y$ がただ1つ<ruby>決<rt>き</rt></ruby>まる！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！$x$ を<ruby>決<rt>き</rt></ruby>めたら $y$ が<ruby>迷<rt>まよ</rt></ruby>わず<ruby>決<rt>き</rt></ruby>まるってことですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>関数<rt>かんすう</rt></ruby>とは、$x$ の<ruby>値<rt>あたい</rt></ruby>を<ruby>決<rt>き</rt></ruby>めると $y$ の<ruby>値<rt>あたい</rt></ruby>がただ1つ<ruby>決<rt>き</rt></ruby>まる<ruby>関係<rt>かんけい</rt></ruby>のこと。',
    },
    {
      type: 'quiz',
      question: '1<ruby>個<rt>こ</rt></ruby> $80$ <ruby>円<rt>えん</rt></ruby>のみかんを $x$ <ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>ったときの<ruby>代金<rt>だいきん</rt></ruby> $y$ <ruby>円<rt>えん</rt></ruby>。$x = 4$ のとき $y$ は？',
      options: [
        { letter: 'A', text: '$20$', correct: false },
        { letter: 'B', text: '$84$', correct: false },
        { letter: 'C', text: '$320$', correct: true },
        { letter: 'D', text: '$400$', correct: false },
      ],
      explanation:
        '$y = 80x$ だから $y = 80 \\times 4 = \\textcolor{#D97706}{320}$ <ruby>円<rt>えん</rt></ruby>だよ。$x$ を<ruby>決<rt>き</rt></ruby>めると $y$ がただ1つ<ruby>決<rt>き</rt></ruby>まる！',
    },
    {
      type: 'date',
      text: '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby> $y = ax$',
    },
    {
      type: 'narrator',
      text: '<ruby>関数<rt>かんすう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でも<ruby>特<rt>とく</rt></ruby>に<ruby>大切<rt>たいせつ</rt></ruby>な<strong>「<ruby>比例<rt>ひれい</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう。<ruby>小学校<rt>しょうがっこう</rt></ruby>でも<ruby>少<rt>すこ</rt></ruby>し<ruby>習<rt>なら</rt></ruby>ったよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さっきのりんごの<ruby>例<rt>れい</rt></ruby>で、$y = 100x$ という<ruby>式<rt>しき</rt></ruby>が<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つね。このように $y = ax$ の<ruby>形<rt>かたち</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せるとき、「$y$ は $x$ に<ruby>比例<rt>ひれい</rt></ruby>する」というよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby>',
      steps: [
        {
          formula: '$y = ax$',
          annotation: '$a$ は<ruby>比例定数<rt>ひれいていすう</rt></ruby>（$a \\neq 0$）',
        },
        {
          formula: '$a = \\frac{y}{x}$',
          annotation: '$y$ を $x$ で<ruby>割<rt>わ</rt></ruby>ると<ruby>常<rt>つね</rt></ruby>に<ruby>一定<rt>いってい</rt></ruby>！',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>比例定数<rt>ひれいていすう</rt></ruby>って、<ruby>何<rt>なに</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>しているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '$x$ が $1$ <ruby>増<rt>ふ</rt></ruby>えるごとに $y$ がどれだけ<ruby>変<rt>か</rt></ruby>わるかを<ruby>表<rt>あらわ</rt></ruby>しているよ。りんごなら $a = 100$ で、1<ruby>個<rt>こ</rt></ruby><ruby>増<rt>ふ</rt></ruby>えるたびに100<ruby>円<rt>えん</rt></ruby><ruby>増<rt>ふ</rt></ruby>えるよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>大事<rt>だいじ</rt></ruby>な<ruby>性質<rt>せいしつ</rt></ruby>は、$x$ が<strong>2<ruby>倍<rt>ばい</rt></ruby></strong>になると $y$ も<strong>2<ruby>倍<rt>ばい</rt></ruby></strong>になること！$x$ が3<ruby>倍<rt>ばい</rt></ruby>なら $y$ も3<ruby>倍<rt>ばい</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '$x$ が $n$ <ruby>倍<rt>ばい</rt></ruby> → $y$ も $n$ <ruby>倍<rt>ばい</rt></ruby>',
      steps: [
        {
          formula: '$y = 3x$ で $x = 2$ → $y = 6$',
        },
        {
          formula: '$x$ が2<ruby>倍<rt>ばい</rt></ruby>: $x = 4$ → $y = 12$',
          annotation: '$y$ も2<ruby>倍<rt>ばい</rt></ruby>！（$6 \\times 2 = 12$）',
          animateInsert: true,
        },
        {
          formula: '$x$ が3<ruby>倍<rt>ばい</rt></ruby>: $x = 6$ → $y = 18$',
          annotation: '$y$ も3<ruby>倍<rt>ばい</rt></ruby>！（$6 \\times 3 = 18$）',
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'すごい！$x$ が<ruby>何倍<rt>なんばい</rt></ruby>になっても、$y$ もぴったり<ruby>同<rt>おな</rt></ruby>じ<ruby>倍率<rt>ばいりつ</rt></ruby>になるんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby>は $y = ax$。$x$ が $n$ <ruby>倍<rt>ばい</rt></ruby>になると $y$ も $n$ <ruby>倍<rt>ばい</rt></ruby>になる。$\\frac{y}{x} = a$（<ruby>一定<rt>いってい</rt></ruby>）。',
    },
    {
      type: 'quiz',
      question: '$y = -4x$ のとき、$x = 5$ なら $y$ はいくつ？',
      options: [
        { letter: 'A', text: '$20$', correct: false },
        { letter: 'B', text: '$1$', correct: false },
        { letter: 'C', text: '$-9$', correct: false },
        { letter: 'D', text: '$-20$', correct: true },
      ],
      explanation:
        '$y = -4 \\times 5 = \\textcolor{#D97706}{-20}$ だよ。\n<ruby>符号<rt>ふごう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>座標<rt>ざひょう</rt></ruby>と<ruby>比例<rt>ひれい</rt></ruby>のグラフ',
    },
    {
      type: 'narrator',
      text: '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>をグラフで<ruby>表<rt>あらわ</rt></ruby>してみよう。まずは<strong><ruby>座標<rt>ざひょう</rt></ruby></strong>の<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>平面<rt>へいめん</rt></ruby>に<ruby>横<rt>よこ</rt></ruby>の<ruby>線<rt>せん</rt></ruby>（$x$ <ruby>軸<rt>じく</rt></ruby>）と<ruby>縦<rt>たて</rt></ruby>の<ruby>線<rt>せん</rt></ruby>（$y$ <ruby>軸<rt>じく</rt></ruby>）を<ruby>引<rt>ひ</rt></ruby>くと、<ruby>点<rt>てん</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>を $(x, y)$ で<ruby>表<rt>あらわ</rt></ruby>せるよ。2つの<ruby>軸<rt>じく</rt></ruby>が<ruby>交<rt>まじ</rt></ruby>わる<ruby>点<rt>てん</rt></ruby>を<strong><ruby>原点<rt>げんてん</rt></ruby> $O$</strong> というんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>座標<rt>ざひょう</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>',
      steps: [
        {
          formula: '<ruby>原点<rt>げんてん</rt></ruby> $O$: $(0, 0)$',
          annotation: '$x$ <ruby>軸<rt>じく</rt></ruby>と $y$ <ruby>軸<rt>じく</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>',
        },
        {
          formula: '<ruby>座標<rt>ざひょう</rt></ruby>: $\\textcolor{#D97706}{(x, y)}$',
          annotation: '<ruby>横<rt>よこ</rt></ruby>が $x$、<ruby>縦<rt>たて</rt></ruby>が $y$',
          animateInsert: true,
        },
        {
          formula: '<ruby>例<rt>れい</rt></ruby>: <ruby>点<rt>てん</rt></ruby>A $(3, 2)$ → <ruby>右<rt>みぎ</rt></ruby>に3、<ruby>上<rt>うえ</rt></ruby>に2',
          annotation: '$x = 3$, $y = 2$ の<ruby>位置<rt>いち</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>横<rt>よこ</rt></ruby>が $x$、<ruby>縦<rt>たて</rt></ruby>が $y$ ですね！<ruby>地図<rt>ちず</rt></ruby>の<ruby>座標<rt>ざひょう</rt></ruby>みたいでわかりやすい！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！では<ruby>比例<rt>ひれい</rt></ruby>のグラフを<ruby>見<rt>み</rt></ruby>てみよう。$y = 2x$ の<ruby>点<rt>てん</rt></ruby>をいくつか<ruby>打<rt>う</rt></ruby>つと…',
    },
    {
      type: 'whiteboard',
      title: '$y = 2x$ のグラフ',
      steps: [
        {
          formula: '$(-2, -4), (-1, -2), (0, 0), (1, 2), (2, 4)$',
          annotation: '<ruby>各<rt>かく</rt></ruby>$x$ に<ruby>対<rt>たい</rt></ruby>する $y$ の<ruby>値<rt>あたい</rt></ruby>',
        },
        {
          formula: '→ <ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<strong><ruby>右上<rt>みぎうえ</rt></ruby>がりの<ruby>直線<rt>ちょくせん</rt></ruby></strong>！',
          annotation: '$a = 2 > 0$ だから<ruby>右上<rt>みぎうえ</rt></ruby>がり',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>比例<rt>ひれい</rt></ruby>のグラフは<strong><ruby>必<rt>かなら</rt></ruby>ず<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<ruby>直線<rt>ちょくせん</rt></ruby></strong>になるよ。$a > 0$ なら<ruby>右上<rt>みぎうえ</rt></ruby>がり、$a < 0$ なら<ruby>右下<rt>みぎした</rt></ruby>がりだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>比例定数<rt>ひれいていすう</rt></ruby> $a$ とグラフの<ruby>向<rt>む</rt></ruby>き',
      steps: [
        {
          formula: '$a > 0$: <ruby>右上<rt>みぎうえ</rt></ruby>がり ↗',
          annotation: '<ruby>例<rt>れい</rt></ruby>: $y = 2x$, $y = 5x$',
        },
        {
          formula: '$a < 0$: <ruby>右下<rt>みぎした</rt></ruby>がり ↘',
          annotation: '<ruby>例<rt>れい</rt></ruby>: $y = -3x$, $y = -x$',
        },
        {
          formula: '$|a|$ が<ruby>大<rt>おお</rt></ruby>きい → グラフの<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>急<rt>きゅう</rt></ruby>',
          annotation: '$|a|$ が<ruby>小<rt>ちい</rt></ruby>さい → <ruby>傾<rt>かたむ</rt></ruby>きがゆるやか',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$a$ の<ruby>符号<rt>ふごう</rt></ruby>でグラフの<ruby>向<rt>む</rt></ruby>きが<ruby>変<rt>か</rt></ruby>わって、$a$ の<ruby>大<rt>おお</rt></ruby>きさで<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>変<rt>か</rt></ruby>わるんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>比例<rt>ひれい</rt></ruby>のグラフは<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<ruby>直線<rt>ちょくせん</rt></ruby>。$a > 0$ で<ruby>右上<rt>みぎうえ</rt></ruby>がり、$a < 0$ で<ruby>右下<rt>みぎした</rt></ruby>がり。',
    },
    {
      type: 'quiz',
      question: '$y = -3x$ のグラフはどんな<ruby>形<rt>かたち</rt></ruby>？',
      options: [
        { letter: 'A', text: '<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<ruby>右上<rt>みぎうえ</rt></ruby>がりの<ruby>直線<rt>ちょくせん</rt></ruby>', correct: false },
        { letter: 'B', text: '<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>らない<ruby>直線<rt>ちょくせん</rt></ruby>', correct: false },
        { letter: 'C', text: '<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<ruby>右下<rt>みぎした</rt></ruby>がりの<ruby>直線<rt>ちょくせん</rt></ruby>', correct: true },
        { letter: 'D', text: '<ruby>曲線<rt>きょくせん</rt></ruby>', correct: false },
      ],
      explanation:
        '$a = -3 < 0$ なので<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<ruby>右下<rt>みぎした</rt></ruby>がりの<ruby>直線<rt>ちょくせん</rt></ruby>だよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>関数<rt>かんすう</rt></ruby>: $x$ を<ruby>決<rt>き</rt></ruby>めると $y$ がただ1つ<ruby>決<rt>き</rt></ruby>まる<ruby>関係<rt>かんけい</rt></ruby>',
        '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby>: $y = ax$（$a$ は<ruby>比例定数<rt>ひれいていすう</rt></ruby>）',
        '$x$ が $n$ <ruby>倍<rt>ばい</rt></ruby> → $y$ も $n$ <ruby>倍<rt>ばい</rt></ruby>',
        '<ruby>座標<rt>ざひょう</rt></ruby>: $(x, y)$ で<ruby>平面<rt>へいめん</rt></ruby>上の<ruby>位置<rt>いち</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す',
        '<ruby>比例<rt>ひれい</rt></ruby>のグラフ: <ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<ruby>直線<rt>ちょくせん</rt></ruby>',
      ],
    },
  ],
};

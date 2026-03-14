import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const slopeInterceptChat: HistoryChat = {
  id: 'math-g2-slope-intercept',
  icon: '📐',
  title: 'グラフの傾きと切片をマスター',
  subtitle: '〜中2数学〜 グラフの読み方・かき方',
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
      text: '<ruby>傾<rt>かたむ</rt></ruby>きってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>のグラフは<ruby>直線<rt>ちょくせん</rt></ruby>になる！ その<ruby>直線<rt>ちょくせん</rt></ruby>の<strong>「<ruby>傾<rt>かたむ</rt></ruby>き」</strong>と<strong>「<ruby>切片<rt>せっぺん</rt></ruby>」</strong>を<ruby>理解<rt>りかい</rt></ruby>しよう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'y = ax + b の <strong>a</strong> を「<ruby>傾<rt>かたむ</rt></ruby>き」と<ruby>呼<rt>よ</rt></ruby>ぶよ。これは「x が 1 <ruby>増<rt>ふ</rt></ruby>えたとき y がいくつ<ruby>変<rt>か</rt></ruby>わるか」を<ruby>表<rt>あらわ</rt></ruby>しているんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>大<rt>おお</rt></ruby>きいとグラフは<ruby>急<rt>きゅう</rt></ruby>になるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！ <ruby>傾<rt>かたむ</rt></ruby>きが<ruby>正<rt>せい</rt></ruby>なら<ruby>右上<rt>みぎうえ</rt></ruby>がり、<ruby>負<rt>ふ</rt></ruby>なら<ruby>右下<rt>みぎした</rt></ruby>がりになるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>傾<rt>かたむ</rt></ruby>きの<ruby>意味<rt>いみ</rt></ruby>',
      steps: [
        {
          formula: '$a > 0$ → <ruby>右上<rt>みぎうえ</rt></ruby>がり ↗',
          annotation: '$x$ が<ruby>増<rt>ふ</rt></ruby>えると $y$ も<ruby>増<rt>ふ</rt></ruby>える',
        },
        {
          formula: '$a < 0$ → <ruby>右下<rt>みぎした</rt></ruby>がり ↘',
          annotation: '$x$ が<ruby>増<rt>ふ</rt></ruby>えると $y$ は<ruby>減<rt>へ</rt></ruby>る',
        },
      ],
    },
    {
      type: 'image',
      src: '/images/math/grade2/linear-function-graph.svg',
      alt: '一次関数のグラフ（傾きと切片）',
      caption: '<ruby>傾<rt>かたむ</rt></ruby>きと<ruby>切片<rt>せっぺん</rt></ruby>でグラフの<ruby>形<rt>かたち</rt></ruby>が<ruby>決<rt>き</rt></ruby>まる',
    },
    {
      type: 'summary-point',
      text: '<ruby>傾<rt>かたむ</rt></ruby>き a：<ruby>正<rt>せい</rt></ruby>なら<ruby>右上<rt>みぎうえ</rt></ruby>がり、<ruby>負<rt>ふ</rt></ruby>なら<ruby>右下<rt>みぎした</rt></ruby>がり。<ruby>絶対値<rt>ぜったいち</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいほど<ruby>急<rt>きゅう</rt></ruby>な<ruby>直線<rt>ちょくせん</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>切片<rt>せっぺん</rt></ruby>とグラフのかき<ruby>方<rt>かた</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は <strong>b</strong>（<ruby>切片<rt>せっぺん</rt></ruby>）だ！ これはグラフが <strong>y <ruby>軸<rt>じく</rt></ruby></strong>と<ruby>交<rt>まじ</rt></ruby>わる<ruby>点<rt>てん</rt></ruby>の y <ruby>座標<rt>ざひょう</rt></ruby>のことだよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'つまり x = 0 のときの y の<ruby>値<rt>あたい</rt></ruby>ってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！ じゃあ y = 2x + 3 のグラフをかいてみよう！',
    },
    {
      type: 'whiteboard',
      title: 'y = 2x + 3 のグラフをかく',
      steps: [
        {
          formula: '$\\textcircled{1}$ <ruby>切片<rt>せっぺん</rt></ruby> $b = 3$ → <ruby>点<rt>てん</rt></ruby>$(0, 3)$ をとる',
          annotation: '$y$ <ruby>軸<rt>じく</rt></ruby>の 3 のところに<ruby>印<rt>しるし</rt></ruby>！',
        },
        {
          formula: '$\\textcircled{2}$ <ruby>傾<rt>かたむ</rt></ruby>き $a = 2$ → <ruby>右<rt>みぎ</rt></ruby>に1、<ruby>上<rt>うえ</rt></ruby>に2 → <ruby>点<rt>てん</rt></ruby>$(1, 5)$',
          animateInsert: true,
          annotation: '$(0, 3)$ から<ruby>右<rt>みぎ</rt></ruby>に1、<ruby>上<rt>うえ</rt></ruby>に2<ruby>進<rt>すす</rt></ruby>む！',
        },
        {
          formula: '$\\textcircled{3}$ 2<ruby>点<rt>てん</rt></ruby>を<ruby>結<rt>むす</rt></ruby>んで<ruby>直線<rt>ちょくせん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く → <ruby>完成<rt>かんせい</rt></ruby>！',
          isResult: true,
          annotation: '<ruby>両方向<rt>りょうほうこう</rt></ruby>に<ruby>延<rt>の</rt></ruby>ばして<ruby>直線<rt>ちょくせん</rt></ruby>にしよう',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>切片<rt>せっぺん</rt></ruby>をとって、<ruby>傾<rt>かたむ</rt></ruby>きの<ruby>分<rt>ぶん</rt></ruby>だけ<ruby>進<rt>すす</rt></ruby>めばいいんですね！ <ruby>簡単<rt>かんたん</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>逆<rt>ぎゃく</rt></ruby>にグラフから<ruby>式<rt>しき</rt></ruby>を<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ることもできるよ。y <ruby>軸<rt>じく</rt></ruby>との<ruby>交点<rt>こうてん</rt></ruby>が<ruby>切片<rt>せっぺん</rt></ruby>、そこから<ruby>右<rt>みぎ</rt></ruby>に1<ruby>進<rt>すす</rt></ruby>んだとき<ruby>上<rt>うえ</rt></ruby>にいくつ<ruby>動<rt>うご</rt></ruby>いたかが<ruby>傾<rt>かたむ</rt></ruby>きだ！',
    },
    {
      type: 'summary-point',
      text: 'グラフのかき<ruby>方<rt>かた</rt></ruby>：① <ruby>切片<rt>せっぺん</rt></ruby>(0, b) をとる → ② <ruby>傾<rt>かたむ</rt></ruby>きで<ruby>次<rt>つぎ</rt></ruby>の<ruby>点<rt>てん</rt></ruby>をとる → ③ <ruby>直線<rt>ちょくせん</rt></ruby>を引く',
    },
    {
      type: 'quiz',
      question: '$y = -x + 4$ のグラフで、$y$ <ruby>軸<rt>じく</rt></ruby>との<ruby>交点<rt>こうてん</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$(0, -1)$', correct: false },
        { letter: 'B', text: '$(0, 4)$', correct: true },
        { letter: 'C', text: '$(4, 0)$', correct: false },
        { letter: 'D', text: '$(-1, 4)$', correct: false },
      ],
      explanation:
        '<ruby>切片<rt>せっぺん</rt></ruby> $b = 4$ だから、$y$ <ruby>軸<rt>じく</rt></ruby>との<ruby>交点<rt>こうてん</rt></ruby>は $\\textcolor{#D97706}{(0, 4)}$ だよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>傾<rt>かたむ</rt></ruby>き $a$：<ruby>正<rt>せい</rt></ruby>→<ruby>右上<rt>みぎうえ</rt></ruby>がり、<ruby>負<rt>ふ</rt></ruby>→<ruby>右下<rt>みぎした</rt></ruby>がり',
        '<ruby>切片<rt>せっぺん</rt></ruby> $b$：グラフが $y$ <ruby>軸<rt>じく</rt></ruby>と<ruby>交<rt>まじ</rt></ruby>わる<ruby>点<rt>てん</rt></ruby>の $y$ <ruby>座標<rt>ざひょう</rt></ruby>',
        'グラフのかき<ruby>方<rt>かた</rt></ruby>：<ruby>切片<rt>せっぺん</rt></ruby>→<ruby>傾<rt>かたむ</rt></ruby>き→<ruby>直線<rt>ちょくせん</rt></ruby>',
        'グラフから<ruby>式<rt>しき</rt></ruby>を<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ることもできる',
      ],
    },
  ],
};

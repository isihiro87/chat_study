import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const posNegMeaningChat: HistoryChat = {
  id: 'math-g1-pos-neg-meaning',
  icon: '🔢',
  title: '<ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>・<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>と<ruby>絶対値<rt>ぜったいち</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>正負<rt>せいふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>と<ruby>大小<rt>だいしょう</rt></ruby>',
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
      text: '<ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>って？',
    },
    {
      type: 'narrator',
      text: '<ruby>中学<rt>ちゅうがく</rt></ruby>の<ruby>数学<rt>すうがく</rt></ruby>では、<ruby>小学校<rt>しょうがっこう</rt></ruby>では<ruby>使<rt>つか</rt></ruby>わなかった<strong>「<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>」</strong>が<ruby>登場<rt>とうじょう</rt></ruby>！<ruby>数<rt>かず</rt></ruby>の<ruby>世界<rt>せかい</rt></ruby>がグーンと<ruby>広<rt>ひろ</rt></ruby>がるよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>小学校<rt>しょうがっこう</rt></ruby>では $0$ より<ruby>大<rt>おお</rt></ruby>きい<ruby>数<rt>かず</rt></ruby>だけを<ruby>勉強<rt>べんきょう</rt></ruby>したよね。でも<ruby>中学<rt>ちゅうがく</rt></ruby>では $0$ より<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby>も<ruby>使<rt>つか</rt></ruby>うんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$0$ より<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby>ってあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>冬<rt>ふゆ</rt></ruby>の<ruby>気温<rt>きおん</rt></ruby>で「マイナス $3$ <ruby>度<rt>ど</rt></ruby>」って<ruby>聞<rt>き</rt></ruby>いたことあるよね？あれが<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>だよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>',
      steps: [
        {
          formula: '$0$ より<ruby>大<rt>おお</rt></ruby>きい<ruby>数<rt>かず</rt></ruby> → <ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>（<ruby>符号<rt>ふごう</rt></ruby> $+$）',
          annotation: '<ruby>例<rt>れい</rt></ruby>: $+1, +2.5, +\\frac{1}{3}$',
        },
        {
          formula: '$0$ より<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby> → <ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>（<ruby>符号<rt>ふごう</rt></ruby> $-$）',
          annotation: '<ruby>例<rt>れい</rt></ruby>: $-1, -2.5, -\\frac{1}{3}$',
        },
        {
          formula: '$0$ は<ruby>正<rt>せい</rt></ruby>でも<ruby>負<rt>ふ</rt></ruby>でもない',
          animateInsert: true,
          annotation: '<ruby>境目<rt>さかいめ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！$+$ は<ruby>正<rt>せい</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>、$-$ は<ruby>負<rt>ふ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>なんですね！',
    },
    {
      type: 'summary-point',
      text: '$0$ より<ruby>大<rt>おお</rt></ruby>きい<ruby>数<rt>かず</rt></ruby>が<ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>（$+$）、$0$ より<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby>が<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>（$-$）。$0$ は<ruby>正<rt>せい</rt></ruby>でも<ruby>負<rt>ふ</rt></ruby>でもない。',
    },
    {
      type: 'date',
      text: '<ruby>整数<rt>せいすう</rt></ruby>と<ruby>反対<rt>はんたい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>数<rt>かず</rt></ruby>の<ruby>仲間分<rt>なかまわ</rt></ruby>けと、<ruby>正負<rt>せいふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>反対<rt>はんたい</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぼう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>自然数<rt>しぜんすう</rt></ruby>（$1, 2, 3, \\ldots$）と $0$ と<ruby>負<rt>ふ</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>（$-1, -2, -3, \\ldots$）を<ruby>合<rt>あ</rt></ruby>わせて<strong>「<ruby>整数<rt>せいすう</rt></ruby>」</strong>と<ruby>呼<rt>よ</rt></ruby>ぶよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>整数<rt>せいすう</rt></ruby>の<ruby>分類<rt>ぶんるい</rt></ruby>',
      steps: [
        {
          formula: '<ruby>自然数<rt>しぜんすう</rt></ruby>（<ruby>正<rt>せい</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>）: $1, 2, 3, \\ldots$',
          annotation: '<ruby>小学校<rt>しょうがっこう</rt></ruby>で<ruby>習<rt>なら</rt></ruby>った<ruby>数<rt>かず</rt></ruby>え<ruby>方<rt>かた</rt></ruby>の<ruby>数<rt>かず</rt></ruby>',
        },
        {
          formula: '$0$',
          annotation: '<ruby>正<rt>せい</rt></ruby>でも<ruby>負<rt>ふ</rt></ruby>でもない<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>数<rt>かず</rt></ruby>',
        },
        {
          formula: '<ruby>負<rt>ふ</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>: $-1, -2, -3, \\ldots$',
          animateInsert: true,
          annotation: '<ruby>中学<rt>ちゅうがく</rt></ruby>で<ruby>新<rt>あたら</rt></ruby>しく<ruby>登場<rt>とうじょう</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>正負<rt>せいふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>は「<ruby>反対<rt>はんたい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>」を<ruby>表<rt>あらわ</rt></ruby>すのに<ruby>便利<rt>べんり</rt></ruby>だよ。<ruby>例<rt>たと</rt></ruby>えば $+500$ <ruby>円<rt>えん</rt></ruby>の<ruby>収入<rt>しゅうにゅう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して、$-300$ <ruby>円<rt>えん</rt></ruby>の<ruby>支出<rt>ししゅつ</rt></ruby>、みたいにね。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>増<rt>ふ</rt></ruby>えるのが $+$ で、<ruby>減<rt>へ</rt></ruby>るのが $-$ ってことですね！',
    },
    {
      type: 'date',
      text: '<ruby>絶対値<rt>ぜったいち</rt></ruby>と<ruby>数<rt>かず</rt></ruby>の<ruby>大小<rt>だいしょう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>数直線<rt>すうちょくせん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って、<strong>「<ruby>絶対値<rt>ぜったいち</rt></ruby>」</strong>と<ruby>数<rt>かず</rt></ruby>の<ruby>大小<rt>だいしょう</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>しよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>数直線<rt>すうちょくせん</rt></ruby>を<ruby>描<rt>えが</rt></ruby>いて<ruby>考<rt>かんが</rt></ruby>えてみよう。<ruby>原点<rt>げんてん</rt></ruby>（$0$）からある<ruby>数<rt>かず</rt></ruby>までの<ruby>距離<rt>きょり</rt></ruby>を<strong>「<ruby>絶対値<rt>ぜったいち</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>絶対値<rt>ぜったいち</rt></ruby>',
      steps: [
        {
          formula: '$\\textcolor{#D97706}{|+3| = 3}$',
          annotation: '<ruby>原点<rt>げんてん</rt></ruby>から<ruby>右<rt>みぎ</rt></ruby>に $3$ の<ruby>距離<rt>きょり</rt></ruby>',
        },
        {
          formula: '$\\textcolor{#D97706}{|-3| = 3}$',
          annotation: '<ruby>原点<rt>げんてん</rt></ruby>から<ruby>左<rt>ひだり</rt></ruby>に $3$ の<ruby>距離<rt>きょり</rt></ruby>',
        },
        {
          formula: '$|+3| = |-3| = 3$',
          animateInsert: true,
          annotation: '<ruby>符号<rt>ふごう</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>っても<ruby>距離<rt>きょり</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じ！',
        },
        {
          formula: '$|0| = 0$',
          annotation: '<ruby>原点<rt>げんてん</rt></ruby>そのものだから<ruby>距離<rt>きょり</rt></ruby>は $0$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$+3$ も $-3$ も<ruby>絶対値<rt>ぜったいち</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じ $3$ なんだ！<ruby>距離<rt>きょり</rt></ruby>だから<ruby>符号<rt>ふごう</rt></ruby>は<ruby>関係<rt>かんけい</rt></ruby>ないんですね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そうだね！<ruby>次<rt>つぎ</rt></ruby>に<ruby>数<rt>かず</rt></ruby>の<ruby>大小<rt>だいしょう</rt></ruby>を<ruby>比<rt>くら</rt></ruby>べてみよう。<ruby>数直線<rt>すうちょくせん</rt></ruby>では<ruby>右<rt>みぎ</rt></ruby>にある<ruby>数<rt>かず</rt></ruby>ほど<ruby>大<rt>おお</rt></ruby>きいよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>数<rt>かず</rt></ruby>の<ruby>大小<rt>だいしょう</rt></ruby>',
      steps: [
        {
          formula: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby> $<$ $0$ $<$ <ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>',
          annotation: '<ruby>基本<rt>きほん</rt></ruby>のルール！',
        },
        {
          formula: '$-5 < -2$',
          annotation: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>は<ruby>絶対値<rt>ぜったいち</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいほど<ruby>小<rt>ちい</rt></ruby>さい',
        },
        {
          formula: '$\\textcolor{#D97706}{-5 < -2 < 0 < +3 < +7}$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>数直線<rt>すうちょくせん</rt></ruby>の<ruby>左<rt>ひだり</rt></ruby>から<ruby>右<rt>みぎ</rt></ruby>の<ruby>順<rt>じゅん</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>どうしだと、<ruby>絶対値<rt>ぜったいち</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>が<ruby>小<rt>ちい</rt></ruby>さいんですね…。$-5$ の<ruby>方<rt>ほう</rt></ruby>が $-2$ より<ruby>小<rt>ちい</rt></ruby>さいってちょっと<ruby>不思議<rt>ふしぎ</rt></ruby>。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>数直線<rt>すうちょくせん</rt></ruby>を<ruby>思<rt>おも</rt></ruby>い<ruby>浮<rt>う</rt></ruby>かべるとわかりやすいよ。$-5$ は $-2$ より<ruby>左<rt>ひだり</rt></ruby>にあるから<ruby>小<rt>ちい</rt></ruby>さいんだ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>絶対値<rt>ぜったいち</rt></ruby> = <ruby>原点<rt>げんてん</rt></ruby>からの<ruby>距離<rt>きょり</rt></ruby>。<ruby>数直線<rt>すうちょくせん</rt></ruby>で<ruby>右<rt>みぎ</rt></ruby>にある<ruby>数<rt>かず</rt></ruby>ほど<ruby>大<rt>おお</rt></ruby>きい。<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>は<ruby>絶対値<rt>ぜったいち</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいほど<ruby>小<rt>ちい</rt></ruby>さい。',
    },
    {
      type: 'quiz',
      question: '$|-8|$ の<ruby>値<rt>あたい</rt></ruby>はいくつ？',
      options: [
        { letter: 'A', text: '$-8$', correct: false },
        { letter: 'B', text: '$0$', correct: false },
        { letter: 'C', text: '$8$', correct: true },
        { letter: 'D', text: '$16$', correct: false },
      ],
      explanation:
        '<ruby>絶対値<rt>ぜったいち</rt></ruby>は<ruby>原点<rt>げんてん</rt></ruby>からの<ruby>距離<rt>きょり</rt></ruby>だから、$|-8| = \\textcolor{#D97706}{8}$ だよ。<ruby>符号<rt>ふごう</rt></ruby>を<ruby>取<rt>と</rt></ruby>った<ruby>値<rt>あたい</rt></ruby>になるんだ。',
    },
    {
      type: 'end',
      points: [
        '$0$ より<ruby>大<rt>おお</rt></ruby>きい<ruby>数<rt>かず</rt></ruby>が<ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>（$+$）、<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby>が<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>（$-$）',
        '<ruby>自然数<rt>しぜんすう</rt></ruby> + $0$ + <ruby>負<rt>ふ</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby> = <ruby>整数<rt>せいすう</rt></ruby>',
        '<ruby>絶対値<rt>ぜったいち</rt></ruby> = <ruby>数直線<rt>すうちょくせん</rt></ruby>上での<ruby>原点<rt>げんてん</rt></ruby>からの<ruby>距離<rt>きょり</rt></ruby>',
        '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>どうしは<ruby>絶対値<rt>ぜったいち</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいほど<ruby>小<rt>ちい</rt></ruby>さい',
      ],
    },
  ],
};

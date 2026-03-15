import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const literalExpressionsChat: HistoryChat = {
  id: 'math-g2-literal-expr',
  icon: '🔤',
  title: '<ruby>文字式<rt>もじしき</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>2<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>整数<rt>せいすう</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>を<ruby>証明<rt>しょうめい</rt></ruby>しよう',
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
    // === Section 1: 数の表し方 ===
    {
      type: 'date',
      text: '<ruby>数<rt>かず</rt></ruby>の<ruby>表<rt>あらわ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '「<ruby>偶数<rt>ぐうすう</rt></ruby>と<ruby>偶数<rt>ぐうすう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず<ruby>偶数<rt>ぐうすう</rt></ruby>になる」って<ruby>本当<rt>ほんとう</rt></ruby>？<ruby>文字<rt>もじ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<strong><ruby>証明<rt>しょうめい</rt></ruby></strong>してみよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>整数<rt>せいすう</rt></ruby>を<ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう！これが<span class="keyword"><ruby>証明<rt>しょうめい</rt></ruby></span>の<ruby>第一歩<rt>だいいっぽ</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>整数<rt>せいすう</rt></ruby>の<ruby>表<rt>あらわ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '<span class="keyword"><ruby>偶数<rt>ぐうすう</rt></ruby></span> → $2n$',
          annotation: '$n$ は<ruby>整数<rt>せいすう</rt></ruby>。2 でぴったり<ruby>割<rt>わ</rt></ruby>れる<ruby>数<rt>かず</rt></ruby>',
        },
        {
          formula: '<span class="keyword"><ruby>奇数<rt>きすう</rt></ruby></span> → $2n + 1$',
          annotation: '<ruby>偶数<rt>ぐうすう</rt></ruby>に 1 <ruby>足<rt>た</rt></ruby>した<ruby>数<rt>かず</rt></ruby>',
        },
        {
          formula: '<ruby>連続<rt>れんぞく</rt></ruby>する3<ruby>整数<rt>せいすう</rt></ruby> → $n,\\; n+1,\\; n+2$',
          animateInsert: true,
          annotation: '<ruby>例<rt>れい</rt></ruby>: 5, 6, 7 なら $n = 5$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>偶数<rt>ぐうすう</rt></ruby>が $2n$ で、<ruby>奇数<rt>きすう</rt></ruby>が $2n + 1$ なのは<ruby>分<rt>わ</rt></ruby>かります！でも「<ruby>証明<rt>しょうめい</rt></ruby>」ってどうやるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>証明<rt>しょうめい</rt></ruby>は3ステップ！<strong>① <ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す → ② <ruby>式<rt>しき</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby> → ③ <ruby>結論<rt>けつろん</rt></ruby>を<ruby>書<rt>か</rt></ruby>く</strong>。やってみよう！',
    },
    {
      type: 'summary-point',
      text: '<ruby>証明<rt>しょうめい</rt></ruby>の3ステップ: ① <ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す → ② <ruby>式<rt>しき</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby> → ③ 「○○の<ruby>形<rt>かたち</rt></ruby>だから△△」と<ruby>結論<rt>けつろん</rt></ruby>',
    },
    // === Section 2: 連続する整数の証明 ===
    {
      type: 'date',
      text: '<ruby>連続<rt>れんぞく</rt></ruby>する<ruby>整数<rt>せいすう</rt></ruby>の<ruby>証明<rt>しょうめい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「<ruby>連続<rt>れんぞく</rt></ruby>する3つの<ruby>整数<rt>せいすう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>は3の<ruby>倍数<rt>ばいすう</rt></ruby>になる」ことを<ruby>証明<rt>しょうめい</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>連続<rt>れんぞく</rt></ruby>する3<ruby>整数<rt>せいすう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>',
      steps: [
        {
          formula: '<ruby>連続<rt>れんぞく</rt></ruby>する3<ruby>整数<rt>せいすう</rt></ruby>: $n,\\; n+1,\\; n+2$',
          annotation: '① $n$ は<ruby>整数<rt>せいすう</rt></ruby>とする',
        },
        {
          formula: '$n + (n+1) + (n+2) = 3n + 3$',
          animateInsert: true,
          annotation: '② <ruby>和<rt>わ</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>する',
        },
        {
          formula: '$= 3(n + 1)$',
          animateInsert: true,
          annotation: '③ $3 \\times$ (<ruby>整数<rt>せいすう</rt></ruby>) の<ruby>形<rt>かたち</rt></ruby> → <strong>3の<ruby>倍数<rt>ばいすう</rt></ruby></strong>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '3 でくくれるから3の<ruby>倍数<rt>ばいすう</rt></ruby>だって<ruby>言<rt>い</rt></ruby>えるんですね！',
    },
    // === Section 3: 偶数・奇数の証明 ===
    {
      type: 'date',
      text: '<ruby>偶数<rt>ぐうすう</rt></ruby>・<ruby>奇数<rt>きすう</rt></ruby>の<ruby>証明<rt>しょうめい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「<ruby>奇数<rt>きすう</rt></ruby>から<ruby>偶数<rt>ぐうすう</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くと<ruby>奇数<rt>きすう</rt></ruby>になる」ことを<ruby>証明<rt>しょうめい</rt></ruby>しよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>奇数<rt>きすう</rt></ruby> − <ruby>偶数<rt>ぐうすう</rt></ruby> = <ruby>奇数<rt>きすう</rt></ruby>の<ruby>証明<rt>しょうめい</rt></ruby>',
      steps: [
        {
          formula: '<ruby>奇数<rt>きすう</rt></ruby>: $2m + 1$、<ruby>偶数<rt>ぐうすう</rt></ruby>: $2n$',
          annotation: '① $m, n$ は<ruby>整数<rt>せいすう</rt></ruby>とする',
        },
        {
          formula: '$(2m + 1) - 2n = 2m - 2n + 1 = 2(m - n) + 1$',
          animateInsert: true,
          annotation: '③ $2 \\times$ (<ruby>整数<rt>せいすう</rt></ruby>) $+ 1$ → <strong><ruby>奇数<rt>きすう</rt></ruby></strong>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$2 \\times$ (<ruby>整数<rt>せいすう</rt></ruby>) $+ 1$ の<ruby>形<rt>かたち</rt></ruby>になれば<ruby>奇数<rt>きすう</rt></ruby>、$2 \\times$ (<ruby>整数<rt>せいすう</rt></ruby>) なら<ruby>偶数<rt>ぐうすう</rt></ruby>なんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>連続<rt>れんぞく</rt></ruby>する<ruby>偶数<rt>ぐうすう</rt></ruby>は $2n, 2n+2, 2n+4$。<ruby>奇数<rt>きすう</rt></ruby>なら $2n+1, 2n+3, 2n+5$。',
    },
    // === Section 4: 2けたの自然数 ===
    {
      type: 'date',
      text: '2けたの<ruby>自然数<rt>しぜんすう</rt></ruby>の<ruby>表<rt>あらわ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '2けたの<ruby>自然数<rt>しぜんすう</rt></ruby>は、<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>を $a$、<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>を $b$ とすると <span class="keyword">$10a + b$</span> と<ruby>表<rt>あらわ</rt></ruby>せるよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>例<rt>たと</rt></ruby>えば 53 なら $10 \\times 5 + 3$ ってことですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '「2けたの<ruby>自然数<rt>しぜんすう</rt></ruby>と、その<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>と<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>を<ruby>入<rt>い</rt></ruby>れ<ruby>替<rt>か</rt></ruby>えた<ruby>数<rt>かず</rt></ruby>の<ruby>和<rt>わ</rt></ruby>は11の<ruby>倍数<rt>ばいすう</rt></ruby>になる」ことを<ruby>証明<rt>しょうめい</rt></ruby>しよう！',
    },
    {
      type: 'whiteboard',
      title: 'けた<ruby>入<rt>い</rt></ruby>れ<ruby>替<rt>か</rt></ruby>えの<ruby>証明<rt>しょうめい</rt></ruby>',
      steps: [
        {
          formula: 'もとの<ruby>数<rt>かず</rt></ruby>: $10a + b$、<ruby>入<rt>い</rt></ruby>れ<ruby>替<rt>か</rt></ruby>えた<ruby>数<rt>かず</rt></ruby>: $10b + a$',
          annotation: '① <ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す',
        },
        {
          formula: '$(10a + b) + (10b + a) = 11a + 11b$',
          animateInsert: true,
          annotation: '② <ruby>和<rt>わ</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>する',
        },
        {
          formula: '$= 11(a + b)$',
          animateInsert: true,
          annotation: '③ $11 \\times$ (<ruby>整数<rt>せいすう</rt></ruby>) → <strong>11の<ruby>倍数<rt>ばいすう</rt></ruby></strong>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$53 + 35 = 88 = 11 \\times 8$、$27 + 72 = 99 = 11 \\times 9$…ほんとだ！',
    },
    {
      type: 'quiz',
      question: '2けたの<ruby>自然数<rt>しぜんすう</rt></ruby>と、<ruby>十<rt>じゅう</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>と<ruby>一<rt>いち</rt></ruby>の<ruby>位<rt>くらい</rt></ruby>を<ruby>入<rt>い</rt></ruby>れ<ruby>替<rt>か</rt></ruby>えた<ruby>数<rt>かず</rt></ruby>の<ruby>差<rt>さ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>の<ruby>倍数<rt>ばいすう</rt></ruby>？',
      options: [
        { letter: 'A', text: '7の<ruby>倍数<rt>ばいすう</rt></ruby>', correct: false },
        { letter: 'B', text: '9の<ruby>倍数<rt>ばいすう</rt></ruby>', correct: true },
        { letter: 'C', text: '11の<ruby>倍数<rt>ばいすう</rt></ruby>', correct: false },
        { letter: 'D', text: '13の<ruby>倍数<rt>ばいすう</rt></ruby>', correct: false },
      ],
      explanation:
        '$(10a+b) - (10b+a) = 9a - 9b = \\textcolor{#D97706}{9(a-b)}$。$9 \\times$ (<ruby>整数<rt>せいすう</rt></ruby>) なので<strong>9の<ruby>倍数<rt>ばいすう</rt></ruby></strong>！',
    },
    // === Section 5: 等式の変形 ===
    {
      type: 'date',
      text: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>公式<rt>こうしき</rt></ruby>を<ruby>別<rt>べつ</rt></ruby>の<ruby>文字<rt>もじ</rt></ruby>について<ruby>解<rt>と</rt></ruby>く「<span class="keyword"><ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby></span>」も<ruby>大事<rt>だいじ</rt></ruby>なテクニックだよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$3x + 2y = 8$ を $y$ について<ruby>解<rt>と</rt></ruby>いてみよう。<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>くのと<ruby>同<rt>おな</rt></ruby>じ<ruby>要領<rt>ようりょう</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>：$y$ について<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$3x + 2y = 8$',
          annotation: '$y$ を<ruby>左辺<rt>さへん</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>したい',
        },
        {
          formula: '$2y = 8 - 3x$',
          animateInsert: true,
          annotation: '$3x$ を<ruby>右辺<rt>うへん</rt></ruby>に<ruby>移項<rt>いこう</rt></ruby>',
        },
        {
          formula: '$y = \\frac{8 - 3x}{2}$',
          animateInsert: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を 2 で<ruby>割<rt>わ</rt></ruby>って<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>移項<rt>いこう</rt></ruby>して<ruby>割<rt>わ</rt></ruby>るだけ！<ruby>方程式<rt>ほうていしき</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ<ruby>感覚<rt>かんかく</rt></ruby>でできますね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>公式<rt>こうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>！$S = \\frac{1}{2}ab$ を $a$ について<ruby>解<rt>と</rt></ruby>くと、<ruby>両辺<rt>りょうへん</rt></ruby>に 2 をかけて $2S = ab$、$b$ で<ruby>割<rt>わ</rt></ruby>って $a = \\frac{2S}{b}$ だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>: <ruby>求<rt>もと</rt></ruby>めたい<ruby>文字<rt>もじ</rt></ruby>を<ruby>左辺<rt>さへん</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>し、<ruby>他<rt>ほか</rt></ruby>を<ruby>移項<rt>いこう</rt></ruby>。<ruby>分数<rt>ぶんすう</rt></ruby>はまず<ruby>両辺<rt>りょうへん</rt></ruby>にかけて<ruby>消<rt>け</rt></ruby>す！',
    },
    {
      type: 'quiz',
      question: '<ruby>連続<rt>れんぞく</rt></ruby>する3つの<ruby>整数<rt>せいすう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>の<ruby>倍数<rt>ばいすう</rt></ruby>になる？',
      options: [
        { letter: 'A', text: '2の<ruby>倍数<rt>ばいすう</rt></ruby>', correct: false },
        { letter: 'B', text: '3の<ruby>倍数<rt>ばいすう</rt></ruby>', correct: true },
        { letter: 'C', text: '5の<ruby>倍数<rt>ばいすう</rt></ruby>', correct: false },
        { letter: 'D', text: '6の<ruby>倍数<rt>ばいすう</rt></ruby>', correct: false },
      ],
      explanation:
        '$n + (n+1) + (n+2) = 3n + 3 = \\textcolor{#D97706}{3(n+1)}$。$3 \\times$ (<ruby>整数<rt>せいすう</rt></ruby>) の<ruby>形<rt>かたち</rt></ruby>なので<strong>3の<ruby>倍数<rt>ばいすう</rt></ruby></strong>！',
    },
    {
      type: 'quiz',
      question: '$S = \\frac{1}{2}(a + b)h$ を $h$ について<ruby>解<rt>と</rt></ruby>くと？',
      options: [
        { letter: 'A', text: '$h = \\frac{S}{2(a+b)}$', correct: false },
        { letter: 'B', text: '$h = \\frac{2S}{a+b}$', correct: true },
        { letter: 'C', text: '$h = \\frac{S - a - b}{2}$', correct: false },
        { letter: 'D', text: '$h = 2S(a+b)$', correct: false },
      ],
      explanation:
        '$2S = (a+b)h$ → $h = \\textcolor{#D97706}{\\frac{2S}{a+b}}$。まず<ruby>両辺<rt>りょうへん</rt></ruby>に 2 をかけてから $(a+b)$ で<ruby>割<rt>わ</rt></ruby>る！',
    },
    {
      type: 'end',
      points: [
        '<ruby>偶数<rt>ぐうすう</rt></ruby> = $2n$、<ruby>奇数<rt>きすう</rt></ruby> = $2n + 1$、<ruby>連続<rt>れんぞく</rt></ruby>する<ruby>整数<rt>せいすう</rt></ruby> = $n, n+1, n+2$',
        '<ruby>証明<rt>しょうめい</rt></ruby>: ① <ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す → ② <ruby>計算<rt>けいさん</rt></ruby> → ③ <ruby>結論<rt>けつろん</rt></ruby>',
        '2けたの<ruby>自然数<rt>しぜんすう</rt></ruby> = $10a + b$、3けた = $100x + 10y + z$',
        'けた<ruby>入<rt>い</rt></ruby>れ<ruby>替<rt>か</rt></ruby>えの<ruby>和<rt>わ</rt></ruby>は11の<ruby>倍数<rt>ばいすう</rt></ruby>、<ruby>差<rt>さ</rt></ruby>は9の<ruby>倍数<rt>ばいすう</rt></ruby>',
        '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>: <ruby>移項<rt>いこう</rt></ruby>→<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>で<ruby>求<rt>もと</rt></ruby>めたい<ruby>文字<rt>もじ</rt></ruby>を<ruby>孤立<rt>こりつ</rt></ruby>させる',
      ],
    },
  ],
};

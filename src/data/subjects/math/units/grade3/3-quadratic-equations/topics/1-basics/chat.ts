import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const quadEqBasicsChat: HistoryChat = {
  id: 'math-g3-quad-eq-basics',
  icon: '📊',
  title: '二次方程式の基本をマスターしよう',
  subtitle: '〜中3数学〜 x²の方程式と解が2つの理由',
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
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>3<ruby>数学<rt>すうがく</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きなテーマ！<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>の<ruby>次<rt>つぎ</rt></ruby>のステップ、<strong>「<ruby>二次方程式<rt>にじほうていしき</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>を<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>してみて。$2x + 3 = 0$ みたいなやつだよね。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'はい！ $x$ の1<ruby>乗<rt>じょう</rt></ruby>が<ruby>最高<rt>さいこう</rt></ruby>のやつですよね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！<ruby>二次方程式<rt>にじほうていしき</rt></ruby>は $x$ の$\\textcolor{#D97706}{2\\text{乗}}$が<ruby>入<rt>はい</rt></ruby>る<ruby>方程式<rt>ほうていしき</rt></ruby>だよ。<ruby>標準形<rt>ひょうじゅんけい</rt></ruby>はこうなるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>の<ruby>標準形<rt>ひょうじゅんけい</rt></ruby>',
      steps: [
        {
          formula: '$ax^2 + bx + c = 0$（$a \\neq 0$）',
          annotation: '$a, b, c$ は<ruby>定数<rt>ていすう</rt></ruby>。$a$ は0<ruby>以外<rt>いがい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$a$ が0だとダメなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '$a = 0$ だと $x^2$ の<ruby>項<rt>こう</rt></ruby>が<ruby>消<rt>き</rt></ruby>えて、ただの<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>になっちゃうからね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby> = $x^2$ を<ruby>含<rt>ふく</rt></ruby>む<ruby>方程式<rt>ほうていしき</rt></ruby>。<ruby>標準形<rt>ひょうじゅんけい</rt></ruby>は $ax^2 + bx + c = 0$',
    },
    {
      type: 'quiz',
      question: '<ruby>次<rt>つぎ</rt></ruby>のうち<ruby>二次方程式<rt>にじほうていしき</rt></ruby>はどれ？',
      options: [
        { letter: 'A', text: '$3x + 5 = 0$', correct: false },
        { letter: 'B', text: '$x^2 - 4x + 3 = 0$', correct: true },
        { letter: 'C', text: '$x^3 - x = 0$', correct: false },
        { letter: 'D', text: '$2x = 6$', correct: false },
      ],
      explanation:
        '$x$ の2<ruby>乗<rt>じょう</rt></ruby>が<ruby>最高次<rt>さいこうじ</rt></ruby>のものが<ruby>二次方程式<rt>にじほうていしき</rt></ruby>。$\\textcolor{#D97706}{x^2 - 4x + 3 = 0}$ だけが<ruby>該当<rt>がいとう</rt></ruby>するよ。',
    },
    {
      type: 'date',
      text: '<ruby>解<rt>かい</rt></ruby>が2つある<ruby>理由<rt>りゆう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'じゃあ<ruby>一番<rt>いちばん</rt></ruby>シンプルな<ruby>二次方程式<rt>にじほうていしき</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えよう。$x^2 = 9$ を<ruby>解<rt>と</rt></ruby>いてみて！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えーっと、$x = 3$ ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '3 は<ruby>正解<rt>せいかい</rt></ruby>！でも、もう1つあるよ。$(-3)^2$ もいくつになる？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'あ！$(-3)^2 = 9$ だ！マイナスも<ruby>答<rt>こた</rt></ruby>えになるんですね！',
    },
    {
      type: 'whiteboard',
      title: '$x^2 = 9$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x^2 = 9$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>の<ruby>平方根<rt>へいほうこん</rt></ruby>をとる',
        },
        {
          formula: '$x = \\pm\\sqrt{9}$',
          animateInsert: true,
          annotation: 'プラスとマイナスの<ruby>両方<rt>りょうほう</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れないで！',
        },
        {
          formula: '$x = \\pm 3$',
          animateInsert: true,
          isResult: true,
          annotation: '$x = 3$ と $x = -3$ の$\\textcolor{#D97706}{2\\text{つ}}$が<ruby>解<rt>かい</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>は<ruby>解<rt>かい</rt></ruby>が$\\textcolor{#D97706}{\\text{最大2つ}}$あるのが<ruby>大<rt>おお</rt></ruby>きな<ruby>特徴<rt>とくちょう</rt></ruby>だよ！',
    },
    {
      type: 'quiz',
      question: '$x^2 = 49$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 7$', correct: false },
        { letter: 'B', text: '$x = -7$', correct: false },
        { letter: 'C', text: '$x = \\pm 7$', correct: true },
        { letter: 'D', text: '$x = 49$', correct: false },
      ],
      explanation:
        '$x^2 = 49$ なので $x = \\pm\\sqrt{49} = \\pm 7$。\n$7^2 = 49$ も $(-7)^2 = 49$ も<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$x^2 = 0$ のときはどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！ $x^2 = 0$ のときは $x = 0$ だけ。$\\pm 0$ は<ruby>結局<rt>けっきょく</rt></ruby>0だから、<ruby>解<rt>かい</rt></ruby>は$\\textcolor{#D97706}{1\\text{つ}}$だね。',
    },
    {
      type: 'summary-point',
      text: '$x^2 = k$ のとき：$k > 0$ → <ruby>解<rt>かい</rt></ruby>2つ（$x = \\pm\\sqrt{k}$）、$k = 0$ → <ruby>解<rt>かい</rt></ruby>1つ、$k < 0$ → <ruby>解<rt>かい</rt></ruby>なし',
    },
    {
      type: 'quiz',
      question: '$x^2 = 25$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 5$', correct: false },
        { letter: 'B', text: '$x = \\pm 25$', correct: false },
        { letter: 'C', text: '$x = \\pm 5$', correct: true },
        { letter: 'D', text: '$x = -5$', correct: false },
      ],
      explanation:
        '$5^2 = 25$ も $(-5)^2 = 25$ も<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つので $x = \\textcolor{#D97706}{\\pm 5}$。$\\pm$ を<ruby>忘<rt>わす</rt></ruby>れずに！',
    },
    {
      type: 'date',
      text: 'ax² = b <ruby>型<rt>がた</rt></ruby>のバリエーション',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は $ax^2 = b$ <ruby>型<rt>がた</rt></ruby>のいろんなパターンを<ruby>見<rt>み</rt></ruby>てみよう。$2x^2 - 54 = 0$ を<ruby>解<rt>と</rt></ruby>いてみて！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えーっと、$2x^2 = 54$ にして、$x^2 = 27$ で… $x = \\pm\\sqrt{27}$ ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！でも $\\sqrt{27}$ はもっと<ruby>簡単<rt>かんたん</rt></ruby>にできるよ。$\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$ だよね！',
    },
    {
      type: 'whiteboard',
      title: '$2x^2 - 54 = 0$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$2x^2 = 54$',
          annotation: '<ruby>移項<rt>いこう</rt></ruby>して<ruby>右辺<rt>うへん</rt></ruby>にまとめる',
        },
        {
          formula: '$x^2 = 27$',
          animateInsert: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を2で<ruby>割<rt>わ</rt></ruby>る',
        },
        {
          formula: '$x = \\pm\\sqrt{27} = \\pm 3\\sqrt{3}$',
          animateInsert: true,
          isResult: true,
          annotation: '$\\sqrt{27} = 3\\sqrt{3}$ に<ruby>簡単<rt>かんたん</rt></ruby>にする！',
        },
      ],
    },
    {
      type: 'quiz',
      question: '$4x^2 = 1$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = \\pm 4$', correct: false },
        { letter: 'B', text: '$x = \\pm \\frac{1}{2}$', correct: true },
        { letter: 'C', text: '$x = \\pm 2$', correct: false },
        { letter: 'D', text: '$x = \\pm \\frac{1}{4}$', correct: false },
      ],
      explanation:
        '$x^2 = \\frac{1}{4}$ なので $x = \\pm\\frac{1}{2}$。\n<ruby>分数<rt>ぶんすう</rt></ruby>になるパターンも<ruby>覚<rt>おぼ</rt></ruby>えておこう！',
    },
    {
      type: 'summary-point',
      text: '$ax^2 = b$ <ruby>型<rt>がた</rt></ruby>は $x^2 = \\frac{b}{a}$ にしてから $x = \\pm\\sqrt{\\frac{b}{a}}$。√は<ruby>簡単<rt>かんたん</rt></ruby>にしよう',
    },
    {
      type: 'quiz',
      question: '$3x^2 = 48$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = \\pm 16$', correct: false },
        { letter: 'B', text: '$x = \\pm 4$', correct: true },
        { letter: 'C', text: '$x = \\pm 4\\sqrt{3}$', correct: false },
        { letter: 'D', text: '$x = 4$', correct: false },
      ],
      explanation:
        '$x^2 = 16$ → $x = \\pm\\sqrt{16} = \\textcolor{#D97706}{\\pm 4}$',
    },
    {
      type: 'date',
      text: '(x+m)² = n <ruby>型<rt>がた</rt></ruby>の<ruby>解法<rt>かいほう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>は $(x + m)^2 = n$ <ruby>型<rt>がた</rt></ruby>だよ。$(x - 3)^2 = 5$ を<ruby>解<rt>と</rt></ruby>いてみよう。$x - 3$ を$\\textcolor{#D97706}{\\text{ひとまとまり}}$と<ruby>見<rt>み</rt></ruby>るのがコツ！',
    },
    {
      type: 'whiteboard',
      title: '$(x - 3)^2 = 5$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$(x - 3)^2 = 5$',
          annotation: '$x - 3$ をひとまとまりと<ruby>見<rt>み</rt></ruby>る',
        },
        {
          formula: '$x - 3 = \\pm\\sqrt{5}$',
          animateInsert: true,
          annotation: '<ruby>平方根<rt>へいほうこん</rt></ruby>をとる（$\\pm$ を<ruby>忘<rt>わす</rt></ruby>れずに！）',
        },
        {
          formula: '$x = 3 \\pm \\sqrt{5}$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>に3を<ruby>足<rt>た</rt></ruby>す',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！カッコの<ruby>中<rt>なか</rt></ruby>をまとめて<ruby>見<rt>み</rt></ruby>れば、$x^2 = k$ と<ruby>同<rt>おな</rt></ruby>じやり<ruby>方<rt>かた</rt></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！$(x + 5)^2 = 25$ みたいに<ruby>整数<rt>せいすう</rt></ruby>になるパターンもあるよ。$x + 5 = \\pm 5$ で $x = 0$ か $x = -10$ だね。',
    },
    {
      type: 'summary-point',
      text: '$(x+m)^2 = n$ → $x+m = \\pm\\sqrt{n}$ → $x = -m \\pm \\sqrt{n}$。カッコをひとまとまりと<ruby>見<rt>み</rt></ruby>よう',
    },
    {
      type: 'quiz',
      question: '$(x + 4)^2 = 7$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 4 \\pm \\sqrt{7}$', correct: false },
        { letter: 'B', text: '$x = -4 \\pm \\sqrt{7}$', correct: true },
        { letter: 'C', text: '$x = \\pm\\sqrt{7} - 4$', correct: false },
        { letter: 'D', text: '$x = -4 \\pm 7$', correct: false },
      ],
      explanation:
        '$x + 4 = \\pm\\sqrt{7}$ → $x = \\textcolor{#D97706}{-4 \\pm \\sqrt{7}}$。BとCは<ruby>同<rt>おな</rt></ruby>じ<ruby>意味<rt>いみ</rt></ruby>に<ruby>見<rt>み</rt></ruby>えるけど、<ruby>正<rt>ただ</rt></ruby>しい<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>はBだよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>二次方程式<rt>にじほうていしき</rt></ruby> = $ax^2 + bx + c = 0$（$a \\neq 0$）の<ruby>形<rt>かたち</rt></ruby>',
        '<ruby>解<rt>かい</rt></ruby>は<ruby>最大<rt>さいだい</rt></ruby>2つ（<ruby>正<rt>せい</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>）',
        '$ax^2 = b \\rightarrow x^2 = \\frac{b}{a} \\rightarrow x = \\pm\\sqrt{\\frac{b}{a}}$',
        '$(x+m)^2 = n \\rightarrow x = -m \\pm \\sqrt{n}$',
        '<ruby>符号<rt>ふごう</rt></ruby>（$\\pm$）を<ruby>忘<rt>わす</rt></ruby>れないことが<ruby>大切<rt>たいせつ</rt></ruby>！',
      ],
    },
  ],
};

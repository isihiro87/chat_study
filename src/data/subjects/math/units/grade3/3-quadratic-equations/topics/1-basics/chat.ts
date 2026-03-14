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
        '$x^2 = 49$ なので $x = \\pm\\sqrt{49} = \\pm 7$。$7^2 = 49$ も $(-7)^2 = 49$ も<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つよ！',
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
      type: 'end',
      points: [
        '<ruby>二次方程式<rt>にじほうていしき</rt></ruby> = $ax^2 + bx + c = 0$（$a \\neq 0$）の<ruby>形<rt>かたち</rt></ruby>',
        '<ruby>解<rt>かい</rt></ruby>は<ruby>最大<rt>さいだい</rt></ruby>2つ（<ruby>正<rt>せい</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>）',
        '$x^2 = k \\rightarrow x = \\pm\\sqrt{k}$ で<ruby>解<rt>と</rt></ruby>ける',
        '<ruby>符号<rt>ふごう</rt></ruby>（$\\pm$）を<ruby>忘<rt>わす</rt></ruby>れないことが<ruby>大切<rt>たいせつ</rt></ruby>！',
      ],
    },
  ],
};

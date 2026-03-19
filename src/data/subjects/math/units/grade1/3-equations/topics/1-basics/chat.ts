import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const eqBasicsChat: HistoryChat = {
  id: 'math-g1-eq-basics',
  icon: '📐',
  title: '方程式の基本と移項を学ぼう',
  subtitle: '〜中1数学〜 方程式の解き方の基礎',
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
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: 'まだわからない<ruby>数<rt>かず</rt></ruby>を <strong>$x$</strong> で<ruby>表<rt>あらわ</rt></ruby>して、<ruby>等式<rt>とうしき</rt></ruby>をつくろう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'こんな<ruby>問題<rt>もんだい</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えてみよう。「ある<ruby>数<rt>かず</rt></ruby>に 3 を<ruby>足<rt>た</rt></ruby>すと 7 になる。ある<ruby>数<rt>かず</rt></ruby>はいくつ？」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えっと… 4 ですよね？ 4 + 3 = 7 だから。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！これを<ruby>数学<rt>すうがく</rt></ruby>っぽく<ruby>書<rt>か</rt></ruby>くと、わからない<ruby>数<rt>かず</rt></ruby>を $x$ として <strong>$x + 3 = 7$</strong> となるよ。これが<strong>「<ruby>方程式<rt>ほうていしき</rt></ruby>」</strong>だ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>方程式<rt>ほうていしき</rt></ruby>と<ruby>解<rt>かい</rt></ruby>',
      steps: [
        {
          formula: '$x + 3 = 7$',
          annotation: 'わからない<ruby>数<rt>かず</rt></ruby> $x$ をふくむ<ruby>等式<rt>とうしき</rt></ruby> → <ruby>方程式<rt>ほうていしき</rt></ruby>',
        },
        {
          formula: '$\\textcolor{#D97706}{x = 4}$',
          annotation: '<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>たせる<ruby>値<rt>あたい</rt></ruby> → <ruby>解<rt>かい</rt></ruby>',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>：<ruby>未知数<rt>みちすう</rt></ruby>（$x$）をふくむ<ruby>等式<rt>とうしき</rt></ruby>。<ruby>解<rt>かい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めることを「<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>く」と<ruby>言<rt>い</rt></ruby>う！',
    },
    {
      type: 'date',
      text: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>くためのルールを<ruby>学<rt>まな</rt></ruby>ぼう。<ruby>等式<rt>とうしき</rt></ruby>は<ruby>天秤<rt>てんびん</rt></ruby>みたいなもの。<strong><ruby>両方<rt>りょうほう</rt></ruby>の<ruby>皿<rt>さら</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じことをすれば、つり<ruby>合<rt>あ</rt></ruby>ったまま</strong>なんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>同<rt>おな</rt></ruby>じことって、たとえば？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>（4つ）',
      steps: [
        {
          formula: '$A = B \\Rightarrow A + C = B + C$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を<ruby>足<rt>た</rt></ruby>してOK',
        },
        {
          formula: '$A = B \\Rightarrow A - C = B - C$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>から<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>いてOK',
          animateInsert: true,
        },
        {
          formula: '$A = B \\Rightarrow A \\times C = B \\times C$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>をかけてOK',
          animateInsert: true,
        },
        {
          formula: '$A = B \\Rightarrow \\dfrac{A}{C} = \\dfrac{B}{C}$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>で<ruby>割<rt>わ</rt></ruby>ってOK（$C \\neq 0$）',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！ $x + 3 = 7$ の<ruby>両辺<rt>りょうへん</rt></ruby>から 3 を<ruby>引<rt>ひ</rt></ruby>けば $x = 4$ になるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！でも<ruby>毎回<rt>まいかい</rt></ruby>「<ruby>両辺<rt>りょうへん</rt></ruby>から引いて…」と<ruby>書<rt>か</rt></ruby>くのは<ruby>大変<rt>たいへん</rt></ruby>だよね。もっとカンタンな<ruby>方法<rt>ほうほう</rt></ruby>があるんだ！',
    },
    {
      type: 'date',
      text: '<ruby>移項<rt>いこう</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「<ruby>移項<rt>いこう</rt></ruby>」とは、<ruby>等式<rt>とうしき</rt></ruby>の<ruby>一方<rt>いっぽう</rt></ruby>の<ruby>辺<rt>へん</rt></ruby>にある<ruby>項<rt>こう</rt></ruby>を、<strong><ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えて</strong><ruby>反対側<rt>はんたいがわ</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>すことだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>移項<rt>いこう</rt></ruby>のしくみ',
      steps: [
        {
          formula: '$x \\textcolor{#D97706}{+ 3} = 7$',
          annotation: '$+3$ を<ruby>反対側<rt>はんたいがわ</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>す',
        },
        {
          formula: '$x = 7 \\textcolor{#D97706}{- 3}$',
          annotation: '<ruby>符号<rt>ふごう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる（$+3 \\to -3$）',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{x = 4}$',
          annotation: '<ruby>計算<rt>けいさん</rt></ruby>して<ruby>完了<rt>かんりょう</rt></ruby>！',
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
      text: 'わあ、<ruby>簡単<rt>かんたん</rt></ruby>！ $+$ のものを<ruby>移項<rt>いこう</rt></ruby>すると $-$ になって、$-$ のものは $+$ になるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！じゃあ<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しい<ruby>問題<rt>もんだい</rt></ruby>に<ruby>挑戦<rt>ちょうせん</rt></ruby>しよう。$5x + 2 = 3x + 8$ を<ruby>解<rt>と</rt></ruby>いてみよう！',
    },
    {
      type: 'whiteboard',
      title: '$5x + 2 = 3x + 8$ を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$5x + 2 = 3x + 8$',
          annotation: '$x$ の<ruby>項<rt>こう</rt></ruby>を<ruby>左辺<rt>さへん</rt></ruby>、<ruby>数<rt>かず</rt></ruby>の<ruby>項<rt>こう</rt></ruby>を<ruby>右辺<rt>うへん</rt></ruby>にまとめよう',
        },
        {
          formula: '$5x - 3x = 8 - 2$',
          annotation: '$3x$ を<ruby>移項<rt>いこう</rt></ruby>（$\\to -3x$）、$+2$ を<ruby>移項<rt>いこう</rt></ruby>（$\\to -2$）',
          animateInsert: true,
        },
        {
          formula: '$2x = 6$',
          annotation: '<ruby>整理<rt>せいり</rt></ruby>して $ax = b$ の<ruby>形<rt>かたち</rt></ruby>に',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{x = 3}$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を 2 で<ruby>割<rt>わ</rt></ruby>る',
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
      text: '<ruby>確<rt>たし</rt></ruby>かめ！ $5(3)+2=17$、$3(3)+8=17$。<ruby>両辺<rt>りょうへん</rt></ruby><ruby>同<rt>おな</rt></ruby>じだ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>の<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>：① <ruby>移項<rt>いこう</rt></ruby>して $ax = b$ にまとめる → ② <ruby>両辺<rt>りょうへん</rt></ruby>を $a$ で<ruby>割<rt>わ</rt></ruby>る → ③ <ruby>確<rt>たし</rt></ruby>かめ！',
    },
    {
      type: 'quiz',
      question: '$4x - 5 = 11$ の<ruby>解<rt>かい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 2$', correct: false },
        { letter: 'B', text: '$x = 4$', correct: true },
        { letter: 'C', text: '$x = 6$', correct: false },
        { letter: 'D', text: '$x = 16$', correct: false },
      ],
      explanation:
        '$-5$ を<ruby>移項<rt>いこう</rt></ruby>して $4x = 16$。<ruby>両辺<rt>りょうへん</rt></ruby>を 4 で<ruby>割<rt>わ</rt></ruby>ると $x = \\textcolor{#D97706}{4}$。\n<ruby>確<rt>たし</rt></ruby>かめ: $4(4)-5=11$ ✓',
    },
    {
      type: 'end',
      points: [
        '<ruby>方程式<rt>ほうていしき</rt></ruby>：<ruby>未知数<rt>みちすう</rt></ruby>（$x$）をふくむ<ruby>等式<rt>とうしき</rt></ruby>。<ruby>解<rt>かい</rt></ruby>：<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>たせる<ruby>値<rt>あたい</rt></ruby>',
        '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>：<ruby>両辺<rt>りょうへん</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を<ruby>加減乗除<rt>かげんじょうじょ</rt></ruby>しても<ruby>等式<rt>とうしき</rt></ruby>は<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つ',
        '<ruby>移項<rt>いこう</rt></ruby>：<ruby>項<rt>こう</rt></ruby>を<ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えて<ruby>反対側<rt>はんたいがわ</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>すこと',
        '<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>：<ruby>移項<rt>いこう</rt></ruby>して $ax = b$ の<ruby>形<rt>かたち</rt></ruby>にし、$a$ で<ruby>割<rt>わ</rt></ruby>る',
      ],
    },
  ],
};

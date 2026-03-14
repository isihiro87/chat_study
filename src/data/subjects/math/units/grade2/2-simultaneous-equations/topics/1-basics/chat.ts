import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const simulEqBasicsChat: HistoryChat = {
  id: 'math-g2-simul-eq-basics',
  icon: '🔗',
  title: '連立方程式の基本を学ぼう',
  subtitle: '〜中2数学〜 2つの式で解を求める',
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
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1で<ruby>習<rt>なら</rt></ruby>った<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>では <strong>x</strong> が1つだったけど、<ruby>今度<rt>こんど</rt></ruby>は <strong>x と y の2つ</strong>が<ruby>登場<rt>とうじょう</rt></ruby>するよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'こんな<ruby>問題<rt>もんだい</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えてみよう。「りんごとみかんを<ruby>合<rt>あ</rt></ruby>わせて 5<ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>いました。りんごはみかんより 1<ruby>個<rt>こ</rt></ruby><ruby>多<rt>おお</rt></ruby>いです。」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'りんごを x<ruby>個<rt>こ</rt></ruby>、みかんを y<ruby>個<rt>こ</rt></ruby>とすると… x + y = 5 で、x − y = 1 ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！こうやって <strong>2つの<ruby>式<rt>しき</rt></ruby></strong>を<ruby>立<rt>た</rt></ruby>てることができるね。これが<strong>「<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>」</strong>だよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 5 \\quad \\cdots \\textcircled{1} \\\\ x - y = 1 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>合計<rt>ごうけい</rt></ruby>が5<ruby>個<rt>こ</rt></ruby>、りんごがみかんより1<ruby>個<rt>こ</rt></ruby><ruby>多<rt>おお</rt></ruby>い',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'でも x + y = 5 だけだと、<ruby>答<rt>こた</rt></ruby>えっていっぱいありませんか？(1,4) とか (2,3) とか…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！1つの<ruby>式<rt>しき</rt></ruby>だけだと<ruby>答<rt>こた</rt></ruby>えは<ruby>無限<rt>むげん</rt></ruby>にあるんだ。でも <strong>2つの<ruby>式<rt>しき</rt></ruby>を<ruby>同時<rt>どうじ</rt></ruby>に<ruby>満<rt>み</rt></ruby>たす</strong><ruby>値<rt>あたい</rt></ruby>を<ruby>探<rt>さが</rt></ruby>せば、<ruby>答<rt>こた</rt></ruby>えが1つに<ruby>決<rt>き</rt></ruby>まるよ！',
    },
    {
      type: 'summary-point',
      text: '1つの<ruby>式<rt>しき</rt></ruby>だけだと<ruby>解<rt>かい</rt></ruby>は<ruby>無限<rt>むげん</rt></ruby>。<strong>2つの<ruby>式<rt>しき</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせる</strong>と<ruby>解<rt>かい</rt></ruby>が1つに<ruby>決<rt>き</rt></ruby>まる！',
    },
    {
      type: 'date',
      text: '<ruby>解<rt>かい</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さっきの<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみよう。<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>は、<strong>どちらか1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>す</strong>ことだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>す？どうやって？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '①と②を<ruby>足<rt>た</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '2つの<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>す',
      steps: [
        {
          formula:
            '$\\begin{array}{rrcl} & x + y &=& 5 \\\\ +) & x - y &=& 1 \\\\ \\hline & 2x &=& 6 \\end{array}$',
          animateInsert: true,
          annotation:
            '+y と −y が<ruby>打<rt>う</rt></ruby>ち<ruby>消<rt>け</rt></ruby>し<ruby>合<rt>あ</rt></ruby>って <strong>y が<ruby>消<rt>き</rt></ruby>えた</strong>！',
        },
        {
          formula: '$x = 3$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を 2 で<ruby>割<rt>わ</rt></ruby>る → x = 3',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'おお！ y が<ruby>消<rt>き</rt></ruby>えた！ x = 3 を①に<ruby>入<rt>い</rt></ruby>れると、3 + y = 5 だから y = 2 ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>正解<rt>せいかい</rt></ruby>！りんごが 3<ruby>個<rt>こ</rt></ruby>、みかんが 2<ruby>個<rt>こ</rt></ruby>。<ruby>確<rt>たし</rt></ruby>かめると 3 + 2 = 5 ✓、3 − 2 = 1 ✓。<ruby>両方<rt>りょうほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>を<ruby>満<rt>み</rt></ruby>たしているね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>のコツ：<strong>1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>して</strong>、もう1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>求<rt>もと</rt></ruby>める！',
    },
    {
      type: 'quiz',
      question: '$x + y = 10$、$x - y = 4$ のとき、$x$ の<ruby>値<rt>あたい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 3$', correct: false },
        { letter: 'B', text: '$x = 5$', correct: false },
        { letter: 'C', text: '$x = 7$', correct: true },
        { letter: 'D', text: '$x = 10$', correct: false },
      ],
      explanation:
        '2つの<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>すと $2x = 14 \\rightarrow x = \\textcolor{#D97706}{7}$。$y = 10 - 7 = 3$ だよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>二元一次方程式<rt>にげんいちじほうていしき</rt></ruby>：$x$ と $y$ の2つの<ruby>文字<rt>もじ</rt></ruby>をふくむ<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>',
        '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>：2つの<ruby>式<rt>しき</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせたもの',
        '<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>：<ruby>片方<rt>かたほう</rt></ruby>の<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>して、もう<ruby>片方<rt>かたほう</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>求<rt>もと</rt></ruby>める',
        '<ruby>求<rt>もと</rt></ruby>めた<ruby>値<rt>あたい</rt></ruby>をもとの<ruby>式<rt>しき</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>して、もう1つの<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める',
      ],
    },
  ],
};

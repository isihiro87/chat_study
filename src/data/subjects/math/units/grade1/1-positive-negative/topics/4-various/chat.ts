import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const variousCalcChat: HistoryChat = {
  id: 'math-g1-various',
  icon: '🔬',
  title: 'いろいろな<ruby>計算<rt>けいさん</rt></ruby>と<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>累乗<rt>るいじょう</rt></ruby>・<ruby>四則混合<rt>しそくこんごう</rt></ruby>・<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>',
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
      text: '<ruby>累乗<rt>るいじょう</rt></ruby>と<ruby>指数<rt>しすう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を<ruby>何回<rt>なんかい</rt></ruby>もかけ<ruby>合<rt>あ</rt></ruby>わせる<ruby>表現<rt>ひょうげん</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぼう。<strong>「<ruby>累乗<rt>るいじょう</rt></ruby>」</strong>と<strong>「<ruby>指数<rt>しすう</rt></ruby>」</strong>だよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>しかけるとき、<ruby>右上<rt>みぎうえ</rt></ruby>に<ruby>小<rt>ちい</rt></ruby>さな<ruby>数字<rt>すうじ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いて<ruby>表<rt>あらわ</rt></ruby>すよ。この<ruby>小<rt>ちい</rt></ruby>さな<ruby>数字<rt>すうじ</rt></ruby>を<strong>「<ruby>指数<rt>しすう</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>累乗<rt>るいじょう</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$3^2 = 3 \\times 3 = \\textcolor{#D97706}{9}$',
          annotation: '$3$ の $2$ <ruby>乗<rt>じょう</rt></ruby>',
        },
        {
          formula: '$2^4 = 2 \\times 2 \\times 2 \\times 2 = \\textcolor{#D97706}{16}$',
          annotation: '$2$ の $4$ <ruby>乗<rt>じょう</rt></ruby>',
        },
        {
          formula: '$(-3)^2 = (-3) \\times (-3) = \\textcolor{#D97706}{+9}$',
          animateInsert: true,
          annotation: 'かっこ<ruby>付<rt>つ</rt></ruby>き！<ruby>負<rt>ふ</rt></ruby> × <ruby>負<rt>ふ</rt></ruby> = <ruby>正<rt>せい</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$(-3)^2$ と $-3^2$ は<ruby>違<rt>ちが</rt></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'とてもいい<ruby>質問<rt>しつもん</rt></ruby>！<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>違<rt>ちが</rt></ruby>うんだ。これは<ruby>テスト<rt>てすと</rt></ruby>でもよく<ruby>間違<rt>まちが</rt></ruby>えるポイントだよ。',
    },
    {
      type: 'whiteboard',
      title: 'かっこの<ruby>有無<rt>うむ</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>！',
      steps: [
        {
          formula: '$(-3)^2 = (-3) \\times (-3) = \\textcolor{#D97706}{+9}$',
          annotation: '「$-3$ <ruby>全体<rt>ぜんたい</rt></ruby>」を $2$ <ruby>回<rt>かい</rt></ruby>かける',
        },
        {
          formula: '$-3^2 = -(3 \\times 3) = \\textcolor{#D97706}{-9}$',
          animateInsert: true,
          annotation: '「$3^2$ を<ruby>計算<rt>けいさん</rt></ruby>してから<ruby>符号<rt>ふごう</rt></ruby>をつける」',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$+9$ と $-9$ で<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>違<rt>ちが</rt></ruby>う！かっこがあるかないかで<ruby>結果<rt>けっか</rt></ruby>が<ruby>変<rt>か</rt></ruby>わるんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>累乗<rt>るいじょう</rt></ruby> = <ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>の<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>し。$(-3)^2 = 9$ と $-3^2 = -9$ は<ruby>別物<rt>べつもの</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>四則混合計算<rt>しそくこんごうけいさん</rt></ruby>の<ruby>順序<rt>じゅんじょ</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>・<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>・かけ<ruby>算<rt>ざん</rt></ruby>・わり<ruby>算<rt>ざん</rt></ruby>が<ruby>混<rt>ま</rt></ruby>ざった<ruby>式<rt>しき</rt></ruby>は、<ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>って<ruby>計算<rt>けいさん</rt></ruby>しよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>四則混合計算<rt>しそくこんごうけいさん</rt></ruby>には<ruby>計算<rt>けいさん</rt></ruby>の<ruby>順番<rt>じゅんばん</rt></ruby>があるよ。この<ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>らないと<ruby>答<rt>こた</rt></ruby>えが<ruby>変<rt>か</rt></ruby>わってしまうから<ruby>注意<rt>ちゅうい</rt></ruby>してね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>計算<rt>けいさん</rt></ruby>の<ruby>順番<rt>じゅんばん</rt></ruby>',
      steps: [
        {
          formula: '① <ruby>累乗<rt>るいじょう</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>',
          annotation: '$2^3$ → $8$ に<ruby>変換<rt>へんかん</rt></ruby>',
        },
        {
          formula: '② かっこの<ruby>中<rt>なか</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>',
          annotation: '$(3 + 5)$ → $8$ に<ruby>変換<rt>へんかん</rt></ruby>',
        },
        {
          formula: '③ <ruby>乗法<rt>じょうほう</rt></ruby>・<ruby>除法<rt>じょほう</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>',
          annotation: 'かけ<ruby>算<rt>ざん</rt></ruby>・わり<ruby>算<rt>ざん</rt></ruby>を<ruby>優先<rt>ゆうせん</rt></ruby>',
        },
        {
          formula: '④ <ruby>最後<rt>さいご</rt></ruby>に<ruby>加法<rt>かほう</rt></ruby>・<ruby>減法<rt>げんぽう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>',
          animateInsert: true,
          annotation: '<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>・<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>は<ruby>最後<rt>さいご</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>実際<rt>じっさい</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>計算例<rt>けいさんれい</rt></ruby>',
      steps: [
        {
          formula: '$4 + 3 \\times (-2)^2$',
          annotation: '<ruby>順番<rt>じゅんばん</rt></ruby>どおりに<ruby>計算<rt>けいさん</rt></ruby>しよう',
        },
        {
          formula: '$= 4 + 3 \\times \\textcolor{#D97706}{4}$',
          annotation: '① <ruby>累乗<rt>るいじょう</rt></ruby>: $(-2)^2 = 4$',
          animateInsert: true,
        },
        {
          formula: '$= 4 + \\textcolor{#D97706}{12}$',
          annotation: '③ かけ<ruby>算<rt>ざん</rt></ruby>: $3 \\times 4 = 12$',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{16}$',
          isResult: true,
          annotation: '④ <ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>: $4 + 12 = 16$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>累乗<rt>るいじょう</rt></ruby>→かけ<ruby>算<rt>ざん</rt></ruby>→<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>の<ruby>順<rt>じゅん</rt></ruby>で<ruby>計算<rt>けいさん</rt></ruby>するんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>四則混合計算<rt>しそくこんごうけいさん</rt></ruby>の<ruby>順番<rt>じゅんばん</rt></ruby>: <ruby>累乗<rt>るいじょう</rt></ruby> → かっこ → <ruby>乗除<rt>じょうじょ</rt></ruby> → <ruby>加減<rt>かげん</rt></ruby>。',
    },
    {
      type: 'date',
      text: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>計算<rt>けいさん</rt></ruby>を<ruby>工夫<rt>くふう</rt></ruby>するための<ruby>便利<rt>べんり</rt></ruby>な<ruby>法則<rt>ほうそく</rt></ruby>、<strong>「<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>は、かっこの<ruby>外<rt>そと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をかっこの<ruby>中<rt>なか</rt></ruby>のそれぞれの<ruby>項<rt>こう</rt></ruby>にかける<ruby>法則<rt>ほうそく</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>',
      steps: [
        {
          formula: '$a \\times (b + c) = a \\times b + a \\times c$',
          annotation: '<ruby>基本<rt>きほん</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>',
        },
        {
          formula: '$(-4) \\times (6 - 2)$',
          annotation: '<ruby>実際<rt>じっさい</rt></ruby>に<ruby>使<rt>つか</rt></ruby>ってみよう',
        },
        {
          formula: '$= (-4) \\times 6 + (-4) \\times (-2)$',
          annotation: '<ruby>分配<rt>ぶんぱい</rt></ruby>する！',
          animateInsert: true,
        },
        {
          formula: '$= -24 + 8 = \\textcolor{#D97706}{-16}$',
          isResult: true,
          annotation: '',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>逆<rt>ぎゃく</rt></ruby>に<ruby>共通<rt>きょうつう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>でくくることもできるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのとおり！<ruby>例<rt>たと</rt></ruby>えば $99 \\times 7 = (100 - 1) \\times 7 = 700 - 7 = 693$ のように、<ruby>計算<rt>けいさん</rt></ruby>を<ruby>楽<rt>らく</rt></ruby>にできるよ！',
    },
    {
      type: 'date',
      text: '<ruby>素数<rt>そすう</rt></ruby>と<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>数<rt>かず</rt></ruby>の<ruby>世界<rt>せかい</rt></ruby>の「<ruby>原子<rt>げんし</rt></ruby>」とも<ruby>言<rt>い</rt></ruby>える<strong>「<ruby>素数<rt>そすう</rt></ruby>」</strong>と、<ruby>数<rt>かず</rt></ruby>を<ruby>素数<rt>そすう</rt></ruby>に<ruby>分解<rt>ぶんかい</rt></ruby>する<strong>「<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$1$ とその<ruby>数自身<rt>かずじしん</rt></ruby>のほかに<ruby>約数<rt>やくすう</rt></ruby>がない<ruby>自然数<rt>しぜんすう</rt></ruby>を<strong>「<ruby>素数<rt>そすう</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。ただし $1$ は<ruby>素数<rt>そすう</rt></ruby>ではないよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>素数<rt>そすう</rt></ruby>',
      steps: [
        {
          formula: '<ruby>素数<rt>そすう</rt></ruby>: $2, 3, 5, 7, 11, 13, 17, 19, 23, \\ldots$',
          annotation: '$1$ は<ruby>素数<rt>そすう</rt></ruby>ではない！',
        },
        {
          formula: '$2$ は<ruby>唯一<rt>ゆいいつ</rt></ruby>の<ruby>偶数<rt>ぐうすう</rt></ruby>の<ruby>素数<rt>そすう</rt></ruby>',
          animateInsert: true,
          annotation: '$4, 6, 8, \\ldots$ は $2$ で<ruby>割<rt>わ</rt></ruby>れるから<ruby>素数<rt>そすう</rt></ruby>じゃない',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>ってどうやるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>小<rt>ちい</rt></ruby>さい<ruby>素数<rt>そすう</rt></ruby>から<ruby>順番<rt>じゅんばん</rt></ruby>に<ruby>割<rt>わ</rt></ruby>っていくんだよ。やってみよう！',
    },
    {
      type: 'whiteboard',
      title: '$60$ の<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>',
      steps: [
        {
          formula: '$60 \\div 2 = 30$',
          annotation: '$2$ で<ruby>割<rt>わ</rt></ruby>れる！',
        },
        {
          formula: '$30 \\div 2 = 15$',
          annotation: 'もう1<ruby>回<rt>かい</rt></ruby> $2$ で<ruby>割<rt>わ</rt></ruby>れる！',
        },
        {
          formula: '$15 \\div 3 = 5$',
          annotation: '$2$ では<ruby>割<rt>わ</rt></ruby>れないから $3$ で',
        },
        {
          formula: '$5$ は<ruby>素数<rt>そすう</rt></ruby>なので<ruby>終了<rt>しゅうりょう</rt></ruby>！',
          annotation: '',
        },
        {
          formula: '$60 = \\textcolor{#D97706}{2^2 \\times 3 \\times 5}$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>素数<rt>そすう</rt></ruby>だけの<ruby>積<rt>せき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せた！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>小<rt>ちい</rt></ruby>さい<ruby>素数<rt>そすう</rt></ruby>から<ruby>順番<rt>じゅんばん</rt></ruby>に<ruby>割<rt>わ</rt></ruby>っていけばいいんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>素数<rt>そすう</rt></ruby> = $1$ とその<ruby>数<rt>かず</rt></ruby>だけが<ruby>約数<rt>やくすう</rt></ruby>の<ruby>自然数<rt>しぜんすう</rt></ruby>（$1$ は<ruby>除<rt>のぞ</rt></ruby>く）。<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby> = <ruby>素数<rt>そすう</rt></ruby>の<ruby>積<rt>せき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>すこと。',
    },
    {
      type: 'quiz',
      question: '$(-2)^3 + 4 \\times 3$ の<ruby>計算結果<rt>けいさんけっか</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$4$', correct: true },
        { letter: 'B', text: '$-4$', correct: false },
        { letter: 'C', text: '$20$', correct: false },
        { letter: 'D', text: '$-20$', correct: false },
      ],
      explanation:
        '<ruby>累乗<rt>るいじょう</rt></ruby>: $(-2)^3 = -8$、かけ<ruby>算<rt>ざん</rt></ruby>: $4 \\times 3 = 12$、<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>: $-8 + 12 = \\textcolor{#D97706}{4}$ だよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>累乗<rt>るいじょう</rt></ruby> = <ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>の<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>し。$(-a)^n$ と $-a^n$ は<ruby>別物<rt>べつもの</rt></ruby>',
        '<ruby>計算<rt>けいさん</rt></ruby>の<ruby>順番<rt>じゅんばん</rt></ruby>: <ruby>累乗<rt>るいじょう</rt></ruby> → かっこ → <ruby>乗除<rt>じょうじょ</rt></ruby> → <ruby>加減<rt>かげん</rt></ruby>',
        '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>: $a(b+c) = ab + ac$',
        '<ruby>素因数分解<rt>そいんすうぶんかい</rt></ruby>: <ruby>小<rt>ちい</rt></ruby>さい<ruby>素数<rt>そすう</rt></ruby>から<ruby>順<rt>じゅん</rt></ruby>に<ruby>割<rt>わ</rt></ruby>る',
      ],
    },
  ],
};

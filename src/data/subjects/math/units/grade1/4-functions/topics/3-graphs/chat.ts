import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const funcGraphsChat: HistoryChat = {
  id: 'math-g1-graphs',
  icon: '🔍',
  title: '<ruby>比例<rt>ひれい</rt></ruby>・<ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 グラフで<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>こう',
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
      text: 'グラフから<ruby>式<rt>しき</rt></ruby>を<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ろう',
    },
    {
      type: 'narrator',
      text: '<ruby>比例<rt>ひれい</rt></ruby>・<ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby>とグラフを<ruby>学<rt>まな</rt></ruby>んだら、いよいよ<strong><ruby>実際<rt>じっさい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby></strong>を<ruby>解<rt>と</rt></ruby>いてみよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'グラフを<ruby>見<rt>み</rt></ruby>て<ruby>式<rt>しき</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう。<ruby>比例<rt>ひれい</rt></ruby>のグラフ<ruby>上<rt>じょう</rt></ruby>の<ruby>点<rt>てん</rt></ruby>を1つ<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>れば、<ruby>比例定数<rt>ひれいていすう</rt></ruby>がわかるよ。',
    },
    {
      type: 'whiteboard',
      title: 'グラフから<ruby>比例<rt>ひれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める',
      steps: [
        {
          formula: 'グラフが<ruby>点<rt>てん</rt></ruby> $(3, 9)$ を<ruby>通<rt>とお</rt></ruby>る',
          annotation: '<ruby>点<rt>てん</rt></ruby>の<ruby>座標<rt>ざひょう</rt></ruby>を<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>る',
        },
        {
          formula: '$a = \\frac{y}{x} = \\frac{9}{3} = 3$',
          annotation: '<ruby>比例定数<rt>ひれいていすう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{y = 3x}$',
          annotation: '<ruby>式<rt>しき</rt></ruby>の<ruby>完成<rt>かんせい</rt></ruby>！',
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>点<rt>てん</rt></ruby>の $y$ を $x$ で<ruby>割<rt>わ</rt></ruby>るだけで<ruby>式<rt>しき</rt></ruby>がわかるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>のときは $a = xy$ で<ruby>求<rt>もと</rt></ruby>めるよ。<ruby>点<rt>てん</rt></ruby> $(4, 5)$ を<ruby>通<rt>とお</rt></ruby>るなら $a = 4 \\times 5 = 20$ で $y = \\frac{20}{x}$ だ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>比例<rt>ひれい</rt></ruby>: $a = \\frac{y}{x}$、<ruby>反比例<rt>はんぴれい</rt></ruby>: $a = xy$ でグラフから<ruby>式<rt>しき</rt></ruby>を<ruby>求<rt>もと</rt></ruby>められる。',
    },
    {
      type: 'date',
      text: '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>（<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>）',
    },
    {
      type: 'narrator',
      text: '<ruby>身近<rt>みぢか</rt></ruby>な<ruby>問題<rt>もんだい</rt></ruby>を<ruby>比例<rt>ひれい</rt></ruby>で<ruby>解<rt>と</rt></ruby>いてみよう！<ruby>速<rt>はや</rt></ruby>さ・<ruby>距離<rt>きょり</rt></ruby>・<ruby>時間<rt>じかん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>は<ruby>比例<rt>ひれい</rt></ruby>の<ruby>典型<rt>てんけい</rt></ruby>だよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>問題<rt>もんだい</rt></ruby>！<ruby>毎分<rt>まいふん</rt></ruby> $60\\text{m}$ で<ruby>歩<rt>ある</rt></ruby>くとき、$x$ <ruby>分後<rt>ふんご</rt></ruby>に<ruby>進<rt>すす</rt></ruby>む<ruby>道<rt>みち</rt></ruby>のりを $y\\text{m}$ とする。$10$ <ruby>分後<rt>ふんご</rt></ruby>には<ruby>何<rt>なん</rt></ruby>m <ruby>進<rt>すす</rt></ruby>む？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>道<rt>みち</rt></ruby>のり $=$ <ruby>速<rt>はや</rt></ruby>さ $\\times$ <ruby>時間<rt>じかん</rt></ruby> だから… $y = 60x$ ですね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>を<ruby>比例<rt>ひれい</rt></ruby>で<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$y = 60x$（<ruby>比例<rt>ひれい</rt></ruby>の<ruby>式<rt>しき</rt></ruby>）',
          annotation: '<ruby>速<rt>はや</rt></ruby>さ $60$ が<ruby>比例定数<rt>ひれいていすう</rt></ruby>',
        },
        {
          formula: '$x = 10$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$y = 60 \\times 10 = \\textcolor{#D97706}{600}$',
          annotation: '$10$ <ruby>分後<rt>ふんご</rt></ruby>に $600\\text{m}$ <ruby>進<rt>すす</rt></ruby>む',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>正解<rt>せいかい</rt></ruby>！<ruby>速<rt>はや</rt></ruby>さが<ruby>一定<rt>いってい</rt></ruby>のとき、<ruby>時間<rt>じかん</rt></ruby>と<ruby>距離<rt>きょり</rt></ruby>は<ruby>比例<rt>ひれい</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>だよ。<ruby>逆<rt>ぎゃく</rt></ruby>に、$450\\text{m}$ <ruby>進<rt>すす</rt></ruby>むのにかかる<ruby>時間<rt>じかん</rt></ruby>も<ruby>求<rt>もと</rt></ruby>められるよ。',
    },
    {
      type: 'whiteboard',
      title: '$450\\text{m}$ <ruby>進<rt>すす</rt></ruby>むのに<ruby>何分<rt>なんぷん</rt></ruby>？',
      steps: [
        {
          formula: '$450 = 60x$',
          annotation: '$y = 450$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$x = \\frac{450}{60} = \\textcolor{#D97706}{7.5}$',
          annotation: '$7.5$ <ruby>分<rt>ふん</rt></ruby>（$7$ <ruby>分<rt>ふん</rt></ruby> $30$ <ruby>秒<rt>びょう</rt></ruby>）',
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
      text: '<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てれば、<ruby>距離<rt>きょり</rt></ruby>から<ruby>時間<rt>じかん</rt></ruby>も<ruby>求<rt>もと</rt></ruby>められるんですね！<ruby>便利<rt>べんり</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '<ruby>毎分<rt>まいふん</rt></ruby> $80\\text{m}$ で<ruby>走<rt>はし</rt></ruby>るとき、$5$ <ruby>分後<rt>ふんご</rt></ruby>に<ruby>進<rt>すす</rt></ruby>む<ruby>距離<rt>きょり</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$85\\text{m}$', correct: false },
        { letter: 'B', text: '$16\\text{m}$', correct: false },
        { letter: 'C', text: '$400\\text{m}$', correct: true },
        { letter: 'D', text: '$800\\text{m}$', correct: false },
      ],
      explanation:
        '$y = 80 \\times 5 = \\textcolor{#D97706}{400}\\text{m}$ だよ。<ruby>速<rt>はや</rt></ruby>さ $\\times$ <ruby>時間<rt>じかん</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>反比例<rt>はんぴれい</rt></ruby>も<ruby>日常<rt>にちじょう</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>で<ruby>大活躍<rt>だいかつやく</rt></ruby>！<ruby>面積<rt>めんせき</rt></ruby><ruby>一定<rt>いってい</rt></ruby>や<ruby>歯車<rt>はぐるま</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみよう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>歯車<rt>はぐるま</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>をやってみよう。<ruby>歯数<rt>はすう</rt></ruby> $24$ の<ruby>歯車<rt>はぐるま</rt></ruby>Aと<ruby>歯数<rt>はすう</rt></ruby> $x$ の<ruby>歯車<rt>はぐるま</rt></ruby>Bがかみ<ruby>合<rt>あ</rt></ruby>っている。Aが $10$ <ruby>回転<rt>かいてん</rt></ruby>するとき、Bの<ruby>回転数<rt>かいてんすう</rt></ruby> $y$ を<ruby>求<rt>もと</rt></ruby>めよう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>歯車<rt>はぐるま</rt></ruby>って<ruby>反比例<rt>はんぴれい</rt></ruby>なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>歯車<rt>はぐるま</rt></ruby>では「<ruby>歯数<rt>はすう</rt></ruby> $\\times$ <ruby>回転数<rt>かいてんすう</rt></ruby>」が<ruby>一定<rt>いってい</rt></ruby>になるんだ。<ruby>積<rt>せき</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>ということは…<ruby>反比例<rt>はんぴれい</rt></ruby>だね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>歯車<rt>はぐるま</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: 'A: <ruby>歯数<rt>はすう</rt></ruby> $24$, <ruby>回転数<rt>かいてんすう</rt></ruby> $10$',
          annotation: 'Aの<ruby>情報<rt>じょうほう</rt></ruby>',
        },
        {
          formula: '$24 \\times 10 = x \\times y$',
          annotation: '<ruby>歯数<rt>はすう</rt></ruby> $\\times$ <ruby>回転数<rt>かいてんすう</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しい',
          animateInsert: true,
        },
        {
          formula: '$xy = 240$',
          annotation: '<ruby>積<rt>せき</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>（<ruby>反比例<rt>はんぴれい</rt></ruby>！）',
        },
        {
          formula: '$\\textcolor{#D97706}{y = \\frac{240}{x}}$',
          annotation: 'Bの<ruby>回転数<rt>かいてんすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>',
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'たとえばBの<ruby>歯数<rt>はすう</rt></ruby>が $30$ なら、$y = \\frac{240}{30} = 8$ <ruby>回転<rt>かいてん</rt></ruby>だね。<ruby>歯数<rt>はすう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い<ruby>歯車<rt>はぐるま</rt></ruby>ほど<ruby>回転数<rt>かいてんすう</rt></ruby>は<ruby>少<rt>すく</rt></ruby>なくなる！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>大<rt>おお</rt></ruby>きい<ruby>歯車<rt>はぐるま</rt></ruby>はゆっくり<ruby>回<rt>まわ</rt></ruby>るってことですね！<ruby>自転車<rt>じてんしゃ</rt></ruby>のギアと<ruby>同<rt>おな</rt></ruby>じだ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>歯車<rt>はぐるま</rt></ruby>: <ruby>歯数<rt>はすう</rt></ruby> $\\times$ <ruby>回転数<rt>かいてんすう</rt></ruby> $=$ <ruby>一定<rt>いってい</rt></ruby>（<ruby>反比例<rt>はんぴれい</rt></ruby>）。<ruby>仕事量<rt>しごとりょう</rt></ruby>: <ruby>人数<rt>にんずう</rt></ruby> $\\times$ <ruby>日数<rt>にっすう</rt></ruby> $=$ <ruby>一定<rt>いってい</rt></ruby>（<ruby>反比例<rt>はんぴれい</rt></ruby>）。',
    },
    {
      type: 'date',
      text: '<ruby>比例<rt>ひれい</rt></ruby>か<ruby>反比例<rt>はんぴれい</rt></ruby>かの<ruby>見分<rt>みわ</rt></ruby>け<ruby>方<rt>かた</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>最後<rt>さいご</rt></ruby>に、<ruby>問題<rt>もんだい</rt></ruby>が<ruby>比例<rt>ひれい</rt></ruby>か<ruby>反比例<rt>はんぴれい</rt></ruby>かを<ruby>見分<rt>みわ</rt></ruby>ける<ruby>コツ<rt>こつ</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>見分<rt>みわ</rt></ruby>け<ruby>方<rt>かた</rt></ruby>はシンプル！$\\frac{y}{x}$ を<ruby>計算<rt>けいさん</rt></ruby>して<ruby>一定<rt>いってい</rt></ruby>なら<ruby>比例<rt>ひれい</rt></ruby>、$xy$ を<ruby>計算<rt>けいさん</rt></ruby>して<ruby>一定<rt>いってい</rt></ruby>なら<ruby>反比例<rt>はんぴれい</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>比例<rt>ひれい</rt></ruby> vs <ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>判別法<rt>はんべつほう</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{y}{x}$ が<ruby>一定<rt>いってい</rt></ruby> → <ruby>比例<rt>ひれい</rt></ruby>（$y = ax$）',
          annotation: '<ruby>商<rt>しょう</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>！',
        },
        {
          formula: '$xy$ が<ruby>一定<rt>いってい</rt></ruby> → <ruby>反比例<rt>はんぴれい</rt></ruby>（$y = \\frac{a}{x}$）',
          annotation: '<ruby>積<rt>せき</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>！',
          animateInsert: true,
        },
        {
          formula: 'どちらも<ruby>一定<rt>いってい</rt></ruby>でない → どちらでもない',
          annotation: '<ruby>別<rt>べつ</rt></ruby>の<ruby>関数<rt>かんすう</rt></ruby>かもしれない',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>実際<rt>じっさい</rt></ruby>にやってみよう！$x$: 1, 2, 3, 4 で $y$: 3, 6, 9, 12 のとき、どっち？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>判別<rt>はんべつ</rt></ruby>の<ruby>練習<rt>れんしゅう</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{y}{x}$: $\\frac{3}{1} = 3$, $\\frac{6}{2} = 3$, $\\frac{9}{3} = 3$, $\\frac{12}{4} = 3$',
          annotation: '<ruby>全部<rt>ぜんぶ</rt></ruby> $3$ で<ruby>一定<rt>いってい</rt></ruby>！',
        },
        {
          formula: '→ $\\textcolor{#D97706}{\\text{<ruby>比例<rt>ひれい</rt></ruby>！} \\quad y = 3x}$',
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
      text: '<ruby>表<rt>ひょう</rt></ruby>から $\\frac{y}{x}$ か $xy$ を<ruby>計算<rt>けいさん</rt></ruby>すればいいんですね！テストでも<ruby>使<rt>つか</rt></ruby>えそう！',
    },
    {
      type: 'quiz',
      question: '$x$: 2, 3, 6 で $y$: 15, 10, 5。これは<ruby>比例<rt>ひれい</rt></ruby>？<ruby>反比例<rt>はんぴれい</rt></ruby>？',
      options: [
        { letter: 'A', text: '<ruby>比例<rt>ひれい</rt></ruby>', correct: false },
        { letter: 'B', text: '<ruby>反比例<rt>はんぴれい</rt></ruby>', correct: true },
        { letter: 'C', text: 'どちらでもない', correct: false },
        { letter: 'D', text: '<ruby>判断<rt>はんだん</rt></ruby>できない', correct: false },
      ],
      explanation:
        '$xy$ を<ruby>計算<rt>けいさん</rt></ruby>: $2 \\times 15 = 30$, $3 \\times 10 = 30$, $6 \\times 5 = 30$。<ruby>積<rt>せき</rt></ruby>が $\\textcolor{#D97706}{30}$ で<ruby>一定<rt>いってい</rt></ruby>なので<ruby>反比例<rt>はんぴれい</rt></ruby>だよ。',
    },
    {
      type: 'summary-point',
      text: '$\\frac{y}{x}$ <ruby>一定<rt>いってい</rt></ruby> → <ruby>比例<rt>ひれい</rt></ruby>。$xy$ <ruby>一定<rt>いってい</rt></ruby> → <ruby>反比例<rt>はんぴれい</rt></ruby>。<ruby>表<rt>ひょう</rt></ruby>があったらまず<ruby>計算<rt>けいさん</rt></ruby>してみよう！',
    },
    {
      type: 'end',
      points: [
        'グラフから<ruby>式<rt>しき</rt></ruby>: <ruby>比例<rt>ひれい</rt></ruby>は $a = \\frac{y}{x}$、<ruby>反比例<rt>はんぴれい</rt></ruby>は $a = xy$',
        '<ruby>比例<rt>ひれい</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>: <ruby>速<rt>はや</rt></ruby>さ・<ruby>距離<rt>きょり</rt></ruby>・<ruby>時間<rt>じかん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
        '<ruby>反比例<rt>はんぴれい</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>: <ruby>面積<rt>めんせき</rt></ruby><ruby>一定<rt>いってい</rt></ruby>・<ruby>歯車<rt>はぐるま</rt></ruby>・<ruby>仕事量<rt>しごとりょう</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
        '<ruby>見分<rt>みわ</rt></ruby>け<ruby>方<rt>かた</rt></ruby>: $\\frac{y}{x}$ <ruby>一定<rt>いってい</rt></ruby> → <ruby>比例<rt>ひれい</rt></ruby>、$xy$ <ruby>一定<rt>いってい</rt></ruby> → <ruby>反比例<rt>はんぴれい</rt></ruby>',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const factoringFormulasChat: HistoryChat = {
  id: 'math-g3-factoring-formulas',
  icon: '🎯',
  title: '公式を使った因数分解をマスターしよう',
  subtitle: '〜中3数学〜 かけて○足して△の数を探す',
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
      text: '「かけて○<ruby>足<rt>た</rt></ruby>して△」テクニック',
    },
    {
      type: 'narrator',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>大事<rt>だいじ</rt></ruby>なテクニック！<strong>「かけて○<ruby>足<rt>た</rt></ruby>して△」</strong>で2つの<ruby>数<rt>かず</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけよう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'x²+bx+c の<ruby>形<rt>かたち</rt></ruby>を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>するには、<strong>かけて c、<ruby>足<rt>た</rt></ruby>して b</strong> になる2つの<ruby>数<rt>かず</rt></ruby>を<ruby>探<rt>さが</rt></ruby>すんだ。',
    },
    {
      type: 'whiteboard',
      title: 'x² + 7x + 12 の<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
      steps: [
        {
          formula: '$x^2 + 7x + 12$',
          annotation: 'かけて <strong>12</strong>、<ruby>足<rt>た</rt></ruby>して <strong>7</strong> になる2つの<ruby>数<rt>かず</rt></ruby>は？',
        },
        {
          formula: '$12 = 1 \\times 12, 2 \\times 6, 3 \\times 4$',
          animateInsert: true,
          annotation: '12 になる<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせを<ruby>書<rt>か</rt></ruby>き<ruby>出<rt>だ</rt></ruby>す！',
        },
        {
          formula: '$3 + 4 = 7$ ✓',
          annotation: '<ruby>足<rt>た</rt></ruby>して 7 になるのは <strong>3 と 4</strong>！',
        },
        {
          formula: '$(x + 3)(x + 4)$',
          isResult: true,
          animateInsert: true,
          annotation: 'x² + 7x + 12 = (x+3)(x+4)',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせを<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>書<rt>か</rt></ruby>き<ruby>出<rt>だ</rt></ruby>せばいいんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>慣<rt>な</rt></ruby>れると<ruby>頭<rt>あたま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でパッと<ruby>見<rt>み</rt></ruby>つかるようになるよ。',
    },
    {
      type: 'summary-point',
      text: 'x²+bx+c → かけて c、<ruby>足<rt>た</rt></ruby>して b になる2つの<ruby>数<rt>かず</rt></ruby>を<ruby>探<rt>さが</rt></ruby>す！',
    },
    {
      type: 'date',
      text: 'マイナスがあるパターン',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'マイナスが<ruby>入<rt>はい</rt></ruby>ると<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しくなるよ。x² + 2x − 15 を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>してみよう。',
    },
    {
      type: 'whiteboard',
      title: 'x² + 2x − 15 の<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
      steps: [
        {
          formula: '$x^2 + 2x - 15$',
          annotation: 'かけて <strong>−15</strong>、<ruby>足<rt>た</rt></ruby>して <strong>2</strong> になる2つの<ruby>数<rt>かず</rt></ruby>は？',
        },
        {
          formula: '$-15 = (-3) \\times 5, 3 \\times (-5), (-1) \\times 15, 1 \\times (-15)$',
          animateInsert: true,
          annotation: 'かけてマイナスだから、<ruby>片方<rt>かたほう</rt></ruby>がマイナス！',
        },
        {
          formula: '$(-3) + 5 = 2$ ✓',
          annotation: '<ruby>足<rt>た</rt></ruby>して 2 になるのは <strong>−3 と 5</strong>！',
        },
        {
          formula: '$(x - 3)(x + 5)$',
          isResult: true,
          animateInsert: true,
          annotation: 'x² + 2x − 15 = (x−3)(x+5)',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'かけてマイナスになるときは、<ruby>片方<rt>かたほう</rt></ruby>がプラスで<ruby>片方<rt>かたほう</rt></ruby>がマイナスなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！<ruby>符号<rt>ふごう</rt></ruby>のパターンを<ruby>覚<rt>おぼ</rt></ruby>えると<ruby>早<rt>はや</rt></ruby>くなるよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>定数項<rt>ていすうこう</rt></ruby>がマイナス → 2つの<ruby>数<rt>かず</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>はプラスとマイナスの<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせ！',
    },
    {
      type: 'date',
      text: '2<ruby>乗<rt>じょう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>乗法<rt>じょうほう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>も<ruby>使<rt>つか</rt></ruby>えるよ。a²−b² の<ruby>形<rt>かたち</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけたら<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>が<ruby>使<rt>つか</rt></ruby>える！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
      steps: [
        {
          formula: '$a^2 + 2ab + b^2 = (a + b)^2$',
          annotation: '2<ruby>乗<rt>じょう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>',
        },
        {
          formula: '$a^2 - 2ab + b^2 = (a - b)^2$',
          annotation: 'マイナスの2<ruby>乗<rt>じょう</rt></ruby>',
        },
        {
          formula: '$a^2 - b^2 = (a + b)(a - b)$',
          animateInsert: true,
          annotation: '<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'x² − 25 はどうやって<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'x² − 25 = x² − 5² だから、a²−b² の<ruby>形<rt>かたち</rt></ruby>！<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>で <strong>(x+5)(x−5)</strong> になるよ。',
    },
    {
      type: 'quiz',
      question: '$x^2 - 8x + 16$ を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$(x-4)(x+4)$', correct: false },
        { letter: 'B', text: '$(x-4)^2$', correct: true },
        { letter: 'C', text: '$(x-2)(x-8)$', correct: false },
        { letter: 'D', text: '$(x+4)^2$', correct: false },
      ],
      explanation:
        '$x^2 - 8x + 16 = x^2 - 2 \\times 4 \\times x + 4^2$。$(a-b)^2$ の<ruby>形<rt>かたち</rt></ruby>で $\\textcolor{#D97706}{(x-4)^2}$ だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>公式<rt>こうしき</rt></ruby>パターンを<ruby>見抜<rt>みぬ</rt></ruby>くコツ: <ruby>最後<rt>さいご</rt></ruby>の<ruby>項<rt>こう</rt></ruby>が<ruby>何<rt>なに</rt></ruby>かの2<ruby>乗<rt>じょう</rt></ruby>か？ <ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>が 2ab になっているか？',
    },
    {
      type: 'date',
      text: '<ruby>共通因数<rt>きょうつういんすう</rt></ruby>くくり<ruby>出<rt>だ</rt></ruby>し → <ruby>公式<rt>こうしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>実<rt>じつ</rt></ruby>は<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>には<strong>2<ruby>段階<rt>だんかい</rt></ruby></strong>のパターンがあるんだ。まず<ruby>共通因数<rt>きょうつういんすう</rt></ruby>をくくり<ruby>出<rt>だ</rt></ruby>してから、<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うよ。',
    },
    {
      type: 'whiteboard',
      title: '2<ruby>段階<rt>だんかい</rt></ruby><ruby>因数分解<rt>いんすうぶんかい</rt></ruby>: $3x^2 + 9x + 6$',
      steps: [
        {
          formula: '$3x^2 + 9x + 6$',
          annotation: 'すべての<ruby>項<rt>こう</rt></ruby>に <strong>3</strong> が<ruby>共通<rt>きょうつう</rt></ruby>！',
        },
        {
          formula: '$3(x^2 + 3x + 2)$',
          animateInsert: true,
          annotation: 'まず 3 をくくり<ruby>出<rt>だ</rt></ruby>す',
        },
        {
          formula: '$3(x + 1)(x + 2)$',
          isResult: true,
          animateInsert: true,
          annotation: 'かけて2、<ruby>足<rt>た</rt></ruby>して3 → 1と2！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '3をくくってから、<ruby>中身<rt>なかみ</rt></ruby>をさらに<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>するんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>共通因数<rt>きょうつういんすう</rt></ruby>があるときは<strong><ruby>必<rt>かなら</rt></ruby>ず<ruby>先<rt>さき</rt></ruby>にくくり<ruby>出<rt>だ</rt></ruby>す</strong>のが<ruby>鉄則<rt>てっそく</rt></ruby>！<ruby>忘<rt>わす</rt></ruby>れると<ruby>不完全<rt>ふかんぜん</rt></ruby>な<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>になるよ。',
    },
    {
      type: 'quiz',
      question: '$2x^2 + 6x - 8$ を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$2(x^2+3x-4)$', correct: false },
        { letter: 'B', text: '$(2x-2)(x+4)$', correct: false },
        { letter: 'C', text: '$2(x+4)(x-1)$', correct: true },
        { letter: 'D', text: '$2(x-4)(x+1)$', correct: false },
      ],
      explanation:
        'まず $2$ をくくって $2(x^2+3x-4)$。かけて$-4$、<ruby>足<rt>た</rt></ruby>して$3$ → $4$ と $-1$。$\\textcolor{#D97706}{2(x+4)(x-1)}$',
    },
    {
      type: 'summary-point',
      text: '<ruby>共通因数<rt>きょうつういんすう</rt></ruby>を<ruby>先<rt>さき</rt></ruby>にくくり<ruby>出<rt>だ</rt></ruby>す → <ruby>残<rt>のこ</rt></ruby>りをさらに<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>！（2<ruby>段階<rt>だんかい</rt></ruby>が<ruby>大事<rt>だいじ</rt></ruby>）',
    },
    {
      type: 'date',
      text: '<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えを<ruby>使<rt>つか</rt></ruby>った<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じかたまりが<ruby>見<rt>み</rt></ruby>えたら、それを <strong>M</strong> と<ruby>置<rt>お</rt></ruby>いてシンプルにできるよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>え: $(x+2)^2 + 5(x+2) + 6$',
      steps: [
        {
          formula: '$(x+2)^2 + 5(x+2) + 6$',
          annotation: '$(x+2)$ が<ruby>共通<rt>きょうつう</rt></ruby>のかたまり！ $M = x+2$ と<ruby>置<rt>お</rt></ruby>く',
        },
        {
          formula: '$M^2 + 5M + 6$',
          animateInsert: true,
          annotation: 'おなじみの<ruby>形<rt>かたち</rt></ruby>になった！',
        },
        {
          formula: '$(M + 2)(M + 3)$',
          annotation: 'かけて6、<ruby>足<rt>た</rt></ruby>して5 → 2と3',
        },
        {
          formula: '$(x + 4)(x + 5)$',
          isResult: true,
          animateInsert: true,
          annotation: '$M$ を $(x+2)$ に<ruby>戻<rt>もど</rt></ruby>す！ $x+2+2=x+4$、$x+2+3=x+5$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'M に<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えたら<ruby>普通<rt>ふつう</rt></ruby>の<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じですね！<ruby>最後<rt>さいご</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>すのを<ruby>忘<rt>わす</rt></ruby>れないようにします。',
    },
    {
      type: 'summary-point',
      text: '<ruby>同<rt>おな</rt></ruby>じかたまりを $M$ と<ruby>置<rt>お</rt></ruby>く → <ruby>因数分解<rt>いんすうぶんかい</rt></ruby> → $M$ を<ruby>元<rt>もと</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>す！',
    },
    {
      type: 'date',
      text: 'グループ<ruby>分<rt>わ</rt></ruby>け<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '4つの<ruby>項<rt>こう</rt></ruby>があるとき、2つずつグループに<ruby>分<rt>わ</rt></ruby>けて<ruby>共通因数<rt>きょうつういんすう</rt></ruby>をくくる<ruby>方法<rt>ほうほう</rt></ruby>もあるよ。',
    },
    {
      type: 'whiteboard',
      title: 'グループ<ruby>分<rt>わ</rt></ruby>け: $ax - ay + bx - by$',
      steps: [
        {
          formula: '$ax - ay + bx - by$',
          annotation: '<ruby>前<rt>まえ</rt></ruby>2つと<ruby>後<rt>うし</rt></ruby>ろ2つでグループ<ruby>分<rt>わ</rt></ruby>け',
        },
        {
          formula: '$a(x - y) + b(x - y)$',
          animateInsert: true,
          annotation: '<ruby>各<rt>かく</rt></ruby>グループで<ruby>共通因数<rt>きょうつういんすう</rt></ruby>をくくる',
        },
        {
          formula: '$(x - y)(a + b)$',
          isResult: true,
          animateInsert: true,
          annotation: '$(x-y)$ が<ruby>共通因数<rt>きょうつういんすう</rt></ruby>！さらにくくって<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '2<ruby>回<rt>かい</rt></ruby>くくり<ruby>出<rt>だ</rt></ruby>すんですね！グループ<ruby>分<rt>わ</rt></ruby>けの<ruby>仕方<rt>しかた</rt></ruby>がポイントですね。',
    },
    {
      type: 'quiz',
      question: '$y(x-3) + 4(x-3)$ を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$(x-3)(y-4)$', correct: false },
        { letter: 'B', text: '$(x-3)(y+4)$', correct: true },
        { letter: 'C', text: '$(x+3)(y+4)$', correct: false },
        { letter: 'D', text: '$4y(x-3)$', correct: false },
      ],
      explanation:
        '$(x-3)$ が<ruby>共通因数<rt>きょうつういんすう</rt></ruby>。くくり<ruby>出<rt>だ</rt></ruby>すと $\\textcolor{#D97706}{(x-3)(y+4)}$ だよ。',
    },
    {
      type: 'summary-point',
      text: '4<ruby>項<rt>こう</rt></ruby>の<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>: 2つずつグループに<ruby>分<rt>わ</rt></ruby>けて、<ruby>共通因数<rt>きょうつういんすう</rt></ruby>を2<ruby>回<rt>かい</rt></ruby>くくり<ruby>出<rt>だ</rt></ruby>す！',
    },
    {
      type: 'end',
      points: [
        '$x^2+bx+c$ → かけて $c$、<ruby>足<rt>た</rt></ruby>して $b$ になる2つの<ruby>数<rt>かず</rt></ruby>を<ruby>探<rt>さが</rt></ruby>す',
        '$a^2+2ab+b^2 = (a+b)^2$、$a^2-2ab+b^2 = (a-b)^2$',
        '$a^2-b^2 = (a+b)(a-b)$',
        '<ruby>共通因数<rt>きょうつういんすう</rt></ruby>を<ruby>先<rt>さき</rt></ruby>にくくり<ruby>出<rt>だ</rt></ruby>してから<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う（2<ruby>段階<rt>だんかい</rt></ruby>）',
        '<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えやグループ<ruby>分<rt>わ</rt></ruby>けで<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>式<rt>しき</rt></ruby>も<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できる！',
      ],
    },
  ],
};

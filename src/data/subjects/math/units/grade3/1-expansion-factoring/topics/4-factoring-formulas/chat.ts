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
      question: 'x² − 8x + 16 を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '(x−4)(x+4)', correct: false },
        { letter: 'B', text: '(x−4)²', correct: true },
        { letter: 'C', text: '(x−2)(x−8)', correct: false },
        { letter: 'D', text: '(x+4)²', correct: false },
      ],
      explanation:
        'x²−8x+16 = x²−2×4×x+4²。(a−b)² の<ruby>形<rt>かたち</rt></ruby>で <strong>(x−4)²</strong> だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>公式<rt>こうしき</rt></ruby>パターンを<ruby>見抜<rt>みぬ</rt></ruby>くコツ: <ruby>最後<rt>さいご</rt></ruby>の<ruby>項<rt>こう</rt></ruby>が<ruby>何<rt>なに</rt></ruby>かの2<ruby>乗<rt>じょう</rt></ruby>か？ <ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>が 2ab になっているか？',
    },
    {
      type: 'end',
      points: [
        'x²+bx+c → かけて c、<ruby>足<rt>た</rt></ruby>して b になる2つの<ruby>数<rt>かず</rt></ruby>を<ruby>探<rt>さが</rt></ruby>す',
        'a²+2ab+b² = (a+b)²、a²−2ab+b² = (a−b)²',
        'a²−b² = (a+b)(a−b)',
        '<ruby>符号<rt>ふごう</rt></ruby>のパターンに<ruby>注目<rt>ちゅうもく</rt></ruby>すれば<ruby>早<rt>はや</rt></ruby>く<ruby>解<rt>と</rt></ruby>ける！',
      ],
    },
  ],
};

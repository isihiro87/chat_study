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
    {
      type: 'date',
      text: '<ruby>整数<rt>せいすう</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>を<ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>そう',
    },
    {
      type: 'narrator',
      text: '「<ruby>偶数<rt>ぐうすう</rt></ruby>と<ruby>偶数<rt>ぐうすう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず<ruby>偶数<rt>ぐうすう</rt></ruby>になる」って<ruby>本当<rt>ほんとう</rt></ruby>？<ruby>文字<rt>もじ</rt></ruby>を使って<strong><ruby>証明<rt>しょうめい</rt></ruby></strong>してみよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>整数<rt>せいすう</rt></ruby>を<ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう！これが<ruby>証明<rt>しょうめい</rt></ruby>の<ruby>第一歩<rt>だいいっぽ</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>整数<rt>せいすう</rt></ruby>の<ruby>表<rt>あらわ</rt></ruby>し<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '<ruby>偶数<rt>ぐうすう</rt></ruby> → $2n$',
          annotation: '$n$ は<ruby>整数<rt>せいすう</rt></ruby>。2 でぴったり<ruby>割<rt>わ</rt></ruby>れる<ruby>数<rt>かず</rt></ruby>',
        },
        {
          formula: '<ruby>奇数<rt>きすう</rt></ruby> → $2n + 1$',
          annotation: '<ruby>偶数<rt>ぐうすう</rt></ruby>に 1 <ruby>足<rt>た</rt></ruby>した<ruby>数<rt>かず</rt></ruby>',
        },
        {
          formula: '<ruby>連続<rt>れんぞく</rt></ruby>する3<ruby>整数<rt>せいすう</rt></ruby> → $n, n+1, n+2$',
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
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「2つの<ruby>奇数<rt>きすう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>は<ruby>偶数<rt>ぐうすう</rt></ruby>になる」ことを<ruby>証明<rt>しょうめい</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>証明<rt>しょうめい</rt></ruby>',
      steps: [
        {
          formula: '2つの<ruby>奇数<rt>きすう</rt></ruby>: $2m + 1, 2n + 1$',
          annotation: '① $m, n$ は<ruby>整数<rt>せいすう</rt></ruby>とする',
        },
        {
          formula: '$(2m + 1) + (2n + 1)$',
          annotation: '② <ruby>和<rt>わ</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>しよう',
        },
        {
          formula: '$= 2m + 2n + 2$',
          animateInsert: true,
          annotation: 'かっこを<ruby>外<rt>はず</rt></ruby>してまとめる',
        },
        {
          formula: '$= 2(m + n + 1)$',
          isResult: true,
          animateInsert: true,
          annotation: '③ $2 \\times$ (<ruby>整数<rt>せいすう</rt></ruby>) の<ruby>形<rt>かたち</rt></ruby> → <ruby>偶数<rt>ぐうすう</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'おぉ！ 2 でくくれるから<ruby>偶数<rt>ぐうすう</rt></ruby>だって<ruby>分<rt>わ</rt></ruby>かるんですね！<ruby>文字<rt>もじ</rt></ruby>を使うとどんな<ruby>数<rt>かず</rt></ruby>でも<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つことが<ruby>証明<rt>しょうめい</rt></ruby>できるんだ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>数字<rt>すうじ</rt></ruby>だと「たまたま」かもしれないけど、<ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せば<strong><ruby>全<rt>すべ</rt></ruby>ての<ruby>場合<rt>ばあい</rt></ruby></strong>について<ruby>言<rt>い</rt></ruby>えるんだ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>証明<rt>しょうめい</rt></ruby>の3ステップ: ① <ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す → ② <ruby>式<rt>しき</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby> → ③ 「○○の<ruby>形<rt>かたち</rt></ruby>だから△△」と<ruby>結論<rt>けつろん</rt></ruby>',
    },
    {
      type: 'date',
      text: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>公式<rt>こうしき</rt></ruby>を<ruby>別<rt>べつ</rt></ruby>の<ruby>文字<rt>もじ</rt></ruby>について<ruby>解<rt>と</rt></ruby>く「<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>」も<ruby>大事<rt>だいじ</rt></ruby>なテクニックだよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>例<rt>たと</rt></ruby>えば $y = 3x - 6$ を <strong>$x$ について<ruby>解<rt>と</rt></ruby>く</strong>ってどういうことだと<ruby>思<rt>おも</rt></ruby>う？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$x$ = ○○ の<ruby>形<rt>かたち</rt></ruby>にするってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>正解<rt>せいかい</rt></ruby>！<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>くのと<ruby>同<rt>おな</rt></ruby>じ<ruby>要領<rt>ようりょう</rt></ruby>で、<ruby>求<rt>もと</rt></ruby>めたい<ruby>文字<rt>もじ</rt></ruby>だけを<ruby>左辺<rt>さへん</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>すんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$y = 3x - 6$',
          annotation: '$x$ について<ruby>解<rt>と</rt></ruby>きたい',
        },
        {
          formula: '$y + 6 = 3x$',
          animateInsert: true,
          annotation: '$-6$ を<ruby>移項<rt>いこう</rt></ruby>して $y + 6 = 3x$',
        },
        {
          formula: '$x = \\frac{y + 6}{3}$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を 3 で<ruby>割<rt>わ</rt></ruby>って<ruby>完成<rt>かんせい</rt></ruby>！',
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
      type: 'summary-point',
      text: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>: <ruby>求<rt>もと</rt></ruby>めたい<ruby>文字<rt>もじ</rt></ruby>を<ruby>左辺<rt>さへん</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>して、<ruby>他<rt>ほか</rt></ruby>を<ruby>移項<rt>いこう</rt></ruby>。<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>くのと<ruby>同<rt>おな</rt></ruby>じ！',
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
      type: 'end',
      points: [
        '<ruby>偶数<rt>ぐうすう</rt></ruby> = $2n$、<ruby>奇数<rt>きすう</rt></ruby> = $2n + 1$ で<ruby>表<rt>あらわ</rt></ruby>す',
        '<ruby>証明<rt>しょうめい</rt></ruby>: ① <ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す → ② <ruby>計算<rt>けいさん</rt></ruby> → ③ <ruby>結論<rt>けつろん</rt></ruby>',
        '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>変形<rt>へんけい</rt></ruby>は<ruby>方程式<rt>ほうていしき</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ<ruby>要領<rt>ようりょう</rt></ruby>で<ruby>移項<rt>いこう</rt></ruby>する',
        '<ruby>文字<rt>もじ</rt></ruby>を使えば「すべての<ruby>場合<rt>ばあい</rt></ruby>」を<ruby>証明<rt>しょうめい</rt></ruby>できる！',
      ],
    },
  ],
};

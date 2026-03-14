import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const expansionFormulasChat: HistoryChat = {
  id: 'math-g3-expansion-formulas',
  icon: '⚡',
  title: '乗法の公式をマスターしよう',
  subtitle: '〜中3数学〜 4つの公式で展開を速く',
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
      text: '<ruby>乗法<rt>じょうほう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう',
    },
    {
      type: 'narrator',
      text: '<ruby>毎回<rt>まいかい</rt></ruby>4つの<ruby>積<rt>せき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るのは<ruby>大変<rt>たいへん</rt></ruby>！<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>えば<ruby>一瞬<rt>いっしゅん</rt></ruby>で<ruby>展開<rt>てんかい</rt></ruby>できるよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<ruby>公式<rt>こうしき</rt></ruby>1！ (x+a)(x+b) の<ruby>形<rt>かたち</rt></ruby>を<ruby>見<rt>み</rt></ruby>てみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>公式<rt>こうしき</rt></ruby>1: (x+a)(x+b)',
      steps: [
        {
          formula: '$(x + a)(x + b)$',
          annotation: 'x が<ruby>共通<rt>きょうつう</rt></ruby>のパターン',
        },
        {
          formula: '$x^2 + (a + b)x + ab$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>足<rt>た</rt></ruby>して (a+b)、かけて ab になる！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「<ruby>足<rt>た</rt></ruby>して○、かけて△」ってやつですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！(x+3)(x+5) なら、<ruby>足<rt>た</rt></ruby>して 3+5=8、かけて 3×5=15 で x²+8x+15 だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>公式<rt>こうしき</rt></ruby>1: (x+a)(x+b) = x² + (a+b)x + ab → 「<ruby>足<rt>た</rt></ruby>して○、かけて△」',
    },
    {
      type: 'date',
      text: '2<ruby>乗<rt>じょう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は (a+b)² の<ruby>公式<rt>こうしき</rt></ruby>。<ruby>面積図<rt>めんせきず</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>えるとわかりやすいよ！',
    },
    {
      type: 'image',
      src: '/images/math/grade3/expansion-area.svg',
      alt: '(a+b)²の<ruby>面積図<rt>めんせきず</rt></ruby>',
      caption: '<ruby>正方形<rt>せいほうけい</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby>を4つに<ruby>分<rt>わ</rt></ruby>けると<ruby>公式<rt>こうしき</rt></ruby>がわかる！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>公式<rt>こうしき</rt></ruby>2・3: 2<ruby>乗<rt>じょう</rt></ruby>の<ruby>展開<rt>てんかい</rt></ruby>',
      steps: [
        {
          formula: '$(a + b)^2 = a^2 + 2ab + b^2$',
          animateInsert: true,
          annotation: '<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>項<rt>こう</rt></ruby>は <strong>2ab</strong>（2<ruby>倍<rt>ばい</rt></ruby>がポイント！）',
        },
        {
          formula: '$(a - b)^2 = a^2 - 2ab + b^2$',
          annotation: '<ruby>符号<rt>ふごう</rt></ruby>がマイナスになるだけ！<ruby>最後<rt>さいご</rt></ruby>の b² は<strong>プラス</strong>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '(a−b)² のとき<ruby>最後<rt>さいご</rt></ruby>の<ruby>項<rt>こう</rt></ruby>がプラスになるのが<ruby>不思議<rt>ふしぎ</rt></ruby>です…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '(−b)² = (−b)×(−b) = +b² だからだよ。マイナス×マイナスはプラスだね！',
    },
    {
      type: 'summary-point',
      text: '(a+b)² = a²+2ab+b²、(a−b)² = a²−2ab+b² → <ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず 2ab！',
    },
    {
      type: 'date',
      text: '<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>！ (a+b)(a−b) は<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>項<rt>こう</rt></ruby>が<ruby>消<rt>き</rt></ruby>えちゃうスペシャルな<ruby>公式<rt>こうしき</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>公式<rt>こうしき</rt></ruby>4: <ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>',
      steps: [
        {
          formula: '$(a + b)(a - b)$',
          annotation: 'ふつうに<ruby>展開<rt>てんかい</rt></ruby>すると…',
        },
        {
          formula: '$a^2 - ab + ab - b^2$',
          animateInsert: true,
          annotation: '−ab と +ab が<ruby>打<rt>う</rt></ruby>ち<ruby>消<rt>け</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う！',
        },
        {
          formula: '$(a + b)(a - b) = a^2 - b^2$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>結果<rt>けっか</rt></ruby>は<ruby>超<rt>ちょう</rt></ruby>シンプル！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '(x + 3)² = x² + 9 じゃないの？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'よくある<ruby>間違<rt>まちが</rt></ruby>い！<strong>2ab</strong>の<ruby>項<rt>こう</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れちゃうんだよね。(x+3)² = x² + <strong>6x</strong> + 9 だよ。<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>項<rt>こう</rt></ruby>が<ruby>大事<rt>だいじ</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>が<ruby>消<rt>き</rt></ruby>えて a²−b² だけになるんですね！すっきり！',
    },
    {
      type: 'quiz',
      question: '(x + 7)(x − 7) を<ruby>展開<rt>てんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: 'x² − 14x − 49', correct: false },
        { letter: 'B', text: 'x² + 49', correct: false },
        { letter: 'C', text: 'x² − 49', correct: true },
        { letter: 'D', text: 'x² − 14x + 49', correct: false },
      ],
      explanation:
        '<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で (x+7)(x−7) = x² − 7² = <strong>x² − 49</strong>',
    },
    {
      type: 'summary-point',
      text: '<ruby>公式<rt>こうしき</rt></ruby>4: (a+b)(a−b) = a²−b² → <ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>項<rt>こう</rt></ruby>が<ruby>消<rt>き</rt></ruby>える！',
    },
    {
      type: 'end',
      points: [
        '<ruby>公式<rt>こうしき</rt></ruby>1: (x+a)(x+b) = x²+(a+b)x+ab',
        '<ruby>公式<rt>こうしき</rt></ruby>2: (a+b)² = a²+2ab+b²',
        '<ruby>公式<rt>こうしき</rt></ruby>3: (a−b)² = a²−2ab+b²',
        '<ruby>公式<rt>こうしき</rt></ruby>4: (a+b)(a−b) = a²−b²',
      ],
    },
  ],
};

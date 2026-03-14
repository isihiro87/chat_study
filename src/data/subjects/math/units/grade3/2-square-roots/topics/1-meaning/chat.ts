import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const sqrtMeaningChat: HistoryChat = {
  id: 'math-g3-sqrt-meaning',
  icon: '√',
  title: '平方根の意味と大小を学ぼう',
  subtitle: '〜中3数学〜 √の世界への入り口',
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
      text: '<ruby>面積<rt>めんせき</rt></ruby>2の<ruby>正方形<rt>せいほうけい</rt></ruby>の<ruby>一辺<rt>いっぺん</rt></ruby>は？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>3<ruby>数学<rt>すうがく</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きなテーマ、<strong>「<ruby>平方根<rt>へいほうこん</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>んでいこう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>面積<rt>めんせき</rt></ruby>が2cm²の<ruby>正方形<rt>せいほうけい</rt></ruby>があったとするよ。この<ruby>一辺<rt>いっぺん</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さはいくつかな？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>正方形<rt>せいほうけい</rt></ruby>だから<ruby>一辺<rt>いっぺん</rt></ruby>×<ruby>一辺<rt>いっぺん</rt></ruby> = 2 ですよね。1×1 = 1 だし、2×2 = 4 だし……<ruby>整数<rt>せいすう</rt></ruby>じゃないってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>気<rt>き</rt></ruby>づきだね！2<ruby>乗<rt>じょう</rt></ruby>すると2になる<ruby>数<rt>かず</rt></ruby>……これを$\\textcolor{#D97706}{\\sqrt{2}}$（ルート2）と<ruby>書<rt>か</rt></ruby>くんだ。',
    },
    {
      type: 'whiteboard',
      title: '√（ルート）の<ruby>意味<rt>いみ</rt></ruby>',
      steps: [
        {
          formula: '$(\\sqrt{2})^2 = 2$',
          animateInsert: true,
          annotation: '2<ruby>乗<rt>じょう</rt></ruby>すると2になる<ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が √2',
        },
        {
          formula: '$\\sqrt{2} = 1.41421356\\ldots$',
          annotation: '<ruby>小数<rt>しょうすう</rt></ruby>にすると<ruby>永遠<rt>えいえん</rt></ruby>に<ruby>続<rt>つづ</rt></ruby>く！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'へぇ！<ruby>小数<rt>しょうすう</rt></ruby>が<ruby>永遠<rt>えいえん</rt></ruby>に<ruby>続<rt>つづ</rt></ruby>くんですね。<ruby>不思議<rt>ふしぎ</rt></ruby>な<ruby>数<rt>かず</rt></ruby>だなぁ。',
    },
    {
      type: 'summary-point',
      text: '2<ruby>乗<rt>じょう</rt></ruby>すると a になる<ruby>数<rt>かず</rt></ruby>を「a の<ruby>平方根<rt>へいほうこん</rt></ruby>」という。<ruby>正<rt>せい</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>を $\\sqrt{a}$ と<ruby>書<rt>か</rt></ruby>く！',
    },
    {
      type: 'date',
      text: '<ruby>平方根<rt>へいほうこん</rt></ruby>は2つある！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>大事<rt>だいじ</rt></ruby>なポイント！9の<ruby>平方根<rt>へいほうこん</rt></ruby>は3だけじゃないよ。$(−3)^2 = 9$ だから、$\\textcolor{#D97706}{\\pm 3}$が9の<ruby>平方根<rt>へいほうこん</rt></ruby>なんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>平方根<rt>へいほうこん</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず2つ',
      steps: [
        {
          formula: '9の<ruby>平方根<rt>へいほうこん</rt></ruby> $\\rightarrow 3^2 = 9$、$(−3)^2 = 9$',
          annotation: '<ruby>正<rt>せい</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>の2つがある',
        },
        {
          formula: '9の<ruby>平方根<rt>へいほうこん</rt></ruby> $= \\pm 3$',
          isResult: true,
          animateInsert: true,
          annotation: '$\\sqrt{9} = 3$、$-\\sqrt{9} = -3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！<ruby>平方根<rt>へいほうこん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かれたら<ruby>必<rt>かなら</rt></ruby>ず$\\pm$をつけるんですね！',
    },
    {
      type: 'date',
      text: '<ruby>数直線<rt>すうちょくせん</rt></ruby>での<ruby>位置<rt>いち</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$\\sqrt{2}$ は<ruby>数直線<rt>すうちょくせん</rt></ruby>のどこにあるかな？ $1^2 = 1$、$2^2 = 4$ だから、$1 < 2 < 4$。つまり……',
    },
    {
      type: 'whiteboard',
      title: '$\\sqrt{2}$ の<ruby>数直線<rt>すうちょくせん</rt></ruby>での<ruby>位置<rt>いち</rt></ruby>',
      steps: [
        {
          formula: '$1^2 = 1 < 2 < 4 = 2^2$',
          annotation: '2は1と4の<ruby>間<rt>あいだ</rt></ruby>',
        },
        {
          formula: '$1 < \\sqrt{2} < 2$',
          isResult: true,
          animateInsert: true,
          annotation: '$\\sqrt{2}$ は1と2の<ruby>間<rt>あいだ</rt></ruby>にある（<ruby>約<rt>やく</rt></ruby>1.414）',
        },
      ],
    },
    {
      type: 'image',
      src: '/images/math/grade3/square-root-numberline.svg',
      alt: '数直線上の平方根の位置',
      caption: '<ruby>数直線<rt>すうちょくせん</rt></ruby>で $\\sqrt{2}$ の<ruby>位置<rt>いち</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しよう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'ルートの<ruby>中<rt>なか</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をはさむ<ruby>完全平方数<rt>かんぜんへいほうすう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>せばいいんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのとおり！この<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>を<ruby>使<rt>つか</rt></ruby>えば<ruby>大小比較<rt>だいしょうひかく</rt></ruby>もできるよ。ルートの<ruby>中<rt>なか</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいほど<ruby>値<rt>あたい</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きい！',
    },
    {
      type: 'quiz',
      question: '<ruby>次<rt>つぎ</rt></ruby>のうち、<ruby>無理数<rt>むりすう</rt></ruby>はどれ？',
      options: [
        { letter: 'A', text: '$\\sqrt{4}$', correct: false },
        { letter: 'B', text: '$\\sqrt{7}$', correct: true },
        { letter: 'C', text: '$\\sqrt{9}$', correct: false },
        { letter: 'D', text: '$\\sqrt{16}$', correct: false },
      ],
      explanation:
        '$\\sqrt{4} = 2$、$\\sqrt{9} = 3$、$\\sqrt{16} = 4$ は<ruby>整数<rt>せいすう</rt></ruby>だから<ruby>有理数<rt>ゆうりすう</rt></ruby>。$\\sqrt{7}$ は<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せないから<ruby>無理数<rt>むりすう</rt></ruby>だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>有理数<rt>ゆうりすう</rt></ruby> = <ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せる<ruby>数<rt>かず</rt></ruby>、<ruby>無理数<rt>むりすう</rt></ruby> = <ruby>表<rt>あらわ</rt></ruby>せない<ruby>数<rt>かず</rt></ruby>（$\\sqrt{2}$、$\\sqrt{3}$ など）',
    },
    {
      type: 'end',
      points: [
        '2<ruby>乗<rt>じょう</rt></ruby>すると a になる<ruby>数<rt>かず</rt></ruby>が「a の<ruby>平方根<rt>へいほうこん</rt></ruby>」',
        '<ruby>平方根<rt>へいほうこん</rt></ruby>は<ruby>正<rt>せい</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>の2つある（$\\pm\\sqrt{a}$）',
        '$\\sqrt{2} \\approx 1.414$、$\\sqrt{3} \\approx 1.732$（<ruby>無理数<rt>むりすう</rt></ruby>）',
        'ルートの<ruby>中<rt>なか</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいほど<ruby>値<rt>あたい</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きい',
      ],
    },
  ],
};

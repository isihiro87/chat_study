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
      type: 'quiz',
      question: '2<ruby>乗<rt>じょう</rt></ruby>すると $36$ になる<ruby>正<rt>せい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$6$', correct: true },
        { letter: 'B', text: '$\\sqrt{6}$', correct: false },
        { letter: 'C', text: '$18$', correct: false },
        { letter: 'D', text: '$\\pm 6$', correct: false },
      ],
      explanation:
        '$6^2 = 36$ なので $\\sqrt{36} = 6$\n$\\sqrt{}$ は<ruby>正<rt>せい</rt></ruby>の<ruby>平方根<rt>へいほうこん</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>すよ。',
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
      text: 'ルートの<ruby>中<rt>なか</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をはさむ<ruby>整数<rt>せいすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>せばいいんですね！',
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
        { letter: 'B', text: '$\\sqrt{16}$', correct: false },
        { letter: 'C', text: '$\\sqrt{9}$', correct: false },
        { letter: 'D', text: '$\\sqrt{7}$', correct: true },
      ],
      explanation:
        '$\\sqrt{4} = 2$、$\\sqrt{9} = 3$、$\\sqrt{16} = 4$ は<ruby>整数<rt>せいすう</rt></ruby>だから<ruby>有理数<rt>ゆうりすう</rt></ruby>。\n$\\sqrt{7}$ は<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せないから<ruby>無理数<rt>むりすう</rt></ruby>だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>有理数<rt>ゆうりすう</rt></ruby> = <ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せる<ruby>数<rt>かず</rt></ruby>、<ruby>無理数<rt>むりすう</rt></ruby> = <ruby>表<rt>あらわ</rt></ruby>せない<ruby>数<rt>かず</rt></ruby>（$\\sqrt{2}$、$\\sqrt{3}$ など）',
    },
    {
      type: 'quiz',
      question: '$\\sqrt{16}$ は<ruby>有理数<rt>ゆうりすう</rt></ruby>？<ruby>無理数<rt>むりすう</rt></ruby>？',
      options: [
        { letter: 'A', text: '<ruby>無理数<rt>むりすう</rt></ruby>', correct: false },
        { letter: 'B', text: 'どちらでもない', correct: false },
        { letter: 'C', text: '<ruby>有理数<rt>ゆうりすう</rt></ruby>', correct: true },
        { letter: 'D', text: '<ruby>判断<rt>はんだん</rt></ruby>できない', correct: false },
      ],
      explanation:
        '$\\sqrt{16} = 4$ で<ruby>整数<rt>せいすう</rt></ruby>になるから<ruby>有理数<rt>ゆうりすう</rt></ruby>。\n$\\sqrt{}$ がついていても<ruby>中身<rt>なかみ</rt></ruby>が<ruby>整数<rt>せいすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>なら<ruby>有理数<rt>ゆうりすう</rt></ruby>だよ。',
    },
    {
      type: 'date',
      text: '$(\\sqrt{a})^2$ の<ruby>計算<rt>けいさん</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>大事<rt>だいじ</rt></ruby>な<ruby>公式<rt>こうしき</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えるよ。$(\\sqrt{a})^2 = a$ になるんだ。ルートと2<ruby>乗<rt>じょう</rt></ruby>は<ruby>打<rt>う</rt></ruby>ち<ruby>消<rt>け</rt></ruby>し<ruby>合<rt>あ</rt></ruby>うんだよ。',
    },
    {
      type: 'whiteboard',
      title: '$(\\sqrt{a})^2$ と $(-\\sqrt{a})^2$',
      steps: [
        {
          formula: '$(\\sqrt{7})^2 = 7$',
          annotation: 'ルートと2<ruby>乗<rt>じょう</rt></ruby>が<ruby>打<rt>う</rt></ruby>ち<ruby>消<rt>け</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う',
        },
        {
          formula: '$(-\\sqrt{5})^2 = 5$',
          animateInsert: true,
          annotation: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>も<ruby>正<rt>せい</rt></ruby>になる',
        },
        {
          formula: '$\\sqrt{(-6)^2} = \\sqrt{36} = 6$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>先<rt>さき</rt></ruby>に<ruby>中<rt>なか</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>してからルートをとる',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$(-\\sqrt{5})^2$ も $5$ になるんですね！<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を2<ruby>乗<rt>じょう</rt></ruby>すると<ruby>正<rt>せい</rt></ruby>になるから！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのとおり！$\\sqrt{}$ を<ruby>使<rt>つか</rt></ruby>わずに<ruby>表<rt>あらわ</rt></ruby>せるものもあるよ。$\\sqrt{64} = 8$、$-\\sqrt{81} = -9$ のようにね。',
    },
    {
      type: 'summary-point',
      text: '$(\\sqrt{a})^2 = a$、$(-\\sqrt{a})^2 = a$。ルートと2<ruby>乗<rt>じょう</rt></ruby>は<ruby>打<rt>う</rt></ruby>ち<ruby>消<rt>け</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う！',
    },
    {
      type: 'quiz',
      question: '$(-\\sqrt{11})^2$ はいくつ？',
      options: [
        { letter: 'A', text: '$-11$', correct: false },
        { letter: 'B', text: '$11$', correct: true },
        { letter: 'C', text: '$121$', correct: false },
        { letter: 'D', text: '$\\sqrt{11}$', correct: false },
      ],
      explanation:
        '$(-\\sqrt{11})^2 = (-\\sqrt{11}) \\times (-\\sqrt{11}) = 11$\n<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を2<ruby>乗<rt>じょう</rt></ruby>すると<ruby>正<rt>せい</rt></ruby>になるよ。',
    },
    {
      type: 'date',
      text: '<ruby>有限<rt>ゆうげん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>と<ruby>循環<rt>じゅんかん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>には<ruby>種類<rt>しゅるい</rt></ruby>があるよ。$\\frac{5}{8} = 0.625$ のように<ruby>終<rt>お</rt></ruby>わる<ruby>小数<rt>しょうすう</rt></ruby>を$\\textcolor{#D97706}{\\text{有限小数}}$というよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$\\frac{1}{3} = 0.333\\ldots$ みたいに<ruby>終<rt>お</rt></ruby>わらないのもありますよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'それが$\\textcolor{#D97706}{\\text{循環小数}}$！<ruby>同<rt>おな</rt></ruby>じ<ruby>数字<rt>すうじ</rt></ruby>がくり<ruby>返<rt>かえ</rt></ruby>されるんだ。<ruby>大事<rt>だいじ</rt></ruby>なのは、<ruby>有限<rt>ゆうげん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>も<ruby>循環<rt>じゅんかん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>も<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せるから$\\textcolor{#D97706}{\\text{有理数}}$だってこと！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>小数<rt>しょうすう</rt></ruby>の<ruby>分類<rt>ぶんるい</rt></ruby>',
      steps: [
        {
          formula: '<ruby>有限<rt>ゆうげん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>: $\\frac{5}{8} = 0.625$',
          annotation: '<ruby>割<rt>わ</rt></ruby>り<ruby>切<rt>き</rt></ruby>れる → <ruby>有理数<rt>ゆうりすう</rt></ruby>',
        },
        {
          formula: '<ruby>循環<rt>じゅんかん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>: $\\frac{1}{3} = 0.\\overline{3}$',
          animateInsert: true,
          annotation: 'くり<ruby>返<rt>かえ</rt></ruby>す → <ruby>有理数<rt>ゆうりすう</rt></ruby>',
        },
        {
          formula: '<ruby>無理数<rt>むりすう</rt></ruby>: $\\sqrt{2} = 1.41421\\ldots$',
          isResult: true,
          annotation: '<ruby>規則性<rt>きそくせい</rt></ruby>なく<ruby>続<rt>つづ</rt></ruby>く → <ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せない',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>有限<rt>ゆうげん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>・<ruby>循環<rt>じゅんかん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby> = <ruby>有理数<rt>ゆうりすう</rt></ruby>。<ruby>規則性<rt>きそくせい</rt></ruby>なく<ruby>続<rt>つづ</rt></ruby>く<ruby>小数<rt>しょうすう</rt></ruby> = <ruby>無理数<rt>むりすう</rt></ruby>',
    },
    {
      type: 'quiz',
      question: '$\\frac{1}{3} = 0.333\\ldots$ はどの<ruby>種類<rt>しゅるい</rt></ruby>の<ruby>数<rt>かず</rt></ruby>？',
      options: [
        { letter: 'A', text: '<ruby>循環<rt>じゅんかん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>（<ruby>有理数<rt>ゆうりすう</rt></ruby>）', correct: true },
        { letter: 'B', text: '<ruby>有限<rt>ゆうげん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>', correct: false },
        { letter: 'C', text: '<ruby>無理数<rt>むりすう</rt></ruby>', correct: false },
        { letter: 'D', text: '<ruby>整数<rt>せいすう</rt></ruby>', correct: false },
      ],
      explanation:
        '$0.333\\ldots$ は「3」がくり<ruby>返<rt>かえ</rt></ruby>す<ruby>循環<rt>じゅんかん</rt></ruby><ruby>小数<rt>しょうすう</rt></ruby>。\n<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せるから<ruby>有理数<rt>ゆうりすう</rt></ruby>だよ。',
    },
    {
      type: 'date',
      text: '<ruby>近似値<rt>きんじち</rt></ruby>と<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>測定<rt>そくてい</rt></ruby>で<ruby>得<rt>え</rt></ruby>られた<ruby>値<rt>あたい</rt></ruby>は<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>正確<rt>せいかく</rt></ruby>ではないよね。この<ruby>値<rt>あたい</rt></ruby>を$\\textcolor{#D97706}{\\text{近似値}}$、<ruby>本当<rt>ほんとう</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を$\\textcolor{#D97706}{\\text{真の値}}$というよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>誤差<rt>ごさ</rt></ruby>ってどうやって<ruby>求<rt>もと</rt></ruby>めるんですか？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>誤差<rt>ごさ</rt></ruby>と<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>',
      steps: [
        {
          formula: '<ruby>誤差<rt>ごさ</rt></ruby> = <ruby>近似値<rt>きんじち</rt></ruby> − <ruby>真<rt>しん</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>',
          annotation: '<ruby>誤差<rt>ごさ</rt></ruby>の<ruby>絶対値<rt>ぜったいち</rt></ruby>はなるべく<ruby>小<rt>ちい</rt></ruby>さいほうがいい',
        },
        {
          formula: '$4507$m → <ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>3けたで $4.51 \\times 10^3$ m',
          isResult: true,
          animateInsert: true,
          annotation: '$a \\times 10^n$ の<ruby>形<rt>かたち</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>は<ruby>意味<rt>いみ</rt></ruby>のある<ruby>数字<rt>すうじ</rt></ruby>のこと。$a \\times 10^n$ の<ruby>形<rt>かたち</rt></ruby>にすると<ruby>何<rt>なん</rt></ruby>けたかハッキリわかるよ！',
    },
    {
      type: 'quiz',
      question: '$5200$m を<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>2けたで $a \\times 10^n$ の<ruby>形<rt>かたち</rt></ruby>に<ruby>表<rt>あらわ</rt></ruby>すと？',
      options: [
        { letter: 'A', text: '$0.52 \\times 10^4$', correct: false },
        { letter: 'B', text: '$52 \\times 10^2$', correct: false },
        { letter: 'C', text: '$5.20 \\times 10^3$', correct: false },
        { letter: 'D', text: '$5.2 \\times 10^3$', correct: true },
      ],
      explanation:
        '<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>2けた（5と2）なので $5.2 \\times 10^3$ m\n<ruby>整数<rt>せいすう</rt></ruby><ruby>部分<rt>ぶぶん</rt></ruby>が1けたの<ruby>小数<rt>しょうすう</rt></ruby>にするよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>は $a \\times 10^n$ で<ruby>表<rt>あらわ</rt></ruby>す。$a$ は<ruby>整数<rt>せいすう</rt></ruby><ruby>部分<rt>ぶぶん</rt></ruby>が1けたの<ruby>小数<rt>しょうすう</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '$37200$ を<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>3けたで $a \\times 10^n$ の<ruby>形<rt>かたち</rt></ruby>にすると？',
      options: [
        { letter: 'A', text: '$372 \\times 10^2$', correct: false },
        { letter: 'B', text: '$3.72 \\times 10^4$', correct: true },
        { letter: 'C', text: '$37.2 \\times 10^3$', correct: false },
        { letter: 'D', text: '$3.7 \\times 10^4$', correct: false },
      ],
      explanation:
        '<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>3けた（3, 7, 2）なので $\\textcolor{#D97706}{3.72 \\times 10^4}$。$a$ は<ruby>整数<rt>せいすう</rt></ruby><ruby>部分<rt>ぶぶん</rt></ruby>1けたにするよ。',
    },
    {
      type: 'end',
      points: [
        '2<ruby>乗<rt>じょう</rt></ruby>すると a になる<ruby>数<rt>かず</rt></ruby>が「a の<ruby>平方根<rt>へいほうこん</rt></ruby>」',
        '<ruby>平方根<rt>へいほうこん</rt></ruby>は<ruby>正<rt>せい</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>の2つある（$\\pm\\sqrt{a}$）',
        '$(\\sqrt{a})^2 = a$、$(-\\sqrt{a})^2 = a$',
        '<ruby>有理数<rt>ゆうりすう</rt></ruby> = <ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>せる、<ruby>無理数<rt>むりすう</rt></ruby> = <ruby>表<rt>あらわ</rt></ruby>せない',
        '<ruby>有効数字<rt>ゆうこうすうじ</rt></ruby>は $a \\times 10^n$ で<ruby>表<rt>あらわ</rt></ruby>す',
      ],
    },
  ],
};

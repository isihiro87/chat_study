import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const literalRelationsChat: HistoryChat = {
  id: 'math-g1-lit-relations',
  icon: '⚖️',
  title: '<ruby>関係<rt>かんけい</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>式<rt>しき</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>等式<rt>とうしき</rt></ruby>と<ruby>不等式<rt>ふとうしき</rt></ruby>',
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
      text: '<ruby>等式<rt>とうしき</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>文字<rt>もじ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>数量<rt>すうりょう</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>を<ruby>式<rt>しき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>してみよう。まずは<strong>「<ruby>等式<rt>とうしき</rt></ruby>」</strong>から！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '2つの<ruby>数量<rt>すうりょう</rt></ruby>が<strong><ruby>等<rt>ひと</rt></ruby>しい</strong><ruby>関係<rt>かんけい</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>式<rt>しき</rt></ruby>を<strong>「<ruby>等式<rt>とうしき</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。$=$ を<ruby>使<rt>つか</rt></ruby>って<ruby>表<rt>あらわ</rt></ruby>すんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>等式<rt>とうしき</rt></ruby>の<ruby>しくみ</ruby>',
      steps: [
        {
          formula: '$\\underbrace{x + 3}_{\\text{左辺}} = \\underbrace{10}_{\\text{右辺}}$',
          annotation: '$=$ の<ruby>左<rt>ひだり</rt></ruby>が「<ruby>左辺<rt>さへん</rt></ruby>」、<ruby>右<rt>みぎ</rt></ruby>が「<ruby>右辺<rt>うへん</rt></ruby>」',
        },
        {
          formula: '<ruby>両辺<rt>りょうへん</rt></ruby> = <ruby>左辺<rt>さへん</rt></ruby> + <ruby>右辺<rt>うへん</rt></ruby>',
          annotation: '<ruby>両方<rt>りょうほう</rt></ruby>あわせて「<ruby>両辺<rt>りょうへん</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ぶ',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$x + 3 = 10$ は「$x$ に $3$ を<ruby>足<rt>た</rt></ruby>したら $10$ になる」ってことですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！<ruby>文章<rt>ぶんしょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>を<ruby>等式<rt>とうしき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す<ruby>練習<rt>れんしゅう</rt></ruby>をしてみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>文章<rt>ぶんしょう</rt></ruby>→<ruby>等式<rt>とうしき</rt></ruby>にする<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '「$x$ <ruby>個<rt>こ</rt></ruby>のあめを4<ruby>人<rt>にん</rt></ruby>で<ruby>分<rt>わ</rt></ruby>けると1<ruby>人<rt>り</rt></ruby> $6$ <ruby>個<rt>こ</rt></ruby>」',
          annotation: '<ruby>数量<rt>すうりょう</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>を<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ろう',
        },
        {
          formula: '$x \\div 4 = 6$',
          annotation: '$x$ <ruby>個<rt>こ</rt></ruby>を4<ruby>人<rt>にん</rt></ruby>で<ruby>割<rt>わ</rt></ruby>る = 6<ruby>個<rt>こ</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{\\dfrac{x}{4} = 6}$',
          annotation: '÷は<ruby>分数<rt>ぶんすう</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>そう！',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>等式<rt>とうしき</rt></ruby> = 「$=$」を<ruby>使<rt>つか</rt></ruby>って<ruby>数量<rt>すうりょう</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しいことを<ruby>表<rt>あらわ</rt></ruby>す<ruby>式<rt>しき</rt></ruby>。$=$ の<ruby>左<rt>ひだり</rt></ruby>が<ruby>左辺<rt>さへん</rt></ruby>、<ruby>右<rt>みぎ</rt></ruby>が<ruby>右辺<rt>うへん</rt></ruby>。',
    },
    {
      type: 'date',
      text: '<ruby>不等式<rt>ふとうしき</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぼう',
    },
    {
      type: 'narrator',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>大小<rt>だいしょう</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<strong>「<ruby>不等式<rt>ふとうしき</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう！<ruby>等式<rt>とうしき</rt></ruby>とは<ruby>違<rt>ちが</rt></ruby>うよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>大小<rt>だいしょう</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>式<rt>しき</rt></ruby>を<strong>「<ruby>不等式<rt>ふとうしき</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。<ruby>不等号<rt>ふとうごう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>表<rt>あらわ</rt></ruby>すんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>不等号<rt>ふとうごう</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>',
      steps: [
        {
          formula: '$a > b$',
          annotation: '$a$ は $b$ <strong>より<ruby>大<rt>おお</rt></ruby>きい</strong>',
        },
        {
          formula: '$a < b$',
          annotation: '$a$ は $b$ <strong>より<ruby>小<rt>ちい</rt></ruby>さい</strong>',
        },
        {
          formula: '$a \\geqq b$',
          annotation: '$a$ は $b$ <strong><ruby>以上<rt>いじょう</rt></ruby></strong>（$b$ と<ruby>同<rt>おな</rt></ruby>じかそれより<ruby>大<rt>おお</rt></ruby>きい）',
          animateInsert: true,
        },
        {
          formula: '$a \\leqq b$',
          annotation: '$a$ は $b$ <strong><ruby>以下<rt>いか</rt></ruby></strong>（$b$ と<ruby>同<rt>おな</rt></ruby>じかそれより<ruby>小<rt>ちい</rt></ruby>さい）',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '「<ruby>以上<rt>いじょう</rt></ruby>」と「より<ruby>大<rt>おお</rt></ruby>きい」って<ruby>違<rt>ちが</rt></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！<strong>「<ruby>以上<rt>いじょう</rt></ruby>」は<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む</strong>よ。「<ruby>以上<rt>いじょう</rt></ruby>」は $\\geqq$（=がついてる）、「より<ruby>大<rt>おお</rt></ruby>きい」は $>$（=がない）なんだ。<strong>「<ruby>未満<rt>みまん</rt></ruby>」は「より<ruby>小<rt>ちい</rt></ruby>さい」と<ruby>同<rt>おな</rt></ruby>じ</strong>で $<$ を<ruby>使<rt>つか</rt></ruby>うよ。',
    },
    {
      type: 'whiteboard',
      title: '「<ruby>以上<rt>いじょう</rt></ruby>」と「より<ruby>大<rt>おお</rt></ruby>きい」の<ruby>違<rt>ちが</rt></ruby>い',
      steps: [
        {
          formula: '$a \\geqq 5$：$a$ は $5$ <ruby>以上<rt>いじょう</rt></ruby>',
          annotation: '$a = 5$ も<ruby>含<rt>ふく</rt></ruby>む（$5, 6, 7, ...$）',
        },
        {
          formula: '$a > 5$：$a$ は $5$ より<ruby>大<rt>おお</rt></ruby>きい',
          annotation: '$a = 5$ は<ruby>含<rt>ふく</rt></ruby>まない（$6, 7, 8, ...$）',
          animateInsert: true,
        },
        {
          formula: '$a < 5$：$a$ は $5$ <ruby>未満<rt>みまん</rt></ruby>',
          annotation: '「<ruby>未満<rt>みまん</rt></ruby>」= $5$ を<ruby>含<rt>ふく</rt></ruby>まない（$..., 3, 4$）',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '「<ruby>以上<rt>いじょう</rt></ruby>」は=つき、「より<ruby>大<rt>おお</rt></ruby>きい」は=なし！テストで<ruby>間違<rt>まちが</rt></ruby>えそうなところですね！',
    },
    {
      type: 'summary-point',
      text: '「<ruby>以上<rt>いじょう</rt></ruby>・<ruby>以下<rt>いか</rt></ruby>」は<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む（$\\geqq$, $\\leqq$）。「より<ruby>大<rt>おお</rt></ruby>きい・より<ruby>小<rt>ちい</rt></ruby>さい・<ruby>未満<rt>みまん</rt></ruby>」は<ruby>含<rt>ふく</rt></ruby>まない（$>$, $<$）。',
    },
    {
      type: 'date',
      text: '<ruby>文章<rt>ぶんしょう</rt></ruby>から<ruby>不等式<rt>ふとうしき</rt></ruby>をつくろう',
    },
    {
      type: 'narrator',
      text: '<ruby>文章問題<rt>ぶんしょうもんだい</rt></ruby>から<ruby>不等式<rt>ふとうしき</rt></ruby>をつくる<ruby>練習<rt>れんしゅう</rt></ruby>をしよう！キーワードに<ruby>注目<rt>ちゅうもく</rt></ruby>するのがコツだよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「1<ruby>本<rt>ぽん</rt></ruby> $x$ <ruby>円<rt>えん</rt></ruby>のジュースを3<ruby>本<rt>ぼん</rt></ruby><ruby>買<rt>か</rt></ruby>ったら、<ruby>代金<rt>だいきん</rt></ruby>は $500$ <ruby>円<rt>えん</rt></ruby><ruby>以下<rt>いか</rt></ruby>だった」を<ruby>不等式<rt>ふとうしき</rt></ruby>にしてみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>文章<rt>ぶんしょう</rt></ruby>→<ruby>不等式<rt>ふとうしき</rt></ruby>',
      steps: [
        {
          formula: '<ruby>代金<rt>だいきん</rt></ruby> = $x \\times 3 = 3x$ <ruby>円<rt>えん</rt></ruby>',
          annotation: 'まず<ruby>数量<rt>すうりょう</rt></ruby>を<ruby>文字式<rt>もじしき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す',
        },
        {
          formula: 'キーワード：「$500$ <ruby>円<rt>えん</rt></ruby><ruby>以下<rt>いか</rt></ruby>」',
          annotation: '「<ruby>以下<rt>いか</rt></ruby>」→ $\\leqq$ を<ruby>使<rt>つか</rt></ruby>う！',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{3x \\leqq 500}$',
          annotation: '<ruby>完成<rt>かんせい</rt></ruby>！',
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
      text: '「<ruby>以下<rt>いか</rt></ruby>」を<ruby>見<rt>み</rt></ruby>つけたら $\\leqq$ を<ruby>使<rt>つか</rt></ruby>えばいいんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！キーワードと<ruby>不等号<rt>ふとうごう</rt></ruby>の<ruby>対応<rt>たいおう</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えておこう。「<ruby>以上<rt>いじょう</rt></ruby>」→ $\\geqq$、「<ruby>以下<rt>いか</rt></ruby>」→ $\\leqq$、「より<ruby>大<rt>おお</rt></ruby>きい」→ $>$、「<ruby>未満<rt>みまん</rt></ruby>（より<ruby>小<rt>ちい</rt></ruby>さい）」→ $<$ だよ。',
    },
    {
      type: 'quiz',
      question: '「$a$ <ruby>円<rt>えん</rt></ruby>は $1000$ <ruby>円<rt>えん</rt></ruby><ruby>未満<rt>みまん</rt></ruby>である」を<ruby>不等式<rt>ふとうしき</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>すと？',
      options: [
        { letter: 'A', text: '$a > 1000$', correct: false },
        { letter: 'B', text: '$a \\leqq 1000$', correct: false },
        { letter: 'C', text: '$a < 1000$', correct: true },
        { letter: 'D', text: '$a \\geqq 1000$', correct: false },
      ],
      explanation:
        '「<ruby>未満<rt>みまん</rt></ruby>」は「より<ruby>小<rt>ちい</rt></ruby>さい」という<ruby>意味<rt>いみ</rt></ruby>。$1000$ を<ruby>含<rt>ふく</rt></ruby>まないから $\\textcolor{#D97706}{a < 1000}$\n$\\leqq$ は「<ruby>以下<rt>いか</rt></ruby>」のときに<ruby>使<rt>つか</rt></ruby>うから<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },
    {
      type: 'end',
      points: [
        '<ruby>等式<rt>とうしき</rt></ruby> = 「$=$」で<ruby>等<rt>ひと</rt></ruby>しい<ruby>関係<rt>かんけい</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>式<rt>しき</rt></ruby>（<ruby>左辺<rt>さへん</rt></ruby> $=$ <ruby>右辺<rt>うへん</rt></ruby>）',
        '<ruby>不等式<rt>ふとうしき</rt></ruby> = <ruby>不等号<rt>ふとうごう</rt></ruby>（$>$, $<$, $\\geqq$, $\\leqq$）で<ruby>大小<rt>だいしょう</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>式<rt>しき</rt></ruby>',
        '「<ruby>以上<rt>いじょう</rt></ruby>・<ruby>以下<rt>いか</rt></ruby>」は=あり、「より<ruby>大<rt>おお</rt></ruby>きい・<ruby>未満<rt>みまん</rt></ruby>」は=なし',
        '<ruby>文章<rt>ぶんしょう</rt></ruby>のキーワードから<ruby>使<rt>つか</rt></ruby>う<ruby>不等号<rt>ふとうごう</rt></ruby>を<ruby>判断<rt>はんだん</rt></ruby>しよう',
      ],
    },
  ],
};

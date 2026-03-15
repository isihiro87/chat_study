import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const polynomialAddSubChat: HistoryChat = {
  id: 'math-g2-poly-add-sub',
  icon: '➕',
  title: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>・<ruby>減法<rt>げんぽう</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>2<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>同類項<rt>どうるいこう</rt></ruby>をまとめよう',
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
    // ===== 1. 多項式の加法 =====
    {
      type: 'date',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>は、かっこを<ruby>外<rt>はず</rt></ruby>して<span class="keyword"><ruby>同類項<rt>どうるいこう</rt></ruby></span>をまとめるのが<ruby>基本<rt>きほん</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>をやってみよう！かっこの<ruby>前<rt>まえ</rt></ruby>が「+」のときは、<strong>そのまま</strong>かっこを<ruby>外<rt>はず</rt></ruby>すよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>加法<rt>かほう</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$(3x + 2y) + (5x - 3y)$',
          annotation: 'かっこの<ruby>前<rt>まえ</rt></ruby>が「+」→ そのまま<ruby>外<rt>はず</rt></ruby>す',
        },
        {
          formula: '$= 3x + 2y + 5x - 3y$',
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめよう',
        },
        {
          formula: '$= (3+5)x + (2-3)y = 8x - y$',
          animateInsert: true,
          annotation: '$x$ の<ruby>仲間<rt>なかま</rt></ruby>と $y$ の<ruby>仲間<rt>なかま</rt></ruby>をグループ<ruby>分<rt>わ</rt></ruby>け',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>の<ruby>項<rt>こう</rt></ruby>だけを<ruby>計算<rt>けいさん</rt></ruby>すればいいんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>加法<rt>かほう</rt></ruby>のかっこ<ruby>外<rt>はず</rt></ruby>し: 「+」のかっこは<ruby>符号<rt>ふごう</rt></ruby>そのままで<ruby>外<rt>はず</rt></ruby>す → <ruby>同類項<rt>どうるいこう</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す！',
    },
    // ===== 2. 多項式の減法 =====
    {
      type: 'date',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>減法<rt>げんぽう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>のときは<ruby>要注意<rt>ようちゅうい</rt></ruby>！かっこの<ruby>前<rt>まえ</rt></ruby>が「−」だと、<ruby>符号<rt>ふごう</rt></ruby>が<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>するよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby>まちがえやすい！かっこの<ruby>前<rt>まえ</rt></ruby>が「−」のときは、<strong><ruby>中<rt>なか</rt></ruby>の<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>反転<rt>はんてん</rt></ruby></strong>させるんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>減法<rt>げんぽう</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$(5a - 2b) - (3a - 7b)$',
          annotation: '「−」のかっこ → <ruby>符号<rt>ふごう</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>！',
        },
        {
          formula: '$= 5a - 2b \\textcolor{#D97706}{- 3a + 7b}$',
          animateInsert: true,
          annotation: '$3a → -3a$、$-7b → \\textcolor{#D97706}{+7b}$ に<ruby>変<rt>か</rt></ruby>わる！',
        },
        {
          formula: '$= (5-3)a + (-2+7)b = 2a + 5b$',
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめて<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$-7b$ が $+7b$ に<ruby>変<rt>か</rt></ruby>わるんですね！<ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>え<ruby>忘<rt>わす</rt></ruby>れたら<ruby>大変<rt>たいへん</rt></ruby>だ…。',
    },
    {
      type: 'summary-point',
      text: '「+」のかっこ → そのまま<ruby>外<rt>はず</rt></ruby>す。「−」のかっこ → <ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>反転<rt>はんてん</rt></ruby>して<ruby>外<rt>はず</rt></ruby>す！',
    },
    {
      type: 'quiz',
      question: '$(6x - 4y) - (2x + 3y)$ の<ruby>答<rt>こた</rt></ruby>えは？',
      options: [
        { letter: 'A', text: '$4x - 7y$', correct: true },
        { letter: 'B', text: '$4x - y$', correct: false },
        { letter: 'C', text: '$8x - 7y$', correct: false },
        { letter: 'D', text: '$4x + 7y$', correct: false },
      ],
      explanation:
        'かっこを<ruby>外<rt>はず</rt></ruby>すと $6x - 4y - 2x - 3y$。<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめて $(6-2)x + (-4-3)y = \\textcolor{#D97706}{4x - 7y}$',
    },
    // ===== 3. 数×多項式（分配法則） =====
    {
      type: 'date',
      text: '<ruby>数<rt>すう</rt></ruby>×<ruby>多項式<rt>たこうしき</rt></ruby>（<ruby>分配<rt>ぶんぱい</rt></ruby><ruby>法則<rt>ほうそく</rt></ruby>）',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>数<rt>すう</rt></ruby>×<ruby>多項式<rt>たこうしき</rt></ruby>は<span class="keyword"><ruby>分配<rt>ぶんぱい</rt></ruby><ruby>法則<rt>ほうそく</rt></ruby></span>を<ruby>使<rt>つか</rt></ruby>うよ。$m(a + b) = ma + mb$ だ。<ruby>外<rt>そと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>中<rt>なか</rt></ruby>の<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>項<rt>こう</rt></ruby>にかけよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分配<rt>ぶんぱい</rt></ruby><ruby>法則<rt>ほうそく</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$-3(2x - 4y)$',
          annotation: '$-3$ を<ruby>中<rt>なか</rt></ruby>の<ruby>各項<rt>かくこう</rt></ruby>にかける',
        },
        {
          formula: '$= (-3) \\times 2x + (-3) \\times (-4y)$',
          annotation: '<ruby>符号<rt>ふごう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>して1つずつかける',
        },
        {
          formula: '$= -6x + 12y$',
          animateInsert: true,
          annotation: '(−)×(−)= (+) で $+12y$ になる！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'マイナス × マイナス = プラスだから $+12y$ になるんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>分配<rt>ぶんぱい</rt></ruby><ruby>法則<rt>ほうそく</rt></ruby>: $m(a+b) = ma + mb$。<ruby>外<rt>そと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>中<rt>なか</rt></ruby>の<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>項<rt>こう</rt></ruby>にかける。<ruby>符号<rt>ふごう</rt></ruby>のミスに<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },
    // ===== 4. 多項式÷数 =====
    {
      type: 'date',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>÷<ruby>数<rt>すう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>÷<ruby>数<rt>すう</rt></ruby>は、<ruby>各項<rt>かくこう</rt></ruby>をそれぞれ<ruby>割<rt>わ</rt></ruby>るよ。<ruby>割<rt>わ</rt></ruby>り<ruby>切<rt>き</rt></ruby>れないときは $\\div m$ を $\\times \\frac{1}{m}$ に<ruby>変<rt>か</rt></ruby>えて<ruby>分配<rt>ぶんぱい</rt></ruby><ruby>法則<rt>ほうそく</rt></ruby>を<ruby>使<rt>つか</rt></ruby>おう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>多項式<rt>たこうしき</rt></ruby>÷<ruby>数<rt>すう</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$(9a - 15b) \\div 3$',
          annotation: '<ruby>各項<rt>かくこう</rt></ruby>を $3$ で<ruby>割<rt>わ</rt></ruby>る',
        },
        {
          formula: '$= \\frac{9a}{3} - \\frac{15b}{3} = 3a - 5b$',
          animateInsert: true,
          annotation: '1つずつ<ruby>割<rt>わ</rt></ruby>り<ruby>算<rt>ざん</rt></ruby>して<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    // ===== 5. かっこが2つある式 =====
    {
      type: 'date',
      text: 'かっこが2つある<ruby>式<rt>しき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>分配<rt>ぶんぱい</rt></ruby><ruby>法則<rt>ほうそく</rt></ruby>でかっこを<ruby>外<rt>はず</rt></ruby>し、<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる<ruby>練習<rt>れんしゅう</rt></ruby>をしよう！',
    },
    {
      type: 'whiteboard',
      title: 'かっこ2つの<ruby>計算<rt>けいさん</rt></ruby>',
      steps: [
        {
          formula: '$2(x + y) + 6(x - 2y)$',
          annotation: 'それぞれの<ruby>数<rt>かず</rt></ruby>を<ruby>分配<rt>ぶんぱい</rt></ruby>する',
        },
        {
          formula: '$= 2x + 2y + 6x - 12y$',
          animateInsert: true,
          annotation: '$2 \\times y = 2y$、$6 \\times (-2y) = -12y$',
        },
        {
          formula: '$= (2+6)x + (2-12)y = 8x - 10y$',
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめて<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'quiz',
      question: '$3(2a - b) - 2(a - 3b)$ の<ruby>答<rt>こた</rt></ruby>えは？',
      options: [
        { letter: 'A', text: '$4a + 3b$', correct: true },
        { letter: 'B', text: '$4a - 9b$', correct: false },
        { letter: 'C', text: '$8a + 3b$', correct: false },
        { letter: 'D', text: '$4a - 3b$', correct: false },
      ],
      explanation:
        '$6a - 3b - 2a + 6b$。<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめて $(6-2)a + (-3+6)b = \\textcolor{#D97706}{4a + 3b}$。$-2 \\times (-3b) = +6b$ の<ruby>符号<rt>ふごう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },
    // ===== 6. 分数の形の式 =====
    {
      type: 'date',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>の<ruby>式<rt>しき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '$\\frac{3x - y}{2} - \\frac{3x - 2y}{3}$ みたいな<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>はどうやるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>引<rt>ひ</rt></ruby>きと<ruby>同<rt>おな</rt></ruby>じで、まず<span class="keyword"><ruby>通分<rt>つうぶん</rt></ruby></span>するよ。<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{3x - y}{2} - \\frac{3x - 2y}{3}$',
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>は $6$',
        },
        {
          formula: '$= \\frac{3(3x - y)}{6} - \\frac{2(3x - 2y)}{6}$',
          animateInsert: true,
          annotation: '<ruby>通分<rt>つうぶん</rt></ruby>して<ruby>分母<rt>ぶんぼ</rt></ruby>を $6$ にそろえる',
        },
        {
          formula: '$= \\frac{9x - 3y - 6x + 4y}{6} = \\frac{3x + y}{6}$',
          annotation: '<ruby>分子<rt>ぶんし</rt></ruby>を<ruby>展開<rt>てんかい</rt></ruby>し<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめて<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>: <ruby>通分<rt>つうぶん</rt></ruby> → <ruby>分子<rt>ぶんし</rt></ruby>を<ruby>展開<rt>てんかい</rt></ruby> → <ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる。<ruby>引<rt>ひ</rt></ruby>く<ruby>方<rt>ほう</rt></ruby>の<ruby>分子<rt>ぶんし</rt></ruby>は<ruby>符号<rt>ふごう</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れずに！',
    },
    // ===== 7. 式の値 =====
    {
      type: 'date',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>式<rt>しき</rt></ruby>に<ruby>数<rt>かず</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>するときは、<strong>まず<ruby>式<rt>shiki</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にしてから</strong><ruby>代入<rt>だいにゅう</rt></ruby>するのがコツだよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>の<ruby>求<rt>もと</rt></ruby>め<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$3(2x + y) - 2(x - 3y)$ に $x = -2, y = 3$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
          annotation: 'いきなり<ruby>代入<rt>だいにゅう</rt></ruby>しない！まず<ruby>整理<rt>せいり</rt></ruby>する',
        },
        {
          formula: '$= 6x + 3y - 2x + 6y = 4x + 9y$',
          animateInsert: true,
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめてから<ruby>代入<rt>だいにゅう</rt></ruby>！',
        },
        {
          formula: '$= 4 \\times (-2) + 9 \\times 3 = -8 + 27 = 19$',
          annotation: '<ruby>簡単<rt>かんたん</rt></ruby>になった<ruby>式<rt>しき</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>して<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>先<rt>さき</rt></ruby>に<ruby>式<rt>しき</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>代入<rt>だいにゅう</rt></ruby>すれば、<ruby>計算<rt>けいさん</rt></ruby>ミスも<ruby>減<rt>へ</rt></ruby>りますね！',
    },
    {
      type: 'quiz',
      question: '$2(3a - b) + (a + 5b)$ を<ruby>整理<rt>せいり</rt></ruby>してから $a = \\frac{1}{2}, b = -1$ を<ruby>代入<rt>だいにゅう</rt></ruby>した<ruby>値<rt>あたい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$\\frac{1}{2}$', correct: true },
        { letter: 'B', text: '$-\\frac{1}{2}$', correct: false },
        { letter: 'C', text: '$\\frac{7}{2}$', correct: false },
        { letter: 'D', text: '$-\\frac{5}{2}$', correct: false },
      ],
      explanation:
        'まず<ruby>整理<rt>せいり</rt></ruby>: $6a - 2b + a + 5b = 7a + 3b$。<ruby>代入<rt>だいにゅう</rt></ruby>: $7 \\times \\frac{1}{2} + 3 \\times (-1) = \\frac{7}{2} - 3 = \\textcolor{#D97706}{\\frac{1}{2}}$',
    },
    // ===== まとめ =====
    {
      type: 'end',
      points: [
        '<ruby>加法<rt>かほう</rt></ruby>:「+」のかっこはそのまま<ruby>外<rt>はず</rt></ruby>す',
        '<ruby>減法<rt>げんぽう</rt></ruby>:「−」のかっこは<ruby>符号<rt>ふごう</rt></ruby>を<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>して<ruby>外<rt>はず</rt></ruby>す',
        '<ruby>分配<rt>ぶんぱい</rt></ruby><ruby>法則<rt>ほうそく</rt></ruby>: $m(a+b) = ma + mb$',
        '<ruby>多項式<rt>たこうしき</rt></ruby>÷<ruby>数<rt>すう</rt></ruby>: <ruby>各項<rt>かくこう</rt></ruby>をそれぞれ<ruby>割<rt>わ</rt></ruby>る',
        '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>は<ruby>通分<rt>つうぶん</rt></ruby>してから<ruby>計算<rt>けいさん</rt></ruby>',
        '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>: まず<ruby>式<rt>しき</rt></ruby>を<ruby>整理<rt>せいり</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>する',
      ],
    },
  ],
};

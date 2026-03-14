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
    {
      type: 'date',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめよう',
    },
    {
      type: 'narrator',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>は、<ruby>同<rt>おな</rt></ruby>じ<ruby>仲間<rt>なかま</rt></ruby>の<ruby>項<rt>こう</rt></ruby>をまとめるのが<ruby>基本<rt>きほん</rt></ruby>！<ruby>同類項<rt>どうるいこう</rt></ruby>をしっかり<ruby>見<rt>み</rt></ruby>つけよう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>をやってみよう！まずはこの<ruby>問題<rt>もんだい</rt></ruby>から。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$(3x + 2y) + (5x - 3y)$',
          annotation: '2つの<ruby>多項式<rt>たこうしき</rt></ruby>を<ruby>足<rt>た</rt></ruby>してみよう',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えっと、<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をそのまま<ruby>足<rt>た</rt></ruby>しちゃっていいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>違<rt>ちが</rt></ruby>うんだ！<strong><ruby>同類項<rt>どうるいこう</rt></ruby>どうし</strong>だけをまとめるよ。$x$ の<ruby>仲間<rt>なかま</rt></ruby>は $x$ どうし、$y$ の<ruby>仲間<rt>なかま</rt></ruby>は $y$ どうしでね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$(3x + 2y) + (5x - 3y)$',
          annotation: 'かっこの<ruby>前<rt>まえ</rt></ruby>が「+」→ そのまま<ruby>外<rt>はず</rt></ruby>す',
        },
        {
          formula: '$3x + 2y + 5x - 3y$',
          annotation: 'x の<ruby>仲間<rt>なかま</rt></ruby>と y の<ruby>仲間<rt>なかま</rt></ruby>をそれぞれまとめよう',
        },
        {
          formula: '$(3x + 5x) + (2y - 3y)$',
          animateInsert: true,
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>ごとにグループ<ruby>分<rt>わ</rt></ruby>け！',
        },
        {
          formula: '$8x - y$',
          isResult: true,
          animateInsert: true,
          annotation: '3 + 5 = 8、2 + (-3) = -1 で<ruby>完成<rt>かんせい</rt></ruby>！',
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
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>: <ruby>同類項<rt>どうるいこう</rt></ruby>（<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>）の<ruby>係数<rt>けいすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>す。<ruby>違<rt>ちが</rt></ruby>う<ruby>文字<rt>もじ</rt></ruby>の<ruby>項<rt>こう</rt></ruby>は<ruby>混<rt>ま</rt></ruby>ぜない！',
    },
    {
      type: 'date',
      text: 'かっこの<ruby>外<rt>はず</rt></ruby>し<ruby>方<rt>かた</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>！',
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
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>！ここが<ruby>一番<rt>いちばん</rt></ruby>まちがえやすいポイントだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$(5a - 2b) - (3a - 7b)$',
          annotation: 'かっこの<ruby>前<rt>まえ</rt></ruby>が「−」！<ruby>要注意<rt>ようちゅうい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>のかっこは<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じように<ruby>外<rt>はず</rt></ruby>していいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>違<rt>ちが</rt></ruby>うよ！かっこの<ruby>前<rt>まえ</rt></ruby>が「−」のときは、<strong><ruby>中<rt>なか</rt></ruby>の<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>反転<rt>はんてん</rt></ruby></strong>させるんだ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>の<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$(5a - 2b) - (3a - 7b)$',
          annotation: '「−」のかっこ → <ruby>符号<rt>ふごう</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>！',
        },
        {
          formula: '$5a - 2b \\textcolor{#D97706}{- 3a + 7b}$',
          animateInsert: true,
          annotation: '$3a$ → $-3a$, $-7b$ → $\\textcolor{#D97706}{+7b}$（<ruby>符号<rt>ふごう</rt></ruby>チェンジ！）',
        },
        {
          formula: '$(5a - 3a) + (-2b + 7b)$',
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめよう',
        },
        {
          formula: '$2a + 5b$',
          isResult: true,
          animateInsert: true,
          annotation: '5 - 3 = 2、-2 + 7 = 5 で<ruby>完成<rt>かんせい</rt></ruby>！',
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
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<strong>「−」のかっこは<ruby>全部<rt>ぜんぶ</rt></ruby>ひっくり<ruby>返<rt>かえ</rt></ruby>す</strong>って<ruby>覚<rt>おぼ</rt></ruby>えておこう！',
    },
    {
      type: 'summary-point',
      text: '「+」のかっこ → そのまま<ruby>外<rt>はず</rt></ruby>す。「−」のかっこ → <ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>反転<rt>はんてん</rt></ruby>してから<ruby>外<rt>はず</rt></ruby>す！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'あれ、$-(3x - 2) = -3x - 2$ ですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'よくある<ruby>間違<rt>まちが</rt></ruby>い！「−」のかっこは<ruby>中<rt>なか</rt></ruby>の<strong><ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby></strong>が<ruby>変<rt>か</rt></ruby>わるよ。$-(3x - 2) = -3x + 2$ だよ。$-2$ も $+2$ に<ruby>変<rt>か</rt></ruby>わるのを<ruby>忘<rt>わす</rt></ruby>れないで！',
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
    {
      type: 'end',
      points: [
        '<ruby>同類項<rt>どうるいこう</rt></ruby>（<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>）の<ruby>係数<rt>けいすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>し<ruby>引<rt>ひ</rt></ruby>きする',
        '「+」のかっこ → そのまま<ruby>外<rt>はず</rt></ruby>す',
        '「−」のかっこ → <ruby>中<rt>なか</rt></ruby>の<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>反転<rt>はんてん</rt></ruby>',
        '<ruby>符号<rt>ふごう</rt></ruby>のミスに<ruby>気<rt>き</rt></ruby>をつけて<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>しよう',
      ],
    },
  ],
};

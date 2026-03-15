import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const literalCalcChat: HistoryChat = {
  id: 'math-g1-lit-calc',
  icon: '🧮',
  title: '<ruby>文字式<rt>もじしき</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>項<rt>こう</rt></ruby>・<ruby>係数<rt>けいすう</rt></ruby>と<ruby>同類項<rt>どうるいこう</rt></ruby>',
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
      text: '<ruby>項<rt>こう</rt></ruby>と<ruby>係数<rt>けいすう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>文字式<rt>もじしき</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>をするには、まず<strong>「<ruby>項<rt>こう</rt></ruby>」</strong>と<strong>「<ruby>係数<rt>けいすう</rt></ruby>」</strong>という<ruby>言葉<rt>ことば</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、+や-で<ruby>区切<rt>くぎ</rt></ruby>られた<ruby>一<rt>ひと</rt></ruby>つひとつの<ruby>部分<rt>ぶぶん</rt></ruby>を<strong>「<ruby>項<rt>こう</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。<ruby>項<rt>こう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>を<strong>「<ruby>係数<rt>けいすう</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>項<rt>こう</rt></ruby>と<ruby>係数<rt>けいすう</rt></ruby>',
      steps: [
        {
          formula: '$5x - 3y + 2$',
          annotation: 'この<ruby>式<rt>しき</rt></ruby>の<ruby>項<rt>こう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけよう',
        },
        {
          formula: '<ruby>項<rt>こう</rt></ruby>: $\\textcolor{#D97706}{5x}$, $\\textcolor{#D97706}{-3y}$, $\\textcolor{#D97706}{2}$',
          annotation: '+と-で<ruby>区切<rt>くぎ</rt></ruby>った<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>項<rt>こう</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$5x$ の<ruby>係数<rt>けいすう</rt></ruby>は $\\textcolor{#D97706}{5}$、$-3y$ の<ruby>係数<rt>けいすう</rt></ruby>は $\\textcolor{#D97706}{-3}$',
          annotation: '<ruby>符号<rt>ふごう</rt></ruby>もセットで<ruby>係数<rt>けいすう</rt></ruby>！',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$2$ みたいに<ruby>文字<rt>もじ</rt></ruby>がない<ruby>項<rt>こう</rt></ruby>もあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！<ruby>数<rt>かず</rt></ruby>だけの<ruby>項<rt>こう</rt></ruby>を<strong>「<ruby>定数項<rt>ていすうこう</rt></ruby>」</strong>と<ruby>呼<rt>よ</rt></ruby>ぶんだ。$2$ も<ruby>立派<rt>りっぱ</rt></ruby>な<ruby>項<rt>こう</rt></ruby>だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>項<rt>こう</rt></ruby> = +や-で<ruby>区切<rt>くぎ</rt></ruby>られた<ruby>部分<rt>ぶぶん</rt></ruby>。<ruby>係数<rt>けいすう</rt></ruby> = <ruby>項<rt>こう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>（<ruby>符号<rt>ふごう</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む）。<ruby>定数項<rt>ていすうこう</rt></ruby> = <ruby>数<rt>かず</rt></ruby>だけの<ruby>項<rt>こう</rt></ruby>。',
    },
    {
      type: 'date',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめよう',
    },
    {
      type: 'narrator',
      text: '<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>は、<ruby>係数<rt>けいすう</rt></ruby>どうしを<ruby>足<rt>た</rt></ruby>したり<ruby>引<rt>ひ</rt></ruby>いたりしてまとめられるよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$3x + 5x$ を<ruby>計算<rt>けいさん</rt></ruby>してみよう。<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ $x$ だから、<ruby>係数<rt>けいすう</rt></ruby>をまとめるよ。これは<strong><ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby></strong>の<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>なんだ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる',
      steps: [
        {
          formula: '$3x + 5x$',
          annotation: '<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ！',
        },
        {
          formula: '$= (3 + 5)x$',
          annotation: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>：<ruby>係数<rt>けいすう</rt></ruby>だけ<ruby>足<rt>た</rt></ruby>す',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{8x}$',
          annotation: '<ruby>答<rt>こた</rt></ruby>え！',
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
      text: 'りんご3<ruby>個<rt>こ</rt></ruby>と5<ruby>個<rt>こ</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせたら8<ruby>個<rt>こ</rt></ruby>！みたいな<ruby>感<rt>かん</rt></ruby>じですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！じゃあ<ruby>次<rt>つぎ</rt></ruby>はもう<ruby>少<rt>すこ</rt></ruby>し<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>式<rt>しき</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>してみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>複数<rt>ふくすう</rt></ruby>の<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる',
      steps: [
        {
          formula: '$4x + 3 - 2x + 5$',
          annotation: '$x$ の<ruby>項<rt>こう</rt></ruby>と<ruby>定数項<rt>ていすうこう</rt></ruby>を<ruby>分<rt>わ</rt></ruby>けよう',
        },
        {
          formula: '$= (4x - 2x) + (3 + 5)$',
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>どうしを<ruby>集<rt>あつ</rt></ruby>める',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{2x + 8}$',
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>して<ruby>完成<rt>かんせい</rt></ruby>！',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby>（<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>）は、<ruby>係数<rt>けいすう</rt></ruby>どうしを<ruby>計算<rt>けいさん</rt></ruby>してまとめる。<ruby>違<rt>ちが</rt></ruby>う<ruby>文字<rt>もじ</rt></ruby>の<ruby>項<rt>こう</rt></ruby>はまとめられない。',
    },
    {
      type: 'date',
      text: 'かっこのはずし<ruby>方<rt>かた</rt></ruby>',
    },
    {
      type: 'narrator',
      text: 'かっこの<ruby>前<rt>まえ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>によって、はずし<ruby>方<rt>かた</rt></ruby>が<ruby>変<rt>か</rt></ruby>わるよ。ここが<ruby>間違<rt>まちが</rt></ruby>えやすいポイント！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'かっこの<ruby>前<rt>まえ</rt></ruby>が<strong>+ならそのまま</strong>はずす。<strong>-なら<ruby>符号<rt>ふごう</rt></ruby>を<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>変<rt>か</rt></ruby>えて</strong>はずすんだ。',
    },
    {
      type: 'whiteboard',
      title: 'かっこのはずし<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$+(3x - 2) = \\textcolor{#D97706}{3x - 2}$',
          annotation: '<ruby>前<rt>まえ</rt></ruby>が+：そのまま！',
        },
        {
          formula: '$-(3x - 2) = \\textcolor{#D97706}{-3x + 2}$',
          annotation: '<ruby>前<rt>まえ</rt></ruby>が-：<ruby>符号<rt>ふごう</rt></ruby><ruby>全部<rt>ぜんぶ</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>！',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '-のときに<ruby>符号<rt>ふごう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わるんですね…<ruby>忘<rt>わす</rt></ruby>れそう…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>実際<rt>じっさい</rt></ruby>に<ruby>問題<rt>もんだい</rt></ruby>をやってみよう！$(5a + 3) - (2a - 1)$ を<ruby>計算<rt>けいさん</rt></ruby>するよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>練習<rt>れんしゅう</rt></ruby>：かっこをはずして<ruby>計算<rt>けいさん</rt></ruby>',
      steps: [
        {
          formula: '$(5a + 3) - (2a - 1)$',
          annotation: '2つ<ruby>目<rt>め</rt></ruby>のかっこの<ruby>前<rt>まえ</rt></ruby>は-',
        },
        {
          formula: '$= 5a + 3 \\textcolor{#D97706}{- 2a + 1}$',
          annotation: '<ruby>後<rt>うし</rt></ruby>ろのかっこは<ruby>符号<rt>ふごう</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>！',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{3a + 4}$',
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめて<ruby>完成<rt>かんせい</rt></ruby>！',
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
      text: 'なるほど！$-1$ が $+1$ に<ruby>変<rt>か</rt></ruby>わるんですね。<ruby>符号<rt>ふごう</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えないように<ruby>気<rt>き</rt></ruby>をつけます！',
    },
    {
      type: 'date',
      text: '<ruby>文字式<rt>もじしき</rt></ruby>×<ruby>数<rt>かず</rt></ruby>、<ruby>文字式<rt>もじしき</rt></ruby>÷<ruby>数<rt>かず</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>文字式<rt>もじしき</rt></ruby>に<ruby>数<rt>かず</rt></ruby>をかけたり<ruby>割<rt>わ</rt></ruby>ったりする<ruby>計算<rt>けいさん</rt></ruby>も<ruby>練習<rt>れんしゅう</rt></ruby>しよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って、<strong>かっこの<ruby>中<rt>なか</rt></ruby>の<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>項<rt>こう</rt></ruby></strong>に<ruby>計算<rt>けいさん</rt></ruby>するよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>文字式<rt>もじしき</rt></ruby>×<ruby>数<rt>かず</rt></ruby>',
      steps: [
        {
          formula: '$3(2a - 5)$',
          annotation: '<ruby>各<rt>かく</rt></ruby><ruby>項<rt>こう</rt></ruby>に $3$ をかける',
        },
        {
          formula: '$= 3 \\times 2a + 3 \\times (-5)$',
          annotation: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{6a - 15}$',
          annotation: '<ruby>完成<rt>かんせい</rt></ruby>！',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'whiteboard',
      title: '<ruby>文字式<rt>もじしき</rt></ruby>÷<ruby>数<rt>かず</rt></ruby>',
      steps: [
        {
          formula: '$(6x - 9) \\div 3$',
          annotation: '<ruby>各<rt>かく</rt></ruby><ruby>項<rt>こう</rt></ruby>を $3$ で<ruby>割<rt>わ</rt></ruby>る',
        },
        {
          formula: '$= \\dfrac{6x}{3} - \\dfrac{9}{3}$',
          annotation: '<ruby>各<rt>かく</rt></ruby><ruby>項<rt>こう</rt></ruby>を<ruby>別々<rt>べつべつ</rt></ruby>に÷',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{2x - 3}$',
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
      text: '<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>項<rt>こう</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ<ruby>計算<rt>けいさん</rt></ruby>をすればいいんですね！<ruby>一<rt>ひと</rt></ruby>つの<ruby>項<rt>こう</rt></ruby>だけにかけたり<ruby>割<rt>わ</rt></ruby>ったりしたらダメってことか。',
    },
    {
      type: 'quiz',
      question: '$(4x + 6) \\times 2$ の<ruby>計算<rt>けいさん</rt></ruby><ruby>結果<rt>けっか</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$4x + 12$', correct: false },
        { letter: 'B', text: '$8x + 6$', correct: false },
        { letter: 'C', text: '$8x + 12$', correct: true },
        { letter: 'D', text: '$6x + 8$', correct: false },
      ],
      explanation:
        '<ruby>各<rt>かく</rt></ruby><ruby>項<rt>こう</rt></ruby>に $2$ をかけるよ。$4x \\times 2 = 8x$、$6 \\times 2 = 12$。<ruby>答<rt>こた</rt></ruby>えは $\\textcolor{#D97706}{8x + 12}$ だね。',
    },
    {
      type: 'end',
      points: [
        '<ruby>項<rt>こう</rt></ruby> = +や-で<ruby>区切<rt>くぎ</rt></ruby>られた<ruby>部分<rt>ぶぶん</rt></ruby>。<ruby>係数<rt>けいすう</rt></ruby> = <ruby>項<rt>こう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>',
        '<ruby>同類項<rt>どうるいこう</rt></ruby>（<ruby>文字<rt>もじ</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>）は<ruby>係数<rt>けいすう</rt></ruby>をまとめる',
        'かっこの<ruby>前<rt>まえ</rt></ruby>が-なら、<ruby>中<rt>なか</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>',
        '<ruby>文字式<rt>もじしき</rt></ruby>×÷<ruby>数<rt>かず</rt></ruby>は、<ruby>全部<rt>ぜんぶ</rt></ruby>の<ruby>項<rt>こう</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>する（<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>）',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const monomialPolynomialChat: HistoryChat = {
  id: 'math-g2-monomial-poly',
  icon: '📝',
  title: '<ruby>単項式<rt>たんこうしき</rt></ruby>と<ruby>多項式<rt>たこうしき</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>2<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>式<rt>しき</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>と<ruby>次数<rt>じすう</rt></ruby>',
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
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>と<ruby>多項式<rt>たこうしき</rt></ruby>って？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>2の<ruby>数学<rt>すうがく</rt></ruby>では、<ruby>式<rt>しき</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>を<ruby>区別<rt>くべつ</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>！まずは<strong>「<ruby>単項式<rt>たんこうしき</rt></ruby>」</strong>と<strong>「<ruby>多項式<rt>たこうしき</rt></ruby>」</strong>の<ruby>違<rt>ちが</rt></ruby>いを<ruby>学<rt>まな</rt></ruby>ぼう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<ruby>中<rt>ちゅう</rt></ruby>1で<ruby>習<rt>なら</rt></ruby>った<ruby>文字式<rt>もじしき</rt></ruby>を<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>してみよう。<ruby>式<rt>しき</rt></ruby>にはいろんな<ruby>形<rt>かたち</rt></ruby>があるよね。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>式<rt>しき</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$3x, -5ab, 7$',
          annotation: '<ruby>数<rt>かず</rt></ruby>や<ruby>文字<rt>もじ</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>だけの<ruby>式<rt>しき</rt></ruby>',
        },
        {
          formula: '$3x + 2y - 5$',
          annotation: '<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>・<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>でつながった<ruby>式<rt>しき</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>上<rt>うえ</rt></ruby>の<ruby>式<rt>しき</rt></ruby>と<ruby>下<rt>した</rt></ruby>の<ruby>式<rt>しき</rt></ruby>って、なにが<ruby>違<rt>ちが</rt></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！<ruby>上<rt>うえ</rt></ruby>のように<strong>かけ<ruby>算<rt>ざん</rt></ruby>だけ</strong>でできている<ruby>式<rt>shiki</rt></ruby>を<strong>「<ruby>単項式<rt>たんこうしき</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。<ruby>下<rt>した</rt></ruby>のように<ruby>単項式<rt>たんこうしき</rt></ruby>が<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>でつながった<ruby>式<rt>しき</rt></ruby>を<strong>「<ruby>多項式<rt>たこうしき</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！「<ruby>単<rt>たん</rt></ruby>」は1つ、「<ruby>多<rt>た</rt></ruby>」は<ruby>多<rt>おお</rt></ruby>いってことですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つひとつの<ruby>単項式<rt>たんこうしき</rt></ruby>を<strong>「<ruby>項<rt>こう</rt></ruby>」</strong>と<ruby>呼<rt>よ</rt></ruby>ぶよ。<ruby>例<rt>たと</rt></ruby>えば $3x + 2y - 5$ の<ruby>項<rt>こう</rt></ruby>は $3x$, $2y$, $-5$ の3つだね。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$-5$ も<ruby>項<rt>こう</rt></ruby>なんですか？<ruby>文字<rt>もじ</rt></ruby>がないのに？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>数<rt>かず</rt></ruby>だけでも<ruby>単項式<rt>たんこうしき</rt></ruby>だよ！<ruby>数<rt>かず</rt></ruby>だけの<ruby>項<rt>こう</rt></ruby>は<strong>「<ruby>定数項<rt>ていすうこう</rt></ruby>」</strong>と<ruby>呼<rt>よ</rt></ruby>ぶんだ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby> = かけ<ruby>算<rt>ざん</rt></ruby>だけの<ruby>式<rt>しき</rt></ruby>。<ruby>多項式<rt>たこうしき</rt></ruby> = <ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>和<rt>わ</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>の<ruby>式<rt>しき</rt></ruby>。<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つひとつを「<ruby>項<rt>こう</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ぶ。<ruby>数<rt>かず</rt></ruby>だけの<ruby>項<rt>こう</rt></ruby>は「<ruby>定数項<rt>ていすうこう</rt></ruby>」。',
    },
    {
      type: 'quiz',
      question: '<ruby>多項式<rt>たこうしき</rt></ruby> $5x - 3y + 7$ の<ruby>項<rt>こう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>はいくつ？',
      options: [
        { letter: 'A', text: '2つ', correct: false },
        { letter: 'B', text: '3つ', correct: true },
        { letter: 'C', text: '4つ', correct: false },
        { letter: 'D', text: '1つ', correct: false },
      ],
      explanation:
        '$5x$, $-3y$, $7$ の $\\textcolor{#D97706}{3}$ つ。$7$ は<ruby>定数項<rt>ていすうこう</rt></ruby>だけど<ruby>項<rt>こう</rt></ruby>の1つだよ！',
    },
    {
      type: 'date',
      text: '<ruby>次数<rt>じすう</rt></ruby>と<ruby>係数<rt>けいすう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す<ruby>大事<rt>だいじ</rt></ruby>な<ruby>用語<rt>ようご</rt></ruby>、<strong>「<ruby>次数<rt>じすう</rt></ruby>」</strong>と<strong>「<ruby>係数<rt>けいすう</rt></ruby>」</strong>を<ruby>覚<rt>おぼ</rt></ruby>えよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby>で、かけ<ruby>合<rt>あ</rt></ruby>わされている<ruby>文字<rt>もじ</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>を<strong>「<ruby>次数<rt>じすう</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。<ruby>文字<rt>もじ</rt></ruby>にかかっている<ruby>数<rt>かず</rt></ruby>を<strong>「<ruby>係数<rt>けいすう</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>次数<rt>じすう</rt></ruby>と<ruby>係数<rt>けいすう</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$5x^2$ → <ruby>係数<rt>けいすう</rt></ruby>: 5, <ruby>次数<rt>じすう</rt></ruby>: 2',
          annotation: 'x が 2<ruby>個<rt>こ</rt></ruby>かけ<ruby>合<rt>あ</rt></ruby>わされている',
        },
        {
          formula: '$-3ab$ → <ruby>係数<rt>けいすう</rt></ruby>: -3, <ruby>次数<rt>じすう</rt></ruby>: 2',
          annotation: 'a と b で<ruby>文字<rt>もじ</rt></ruby>が 2<ruby>個<rt>こ</rt></ruby>',
        },
        {
          formula: '$4x^2y$ → <ruby>係数<rt>けいすう</rt></ruby>: 4, <ruby>次数<rt>じすう</rt></ruby>: 3',
          animateInsert: true,
          annotation: 'x が 2<ruby>個<rt>こ</rt></ruby> + y が 1<ruby>個<rt>こ</rt></ruby> = <ruby>合計<rt>ごうけい</rt></ruby> 3<ruby>個<rt>こ</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>文字<rt>もじ</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>を<ruby>数<rt>かぞ</rt></ruby>えればいいんですね！$x^2$ は $x \\times x$ だから 2<ruby>個<rt>こ</rt></ruby>ってことか！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$x^2$ の<ruby>係数<rt>けいすう</rt></ruby>はいくつですか？<ruby>数<rt>かず</rt></ruby>が<ruby>書<rt>か</rt></ruby>いてないけど…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>数<rt>かず</rt></ruby>が<ruby>書<rt>か</rt></ruby>いてないときは $1$ が<ruby>隠<rt>かく</rt></ruby>れているんだ。$x^2 = 1 \\times x^2$ だから<ruby>係数<rt>けいすう</rt></ruby>は $1$。$-y$ なら<ruby>係数<rt>けいすう</rt></ruby>は $-1$ だよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$1$ が<ruby>省略<rt>しょうりゃく</rt></ruby>されてるんですね！<ruby>気<rt>き</rt></ruby>をつけなきゃ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>次数<rt>じすう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>。<ruby>係数<rt>けいすう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>にかかる<ruby>数<rt>かず</rt></ruby>（$x^2$ の<ruby>係数<rt>けいすう</rt></ruby>は $1$、$-y$ の<ruby>係数<rt>けいすう</rt></ruby>は $-1$）。',
    },
    {
      type: 'quiz',
      question: '<ruby>単項式<rt>たんこうしき</rt></ruby> $-6a^2b$ の<ruby>係数<rt>けいすう</rt></ruby>と<ruby>次数<rt>じすう</rt></ruby>は？',
      options: [
        { letter: 'A', text: '<ruby>係数<rt>けいすう</rt></ruby> $-6$、<ruby>次数<rt>じすう</rt></ruby> $2$', correct: false },
        { letter: 'B', text: '<ruby>係数<rt>けいすう</rt></ruby> $6$、<ruby>次数<rt>じすう</rt></ruby> $3$', correct: false },
        { letter: 'C', text: '<ruby>係数<rt>けいすう</rt></ruby> $-6$、<ruby>次数<rt>じすう</rt></ruby> $3$', correct: true },
        { letter: 'D', text: '<ruby>係数<rt>けいすう</rt></ruby> $-6$、<ruby>次数<rt>じすう</rt></ruby> $4$', correct: false },
      ],
      explanation:
        '<ruby>係数<rt>けいすう</rt></ruby>は $\\textcolor{#D97706}{-6}$。<ruby>次数<rt>じすう</rt></ruby>は $a$ が2<ruby>個<rt>こ</rt></ruby> + $b$ が1<ruby>個<rt>こ</rt></ruby> = $\\textcolor{#D97706}{3}$ だよ。',
    },
    {
      type: 'date',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>多項式<rt>たこうしき</rt></ruby>にも<ruby>次数<rt>じすう</rt></ruby>があるよ。<ruby>各項<rt>かくこう</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>のうち、<strong>もっとも<ruby>大<rt>おお</rt></ruby>きいもの</strong>が<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>なんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>',
      steps: [
        {
          formula: '$3x^2 + 5x - 1$',
          annotation: '<ruby>各項<rt>かくこう</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>: 2, 1, 0 → <ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>は <strong>2</strong>（2<ruby>次式<rt>じしき</rt></ruby>）',
        },
        {
          formula: '$2a + 3b - 7$',
          annotation: '<ruby>各項<rt>かくこう</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>: 1, 1, 0 → <ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>は <strong>1</strong>（1<ruby>次式<rt>じしき</rt></ruby>）',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>一番大<rt>いちばんおお</rt></ruby>きい<ruby>次数<rt>じすう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つければいいんですね！',
    },
    {
      type: 'quiz',
      question: '<ruby>多項式<rt>たこうしき</rt></ruby> $x^2y + 3xy - 2y$ の<ruby>次数<rt>じすう</rt></ruby>は？',
      options: [
        { letter: 'A', text: '1', correct: false },
        { letter: 'B', text: '3', correct: true },
        { letter: 'C', text: '2', correct: false },
        { letter: 'D', text: '4', correct: false },
      ],
      explanation:
        '$x^2y$ の<ruby>次数<rt>じすう</rt></ruby>は $2+1=3$、$3xy$ は $2$、$-2y$ は $1$。\n<ruby>最大<rt>さいだい</rt></ruby>の $\\textcolor{#D97706}{3}$ が<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>次数<rt>じすう</rt></ruby>だよ。',
    },
    {
      type: 'date',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<strong>「<ruby>同類項<rt>どうるいこう</rt></ruby>」</strong>を<ruby>覚<rt>おぼ</rt></ruby>えよう。<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>のことだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>同類項<rt>どうるいこう</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$3x$ と $-5x$ → <ruby>同類項<rt>どうるいこう</rt></ruby>（<ruby>文字<rt>もじ</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ $x$）',
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>っても<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じならOK！',
        },
        {
          formula: '$2a^2b$ と $-7a^2b$ → <ruby>同類項<rt>どうるいこう</rt></ruby>',
          annotation: '$a^2b$ の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ！',
        },
        {
          formula: '$3x$ と $3x^2$ → <ruby>同類項<rt>どうるいこう</rt></ruby>ではない！',
          annotation: '$x$ と $x^2$ は<ruby>違<rt>ちが</rt></ruby>う<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じじゃないとダメなんですね。$x$ と $x^2$ は<ruby>別物<rt>べつもの</rt></ruby>か…。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$4ab$ と $-2ba$ は<ruby>同類項<rt>どうるいこう</rt></ruby>ですか？<ruby>文字<rt>もじ</rt></ruby>の<ruby>順番<rt>じゅんばん</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うけど…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby>だよ！かけ<ruby>算<rt>ざん</rt></ruby>は<ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>入<rt>い</rt></ruby>れ<ruby>替<rt>か</rt></ruby>えても<ruby>同<rt>おな</rt></ruby>じだから、$ab = ba$ なんだ。<ruby>文字<rt>もじ</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>と<ruby>個数<rt>こすう</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じなら<ruby>同類項<rt>どうるいこう</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>。$x$ と $x^2$ は<ruby>別物<rt>べつもの</rt></ruby>。$ab$ と $ba$ は<ruby>同<rt>おな</rt></ruby>じ。',
    },
    {
      type: 'quiz',
      question: '$5xy$ と<ruby>同類項<rt>どうるいこう</rt></ruby>なのはどれ？',
      options: [
        { letter: 'A', text: '$3x^2y$', correct: false },
        { letter: 'B', text: '$-2xy$', correct: false },
        { letter: 'C', text: '$7yx$', correct: false },
        { letter: 'D', text: 'B と C の<ruby>両方<rt>りょうほう</rt></ruby>', correct: true },
      ],
      explanation:
        '$-2xy$ も $7yx$ も<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>は $xy$（$yx = xy$）で<ruby>同<rt>おな</rt></ruby>じ。\n$3x^2y$ は $x^2$ があるので<ruby>別物<rt>べつもの</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめよう',
    },
    {
      type: 'narrator',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめて<ruby>式<rt>しき</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にする<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぼう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>同類項<rt>どうるいこう</rt></ruby>は<ruby>係数<rt>けいすう</rt></ruby>を<ruby>足<rt>た</rt></ruby>し<ruby>引<rt>ひ</rt></ruby>きしてまとめられるよ。<ruby>公式<rt>こうしき</rt></ruby>は $ma + na = (m+n)a$ だ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '$5x + 3x = (5+3)x = 8x$',
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>どうしを<ruby>足<rt>た</rt></ruby>す',
        },
        {
          formula: '$7a - 4a = (7-4)a = 3a$',
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>どうしを<ruby>引<rt>ひ</rt></ruby>く',
        },
        {
          formula: '$x^2 + 9x + 3x^2 - 4x$',
          animateInsert: true,
          annotation: '$x^2$ の<ruby>同類項<rt>どうるいこう</rt></ruby>と $x$ の<ruby>同類項<rt>どうるいこう</rt></ruby>を<ruby>別々<rt>べつべつ</rt></ruby>にまとめる',
        },
        {
          formula: '$= (1+3)x^2 + (9-4)x = 4x^2 + 5x$',
          annotation: '<ruby>答<rt>こた</rt></ruby>え！<ruby>次数<rt>じすう</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>順<rt>じゅん</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べよう',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>の<ruby>グループ<rt>ぐるーぷ</rt></ruby>ごとに<ruby>係数<rt>けいすう</rt></ruby>をまとめればいいんだ！',
    },
    {
      type: 'quiz',
      question: '$2x - y + 4y + 5x$ を<ruby>同類項<rt>どうるいこう</rt></ruby>でまとめると？',
      options: [
        { letter: 'A', text: '$7x + 3y$', correct: true },
        { letter: 'B', text: '$11xy$', correct: false },
        { letter: 'C', text: '$3x + 5y$', correct: false },
        { letter: 'D', text: '$7x - 3y$', correct: false },
      ],
      explanation:
        '$x$ の<ruby>同類項<rt>どうるいこう</rt></ruby>: $2x + 5x = 7x$、$y$ の<ruby>同類項<rt>どうるいこう</rt></ruby>: $-y + 4y = 3y$。\n<ruby>答<rt>こた</rt></ruby>えは $\\textcolor{#D97706}{7x + 3y}$。',
    },
    {
      type: 'date',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>でもまとめよう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>係数<rt>けいすう</rt></ruby>が<ruby>分数<rt>ぶんすう</rt></ruby>のときはどうするんですか？$\\frac{1}{2}a + \\frac{1}{3}a$ とか…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じ！<ruby>係数<rt>けいすう</rt></ruby>を<ruby>通分<rt>つうぶん</rt></ruby>してから<ruby>足<rt>た</rt></ruby>し<ruby>引<rt>ひ</rt></ruby>きするんだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{1}{2}a + \\frac{1}{3}a$',
          annotation: '<ruby>通分<rt>つうぶん</rt></ruby>しよう（<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>は $6$）',
        },
        {
          formula: '$= \\frac{3}{6}a + \\frac{2}{6}a = \\frac{5}{6}a$',
          animateInsert: true,
          annotation: '<ruby>通分<rt>つうぶん</rt></ruby>して<ruby>係数<rt>けいすう</rt></ruby>をまとめる！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じように<ruby>通分<rt>つうぶん</rt></ruby>すればOKなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'もう<ruby>一<rt>ひと</rt></ruby>つ<ruby>練習<rt>れんしゅう</rt></ruby>！$\\frac{1}{2}a + b - \\frac{1}{3}a + 2b$ を<ruby>整理<rt>せいり</rt></ruby>してみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>練習問題<rt>れんしゅうもんだい</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{1}{2}a + b - \\frac{1}{3}a + 2b$',
          annotation: '$a$ の<ruby>同類項<rt>どうるいこう</rt></ruby>と $b$ の<ruby>同類項<rt>どうるいこう</rt></ruby>に<ruby>分<rt>わ</rt></ruby>ける',
        },
        {
          formula: '$a$: $\\frac{1}{2}a - \\frac{1}{3}a = \\frac{3}{6}a - \\frac{2}{6}a = \\frac{1}{6}a$',
          annotation: '$a$ の<ruby>同類項<rt>どうるいこう</rt></ruby>を<ruby>通分<rt>つうぶん</rt></ruby>してまとめる',
        },
        {
          formula: '$b$: $b + 2b = 3b$',
          annotation: '$b$ の<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる',
        },
        {
          formula: '<ruby>答<rt>こた</rt></ruby>え: $\\frac{1}{6}a + 3b$',
          animateInsert: true,
          annotation: '<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'quiz',
      question: '$\\frac{2}{3}x - \\frac{1}{4}x$ を<ruby>計算<rt>けいさん</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$\\frac{1}{7}x$', correct: false },
        { letter: 'B', text: '$\\frac{2}{12}x$', correct: false },
        { letter: 'C', text: '$\\frac{1}{12}x$', correct: false },
        { letter: 'D', text: '$\\frac{5}{12}x$', correct: true },
      ],
      explanation:
        '<ruby>通分<rt>つうぶん</rt></ruby>して $\\frac{8}{12}x - \\frac{3}{12}x = \\textcolor{#D97706}{\\frac{5}{12}x}$ だよ。\n<ruby>分母<rt>ぶんぼ</rt></ruby>どうしを<ruby>引<rt>ひ</rt></ruby>くのではなく<ruby>通分<rt>つうぶん</rt></ruby>するのがポイント！',
    },
    {
      type: 'end',
      points: [
        '<ruby>単項式<rt>たんこうしき</rt></ruby> = かけ<ruby>算<rt>ざん</rt></ruby>だけの<ruby>式<rt>しき</rt></ruby>、<ruby>多項式<rt>たこうしき</rt></ruby> = <ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>和<rt>わ</rt></ruby>',
        '<ruby>次数<rt>じすう</rt></ruby> = かけ<ruby>合<rt>あ</rt></ruby>わされている<ruby>文字<rt>もじ</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>（<ruby>多項式<rt>たこうしき</rt></ruby>は<ruby>最大<rt>さいだい</rt></ruby>のもの）',
        '<ruby>係数<rt>けいすう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>にかかっている<ruby>数<rt>かず</rt></ruby>（$x^2$ の<ruby>係数<rt>けいすう</rt></ruby>は $1$）',
        '<ruby>同類項<rt>どうるいこう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>、$ma + na = (m+n)a$ でまとめる',
        '<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>は<ruby>通分<rt>つうぶん</rt></ruby>してからまとめる',
      ],
    },
  ],
};

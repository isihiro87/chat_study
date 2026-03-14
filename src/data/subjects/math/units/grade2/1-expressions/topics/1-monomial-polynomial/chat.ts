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
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！<ruby>上<rt>うえ</rt></ruby>のように<strong>かけ<ruby>算<rt>ざん</rt></ruby>だけ</strong>でできている<ruby>式<rt>しき</rt></ruby>を<strong>「<ruby>単項式<rt>たんこうしき</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。<ruby>下<rt>した</rt></ruby>のように<ruby>単項式<rt>たんこうしき</rt></ruby>が<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>でつながった<ruby>式<rt>しき</rt></ruby>を<strong>「<ruby>多項式<rt>たこうしき</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！「<ruby>単<rt>たん</rt></ruby>」は1つ、「<ruby>多<rt>た</rt></ruby>」は<ruby>多<rt>おお</rt></ruby>いってことですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>単項式<rt>たんこうしき</rt></ruby> = かけ<ruby>算<rt>ざん</rt></ruby>だけの<ruby>式<rt>しき</rt></ruby>。<ruby>多項式<rt>たこうしき</rt></ruby> = <ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>和<rt>わ</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>の<ruby>式<rt>しき</rt></ruby>。<ruby>多項式<rt>たこうしき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つひとつを「<ruby>項<rt>こう</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ぶ。',
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
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのとおり！<ruby>次<rt>つぎ</rt></ruby>に<strong>「<ruby>同類項<rt>どうるいこう</rt></ruby>」</strong>も<ruby>覚<rt>おぼ</rt></ruby>えよう。<ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>のことだよ。',
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
      type: 'summary-point',
      text: '<ruby>次数<rt>じすう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>。<ruby>係数<rt>けいすう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>にかかる<ruby>数<rt>かず</rt></ruby>。<ruby>同類項<rt>どうるいこう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>。',
    },
    {
      type: 'quiz',
      question: '<ruby>単項式<rt>たんこうしき</rt></ruby> $-2xy^2$ の<ruby>次数<rt>じすう</rt></ruby>は？',
      options: [
        { letter: 'A', text: '1', correct: false },
        { letter: 'B', text: '2', correct: false },
        { letter: 'C', text: '3', correct: true },
        { letter: 'D', text: '4', correct: false },
      ],
      explanation:
        '$x$ が 1<ruby>個<rt>こ</rt></ruby>、$y$ が 2<ruby>個<rt>こ</rt></ruby>で<ruby>合計<rt>ごうけい</rt></ruby> $1 + 2 = \\textcolor{#D97706}{3}$ だよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>単項式<rt>たんこうしき</rt></ruby> = かけ<ruby>算<rt>ざん</rt></ruby>だけの<ruby>式<rt>しき</rt></ruby>、<ruby>多項式<rt>たこうしき</rt></ruby> = <ruby>単項式<rt>たんこうしき</rt></ruby>の<ruby>和<rt>わ</rt></ruby>',
        '<ruby>次数<rt>じすう</rt></ruby> = かけ<ruby>合<rt>あ</rt></ruby>わされている<ruby>文字<rt>もじ</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>',
        '<ruby>係数<rt>けいすう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>にかかっている<ruby>数<rt>かず</rt></ruby>',
        '<ruby>同類項<rt>どうるいこう</rt></ruby> = <ruby>文字<rt>もじ</rt></ruby>の<ruby>部分<rt>ぶぶん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>項<rt>こう</rt></ruby>どうし',
      ],
    },
  ],
};

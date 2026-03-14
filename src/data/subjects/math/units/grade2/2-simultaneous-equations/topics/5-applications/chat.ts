import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const simulEqAppsChat: HistoryChat = {
  id: 'math-g2-simul-eq-apps',
  icon: '📋',
  title: '連立方程式の利用を学ぼう',
  subtitle: '〜中2数学〜 文章題を式に変える',
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
      text: '<ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って、<ruby>日常<rt>にちじょう</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみよう！<ruby>大事<rt>だいじ</rt></ruby>なのは<strong>「<ruby>何<rt>なに</rt></ruby>を x, y にするか」</strong>を<ruby>決<rt>き</rt></ruby>めること！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'こんな<ruby>問題<rt>もんだい</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えてみよう。「えんぴつ1<ruby>本<rt>ぽん</rt></ruby> 60<ruby>円<rt>えん</rt></ruby>、ノート1<ruby>冊<rt>さつ</rt></ruby> 120<ruby>円<rt>えん</rt></ruby>。<ruby>合<rt>あ</rt></ruby>わせて 8<ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>って<ruby>合計<rt>ごうけい</rt></ruby> 660<ruby>円<rt>えん</rt></ruby>でした。」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えんぴつを x<ruby>本<rt>ほん</rt></ruby>、ノートを y<ruby>冊<rt>さつ</rt></ruby>とすれば<ruby>式<rt>しき</rt></ruby>が<ruby>立<rt>た</rt></ruby>てられそう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>条件<rt>じょうけん</rt></ruby>を2つの<ruby>式<rt>しき</rt></ruby>にしよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 8 \\quad \\cdots \\textcircled{1} \\\\ 60x + 120y = 660 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>合計<rt>ごうけい</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>と<ruby>合計<rt>ごうけい</rt></ruby>の<ruby>金額<rt>きんがく</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '②を 60 で<ruby>割<rt>わ</rt></ruby>ると<ruby>簡単<rt>かんたん</rt></ruby>になるよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>と</rt></ruby>いていこう',
      steps: [
        {
          formula: "$\\textcircled{2} \\div 60 \\Rightarrow \\textcircled{2}'\\ x + 2y = 11$",
          animateInsert: true,
          annotation: '<ruby>式<rt>しき</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にする',
        },
        {
          formula:
            '$\\begin{array}{rrcl} & x + 2y &=& 11 \\\\ -) & x + y &=& 8 \\\\ \\hline & y &=& 3 \\end{array}$',
          animateInsert: true,
          annotation: '$\\textcircled{2}\\prime - \\textcircled{1}$',
        },
        {
          formula: '$x = 8 - 3 = 5$',
          isResult: true,
          annotation: 'y = 3 を①に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'えんぴつ 5<ruby>本<rt>ほん</rt></ruby>、ノート 3<ruby>冊<rt>さつ</rt></ruby>！<ruby>確<rt>たし</rt></ruby>かめると 60×5 + 120×3 = 300 + 360 = 660<ruby>円<rt>えん</rt></ruby>。<ruby>合<rt>あ</rt></ruby>ってる！',
    },
    {
      type: 'summary-point',
      text: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>のコツ：①<ruby>何<rt>なに</rt></ruby>を x, y にするか<ruby>決<rt>き</rt></ruby>める → ②<ruby>条件<rt>じょうけん</rt></ruby>を2つの<ruby>式<rt>しき</rt></ruby>にする → ③<ruby>解<rt>と</rt></ruby>いて<ruby>確認<rt>かくにん</rt></ruby>',
    },
    {
      type: 'date',
      text: '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>。「A<ruby>地点<rt>ちてん</rt></ruby>から B<ruby>地点<rt>ちてん</rt></ruby>まで<ruby>行<rt>い</rt></ruby>きは<ruby>時速<rt>じそく</rt></ruby> 4km、<ruby>帰<rt>かえ</rt></ruby>りは<ruby>時速<rt>じそく</rt></ruby> 6km で<ruby>歩<rt>ある</rt></ruby>いた。<ruby>往復<rt>おうふく</rt></ruby>で<ruby>合計<rt>ごうけい</rt></ruby> 5<ruby>時間<rt>じかん</rt></ruby>。<ruby>距離<rt>きょり</rt></ruby>は？」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>って<ruby>苦手<rt>にがて</rt></ruby>です…<ruby>何<rt>なに</rt></ruby>を x, y にすればいいんだろう？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>行<rt>い</rt></ruby>きの<ruby>時間<rt>じかん</rt></ruby>を x<ruby>時間<rt>じかん</rt></ruby>、<ruby>帰<rt>かえ</rt></ruby>りの<ruby>時間<rt>じかん</rt></ruby>を y<ruby>時間<rt>じかん</rt></ruby>とするよ。「<ruby>距離<rt>きょり</rt></ruby> = <ruby>速<rt>はや</rt></ruby>さ × <ruby>時間<rt>じかん</rt></ruby>」を<ruby>使<rt>つか</rt></ruby>おう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 5 \\quad \\cdots \\textcircled{1} \\\\ 4x = 6y \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>合計時間<rt>ごうけいじかん</rt></ruby>が5<ruby>時間<rt>じかん</rt></ruby>、<ruby>行<rt>い</rt></ruby>きの<ruby>距離<rt>きょり</rt></ruby> = <ruby>帰<rt>かえ</rt></ruby>りの<ruby>距離<rt>きょり</rt></ruby>',
        },
        {
          formula: '$\\textcircled{2} \\Rightarrow 2x = 3y \\Rightarrow x = \\frac{3y}{2}$',
          animateInsert: true,
          annotation: '②を<ruby>整理<rt>せいり</rt></ruby>',
        },
        {
          formula: '$\\frac{3y}{2} + y = 5 \\Rightarrow \\frac{5y}{2} = 5 \\Rightarrow y = 2$',
          animateInsert: true,
          annotation: '①に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$x = 3,\\ y = 2 \\Rightarrow$ <ruby>距離<rt>きょり</rt></ruby> $= 4 \\times 3 = 12$km',
          isResult: true,
          annotation: '<ruby>確認<rt>かくにん</rt></ruby>: 6 × 2 = 12km ✓',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>行<rt>い</rt></ruby>きと<ruby>帰<rt>かえ</rt></ruby>りの<ruby>距離<rt>きょり</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じっていう<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>: <strong><ruby>距離<rt>きょり</rt></ruby> = <ruby>速<rt>はや</rt></ruby>さ × <ruby>時間<rt>じかん</rt></ruby></strong> で<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てよう。<ruby>行<rt>い</rt></ruby>き<ruby>帰<rt>かえ</rt></ruby>りは<ruby>距離<rt>きょり</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ！',
    },
    {
      type: 'quiz',
      question: 'ケーキ1<ruby>個<rt>こ</rt></ruby> 300<ruby>円<rt>えん</rt></ruby>、プリン1<ruby>個<rt>こ</rt></ruby> 200<ruby>円<rt>えん</rt></ruby>。<ruby>合<rt>あ</rt></ruby>わせて 6<ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>って 1400<ruby>円<rt>えん</rt></ruby>。ケーキは<ruby>何個<rt>なんこ</rt></ruby>？',
      options: [
        { letter: 'A', text: '1<ruby>個<rt>こ</rt></ruby>', correct: false },
        { letter: 'B', text: '2<ruby>個<rt>こ</rt></ruby>', correct: true },
        { letter: 'C', text: '3<ruby>個<rt>こ</rt></ruby>', correct: false },
        { letter: 'D', text: '4<ruby>個<rt>こ</rt></ruby>', correct: false },
      ],
      explanation:
        'ケーキ x<ruby>個<rt>こ</rt></ruby>、プリン y<ruby>個<rt>こ</rt></ruby>。x + y = 6、300x + 200y = 1400。②÷100: 3x + 2y = 14。①×2: 2x + 2y = 12。<ruby>引<rt>ひ</rt></ruby>くと x = <strong>2</strong>。',
    },
    {
      type: 'end',
      points: [
        '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>はまず「<ruby>何<rt>なに</rt></ruby>を x, y にするか」を<ruby>決<rt>き</rt></ruby>める',
        '<ruby>条件<rt>じょうけん</rt></ruby>を2つ<ruby>見<rt>み</rt></ruby>つけて2つの<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる',
        '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>は「<ruby>距離<rt>きょり</rt></ruby> = <ruby>速<rt>はや</rt></ruby>さ × <ruby>時間<rt>じかん</rt></ruby>」を<ruby>使<rt>つか</rt></ruby>う',
        '<ruby>解<rt>と</rt></ruby>いた<ruby>後<rt>あと</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず<ruby>元<rt>もと</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>に<ruby>当<rt>あ</rt></ruby>てはめて<ruby>確認<rt>かくにん</rt></ruby>！',
      ],
    },
  ],
};

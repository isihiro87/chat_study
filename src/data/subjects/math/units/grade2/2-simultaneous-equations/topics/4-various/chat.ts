import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const variousSimulEqChat: HistoryChat = {
  id: 'math-g2-various-simul-eq',
  icon: '🧩',
  title: 'いろいろな連立方程式を解こう',
  subtitle: '〜中2数学〜 分数・小数・かっこ付き',
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
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>のある<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>や<ruby>小数<rt>しょうすう</rt></ruby>がある<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>も、ちょっとした<ruby>工夫<rt>くふう</rt></ruby>で<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>解<rt>と</rt></ruby>けるようになるよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>がある<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>見<rt>み</rt></ruby>てみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 2 \\quad \\cdots \\textcircled{1} \\\\ x + y = 5 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>分数<rt>ぶんすう</rt></ruby>がある！ ②は<ruby>整数<rt>せいすう</rt></ruby>だけだからそのまま<ruby>使<rt>つか</rt></ruby>えるね',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>のまま<ruby>計算<rt>けいさん</rt></ruby>するのは<ruby>大変<rt>たいへん</rt></ruby>そう…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'コツは<strong><ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>両辺<rt>りょうへん</rt></ruby>にかける</strong>こと！<ruby>分母<rt>ぶんぼ</rt></ruby>が 2 と 3 だから、6 をかけよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分数<rt>ぶんすう</rt></ruby>をはらう',
      steps: [
        {
          formula: "$\\textcircled{1} \\times 6 \\Rightarrow \\textcircled{1}'\\ 3x + 2y = 12$",
          animateInsert: true,
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby> 6 をかける',
        },
        {
          formula: "$\\textcircled{2} \\times 2 \\Rightarrow \\textcircled{2}'\\ 2x + 2y = 10$",
          annotation: '②を2<ruby>倍<rt>ばい</rt></ruby>して y の<ruby>係数<rt>けいすう</rt></ruby>をそろえる',
        },
        {
          formula:
            '$\\begin{array}{rrcl} & 3x + 2y &=& 12 \\\\ -) & 2x + 2y &=& 10 \\\\ \\hline & x &=& 2 \\end{array}$',
          animateInsert: true,
          annotation: '$\\textcircled{1}\\prime - \\textcircled{2}\\prime$',
        },
        {
          formula: '$x = 2,\\ y = 3$',
          isResult: true,
          annotation: 'x = 2 を②に<ruby>代入<rt>だいにゅう</rt></ruby>: y = 5 − 2 = 3',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>をなくせば<ruby>普通<rt>ふつう</rt></ruby>の<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>けるんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>がある → <strong><ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>をかけて<ruby>整数<rt>せいすう</rt></ruby>に</strong>してから<ruby>解<rt>と</rt></ruby>く！',
    },
    {
      type: 'date',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>のある<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>小数<rt>しょうすう</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} 0.2x + 0.5y = 1.9 \\quad \\cdots \\textcircled{1} \\\\ x + y = 5 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>小数<rt>しょうすう</rt></ruby>がある！ ②は<ruby>整数<rt>せいすう</rt></ruby>だけなので<ruby>安心<rt>あんしん</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1のときみたいに10<ruby>倍<rt>ばい</rt></ruby>すればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！<ruby>両辺<rt>りょうへん</rt></ruby>を <strong>10<ruby>倍<rt>ばい</rt></ruby></strong>して<ruby>整数<rt>せいすう</rt></ruby>にしよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>小数<rt>しょうすう</rt></ruby>をなくす',
      steps: [
        {
          formula: "$\\textcircled{1} \\times 10 \\Rightarrow \\textcircled{1}'\\ 2x + 5y = 19$",
          animateInsert: true,
          annotation: '10<ruby>倍<rt>ばい</rt></ruby>で<ruby>小数<rt>しょうすう</rt></ruby>が<ruby>消<rt>き</rt></ruby>えた！',
        },
        {
          formula: "$\\textcircled{2} \\times 2 \\Rightarrow \\textcircled{2}'\\ 2x + 2y = 10$",
          annotation: 'x の<ruby>係数<rt>けいすう</rt></ruby>をそろえる',
        },
        {
          formula:
            '$\\begin{array}{rrcl} & 2x + 5y &=& 19 \\\\ -) & 2x + 2y &=& 10 \\\\ \\hline & 3y &=& 9 \\end{array}$',
          animateInsert: true,
          annotation: '$\\textcircled{1}\\prime - \\textcircled{2}\\prime$',
        },
        {
          formula: '$x = 2,\\ y = 3$',
          isResult: true,
          annotation: 'y = 3 を②に<ruby>代入<rt>だいにゅう</rt></ruby>: x = 5 − 3 = 2',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>がある → <strong>10<ruby>倍<rt>ばい</rt></ruby>・100<ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>に</strong>してから<ruby>解<rt>と</rt></ruby>く！',
    },
    {
      type: 'date',
      text: 'かっこ<ruby>付<rt>つ</rt></ruby>きの<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>は、かっこがある<ruby>場合<rt>ばあい</rt></ruby>。まず<ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>しよう！',
    },
    {
      type: 'whiteboard',
      title: 'かっこを<ruby>展開<rt>てんかい</rt></ruby>',
      steps: [
        {
          formula: '$3(x - 1) + y = 8$',
          annotation: 'かっこを<ruby>展開<rt>てんかい</rt></ruby>！',
        },
        {
          formula: '$3x - 3 + y = 8$',
          animateInsert: true,
          annotation: '3 × x = 3x、3 × (−1) = −3',
        },
        {
          formula: '$3x + y = 11$',
          isResult: true,
          annotation: '−3 を<ruby>移項<rt>いこう</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>。これでいつもの<ruby>形<rt>かたち</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'どんな<ruby>形<rt>かたち</rt></ruby>でも、まず <strong>ax + by = c</strong> の<ruby>形<rt>かたち</rt></ruby>に<ruby>整理<rt>せいり</rt></ruby>すればいいんですね！',
    },
    {
      type: 'summary-point',
      text: 'かっこ → <ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>。どんな<ruby>形<rt>かたち</rt></ruby>でも<strong>まず ax + by = c に<ruby>直<rt>なお</rt></ruby>す</strong>のが<ruby>鉄則<rt>てっそく</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: 'x/3 + y/2 = 4 の<ruby>分数<rt>ぶんすう</rt></ruby>をはらうには<ruby>両辺<rt>りょうへん</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をかける？',
      options: [
        { letter: 'A', text: '2', correct: false },
        { letter: 'B', text: '3', correct: false },
        { letter: 'C', text: '6', correct: true },
        { letter: 'D', text: '12', correct: false },
      ],
      explanation:
        '<ruby>分母<rt>ぶんぼ</rt></ruby>が 3 と 2。<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>は <strong>6</strong>。<ruby>両辺<rt>りょうへん</rt></ruby>に6をかけると 2x + 3y = 24 になるよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>分数<rt>ぶんすう</rt></ruby> → <ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>をかけて<ruby>整数<rt>せいすう</rt></ruby>にする',
        '<ruby>小数<rt>しょうすう</rt></ruby> → 10<ruby>倍<rt>ばい</rt></ruby>・100<ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>にする',
        'かっこ → <ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>する',
        'まず <strong>ax + by = c</strong> の<ruby>形<rt>かたち</rt></ruby>に<ruby>直<rt>なお</rt></ruby>してから<ruby>解<rt>と</rt></ruby>こう',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const eliminationChat: HistoryChat = {
  id: 'math-g2-elimination',
  icon: '⚖️',
  title: '加減法をマスターしよう',
  subtitle: '〜中2数学〜 式を足したり引いたり',
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
      text: '<ruby>加減法<rt>かげんほう</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>く<ruby>方法<rt>ほうほう</rt></ruby>の1つ、<strong>「<ruby>加減法<rt>かげんほう</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう！<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>したり<ruby>引<rt>ひ</rt></ruby>いたりするよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'この<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>見<rt>み</rt></ruby>てごらん。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 7 \\quad \\cdots \\textcircled{1} \\\\ x - y = 3 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            'y の<ruby>係数<rt>けいすう</rt></ruby>に<ruby>注目<rt>ちゅうもく</rt></ruby>！ +y と −y だね',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '+y と −y…<ruby>足<rt>た</rt></ruby>したら<ruby>消<rt>き</rt></ruby>えそうですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！①と②を<ruby>足<rt>た</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula:
            '$\\begin{array}{rrcl} & x + y &=& 7 \\\\ +) & x - y &=& 3 \\\\ \\hline & 2x &=& 10 \\end{array}$',
          animateInsert: true,
          annotation:
            '+y と −y が<ruby>打<rt>う</rt></ruby>ち<ruby>消<rt>け</rt></ruby>し<ruby>合<rt>あ</rt></ruby>った！',
        },
        {
          formula: '$x = 5$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を2で<ruby>割<rt>わ</rt></ruby>る',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'x = 5！①に<ruby>入<rt>い</rt></ruby>れると 5 + y = 7 だから y = 2 ですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>符号<rt>ふごう</rt></ruby>が<ruby>逆<rt>ぎゃく</rt></ruby>（+y と −y）のときは、<strong>2つの<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>す</strong>と<ruby>消<rt>き</rt></ruby>える！',
    },
    {
      type: 'date',
      text: '<ruby>係数<rt>けいすう</rt></ruby>をそろえる<ruby>加減法<rt>かげんほう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>係数<rt>けいすう</rt></ruby>がそろっていない<ruby>場合<rt>ばあい</rt></ruby>。こんな<ruby>問題<rt>もんだい</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} 2x + 3y = 16 \\quad \\cdots \\textcircled{1} \\\\ x + y = 6 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>係数<rt>けいすう</rt></ruby>がそろっていない…どうする？',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'そのまま<ruby>足<rt>た</rt></ruby>しても<ruby>引<rt>ひ</rt></ruby>いても、<ruby>文字<rt>もじ</rt></ruby>が<ruby>消<rt>き</rt></ruby>えませんよね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'いい<ruby>気<rt>き</rt></ruby>づき！そんなときは、<strong><ruby>式<rt>しき</rt></ruby>を<ruby>何倍<rt>なんばい</rt></ruby>かして<ruby>係数<rt>けいすう</rt></ruby>をそろえる</strong>んだ。②を2<ruby>倍<rt>ばい</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>係数<rt>けいすう</rt></ruby>をそろえて<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: "$\\textcircled{2} \\times 2 \\Rightarrow \\textcircled{2}'\\ 2x + 2y = 12$",
          annotation:
            '② × 2 → x の<ruby>係数<rt>けいすう</rt></ruby>が<ruby>両方<rt>りょうほう</rt></ruby> 2 になった！',
        },
        {
          formula:
            '$\\begin{array}{rrcl} & 2x + 3y &=& 16 \\\\ -) & 2x + 2y &=& 12 \\\\ \\hline & y &=& 4 \\end{array}$',
          animateInsert: true,
          annotation: '$\\textcircled{1} - \\textcircled{2}\\prime$',
        },
        {
          formula: '$x = 2,\\ y = 4$',
          isResult: true,
          annotation: 'y = 4 を②に<ruby>代入<rt>だいにゅう</rt></ruby>: x + 4 = 6 → x = 2',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！<ruby>倍<rt>ばい</rt></ruby>にして<ruby>係数<rt>けいすう</rt></ruby>をそろえればいいんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>係数<rt>けいすう</rt></ruby>がそろっていない → <strong><ruby>式<rt>しき</rt></ruby>を<ruby>何倍<rt>なんばい</rt></ruby>かして<ruby>係数<rt>けいすう</rt></ruby>をそろえて</strong>から<ruby>引<rt>ひ</rt></ruby>く！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '①−②のとき、<ruby>左辺<rt>さへん</rt></ruby>だけ<ruby>引<rt>ひ</rt></ruby>けばいいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'よくある<ruby>間違<rt>まちが</rt></ruby>い！<ruby>式<rt>しき</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くときは<strong><ruby>左辺<rt>さへん</rt></ruby>も<ruby>右辺<rt>うへん</rt></ruby>も<ruby>全部<rt>ぜんぶ</rt></ruby></strong><ruby>引<rt>ひ</rt></ruby>くよ。そして<ruby>引<rt>ひ</rt></ruby>かれる<ruby>式<rt>しき</rt></ruby>の<ruby>全<rt>すべ</rt></ruby>ての<ruby>項<rt>こう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わることを<ruby>忘<rt>わす</rt></ruby>れないで！',
    },
    {
      type: 'quiz',
      question: '3x + y = 10、x + y = 4 を<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>くと x は？',
      options: [
        { letter: 'A', text: 'x = 2', correct: false },
        { letter: 'B', text: 'x = 3', correct: true },
        { letter: 'C', text: 'x = 4', correct: false },
        { letter: 'D', text: 'x = 6', correct: false },
      ],
      explanation:
        'y の<ruby>係数<rt>けいすう</rt></ruby>が<ruby>両方<rt>りょうほう</rt></ruby> +1。①−②で 2x = 6 → x = <strong>3</strong>。y = 4 − 3 = 1 だよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>加減法<rt>かげんほう</rt></ruby>：<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>すか<ruby>引<rt>ひ</rt></ruby>くかして1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>す<ruby>方法<rt>ほうほう</rt></ruby>',
        '<ruby>符号<rt>ふごう</rt></ruby>が<ruby>逆<rt>ぎゃく</rt></ruby>なら<ruby>足<rt>た</rt></ruby>す、<ruby>同<rt>おな</rt></ruby>じなら<ruby>引<rt>ひ</rt></ruby>く',
        '<ruby>係数<rt>けいすう</rt></ruby>がそろっていなければ、<ruby>式<rt>しき</rt></ruby>を<ruby>何倍<rt>なんばい</rt></ruby>かしてそろえる',
        '<ruby>消<rt>き</rt></ruby>えた<ruby>文字<rt>もじ</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めたら、もとの<ruby>式<rt>しき</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>してもう1つを<ruby>求<rt>もと</rt></ruby>める',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const variousSimulEqChat: HistoryChat = {
  id: 'math-g2-various-simul-eq',
  icon: '🧩',
  title: 'いろいろな連立方程式を解こう',
  subtitle: '〜中2数学〜 かっこ・分数・小数・A=B=C・解と文字の値',
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
    // ===== セクション1: かっこがある連立方程式 =====
    {
      type: 'date',
      text: 'かっこがある<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>には、かっこや<ruby>分数<rt>ぶんすう</rt></ruby>・<ruby>小数<rt>しょうすう</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ったものもあるよ。まずは<span class="keyword">かっこの<ruby>処理<rt>しょり</rt></ruby></span>から<ruby>始<rt>はじ</rt></ruby>めよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'かっこがある<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>見<rt>み</rt></ruby>てみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} 2(x + 3) + y = 11 \\quad \\cdots \\textcircled{1} \\\\ x - y = 1 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '①にかっこがある！まず<ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>しよう',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'かっこがあると<ruby>難<rt>むずか</rt></ruby>しそう…。どうすればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>！<span class="keyword"><ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby></span>でかっこを<ruby>外<rt>はず</rt></ruby>して、<strong>$ax + by = c$</strong> の<ruby>形<rt>かたち</rt></ruby>に<ruby>整理<rt>せいり</rt></ruby>するだけだよ！',
    },
    {
      type: 'whiteboard',
      title: 'かっこを<ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>',
      steps: [
        {
          formula: '$2(x + 3) + y = 11$',
          annotation: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>で<ruby>展開<rt>てんかい</rt></ruby>！',
        },
        {
          formula: '$2x + 6 + y = 11$',
          animateInsert: true,
          annotation: '$2 \\times x = 2x$、$2 \\times 3 = 6$',
        },
        {
          formula: "$\\textcircled{1}'\\ 2x + y = 5$",
          isResult: true,
          annotation: '$6$ を<ruby>右辺<rt>うへん</rt></ruby>に<ruby>移項<rt>いこう</rt></ruby>: $11 - 6 = 5$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'かっこを<ruby>外<rt>はず</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>するだけで、いつもの<ruby>形<rt>かたち</rt></ruby>になりますね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula:
            '$\\begin{array}{rrcl} & 2x + y &=& 5 \\\\ +) & x - y &=& 1 \\\\ \\hline & 3x &=& 6 \\end{array}$',
          animateInsert: true,
          annotation: "$\\textcircled{1}' + \\textcircled{2}$ で $y$ が<ruby>消<rt>き</rt></ruby>える！",
        },
        {
          formula: '$x = 2,\\ y = 1$',
          isResult: true,
          annotation: '$x = 2$ を②に<ruby>代入<rt>だいにゅう</rt></ruby>: $2 - y = 1$ → $y = 1$',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>両辺<rt>りょうへん</rt></ruby>にかっこがある<ruby>場合<rt>ばあい</rt></ruby>も<ruby>同<rt>おな</rt></ruby>じだよ。<ruby>例<rt>たと</rt></ruby>えば…',
    },
    {
      type: 'whiteboard',
      title: '<ruby>両辺<rt>りょうへん</rt></ruby>にかっこがあるパターン',
      steps: [
        {
          formula: '$5(x - 1) = 3(y + 1)$',
          annotation: '<ruby>両方<rt>りょうほう</rt></ruby><ruby>展開<rt>てんかい</rt></ruby>！',
        },
        {
          formula: '$5x - 5 = 3y + 3$',
          animateInsert: true,
          annotation: '<ruby>左辺<rt>さへん</rt></ruby>も<ruby>右辺<rt>うへん</rt></ruby>もかっこを<ruby>外<rt>はず</rt></ruby>す',
        },
        {
          formula: '$5x - 3y = 8$',
          isResult: true,
          annotation: '$3y$ を<ruby>左辺<rt>さへん</rt></ruby>に、$-5$ を<ruby>右辺<rt>うへん</rt></ruby>に<ruby>移項<rt>いこう</rt></ruby>',
        },
      ],
    },
    {
      type: 'summary-point',
      text: 'かっこがある → <strong><ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>で<ruby>展開<rt>てんかい</rt></ruby></strong>して $ax + by = c$ に<ruby>整理<rt>せいり</rt></ruby>してから<ruby>解<rt>と</rt></ruby>く！',
    },
    {
      type: 'quiz',
      question: '$3(x - 2) + y = 7$ を<ruby>整理<rt>せいり</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$3x + y = 13$', correct: true },
        { letter: 'B', text: '$3x + y = 7$', correct: false },
        { letter: 'C', text: '$3x + y = 1$', correct: false },
        { letter: 'D', text: '$3x - y = 13$', correct: false },
      ],
      explanation:
        '$3x - 6 + y = 7 \\rightarrow \\textcolor{#D97706}{3x + y = 13}$。\n$-6$ を<ruby>右辺<rt>うへん</rt></ruby>に<ruby>移項<rt>いこう</rt></ruby>して $7 + 6 = 13$！',
    },

    // ===== セクション2: 分数を含む連立方程式 =====
    {
      type: 'date',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>係数<rt>けいすう</rt></ruby>に<ruby>分数<rt>ぶんすう</rt></ruby>がある<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 2 \\quad \\cdots \\textcircled{1} \\\\ x + y = 5 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '①に<ruby>分数<rt>ぶんすう</rt></ruby>がある！',
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
      text: 'コツは<span class="keyword"><ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>（LCM）</span>を<ruby>両辺<rt>りょうへん</rt></ruby>にかけること！<ruby>分母<rt>ぶんぼ</rt></ruby>が $2$ と $3$ だから、$6$ をかけよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分数<rt>ぶんすう</rt></ruby>をはらう',
      steps: [
        {
          formula: "$\\textcircled{1} \\times 6 \\Rightarrow \\textcircled{1}'\\ 3x + 2y = 12$",
          animateInsert: true,
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby> $6$ をかける',
        },
        {
          formula: "$\\textcircled{2} \\times 2 \\Rightarrow \\textcircled{2}'\\ 2x + 2y = 10$",
          annotation: '$y$ の<ruby>係数<rt>けいすう</rt></ruby>をそろえる',
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
          annotation: '$x = 2$ を②に<ruby>代入<rt>だいにゅう</rt></ruby>: $y = 5 - 2 = 3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>分子<rt>ぶんし</rt></ruby>にかっこがある<ruby>場合<rt>ばあい</rt></ruby>もあるよ。<ruby>例<rt>たと</rt></ruby>えば…',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分子<rt>ぶんし</rt></ruby>にかっこがあるパターン',
      steps: [
        {
          formula: '$\\frac{x - 1}{3} + \\frac{y}{2} = 2$',
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby> $3$ と $2$ のLCM $= 6$',
        },
        {
          formula: '$2(x - 1) + 3y = 12$',
          animateInsert: true,
          annotation: '$6$ をかけた<ruby>後<rt>あと</rt></ruby>、かっこを<ruby>展開<rt>てんかい</rt></ruby>！',
        },
        {
          formula: '$2x - 2 + 3y = 12$',
          animateInsert: true,
          annotation: '<ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>',
        },
        {
          formula: '$2x + 3y = 14$',
          isResult: true,
          annotation: '<ruby>分数<rt>ぶんすう</rt></ruby>をはらう + <ruby>展開<rt>てんかい</rt></ruby>のダブル<ruby>技<rt>わざ</rt></ruby>！',
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
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>がある → <strong><ruby>分母<rt>ぶんぼ</rt></ruby>のLCMをかけて<ruby>整数<rt>せいすう</rt></ruby>に</strong>してから<ruby>解<rt>と</rt></ruby>く！',
    },
    {
      type: 'quiz',
      question: '$\\frac{x}{4} + \\frac{y}{6} = 2$ の<ruby>分数<rt>ぶんすう</rt></ruby>をはらうには<ruby>何<rt>なに</rt></ruby>をかける？',
      options: [
        { letter: 'A', text: '$12$', correct: true },
        { letter: 'B', text: '$6$', correct: false },
        { letter: 'C', text: '$4$', correct: false },
        { letter: 'D', text: '$24$', correct: false },
      ],
      explanation:
        '<ruby>分母<rt>ぶんぼ</rt></ruby> $4$ と $6$ の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>は $\\textcolor{#D97706}{12}$。\n$12$ をかけると $3x + 2y = 24$。',
    },

    // ===== セクション3: 小数を含む連立方程式 =====
    {
      type: 'date',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>',
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
            '$\\begin{cases} 0.3x + 0.4y = 1.7 \\quad \\cdots \\textcircled{1} \\\\ x - y = 1 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '①に<ruby>小数<rt>しょうすう</rt></ruby>がある！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1のときみたいに $10$ <ruby>倍<rt>ばい</rt></ruby>すればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！<ruby>小数第<rt>しょうすうだい</rt></ruby>1<ruby>位<rt>い</rt></ruby>までなら<strong>$10$ <ruby>倍<rt>ばい</rt></ruby></strong>、<ruby>小数第<rt>しょうすうだい</rt></ruby>2<ruby>位<rt>い</rt></ruby>までなら<strong>$100$ <ruby>倍<rt>ばい</rt></ruby></strong>だよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>小数<rt>しょうすう</rt></ruby>をなくす',
      steps: [
        {
          formula: "$\\textcircled{1} \\times 10 \\Rightarrow \\textcircled{1}'\\ 3x + 4y = 17$",
          animateInsert: true,
          annotation: '$10$ <ruby>倍<rt>ばい</rt></ruby>で<ruby>小数<rt>しょうすう</rt></ruby>が<ruby>消<rt>き</rt></ruby>えた！',
        },
        {
          formula: '$\\textcircled{2}$ より $x = y + 1$',
          annotation: '②を $x$ について<ruby>解<rt>と</rt></ruby>く（<ruby>代入法<rt>だいにゅうほう</rt></ruby>）',
        },
        {
          formula: '$3(y + 1) + 4y = 17$',
          animateInsert: true,
          annotation: "$\\textcircled{1}'$ に<ruby>代入<rt>だいにゅう</rt></ruby>",
        },
        {
          formula: '$7y = 14 \\Rightarrow y = 2$',
          animateInsert: true,
          annotation: '$3y + 3 + 4y = 17$ → $7y = 14$',
        },
        {
          formula: '$x = 3,\\ y = 2$',
          isResult: true,
          annotation: '$y = 2$ を②に<ruby>代入<rt>だいにゅう</rt></ruby>: $x = 2 + 1 = 3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>小数第<rt>しょうすうだい</rt></ruby>2<ruby>位<rt>い</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>は $100$ <ruby>倍<rt>ばい</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '$100$ <ruby>倍<rt>ばい</rt></ruby>のパターン',
      steps: [
        {
          formula: '$0.02x + 0.05y = 0.16$',
          annotation: '<ruby>小数第<rt>しょうすうだい</rt></ruby>2<ruby>位<rt>い</rt></ruby>まである',
        },
        {
          formula: '$2x + 5y = 16$',
          isResult: true,
          annotation: '$100$ <ruby>倍<rt>ばい</rt></ruby>で<ruby>整数<rt>せいすう</rt></ruby>に！',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>がある → <strong>$10$ <ruby>倍<rt>ばい</rt></ruby>・$100$ <ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>に</strong>してから<ruby>解<rt>と</rt></ruby>く！',
    },
    {
      type: 'quiz',
      question: '$0.5x + 0.2y = 2.6$ を<ruby>整数<rt>せいすう</rt></ruby>にすると？',
      options: [
        { letter: 'A', text: '$50x + 20y = 260$', correct: false },
        { letter: 'B', text: '$5x + 2y = 2.6$', correct: false },
        { letter: 'C', text: '$x + 2y = 26$', correct: false },
        { letter: 'D', text: '$5x + 2y = 26$', correct: true },
      ],
      explanation:
        '<ruby>小数第<rt>しょうすうだい</rt></ruby>1<ruby>位<rt>い</rt></ruby>まであるので $10$ <ruby>倍<rt>ばい</rt></ruby>。\n$\\textcolor{#D97706}{5x + 2y = 26}$',
    },

    // ===== セクション4: A = B = C の形 =====
    {
      type: 'date',
      text: '$A = B = C$ の<ruby>形<rt>かたち</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>変<rt>か</rt></ruby>わった<ruby>形<rt>かたち</rt></ruby>。<span class="keyword">$A = B = C$</span> の<ruby>形<rt>かたち</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>だよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$x - y = 3x - 5y = 2$',
          annotation: '3つの<ruby>式<rt>しき</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しい！どう<ruby>解<rt>と</rt></ruby>く？',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>式<rt>しき</rt></ruby>が3つ<ruby>並<rt>なら</rt></ruby>んでいる…？どういう<ruby>意味<rt>いみ</rt></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '$A = B = C$ は「$A$ と $B$ と $C$ がすべて<ruby>等<rt>ひと</rt></ruby>しい」という<ruby>意味<rt>いみ</rt></ruby>。つまり<strong>2つの<ruby>式<rt>しき</rt></ruby>に<ruby>分<rt>わ</rt></ruby>ける</strong>んだ！',
    },
    {
      type: 'whiteboard',
      title: '2つの<ruby>式<rt>しき</rt></ruby>に<ruby>分<rt>わ</rt></ruby>ける',
      steps: [
        {
          formula: '$x - y = 3x - 5y = 2$',
          annotation: '$A = B$ と $A = C$ に<ruby>分<rt>わ</rt></ruby>ける',
        },
        {
          formula:
            '$\\begin{cases} x - y = 2 \\quad \\cdots \\textcircled{1} \\\\ 3x - 5y = 2 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          animateInsert: true,
          annotation: 'いつもの<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>になった！',
        },
      ],
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>と</rt></ruby>いてみよう',
      steps: [
        {
          formula: '$\\textcircled{1}$ より $x = y + 2$',
          annotation: '①を $x$ について<ruby>解<rt>と</rt></ruby>く',
        },
        {
          formula: '$3(y + 2) - 5y = 2$',
          animateInsert: true,
          annotation: '②に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$3y + 6 - 5y = 2 \\Rightarrow -2y = -4 \\Rightarrow y = 2$',
          animateInsert: true,
          annotation: '<ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>',
        },
        {
          formula: '$x = 4,\\ y = 2$',
          isResult: true,
          annotation: '$y = 2$ を①に<ruby>代入<rt>だいにゅう</rt></ruby>: $x = 2 + 2 = 4$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$A = B$ と $B = C$ で<ruby>分<rt>わ</rt></ruby>けてもいいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'どの2つの<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせで<ruby>分<rt>わ</rt></ruby>けても<ruby>答<rt>こた</rt></ruby>えは<ruby>同<rt>おな</rt></ruby>じだよ！<ruby>計算<rt>けいさん</rt></ruby>しやすい<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせを<ruby>選<rt>えら</rt></ruby>ぼう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>右辺<rt>うへん</rt></ruby>が<ruby>定数<rt>ていすう</rt></ruby>のときは、もっと<ruby>簡単<rt>かんたん</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>右辺<rt>うへん</rt></ruby>が<ruby>定数<rt>ていすう</rt></ruby>のパターン',
      steps: [
        {
          formula: '$2x + 1 = 3y - 2 = 7$',
          annotation: 'それぞれ $= 7$ として<ruby>独立<rt>どくりつ</rt></ruby>に<ruby>解<rt>と</rt></ruby>ける！',
        },
        {
          formula: '$2x + 1 = 7 \\Rightarrow x = 3$',
          animateInsert: true,
          annotation: '$x$ だけの<ruby>式<rt>しき</rt></ruby>',
        },
        {
          formula: '$3y - 2 = 7 \\Rightarrow y = 3$',
          animateInsert: true,
          annotation: '$y$ だけの<ruby>式<rt>しき</rt></ruby>',
        },
        {
          formula: '$x = 3,\\ y = 3$',
          isResult: true,
          annotation: 'それぞれ<ruby>独立<rt>どくりつ</rt></ruby>に<ruby>解<rt>と</rt></ruby>けた！',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '$A = B = C$ → <strong>2つの<ruby>式<rt>しき</rt></ruby>に<ruby>分<rt>わ</rt></ruby>けて<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>にする</strong>。<ruby>計算<rt>けいさん</rt></ruby>しやすい<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせを<ruby>選<rt>えら</rt></ruby>ぼう！',
    },
    {
      type: 'quiz',
      question: '$3x + 1 = 2y - 3 = 10$ のとき、$x$ の<ruby>値<rt>あたい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 3$', correct: true },
        { letter: 'B', text: '$x = 4$', correct: false },
        { letter: 'C', text: '$x = 2$', correct: false },
        { letter: 'D', text: '$x = 5$', correct: false },
      ],
      explanation:
        '$3x + 1 = 10$ より $3x = 9 \\rightarrow x = \\textcolor{#D97706}{3}$。\n<ruby>右辺<rt>うへん</rt></ruby>が<ruby>定数<rt>ていすう</rt></ruby>なので<ruby>独立<rt>どくりつ</rt></ruby>に<ruby>解<rt>と</rt></ruby>ける！',
    },

    // ===== セクション5: 解と文字の値 =====
    {
      type: 'date',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>は<ruby>逆<rt>ぎゃく</rt></ruby>パターン！<ruby>解<rt>かい</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かっていて、<span class="keyword"><ruby>係数<rt>けいすう</rt></ruby>の<ruby>文字<rt>もじ</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める</span><ruby>問題<rt>もんだい</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} ax + 2y = 7 \\quad \\cdots \\textcircled{1} \\\\ 3x + by = 8 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation: '$a, b$ が<ruby>未知<rt>みち</rt></ruby>。<ruby>解<rt>かい</rt></ruby>は $x = 1, y = 2$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$a$ と $b$ を<ruby>求<rt>もと</rt></ruby>めるんですか？<ruby>普通<rt>ふつう</rt></ruby>と<ruby>逆<rt>ぎゃく</rt></ruby>ですね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>解<rt>かい</rt></ruby>の $x = 1, y = 2$ を<ruby>代入<rt>だいにゅう</rt></ruby>すれば、$a, b$ だけの<ruby>式<rt>しき</rt></ruby>になるよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>解<rt>かい</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>して<ruby>求<rt>もと</rt></ruby>める',
      steps: [
        {
          formula: '$\\textcircled{1}$: $a \\cdot 1 + 2 \\cdot 2 = 7$',
          annotation: '$x = 1, y = 2$ を①に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$a + 4 = 7 \\Rightarrow a = 3$',
          animateInsert: true,
          annotation: '$a$ が<ruby>求<rt>もと</rt></ruby>まった！',
        },
        {
          formula: '$\\textcircled{2}$: $3 \\cdot 1 + b \\cdot 2 = 8$',
          annotation: '$x = 1, y = 2$ を②に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$3 + 2b = 8 \\Rightarrow b = \\frac{5}{2}$',
          animateInsert: true,
          annotation: '$b$ が<ruby>求<rt>もと</rt></ruby>まった！',
        },
        {
          formula: '$a = 3,\\ b = \\frac{5}{2}$',
          isResult: true,
          annotation: '<ruby>検算<rt>けんざん</rt></ruby>: ① $3 + 4 = 7$ ✓、② $3 + 5 = 8$ ✓',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>代入<rt>だいにゅう</rt></ruby>するだけで<ruby>求<rt>もと</rt></ruby>められるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$a, b$ が<ruby>両方<rt>りょうほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>に<ruby>混<rt>ま</rt></ruby>ざっている<ruby>場合<rt>ばあい</rt></ruby>は、$a, b$ についての<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>になるよ！',
    },
    {
      type: 'whiteboard',
      title: '$a, b$ が<ruby>混<rt>ま</rt></ruby>ざっているパターン',
      steps: [
        {
          formula:
            '$\\begin{cases} ax + by = 5 \\\\ bx + ay = 7 \\end{cases}$ の<ruby>解<rt>かい</rt></ruby>が $x = 3, y = 1$',
          annotation: '$a, b$ が<ruby>両方<rt>りょうほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っている！',
        },
        {
          formula:
            '$\\begin{cases} 3a + b = 5 \\quad \\cdots \\textcircled{1} \\\\ 3b + a = 7 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          animateInsert: true,
          annotation: '<ruby>代入<rt>だいにゅう</rt></ruby>すると $a, b$ の<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>に！',
        },
        {
          formula: '$a = 1,\\ b = 2$',
          isResult: true,
          annotation: '①より $b = 5 - 3a$。②に<ruby>代入<rt>だいにゅう</rt></ruby>: $3(5-3a) + a = 7$ → $a = 1$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、もう1つの<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>くんですね！おもしろい！',
    },
    {
      type: 'summary-point',
      text: '<ruby>解<rt>かい</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かっているとき → <strong><ruby>解<rt>かい</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby></strong>して<ruby>係数<rt>けいすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>り、<ruby>逆<rt>ぎゃく</rt></ruby>に<ruby>求<rt>もと</rt></ruby>める！',
    },

    // ===== クイズ =====
    {
      type: 'quiz',
      question: '$\\frac{x}{3} + \\frac{y}{2} = 4$ の<ruby>分数<rt>ぶんすう</rt></ruby>をはらうには<ruby>両辺<rt>りょうへん</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をかける？',
      options: [
        { letter: 'A', text: '$2$', correct: false },
        { letter: 'B', text: '$3$', correct: false },
        { letter: 'C', text: '$12$', correct: false },
        { letter: 'D', text: '$6$', correct: true },
      ],
      explanation:
        '<ruby>分母<rt>ぶんぼ</rt></ruby>が $3$ と $2$。<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>は $\\textcolor{#D97706}{6}$。\n<ruby>両辺<rt>りょうへん</rt></ruby>に $6$ をかけると $2x + 3y = 24$ になるよ。',
    },
    {
      type: 'quiz',
      question: '$0.04x + 0.12y = 0.8$ を<ruby>整数<rt>せいすう</rt></ruby>にするには<ruby>何倍<rt>なんばい</rt></ruby>する？',
      options: [
        { letter: 'A', text: '$4$ <ruby>倍<rt>ばい</rt></ruby>', correct: false },
        { letter: 'B', text: '$10$ <ruby>倍<rt>ばい</rt></ruby>', correct: false },
        { letter: 'C', text: '$100$ <ruby>倍<rt>ばい</rt></ruby>', correct: true },
        { letter: 'D', text: '$1000$ <ruby>倍<rt>ばい</rt></ruby>', correct: false },
      ],
      explanation:
        '<ruby>小数第<rt>しょうすうだい</rt></ruby>2<ruby>位<rt>い</rt></ruby>まであるので $\\textcolor{#D97706}{100}$ <ruby>倍<rt>ばい</rt></ruby>！\n$4x + 12y = 80$ になるよ。\nさらに $4$ で<ruby>割<rt>わ</rt></ruby>ると $x + 3y = 20$。',
    },
    {
      type: 'quiz',
      question: '$x + 2y = 3x - y = 10$ を<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>にしたとき、<ruby>正<rt>ただ</rt></ruby>しいのはどれ？',
      options: [
        {
          letter: 'A',
          text: '$\\begin{cases} x + 2y = 3x - y \\\\ x = 10 \\end{cases}$',
          correct: false,
        },
        {
          letter: 'B',
          text: '$\\begin{cases} x + 2y = 10 \\\\ 3x - y = 10 \\end{cases}$',
          correct: true,
        },
        {
          letter: 'C',
          text: '$\\begin{cases} x = 10 \\\\ y = 10 \\end{cases}$',
          correct: false,
        },
        {
          letter: 'D',
          text: '$\\begin{cases} x + 2y + 3x - y = 10 \\\\ x = y \\end{cases}$',
          correct: false,
        },
      ],
      explanation:
        '$A = B = C$ は、$A = C$ と $B = C$ に<ruby>分<rt>わ</rt></ruby>けるのが<ruby>一番<rt>いちばん</rt></ruby><ruby>簡単<rt>かんたん</rt></ruby>！$\\textcolor{#D97706}{\\begin{cases} x + 2y = 10 \\\\ 3x - y = 10 \\end{cases}}$ が<ruby>正解<rt>せいかい</rt></ruby>。',
    },

    // ===== まとめ =====
    {
      type: 'end',
      points: [
        'かっこ → <ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>で<ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>する',
        '<ruby>分数<rt>ぶんすう</rt></ruby> → <ruby>分母<rt>ぶんぼ</rt></ruby>のLCMをかけて<ruby>整数<rt>せいすう</rt></ruby>にする',
        '<ruby>小数<rt>しょうすう</rt></ruby> → $10$ <ruby>倍<rt>ばい</rt></ruby>・$100$ <ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>にする',
        '$A = B = C$ → 2つの<ruby>式<rt>しき</rt></ruby>に<ruby>分<rt>わ</rt></ruby>けて<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>にする',
        '<ruby>解<rt>かい</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>の<ruby>値<rt>あたい</rt></ruby> → <ruby>解<rt>かい</rt></ruby>を<ruby>代入<rt>だいにゅう</rt></ruby>して<ruby>係数<rt>けいすう</rt></ruby>を<ruby>求<rt>もと</rt></ruby>める',
        'まず $ax + by = c$ の<ruby>形<rt>かたち</rt></ruby>に<ruby>直<rt>なお</rt></ruby>してから<ruby>解<rt>と</rt></ruby>こう！',
      ],
    },
  ],
};

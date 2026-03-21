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
    // ===== セクション1: 加減法の基本—足して文字を消そう =====
    {
      type: 'date',
      text: '<ruby>加減法<rt>かげんほう</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>—<ruby>足<rt>た</rt></ruby>して<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>そう',
    },
    {
      type: 'narrator',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>く<ruby>方法<rt>ほうほう</rt></ruby>の1つ、<strong>「<ruby>加減法<rt>かげんほう</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう！<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>したり<ruby>引<rt>ひ</rt></ruby>いたりして<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>すテクニックだよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>加減法<rt>かげんほう</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>はシンプル！2つの<ruby>式<rt>しき</rt></ruby>を<span class="keyword"><ruby>足<rt>た</rt></ruby>す</span>か<span class="keyword"><ruby>引<rt>ひ</rt></ruby>く</span>かして、1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>すんだ。まずはこの<ruby>問題<rt>もんだい</rt></ruby>を<ruby>見<rt>み</rt></ruby>てごらん。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 7 \\quad \\cdots \\textcircled{1} \\\\ x - y = 3 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '$y$ の<ruby>係数<rt>けいすう</rt></ruby>に<ruby>注目<rt>ちゅうもく</rt></ruby>！ $+y$ と $-y$ だね',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$+y$ と $-y$…<ruby>足<rt>た</rt></ruby>したら $y$ が<ruby>消<rt>き</rt></ruby>えそうですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！<ruby>符号<rt>ふごう</rt></ruby>が<ruby>逆<rt>ぎゃく</rt></ruby>のときは<span class="keyword"><ruby>足<rt>た</rt></ruby>す</span>と<ruby>消<rt>き</rt></ruby>えるんだ。やってみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>足<rt>た</rt></ruby>して $y$ を<ruby>消去<rt>しょうきょ</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{array}{rrcl} & x + y &=& 7 \\\\ +) & x - y &=& 3 \\\\ \\hline & 2x &=& 10 \\end{array}$',
          animateInsert: true,
          annotation:
            '$+y + (-y) = 0$ で $y$ が<ruby>消<rt>き</rt></ruby>えた！',
        },
        {
          formula: '$x = 5$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を $2$ で<ruby>割<rt>わ</rt></ruby>る',
        },
        {
          formula: '$5 + y = 7 \\quad \\Rightarrow \\quad y = 2$',
          isResult: true,
          animateInsert: true,
          annotation: '$x = 5$ を①に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$x = 5, y = 2$ ですね！<ruby>足<rt>た</rt></ruby>すだけで<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>解<rt>と</rt></ruby>けた！',
    },
    {
      type: 'summary-point',
      text: '<ruby>消<rt>け</rt></ruby>したい<ruby>文字<rt>もじ</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>が<ruby>逆<rt>ぎゃく</rt></ruby>（$+y$ と $-y$）→ <strong>2つの<ruby>式<rt>shiki</rt></ruby>を<ruby>足<rt>た</rt></ruby>す</strong>と<ruby>消<rt>き</rt></ruby>える！',
    },
    {
      type: 'quiz',
      question: '$\\begin{cases} 2x + y = 9 \\\\ 2x - y = 3 \\end{cases}$ を<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>くと $x$ は？',
      options: [
        { letter: 'A', text: '$x = 2$', correct: false },
        { letter: 'B', text: '$x = 6$', correct: false },
        { letter: 'C', text: '$x = 4$', correct: false },
        { letter: 'D', text: '$x = 3$', correct: true },
      ],
      explanation:
        '<ruby>足<rt>た</rt></ruby>すと $4x = 12 \\rightarrow x = \\textcolor{#D97706}{3}$。\n$y$ の<ruby>符号<rt>ふごう</rt></ruby>が<ruby>逆<rt>ぎゃく</rt></ruby>なので<ruby>足<rt>た</rt></ruby>せば<ruby>消<rt>き</rt></ruby>える！',
    },
    // ===== セクション2: 係数をそろえよう（片方を定数倍） =====
    {
      type: 'date',
      text: '<ruby>係数<rt>けいすう</rt></ruby>をそろえよう（<ruby>片方<rt>かたほう</rt></ruby>を<ruby>定数倍<rt>ていすうばい</rt></ruby>）',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さっきは<ruby>係数<rt>けいすう</rt></ruby>がちょうどそろっていたけど、いつもそうとは<ruby>限<rt>かぎ</rt></ruby>らないよね。<ruby>次<rt>つぎ</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>見<rt>み</rt></ruby>てみよう。',
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
      text: '$x$ の<ruby>係数<rt>けいすう</rt></ruby>が $2$ と $1$ で<ruby>違<rt>ちが</rt></ruby>うし、$y$ も $3$ と $1$ で<ruby>違<rt>ちが</rt></ruby>う…。そのまま<ruby>足<rt>た</rt></ruby>しても<ruby>引<rt>ひ</rt></ruby>いても<ruby>消<rt>き</rt></ruby>えないですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'いい<ruby>気<rt>き</rt></ruby>づき！そんなときは<span class="keyword"><ruby>式<rt>しき</rt></ruby>を<ruby>何倍<rt>なんばい</rt></ruby>かして<ruby>係数<rt>けいすう</rt></ruby>をそろえる</span>んだ。②を $2$ <ruby>倍<rt>ばい</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '②を $2$ <ruby>倍<rt>ばい</rt></ruby>して<ruby>係数<rt>けいすう</rt></ruby>をそろえる',
      steps: [
        {
          formula: "$\\textcircled{2} \\times 2 \\Rightarrow \\textcircled{2}'\\ : 2x + 2y = 12$",
          annotation:
            '$x$ の<ruby>係数<rt>けいすう</rt></ruby>が<ruby>両方<rt>りょうほう</rt></ruby> $2$ にそろった！',
        },
        {
          formula:
            '$\\begin{array}{rrcl} & 2x + 3y &=& 16 \\\\ -) & 2x + 2y &=& 12 \\\\ \\hline & y &=& 4 \\end{array}$',
          animateInsert: true,
          annotation: "$\\textcircled{1} - \\textcircled{2}'$ で $x$ が<ruby>消<rt>き</rt></ruby>えた",
        },
        {
          formula: '$x + 4 = 6 \\quad \\Rightarrow \\quad x = 2$',
          isResult: true,
          animateInsert: true,
          annotation: '$y = 4$ を②に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！<ruby>倍<rt>ばい</rt></ruby>にして<ruby>係数<rt>けいすう</rt></ruby>をそろえてから<ruby>引<rt>ひ</rt></ruby>けばいいんですね！$x = 2, y = 4$ ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！<ruby>消<rt>け</rt></ruby>したい<ruby>文字<rt>もじ</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>をそろえれば、あとは<ruby>足<rt>た</rt></ruby>すか<ruby>引<rt>ひ</rt></ruby>くだけだよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>係数<rt>けいすう</rt></ruby>がそろっていない → <strong><ruby>片方<rt>かたほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>を<ruby>何倍<rt>なんばい</rt></ruby>かして<ruby>係数<rt>けいすう</rt></ruby>をそろえ</strong>てから<ruby>加減<rt>かげん</rt></ruby>する！',
    },
    {
      type: 'quiz',
      question: '$\\begin{cases} 3x + y = 10 \\\\ x + y = 4 \\end{cases}$ を<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>くと $x$ は？',
      options: [
        { letter: 'A', text: '$x = 2$', correct: false },
        { letter: 'B', text: '$x = 4$', correct: false },
        { letter: 'C', text: '$x = 3$', correct: true },
        { letter: 'D', text: '$x = 1$', correct: false },
      ],
      explanation:
        '$y$ の<ruby>係数<rt>けいすう</rt></ruby>がそろっているので、①−②で $2x = 6 \\rightarrow x = \\textcolor{#D97706}{3}$。\n$y = 4 - 3 = 1$。',
    },
    // ===== セクション3: 両方を定数倍する場合 =====
    {
      type: 'date',
      text: '<ruby>両方<rt>りょうほう</rt></ruby>を<ruby>定数倍<rt>ていすうばい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>片方<rt>かたほう</rt></ruby>だけじゃ<ruby>係数<rt>けいすう</rt></ruby>がそろわないときは、<span class="keyword"><ruby>両方<rt>りょうほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>を<ruby>定数倍<rt>ていすうばい</rt></ruby></span>するよ。この<ruby>問題<rt>もんだい</rt></ruby>を<ruby>見<rt>み</rt></ruby>てごらん。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} 2x + 3y = 12 \\quad \\cdots \\textcircled{1} \\\\ 3x + 2y = 13 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '$x$ の<ruby>係数<rt>けいすう</rt></ruby>は $2$ と $3$、$y$ は $3$ と $2$。<ruby>片方<rt>かたほう</rt></ruby>だけの<ruby>倍数<rt>ばいすう</rt></ruby>ではそろわない！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '$x$ の<ruby>係数<rt>けいすう</rt></ruby>が $2$ と $3$…<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>は $6$ だから、①を $3$ <ruby>倍<rt>ばい</rt></ruby>、②を $2$ <ruby>倍<rt>ばい</rt></ruby>すればそろいますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うのがコツだね。やってみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>両方<rt>りょうほう</rt></ruby><ruby>定数倍<rt>ていすうばい</rt></ruby>して<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: "$\\textcircled{1} \\times 3 \\Rightarrow \\textcircled{1}'\\ : 6x + 9y = 36$",
          annotation: '①を $3$ <ruby>倍<rt>ばい</rt></ruby>',
        },
        {
          formula: "$\\textcircled{2} \\times 2 \\Rightarrow \\textcircled{2}'\\ : 6x + 4y = 26$",
          annotation: '②を $2$ <ruby>倍<rt>ばい</rt></ruby>',
        },
        {
          formula:
            '$\\begin{array}{rrcl} & 6x + 9y &=& 36 \\\\ -) & 6x + 4y &=& 26 \\\\ \\hline & 5y &=& 10 \\end{array}$',
          animateInsert: true,
          annotation: "$\\textcircled{1}' - \\textcircled{2}'$ で $x$ が<ruby>消<rt>き</rt></ruby>えた",
        },
        {
          formula: '$y = 2$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を $5$ で<ruby>割<rt>わ</rt></ruby>る',
        },
        {
          formula: '$3x + 4 = 13 \\quad \\Rightarrow \\quad x = 3$',
          isResult: true,
          animateInsert: true,
          annotation: '$y = 2$ を②に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$x = 3, y = 2$！<ruby>両方<rt>りょうほう</rt></ruby><ruby>倍<rt>ばい</rt></ruby>にするのは<ruby>手間<rt>てま</rt></ruby>だけど、やることは<ruby>同<rt>おな</rt></ruby>じですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>片方<rt>かたほう</rt></ruby>だけでは<ruby>係数<rt>けいすう</rt></ruby>がそろわない → <strong><ruby>両方<rt>りょうほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>を<ruby>定数倍<rt>ていすうばい</rt></ruby></strong>。<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うと<ruby>計算<rt>けいさん</rt></ruby>が<ruby>楽<rt>らく</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '$\\begin{cases} 3x + 4y = 18 \\\\ 5x + 2y = 16 \\end{cases}$ で $y$ を<ruby>消<rt>け</rt></ruby>すには②を<ruby>何倍<rt>なんばい</rt></ruby>する？',
      options: [
        { letter: 'A', text: '$3$ <ruby>倍<rt>ばい</rt></ruby>', correct: false },
        { letter: 'B', text: '$2$ <ruby>倍<rt>ばい</rt></ruby>', correct: true },
        { letter: 'C', text: '$4$ <ruby>倍<rt>ばい</rt></ruby>', correct: false },
        { letter: 'D', text: '$5$ <ruby>倍<rt>ばい</rt></ruby>', correct: false },
      ],
      explanation:
        '$y$ の<ruby>係数<rt>けいすう</rt></ruby>は $4$ と $2$。②を $\\textcolor{#D97706}{2}$ <ruby>倍<rt>ばい</rt></ruby>すれば<ruby>係数<rt>けいすう</rt></ruby>が $4$ にそろう。\n①−②\'で $y$ が<ruby>消<rt>き</rt></ruby>える！',
    },
    // ===== セクション4: 引き算で消す場合 =====
    {
      type: 'date',
      text: '<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>で<ruby>消<rt>け</rt></ruby>す<ruby>場合<rt>ばあい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ここで<ruby>大事<rt>だいじ</rt></ruby>な<ruby>注意点<rt>ちゅういてん</rt></ruby>！<ruby>式<rt>しき</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くとき、<ruby>引<rt>ひ</rt></ruby>かれる<ruby>式<rt>しき</rt></ruby>の<span class="keyword">すべての<ruby>項<rt>こう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる</span>ことに<ruby>注意<rt>ちゅうい</rt></ruby>だよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'え？<ruby>左辺<rt>さへん</rt></ruby>だけ<ruby>引<rt>ひ</rt></ruby>くんじゃないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'よくある<ruby>間違<rt>まちが</rt></ruby>いだよ！<ruby>等式<rt>とうしき</rt></ruby>だから<strong><ruby>左辺<rt>さへん</rt></ruby>も<ruby>右辺<rt>うへん</rt></ruby>も<ruby>全部<rt>ぜんぶ</rt></ruby></strong><ruby>引<rt>ひ</rt></ruby>くんだ。<ruby>具体的<rt>ぐたいてき</rt></ruby>に<ruby>見<rt>み</rt></ruby>てみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>引<rt>ひ</rt></ruby>くときの<ruby>注意<rt>ちゅうい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} 5x + 3y = 29 \\quad \\cdots \\textcircled{1} \\\\ 3x + 3y = 21 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '$y$ の<ruby>係数<rt>けいすう</rt></ruby>が<ruby>両方<rt>りょうほう</rt></ruby> $+3$ → <ruby>引<rt>ひ</rt></ruby>く！',
        },
        {
          formula:
            '$\\begin{array}{rrcl} & 5x + 3y &=& 29 \\\\ -) & 3x + 3y &=& 21 \\\\ \\hline & 2x &=& 8 \\end{array}$',
          animateInsert: true,
          annotation:
            '<ruby>左辺<rt>さへん</rt></ruby>: $5x - 3x = 2x$, $3y - 3y = 0$。<ruby>右辺<rt>うへん</rt></ruby>: $29 - 21 = 8$',
        },
        {
          formula: '$x = 4$',
          isResult: true,
          animateInsert: true,
        },
        {
          formula: '$12 + 3y = 21 \\quad \\Rightarrow \\quad y = 3$',
          isResult: true,
          animateInsert: true,
          annotation: '$x = 4$ を②に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>符号<rt>ふごう</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じなら<ruby>引<rt>ひ</rt></ruby>く、<ruby>逆<rt>ぎゃく</rt></ruby>なら<ruby>足<rt>た</rt></ruby>す…ってことですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！それが<ruby>加減法<rt>かげんほう</rt></ruby>のすべてだよ。<ruby>最後<rt>さいご</rt></ruby>に<ruby>検算<rt>けんざん</rt></ruby>も<ruby>忘<rt>わす</rt></ruby>れずにね！',
    },
    {
      type: 'quiz',
      question: '$\\begin{cases} 3x + 2y = 8 \\\\ 2x + 5y = 9 \\end{cases}$ を<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>くとき、$y$ を<ruby>消<rt>け</rt></ruby>すには①を<ruby>何倍<rt>なんばい</rt></ruby>、②を<ruby>何倍<rt>なんばい</rt></ruby>する？',
      options: [
        { letter: 'A', text: '①×2、②×3', correct: false },
        { letter: 'B', text: '①×5、②×3', correct: false },
        { letter: 'C', text: '①×3、②×2', correct: false },
        { letter: 'D', text: '①×5、②×2', correct: true },
      ],
      explanation:
        '$y$ の<ruby>係数<rt>けいすう</rt></ruby>は $2$ と $5$。\n<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby> $10$ にそろえるため、①×$5$（$10y$）、②×$2$（$10y$）にして<ruby>引<rt>ひ</rt></ruby>く。\n$\\textcolor{#D97706}{11x = 22 \\Rightarrow x = 2, y = 1}$。',
    },
    {
      type: 'summary-point',
      text: '<ruby>引<rt>ひ</rt></ruby>くときは<strong><ruby>左辺<rt>さへん</rt></ruby>も<ruby>右辺<rt>うへん</rt></ruby>もすべて<ruby>引<rt>ひ</rt></ruby>く</strong>。<ruby>符号<rt>ふごう</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '$\\begin{cases} 4x + 3y = 19 \\\\ 4x + y = 13 \\end{cases}$ で①−②を<ruby>計算<rt>けいさん</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$2y = 6$', correct: true },
        { letter: 'B', text: '$4y = 6$', correct: false },
        { letter: 'C', text: '$8x + 4y = 32$', correct: false },
        { letter: 'D', text: '$2y = 32$', correct: false },
      ],
      explanation:
        '<ruby>左辺<rt>さへん</rt></ruby>: $4x - 4x = 0$, $3y - y = 2y$。<ruby>右辺<rt>うへん</rt></ruby>: $19 - 13 = 6$。\n$\\textcolor{#D97706}{2y = 6}$ → $y = 3$',
    },
    {
      type: 'end',
      points: [
        '<ruby>加減法<rt>かげんほう</rt></ruby>: <ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>すか<ruby>引<rt>ひ</rt></ruby>くかして1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>消去<rt>しょうきょ</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>',
        '<ruby>符号<rt>ふごう</rt></ruby>が<ruby>逆<rt>ぎゃく</rt></ruby>（$+$ と $-$）→ <ruby>足<rt>た</rt></ruby>す、<ruby>符号<rt>ふごう</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ → <ruby>引<rt>ひ</rt></ruby>く',
        '<ruby>係数<rt>けいすう</rt></ruby>がそろっていなければ、<ruby>片方<rt>かたほう</rt></ruby>or<ruby>両方<rt>りょうほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>を<ruby>定数倍<rt>ていすうばい</rt></ruby>してそろえる',
        '<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うと<ruby>係数<rt>けいすう</rt></ruby>をそろえやすい',
        '<ruby>引<rt>ひ</rt></ruby>くときは<ruby>左辺<rt>さへん</rt></ruby>も<ruby>右辺<rt>うへん</rt></ruby>もすべて<ruby>引<rt>ひ</rt></ruby>く（<ruby>符号<rt>ふごう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>）',
        '<ruby>解<rt>と</rt></ruby>いたあとは<ruby>検算<rt>けんざん</rt></ruby>（<ruby>両方<rt>りょうほう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>して<ruby>確認<rt>かくにん</rt></ruby>）を<ruby>忘<rt>わす</rt></ruby>れずに！',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const substitutionChat: HistoryChat = {
  id: 'math-g2-substitution',
  icon: '🔀',
  title: '代入法をマスターしよう',
  subtitle: '〜中2数学〜 式を代入して解く',
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
    // ===== セクション1: 代入法ってなに？ =====
    {
      type: 'date',
      text: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>くもう1つの<ruby>方法<rt>ほうほう</rt></ruby>、<strong>「<ruby>代入法<rt>だいにゅうほう</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう！<ruby>加減法<rt>かげんほう</rt></ruby>とは<ruby>違<rt>ちが</rt></ruby>うやり<ruby>方<rt>かた</rt></ruby>で<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>すよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>加減法<rt>かげんほう</rt></ruby>では<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>したり<ruby>引<rt>ひ</rt></ruby>いたりして<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>したよね。<ruby>代入法<rt>だいにゅうほう</rt></ruby>は<span class="keyword">「<ruby>入<rt>い</rt></ruby>れかえ」</span>で<ruby>消<rt>け</rt></ruby>す<ruby>方法<rt>ほうほう</rt></ruby>だよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「<ruby>入<rt>い</rt></ruby>れかえ」ってどういうことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>例<rt>たと</rt></ruby>えば $y = 2x$ って<ruby>分<rt>わ</rt></ruby>かっていたら、<ruby>別<rt>べつ</rt></ruby>の<ruby>式<rt>しき</rt></ruby>の $y$ のところに $2x$ を<span class="keyword"><ruby>代入<rt>だいにゅう</rt></ruby></span>（<ruby>入<rt>い</rt></ruby>れかえ）するんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！ $y$ を $2x$ にチェンジするってことか！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！すると $y$ が<ruby>消<rt>き</rt></ruby>えて、$x$ だけの<ruby>式<rt>しき</rt></ruby>になるんだ。<ruby>加減法<rt>かげんほう</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じで、<span class="keyword"><ruby>文字<rt>もじ</rt></ruby>を1つ<ruby>消<rt>け</rt></ruby>す</span>のが<ruby>目的<rt>もくてき</rt></ruby>だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>：<strong>$y = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>をもう<ruby>一方<rt>いっぽう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>に「<ruby>入<rt>い</rt></ruby>れかえ」</strong>して、<ruby>文字<rt>もじ</rt></ruby>を1つ<ruby>消<rt>け</rt></ruby>す<ruby>方法<rt>ほうほう</rt></ruby>！',
    },

    // ===== セクション2: y=○○ の形からスタート =====
    {
      type: 'date',
      text: '$y = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>からスタート',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'では<ruby>実際<rt>じっさい</rt></ruby>に<ruby>代入法<rt>だいにゅうほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>いてみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>①',
      steps: [
        {
          formula:
            '$\\begin{cases} y = 2x \\quad \\cdots \\textcircled{1} \\\\ x + y = 9 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '①で $y = 2x$ と<ruby>分<rt>わ</rt></ruby>かっている！この $y$ を②に<ruby>入<rt>い</rt></ruby>れよう！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '②の $y$ のところに $2x$ を<ruby>入<rt>い</rt></ruby>れると…… $x + 2x = 9$ ですね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x + 2x = 9$',
          animateInsert: true,
          annotation: '②の $y$ に $2x$ を<ruby>代入<rt>だいにゅう</rt></ruby>！',
        },
        {
          formula: '$3x = 9$',
          animateInsert: true,
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる',
        },
        {
          formula: '$x = 3$',
          isResult: true,
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を3で<ruby>割<rt>わ</rt></ruby>る',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$x = 3$！あとは①に<ruby>戻<rt>もど</rt></ruby>して $y = 2 \\times 3 = 6$ ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！もう1<ruby>問<rt>もん</rt></ruby>やってみよう。<ruby>今度<rt>こんど</rt></ruby>は $x = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>②',
      steps: [
        {
          formula:
            '$\\begin{cases} x = y + 1 \\quad \\cdots \\textcircled{1} \\\\ 2x + y = 8 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '①で $x = y + 1$ と<ruby>分<rt>わ</rt></ruby>かっている！②の $x$ に<ruby>代入<rt>だいにゅう</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '②の $x$ に $(y + 1)$ を<ruby>入<rt>い</rt></ruby>れると…… $2(y + 1) + y = 8$ ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いいね！<span class="keyword">かっこをつける</span>のがポイント！$2 \\times x$ だから、$x$ のところに $(y + 1)$ を<ruby>入<rt>い</rt></ruby>れるとかっこが<ruby>必要<rt>ひつよう</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>代入<rt>だいにゅう</rt></ruby>して<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$2(y + 1) + y = 8$',
          animateInsert: true,
          annotation: '②の $x$ に $(y + 1)$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$2y + 2 + y = 8$',
          animateInsert: true,
          annotation: 'かっこを<ruby>展開<rt>てんかい</rt></ruby>（<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>）',
        },
        {
          formula: '$3y + 2 = 8$',
          annotation: '<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる',
        },
        {
          formula: '$y = 2,\\ x = 3$',
          isResult: true,
          annotation: '$y = 2$ を①に<ruby>代入<rt>だいにゅう</rt></ruby>: $x = 2 + 1 = 3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$y = \\circ\\circ$ でも $x = \\circ\\circ$ でも、やり<ruby>方<rt>かた</rt></ruby>は<ruby>同<rt>おな</rt></ruby>じですね！',
    },
    {
      type: 'summary-point',
      text: '$y = \\circ\\circ$ や $x = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>があれば、そのまま<ruby>代入<rt>だいにゅう</rt></ruby>！<strong>かっこをつけるのを<ruby>忘<rt>わす</rt></ruby>れずに</strong>！',
    },

    // ===== セクション3: 式を変形してから代入 =====
    {
      type: 'date',
      text: '<ruby>式<rt>しき</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いつも $y = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>があるとは<ruby>限<rt>かぎ</rt></ruby>らないよね。そんなときはまず<ruby>変形<rt>へんけい</rt></ruby>しよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>③',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 5 \\quad \\cdots \\textcircled{1} \\\\ 3x + 2y = 13 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            'どちらも $y = \\circ\\circ$ じゃないけど、①は $y$ の<ruby>係数<rt>けいすう</rt></ruby>が1！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'どっちの<ruby>式<rt>しき</rt></ruby>をどう<ruby>変形<rt>へんけい</rt></ruby>すればいいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<span class="keyword"><ruby>係数<rt>けいすう</rt></ruby>が1</span>の<ruby>文字<rt>もじ</rt></ruby>に<ruby>注目<rt>ちゅうもく</rt></ruby>！①の $y$ は<ruby>係数<rt>けいすう</rt></ruby>が1だから、$y = 5 - x$ と<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>変形<rt>へんけい</rt></ruby>できるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>変形<rt>へんけい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>',
      steps: [
        {
          formula: '$\\textcircled{1} \\Rightarrow y = 5 - x$',
          animateInsert: true,
          annotation: '①を $y =$ の<ruby>形<rt>かたち</rt></ruby>に<ruby>変形<rt>へんけい</rt></ruby>',
        },
        {
          formula: '$3x + 2(5 - x) = 13$',
          animateInsert: true,
          annotation: '②の $y$ に $(5 - x)$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$3x + 10 - 2x = 13$',
          annotation: 'かっこを<ruby>展開<rt>てんかい</rt></ruby>',
        },
        {
          formula: '$x = 3$',
          isResult: true,
          annotation: '$x + 10 = 13 \\rightarrow x = 3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$x = 3$ だから $y = 5 - 3 = 2$！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もう1<ruby>問<rt>もん</rt></ruby>！<ruby>今度<rt>こんど</rt></ruby>は $x$ の<ruby>係数<rt>けいすう</rt></ruby>が1の<ruby>式<rt>しき</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>してみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>④',
      steps: [
        {
          formula:
            '$\\begin{cases} 2x + y = 8 \\quad \\cdots \\textcircled{1} \\\\ x - 3y = -3 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '①の $y$ は<ruby>係数<rt>けいすう</rt></ruby>1、②の $x$ も<ruby>係数<rt>けいすう</rt></ruby>1。どちらでもOK！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '①を $y = 8 - 2x$ に<ruby>変形<rt>へんけい</rt></ruby>して、②に<ruby>代入<rt>だいにゅう</rt></ruby>してみます！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>代入<rt>だいにゅう</rt></ruby>して<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x - 3(8 - 2x) = -3$',
          animateInsert: true,
          annotation: '②の $y$ に $(8 - 2x)$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$x - 24 + 6x = -3$',
          animateInsert: true,
          annotation: '$-3 \\times 8 = -24$、$-3 \\times (-2x) = +6x$',
        },
        {
          formula: '$7x = 21$',
          annotation: '$7x - 24 = -3 \\rightarrow 7x = 21$',
        },
        {
          formula: '$x = 3,\\ y = 2$',
          isResult: true,
          annotation: '$y = 8 - 2 \\times 3 = 2$',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！<span class="keyword">$-3 \\times (-2x) = +6x$</span>、マイナス×マイナスの<ruby>符号<rt>ふごう</rt></ruby>も<ruby>正確<rt>せいかく</rt></ruby>にできてるね！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'かっこの<ruby>展開<rt>てんかい</rt></ruby>で<ruby>符号<rt>ふごう</rt></ruby>ミスしやすいから<ruby>気<rt>き</rt></ruby>をつけないと！',
    },
    {
      type: 'summary-point',
      text: '$y = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>がないとき → <strong><ruby>係数<rt>けいすう</rt></ruby>が1の<ruby>文字<rt>もじ</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby></strong>！かっこの<ruby>展開<rt>てんかい</rt></ruby>で<ruby>符号<rt>ふごう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>！',
    },

    // ===== セクション4: 加減法と代入法の使い分け =====
    {
      type: 'date',
      text: '<ruby>加減法<rt>かげんほう</rt></ruby>と<ruby>代入法<rt>だいにゅうほう</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>け',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>加減法<rt>かげんほう</rt></ruby>と<ruby>代入法<rt>だいにゅうほう</rt></ruby>、どっちを<ruby>使<rt>つか</rt></ruby>えばいいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！<ruby>問題<rt>もんだい</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>によって<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>けるといいよ。<ruby>比<rt>くら</rt></ruby>べてみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>けガイド',
      steps: [
        {
          formula: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>が<ruby>向<rt>む</rt></ruby>いているとき',
          annotation:
            '$y = \\circ\\circ$ や $x = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>がそのままある / <ruby>係数<rt>けいすう</rt></ruby>1の<ruby>文字<rt>もじ</rt></ruby>がある',
        },
        {
          formula: '<ruby>加減法<rt>かげんほう</rt></ruby>が<ruby>向<rt>む</rt></ruby>いているとき',
          annotation:
            '<ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>がそろっている / <ruby>係数<rt>けいすう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>具体的<rt>ぐたいてき</rt></ruby>に<ruby>見<rt>み</rt></ruby>てみよう。この<ruby>問題<rt>もんだい</rt></ruby>はどっちが<ruby>楽<rt>らく</rt></ruby>かな？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>A: <ruby>代入法<rt>だいにゅうほう</rt></ruby><ruby>向<rt>む</rt></ruby>き',
      steps: [
        {
          formula:
            '$\\begin{cases} y = 5x \\quad \\cdots \\textcircled{1} \\\\ 3x + y = 16 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '①が $y = 5x$ の<ruby>形<rt>かたち</rt></ruby>！そのまま<ruby>代入<rt>だいにゅう</rt></ruby>できる！',
        },
        {
          formula: '$3x + 5x = 16 \\rightarrow 8x = 16 \\rightarrow x = 2$',
          isResult: true,
          annotation: '$y = 5 \\times 2 = 10$。<ruby>答<rt>こた</rt></ruby>え: $x = 2,\\ y = 10$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$y = 5x$ がそのままあるから、<ruby>代入法<rt>だいにゅうほう</rt></ruby>ですぐ<ruby>解<rt>と</rt></ruby>けますね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>B: <ruby>加減法<rt>かげんほう</rt></ruby><ruby>向<rt>む</rt></ruby>き',
      steps: [
        {
          formula:
            '$\\begin{cases} 2x + 3y = 12 \\quad \\cdots \\textcircled{1} \\\\ 2x - y = 4 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '$2x$ の<ruby>係数<rt>けいすう</rt></ruby>がそろっている！①−②で $x$ が<ruby>消<rt>き</rt></ruby>える！',
        },
        {
          formula: '$\\textcircled{1} - \\textcircled{2}: 4y = 8 \\rightarrow y = 2$',
          isResult: true,
          annotation: '$2x - y = 4 \\rightarrow 2x = 6 \\rightarrow x = 3$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>係数<rt>けいすう</rt></ruby>がそろってるなら、<ruby>引<rt>ひ</rt></ruby>くだけで<ruby>消<rt>き</rt></ruby>えるから<ruby>加減法<rt>かげんほう</rt></ruby>が<ruby>楽<rt>らく</rt></ruby>だ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！どちらでも<ruby>解<rt>と</rt></ruby>けるけど、<span class="keyword"><ruby>楽<rt>らく</rt></ruby>な<ruby>方<rt>ほう</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶ</span>のが<ruby>大事<rt>だいじ</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあ、<ruby>両方<rt>りょうほう</rt></ruby>とも<ruby>係数<rt>けいすう</rt></ruby>が1じゃないし、そろってもいないときは？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのときは<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>係数<rt>けいすう</rt></ruby>をそろえるか、<ruby>代入法<rt>だいにゅうほう</rt></ruby>で<ruby>変形<rt>へんけい</rt></ruby>するか、やりやすい<ruby>方<rt>ほう</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぼう！<ruby>慣<rt>な</rt></ruby>れれば<ruby>見<rt>み</rt></ruby>た<ruby>瞬間<rt>しゅんかん</rt></ruby>に<ruby>分<rt>わ</rt></ruby>かるようになるよ。',
    },
    {
      type: 'quiz',
      question: '$y = 3x$、$2x + y = 10$ を<ruby>代入法<rt>だいにゅうほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>くと $x$ は？',
      options: [
        { letter: 'A', text: '$x = 1$', correct: false },
        { letter: 'B', text: '$x = 2$', correct: true },
        { letter: 'C', text: '$x = 3$', correct: false },
        { letter: 'D', text: '$x = 5$', correct: false },
      ],
      explanation:
        '$y = 3x$ を$\\textcircled{2}$に<ruby>代入<rt>だいにゅう</rt></ruby>: $2x + 3x = 10 \\rightarrow 5x = 10 \\rightarrow x = \\textcolor{#D97706}{2}$。$y = 6$ だよ。',
    },
    {
      type: 'quiz',
      question: '$x + y = 5$、$3x + 2y = 13$ を<ruby>代入法<rt>だいにゅうほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>くと $x$ は？',
      options: [
        { letter: 'A', text: '$x = 2$', correct: false },
        { letter: 'B', text: '$x = 4$', correct: false },
        { letter: 'C', text: '$x = 3$', correct: true },
        { letter: 'D', text: '$x = 1$', correct: false },
      ],
      explanation:
        '①を $y = 5 - x$ に<ruby>変形<rt>へんけい</rt></ruby>して②に<ruby>代入<rt>だいにゅう</rt></ruby>: $3x + 2(5 - x) = 13 \\rightarrow x = \\textcolor{#D97706}{3}$。$y = 2$ だよ。',
    },
    {
      type: 'quiz',
      question: '次のうち、<ruby>代入法<rt>だいにゅうほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>くのが<ruby>最<rt>もっと</rt></ruby>も<ruby>楽<rt>らく</rt></ruby>なのはどれ？',
      options: [
        { letter: 'A', text: '$2x + 3y = 12$, $2x - y = 4$', correct: false },
        { letter: 'B', text: '$y = 5x$, $3x + y = 16$', correct: true },
        { letter: 'C', text: '$3x + 2y = 7$, $3x - 5y = -7$', correct: false },
        { letter: 'D', text: '$5x + 4y = 23$, $5x + 2y = 17$', correct: false },
      ],
      explanation:
        'Bは $y = 5x$ の<ruby>形<rt>かたち</rt></ruby>がそのままあるので、<ruby>代入法<rt>だいにゅうほう</rt></ruby>ですぐ<ruby>解<rt>と</rt></ruby>ける！A・C・Dは<ruby>係数<rt>けいすう</rt></ruby>がそろっているので<ruby>加減法<rt>かげんほう</rt></ruby><ruby>向<rt>む</rt></ruby>き。',
    },
    {
      type: 'end',
      points: [
        '<ruby>代入法<rt>だいにゅうほう</rt></ruby>：<ruby>一方<rt>いっぽう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>をもう<ruby>一方<rt>いっぽう</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>して1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>す',
        '$y = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>がそのままあれば、すぐ<ruby>代入<rt>だいにゅう</rt></ruby>できる',
        '<ruby>形<rt>かたち</rt></ruby>がなければ、<ruby>係数<rt>けいすう</rt></ruby>が1の<ruby>文字<rt>もじ</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>',
        '<ruby>代入<rt>だいにゅう</rt></ruby>するときは<ruby>式<rt>しき</rt></ruby><ruby>全体<rt>ぜんたい</rt></ruby>にかっこをつける（<ruby>符号<rt>ふごう</rt></ruby>ミス<ruby>防止<rt>ぼうし</rt></ruby>）',
        '$y = \\circ\\circ$ の<ruby>形<rt>かたち</rt></ruby>なら<ruby>代入法<rt>だいにゅうほう</rt></ruby>、<ruby>係数<rt>けいすう</rt></ruby>がそろっているなら<ruby>加減法<rt>かげんほう</rt></ruby>が<ruby>便利<rt>べんり</rt></ruby>',
      ],
    },
  ],
};

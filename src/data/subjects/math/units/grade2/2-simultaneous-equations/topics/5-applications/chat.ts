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
    // ─── セクション1: 文章題の解き方—立式の手順 ───
    {
      type: 'date',
      text: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>の<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>—<ruby>立式<rt>りっしき</rt></ruby>の<ruby>手順<rt>てじゅん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って、<ruby>日常<rt>にちじょう</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみよう！<ruby>大事<rt>だいじ</rt></ruby>なのは<strong>「<ruby>何<rt>なに</rt></ruby>を $x$, $y$ にするか」</strong>を<ruby>決<rt>き</rt></ruby>めること！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>には<ruby>決<rt>き</rt></ruby>まった<ruby>手順<rt>てじゅん</rt></ruby>があるよ。この4ステップを<ruby>覚<rt>おぼ</rt></ruby>えよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>の4ステップ',
      steps: [
        {
          formula: '① <ruby>何<rt>なに</rt></ruby>を $x$, $y$ にするか<ruby>決<rt>き</rt></ruby>める',
          annotation: '<ruby>求<rt>もと</rt></ruby>めたいもの、<ruby>分<rt>わ</rt></ruby>からないものを<ruby>文字<rt>もじ</rt></ruby>でおく',
        },
        {
          formula: '② <ruby>問題文<rt>もんだいぶん</rt></ruby>から 2 つの<ruby>等<rt>ひと</rt></ruby>しい<ruby>関係<rt>かんけい</rt></ruby>を<ruby>見<rt>み</rt></ruby>つける',
          animateInsert: true,
          annotation: '「<ruby>合計<rt>ごうけい</rt></ruby>」「<ruby>同<rt>おな</rt></ruby>じ」などのキーワードに<ruby>注目<rt>ちゅうもく</rt></ruby>',
        },
        {
          formula: '③ <ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>く',
          animateInsert: true,
          annotation: '<ruby>加減法<rt>かげんほう</rt></ruby>か<ruby>代入法<rt>だいにゅうほう</rt></ruby>で',
        },
        {
          formula: '④ <ruby>答<rt>こた</rt></ruby>えが<ruby>問題<rt>もんだい</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うか<ruby>確認<rt>かくにん</rt></ruby>する',
          isResult: true,
          annotation: '<ruby>必<rt>かなら</rt></ruby>ず<ruby>検算<rt>けんざん</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>手順<rt>てじゅん</rt></ruby>はわかったけど、<ruby>具体的<rt>ぐたいてき</rt></ruby>にはどうやるの？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'じゃあ、いろんなパターンの<ruby>問題<rt>もんだい</rt></ruby>を<ruby>順番<rt>じゅんばん</rt></ruby>に<ruby>練習<rt>れんしゅう</rt></ruby>していこう！',
    },
    {
      type: 'summary-point',
      text: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>の<ruby>鉄則<rt>てっそく</rt></ruby>: ① $x$, $y$ を<ruby>決<rt>き</rt></ruby>める → ② 2つの<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる → ③ <ruby>解<rt>と</rt></ruby>く → ④ <ruby>確認<rt>かくにん</rt></ruby>',
    },

    // ─── セクション2: 数量・代金の問題 ───
    {
      type: 'date',
      text: '<ruby>数量<rt>すうりょう</rt></ruby>・<ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まずは<ruby>基本<rt>きほん</rt></ruby>の<span class="keyword"><ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby></span>！「えんぴつ1<ruby>本<rt>ぽん</rt></ruby> 60<ruby>円<rt>えん</rt></ruby>、ノート1<ruby>冊<rt>さつ</rt></ruby> 120<ruby>円<rt>えん</rt></ruby>。<ruby>合<rt>あ</rt></ruby>わせて 8<ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>って<ruby>合計<rt>ごうけい</rt></ruby> 660<ruby>円<rt>えん</rt></ruby>でした。」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えんぴつを $x$<ruby>本<rt>ほん</rt></ruby>、ノートを $y$<ruby>冊<rt>さつ</rt></ruby>とすれば<ruby>式<rt>しき</rt></ruby>が<ruby>立<rt>た</rt></ruby>てられそう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！「<ruby>合計<rt>ごうけい</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>」と「<ruby>合計<rt>ごうけい</rt></ruby>の<ruby>金額<rt>きんがく</rt></ruby>」で2つの<ruby>式<rt>しき</rt></ruby>ができるね。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>こう',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 8 \\quad \\cdots \\textcircled{1} \\\\ 60x + 120y = 660 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>個数<rt>こすう</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>と<ruby>金額<rt>きんがく</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>',
        },
        {
          formula: "$\\textcircled{2} \\div 60 \\Rightarrow \\textcircled{2}'\\ x + 2y = 11$",
          animateInsert: true,
          annotation: '<ruby>係数<rt>けいすう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいときは<ruby>割<rt>わ</rt></ruby>って<ruby>簡単<rt>かんたん</rt></ruby>にする',
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
          annotation: '$y = 3$ を①に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'えんぴつ 5<ruby>本<rt>ほん</rt></ruby>、ノート 3<ruby>冊<rt>さつ</rt></ruby>！<ruby>検算<rt>けんざん</rt></ruby>すると $60 \\times 5 + 120 \\times 3 = 300 + 360 = 660$<ruby>円<rt>えん</rt></ruby>。<ruby>合<rt>あ</rt></ruby>ってる！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もう1<ruby>問<rt>もん</rt></ruby>。「<ruby>大人<rt>おとな</rt></ruby>1<ruby>人<rt>にん</rt></ruby> 500<ruby>円<rt>えん</rt></ruby>、<ruby>子<rt>こ</rt></ruby>ども1<ruby>人<rt>にん</rt></ruby> 200<ruby>円<rt>えん</rt></ruby>の<ruby>美術館<rt>びじゅつかん</rt></ruby>に 15<ruby>人<rt>にん</rt></ruby>で<ruby>入<rt>はい</rt></ruby>り、<ruby>合計<rt>ごうけい</rt></ruby> 5400<ruby>円<rt>えん</rt></ruby>。<ruby>大人<rt>おとな</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>？」',
    },
    {
      type: 'whiteboard',
      title: '<ruby>美術館<rt>びじゅつかん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 15 \\quad \\cdots \\textcircled{1} \\\\ 500x + 200y = 5400 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation: '<ruby>大人<rt>おとな</rt></ruby> $x$ <ruby>人<rt>にん</rt></ruby>、<ruby>子<rt>こ</rt></ruby>ども $y$ <ruby>人<rt>にん</rt></ruby>',
        },
        {
          formula: '$\\textcircled{1} \\times 200: \\quad 200x + 200y = 3000$',
          animateInsert: true,
          annotation: '①を200<ruby>倍<rt>ばい</rt></ruby>',
        },
        {
          formula: '$\\textcircled{2} - \\textcircled{1}\\prime: \\quad 300x = 2400 \\Rightarrow x = 8$',
          animateInsert: true,
          annotation: '$y$ を<ruby>消去<rt>しょうきょ</rt></ruby>',
        },
        {
          formula: '$y = 15 - 8 = 7$',
          isResult: true,
          annotation: '<ruby>大人<rt>おとな</rt></ruby> 8<ruby>人<rt>にん</rt></ruby>、<ruby>子<rt>こ</rt></ruby>ども 7<ruby>人<rt>にん</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>検算<rt>けんざん</rt></ruby>: $500 \\times 8 + 200 \\times 7 = 4000 + 1400 = 5400$<ruby>円<rt>えん</rt></ruby>。OK！<ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>は「<ruby>個数<rt>こすう</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>」と「<ruby>金額<rt>きんがく</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>」で2<ruby>式<rt>しき</rt></ruby>だね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>: <strong>「<ruby>合計<rt>ごうけい</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>」と「<ruby>合計<rt>ごうけい</rt></ruby>の<ruby>金額<rt>きんがく</rt></ruby>」</strong>で2つの<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てよう。<ruby>係数<rt>けいすう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいときは<ruby>割<rt>わ</rt></ruby>って<ruby>簡単<rt>かんたん</rt></ruby>に！',
    },

    // ─── セクション3: 割合の問題 ───
    {
      type: 'date',
      text: '<ruby>割合<rt>わりあい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<span class="keyword"><ruby>割合<rt>わりあい</rt></ruby></span>の<ruby>問題<rt>もんだい</rt></ruby>だよ。「ある<ruby>中学校<rt>ちゅうがっこう</rt></ruby>の1<ruby>年生<rt>ねんせい</rt></ruby>は $x$ <ruby>人<rt>にん</rt></ruby>、2<ruby>年生<rt>ねんせい</rt></ruby>は $y$ <ruby>人<rt>にん</rt></ruby>で<ruby>合計<rt>ごうけい</rt></ruby> 300<ruby>人<rt>にん</rt></ruby>。1<ruby>年生<rt>ねんせい</rt></ruby>の 40%と 2<ruby>年生<rt>ねんせい</rt></ruby>の 30%の<ruby>合計<rt>ごうけい</rt></ruby>が 105<ruby>人<rt>にん</rt></ruby>。」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '40%って<ruby>式<rt>しき</rt></ruby>にするとき、どう<ruby>書<rt>か</rt></ruby>けばいいの？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '「$x$ <ruby>人<rt>にん</rt></ruby>の 40%」は $x \\times \\dfrac{40}{100} = 0.4x$ だよ。<ruby>小数<rt>しょうすう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>は<ruby>後<rt>あと</rt></ruby>で10<ruby>倍<rt>ばい</rt></ruby>すればOK！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>割合<rt>わりあい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 300 \\quad \\cdots \\textcircled{1} \\\\ 0.4x + 0.3y = 105 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation: '<ruby>合計人数<rt>ごうけいにんずう</rt></ruby>と<ruby>割合<rt>わりあい</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>',
        },
        {
          formula: '$\\textcircled{2} \\times 10: \\quad 4x + 3y = 1050 \\quad \\cdots \\textcircled{2}\\prime$',
          animateInsert: true,
          annotation: '<ruby>小数<rt>しょうすう</rt></ruby>をなくすために10<ruby>倍<rt>ばい</rt></ruby>',
        },
        {
          formula: '$\\textcircled{1} \\times 3: \\quad 3x + 3y = 900 \\quad \\cdots \\textcircled{3}$',
          animateInsert: true,
          annotation: '$y$ の<ruby>係数<rt>けいすう</rt></ruby>をそろえる',
        },
        {
          formula: '$\\textcircled{2}\\prime - \\textcircled{3}: \\quad x = 150, \\quad y = 150$',
          isResult: true,
          annotation: '1<ruby>年生<rt>ねんせい</rt></ruby> 150<ruby>人<rt>にん</rt></ruby>、2<ruby>年生<rt>ねんせい</rt></ruby> 150<ruby>人<rt>にん</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>検算<rt>けんざん</rt></ruby>: $150 \\times 0.4 + 150 \\times 0.3 = 60 + 45 = 105$<ruby>人<rt>にん</rt></ruby>。OK！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>割合<rt>わりあい</rt></ruby>の<ruby>増減<rt>ぞうげん</rt></ruby>もよく<ruby>出<rt>で</rt></ruby>るよ。「<ruby>去年<rt>きょねん</rt></ruby>のA<ruby>組<rt>くみ</rt></ruby> $x$ <ruby>人<rt>にん</rt></ruby>・B<ruby>組<rt>くみ</rt></ruby> $y$ <ruby>人<rt>にん</rt></ruby>で<ruby>合計<rt>ごうけい</rt></ruby> 80<ruby>人<rt>にん</rt></ruby>。<ruby>今年<rt>ことし</rt></ruby>はA<ruby>組<rt>くみ</rt></ruby>が 10%<ruby>増<rt>ぞう</rt></ruby>、B<ruby>組<rt>くみ</rt></ruby>が 5%<ruby>減<rt>げん</rt></ruby>で<ruby>全体<rt>ぜんたい</rt></ruby> 2<ruby>人<rt>にん</rt></ruby><ruby>増<rt>ぞう</rt></ruby>。」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '10%<ruby>増<rt>ぞう</rt></ruby>は $0.1x$ <ruby>人増<rt>にんぞう</rt></ruby>えて、5%<ruby>減<rt>げん</rt></ruby>は $0.05y$ <ruby>人減<rt>にんへ</rt></ruby>る…ってことは $0.1x - 0.05y = 2$ か！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>割合<rt>わりあい</rt></ruby>の<ruby>増減<rt>ぞうげん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 80 \\quad \\cdots \\textcircled{1} \\\\ 0.1x - 0.05y = 2 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation: '10%<ruby>増<rt>ぞう</rt></ruby> → $+0.1x$、5%<ruby>減<rt>げん</rt></ruby> → $-0.05y$',
        },
        {
          formula: '$\\textcircled{2} \\times 100: \\quad 10x - 5y = 200 \\quad \\cdots \\textcircled{2}\\prime$',
          animateInsert: true,
          annotation: '100<ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>にする',
        },
        {
          formula: '$\\textcircled{1} \\times 5: \\quad 5x + 5y = 400 \\quad \\cdots \\textcircled{3}$',
          animateInsert: true,
          annotation: '$y$ の<ruby>係数<rt>けいすう</rt></ruby>をそろえる',
        },
        {
          formula: '$\\textcircled{2}\\prime + \\textcircled{3}: \\quad 15x = 600 \\Rightarrow x = 40,\\ y = 40$',
          isResult: true,
          annotation: '<ruby>去年<rt>きょねん</rt></ruby>はどちらも 40<ruby>人<rt>にん</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>検算<rt>けんざん</rt></ruby>: A<ruby>組<rt>くみ</rt></ruby> $40 \\times 1.1 = 44$、B<ruby>組<rt>くみ</rt></ruby> $40 \\times 0.95 = 38$。$44 + 38 = 82 = 80 + 2$。ぴったり！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>割引<rt>わりびき</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>も<ruby>同<rt>おな</rt></ruby>じ<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>！「20%<ruby>引<rt>び</rt></ruby>き」は<ruby>定価<rt>ていか</rt></ruby>の $0.8$ <ruby>倍<rt>ばい</rt></ruby>、「30%<ruby>引<rt>び</rt></ruby>き」は $0.7$ <ruby>倍<rt>ばい</rt></ruby>だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>割合<rt>わりあい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>: 「$x$ の $p$% $= 0.01px$」で<ruby>式<rt>しき</rt></ruby>に。<strong><ruby>小数<rt>しょうすう</rt></ruby>は 10<ruby>倍<rt>ばい</rt></ruby>・100<ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>にする</strong>のがコツ！',
    },

    // ─── チャット内クイズ1 ───
    {
      type: 'quiz',
      question: '<ruby>定価<rt>ていか</rt></ruby> $x$ <ruby>円<rt>えん</rt></ruby>のシャツを 20%<ruby>引<rt>び</rt></ruby>きで<ruby>買<rt>か</rt></ruby>った<ruby>金額<rt>きんがく</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$0.2x$ <ruby>円<rt>えん</rt></ruby>', correct: false },
        { letter: 'B', text: '$0.8x$ <ruby>円<rt>えん</rt></ruby>', correct: true },
        { letter: 'C', text: '$1.2x$ <ruby>円<rt>えん</rt></ruby>', correct: false },
        { letter: 'D', text: '$20x$ <ruby>円<rt>えん</rt></ruby>', correct: false },
      ],
      explanation:
        '20%<ruby>引<rt>び</rt></ruby>き $= (100 - 20) = 80$% $= 0.8$<ruby>倍<rt>ばい</rt></ruby>。$0.8x$ <ruby>円<rt>えん</rt></ruby>が<ruby>正解<rt>せいかい</rt></ruby>！',
    },

    // ─── セクション4: 速さ・時間・距離の問題 ───
    {
      type: 'date',
      text: '<ruby>速<rt>はや</rt></ruby>さ・<ruby>時間<rt>じかん</rt></ruby>・<ruby>距離<rt>きょり</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<span class="keyword"><ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby></span>。「A<ruby>地点<rt>ちてん</rt></ruby>からB<ruby>地点<rt>ちてん</rt></ruby>まで<ruby>行<rt>い</rt></ruby>きは<ruby>時速<rt>じそく</rt></ruby> 4km、<ruby>帰<rt>かえ</rt></ruby>りは<ruby>時速<rt>じそく</rt></ruby> 6km で<ruby>歩<rt>ある</rt></ruby>いた。<ruby>往復<rt>おうふく</rt></ruby>で<ruby>合計<rt>ごうけい</rt></ruby> 5<ruby>時間<rt>じかん</rt></ruby>。<ruby>距離<rt>きょり</rt></ruby>は？」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>って<ruby>苦手<rt>にがて</rt></ruby>…<ruby>何<rt>なに</rt></ruby>を $x$, $y$ にすればいいの？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>行<rt>い</rt></ruby>きの<ruby>時間<rt>じかん</rt></ruby>を $x$ <ruby>時間<rt>じかん</rt></ruby>、<ruby>帰<rt>かえ</rt></ruby>りの<ruby>時間<rt>じかん</rt></ruby>を $y$ <ruby>時間<rt>じかん</rt></ruby>とおこう。<strong><ruby>距離<rt>きょり</rt></ruby> $=$ <ruby>速<rt>はや</rt></ruby>さ $\\times$ <ruby>時間<rt>じかん</rt></ruby></strong> がカギだよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 5 \\quad \\cdots \\textcircled{1} \\\\ 4x = 6y \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>合計時間<rt>ごうけいじかん</rt></ruby>と「<ruby>行<rt>い</rt></ruby>きの<ruby>距離<rt>きょり</rt></ruby> $=$ <ruby>帰<rt>かえ</rt></ruby>りの<ruby>距離<rt>きょり</rt></ruby>」',
        },
        {
          formula: '$\\textcircled{2}: \\quad 2x = 3y \\Rightarrow x = \\dfrac{3y}{2}$',
          animateInsert: true,
          annotation: '②を<ruby>整理<rt>せいり</rt></ruby>',
        },
        {
          formula: '$\\dfrac{3y}{2} + y = 5 \\Rightarrow \\dfrac{5y}{2} = 5 \\Rightarrow y = 2$',
          animateInsert: true,
          annotation: '①に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$x = 3 \\Rightarrow$ <ruby>距離<rt>きょり</rt></ruby> $= 4 \\times 3 = 12$ km',
          isResult: true,
          annotation: '<ruby>確認<rt>かくにん</rt></ruby>: $6 \\times 2 = 12$ km ✓',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>行<rt>い</rt></ruby>きと<ruby>帰<rt>かえ</rt></ruby>りの<ruby>距離<rt>きょり</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じっていう<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うんだ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もう1<ruby>問<rt>もん</rt></ruby>。「<ruby>家<rt>いえ</rt></ruby>から<ruby>公園<rt>こうえん</rt></ruby>まで<ruby>分速<rt>ぷんそく</rt></ruby> 60m、<ruby>公園<rt>こうえん</rt></ruby>から<ruby>駅<rt>えき</rt></ruby>まで<ruby>分速<rt>ぷんそく</rt></ruby> 80m で<ruby>歩<rt>ある</rt></ruby>き、<ruby>合計<rt>ごうけい</rt></ruby> 18<ruby>分<rt>ぷん</rt></ruby>。<ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>道<rt>みち</rt></ruby>のりは 1200m。」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>今度<rt>こんど</rt></ruby>は<ruby>距離<rt>きょり</rt></ruby>を $x$, $y$ にして…<ruby>時間<rt>じかん</rt></ruby>は $\\dfrac{x}{60} + \\dfrac{y}{80} = 18$ だ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>道<rt>みち</rt></ruby>のりの<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 1200 \\quad \\cdots \\textcircled{1} \\\\ \\dfrac{x}{60} + \\dfrac{y}{80} = 18 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation: '<ruby>距離<rt>きょり</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>',
        },
        {
          formula: '$\\textcircled{2} \\times 240: \\quad 4x + 3y = 4320 \\quad \\cdots \\textcircled{2}\\prime$',
          animateInsert: true,
          annotation: '<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby> 240 を<ruby>掛<rt>か</rt></ruby>ける',
        },
        {
          formula: '$\\textcircled{1} \\times 3: \\quad 3x + 3y = 3600$',
          animateInsert: true,
          annotation: '$y$ の<ruby>係数<rt>けいすう</rt></ruby>をそろえる',
        },
        {
          formula: '$\\textcircled{2}\\prime - \\textcircled{3}: \\quad x = 720,\\ y = 480$',
          isResult: true,
          annotation: '<ruby>家<rt>いえ</rt></ruby>→<ruby>公園<rt>こうえん</rt></ruby> 720m、<ruby>公園<rt>こうえん</rt></ruby>→<ruby>駅<rt>えき</rt></ruby> 480m',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>分数<rt>ぶんすう</rt></ruby>が<ruby>出<rt>で</rt></ruby>てきても、<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>掛<rt>か</rt></ruby>ければ<ruby>整数<rt>せいすう</rt></ruby>にできるんだね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>: <strong><ruby>距離<rt>きょり</rt></ruby> $=$ <ruby>速<rt>はや</rt></ruby>さ $\\times$ <ruby>時間<rt>じかん</rt></ruby></strong> で<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てよう。<ruby>行<rt>い</rt></ruby>き<ruby>帰<rt>かえ</rt></ruby>りは<ruby>距離<rt>きょり</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ！<ruby>分数<rt>ぶんすう</rt></ruby>は<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>掛<rt>か</rt></ruby>けて<ruby>整数<rt>せいすう</rt></ruby>に！',
    },

    // ─── チャット内クイズ2 ───
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
        'ケーキ $x$<ruby>個<rt>こ</rt></ruby>、プリン $y$<ruby>個<rt>こ</rt></ruby>。$x + y = 6$、$300x + 200y = 1400$。$\\textcircled{2} \\div 100$: $3x + 2y = 14$。$\\textcircled{1} \\times 2$: $2x + 2y = 12$。<ruby>引<rt>ひ</rt></ruby>くと $x = \\textcolor{#D97706}{2}$。',
    },

    // ─── セクション5: 食塩水の濃度の問題 ───
    {
      type: 'date',
      text: '<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>濃度<rt>のうど</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>は<span class="keyword"><ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>濃度<rt>のうど</rt></ruby></span>の<ruby>問題<rt>もんだい</rt></ruby>。<ruby>苦手<rt>にがて</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いけど、<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>はシンプルだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>食塩水<rt>しょくえんすい</rt></ruby>って<ruby>濃度<rt>のうど</rt></ruby>とか<ruby>重<rt>おも</rt></ruby>さとか、<ruby>何<rt>なに</rt></ruby>に<ruby>注目<rt>ちゅうもく</rt></ruby>すればいいの？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>大事<rt>だいじ</rt></ruby>なのは<strong>「<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>」に<ruby>着目<rt>ちゃくもく</rt></ruby>する</strong>こと！<ruby>混<rt>ま</rt></ruby>ぜる<ruby>前<rt>まえ</rt></ruby>と<ruby>後<rt>あと</rt></ruby>で、<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>は<ruby>変<rt>か</rt></ruby>わらないんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>',
      steps: [
        {
          formula: '<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby> $=$ <ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>量<rt>りょう</rt></ruby> $\\times \\dfrac{\\text{<ruby>濃度<rt>のうど</rt></ruby>(%)}}{100}$',
          annotation: 'これが<ruby>基本公式<rt>きほんこうしき</rt></ruby>！',
        },
        {
          formula: '<ruby>例<rt>れい</rt></ruby>: 5%の<ruby>食塩水<rt>しょくえんすい</rt></ruby> 200g → <ruby>食塩<rt>しょくえん</rt></ruby> $= 200 \\times 0.05 = 10$ g',
          animateInsert: true,
          annotation: '<ruby>具体例<rt>ぐたいれい</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'では<ruby>問題<rt>もんだい</rt></ruby>。「5%の<ruby>食塩水<rt>しょくえんすい</rt></ruby> $x$ g と 10%の<ruby>食塩水<rt>しょくえんすい</rt></ruby> $y$ g を<ruby>混<rt>ま</rt></ruby>ぜて、8%の<ruby>食塩水<rt>しょくえんすい</rt></ruby> 400g を<ruby>作<rt>つく</rt></ruby>った。」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>で1<ruby>式<rt>しき</rt></ruby>、<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>でもう1<ruby>式<rt>しき</rt></ruby>だね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 400 \\quad \\cdots \\textcircled{1} \\\\ 0.05x + 0.10y = 0.08 \\times 400 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation: '<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>と<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>',
        },
        {
          formula: '$\\textcircled{2}: \\quad 0.05x + 0.10y = 32$',
          animateInsert: true,
          annotation: '<ruby>右辺<rt>うへん</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>',
        },
        {
          formula: '$\\textcircled{2} \\times 100: \\quad 5x + 10y = 3200 \\quad \\cdots \\textcircled{2}\\prime$',
          animateInsert: true,
          annotation: '100<ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>にする',
        },
        {
          formula: '$\\textcircled{1} \\times 5: \\quad 5x + 5y = 2000$',
          animateInsert: true,
          annotation: '$x$ の<ruby>係数<rt>けいすう</rt></ruby>をそろえる',
        },
        {
          formula: '$\\textcircled{2}\\prime - \\textcircled{3}: \\quad 5y = 1200 \\Rightarrow y = 240,\\ x = 160$',
          isResult: true,
          annotation: '5%が 160g、10%が 240g',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>検算<rt>けんざん</rt></ruby>: <ruby>食塩<rt>しょくえん</rt></ruby> $= 160 \\times 0.05 + 240 \\times 0.10 = 8 + 24 = 32$ g。<ruby>濃度<rt>のうど</rt></ruby> $= \\dfrac{32}{400} \\times 100 = 8$%。OK！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>のポイントは、<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>に<ruby>注目<rt>ちゅうもく</rt></ruby>して $\\dfrac{\\text{<ruby>濃度<rt>のうど</rt></ruby>}}{100} \\times \\text{<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>}$ で<ruby>式<rt>しき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ることだね。',
    },
    {
      type: 'summary-point',
      text: '<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>: <strong><ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby> $=$ <ruby>食塩水<rt>しょくえんすい</rt></ruby> $\\times$ $\\dfrac{\\text{<ruby>濃度<rt>のうど</rt></ruby>}}{100}$</strong>。<ruby>混<rt>ま</rt></ruby>ぜる<ruby>前後<rt>ぜんご</rt></ruby>で<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>は<ruby>変<rt>か</rt></ruby>わらない！',
    },

    // ─── チャット内クイズ3 ───
    {
      type: 'quiz',
      question: '5%の<ruby>食塩水<rt>しょくえんすい</rt></ruby> 200g に<ruby>含<rt>ふく</rt></ruby>まれる<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>は<ruby>何<rt>なん</rt></ruby> g？',
      options: [
        { letter: 'A', text: '5 g', correct: false },
        { letter: 'B', text: '10 g', correct: true },
        { letter: 'C', text: '20 g', correct: false },
        { letter: 'D', text: '100 g', correct: false },
      ],
      explanation:
        '$200 \\times \\dfrac{5}{100} = 200 \\times 0.05 = \\textcolor{#D97706}{10}$ g。<ruby>濃度<rt>のうど</rt></ruby>を 100 で<ruby>割<rt>わ</rt></ruby>って<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>に<ruby>掛<rt>か</rt></ruby>けるだけ！',
    },

    // ─── まとめ ───
    {
      type: 'end',
      points: [
        '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>はまず「<ruby>何<rt>なに</rt></ruby>を $x$, $y$ にするか」を<ruby>決<rt>き</rt></ruby>める',
        '<ruby>条件<rt>じょうけん</rt></ruby>を2つ<ruby>見<rt>み</rt></ruby>つけて2つの<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる',
        '<ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>: 「<ruby>個数<rt>こすう</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>」と「<ruby>金額<rt>きんがく</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>」',
        '<ruby>割合<rt>わりあい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>: 「$p$% → $\\times \\dfrac{p}{100}$」で<ruby>式<rt>しき</rt></ruby>に。<ruby>小数<rt>しょうすう</rt></ruby>は10<ruby>倍<rt>ばい</rt></ruby>・100<ruby>倍<rt>ばい</rt></ruby>',
        '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>: 「<ruby>距離<rt>きょり</rt></ruby> $=$ <ruby>速<rt>はや</rt></ruby>さ $\\times$ <ruby>時間<rt>じかん</rt></ruby>」で<ruby>立式<rt>りっしき</rt></ruby>',
        '<ruby>食塩水<rt>しょくえんすい</rt></ruby>: 「<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby> $=$ <ruby>食塩水<rt>しょくえんすい</rt></ruby> $\\times$ $\\dfrac{\\text{<ruby>濃度<rt>のうど</rt></ruby>}}{100}$」',
        '<ruby>解<rt>と</rt></ruby>いた<ruby>後<rt>あと</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず<ruby>元<rt>もと</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>に<ruby>当<rt>あ</rt></ruby>てはめて<ruby>検算<rt>けんざん</rt></ruby>！',
      ],
    },
  ],
};

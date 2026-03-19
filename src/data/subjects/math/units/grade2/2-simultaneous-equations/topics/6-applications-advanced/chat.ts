import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const simulEqAppsAdvChat: HistoryChat = {
  id: 'math-g2-simul-eq-apps-adv',
  icon: '🏃',
  title: '速さ・濃度の文章題をマスターしよう',
  subtitle: '〜中2数学〜 連立方程式の利用（2）',
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
    // ─── セクション1: 速さ・時間・距離の問題 ───
    {
      type: 'date',
      text: '<ruby>速<rt>はや</rt></ruby>さ・<ruby>時間<rt>じかん</rt></ruby>・<ruby>距離<rt>きょり</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って、<ruby>速<rt>はや</rt></ruby>さや<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみよう！<strong>「<ruby>距離<rt>きょり</rt></ruby> $=$ <ruby>速<rt>はや</rt></ruby>さ $\\times$ <ruby>時間<rt>じかん</rt></ruby>」</strong>と<strong>「<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>」</strong>がカギ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span class="keyword"><ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby></span>を<ruby>解<rt>と</rt></ruby>こう。「A<ruby>地点<rt>ちてん</rt></ruby>からB<ruby>地点<rt>ちてん</rt></ruby>まで<ruby>行<rt>い</rt></ruby>きは<ruby>時速<rt>じそく</rt></ruby> 4km、<ruby>帰<rt>かえ</rt></ruby>りは<ruby>時速<rt>じそく</rt></ruby> 6km で<ruby>歩<rt>ある</rt></ruby>いた。<ruby>往復<rt>おうふく</rt></ruby>で<ruby>合計<rt>ごうけい</rt></ruby> 5<ruby>時間<rt>じかん</rt></ruby>。<ruby>距離<rt>きょり</rt></ruby>は？」',
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

    // ─── チャット内クイズ1 ───
    {
      type: 'quiz',
      question: 'A→B を<ruby>時速<rt>じそく</rt></ruby> 4km で $x$ <ruby>時間<rt>じかん</rt></ruby>、B→A を<ruby>時速<rt>じそく</rt></ruby> 6km で $y$ <ruby>時間<rt>じかん</rt></ruby>。<ruby>行<rt>い</rt></ruby>きと<ruby>帰<rt>かえ</rt></ruby>りの<ruby>距離<rt>きょり</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じとき、<ruby>式<rt>しき</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$4x + 6y = 0$', correct: false },
        { letter: 'B', text: '$4x = 6y$', correct: true },
        { letter: 'C', text: '$4x - 6y = 1$', correct: false },
        { letter: 'D', text: '$\\dfrac{x}{4} = \\dfrac{y}{6}$', correct: false },
      ],
      explanation:
        '<ruby>行<rt>い</rt></ruby>きの<ruby>距離<rt>きょり</rt></ruby> $= 4x$、<ruby>帰<rt>かえ</rt></ruby>りの<ruby>距離<rt>きょり</rt></ruby> $= 6y$。\n<ruby>距離<rt>きょり</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じなので $4x = \\textcolor{#D97706}{6y}$。',
    },

    // ─── セクション2: 食塩水の濃度の問題 ───
    {
      type: 'date',
      text: '<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>濃度<rt>のうど</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<span class="keyword"><ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>濃度<rt>のうど</rt></ruby></span>の<ruby>問題<rt>もんだい</rt></ruby>。<ruby>苦手<rt>にがて</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いけど、<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>はシンプルだよ！',
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

    // ─── チャット内クイズ2 ───
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
        '$200 \\times \\dfrac{5}{100} = 200 \\times 0.05 = \\textcolor{#D97706}{10}$ g。\n<ruby>濃度<rt>のうど</rt></ruby>を 100 で<ruby>割<rt>わ</rt></ruby>って<ruby>食塩水<rt>しょくえんすい</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>に<ruby>掛<rt>か</rt></ruby>けるだけ！',
    },

    // ─── まとめ ───
    {
      type: 'end',
      points: [
        '<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>: 「<ruby>距離<rt>きょり</rt></ruby> $=$ <ruby>速<rt>はや</rt></ruby>さ $\\times$ <ruby>時間<rt>じかん</rt></ruby>」で<ruby>立式<rt>りっしき</rt></ruby>',
        '<ruby>行<rt>い</rt></ruby>き<ruby>帰<rt>かえ</rt></ruby>りの<ruby>問題<rt>もんだい</rt></ruby>は「<ruby>距離<rt>きょり</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ」を<ruby>利用<rt>りよう</rt></ruby>',
        '<ruby>分数<rt>ぶんすう</rt></ruby>は<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>を<ruby>掛<rt>か</rt></ruby>けて<ruby>整数<rt>せいすう</rt></ruby>に',
        '<ruby>食塩水<rt>しょくえんすい</rt></ruby>: 「<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby> $=$ <ruby>食塩水<rt>しょくえんすい</rt></ruby> $\\times$ $\\dfrac{\\text{<ruby>濃度<rt>のうど</rt></ruby>}}{100}$」',
        '<ruby>混<rt>ま</rt></ruby>ぜる<ruby>前後<rt>ぜんご</rt></ruby>で<ruby>食塩<rt>しょくえん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>は<ruby>変<rt>か</rt></ruby>わらない',
        '<ruby>小数<rt>しょうすう</rt></ruby>は 100<ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>にするのがコツ',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const calcApplicationsChat: HistoryChat = {
  id: 'math-g3-calc-applications',
  icon: '🧩',
  title: '式の計算の利用をマスターしよう',
  subtitle: '〜中3数学〜 証明と計算の工夫',
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
      text: '<ruby>整数<rt>せいすう</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>を<ruby>証明<rt>しょうめい</rt></ruby>しよう',
    },
    {
      type: 'narrator',
      text: '<ruby>展開<rt>てんかい</rt></ruby>や<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って、<ruby>整数<rt>せいすう</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>を<strong><ruby>証明<rt>しょうめい</rt></ruby></strong>できるよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「<ruby>連続<rt>れんぞく</rt></ruby>する2つの<ruby>奇数<rt>きすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>から2をひいた<ruby>数<rt>かず</rt></ruby>は8の<ruby>倍数<rt>ばいすう</rt></ruby>になる」ことを<ruby>証明<rt>しょうめい</rt></ruby>してみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>整数<rt>せいすう</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>の<ruby>証明<rt>しょうめい</rt></ruby>',
      steps: [
        {
          formula: '<ruby>連続<rt>れんぞく</rt></ruby>する2つの<ruby>奇数<rt>きすう</rt></ruby>: $2n-1, 2n+1$',
          annotation: '$n$ を<ruby>整数<rt>せいすう</rt></ruby>とおく',
        },
        {
          formula: '$(2n-1)^2 + (2n+1)^2 - 2$',
          annotation: '2<ruby>乗<rt>じょう</rt></ruby>の<ruby>和<rt>わ</rt></ruby>から2をひく',
        },
        {
          formula: '$= 4n^2 - 4n + 1 + 4n^2 + 4n + 1 - 2$',
          animateInsert: true,
          annotation: '<ruby>展開<rt>てんかい</rt></ruby>して<ruby>計算<rt>けいさん</rt></ruby>',
        },
        {
          formula: '$= 8n^2$',
          isResult: true,
          animateInsert: true,
          annotation: '$8n^2$ は $8 \\times n^2$ だから <strong>8の<ruby>倍数<rt>ばいすう</rt></ruby></strong>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>展開<rt>てんかい</rt></ruby>したら $-4n$ と $+4n$ が<ruby>打<rt>う</rt></ruby>ち<ruby>消<rt>け</rt></ruby>し<ruby>合<rt>あ</rt></ruby>って、きれいに $8n^2$ になった！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>証明<rt>しょうめい</rt></ruby>のコツは「<ruby>文字<rt>もじ</rt></ruby>でおいて、<ruby>展開<rt>てんかい</rt></ruby>・<ruby>整理<rt>せいり</rt></ruby>する」こと。$○ \\times (<ruby>整数<rt>せいすう</rt></ruby>)$ の<ruby>形<rt>かたち</rt></ruby>にできれば○の<ruby>倍数<rt>ばいすう</rt></ruby>だと<ruby>証明<rt>しょうめい</rt></ruby>できるよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>証明<rt>しょうめい</rt></ruby>の<ruby>手順<rt>てじゅん</rt></ruby>: ①<ruby>文字<rt>もじ</rt></ruby>でおく → ②<ruby>展開<rt>てんかい</rt></ruby>・<ruby>計算<rt>けいさん</rt></ruby> → ③「○×（<ruby>整数<rt>せいすう</rt></ruby>）」の<ruby>形<rt>かたち</rt></ruby>にまとめる',
    },
    {
      type: 'date',
      text: '<ruby>展開<rt>てんかい</rt></ruby>・<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>で<ruby>計算<rt>けいさん</rt></ruby>を<ruby>楽<rt>らく</rt></ruby>に！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>乗法<rt>じょうほう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>えば、<ruby>面倒<rt>めんどう</rt></ruby>な<ruby>計算<rt>けいさん</rt></ruby>も<ruby>暗算<rt>あんざん</rt></ruby>でできるようになるよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>で<ruby>計算<rt>けいさん</rt></ruby>: $35^2 - 25^2$',
      steps: [
        {
          formula: '$35^2 - 25^2$',
          annotation: '$a^2 - b^2 = (a+b)(a-b)$ が<ruby>使<rt>つか</rt></ruby>える！',
        },
        {
          formula: '$= (35 + 25)(35 - 25)$',
          animateInsert: true,
          annotation: '<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>',
        },
        {
          formula: '$= 60 \\times 10 = 600$',
          isResult: true,
          animateInsert: true,
          annotation: 'あっという<ruby>間<rt>ま</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>できた！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$35^2$ と $25^2$ をそれぞれ<ruby>計算<rt>けいさん</rt></ruby>するより<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>楽<rt>らく</rt></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>展開<rt>てんかい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>も<ruby>使<rt>つか</rt></ruby>えるよ。$101^2 = (100+1)^2 = 10000 + 200 + 1 = 10201$ とか。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>展開<rt>てんかい</rt></ruby>で<ruby>計算<rt>けいさん</rt></ruby>: $59 \\times 61$',
      steps: [
        {
          formula: '$59 \\times 61$',
          annotation: '$59 = 60-1$、$61 = 60+1$ と<ruby>考<rt>かんが</rt></ruby>える',
        },
        {
          formula: '$= (60 - 1)(60 + 1)$',
          animateInsert: true,
          annotation: '<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>！',
        },
        {
          formula: '$= 60^2 - 1^2 = 3600 - 1 = 3599$',
          isResult: true,
          animateInsert: true,
          annotation: '$a^2 - b^2$ で<ruby>一瞬<rt>いっしゅん</rt></ruby>！',
        },
      ],
    },
    {
      type: 'quiz',
      question: '$98^2$ を<ruby>公式<rt>こうしき</rt></ruby>で<ruby>計算<rt>けいさん</rt></ruby>するとき、どう<ruby>考<rt>かんが</rt></ruby>える？',
      options: [
        { letter: 'A', text: '$(100-2)^2 = 10000-400+4 = 9604$', correct: true },
        { letter: 'B', text: '$(100+2)^2 = 10000+400+4 = 10404$', correct: false },
        { letter: 'C', text: '$(98+2)(98-2) = 100 \\times 96 = 9600$', correct: false },
        { letter: 'D', text: '$(50-2)^2 = 2500-200+4 = 2304$', correct: false },
      ],
      explanation:
        '$98 = 100-2$ とおいて $(100-2)^2 = 100^2 - 2 \\times 100 \\times 2 + 2^2 = \\textcolor{#D97706}{9604}$',
    },
    {
      type: 'summary-point',
      text: '<ruby>数<rt>かず</rt></ruby>を「きりのいい<ruby>数<rt>かず</rt></ruby>±<ruby>小<rt>ちい</rt></ruby>さい<ruby>数<rt>かず</rt></ruby>」と<ruby>考<rt>かんが</rt></ruby>えて<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>おう！',
    },
    {
      type: 'date',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めるときは、<strong>いきなり<ruby>代入<rt>だいにゅう</rt></ruby>しない</strong>のがコツ！<ruby>先<rt>さき</rt></ruby>に<ruby>式<rt>しき</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>代入<rt>だいにゅう</rt></ruby>するよ。',
    },
    {
      type: 'whiteboard',
      title: '$x=96$ のとき $x^2+8x+16$ の<ruby>値<rt>あたい</rt></ruby>',
      steps: [
        {
          formula: '$x^2 + 8x + 16$',
          annotation: 'いきなり $96$ を<ruby>代入<rt>だいにゅう</rt></ruby>すると<ruby>大変<rt>たいへん</rt></ruby>…',
        },
        {
          formula: '$= (x + 4)^2$',
          animateInsert: true,
          annotation: '<ruby>先<rt>さき</rt></ruby>に<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>！',
        },
        {
          formula: '$= (96 + 4)^2 = 100^2 = 10000$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>すれば<ruby>簡単<rt>かんたん</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$96^2+8 \\times 96+16$ を<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>計算<rt>けいさん</rt></ruby>するより<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>楽<rt>らく</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>展開<rt>てんかい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>もあるよ。$(x+3)(x-6)-x(x-5)$ なら<ruby>展開<rt>てんかい</rt></ruby>して $-3x-18$ にしてから<ruby>代入<rt>だいにゅう</rt></ruby>するのが<ruby>正解<rt>せいかい</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>: <ruby>先<rt>さき</rt></ruby>に<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>or<ruby>展開<rt>てんかい</rt></ruby>で<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>代入<rt>だいにゅう</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>図形<rt>ずけい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>を<ruby>証明<rt>しょうめい</rt></ruby>しよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>は<ruby>図形<rt>ずけい</rt></ruby>への<ruby>応用<rt>おうよう</rt></ruby>！<ruby>長方形<rt>ちょうほうけい</rt></ruby>の<ruby>花壇<rt>かだん</rt></ruby>のまわりに<ruby>幅<rt>はば</rt></ruby> $m$ の<ruby>道<rt>みち</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>、<ruby>道<rt>みち</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby> $S$ は<ruby>道<rt>みち</rt></ruby>の<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る<ruby>線<rt>せん</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さ $\\ell$ を<ruby>使<rt>つか</rt></ruby>って $S = m\\ell$ と<ruby>表<rt>あらわ</rt></ruby>せるんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>道<rt>みち</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby>: $S = m\\ell$ の<ruby>証明<rt>しょうめい</rt></ruby>',
      steps: [
        {
          formula: '$S = (x+2m)(y+2m) - xy$',
          annotation: '<ruby>大<rt>おお</rt></ruby>きい<ruby>長方形<rt>ちょうほうけい</rt></ruby>−<ruby>花壇<rt>かだん</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby>',
        },
        {
          formula: '$= xy + 2mx + 2my + 4m^2 - xy$',
          animateInsert: true,
          annotation: '<ruby>展開<rt>てんかい</rt></ruby>して $xy$ が<ruby>消<rt>き</rt></ruby>える',
        },
        {
          formula: '$= 2m(x + y + 2m)$',
          annotation: '$2m$ をくくり<ruby>出<rt>だ</rt></ruby>す',
        },
        {
          formula: '$\\ell = 2(x+m) + 2(y+m) = 2x+2y+4m$ なので $x+y+2m = \\frac{\\ell}{2}$',
          annotation: '<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>線<rt>せん</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さを<ruby>使<rt>つか</rt></ruby>う',
        },
        {
          formula: '$S = 2m \\times \\frac{\\ell}{2} = m\\ell$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>道<rt>みち</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby> = <ruby>幅<rt>はば</rt></ruby> × <ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さ',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>展開<rt>てんかい</rt></ruby>と<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うと、<ruby>図形<rt>ずけい</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>まで<ruby>証明<rt>しょうめい</rt></ruby>できるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>は<ruby>道具<rt>どうぐ</rt></ruby>。<ruby>数<rt>かず</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>にも<ruby>図形<rt>ずけい</rt></ruby>にも<ruby>使<rt>つか</rt></ruby>える<ruby>万能<rt>ばんのう</rt></ruby>な<ruby>道具<rt>どうぐ</rt></ruby>だよ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>図形<rt>ずけい</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby>を<ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>して<ruby>展開<rt>てんかい</rt></ruby>・<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すれば<ruby>性質<rt>せいしつ</rt></ruby>を<ruby>証明<rt>しょうめい</rt></ruby>できる！',
    },
    {
      type: 'end',
      points: [
        '<ruby>整数<rt>せいすう</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>: <ruby>文字<rt>もじ</rt></ruby>でおいて<ruby>展開<rt>てんかい</rt></ruby>し「○×（<ruby>整数<rt>せいすう</rt></ruby>）」にする',
        '<ruby>数<rt>かず</rt></ruby>の<ruby>計算<rt>けいさん</rt></ruby>: $a^2-b^2=(a+b)(a-b)$ や $(a\\pm b)^2$ を<ruby>利用<rt>りよう</rt></ruby>',
        '<ruby>式<rt>しき</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>: <ruby>先<rt>さき</rt></ruby>に<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>/<ruby>展開<rt>てんかい</rt></ruby>で<ruby>簡単<rt>かんたん</rt></ruby>にしてから<ruby>代入<rt>だいにゅう</rt></ruby>',
        '<ruby>図形<rt>ずけい</rt></ruby>: <ruby>面積<rt>めんせき</rt></ruby>を<ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>して<ruby>展開<rt>てんかい</rt></ruby>・<ruby>整理<rt>せいり</rt></ruby>',
      ],
    },
  ],
};

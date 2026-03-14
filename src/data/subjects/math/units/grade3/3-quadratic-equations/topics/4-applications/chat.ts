import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const quadEqAppsChat: HistoryChat = {
  id: 'math-g3-quad-eq-apps',
  icon: '📋',
  title: '二次方程式を使って問題を解こう',
  subtitle: '〜中3数学〜 文章題と図形の問題',
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
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>文章題<rt>ぶんしょうだい</rt></ruby>や<ruby>図形<rt>ずけい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみよう！<ruby>大事<rt>だいじ</rt></ruby>なのは「<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>」だ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>の<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>は<ruby>覚<rt>おぼ</rt></ruby>えたね？<ruby>今日<rt>きょう</rt></ruby>はそれを<ruby>使<rt>つか</rt></ruby>って<ruby>文章問題<rt>ぶんしょうもんだい</rt></ruby>に<ruby>挑戦<rt>ちょうせん</rt></ruby>しよう！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>って<ruby>苦手<rt>にがて</rt></ruby>なんですよね…<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てるのが<ruby>難<rt>むずか</rt></ruby>しくて。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>手順<rt>てじゅん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>れば<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>！3ステップで<ruby>解<rt>と</rt></ruby>けるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>の<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby>3ステップ',
      steps: [
        {
          formula: '① <ruby>求<rt>もと</rt></ruby>めるものを $x$ と<ruby>置<rt>お</rt></ruby>く',
          annotation: '<ruby>何<rt>なに</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めるか<ruby>確認<rt>かくにん</rt></ruby>して<ruby>文字<rt>もじ</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>す',
        },
        {
          formula: '② <ruby>条件<rt>じょうけん</rt></ruby>から<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる',
          annotation: '<ruby>問題文<rt>もんだいぶん</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>を<ruby>式<rt>しき</rt></ruby>にする',
        },
        {
          formula: '③ <ruby>解<rt>と</rt></ruby>いて<ruby>吟味<rt>ぎんみ</rt></ruby>する',
          isResult: true,
          annotation: '<ruby>解<rt>かい</rt></ruby>が<ruby>問題<rt>もんだい</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うか<ruby>確認<rt>かくにん</rt></ruby>！',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>は「$x$ で<ruby>置<rt>お</rt></ruby>く → <ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる → <ruby>解<rt>と</rt></ruby>いて<ruby>吟味<rt>ぎんみ</rt></ruby>」の3ステップ！',
    },
    {
      type: 'date',
      text: '<ruby>数<rt>すう</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>に<ruby>挑戦<rt>ちょうせん</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'じゃあやってみよう！「<ruby>連続<rt>れんぞく</rt></ruby>する2つの<ruby>正<rt>せい</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>の<ruby>積<rt>せき</rt></ruby>が72のとき、その2つの<ruby>整数<rt>せいすう</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めよ」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>小<rt>ちい</rt></ruby>さい<ruby>方<rt>ほう</rt></ruby>を $n$ とすると、<ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>は $n + 1$ ですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！ステップ①はクリア。<ruby>次<rt>つぎ</rt></ruby>は<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>連続<rt>れんぞく</rt></ruby>する<ruby>整数<rt>せいすう</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$n(n + 1) = 72$',
          annotation: '<ruby>積<rt>せき</rt></ruby>が72という<ruby>条件<rt>じょうけん</rt></ruby>から',
        },
        {
          formula: '$n^2 + n - 72 = 0$',
          animateInsert: true,
          annotation: '<ruby>展開<rt>てんかい</rt></ruby>して<ruby>右辺<rt>うへん</rt></ruby>を0に',
        },
        {
          formula: '$(n + 9)(n - 8) = 0$',
          animateInsert: true,
          annotation: 'かけて$-72$、たして$+1$ → $+9$ と $-8$',
        },
        {
          formula: '$n = -9$ または $n = 8$',
          annotation: '<ruby>解<rt>かい</rt></ruby>が2つ<ruby>出<rt>で</rt></ruby>た！',
        },
        {
          formula: '$n = 8$（<ruby>正<rt>せい</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>なので $n = -9$ は<ruby>不適<rt>ふてき</rt></ruby>）',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>吟味<rt>ぎんみ</rt></ruby>：<ruby>正<rt>せい</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>だから $n = 8$ → <ruby>答<rt>こた</rt></ruby>え 8 と 9',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '$n = -9$ は<ruby>問題<rt>もんだい</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わないから<ruby>捨<rt>す</rt></ruby>てるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！これが「<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>」だよ。<ruby>方程式<rt>ほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>がそのまま<ruby>答<rt>こた</rt></ruby>えとは<ruby>限<rt>かぎ</rt></ruby>らないんだ！',
    },
    {
      type: 'date',
      text: '<ruby>図形<rt>ずけい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>に<ruby>挑戦<rt>ちょうせん</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>図形<rt>ずけい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>！「<ruby>長方形<rt>ちょうほうけい</rt></ruby>の<ruby>縦<rt>たて</rt></ruby>が<ruby>横<rt>よこ</rt></ruby>より3cm<ruby>短<rt>みじか</rt></ruby>く、<ruby>面積<rt>めんせき</rt></ruby>が54cm²。<ruby>横<rt>よこ</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さを<ruby>求<rt>もと</rt></ruby>めよ」',
    },
    {
      type: 'whiteboard',
      title: '<ruby>長方形<rt>ちょうほうけい</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '<ruby>横<rt>よこ</rt></ruby> $= x$ cm、<ruby>縦<rt>たて</rt></ruby> $= (x - 3)$ cm',
          annotation: '<ruby>横<rt>よこ</rt></ruby>を $x$ と<ruby>置<rt>お</rt></ruby>く。<ruby>縦<rt>たて</rt></ruby>は3cm<ruby>短<rt>みじか</rt></ruby>い',
        },
        {
          formula: '$x(x - 3) = 54$',
          animateInsert: true,
          annotation: '<ruby>面積<rt>めんせき</rt></ruby> = <ruby>縦<rt>たて</rt></ruby> $\\times$ <ruby>横<rt>よこ</rt></ruby> $= 54$',
        },
        {
          formula: '$x^2 - 3x - 54 = 0$',
          animateInsert: true,
          annotation: '<ruby>展開<rt>てんかい</rt></ruby>して<ruby>整理<rt>せいり</rt></ruby>',
        },
        {
          formula: '$(x - 9)(x + 6) = 0$',
          animateInsert: true,
          annotation: 'かけて$-54$、たして$-3$ → $-9$ と $+6$',
        },
        {
          formula: '$x = 9$（<ruby>長<rt>なが</rt></ruby>さなので $x = -6$ は<ruby>不適<rt>ふてき</rt></ruby>）',
          isResult: true,
          annotation: '<ruby>横<rt>よこ</rt></ruby> $= 9$cm、<ruby>縦<rt>たて</rt></ruby> $= 6$cm',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>長<rt>なが</rt></ruby>さは<ruby>負<rt>ふ</rt></ruby>にならないから $x = -6$ は<ruby>捨<rt>す</rt></ruby>てるんですね。<ruby>検算<rt>けんざん</rt></ruby>すると $9 \\times 6 = 54$ で<ruby>合<rt>あ</rt></ruby>ってます！',
    },
    {
      type: 'quiz',
      question: '「ある<ruby>正<rt>せい</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>から、その<ruby>数<rt>すう</rt></ruby>の3<ruby>倍<rt>ばい</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くと10になる」このとき、その<ruby>整数<rt>せいすう</rt></ruby>は？',
      options: [
        { letter: 'A', text: '3', correct: false },
        { letter: 'B', text: '4', correct: false },
        { letter: 'C', text: '5', correct: true },
        { letter: 'D', text: '6', correct: false },
      ],
      explanation:
        '$x^2 - 3x = 10 \\rightarrow x^2 - 3x - 10 = 0 \\rightarrow (x-5)(x+2) = 0$。<ruby>正<rt>せい</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>なので $x = 5$。',
    },
    {
      type: 'summary-point',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れずに！<ruby>長<rt>なが</rt></ruby>さ → <ruby>正<rt>せい</rt></ruby>のみ、<ruby>整数<rt>せいすう</rt></ruby> → <ruby>整数<rt>せいすう</rt></ruby>のみ',
    },
    {
      type: 'end',
      points: [
        '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>は「$x$ で<ruby>置<rt>お</rt></ruby>く → <ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる → <ruby>解<rt>と</rt></ruby>いて<ruby>吟味<rt>ぎんみ</rt></ruby>」',
        '<ruby>連続<rt>れんぞく</rt></ruby>する<ruby>整数<rt>せいすう</rt></ruby> → $n, n+1$ と<ruby>置<rt>お</rt></ruby>く',
        '<ruby>図形<rt>ずけい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>は<ruby>面積<rt>めんせき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる',
        '<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>：<ruby>問題<rt>もんだい</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うか<ruby>必<rt>かなら</rt></ruby>ず<ruby>確認<rt>かくにん</rt></ruby>！',
      ],
    },
  ],
};

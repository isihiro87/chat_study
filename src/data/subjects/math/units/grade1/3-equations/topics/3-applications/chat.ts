import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const eqApplicationsChat: HistoryChat = {
  id: 'math-g1-eq-apps',
  icon: '📝',
  title: '比例式と方程式の利用をマスターしよう',
  subtitle: '〜中1数学〜 文章題を方程式で解く',
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
      text: '<ruby>比例式<rt>ひれいしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>こう',
    },
    {
      type: 'narrator',
      text: '<ruby>比<rt>ひ</rt></ruby>の<ruby>等式<rt>とうしき</rt></ruby>「<ruby>比例式<rt>ひれいしき</rt></ruby>」には<ruby>便利<rt>べんり</rt></ruby>な<ruby>性質<rt>せいしつ</rt></ruby>があるよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「$a : b = c : d$」のように<ruby>比<rt>ひ</rt></ruby>が<ruby>等<rt>ひと</rt></ruby>しいことを<ruby>表<rt>あらわ</rt></ruby>す<ruby>式<rt>しき</rt></ruby>を<strong>「<ruby>比例式<rt>ひれいしき</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>比例式<rt>ひれいしき</rt></ruby>に $x$ が<ruby>入<rt>はい</rt></ruby>っているときは、どうやって<ruby>解<rt>と</rt></ruby>くんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<strong>「<ruby>内項<rt>ないこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby> = <ruby>外項<rt>がいこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby>」</strong>を<ruby>使<rt>つか</rt></ruby>うんだ。$a : b = c : d$ なら $ad = bc$ が<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>比例式<rt>ひれいしき</rt></ruby>の<ruby>性質<rt>せいしつ</rt></ruby>',
      steps: [
        {
          formula: '$a : b = c : d$',
          annotation: '$b$ と $c$ が<ruby>内項<rt>ないこう</rt></ruby>、$a$ と $d$ が<ruby>外項<rt>がいこう</rt></ruby>',
        },
        {
          formula: '$\\textcolor{#D97706}{ad = bc}$',
          annotation: '<ruby>内項<rt>ないこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby> = <ruby>外項<rt>がいこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby>',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'じゃあ<ruby>例題<rt>れいだい</rt></ruby>！ $2 : 5 = 6 : x$ を<ruby>解<rt>と</rt></ruby>いてみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>比例式<rt>ひれいしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$2 : 5 = 6 : x$',
          annotation: '<ruby>内項<rt>ないこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby> = <ruby>外項<rt>がいこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>おう',
        },
        {
          formula: '$2 \\times x = 5 \\times 6$',
          annotation: '$2x = 30$',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{x = 15}$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を 2 で<ruby>割<rt>わ</rt></ruby>る',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>確<rt>たし</rt></ruby>かめ: $2 : 5 = 6 : 15$。$\\dfrac{2}{5} = \\dfrac{6}{15} = 0.4$ ✓ <ruby>合<rt>あ</rt></ruby>ってる！',
    },
    {
      type: 'summary-point',
      text: '<ruby>比例式<rt>ひれいしき</rt></ruby> $a : b = c : d$ → $\\textcolor{#D97706}{ad = bc}$ で<ruby>方程式<rt>ほうていしき</rt></ruby>に<ruby>変換<rt>へんかん</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '<ruby>比例式<rt>ひれいしき</rt></ruby> $x : 6 = 4 : 3$ の $x$ は？',
      options: [
        { letter: 'A', text: '$x = 2$', correct: false },
        { letter: 'B', text: '$x = 8$', correct: true },
        { letter: 'C', text: '$x = 18$', correct: false },
        { letter: 'D', text: '$x = 72$', correct: false },
      ],
      explanation:
        '<ruby>内項<rt>ないこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby> = <ruby>外項<rt>がいこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby>で $3x = 24$。$x = \\textcolor{#D97706}{8}$ だよ。',
    },
    {
      type: 'date',
      text: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>に<ruby>挑戦<rt>ちょうせん</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>えば<ruby>文章題<rt>ぶんしょうだい</rt></ruby>もバッチリ<ruby>解<rt>と</rt></ruby>ける！コツは <strong>4 ステップ</strong>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>の<ruby>解<rt>と</rt></ruby>き<ruby>方<rt>かた</rt></ruby> 4 ステップ',
      steps: [
        {
          formula: '①  <ruby>求<rt>もと</rt></ruby>めたいものを $x$ とおく',
          annotation: '「<ruby>何<rt>なに</rt></ruby>を $x$ にするか」を<ruby>決<rt>き</rt></ruby>めよう',
        },
        {
          formula: '②  <ruby>問題<rt>もんだい</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>から<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる',
          annotation: '「<ruby>等<rt>ひと</rt></ruby>しい<ruby>関係<rt>かんけい</rt></ruby>」を<ruby>見<rt>み</rt></ruby>つけるのがカギ',
          animateInsert: true,
        },
        {
          formula: '③  <ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>く',
          annotation: '<ruby>移項<rt>いこう</rt></ruby> → $ax = b$ → $x = \\dfrac{b}{a}$',
          animateInsert: true,
        },
        {
          formula: '④  <ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>',
          annotation: '<ruby>答<rt>こた</rt></ruby>えが<ruby>問題<rt>もんだい</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うか<ruby>確<rt>たし</rt></ruby>かめる',
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>をやってみよう！「1<ruby>本<rt>ぽん</rt></ruby> 120<ruby>円<rt>えん</rt></ruby>の<ruby>鉛筆<rt>えんぴつ</rt></ruby>を $x$ <ruby>本<rt>ほん</rt></ruby><ruby>買<rt>か</rt></ruby>い、50<ruby>円<rt>えん</rt></ruby>の<ruby>消<rt>け</rt></ruby>しゴムを 1<ruby>個<rt>こ</rt></ruby><ruby>買<rt>か</rt></ruby>ったら<ruby>合計<rt>ごうけい</rt></ruby> 530<ruby>円<rt>えん</rt></ruby>でした。」',
    },
    {
      type: 'whiteboard',
      title: '<ruby>代金<rt>だいきん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$120x + 50 = 530$',
          annotation: '（<ruby>鉛筆<rt>えんぴつ</rt></ruby>の<ruby>代金<rt>だいきん</rt></ruby>）+（<ruby>消<rt>け</rt></ruby>しゴム）=（<ruby>合計<rt>ごうけい</rt></ruby>）',
        },
        {
          formula: '$120x = 530 - 50 = 480$',
          annotation: '$50$ を<ruby>移項<rt>いこう</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{x = 4}$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>を 120 で<ruby>割<rt>わ</rt></ruby>る → <ruby>鉛筆<rt>えんぴつ</rt></ruby> 4<ruby>本<rt>ほん</rt></ruby>',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>確<rt>たし</rt></ruby>かめ: $120 \\times 4 + 50 = 480 + 50 = 530$ ✓',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は「<ruby>過不足<rt>かふそく</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>」だよ。「みかんを 1<ruby>人<rt>り</rt></ruby> 5<ruby>個<rt>こ</rt></ruby>ずつ<ruby>配<rt>くば</rt></ruby>ると 3<ruby>個<rt>こ</rt></ruby><ruby>余<rt>あま</rt></ruby>り、6<ruby>個<rt>こ</rt></ruby>ずつ<ruby>配<rt>くば</rt></ruby>ると 4<ruby>個<rt>こ</rt></ruby><ruby>足<rt>た</rt></ruby>りない。<ruby>子<rt>こ</rt></ruby>どもの<ruby>人数<rt>にんずう</rt></ruby>は？」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>人数<rt>にんずう</rt></ruby>を $x$ <ruby>人<rt>にん</rt></ruby>とすると…みかんの<ruby>総数<rt>そうすう</rt></ruby>を 2<ruby>通<rt>とお</rt></ruby>りで<ruby>表<rt>あらわ</rt></ruby>せるんですね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>過不足<rt>かふそく</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$5x + 3 = 6x - 4$',
          annotation: 'みかんの<ruby>総数<rt>そうすう</rt></ruby>を 2<ruby>通<rt>とお</rt></ruby>りで<ruby>表<rt>あらわ</rt></ruby>して<ruby>等式<rt>とうしき</rt></ruby>にする',
        },
        {
          formula: '$5x - 6x = -4 - 3$',
          annotation: '$x$ の<ruby>項<rt>こう</rt></ruby>を<ruby>左辺<rt>さへん</rt></ruby>、<ruby>数<rt>かず</rt></ruby>の<ruby>項<rt>こう</rt></ruby>を<ruby>右辺<rt>うへん</rt></ruby>に<ruby>移項<rt>いこう</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$-x = -7$',
          annotation: '<ruby>整理<rt>せいり</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$\\textcolor{#D97706}{x = 7}$',
          annotation: '<ruby>両辺<rt>りょうへん</rt></ruby>に $-1$ をかける → 7<ruby>人<rt>にん</rt></ruby>',
          isResult: true,
          animateInsert: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>もしよう！ $x = 7$ → みかんは $5(7)+3=38$<ruby>個<rt>こ</rt></ruby>。$6(7)-4=38$ ✓。<ruby>人数<rt>にんずう</rt></ruby>が<ruby>正<rt>せい</rt></ruby>の<ruby>整数<rt>せいすう</rt></ruby>なのも OK！',
    },
    {
      type: 'date',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>」って、なぜ<ruby>必要<rt>ひつよう</rt></ruby>なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>いて<ruby>出<rt>で</rt></ruby>た<ruby>答<rt>こた</rt></ruby>えが、<ruby>問題<rt>もんだい</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わないこともあるんだ。たとえば「<ruby>人数<rt>にんずう</rt></ruby>」なのに $x = -3$ が<ruby>出<rt>で</rt></ruby>たら…',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>人数<rt>にんずう</rt></ruby>がマイナスはありえないですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そういうこと！だから<ruby>必<rt>かなら</rt></ruby>ず<ruby>最後<rt>さいご</rt></ruby>に「この<ruby>答<rt>こた</rt></ruby>えは<ruby>問題<rt>もんだい</rt></ruby>に<ruby>合<rt>あ</rt></ruby>っているか？」を<ruby>確認<rt>かくにん</rt></ruby>しよう。これが<strong>「<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>」</strong>だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>は ① $x$ を<ruby>決<rt>き</rt></ruby>める → ② <ruby>立式<rt>りっしき</rt></ruby> → ③ <ruby>解<rt>と</rt></ruby>く → ④ <ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>。<ruby>最後<rt>さいご</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れずに！',
    },
    {
      type: 'quiz',
      question: '<ruby>比例式<rt>ひれいしき</rt></ruby> $3 : 4 = x : 12$ の $x$ は？',
      options: [
        { letter: 'A', text: '$x = 9$', correct: true },
        { letter: 'B', text: '$x = 8$', correct: false },
        { letter: 'C', text: '$x = 16$', correct: false },
        { letter: 'D', text: '$x = 36$', correct: false },
      ],
      explanation:
        '<ruby>内項<rt>ないこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby> = <ruby>外項<rt>がいこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby>より $3 \\times 12 = 4x$。\n$36 = 4x$、$x = \\textcolor{#D97706}{9}$。',
    },
    {
      type: 'end',
      points: [
        '<ruby>比例式<rt>ひれいしき</rt></ruby>：$a : b = c : d$ → $ad = bc$（<ruby>内項<rt>ないこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby> = <ruby>外項<rt>がいこう</rt></ruby>の<ruby>積<rt>せき</rt></ruby>）',
        '<ruby>文章題<rt>ぶんしょうだい</rt></ruby>の4ステップ：① $x$ を<ruby>決<rt>き</rt></ruby>める ② <ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる ③ <ruby>解<rt>と</rt></ruby>く ④ <ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>',
        '<ruby>代金<rt>だいきん</rt></ruby>・<ruby>過不足<rt>かふそく</rt></ruby>・<ruby>速<rt>はや</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>は、<ruby>等<rt>ひと</rt></ruby>しい<ruby>関係<rt>かんけい</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけて<ruby>立式<rt>りっしき</rt></ruby>',
        '<ruby>解<rt>かい</rt></ruby>の<ruby>吟味<rt>ぎんみ</rt></ruby>：<ruby>求<rt>もと</rt></ruby>めた<ruby>解<rt>かい</rt></ruby>が<ruby>問題<rt>もんだい</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うか<ruby>必<rt>かなら</rt></ruby>ず<ruby>確認<rt>かくにん</rt></ruby>する',
      ],
    },
  ],
};

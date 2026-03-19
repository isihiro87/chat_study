import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const equationsAndGraphsChat: HistoryChat = {
  id: 'math-g2-eq-and-graphs',
  icon: '✖️',
  title: '方程式とグラフの関係',
  subtitle: '〜中2数学〜 2直線の交点＝連立方程式の解',
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
      text: 'ax + by = c のグラフ',
    },
    {
      type: 'narrator',
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>のグラフと<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>を<ruby>見<rt>み</rt></ruby>ていこう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '2x + y = 6 のような<ruby>式<rt>しき</rt></ruby>もグラフにできるよ。まずは y = の<ruby>形<rt>かたち</rt></ruby>に<ruby>変形<rt>へんけい</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: 'ax + by = c を<ruby>変形<rt>へんけい</rt></ruby>',
      steps: [
        {
          formula: '$2x + y = 6$',
          annotation: '$y =$ の<ruby>形<rt>かたち</rt></ruby>にしたい！',
        },
        {
          formula: '$y = -2x + 6$',
          animateInsert: true,
          annotation: '$2x$ を<ruby>移項<rt>いこう</rt></ruby>！ <ruby>傾<rt>かたむ</rt></ruby>き $-2$、<ruby>切片<rt>せっぺん</rt></ruby> $6$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'y = の<ruby>形<rt>かたち</rt></ruby>にすれば、いつもの<ruby>一次関数<rt>いちじかんすう</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じですね！',
    },
    {
      type: 'summary-point',
      text: 'ax + by = c → y = の<ruby>形<rt>かたち</rt></ruby>に<ruby>変形<rt>へんけい</rt></ruby>すれば<ruby>一次関数<rt>いちじかんすう</rt></ruby>のグラフとしてかける！',
    },
    {
      type: 'date',
      text: 'y = k と x = h のグラフ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>特別<rt>とくべつ</rt></ruby>なグラフも<ruby>覚<rt>おぼ</rt></ruby>えておこう！ y = 3 ってどんなグラフだと<ruby>思<rt>おも</rt></ruby>う？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'y がいつでも 3 ってことは… x が<ruby>何<rt>なん</rt></ruby>でも y = 3 だから、<ruby>横<rt>よこ</rt></ruby>にまっすぐ？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>正解<rt>せいかい</rt></ruby>！ y = 3 は x <ruby>軸<rt>じく</rt></ruby>に<ruby>平行<rt>へいこう</rt></ruby>な<ruby>横<rt>よこ</rt></ruby>の<ruby>直線<rt>ちょくせん</rt></ruby>だ。<ruby>同<rt>おな</rt></ruby>じように x = 2 は y <ruby>軸<rt>じく</rt></ruby>に<ruby>平行<rt>へいこう</rt></ruby>な<ruby>縦<rt>たて</rt></ruby>の<ruby>直線<rt>ちょくせん</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>特別<rt>とくべつ</rt></ruby>なグラフ',
      steps: [
        {
          formula: '$y = 3$ → $x$ <ruby>軸<rt>じく</rt></ruby>に<ruby>平行<rt>へいこう</rt></ruby>な<ruby>横<rt>よこ</rt></ruby>の<ruby>直線<rt>ちょくせん</rt></ruby>',
          annotation: '$y$ <ruby>座標<rt>ざひょう</rt></ruby>がいつでも $3$',
        },
        {
          formula: '$x = 2$ → $y$ <ruby>軸<rt>じく</rt></ruby>に<ruby>平行<rt>へいこう</rt></ruby>な<ruby>縦<rt>たて</rt></ruby>の<ruby>直線<rt>ちょくせん</rt></ruby>',
          annotation: '$x$ <ruby>座標<rt>ざひょう</rt></ruby>がいつでも $2$',
        },
      ],
    },
    {
      type: 'summary-point',
      text: 'y = k は<ruby>横<rt>よこ</rt></ruby>の<ruby>直線<rt>ちょくせん</rt></ruby>、x = h は<ruby>縦<rt>たて</rt></ruby>の<ruby>直線<rt>ちょくせん</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>交点<rt>こうてん</rt></ruby>＝<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: 'ここからが<ruby>一番<rt>いちばん</rt></ruby><ruby>大事<rt>だいじ</rt></ruby>！ 2つの<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>と<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>だ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'y = x + 1 と y = -x + 5 のグラフを<ruby>考<rt>かんが</rt></ruby>えてみよう。この2つの<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>はどこかな？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>交点<rt>こうてん</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めよう',
      steps: [
        {
          formula: '$y = x + 1$ と $y = -x + 5$',
          annotation: '<ruby>交点<rt>こうてん</rt></ruby>では2つの $y$ が<ruby>等<rt>ひと</rt></ruby>しい！',
        },
        {
          formula: '$x + 1 = -x + 5$',
          animateInsert: true,
          annotation: '$y$ を<ruby>消去<rt>しょうきょ</rt></ruby>して $x$ だけの<ruby>式<rt>しき</rt></ruby>に',
        },
        {
          formula: '$2x = 4 \\rightarrow x = 2$',
          animateInsert: true,
          annotation: '<ruby>移項<rt>いこう</rt></ruby>して $x$ を<ruby>求<rt>もと</rt></ruby>める',
        },
        {
          formula: '$y = 2 + 1 = 3$',
          animateInsert: true,
          annotation: '$x = 2$ を<ruby>代入<rt>だいにゅう</rt></ruby>して $y$ を<ruby>求<rt>もと</rt></ruby>める',
        },
        {
          formula: '<ruby>交点<rt>こうてん</rt></ruby> $= \\textcolor{#D97706}{(2, 3)}$',
          isResult: true,
          animateInsert: true,
          annotation: 'これが<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>でもある！',
        },
      ],
    },
    {
      type: 'image',
      src: '/images/math/grade2/two-lines-intersection.svg',
      alt: '2直線の交点',
      caption: '2つの<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>が<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'すごい！ グラフの<ruby>交点<rt>こうてん</rt></ruby>と<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>答<rt>こた</rt></ruby>えって<ruby>同<rt>おな</rt></ruby>じなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！ <strong>2<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby> = <ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby></strong> というのは、<ruby>数学<rt>すうがく</rt></ruby>のとても<ruby>大事<rt>だいじ</rt></ruby>な<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>なんだ！',
    },
    {
      type: 'summary-point',
      text: '2<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>の<ruby>座標<rt>ざひょう</rt></ruby> = <ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>（<ruby>同<rt>おな</rt></ruby>じこと！）',
    },
    {
      type: 'summary-point',
      text: '<ruby>平行<rt>へいこう</rt></ruby>な2<ruby>直線<rt>ちょくせん</rt></ruby>（<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>同<rt>おな</rt></ruby>じ）は<ruby>交<rt>まじ</rt></ruby>わらない → <ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>なし',
    },
    {
      type: 'quiz',
      question: '$y = 2x$ と $y = -x + 6$ の<ruby>交点<rt>こうてん</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$(1, 2)$', correct: false },
        { letter: 'B', text: '$(2, 4)$', correct: true },
        { letter: 'C', text: '$(3, 3)$', correct: false },
        { letter: 'D', text: '$(6, 0)$', correct: false },
      ],
      explanation:
        '$2x = -x + 6 \\rightarrow 3x = 6 \\rightarrow x = 2$。\\n$y = 2 \\times 2 = 4$。\\n<ruby>交点<rt>こうてん</rt></ruby>は $\\textcolor{#D97706}{(2, 4)}$',
    },
    {
      type: 'end',
      points: [
        '$ax + by = c$ は $y =$ の<ruby>形<rt>かたち</rt></ruby>に<ruby>変形<rt>へんけい</rt></ruby>してグラフをかく',
        '$y = k$ は<ruby>横<rt>よこ</rt></ruby>の<ruby>直線<rt>ちょくせん</rt></ruby>、$x = h$ は<ruby>縦<rt>たて</rt></ruby>の<ruby>直線<rt>ちょくせん</rt></ruby>',
        '2<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby> = <ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>の<ruby>解<rt>かい</rt></ruby>',
        '<ruby>平行<rt>へいこう</rt></ruby>な2<ruby>直線<rt>ちょくせん</rt></ruby> → <ruby>交点<rt>こうてん</rt></ruby>なし → <ruby>解<rt>かい</rt></ruby>なし',
      ],
    },
  ],
};

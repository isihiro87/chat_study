import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const linearFuncMeaningChat: HistoryChat = {
  id: 'math-g2-linear-func-meaning',
  icon: '📈',
  title: '一次関数の意味を知ろう',
  subtitle: '〜中2数学〜 y = ax + b の世界へ',
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
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1で<ruby>習<rt>なら</rt></ruby>った<ruby>比例<rt>ひれい</rt></ruby> y = ax をパワーアップ！ <strong>y = ax + b</strong> の<ruby>世界<rt>せかい</rt></ruby>に<ruby>飛<rt>と</rt></ruby>び<ruby>込<rt>こ</rt></ruby>もう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'こんな<ruby>場面<rt>ばめん</rt></ruby>を<ruby>想像<rt>そうぞう</rt></ruby>してみて。<ruby>水<rt>みず</rt></ruby>そうに<ruby>最初<rt>さいしょ</rt></ruby>から <strong>3L</strong> の<ruby>水<rt>みず</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っていて、<ruby>毎分<rt>まいふん</rt></ruby> <strong>2L</strong> ずつ<ruby>水<rt>みず</rt></ruby>を<ruby>入<rt>い</rt></ruby>れるよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えっと、1<ruby>分後<rt>ふんご</rt></ruby>は 3 + 2 = 5L、2<ruby>分後<rt>ふんご</rt></ruby>は 3 + 4 = 7L…ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！ x <ruby>分後<rt>ふんご</rt></ruby>の<ruby>水<rt>みず</rt></ruby>の<ruby>量<rt>りょう</rt></ruby> y を<ruby>式<rt>しき</rt></ruby>にすると…',
    },
    {
      type: 'whiteboard',
      title: '<ruby>水<rt>みず</rt></ruby>そうの<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$y = 2x + 3$',
          animateInsert: true,
          annotation: '<ruby>毎分<rt>まいふん</rt></ruby>2L × x<ruby>分<rt>ふん</rt></ruby> + <ruby>最初<rt>さいしょ</rt></ruby>の3L',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'この y = 2x + 3 のように、<strong>y = ax + b</strong> の<ruby>形<rt>かたち</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>される<ruby>関数<rt>かんすう</rt></ruby>を<strong>「<ruby>一次関数<rt>いちじかんすう</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1でやった<ruby>比例<rt>ひれい</rt></ruby> y = ax とは<ruby>何<rt>なに</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！ <ruby>比例<rt>ひれい</rt></ruby>は y = ax だけど、<ruby>一次関数<rt>いちじかんすう</rt></ruby>は y = ax + <strong>b</strong> だね。b が<ruby>足<rt>た</rt></ruby>されてるのがポイント！ b = 0 なら<ruby>比例<rt>ひれい</rt></ruby>になるから、<ruby>比例<rt>ひれい</rt></ruby>は<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>なんだ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>: y = ax + b（a ≠ 0）。<ruby>比例<rt>ひれい</rt></ruby> y = ax は b = 0 の<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>！',
    },
    {
      type: 'date',
      text: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>最大<rt>さいだい</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>、それは<strong>「<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>」</strong>であること！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さっきの y = 2x + 3 の<ruby>表<rt>ひょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ってみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>を<ruby>調<rt>しら</rt></ruby>べよう',
      steps: [
        {
          formula: '$x$: $0 \\rightarrow 1 \\rightarrow 2 \\rightarrow 3$',
          annotation: '$x$ が 1 ずつ<ruby>増<rt>ふ</rt></ruby>えると…',
        },
        {
          formula: '$y$: $3 \\rightarrow 5 \\rightarrow 7 \\rightarrow 9$',
          animateInsert: true,
          annotation: '$y$ も $\\textcolor{#D97706}{2 ずつ}$<ruby>増<rt>ふ</rt></ruby>えてる！',
        },
        {
          formula: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= y$ の<ruby>増加量<rt>ぞうかりょう</rt></ruby> $\\div$ $x$ の<ruby>増加量<rt>ぞうかりょう</rt></ruby> $= 2 \\div 1 = \\textcolor{#D97706}{2}$',
          isResult: true,
          animateInsert: true,
          annotation: 'いつでも $a = 2$ と<ruby>同<rt>おな</rt></ruby>じ！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'おお！ x がいくつでも、y の<ruby>増<rt>ふ</rt></ruby>え<ruby>方<rt>かた</rt></ruby>はいつも 2 なんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！<ruby>一次関数<rt>いちじかんすう</rt></ruby> y = ax + b の<strong><ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>はいつでも a</strong> なんだ。これが<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>最大<rt>さいだい</rt></ruby>のポイントだよ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> = y の<ruby>増加量<rt>ぞうかりょう</rt></ruby> ÷ x の<ruby>増加量<rt>ぞうかりょう</rt></ruby> = <strong>a</strong>（いつでも<ruby>一定<rt>いってい</rt></ruby>）',
    },
    {
      type: 'quiz',
      question: '$y = -3x + 7$ の<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$7$', correct: false },
        { letter: 'B', text: '$3$', correct: false },
        { letter: 'C', text: '$-3$', correct: true },
        { letter: 'D', text: '$-7$', correct: false },
      ],
      explanation:
        '$y = ax + b$ の<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>は $a$ だよ。$a = \\textcolor{#D97706}{-3}$ だね！',
    },
    {
      type: 'end',
      points: [
        '<ruby>一次関数<rt>いちじかんすう</rt></ruby>は $y = ax + b$（$a \\neq 0$）の<ruby>形<rt>かたち</rt></ruby>',
        '<ruby>比例<rt>ひれい</rt></ruby> $y = ax$ は<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>（$b = 0$）',
        '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= a$ で、いつでも<ruby>一定<rt>いってい</rt></ruby>',
        '<ruby>身<rt>み</rt></ruby>のまわりの<ruby>場面<rt>ばめん</rt></ruby>（<ruby>水<rt>みず</rt></ruby>そうなど）で<ruby>一次関数<rt>いちじかんすう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけよう',
      ],
    },
  ],
};

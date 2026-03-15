import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const addSubChat: HistoryChat = {
  id: 'math-g1-add-sub',
  icon: '➕',
  title: '<ruby>加法<rt>かほう</rt></ruby>と<ruby>減法<rt>げんぽう</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>正負<rt>せいふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>のたし<ruby>算<rt>ざん</rt></ruby>・ひき<ruby>算<rt>ざん</rt></ruby>',
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
      text: '<ruby>同符号<rt>どうふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>正負<rt>せいふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>にはルールがあるよ。まずは<ruby>同<rt>おな</rt></ruby>じ<ruby>符号<rt>ふごう</rt></ruby>どうしの<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>めよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>同<rt>おな</rt></ruby>じ<ruby>符号<rt>ふごう</rt></ruby>どうしの<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>！<ruby>絶対値<rt>ぜったいち</rt></ruby>を<ruby>足<rt>た</rt></ruby>して、<ruby>共通<rt>きょうつう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>をつけるだけだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>同符号<rt>どうふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>',
      steps: [
        {
          formula: '$(+3) + (+5)$',
          annotation: '<ruby>正<rt>せい</rt></ruby> + <ruby>正<rt>せい</rt></ruby>',
        },
        {
          formula: '$= \\textcolor{#D97706}{+(3 + 5)}$',
          annotation: '<ruby>絶対値<rt>ぜったいち</rt></ruby>の<ruby>和<rt>わ</rt></ruby>に<ruby>正<rt>せい</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{+8}$',
          isResult: true,
          annotation: '<ruby>答<rt>こた</rt></ruby>え！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>正<rt>せい</rt></ruby> + <ruby>正<rt>せい</rt></ruby>は<ruby>普通<rt>ふつう</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そうだね！じゃあ<ruby>負<rt>ふ</rt></ruby> + <ruby>負<rt>ふ</rt></ruby>はどうなるかな？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>負<rt>ふ</rt></ruby> + <ruby>負<rt>ふ</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>',
      steps: [
        {
          formula: '$(-3) + (-5)$',
          annotation: '<ruby>負<rt>ふ</rt></ruby> + <ruby>負<rt>ふ</rt></ruby>',
        },
        {
          formula: '$= \\textcolor{#D97706}{-(3 + 5)}$',
          annotation: '<ruby>絶対値<rt>ぜったいち</rt></ruby>の<ruby>和<rt>わ</rt></ruby>に<ruby>負<rt>ふ</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{-8}$',
          isResult: true,
          annotation: '<ruby>借金<rt>しゃっきん</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えるイメージ！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>どうしを<ruby>足<rt>た</rt></ruby>すと、もっとマイナスになるんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>同符号<rt>どうふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>: <ruby>絶対値<rt>ぜったいち</rt></ruby>の<ruby>和<rt>わ</rt></ruby>に<ruby>共通<rt>きょうつう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>をつける。',
    },
    {
      type: 'date',
      text: '<ruby>異符号<rt>いふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>正<rt>せい</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>、<ruby>違<rt>ちが</rt></ruby>う<ruby>符号<rt>ふごう</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>はどうなるかな？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>異<rt>こと</rt></ruby>なる<ruby>符号<rt>ふごう</rt></ruby>の<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>は、<ruby>絶対値<rt>ぜったいち</rt></ruby>の<strong><ruby>差<rt>さ</rt></ruby></strong>を<ruby>求<rt>もと</rt></ruby>めて、<ruby>絶対値<rt>ぜったいち</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>をつけるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>異符号<rt>いふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>',
      steps: [
        {
          formula: '$(+7) + (-3)$',
          annotation: '$|+7| = 7 > |-3| = 3$',
        },
        {
          formula: '$= \\textcolor{#D97706}{+(7 - 3)}$',
          annotation: '<ruby>絶対値<rt>ぜったいち</rt></ruby>の<ruby>差<rt>さ</rt></ruby>に、<ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>（<ruby>正<rt>せい</rt></ruby>）',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{+4}$',
          isResult: true,
          annotation: '',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'じゃあ<ruby>負<rt>ふ</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>絶対値<rt>ぜったいち</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいときは？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>負<rt>ふ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きいとき',
      steps: [
        {
          formula: '$(+3) + (-7)$',
          annotation: '$|-7| = 7 > |+3| = 3$',
        },
        {
          formula: '$= \\textcolor{#D97706}{-(7 - 3)}$',
          annotation: '<ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>は<ruby>負<rt>ふ</rt></ruby>！',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{-4}$',
          isResult: true,
          annotation: '',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>が<ruby>勝<rt>か</rt></ruby>つ、って<ruby>考<rt>かんが</rt></ruby>えるとわかりやすい！',
    },
    {
      type: 'summary-point',
      text: '<ruby>異符号<rt>いふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>: <ruby>絶対値<rt>ぜったいち</rt></ruby>の<ruby>差<rt>さ</rt></ruby>に、<ruby>絶対値<rt>ぜったいち</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>をつける。',
    },
    {
      type: 'date',
      text: '<ruby>減法<rt>げんぽう</rt></ruby>を<ruby>加法<rt>かほう</rt></ruby>に<ruby>変換<rt>へんかん</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>引<rt>ひ</rt></ruby>き<ruby>算<rt>ざん</rt></ruby>は<ruby>足<rt>た</rt></ruby>し<ruby>算<rt>ざん</rt></ruby>に<ruby>変<rt>か</rt></ruby>えるのがコツ！ひく<ruby>数<rt>かず</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えるだけ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>減法<rt>げんぽう</rt></ruby>（ひき<ruby>算<rt>ざん</rt></ruby>）は、<strong>ひく<ruby>数<rt>かず</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えて<ruby>加法<rt>かほう</rt></ruby>に</strong>するんだよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>減法<rt>げんぽう</rt></ruby> → <ruby>加法<rt>かほう</rt></ruby>',
      steps: [
        {
          formula: '$(+5) - (-3)$',
          annotation: '「$-3$ をひく」',
        },
        {
          formula: '$= (+5) + \\textcolor{#D97706}{(+3)}$',
          annotation: 'ひく<ruby>数<rt>かず</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>える！ $-3 → +3$',
          animateInsert: true,
        },
        {
          formula: '$= \\textcolor{#D97706}{+8}$',
          isResult: true,
          annotation: '<ruby>同符号<rt>どうふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>で<ruby>計算<rt>けいさん</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'マイナスをひくとプラスになる…？<ruby>不思議<rt>ふしぎ</rt></ruby>ですね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>借金<rt>しゃっきん</rt></ruby>が<ruby>減<rt>へ</rt></ruby>る（マイナスを<ruby>取<rt>と</rt></ruby>り<ruby>除<rt>のぞ</rt></ruby>く）と<ruby>得<rt>とく</rt></ruby>するよね？だから<ruby>結果<rt>けっか</rt></ruby>は<ruby>増<rt>ふ</rt></ruby>えるんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！<ruby>借金<rt>しゃっきん</rt></ruby>がなくなる = お<ruby>金<rt>かね</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>える、ってことか！',
    },
    {
      type: 'summary-point',
      text: '<ruby>減法<rt>げんぽう</rt></ruby>は、ひく<ruby>数<rt>かず</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えて<ruby>加法<rt>かほう</rt></ruby>にする。<ruby>加法<rt>かほう</rt></ruby>だけの<ruby>式<rt>しき</rt></ruby>にしたとき、それぞれの<ruby>数<rt>かず</rt></ruby>を「<ruby>項<rt>こう</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ぶ。',
    },
    {
      type: 'quiz',
      question: '$(-6) - (+4)$ の<ruby>計算結果<rt>けいさんけっか</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$+10$', correct: false },
        { letter: 'B', text: '$-2$', correct: false },
        { letter: 'C', text: '$+2$', correct: false },
        { letter: 'D', text: '$-10$', correct: true },
      ],
      explanation:
        '$(-6) - (+4) = (-6) + (-4) = -(6 + 4) = \\textcolor{#D97706}{-10}$ だよ。ひく<ruby>数<rt>かず</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えて<ruby>加法<rt>かほう</rt></ruby>にしよう！',
    },
    {
      type: 'end',
      points: [
        '<ruby>同符号<rt>どうふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>: <ruby>絶対値<rt>ぜったいち</rt></ruby>の<ruby>和<rt>わ</rt></ruby> + <ruby>共通<rt>きょうつう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>',
        '<ruby>異符号<rt>いふごう</rt></ruby>の<ruby>加法<rt>かほう</rt></ruby>: <ruby>絶対値<rt>ぜったいち</rt></ruby>の<ruby>差<rt>さ</rt></ruby> + <ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>',
        '<ruby>減法<rt>げんぽう</rt></ruby> → ひく<ruby>数<rt>かず</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えて<ruby>加法<rt>かほう</rt></ruby>にする',
        '<ruby>加法<rt>かほう</rt></ruby>だけの<ruby>式<rt>しき</rt></ruby>にしたときの<ruby>各<rt>かく</rt></ruby><ruby>数<rt>かず</rt></ruby>を「<ruby>項<rt>こう</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ぶ',
      ],
    },
  ],
};

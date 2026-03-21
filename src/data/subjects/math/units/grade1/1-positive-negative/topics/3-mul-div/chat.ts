import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const mulDivChat: HistoryChat = {
  id: 'math-g1-mul-div',
  icon: '✖️',
  title: '<ruby>乗法<rt>じょうほう</rt></ruby>と<ruby>除法<rt>じょほう</rt></ruby>',
  subtitle: '〜<ruby>中<rt>ちゅう</rt></ruby>1<ruby>数学<rt>すうがく</rt></ruby>〜 <ruby>正負<rt>せいふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>・わり<ruby>算<rt>ざん</rt></ruby>',
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
      text: '<ruby>乗法<rt>じょうほう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>ルール',
    },
    {
      type: 'narrator',
      text: '<ruby>正負<rt>せいふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>には、<ruby>大事<rt>だいじ</rt></ruby>な<ruby>符号<rt>ふごう</rt></ruby>のルールがあるよ。しっかり<ruby>覚<rt>おぼ</rt></ruby>えよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'かけ<ruby>算<rt>ざん</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>なルールで<ruby>決<rt>き</rt></ruby>まるよ。<ruby>同<rt>おな</rt></ruby>じ<ruby>符号<rt>ふごう</rt></ruby>どうしなら<ruby>正<rt>せい</rt></ruby>、<ruby>違<rt>ちが</rt></ruby>う<ruby>符号<rt>ふごう</rt></ruby>なら<ruby>負<rt>ふ</rt></ruby>！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>乗法<rt>じょうほう</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>ルール',
      steps: [
        {
          formula: '$(+) \\times (+) = \\textcolor{#D97706}{+}$',
          annotation: '<ruby>同符号<rt>どうふごう</rt></ruby> → <ruby>正<rt>せい</rt></ruby>',
        },
        {
          formula: '$(-) \\times (-) = \\textcolor{#D97706}{+}$',
          annotation: '<ruby>同符号<rt>どうふごう</rt></ruby> → <ruby>正<rt>せい</rt></ruby>',
        },
        {
          formula: '$(+) \\times (-) = \\textcolor{#D97706}{-}$',
          annotation: '<ruby>異符号<rt>いふごう</rt></ruby> → <ruby>負<rt>ふ</rt></ruby>',
        },
        {
          formula: '$(-) \\times (+) = \\textcolor{#D97706}{-}$',
          animateInsert: true,
          annotation: '<ruby>異符号<rt>いふごう</rt></ruby> → <ruby>負<rt>ふ</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'マイナス × マイナス = プラスになるんですね！なんでだろう？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '「<ruby>反対<rt>はんたい</rt></ruby>の<ruby>反対<rt>はんたい</rt></ruby>は<ruby>元<rt>もと</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>る」と<ruby>考<rt>かんが</rt></ruby>えるとわかりやすいよ。<ruby>方向<rt>ほうこう</rt></ruby>を2<ruby>回<rt>かい</rt></ruby><ruby>反転<rt>はんてん</rt></ruby>させると<ruby>元<rt>もと</rt></ruby>の<ruby>方向<rt>ほうこう</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>るよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>実際<rt>じっさい</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>計算例<rt>けいさんれい</rt></ruby>',
      steps: [
        {
          formula: '$(-4) \\times (+3)$',
          annotation: '<ruby>異符号<rt>いふごう</rt></ruby>だから<ruby>結果<rt>けっか</rt></ruby>は<ruby>負<rt>ふ</rt></ruby>',
        },
        {
          formula: '$= -(4 \\times 3)$',
          annotation: '<ruby>絶対値<rt>ぜったいち</rt></ruby>をかける',
        },
        {
          formula: '$= \\textcolor{#D97706}{-12}$',
          isResult: true,
          animateInsert: true,
          annotation: '',
        },
      ],
    },
    {
      type: 'summary-point',
      text: '<ruby>同符号<rt>どうふごう</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>は<ruby>正<rt>せい</rt></ruby>、<ruby>異符号<rt>いふごう</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>は<ruby>負<rt>ふ</rt></ruby>。<ruby>絶対値<rt>ぜったいち</rt></ruby>をかけてから<ruby>符号<rt>ふごう</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。',
    },
    {
      type: 'quiz',
      question: '$(-6) \\times (-5)$ の<ruby>計算結果<rt>けいさんけっか</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$-30$', correct: false },
        { letter: 'B', text: '$-11$', correct: false },
        { letter: 'C', text: '$+30$', correct: true },
        { letter: 'D', text: '$+11$', correct: false },
      ],
      explanation:
        '<ruby>同符号<rt>どうふごう</rt></ruby>（<ruby>負<rt>ふ</rt></ruby> × <ruby>負<rt>ふ</rt></ruby>）なので<ruby>結果<rt>けっか</rt></ruby>は<ruby>正<rt>せい</rt></ruby>。$6 \\times 5 = 30$ で、<ruby>答<rt>こた</rt></ruby>えは $\\textcolor{#D97706}{+30}$ だよ。',
    },
    {
      type: 'date',
      text: '3つ<ruby>以上<rt>いじょう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の<ruby>乗法<rt>じょうほう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '3つ<ruby>以上<rt>いじょう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をかけるときは、<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>に<ruby>注目<rt>ちゅうもく</rt></ruby>しよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '3つ<ruby>以上<rt>いじょう</rt></ruby>の<ruby>数<rt>かず</rt></ruby>をかけるときは、<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が<ruby>何個<rt>なんこ</rt></ruby>あるかで<ruby>符号<rt>ふごう</rt></ruby>が<ruby>決<rt>き</rt></ruby>まるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>の<ruby>個数<rt>こすう</rt></ruby>と<ruby>符号<rt>ふごう</rt></ruby>',
      steps: [
        {
          formula: '$(-2) \\times (-3) \\times (+5)$',
          annotation: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が $2$ <ruby>個<rt>こ</rt></ruby>（<ruby>偶数<rt>ぐうすう</rt></ruby>）',
        },
        {
          formula: '$= \\textcolor{#D97706}{+}(2 \\times 3 \\times 5) = \\textcolor{#D97706}{+30}$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>偶数個<rt>ぐうすうこ</rt></ruby> → <ruby>正<rt>せい</rt></ruby>！',
        },
        {
          formula: '$(-2) \\times (-3) \\times (-5)$',
          annotation: '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が $3$ <ruby>個<rt>こ</rt></ruby>（<ruby>奇数<rt>きすう</rt></ruby>）',
        },
        {
          formula: '$= \\textcolor{#D97706}{-}(2 \\times 3 \\times 5) = \\textcolor{#D97706}{-30}$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>奇数個<rt>きすうこ</rt></ruby> → <ruby>負<rt>ふ</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>偶数<rt>ぐうすう</rt></ruby>ならプラス、<ruby>奇数<rt>きすう</rt></ruby>ならマイナス！<ruby>覚<rt>おぼ</rt></ruby>えやすいです！',
    },
    {
      type: 'date',
      text: '<ruby>逆数<rt>ぎゃくすう</rt></ruby>と<ruby>除法<rt>じょほう</rt></ruby>',
    },
    {
      type: 'narrator',
      text: 'わり<ruby>算<rt>ざん</rt></ruby>はかけ<ruby>算<rt>ざん</rt></ruby>に<ruby>変換<rt>へんかん</rt></ruby>して<ruby>計算<rt>けいさん</rt></ruby>しよう！<strong>「<ruby>逆数<rt>ぎゃくすう</rt></ruby>」</strong>がカギだよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '2つの<ruby>数<rt>かず</rt></ruby>をかけて $1$ になるとき、<ruby>一方<rt>いっぽう</rt></ruby>を<ruby>他方<rt>たほう</rt></ruby>の<strong>「<ruby>逆数<rt>ぎゃくすう</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。わり<ruby>算<rt>ざん</rt></ruby>は<ruby>逆数<rt>ぎゃくすう</rt></ruby>をかけるかけ<ruby>算<rt>ざん</rt></ruby>に<ruby>変換<rt>へんかん</rt></ruby>できるんだ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>逆数<rt>ぎゃくすう</rt></ruby>と<ruby>除法<rt>じょほう</rt></ruby>',
      steps: [
        {
          formula: '$\\frac{2}{3}$ の<ruby>逆数<rt>ぎゃくすう</rt></ruby>は $\\frac{3}{2}$',
          annotation: '<ruby>分子<rt>ぶんし</rt></ruby>と<ruby>分母<rt>ぶんぼ</rt></ruby>を<ruby>入<rt>い</rt></ruby>れかえる',
        },
        {
          formula: '$5$ の<ruby>逆数<rt>ぎゃくすう</rt></ruby>は $\\frac{1}{5}$',
          annotation: '$5 = \\frac{5}{1}$ だから',
        },
        {
          formula: '$(-8) \\div (+4)$',
          annotation: 'わり<ruby>算<rt>ざん</rt></ruby>をかけ<ruby>算<rt>ざん</rt></ruby>に！',
        },
        {
          formula: '$= (-8) \\times \\frac{1}{4} = \\textcolor{#D97706}{-2}$',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>逆数<rt>ぎゃくすう</rt></ruby>をかける',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'わり<ruby>算<rt>ざん</rt></ruby>の<ruby>符号<rt>ふごう</rt></ruby>のルールもかけ<ruby>算<rt>ざん</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そのとおり！わり<ruby>算<rt>ざん</rt></ruby>もかけ<ruby>算<rt>ざん</rt></ruby>に<ruby>変換<rt>へんかん</rt></ruby>するから、<ruby>符号<rt>ふごう</rt></ruby>のルールは<ruby>同<rt>おな</rt></ruby>じだよ。<ruby>同符号<rt>どうふごう</rt></ruby>→<ruby>正<rt>せい</rt></ruby>、<ruby>異符号<rt>いふごう</rt></ruby>→<ruby>負<rt>ふ</rt></ruby>！',
    },
    {
      type: 'summary-point',
      text: '<ruby>逆数<rt>ぎゃくすう</rt></ruby> = かけて $1$ になる<ruby>数<rt>かず</rt></ruby>。<ruby>除法<rt>じょほう</rt></ruby>は<ruby>逆数<rt>ぎゃくすう</rt></ruby>の<ruby>乗法<rt>じょうほう</rt></ruby>に<ruby>変換<rt>へんかん</rt></ruby>。<ruby>符号<rt>ふごう</rt></ruby>ルールは<ruby>乗法<rt>じょうほう</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ。',
    },
    {
      type: 'quiz',
      question: '$(-3) \\times (-2) \\times (-4)$ の<ruby>計算結果<rt>けいさんけっか</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$+24$', correct: false },
        { letter: 'B', text: '$-9$', correct: false },
        { letter: 'C', text: '$+9$', correct: false },
        { letter: 'D', text: '$-24$', correct: true },
      ],
      explanation:
        '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が $3$ <ruby>個<rt>こ</rt></ruby>（<ruby>奇数<rt>きすう</rt></ruby>）だから<ruby>結果<rt>けっか</rt></ruby>は<ruby>負<rt>ふ</rt></ruby>。$3 \\times 2 \\times 4 = 24$ で、<ruby>答<rt>こた</rt></ruby>えは $\\textcolor{#D97706}{-24}$ だよ。',
    },
    {
      type: 'end',
      points: [
        '<ruby>同符号<rt>どうふごう</rt></ruby>のかけ<ruby>算<rt>ざん</rt></ruby>は<ruby>正<rt>せい</rt></ruby>、<ruby>異符号<rt>いふごう</rt></ruby>は<ruby>負<rt>ふ</rt></ruby>',
        '<ruby>負<rt>ふ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が<ruby>偶数個<rt>ぐうすうこ</rt></ruby>→<ruby>正<rt>せい</rt></ruby>、<ruby>奇数個<rt>きすうこ</rt></ruby>→<ruby>負<rt>ふ</rt></ruby>',
        '<ruby>逆数<rt>ぎゃくすう</rt></ruby> = かけて $1$ になる<ruby>数<rt>かず</rt></ruby>（<ruby>分子<rt>ぶんし</rt></ruby>と<ruby>分母<rt>ぶんぼ</rt></ruby>を<ruby>入<rt>い</rt></ruby>れかえる）',
        '<ruby>除法<rt>じょほう</rt></ruby>は<ruby>逆数<rt>ぎゃくすう</rt></ruby>の<ruby>乗法<rt>じょうほう</rt></ruby>に<ruby>変換<rt>へんかん</rt></ruby>して<ruby>計算<rt>けいさん</rt></ruby>',
      ],
    },
  ],
};

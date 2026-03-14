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
    {
      type: 'date',
      text: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>って？',
    },
    {
      type: 'narrator',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>くもう1つの<ruby>方法<rt>ほうほう</rt></ruby>、<strong>「<ruby>代入法<rt>だいにゅうほう</rt></ruby>」</strong>を<ruby>学<rt>まな</rt></ruby>ぼう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'こんな<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>見<rt>み</rt></ruby>てみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} y = 2x \\quad \\cdots \\textcircled{1} \\\\ x + y = 9 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            'y がすでに「= ○○」の<ruby>形<rt>かたち</rt></ruby>！ この y に①の 2x を<ruby>入<rt>い</rt></ruby>れられそう！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '①で y = 2x って<ruby>分<rt>わ</rt></ruby>かってるから、②の y にそのまま<ruby>入<rt>い</rt></ruby>れられますね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！それが<strong>「<ruby>代入法<rt>だいにゅうほう</rt></ruby>」</strong>だよ。y のところに 2x を<ruby>入<rt>い</rt></ruby>れてみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>く',
      steps: [
        {
          formula: '$x + 2x = 9$',
          animateInsert: true,
          annotation: '②の y に 2x を<ruby>代入<rt>だいにゅう</rt></ruby>！',
        },
        {
          formula: '$3x = 9$',
          animateInsert: true,
          annotation: 'x の<ruby>式<rt>しき</rt></ruby>だけになった！',
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
      text: 'x = 3！①に<ruby>入<rt>い</rt></ruby>れると y = 2 × 3 = 6 ですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>：<strong>y = ○○ の<ruby>形<rt>かたち</rt></ruby>をもう<ruby>一方<rt>いっぽう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby></strong>して、1つの<ruby>文字<rt>もじ</rt></ruby>だけの<ruby>式<rt>しき</rt></ruby>にする！',
    },
    {
      type: 'date',
      text: '<ruby>式<rt>しき</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いつも y = ○○ の<ruby>形<rt>かたち</rt></ruby>があるとは<ruby>限<rt>かぎ</rt></ruby>らないよね。そんなときはまず<ruby>変形<rt>へんけい</rt></ruby>しよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula:
            '$\\begin{cases} x + y = 5 \\quad \\cdots \\textcircled{1} \\\\ 3x + 2y = 13 \\quad \\cdots \\textcircled{2} \\end{cases}$',
          annotation:
            '<ruby>係数<rt>けいすう</rt></ruby>が1だから y = の<ruby>形<rt>かたち</rt></ruby>に<ruby>変形<rt>へんけい</rt></ruby>しやすい！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'どっちの<ruby>式<rt>しき</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>すればいいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>係数<rt>けいすう</rt></ruby>が1の<ruby>文字<rt>もじ</rt></ruby>がある<ruby>式<rt>しき</rt></ruby>が<ruby>変形<rt>へんけい</rt></ruby>しやすいよ。①は x も y も<ruby>係数<rt>けいすう</rt></ruby>が1だから<ruby>簡単<rt>かんたん</rt></ruby>！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>変形<rt>へんけい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>',
      steps: [
        {
          formula: '$\\textcircled{1} \\Rightarrow y = 5 - x$',
          animateInsert: true,
          annotation: '①を y = の<ruby>形<rt>かたち</rt></ruby>に<ruby>変形<rt>へんけい</rt></ruby>',
        },
        {
          formula: '$3x + 2(5 - x) = 13$',
          annotation: '②の y に (5 − x) を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$3x + 10 - 2x = 13$',
          animateInsert: true,
          annotation: 'かっこを<ruby>展開<rt>てんかい</rt></ruby>',
        },
        {
          formula: '$x = 3,\\ y = 2$',
          isResult: true,
          annotation: 'x = 3 を y = 5 − x に<ruby>代入<rt>だいにゅう</rt></ruby>: y = 2',
        },
      ],
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
      text: '<strong>y = ○○ や x = ○○</strong> の<ruby>形<rt>かたち</rt></ruby>があれば<ruby>代入法<rt>だいにゅうほう</rt></ruby>が<ruby>楽<rt>らく</rt></ruby>。それ<ruby>以外<rt>いがい</rt></ruby>は<ruby>加減法<rt>かげんほう</rt></ruby>が<ruby>使<rt>つか</rt></ruby>いやすいことが<ruby>多<rt>おお</rt></ruby>いよ！',
    },
    {
      type: 'summary-point',
      text: 'y = ○○ の<ruby>形<rt>かたち</rt></ruby>がある → <strong><ruby>代入法<rt>だいにゅうほう</rt></ruby></strong>。それ<ruby>以外<rt>いがい</rt></ruby> → <strong><ruby>加減法<rt>かげんほう</rt></ruby></strong>が<ruby>便利<rt>べんり</rt></ruby>！',
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
      type: 'end',
      points: [
        '<ruby>代入法<rt>だいにゅうほう</rt></ruby>：<ruby>一方<rt>いっぽう</rt></ruby>の<ruby>式<rt>しき</rt></ruby>をもう<ruby>一方<rt>いっぽう</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>して1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>す',
        '$y =$ ○○ の<ruby>形<rt>かたち</rt></ruby>がそのままあれば、すぐ<ruby>代入<rt>だいにゅう</rt></ruby>できる',
        '<ruby>形<rt>かたち</rt></ruby>がなければ、<ruby>係数<rt>けいすう</rt></ruby>が$1$の<ruby>文字<rt>もじ</rt></ruby>を<ruby>変形<rt>へんけい</rt></ruby>してから<ruby>代入<rt>だいにゅう</rt></ruby>',
        '$y =$ ○○ の<ruby>形<rt>かたち</rt></ruby>なら<ruby>代入法<rt>だいにゅうほう</rt></ruby>、それ<ruby>以外<rt>いがい</rt></ruby>は<ruby>加減法<rt>かげんほう</rt></ruby>が<ruby>便利<rt>べんり</rt></ruby>',
      ],
    },
  ],
};

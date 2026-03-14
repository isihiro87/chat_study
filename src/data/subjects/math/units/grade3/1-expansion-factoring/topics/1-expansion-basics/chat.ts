import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const expansionBasicsChat: HistoryChat = {
  id: 'math-g3-expansion-basics',
  icon: '📖',
  title: '式の展開の基本をマスターしよう',
  subtitle: '〜中3数学〜 かっこを外して計算',
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
      text: '<ruby>式<rt>しき</rt></ruby>の<ruby>展開<rt>てんかい</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>3<ruby>数学<rt>すうがく</rt></ruby>の<ruby>最初<rt>さいしょ</rt></ruby>のテーマ！かっこを<ruby>外<rt>はず</rt></ruby>して<ruby>式<rt>しき</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げることを<strong>「<ruby>展開<rt>てんかい</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<ruby>中<rt>ちゅう</rt></ruby>1で<ruby>習<rt>なら</rt></ruby>った<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>を<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>のおさらい',
      steps: [
        {
          formula: '$a(b + c) = ab + ac$',
          annotation: 'かっこの<ruby>外<rt>そと</rt></ruby>の a を、<ruby>中<rt>なか</rt></ruby>の b と c にそれぞれかける',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'あ、<ruby>覚<rt>おぼ</rt></ruby>えてます！ 3(x + 2) = 3x + 6 みたいにやるやつですよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！<ruby>中<rt>ちゅう</rt></ruby>3ではこれを<ruby>進化<rt>しんか</rt></ruby>させて、<strong>かっこ×かっこ</strong>の<ruby>展開<rt>てんかい</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぶよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>展開<rt>てんかい</rt></ruby> = かっこを<ruby>外<rt>はず</rt></ruby>して<ruby>式<rt>しき</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げること。<ruby>基本<rt>きほん</rt></ruby>は<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>！',
    },
    {
      type: 'date',
      text: '(a+b)(c+d) の<ruby>展開<rt>てんかい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'じゃあ (x + 2)(x + 3) を<ruby>展開<rt>てんかい</rt></ruby>してみよう。やり<ruby>方<rt>かた</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>！<ruby>前<rt>まえ</rt></ruby>のかっこの<ruby>各項<rt>かくこう</rt></ruby>を、<ruby>後<rt>うし</rt></ruby>ろのかっこ<ruby>全体<rt>ぜんたい</rt></ruby>にかけるんだ。',
    },
    {
      type: 'whiteboard',
      title: '(x + 2)(x + 3) の<ruby>展開<rt>てんかい</rt></ruby>',
      steps: [
        {
          formula: '$(x + 2)(x + 3)$',
          annotation: '<ruby>前<rt>まえ</rt></ruby>のかっこの x を<ruby>後<rt>うし</rt></ruby>ろ<ruby>全体<rt>ぜんたい</rt></ruby>にかける',
        },
        {
          formula: '$x \\times x + x \\times 3 + 2 \\times x + 2 \\times 3$',
          animateInsert: true,
          annotation: '<ruby>次<rt>つぎ</rt></ruby>に 2 も<ruby>後<rt>うし</rt></ruby>ろ<ruby>全体<rt>ぜんたい</rt></ruby>にかける → <ruby>全部<rt>ぜんぶ</rt></ruby>で4つ',
        },
        {
          formula: '$x^2 + 3x + 2x + 6$',
          annotation: 'それぞれ<ruby>計算<rt>けいさん</rt></ruby>する',
        },
        {
          formula: '$x^2 + 5x + 6$',
          isResult: true,
          animateInsert: true,
          annotation: '3x と 2x は<ruby>同類項<rt>どうるいこう</rt></ruby>！まとめて 5x',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'おお！ 4つの<ruby>積<rt>せき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って、<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめればいいんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！これが<strong>(a+b)(c+d) = ac + ad + bc + bd</strong>ってことだよ。',
    },
    {
      type: 'summary-point',
      text: '(a+b)(c+d) = ac + ad + bc + bd → 4つの<ruby>積<rt>せき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめる！',
    },
    {
      type: 'date',
      text: '<ruby>符号<rt>ふごう</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'マイナスがあるときが<ruby>要注意<rt>ようちゅうい</rt></ruby>！ (x − 3)(x + 4) をやってみよう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>マイナスがある<rt></rt></ruby><ruby>展開<rt>てんかい</rt></ruby>',
      steps: [
        {
          formula: '$(x - 3)(x + 4)$',
          annotation: 'x と −3 をそれぞれ<ruby>後<rt>うし</rt></ruby>ろにかける',
        },
        {
          formula: '$x^2 + 4x \\textcolor{#D97706}{- 3x - 12}$',
          animateInsert: true,
          annotation: '−3 × x = −3x、−3 × 4 = <strong>−12</strong> に<ruby>注意<rt>ちゅうい</rt></ruby>！',
        },
        {
          formula: '$x^2 + x - 12$',
          isResult: true,
          animateInsert: true,
          annotation: '4x − 3x = x にまとめて<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'マイナスのかけ<ruby>算<rt>ざん</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつければ<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！<ruby>符号<rt>ふごう</rt></ruby>のミスが<ruby>一番<rt>いちばん</rt></ruby><ruby>多<rt>おお</rt></ruby>いから、ていねいにやろうね。',
    },
    {
      type: 'quiz',
      question: '$(x + 1)(x - 5)$ を<ruby>展開<rt>てんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$x^2 - 4x - 5$', correct: true },
        { letter: 'B', text: '$x^2 + 4x - 5$', correct: false },
        { letter: 'C', text: '$x^2 - 4x + 5$', correct: false },
        { letter: 'D', text: '$x^2 - 6x - 5$', correct: false },
      ],
      explanation:
        '$(x+1)(x-5) = x^2 - 5x + x - 5 = x^2 - 4x - 5$。$-5x$ と $+x$ をまとめると $\\textcolor{#D97706}{-4x}$ だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>マイナスの<rt></rt></ruby><ruby>符号<rt>ふごう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>！ (−)×(−) = (+)、(−)×(+) = (−)',
    },
    {
      type: 'end',
      points: [
        '<ruby>展開<rt>てんかい</rt></ruby> = かっこを<ruby>外<rt>はず</rt></ruby>して<ruby>式<rt>しき</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げること',
        '<ruby>分配法則<rt>ぶんぱいほうそく</rt></ruby>: $a(b+c) = ab + ac$',
        '$(a+b)(c+d) = ac + ad + bc + bd$（4つの<ruby>積<rt>せき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る）',
        '<ruby>マイナスの<rt></rt></ruby><ruby>符号<rt>ふごう</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>して、<ruby>同類項<rt>どうるいこう</rt></ruby>をまとめよう',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const rateOfChangeChat: HistoryChat = {
  id: 'math-g3-rate-of-change',
  icon: '📊',
  title: '変化の割合をマスターしよう',
  subtitle: '〜中3数学〜 一次関数との大きな違い',
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
      text: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>2で<ruby>習<rt>なら</rt></ruby>った<ruby>一次関数<rt>いちじかんすう</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>は<ruby>一定<rt>いってい</rt></ruby>だった。でも y = ax² では…？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> = <strong>y の<ruby>増加量<rt>ぞうかりょう</rt></ruby> ÷ x の<ruby>増加量<rt>ぞうかりょう</rt></ruby></strong>。これは<ruby>一次関数<rt>いちじかんすう</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じだよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>のときは<ruby>傾<rt>かたむ</rt></ruby>き a と<ruby>同<rt>おな</rt></ruby>じでしたよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そう。でも y = ax² では<ruby>区間<rt>くかん</rt></ruby>によって<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>が<ruby>変<rt>か</rt></ruby>わるんだ。<ruby>実際<rt>じっさい</rt></ruby>に<ruby>計算<rt>けいさん</rt></ruby>してみよう！',
    },
    {
      type: 'whiteboard',
      title: 'y = x² の<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>を<ruby>比<rt>くら</rt></ruby>べよう',
      steps: [
        {
          formula: '【<ruby>区間<rt>くかん</rt></ruby> $x = 1$ → $3$】',
          annotation: '$y$: $1$ → $9$、<ruby>増加量<rt>ぞうかりょう</rt></ruby>: $y$ は $8$、$x$ は $2$',
        },
        {
          formula: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= 8 \\div 2 = \\textcolor{#D97706}{4}$',
          isResult: true,
        },
        {
          formula: '【<ruby>区間<rt>くかん</rt></ruby> $x = 2$ → $4$】',
          annotation: '$y$: $4$ → $16$、<ruby>増加量<rt>ぞうかりょう</rt></ruby>: $y$ は $12$、$x$ は $2$',
        },
        {
          formula: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= 12 \\div 2 = \\textcolor{#D97706}{6}$',
          isResult: true,
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>同<rt>おな</rt></ruby>じ y = x² なのに、<ruby>区間<rt>くかん</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うと<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>う！4 と 6 で<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>違<rt>ちが</rt></ruby>いますね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'これが<ruby>一次関数<rt>いちじかんすう</rt></ruby>との<ruby>最大<rt>さいだい</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>い！<ruby>放物線<rt>ほうぶつせん</rt></ruby>は<ruby>曲線<rt>きょくせん</rt></ruby>だから、<ruby>場所<rt>ばしょ</rt></ruby>によって<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>変<rt>か</rt></ruby>わるんだよ。',
    },
    {
      type: 'image',
      src: '/images/math/grade3/rate-of-change.svg',
      alt: '変化の割合',
      caption: '<ruby>区間<rt>くかん</rt></ruby>によって<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>変<rt>か</rt></ruby>わる',
    },
    {
      type: 'summary-point',
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>: <ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>は<ruby>一定<rt>いってい</rt></ruby>。y = ax²: <ruby>区間<rt>くかん</rt></ruby>によって<ruby>変<rt>か</rt></ruby>わる！',
    },
    {
      type: 'date',
      text: '<ruby>便利<rt>べんり</rt></ruby>な<ruby>公式<rt>こうしき</rt></ruby> a(p + q)',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>毎回<rt>まいかい</rt></ruby> y の<ruby>値<rt>あたい</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めるのは<ruby>大変<rt>たいへん</rt></ruby>だよね。<ruby>実<rt>じつ</rt></ruby>は<ruby>便利<rt>べんり</rt></ruby>な<ruby>公式<rt>こうしき</rt></ruby>があるんだ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>',
      steps: [
        {
          formula: '$y = ax^2$ で $x$ が $p$ から $q$ に<ruby>変化<rt>へんか</rt></ruby>するとき',
        },
        {
          formula: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= a(p + q)$',
          animateInsert: true,
          isResult: true,
          annotation: '$p$ と $q$ を<ruby>足<rt>た</rt></ruby>して $a$ をかけるだけ！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'さっきの<ruby>例<rt>れい</rt></ruby>で<ruby>確<rt>たし</rt></ruby>かめてみます！ x = 1 → 3 なら 1×(1+3) = 4。<ruby>合<rt>あ</rt></ruby>ってる！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！ x = 2 → 4 なら 1×(2+4) = 6 になるね。<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うとめちゃくちゃ<ruby>速<rt>はや</rt></ruby>いよ！',
    },
    {
      type: 'quiz',
      question: '$y = 2x^2$ で $x$ が $-1$ から $4$ に<ruby>変化<rt>へんか</rt></ruby>するとき、<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$3$', correct: false },
        { letter: 'B', text: '$6$', correct: true },
        { letter: 'C', text: '$10$', correct: false },
        { letter: 'D', text: '$8$', correct: false },
      ],
      explanation:
        '<ruby>公式<rt>こうしき</rt></ruby>: $a(p + q) = 2 \\times (-1 + 4) = 2 \\times 3 = \\textcolor{#D97706}{6}$',
    },
    {
      type: 'summary-point',
      text: '<ruby>公式<rt>こうしき</rt></ruby> a(p + q) を<ruby>使<rt>つか</rt></ruby>えば<ruby>一発<rt>いっぱつ</rt></ruby>で<ruby>求<rt>もと</rt></ruby>められる！',
    },
    {
      type: 'summary-point',
      text: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>は<ruby>平均<rt>へいきん</rt></ruby>の<ruby>傾<rt>かたむ</rt></ruby>き。<ruby>放物線<rt>ほうぶつせん</rt></ruby>の2<ruby>点<rt>てん</rt></ruby>を<ruby>結<rt>むす</rt></ruby>ぶ<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>傾<rt>かたむ</rt></ruby>きと<ruby>同<rt>おな</rt></ruby>じ！',
    },
    {
      type: 'end',
      points: [
        '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= y$ の<ruby>増加量<rt>ぞうかりょう</rt></ruby> $\\div$ $x$ の<ruby>増加量<rt>ぞうかりょう</rt></ruby>',
        '$y = ax^2$ では<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>が<ruby>区間<rt>くかん</rt></ruby>ごとに<ruby>変<rt>か</rt></ruby>わる（<ruby>一次関数<rt>いちじかんすう</rt></ruby>は<ruby>一定<rt>いってい</rt></ruby>）',
        '<ruby>公式<rt>こうしき</rt></ruby>: $x$ が $p$ → $q$ のとき、<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= a(p + q)$',
        '<ruby>放物線<rt>ほうぶつせん</rt></ruby>は<ruby>曲線<rt>きょくせん</rt></ruby>だから<ruby>場所<rt>ばしょ</rt></ruby>ごとに<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>違<rt>ちが</rt></ruby>う',
      ],
    },
  ],
};

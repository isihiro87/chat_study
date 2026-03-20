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
      type: 'date',
      text: '<ruby>平均<rt>へいきん</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さを<ruby>求<rt>もと</rt></ruby>めよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>は<ruby>実<rt>じつ</rt></ruby>は「<ruby>平均<rt>へいきん</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さ」の<ruby>計算<rt>けいさん</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>なんだ。ボールが<ruby>斜面<rt>しゃめん</rt></ruby>をころがる<ruby>実験<rt>じっけん</rt></ruby>で<ruby>確<rt>たし</rt></ruby>かめてみよう！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>平均<rt>へいきん</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さの<ruby>求<rt>もと</rt></ruby>め<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: 'ボールの<ruby>移動距離<rt>いどうきょり</rt></ruby> $y = 2x^2$ cm（$x$ <ruby>秒後<rt>びょうご</rt></ruby>）',
          annotation: '<ruby>斜面<rt>しゃめん</rt></ruby>をころがる<ruby>実験<rt>じっけん</rt></ruby>',
        },
        {
          formula: '2<ruby>秒後<rt>びょうご</rt></ruby>から5<ruby>秒後<rt>びょうご</rt></ruby>の<ruby>平均<rt>へいきん</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さ',
          annotation: '$x = 2$: $y = 8$ cm、$x = 5$: $y = 50$ cm',
        },
        {
          formula: '$\\frac{50 - 8}{5 - 2} = \\frac{42}{3} = \\textcolor{#D97706}{14}$ cm/<ruby>秒<rt>びょう</rt></ruby>',
          animateInsert: true,
          isResult: true,
          annotation: '<ruby>距離<rt>きょり</rt></ruby>の<ruby>差<rt>さ</rt></ruby> ÷ <ruby>時間<rt>じかん</rt></ruby>の<ruby>差<rt>さ</rt></ruby> = <ruby>平均<rt>へいきん</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さ',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ<ruby>計算<rt>けいさん</rt></ruby>だ！ y の<ruby>増加量<rt>ぞうかりょう</rt></ruby> ÷ x の<ruby>増加量<rt>ぞうかりょう</rt></ruby>ですね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>公式<rt>こうしき</rt></ruby> a(p + q) も<ruby>使<rt>つか</rt></ruby>えるよ。a = 2、p = 2、q = 5 で 2×(2+5) = <strong>14</strong>。<ruby>一発<rt>いっぱつ</rt></ruby>で<ruby>求<rt>もと</rt></ruby>められるね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>平均<rt>へいきん</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さ = <ruby>距離<rt>きょり</rt></ruby>の<ruby>差<rt>さ</rt></ruby> ÷ <ruby>時間<rt>じかん</rt></ruby>の<ruby>差<rt>さ</rt></ruby> = <ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ！',
    },
    {
      type: 'date',
      text: '<ruby>放物線<rt>ほうぶつせん</rt></ruby>と<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>・<ruby>面積<rt>めんせき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>入試<rt>にゅうし</rt></ruby>でよく<ruby>出<rt>で</rt></ruby>る！<ruby>放物線<rt>ほうぶつせん</rt></ruby>と<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めて、△OABの<ruby>面積<rt>めんせき</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>する<ruby>問題<rt>もんだい</rt></ruby>だよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>放物線<rt>ほうぶつせん</rt></ruby>と<ruby>直線<rt>ちょくせん</rt></ruby>が<ruby>交<rt>まじ</rt></ruby>わるところってどうやって<ruby>求<rt>もと</rt></ruby>めるんですか？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>放物線<rt>ほうぶつせん</rt></ruby>と<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>',
      steps: [
        {
          formula: '$y = x^2$ と $y = -2x + 8$ の<ruby>交点<rt>こうてん</rt></ruby>',
          annotation: '2つの<ruby>式<rt>しき</rt></ruby>を<ruby>連立<rt>れんりつ</rt></ruby>する',
        },
        {
          formula: '$x^2 = -2x + 8$ → $x^2 + 2x - 8 = 0$',
          animateInsert: true,
        },
        {
          formula: '$(x + 4)(x - 2) = 0$ → $x = -4, 2$',
          animateInsert: true,
          annotation: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>で<ruby>解<rt>と</rt></ruby>ける！',
        },
        {
          formula: 'A$(-4, 16)$、B$(2, 4)$',
          isResult: true,
          annotation: 'それぞれ $y = x^2$ に<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>面積<rt>めんせき</rt></ruby>は「<ruby>底辺<rt>ていへん</rt></ruby> × <ruby>高<rt>たか</rt></ruby>さ ÷ 2」で<ruby>求<rt>もと</rt></ruby>めるよ。△OAB は<ruby>原点<rt>げんてん</rt></ruby>O と2<ruby>点<rt>てん</rt></ruby>A、Bでできる<ruby>三角形<rt>さんかくけい</rt></ruby>。<ruby>直線<rt>ちょくせん</rt></ruby>AB を<ruby>底辺<rt>ていへん</rt></ruby>にして、O から<ruby>直線<rt>ちょくせん</rt></ruby>AB までの<ruby>距離<rt>きょり</rt></ruby>を<ruby>高<rt>たか</rt></ruby>さにするんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>原点<rt>げんてん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>る y <ruby>軸<rt>じく</rt></ruby>で<ruby>三角形<rt>さんかくけい</rt></ruby>を<ruby>分割<rt>ぶんかつ</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>もありますよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'すばらしい！△OAB = △OAC + △OBC（C は<ruby>直線<rt>ちょくせん</rt></ruby>AB と y <ruby>軸<rt>じく</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>）に<ruby>分<rt>わ</rt></ruby>けると<ruby>計算<rt>けいさん</rt></ruby>しやすいよ。OC を<ruby>共通<rt>きょうつう</rt></ruby>の<ruby>底辺<rt>ていへん</rt></ruby>にするんだ。',
    },
    {
      type: 'quiz',
      question: '$y = x^2$ と $y = 4$ の<ruby>交点<rt>こうてん</rt></ruby>の x <ruby>座標<rt>ざひょう</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$x = 2$ と $x = -2$', correct: true },
        { letter: 'B', text: '$x = 4$ と $x = -4$', correct: false },
        { letter: 'C', text: '$x = 2$', correct: false },
        { letter: 'D', text: '$x = 16$ と $x = -16$', correct: false },
      ],
      explanation:
        '$x^2 = 4$ → $x = \\pm 2$。\n<ruby>放物線<rt>ほうぶつせん</rt></ruby>は y <ruby>軸<rt>じく</rt></ruby><ruby>対称<rt>たいしょう</rt></ruby>だから、<ruby>交点<rt>こうてん</rt></ruby>も<ruby>対称<rt>たいしょう</rt></ruby>になるよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>放物線<rt>ほうぶつせん</rt></ruby>と<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>は<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>で<ruby>求<rt>もと</rt></ruby>める。<ruby>面積<rt>めんせき</rt></ruby>は y <ruby>軸<rt>じく</rt></ruby>で<ruby>分割<rt>ぶんかつ</rt></ruby>！',
    },
    {
      type: 'end',
      points: [
        '<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= y$ の<ruby>増加量<rt>ぞうかりょう</rt></ruby> $\\div$ $x$ の<ruby>増加量<rt>ぞうかりょう</rt></ruby>',
        '$y = ax^2$ では<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>が<ruby>区間<rt>くかん</rt></ruby>ごとに<ruby>変<rt>か</rt></ruby>わる（<ruby>一次関数<rt>いちじかんすう</rt></ruby>は<ruby>一定<rt>いってい</rt></ruby>）',
        '<ruby>公式<rt>こうしき</rt></ruby>: $x$ が $p$ → $q$ のとき、<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby> $= a(p + q)$',
        '<ruby>平均<rt>へいきん</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さ = <ruby>距離<rt>きょり</rt></ruby>の<ruby>差<rt>さ</rt></ruby> ÷ <ruby>時間<rt>じかん</rt></ruby>の<ruby>差<rt>さ</rt></ruby>（<ruby>変化<rt>へんか</rt></ruby>の<ruby>割合<rt>わりあい</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ）',
        '<ruby>放物線<rt>ほうぶつせん</rt></ruby>と<ruby>直線<rt>ちょくせん</rt></ruby>の<ruby>交点<rt>こうてん</rt></ruby>は<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>で<ruby>求<rt>もと</rt></ruby>める',
      ],
    },
  ],
};

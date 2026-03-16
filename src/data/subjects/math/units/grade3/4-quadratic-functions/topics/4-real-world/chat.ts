import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const quadFuncRealWorldChat: HistoryChat = {
  id: 'math-g3-quad-func-real',
  icon: '🚗',
  title: '日常への応用をマスターしよう',
  subtitle: '〜中3数学〜 制動距離・ふりこの長さ',
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
      text: '<ruby>制動距離<rt>せいどうきょり</rt></ruby>と y = ax²',
    },
    {
      type: 'narrator',
      text: 'y = ax² は<ruby>教科書<rt>きょうかしょ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>だけじゃない！<ruby>日常生活<rt>にちじょうせいかつ</rt></ruby>にもたくさん<ruby>登場<rt>とうじょう</rt></ruby>するよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>車<rt>くるま</rt></ruby>がブレーキをかけてから<ruby>止<rt>と</rt></ruby>まるまでの<ruby>距離<rt>きょり</rt></ruby>を<strong><ruby>制動距離<rt>せいどうきょり</rt></ruby></strong>というよ。これが<ruby>速度<rt>そくど</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>するんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>速<rt>はや</rt></ruby>さが2<ruby>倍<rt>ばい</rt></ruby>になったら、<ruby>止<rt>と</rt></ruby>まるまでの<ruby>距離<rt>きょり</rt></ruby>も2<ruby>倍<rt>ばい</rt></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そこが<ruby>怖<rt>こわ</rt></ruby>いところ！<ruby>速度<rt>そくど</rt></ruby>が2<ruby>倍<rt>ばい</rt></ruby>だと<ruby>制動距離<rt>せいどうきょり</rt></ruby>は<strong>4<ruby>倍<rt>ばい</rt></ruby></strong>、3<ruby>倍<rt>ばい</rt></ruby>だと<strong>9<ruby>倍<rt>ばい</rt></ruby></strong>になるんだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '9<ruby>倍<rt>ばい</rt></ruby>！？スピードの<ruby>出<rt>だ</rt></ruby>しすぎは<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>危<rt>あぶ</rt></ruby>ないんですね…',
    },
    {
      type: 'whiteboard',
      title: '<ruby>制動距離<rt>せいどうきょり</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '<ruby>制動距離<rt>せいどうきょり</rt></ruby> $y$ m は<ruby>速度<rt>そくど</rt></ruby> $v$ km/h の2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>',
          annotation: '$y = av^2$ とおく',
        },
        {
          formula: '<ruby>時速<rt>じそく</rt></ruby>30km → $y = 9$ m',
          annotation: '$9 = a \\times 30^2$ → $9 = 900a$ → $a = 0.01$',
          animateInsert: true,
        },
        {
          formula: '$y = 0.01v^2$',
          animateInsert: true,
          isResult: true,
          annotation: 'これで<ruby>任意<rt>にんい</rt></ruby>の<ruby>速度<rt>そくど</rt></ruby>から<ruby>制動距離<rt>せいどうきょり</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められる！',
        },
        {
          formula: '<ruby>時速<rt>じそく</rt></ruby>60km → $y = 0.01 \\times 60^2 = 36$ m',
          annotation: '<ruby>速度<rt>そくど</rt></ruby>2<ruby>倍<rt>ばい</rt></ruby>で<ruby>距離<rt>きょり</rt></ruby>は4<ruby>倍<rt>ばい</rt></ruby>（9m → 36m）',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>比例定数<rt>ひれいていすう</rt></ruby> a を<ruby>先<rt>さき</rt></ruby>に<ruby>求<rt>もと</rt></ruby>めてから<ruby>式<rt>しき</rt></ruby>を<ruby>完成<rt>かんせい</rt></ruby>させるんですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>制動距離<rt>せいどうきょり</rt></ruby>は<ruby>速度<rt>そくど</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>。<ruby>速度<rt>そくど</rt></ruby>2<ruby>倍<rt>ばい</rt></ruby> → <ruby>距離<rt>きょり</rt></ruby>4<ruby>倍<rt>ばい</rt></ruby>！',
    },
    {
      type: 'date',
      text: 'ふりこの<ruby>長<rt>なが</rt></ruby>さの<ruby>問題<rt>もんだい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もう1つ<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>例<rt>れい</rt></ruby>を<ruby>紹介<rt>しょうかい</rt></ruby>するよ。ふりこが1<ruby>往復<rt>おうふく</rt></ruby>する<ruby>時間<rt>じかん</rt></ruby>は、ひもの<ruby>長<rt>なが</rt></ruby>さに<ruby>関係<rt>かんけい</rt></ruby>するんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ひもが<ruby>長<rt>なが</rt></ruby>いほどゆっくり<ruby>揺<rt>ゆ</rt></ruby>れるやつですよね！',
    },
    {
      type: 'whiteboard',
      title: 'ふりこの<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: 'ひもの<ruby>長<rt>なが</rt></ruby>さ $L$ cm、1<ruby>往復<rt>おうふく</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby> $T$ <ruby>秒<rt>びょう</rt></ruby>',
          annotation: '$T^2$ が $L$ に<ruby>比例<rt>ひれい</rt></ruby>する → $T^2 = aL$',
        },
        {
          formula: '$L = 25$ のとき $T = 1$',
          annotation: '$1^2 = a \\times 25$ → $a = \\frac{1}{25} = 0.04$',
          animateInsert: true,
        },
        {
          formula: '$T^2 = 0.04L$',
          animateInsert: true,
          isResult: true,
        },
        {
          formula: '$L = 100$ のとき $T^2 = 4$ → $T = 2$ <ruby>秒<rt>びょう</rt></ruby>',
          annotation: '$L$ が4<ruby>倍<rt>ばい</rt></ruby> → $T$ は2<ruby>倍<rt>ばい</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'T² = aL だから、L が4<ruby>倍<rt>ばい</rt></ruby>になると T は2<ruby>倍<rt>ばい</rt></ruby>になるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！<ruby>平方根<rt>へいほうこん</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>が<ruby>使<rt>つか</rt></ruby>えるね。2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>する<ruby>関係<rt>かんけい</rt></ruby>は<ruby>色々<rt>いろいろ</rt></ruby>な<ruby>場面<rt>ばめん</rt></ruby>で<ruby>登場<rt>とうじょう</rt></ruby>するよ。',
    },
    {
      type: 'quiz',
      question: '<ruby>時速<rt>じそく</rt></ruby>40kmの<ruby>制動距離<rt>せいどうきょり</rt></ruby>が16mのとき、<ruby>時速<rt>じそく</rt></ruby>80kmの<ruby>制動距離<rt>せいどうきょり</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$32$ m', correct: false },
        { letter: 'B', text: '$48$ m', correct: false },
        { letter: 'C', text: '$64$ m', correct: true },
        { letter: 'D', text: '$128$ m', correct: false },
      ],
      explanation:
        '<ruby>速度<rt>そくど</rt></ruby>が2<ruby>倍<rt>ばい</rt></ruby>（40→80）→ <ruby>制動距離<rt>せいどうきょり</rt></ruby>は $2^2 = 4$<ruby>倍<rt>ばい</rt></ruby>。$16 \\times 4 = \\textcolor{#D97706}{64}$ m',
    },
    {
      type: 'summary-point',
      text: '2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>する<ruby>関係<rt>かんけい</rt></ruby>は<ruby>日常<rt>にちじょう</rt></ruby>にたくさんある！<ruby>比例定数<rt>ひれいていすう</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めて<ruby>式<rt>しき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ろう。',
    },
    {
      type: 'date',
      text: '<ruby>図形<rt>ずけい</rt></ruby>の<ruby>移動<rt>いどう</rt></ruby>と<ruby>面積<rt>めんせき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>入試<rt>にゅうし</rt></ruby>で<ruby>人気<rt>にんき</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>！<ruby>長方形<rt>ちょうほうけい</rt></ruby>を<ruby>直線<rt>ちょくせん</rt></ruby>にそって<ruby>移動<rt>いどう</rt></ruby>させると、<ruby>重<rt>かさ</rt></ruby>なる<ruby>部分<rt>ぶぶん</rt></ruby>の<ruby>面積<rt>めんせき</rt></ruby>が<ruby>変<rt>か</rt></ruby>わるよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>重<rt>かさ</rt></ruby>なる<ruby>部分<rt>ぶぶん</rt></ruby>って<ruby>三角形<rt>さんかくけい</rt></ruby>になるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>三角形<rt>さんかくけい</rt></ruby>で、<ruby>面積<rt>めんせき</rt></ruby> $y = \\frac{1}{2}x \\times x = \\frac{1}{2}x^2$ のように x² に<ruby>比例<rt>ひれい</rt></ruby>するんだ。でも<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>重<rt>かさ</rt></ruby>なった<ruby>後<rt>あと</rt></ruby>は<ruby>台形<rt>だいけい</rt></ruby>になったりして<ruby>式<rt>しき</rt></ruby>が<ruby>変<rt>か</rt></ruby>わるよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>図形<rt>ずけい</rt></ruby>の<ruby>移動<rt>いどう</rt></ruby>の<ruby>例<rt>れい</rt></ruby>',
      steps: [
        {
          formula: '1<ruby>辺<rt>ぺん</rt></ruby> 6cm の<ruby>正方形<rt>せいほうけい</rt></ruby>が $x$ cm <ruby>重<rt>かさ</rt></ruby>なるとき',
          annotation: '<ruby>重<rt>かさ</rt></ruby>なる<ruby>部分<rt>ぶぶん</rt></ruby>は<ruby>直角二等辺三角形<rt>ちょっかくにとうへんさんかくけい</rt></ruby>',
        },
        {
          formula: '$y = \\frac{1}{2} \\times x \\times x = \\frac{1}{2}x^2$',
          animateInsert: true,
          isResult: true,
          annotation: '$0 \\leq x \\leq 6$ の<ruby>範囲<rt>はんい</rt></ruby>',
        },
        {
          formula: '<ruby>面積<rt>めんせき</rt></ruby>が $8$ cm² のとき: $8 = \\frac{1}{2}x^2$ → $x^2 = 16$ → $x = 4$',
          annotation: '$x > 0$ だから $x = 4$ cm',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>変域<rt>へんいき</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>して、<ruby>式<rt>しき</rt></ruby>が<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つ<ruby>範囲<rt>はんい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>するのが<ruby>大事<rt>だいじ</rt></ruby>ですね！',
    },
    {
      type: 'summary-point',
      text: '<ruby>図形<rt>ずけい</rt></ruby>の<ruby>移動<rt>いどう</rt></ruby>では<ruby>重<rt>かさ</rt></ruby>なる<ruby>形<rt>かたち</rt></ruby>に<ruby>注目<rt>ちゅうもく</rt></ruby>。<ruby>変域<rt>へんいき</rt></ruby>で<ruby>式<rt>しき</rt></ruby>が<ruby>変<rt>か</rt></ruby>わることもある！',
    },
    {
      type: 'date',
      text: 'いろいろな<ruby>関数<rt>かんすう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>に、y = ax² <ruby>以外<rt>いがい</rt></ruby>の<ruby>関数<rt>かんすう</rt></ruby>も<ruby>見<rt>み</rt></ruby>てみよう。<ruby>駐車料金<rt>ちゅうしゃりょうきん</rt></ruby>みたいに「<ruby>階段状<rt>かいだんじょう</rt></ruby>」になるグラフもあるんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>最初<rt>さいしょ</rt></ruby>の1<ruby>時間<rt>じかん</rt></ruby>300<ruby>円<rt>えん</rt></ruby>、そのあと30<ruby>分<rt>ぷん</rt></ruby>ごとに100<ruby>円<rt>えん</rt></ruby><ruby>追加<rt>ついか</rt></ruby>…みたいなやつですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！グラフが<ruby>階段<rt>かいだん</rt></ruby>みたいに<ruby>段々<rt>だんだん</rt></ruby><ruby>上<rt>あ</rt></ruby>がるんだ。<ruby>直線<rt>ちょくせん</rt></ruby>でも<ruby>放物線<rt>ほうぶつせん</rt></ruby>でもないけど、x が<ruby>決<rt>き</rt></ruby>まれば y も<ruby>決<rt>き</rt></ruby>まるから<ruby>立派<rt>りっぱ</rt></ruby>な<ruby>関数<rt>かんすう</rt></ruby>だよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>水<rt>みず</rt></ruby>そうに<ruby>水<rt>みず</rt></ruby>を<ruby>入<rt>い</rt></ruby>れる<ruby>問題<rt>もんだい</rt></ruby>もあるよ。<ruby>底面<rt>ていめん</rt></ruby>が<ruby>一定<rt>いってい</rt></ruby>なら<ruby>直線<rt>ちょくせん</rt></ruby>、<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>太<rt>ふと</rt></ruby>くなるとグラフの<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>変<rt>か</rt></ruby>わるんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>関数<rt>かんすう</rt></ruby>っていろんな<ruby>場面<rt>ばめん</rt></ruby>で<ruby>使<rt>つか</rt></ruby>われてるんですね！',
    },
    {
      type: 'quiz',
      question: '<ruby>駐車料金<rt>ちゅうしゃりょうきん</rt></ruby>が「<ruby>最初<rt>さいしょ</rt></ruby>の1<ruby>時間<rt>じかん</rt></ruby>500<ruby>円<rt>えん</rt></ruby>、<ruby>以後<rt>いご</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>ごとに200<ruby>円<rt>えん</rt></ruby>」のとき、2<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>の<ruby>料金<rt>りょうきん</rt></ruby>は？',
      options: [
        { letter: 'A', text: '$900$ <ruby>円<rt>えん</rt></ruby>', correct: false },
        { letter: 'B', text: '$1100$ <ruby>円<rt>えん</rt></ruby>', correct: true },
        { letter: 'C', text: '$1300$ <ruby>円<rt>えん</rt></ruby>', correct: false },
        { letter: 'D', text: '$1500$ <ruby>円<rt>えん</rt></ruby>', correct: false },
      ],
      explanation:
        '<ruby>最初<rt>さいしょ</rt></ruby>1<ruby>時間<rt>じかん</rt></ruby>: $500$<ruby>円<rt>えん</rt></ruby>。<ruby>残<rt>のこ</rt></ruby>り1<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby> = 30<ruby>分<rt>ぷん</rt></ruby>×3<ruby>回<rt>かい</rt></ruby> → $200 \\times 3 = 600$<ruby>円<rt>えん</rt></ruby>。<ruby>合計<rt>ごうけい</rt></ruby> $500 + 600 = \\textcolor{#D97706}{1100}$<ruby>円<rt>えん</rt></ruby>',
    },
    {
      type: 'summary-point',
      text: '<ruby>関数<rt>かんすう</rt></ruby>は<ruby>直線<rt>ちょくせん</rt></ruby>や<ruby>放物線<rt>ほうぶつせん</rt></ruby>だけじゃない。<ruby>階段状<rt>かいだんじょう</rt></ruby>グラフや<ruby>水<rt>みず</rt></ruby>そうの<ruby>問題<rt>もんだい</rt></ruby>も<ruby>関数<rt>かんすう</rt></ruby>！',
    },
    {
      type: 'end',
      points: [
        '<ruby>制動距離<rt>せいどうきょり</rt></ruby>は<ruby>速度<rt>そくど</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>（$y = av^2$）',
        'ふりこの<ruby>周期<rt>しゅうき</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>はひもの<ruby>長<rt>なが</rt></ruby>さに<ruby>比例<rt>ひれい</rt></ruby>（$T^2 = aL$）',
        '<ruby>図形<rt>ずけい</rt></ruby>の<ruby>移動<rt>いどう</rt></ruby>で<ruby>重<rt>かさ</rt></ruby>なる<ruby>面積<rt>めんせき</rt></ruby>が $x^2$ に<ruby>比例<rt>ひれい</rt></ruby>するケースがある',
        '<ruby>階段状<rt>かいだんじょう</rt></ruby>グラフ・<ruby>水<rt>みず</rt></ruby>そうなど、いろいろな<ruby>関数<rt>かんすう</rt></ruby>がある',
        '<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>値<rt>あたい</rt></ruby>から<ruby>比例定数<rt>ひれいていすう</rt></ruby> $a$ を<ruby>求<rt>もと</rt></ruby>めて<ruby>立式<rt>りっしき</rt></ruby>しよう',
      ],
    },
  ],
};

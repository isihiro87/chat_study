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
      question: '<ruby>時速<rt>じそく</rt></ruby>40km の<ruby>制動距離<rt>せいどうきょり</rt></ruby>が 16m のとき、<ruby>時速<rt>じそく</rt></ruby>80km の<ruby>制動距離<rt>せいどうきょり</rt></ruby>は？',
      options: [
        { letter: 'A', text: '32m', correct: false },
        { letter: 'B', text: '48m', correct: false },
        { letter: 'C', text: '64m', correct: true },
        { letter: 'D', text: '128m', correct: false },
      ],
      explanation:
        '<ruby>速度<rt>そくど</rt></ruby>が2<ruby>倍<rt>ばい</rt></ruby>（40→80）→ <ruby>制動距離<rt>せいどうきょり</rt></ruby>は 2² = 4<ruby>倍<rt>ばい</rt></ruby>。16 × 4 = <strong>64m</strong>',
    },
    {
      type: 'summary-point',
      text: '2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>する<ruby>関係<rt>かんけい</rt></ruby>は<ruby>日常<rt>にちじょう</rt></ruby>にたくさんある！<ruby>比例定数<rt>ひれいていすう</rt></ruby>を<ruby>求<rt>もと</rt></ruby>めて<ruby>式<rt>しき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ろう。',
    },
    {
      type: 'end',
      points: [
        '<ruby>制動距離<rt>せいどうきょり</rt></ruby>は<ruby>速度<rt>そくど</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>（y = av²）',
        'ふりこの<ruby>周期<rt>しゅうき</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>はひもの<ruby>長<rt>なが</rt></ruby>さに<ruby>比例<rt>ひれい</rt></ruby>（T² = aL）',
        '<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>値<rt>あたい</rt></ruby>から<ruby>比例定数<rt>ひれいていすう</rt></ruby> a を<ruby>求<rt>もと</rt></ruby>めて<ruby>立式<rt>りっしき</rt></ruby>しよう',
        '<ruby>速度<rt>そくど</rt></ruby>2<ruby>倍<rt>ばい</rt></ruby> → <ruby>距離<rt>きょり</rt></ruby>4<ruby>倍<rt>ばい</rt></ruby>、3<ruby>倍<rt>ばい</rt></ruby> → 9<ruby>倍<rt>ばい</rt></ruby>（スピードに<ruby>注意<rt>ちゅうい</rt></ruby>！）',
      ],
    },
  ],
};

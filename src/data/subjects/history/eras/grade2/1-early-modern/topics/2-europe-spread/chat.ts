import type { HistoryChat } from '../../../../../../../history-chat/types';

export const europeSpreadChat: HistoryChat = {
  id: 'europe-spread',
  icon: '🚢',
  title: '大航海時代',
  subtitle: '〜15〜16世紀〜 新航路の開拓と世界の一体化',
  characters: [
    {
      id: 'navigator',
      name: '航海士',
      emoji: '🚢',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
      expressions: {
        explaining: '🧐',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👧',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♀️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '15世紀〜16世紀',
    },
    {
      type: 'narrator',
      text: 'ヨーロッパの国々はアジアの<strong><span class="keyword"><span data-tooltip="コショウなど料理に使う植物性の調味料。当時ヨーロッパでは非常に高価だった"><ruby>香辛料<rp>(</rp><rt>こうしんりょう</rt><rp>)</rp></ruby></span></span></strong>や富を求めて、新しい<ruby>航路<rp>(</rp><rt>こうろ</rt><rp>)</rp></ruby>の<ruby>開拓<rp>(</rp><rt>かいたく</rt><rp>)</rp></ruby>に乗り出しました。これが<strong><span class="keyword"><ruby>大航海時代<rp>(</rp><rt>だいこうかいじだい</rt><rp>)</rp></ruby></span></strong>の始まりです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'navigator',
      expression: 'explaining',
      text: '<strong><span class="keyword">コロンブス</span></strong>は1492年、スペインの<ruby>援助<rp>(</rp><rt>えんじょ</rt><rp>)</rp></ruby>を受けて<ruby>大西洋<rp>(</rp><rt>たいせいよう</rt><rp>)</rp></ruby>を<ruby>横断<rp>(</rp><rt>おうだん</rt><rp>)</rp></ruby>し、<ruby>西<rp>(</rp><rt>にし</rt><rp>)</rp></ruby>インド<ruby>諸島<rp>(</rp><rt>しょとう</rt><rp>)</rp></ruby>に<ruby>到達<rp>(</rp><rt>とうたつ</rt><rp>)</rp></ruby>したんだ。本人はアジアだと思っていたけど、実は<ruby>新大陸<rp>(</rp><rt>しんたいりく</rt><rp>)</rp></ruby>だったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'アジアを目指していたのに新大陸に着いたんですか！？ 他にはどんな<ruby>航海者<rp>(</rp><rt>こうかいしゃ</rt><rp>)</rp></ruby>がいたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'navigator',
      expression: 'excited',
      text: 'ポルトガルの<strong><span class="keyword"><span data-tooltip="ポルトガルの航海者。1498年にアフリカ南端を回ってインドに到達した">バスコ・ダ・ガマ</span></span></strong>は1498年にアフリカ<ruby>南端<rp>(</rp><rt>なんたん</rt><rp>)</rp></ruby>を回ってインドに到達した。これでアジアとの<ruby>直接<rp>(</rp><rt>ちょくせつ</rt><rp>)</rp></ruby>貿易が可能になったんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '地球が丸いことはこの時代に<ruby>証明<rp>(</rp><rt>しょうめい</rt><rp>)</rp></ruby>されたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'navigator',
      expression: 'happy',
      text: 'そうだよ！<strong><span class="keyword"><span data-tooltip="ポルトガルの航海者。船団が1522年に世界一周を達成し、地球が丸いことを実証した">マゼラン</span></span></strong>の船団が1522年に<ruby>世界一周<rp>(</rp><rt>せかいいっしゅう</rt><rp>)</rp></ruby>を<ruby>達成<rp>(</rp><rt>たっせい</rt><rp>)</rp></ruby>して、地球が丸いことが実際に証明されたんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">コロンブス</span>（1492年・西インド諸島）→ <span class="keyword">バスコ・ダ・ガマ</span>（1498年・インド）→ <span class="keyword">マゼラン</span>船団（1522年・世界一周）',
    },
    {
      type: 'quiz',
      question: '1492年にスペインの援助を受けて大西洋を横断し、西インド諸島に到達した人物は誰？',
      options: [
        { letter: 'A', text: 'バスコ・ダ・ガマ', correct: false },
        { letter: 'B', text: 'マゼラン', correct: false },
        { letter: 'C', text: 'コロンブス', correct: true },
        { letter: 'D', text: 'マルコ・ポーロ', correct: false },
      ],
      explanation: '<strong>正解はC「コロンブス」</strong>です。1492年にスペインの<ruby>援助<rp>(</rp><rt>えんじょ</rt><rp>)</rp></ruby>で<ruby>大西洋<rp>(</rp><rt>たいせいよう</rt><rp>)</rp></ruby>を<ruby>横断<rp>(</rp><rt>おうだん</rt><rp>)</rp></ruby>し、西インド<ruby>諸島<rp>(</rp><rt>しょとう</rt><rp>)</rp></ruby>に到達しました。本人はアジアと信じていました。',
    },
    {
      type: 'narrator',
      text: 'ヨーロッパ人の<ruby>進出<rp>(</rp><rt>しんしゅつ</rt><rp>)</rp></ruby>は、アメリカ大陸の<ruby>先住民<rp>(</rp><rt>せんじゅうみん</rt><rp>)</rp></ruby>に<ruby>壊滅的<rp>(</rp><rt>かいめつてき</rt><rp>)</rp></ruby>な<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>を与えました。一方、<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>との貿易が<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>していきました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'navigator',
      expression: 'thinking',
      text: 'スペインは南米の<strong><span class="keyword"><span data-tooltip="南米ペルーを中心に栄えた帝国。16世紀にスペインに征服された">インカ帝国</span></span></strong>やアステカ<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby>を<ruby>征服<rp>(</rp><rt>せいふく</rt><rp>)</rp></ruby>して、大量の銀を本国に持ち帰ったんだ。先住民は<ruby>疫病<rp>(</rp><rt>えきびょう</rt><rp>)</rp></ruby>や<ruby>過酷<rp>(</rp><rt>かこく</rt><rp>)</rp></ruby>な<ruby>労働<rp>(</rp><rt>ろうどう</rt><rp>)</rp></ruby>で<ruby>激減<rp>(</rp><rt>げきげん</rt><rp>)</rp></ruby>してしまったんだ…',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'その後、ヨーロッパの国々はアジアともっと貿易を広げていったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'navigator',
      expression: 'explaining',
      text: 'そうだね。のちにオランダやイギリスは<strong><span class="keyword"><span data-tooltip="オランダやイギリスがアジアとの貿易を独占するために設立した特許会社"><ruby>東インド会社<rp>(</rp><rt>ひがしいんどがいしゃ</rt><rp>)</rp></ruby></span></span></strong>を<ruby>設立<rp>(</rp><rt>せつりつ</rt><rp>)</rp></ruby>して、アジアとの貿易を<ruby>独占<rp>(</rp><rt>どくせん</rt><rp>)</rp></ruby>しようとしたんだ。これが植民地<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>の始まりだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '香辛料を求めた航海が、やがて世界中を巻きこむ貿易と植民地支配につながっていったんですね',
    },
    {
      type: 'summary-point',
      text: 'スペインが<span class="keyword">インカ帝国</span>を征服。オランダ・イギリスは<span class="keyword">東インド会社</span>でアジア貿易を独占！',
    },
    {
      type: 'quiz',
      question: 'オランダやイギリスがアジア貿易のために設立した会社を何という？',
      options: [
        { letter: 'A', text: '南蛮貿易会社', correct: false },
        { letter: 'B', text: '香辛料貿易会社', correct: false },
        { letter: 'C', text: '西インド会社', correct: false },
        { letter: 'D', text: '東インド会社', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>東インド会社<rp>(</rp><rt>ひがしいんどがいしゃ</rt><rp>)</rp></ruby>」</strong>です。オランダやイギリスがアジアとの貿易を<ruby>独占<rp>(</rp><rt>どくせん</rt><rp>)</rp></ruby>するために<ruby>設立<rp>(</rp><rt>せつりつ</rt><rp>)</rp></ruby>した<ruby>特許会社<rp>(</rp><rt>とっきょがいしゃ</rt><rp>)</rp></ruby>で、<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>支配の<ruby>拠点<rp>(</rp><rt>きょてん</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>大航海時代<rp>(</rp><rt>だいこうかいじだい</rt><rp>)</rp></ruby></strong>：<strong><ruby>香辛料<rp>(</rp><rt>こうしんりょう</rt><rp>)</rp></ruby></strong>や富を求めて新航路を開拓',
        '<strong>コロンブス</strong>（1492年）：西インド<ruby>諸島<rp>(</rp><rt>しょとう</rt><rp>)</rp></ruby>到達。<strong>バスコ・ダ・ガマ</strong>（1498年）：インド航路開拓',
        '<strong>マゼラン</strong>船団（1522年）：世界一周達成。<strong>インカ<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby></strong>の<ruby>征服<rp>(</rp><rt>せいふく</rt><rp>)</rp></ruby>',
        '<strong><ruby>東インド会社<rp>(</rp><rt>ひがしいんどがいしゃ</rt><rp>)</rp></ruby></strong>：オランダ・イギリスがアジア貿易のために設立',
      ],
    },
  ],
};

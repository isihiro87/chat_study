import type { HistoryChat } from '../../../../../../../history-chat/types';

export const medievalEuropeIslamChat: HistoryChat = {
  id: 'medieval-europe-islam',
  icon: '⛪',
  title: '中世ヨーロッパとイスラーム',
  subtitle: '〜中世〜 十字軍とイスラーム文化',
  characters: [
    {
      id: 'knight',
      name: '騎士',
      emoji: '⚔️',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
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
      text: '11世紀〜16世紀',
    },
    {
      type: 'narrator',
      text: '<ruby>中世<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby>ヨーロッパでは<strong><span class="keyword"><ruby>ローマ教皇<rp>(</rp><rt>ローマきょうこう</rt><rp>)</rp></ruby></span></strong>を<ruby>頂点<rp>(</rp><rt>ちょうてん</rt><rp>)</rp></ruby>とする<strong><span class="keyword">カトリック<ruby>教会<rp>(</rp><rt>きょうかい</rt><rp>)</rp></ruby></span></strong>が大きな力を持ちました。一方、東ヨーロッパでは<strong><span class="keyword">ビザンツ<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby></span></strong>のもとで<strong><span class="keyword"><ruby>正教会<rp>(</rp><rt>せいきょうかい</rt><rp>)</rp></ruby></span></strong>が広まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'knight',
      expression: 'explaining',
      text: '<span data-tooltip="キリスト教カトリック教会の最高指導者"><strong>ローマ教皇</strong></span>の呼びかけで、<ruby>聖地<rp>(</rp><rt>せいち</rt><rp>)</rp></ruby>エルサレムを取り戻すために<strong><span class="keyword"><ruby>十字軍<rp>(</rp><rt>じゅうじぐん</rt><rp>)</rp></ruby></span></strong>が<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>されたんだ。約200年にわたって何度も<ruby>遠征<rp>(</rp><rt>えんせい</rt><rp>)</rp></ruby>が行われた',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '200年もですか！結局、聖地は取り戻せたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'knight',
      expression: 'thinking',
      text: '結局、聖地の<ruby>奪還<rp>(</rp><rt>だっかん</rt><rp>)</rp></ruby>には失敗してしまった。でも<strong>十字軍</strong>をきっかけに東方の文化や品物がヨーロッパに伝わったんだ。その一方で<ruby>教皇<rp>(</rp><rt>きょうこう</rt><rp>)</rp></ruby>の<ruby>権威<rp>(</rp><rt>けんい</rt><rp>)</rp></ruby>は<ruby>衰<rp>(</rp><rt>おとろ</rt><rp>)</rp></ruby>えていった',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '失敗したのに文化が広まったんですね。戦争にもそういう一面があるんだ...',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">十字軍</span>：<span class="keyword">ローマ教皇</span>の呼びかけで聖地エルサレム奪還を目指すも失敗。東西の文化交流が進んだ',
    },
    {
      type: 'quiz',
      question: '中世ヨーロッパで聖地エルサレム奪還のために派遣された軍を何という？',
      options: [
        { letter: 'A', text: '騎士団', correct: false },
        { letter: 'B', text: '十字軍', correct: true },
        { letter: 'C', text: '傭兵団', correct: false },
        { letter: 'D', text: '遠征軍', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>十字軍<rp>(</rp><rt>じゅうじぐん</rt><rp>)</rp></ruby>」</strong>です。11世紀末から<ruby>ローマ教皇<rp>(</rp><rt>ローマきょうこう</rt><rp>)</rp></ruby>の呼びかけで聖地エルサレム<ruby>奪還<rp>(</rp><rt>だっかん</rt><rp>)</rp></ruby>を目指して<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>されました。約200年にわたり数回の<ruby>遠征<rp>(</rp><rt>えんせい</rt><rp>)</rp></ruby>が行われました。',
    },
    {
      type: 'narrator',
      text: 'イスラーム世界では学問や<ruby>芸術<rp>(</rp><rt>げいじゅつ</rt><rp>)</rp></ruby>が大いに<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>し、ヨーロッパにも大きな<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>を<ruby>与<rp>(</rp><rt>あた</rt><rp>)</rp></ruby>えました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'knight',
      expression: 'explaining',
      text: 'イスラーム世界ではインド生まれの<strong>ゼロ</strong>の<ruby>概念<rp>(</rp><rt>がいねん</rt><rp>)</rp></ruby>を取り入れ、<strong><ruby>医学<rp>(</rp><rt>いがく</rt><rp>)</rp></ruby></strong>も世界最高<ruby>水準<rp>(</rp><rt>すいじゅん</rt><rp>)</rp></ruby>に達したんだ。<strong><span class="keyword"><ruby>アラベスク<rp>(</rp><rt>あらべすく</rt><rp>)</rp></ruby></span></strong>と呼ばれる美しい<span data-tooltip="直線や曲線を組み合わせた規則的な模様"><ruby>幾何学模様<rp>(</rp><rt>きかがくもよう</rt><rp>)</rp></ruby></span>の<ruby>芸術<rp>(</rp><rt>げいじゅつ</rt><rp>)</rp></ruby>も生まれた',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'アラベスクってどういう模様なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'knight',
      expression: 'happy',
      text: '<ruby>幾何学的<rp>(</rp><rt>きかがくてき</rt><rp>)</rp></ruby>な模様を<ruby>繰<rp>(</rp><rt>く</rt><rp>)</rp></ruby>り返す美しいデザインで、モスクの<ruby>装飾<rp>(</rp><rt>そうしょく</rt><rp>)</rp></ruby>などに使われたんだ。イスラームでは人や動物の<ruby>偶像<rp>(</rp><rt>ぐうぞう</rt><rp>)</rp></ruby>を描かないから、模様の芸術が発展したんだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'knight',
      expression: 'excited',
      text: '16世紀には<strong><span class="keyword">オスマン<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby></span></strong>がイスタンブールを<ruby>首都<rp>(</rp><rt>しゅと</rt><rp>)</rp></ruby>として大帝国を築いた。<strong>ビザンツ帝国</strong>を<ruby>滅<rp>(</rp><rt>ほろ</rt><rp>)</rp></ruby>ぼし、ヨーロッパにも<ruby>脅威<rp>(</rp><rt>きょうい</rt><rp>)</rp></ruby>を与えたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'イスラーム世界は学問も芸術もすごかったんですね！',
    },
    {
      type: 'summary-point',
      text: 'イスラーム：<span class="keyword">ゼロ</span>の概念・<span class="keyword">医学</span>・<span class="keyword">アラベスク</span>が発展。<span class="keyword">オスマン帝国</span>が大帝国を築いた',
    },
    {
      type: 'quiz',
      question: 'イスラーム世界で発展した、幾何学的な模様の芸術を何という？',
      options: [
        { letter: 'A', text: 'モザイク', correct: false },
        { letter: 'B', text: 'アラベスク', correct: true },
        { letter: 'C', text: 'ステンドグラス', correct: false },
        { letter: 'D', text: 'フレスコ', correct: false },
      ],
      explanation: '<strong>正解はB「アラベスク」</strong>です。アラベスクはイスラーム世界で発展した<ruby>幾何学的<rp>(</rp><rt>きかがくてき</rt><rp>)</rp></ruby>な模様の<ruby>芸術<rp>(</rp><rt>げいじゅつ</rt><rp>)</rp></ruby>で、モスクの<ruby>装飾<rp>(</rp><rt>そうしょく</rt><rp>)</rp></ruby>などに用いられました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>ローマ教皇<rp>(</rp><rt>ローマきょうこう</rt><rp>)</rp></ruby></strong>：カトリック教会の頂点。<strong><ruby>正教会<rp>(</rp><rt>せいきょうかい</rt><rp>)</rp></ruby></strong>と<strong>カトリック教会</strong>に分裂',
        '<strong><ruby>十字軍<rp>(</rp><rt>じゅうじぐん</rt><rp>)</rp></ruby></strong>：聖地エルサレム<ruby>奪還<rp>(</rp><rt>だっかん</rt><rp>)</rp></ruby>のために<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>（約200年）',
        'イスラーム：<strong>ゼロ</strong>の概念・<strong><ruby>医学<rp>(</rp><rt>いがく</rt><rp>)</rp></ruby></strong>・<strong>アラベスク</strong>が発展',
        '<strong><ruby>ビザンツ帝国<rp>(</rp><rt>びざんつていこく</rt><rp>)</rp></ruby></strong>（東ローマ帝国）と<strong>オスマン<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};

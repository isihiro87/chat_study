import type { HistoryChat } from '../../../../../../../history-chat/types';

export const nationalismEuropeChat: HistoryChat = {
  id: 'nationalism-europe',
  icon: '🌍',
  title: 'ヨーロッパの国民意識の高まり',
  subtitle: '〜近代〜 「国民」の誕生と国民国家',
  characters: [
    {
      id: 'professor',
      name: 'ヨーロッパ史の先生',
      emoji: '🌍',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
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
      text: '19世紀のヨーロッパ',
    },
    {
      type: 'narrator',
      text: 'フランス<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby>の「自由・<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>」の<ruby>理想<rp>(</rp><rt>りそう</rt><rp>)</rp></ruby>がナポレオンの<ruby>遠征<rp>(</rp><rt>えんせい</rt><rp>)</rp></ruby>でヨーロッパ中に広まりました。人々は<strong><span class="keyword"><span data-tooltip="同じ言葉・文化・歴史を持つ人々が「国民」としてまとまろうとする意識"><ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby></span></span></strong>という意識に目覚めていきます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: '同じ言葉、同じ文化を持つ人々が「<strong>国民</strong>」としてまとまり、<strong><span class="keyword"><ruby>国民国家<rp>(</rp><rt>こくみんこっか</rt><rp>)</rp></ruby></span></strong>を作ろうとする<ruby>動<rp>(</rp><rt>うご</rt><rp>)</rp></ruby>きが広がったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>国民国家</strong>をまとめるために、具体的にはどんなことをしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>徴兵制<rp>(</rp><rt>ちょうへいせい</rt><rp>)</rp></ruby></span></strong>で<span data-tooltip="国民全員が兵士として国を守る義務を負うこと">国民皆兵</span>にしたり、<strong><span class="keyword"><ruby>義務教育<rp>(</rp><rt>ぎむきょういく</rt><rp>)</rp></ruby></span></strong>で同じ言葉や歴史を学ばせたりして、<ruby>一体感<rp>(</rp><rt>いったいかん</rt><rp>)</rp></ruby>を育てたんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">国民</span>意識の目覚め → <span class="keyword">国民国家</span>の形成（<span class="keyword">徴兵制</span>・<span class="keyword">義務教育</span>の普及）',
    },
    {
      type: 'quiz',
      question: '国民としての一体感を育むため、国が定めた学校教育を何という？',
      options: [
        { letter: 'A', text: '徴兵制', correct: false },
        { letter: 'B', text: '普通選挙', correct: false },
        { letter: 'C', text: '義務教育', correct: true },
        { letter: 'D', text: '政党政治', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>義務教育<rp>(</rp><rt>ぎむきょういく</rt><rp>)</rp></ruby>」</strong>です。同じ言葉や歴史を学ぶことで<ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby>としての<ruby>一体感<rp>(</rp><rt>いったいかん</rt><rp>)</rp></ruby>が育まれました。',
    },
    {
      type: 'narrator',
      text: 'フランスでは<strong><span class="keyword"><ruby>男性普通選挙<rp>(</rp><rt>だんせいふつうせんきょ</rt><rp>)</rp></ruby></span></strong>が<ruby>実現<rp>(</rp><rt>じつげん</rt><rp>)</rp></ruby>。イギリスでは<ruby>二大政党<rp>(</rp><rt>にだいせいとう</rt><rp>)</rp></ruby>による<strong><span class="keyword"><ruby>政党政治<rp>(</rp><rt>せいとうせいじ</rt><rp>)</rp></ruby></span></strong>が発展しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ドイツはどうやって一つの国にまとまったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'excited',
      text: 'プロイセンの<ruby>首相<rp>(</rp><rt>しゅしょう</rt><rp>)</rp></ruby><strong><span class="keyword">ビスマルク</span></strong>が「現在の大問題は<ruby>演説<rp>(</rp><rt>えんぜつ</rt><rp>)</rp></ruby>や多数決ではなく、<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>と<ruby>血<rp>(</rp><rt>ち</rt><rp>)</rp></ruby>によって<ruby>解決<rp>(</rp><rt>かいけつ</rt><rp>)</rp></ruby>される」と言って、<ruby>軍事力<rp>(</rp><rt>ぐんじりょく</rt><rp>)</rp></ruby>でドイツを統一したんだ。「<strong><span class="keyword"><span data-tooltip="鉄（武器）と血（兵士）で国を強くするという意味の呼び名"><ruby>鉄血宰相<rp>(</rp><rt>てっけつさいしょう</rt><rp>)</rp></ruby></span></span></strong>」と呼ばれたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '話し合いではなく<ruby>軍事力<rp>(</rp><rt>ぐんじりょく</rt><rp>)</rp></ruby>で統一したから「<strong>鉄血宰相</strong>」なんですね！',
    },
    {
      type: 'summary-point',
      text: 'フランス：<span class="keyword">男性普通選挙</span> / イギリス：<span class="keyword">政党政治</span> / ドイツ：<span class="keyword">ビスマルク</span>（<span class="keyword">鉄血宰相</span>）が統一',
    },
    {
      type: 'quiz',
      question: '「鉄と血」でドイツを統一した「鉄血宰相」は？',
      options: [
        { letter: 'A', text: 'ナポレオン', correct: false },
        { letter: 'B', text: 'ビスマルク', correct: true },
        { letter: 'C', text: 'ワシントン', correct: false },
        { letter: 'D', text: 'リンカン', correct: false },
      ],
      explanation:
        '<strong>正解はB「ビスマルク」</strong>です。プロイセンの<ruby>首相<rp>(</rp><rt>しゅしょう</rt><rp>)</rp></ruby>として<ruby>軍事力<rp>(</rp><rt>ぐんじりょく</rt><rp>)</rp></ruby>を<ruby>背景<rp>(</rp><rt>はいけい</rt><rp>)</rp></ruby>にドイツ統一を<ruby>達成<rp>(</rp><rt>たっせい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby></strong>意識の目覚めと<strong><ruby>国民国家<rp>(</rp><rt>こくみんこっか</rt><rp>)</rp></ruby></strong>の形成',
        '<strong><ruby>徴兵制<rp>(</rp><rt>ちょうへいせい</rt><rp>)</rp></ruby></strong>・<strong><ruby>義務教育<rp>(</rp><rt>ぎむきょういく</rt><rp>)</rp></ruby></strong>の<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>',
        'フランス：<strong><ruby>男性普通選挙<rp>(</rp><rt>だんせいふつうせんきょ</rt><rp>)</rp></ruby></strong>、イギリス：<strong><ruby>政党政治<rp>(</rp><rt>せいとうせいじ</rt><rp>)</rp></ruby></strong>',
        '<strong>ビスマルク</strong>の「<ruby>鉄血<rp>(</rp><rt>てっけつ</rt><rp>)</rp></ruby>政策」でドイツ統一',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../history-chat/types';

export const americanIndependenceChat: HistoryChat = {
  id: 'american-independence',
  icon: '🗽',
  title: 'アメリカの独立革命',
  subtitle: '〜近代〜 新しい国の誕生',
  characters: [
    {
      id: 'professor',
      name: 'アメリカ史の先生',
      emoji: '🎩',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
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
      text: '18世紀後半のアメリカ',
    },
    {
      type: 'narrator',
      text: 'イギリスの<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>だったアメリカでは、本国の厳しい<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>への不満が高まっていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: 'アメリカの<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>の人々は、イギリス<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>に自分たちの代表を送れないのに税金を<ruby>課<rp>(</rp><rt>か</rt><rp>)</rp></ruby>されていたんだ。そこで「<strong><span class="keyword"><span data-tooltip="自分たちの代表がいない議会が税金を課すのは不当だという主張">代表なくして<ruby>課税<rp>(</rp><rt>かぜい</rt><rp>)</rp></ruby>なし</span></span></strong>」というスローガンを<ruby>掲<rp>(</rp><rt>かか</rt><rp>)</rp></ruby>げたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '自分たちの意見を言えないのに税金だけ取られるのは確かにおかしいですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">代表なくして課税なし</span> ― 植民地の人々がイギリスに反発したスローガン',
    },
    {
      type: 'quiz',
      question: 'アメリカ植民地の人々が掲げたスローガンは？',
      options: [
        { letter: 'A', text: '王権神授説', correct: false },
        { letter: 'B', text: '自由・平等・友愛', correct: false },
        { letter: 'C', text: '万人は平等', correct: false },
        { letter: 'D', text: '代表なくして課税なし', correct: true },
      ],
      explanation:
        '<strong>正解はD「<span class="keyword">代表なくして<ruby>課税<rp>(</rp><rt>かぜい</rt><rp>)</rp></ruby>なし</span>」</strong>です。自分たちの代表がいない<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>の<ruby>課税<rp>(</rp><rt>かぜい</rt><rp>)</rp></ruby>に反対するスローガンでした。',
    },
    {
      type: 'narrator',
      text: '1775年、<strong><span class="keyword">ワシントン</span></strong>を<ruby>総司令官<rp>(</rp><rt>そうしれいかん</rt><rp>)</rp></ruby>として<strong><span class="keyword"><ruby>独立戦争<rp>(</rp><rt>どくりつせんそう</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>ワシントン</strong>ってどんな人だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'happy',
      text: '<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>軍の<ruby>総司令官<rp>(</rp><rt>そうしれいかん</rt><rp>)</rp></ruby>としてイギリスと戦い、<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>を<ruby>勝<rp>(</rp><rt>か</rt><rp>)</rp></ruby>ち取った<ruby>英雄<rp>(</rp><rt>えいゆう</rt><rp>)</rp></ruby>だよ。のちにアメリカ<ruby>初代<rp>(</rp><rt>しょだい</rt><rp>)</rp></ruby>大統領にもなったんだ',
    },
    {
      type: 'narrator',
      text: '1776年、<strong><span class="keyword"><ruby>独立宣言<rp>(</rp><rt>どくりつせんげん</rt><rp>)</rp></ruby></span></strong>が発表されました。「すべての人間は<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>につくられ、<ruby>生命<rp>(</rp><rt>せいめい</rt><rp>)</rp></ruby>、自由、<ruby>幸福<rp>(</rp><rt>こうふく</rt><rp>)</rp></ruby>を<ruby>追求<rp>(</rp><rt>ついきゅう</rt><rp>)</rp></ruby>する権利を持つ」という<span data-tooltip="イギリスの思想家ロックが唱えた、政府が国民の権利を守るべきだという考え">ロックの思想</span>に基づく<ruby>理念<rp>(</rp><rt>りねん</rt><rp>)</rp></ruby>は、世界に大きな<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>を与えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '「すべての人間は平等」っていう考え方が、新しい国のもとになったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ワシントン</span>が<span class="keyword">独立戦争</span>を指揮 → 1776年<span class="keyword">独立宣言</span>で「すべての人間は平等」を宣言！',
    },
    {
      type: 'quiz',
      question: '「すべての人間は平等」という理念を掲げた文書は？',
      options: [
        { letter: 'A', text: '権利章典', correct: false },
        { letter: 'B', text: '人権宣言', correct: false },
        { letter: 'C', text: '独立宣言', correct: true },
        { letter: 'D', text: '合衆国憲法', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>独立宣言<rp>(</rp><rt>どくりつせんげん</rt><rp>)</rp></ruby>」</strong>です。1776年にアメリカで発表され、<ruby>民主主義<rp>(</rp><rt>みんしゅしゅぎ</rt><rp>)</rp></ruby>の<ruby>理念<rp>(</rp><rt>りねん</rt><rp>)</rp></ruby>を世界に広めました。',
    },
    {
      type: 'end',
      points: [
        '「<strong>代表なくして<ruby>課税<rp>(</rp><rt>かぜい</rt><rp>)</rp></ruby>なし</strong>」：<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>の人々の反発',
        '<strong>ワシントン</strong>：<ruby>独立戦争<rp>(</rp><rt>どくりつせんそう</rt><rp>)</rp></ruby>の<ruby>総司令官<rp>(</rp><rt>そうしれいかん</rt><rp>)</rp></ruby>、<ruby>初代<rp>(</rp><rt>しょだい</rt><rp>)</rp></ruby>大統領',
        '<strong><ruby>独立宣言<rp>(</rp><rt>どくりつせんげん</rt><rp>)</rp></ruby></strong>（1776年）：「すべての人間は<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>」',
        'ロックの思想が<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>運動に大きな<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};

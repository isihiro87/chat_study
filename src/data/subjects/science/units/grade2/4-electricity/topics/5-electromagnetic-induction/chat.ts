import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const electromagneticInductionChat: HistoryChat = {
  id: 'sci2-electromagnetic-induction',
  icon: '🔌',
  title: '電流と磁界（2）',
  subtitle: '〜中2物理〜 電磁誘導・発電機・直流と交流',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: { explaining: '🧑‍🏫', happy: '😊', excited: '🤩', thinking: '🤔' },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: { curious: '🙋‍♂️', surprised: '😲', thinking: '🤔', happy: '😄' },
    },
  ],
  content: [
    {
      type: 'date',
      text: '電磁誘導と誘導電流',
    },
    {
      type: 'narrator',
      text: 'コイルの中の<ruby>磁界<rp>(</rp><rt>じかい</rt><rp>)</rp></ruby>が変化すると、コイルに<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>が生じて電流が流れます。この現象を<strong><span class="keyword"><span data-tooltip="コイル内の磁界変化で電流が流れる現象"><ruby>電磁誘導<rp>(</rp><rt>でんじゆうどう</rt><rp>)</rp></ruby></span></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'コイルに磁石を出し入れすると、コイル内の磁界が変化して<strong><span class="keyword"><ruby>誘導電流<rp>(</rp><rt>ゆうどうでんりゅう</rt><rp>)</rp></ruby></span></strong>が流れるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '誘導電流を大きくするにはどうすればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '3つの方法があるよ。①<strong>磁石を速く動かす</strong>、②<strong>コイルの巻数を増やす</strong>、③<strong>より強い磁石を使う</strong>。どれも磁界の変化を大きくすることがポイントだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '磁石の動かす向きを変えると電流はどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '磁石を入れるときと出すときで<strong>誘導電流の向きが逆</strong>になるよ。磁石の極を逆にしても向きが変わるんだ。この原理を利用したのが<strong><span class="keyword">発電機</span></strong>だよ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/electricity/electromagnetic-induction.svg',
      alt: '電磁誘導のしくみ',
      caption: 'コイルと磁石で電流が発生する',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">電磁誘導</span>：コイル内の磁界変化→誘導電流。<span class="keyword">発電機</span>はこの原理を利用！',
    },
    {
      type: 'quiz',
      question: 'コイルに磁石を出し入れして電流が流れる現象を何という？',
      options: [
        { letter: 'A', text: '電磁誘導', correct: true },
        { letter: 'B', text: '電気分解', correct: false },
        { letter: 'C', text: '静電気', correct: false },
        { letter: 'D', text: '電磁波', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>電磁誘導<rp>(</rp><rt>でんじゆうどう</rt><rp>)</rp></ruby>」</strong>です。コイル内の<ruby>磁界<rp>(</rp><rt>じかい</rt><rp>)</rp></ruby>が変化することで<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>が生じ、<ruby>誘導電流<rp>(</rp><rt>ゆうどうでんりゅう</rt><rp>)</rp></ruby>が流れる現象です。',
    },
    {
      type: 'date',
      text: '直流と交流・送電のしくみ',
    },
    {
      type: 'narrator',
      text: '<ruby>乾電池<rp>(</rp><rt>かんでんち</rt><rp>)</rp></ruby>のように一定方向に流れる電流を<strong><span class="keyword">直流</span></strong>、コンセントのように向きが<ruby>周期的<rp>(</rp><rt>しゅうきてき</rt><rp>)</rp></ruby>に変わる電流を<strong><span class="keyword">交流</span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '交流の1秒あたりの<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>回数を<strong><span class="keyword"><ruby>周波数<rp>(</rp><rt>しゅうはすう</rt><rp>)</rp></ruby>（Hz）</span></strong>というんだ。日本では東日本が<strong>50Hz</strong>、西日本が<strong>60Hz</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '東と西で違うんですね！なぜですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>明治時代<rp>(</rp><rt>めいじじだい</rt><rp>)</rp></ruby>に東日本はドイツ製、西日本はアメリカ製の発電機を<ruby>導入<rp>(</rp><rt>どうにゅう</rt><rp>)</rp></ruby>したからなんだ。それが今も続いているんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '送電にはどちらが使われているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong>交流</strong>だよ！交流は<strong><span class="keyword"><ruby>変圧器<rp>(</rp><rt>へんあつき</rt><rp>)</rp></ruby>（トランス）</span></strong>で電圧を変えやすいんだ。高電圧で送ると電流が小さくなって<ruby>発熱<rp>(</rp><rt>はつねつ</rt><rp>)</rp></ruby>ロスが減るから、送電に<ruby>適<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>しているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '直流と交流はどうやって見分けるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>発光<rp>(</rp><rt>はっこう</rt><rp>)</rp></ruby>ダイオード（LED）</strong>を使うと見分けられるよ。LEDは一方向にしか電流を流さないから、直流では<ruby>連続点灯<rp>(</rp><rt>れんぞくてんとう</rt><rp>)</rp></ruby>、交流では<ruby>点滅<rp>(</rp><rt>てんめつ</rt><rp>)</rp></ruby>するんだ。<strong><span class="keyword">オシロスコープ</span></strong>で波形を見ると、直流は直線、交流は<ruby>正弦波<rp>(</rp><rt>せいげんは</rt><rp>)</rp></ruby>になるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">直流</span>=一方向、<span class="keyword">交流</span>=周期的に変化。交流は<span class="keyword">変圧器</span>で電圧を変えやすく送電に利用！',
    },
    {
      type: 'quiz',
      question: '交流の特徴として正しいのはどれ？',
      options: [
        { letter: 'A', text: '常に一定方向に流れる', correct: false },
        { letter: 'B', text: '電圧を変えることができない', correct: false },
        { letter: 'C', text: '乾電池から得られる', correct: false },
        { letter: 'D', text: '向きが周期的に変化する', correct: true },
      ],
      explanation:
        '<strong>正解はD「向きが<ruby>周期的<rp>(</rp><rt>しゅうきてき</rt><rp>)</rp></ruby>に変化する」</strong>です。交流は電流の向きが周期的に変化します。<ruby>変圧器<rp>(</rp><rt>へんあつき</rt><rp>)</rp></ruby>で電圧を変えやすいため、送電に利用されています。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>電磁誘導<rp>(</rp><rt>でんじゆうどう</rt><rp>)</rp></ruby></strong>：コイル内の磁界変化 → <strong><ruby>誘導電流<rp>(</rp><rt>ゆうどうでんりゅう</rt><rp>)</rp></ruby></strong>が流れる。<strong>発電機</strong>はこの原理を利用',
        '<strong>直流</strong>：一定方向の電流（乾電池）。<strong>交流</strong>：向きが<ruby>周期的<rp>(</rp><rt>しゅうきてき</rt><rp>)</rp></ruby>に変化（コンセント）。<strong><ruby>周波数<rp>(</rp><rt>しゅうはすう</rt><rp>)</rp></ruby></strong>：東日本50Hz／西日本60Hz',
        '交流は<strong><ruby>変圧器<rp>(</rp><rt>へんあつき</rt><rp>)</rp></ruby></strong>で電圧を変えやすい → 高電圧で送電して<ruby>発熱<rp>(</rp><rt>はつねつ</rt><rp>)</rp></ruby>ロスを<ruby>削減<rp>(</rp><rt>さくげん</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};

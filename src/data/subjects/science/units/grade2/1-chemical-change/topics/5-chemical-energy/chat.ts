import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const chemicalEnergyChat: HistoryChat = {
  id: 'sci2-chemical-energy',
  icon: '🌡️',
  title: '化学変化とその利用',
  subtitle: '〜中2化学〜 発熱反応・吸熱反応・化学エネルギー',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '<ruby>発熱反応<rp>(</rp><rt>はつねつはんのう</rt><rp>)</rp></ruby>と<ruby>吸熱反応<rp>(</rp><rt>きゅうねつはんのう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>では熱の出入りがあります。熱を出すものと、熱を<ruby>吸<rp>(</rp><rt>す</rt><rp>)</rp></ruby>い<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>むものがあります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '使い<ruby>捨<rp>(</rp><rt>す</rt><rp>)</rp></ruby>てカイロを使ったことあるかな？あれは<ruby>鉄粉<rp>(</rp><rt>てっぷん</rt><rp>)</rp></ruby>が空気中の<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>と<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつく<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>を利用しているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'カイロの中に<ruby>鉄粉<rp>(</rp><rt>てっぷん</rt><rp>)</rp></ruby>が入っているんですか！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そう！<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>するときに<ruby>周囲<rp>(</rp><rt>しゅうい</rt><rp>)</rp></ruby>に<strong>熱を出す</strong>から<ruby>温<rp>(</rp><rt>あたた</rt><rp>)</rp></ruby>かくなる。こういう<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>発熱反応<rp>(</rp><rt>はつねつはんのう</rt><rp>)</rp></ruby></span></strong>というよ。ガスの<ruby>燃焼<rp>(</rp><rt>ねんしょう</rt><rp>)</rp></ruby>も<ruby>発熱反応<rp>(</rp><rt>はつねつはんのう</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>に<ruby>冷<rp>(</rp><rt>つめ</rt><rp>)</rp></ruby>たくなる<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>もあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'あるよ！<ruby>水酸化<rp>(</rp><rt>すいさんか</rt><rp>)</rp></ruby>バリウムと<ruby>塩化<rp>(</rp><rt>えんか</rt><rp>)</rp></ruby>アンモニウムを<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ぜると、<ruby>周囲<rp>(</rp><rt>しゅうい</rt><rp>)</rp></ruby>から<strong>熱をうばって</strong><ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>が下がるんだ。これを<strong><span class="keyword"><ruby>吸熱反応<rp>(</rp><rt>きゅうねつはんのう</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/chemical-change/exo-endo-experiment.png',
      alt: '発熱反応と吸熱反応の実験',
      caption: '鉄粉＋活性炭で発熱（左）、水酸化バリウム＋塩化アンモニウムで吸熱（右）',
    },
    {
      type: 'image',
      src: '/images/science/grade2/chemical-change/exo-endo-thermic.svg',
      alt: '発熱反応と吸熱反応',
      caption: '発熱反応は温度UP、吸熱反応は温度DOWN',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">発熱反応</span>：熱を出す → 温度UP（かいろ、燃焼）。<span class="keyword">吸熱反応</span>：熱をうばう → 温度DOWN',
    },
    {
      type: 'quiz',
      question: '水酸化バリウムと塩化アンモニウムの反応はどちら？',
      options: [
        { letter: 'A', text: '発熱反応', correct: false },
        { letter: 'B', text: '吸熱反応', correct: true },
        { letter: 'C', text: '中和反応', correct: false },
        { letter: 'D', text: '分解反応', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>吸熱反応<rp>(</rp><rt>きゅうねつはんのう</rt><rp>)</rp></ruby>」</strong>です。<ruby>水酸化<rp>(</rp><rt>すいさんか</rt><rp>)</rp></ruby>バリウムと<ruby>塩化<rp>(</rp><rt>えんか</rt><rp>)</rp></ruby>アンモニウムを<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ぜると<ruby>周囲<rp>(</rp><rt>しゅうい</rt><rp>)</rp></ruby>から熱をうばい、<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>が下がります。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なぜ熱が出たり<ruby>吸<rp>(</rp><rt>す</rt><rp>)</rp></ruby>い<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>んだりするんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>はそれぞれ<strong><span class="keyword"><ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギー</span></strong>をもっているんだ。<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>で<ruby>反応前<rp>(</rp><rt>はんのうまえ</rt><rp>)</rp></ruby>と<ruby>反応後<rp>(</rp><rt>はんのうご</rt><rp>)</rp></ruby>の<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギーに<strong>差</strong>があると、その分が熱や光として出たり<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>されたりするよ',
    },
    {
      type: 'quiz',
      question: '次のうち、発熱反応はどれ？',
      options: [
        { letter: 'A', text: '水酸化バリウムと塩化アンモニウムの反応', correct: false },
        { letter: 'B', text: '鉄粉の酸化', correct: true },
        { letter: 'C', text: '炭酸水素ナトリウムとクエン酸の反応', correct: false },
        { letter: 'D', text: '光合成', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>鉄粉<rp>(</rp><rt>てっぷん</rt><rp>)</rp></ruby>の<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>」</strong>です。<ruby>鉄粉<rp>(</rp><rt>てっぷん</rt><rp>)</rp></ruby>が<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>と<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつくとき熱を出す<ruby>発熱反応<rp>(</rp><rt>はつねつはんのう</rt><rp>)</rp></ruby>で、<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>かいろに利用されています。',
    },
    {
      type: 'date',
      text: '生活での<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>の利用',
    },
    {
      type: 'narrator',
      text: '<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>は私たちの生活のさまざまな場面で利用されています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>身<rp>(</rp><rt>み</rt><rp>)</rp></ruby>のまわりの<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>をいくつか<ruby>紹介<rp>(</rp><rt>しょうかい</rt><rp>)</rp></ruby>するね。<br/>・<strong><ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>かいろ</strong>：<ruby>鉄粉<rp>(</rp><rt>てっぷん</rt><rp>)</rp></ruby>の<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>（<ruby>発熱<rp>(</rp><rt>はつねつ</rt><rp>)</rp></ruby>）<br/>・<strong>ガスコンロ</strong>：メタンの<ruby>燃焼<rp>(</rp><rt>ねんしょう</rt><rp>)</rp></ruby>でエネルギーを<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り出す<br/>・<strong><ruby>胃薬<rp>(</rp><rt>いぐすり</rt><rp>)</rp></ruby></strong>：<ruby>重<rp>(</rp><rt>じゅう</rt><rp>)</rp></ruby>そう（<ruby>炭酸水素<rp>(</rp><rt>たんさんすいそ</rt><rp>)</rp></ruby>ナトリウム）で<ruby>胃酸<rp>(</rp><rt>いさん</rt><rp>)</rp></ruby>を<ruby>中和<rp>(</rp><rt>ちゅうわ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>胃薬<rp>(</rp><rt>いぐすり</rt><rp>)</rp></ruby>にも<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>が使われているんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '他にも、<ruby>漂白剤<rp>(</rp><rt>ひょうはくざい</rt><rp>)</rp></ruby>は<ruby>過酸化水素水<rp>(</rp><rt>かさんかすいそすい</rt><rp>)</rp></ruby>の<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby>を利用したり、ホタルの<ruby>発光<rp>(</rp><rt>はっこう</rt><rp>)</rp></ruby>やケミカルライトも<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>で光を出しているんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>って生活のいろんなところで使われているんですね！',
    },
    {
      type: 'summary-point',
      text: '生活での利用: <span class="keyword">化学かいろ</span>(鉄の酸化)、<span class="keyword">燃焼</span>(ガスコンロ)、<span class="keyword">胃薬</span>(中和)、<span class="keyword">漂白剤</span>(分解)、<span class="keyword">ケミカルライト</span>(発光)',
    },
    {
      type: 'quiz',
      question: '物質がもっているエネルギーを何という？',
      options: [
        { letter: 'A', text: '熱エネルギー', correct: false },
        { letter: 'B', text: '運動エネルギー', correct: false },
        { letter: 'C', text: '化学エネルギー', correct: true },
        { letter: 'D', text: '電気エネルギー', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギー」</strong>です。<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>で<ruby>反応前<rp>(</rp><rt>はんのうまえ</rt><rp>)</rp></ruby>と<ruby>反応後<rp>(</rp><rt>はんのうご</rt><rp>)</rp></ruby>の<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギーの差が、熱や光として<ruby>現<rp>(</rp><rt>あらわ</rt><rp>)</rp></ruby>れます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>発熱反応<rp>(</rp><rt>はつねつはんのう</rt><rp>)</rp></ruby></strong>：<ruby>周囲<rp>(</rp><rt>しゅうい</rt><rp>)</rp></ruby>に熱を出す →<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>UP（<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>かいろ、<ruby>燃焼<rp>(</rp><rt>ねんしょう</rt><rp>)</rp></ruby>など）',
        '<strong><ruby>吸熱反応<rp>(</rp><rt>きゅうねつはんのう</rt><rp>)</rp></ruby></strong>：<ruby>周囲<rp>(</rp><rt>しゅうい</rt><rp>)</rp></ruby>から熱をうばう →<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>DOWN（<ruby>水酸化<rp>(</rp><rt>すいさんか</rt><rp>)</rp></ruby>バリウム＋<ruby>塩化<rp>(</rp><rt>えんか</rt><rp>)</rp></ruby>アンモニウムなど）',
        '<strong><ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギー</strong>＝<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>がもつエネルギー。その差が熱や光になる',
        '生活の利用：<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>かいろ・ガスコンロ・<ruby>胃薬<rp>(</rp><rt>いぐすり</rt><rp>)</rp></ruby>・<ruby>漂白剤<rp>(</rp><rt>ひょうはくざい</rt><rp>)</rp></ruby>・ケミカルライトなど',
      ],
    },
  ],
};

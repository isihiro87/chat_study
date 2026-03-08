import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const oxidationReductionChat: HistoryChat = {
  id: 'sci2-oxidation-reduction',
  icon: '🔥',
  title: '酸素がかかわる化学変化',
  subtitle: '〜中2化学〜 酸化・燃焼・還元',
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
      text: '<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>と<ruby>燃焼<rp>(</rp><rt>ねんしょう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>と<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつく<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'スチールウール（<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>）に火をつけると、<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しく<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>えるよ。これは<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>が<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>と<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びついて<strong><ruby>酸化鉄<rp>(</rp><rt>さんかてつ</rt><rp>)</rp></ruby></strong>になる<strong><span class="keyword"><ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby></span></strong>という<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>も<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>えるんですか！？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そう！<ruby>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>や光を出しながら<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しく<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>される<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>燃焼<rp>(</rp><rt>ねんしょう</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>を加熱すると<strong><ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby></strong>（黒色）に、マグネシウムを<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やすと<strong><ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>マグネシウム</strong>（白色）になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '木やガスが<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>えるのも<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！木やエタノールなどの<strong><ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby></strong>を<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やすと、ふくまれる<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>が<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>されて<strong><ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby></strong>、<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>が<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>されて<strong>水</strong>ができるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">酸化</span>＝物質が酸素と結びつく化学変化。<span class="keyword">燃焼</span>＝熱や光を出す激しい酸化。金属も有機物も酸化される',
    },
    {
      type: 'quiz',
      question: '銅を加熱したときにできる物質は？',
      options: [
        { letter: 'A', text: '酸化銅', correct: true },
        { letter: 'B', text: '硫化銅', correct: false },
        { letter: 'C', text: '塩化銅', correct: false },
        { letter: 'D', text: '水酸化銅', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby>」</strong>です。<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>を空気中で加熱すると<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>と<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びついて<ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby>（CuO、黒色）ができます。',
    },
    {
      type: 'date',
      text: '<ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>酸化物<rp>(</rp><rt>さんかぶつ</rt><rp>)</rp></ruby>から<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>がうばわれる<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby>（CuO）を<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>（C）と<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ぜて加熱すると、<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>が<ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby>から<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>をうばうんだ。すると<ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby>は<strong><ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby></strong>に<ruby>戻<rp>(</rp><rt>もど</rt><rp>)</rp></ruby>り、<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>は<strong><ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby></strong>になるよ',
    },
    {
      type: 'image',
      src: '/images/science/oxidation-reduction.svg',
      alt: '酸化と還元は同時に起こる',
      caption: '酸化銅の炭素による還元',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>は<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>と<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びついたから<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>されたんですね。<ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby>は<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>を<ruby>失<rp>(</rp><rt>うしな</rt><rp>)</rp></ruby>ったから<ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby>された…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'すばらしい！ここが<ruby>超重要<rp>(</rp><rt>ちょうじゅうよう</rt><rp>)</rp></ruby>ポイント。<strong><span class="keyword"><ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>と<ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby>は<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に<ruby>同時<rp>(</rp><rt>どうじ</rt><rp>)</rp></ruby>に<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こる</span></strong>んだ！<ruby>一方<rp>(</rp><rt>いっぽう</rt><rp>)</rp></ruby>が<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>されれば、もう<ruby>一方<rp>(</rp><rt>いっぽう</rt><rp>)</rp></ruby>は<ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby>される',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '実際にどんなところで使われているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>製鉄<rp>(</rp><rt>せいてつ</rt><rp>)</rp></ruby></strong>がいい<ruby>例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby>だよ。<ruby>鉄鉱石<rp>(</rp><rt>てっこうせき</rt><rp>)</rp></ruby>（<ruby>酸化鉄<rp>(</rp><rt>さんかてつ</rt><rp>)</rp></ruby>）を<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>（コークス）で<ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby>して<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>を取り出しているんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">還元</span>＝酸化物から酸素がうばわれる化学変化。<span class="keyword">酸化と還元は常に同時に起こる</span>。製鉄は還元の応用',
    },
    {
      type: 'quiz',
      question: '酸化と還元について正しいものはどれ？',
      options: [
        { letter: 'A', text: '酸化だけが起こることがある', correct: false },
        { letter: 'B', text: '還元だけが起こることがある', correct: false },
        { letter: 'C', text: '酸化と還元は常に同時に起こる', correct: true },
        { letter: 'D', text: '酸化と還元は交互に起こる', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>と<ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby>は<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に<ruby>同時<rp>(</rp><rt>どうじ</rt><rp>)</rp></ruby>に<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こる」</strong>です。<ruby>一方<rp>(</rp><rt>いっぽう</rt><rp>)</rp></ruby>が<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>を<ruby>得<rp>(</rp><rt>え</rt><rp>)</rp></ruby>れば、もう<ruby>一方<rp>(</rp><rt>いっぽう</rt><rp>)</rp></ruby>は<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>を<ruby>失<rp>(</rp><rt>うしな</rt><rp>)</rp></ruby>います。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby></strong>＝<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>と<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつく。<strong><ruby>燃焼<rp>(</rp><rt>ねんしょう</rt><rp>)</rp></ruby></strong>＝<ruby>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>や光を出す<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しい<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>',
        '<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>の<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>：<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>→<ruby>酸化鉄<rp>(</rp><rt>さんかてつ</rt><rp>)</rp></ruby>、<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>→<ruby>酸化銅<rp>(</rp><rt>さんかどう</rt><rp>)</rp></ruby>、Mg→<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>Mg',
        '<strong><ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby></strong>＝<ruby>酸化物<rp>(</rp><rt>さんかぶつ</rt><rp>)</rp></ruby>から<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>がうばわれる。2CuO + C → 2Cu + CO<sub>2</sub>',
        '<ruby>酸化<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>と<ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby>は<strong><ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に<ruby>同時<rp>(</rp><rt>どうじ</rt><rp>)</rp></ruby>に<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こる</strong>。<ruby>製鉄<rp>(</rp><rt>せいてつ</rt><rp>)</rp></ruby>は<ruby>還元<rp>(</rp><rt>かんげん</rt><rp>)</rp></ruby>の<ruby>応用<rp>(</rp><rt>おうよう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};

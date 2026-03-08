import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const acidAlkaliChat: HistoryChat = {
  id: 'sci3-acid-alkali',
  icon: '🧪',
  title: '酸・アルカリとイオン',
  subtitle: '〜中3化学〜 pH・中和反応・塩のしくみ',
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
      text: '<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>・アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>の<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>には<strong><ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby></strong>・<strong><ruby>中性<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby></strong>・<strong>アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby></strong>の3つの<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>があります。<ruby>指示薬<rp>(</rp><rt>しじやく</rt><rp>)</rp></ruby>を使って<ruby>見分<rp>(</rp><rt>みわ</rt><rp>)</rp></ruby>けてみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>の<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>を<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べる<ruby>指示薬<rp>(</rp><rt>しじやく</rt><rp>)</rp></ruby>を3つ<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えよう！<br/><strong><span class="keyword">リトマス<ruby>紙<rp>(</rp><rt>し</rt><rp>)</rp></ruby></span></strong>：<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>→<ruby>青<rp>(</rp><rt>あお</rt><rp>)</rp></ruby>を<ruby>赤<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>に、アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>→<ruby>赤<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>を<ruby>青<rp>(</rp><rt>あお</rt><rp>)</rp></ruby>に<br/><strong><span class="keyword">BTB<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby></span></strong>：<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>→<ruby>黄色<rp>(</rp><rt>きいろ</rt><rp>)</rp></ruby>、<ruby>中性<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby>→<ruby>緑色<rp>(</rp><rt>みどりいろ</rt><rp>)</rp></ruby>、アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>→<ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby><br/><strong><span class="keyword">フェノールフタレイン<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby></span></strong>：アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>だけ<ruby>赤色<rp>(</rp><rt>あかいろ</rt><rp>)</rp></ruby>に！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/btb-phenolphthalein.svg',
      alt: 'BTB溶液とフェノールフタレイン',
      caption: 'BTB: 黄(酸性)→緑(中性)→青(アルカリ性)',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'リトマス<ruby>紙<rp>(</rp><rt>し</rt><rp>)</rp></ruby>は<ruby>青<rp>(</rp><rt>あお</rt><rp>)</rp></ruby>が<ruby>赤<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>になるのと、<ruby>赤<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>が<ruby>青<rp>(</rp><rt>あお</rt><rp>)</rp></ruby>になるの…<ruby>混乱<rp>(</rp><rt>こんらん</rt><rp>)</rp></ruby>しそうです',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>え方があるよ！「<ruby>酸<rp>(</rp><rt>さん</rt><rp>)</rp></ruby>は<ruby>青<rp>(</rp><rt>あお</rt><rp>)</rp></ruby>を<ruby>赤<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>くする」→<ruby>酸<rp>(</rp><rt>さん</rt><rp>)</rp></ruby>っぱいものを食べると<ruby>顔<rp>(</rp><rt>かお</rt><rp>)</rp></ruby>が<ruby>赤<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>くなる、ってイメージだよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/litmus-paper.svg',
      alt: 'リトマス紙の色変化',
      caption: '青色リトマス紙は酸性で赤に、赤色リトマス紙はアルカリ性で青に変化',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">リトマス紙</span>：酸性で青→赤、アルカリ性で赤→青。<span class="keyword">BTB溶液</span>：黄(酸)→緑(中)→青(ア)。<span class="keyword">フェノールフタレイン</span>：アルカリ性だけ赤色',
    },
    {
      type: 'date',
      text: 'pHとイオン',
    },
    {
      type: 'narrator',
      text: '<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>やアルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>はイオンです。その<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>さを<ruby>数値<rp>(</rp><rt>すうち</rt><rp>)</rp></ruby>で<ruby>表<rp>(</rp><rt>あらわ</rt><rp>)</rp></ruby>したものが<strong><span class="keyword">pH</span></strong>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>は<strong>H<sup>+</sup>（<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>イオン）</strong>！アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>は<strong>OH<sup>−</sup>（<ruby>水酸化物<rp>(</rp><rt>すいさんかぶつ</rt><rp>)</rp></ruby>イオン）</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'pHって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<strong>pH</strong>は<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>・アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>の<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>さを<ruby>数値<rp>(</rp><rt>すうち</rt><rp>)</rp></ruby>で<ruby>表<rp>(</rp><rt>あらわ</rt><rp>)</rp></ruby>したもの。0〜14の<ruby>範囲<rp>(</rp><rt>はんい</rt><rp>)</rp></ruby>で、<strong>pH 7が<ruby>中性<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby></strong>。7より小さいと<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>、大きいとアルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/ph-scale.svg',
      alt: 'pHスケール',
      caption: 'pH 0〜14のスケール（7が中性）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'レモンの<ruby>果汁<rp>(</rp><rt>かじゅう</rt><rp>)</rp></ruby>はpH 2くらいで<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>い<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>、<ruby>石<rp>(</rp><rt>せっ</rt><rp>)</rp></ruby>けん水はpH 10くらいでアルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>ですね！',
    },
    {
      type: 'summary-point',
      text: '酸性の正体 = <span class="keyword">H<sup>+</sup></span>、アルカリ性の正体 = <span class="keyword">OH<sup>−</sup></span>。<span class="keyword">pH</span> 7が中性、小さいほど酸性、大きいほどアルカリ性',
    },
    {
      type: 'quiz',
      question: '酸性の水溶液に共通して含まれるイオンは？',
      options: [
        { letter: 'A', text: 'Na⁺', correct: false },
        { letter: 'B', text: 'OH⁻', correct: false },
        { letter: 'C', text: 'Cl⁻', correct: false },
        { letter: 'D', text: 'H⁺', correct: true },
      ],
      explanation:
        '<strong>正解はD「H<sup>+</sup>（<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>イオン）」</strong>です。<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>はH<sup>+</sup>で、H<sup>+</sup>が<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>いほど<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>が<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>くなります。',
    },
    {
      type: 'date',
      text: '<ruby>中和<rp>(</rp><rt>ちゅうわ</rt><rp>)</rp></ruby><ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>の<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>とアルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>の<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>を<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ぜると、<ruby>打<rp>(</rp><rt>う</rt><rp>)</rp></ruby>ち<ruby>消<rp>(</rp><rt>け</rt><rp>)</rp></ruby>し<ruby>合<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>う<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>が起きます。これが<strong><span class="keyword"><ruby>中和<rp>(</rp><rt>ちゅうわ</rt><rp>)</rp></ruby></span></strong>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>（HCl）と<ruby>水酸化<rp>(</rp><rt>すいさんか</rt><rp>)</rp></ruby>ナトリウム（NaOH）を<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ぜると…<br/>H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O（<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>）ができる！<br/>そして<ruby>残<rp>(</rp><rt>のこ</rt><rp>)</rp></ruby>ったNa<sup>+</sup>とCl<sup>−</sup>が<strong><span class="keyword"><ruby>塩<rp>(</rp><rt>えん</rt><rp>)</rp></ruby></span></strong>（NaCl＝<ruby>食塩<rp>(</rp><rt>しょくえん</rt><rp>)</rp></ruby>）になるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>と<ruby>水酸化<rp>(</rp><rt>すいさんか</rt><rp>)</rp></ruby>ナトリウムから<ruby>食塩<rp>(</rp><rt>しょくえん</rt><rp>)</rp></ruby>ができるなんて<ruby>驚<rp>(</rp><rt>おどろ</rt><rp>)</rp></ruby>きです！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>中和<rp>(</rp><rt>ちゅうわ</rt><rp>)</rp></ruby>は<strong><ruby>発熱<rp>(</rp><rt>はつねつ</rt><rp>)</rp></ruby><ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby></strong>でもあるんだ。<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ぜると<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>が上がるよ。胃薬が<ruby>胃酸<rp>(</rp><rt>いさん</rt><rp>)</rp></ruby>を<ruby>中和<rp>(</rp><rt>ちゅうわ</rt><rp>)</rp></ruby>するのも同じ<ruby>原理<rp>(</rp><rt>げんり</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>身近<rp>(</rp><rt>みぢか</rt><rp>)</rp></ruby>なところでも<ruby>中和<rp>(</rp><rt>ちゅうわ</rt><rp>)</rp></ruby>が使われているんですね！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/neutralization.svg',
      alt: '中和反応のモデル図',
      caption: 'H⁺とOH⁻が結びついて水ができ、残ったイオンが塩になる',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">中和</span>: H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O。<span class="keyword">塩（えん）</span>も同時にできる。中和は<strong>発熱反応</strong>！',
    },
    {
      type: 'quiz',
      question: '塩酸（HCl）と水酸化ナトリウム（NaOH）の中和でできる塩（えん）は？',
      options: [
        { letter: 'A', text: '塩化カリウム', correct: false },
        { letter: 'B', text: '硫酸ナトリウム', correct: false },
        { letter: 'C', text: '塩化ナトリウム', correct: true },
        { letter: 'D', text: '炭酸ナトリウム', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>塩化<rp>(</rp><rt>えんか</rt><rp>)</rp></ruby>ナトリウム」</strong>です。HCl + NaOH → NaCl + H<sub>2</sub>O。Na<sup>+</sup>とCl<sup>−</sup>が<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びついてNaCl（<ruby>食塩<rp>(</rp><rt>しょくえん</rt><rp>)</rp></ruby>）ができます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>指示薬<rp>(</rp><rt>しじやく</rt><rp>)</rp></ruby></strong>：リトマス<ruby>紙<rp>(</rp><rt>し</rt><rp>)</rp></ruby>・BTB<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>・フェノールフタレインで<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>・<ruby>中性<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby>・アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>を<ruby>判別<rp>(</rp><rt>はんべつ</rt><rp>)</rp></ruby>',
        '<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>は<strong>H<sup>+</sup></strong>、アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>は<strong>OH<sup>−</sup></strong>。<strong>pH</strong> 7が<ruby>中性<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby>',
        '<strong><ruby>中和<rp>(</rp><rt>ちゅうわ</rt><rp>)</rp></ruby></strong>：H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O + <strong><ruby>塩<rp>(</rp><rt>えん</rt><rp>)</rp></ruby></strong>。<ruby>発熱<rp>(</rp><rt>はつねつ</rt><rp>)</rp></ruby><ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>でもある',
        '<ruby>例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby>：HCl + NaOH → NaCl + H<sub>2</sub>O（<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>＋<ruby>水酸化<rp>(</rp><rt>すいさんか</rt><rp>)</rp></ruby>ナトリウム → <ruby>食塩<rp>(</rp><rt>しょくえん</rt><rp>)</rp></ruby>＋<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>）',
      ],
    },
  ],
};

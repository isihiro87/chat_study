import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const solutionIonsChat: HistoryChat = {
  id: 'sci3-solution-ions',
  icon: '💧',
  title: '水溶液とイオン',
  subtitle: '〜中3化学〜 電解質・電気分解・原子の構造',
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
      text: '<ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby>と<ruby>非電解質<rp>(</rp><rt>ひでんかいしつ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を水に<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>かしたとき、電流が流れるものと流れないものがあります。この<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いを<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べてみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>食塩水<rp>(</rp><rt>しょくえんすい</rt><rp>)</rp></ruby>と<ruby>砂糖水<rp>(</rp><rt>さとうみず</rt><rp>)</rp></ruby>にそれぞれ電極を入れて、<ruby>豆電球<rp>(</rp><rt>まめでんきゅう</rt><rp>)</rp></ruby>をつないでみよう。どっちが光ると思う？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'うーん、どっちも水に<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けてるから、両方光りそうだけど…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '実は<strong><ruby>食塩水<rp>(</rp><rt>しょくえんすい</rt><rp>)</rp></ruby>だけ</strong>が光るんだ！<ruby>食塩<rp>(</rp><rt>しょくえん</rt><rp>)</rp></ruby>（NaCl）のように、水に<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けて電流が流れる<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'じゃあ<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>は何というんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>やエタノールのように、水に<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>かしても電流が流れない<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>非電解質<rp>(</rp><rt>ひでんかいしつ</rt><rp>)</rp></ruby></span></strong>というんだ。<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いは、水に<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けたとき<strong>イオン</strong>に分かれるかどうかだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">電解質</span>（食塩・塩酸など）= 水に溶けてイオンに分かれる → 電流が流れる。<span class="keyword">非電解質</span>（砂糖・エタノール）= イオンにならない → 電流が流れない',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/electrolysis-model.svg',
      alt: 'NaClの電離モデル',
      caption: '電解質が水に溶けてイオンに分かれるようす',
    },
    {
      type: 'quiz',
      question: '次のうち、電解質はどれ？',
      options: [
        { letter: 'A', text: '砂糖', correct: false },
        { letter: 'B', text: 'エタノール', correct: false },
        { letter: 'C', text: '塩化ナトリウム', correct: true },
        { letter: 'D', text: 'デンプン', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>塩化<rp>(</rp><rt>えんか</rt><rp>)</rp></ruby>ナトリウム」</strong>です。NaClは水に<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けるとNa<sup>+</sup>とCl<sup>−</sup>に<ruby>電離<rp>(</rp><rt>でんり</rt><rp>)</rp></ruby>するため、<ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'date',
      text: '<ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby>の<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>に電流を流すと、<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>が起きます。これを<strong><span class="keyword"><ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>塩化銅<rp>(</rp><rt>えんかどう</rt><rp>)</rp></ruby><ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>を<ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby>してみよう。<strong><ruby>陰極<rp>(</rp><rt>いんきょく</rt><rp>)</rp></ruby></strong>（−極）には<ruby>赤色<rp>(</rp><rt>あかいろ</rt><rp>)</rp></ruby>の<strong><ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby></strong>が付着して、<strong><ruby>陽極<rp>(</rp><rt>ようきょく</rt><rp>)</rp></ruby></strong>（＋極）からは<ruby>刺激臭<rp>(</rp><rt>しげきしゅう</rt><rp>)</rp></ruby>のある<strong><ruby>塩素<rp>(</rp><rt>えんそ</rt><rp>)</rp></ruby></strong>が発生するよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/electrolysis-apparatus.svg',
      alt: '塩化銅水溶液の電気分解装置',
      caption: '陰極に銅が付着し、陽極から塩素が発生する',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '電流を流すだけで、<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>が出てくるんですか！すごい！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>の<ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby>も<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えておこう。<ruby>陰極<rp>(</rp><rt>いんきょく</rt><rp>)</rp></ruby>に<strong><ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby></strong>、<ruby>陽極<rp>(</rp><rt>ようきょく</rt><rp>)</rp></ruby>に<strong><ruby>塩素<rp>(</rp><rt>えんそ</rt><rp>)</rp></ruby></strong>が発生するよ。覚え方は「陰極にはプラスのイオンが引きつけられる」だ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/electrolysis-experiment.png',
      alt: '塩化銅水溶液の電気分解',
      caption: '陰極に銅が析出し、陽極から塩素が発生する',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">電気分解</span>: 塩化銅水溶液 → 陰極に<strong>銅</strong>、陽極に<strong>塩素</strong>。塩酸 → 陰極に<strong>水素</strong>、陽極に<strong>塩素</strong>',
    },
    {
      type: 'date',
      text: '<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: 'イオンを<ruby>理解<rp>(</rp><rt>りかい</rt><rp>)</rp></ruby>するために、まず<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby>を学びましょう。<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>は<strong><ruby>原子核<rp>(</rp><rt>げんしかく</rt><rp>)</rp></ruby></strong>と<strong><ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby></strong>からできています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>には<strong><ruby>原子核<rp>(</rp><rt>げんしかく</rt><rp>)</rp></ruby></strong>があるよ。<ruby>原子核<rp>(</rp><rt>げんしかく</rt><rp>)</rp></ruby>は＋の電気をもつ<strong><ruby>陽子<rp>(</rp><rt>ようし</rt><rp>)</rp></ruby></strong>と、電気をもたない<strong><ruby>中性子<rp>(</rp><rt>ちゅうせいし</rt><rp>)</rp></ruby></strong>からできているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>はどこにあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>は−の電気をもっていて、<ruby>原子核<rp>(</rp><rt>げんしかく</rt><rp>)</rp></ruby>のまわりを回っているよ。ふつうの<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>では<strong><ruby>陽子<rp>(</rp><rt>ようし</rt><rp>)</rp></ruby>の数 ＝ <ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>の数</strong>だから、全体として電気的に<ruby>中性<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby>なんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/atom-model.svg',
      alt: '原子の構造モデル',
      caption: '原子核（陽子＋中性子）のまわりを電子が回る',
    },
    {
      type: 'date',
      text: 'イオンと<ruby>電離<rp>(</rp><rt>でんり</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>が<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>を<ruby>失<rp>(</rp><rt>うしな</rt><rp>)</rp></ruby>ったり<ruby>得<rp>(</rp><rt>え</rt><rp>)</rp></ruby>たりすると、電気を帯びた<strong><span class="keyword">イオン</span></strong>になります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>を<strong><ruby>失<rp>(</rp><rt>うしな</rt><rp>)</rp></ruby>う</strong>と＋の電気が<ruby>余<rp>(</rp><rt>あま</rt><rp>)</rp></ruby>って<strong><span class="keyword"><ruby>陽<rp>(</rp><rt>よう</rt><rp>)</rp></ruby>イオン</span></strong>に、<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>を<strong><ruby>得<rp>(</rp><rt>え</rt><rp>)</rp></ruby>る</strong>と−の電気が<ruby>余<rp>(</rp><rt>あま</rt><rp>)</rp></ruby>って<strong><span class="keyword"><ruby>陰<rp>(</rp><rt>いん</rt><rp>)</rp></ruby>イオン</span></strong>になるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'Na<sup>+</sup>とかCl<sup>−</sup>の「＋」「−」は電子のやりとりの結果なんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そのとおり！そして<ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby>が水に<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けて<ruby>陽<rp>(</rp><rt>よう</rt><rp>)</rp></ruby>イオンと<ruby>陰<rp>(</rp><rt>いん</rt><rp>)</rp></ruby>イオンに分かれることを<strong><span class="keyword"><ruby>電離<rp>(</rp><rt>でんり</rt><rp>)</rp></ruby></span></strong>というよ。<br/>例えば NaCl → Na<sup>+</sup> + Cl<sup>−</sup> だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '電解質・電気分解・イオン・電離、ぜんぶつながっているんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">陽イオン</span> = 電子を失う（Na<sup>+</sup>、H<sup>+</sup>）。<span class="keyword">陰イオン</span> = 電子を得る（Cl<sup>−</sup>、OH<sup>−</sup>）。<span class="keyword">電離</span> = 電解質がイオンに分かれること',
    },
    {
      type: 'quiz',
      question: '原子核を構成する粒子の正しい組み合わせは？',
      options: [
        { letter: 'A', text: '陽子と電子', correct: false },
        { letter: 'B', text: '陽子と中性子', correct: true },
        { letter: 'C', text: '電子と中性子', correct: false },
        { letter: 'D', text: '陽子と電子と中性子', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>陽子<rp>(</rp><rt>ようし</rt><rp>)</rp></ruby>と<ruby>中性子<rp>(</rp><rt>ちゅうせいし</rt><rp>)</rp></ruby>」</strong>です。<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>は<ruby>原子核<rp>(</rp><rt>げんしかく</rt><rp>)</rp></ruby>の<ruby>外側<rp>(</rp><rt>そとがわ</rt><rp>)</rp></ruby>を回っています。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby></strong>：水に<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けてイオンに分かれ、電流が流れる<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>（塩化ナトリウム、塩酸など）',
        '<strong><ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby></strong>：<ruby>塩化銅<rp>(</rp><rt>えんかどう</rt><rp>)</rp></ruby><ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>→<ruby>陰極<rp>(</rp><rt>いんきょく</rt><rp>)</rp></ruby>に<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>・<ruby>陽極<rp>(</rp><rt>ようきょく</rt><rp>)</rp></ruby>に<ruby>塩素<rp>(</rp><rt>えんそ</rt><rp>)</rp></ruby>',
        '<strong><ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby></strong>：<ruby>原子核<rp>(</rp><rt>げんしかく</rt><rp>)</rp></ruby>（<ruby>陽子<rp>(</rp><rt>ようし</rt><rp>)</rp></ruby>＋<ruby>中性子<rp>(</rp><rt>ちゅうせいし</rt><rp>)</rp></ruby>）＋ <ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>',
        '<strong><ruby>陽<rp>(</rp><rt>よう</rt><rp>)</rp></ruby>イオン</strong>＝<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>を<ruby>失<rp>(</rp><rt>うしな</rt><rp>)</rp></ruby>う、<strong><ruby>陰<rp>(</rp><rt>いん</rt><rp>)</rp></ruby>イオン</strong>＝<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>を<ruby>得<rp>(</rp><rt>え</rt><rp>)</rp></ruby>る。<strong><ruby>電離<rp>(</rp><rt>でんり</rt><rp>)</rp></ruby></strong>＝イオンに分かれること',
      ],
    },
  ],
};

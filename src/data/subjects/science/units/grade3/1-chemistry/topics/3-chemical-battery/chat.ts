import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const chemicalBatteryChat: HistoryChat = {
  id: 'sci3-chemical-battery',
  icon: '🔋',
  title: '化学変化と電池',
  subtitle: '〜中3化学〜 イオン化傾向・ダニエル電池・身近な電池',
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
      text: '<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>のしくみ',
    },
    {
      type: 'narrator',
      text: '<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>は<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギーを<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>エネルギーに<ruby>変換<rp>(</rp><rt>へんかん</rt><rp>)</rp></ruby>する<ruby>装置<rp>(</rp><rt>そうち</rt><rp>)</rp></ruby>です。どうやって電気が生まれるのか<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>を作るには3つの<ruby>材料<rp>(</rp><rt>ざいりょう</rt><rp>)</rp></ruby>が<ruby>必要<rp>(</rp><rt>ひつよう</rt><rp>)</rp></ruby>だよ。<br/>① <strong><ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby><ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby></strong><br/>② <strong><ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる2<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>の<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby></strong><br/>この2つがそろえば、<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギーが<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>エネルギーに<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'レモンに<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>を<ruby>刺<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>すと電気が流れるって聞いたことがあります！あれも<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！レモンの<ruby>果汁<rp>(</rp><rt>かじゅう</rt><rp>)</rp></ruby>が<ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby><ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>の<ruby>役割<rp>(</rp><rt>やくわり</rt><rp>)</rp></ruby>をしているんだ。<strong>イオンになりやすい<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby></strong>が<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>を<ruby>放出<rp>(</rp><rt>ほうしゅつ</rt><rp>)</rp></ruby>して<strong>−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby></strong>になるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'どっちの<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>が−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>になるか、どうやって<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まるんですか？',
    },
    {
      type: 'image',
      src: '/images/science/battery-model.svg',
      alt: '電池のしくみモデル図',
      caption: '異なる2種類の金属と電解質水溶液で電流が流れる',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">電池</span>の3要素 = <strong>電解質水溶液</strong> + <strong>異なる2種類の金属</strong>。イオンになりやすい金属が<span class="keyword">−極</span>！',
    },
    {
      type: 'date',
      text: 'イオン<ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>傾向<rp>(</rp><rt>けいこう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>にはイオンになりやすさの<ruby>順番<rp>(</rp><rt>じゅんばん</rt><rp>)</rp></ruby>があります。これを<strong><span class="keyword">イオン<ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>傾向<rp>(</rp><rt>けいこう</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>のイオン<ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>傾向<rp>(</rp><rt>けいこう</rt><rp>)</rp></ruby>の<ruby>順番<rp>(</rp><rt>じゅんばん</rt><rp>)</rp></ruby>を<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えよう！<br/><strong>Mg（マグネシウム） ＞ Zn（<ruby>亜鉛<rp>(</rp><rt>あえん</rt><rp>)</rp></ruby>） ＞ Fe（<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>） ＞ Cu（<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>） ＞ Ag（<ruby>銀<rp>(</rp><rt>ぎん</rt><rp>)</rp></ruby>）</strong><br/><ruby>左<rp>(</rp><rt>ひだり</rt><rp>)</rp></ruby>にいくほどイオンになりやすいよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'じゃあZnとCuで<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>を作ったら、Znが−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>正解<rp>(</rp><rt>せいかい</rt><rp>)</rp></ruby>！しかも、2つの<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>のイオン<ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>傾向<rp>(</rp><rt>けいこう</rt><rp>)</rp></ruby>の<strong><ruby>差<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>が大きいほど</strong>、<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>も大きくなるんだ。MgとAgを使えばZnとCuより大きな<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>が<ruby>得<rp>(</rp><rt>え</rt><rp>)</rp></ruby>られるよ',
    },
    {
      type: 'image',
      src: '/images/science/ionization-tendency.svg',
      alt: 'イオン化傾向の順番',
      caption: 'Mg > Zn > Fe > Cu > Ag — 左ほどイオンになりやすい',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">イオン化傾向</span>: Mg > Zn > Fe > Cu > Ag。イオン化傾向が<strong>大きい金属が−極</strong>、差が大きいほど電圧が大きい！',
    },
    {
      type: 'quiz',
      question: '亜鉛（Zn）と銅（Cu）で電池をつくったとき、−極になるのはどちら？',
      options: [
        { letter: 'A', text: '銅（Cu）', correct: false },
        { letter: 'B', text: '亜鉛（Zn）', correct: true },
        { letter: 'C', text: 'どちらも−極', correct: false },
        { letter: 'D', text: '判断できない', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>亜鉛<rp>(</rp><rt>あえん</rt><rp>)</rp></ruby>（Zn）」</strong>です。イオン<ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>傾向<rp>(</rp><rt>けいこう</rt><rp>)</rp></ruby>はZn ＞ Cuなので、イオンになりやすい<ruby>亜鉛<rp>(</rp><rt>あえん</rt><rp>)</rp></ruby>が−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>になります。',
    },
    {
      type: 'date',
      text: 'ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>と<ruby>身近<rp>(</rp><rt>みぢか</rt><rp>)</rp></ruby>な<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>実用的<rp>(</rp><rt>じつようてき</rt><rp>)</rp></ruby>な<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>のしくみを<ruby>学<rp>(</rp><rt>まな</rt><rp>)</rp></ruby>びましょう。<strong><span class="keyword">ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></span></strong>は<ruby>教科書<rp>(</rp><rt>きょうかしょ</rt><rp>)</rp></ruby>の<ruby>代表的<rp>(</rp><rt>だいひょうてき</rt><rp>)</rp></ruby>な<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>モデルです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>の<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby>はこうだよ。<br/><strong>−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby></strong>：Zn<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby> + <ruby>硫酸<rp>(</rp><rt>りゅうさん</rt><rp>)</rp></ruby><ruby>亜鉛<rp>(</rp><rt>あえん</rt><rp>)</rp></ruby><ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby><br/><strong>＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby></strong>：Cu<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby> + <ruby>硫酸銅<rp>(</rp><rt>りゅうさんどう</rt><rp>)</rp></ruby><ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby><br/><ruby>間<rp>(</rp><rt>あいだ</rt><rp>)</rp></ruby>に<strong>セロハン<ruby>膜<rp>(</rp><rt>まく</rt><rp>)</rp></ruby></strong>を入れて<ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>の<ruby>混合<rp>(</rp><rt>こんごう</rt><rp>)</rp></ruby>を<ruby>防<rp>(</rp><rt>ふせ</rt><rp>)</rp></ruby>ぐんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'セロハン<ruby>膜<rp>(</rp><rt>まく</rt><rp>)</rp></ruby>はなぜ<ruby>必要<rp>(</rp><rt>ひつよう</rt><rp>)</rp></ruby>なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '2つの<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>が<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ざるのを<ruby>防<rp>(</rp><rt>ふせ</rt><rp>)</rp></ruby>ぎつつ、イオンだけは<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>すんだ。これで<ruby>回路<rp>(</rp><rt>かいろ</rt><rp>)</rp></ruby>が<ruby>完成<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>して、<ruby>安定<rp>(</rp><rt>あんてい</rt><rp>)</rp></ruby>して電流が流れるようになるよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>身近<rp>(</rp><rt>みぢか</rt><rp>)</rp></ruby>な<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>も<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えよう！<br/><strong><span class="keyword"><ruby>一次<rp>(</rp><rt>いちじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></span></strong>：マンガン<ruby>乾電池<rp>(</rp><rt>かんでんち</rt><rp>)</rp></ruby>など（使い切り）<br/><strong><span class="keyword"><ruby>二次<rp>(</rp><rt>にじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></span></strong>：リチウムイオン<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>など（<ruby>充電<rp>(</rp><rt>じゅうでん</rt><rp>)</rp></ruby>OK）<br/><strong><span class="keyword"><ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></span></strong>：<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>＋<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>→<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>＋<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>（クリーン！）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'スマホの<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>は<ruby>二次<rp>(</rp><rt>にじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>なんですね！<ruby>充電<rp>(</rp><rt>じゅうでん</rt><rp>)</rp></ruby>で<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby><ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>が<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>に<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こるのか…すごい！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>は<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>しか<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>ないから、<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>にやさしい<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>として<ruby>注目<rp>(</rp><rt>ちゅうもく</rt><rp>)</rp></ruby>されているよ。<ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby><ruby>自動車<rp>(</rp><rt>じどうしゃ</rt><rp>)</rp></ruby>も走っているんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ダニエル電池</span>: Zn板(−極) + Cu板(+極) + セロハン膜。<span class="keyword">一次電池</span>(使い切り)、<span class="keyword">二次電池</span>(充電可)、<span class="keyword">燃料電池</span>(H₂+O₂→水+電気)',
    },
    {
      type: 'quiz',
      question: '充電して繰り返し使える電池を何という？',
      options: [
        { letter: 'A', text: '一次電池', correct: false },
        { letter: 'B', text: '二次電池', correct: true },
        { letter: 'C', text: '燃料電池', correct: false },
        { letter: 'D', text: 'ダニエル電池', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>二次<rp>(</rp><rt>にじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>」</strong>です。<ruby>充電<rp>(</rp><rt>じゅうでん</rt><rp>)</rp></ruby>で<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby><ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>を<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>に<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こし、<ruby>繰<rp>(</rp><rt>く</rt><rp>)</rp></ruby>り<ruby>返<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>し使えます。リチウムイオン<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>が<ruby>代表例<rp>(</rp><rt>だいひょうれい</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>：<ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby><ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby> + <ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる2<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>の<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby> → <ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギーを<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>エネルギーに',
        '<strong>イオン<ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>傾向<rp>(</rp><rt>けいこう</rt><rp>)</rp></ruby></strong>：Mg ＞ Zn ＞ Fe ＞ Cu ＞ Ag。<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きい<ruby>方<rp>(</rp><rt>ほう</rt><rp>)</rp></ruby>が−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>',
        '<strong>ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>：Zn<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby>（−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>）+ Cu<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby>（＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>）、セロハン<ruby>膜<rp>(</rp><rt>まく</rt><rp>)</rp></ruby>で<ruby>仕切<rp>(</rp><rt>しき</rt><rp>)</rp></ruby>る',
        '<strong><ruby>一次<rp>(</rp><rt>いちじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>（使い切り）、<strong><ruby>二次<rp>(</rp><rt>にじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>（<ruby>充電<rp>(</rp><rt>じゅうでん</rt><rp>)</rp></ruby>可）、<strong><ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>（H<sub>2</sub>+O<sub>2</sub>→<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>+<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>）',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const batteryTypesChat: HistoryChat = {
  id: 'sci3-battery-types',
  icon: '🔌',
  title: 'いろいろな電池',
  subtitle: '〜中3化学〜 ダニエル電池・一次/二次/燃料電池',
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
      text: 'ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: 'うすい<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>の<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>の<ruby>欠点<rp>(</rp><rt>けってん</rt><rp>)</rp></ruby>を<ruby>改良<rp>(</rp><rt>かいりょう</rt><rp>)</rp></ruby>したのが<strong><span class="keyword">ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></span></strong>です。',
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
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>の<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>を<ruby>化学式<rp>(</rp><rt>かがくしき</rt><rp>)</rp></ruby>で<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>てみよう。<br/><strong>−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby></strong>：Zn → Zn²⁺ + 2e⁻（Zn<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby>が<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>ける）<br/><strong>＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby></strong>：Cu²⁺ + 2e⁻ → Cu（Cu<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby>に<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>が<ruby>付着<rp>(</rp><rt>ふちゃく</rt><rp>)</rp></ruby>）',
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
      text: 'セロハン<ruby>膜<rp>(</rp><rt>まく</rt><rp>)</rp></ruby>は<strong>2つの<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>が<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ざるのを<ruby>防<rp>(</rp><rt>ふせ</rt><rp>)</rp></ruby>ぎつつ、イオンだけは<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>す</strong>んだ。うすい<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>の<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>では＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>にH₂がくっついて<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>が<ruby>下<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>がったけど、ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>ではそれが<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>きないから<ruby>安定<rp>(</rp><rt>あんてい</rt><rp>)</rp></ruby>して<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>が<ruby>流<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>れるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>を<ruby>流<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>し<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>けると<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>！<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>を<ruby>流<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>し<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>けると…<br/>・<strong>Zn<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby></strong>：<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けて<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さくなる（Zn²⁺に）<br/>・<strong>Cu<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby></strong>：<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>が<ruby>付着<rp>(</rp><rt>ふちゃく</rt><rp>)</rp></ruby>して大きくなる<br/>・<strong>CuSO₄<ruby>水溶液<rp>(</rp><rt>すいようえき</rt><rp>)</rp></ruby>の<ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby></strong>：Cu²⁺が<ruby>減<rp>(</rp><rt>へ</rt><rp>)</rp></ruby>って<strong><ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby>がうすくなる</strong>',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/daniell-cell.png',
      alt: 'ダニエル電池の構造',
      caption: 'セロハン膜で2液を仕切り、亜鉛板と銅板で電流を取り出す',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ダニエル電池</span>: −極 Zn → Zn²⁺ + 2e⁻（溶ける）、＋極 Cu²⁺ + 2e⁻ → Cu（付着）。CuSO₄水溶液の<strong>青色がうすくなる</strong>。セロハン膜で安定！',
    },
    {
      type: 'quiz',
      question: 'ダニエル電池で電流を流し続けると、硫酸銅水溶液の色はどうなる？',
      options: [
        { letter: 'A', text: '濃くなる', correct: false },
        { letter: 'B', text: '変わらない', correct: false },
        { letter: 'C', text: '赤色になる', correct: false },
        { letter: 'D', text: '青色がうすくなる', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby>がうすくなる」</strong>です。＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>でCu²⁺が<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>として<ruby>析出<rp>(</rp><rt>せきしゅつ</rt><rp>)</rp></ruby>するため、Cu²⁺が<ruby>減少<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>して青色がうすくなります。',
    },
    {
      type: 'date',
      text: '<ruby>身近<rp>(</rp><rt>みぢか</rt><rp>)</rp></ruby>な<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>と<ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>たちの<ruby>身<rp>(</rp><rt>み</rt><rp>)</rp></ruby>のまわりにはいろいろな<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>があります。<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>と<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>を<ruby>整理<rp>(</rp><rt>せいり</rt><rp>)</rp></ruby>しましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>は大きく3つに<ruby>分<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>けられるよ。<br/><strong><span class="keyword"><ruby>一次<rp>(</rp><rt>いちじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></span></strong>（使い切り）：マンガン<ruby>乾電池<rp>(</rp><rt>かんでんち</rt><rp>)</rp></ruby>、アルカリ<ruby>乾電池<rp>(</rp><rt>かんでんち</rt><rp>)</rp></ruby><br/><strong><span class="keyword"><ruby>二次<rp>(</rp><rt>にじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></span></strong>（<ruby>充電<rp>(</rp><rt>じゅうでん</rt><rp>)</rp></ruby>OK）：リチウムイオン<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>、<ruby>鉛<rp>(</rp><rt>なまり</rt><rp>)</rp></ruby><ruby>蓄電池<rp>(</rp><rt>ちくでんち</rt><rp>)</rp></ruby>、ニッケル<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>二次<rp>(</rp><rt>にじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>の「<ruby>充電<rp>(</rp><rt>じゅうでん</rt><rp>)</rp></ruby>」って<ruby>化学的<rp>(</rp><rt>かがくてき</rt><rp>)</rp></ruby>には<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>きているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>充電<rp>(</rp><rt>じゅうでん</rt><rp>)</rp></ruby>とは、<ruby>外部<rp>(</rp><rt>がいぶ</rt><rp>)</rp></ruby>から<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>エネルギーを<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>えて<strong><ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby>のときと<ruby>逆向<rp>(</rp><rt>ぎゃくむ</rt><rp>)</rp></ruby>きの<ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby><ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>を<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こす</strong>ことだよ。もとの<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>に<ruby>戻<rp>(</rp><rt>もど</rt><rp>)</rp></ruby>すから<ruby>繰<rp>(</rp><rt>く</rt><rp>)</rp></ruby>り<ruby>返<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>し使えるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/battery-types.png',
      alt: '一次電池と二次電池の比較',
      caption: '一次電池（使い切り）と二次電池（充電可能）の違い',
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
      expression: 'excited',
      text: 'そして<strong><span class="keyword"><ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></span></strong>！<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>と<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>を<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>させて<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>を<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>出<rp>(</rp><rt>だ</rt><rp>)</rp></ruby>すんだ。<br/><ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby><ruby>反応式<rp>(</rp><rt>はんのうしき</rt><rp>)</rp></ruby>：<strong>2H₂ + O₂ → 2H₂O</strong><br/><ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>しか<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>ないから、<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>にやさしいクリーンエネルギーだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>の<ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby>と<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'よく<ruby>気<rp>(</rp><rt>き</rt><rp>)</rp></ruby>づいたね！<ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>は<strong><ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>の<ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby>の<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby></strong>なんだ。<br/><ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby>：<strong>2H₂O → 2H₂ + O₂</strong><br/><ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>：<strong>2H₂ + O₂ → 2H₂O</strong><br/><ruby>矢印<rp>(</rp><rt>やじるし</rt><rp>)</rp></ruby>が<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>の<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'image',
      src: '/images/science/grade3/chemistry/fuel-cell.png',
      alt: '燃料電池のしくみ',
      caption: '水素と酸素から電気エネルギーを取り出し、水が生成する',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">一次電池</span>: マンガン・アルカリ乾電池。<span class="keyword">二次電池</span>: リチウムイオン・鉛蓄電池・ニッケル水素電池。<span class="keyword">燃料電池</span>: 2H₂ + O₂ → 2H₂O（電気分解の逆）',
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
        '<strong>ダニエル<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>：−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby> Zn → Zn²⁺ + 2e⁻、＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby> Cu²⁺ + 2e⁻ → Cu。CuSO₄の<ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby>がうすくなる',
        '<strong><ruby>一次<rp>(</rp><rt>いちじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>（マンガン・アルカリ<ruby>乾電池<rp>(</rp><rt>かんでんち</rt><rp>)</rp></ruby>）、<strong><ruby>二次<rp>(</rp><rt>にじ</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>（リチウムイオン・<ruby>鉛<rp>(</rp><rt>なまり</rt><rp>)</rp></ruby><ruby>蓄電池<rp>(</rp><rt>ちくでんち</rt><rp>)</rp></ruby>・ニッケル<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>）、<strong><ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby><ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby></strong>（2H₂+O₂→2H₂O、<ruby>電気分解<rp>(</rp><rt>でんきぶんかい</rt><rp>)</rp></ruby>の<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>）',
      ],
    },
  ],
};

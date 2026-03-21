import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const chubuHighlandChat: HistoryChat = {
  id: 'geo2-cb-highland',
  icon: '🥬',
  title: '中部地方②（中央高地と北陸）',
  subtitle: '〜中2地理〜 抑制栽培・甲府盆地・諏訪・稲作・伝統工芸品',
  characters: [
    {
      id: 'teacher',
      name: '地理の先生',
      emoji: '🌍',
      colorFrom: '#2563EB',
      colorTo: '#60A5FA',
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
      text: '中央高地の農業と工業',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chubu-regions.png',
      alt: '中部地方の中央高地と北陸の図',
      caption: '中央高地と北陸の産業・農業の全体図',
    },
    {
      type: 'narrator',
      text: '中央高地の<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候は、独自の農業と工業を生み出しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '中央高地では<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候を生かした<strong><span class="keyword"><ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby></span></strong>が行われているよ。長野県の<ruby>八ヶ岳<rp>(</rp><rt>やつがたけ</rt><rp>)</rp></ruby>山麓ではレタスなどの<ruby>高原野菜<rp>(</rp><rt>こうげんやさい</rt><rp>)</rp></ruby>を<strong>夏に出荷</strong>するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '九州の<ruby>促成栽培<rp>(</rp><rt>そくせいさいばい</rt><rp>)</rp></ruby>とは<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>ですね！涼しいから夏に出荷するんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい比較だね！<ruby>山梨<rp>(</rp><rt>やまなし</rt><rp>)</rp></ruby>県の<ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby><ruby>盆地<rp>(</rp><rt>ぼんち</rt><rp>)</rp></ruby>では<ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby>の水はけのよさと日照時間の長さを生かして、<strong>ぶどう</strong>や<strong><ruby>桃<rp>(</rp><rt>もも</rt><rp>)</rp></ruby></strong>などの<strong><ruby>果樹<rp>(</rp><rt>かじゅ</rt><rp>)</rp></ruby>栽培</strong>が盛んだよ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/alluvial-fan.jpeg',
      alt: '扇状地の地形イラスト',
      caption: '扇状地のしくみ — 甲府盆地はぶどう・ももの一大産地',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '工業はどうですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '長野県の<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方はかつて<strong><ruby>精密機械<rp>(</rp><rt>せいみつきかい</rt><rp>)</rp></ruby>工業</strong>（時計・カメラ）で<strong>「東洋のスイス」</strong>とよばれたんだ。今はその技術を生かして<strong>コンピューター関連産業</strong>に転換しているよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">抑制栽培</span>で高原野菜（八ヶ岳のレタス）。<span class="keyword">甲府盆地</span>の扇状地で果樹栽培。<span class="keyword">諏訪</span>は精密機械→コンピューター関連に転換',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chubu-fruit-production-chart.svg',
      alt: '甲府盆地の果樹生産量グラフ（準備中）',
      caption: '山梨県はぶどう・ももの生産量が全国1位（準備中）出典：農林水産省',
    },
    {
      type: 'quiz',
      question: '中央高地で冷涼な気候を利用して、出荷時期を遅らせる栽培方法を何というか？',
      options: [
        { letter: 'A', text: '促成栽培', correct: false },
        { letter: 'B', text: '輪作', correct: false },
        { letter: 'C', text: '二毛作', correct: false },
        { letter: 'D', text: '抑制栽培', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>」</strong>です。涼しい高原で野菜を育て、出荷時期を遅らせることで、他の産地と<ruby>競合<rp>(</rp><rt>きょうごう</rt><rp>)</rp></ruby>しない時期に出荷できます。',
    },
    {
      type: 'date',
      text: '北陸の稲作と伝統的工芸品',
    },
    {
      type: 'narrator',
      text: '北陸地方の<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>は、独自の農業と伝統産業を生み出しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '北陸地方は<ruby>越後<rp>(</rp><rt>えちご</rt><rp>)</rp></ruby>平野や<ruby>庄内<rp>(</rp><rt>しょうない</rt><rp>)</rp></ruby>平野で<strong>稲作</strong>が盛んだよ。特に<strong>新潟県</strong>は米の生産量が<strong>日本一</strong>で、コシヒカリの産地としても有名なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '北陸の<ruby>伝統的工芸品<rp>(</rp><rt>でんとうてきこうげいひん</rt><rp>)</rp></ruby>はどうやって生まれたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '冬は<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>で<ruby>農作業<rp>(</rp><rt>のうさぎょう</rt><rp>)</rp></ruby>ができないから、<strong><ruby>副業<rp>(</rp><rt>ふくぎょう</rt><rp>)</rp></ruby></strong>として<ruby>手工業<rp>(</rp><rt>しゅこうぎょう</rt><rp>)</rp></ruby>が発達したんだ。<ruby>福井<rp>(</rp><rt>ふくい</rt><rp>)</rp></ruby>県<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>市の<strong><span class="keyword">メガネフレーム</span></strong>は国内シェア約96%だよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '96%！ほとんど鯖江で作っているんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'ほかにも<ruby>石川<rp>(</rp><rt>いしかわ</rt><rp>)</rp></ruby>県の<strong><ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby></strong>・<strong><ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby></strong>・<strong><ruby>加賀友禅<rp>(</rp><rt>かがゆうぜん</rt><rp>)</rp></ruby></strong>、福井県の<strong><ruby>越前漆器<rp>(</rp><rt>えちぜんしっき</rt><rp>)</rp></ruby></strong>、新潟県の<strong><ruby>小千谷<rp>(</rp><rt>おぢや</rt><rp>)</rp></ruby>ちぢみ</strong>、<ruby>燕<rp>(</rp><rt>つばめ</rt><rp>)</rp></ruby>市・<ruby>三条<rp>(</rp><rt>さんじょう</rt><rp>)</rp></ruby>市の<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby><ruby>洋食器<rp>(</rp><rt>ようしょっき</rt><rp>)</rp></ruby>も有名だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '北陸のまちづくりで何か新しい取り組みはありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>富山<rp>(</rp><rt>とやま</rt><rp>)</rp></ruby>市は<strong><span class="keyword">LRT</span></strong>（次世代型路面電車）を導入して<strong><span class="keyword">コンパクトシティ</span></strong>を目指しているよ。<ruby>少子高齢化<rp>(</rp><rt>しょうしこうれいか</rt><rp>)</rp></ruby>で車を運転できない<ruby>高齢者<rp>(</rp><rt>こうれいしゃ</rt><rp>)</rp></ruby>が増えるから、公共交通を整備して都市機能を中心部に<ruby>集約<rp>(</rp><rt>しゅうやく</rt><rp>)</rp></ruby>するんだ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chubu-agriculture.png',
      alt: '中部地方の多様な産業の図',
      caption: '中央高地の高原野菜・北陸の伝統工芸',
    },
    {
      type: 'summary-point',
      text: '北陸：<span class="keyword">新潟県</span>が米の生産量日本一。冬の副業から<span class="keyword">伝統的工芸品</span>（鯖江のメガネ・輪島塗・九谷焼・加賀友禅）が発展。富山市は<span class="keyword">コンパクトシティ</span>を推進',
    },
    {
      type: 'quiz',
      question: '北陸地方で伝統的工芸品が発達した背景として正しいものはどれか？',
      options: [
        { letter: 'A', text: '温暖な気候で農業の合間に行った', correct: false },
        { letter: 'B', text: '外国からの技術伝来で始まった', correct: false },
        { letter: 'C', text: '冬の豪雪で農作業ができず副業として手工業が発達した', correct: true },
        { letter: 'D', text: '大都市の需要に応えるために始まった', correct: false },
      ],
      explanation:
        '<strong>正解はC</strong>です。北陸は冬に<ruby>大量<rp>(</rp><rt>たいりょう</rt><rp>)</rp></ruby>の雪が降る<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>地帯で、<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>の<ruby>副業<rp>(</rp><rt>ふくぎょう</rt><rp>)</rp></ruby>として<ruby>手工業<rp>(</rp><rt>しゅこうぎょう</rt><rp>)</rp></ruby>が発達し、<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>・<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>のメガネなどの伝統的工芸品につながりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby></strong>で高原野菜（八ヶ岳のレタス）、<strong><ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>盆地</strong>の<ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby>で果樹、<strong><ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby></strong>の精密機械→コンピューター関連',
        '北陸：<strong>新潟県</strong>が米の生産量日本一。冬の<ruby>副業<rp>(</rp><rt>ふくぎょう</rt><rp>)</rp></ruby>から<strong><ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>のメガネ</strong>・<strong><ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby></strong>・<strong><ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby></strong>。富山市の<strong>コンパクトシティ</strong>',
      ],
    },
  ],
};

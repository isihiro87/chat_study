import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const chubuChat: HistoryChat = {
  id: 'geo2-chubu',
  icon: '🏔️',
  title: '中部地方',
  subtitle: '〜中2地理〜 東海・中央高地・北陸の3地域・自動車産業・伝統工芸',
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
      text: '日本アルプスと3つの地域',
    },
    {
      type: 'narrator',
      text: '<ruby>中部<rp>(</rp><rt>ちゅうぶ</rt><rp>)</rp></ruby>地方は<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>アルプスを<ruby>境<rp>(</rp><rt>さかい</rt><rp>)</rp></ruby>に、3つの地域に分かれています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '中部地方は<strong><span class="keyword">日本アルプス</span></strong>（<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈）を境にして、<strong><ruby>東海<rp>(</rp><rt>とうかい</rt><rp>)</rp></ruby></strong>・<strong><ruby>中央高地<rp>(</rp><rt>ちゅうおうこうち</rt><rp>)</rp></ruby></strong>・<strong><ruby>北陸<rp>(</rp><rt>ほくりく</rt><rp>)</rp></ruby></strong>の3つの地域に分かれるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'それぞれの気候はどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '東海は<ruby>太平洋<rp>(</rp><rt>たいへいよう</rt><rp>)</rp></ruby>側で温暖・<ruby>多雨<rp>(</rp><rt>たう</rt><rp>)</rp></ruby>。中央高地は標高が高くて夏でも<ruby>涼<rp>(</rp><rt>すず</rt><rp>)</rp></ruby>しい<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候。北陸は冬に<ruby>大量<rp>(</rp><rt>たいりょう</rt><rp>)</rp></ruby>の<ruby>雪<rp>(</rp><rt>ゆき</rt><rp>)</rp></ruby>が降る<strong><ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>地帯</strong>だよ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chubu-regions.png',
      alt: '中部地方の3つの地域の図',
      caption: '日本アルプスを境に東海・中央高地・北陸に分かれる',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">日本アルプス</span>を境に東海（温暖・多雨）・中央高地（冷涼）・北陸（豪雪）の3地域',
    },
    {
      type: 'date',
      text: '東海地方と中京工業地帯',
    },
    {
      type: 'narrator',
      text: '<ruby>東海<rp>(</rp><rt>とうかい</rt><rp>)</rp></ruby>地方は日本の<ruby>自動車産業<rp>(</rp><rt>じどうしゃさんぎょう</rt><rp>)</rp></ruby>の中心地です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>愛知<rp>(</rp><rt>あいち</rt><rp>)</rp></ruby>県<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市には<strong>トヨタ自動車</strong>の本社があるよ。もともと「<ruby>挙母<rp>(</rp><rt>ころも</rt><rp>)</rp></ruby>市」という名前だったのが、自動車産業の<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>で市名が変わったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '市の名前まで変わるなんて、すごい<ruby>影響力<rp>(</rp><rt>えいきょうりょく</rt><rp>)</rp></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>中京工業地帯<rp>(</rp><rt>ちゅうきょうこうぎょうちたい</rt><rp>)</rp></ruby></span></strong>は自動車関連の工場が集まっていて、<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>は<strong>日本最大</strong>なんだ。<ruby>静岡<rp>(</rp><rt>しずおか</rt><rp>)</rp></ruby>県の<ruby>浜松<rp>(</rp><rt>はままつ</rt><rp>)</rp></ruby>市は<ruby>楽器<rp>(</rp><rt>がっき</rt><rp>)</rp></ruby>でも有名だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">中京工業地帯</span>：自動車産業中心で製造品出荷額が日本最大',
    },
    {
      type: 'date',
      text: '中央高地の農業と北陸の伝統',
    },
    {
      type: 'narrator',
      text: '中央高地の<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候と北陸の<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>は、独自の産業を生み出しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '中央高地では<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候を生かした<strong><span class="keyword"><ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby></span></strong>が行われているよ。レタスやキャベツなどの<ruby>高原野菜<rp>(</rp><rt>こうげんやさい</rt><rp>)</rp></ruby>を<strong>夏に出荷</strong>するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '九州の促成栽培とは<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>ですね！涼しいから夏に出荷するんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい比較だね！<ruby>山梨<rp>(</rp><rt>やまなし</rt><rp>)</rp></ruby>県の<ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby><ruby>盆地<rp>(</rp><rt>ぼんち</rt><rp>)</rp></ruby>では<ruby>ぶどう<rp>(</rp><rt>ぶどう</rt><rp>)</rp></ruby>や<ruby>桃<rp>(</rp><rt>もも</rt><rp>)</rp></ruby>などの<strong><ruby>果樹<rp>(</rp><rt>かじゅ</rt><rp>)</rp></ruby>栽培</strong>も盛んだよ。長野県の<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方は<strong><ruby>精密機械<rp>(</rp><rt>せいみつきかい</rt><rp>)</rp></ruby>工業</strong>で「東洋のスイス」とよばれたんだ',
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
      text: 'ほかにも<ruby>石川<rp>(</rp><rt>いしかわ</rt><rp>)</rp></ruby>県の<strong><ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby></strong>・<strong><ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby></strong>、新潟県<ruby>燕<rp>(</rp><rt>つばめ</rt><rp>)</rp></ruby>市・<ruby>三条<rp>(</rp><rt>さんじょう</rt><rp>)</rp></ruby>市の<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby><ruby>洋食器<rp>(</rp><rt>ようしょっき</rt><rp>)</rp></ruby>も有名だよ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chubu-agriculture.png',
      alt: '中部地方の多様な産業の図',
      caption: '東海の自動車産業・中央高地の高原野菜・北陸の伝統工芸',
    },
    {
      type: 'quiz',
      question: '中央高地で冷涼な気候を利用して、出荷時期を遅らせる栽培方法を何というか？',
      options: [
        { letter: 'A', text: '促成栽培', correct: false },
        { letter: 'B', text: '抑制栽培', correct: true },
        { letter: 'C', text: '二毛作', correct: false },
        { letter: 'D', text: '輪作', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>」</strong>です。涼しい高原で野菜を育て、出荷時期を遅らせることで、他の産地と<ruby>競合<rp>(</rp><rt>きょうごう</rt><rp>)</rp></ruby>しない時期に出荷できます。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">抑制栽培</span>で高原野菜。<span class="keyword">甲府盆地</span>で果樹。北陸は冬の副業から<span class="keyword">伝統的工芸品</span>が発展',
    },
    {
      type: 'end',
      points: [
        '<strong>日本アルプス</strong>を境に<ruby>東海<rp>(</rp><rt>とうかい</rt><rp>)</rp></ruby>・<ruby>中央高地<rp>(</rp><rt>ちゅうおうこうち</rt><rp>)</rp></ruby>・<ruby>北陸<rp>(</rp><rt>ほくりく</rt><rp>)</rp></ruby>の3地域',
        '<strong><ruby>中京工業地帯<rp>(</rp><rt>ちゅうきょうこうぎょうちたい</rt><rp>)</rp></ruby></strong>：自動車産業中心で<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>日本最大',
        '<strong><ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby></strong>で高原野菜、<strong><ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>盆地</strong>の果樹、<strong><ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby></strong>の精密機械',
        '北陸：冬の<ruby>副業<rp>(</rp><rt>ふくぎょう</rt><rp>)</rp></ruby>から<strong><ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>のメガネ</strong>・<strong><ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby></strong>・<strong><ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby></strong>が発展',
      ],
    },
  ],
};

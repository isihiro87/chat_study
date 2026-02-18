import type { HistoryChat } from '../../../../../../../history-chat/types';

export const economicGrowthChat: HistoryChat = {
  id: 'economic-growth',
  icon: '📈',
  title: '高度経済成長',
  subtitle: '〜戦後〜 奇跡の経済発展',
  characters: [
    {
      id: 'researcher',
      name: '先生',
      emoji: '👨‍🏫',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
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
      text: '1950年代後半〜1960年代',
    },
    {
      type: 'narrator',
      text: '1950年代<ruby>半<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>ばから、日本は<strong><span class="keyword"><span data-tooltip="1950年代半ばから1970年代初めにかけて、日本が年平均10%以上の経済成長を遂げた時期"><ruby>高度経済成長<rp>(</rp><rt>こうどけいざいせいちょう</rt><rp>)</rp></ruby></span></span></strong>の時代に入りました。<strong><ruby>池田勇人<rp>(</rp><rt>いけだはやと</rt><rp>)</rp></ruby></strong>首相の<strong><span class="keyword"><ruby>所得倍増<rp>(</rp><rt>しょとくばいぞう</rt><rp>)</rp></ruby></span></strong><ruby>計画<rp>(</rp><rt>けいかく</rt><rp>)</rp></ruby>のもと、<strong><span class="keyword"><ruby>重化学工業<rp>(</rp><rt>じゅうかがくこうぎょう</rt><rp>)</rp></ruby></span></strong>が<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><span data-tooltip="主要エネルギー源が石炭から石油に変わったこと"><ruby>エネルギー<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby><rp>(</rp><rt>えねるぎーかくめい</rt><rp>)</rp></ruby></span></span></strong>で<ruby>石炭<rp>(</rp><rt>せきたん</rt><rp>)</rp></ruby>から<ruby>石油<rp>(</rp><rt>せきゆ</rt><rp>)</rp></ruby>への<ruby>転換<rp>(</rp><rt>てんかん</rt><rp>)</rp></ruby>が進みました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>所得倍増</strong>って、お<ruby>給料<rp>(</rp><rt>きゅうりょう</rt><rp>)</rp></ruby>が2<ruby>倍<rp>(</rp><rt>ばい</rt><rp>)</rp></ruby>になるってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: 'そう！10年間で<ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby>の<ruby>所得<rp>(</rp><rt>しょとく</rt><rp>)</rp></ruby>を2倍にするという<ruby>計画<rp>(</rp><rt>けいかく</rt><rp>)</rp></ruby>だよ。実際にはもっと早く<ruby>達成<rp>(</rp><rt>たっせい</rt><rp>)</rp></ruby>されたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'すごい！生活もずいぶん<ruby>豊<rp>(</rp><rt>ゆた</rt><rp>)</rp></ruby>かになったんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'excited',
      text: '<strong>テレビ・<ruby>洗濯機<rp>(</rp><rt>せんたくき</rt><rp>)</rp></ruby>・<ruby>冷蔵庫<rp>(</rp><rt>れいぞうこ</rt><rp>)</rp></ruby></strong>は「<strong><span class="keyword"><ruby>三種<rp>(</rp><rt>さんしゅ</rt><rp>)</rp></ruby>の<ruby>神器<rp>(</rp><rt>じんぎ</rt><rp>)</rp></ruby></span></strong>」と呼ばれて家庭に<ruby>急速<rp>(</rp><rt>きゅうそく</rt><rp>)</rp></ruby>に<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>したよ。<strong><span class="keyword"><ruby>国民総生産<rp>(</rp><rt>こくみんそうせいさん</rt><rp>)</rp></ruby>（GNP）</span></strong>はアメリカに次いで世界第2位に成長したんだ',
    },
    {
      type: 'narrator',
      text: '1964年には<strong><span class="keyword"><ruby>東海道新幹線<rp>(</rp><rt>とうかいどうしんかんせん</rt><rp>)</rp></ruby></span></strong>が<ruby>開通<rp>(</rp><rt>かいつう</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby>オリンピック</span></strong>がアジアで初めて<ruby>開催<rp>(</rp><rt>かいさい</rt><rp>)</rp></ruby>されました。1970年には<strong><span class="keyword"><ruby>日本万国博覧会<rp>(</rp><rt>にほんばんこくはくらんかい</rt><rp>)</rp></ruby>（<ruby>大阪万博<rp>(</rp><rt>おおさかばんぱく</rt><rp>)</rp></ruby>）</span></strong>が開かれ、日本の<ruby>技術力<rp>(</rp><rt>ぎじゅつりょく</rt><rp>)</rp></ruby>を世界に示しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>新幹線<rp>(</rp><rt>しんかんせん</rt><rp>)</rp></ruby>もオリンピックも万博も、この時代に始まったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">高度経済成長</span>：<span class="keyword">所得倍増</span>計画 → <span class="keyword">三種の神器</span>が普及 → <span class="keyword">東京オリンピック</span>・<span class="keyword">大阪万博</span>で世界にアピール！',
    },
    {
      type: 'quiz',
      question: '高度経済成長期に「三種の神器」と呼ばれた家電製品は？',
      options: [
        { letter: 'A', text: 'テレビ・ラジオ・電話', correct: false },
        { letter: 'B', text: '洗濯機・掃除機・冷蔵庫', correct: false },
        { letter: 'C', text: 'テレビ・エアコン・自動車', correct: false },
        { letter: 'D', text: 'テレビ・洗濯機・冷蔵庫', correct: true },
      ],
      explanation:
        '<strong>正解はD「テレビ・<ruby>洗濯機<rp>(</rp><rt>せんたくき</rt><rp>)</rp></ruby>・<ruby>冷蔵庫<rp>(</rp><rt>れいぞうこ</rt><rp>)</rp></ruby>」</strong>です。<strong>高度経済成長</strong>期に「<strong>三種の神器</strong>」として家庭に<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'date',
      text: '1960年代後半〜1970年代',
    },
    {
      type: 'narrator',
      text: 'しかし<ruby>急速<rp>(</rp><rt>きゅうそく</rt><rp>)</rp></ruby>な<ruby>工業化<rp>(</rp><rt>こうぎょうか</rt><rp>)</rp></ruby>の<ruby>代償<rp>(</rp><rt>だいしょう</rt><rp>)</rp></ruby>として<ruby>深刻<rp>(</rp><rt>しんこく</rt><rp>)</rp></ruby>な<strong><span class="keyword"><span data-tooltip="工場の排水や排煙などにより環境が汚染され、住民の健康に被害が出る問題"><ruby>公害<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby></span></span></strong>問題が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>しました。<strong><span class="keyword"><ruby>イタイイタイ<ruby>病<rp>(</rp><rt>びょう</rt><rp>)</rp></ruby><rp>(</rp><rt>いたいいたいびょう</rt><rp>)</rp></ruby></span></strong>、<strong><span class="keyword"><ruby>水俣病<rp>(</rp><rt>みなまたびょう</rt><rp>)</rp></ruby></span></strong>、<strong><span class="keyword"><ruby>四日市<rp>(</rp><rt>よっかいち</rt><rp>)</rp></ruby>ぜんそく</span></strong>が大きな社会問題となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>が<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>する一方で、<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>や<ruby>健康<rp>(</rp><rt>けんこう</rt><rp>)</rp></ruby>の問題が出てきたんですね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '工場の<ruby>排水<rp>(</rp><rt>はいすい</rt><rp>)</rp></ruby>や<ruby>排煙<rp>(</rp><rt>はいえん</rt><rp>)</rp></ruby>で<ruby>体<rp>(</rp><rt>からだ</rt><rp>)</rp></ruby>を<ruby>壊<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>す人が増えて、政府は<strong><span class="keyword"><ruby>公害対策基本法<rp>(</rp><rt>こうがいたいさくきほんほう</rt><rp>)</rp></ruby></span></strong>を<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>環境庁<rp>(</rp><rt>かんきょうちょう</rt><rp>)</rp></ruby></span></strong>を<ruby>設置<rp>(</rp><rt>せっち</rt><rp>)</rp></ruby>したんだよ',
    },
    {
      type: 'narrator',
      text: '1973年、<ruby>中東戦争<rp>(</rp><rt>ちゅうとうせんそう</rt><rp>)</rp></ruby>をきっかけに<strong><span class="keyword"><span data-tooltip="中東戦争で産油国が石油価格を引き上げ、世界経済に大打撃を与えた出来事"><ruby>石油危機<rp>(</rp><rt>せきゆきき</rt><rp>)</rp></ruby>（オイル・ショック）</span></span></strong>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>。<ruby>石油価格<rp>(</rp><rt>せきゆかかく</rt><rp>)</rp></ruby>が<ruby>急騰<rp>(</rp><rt>きゅうとう</rt><rp>)</rp></ruby>し、<strong>高度経済成長</strong>は終わりを<ruby>迎<rp>(</rp><rt>むか</rt><rp>)</rp></ruby>えました。その後日本は<strong><span class="keyword"><ruby>貿易摩擦<rp>(</rp><rt>ぼうえきまさつ</rt><rp>)</rp></ruby></span></strong>に<ruby>直面<rp>(</rp><rt>ちょくめん</rt><rp>)</rp></ruby>しながらも、<strong><span class="keyword"><ruby>政府開発援助<rp>(</rp><rt>せいふかいはつえんじょ</rt><rp>)</rp></ruby>（ODA）</span></strong>で<ruby>途上国<rp>(</rp><rt>とじょうこく</rt><rp>)</rp></ruby>への<ruby>支援<rp>(</rp><rt>しえん</rt><rp>)</rp></ruby>を<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'トイレットペーパーの<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>い<ruby>占<rp>(</rp><rt>し</rt><rp>)</rp></ruby>めが起きたって聞いたことがあります！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'thinking',
      text: '<ruby>石油<rp>(</rp><rt>せきゆ</rt><rp>)</rp></ruby>が手に入らなくなるという<ruby>不安<rp>(</rp><rt>ふあん</rt><rp>)</rp></ruby>から<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>い<ruby>占<rp>(</rp><rt>し</rt><rp>)</rp></ruby>めが起きたんだ。<ruby>物価<rp>(</rp><rt>ぶっか</rt><rp>)</rp></ruby>も<ruby>急上昇<rp>(</rp><rt>きゅうじょうしょう</rt><rp>)</rp></ruby>して、国民の生活に大きな<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>が出たよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">公害</span>問題（<span class="keyword">水俣病</span>・<span class="keyword">イタイイタイ病</span>・<span class="keyword">四日市ぜんそく</span>） → <span class="keyword">石油危機</span>で高度経済成長が終了！',
    },
    {
      type: 'quiz',
      question: '1973年の石油危機のきっかけとなった出来事は？',
      options: [
        { letter: 'A', text: 'キューバ危機', correct: false },
        { letter: 'B', text: '朝鮮戦争', correct: false },
        { letter: 'C', text: 'ベトナム戦争', correct: false },
        { letter: 'D', text: '中東戦争', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>中東戦争<rp>(</rp><rt>ちゅうとうせんそう</rt><rp>)</rp></ruby>」</strong>です。中東戦争をきっかけに<ruby>産油国<rp>(</rp><rt>さんゆこく</rt><rp>)</rp></ruby>が<ruby>石油価格<rp>(</rp><rt>せきゆかかく</rt><rp>)</rp></ruby>を引き上げ、世界<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>に大きな<ruby>打撃<rp>(</rp><rt>だげき</rt><rp>)</rp></ruby>を<ruby>与<rp>(</rp><rt>あた</rt><rp>)</rp></ruby>えました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>高度経済成長<rp>(</rp><rt>こうどけいざいせいちょう</rt><rp>)</rp></ruby></strong>で日本の<strong>GNP</strong>は世界第2位に',
        '<strong><ruby>所得倍増<rp>(</rp><rt>しょとくばいぞう</rt><rp>)</rp></ruby></strong>計画のもと<strong><ruby>重化学工業<rp>(</rp><rt>じゅうかがくこうぎょう</rt><rp>)</rp></ruby></strong>が発展',
        '<strong><ruby>三種<rp>(</rp><rt>さんしゅ</rt><rp>)</rp></ruby>の<ruby>神器<rp>(</rp><rt>じんぎ</rt><rp>)</rp></ruby></strong>（テレビ・<ruby>洗濯機<rp>(</rp><rt>せんたくき</rt><rp>)</rp></ruby>・<ruby>冷蔵庫<rp>(</rp><rt>れいぞうこ</rt><rp>)</rp></ruby>）が家庭に<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>',
        '<strong><ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby>オリンピック</strong>（1964年）・<strong><ruby>大阪万博<rp>(</rp><rt>おおさかばんぱく</rt><rp>)</rp></ruby></strong>（1970年）の<ruby>開催<rp>(</rp><rt>かいさい</rt><rp>)</rp></ruby>',
        '<strong><ruby>公害<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>問題</strong>：<strong><ruby>水俣病<rp>(</rp><rt>みなまたびょう</rt><rp>)</rp></ruby></strong>・<strong><ruby>イタイイタイ病<rp>(</rp><rt>いたいいたいびょう</rt><rp>)</rp></ruby></strong>・<strong><ruby>四日市<rp>(</rp><rt>よっかいち</rt><rp>)</rp></ruby>ぜんそく</strong>',
        '<strong><ruby>石油危機<rp>(</rp><rt>せきゆきき</rt><rp>)</rp></ruby></strong>（1973年）で高度経済成長が終了',
      ],
    },
  ],
};

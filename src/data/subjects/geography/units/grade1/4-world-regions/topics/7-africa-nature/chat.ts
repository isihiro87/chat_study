import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const africaNatureChat: HistoryChat = {
  id: 'geo1-africa-nature',
  icon: '🏜️',
  title: 'アフリカ州(1) 自然・歴史',
  subtitle: '〜中1地理〜 サハラ砂漠・ナイル川・キリマンジャロ・文化',
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
    // ===== 自然と歴史 =====
    {
      type: 'date',
      text: 'アフリカの自然と歴史',
    },
    {
      type: 'narrator',
      text: 'アフリカ<ruby>大陸<rp>(</rp><rt>たいりく</rt><rp>)</rp></ruby>は世界で2番目に大きな大陸です。<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby>から<ruby>熱帯雨林<rp>(</rp><rt>ねったいうりん</rt><rp>)</rp></ruby>まで、多様な自然が広がっています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'アフリカの北部には世界最大の<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby>、<strong><span class="keyword">サハラ<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby></span></strong>が広がっているよ。面積はなんとアメリカ合衆国とほぼ同じくらいなんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'そんなに広いんですか！砂漠の南側はどうなっているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'サハラ砂漠の南側には<strong><span class="keyword">サヘル</span></strong>という<ruby>半乾燥<rp>(</rp><rt>はんかんそう</rt><rp>)</rp></ruby>地帯があるんだ。<ruby>砂漠化<rp>(</rp><rt>さばくか</rt><rp>)</rp></ruby>が進んでいて深刻な問題になっているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '赤道の近くはどんな環境なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>赤道<rp>(</rp><rt>せきどう</rt><rp>)</rp></ruby>付近には<strong><span class="keyword"><ruby>熱帯雨林<rp>(</rp><rt>ねったいうりん</rt><rp>)</rp></ruby></span></strong>が広がり、その周辺には<strong><span class="keyword">サバナ</span></strong>という<ruby>草原<rp>(</rp><rt>そうげん</rt><rp>)</rp></ruby>地帯が分布しているよ。ライオンやゾウが暮らすのもこのサバナだね',
    },
    {
      type: 'image',
      src: '/images/geography/grade1/world-regions/africa-nature-map.png',
      alt: 'アフリカの自然と地形',
      caption: 'サハラ砂漠・サヘル・熱帯雨林・ナイル川・キリマンジャロ・大地溝帯',
    },
    {
      type: 'summary-point',
      text: 'アフリカの自然：<span class="keyword">サハラ砂漠</span>（世界最大）→ <span class="keyword">サヘル</span>（半乾燥）→ <span class="keyword">サバナ</span>（草原）→ <span class="keyword">熱帯雨林</span>（赤道付近）',
    },
    {
      type: 'quiz',
      question: 'サハラ砂漠の南側に広がる半乾燥地帯を何という？',
      options: [
        { letter: 'A', text: 'サバナ', correct: false },
        { letter: 'B', text: 'サヘル', correct: true },
        { letter: 'C', text: 'ステップ', correct: false },
        { letter: 'D', text: 'タイガ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。サヘルはサハラ<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby>の南側に広がる<ruby>半乾燥<rp>(</rp><rt>はんかんそう</rt><rp>)</rp></ruby>地帯で、<ruby>砂漠化<rp>(</rp><rt>さばくか</rt><rp>)</rp></ruby>が深刻です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'アフリカの歴史で大事なことって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '16世紀から19世紀にかけて、ヨーロッパ<ruby>諸国<rp>(</rp><rt>しょこく</rt><rp>)</rp></ruby>による<strong><span class="keyword"><ruby>奴隷貿易<rp>(</rp><rt>どれいぼうえき</rt><rp>)</rp></ruby></span></strong>が行われたんだ。多くのアフリカの人々がアメリカ大陸に連れていかれたんだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さらに19世紀後半には、ヨーロッパ<ruby>列強<rp>(</rp><rt>れっきょう</rt><rp>)</rp></ruby>がアフリカの大部分を<strong><span class="keyword"><ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby></span></strong>として<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>したんだ。この植民地支配がアフリカの現在にも大きな影響を残しているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'そんなつらい歴史があったんですね…',
    },
    {
      type: 'summary-point',
      text: 'アフリカの歴史：<span class="keyword">奴隷貿易</span>（16〜19世紀）→ <span class="keyword">植民地支配</span>（19世紀後半〜）',
    },
    {
      type: 'quiz',
      question: '19世紀後半にヨーロッパ列強がアフリカに対して行ったことは？',
      options: [
        { letter: 'A', text: '経済援助', correct: false },
        { letter: 'B', text: '自由貿易協定の締結', correct: false },
        { letter: 'C', text: '植民地支配', correct: true },
        { letter: 'D', text: '文化交流', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。19世紀後半、ヨーロッパ<ruby>列強<rp>(</rp><rt>れっきょう</rt><rp>)</rp></ruby>はアフリカの大部分を<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>として<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>しました。',
    },

    // ===== ナイル川とキリマンジャロ =====
    {
      type: 'date',
      text: 'ナイル川とキリマンジャロ',
    },
    {
      type: 'narrator',
      text: 'アフリカには世界的に有名な大河や<ruby>高山<rp>(</rp><rt>こうざん</rt><rp>)</rp></ruby>があります。自然の<ruby>雄大<rp>(</rp><rt>ゆうだい</rt><rp>)</rp></ruby>さを見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'アフリカには世界最長級の川、<strong><span class="keyword">ナイル川</span></strong>が流れているよ。全長は約6650キロメートルもあるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '6650キロ！？日本列島の2倍以上の長さですね！どっちの方向に流れているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ナイル川はめずらしく<strong>南から北に向かって</strong>流れて、<ruby>地中海<rp>(</rp><rt>ちちゅうかい</rt><rp>)</rp></ruby>にそそいでいるんだ。古代エジプト文明もナイル川のおかげで発展したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'アフリカに高い山はあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'あるよ！<strong><span class="keyword">キリマンジャロ</span></strong>はアフリカ大陸の最高峰で、<ruby>標高<rp>(</rp><rt>ひょうこう</rt><rp>)</rp></ruby>約5895メートルもあるんだ。<ruby>赤道<rp>(</rp><rt>せきどう</rt><rp>)</rp></ruby>付近にあるのに山頂には<ruby>氷河<rp>(</rp><rt>ひょうが</rt><rp>)</rp></ruby>があるんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '赤道の近くなのに氷河があるんですか！標高が高いからですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうだね。ただ<ruby>地球温暖化<rp>(</rp><rt>ちきゅうおんだんか</rt><rp>)</rp></ruby>の影響でキリマンジャロの氷河は<ruby>縮小<rp>(</rp><rt>しゅくしょう</rt><rp>)</rp></ruby>が続いていて、将来なくなってしまうかもしれないんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ナイル川</span>：南から北に流れ地中海へ（世界最長級） / <span class="keyword">キリマンジャロ</span>：アフリカ最高峰（約5895m）・赤道付近に氷河',
    },
    {
      type: 'quiz',
      question: 'ナイル川はどの方向に流れている？',
      options: [
        { letter: 'A', text: '北から南', correct: false },
        { letter: 'B', text: '東から西', correct: false },
        { letter: 'C', text: '南から北', correct: true },
        { letter: 'D', text: '西から東', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。ナイル川はめずらしく南から北に向かって流れ、<ruby>地中海<rp>(</rp><rt>ちちゅうかい</rt><rp>)</rp></ruby>にそそいでいます。',
    },

    // ===== サハラ砂漠の北と南の文化 =====
    {
      type: 'date',
      text: 'サハラ砂漠の北と南の文化',
    },
    {
      type: 'narrator',
      text: 'サハラ<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby>を<ruby>境<rp>(</rp><rt>さかい</rt><rp>)</rp></ruby>にして、アフリカの文化は大きく異なります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'サハラ砂漠より<strong>北側</strong>では<strong><span class="keyword">イスラム教</span></strong>が広く<ruby>信仰<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby>されていて、<strong><span class="keyword">アラビア語</span></strong>が使われているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '南側はどうなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '南側は<strong><span class="keyword">キリスト教</span></strong>や<strong><span class="keyword"><ruby>伝統的<rp>(</rp><rt>でんとうてき</rt><rp>)</rp></ruby>な<ruby>宗教<rp>(</rp><rt>しゅうきょう</rt><rp>)</rp></ruby></span></strong>が信仰されているよ。言語も多様で、<ruby>旧宗主国<rp>(</rp><rt>きゅうしゅしゅこく</rt><rp>)</rp></ruby>の英語やフランス語が公用語として使われている国が多いんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なぜ北と南でそんなに文化が違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'サハラ砂漠が巨大な<ruby>障壁<rp>(</rp><rt>しょうへき</rt><rp>)</rp></ruby>になっていたんだ。北側は<ruby>地中海<rp>(</rp><rt>ちちゅうかい</rt><rp>)</rp></ruby>を通じてアラブ世界とつながり、南側はそれぞれの地域で独自の文化が発展したんだよ',
    },
    {
      type: 'summary-point',
      text: 'サハラ砂漠の<span class="keyword">北</span>：イスラム教・アラビア語 / <span class="keyword">南</span>：キリスト教・伝統宗教・旧宗主国の言語（英語・フランス語）',
    },

    // ===== クイズ =====
    {
      type: 'quiz',
      question: 'アフリカ北部に広がる世界最大の砂漠はどれ？',
      options: [
        { letter: 'A', text: 'ゴビ砂漠', correct: false },
        { letter: 'B', text: 'サハラ砂漠', correct: true },
        { letter: 'C', text: 'アタカマ砂漠', correct: false },
        { letter: 'D', text: 'カラハリ砂漠', correct: false },
      ],
      explanation:
        '<strong>正解はB「サハラ<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby>」</strong>です。サハラ砂漠はアフリカ北部に広がる世界最大の砂漠で、面積は約900万平方キロメートルにもなります。',
    },

    // ===== まとめ =====
    {
      type: 'end',
      points: [
        'アフリカの自然：<strong>サハラ<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby></strong>（世界最大）・<strong>サヘル</strong>（半乾燥）・<strong><ruby>熱帯雨林<rp>(</rp><rt>ねったいうりん</rt><rp>)</rp></ruby></strong>・<strong>サバナ</strong>（草原）',
        '歴史：ヨーロッパによる<strong><ruby>奴隷貿易<rp>(</rp><rt>どれいぼうえき</rt><rp>)</rp></ruby></strong>と<strong><ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>支配</strong>',
        '<strong>ナイル川</strong>：南→北に流れ地中海へ / <strong>キリマンジャロ</strong>：アフリカ最高峰',
        'サハラ北：<strong>イスラム教</strong>・<strong>アラビア語</strong> / 南：<strong>キリスト教</strong>・<strong>伝統宗教</strong>・旧宗主国の言語',
      ],
    },
  ],
};

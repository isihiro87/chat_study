import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const africaChat: HistoryChat = {
  id: 'geo1-africa',
  icon: '🦁',
  title: 'アフリカ州',
  subtitle: '〜中1地理〜 自然・歴史・産業・社会変化',
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
      type: 'summary-point',
      text: 'アフリカの自然：<span class="keyword">サハラ砂漠</span>（世界最大）→ <span class="keyword">サヘル</span>（半乾燥）→ <span class="keyword">サバナ</span>（草原）→ <span class="keyword">熱帯雨林</span>（赤道付近）',
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

    // ===== 産業の課題 =====
    {
      type: 'date',
      text: '産業の課題',
    },
    {
      type: 'narrator',
      text: '<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>時代の影響は、アフリカの<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>にも大きく残っています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'アフリカでは昔から<strong><span class="keyword"><ruby>焼畑農業<rp>(</rp><rt>やきはたのうぎょう</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>遊牧<rp>(</rp><rt>ゆうぼく</rt><rp>)</rp></ruby></span></strong>が行われてきたんだ。自然環境に合わせた<ruby>伝統的<rp>(</rp><rt>でんとうてき</rt><rp>)</rp></ruby>な農業だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '植民地時代に農業はどう変わったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ヨーロッパ人が<strong><span class="keyword">プランテーション</span></strong>（大<ruby>農園<rp>(</rp><rt>のうえん</rt><rp>)</rp></ruby>）を開いて、<strong>カカオ</strong>や<strong>コーヒー</strong>などの<ruby>商品作物<rp>(</rp><rt>しょうひんさくもつ</rt><rp>)</rp></ruby>を大量に栽培させたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'チョコレートの原料のカカオもアフリカで作られているんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そうだよ！世界のカカオの約7割はアフリカで生産されているんだ。でも、こうした特定の<ruby>産物<rp>(</rp><rt>さんぶつ</rt><rp>)</rp></ruby>の<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>に頼る経済を<strong><span class="keyword">モノカルチャー<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby></span></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'モノカルチャー経済の何が問題なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '国際<ruby>価格<rp>(</rp><rt>かかく</rt><rp>)</rp></ruby>が下がると、国の収入が一気に減ってしまうんだ。だから経済が不安定になりやすいんだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'また、アフリカには<strong><span class="keyword">レアメタル</span></strong>（<ruby>希少金属<rp>(</rp><rt>きしょうきんぞく</rt><rp>)</rp></ruby>）も豊富にあるよ。スマートフォンに使われるコバルトやタンタルなどが<ruby>産出<rp>(</rp><rt>さんしゅつ</rt><rp>)</rp></ruby>されているんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">プランテーション</span>でカカオ・コーヒーを栽培 → <span class="keyword">モノカルチャー経済</span>（特定産物に依存）→ 経済が不安定',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">レアメタル</span>（コバルト・タンタルなど）もアフリカの重要な資源',
    },

    // ===== 社会の変化 =====
    {
      type: 'date',
      text: '社会の変化',
    },
    {
      type: 'narrator',
      text: '<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>時代の<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>はアフリカの社会にも深く残っています。<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>後の課題と、それに取り組む動きを見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '植民地時代、ヨーロッパ<ruby>諸国<rp>(</rp><rt>しょこく</rt><rp>)</rp></ruby>は<ruby>民族<rp>(</rp><rt>みんぞく</rt><rp>)</rp></ruby>の分布を無視して<strong><span class="keyword">直線的な<ruby>国境線<rp>(</rp><rt>こっきょうせん</rt><rp>)</rp></ruby></span></strong>を引いたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'それがどんな問題を引き起こしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '独立後、ひとつの国の中に複数の民族が<ruby>混在<rp>(</rp><rt>こんざい</rt><rp>)</rp></ruby>することになって、<strong><span class="keyword"><ruby>民族紛争<rp>(</rp><rt>みんぞくふんそう</rt><rp>)</rp></ruby></span></strong>が起きやすくなったんだ。アフリカの地図を見ると、国境が直線になっている部分が多いのがわかるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '本当だ！自然の地形じゃなくて定規で引いたような国境線がたくさんありますね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もうひとつ大きな変化は<strong><span class="keyword"><ruby>人口<rp>(</rp><rt>じんこう</rt><rp>)</rp></ruby>の<ruby>急増<rp>(</rp><rt>きゅうぞう</rt><rp>)</rp></ruby></span></strong>だよ。2050年にはアフリカの人口が世界全体の約4分の1を占めると予測されているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '4分の1！？すごい増え方ですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'こうした課題に取り組むために、2002年に<strong><span class="keyword">アフリカ<ruby>連合<rp>(</rp><rt>れんごう</rt><rp>)</rp></ruby>（AU）</span></strong>が設立されたんだ。アフリカの国々が協力して<ruby>平和<rp>(</rp><rt>へいわ</rt><rp>)</rp></ruby>や<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>発展に取り組んでいるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '日本はアフリカとどう関わっているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '日本は<strong><span class="keyword">TICAD</span></strong>（アフリカ<ruby>開発<rp>(</rp><rt>かいはつ</rt><rp>)</rp></ruby>会議）を通じて支援を行っているよ。また<strong><span class="keyword">NGO</span></strong>（<ruby>非政府組織<rp>(</rp><rt>ひせいふそしき</rt><rp>)</rp></ruby>）も<ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>や<ruby>医療<rp>(</rp><rt>いりょう</rt><rp>)</rp></ruby>の分野で活動しているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'アフリカの課題を知って、日本からもいろいろな支援がされているんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">植民地時代の国境線</span> → <span class="keyword">民族紛争</span>の原因のひとつ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">人口急増</span>・<span class="keyword">AU（アフリカ連合）</span>の設立・<span class="keyword">TICAD</span>や<span class="keyword">NGO</span>による支援',
    },

    // ===== クイズ =====
    {
      type: 'quiz',
      question: '特定の農産物や鉱産資源の輸出に頼る経済を何というか？',
      options: [
        { letter: 'A', text: '混合農業', correct: false },
        { letter: 'B', text: 'プランテーション経済', correct: false },
        { letter: 'C', text: 'モノカルチャー経済', correct: true },
        { letter: 'D', text: '自給自足経済', correct: false },
      ],
      explanation:
        '<strong>正解はC「モノカルチャー<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>」</strong>です。カカオやコーヒーなど特定の<ruby>産物<rp>(</rp><rt>さんぶつ</rt><rp>)</rp></ruby>の<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>に頼るため、国際<ruby>価格<rp>(</rp><rt>かかく</rt><rp>)</rp></ruby>の変動で経済が不安定になりやすいのが特徴です。',
    },

    // ===== まとめ =====
    {
      type: 'end',
      points: [
        'アフリカの自然：<strong>サハラ<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby></strong>（世界最大）・<strong>サヘル</strong>（半乾燥）・<strong><ruby>熱帯雨林<rp>(</rp><rt>ねったいうりん</rt><rp>)</rp></ruby></strong>・<strong>サバナ</strong>（草原）',
        '歴史：ヨーロッパによる<strong><ruby>奴隷貿易<rp>(</rp><rt>どれいぼうえき</rt><rp>)</rp></ruby></strong>と<strong><ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>支配</strong>',
        '産業：<strong>プランテーション</strong>（カカオ・コーヒー）・<strong>レアメタル</strong>・<strong>モノカルチャー<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby></strong>の課題',
        '社会：<strong><ruby>国境線<rp>(</rp><rt>こっきょうせん</rt><rp>)</rp></ruby>と<ruby>民族紛争<rp>(</rp><rt>みんぞくふんそう</rt><rp>)</rp></ruby></strong>・<strong>人口急増</strong>・<strong>AU</strong>・<strong>TICAD</strong>・<strong>NGO</strong>による支援',
      ],
    },
  ],
};

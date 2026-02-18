import type { HistoryChat } from '../../../../../../../history-chat/types';

export const japanIndependenceChat: HistoryChat = {
  id: 'japan-independence',
  icon: '🗾',
  title: '日本の独立回復',
  subtitle: '〜戦後〜 占領からの脱却と安保体制',
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
      text: '1951年〜1952年',
    },
    {
      type: 'narrator',
      text: '1951年、<strong><span class="keyword"><ruby>吉田茂<rp>(</rp><rt>よしだしげる</rt><rp>)</rp></ruby></span></strong><ruby>首相<rp>(</rp><rt>しゅしょう</rt><rp>)</rp></ruby>は<strong><span class="keyword"><span data-tooltip="48か国と結んだ講和条約。日本の主権回復と独立を認めた"><ruby>サンフランシスコ<ruby>平和条約<rp>(</rp><rt>へいわじょうやく</rt><rp>)</rp></ruby><rp>(</rp><rt>さんふらんしすこへいわじょうやく</rt><rp>)</rp></ruby></span></span></strong>に<ruby>調印<rp>(</rp><rt>ちょういん</rt><rp>)</rp></ruby>しました。<ruby>翌年<rp>(</rp><rt>よくねん</rt><rp>)</rp></ruby><ruby>条約<rp>(</rp><rt>じょうやく</rt><rp>)</rp></ruby>が<ruby>発効<rp>(</rp><rt>はっこう</rt><rp>)</rp></ruby>し、日本はついに<ruby>主権<rp>(</rp><rt>しゅけん</rt><rp>)</rp></ruby>を<ruby>回復<rp>(</rp><rt>かいふく</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '同時に<strong><span class="keyword"><ruby>日米安全保障条約<rp>(</rp><rt>にちべいあんぜんほしょうじょうやく</rt><rp>)</rp></ruby></span></strong>も結ばれて、アメリカ<ruby>軍<rp>(</rp><rt>ぐん</rt><rp>)</rp></ruby>が日本に<ruby>駐留<rp>(</rp><rt>ちゅうりゅう</rt><rp>)</rp></ruby>を<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>けることになったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>したのにアメリカ軍がいるのはなぜですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'thinking',
      text: '<strong>冷戦</strong>の中で日本を<ruby>守<rp>(</rp><rt>まも</rt><rp>)</rp></ruby>るためだよ。<ruby>朝鮮戦争<rp>(</rp><rt>ちょうせんせんそう</rt><rp>)</rp></ruby>の<strong><span class="keyword"><span data-tooltip="朝鮮戦争でアメリカ軍の物資調達により日本経済が潤ったこと"><ruby>特需景気<rp>(</rp><rt>とくじゅけいき</rt><rp>)</rp></ruby></span></span></strong>で日本<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>は大きく<ruby>復興<rp>(</rp><rt>ふっこう</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '戦争で<ruby>軍需物資<rp>(</rp><rt>ぐんじゅぶっし</rt><rp>)</rp></ruby>の<ruby>注文<rp>(</rp><rt>ちゅうもん</rt><rp>)</rp></ruby>が<ruby>殺到<rp>(</rp><rt>さっとう</rt><rp>)</rp></ruby>して<ruby>景気<rp>(</rp><rt>けいき</rt><rp>)</rp></ruby>がよくなったんですね！',
    },
    {
      type: 'narrator',
      text: '1954年には<strong><span class="keyword"><ruby>自衛隊<rp>(</rp><rt>じえいたい</rt><rp>)</rp></ruby></span></strong>が<ruby>発足<rp>(</rp><rt>ほっそく</rt><rp>)</rp></ruby>しました。しかし同年、<strong><span class="keyword"><ruby>第五福竜丸<rp>(</rp><rt>だいごふくりゅうまる</rt><rp>)</rp></ruby></span></strong>がアメリカの<ruby>水爆実験<rp>(</rp><rt>すいばくじっけん</rt><rp>)</rp></ruby>で<ruby>被<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>ばくする事件が起き、<ruby>反核運動<rp>(</rp><rt>はんかくうんどう</rt><rp>)</rp></ruby>が広がりました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">サンフランシスコ平和条約</span>で主権回復 → <span class="keyword">日米安全保障条約</span>で米軍駐留 → <span class="keyword">特需景気</span>で経済復興 → <span class="keyword">自衛隊</span>発足！',
    },
    {
      type: 'quiz',
      question: '1951年に日本が主権を回復した条約は？',
      options: [
        { letter: 'A', text: 'ポーツマス条約', correct: false },
        { letter: 'B', text: 'サンフランシスコ平和条約', correct: true },
        { letter: 'C', text: '日米安全保障条約', correct: false },
        { letter: 'D', text: '日ソ共同宣言', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>サンフランシスコ平和条約<rp>(</rp><rt>さんふらんしすこへいわじょうやく</rt><rp>)</rp></ruby>」</strong>です。<strong>吉田茂</strong>首相が<ruby>調印<rp>(</rp><rt>ちょういん</rt><rp>)</rp></ruby>し、日本は<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>を回復しました。',
    },
    {
      type: 'date',
      text: '1955年〜1965年',
    },
    {
      type: 'narrator',
      text: '1955年に<strong><span class="keyword"><ruby>自由民主党<rp>(</rp><rt>じゆうみんしゅとう</rt><rp>)</rp></ruby></span></strong>が<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>され、<ruby>社会党<rp>(</rp><rt>しゃかいとう</rt><rp>)</rp></ruby>と対立する<strong><span class="keyword"><span data-tooltip="自由民主党と社会党が与野党として対立した戦後日本の政治体制">55年体制</span></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>55年体制</strong>ってどんな仕組みだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: '<ruby>保守合同<rp>(</rp><rt>ほしゅがっとう</rt><rp>)</rp></ruby>で生まれた<strong>自由民主党</strong>が<ruby>与党<rp>(</rp><rt>よとう</rt><rp>)</rp></ruby>、社会党が<ruby>野党<rp>(</rp><rt>やとう</rt><rp>)</rp></ruby>という<ruby>安定<rp>(</rp><rt>あんてい</rt><rp>)</rp></ruby>した<ruby>政治体制<rp>(</rp><rt>せいじたいせい</rt><rp>)</rp></ruby>のことだよ。長く<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いたんだ',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><ruby>岸信介<rp>(</rp><rt>きしのぶすけ</rt><rp>)</rp></ruby></span></strong>首相が<strong>日米安全保障条約</strong>の<ruby>改定<rp>(</rp><rt>かいてい</rt><rp>)</rp></ruby>を進めると、これに反対する<strong><span class="keyword"><span data-tooltip="1960年に日米安保条約の改定に反対して起きた大規模な国民運動"><ruby>安保闘争<rp>(</rp><rt>あんぽとうそう</rt><rp>)</rp></ruby></span></span></strong>が起こりました。<ruby>国会<rp>(</rp><rt>こっかい</rt><rp>)</rp></ruby><ruby>周辺<rp>(</rp><rt>しゅうへん</rt><rp>)</rp></ruby>には大規模なデモ<ruby>隊<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>が<ruby>押<rp>(</rp><rt>お</rt><rp>)</rp></ruby>し<ruby>寄<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>せました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '戦争に<ruby>巻<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>き<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>まれるのが<ruby>怖<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>くて反対したんですね…',
    },
    {
      type: 'narrator',
      text: '1956年の<strong><span class="keyword"><ruby>日ソ共同宣言<rp>(</rp><rt>にっそきょうどうせんげん</rt><rp>)</rp></ruby></span></strong>でソ連との<ruby>国交<rp>(</rp><rt>こっこう</rt><rp>)</rp></ruby>が<ruby>回復<rp>(</rp><rt>かいふく</rt><rp>)</rp></ruby>し、日本の<strong>国際連合</strong><ruby>加盟<rp>(</rp><rt>かめい</rt><rp>)</rp></ruby>が<ruby>実現<rp>(</rp><rt>じつげん</rt><rp>)</rp></ruby>しました。政府は<strong><span class="keyword"><span data-tooltip="核兵器を「持たず、つくらず、持ちこませず」という日本の基本方針"><ruby>非核三原則<rp>(</rp><rt>ひかくさんげんそく</rt><rp>)</rp></ruby></span></span></strong>を<ruby>掲<rp>(</rp><rt>かか</rt><rp>)</rp></ruby>げ、<strong><ruby>沖縄<rp>(</rp><rt>おきなわ</rt><rp>)</rp></ruby></strong>の<ruby>返還<rp>(</rp><rt>へんかん</rt><rp>)</rp></ruby>を求めました。1965年には<strong><span class="keyword"><ruby>日韓基本条約<rp>(</rp><rt>にっかんきほんじょうやく</rt><rp>)</rp></ruby></span></strong>で<ruby>韓国<rp>(</rp><rt>かんこく</rt><rp>)</rp></ruby>との<ruby>国交<rp>(</rp><rt>こっこう</rt><rp>)</rp></ruby>を<ruby>正常化<rp>(</rp><rt>せいじょうか</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'excited',
      text: 'こうして日本は<ruby>国際社会<rp>(</rp><rt>こくさいしゃかい</rt><rp>)</rp></ruby>に<ruby>復帰<rp>(</rp><rt>ふっき</rt><rp>)</rp></ruby>し、<ruby>近隣諸国<rp>(</rp><rt>きんりんしょこく</rt><rp>)</rp></ruby>との<ruby>関係改善<rp>(</rp><rt>かんけいかいぜん</rt><rp>)</rp></ruby>を進めていったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">55年体制</span>が始まる → <span class="keyword">安保闘争</span>（安保条約改定に反対） → <span class="keyword">日ソ共同宣言</span>で国連加盟 → <span class="keyword">非核三原則</span>・<span class="keyword">日韓基本条約</span>！',
    },
    {
      type: 'quiz',
      question: '日米安保条約の改定に反対する大規模な国民運動は？',
      options: [
        { letter: 'A', text: '自由民権運動', correct: false },
        { letter: 'B', text: '大正デモクラシー', correct: false },
        { letter: 'C', text: '安保闘争', correct: true },
        { letter: 'D', text: '米騒動', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>安保闘争<rp>(</rp><rt>あんぽとうそう</rt><rp>)</rp></ruby>」</strong>です。1960年に<strong>岸信介</strong>首相のもとで<ruby>安保条約<rp>(</rp><rt>あんぽじょうやく</rt><rp>)</rp></ruby><ruby>改定<rp>(</rp><rt>かいてい</rt><rp>)</rp></ruby>に反対する大規模な運動が起こりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>サンフランシスコ平和条約<rp>(</rp><rt>さんふらんしすこへいわじょうやく</rt><rp>)</rp></ruby></strong>（1951年）で日本が<ruby>主権<rp>(</rp><rt>しゅけん</rt><rp>)</rp></ruby>を回復',
        '<strong><ruby>日米安全保障条約<rp>(</rp><rt>にちべいあんぜんほしょうじょうやく</rt><rp>)</rp></ruby></strong>でアメリカ軍が日本に<ruby>駐留<rp>(</rp><rt>ちゅうりゅう</rt><rp>)</rp></ruby>',
        '<strong><ruby>特需景気<rp>(</rp><rt>とくじゅけいき</rt><rp>)</rp></ruby></strong>で<ruby>経済復興<rp>(</rp><rt>けいざいふっこう</rt><rp>)</rp></ruby>、<strong><ruby>自衛隊<rp>(</rp><rt>じえいたい</rt><rp>)</rp></ruby></strong>が<ruby>発足<rp>(</rp><rt>ほっそく</rt><rp>)</rp></ruby>',
        '<strong>55年体制</strong>：<strong><ruby>自由民主党<rp>(</rp><rt>じゆうみんしゅとう</rt><rp>)</rp></ruby></strong>と<ruby>社会党<rp>(</rp><rt>しゃかいとう</rt><rp>)</rp></ruby>の対立構造',
        '<strong><ruby>安保闘争<rp>(</rp><rt>あんぽとうそう</rt><rp>)</rp></ruby></strong>：日米安保条約改定への大規模な反対運動',
        '<strong><ruby>日ソ共同宣言<rp>(</rp><rt>にっそきょうどうせんげん</rt><rp>)</rp></ruby></strong>で<ruby>国連加盟<rp>(</rp><rt>こくれんかめい</rt><rp>)</rp></ruby>、<strong><ruby>非核三原則<rp>(</rp><rt>ひかくさんげんそく</rt><rp>)</rp></ruby></strong>を表明',
      ],
    },
  ],
};

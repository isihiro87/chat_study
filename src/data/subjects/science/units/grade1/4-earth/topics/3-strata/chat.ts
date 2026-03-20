import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const strataChat: HistoryChat = {
  id: 'sci1-strata',
  icon: '🪨',
  title: '地層から読みとる大地の変化',
  subtitle: '〜中1地学〜 地層のなり立ち・堆積岩・化石・大地の変動',
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
      text: '<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>のなり立ち',
    },
    {
      type: 'narrator',
      text: '<ruby>地表<rp>(</rp><rt>ちひょう</rt><rp>)</rp></ruby>の<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>が<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>し、<ruby>流水<rp>(</rp><rt>りゅうすい</rt><rp>)</rp></ruby>のはたらきで<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>ばれて<ruby>積<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>もることで<strong><span class="keyword"><ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby></span></strong>ができます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず、<ruby>地表<rp>(</rp><rt>ちひょう</rt><rp>)</rp></ruby>の<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>は<ruby>気温<rp>(</rp><rt>きおん</rt><rp>)</rp></ruby>の<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>や<ruby>雨風<rp>(</rp><rt>あめかぜ</rt><rp>)</rp></ruby>でもろくなるんだ。これを<strong><span class="keyword"><ruby>風化<rp>(</rp><rt>ふうか</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>風化<rp>(</rp><rt>ふうか</rt><rp>)</rp></ruby>した<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>はどうなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>流水<rp>(</rp><rt>りゅうすい</rt><rp>)</rp></ruby>のはたらきで<strong><span class="keyword"><ruby>侵食<rp>(</rp><rt>しんしょく</rt><rp>)</rp></ruby></span></strong>（<ruby>削<rp>(</rp><rt>けず</rt><rp>)</rp></ruby>られ）→ <strong><span class="keyword"><ruby>運搬<rp>(</rp><rt>うんぱん</rt><rp>)</rp></ruby></span></strong>（<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>ばれ）→ <strong><span class="keyword"><ruby>堆積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby></span></strong>（<ruby>積<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>もる）という<ruby>流<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>れだよ。<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>の大きいもの（<strong>れき</strong>）から<ruby>順<rp>(</rp><rt>じゅん</rt><rp>)</rp></ruby>に<ruby>河口<rp>(</rp><rt>かこう</rt><rp>)</rp></ruby><ruby>近<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>くに<ruby>堆積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>し、<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>の小さい<strong><ruby>泥<rp>(</rp><rt>どろ</rt><rp>)</rp></ruby></strong>は<ruby>沖合<rp>(</rp><rt>おきあい</rt><rp>)</rp></ruby>まで<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>ばれるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade1/earth/strata-formation.svg',
      alt: '地層のでき方',
      caption: '粒の大きさごとに分かれて堆積する',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>の大きさで<ruby>堆積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>する<ruby>場所<rp>(</rp><rt>ばしょ</rt><rp>)</rp></ruby>が<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">風化</span>→<span class="keyword">侵食</span>→<span class="keyword">運搬</span>→<span class="keyword">堆積</span>で地層ができる。粒の大きさ：れき（2mm以上）> 砂 > 泥（0.06mm以下）',
    },
    {
      type: 'quiz',
      question: '河口から最も遠くまで運ばれて堆積するのはどれか。',
      options: [
        { letter: 'A', text: 'れき', correct: false },
        { letter: 'B', text: '砂', correct: false },
        { letter: 'C', text: '泥', correct: true },
        { letter: 'D', text: '火山灰', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>泥<rp>(</rp><rt>どろ</rt><rp>)</rp></ruby>」</strong>です。<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>が小さいほど<ruby>遠<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>くまで<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>ばれるため、<ruby>泥<rp>(</rp><rt>どろ</rt><rp>)</rp></ruby>は<ruby>沖合<rp>(</rp><rt>おきあい</rt><rp>)</rp></ruby>まで<ruby>運搬<rp>(</rp><rt>うんぱん</rt><rp>)</rp></ruby>されて<ruby>堆積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'date',
      text: '<ruby>堆積岩<rp>(</rp><rt>たいせきがん</rt><rp>)</rp></ruby>と<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>堆積物<rp>(</rp><rt>たいせきぶつ</rt><rp>)</rp></ruby>が<ruby>長<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>い<ruby>年月<rp>(</rp><rt>ねんげつ</rt><rp>)</rp></ruby>をかけて<ruby>押<rp>(</rp><rt>お</rt><rp>)</rp></ruby>し<ruby>固<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>められた<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>堆積岩<rp>(</rp><rt>たいせきがん</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>堆積岩<rp>(</rp><rt>たいせきがん</rt><rp>)</rp></ruby>には<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>の大きさで分けるものがあるよ。<br/>・<strong>れき<ruby>岩<rp>(</rp><rt>がん</rt><rp>)</rp></ruby></strong>（れきが<ruby>固<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>まったもの）<br/>・<strong><ruby>砂岩<rp>(</rp><rt>さがん</rt><rp>)</rp></ruby></strong>（<ruby>砂<rp>(</rp><rt>すな</rt><rp>)</rp></ruby>が<ruby>固<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>まったもの）<br/>・<strong><ruby>泥岩<rp>(</rp><rt>でいがん</rt><rp>)</rp></ruby></strong>（<ruby>泥<rp>(</rp><rt>どろ</rt><rp>)</rp></ruby>が<ruby>固<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>まったもの）<br/>それから<ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>の<ruby>遺骸<rp>(</rp><rt>いがい</rt><rp>)</rp></ruby>からできた<strong><span class="keyword"><ruby>石灰岩<rp>(</rp><rt>せっかいがん</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword">チャート</span></strong>、<ruby>火山灰<rp>(</rp><rt>かざんばい</rt><rp>)</rp></ruby>からできた<strong><span class="keyword"><ruby>凝灰岩<rp>(</rp><rt>ぎょうかいがん</rt><rp>)</rp></ruby></span></strong>もあるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>石灰岩<rp>(</rp><rt>せっかいがん</rt><rp>)</rp></ruby>とチャートはどう<ruby>見分<rp>(</rp><rt>みわ</rt><rp>)</rp></ruby>けるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>石灰岩<rp>(</rp><rt>せっかいがん</rt><rp>)</rp></ruby>に<strong>うすい<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>をかけると<ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby></strong>するよ！チャートは<ruby>放散虫<rp>(</rp><rt>ほうさんちゅう</rt><rp>)</rp></ruby>の<ruby>遺骸<rp>(</rp><rt>いがい</rt><rp>)</rp></ruby>からできていて、<ruby>非常<rp>(</rp><rt>ひじょう</rt><rp>)</rp></ruby>に<ruby>硬<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>いんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>に<ruby>含<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby>まれる<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>には2<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>の<ruby>役割<rp>(</rp><rt>やくわり</rt><rp>)</rp></ruby>があるよ。<br/>・<strong><span class="keyword"><ruby>示相<rp>(</rp><rt>しそう</rt><rp>)</rp></ruby><ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby></span></strong>：<ruby>当時<rp>(</rp><rt>とうじ</rt><rp>)</rp></ruby>の<strong><ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby></strong>がわかる（サンゴ→<ruby>暖<rp>(</rp><rt>あたた</rt><rp>)</rp></ruby>かく<ruby>浅<rp>(</rp><rt>あさ</rt><rp>)</rp></ruby>い<ruby>海<rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>）<br/>・<strong><span class="keyword"><ruby>示準<rp>(</rp><rt>しじゅん</rt><rp>)</rp></ruby><ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby></span></strong>：<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>の<strong><ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby></strong>がわかる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>示準<rp>(</rp><rt>しじゅん</rt><rp>)</rp></ruby><ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>ではどの<ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>がわかるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>三葉虫<rp>(</rp><rt>さんようちゅう</rt><rp>)</rp></ruby></strong>→<ruby>古生代<rp>(</rp><rt>こせいだい</rt><rp>)</rp></ruby>、<strong>アンモナイト</strong>→<ruby>中生代<rp>(</rp><rt>ちゅうせいだい</rt><rp>)</rp></ruby>、<strong>ビカリア</strong>→<ruby>新生代<rp>(</rp><rt>しんせいだい</rt><rp>)</rp></ruby>だよ。<ruby>示準<rp>(</rp><rt>しじゅん</rt><rp>)</rp></ruby><ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>は<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>い<ruby>範囲<rp>(</rp><rt>はんい</rt><rp>)</rp></ruby>に<ruby>生息<rp>(</rp><rt>せいそく</rt><rp>)</rp></ruby>し、<ruby>短<rp>(</rp><rt>みじか</rt><rp>)</rp></ruby>い<ruby>期間<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>で<ruby>絶滅<rp>(</rp><rt>ぜつめつ</rt><rp>)</rp></ruby>した<ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>が<ruby>適<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>しているんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade1/earth/fossil-examples.png',
      alt: '示準化石と示相化石',
      caption: '上段：示準化石（三葉虫・アンモナイト・ビカリア）、下段：示相化石（サンゴ・シジミ・シダ）',
    },
    {
      type: 'image',
      src: '/images/science/grade1/earth/sedimentary-rocks.png',
      alt: '堆積岩の粒の比較',
      caption: 'れき岩（左）・砂岩（中）・泥岩（右）の粒の大きさの違い',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">堆積岩</span>：れき岩・砂岩・泥岩・石灰岩・チャート・凝灰岩。<span class="keyword">示相化石</span>＝環境、<span class="keyword">示準化石</span>＝時代（三葉虫→古生代、アンモナイト→中生代、ビカリア→新生代）',
    },
    {
      type: 'quiz',
      question: 'アンモナイトの化石が見つかった地層の時代はいつ？',
      options: [
        { letter: 'A', text: '古生代', correct: false },
        { letter: 'B', text: '中生代', correct: true },
        { letter: 'C', text: '新生代', correct: false },
        { letter: 'D', text: '先カンブリア時代', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>中生代<rp>(</rp><rt>ちゅうせいだい</rt><rp>)</rp></ruby>」</strong>です。アンモナイトは<ruby>中生代<rp>(</rp><rt>ちゅうせいだい</rt><rp>)</rp></ruby>の<ruby>示準<rp>(</rp><rt>しじゅん</rt><rp>)</rp></ruby><ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>です。<ruby>古生代<rp>(</rp><rt>こせいだい</rt><rp>)</rp></ruby>は<ruby>三葉虫<rp>(</rp><rt>さんようちゅう</rt><rp>)</rp></ruby>、<ruby>新生代<rp>(</rp><rt>しんせいだい</rt><rp>)</rp></ruby>はビカリアが<ruby>代表的<rp>(</rp><rt>だいひょうてき</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'date',
      text: '<ruby>大地<rp>(</rp><rt>だいち</rt><rp>)</rp></ruby>の<ruby>変動<rp>(</rp><rt>へんどう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>大地<rp>(</rp><rt>だいち</rt><rp>)</rp></ruby>は<ruby>長<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>い<ruby>年月<rp>(</rp><rt>ねんげつ</rt><rp>)</rp></ruby>をかけてさまざまな<ruby>力<rp>(</rp><rt>ちから</rt><rp>)</rp></ruby>を<ruby>受<rp>(</rp><rt>う</rt><rp>)</rp></ruby>けて<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>しています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>山<rp>(</rp><rt>やま</rt><rp>)</rp></ruby>の上で<ruby>貝<rp>(</rp><rt>かい</rt><rp>)</rp></ruby>の<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>が見つかることがあるけど、なぜだと思う？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'もともと<ruby>海<rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>の<ruby>底<rp>(</rp><rt>そこ</rt><rp>)</rp></ruby>だったところが<ruby>持<rp>(</rp><rt>も</rt><rp>)</rp></ruby>ち上がった…とか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り！<ruby>海底<rp>(</rp><rt>かいてい</rt><rp>)</rp></ruby>が<ruby>持<rp>(</rp><rt>も</rt><rp>)</rp></ruby>ち上がることを<strong><span class="keyword"><ruby>隆起<rp>(</rp><rt>りゅうき</rt><rp>)</rp></ruby></span></strong>というよ。他にも…<br/>・<strong><span class="keyword">しゅう<ruby>曲<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby></span></strong>：<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>が<ruby>横<rp>(</rp><rt>よこ</rt><rp>)</rp></ruby>からの<ruby>力<rp>(</rp><rt>ちから</rt><rp>)</rp></ruby>で<ruby>波打<rp>(</rp><rt>なみう</rt><rp>)</rp></ruby>つように<ruby>曲<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>がる<br/>・<strong><span class="keyword"><ruby>断層<rp>(</rp><rt>だんそう</rt><rp>)</rp></ruby></span></strong>：<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>がずれる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>離<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>れた<ruby>場所<rp>(</rp><rt>ばしょ</rt><rp>)</rp></ruby>の<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>がつながっているかどうか<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べる<ruby>方法<rp>(</rp><rt>ほうほう</rt><rp>)</rp></ruby>はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>柱状図<rp>(</rp><rt>ちゅうじょうず</rt><rp>)</rp></ruby></span></strong>（ボーリング<ruby>試料<rp>(</rp><rt>しりょう</rt><rp>)</rp></ruby>をもとにした<ruby>断面図<rp>(</rp><rt>だんめんず</rt><rp>)</rp></ruby>）を<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べるんだ。<strong><ruby>凝灰岩<rp>(</rp><rt>ぎょうかいがん</rt><rp>)</rp></ruby>の<ruby>層<rp>(</rp><rt>そう</rt><rp>)</rp></ruby></strong>は<ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby>で<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>い<ruby>範囲<rp>(</rp><rt>はんい</rt><rp>)</rp></ruby>に<ruby>同時<rp>(</rp><rt>どうじ</rt><rp>)</rp></ruby>に<ruby>積<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>もるから、<ruby>離<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>れた<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>を<ruby>対比<rp>(</rp><rt>たいひ</rt><rp>)</rp></ruby>する<ruby>目印<rp>(</rp><rt>めじるし</rt><rp>)</rp></ruby>（<strong><span class="keyword"><ruby>鍵層<rp>(</rp><rt>かぎそう</rt><rp>)</rp></ruby></span></strong>）になるんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>凝灰岩<rp>(</rp><rt>ぎょうかいがん</rt><rp>)</rp></ruby>が<ruby>目印<rp>(</rp><rt>めじるし</rt><rp>)</rp></ruby>になるんですね！<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>って<ruby>大地<rp>(</rp><rt>だいち</rt><rp>)</rp></ruby>の<ruby>歴史<rp>(</rp><rt>れきし</rt><rp>)</rp></ruby>の<ruby>記録<rp>(</rp><rt>きろく</rt><rp>)</rp></ruby>みたいですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">隆起</span>＝海底が持ち上がる。<span class="keyword">しゅう曲</span>＝地層が波打つ。<span class="keyword">断層</span>＝地層がずれる。<span class="keyword">柱状図</span>で地層を対比、<span class="keyword">凝灰岩</span>の層が鍵層',
    },
    {
      type: 'quiz',
      question: '地層が横からの力を受けて波打つように曲がることを何という？',
      options: [
        { letter: 'A', text: '断層', correct: false },
        { letter: 'B', text: '隆起', correct: false },
        { letter: 'C', text: 'しゅう曲', correct: true },
        { letter: 'D', text: '風化', correct: false },
      ],
      explanation:
        '<strong>正解はC「しゅう<ruby>曲<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>」</strong>です。<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>が<ruby>横<rp>(</rp><rt>よこ</rt><rp>)</rp></ruby>からの大きな<ruby>力<rp>(</rp><rt>ちから</rt><rp>)</rp></ruby>を<ruby>受<rp>(</rp><rt>う</rt><rp>)</rp></ruby>けて<ruby>波打<rp>(</rp><rt>なみう</rt><rp>)</rp></ruby>つように<ruby>曲<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>がることをしゅう<ruby>曲<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>といいます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>風化<rp>(</rp><rt>ふうか</rt><rp>)</rp></ruby></strong>→<strong><ruby>侵食<rp>(</rp><rt>しんしょく</rt><rp>)</rp></ruby></strong>→<strong><ruby>運搬<rp>(</rp><rt>うんぱん</rt><rp>)</rp></ruby></strong>→<strong><ruby>堆積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby></strong>で<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>ができる。<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>が大きいほど<ruby>河口<rp>(</rp><rt>かこう</rt><rp>)</rp></ruby><ruby>近<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>くに<ruby>堆積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>',
        '<strong><ruby>堆積岩<rp>(</rp><rt>たいせきがん</rt><rp>)</rp></ruby></strong>：れき<ruby>岩<rp>(</rp><rt>がん</rt><rp>)</rp></ruby>・<ruby>砂岩<rp>(</rp><rt>さがん</rt><rp>)</rp></ruby>・<ruby>泥岩<rp>(</rp><rt>でいがん</rt><rp>)</rp></ruby>・<ruby>石灰岩<rp>(</rp><rt>せっかいがん</rt><rp>)</rp></ruby>（<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>でCO<sub>2</sub>）・チャート・<ruby>凝灰岩<rp>(</rp><rt>ぎょうかいがん</rt><rp>)</rp></ruby>',
        '<strong><ruby>示相<rp>(</rp><rt>しそう</rt><rp>)</rp></ruby><ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby></strong>＝<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>（サンゴ→<ruby>暖<rp>(</rp><rt>あたた</rt><rp>)</rp></ruby>かく<ruby>浅<rp>(</rp><rt>あさ</rt><rp>)</rp></ruby>い<ruby>海<rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>）。<strong><ruby>示準<rp>(</rp><rt>しじゅん</rt><rp>)</rp></ruby><ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby></strong>＝<ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>（<ruby>三葉虫<rp>(</rp><rt>さんようちゅう</rt><rp>)</rp></ruby>→<ruby>古生代<rp>(</rp><rt>こせいだい</rt><rp>)</rp></ruby>、アンモナイト→<ruby>中生代<rp>(</rp><rt>ちゅうせいだい</rt><rp>)</rp></ruby>）',
        '<strong><ruby>隆起<rp>(</rp><rt>りゅうき</rt><rp>)</rp></ruby></strong>・<strong>しゅう<ruby>曲<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby></strong>・<strong><ruby>断層<rp>(</rp><rt>だんそう</rt><rp>)</rp></ruby></strong>で<ruby>大地<rp>(</rp><rt>だいち</rt><rp>)</rp></ruby>は<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>する。<strong><ruby>柱状図<rp>(</rp><rt>ちゅうじょうず</rt><rp>)</rp></ruby></strong>で<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>を<ruby>対比<rp>(</rp><rt>たいひ</rt><rp>)</rp></ruby>、<ruby>凝灰岩<rp>(</rp><rt>ぎょうかいがん</rt><rp>)</rp></ruby>が<strong><ruby>鍵層<rp>(</rp><rt>かぎそう</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};

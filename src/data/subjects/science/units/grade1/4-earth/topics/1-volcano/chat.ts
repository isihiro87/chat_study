import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const volcanoChat: HistoryChat = {
  id: 'sci1-volcano',
  icon: '🌋',
  title: '火をふく大地',
  subtitle: '〜中1地学〜 マグマと噴火・火山噴出物・火成岩',
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
      text: '<ruby>マグマ<rp>(</rp><rt>まぐま</rt><rp>)</rp></ruby>と<ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby>の<ruby>形<rp>(</rp><rt>かたち</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>地下<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>にある<ruby>高温<rp>(</rp><rt>こうおん</rt><rp>)</rp></ruby>でどろどろに<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けた<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>を<strong><span class="keyword">マグマ</span></strong>といいます。マグマが<ruby>地表<rp>(</rp><rt>ちひょう</rt><rp>)</rp></ruby>に<ruby>噴<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>き出す<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>が<strong><span class="keyword"><ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby></span></strong>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby>って、山によって<ruby>形<rp>(</rp><rt>かたち</rt><rp>)</rp></ruby>が<ruby>全然<rp>(</rp><rt>ぜんぜん</rt><rp>)</rp></ruby><ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うよね。富士山は<ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>すい<ruby>型<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>だし、マウナロアは平たいし。この<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いは何が<ruby>原因<rp>(</rp><rt>げんいん</rt><rp>)</rp></ruby>だと思う？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>溶岩<rp>(</rp><rt>ようがん</rt><rp>)</rp></ruby>の<ruby>流<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>れやすさとか…？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いいセンス！<strong>マグマの<span class="keyword">ねばりけ</span></strong>で決まるんだ！<br/>・ねばりけ<strong>強い</strong> → <strong><span class="keyword"><ruby>溶岩<rp>(</rp><rt>ようがん</rt><rp>)</rp></ruby>ドーム</span></strong>（おわん<ruby>型<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>）・<ruby>爆発的<rp>(</rp><rt>ばくはつてき</rt><rp>)</rp></ruby><ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby>・<ruby>溶岩<rp>(</rp><rt>ようがん</rt><rp>)</rp></ruby>は白っぽい<br/>・ねばりけ<strong>中<ruby>程度<rp>(</rp><rt>ていど</rt><rp>)</rp></ruby></strong> → <strong><ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>すい<ruby>型<rp>(</rp><rt>がた</rt><rp>)</rp></ruby></strong>（<ruby>成層<rp>(</rp><rt>せいそう</rt><rp>)</rp></ruby><ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby>）<br/>・ねばりけ<strong>弱い</strong> → <strong><span class="keyword"><ruby>楯状<rp>(</rp><rt>たてじょう</rt><rp>)</rp></ruby><ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby></span></strong>・おだやかな<ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby>・<ruby>溶岩<rp>(</rp><rt>ようがん</rt><rp>)</rp></ruby>は黒っぽい',
    },
    {
      type: 'image',
      src: '/images/science/volcano-shapes.svg',
      alt: '火山の形の違い',
      caption: 'マグマのねばりけが強い→溶岩ドーム、弱い→楯状火山',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'ねばりけが強いほど<ruby>爆発的<rp>(</rp><rt>ばくはつてき</rt><rp>)</rp></ruby>なんですね！<ruby>色<rp>(</rp><rt>いろ</rt><rp>)</rp></ruby>も<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うんだ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">マグマのねばりけ</span>で火山の形・噴火のようす・溶岩の色が決まる。強い→溶岩ドーム（白）、弱い→楯状火山（黒）',
    },
    {
      type: 'date',
      text: '<ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby><ruby>噴出物<rp>(</rp><rt>ふんしゅつぶつ</rt><rp>)</rp></ruby>と<ruby>鉱物<rp>(</rp><rt>こうぶつ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby>によって<ruby>噴<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>き出されるものを<strong><span class="keyword"><ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby><ruby>噴出物<rp>(</rp><rt>ふんしゅつぶつ</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby>で出てくるものはいろいろあるよ。<strong><ruby>溶岩<rp>(</rp><rt>ようがん</rt><rp>)</rp></ruby></strong>（マグマが<ruby>地表<rp>(</rp><rt>ちひょう</rt><rp>)</rp></ruby>に<ruby>流<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>れ出たもの）、<strong><ruby>火山灰<rp>(</rp><rt>かざんばい</rt><rp>)</rp></ruby></strong>（<ruby>細<rp>(</rp><rt>こま</rt><rp>)</rp></ruby>かい<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>）、<strong><ruby>火山弾<rp>(</rp><rt>かざんだん</rt><rp>)</rp></ruby></strong>（大きなかたまり）、<strong><ruby>軽石<rp>(</rp><rt>かるいし</rt><rp>)</rp></ruby></strong>（白っぽく<ruby>穴<rp>(</rp><rt>あな</rt><rp>)</rp></ruby>が多い）、<strong><ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby>ガス</strong>（<ruby>水蒸気<rp>(</rp><rt>すいじょうき</rt><rp>)</rp></ruby>が<ruby>主成分<rp>(</rp><rt>しゅせいぶん</rt><rp>)</rp></ruby>）だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>火山灰<rp>(</rp><rt>かざんばい</rt><rp>)</rp></ruby>を<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べると何がわかるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>火山灰<rp>(</rp><rt>かざんばい</rt><rp>)</rp></ruby>を水で洗うと<strong><span class="keyword"><ruby>鉱物<rp>(</rp><rt>こうぶつ</rt><rp>)</rp></ruby></span></strong>の<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>が見えるよ。<ruby>鉱物<rp>(</rp><rt>こうぶつ</rt><rp>)</rp></ruby>は2つに分類できるんだ。<br/>・<strong><span class="keyword"><ruby>無色<rp>(</rp><rt>むしょく</rt><rp>)</rp></ruby><ruby>鉱物<rp>(</rp><rt>こうぶつ</rt><rp>)</rp></ruby></span></strong>：<ruby>石英<rp>(</rp><rt>せきえい</rt><rp>)</rp></ruby>（<ruby>透明<rp>(</rp><rt>とうめい</rt><rp>)</rp></ruby>）、<ruby>長石<rp>(</rp><rt>ちょうせき</rt><rp>)</rp></ruby>（白色）<br/>・<strong><span class="keyword"><ruby>有色<rp>(</rp><rt>ゆうしょく</rt><rp>)</rp></ruby><ruby>鉱物<rp>(</rp><rt>こうぶつ</rt><rp>)</rp></ruby></span></strong>：<ruby>黒雲母<rp>(</rp><rt>くろうんも</rt><rp>)</rp></ruby>、<ruby>角閃石<rp>(</rp><rt>かくせんせき</rt><rp>)</rp></ruby>、<ruby>輝石<rp>(</rp><rt>きせき</rt><rp>)</rp></ruby>、カンラン<ruby>石<rp>(</rp><rt>せき</rt><rp>)</rp></ruby>',
    },
    {
      type: 'quiz',
      question: '次のうち、無色鉱物はどれ？',
      options: [
        { letter: 'A', text: '黒雲母', correct: false },
        { letter: 'B', text: '角閃石', correct: false },
        { letter: 'C', text: '石英', correct: true },
        { letter: 'D', text: 'カンラン石', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>石英<rp>(</rp><rt>せきえい</rt><rp>)</rp></ruby>」</strong>です。<ruby>石英<rp>(</rp><rt>せきえい</rt><rp>)</rp></ruby>は<ruby>無色<rp>(</rp><rt>むしょく</rt><rp>)</rp></ruby><ruby>透明<rp>(</rp><rt>とうめい</rt><rp>)</rp></ruby>でガラスのような<ruby>光沢<rp>(</rp><rt>こうたく</rt><rp>)</rp></ruby>がある<ruby>無色<rp>(</rp><rt>むしょく</rt><rp>)</rp></ruby><ruby>鉱物<rp>(</rp><rt>こうぶつ</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'date',
      text: '<ruby>火成岩<rp>(</rp><rt>かせいがん</rt><rp>)</rp></ruby>のつくりと<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: 'マグマが<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>えて<ruby>固<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>まった<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>火成岩<rp>(</rp><rt>かせいがん</rt><rp>)</rp></ruby></span></strong>といいます。<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>え方の<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いで2つに分かれます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'マグマが<ruby>地表<rp>(</rp><rt>ちひょう</rt><rp>)</rp></ruby>や<ruby>地表<rp>(</rp><rt>ちひょう</rt><rp>)</rp></ruby><ruby>近<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>くで<strong>急に<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>えた</strong>のが<strong><span class="keyword"><ruby>火山岩<rp>(</rp><rt>かざんがん</rt><rp>)</rp></ruby></span></strong>。<ruby>地下<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby><ruby>深<rp>(</rp><rt>ふか</rt><rp>)</rp></ruby>くで<strong>ゆっくり<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>えた</strong>のが<strong><span class="keyword"><ruby>深成岩<rp>(</rp><rt>しんせいがん</rt><rp>)</rp></ruby></span></strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>え方で何が<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>結晶<rp>(</rp><rt>けっしょう</rt><rp>)</rp></ruby>のでき方が<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うんだ！<br/>・<strong><span class="keyword"><ruby>火山岩<rp>(</rp><rt>かざんがん</rt><rp>)</rp></ruby></span></strong> → <strong><span class="keyword"><ruby>斑状<rp>(</rp><rt>はんじょう</rt><rp>)</rp></ruby><ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby></span></strong>（大きな<ruby>斑晶<rp>(</rp><rt>はんしょう</rt><rp>)</rp></ruby>＋<ruby>細<rp>(</rp><rt>こま</rt><rp>)</rp></ruby>かい<ruby>石基<rp>(</rp><rt>せっき</rt><rp>)</rp></ruby>）<br/>・<strong><span class="keyword"><ruby>深成岩<rp>(</rp><rt>しんせいがん</rt><rp>)</rp></ruby></span></strong> → <strong><span class="keyword"><ruby>等粒状<rp>(</rp><rt>とうりゅうじょう</rt><rp>)</rp></ruby><ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby></span></strong>（同じくらいの大きな<ruby>結晶<rp>(</rp><rt>けっしょう</rt><rp>)</rp></ruby>の<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まり）',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>火成岩<rp>(</rp><rt>かせいがん</rt><rp>)</rp></ruby>の<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>も<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えよう！白っぽい<ruby>順<rp>(</rp><rt>じゅん</rt><rp>)</rp></ruby>に…<br/>・<ruby>火山岩<rp>(</rp><rt>かざんがん</rt><rp>)</rp></ruby>：<strong><ruby>流紋岩<rp>(</rp><rt>りゅうもんがん</rt><rp>)</rp></ruby></strong>・<strong><ruby>安山岩<rp>(</rp><rt>あんざんがん</rt><rp>)</rp></ruby></strong>・<strong><ruby>玄武岩<rp>(</rp><rt>げんぶがん</rt><rp>)</rp></ruby></strong><br/>・<ruby>深成岩<rp>(</rp><rt>しんせいがん</rt><rp>)</rp></ruby>：<strong><ruby>花<rp>(</rp><rt>か</rt><rp>)</rp></ruby>こう<ruby>岩<rp>(</rp><rt>がん</rt><rp>)</rp></ruby></strong>・<strong>せん<ruby>緑岩<rp>(</rp><rt>りょくがん</rt><rp>)</rp></ruby></strong>・<strong>はんれい<ruby>岩<rp>(</rp><rt>がん</rt><rp>)</rp></ruby></strong><br/>「<strong>りあげかせは</strong>」で<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えると<ruby>便利<rp>(</rp><rt>べんり</rt><rp>)</rp></ruby>だよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '「りあげかせは」！<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えやすいですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">火山岩</span>（急冷）＝斑状組織（流紋岩・安山岩・玄武岩）。<span class="keyword">深成岩</span>（徐冷）＝等粒状組織（花こう岩・せん緑岩・はんれい岩）',
    },
    {
      type: 'quiz',
      question: '深成岩の組織の特徴はどれ？',
      options: [
        { letter: 'A', text: '斑晶と石基からなる斑状組織', correct: false },
        { letter: 'B', text: '同じくらいの大きさの結晶からなる等粒状組織', correct: true },
        { letter: 'C', text: '非常に細かい粒だけからなる', correct: false },
        { letter: 'D', text: '結晶がまったく見られない', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>等粒状<rp>(</rp><rt>とうりゅうじょう</rt><rp>)</rp></ruby><ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>」</strong>です。<ruby>深成岩<rp>(</rp><rt>しんせいがん</rt><rp>)</rp></ruby>はマグマが<ruby>地下<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby><ruby>深<rp>(</rp><rt>ふか</rt><rp>)</rp></ruby>くでゆっくり<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>えるため、すべての<ruby>結晶<rp>(</rp><rt>けっしょう</rt><rp>)</rp></ruby>が大きく<ruby>成長<rp>(</rp><rt>せいちょう</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'end',
      points: [
        '<strong>マグマ</strong>＝<ruby>地下<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>の<ruby>高温<rp>(</rp><rt>こうおん</rt><rp>)</rp></ruby>で<ruby>溶<rp>(</rp><rt>と</rt><rp>)</rp></ruby>けた<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>。ねばりけが強いほど<ruby>爆発的<rp>(</rp><rt>ばくはつてき</rt><rp>)</rp></ruby><ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby>・<ruby>溶岩<rp>(</rp><rt>ようがん</rt><rp>)</rp></ruby>ドーム・白っぽい<ruby>溶岩<rp>(</rp><rt>ようがん</rt><rp>)</rp></ruby>',
        '<strong><ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby><ruby>噴出物<rp>(</rp><rt>ふんしゅつぶつ</rt><rp>)</rp></ruby></strong>：<ruby>溶岩<rp>(</rp><rt>ようがん</rt><rp>)</rp></ruby>・<ruby>火山灰<rp>(</rp><rt>かざんばい</rt><rp>)</rp></ruby>・<ruby>火山弾<rp>(</rp><rt>かざんだん</rt><rp>)</rp></ruby>・<ruby>軽石<rp>(</rp><rt>かるいし</rt><rp>)</rp></ruby>・<ruby>火山<rp>(</rp><rt>かざん</rt><rp>)</rp></ruby>ガス。<ruby>鉱物<rp>(</rp><rt>こうぶつ</rt><rp>)</rp></ruby>は<ruby>無色<rp>(</rp><rt>むしょく</rt><rp>)</rp></ruby>（<ruby>石英<rp>(</rp><rt>せきえい</rt><rp>)</rp></ruby>・<ruby>長石<rp>(</rp><rt>ちょうせき</rt><rp>)</rp></ruby>）と<ruby>有色<rp>(</rp><rt>ゆうしょく</rt><rp>)</rp></ruby>（<ruby>黒雲母<rp>(</rp><rt>くろうんも</rt><rp>)</rp></ruby>・<ruby>角閃石<rp>(</rp><rt>かくせんせき</rt><rp>)</rp></ruby>など）',
        '<strong><ruby>火山岩<rp>(</rp><rt>かざんがん</rt><rp>)</rp></ruby></strong>（<ruby>急冷<rp>(</rp><rt>きゅうれい</rt><rp>)</rp></ruby>）＝<ruby>斑状<rp>(</rp><rt>はんじょう</rt><rp>)</rp></ruby><ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>（<ruby>流紋岩<rp>(</rp><rt>りゅうもんがん</rt><rp>)</rp></ruby>・<ruby>安山岩<rp>(</rp><rt>あんざんがん</rt><rp>)</rp></ruby>・<ruby>玄武岩<rp>(</rp><rt>げんぶがん</rt><rp>)</rp></ruby>）',
        '<strong><ruby>深成岩<rp>(</rp><rt>しんせいがん</rt><rp>)</rp></ruby></strong>（<ruby>徐冷<rp>(</rp><rt>じょれい</rt><rp>)</rp></ruby>）＝<ruby>等粒状<rp>(</rp><rt>とうりゅうじょう</rt><rp>)</rp></ruby><ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>（<ruby>花<rp>(</rp><rt>か</rt><rp>)</rp></ruby>こう<ruby>岩<rp>(</rp><rt>がん</rt><rp>)</rp></ruby>・せん<ruby>緑岩<rp>(</rp><rt>りょくがん</rt><rp>)</rp></ruby>・はんれい<ruby>岩<rp>(</rp><rt>がん</rt><rp>)</rp></ruby>）',
      ],
    },
  ],
};

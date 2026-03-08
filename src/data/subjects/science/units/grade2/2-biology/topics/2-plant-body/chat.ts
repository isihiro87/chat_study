import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const plantBodyChat: HistoryChat = {
  id: 'sci2-plant-body',
  icon: '🌿',
  title: '植物のからだのつくりとはたらき',
  subtitle: '〜中2生物〜 光合成・気孔・蒸散・維管束',
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
      text: '<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>と<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>が<ruby>自分<rp>(</rp><rt>じぶん</rt><rp>)</rp></ruby>で<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>をつくるしくみ、<strong><span class="keyword"><ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby></span></strong>について学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>は<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>を受けて、<strong><ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby></strong>と<strong>水</strong>を<ruby>材料<rp>(</rp><rt>ざいりょう</rt><rp>)</rp></ruby>に、<strong>デンプン</strong>（<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>）と<strong><ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby></strong>をつくるよ。これが<strong><span class="keyword"><ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby></span></strong>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>はどこで行われるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の中にある<ruby>緑色<rp>(</rp><rt>みどりいろ</rt><rp>)</rp></ruby>の<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>、<strong><span class="keyword"><ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby></span></strong>で行われるよ！デンプンができたかどうかは<strong>ヨウ<ruby>素<rp>(</rp><rt>そ</rt><rp>)</rp></ruby><ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby></strong>で<ruby>確認<rp>(</rp><rt>かくにん</rt><rp>)</rp></ruby>できるんだ。<strong><ruby>青紫色<rp>(</rp><rt>あおむらさきいろ</rt><rp>)</rp></ruby></strong>に変われば、デンプンがある<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/photosynthesis.svg',
      alt: '光合成のしくみ',
      caption: '光＋CO₂＋水 → デンプン＋O₂',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">光合成</span>：光＋CO₂＋水 → デンプン＋O₂。<span class="keyword">葉緑体</span>で行われる。ヨウ素液で青紫色→デンプンあり',
    },
    {
      type: 'quiz',
      question: '光合成が行われる場所はどこ？',
      options: [
        { letter: 'A', text: '細胞壁', correct: false },
        { letter: 'B', text: '液胞', correct: false },
        { letter: 'C', text: '葉緑体', correct: true },
        { letter: 'D', text: '核', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby>」</strong>です。<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>は<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の中にある<ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby>で行われます。',
    },
    {
      type: 'date',
      text: '<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>と<ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>にある小さなすきま<strong><span class="keyword"><ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby></span></strong>と、水が<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>ていく<strong><span class="keyword"><ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby></span></strong>のしくみを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>表皮<rp>(</rp><rt>ひょうひ</rt><rp>)</rp></ruby>には、2つの<strong><ruby>孔辺<rp>(</rp><rt>こうへん</rt><rp>)</rp></ruby><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby></strong>に<ruby>囲<rp>(</rp><rt>かこ</rt><rp>)</rp></ruby>まれた<strong><span class="keyword"><ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby></span></strong>というすきまがあるよ。ここからCO<sub>2</sub>を<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>んで<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>に使うんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>からはCO<sub>2</sub>が入ってくるだけですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>！<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>からは<strong>水<ruby>蒸気<rp>(</rp><rt>じょうき</rt><rp>)</rp></ruby></strong>も出ていくんだ。これを<strong><span class="keyword"><ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>は<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<strong><ruby>裏側<rp>(</rp><rt>うらがわ</rt><rp>)</rp></ruby>に多い</strong>から、<ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby>も<ruby>裏側<rp>(</rp><rt>うらがわ</rt><rp>)</rp></ruby>で<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>んだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby>って何のためにあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby>が<ruby>主<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>な<ruby>原動力<rp>(</rp><rt>げんどうりょく</rt><rp>)</rp></ruby>になって、<ruby>根<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>からの<strong><ruby>吸水<rp>(</rp><rt>きゅうすい</rt><rp>)</rp></ruby></strong>が起こるんだ。<ruby>根<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>の<ruby>表面<rp>(</rp><rt>ひょうめん</rt><rp>)</rp></ruby>にある<strong><span class="keyword"><ruby>根毛<rp>(</rp><rt>こんもう</rt><rp>)</rp></ruby></span></strong>が<ruby>表面積<rp>(</rp><rt>ひょうめんせき</rt><rp>)</rp></ruby>を<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>げて、<ruby>効率<rp>(</rp><rt>こうりつ</rt><rp>)</rp></ruby>よく水を<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>しているよ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/stomata-microscope.png',
      alt: '気孔と孔辺細胞の顕微鏡像',
      caption: '葉の表皮を顕微鏡で観察。三日月形の孔辺細胞が気孔を囲む',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">気孔</span>＝孔辺細胞に囲まれたすきま（葉の裏に多い）。<span class="keyword">蒸散</span>＝気孔から水蒸気が出る→吸水の原動力。<span class="keyword">根毛</span>で効率よく吸水',
    },
    {
      type: 'date',
      text: '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>の<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>の<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>と<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>の<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>を<ruby>整理<rp>(</rp><rt>せいり</rt><rp>)</rp></ruby>しましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>も<ruby>動物<rp>(</rp><rt>どうぶつ</rt><rp>)</rp></ruby>と同じように、<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>を取り入れてCO<sub>2</sub>を<ruby>放出<rp>(</rp><rt>ほうしゅつ</rt><rp>)</rp></ruby>する<strong><ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby></strong>を<strong><ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に</strong>行っているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'でも<ruby>昼<rp>(</rp><rt>ひる</rt><rp>)</rp></ruby>は<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>を出しているように見えますよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そう！<ruby>昼<rp>(</rp><rt>ひる</rt><rp>)</rp></ruby>は<strong><ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>が<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>を上回る</strong>から、<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>かけ上はO<sub>2</sub>だけ出ているように見えるんだ。<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>は<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>が止まるから<strong><ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>のみ</strong>になって、CO<sub>2</sub>を<ruby>放出<rp>(</rp><rt>ほうしゅつ</rt><rp>)</rp></ruby>するよ',
    },
    {
      type: 'summary-point',
      text: '植物は<span class="keyword">常に呼吸</span>する。昼は<span class="keyword">光合成＞呼吸</span>→見かけ上O₂のみ。夜は呼吸のみ→CO₂放出',
    },
    {
      type: 'date',
      text: '<ruby>維管束<rp>(</rp><rt>いかんそく</rt><rp>)</rp></ruby>（水と<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>）',
    },
    {
      type: 'narrator',
      text: '<ruby>根<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>から<ruby>吸<rp>(</rp><rt>す</rt><rp>)</rp></ruby>い上げた水や<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>を<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>ぶ<strong><span class="keyword"><ruby>維管束<rp>(</rp><rt>いかんそく</rt><rp>)</rp></ruby></span></strong>のしくみを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>根<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>から<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>した水や<ruby>肥料分<rp>(</rp><rt>ひりょうぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby></span></strong>、<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>で作られた<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>と<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>はどう<ruby>並<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>んでいるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>と<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>の<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まりを<strong><span class="keyword"><ruby>維管束<rp>(</rp><rt>いかんそく</rt><rp>)</rp></ruby></span></strong>というよ。<strong><ruby>単子葉類<rp>(</rp><rt>たんしようるい</rt><rp>)</rp></ruby></strong>では<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby>に<ruby>散<rp>(</rp><rt>ち</rt><rp>)</rp></ruby>らばり、<strong><ruby>双子葉類<rp>(</rp><rt>そうしようるい</rt><rp>)</rp></ruby></strong>では<ruby>周辺部<rp>(</rp><rt>しゅうへんぶ</rt><rp>)</rp></ruby>に<ruby>輪<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>の形に<ruby>並<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>んでいるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/vascular-bundle.svg',
      alt: '維管束のつくり',
      caption: '道管（水）と師管（養分）の通り道',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>＝水、<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>＝<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>って<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えればいいんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">道管</span>＝水・肥料分の通り道。<span class="keyword">師管</span>＝養分の通り道。2つ合わせて<span class="keyword">維管束</span>。単子葉類＝散らばる、双子葉類＝輪の形',
    },
    {
      type: 'quiz',
      question: '根から吸収された水の通り道は？',
      options: [
        { letter: 'A', text: '師管', correct: false },
        { letter: 'B', text: '気孔', correct: false },
        { letter: 'C', text: '道管', correct: true },
        { letter: 'D', text: '根毛', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>」</strong>です。<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>は<ruby>根<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>から<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>された水や<ruby>肥料分<rp>(</rp><rt>ひりょうぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>です。<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>は<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby></strong>：<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>＋CO<sub>2</sub>＋水 → デンプン＋O<sub>2</sub>（<ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby>で行う）',
        '<strong><ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby></strong>：<ruby>孔辺<rp>(</rp><rt>こうへん</rt><rp>)</rp></ruby><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>に<ruby>囲<rp>(</rp><rt>かこ</rt><rp>)</rp></ruby>まれたすきま。<strong><ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby></strong>＝<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>から水<ruby>蒸気<rp>(</rp><rt>じょうき</rt><rp>)</rp></ruby>が出る（<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>裏<rp>(</rp><rt>うら</rt><rp>)</rp></ruby>で<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>ん）→<ruby>吸水<rp>(</rp><rt>きゅうすい</rt><rp>)</rp></ruby>の<ruby>原動力<rp>(</rp><rt>げんどうりょく</rt><rp>)</rp></ruby>',
        '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>は<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に<strong><ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby></strong>。<ruby>昼<rp>(</rp><rt>ひる</rt><rp>)</rp></ruby>は<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>＞<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>、<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>は<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>のみ',
        '<strong><ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby></strong>＝水の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>、<strong><ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby></strong>＝<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>。合わせて<strong><ruby>維管束<rp>(</rp><rt>いかんそく</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};

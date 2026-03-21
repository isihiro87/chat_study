import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const plantPhotosynthesisChat: HistoryChat = {
  id: 'sci2-plant-photo',
  icon: '☀️',
  title: '光合成と呼吸',
  subtitle: '〜中2生物〜 光合成・気孔・蒸散・植物の呼吸',
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
      question: '光合成でつくられる養分は何？',
      options: [
        { letter: 'A', text: 'ブドウ糖', correct: false },
        { letter: 'B', text: 'タンパク質', correct: false },
        { letter: 'C', text: '脂肪', correct: false },
        { letter: 'D', text: 'デンプン', correct: true },
      ],
      explanation:
        '<strong>正解はD「デンプン」</strong>です。<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>では<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>＋CO₂＋水からデンプンと<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>がつくられます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ヨウ<ruby>素<rp>(</rp><rt>そ</rt><rp>)</rp></ruby><ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>で<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べるとき、<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>が<ruby>緑色<rp>(</rp><rt>みどりいろ</rt><rp>)</rp></ruby>だと<ruby>色<rp>(</rp><rt>いろ</rt><rp>)</rp></ruby>がわかりにくくないですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！だから<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>では、まず<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>をあたためた<strong>エタノール</strong>に入れて<strong><ruby>脱色<rp>(</rp><rt>だっしょく</rt><rp>)</rp></ruby></strong>するんだ。<ruby>葉緑素<rp>(</rp><rt>ようりょくそ</rt><rp>)</rp></ruby>の<ruby>緑色<rp>(</rp><rt>みどりいろ</rt><rp>)</rp></ruby>を<ruby>抜<rp>(</rp><rt>ぬ</rt><rp>)</rp></ruby>くことで、ヨウ<ruby>素<rp>(</rp><rt>そ</rt><rp>)</rp></ruby><ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>の<ruby>青紫色<rp>(</rp><rt>あおむらさきいろ</rt><rp>)</rp></ruby>がはっきり見えるようになるよ',
    },
    {
      type: 'summary-point',
      text: '光合成の実験手順：一晩暗所に置く→光を当てる→<span class="keyword">エタノールで脱色</span>→ヨウ素液で確認（青紫色＝デンプンあり）',
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
      type: 'quiz',
      question: '気孔が多いのは葉のどこ？',
      options: [
        { letter: 'A', text: '葉の表側', correct: false },
        { letter: 'B', text: '葉の裏側', correct: true },
        { letter: 'C', text: '葉の縁', correct: false },
        { letter: 'D', text: '葉脈の上', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>裏側<rp>(</rp><rt>うらがわ</rt><rp>)</rp></ruby>」</strong>です。<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>は<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>裏側<rp>(</rp><rt>うらがわ</rt><rp>)</rp></ruby>に多く、<ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby>も<ruby>裏側<rp>(</rp><rt>うらがわ</rt><rp>)</rp></ruby>で<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>んに行われます。',
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
      type: 'quiz',
      question: '植物が夜に放出する気体は？',
      options: [
        { letter: 'A', text: '二酸化炭素', correct: true },
        { letter: 'B', text: '窒素', correct: false },
        { letter: 'C', text: '水素', correct: false },
        { letter: 'D', text: '酸素', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby>」</strong>です。<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>は<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>が止まり<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>のみになるため、CO₂を<ruby>放出<rp>(</rp><rt>ほうしゅつ</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby></strong>：<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>＋CO<sub>2</sub>＋水 → デンプン＋O<sub>2</sub>（<ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby>で行う）。<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>では<strong>エタノールで<ruby>脱色<rp>(</rp><rt>だっしょく</rt><rp>)</rp></ruby></strong>してからヨウ<ruby>素<rp>(</rp><rt>そ</rt><rp>)</rp></ruby><ruby>液<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>で<ruby>確認<rp>(</rp><rt>かくにん</rt><rp>)</rp></ruby>',
        '<strong><ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby></strong>：<ruby>孔辺<rp>(</rp><rt>こうへん</rt><rp>)</rp></ruby><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>に<ruby>囲<rp>(</rp><rt>かこ</rt><rp>)</rp></ruby>まれたすきま。<strong><ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby></strong>＝<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>から水<ruby>蒸気<rp>(</rp><rt>じょうき</rt><rp>)</rp></ruby>が出る（<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>裏<rp>(</rp><rt>うら</rt><rp>)</rp></ruby>で<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>ん）',
        '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>は<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に<strong><ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby></strong>。<ruby>昼<rp>(</rp><rt>ひる</rt><rp>)</rp></ruby>は<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>＞<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>、<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>は<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>のみ',
      ],
    },
  ],
};

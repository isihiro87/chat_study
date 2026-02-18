import type { HistoryChat } from '../../../../../../../history-chat/types';

export const threeReformsChat: HistoryChat = {
  id: 'three-reforms',
  icon: '📚',
  title: '三大改革',
  subtitle: '〜明治〜 学制・徴兵令・地租改正',
  characters: [
    {
      id: 'teacher',
      name: '改革先生',
      emoji: '🏛️',
      colorFrom: '#1d4ed8',
      colorTo: '#60a5fa',
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
      text: '1872〜1873年',
    },
    {
      type: 'narrator',
      text: '新政府は「<ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>」「<ruby>軍隊<rp>(</rp><rt>ぐんたい</rt><rp>)</rp></ruby>」「<ruby>税金<rp>(</rp><rt>ぜいきん</rt><rp>)</rp></ruby>」の三分野で大きな<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>を行いました。これを<strong><span class="keyword"><ruby>三大改革<rp>(</rp><rt>さんだいかいかく</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>の<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>から見ていこう。1872年に<strong><span class="keyword"><span data-tooltip="全国に小学校をつくり、6歳以上の男女全員に教育を受けさせる制度"><ruby>学制<rp>(</rp><rt>がくせい</rt><rp>)</rp></ruby></span></span></strong>が<ruby>公布<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>されたんだ。6<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>以上の<ruby>男女全員<rp>(</rp><rt>だんじょぜんいん</rt><rp>)</rp></ruby>に<ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>を受けさせることにしたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '男女全員！それまでは<ruby>学問<rp>(</rp><rt>がくもん</rt><rp>)</rp></ruby>は一部の人だけだったんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そうだよ。全国に<ruby>小学校<rp>(</rp><rt>しょうがっこう</rt><rp>)</rp></ruby>が作られて、<ruby>近代的<rp>(</rp><rt>きんだいてき</rt><rp>)</rp></ruby>な<ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>が始まったんだ。次は<ruby>軍隊<rp>(</rp><rt>ぐんたい</rt><rp>)</rp></ruby>の<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1873年、<strong><span class="keyword"><span data-tooltip="満20歳の男子に兵役の義務を課す法律。身分に関わらず国民全員が対象"><ruby>徴兵令<rp>(</rp><rt>ちょうへいれい</rt><rp>)</rp></ruby></span></span></strong>が出されたんだ。<ruby>満<rp>(</rp><rt>まん</rt><rp>)</rp></ruby>20<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>の男子に<ruby>兵役<rp>(</rp><rt>へいえき</rt><rp>)</rp></ruby>の<ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>を<ruby>課<rp>(</rp><rt>か</rt><rp>)</rp></ruby>したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'それまでは<ruby>武士<rp>(</rp><rt>ぶし</rt><rp>)</rp></ruby>だけが<ruby>戦<rp>(</rp><rt>たたか</rt><rp>)</rp></ruby>っていたのに、全員が<ruby>兵役<rp>(</rp><rt>へいえき</rt><rp>)</rp></ruby>を<ruby>負<rp>(</rp><rt>お</rt><rp>)</rp></ruby>うことになったんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その通り！<strong><span class="keyword"><span data-tooltip="身分に関係なく国民全員が兵役を負う原則"><ruby>国民皆兵<rp>(</rp><rt>こくみんかいへい</rt><rp>)</rp></ruby></span></span></strong>の<ruby>原則<rp>(</rp><rt>げんそく</rt><rp>)</rp></ruby>だね。<ruby>身分<rp>(</rp><rt>みぶん</rt><rp>)</rp></ruby>に関わらず<ruby>兵役<rp>(</rp><rt>へいえき</rt><rp>)</rp></ruby>の<ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>を<ruby>課<rp>(</rp><rt>か</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">学制</span>（1872年）で教育改革、<span class="keyword">徴兵令</span>（1873年）で<span class="keyword">国民皆兵</span>！',
    },
    {
      type: 'quiz',
      question: '1873年に出された、満20歳の男子に兵役を課す法律は？',
      options: [
        { letter: 'A', text: '学制', correct: false },
        { letter: 'B', text: '地租改正', correct: false },
        { letter: 'C', text: '廃藩置県', correct: false },
        { letter: 'D', text: '徴兵令', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>徴兵令<rp>(</rp><rt>ちょうへいれい</rt><rp>)</rp></ruby>」</strong>です。<ruby>国民皆兵<rp>(</rp><rt>こくみんかいへい</rt><rp>)</rp></ruby>の<ruby>原則<rp>(</rp><rt>げんそく</rt><rp>)</rp></ruby>で、<ruby>武士<rp>(</rp><rt>ぶし</rt><rp>)</rp></ruby>だけでなく<ruby>国民全員<rp>(</rp><rt>こくみんぜんいん</rt><rp>)</rp></ruby>が<ruby>兵役<rp>(</rp><rt>へいえき</rt><rp>)</rp></ruby>を<ruby>負<rp>(</rp><rt>お</rt><rp>)</rp></ruby>うようになりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '最後は<ruby>税金<rp>(</rp><rt>ぜいきん</rt><rp>)</rp></ruby>の<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>だよ。1873年、<strong><span class="keyword"><span data-tooltip="土地の所有者に地券を発行し、地価の3%を現金で納めさせる税制改革"><ruby>地租改正<rp>(</rp><rt>ちそかいせい</rt><rp>)</rp></ruby></span></span></strong>が行われたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>地租改正<rp>(</rp><rt>ちそかいせい</rt><rp>)</rp></ruby>って具体的にはどんな仕組みですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="土地の所有者であることを証明する証書"><ruby>地券<rp>(</rp><rt>ちけん</rt><rp>)</rp></ruby></span></span></strong>を<ruby>発行<rp>(</rp><rt>はっこう</rt><rp>)</rp></ruby>して、<strong><span class="keyword"><ruby>地価<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby></span></strong>の<strong>3%</strong>を<ruby>現金<rp>(</rp><rt>げんきん</rt><rp>)</rp></ruby>で<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>めさせたんだ。これで政府は安定した<ruby>税収<rp>(</rp><rt>ぜいしゅう</rt><rp>)</rp></ruby>を得られるようになったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>農民<rp>(</rp><rt>のうみん</rt><rp>)</rp></ruby>にとっては<ruby>現金<rp>(</rp><rt>げんきん</rt><rp>)</rp></ruby>で<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>めるのは大変だったんじゃないですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'その通り。<ruby>反対一揆<rp>(</rp><rt>はんたいいっき</rt><rp>)</rp></ruby>が起きて、1877年に<ruby>地租<rp>(</rp><rt>ちそ</rt><rp>)</rp></ruby>は<strong>2.5%</strong>に引き下げられたんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">地租改正</span>：<span class="keyword">地券</span>を発行し、<span class="keyword">地価</span>の3%を現金で納税（後に2.5%に引き下げ）',
    },
    {
      type: 'quiz',
      question: '地租改正で、税額の基準とされた土地の価格を何という？',
      options: [
        { letter: 'A', text: '地券', correct: false },
        { letter: 'B', text: '地価', correct: true },
        { letter: 'C', text: '年貢', correct: false },
        { letter: 'D', text: '地租', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>地価<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>」</strong>です。<ruby>地価<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>の3%（後に2.5%）を<ruby>現金<rp>(</rp><rt>げんきん</rt><rp>)</rp></ruby>で<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>める<ruby>制度<rp>(</rp><rt>せいど</rt><rp>)</rp></ruby>でした。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>学制<rp>(</rp><rt>がくせい</rt><rp>)</rp></ruby></strong>（1872年）：6<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>以上の男女に<ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>',
        '<strong><ruby>徴兵令<rp>(</rp><rt>ちょうへいれい</rt><rp>)</rp></ruby></strong>（1873年）：<ruby>満<rp>(</rp><rt>まん</rt><rp>)</rp></ruby>20<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>の男子に<ruby>兵役<rp>(</rp><rt>へいえき</rt><rp>)</rp></ruby><ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>',
        '<strong><ruby>地租改正<rp>(</rp><rt>ちそかいせい</rt><rp>)</rp></ruby></strong>（1873年）：<ruby>地価<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>の3%を<ruby>現金<rp>(</rp><rt>げんきん</rt><rp>)</rp></ruby>で<ruby>納税<rp>(</rp><rt>のうぜい</rt><rp>)</rp></ruby>',
        '<ruby>反対一揆<rp>(</rp><rt>はんたいいっき</rt><rp>)</rp></ruby>により<ruby>地租<rp>(</rp><rt>ちそ</rt><rp>)</rp></ruby>は2.5%に引き下げ',
      ],
    },
  ],
};

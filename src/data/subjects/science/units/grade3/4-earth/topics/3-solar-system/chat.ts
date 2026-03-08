import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const solarSystemUniverseChat: HistoryChat = {
  id: 'sci3-solar-system',
  icon: '🪐',
  title: '太陽系と宇宙の広がり',
  subtitle: '地球型惑星・木星型惑星・銀河',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
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
      text: '太陽系の惑星',
    },
    {
      type: 'narrator',
      text: '<strong><ruby>太陽系<rp>(</rp><rt>たいようけい</rt><rp>)</rp></ruby></strong>には8つの<ruby>惑星<rp>(</rp><rt>わくせい</rt><rp>)</rp></ruby>があり、大きく<strong><span class="keyword"><span data-tooltip="水星・金星・地球・火星の4惑星。岩石でできた小型で密度が高い惑星"><ruby>地球型惑星<rp>(</rp><rt>ちきゅうがたわくせい</rt><rp>)</rp></ruby></span></span></strong>と<strong><span class="keyword"><span data-tooltip="木星・土星・天王星・海王星の4惑星。気体でできた大型で密度が低い惑星"><ruby>木星型惑星<rp>(</rp><rt>もくせいがたわくせい</rt><rp>)</rp></ruby></span></span></strong>に分けられます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '太陽に近い順に<ruby>水星<rp>(</rp><rt>すいせい</rt><rp>)</rp></ruby>・<ruby>金星<rp>(</rp><rt>きんせい</rt><rp>)</rp></ruby>・地球・<ruby>火星<rp>(</rp><rt>かせい</rt><rp>)</rp></ruby>が<strong>地球型惑星</strong>だよ。<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>でできていて、小型で<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>が高いのが特徴だね',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/terrestrial-planets.svg',
      alt: '地球型惑星',
      caption: '水星・金星・地球・火星（小さく、密度が大きい）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「<ruby>水金地火<rp>(</rp><rt>すいきんちか</rt><rp>)</rp></ruby>」ですね！ じゃあ残りの4つは？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>木星<rp>(</rp><rt>もくせい</rt><rp>)</rp></ruby>・<ruby>土星<rp>(</rp><rt>どせい</rt><rp>)</rp></ruby>・<ruby>天王星<rp>(</rp><rt>てんのうせい</rt><rp>)</rp></ruby>・<ruby>海王星<rp>(</rp><rt>かいおうせい</rt><rp>)</rp></ruby>が<strong>木星型惑星</strong>だよ。こっちは<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>でできていて、大型で密度が低いんだ。地球型とは正反対の特徴だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '気体でできてるって、地面がないんですか！？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！ 木星や土星には<ruby>固<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>い地面がないんだ。他にも<ruby>火星<rp>(</rp><rt>かせい</rt><rp>)</rp></ruby>と木星の間には<strong><ruby>小惑星<rp>(</rp><rt>しょうわくせい</rt><rp>)</rp></ruby></strong>がたくさんあって、<ruby>氷<rp>(</rp><rt>こおり</rt><rp>)</rp></ruby>や<ruby>塵<rp>(</rp><rt>ちり</rt><rp>)</rp></ruby>でできた<strong>すい星</strong>も太陽系の仲間だよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/gas-giant-planets.svg',
      alt: '木星型惑星',
      caption: '木星・土星・天王星・海王星（大きく、密度が小さい）',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">地球型惑星</span>（水金地火）＝岩石・小型・高密度 ↔ <span class="keyword">木星型惑星</span>（木土天海）＝気体・大型・低密度',
    },
    {
      type: 'quiz',
      question: '木星型惑星に含まれないものはどれか。',
      options: [
        { letter: 'A', text: '木星', correct: false },
        { letter: 'B', text: '土星', correct: false },
        { letter: 'C', text: '火星', correct: true },
        { letter: 'D', text: '海王星', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>火星<rp>(</rp><rt>かせい</rt><rp>)</rp></ruby>」</strong>です。火星は<ruby>地球型惑星<rp>(</rp><rt>ちきゅうがたわくせい</rt><rp>)</rp></ruby>です。<ruby>木星型惑星<rp>(</rp><rt>もくせいがたわくせい</rt><rp>)</rp></ruby>は<ruby>木星<rp>(</rp><rt>もくせい</rt><rp>)</rp></ruby>・<ruby>土星<rp>(</rp><rt>どせい</rt><rp>)</rp></ruby>・<ruby>天王星<rp>(</rp><rt>てんのうせい</rt><rp>)</rp></ruby>・<ruby>海王星<rp>(</rp><rt>かいおうせい</rt><rp>)</rp></ruby>の4つです。',
    },
    {
      type: 'date',
      text: '宇宙の広がり',
    },
    {
      type: 'narrator',
      text: '<ruby>恒星<rp>(</rp><rt>こうせい</rt><rp>)</rp></ruby>が数千億個集まった大集団を<strong><span class="keyword"><span data-tooltip="恒星が数千億個集まった大集団。太陽系は銀河系（天の川銀河）に属する"><ruby>銀河<rp>(</rp><rt>ぎんが</rt><rp>)</rp></ruby></span></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '太陽系の外にはいったい何があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '太陽系は<strong><ruby>銀河系<rp>(</rp><rt>ぎんがけい</rt><rp>)</rp></ruby></strong>（<strong>天の川銀河</strong>）という巨大な星の集団に属しているんだ。<ruby>渦巻<rp>(</rp><rt>うずま</rt><rp>)</rp></ruby>き<ruby>円盤<rp>(</rp><rt>えんばん</rt><rp>)</rp></ruby>状の形をしていて、恒星が数千億個も集まっているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '数千億個！？ 宇宙ってすごいスケールですね...',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/galaxy-structure.png',
      alt: '銀河系の構造',
      caption: '上：真上から見た渦巻き構造、下：横から見た円盤状の形',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/planets-comparison.png',
      alt: '太陽系の惑星',
      caption: '上段：地球型惑星（水金地火）、下段：木星型惑星（木土天海）',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'しかも宇宙にはこのような銀河が<strong>無数</strong>にあるんだ。距離も<ruby>途方<rp>(</rp><rt>とほう</rt><rp>)</rp></ruby>もなく大きいから、特別な単位を使うよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな単位ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '光が1年間に進む距離を<strong>1<ruby>光年<rp>(</rp><rt>こうねん</rt><rp>)</rp></ruby></strong>、太陽と地球の平均距離を<strong>1<ruby>天文単位<rp>(</rp><rt>てんもんたんい</rt><rp>)</rp></ruby></strong>というよ。光の速さでも何年もかかる距離って、想像を<ruby>超<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>えるよね！',
    },
    {
      type: 'summary-point',
      text: '太陽系 ⊂ <span class="keyword">銀河系</span>（天の川銀河）⊂ 宇宙。距離の単位は<span class="keyword">光年</span>・<span class="keyword">天文単位</span>！',
    },
    {
      type: 'quiz',
      question: '太陽系が属する銀河を何というか。',
      options: [
        { letter: 'A', text: 'アンドロメダ銀河', correct: false },
        { letter: 'B', text: '銀河系（天の川銀河）', correct: true },
        { letter: 'C', text: 'マゼラン雲', correct: false },
        { letter: 'D', text: '渦巻き銀河', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>銀河系<rp>(</rp><rt>ぎんがけい</rt><rp>)</rp></ruby>（天の川銀河）」</strong>です。太陽系は<ruby>銀河系<rp>(</rp><rt>ぎんがけい</rt><rp>)</rp></ruby>に属しており、<ruby>渦巻<rp>(</rp><rt>うずま</rt><rp>)</rp></ruby>き<ruby>円盤<rp>(</rp><rt>えんばん</rt><rp>)</rp></ruby>状の形をしています。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>地球型惑星<rp>(</rp><rt>ちきゅうがたわくせい</rt><rp>)</rp></ruby></strong>（水金地火）＝<ruby>岩石<rp>(</rp><rt>がんせき</rt><rp>)</rp></ruby>・小型・高<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby> ↔ <strong><ruby>木星型惑星<rp>(</rp><rt>もくせいがたわくせい</rt><rp>)</rp></ruby></strong>（木土天海）＝<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>・大型・低密度',
        '<strong><ruby>銀河<rp>(</rp><rt>ぎんが</rt><rp>)</rp></ruby></strong>＝<ruby>恒星<rp>(</rp><rt>こうせい</rt><rp>)</rp></ruby>が数千億個集まった大集団。太陽系は<strong><ruby>銀河系<rp>(</rp><rt>ぎんがけい</rt><rp>)</rp></ruby></strong>（天の川銀河）に属する',
        '距離の単位：<strong><ruby>光年<rp>(</rp><rt>こうねん</rt><rp>)</rp></ruby></strong>（光が1年で進む距離）・<strong><ruby>天文単位<rp>(</rp><rt>てんもんたんい</rt><rp>)</rp></ruby></strong>（太陽−地球間の距離）',
      ],
    },
  ],
};

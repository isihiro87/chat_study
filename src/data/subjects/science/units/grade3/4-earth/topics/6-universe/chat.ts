import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const universeChat: HistoryChat = {
  id: 'sci3-universe',
  icon: '🌌',
  title: '宇宙の広がり',
  subtitle: '銀河系・光年・天文単位',
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
      src: '/images/science/grade3/earth/milky-way.png',
      alt: '銀河系の想像図',
      caption: '太陽系は銀河系の中心から約3万光年の位置にある',
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
      type: 'date',
      text: '銀河系のスケール',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><span data-tooltip="太陽系が属する銀河。渦巻き円盤状で直径約10万光年"><ruby>銀河系<rp>(</rp><rt>ぎんがけい</rt><rp>)</rp></ruby></span></span></strong>（天の川銀河）の具体的な大きさを数字で見てみましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '銀河系ってどのくらいの大きさなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '銀河系の<ruby>直径<rp>(</rp><rt>ちょっけい</rt><rp>)</rp></ruby>は<strong>約10万<ruby>光年<rp>(</rp><rt>こうねん</rt><rp>)</rp></ruby></strong>、<ruby>厚<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>さは<strong>約1.5万光年</strong>だよ。円盤のような形だから、直径に比べてかなり薄いんだ。恒星の数は<strong>約2000億個</strong>もあるんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '2000億個！ 太陽系はその中のどこにあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '太陽系は銀河系の<strong>中心から約3万光年</strong>の位置にあるんだ。銀河系の<ruby>半径<rp>(</rp><rt>はんけい</rt><rp>)</rp></ruby>が約5万光年だから、ちょうど中心と端の中間あたりだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '光年とか天文単位って、具体的にどれくらいの距離なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong>1<ruby>天文単位<rp>(</rp><rt>てんもんたんい</rt><rp>)</rp></ruby></strong>は太陽と地球の間の平均距離で<strong>約1.5億km</strong>だよ。<strong>1光年</strong>は光が1年で進む距離で<strong>約9.5兆km</strong>。つまり1光年は<strong>約6.3万天文単位</strong>にもなるんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '9.5兆km！ 宇宙のスケールってとんでもないですね...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'たとえば太陽から木星までの距離は5.20天文単位、つまり約7.8億kmだよ。でもこれですら銀河系の大きさと比べたら<ruby>微々<rp>(</rp><rt>びび</rt><rp>)</rp></ruby>たるものなんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">銀河系</span>：直径約<strong>10万光年</strong>、厚さ約<strong>1.5万光年</strong>、恒星<strong>約2000億個</strong>。太陽系は中心から<strong>約3万光年</strong>。1AU≒<strong>1.5億km</strong>、1光年≒<strong>9.5兆km</strong>≒<strong>6.3万AU</strong>',
    },
    {
      type: 'quiz',
      question: '銀河系（天の川銀河）の直径はおよそどれくらいか。',
      options: [
        { letter: 'A', text: '約1万光年', correct: false },
        { letter: 'B', text: '約10万光年', correct: true },
        { letter: 'C', text: '約100万光年', correct: false },
        { letter: 'D', text: '約1000万光年', correct: false },
      ],
      explanation:
        '<strong>正解はB「約10万<ruby>光年<rp>(</rp><rt>こうねん</rt><rp>)</rp></ruby>」</strong>です。<ruby>銀河系<rp>(</rp><rt>ぎんがけい</rt><rp>)</rp></ruby>の直径は約10万光年で、約2000億個の<ruby>恒星<rp>(</rp><rt>こうせい</rt><rp>)</rp></ruby>が集まっています。太陽系は中心から約3万光年の位置にあります。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>銀河<rp>(</rp><rt>ぎんが</rt><rp>)</rp></ruby></strong>＝<ruby>恒星<rp>(</rp><rt>こうせい</rt><rp>)</rp></ruby>が数千億個集まった大集団。太陽系は<strong><ruby>銀河系<rp>(</rp><rt>ぎんがけい</rt><rp>)</rp></ruby></strong>（天の川銀河）に属する',
        '<strong><ruby>銀河系<rp>(</rp><rt>ぎんがけい</rt><rp>)</rp></ruby></strong>：直径約10万<ruby>光年<rp>(</rp><rt>こうねん</rt><rp>)</rp></ruby>、恒星約2000億個。太陽系は中心から約3万光年。1<ruby>天文単位<rp>(</rp><rt>てんもんたんい</rt><rp>)</rp></ruby>≒1.5億km、1光年≒9.5兆km',
      ],
    },
  ],
};

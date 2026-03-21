import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const cloudFormationChat: HistoryChat = {
  id: 'sci2-cloud-formation',
  icon: '☁️',
  title: '雲のでき方',
  subtitle: '〜中2地学〜 雲の発生・水の循環・上昇気流',
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
      text: '雲の発生と水の循環',
    },
    {
      type: 'narrator',
      text: '空が曇ってきたとき、あの雲はどうやってできるのでしょうか？雲の正体は、小さな<strong><span class="keyword"><span data-tooltip="空気中の水蒸気が冷えて変化した、ごく小さな水や氷の粒">水滴や氷の粒</span></span></strong>の集まりです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '雲ができるしくみを順番に説明するよ。まず、<ruby>水蒸気<rp>(</rp><rt>すいじょうき</rt><rp>)</rp></ruby>を含んだ空気が<strong>上昇</strong>すると、上空ほど<ruby>気圧<rp>(</rp><rt>きあつ</rt><rp>)</rp></ruby>が低いから空気が<strong><ruby>膨張<rp>(</rp><rt>ぼうちょう</rt><rp>)</rp></ruby></strong>するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '膨張すると何が起きるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '空気が膨張すると<strong>温度が下がる</strong>んだ。そして温度が<strong><span class="keyword"><span data-tooltip="空気中の水蒸気が水滴に変わり始める温度"><ruby>露点<rp>(</rp><rt>ろてん</rt><rp>)</rp></ruby></span></span></strong>に達すると、水蒸気が水滴や氷の粒に変わる。これが雲の正体だよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！上昇→膨張→温度低下→露点→水滴、という流れなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！そして地球上の水は、太陽エネルギーを<ruby>原動力<rp>(</rp><rt>げんどうりょく</rt><rp>)</rp></ruby>に<ruby>蒸発<rp>(</rp><rt>じょうはつ</rt><rp>)</rp></ruby>と<ruby>降水<rp>(</rp><rt>こうすい</rt><rp>)</rp></ruby>を<ruby>繰<rp>(</rp><rt>く</rt><rp>)</rp></ruby>り返しているんだ。これを<strong><span class="keyword"><span data-tooltip="蒸発→雲→降水→河川→海→蒸発…と水が地球上を循環すること">水の<ruby>循環<rp>(</rp><rt>じゅんかん</rt><rp>)</rp></ruby></span></span></strong>というよ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/weather/cloud-formation-experiment.png',
      alt: '雲のでき方の実験',
      caption: '注射器で気圧を下げると（右）フラスコ内に雲が発生する',
    },
    {
      type: 'summary-point',
      text: '空気が上昇 → <span class="keyword">膨張</span> → 温度低下 → <span class="keyword">露点</span>に達すると水滴・氷の粒 → <span class="keyword">雲</span>ができる！',
    },
    {
      type: 'quiz',
      question: '雲のでき方の実験で、フラスコに線香のけむりを入れる理由は何か。',
      options: [
        { letter: 'A', text: 'フラスコ内の温度を上げるため', correct: false },
        { letter: 'B', text: 'けむりの粒子が水蒸気の凝結の核になるため', correct: true },
        { letter: 'C', text: 'フラスコ内の気圧を下げるため', correct: false },
        { letter: 'D', text: '水蒸気の量を増やすため', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。<ruby>線香<rp>(</rp><rt>せんこう</rt><rp>)</rp></ruby>のけむりの<ruby>微粒子<rp>(</rp><rt>びりゅうし</rt><rp>)</rp></ruby>が<ruby>凝結核<rp>(</rp><rt>ぎょうけつかく</rt><rp>)</rp></ruby>となり、<ruby>水蒸気<rp>(</rp><rt>すいじょうき</rt><rp>)</rp></ruby>が<ruby>凝結<rp>(</rp><rt>ぎょうけつ</rt><rp>)</rp></ruby>しやすくなります。自然界では<ruby>塵<rp>(</rp><rt>ちり</rt><rp>)</rp></ruby>やほこりがこの役割を果たしています。',
    },
    {
      type: 'date',
      text: '雲のでき方の<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '雲が本当に<ruby>膨張<rp>(</rp><rt>ぼうちょう</rt><rp>)</rp></ruby>と温度低下でできるのか、<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>で<ruby>確<rp>(</rp><rt>たし</rt><rp>)</rp></ruby>かめてみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>丸底<rp>(</rp><rt>まるそこ</rt><rp>)</rp></ruby>フラスコに少量の水と<ruby>線香<rp>(</rp><rt>せんこう</rt><rp>)</rp></ruby>のけむりを入れて、<ruby>注射器<rp>(</rp><rt>ちゅうしゃき</rt><rp>)</rp></ruby>のピストンを<ruby>急<rp>(</rp><rt>きゅう</rt><rp>)</rp></ruby>に引くんだ。すると…フラスコの中が<strong>白くくもる</strong>んだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '本当に雲ができるんですか！ どうしてですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'ピストンを引くとフラスコ内の<ruby>気圧<rp>(</rp><rt>きあつ</rt><rp>)</rp></ruby>が下がるよね。すると空気が<strong><ruby>膨張<rp>(</rp><rt>ぼうちょう</rt><rp>)</rp></ruby></strong>して温度が下がる → <ruby>露点<rp>(</rp><rt>ろてん</rt><rp>)</rp></ruby>に達して<ruby>水蒸気<rp>(</rp><rt>すいじょうき</rt><rp>)</rp></ruby>が<ruby>凝結<rp>(</rp><rt>ぎょうけつ</rt><rp>)</rp></ruby> → 白い<ruby>水滴<rp>(</rp><rt>すいてき</rt><rp>)</rp></ruby>が見えるんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '線香のけむりは何のために入れるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'けむりの<ruby>微粒子<rp>(</rp><rt>びりゅうし</rt><rp>)</rp></ruby>が<strong><ruby>凝結核<rp>(</rp><rt>ぎょうけつかく</rt><rp>)</rp></ruby></strong>になるんだ。水蒸気はそのままでは水滴になりにくくて、<ruby>塵<rp>(</rp><rt>ちり</rt><rp>)</rp></ruby>などの小さな粒があるとその表面で<ruby>凝結<rp>(</rp><rt>ぎょうけつ</rt><rp>)</rp></ruby>しやすくなるんだよ。自然界でも空気中の<ruby>塵<rp>(</rp><rt>ちり</rt><rp>)</rp></ruby>やほこりが<ruby>凝結核<rp>(</rp><rt>ぎょうけつかく</rt><rp>)</rp></ruby>の役割をしているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！ ところで、上昇気流はどうやってできるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '上昇気流のでき方は主に3パターンあるよ！<br/>①<strong>地面が暖められて</strong>空気が上昇<br/>②<strong>山の<ruby>斜面<rp>(</rp><rt>しゃめん</rt><rp>)</rp></ruby>に沿って</strong>空気が押し上げられる<br/>③<strong>寒気と暖気がぶつかって</strong>暖気が押し上げられる（前線）',
    },
    {
      type: 'summary-point',
      text: '実験：フラスコ+線香のけむり+ピストン → 気圧低下 → <span class="keyword">膨張</span> → 温度低下 → 白くくもる（雲）。<span class="keyword">凝結核</span>＝けむりの粒子。上昇気流は3パターン！',
    },
    {
      type: 'quiz',
      question: '上昇した空気の温度が下がる理由として正しいものはどれか。',
      options: [
        { letter: 'A', text: '上空ほど気圧が低く、空気が膨張するから', correct: true },
        { letter: 'B', text: '太陽の光が届かなくなるから', correct: false },
        { letter: 'C', text: '上空ほど風が強いから', correct: false },
        { letter: 'D', text: '水蒸気が蒸発して熱を奪うから', correct: false },
      ],
      explanation:
        '<strong>正解はA</strong>です。上空ほど気圧が低いため空気が<ruby>膨張<rp>(</rp><rt>ぼうちょう</rt><rp>)</rp></ruby>し、膨張すると温度が下がります。温度が<ruby>露点<rp>(</rp><rt>ろてん</rt><rp>)</rp></ruby>に達すると水蒸気が水滴になり、雲ができます。',
    },
    {
      type: 'end',
      points: [
        '空気が上昇 → <strong><ruby>膨張<rp>(</rp><rt>ぼうちょう</rt><rp>)</rp></ruby></strong> → 温度低下 → <strong><ruby>露点<rp>(</rp><rt>ろてん</rt><rp>)</rp></ruby></strong>で水滴に → <strong>雲</strong>ができる。太陽エネルギーで<strong>水の<ruby>循環<rp>(</rp><rt>じゅんかん</rt><rp>)</rp></ruby></strong>が起こる',
        '雲のでき方の実験：フラスコ+線香のけむり（<ruby>凝結核<rp>(</rp><rt>ぎょうけつかく</rt><rp>)</rp></ruby>）+ピストンで気圧を下げる → 白い雲ができる',
        '上昇気流のでき方：①地面の加熱 ②山の斜面 ③寒気と暖気の衝突（前線）',
      ],
    },
  ],
};

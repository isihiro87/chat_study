import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const cloudsFrontsChat: HistoryChat = {
  id: 'sci2-clouds-fronts',
  icon: '☁️',
  title: '雲のでき方と前線',
  subtitle: '〜中2地学〜 雲の発生・気団・前線の種類',
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
      type: 'summary-point',
      text: '空気が上昇 → <span class="keyword">膨張</span> → 温度低下 → <span class="keyword">露点</span>に達すると水滴・氷の粒 → <span class="keyword">雲</span>ができる！',
    },
    {
      type: 'quiz',
      question: '上昇した空気の温度が下がる理由として正しいものはどれか。',
      options: [
        { letter: 'A', text: '太陽の光が届かなくなるから', correct: false },
        { letter: 'B', text: '上空ほど気圧が低く、空気が膨張するから', correct: true },
        { letter: 'C', text: '上空ほど風が強いから', correct: false },
        { letter: 'D', text: '水蒸気が蒸発して熱を奪うから', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。上空ほど気圧が低いため空気が<ruby>膨張<rp>(</rp><rt>ぼうちょう</rt><rp>)</rp></ruby>し、膨張すると温度が下がります。温度が<ruby>露点<rp>(</rp><rt>ろてん</rt><rp>)</rp></ruby>に達すると水蒸気が水滴になり、雲ができます。',
    },
    {
      type: 'date',
      text: '気団と前線',
    },
    {
      type: 'narrator',
      text: '天気予報でよく聞く「前線」。これは<ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる性質の空気がぶつかる場所に関係しています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>気温<rp>(</rp><rt>きおん</rt><rp>)</rp></ruby>や<ruby>湿度<rp>(</rp><rt>しつど</rt><rp>)</rp></ruby>がほぼ一様な、大きな空気の<ruby>塊<rp>(</rp><rt>かたまり</rt><rp>)</rp></ruby>を<strong><span class="keyword"><span data-tooltip="気温・湿度がほぼ一様な大きな空気の塊"><ruby>気団<rp>(</rp><rt>きだん</rt><rp>)</rp></ruby></span></span></strong>というんだ。たとえば冷たい空気の気団と暖かい空気の気団があるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '異なる気団がぶつかったらどうなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いい質問！異なる気団の境界面を<strong><span class="keyword"><span data-tooltip="異なる性質の気団の境界面"><ruby>前線面<rp>(</rp><rt>ぜんせんめん</rt><rp>)</rp></ruby></span></span></strong>、その面が地表と交わる線を<strong><span class="keyword"><span data-tooltip="前線面と地表面が交わる線。天気が大きく変わる場所"><ruby>前線<rp>(</rp><rt>ぜんせん</rt><rp>)</rp></ruby></span></span></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '前線のあたりではどうして天気が変わりやすいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<strong><ruby>暖気<rp>(</rp><rt>だんき</rt><rp>)</rp></ruby></strong>（暖かい空気）は<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>が小さいから、<strong><ruby>寒気<rp>(</rp><rt>かんき</rt><rp>)</rp></ruby></strong>（冷たい空気）の上に乗り上げるんだ。暖気が上昇すると雲ができやすい。だから前線付近は天気が<ruby>崩<rp>(</rp><rt>くず</rt><rp>)</rp></ruby>れやすいんだよ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">気団</span>＝気温・湿度が一様な空気の塊。異なる気団の境界 → <span class="keyword">前線面</span>・<span class="keyword">前線</span> → 天気が変わりやすい！',
    },
    {
      type: 'quiz',
      question: '前線面とは何か。正しい説明はどれか。',
      options: [
        { letter: 'A', text: '気圧が同じ地点を結んだ線', correct: false },
        { letter: 'B', text: '異なる気団の境界面', correct: true },
        { letter: 'C', text: '雲ができ始める高さの面', correct: false },
        { letter: 'D', text: '気温が急に変わる地表の線', correct: false },
      ],
      explanation:
        '<strong>正解はB「異なる気団の境界面」</strong>です。<ruby>前線面<rp>(</rp><rt>ぜんせんめん</rt><rp>)</rp></ruby>は異なる性質をもつ<ruby>気団<rp>(</rp><rt>きだん</rt><rp>)</rp></ruby>の境界面で、前線面と地表面が交わる線を<ruby>前線<rp>(</rp><rt>ぜんせん</rt><rp>)</rp></ruby>といいます。',
    },
    {
      type: 'date',
      text: '前線の種類と天気の変化',
    },
    {
      type: 'narrator',
      text: '前線にはいくつかの種類があり、それぞれ天気の変わり方がちがいます。特に<strong><span class="keyword"><ruby>寒冷前線<rp>(</rp><rt>かんれいぜんせん</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>温暖前線<rp>(</rp><rt>おんだんぜんせん</rt><rp>)</rp></ruby></span></strong>を比べてみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<strong>寒冷前線</strong>。寒気が暖気の下に<ruby>潜<rp>(</rp><rt>もぐ</rt><rp>)</rp></ruby>り込み、暖気を強く押し上げるんだ。すると<strong><ruby>積乱雲<rp>(</rp><rt>せきらんうん</rt><rp>)</rp></ruby></strong>が発達して、<strong>短時間に強い雨</strong>が降るよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '寒冷前線が通り過ぎた後はどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '通過後は<strong>北寄りの風</strong>に変わって、<strong>気温が急激に下がる</strong>んだ。ゴロゴロと雷が鳴ったあと急に寒くなった経験はないかな？あれが寒冷前線の通過だよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'あります！ じゃあ温暖前線はどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>温暖前線</strong>は暖気が寒気の上をゆるやかに<ruby>這<rp>(</rp><rt>は</rt><rp>)</rp></ruby>い上がるんだ。<strong><ruby>乱層雲<rp>(</rp><rt>らんそううん</rt><rp>)</rp></ruby></strong>ができて、<strong>広い範囲で弱い雨</strong>が長く続くよ。通過後は<strong>南寄りの風</strong>に変わって<strong>気温が上昇</strong>するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '他にも前線の種類はあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>閉<rp>(</rp><rt>へい</rt><rp>)</rp></ruby>そく前線</strong>や<strong><ruby>停滞前線<rp>(</rp><rt>ていたいぜんせん</rt><rp>)</rp></ruby></strong>もあるよ。そして<strong><span class="keyword"><span data-tooltip="中緯度で発生する低気圧。南東に温暖前線、南西に寒冷前線を伴う"><ruby>温帯低気圧<rp>(</rp><rt>おんたいていきあつ</rt><rp>)</rp></ruby></span></span></strong>は、南東側に温暖前線、南西側に寒冷前線を伴って西から東へ移動するんだ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">寒冷前線</span>→積乱雲・短時間の強い雨・通過後に気温急降下。<span class="keyword">温暖前線</span>→乱層雲・広範囲の弱い雨・通過後に気温上昇！',
    },
    {
      type: 'quiz',
      question: '寒冷前線が通過した後の天気の変化として正しいものはどれか。',
      options: [
        { letter: 'A', text: '南寄りの風に変わり、気温が上昇する', correct: false },
        { letter: 'B', text: '北寄りの風に変わり、気温が急激に低下する', correct: true },
        { letter: 'C', text: '風がやみ、気温は変わらない', correct: false },
        { letter: 'D', text: '東寄りの風に変わり、湿度が上がる', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。<ruby>寒冷前線<rp>(</rp><rt>かんれいぜんせん</rt><rp>)</rp></ruby>の通過後は寒気に<ruby>覆<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>われるため、北寄りの風に変わり気温が急激に低下します。',
    },
    {
      type: 'end',
      points: [
        '空気が上昇 → <strong><ruby>膨張<rp>(</rp><rt>ぼうちょう</rt><rp>)</rp></ruby></strong> → 温度低下 → <strong><ruby>露点<rp>(</rp><rt>ろてん</rt><rp>)</rp></ruby></strong>で水滴に → <strong>雲</strong>ができる。太陽エネルギーで<strong>水の<ruby>循環<rp>(</rp><rt>じゅんかん</rt><rp>)</rp></ruby></strong>が起こる',
        '<strong><ruby>気団<rp>(</rp><rt>きだん</rt><rp>)</rp></ruby></strong>＝気温・湿度が一様な空気の塊。異なる気団の境界 → <strong><ruby>前線面<rp>(</rp><rt>ぜんせんめん</rt><rp>)</rp></ruby></strong>・<strong><ruby>前線<rp>(</rp><rt>ぜんせん</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>寒冷前線<rp>(</rp><rt>かんれいぜんせん</rt><rp>)</rp></ruby></strong>：<ruby>積乱雲<rp>(</rp><rt>せきらんうん</rt><rp>)</rp></ruby> → 短時間の強い雨 → 通過後は北風・気温急降下',
        '<strong><ruby>温暖前線<rp>(</rp><rt>おんだんぜんせん</rt><rp>)</rp></ruby></strong>：<ruby>乱層雲<rp>(</rp><rt>らんそううん</rt><rp>)</rp></ruby> → 広範囲の弱い雨 → 通過後は南風・気温上昇',
        '<strong><ruby>温帯低気圧<rp>(</rp><rt>おんたいていきあつ</rt><rp>)</rp></ruby></strong>：南東に温暖前線・南西に寒冷前線を伴い、西から東へ移動する',
      ],
    },
  ],
};

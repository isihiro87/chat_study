import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const atmosphericCirculationChat: HistoryChat = {
  id: 'sci2-atmospheric-circulation',
  icon: '🌏',
  title: '大気の動き',
  subtitle: '〜中2地学〜 偏西風・季節風・海陸風・気団',
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
      text: '地球規模の大気循環',
    },
    {
      type: 'narrator',
      text: '日本の天気はなぜ<strong>西から東</strong>へ変わるのでしょうか？その<ruby>鍵<rp>(</rp><rt>かぎ</rt><rp>)</rp></ruby>は、地球規模の大気の動きにあります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>赤道<rp>(</rp><rt>せきどう</rt><rp>)</rp></ruby>付近は太陽のエネルギーをたくさん受けるから暖かく、<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>付近は寒い。この<strong>温度差</strong>が地球全体の<strong><span class="keyword"><span data-tooltip="赤道と極の温度差によって生じる地球規模の空気の流れ">大気<ruby>循環<rp>(</rp><rt>じゅんかん</rt><rp>)</rp></ruby></span></span></strong>を生み出しているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '日本のあたりではどんな風が吹いているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '日本がある<ruby>中緯度帯<rp>(</rp><rt>ちゅういどたい</rt><rp>)</rp></ruby>では、<strong><span class="keyword"><span data-tooltip="中緯度帯の上空を西から東に向かって吹く風。天気が西から東へ変わる原因"><ruby>偏西風<rp>(</rp><rt>へんせいふう</rt><rp>)</rp></ruby></span></span></strong>が<strong>西から東</strong>に吹いているんだ。だから低気圧や高気圧が西から東へ運ばれて、天気も西から東へ移り変わるんだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '天気予報で「明日は西から<ruby>崩<rp>(</rp><rt>くず</rt><rp>)</rp></ruby>れる」というのは偏西風のせいだったんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'さらに、大陸と海では温まりやすさが違うよね。大陸は温まりやすく冷めやすい、海は温まりにくく冷めにくい。この違いで季節ごとに風の向きが変わる<strong><span class="keyword"><span data-tooltip="大陸と海洋の温度差によって季節ごとに向きが変わる風"><ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby></span></span></strong>が吹くんだ。同じ原理で昼と夜で風向きが変わる<strong><ruby>海陸風<rp>(</rp><rt>かいりくふう</rt><rp>)</rp></ruby></strong>もあるよ',
    },
    {
      type: 'summary-point',
      text: '赤道と極の温度差 → <span class="keyword">大気循環</span>。中緯度帯では<span class="keyword">偏西風</span>（西→東）→ 天気が西から東へ。<span class="keyword">季節風</span>は大陸と海の温度差で発生！',
    },
    {
      type: 'quiz',
      question: '大陸と海洋で温まりやすく冷めやすいのはどちらか。',
      options: [
        { letter: 'A', text: '海洋', correct: false },
        { letter: 'B', text: 'どちらも同じ', correct: false },
        { letter: 'C', text: '大陸', correct: true },
        { letter: 'D', text: '季節によって変わる', correct: false },
      ],
      explanation:
        '<strong>正解はC「大陸」</strong>です。大陸は温まりやすく冷めやすい性質があり、海洋は温まりにくく冷めにくい性質があります。この違いが<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>や<ruby>海陸風<rp>(</rp><rt>かいりくふう</rt><rp>)</rp></ruby>を生み出します。',
    },
    {
      type: 'date',
      text: '<ruby>海陸風<rp>(</rp><rt>かいりくふう</rt><rp>)</rp></ruby>のしくみ',
    },
    {
      type: 'narrator',
      text: '季節風と同じ原理で、<ruby>昼<rp>(</rp><rt>ひる</rt><rp>)</rp></ruby>と夜でも風の向きが変わります。<ruby>海<rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>と<ruby>陸<rp>(</rp><rt>りく</rt><rp>)</rp></ruby>の温まり方の違いで生じる<strong><span class="keyword"><ruby>海陸風<rp>(</rp><rt>かいりくふう</rt><rp>)</rp></ruby></span></strong>を見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '昼間は太陽で<ruby>陸<rp>(</rp><rt>りく</rt><rp>)</rp></ruby>が温まるよね。陸は海より温まりやすいから、陸上の空気が暖められて<ruby>上昇気流<rp>(</rp><rt>じょうしょうきりゅう</rt><rp>)</rp></ruby>が生じるんだ。すると陸上の気圧が下がって、海から陸へ風が吹く。これが<strong><span class="keyword"><ruby>海風<rp>(</rp><rt>うみかぜ</rt><rp>)</rp></ruby></span></strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '夜はどうなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '夜は<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>だよ。陸は海より冷めやすいから、陸上の気圧が高くなる。すると陸から海へ風が吹く。これが<strong><span class="keyword"><ruby>陸風<rp>(</rp><rt>りくかぜ</rt><rp>)</rp></ruby></span></strong>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '季節風のミニ版みたいですね！ 季節風は季節ごと、海陸風は1日ごとに風の向きが変わるんだ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">海風</span>＝昼、海→陸（陸が温まり気圧低下）。<span class="keyword">陸風</span>＝夜、陸→海（陸が冷えて気圧上昇）。季節風と同じ原理！',
    },
    {
      type: 'quiz',
      question: '昼間に海から陸に向かって吹く風を何というか。',
      options: [
        { letter: 'A', text: '陸風', correct: false },
        { letter: 'B', text: '海風', correct: true },
        { letter: 'C', text: '季節風', correct: false },
        { letter: 'D', text: '偏西風', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>海風<rp>(</rp><rt>うみかぜ</rt><rp>)</rp></ruby>」</strong>です。昼は陸が温まって気圧が低くなり、海から陸へ風が吹きます。夜は逆に<ruby>陸風<rp>(</rp><rt>りくかぜ</rt><rp>)</rp></ruby>が吹きます。',
    },
    {
      type: 'date',
      text: '日本付近の<ruby>気団<rp>(</rp><rt>きだん</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '日本の天気は、周囲の<strong><span class="keyword"><ruby>気団<rp>(</rp><rt>きだん</rt><rp>)</rp></ruby></span></strong>の<ruby>勢力<rp>(</rp><rt>せいりょく</rt><rp>)</rp></ruby>バランスで決まります。それぞれの気団の性質を<ruby>押<rp>(</rp><rt>お</rt><rp>)</rp></ruby>さえましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '日本の天気に<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>する<ruby>主<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>な気団は4つあるよ。冬に<ruby>猛威<rp>(</rp><rt>もうい</rt><rp>)</rp></ruby>をふるう<strong><span class="keyword"><ruby>シベリア気団<rp>(</rp><rt>シベリアきだん</rt><rp>)</rp></ruby></span></strong>は<strong>寒冷・乾燥</strong>が特徴だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '夏はどの気団が強くなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '夏は<strong><span class="keyword"><ruby>小笠原気団<rp>(</rp><rt>おがさわらきだん</rt><rp>)</rp></ruby></span></strong>だよ。太平洋上で発達するから<strong>温暖・<ruby>湿潤<rp>(</rp><rt>しつじゅん</rt><rp>)</rp></ruby></strong>。日本の<ruby>蒸<rp>(</rp><rt>む</rt><rp>)</rp></ruby>し暑い夏の原因だね。そして梅雨の時期に北から<ruby>冷<rp>(</rp><rt>つめ</rt><rp>)</rp></ruby>たく<ruby>湿<rp>(</rp><rt>しめ</rt><rp>)</rp></ruby>った空気を送り込むのが<strong><span class="keyword">オホーツク海気団</span></strong>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'シベリア気団が寒冷乾燥、小笠原気団が温暖湿潤、オホーツク海気団は…？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'オホーツク海気団は<strong>寒冷・湿潤</strong>だよ。海上で発達するから<ruby>湿<rp>(</rp><rt>しめ</rt><rp>)</rp></ruby>っているんだ。この気団と小笠原気団がぶつかって<ruby>梅雨前線<rp>(</rp><rt>ばいうぜんせん</rt><rp>)</rp></ruby>ができるんだよ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">シベリア気団</span>＝寒冷乾燥（冬）。<span class="keyword">小笠原気団</span>＝温暖湿潤（夏）。<span class="keyword">オホーツク海気団</span>＝寒冷湿潤（梅雨）。気団の勢力で天気が決まる！',
    },
    {
      type: 'quiz',
      question: '日本付近の天気が西から東へ移り変わる原因となる風はどれか。',
      options: [
        { letter: 'A', text: '偏西風', correct: true },
        { letter: 'B', text: '貿易風', correct: false },
        { letter: 'C', text: '季節風', correct: false },
        { letter: 'D', text: '海陸風', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>偏西風<rp>(</rp><rt>へんせいふう</rt><rp>)</rp></ruby>」</strong>です。中緯度帯の上空を西から東に吹く偏西風によって、低気圧や高気圧が西から東へ移動するため、天気も西から東へ変わります。',
    },
    {
      type: 'end',
      points: [
        '赤道と極の温度差 → <strong>大気<ruby>循環<rp>(</rp><rt>じゅんかん</rt><rp>)</rp></ruby></strong>。中緯度帯の<strong><ruby>偏西風<rp>(</rp><rt>へんせいふう</rt><rp>)</rp></ruby></strong>（西→東）が天気の移り変わりの原因',
        '<strong><ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby></strong>：大陸と海の温まりやすさの違いで発生。冬は北西、夏は南東。<strong><ruby>海風<rp>(</rp><rt>うみかぜ</rt><rp>)</rp></ruby></strong>（昼・海→陸）と<strong><ruby>陸風<rp>(</rp><rt>りくかぜ</rt><rp>)</rp></ruby></strong>（夜・陸→海）も同じ原理',
        '<strong><ruby>気団<rp>(</rp><rt>きだん</rt><rp>)</rp></ruby></strong>：シベリア（寒冷乾燥）・小笠原（温暖湿潤）・オホーツク海（寒冷湿潤）が日本の天気を左右',
      ],
    },
  ],
};

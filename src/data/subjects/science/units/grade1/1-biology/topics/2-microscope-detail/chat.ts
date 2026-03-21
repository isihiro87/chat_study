import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const microscopeDetailChat: HistoryChat = {
  id: 'sci1-microscope-detail',
  icon: '🔬',
  title: '顕微鏡の詳細',
  subtitle: '〜中1生物〜 プレパラート・倍率計算・顕微鏡の各部分',
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
      text: '<ruby>プレパラート<rp>(</rp><rt>ぷれぱらーと</rt><rp>)</rp></ruby>の作り方',
    },
    {
      type: 'narrator',
      text: '<ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>で<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>するための<ruby>プレパラート<rp>(</rp><rt>ぷれぱらーと</rt><rp>)</rp></ruby>の作り方を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>で<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>するには<strong><span class="keyword">プレパラート</span></strong>を作る必要があるよ。<strong><span class="keyword">スライドガラス</span></strong>の上に<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>するものをのせて、水を1<ruby>滴<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>たらすんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'その上にガラスをかぶせるんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<strong><span class="keyword">カバーガラス</span></strong>をかぶせるんだ。このとき大事なポイントがあるよ。カバーガラスの<ruby>端<rp>(</rp><rt>はし</rt><rp>)</rp></ruby>をスライドガラスにつけて、<strong>ゆっくり<ruby>静<rp>(</rp><rt>しず</rt><rp>)</rp></ruby>かに下ろす</strong>こと！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なぜゆっくり下ろすんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>気泡<rp>(</rp><rt>きほう</rt><rp>)</rp></ruby></span></strong>（<ruby>空気<rp>(</rp><rt>くうき</rt><rp>)</rp></ruby>の<ruby>泡<rp>(</rp><rt>あわ</rt><rp>)</rp></ruby>）が入らないようにするためだよ！<ruby>気泡<rp>(</rp><rt>きほう</rt><rp>)</rp></ruby>が入ると<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>のじゃまになるんだ。<ruby>気泡<rp>(</rp><rt>きほう</rt><rp>)</rp></ruby>のふちが黒く見えて、<ruby>微生物<rp>(</rp><rt>びせいぶつ</rt><rp>)</rp></ruby>と<ruby>間違<rp>(</rp><rt>まちが</rt><rp>)</rp></ruby>えることもあるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">プレパラート</span>＝スライドガラス＋カバーガラス。カバーガラスは端からゆっくり下ろし、<span class="keyword">気泡</span>が入らないようにする',
    },
    {
      type: 'quiz',
      question: 'カバーガラスをゆっくり下ろす理由は？',
      options: [
        { letter: 'A', text: 'スライドガラスが割れないようにするため', correct: false },
        { letter: 'B', text: '水がこぼれないようにするため', correct: false },
        { letter: 'C', text: '観察物が動かないようにするため', correct: false },
        { letter: 'D', text: '気泡が入らないようにするため', correct: true },
      ],
      explanation:
        '<strong>正解はD</strong>です。カバーガラスをゆっくり下ろすのは、<ruby>気泡<rp>(</rp><rt>きほう</rt><rp>)</rp></ruby>（<ruby>空気<rp>(</rp><rt>くうき</rt><rp>)</rp></ruby>の<ruby>泡<rp>(</rp><rt>あわ</rt><rp>)</rp></ruby>）が入って<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>のじゃまにならないようにするためです。',
    },
    {
      type: 'date',
      text: '<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby>の<ruby>計算<rp>(</rp><rt>けいさん</rt><rp>)</rp></ruby>と<ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>の変化',
    },
    {
      type: 'narrator',
      text: '<ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>の<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby>の<ruby>計算<rp>(</rp><rt>けいさん</rt><rp>)</rp></ruby>方法と、<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby>を変えたときの変化を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>の<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>接眼<rp>(</rp><rt>せつがん</rt><rp>)</rp></ruby>レンズの<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby> × <ruby>対物<rp>(</rp><rt>たいぶつ</rt><rp>)</rp></ruby>レンズの<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby></span></strong>で<ruby>計算<rp>(</rp><rt>けいさん</rt><rp>)</rp></ruby>するよ。例えば<ruby>接眼<rp>(</rp><rt>せつがん</rt><rp>)</rp></ruby>レンズ10<ruby>倍<rp>(</rp><rt>ばい</rt><rp>)</rp></ruby>、<ruby>対物<rp>(</rp><rt>たいぶつ</rt><rp>)</rp></ruby>レンズ40<ruby>倍<rp>(</rp><rt>ばい</rt><rp>)</rp></ruby>なら？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '10 × 40 ＝ 400<ruby>倍<rp>(</rp><rt>ばい</rt><rp>)</rp></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '正解！じゃあ<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby>を上げるとどうなるか知ってる？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '大きく見えるようになる…？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そうだね、大きく見えるけど、それだけじゃないんだ。<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby>を上げると<strong><span class="keyword"><ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>が<ruby>狭<rp>(</rp><rt>せま</rt><rp>)</rp></ruby>く</span></strong>なり、<strong><span class="keyword"><ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>が<ruby>暗<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>く</span></strong>なるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '暗くなるんですか！ どうすれば明るくできるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword">しぼり</span></strong>を開いて光の<ruby>量<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>を<ruby>増<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>やしたり、<strong><span class="keyword"><ruby>反射鏡<rp>(</rp><rt>はんしゃきょう</rt><rp>)</rp></ruby></span></strong>を<ruby>凹面鏡<rp>(</rp><rt>おうめんきょう</rt><rp>)</rp></ruby>に変えて光を多く集めたりするんだよ！',
    },
    {
      type: 'quiz',
      question: '接眼レンズ15倍、対物レンズ40倍のときの倍率は？',
      options: [
        { letter: 'A', text: '55倍', correct: false },
        { letter: 'B', text: '400倍', correct: false },
        { letter: 'C', text: '600倍', correct: true },
        { letter: 'D', text: '150倍', correct: false },
      ],
      explanation:
        '<strong>正解はC</strong>です。<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby> ＝ <ruby>接眼<rp>(</rp><rt>せつがん</rt><rp>)</rp></ruby>レンズの<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby> × <ruby>対物<rp>(</rp><rt>たいぶつ</rt><rp>)</rp></ruby>レンズの<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby> ＝ 15 × 40 ＝ 600<ruby>倍<rp>(</rp><rt>ばい</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">倍率</span>＝接眼レンズの倍率×対物レンズの倍率。倍率を上げると<span class="keyword">視野は狭く・暗く</span>なる。しぼりや反射鏡で明るさを調節',
    },
    {
      type: 'quiz',
      question: '顕微鏡の倍率を上げると視野はどうなる？',
      options: [
        { letter: 'A', text: '広く明るくなる', correct: false },
        { letter: 'B', text: '狭く暗くなる', correct: true },
        { letter: 'C', text: '狭く明るくなる', correct: false },
        { letter: 'D', text: '広く暗くなる', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。<ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby>を上げると<ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>は<ruby>狭<rp>(</rp><rt>せま</rt><rp>)</rp></ruby>く、暗くなります。',
    },
    {
      type: 'date',
      text: '<ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>の<ruby>各部分<rp>(</rp><rt>かくぶぶん</rt><rp>)</rp></ruby>と<ruby>双眼実体顕微鏡<rp>(</rp><rt>そうがんじったいけんびきょう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>の<ruby>各部分<rp>(</rp><rt>かくぶぶん</rt><rp>)</rp></ruby>の名前と<ruby>役割<rp>(</rp><rt>やくわり</rt><rp>)</rp></ruby>、<ruby>双眼実体顕微鏡<rp>(</rp><rt>そうがんじったいけんびきょう</rt><rp>)</rp></ruby>の<ruby>詳<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>しい使い方を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>の<ruby>各部分<rp>(</rp><rt>かくぶぶん</rt><rp>)</rp></ruby>の名前を<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えよう。のぞく側が<strong><span class="keyword"><ruby>接眼<rp>(</rp><rt>せつがん</rt><rp>)</rp></ruby>レンズ</span></strong>、<ruby>観察物<rp>(</rp><rt>かんさつぶつ</rt><rp>)</rp></ruby>に近い側が<strong><span class="keyword"><ruby>対物<rp>(</rp><rt>たいぶつ</rt><rp>)</rp></ruby>レンズ</span></strong>。プレパラートをのせる台が<strong><span class="keyword">ステージ</span></strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '光を<ruby>調節<rp>(</rp><rt>ちょうせつ</rt><rp>)</rp></ruby>する<ruby>部分<rp>(</rp><rt>ぶぶん</rt><rp>)</rp></ruby>もありますよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<strong><span class="keyword"><ruby>反射鏡<rp>(</rp><rt>はんしゃきょう</rt><rp>)</rp></ruby></span></strong>で光を集めて、<strong><span class="keyword">しぼり</span></strong>で光の<ruby>量<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>を<ruby>調節<rp>(</rp><rt>ちょうせつ</rt><rp>)</rp></ruby>するんだ。ピントは<strong><span class="keyword"><ruby>調節<rp>(</rp><rt>ちょうせつ</rt><rp>)</rp></ruby>ねじ</span></strong>で合わせるよ。<ruby>対物<rp>(</rp><rt>たいぶつ</rt><rp>)</rp></ruby>レンズを切りかえる<strong><span class="keyword">レボルバー</span></strong>もあるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>双眼実体顕微鏡<rp>(</rp><rt>そうがんじったいけんびきょう</rt><rp>)</rp></ruby>は<ruby>普通<rp>(</rp><rt>ふつう</rt><rp>)</rp></ruby>の<ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>と何がちがうんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>双眼実体顕微鏡<rp>(</rp><rt>そうがんじったいけんびきょう</rt><rp>)</rp></ruby>は<strong>両目</strong>でのぞくから<ruby>立体的<rp>(</rp><rt>りったいてき</rt><rp>)</rp></ruby>に見えるんだ！プレパラートも不要で、<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>するものをそのままステージにのせられるよ。<ruby>眼幅<rp>(</rp><rt>がんぷく</rt><rp>)</rp></ruby>を<ruby>調節<rp>(</rp><rt>ちょうせつ</rt><rp>)</rp></ruby>して自分の目の<ruby>幅<rp>(</rp><rt>はば</rt><rp>)</rp></ruby>に合わせてから<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>するんだ',
    },
    {
      type: 'summary-point',
      text: '顕微鏡の主要部分：<span class="keyword">接眼レンズ</span>・<span class="keyword">対物レンズ</span>・<span class="keyword">ステージ</span>・<span class="keyword">反射鏡</span>・<span class="keyword">しぼり</span>・<span class="keyword">調節ねじ</span>・<span class="keyword">レボルバー</span>。双眼実体顕微鏡は立体的に観察できる',
    },
    {
      type: 'quiz',
      question: '双眼実体顕微鏡の特徴として正しいものはどれ？',
      options: [
        { letter: 'A', text: '立体的に観察できる', correct: true },
        { letter: 'B', text: '片目でのぞく', correct: false },
        { letter: 'C', text: 'プレパラートが必要', correct: false },
        { letter: 'D', text: '倍率が1000倍以上ある', correct: false },
      ],
      explanation:
        '<strong>正解はA</strong>です。<ruby>双眼実体顕微鏡<rp>(</rp><rt>そうがんじったいけんびきょう</rt><rp>)</rp></ruby>は両目でのぞき、<ruby>立体的<rp>(</rp><rt>りったいてき</rt><rp>)</rp></ruby>に<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>でき、プレパラートは不要です。',
    },
    {
      type: 'end',
      points: [
        '<strong>プレパラート</strong>：スライドガラス＋カバーガラス。<ruby>気泡<rp>(</rp><rt>きほう</rt><rp>)</rp></ruby>が入らないようにする',
        '<strong><ruby>倍率<rp>(</rp><rt>ばいりつ</rt><rp>)</rp></ruby></strong>：<ruby>接眼<rp>(</rp><rt>せつがん</rt><rp>)</rp></ruby>レンズ × <ruby>対物<rp>(</rp><rt>たいぶつ</rt><rp>)</rp></ruby>レンズ。上げると<ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>は<ruby>狭<rp>(</rp><rt>せま</rt><rp>)</rp></ruby>く・暗くなる',
        '<strong><ruby>顕微鏡<rp>(</rp><rt>けんびきょう</rt><rp>)</rp></ruby>の各部分</strong>：<ruby>接眼<rp>(</rp><rt>せつがん</rt><rp>)</rp></ruby>レンズ・<ruby>対物<rp>(</rp><rt>たいぶつ</rt><rp>)</rp></ruby>レンズ・ステージ・<ruby>反射鏡<rp>(</rp><rt>はんしゃきょう</rt><rp>)</rp></ruby>・しぼり・<ruby>調節<rp>(</rp><rt>ちょうせつ</rt><rp>)</rp></ruby>ねじ・レボルバー',
        '<strong><ruby>双眼実体顕微鏡<rp>(</rp><rt>そうがんじったいけんびきょう</rt><rp>)</rp></ruby></strong>：両目で<ruby>立体的<rp>(</rp><rt>りったいてき</rt><rp>)</rp></ruby>に<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>でき、プレパラート不要',
      ],
    },
  ],
};

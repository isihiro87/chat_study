import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const objectMotionChat: HistoryChat = {
  id: 'sci3-object-motion',
  icon: '📏',
  title: '物体の運動',
  subtitle: '速さ・記録タイマー・等速直線運動',
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
      text: '速さと運動の記録',
    },
    {
      type: 'narrator',
      text: '物体の運動を正確に調べるには、<strong><span class="keyword"><span data-tooltip="一定の時間間隔で紙テープに打点し、物体の運動を記録する装置"><ruby>記録<rp>(</rp><rt>きろく</rt><rp>)</rp></ruby>タイマー</span></span></strong>を使います。東日本では1秒間に<strong>50回</strong>、西日本では<strong>60回</strong><ruby>打点<rp>(</rp><rt>だてん</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '記録タイマーは電源の<ruby>周波数<rp>(</rp><rt>しゅうはすう</rt><rp>)</rp></ruby>を利用しているんだ。東日本は50Hz、西日本は60Hzだから打点の回数がちがうんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'テープの<ruby>打点<rp>(</rp><rt>だてん</rt><rp>)</rp></ruby>の間隔から何がわかるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '打点の間隔が広いほど速い、せまいほど遅いということがわかるよ。一定の時間ごとに点を打つから、移動距離の変化が見えるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/motion-tape.svg',
      alt: '記録タイマーのテープ',
      caption: '打点間隔が広い＝速い、せまい＝遅い',
    },
    {
      type: 'narrator',
      text: '<ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>さには2<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>あります。ある区間全体の<strong><span class="keyword">平均の速さ</span></strong>と、ごく<ruby>短<rp>(</rp><rt>みじか</rt><rp>)</rp></ruby>い時間での<strong><span class="keyword"><ruby>瞬間<rp>(</rp><rt>しゅんかん</rt><rp>)</rp></ruby>の速さ</span></strong>です。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">記録タイマー</span>の打点間隔で速さの変化がわかる！<span class="keyword">平均の速さ</span> = 距離 ÷ 時間',
    },
    {
      type: 'quiz',
      question: '東日本の記録タイマーが1秒間に打つ打点の回数は？',
      options: [
        { letter: 'A', text: '30回', correct: false },
        { letter: 'B', text: '50回', correct: true },
        { letter: 'C', text: '60回', correct: false },
        { letter: 'D', text: '100回', correct: false },
      ],
      explanation:
        '<strong>正解はB「50回」</strong>です。東日本は電源の<ruby>周波数<rp>(</rp><rt>しゅうはすう</rt><rp>)</rp></ruby>が50Hzなので、記録タイマーは1秒間に50回打点します。西日本は60Hzで60回です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さて、速さも向きもずっと変わらない運動を<strong><ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby></strong>というよ。記録テープの打点間隔はどうなると思う？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '速さが変わらないから...打点の間隔がぜんぶ同じになる！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その通り！等速直線運動では<ruby>移動距離<rp>(</rp><rt>いどうきょり</rt><rp>)</rp></ruby>が時間に<ruby>比例<rp>(</rp><rt>ひれい</rt><rp>)</rp></ruby>するから、グラフにすると原点を通る<ruby>直線<rp>(</rp><rt>ちょくせん</rt><rp>)</rp></ruby>になるんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">等速直線運動</span> = 速さも向きも変わらない運動。打点間隔はすべて等しい！',
    },
    {
      type: 'narrator',
      text: 'では、速さが変わる運動を見てみましょう。<ruby>斜面<rp>(</rp><rt>しゃめん</rt><rp>)</rp></ruby>を下る物体は<strong>だんだん速く</strong>なり、斜面を上る物体は<strong>だんだんおそく</strong>なります。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '斜面を下るとだんだん速くなるのはなぜですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><ruby>重力<rp>(</rp><rt>じゅうりょく</rt><rp>)</rp></ruby></strong>が物体を引っぱり続けるからだよ。<ruby>自由落下<rp>(</rp><rt>じゆうらっか</rt><rp>)</rp></ruby>も同じで、重力だけがはたらいて速さが一定の<ruby>割合<rp>(</rp><rt>わりあい</rt><rp>)</rp></ruby>で増えていくんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'じゃあ逆に斜面を上ると、<ruby>摩擦力<rp>(</rp><rt>まさつりょく</rt><rp>)</rp></ruby>や重力で減速するんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'よく理解できているね！テープの打点間隔が広がれば<ruby>加速<rp>(</rp><rt>かそく</rt><rp>)</rp></ruby>、せまくなれば<ruby>減速<rp>(</rp><rt>げんそく</rt><rp>)</rp></ruby>とすぐに判断できるよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/strobe-photo-slope.png',
      alt: '斜面を下る台車のストロボ写真',
      caption: '等時間間隔で撮影。間隔が広がり加速していることがわかる',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/free-fall-strobe.png',
      alt: '自由落下のストロボ写真',
      caption: '重力による等加速度運動。落下するにつれ間隔が広がる',
    },
    {
      type: 'summary-point',
      text: '速くなる運動 → 打点間隔が広がる。おそくなる運動 → 打点間隔がせまくなる！',
    },
    {
      type: 'quiz',
      question: '等速直線運動をしている物体の記録テープの特徴は？',
      options: [
        { letter: 'A', text: '打点間隔がだんだん広くなる', correct: false },
        { letter: 'B', text: '打点間隔がだんだんせまくなる', correct: false },
        { letter: 'C', text: '打点間隔がすべて等しい', correct: true },
        { letter: 'D', text: '打点が1か所に集まる', correct: false },
      ],
      explanation:
        '<strong>正解はC「打点間隔がすべて等しい」</strong>です。<ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby>では速さが一定なので、同じ時間に同じ距離を<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>し、打点間隔はすべて等しくなります。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>記録<rp>(</rp><rt>きろく</rt><rp>)</rp></ruby>タイマー</strong>：東日本50回/秒、西日本60回/秒で打点',
        '<strong>平均の速さ</strong> = <ruby>移動距離<rp>(</rp><rt>いどうきょり</rt><rp>)</rp></ruby> ÷ 時間、<strong><ruby>瞬間<rp>(</rp><rt>しゅんかん</rt><rp>)</rp></ruby>の速さ</strong> = ごく短い時間の速さ',
        '<strong><ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby></strong>：打点間隔がすべて等しく、距離は時間に<ruby>比例<rp>(</rp><rt>ひれい</rt><rp>)</rp></ruby>',
        'だんだん速くなる運動（<ruby>自由落下<rp>(</rp><rt>じゆうらっか</rt><rp>)</rp></ruby>）・だんだんおそくなる運動（<ruby>摩擦力<rp>(</rp><rt>まさつりょく</rt><rp>)</rp></ruby>）',
      ],
    },
  ],
};

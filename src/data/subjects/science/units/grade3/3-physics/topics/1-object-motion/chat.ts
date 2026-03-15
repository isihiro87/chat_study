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
    // ===== セクション1: 速さと運動の記録 =====
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
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'テストでよく出る「5打点分」ってどういう意味ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '50Hzの記録タイマーなら1打点の間隔は0.02秒。5打点分は 0.02秒 × 5 = <strong>0.1秒</strong>になる。テープを5打点ごとに切って並べると、0.1秒ごとの速さの変化がわかるんだ',
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
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '速さの単位って m/s と km/h がありますよね。どう変換するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'km/h から m/s にするには <strong>÷ 3.6</strong> するよ。たとえば 36km/h = 36 ÷ 3.6 = <strong>10m/s</strong> だ。逆に m/s → km/h は × 3.6 だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">記録タイマー</span>の打点間隔で速さの変化がわかる！<span class="keyword">平均の速さ</span> = 距離 ÷ 時間。km/h → m/s は ÷ 3.6',
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

    // ===== セクション2: 等速直線運動とそのグラフ =====
    {
      type: 'date',
      text: '等速直線運動とそのグラフ',
    },
    {
      type: 'narrator',
      text: '速さも向きもずっと変わらない運動を<strong><span class="keyword"><ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby></span></strong>といいます。記録テープの<ruby>打点<rp>(</rp><rt>だてん</rt><rp>)</rp></ruby>間隔はすべて等しくなります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '等速直線運動では、同じ時間に同じ距離を移動するよ。だからテープを5打点ごとに切って並べると、全部<strong>同じ長さ</strong>になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'グラフにするとどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>移動距離<rp>(</rp><rt>いどうきょり</rt><rp>)</rp></ruby>と時間のグラフは<strong>原点を通る直線</strong>になるよ。移動距離が時間に<ruby>比例<rp>(</rp><rt>ひれい</rt><rp>)</rp></ruby>するからね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '速さと時間のグラフだとどうなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '速さがずっと一定だから、速さ-時間グラフは<strong>水平な直線</strong>になる！そしてこのグラフの<strong>面積</strong>が<ruby>移動距離<rp>(</rp><rt>いどうきょり</rt><rp>)</rp></ruby>を表すんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'グラフの面積が移動距離になるんですか！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ところで、等速直線運動をしている物体にはたらく力はどうなっているか知ってる？ 実は力の<strong><ruby>合力<rp>(</rp><rt>ごうりょく</rt><rp>)</rp></ruby>が0</strong>なんだ。力がつり合っているか、力がはたらいていない状態なんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">等速直線運動</span>：距離-時間グラフは原点を通る直線、速さ-時間グラフは水平な直線。力の合力は0！',
    },
    {
      type: 'quiz',
      question: '等速直線運動をしている物体の速さ-時間グラフはどのような形になる？',
      options: [
        { letter: 'A', text: '右上がりの直線', correct: false },
        { letter: 'B', text: '右下がりの直線', correct: false },
        { letter: 'C', text: '水平な直線', correct: true },
        { letter: 'D', text: '放物線', correct: false },
      ],
      explanation:
        '<strong>正解はC「水平な直線」</strong>です。<ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby>では速さが一定なので、速さ-時間グラフは水平な直線になります。なお、距離-時間グラフは原点を通る直線です。',
    },

    // ===== セクション3: 速さが変わる運動 =====
    {
      type: 'date',
      text: '速さが変わる運動',
    },
    {
      type: 'narrator',
      text: '<ruby>斜面<rp>(</rp><rt>しゃめん</rt><rp>)</rp></ruby>を下る物体は<strong>だんだん速く</strong>なり、斜面を上る物体は<strong>だんだんおそく</strong>なります。速さの変化と力の関係を見てみましょう。',
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
      text: '<strong><ruby>重力<rp>(</rp><rt>じゅうりょく</rt><rp>)</rp></ruby></strong>の<ruby>斜面<rp>(</rp><rt>しゃめん</rt><rp>)</rp></ruby>方向の成分が物体を引っぱり続けるからだよ。運動の向きに力がはたらくと、物体はどんどん速くなるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '斜面の角度を変えるとどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '斜面の角度が<strong>大きいほど</strong>、重力の斜面方向の成分が大きくなるから、<strong>速さの増え方も大きく</strong>なるよ。そして角度を90°にすると...？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '90°だと真下に落ちるから...<strong><ruby>自由落下<rp>(</rp><rt>じゆうらっか</rt><rp>)</rp></ruby></strong>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その通り！自由落下では重力だけがはたらいて、速さが一定の<ruby>割合<rp>(</rp><rt>わりあい</rt><rp>)</rp></ruby>で増えていく。速さ-時間グラフは<strong>右上がりの直線</strong>になるんだ',
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
      type: 'narrator',
      text: '逆に、運動と反対向きに力がはたらくと物体は<strong>だんだんおそく</strong>なります。<strong><span class="keyword"><ruby>摩擦力<rp>(</rp><rt>まさつりょく</rt><rp>)</rp></ruby></span></strong>は運動と逆向きにはたらき、物体を<ruby>減速<rp>(</rp><rt>げんそく</rt><rp>)</rp></ruby>させます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'もし<ruby>摩擦力<rp>(</rp><rt>まさつりょく</rt><rp>)</rp></ruby>がまったくなかったらどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '水平面上で摩擦がなければ、物体は<strong><ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby></strong>を続けるよ。力がはたらかなければ速さも向きも変わらないんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'ちなみに、運動のようすを<strong><span class="keyword">ストロボスコープ</span></strong>（一定の時間間隔で発光する<ruby>装置<rp>(</rp><rt>そうち</rt><rp>)</rp></ruby>）で写真に撮ると、等速直線運動なら<ruby>像<rp>(</rp><rt>ぞう</rt><rp>)</rp></ruby>の間隔がすべて等しく、加速する運動なら間隔がだんだん広くなるよ',
    },
    {
      type: 'summary-point',
      text: '斜面の角度が大きいほど加速が大きい。90°で<span class="keyword">自由落下</span>。<span class="keyword">摩擦力</span>がなければ等速直線運動を続ける！',
    },
    {
      type: 'quiz',
      question: '水平面上で摩擦力がはたらかない場合、運動中の物体はどうなる？',
      options: [
        { letter: 'A', text: 'しだいに止まる', correct: false },
        { letter: 'B', text: 'だんだん速くなる', correct: false },
        { letter: 'C', text: '等速直線運動を続ける', correct: true },
        { letter: 'D', text: '向きが変わる', correct: false },
      ],
      explanation:
        '<strong>正解はC「等速直線運動を続ける」</strong>です。<ruby>摩擦力<rp>(</rp><rt>まさつりょく</rt><rp>)</rp></ruby>がなければ物体にはたらく力の合力は0なので、物体は速さも向きも変えずに<ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby>を続けます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>記録<rp>(</rp><rt>きろく</rt><rp>)</rp></ruby>タイマー</strong>：東日本50回/秒、西日本60回/秒で打点。5打点分 = 0.1秒（50Hz）',
        '<strong>平均の速さ</strong> = <ruby>移動距離<rp>(</rp><rt>いどうきょり</rt><rp>)</rp></ruby> ÷ 時間。km/h → m/s は ÷ 3.6',
        '<strong><ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby></strong>：打点間隔がすべて等しく、距離-時間グラフは原点を通る直線、速さ-時間グラフは水平な直線',
        '<strong>斜面を下る運動</strong>：角度が大きいほど加速も大きい。90°で<ruby>自由落下<rp>(</rp><rt>じゆうらっか</rt><rp>)</rp></ruby>',
        '<strong><ruby>摩擦力<rp>(</rp><rt>まさつりょく</rt><rp>)</rp></ruby></strong>がなければ等速直線運動を続ける。<strong>ストロボスコープ</strong>で運動の記録ができる',
      ],
    },
  ],
};

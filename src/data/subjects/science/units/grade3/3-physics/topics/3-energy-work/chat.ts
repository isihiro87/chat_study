import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const energyWorkChat: HistoryChat = {
  id: 'sci3-energy-work',
  icon: '⚡',
  title: 'エネルギーと力学的エネルギー',
  subtitle: 'エネルギーの種類・力学的エネルギーの保存',
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
    // ===== Section 1: エネルギーの種類と力学的エネルギー =====
    {
      type: 'date',
      text: 'エネルギーの種類と力学的エネルギー',
    },
    {
      type: 'narrator',
      text: '<span class="keyword">エネルギー</span>とは、他の物体に<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>をする<ruby>能力<rp>(</rp><rt>のうりょく</rt><rp>)</rp></ruby>のことです。エネルギーにはさまざまな種類があり、<strong><span class="keyword"><ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>エネルギー</span></strong>、<strong><span class="keyword"><ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギー</span></strong>、<strong><span class="keyword">光エネルギー</span></strong>、<strong><span class="keyword"><ruby>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>エネルギー</span></strong>、<strong><span class="keyword">音エネルギー</span></strong>、<strong><span class="keyword"><ruby>弾性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby>エネルギー</span></strong>などがあります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず「エネルギー」って何だと思う？理科では<strong>「他の物体に仕事をする能力」</strong>のことをエネルギーというんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '仕事をする能力...？電気とか熱とかもエネルギーなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<strong>電気・化学・光・熱・音・<ruby>弾性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby></strong>...いろいろな種類があるよ。たとえば<ruby>燃料<rp>(</rp><rt>ねんりょう</rt><rp>)</rp></ruby>や食べ物がもつエネルギーは<strong><ruby>化学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>エネルギー</strong>、バネが<ruby>縮<rp>(</rp><rt>ちぢ</rt><rp>)</rp></ruby>んだときのエネルギーは<strong>弾性エネルギー</strong>だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'そんなにたくさんあるんですね！じゃあ動いている物体もエネルギーをもっているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いい質問！<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>している物体がもつエネルギーを<strong>運動エネルギー</strong>というんだ。<strong>速さが大きいほど</strong>、そして<strong>質量が大きいほど</strong>、運動エネルギーは大きくなるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なるほど！トラックと自転車が同じ速さなら、重いトラックの方が運動エネルギーが大きいんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'その通り！もう一つ大事なのが<strong><ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギー</strong>。高い場所にある物体がもつエネルギーだよ。<strong>高さが高いほど</strong>、<strong>質量が大きいほど</strong>大きくなるんだ',
    },
    {
      type: 'narrator',
      text: '<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>エネルギーと<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギーの和を<strong><span class="keyword"><span data-tooltip="運動エネルギーと位置エネルギーの合計。摩擦がなければ一定に保存される"><ruby>力学的<rp>(</rp><rt>りきがくてき</rt><rp>)</rp></ruby>エネルギー</span></span></strong>といいます。<ruby>摩擦<rp>(</rp><rt>まさつ</rt><rp>)</rp></ruby>や<ruby>空気抵抗<rp>(</rp><rt>くうきていこう</rt><rp>)</rp></ruby>がなければ、力学的エネルギーは<strong>一定に<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby></strong>されます（<span class="keyword">力学的エネルギーの保存</span>）。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>振<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>り子を思い浮かべてごらん。一番高い所では止まっていて、一番低い所で一番速くなるよね？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'はい！高い所では<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギーが大きくて、低い所では<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>エネルギーが大きいんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その通り！ジェットコースターも同じ原理だよ。でも実際には<ruby>摩擦<rp>(</rp><rt>まさつ</rt><rp>)</rp></ruby>があるから、力学的エネルギーは少しずつ<strong>減少</strong>するんだ。その分は<strong>熱</strong>や<strong>音</strong>のエネルギーに変わっているんだよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/mechanical-energy.svg',
      alt: '力学的エネルギーの保存',
      caption: '振り子では位置エネルギーと運動エネルギーが相互に変換される',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">力学的エネルギー</span> = 運動E + 位置E。摩擦なしなら保存される。摩擦があると熱・音に変わり減少する！',
    },
    {
      type: 'quiz',
      question: '力学的エネルギーの保存について正しいのはどれ？',
      options: [
        { letter: 'A', text: '運動エネルギーは常に一定', correct: false },
        { letter: 'B', text: '位置エネルギーは常に一定', correct: false },
        { letter: 'C', text: '力学的エネルギーは常に増加する', correct: false },
        { letter: 'D', text: '運動エネルギーと位置エネルギーの和が一定', correct: true },
      ],
      explanation:
        '<strong>正解はD</strong>です。<ruby>摩擦<rp>(</rp><rt>まさつ</rt><rp>)</rp></ruby>や<ruby>空気抵抗<rp>(</rp><rt>くうきていこう</rt><rp>)</rp></ruby>がなければ、<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>エネルギーと<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギーの和（<ruby>力学的<rp>(</rp><rt>りきがくてき</rt><rp>)</rp></ruby>エネルギー）は一定に<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>されます。',
    },

    {
      type: 'end',
      points: [
        'エネルギーは<strong>仕事をする能力</strong>。電気・化学・光・熱・音・<ruby>弾性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby>など種類は多い',
        '<strong><ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>エネルギー</strong>：速さが大きいほど、質量が大きいほど大きい',
        '<strong><ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギー</strong>：高さが高いほど、質量が大きいほど大きい',
        '<strong><ruby>力学的<rp>(</rp><rt>りきがくてき</rt><rp>)</rp></ruby>エネルギー</strong> = 運動E + 位置E。<ruby>摩擦<rp>(</rp><rt>まさつ</rt><rp>)</rp></ruby>がなければ<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>される',
      ],
    },
  ],
};

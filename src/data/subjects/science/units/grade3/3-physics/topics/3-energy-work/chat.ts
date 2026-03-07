import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const energyWorkChat: HistoryChat = {
  id: 'sci3-energy-work',
  icon: '⚡',
  title: 'エネルギーと仕事',
  subtitle: '力学的エネルギー・仕事の原理・変換効率',
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
      text: '力学的エネルギーの保存',
    },
    {
      type: 'narrator',
      text: '<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>している物体がもつエネルギーを<strong><span class="keyword"><ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>エネルギー</span></strong>、高い<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>にある物体がもつエネルギーを<strong><span class="keyword"><ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギー</span></strong>といいます。この2つの和が<strong><span class="keyword"><span data-tooltip="運動エネルギーと位置エネルギーの合計。摩擦がなければ一定に保存される"><ruby>力学的<rp>(</rp><rt>りきがくてき</rt><rp>)</rp></ruby>エネルギー</span></span></strong>です。',
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
      text: 'はい！高い所では<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギーが大きくて、低い所では<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>エネルギーが大きいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その通り！位置エネルギーが運動エネルギーに<ruby>変換<rp>(</rp><rt>へんかん</rt><rp>)</rp></ruby>されるんだ。でも2つの合計（<strong>力学的エネルギー</strong>）は<ruby>摩擦<rp>(</rp><rt>まさつ</rt><rp>)</rp></ruby>がなければ<strong>一定</strong>に<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>されるんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">力学的エネルギー</span> = 運動E + 位置E は常に一定（保存される）！',
    },
    {
      type: 'quiz',
      question: '力学的エネルギーの保存について正しいのはどれ？',
      options: [
        { letter: 'A', text: '運動エネルギーは常に一定', correct: false },
        { letter: 'B', text: '位置エネルギーは常に一定', correct: false },
        { letter: 'C', text: '運動エネルギーと位置エネルギーの和が一定', correct: true },
        { letter: 'D', text: '力学的エネルギーは常に増加する', correct: false },
      ],
      explanation:
        '<strong>正解はC</strong>です。<ruby>摩擦<rp>(</rp><rt>まさつ</rt><rp>)</rp></ruby>や<ruby>空気抵抗<rp>(</rp><rt>くうきていこう</rt><rp>)</rp></ruby>がなければ、<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>エネルギーと<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギーの和（<ruby>力学的<rp>(</rp><rt>りきがくてき</rt><rp>)</rp></ruby>エネルギー）は一定に<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>されます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '次は「<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>」について学ぼう。理科でいう仕事は、<strong>力を加えて物体をその力の向きに動かすこと</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'どうやって計算するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong>仕事[J] = 力の大きさ[N] × 力の向きに動いた距離[m]</strong> で計算するよ。3Nの力で2m動かしたら 3×2 = 6J だね',
    },
    {
      type: 'narrator',
      text: '<ruby>滑車<rp>(</rp><rt>かっしゃ</rt><rp>)</rp></ruby>やてこなどの<ruby>道具<rp>(</rp><rt>どうぐ</rt><rp>)</rp></ruby>を使うと力は小さくてすみますが、その分<ruby>距離<rp>(</rp><rt>きょり</rt><rp>)</rp></ruby>が長くなります。結局、仕事の<ruby>総量<rp>(</rp><rt>そうりょう</rt><rp>)</rp></ruby>は変わりません。これを<strong><span class="keyword"><span data-tooltip="道具を使っても使わなくても、仕事の総量は変わらないという原理">仕事の<ruby>原理<rp>(</rp><rt>げんり</rt><rp>)</rp></ruby></span></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '力が半分になっても距離が2倍なら同じ仕事なんですね！ラクできると思ったのに...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'でも1秒あたりの仕事の大きさ = <strong><ruby>仕事率<rp>(</rp><rt>しごとりつ</rt><rp>)</rp></ruby>[W]</strong>は違うよ。速くできれば仕事率は大きくなるんだ。仕事率 = 仕事 ÷ 時間 で求めるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">仕事</span> = 力 × 距離[J]。<span class="keyword">仕事の原理</span>：道具を使っても仕事は同じ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '最後にエネルギーの<ruby>変換<rp>(</rp><rt>へんかん</rt><rp>)</rp></ruby>を学ぼう。電気エネルギーは<ruby>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>・光・運動エネルギーなどに変換できるけど、すべてが有効に使われるわけじゃないんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>白熱電球<rp>(</rp><rt>はくねつでんきゅう</rt><rp>)</rp></ruby>が<ruby>熱<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>くなるのは、電気エネルギーが熱に変わっているからですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その通り！有効に利用できる<ruby>割合<rp>(</rp><rt>わりあい</rt><rp>)</rp></ruby>を<strong><ruby>変換効率<rp>(</rp><rt>へんかんこうりつ</rt><rp>)</rp></ruby></strong>というよ。でもエネルギーの<ruby>総量<rp>(</rp><rt>そうりょう</rt><rp>)</rp></ruby>は変わらない。これが<strong>エネルギー<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>の法則</strong>だね',
    },
    {
      type: 'narrator',
      text: '<ruby>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>の伝わり方には3つあります。物質中を伝わる<strong><span class="keyword"><ruby>伝導<rp>(</rp><rt>でんどう</rt><rp>)</rp></ruby></span></strong>、<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>や<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>の流れによる<strong><span class="keyword"><ruby>対流<rp>(</rp><rt>たいりゅう</rt><rp>)</rp></ruby></span></strong>、<ruby>電磁波<rp>(</rp><rt>でんじは</rt><rp>)</rp></ruby>による<strong><span class="keyword"><ruby>放射<rp>(</rp><rt>ほうしゃ</rt><rp>)</rp></ruby></span></strong>です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>太陽<rp>(</rp><rt>たいよう</rt><rp>)</rp></ruby>の熱が<ruby>宇宙<rp>(</rp><rt>うちゅう</rt><rp>)</rp></ruby>を通って届くのは放射ですね！空気がなくても伝わるんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">エネルギー保存の法則</span>：変換されても総量は一定！<span class="keyword">変換効率</span>で有効利用の割合がわかる',
    },
    {
      type: 'quiz',
      question: '3Nの力で物体を2m持ち上げたときの仕事は？',
      options: [
        { letter: 'A', text: '1.5J', correct: false },
        { letter: 'B', text: '5J', correct: false },
        { letter: 'C', text: '6J', correct: true },
        { letter: 'D', text: '9J', correct: false },
      ],
      explanation:
        '<strong>正解はC「6J」</strong>です。<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby> = 力の大きさ × 力の向きに動いた<ruby>距離<rp>(</rp><rt>きょり</rt><rp>)</rp></ruby> = 3N × 2m = 6J です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>力学的<rp>(</rp><rt>りきがくてき</rt><rp>)</rp></ruby>エネルギー</strong> = <ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>エネルギー + <ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>エネルギー（<ruby>摩擦<rp>(</rp><rt>まさつ</rt><rp>)</rp></ruby>なしなら<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>）',
        '<strong><ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby></strong>[J] = 力[N] × 距離[m]。<strong>仕事の<ruby>原理<rp>(</rp><rt>げんり</rt><rp>)</rp></ruby></strong>：道具を使っても仕事は同じ',
        '<strong><ruby>仕事率<rp>(</rp><rt>しごとりつ</rt><rp>)</rp></ruby></strong>[W] = 仕事[J] ÷ 時間[s]',
        '<strong>エネルギー保存の法則</strong>：<ruby>変換<rp>(</rp><rt>へんかん</rt><rp>)</rp></ruby>されても総量は一定。熱の伝わり方は<ruby>伝導<rp>(</rp><rt>でんどう</rt><rp>)</rp></ruby>・<ruby>対流<rp>(</rp><rt>たいりゅう</rt><rp>)</rp></ruby>・<ruby>放射<rp>(</rp><rt>ほうしゃ</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const forceActionChat: HistoryChat = {
  id: 'sci3-force-action',
  icon: '💪',
  title: '力のはたらき方',
  subtitle: '合力と分力・慣性・作用反作用・水圧と浮力',
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
      text: '力の合成と分解',
    },
    {
      type: 'narrator',
      text: '2つの力を1つにまとめることを<strong><span class="keyword"><span data-tooltip="2つの力を1つの力に置き換えること">力の<ruby>合成<rp>(</rp><rt>ごうせい</rt><rp>)</rp></ruby></span></span></strong>といい、そのまとめた力を<strong><span class="keyword"><ruby>合力<rp>(</rp><rt>ごうりょく</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '同じ向きの2力なら合力は<ruby>和<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>、逆向きなら<ruby>差<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>になるね。角度がある場合は<strong><ruby>平行四辺形<rp>(</rp><rt>へいこうしへんけい</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></strong>を使うんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '平行四辺形の法則ってどうやるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '2つの力を2辺とする平行四辺形を作って、その<ruby>対角線<rp>(</rp><rt>たいかくせん</rt><rp>)</rp></ruby>が合力になるんだよ。逆に1つの力を2つに分けるのが<strong>力の<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby></strong>で、分けた力を<strong><ruby>分力<rp>(</rp><rt>ぶんりょく</rt><rp>)</rp></ruby></strong>というんだ',
    },
    {
      type: 'image',
      src: '/images/science/force-composition.svg',
      alt: '力の合成と分解',
      caption: '平行四辺形の法則で合力を求める',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">合力</span> = 平行四辺形の対角線。<span class="keyword">分力</span> = 1つの力を2つに分解！',
    },
    {
      type: 'quiz',
      question: '同一直線上にない2力の合力を求める方法は？',
      options: [
        { letter: 'A', text: 'てこの原理', correct: false },
        { letter: 'B', text: 'フックの法則', correct: false },
        { letter: 'C', text: '平行四辺形の法則', correct: true },
        { letter: 'D', text: 'アルキメデスの原理', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>平行四辺形<rp>(</rp><rt>へいこうしへんけい</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby>」</strong>です。2つの力を2辺とする平行四辺形を作り、その<ruby>対角線<rp>(</rp><rt>たいかくせん</rt><rp>)</rp></ruby>が合力を表します。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '次に<strong><ruby>慣性<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></strong>を学ぼう。物体に力がはたらかない（合力が0）とき、物体はどうなると思う？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'うーん、止まったまま？でも動いているときは？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '静止している物体は静止し続け、運動している物体は<ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby>を続けるんだ！電車が急ブレーキをかけたとき体が前に倒れるのも<strong>慣性</strong>だよ',
    },
    {
      type: 'narrator',
      text: '物体がもとの<ruby>運動状態<rp>(</rp><rt>うんどうじょうたい</rt><rp>)</rp></ruby>を続けようとする性質を<strong><span class="keyword"><ruby>慣性<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby></span></strong>といいます。これは<strong><span class="keyword">慣性の法則</span></strong>（運動の第1法則）として知られています。',
    },
    {
      type: 'image',
      src: '/images/science/inertia-diagram.svg',
      alt: '慣性の法則',
      caption: '合力が0なら静止し続ける or 等速直線運動を続ける',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">慣性の法則</span> = 合力0なら静止→静止、運動→等速直線運動を続ける！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>作用<rp>(</rp><rt>さよう</rt><rp>)</rp></ruby>・<ruby>反作用<rp>(</rp><rt>はんさよう</rt><rp>)</rp></ruby>の法則ってなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby>を押すと手が押し返されるよね？AがBに力を加えると、BからAに<strong>同じ大きさ・逆向き</strong>の力がはたらく。これが<strong>作用・反作用の法則</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'つり合いとどうちがうんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'いい質問だね！つり合いは<strong>同じ物体</strong>に<ruby>はたらく<rp></rp><rt></rt><rp></rp></ruby>2力だけど、作用・反作用は<strong>別々の物体</strong>にはたらく2力なんだ',
    },
    {
      type: 'narrator',
      text: '水中では<strong><span class="keyword"><ruby>水圧<rp>(</rp><rt>すいあつ</rt><rp>)</rp></ruby></span></strong>があらゆる方向からはたらきます。<ruby>深<rp>(</rp><rt>ふか</rt><rp>)</rp></ruby>いほど水圧は大きく、物体の上下の水圧の差が<strong><span class="keyword"><ruby>浮力<rp>(</rp><rt>ふりょく</rt><rp>)</rp></ruby></span></strong>を生みます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '浮力は上下の水圧差なんですね！深く<ruby>沈<rp>(</rp><rt>しず</rt><rp>)</rp></ruby>めるほど下からの水圧が大きいから浮こうとするんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">作用・反作用</span> = 別々の物体に同じ大きさ・逆向き。<span class="keyword">浮力</span> = 上下の水圧差！',
    },
    {
      type: 'quiz',
      question: '作用・反作用の法則で正しいのはどれ？',
      options: [
        { letter: 'A', text: '同じ物体にはたらく', correct: false },
        { letter: 'B', text: '大きさが異なる', correct: false },
        { letter: 'C', text: '同じ向きにはたらく', correct: false },
        { letter: 'D', text: '同じ大きさで逆向きにはたらく', correct: true },
      ],
      explanation:
        '<strong>正解はD「同じ大きさで逆向きにはたらく」</strong>です。<ruby>作用<rp>(</rp><rt>さよう</rt><rp>)</rp></ruby>と<ruby>反作用<rp>(</rp><rt>はんさよう</rt><rp>)</rp></ruby>は同じ大きさ・逆向き・一直線上で、<strong>別々の物体</strong>にはたらきます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>合力<rp>(</rp><rt>ごうりょく</rt><rp>)</rp></ruby></strong>は<ruby>平行四辺形<rp>(</rp><rt>へいこうしへんけい</rt><rp>)</rp></ruby>の法則で求める。<strong><ruby>分力<rp>(</rp><rt>ぶんりょく</rt><rp>)</rp></ruby></strong>は1つの力を2つに分解',
        '<strong><ruby>慣性<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の法則</strong>：合力0なら<ruby>静止<rp>(</rp><rt>せいし</rt><rp>)</rp></ruby>し続ける or <ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby>を続ける',
        '<strong>作用・反作用</strong>：同じ大きさ・逆向き・別々の物体にはたらく',
        '<strong><ruby>水圧<rp>(</rp><rt>すいあつ</rt><rp>)</rp></ruby></strong>は深いほど大。<strong><ruby>浮力<rp>(</rp><rt>ふりょく</rt><rp>)</rp></ruby></strong> = 上下の水圧差',
      ],
    },
  ],
};

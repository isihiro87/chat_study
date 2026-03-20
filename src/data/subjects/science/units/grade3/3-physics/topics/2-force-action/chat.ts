import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const forceActionChat: HistoryChat = {
  id: 'sci3-force-action',
  icon: '💪',
  title: '力のはたらき方',
  subtitle: '合力と分力・慣性・作用反作用',
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
    // === セクション1: 力の合成と分解 ===
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
      text: '一直線上の場合は簡単そう！右に3N、右に5Nなら合力は右に8Nですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！じゃあ右に3N、左に5Nだったら？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えーと…逆向きだから差で、5−3＝2N。大きい方の向きだから左に2Nですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '完ぺき！角度がある場合は<strong><ruby>平行四辺形<rp>(</rp><rt>へいこうしへんけい</rt><rp>)</rp></ruby>の法則</strong>を使うよ。2つの力を2辺とする平行四辺形を作って、その<ruby>対角線<rp>(</rp><rt>たいかくせん</rt><rp>)</rp></ruby>が合力になるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/force-composition.svg',
      alt: '力の合成と分解',
      caption: '平行四辺形の法則で合力を求める',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '逆に1つの力を2つに分けることもできるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'それが<strong>力の<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby></strong>だよ。分けた力を<strong><span class="keyword"><ruby>分力<rp>(</rp><rt>ぶんりょく</rt><rp>)</rp></ruby></span></strong>という。<ruby>斜面<rp>(</rp><rt>しゃめん</rt><rp>)</rp></ruby>上の物体にはたらく重力を「斜面に<ruby>平行<rp>(</rp><rt>へいこう</rt><rp>)</rp></ruby>な方向」と「斜面に<ruby>垂直<rp>(</rp><rt>すいちょく</rt><rp>)</rp></ruby>な方向」に分解するのが大事！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/incline-forces.png',
      alt: '斜面上の力の分解',
      caption: '重力を斜面に平行な分力と垂直な分力に分解',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '斜面が急だと物が速く滑り落ちるのは、斜面に平行な分力が大きくなるからなんですね！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/water-pressure-buoyancy.png',
      alt: '水圧と浮力',
      caption: '下面の水圧−上面の水圧＝浮力',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">合力</span> = 平行四辺形の対角線。一直線上なら同じ向きは和、逆向きは差。<span class="keyword">分力</span> = 1つの力を2つに分解。斜面が急なほど平行な分力が大きい！',
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

    // === セクション2: 慣性の法則と作用・反作用 ===
    {
      type: 'date',
      text: '慣性の法則と作用・反作用',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '次に<strong><span class="keyword"><ruby>慣性<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></span></strong>を学ぼう。物体に力がはたらかない（合力が0）とき、物体はどうなると思う？',
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
      text: '静止している物体は静止し続け、運動している物体は<ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby>を続けるんだ！これを<strong>慣性の法則</strong>（運動の第1法則）というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '身近な例ってありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '電車が急ブレーキをかけたとき体が<strong>前</strong>に倒れるよね？これは<strong><span class="keyword">慣性</span></strong>で体が前に進み続けようとするからだよ。急に発車すると<strong>後ろ</strong>に倒れるのも同じ原理！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'だるま落としも慣性なんですか？たたいた段だけ飛び出して上のだるまは落ちないですよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そうだよ！上のだるまは慣性で<ruby>静止<rp>(</rp><rt>せいし</rt><rp>)</rp></ruby>し続けようとするから、その場にとどまるんだ。テーブルクロス引きも同じ原理だね',
    },
    {
      type: 'narrator',
      text: '物体がもとの<ruby>運動状態<rp>(</rp><rt>うんどうじょうたい</rt><rp>)</rp></ruby>を続けようとする性質を<strong><span class="keyword"><ruby>慣性<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/inertia-diagram.svg',
      alt: '慣性の法則',
      caption: '合力が0なら静止し続ける or 等速直線運動を続ける',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/inertia-examples.png',
      alt: '慣性の法則の例',
      caption: '電車の急ブレーキ・テーブルクロス引き',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">慣性の法則</span> = 合力0なら静止→静止、運動→等速直線運動を続ける！電車のブレーキ・だるま落としは慣性の例！',
    },
    {
      type: 'quiz',
      question: '電車が急ブレーキをかけたとき、乗客の体が前に倒れる理由は？',
      options: [
        { letter: 'A', text: '重力が大きくなるから', correct: false },
        { letter: 'B', text: '慣性で体が前に進み続けようとするから', correct: true },
        { letter: 'C', text: '摩擦力が働くから', correct: false },
        { letter: 'D', text: '作用・反作用の法則のため', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。<ruby>慣性<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>により体はもとの<ruby>運動状態<rp>(</rp><rt>うんどうじょうたい</rt><rp>)</rp></ruby>を続けようとするため、電車が止まっても体は前に進み続けようとします。',
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
      text: '<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby>を押すと手が押し返されるよね？AがBに力を加えると、BからAに<strong>同じ大きさ・逆向き</strong>の力がはたらく。これが<strong><span class="keyword">作用・反作用の法則</span></strong>（運動の第3法則）だよ',
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
      text: 'いい質問だね！<strong>つり合い</strong>は<strong>同じ物体</strong>にはたらく2力だけど、<strong>作用・反作用</strong>は<strong>別々の物体</strong>にはたらく2力なんだ。これはテストでよく出るポイントだよ！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/physics/action-reaction.png',
      alt: '作用・反作用の法則',
      caption: '2人が押し合うと同じ大きさの力が反対向きにはたらく',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！ロケットが飛ぶのも作用・反作用ですか？ガスを下に<ruby>噴射<rp>(</rp><rt>ふんしゃ</rt><rp>)</rp></ruby>すると、ロケットが上に押し返されるんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">作用・反作用</span> = 同じ大きさ・逆向き・<strong>別々の物体</strong>にはたらく。つり合いは<strong>同じ物体</strong>にはたらく！',
    },
    {
      type: 'quiz',
      question: '作用・反作用の法則とつり合いの違いとして正しいのはどれ？',
      options: [
        { letter: 'A', text: '作用・反作用は大きさが異なる', correct: false },
        { letter: 'B', text: 'つり合いは別々の物体にはたらく', correct: false },
        { letter: 'C', text: '作用・反作用は別々の物体にはたらく', correct: true },
        { letter: 'D', text: 'どちらも同じ物体にはたらく', correct: false },
      ],
      explanation:
        '<strong>正解はC「作用・反作用は別々の物体にはたらく」</strong>です。つり合いは同じ物体にはたらく2力、作用・反作用は別々の物体にはたらく2力です。',
    },

    {
      type: 'end',
      points: [
        '<strong><ruby>合力<rp>(</rp><rt>ごうりょく</rt><rp>)</rp></ruby></strong>は<ruby>平行四辺形<rp>(</rp><rt>へいこうしへんけい</rt><rp>)</rp></ruby>の法則で求める。一直線上なら同じ向き=和、逆向き=差。<strong><ruby>分力<rp>(</rp><rt>ぶんりょく</rt><rp>)</rp></ruby></strong>は1つの力を2つに分解',
        '<strong><ruby>慣性<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の法則</strong>：合力0なら<ruby>静止<rp>(</rp><rt>せいし</rt><rp>)</rp></ruby>し続ける or <ruby>等速直線運動<rp>(</rp><rt>とうそくちょくせんうんどう</rt><rp>)</rp></ruby>を続ける。電車のブレーキ・だるま落としが代表例',
        '<strong>作用・反作用</strong>：同じ大きさ・逆向き・<strong>別々の物体</strong>にはたらく（つり合いは同じ物体）',
      ],
    },
  ],
};

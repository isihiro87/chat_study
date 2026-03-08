import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const stateChangeChat: HistoryChat = {
  id: 'sci1-state-change',
  icon: '🌡️',
  title: '物質の姿と状態変化',
  subtitle: '〜中1化学〜 状態変化・体積と質量の変化・沸点と融点・蒸留',
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
      text: '<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>は<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>によって<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>・<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>・<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>と<ruby>姿<rp>(</rp><rt>すがた</rt><rp>)</rp></ruby>を<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>えます。この<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '水を<ruby>例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby>に考えてみよう。<ruby>氷<rp>(</rp><rt>こおり</rt><rp>)</rp></ruby>（<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>）→ 水（<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>）→ <ruby>水蒸気<rp>(</rp><rt>すいじょうき</rt><rp>)</rp></ruby>（<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>）。<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>から<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>への<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>融解<rp>(</rp><rt>ゆうかい</rt><rp>)</rp></ruby></span></strong>、<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>から<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>への<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>蒸発<rp>(</rp><rt>じょうはつ</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>はどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>から<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>凝固<rp>(</rp><rt>ぎょうこ</rt><rp>)</rp></ruby></span></strong>、<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>から<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>凝縮<rp>(</rp><rt>ぎょうしゅく</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>大事<rp>(</rp><rt>だいじ</rt><rp>)</rp></ruby>なのは、<ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby>しても<strong><ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>そのものは<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わらない</strong>こと。<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の<ruby>動<rp>(</rp><rt>うご</rt><rp>)</rp></ruby>き<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>が<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わるだけなんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade1/chemistry/state-change.svg',
      alt: '物質の三態変化',
      caption: '固体・液体・気体の状態変化と粒子のようす',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">状態変化</span>：融解（固→液）・蒸発（液→気）・凝固（液→固）・凝縮（気→液）。物質は変わらない',
    },
    {
      type: 'date',
      text: '<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>と<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>の<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby>したとき、<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>と<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>はどう<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わるのでしょうか。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby>すると<strong><ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>は<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わる</strong>けど、<strong><ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わらない</strong>んだ。<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の<ruby>間隔<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby>が<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>がったり<ruby>縮<rp>(</rp><rt>ちぢ</rt><rp>)</rp></ruby>んだりするから<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>が<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わるけど、<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の<ruby>数<rp>(</rp><rt>かず</rt><rp>)</rp></ruby>は<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わらないから<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は<ruby>一定<rp>(</rp><rt>いってい</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>氷<rp>(</rp><rt>こおり</rt><rp>)</rp></ruby>は水に<ruby>浮<rp>(</rp><rt>う</rt><rp>)</rp></ruby>きますよね？それはなぜですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>！<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>は<strong><ruby>例外<rp>(</rp><rt>れいがい</rt><rp>)</rp></ruby></strong>なんだ。ふつうの<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>は<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>のほうが<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>が<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さいけど、<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>は<ruby>凍<rp>(</rp><rt>こお</rt><rp>)</rp></ruby>ると<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>が<strong><ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きくなる</strong>んだ。だから<ruby>氷<rp>(</rp><rt>こおり</rt><rp>)</rp></ruby>は<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>が<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さくなって水に<ruby>浮<rp>(</rp><rt>う</rt><rp>)</rp></ruby>くんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '水って<ruby>特別<rp>(</rp><rt>とくべつ</rt><rp>)</rp></ruby>な<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>なんですね！',
    },
    {
      type: 'quiz',
      question: '状態変化について正しいものはどれ？',
      options: [
        { letter: 'A', text: '質量が変化する', correct: false },
        { letter: 'B', text: '体積が変化する', correct: true },
        { letter: 'C', text: '物質の種類が変わる', correct: false },
        { letter: 'D', text: '粒子の数が変わる', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>が<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>する」</strong>です。<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の<ruby>間隔<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby>が<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わるため<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>は<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>しますが、<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の<ruby>数<rp>(</rp><rt>かず</rt><rp>)</rp></ruby>は<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わらないので<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は<ruby>一定<rp>(</rp><rt>いってい</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'date',
      text: '<ruby>沸点<rp>(</rp><rt>ふってん</rt><rp>)</rp></ruby>・<ruby>融点<rp>(</rp><rt>ゆうてん</rt><rp>)</rp></ruby>と<ruby>蒸留<rp>(</rp><rt>じょうりゅう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby>する<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>は<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>ごとに<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まっています。これを<ruby>利用<rp>(</rp><rt>りよう</rt><rp>)</rp></ruby>した<ruby>分離方法<rp>(</rp><rt>ぶんりほうほう</rt><rp>)</rp></ruby>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>が<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>に<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わる<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>沸点<rp>(</rp><rt>ふってん</rt><rp>)</rp></ruby></span></strong>、<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>が<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>に<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わる<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>融点<rp>(</rp><rt>ゆうてん</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>純粋<rp>(</rp><rt>じゅんすい</rt><rp>)</rp></ruby>な<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>は<ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby>の<ruby>間<rp>(</rp><rt>あいだ</rt><rp>)</rp></ruby>、<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>が<strong><ruby>一定<rp>(</rp><rt>いってい</rt><rp>)</rp></ruby></strong>になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>沸点<rp>(</rp><rt>ふってん</rt><rp>)</rp></ruby>のちがいを<ruby>利用<rp>(</rp><rt>りよう</rt><rp>)</rp></ruby>すると何ができるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>蒸留<rp>(</rp><rt>じょうりゅう</rt><rp>)</rp></ruby></span></strong>ができるよ！たとえば<ruby>赤<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>ワインを<ruby>加熱<rp>(</rp><rt>かねつ</rt><rp>)</rp></ruby>すると、<ruby>沸点<rp>(</rp><rt>ふってん</rt><rp>)</rp></ruby>の<ruby>低<rp>(</rp><rt>ひく</rt><rp>)</rp></ruby>いエタノール（約78℃）が先に<ruby>蒸発<rp>(</rp><rt>じょうはつ</rt><rp>)</rp></ruby>して、<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>やして<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>に<ruby>戻<rp>(</rp><rt>もど</rt><rp>)</rp></ruby>せばエタノールを<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り出せるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>沸点<rp>(</rp><rt>ふってん</rt><rp>)</rp></ruby>のちがいで<ruby>分<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>けられるんですね！',
    },
    {
      type: 'image',
      src: '/images/science/grade1/chemistry/distillation-apparatus.png',
      alt: '蒸留の実験装置',
      caption: '赤ワインからエタノールを蒸留で取り出す装置',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そう！<ruby>混合物<rp>(</rp><rt>こんごうぶつ</rt><rp>)</rp></ruby>を<ruby>分<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>ける<ruby>方法<rp>(</rp><rt>ほうほう</rt><rp>)</rp></ruby>として、<ruby>蒸留<rp>(</rp><rt>じょうりゅう</rt><rp>)</rp></ruby>（<ruby>沸点<rp>(</rp><rt>ふってん</rt><rp>)</rp></ruby>のちがい）と<ruby>再結晶<rp>(</rp><rt>さいけっしょう</rt><rp>)</rp></ruby>（<ruby>溶解度<rp>(</rp><rt>ようかいど</rt><rp>)</rp></ruby>のちがい）を<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えておこう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby>の<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby>がつかめました！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">沸点</span>（液→気の温度）・<span class="keyword">融点</span>（固→液の温度）は物質ごとに固有。<span class="keyword">蒸留</span>＝沸点の違いで混合物を分離',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>状態変化<rp>(</rp><rt>じょうたいへんか</rt><rp>)</rp></ruby></strong>：<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>で<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>・<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>・<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>に<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>。<ruby>融解<rp>(</rp><rt>ゆうかい</rt><rp>)</rp></ruby>・<ruby>凝固<rp>(</rp><rt>ぎょうこ</rt><rp>)</rp></ruby>・<ruby>蒸発<rp>(</rp><rt>じょうはつ</rt><rp>)</rp></ruby>・<ruby>凝縮<rp>(</rp><rt>ぎょうしゅく</rt><rp>)</rp></ruby>',
        '<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>は<ruby>変化<rp>(</rp><rt>へんか</rt><rp>)</rp></ruby>するが<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>は<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わらない。<strong>水は<ruby>例外<rp>(</rp><rt>れいがい</rt><rp>)</rp></ruby></strong>：<ruby>凍<rp>(</rp><rt>こお</rt><rp>)</rp></ruby>ると<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>が<ruby>増<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>える',
        '<strong><ruby>沸点<rp>(</rp><rt>ふってん</rt><rp>)</rp></ruby></strong>＝<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>→<ruby>気体<rp>(</rp><rt>きたい</rt><rp>)</rp></ruby>の<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>。<strong><ruby>融点<rp>(</rp><rt>ゆうてん</rt><rp>)</rp></ruby></strong>＝<ruby>固体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>→<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>の<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>。<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>ごとに<ruby>固有<rp>(</rp><rt>こゆう</rt><rp>)</rp></ruby>',
        '<strong><ruby>蒸留<rp>(</rp><rt>じょうりゅう</rt><rp>)</rp></ruby></strong>＝<ruby>沸点<rp>(</rp><rt>ふってん</rt><rp>)</rp></ruby>の<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いで<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>の<ruby>混合物<rp>(</rp><rt>こんごうぶつ</rt><rp>)</rp></ruby>を<ruby>分離<rp>(</rp><rt>ぶんり</rt><rp>)</rp></ruby>する<ruby>方法<rp>(</rp><rt>ほうほう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};

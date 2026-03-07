import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const staticElectricityChat: HistoryChat = {
  id: 'sci2-static-electricity',
  icon: '⚡',
  title: '静電気と電流の正体',
  subtitle: '〜中2物理〜 帯電・放電・陰極線・電子',
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
      text: '<ruby>静電気<rp>(</rp><rt>せいでんき</rt><rp>)</rp></ruby>と<ruby>帯電<rp>(</rp><rt>たいでん</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>どうしをこすり合わせると、電気が生じます。この電気の正体を<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べてみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ストローを<ruby>布<rp>(</rp><rt>ぬの</rt><rp>)</rp></ruby>でこすると、<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さな<ruby>紙<rp>(</rp><rt>かみ</rt><rp>)</rp></ruby>きれを引きつけるよね。これは<strong><span class="keyword"><ruby>静電気<rp>(</rp><rt>せいでんき</rt><rp>)</rp></ruby></span></strong>のしわざなんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '静電気ってどうやって起きるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>をこすり合わせると、一方から他方へ<strong><span class="keyword"><ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby></span></strong>が移動するんだ。<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>を<ruby>受<rp>(</rp><rt>う</rt><rp>)</rp></ruby>け<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>った方は<strong>−の電気</strong>を帯び、<ruby>失<rp>(</rp><rt>うしな</rt><rp>)</rp></ruby>った方は<strong>＋の電気</strong>を帯びる。これを<strong><span class="keyword"><ruby>帯電<rp>(</rp><rt>たいでん</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '＋と−の2<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>の電気があるんですね。くっついたり<ruby>離<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>れたりするのは何か<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>だね！<strong><ruby>同<rp>(</rp><rt>おな</rt><rp>)</rp></ruby>じ<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>の電気どうし</strong>は<ruby>退<rp>(</rp><rt>しりぞ</rt><rp>)</rp></ruby>け合い（<ruby>反発<rp>(</rp><rt>はんぱつ</rt><rp>)</rp></ruby>）、<strong><ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>の電気どうし</strong>は引き合うんだ。<ruby>磁石<rp>(</rp><rt>じしゃく</rt><rp>)</rp></ruby>のN<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>どうし・S<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>どうしに<ruby>似<rp>(</rp><rt>に</rt><rp>)</rp></ruby>ているね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">静電気</span>：異なる物質をこすり合わせ→<span class="keyword">電子</span>が移動→<span class="keyword">帯電</span>。＋と−の2種類があり、同種は反発、異種は引き合う',
    },
    {
      type: 'quiz',
      question: 'ストローを布でこすったとき、ストローが−に帯電した。このとき起きたことは？',
      options: [
        { letter: 'A', text: 'ストローから布へ電子が移動した', correct: false },
        { letter: 'B', text: '布からストローへ電子が移動した', correct: true },
        { letter: 'C', text: 'ストローの中で＋の電気が発生した', correct: false },
        { letter: 'D', text: '布の中で−の電気が消滅した', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>布<rp>(</rp><rt>ぬの</rt><rp>)</rp></ruby>からストローへ<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>が<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>した」</strong>です。ストローが−に<ruby>帯電<rp>(</rp><rt>たいでん</rt><rp>)</rp></ruby>したのは、<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>（−の電気をもつ<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>）を<ruby>受<rp>(</rp><rt>う</rt><rp>)</rp></ruby>け<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>ったからです。',
    },
    {
      type: 'date',
      text: '<ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby>と<ruby>真空放電<rp>(</rp><rt>しんくうほうでん</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: 'たまった電気がいっきに流れる<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby></span></strong>といいます。空気中や<ruby>真空<rp>(</rp><rt>しんくう</rt><rp>)</rp></ruby>に近い空間でも放電は起こります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>雷<rp>(</rp><rt>かみなり</rt><rp>)</rp></ruby>を見たことがあるかな？あれは<ruby>雲<rp>(</rp><rt>くも</rt><rp>)</rp></ruby>にたまった<ruby>静電気<rp>(</rp><rt>せいでんき</rt><rp>)</rp></ruby>が空気中を一気に流れる<strong><span class="keyword"><ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby></span></strong>なんだ。ふだん空気は電気を通さないけど、ものすごく大きな電気がたまると<ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby>が起きるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>雷<rp>(</rp><rt>かみなり</rt><rp>)</rp></ruby>も静電気の一種なんですか！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうだよ。さらに、ガラス管の中の<ruby>気圧<rp>(</rp><rt>きあつ</rt><rp>)</rp></ruby>をどんどん<ruby>低<rp>(</rp><rt>ひく</rt><rp>)</rp></ruby>くしていくと、ある<ruby>段階<rp>(</rp><rt>だんかい</rt><rp>)</rp></ruby>で電流が流れるようになる。これを<strong><span class="keyword"><ruby>真空放電<rp>(</rp><rt>しんくうほうでん</rt><rp>)</rp></ruby></span></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>真空<rp>(</rp><rt>しんくう</rt><rp>)</rp></ruby>に近い状態でも電気が流れるんですね。<ruby>蛍光灯<rp>(</rp><rt>けいこうとう</rt><rp>)</rp></ruby>やネオンサインも同じ<ruby>仕組<rp>(</rp><rt>しく</rt><rp>)</rp></ruby>みですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！<ruby>蛍光灯<rp>(</rp><rt>けいこうとう</rt><rp>)</rp></ruby>もネオンサインも<ruby>真空放電<rp>(</rp><rt>しんくうほうでん</rt><rp>)</rp></ruby>の<ruby>応用<rp>(</rp><rt>おうよう</rt><rp>)</rp></ruby>なんだよ。<ruby>身近<rp>(</rp><rt>みぢか</rt><rp>)</rp></ruby>なところに使われているね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">放電</span>：たまった電気が空間を移動する現象（雷など）。<span class="keyword">真空放電</span>：気圧を低くした空間で電流が流れる現象（蛍光灯・ネオンサインに応用）',
    },
    {
      type: 'quiz',
      question: '雷はどのような現象か、正しいものを選べ。',
      options: [
        { letter: 'A', text: '雲の中で電子が消滅する現象', correct: false },
        { letter: 'B', text: '雲にたまった静電気が空気中を放電する現象', correct: true },
        { letter: 'C', text: '真空放電の一種', correct: false },
        { letter: 'D', text: '地面から雲へ電流が流れる現象', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>雲<rp>(</rp><rt>くも</rt><rp>)</rp></ruby>にたまった<ruby>静電気<rp>(</rp><rt>せいでんき</rt><rp>)</rp></ruby>が空気中を<ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby>する<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>」</strong>です。空気はふつう電気を通しませんが、大量の電気がたまると<ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby>が起こります。',
    },
    {
      type: 'date',
      text: '<ruby>陰極線<rp>(</rp><rt>いんきょくせん</rt><rp>)</rp></ruby>と<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>、電流の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>真空放電<rp>(</rp><rt>しんくうほうでん</rt><rp>)</rp></ruby>の<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>をさらに<ruby>詳<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>しく<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べると、電流の正体が見えてきます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword">クルックス<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby></span></strong>という<ruby>装置<rp>(</rp><rt>そうち</rt><rp>)</rp></ruby>で<ruby>真空放電<rp>(</rp><rt>しんくうほうでん</rt><rp>)</rp></ruby>をすると、−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>から＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>の方向へ何かが飛んでいるのが<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>できるんだ。この流れを<strong><span class="keyword"><ruby>陰極線<rp>(</rp><rt>いんきょくせん</rt><rp>)</rp></ruby></span></strong>（<ruby>電子線<rp>(</rp><rt>でんしせん</rt><rp>)</rp></ruby>）というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>から飛んでいる「何か」って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'それが<strong><span class="keyword"><ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby></span></strong>だよ！−の電気をもった<ruby>非常<rp>(</rp><rt>ひじょう</rt><rp>)</rp></ruby>に小さな<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>なんだ。<ruby>陰極線<rp>(</rp><rt>いんきょくせん</rt><rp>)</rp></ruby>は<ruby>磁石<rp>(</rp><rt>じしゃく</rt><rp>)</rp></ruby>で曲がったり、<ruby>蛍光板<rp>(</rp><rt>けいこうばん</rt><rp>)</rp></ruby>を光らせたりする<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>があるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあ<ruby>導線<rp>(</rp><rt>どうせん</rt><rp>)</rp></ruby>の中を流れる電流も<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>が動いているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そのとおり！<ruby>導線<rp>(</rp><rt>どうせん</rt><rp>)</rp></ruby>の中では<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>が<strong>−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>から＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>へ</strong>移動しているんだ。これが<strong>電流の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby></strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'あれ？でも電流の向きは＋から−じゃなかったですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いいところに気づいたね！<ruby>歴史的<rp>(</rp><rt>れきしてき</rt><rp>)</rp></ruby>に<strong>電流の向き</strong>は「＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>」と<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>められたんだけど、あとから<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>の動きが分かって、<strong><ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>の流れる向き</strong>は<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>（−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>）だと分かったんだ。ここはテストに出やすいから<ruby>要注意<rp>(</rp><rt>ようちゅうい</rt><rp>)</rp></ruby>だよ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">陰極線</span>（電子線）：クルックス管で−極から＋極へ飛ぶ<span class="keyword">電子</span>の流れ。導線中も電子が−極→＋極へ移動＝電流の正体。ただし<strong>電流の向き</strong>は歴史的に＋→−と定義されている',
    },
    {
      type: 'quiz',
      question: '電流の向きと電子の流れる向きについて正しいものはどれ？',
      options: [
        { letter: 'A', text: '電流も電子も＋極から−極へ流れる', correct: false },
        { letter: 'B', text: '電流も電子も−極から＋極へ流れる', correct: false },
        { letter: 'C', text: '電流は＋極から−極、電子は−極から＋極へ流れる', correct: true },
        { letter: 'D', text: '電流は−極から＋極、電子は＋極から−極へ流れる', correct: false },
      ],
      explanation:
        '<strong>正解はC</strong>です。<ruby>歴史的<rp>(</rp><rt>れきしてき</rt><rp>)</rp></ruby>に電流の向きは＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>と<ruby>定義<rp>(</rp><rt>ていぎ</rt><rp>)</rp></ruby>されましたが、実際の<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>は−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>へ流れています。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>静電気<rp>(</rp><rt>せいでんき</rt><rp>)</rp></ruby></strong>：<ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>をこすり合わせ→<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>が<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>→<ruby>帯電<rp>(</rp><rt>たいでん</rt><rp>)</rp></ruby>。同種は<ruby>反発<rp>(</rp><rt>はんぱつ</rt><rp>)</rp></ruby>、<ruby>異種<rp>(</rp><rt>いしゅ</rt><rp>)</rp></ruby>は引き合う',
        '<strong><ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby></strong>：たまった電気が空間を<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>する<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>（<ruby>雷<rp>(</rp><rt>かみなり</rt><rp>)</rp></ruby>など）。<strong><ruby>真空放電<rp>(</rp><rt>しんくうほうでん</rt><rp>)</rp></ruby></strong>：<ruby>気圧<rp>(</rp><rt>きあつ</rt><rp>)</rp></ruby>を<ruby>低<rp>(</rp><rt>ひく</rt><rp>)</rp></ruby>くした空間での<ruby>放電<rp>(</rp><rt>ほうでん</rt><rp>)</rp></ruby>',
        '<strong><ruby>陰極線<rp>(</rp><rt>いんきょくせん</rt><rp>)</rp></ruby></strong>：クルックス<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>で−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>から飛ぶ<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>の流れ。電流の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>＝<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>の<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>',
        '<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>は−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>へ流れるが、<strong>電流の向き</strong>は<ruby>歴史的<rp>(</rp><rt>れきしてき</rt><rp>)</rp></ruby>に＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>と<ruby>定義<rp>(</rp><rt>ていぎ</rt><rp>)</rp></ruby>されている',
      ],
    },
  ],
};

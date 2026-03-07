import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const growthReproductionChat: HistoryChat = {
  id: 'sci3-growth-reproduction',
  icon: '🌱',
  title: '生物の成長と生殖',
  subtitle: '細胞分裂・無性生殖・有性生殖',
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
      type: 'narrator',
      text: '生物の体は<strong><span class="keyword"><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby></span></strong>からできています。生物が成長するとき、体の中ではどんなことが起きているのでしょうか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '生物が大きくなるには、まず<strong><span class="keyword"><span data-tooltip="体の細胞がふえるときに行われる細胞分裂。染色体数は変わらない"><ruby>体細胞分裂<rp>(</rp><rt>たいさいぼうぶんれつ</rt><rp>)</rp></ruby></span></span></strong>で細胞の数を増やすんだ。そのあと、それぞれの細胞が大きくなることで<ruby>成長<rp>(</rp><rt>せいちょう</rt><rp>)</rp></ruby>するよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '分裂するとき、<ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby>はどうなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '分裂の前に<strong><ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby></strong>が<ruby>複製<rp>(</rp><rt>ふくせい</rt><rp>)</rp></ruby>されるんだ。だから分裂後の2つの細胞は、もとの細胞と<strong>同じ数の染色体</strong>をもつよ。分裂のとき、ひも状の染色体が現れて<ruby>均等<rp>(</rp><rt>きんとう</rt><rp>)</rp></ruby>に分かれるんだ',
    },
    {
      type: 'image',
      src: '/images/science/cell-division.svg',
      alt: '体細胞分裂のようす',
      caption: '染色体が複製され、均等に分かれて2つの細胞になる',
    },
    {
      type: 'summary-point',
      text: '成長 = <span class="keyword">体細胞分裂</span>（数を増やす）+ 細胞が大きくなる。染色体数は変わらない！',
    },
    {
      type: 'narrator',
      text: '生物のふえ方には、<ruby>受精<rp>(</rp><rt>じゅせい</rt><rp>)</rp></ruby>を行わない<strong><span class="keyword"><ruby>無性生殖<rp>(</rp><rt>むせいせいしょく</rt><rp>)</rp></ruby></span></strong>と、受精を行う<strong><span class="keyword"><ruby>有性生殖<rp>(</rp><rt>ゆうせいせいしょく</rt><rp>)</rp></ruby></span></strong>の2種類があります。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '受精しなくてもふえられるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そうなんだ！アメーバは体が2つに<ruby>分裂<rp>(</rp><rt>ぶんれつ</rt><rp>)</rp></ruby>してふえるし、ジャガイモはいもから新しい個体がふえる<strong><ruby>栄養生殖<rp>(</rp><rt>えいようせいしょく</rt><rp>)</rp></ruby></strong>をするよ。でも<strong>無性生殖</strong>では親と<strong>全く同じ形質</strong>の子しかできないんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '一方、<strong>有性生殖</strong>では<strong><ruby>卵<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></strong>（<ruby>卵細胞<rp>(</rp><rt>らんさいぼう</rt><rp>)</rp></ruby>）と<strong><ruby>精子<rp>(</rp><rt>せいし</rt><rp>)</rp></ruby></strong>（<ruby>精細胞<rp>(</rp><rt>せいさいぼう</rt><rp>)</rp></ruby>）という<strong><span class="keyword"><ruby>生殖細胞<rp>(</rp><rt>せいしょくさいぼう</rt><rp>)</rp></ruby></span></strong>が受精して、多様な形質の子が生まれるよ',
    },
    {
      type: 'image',
      src: '/images/science/reproduction-types.svg',
      alt: '無性生殖と有性生殖の比較',
      caption: '無性生殖（親と同じ）と有性生殖（多様な子）',
    },
    {
      type: 'quiz',
      question: '次のうち、無性生殖にあてはまるものは？',
      options: [
        { letter: 'A', text: 'カエルの卵と精子の受精', correct: false },
        { letter: 'B', text: 'アメーバの分裂', correct: true },
        { letter: 'C', text: 'ヒトの受精卵の発生', correct: false },
        { letter: 'D', text: 'ウニの卵と精子の受精', correct: false },
      ],
      explanation:
        '<strong>正解はB「アメーバの分裂」</strong>です。アメーバの分裂は<ruby>受精<rp>(</rp><rt>じゅせい</rt><rp>)</rp></ruby>を行わない<ruby>無性生殖<rp>(</rp><rt>むせいせいしょく</rt><rp>)</rp></ruby>です。親と全く同じ<ruby>形質<rp>(</rp><rt>けいしつ</rt><rp>)</rp></ruby>の子ができます。',
    },
    {
      type: 'narrator',
      text: '<ruby>生殖細胞<rp>(</rp><rt>せいしょくさいぼう</rt><rp>)</rp></ruby>がつくられるときには、<ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby>の数が半分になる特別な<ruby>細胞分裂<rp>(</rp><rt>さいぼうぶんれつ</rt><rp>)</rp></ruby>が行われます。これを<strong><span class="keyword"><span data-tooltip="生殖細胞をつくるとき、染色体数が半分になる細胞分裂"><ruby>減数分裂<rp>(</rp><rt>げんすうぶんれつ</rt><rp>)</rp></ruby></span></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'どうして染色体を半分にする必要があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もし<ruby>生殖細胞<rp>(</rp><rt>せいしょくさいぼう</rt><rp>)</rp></ruby>の染色体数がそのままだったら、受精のたびに染色体が<strong>倍</strong>になってしまうよね？だから<strong>減数分裂</strong>であらかじめ半分にしておくんだ。受精で半分＋半分＝もとの数に戻るよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！受精卵からどうやって体ができていくんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>受精卵<rp>(</rp><rt>じゅせいらん</rt><rp>)</rp></ruby>が<ruby>体細胞分裂<rp>(</rp><rt>たいさいぼうぶんれつ</rt><rp>)</rp></ruby>をくり返して個体になっていく過程を<strong><span class="keyword"><ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby></span></strong>というよ。発生の<ruby>初期<rp>(</rp><rt>しょき</rt><rp>)</rp></ruby>段階の個体を<strong><span class="keyword"><ruby>胚<rp>(</rp><rt>はい</rt><rp>)</rp></ruby></span></strong>というんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">減数分裂</span>で染色体半分 → 受精でもとに戻る → <span class="keyword">発生</span>（体細胞分裂のくり返し）で個体に！',
    },
    {
      type: 'quiz',
      question: '生殖細胞の染色体数は体細胞と比べてどうなっている？',
      options: [
        { letter: 'A', text: '体細胞と同じ', correct: false },
        { letter: 'B', text: '体細胞の2倍', correct: false },
        { letter: 'C', text: '体細胞の半分', correct: true },
        { letter: 'D', text: '体細胞の4分の1', correct: false },
      ],
      explanation:
        '<strong>正解はC「体細胞の半分」</strong>です。<ruby>減数分裂<rp>(</rp><rt>げんすうぶんれつ</rt><rp>)</rp></ruby>で<ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby>数が半分になり、<ruby>受精<rp>(</rp><rt>じゅせい</rt><rp>)</rp></ruby>で半分＋半分＝もとの数に戻ります。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>体細胞分裂<rp>(</rp><rt>たいさいぼうぶんれつ</rt><rp>)</rp></ruby></strong>で細胞の数を増やし → 細胞が大きくなって<ruby>成長<rp>(</rp><rt>せいちょう</rt><rp>)</rp></ruby>',
        '<strong><ruby>無性生殖<rp>(</rp><rt>むせいせいしょく</rt><rp>)</rp></ruby></strong>＝受精なし（親と同じ形質）、<strong><ruby>有性生殖<rp>(</rp><rt>ゆうせいせいしょく</rt><rp>)</rp></ruby></strong>＝受精あり（多様な形質）',
        '<strong><ruby>減数分裂<rp>(</rp><rt>げんすうぶんれつ</rt><rp>)</rp></ruby></strong>で<ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby>数が半分に → 受精でもとに戻る',
        '<strong><ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby></strong>：受精卵 → 体細胞分裂のくり返し → <strong><ruby>胚<rp>(</rp><rt>はい</rt><rp>)</rp></ruby></strong> → 個体',
      ],
    },
  ],
};

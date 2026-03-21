import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const weatherObservationChat: HistoryChat = {
  id: 'sci2-weather-observation',
  icon: '🌡️',
  title: '気象の観測と圧力',
  subtitle: '〜中2地学〜 天気の記号・乾湿計・圧力の計算',
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
      text: '<ruby>気象観測<rp>(</rp><rt>きしょうかんそく</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '天気を正しく知るために、さまざまな<ruby>気象<rp>(</rp><rt>きしょう</rt><rp>)</rp></ruby><ruby>要素<rp>(</rp><rt>ようそ</rt><rp>)</rp></ruby>を<ruby>観測<rp>(</rp><rt>かんそく</rt><rp>)</rp></ruby>する方法を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '気象観測では、<strong>天気</strong>・<strong><ruby>雲量<rp>(</rp><rt>うんりょう</rt><rp>)</rp></ruby></strong>・<strong>気温</strong>・<strong><ruby>湿度<rp>(</rp><rt>しつど</rt><rp>)</rp></ruby></strong>・<strong>気圧</strong>・<strong><ruby>風向<rp>(</rp><rt>ふうこう</rt><rp>)</rp></ruby></strong>・<strong><ruby>風力<rp>(</rp><rt>ふうりょく</rt><rp>)</rp></ruby></strong>を<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '天気ってどうやって決めるんですか？ 「晴れ」とか「くもり」って<ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby>で決めているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いい質問だね！実は<strong><span class="keyword"><ruby>雲量<rp>(</rp><rt>うんりょう</rt><rp>)</rp></ruby></span></strong>で決まるんだ。空全体を<strong>10</strong>としたとき、雲が<ruby>占<rp>(</rp><rt>し</rt><rp>)</rp></ruby>める<ruby>割合<rp>(</rp><rt>わりあい</rt><rp>)</rp></ruby>が<strong>0〜1で<ruby>快晴<rp>(</rp><rt>かいせい</rt><rp>)</rp></ruby></strong>、<strong>2〜8で晴れ</strong>、<strong>9〜10でくもり</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '雲量8でもまだ「晴れ」なんですか！ けっこう雲があっても晴れなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうだね。天気は<strong><ruby>天気図記号<rp>(</rp><rt>てんきずきごう</rt><rp>)</rp></ruby></strong>で表すよ。風向は<ruby>矢羽根<rp>(</rp><rt>やばね</rt><rp>)</rp></ruby>の向き、風力は<ruby>矢羽根<rp>(</rp><rt>やばね</rt><rp>)</rp></ruby>の数で表すんだ。また、気温と<ruby>湿度<rp>(</rp><rt>しつど</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>乾湿計<rp>(</rp><rt>かんしつけい</rt><rp>)</rp></ruby></span></strong>で<ruby>測定<rp>(</rp><rt>そくてい</rt><rp>)</rp></ruby>するよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>乾湿計<rp>(</rp><rt>かんしつけい</rt><rp>)</rp></ruby>ってどういう仕組みですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>乾球<rp>(</rp><rt>かんきゅう</rt><rp>)</rp></ruby>と<ruby>湿球<rp>(</rp><rt>しっきゅう</rt><rp>)</rp></ruby>の2本の<ruby>温度計<rp>(</rp><rt>おんどけい</rt><rp>)</rp></ruby>があって、<ruby>湿球<rp>(</rp><rt>しっきゅう</rt><rp>)</rp></ruby>は<ruby>濡<rp>(</rp><rt>ぬ</rt><rp>)</rp></ruby>れたガーゼを巻いてあるんだ。水が<ruby>蒸発<rp>(</rp><rt>じょうはつ</rt><rp>)</rp></ruby>するとき熱を<ruby>奪<rp>(</rp><rt>うば</rt><rp>)</rp></ruby>うから、<ruby>湿球<rp>(</rp><rt>しっきゅう</rt><rp>)</rp></ruby>の温度は<ruby>乾球<rp>(</rp><rt>かんきゅう</rt><rp>)</rp></ruby>より低くなる。この<strong>差</strong>と<ruby>湿度表<rp>(</rp><rt>しつどひょう</rt><rp>)</rp></ruby>から<ruby>湿度<rp>(</rp><rt>しつど</rt><rp>)</rp></ruby>がわかるよ',
    },
    {
      type: 'summary-point',
      text: '天気は<span class="keyword">雲量</span>で決まる（0-1 快晴 / 2-8 晴れ / 9-10 くもり）。<span class="keyword">乾湿計</span>で気温・湿度を測定！',
    },
    {
      type: 'quiz',
      question: '雲量が7のとき、天気は何か。',
      options: [
        { letter: 'A', text: '快晴', correct: false },
        { letter: 'B', text: '雨', correct: false },
        { letter: 'C', text: 'くもり', correct: false },
        { letter: 'D', text: '晴れ', correct: true },
      ],
      explanation:
        '<strong>正解はD「晴れ」</strong>です。<ruby>雲量<rp>(</rp><rt>うんりょう</rt><rp>)</rp></ruby>が2〜8のときは「晴れ」、0〜1で「<ruby>快晴<rp>(</rp><rt>かいせい</rt><rp>)</rp></ruby>」、9〜10で「くもり」です。',
    },
    {
      type: 'date',
      text: '<ruby>圧力<rp>(</rp><rt>あつりょく</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '気圧を理解するために、まず<strong><span class="keyword"><ruby>圧力<rp>(</rp><rt>あつりょく</rt><rp>)</rp></ruby></span></strong>とは何かを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>圧力<rp>(</rp><rt>あつりょく</rt><rp>)</rp></ruby></span></strong>とは、面を<ruby>垂直<rp>(</rp><rt>すいちょく</rt><rp>)</rp></ruby>におす<strong>単位面積あたりの力</strong>のことだよ。単位は<strong><span class="keyword">Pa（パスカル）</span></strong>を使うんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どうやって計算するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '公式はこれだよ！<br/><br/><strong>圧力〔Pa〕＝ 力〔N〕÷ 面積〔m²〕</strong><br/><br/>たとえば、20Nの力を0.1m²の面に加えると、20÷0.1＝<strong>200Pa</strong>になるね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあ同じ力でも、面積が小さいほど圧力は大きくなるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！ハイヒールで足を<ruby>踏<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>まれると痛いのも、<ruby>接地<rp>(</rp><rt>せっち</rt><rp>)</rp></ruby>面積が小さくて圧力が大きくなるからだよ。<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>に、スキー板は面積が大きいから雪に<ruby>沈<rp>(</rp><rt>しず</rt><rp>)</rp></ruby>みにくいんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">圧力</span>＝力÷面積（単位：<span class="keyword">Pa</span>）。面積が小さい → 圧力が大きい！',
    },
    {
      type: 'quiz',
      question: '60Nの力を0.2m²の面に加えたときの圧力は何Paか。',
      options: [
        { letter: 'A', text: '12Pa', correct: false },
        { letter: 'B', text: '120Pa', correct: false },
        { letter: 'C', text: '300Pa', correct: true },
        { letter: 'D', text: '3000Pa', correct: false },
      ],
      explanation:
        '<strong>正解はC「300Pa」</strong>です。<ruby>圧力<rp>(</rp><rt>あつりょく</rt><rp>)</rp></ruby>＝力÷面積＝60÷0.2＝300Paです。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>気象観測<rp>(</rp><rt>きしょうかんそく</rt><rp>)</rp></ruby></strong>：天気・<ruby>雲量<rp>(</rp><rt>うんりょう</rt><rp>)</rp></ruby>・気温・<ruby>湿度<rp>(</rp><rt>しつど</rt><rp>)</rp></ruby>・気圧・<ruby>風向<rp>(</rp><rt>ふうこう</rt><rp>)</rp></ruby>・<ruby>風力<rp>(</rp><rt>ふうりょく</rt><rp>)</rp></ruby>を観測する。天気は<strong><ruby>雲量<rp>(</rp><rt>うんりょう</rt><rp>)</rp></ruby></strong>で決まる（0-1 快晴 / 2-8 晴れ / 9-10 くもり）',
        '<strong><ruby>乾湿計<rp>(</rp><rt>かんしつけい</rt><rp>)</rp></ruby></strong>：乾球と湿球の2本の温度計で気温と湿度を測定する。湿球は水の蒸発で温度が下がる',
        '<strong><ruby>圧力<rp>(</rp><rt>あつりょく</rt><rp>)</rp></ruby></strong>＝力÷面積。単位は<strong>Pa（パスカル）</strong>。面積が小さいほど圧力は大きい',
      ],
    },
  ],
};

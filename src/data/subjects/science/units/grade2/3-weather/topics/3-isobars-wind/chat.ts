import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const isobarsWindChat: HistoryChat = {
  id: 'sci2-isobars-wind',
  icon: '💨',
  title: '等圧線と風',
  subtitle: '〜中2地学〜 等圧線・高気圧と低気圧・風の吹き方',
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
      text: '<ruby>等圧線<rp>(</rp><rt>とうあつせん</rt><rp>)</rp></ruby>と風',
    },
    {
      type: 'narrator',
      text: '<ruby>天気図<rp>(</rp><rt>てんきず</rt><rp>)</rp></ruby>に<ruby>描<rp>(</rp><rt>えが</rt><rp>)</rp></ruby>かれる線や、風が<ruby>吹<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>く仕組みを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>天気図<rp>(</rp><rt>てんきず</rt><rp>)</rp></ruby>で<ruby>気圧<rp>(</rp><rt>きあつ</rt><rp>)</rp></ruby>の等しい地点を<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>んだ線を<strong><span class="keyword"><ruby>等圧線<rp>(</rp><rt>とうあつせん</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>等高線<rp>(</rp><rt>とうこうせん</rt><rp>)</rp></ruby>の気圧バージョンだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '等圧線を見ると何がわかるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '空気は<strong><ruby>気圧<rp>(</rp><rt>きあつ</rt><rp>)</rp></ruby>の高いところから低いところへ</strong>移動するんだ。この空気の流れが<strong><span class="keyword">風</span></strong>だよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあ等圧線のようすで風の強さもわかるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'するどいね！ 等圧線の<strong><ruby>間隔<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby>がせまい</strong>ところは気圧の差が大きいから、<strong>風が強い</strong>んだ。<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>に間隔が広いところは風がおだやかだよ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/weather/weather-map-example.png',
      alt: '天気図の実例',
      caption: '春の典型的な天気図。高気圧(H)と低気圧(L)、前線が描かれている',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">等圧線</span>＝気圧の等しい点を結んだ線。空気は高気圧→低気圧へ移動＝<span class="keyword">風</span>。等圧線の間隔がせまい → 強風！',
    },
    {
      type: 'quiz',
      question: '等圧線の間隔がせまい場所の風について正しいものはどれか。',
      options: [
        { letter: 'A', text: '風は弱い', correct: false },
        { letter: 'B', text: '風は強い', correct: true },
        { letter: 'C', text: '風は吹かない', correct: false },
        { letter: 'D', text: '風向が一定しない', correct: false },
      ],
      explanation:
        '<strong>正解はB「風は強い」</strong>です。<ruby>等圧線<rp>(</rp><rt>とうあつせん</rt><rp>)</rp></ruby>の<ruby>間隔<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby>がせまいほど気圧の差が大きく、風が強くなります。',
    },
    {
      type: 'date',
      text: '<ruby>高気圧<rp>(</rp><rt>こうきあつ</rt><rp>)</rp></ruby>と<ruby>低気圧<rp>(</rp><rt>ていきあつ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>高気圧<rp>(</rp><rt>こうきあつ</rt><rp>)</rp></ruby>と<ruby>低気圧<rp>(</rp><rt>ていきあつ</rt><rp>)</rp></ruby>では、空気の動きがまったく<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>になります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>高気圧<rp>(</rp><rt>こうきあつ</rt><rp>)</rp></ruby></span></strong>の中心では、上空から空気が<ruby>降<rp>(</rp><rt>お</rt><rp>)</rp></ruby>りてくる<strong><ruby>下降気流<rp>(</rp><rt>かこうきりゅう</rt><rp>)</rp></ruby></strong>が起きているんだ。地上に<ruby>降<rp>(</rp><rt>お</rt><rp>)</rp></ruby>りた空気は、<strong><ruby>時計回<rp>(</rp><rt>とけいまわ</rt><rp>)</rp></ruby>り</strong>にまわりへ<ruby>吹<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>き出していくよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '低気圧はその<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そのとおり！ <strong><span class="keyword"><ruby>低気圧<rp>(</rp><rt>ていきあつ</rt><rp>)</rp></ruby></span></strong>の中心では、まわりから空気が<strong><ruby>反時計回<rp>(</rp><rt>はんとけいまわ</rt><rp>)</rp></ruby>り</strong>に<ruby>吹<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>き<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>んで、中心で<strong><ruby>上昇気流<rp>(</rp><rt>じょうしょうきりゅう</rt><rp>)</rp></ruby></strong>になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '上昇気流ということは、雲ができやすいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'すばらしい！ 低気圧では上昇気流で空気が<ruby>冷<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>やされて雲ができやすく、<strong>天気が<ruby>崩<rp>(</rp><rt>くず</rt><rp>)</rp></ruby>れやすい</strong>。高気圧では下降気流で雲ができにくく、<strong>天気が良い</strong>。これは<ruby>超<rp>(</rp><rt>ちょう</rt><rp>)</rp></ruby>重要ポイントだよ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">高気圧</span>：下降気流・時計回りに吹き出す → 晴れ。<span class="keyword">低気圧</span>：上昇気流・反時計回りに吹き込む → くもり・雨！',
    },
    {
      type: 'quiz',
      question: '低気圧の中心付近で起きている気流はどれか。',
      options: [
        { letter: 'A', text: '下降気流', correct: false },
        { letter: 'B', text: '上昇気流', correct: true },
        { letter: 'C', text: '水平気流', correct: false },
        { letter: 'D', text: '気流は起きない', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>上昇気流<rp>(</rp><rt>じょうしょうきりゅう</rt><rp>)</rp></ruby>」</strong>です。<ruby>低気圧<rp>(</rp><rt>ていきあつ</rt><rp>)</rp></ruby>の中心ではまわりから空気が<ruby>吹<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>き<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>み、<ruby>上昇気流<rp>(</rp><rt>じょうしょうきりゅう</rt><rp>)</rp></ruby>が発生します。そのため雲ができやすく、天気が<ruby>崩<rp>(</rp><rt>くず</rt><rp>)</rp></ruby>れやすくなります。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>等圧線<rp>(</rp><rt>とうあつせん</rt><rp>)</rp></ruby></strong>＝<ruby>気圧<rp>(</rp><rt>きあつ</rt><rp>)</rp></ruby>の等しい点を<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>んだ線。空気は高気圧→低気圧へ流れる＝<strong>風</strong>。<ruby>間隔<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby>がせまい→強風',
        '<strong><ruby>高気圧<rp>(</rp><rt>こうきあつ</rt><rp>)</rp></ruby></strong>：<ruby>下降気流<rp>(</rp><rt>かこうきりゅう</rt><rp>)</rp></ruby>・<ruby>時計回<rp>(</rp><rt>とけいまわ</rt><rp>)</rp></ruby>りに<ruby>吹<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>き出す → 晴れ。<strong><ruby>低気圧<rp>(</rp><rt>ていきあつ</rt><rp>)</rp></ruby></strong>：<ruby>上昇気流<rp>(</rp><rt>じょうしょうきりゅう</rt><rp>)</rp></ruby>・<ruby>反時計回<rp>(</rp><rt>はんとけいまわ</rt><rp>)</rp></ruby>りに<ruby>吹<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>き<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>む → くもり・雨',
      ],
    },
  ],
};

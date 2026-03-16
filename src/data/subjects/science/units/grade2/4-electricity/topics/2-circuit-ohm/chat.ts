import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const circuitOhmChat: HistoryChat = {
  id: 'sci2-circuit-ohm',
  icon: '🔌',
  title: '回路と電流・電圧',
  subtitle: '〜中2物理〜 直列・並列回路の電流と電圧',
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
      text: '<ruby>回路<rp>(</rp><rt>かいろ</rt><rp>)</rp></ruby>の<ruby>基本<rp>(</rp><rt>きほん</rt><rp>)</rp></ruby>と<ruby>測定<rp>(</rp><rt>そくてい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '電気の流れ道である<strong><span class="keyword"><ruby>回路<rp>(</rp><rt>かいろ</rt><rp>)</rp></ruby></span></strong>には<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>と<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>の2種類があります。それぞれの<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '回路を<ruby>図<rp>(</rp><rt>ず</rt><rp>)</rp></ruby>で表すとき、<ruby>電池<rp>(</rp><rt>でんち</rt><rp>)</rp></ruby>や<ruby>豆電球<rp>(</rp><rt>まめでんきゅう</rt><rp>)</rp></ruby>などを<strong><span class="keyword"><ruby>電気用図記号<rp>(</rp><rt>でんきようずきごう</rt><rp>)</rp></ruby></span></strong>で表すよ。これを使って<ruby>描<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いた図を<strong><span class="keyword"><ruby>回路図<rp>(</rp><rt>かいろず</rt><rp>)</rp></ruby></span></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>回路と<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>回路って何が<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>回路</span></strong>は<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>の通り道が<strong>1本</strong>だけ。<strong><span class="keyword"><ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>回路</span></strong>は途中で<strong><ruby>枝分<rp>(</rp><rt>えだわ</rt><rp>)</rp></ruby>かれ</strong>しているよ。クリスマスツリーの<ruby>豆電球<rp>(</rp><rt>まめでんきゅう</rt><rp>)</rp></ruby>が1つ切れると全部消えるのが<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>、<ruby>家<rp>(</rp><rt>いえ</rt><rp>)</rp></ruby>のコンセントのように1つ消しても他は使えるのが<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'image',
      src: '/images/science/grade2/electricity/series-parallel.svg',
      alt: '直列回路と並列回路',
      caption: '直列＝1本道、並列＝枝分かれ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '電流や<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>はどうやって<ruby>測<rp>(</rp><rt>はか</rt><rp>)</rp></ruby>るんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<strong><span class="keyword"><ruby>電流計<rp>(</rp><rt>でんりゅうけい</rt><rp>)</rp></ruby></span></strong>は回路に<strong><ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby></strong>につなぐ。<strong><span class="keyword"><ruby>電圧計<rp>(</rp><rt>でんあつけい</rt><rp>)</rp></ruby></span></strong>は<ruby>測<rp>(</rp><rt>はか</rt><rp>)</rp></ruby>りたい部分に<strong><ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby></strong>につなぐ。どちらも最初は<strong><ruby>最大<rp>(</rp><rt>さいだい</rt><rp>)</rp></ruby>の<ruby>端子<rp>(</rp><rt>たんし</rt><rp>)</rp></ruby></strong>から使って、<ruby>針<rp>(</rp><rt>はり</rt><rp>)</rp></ruby>のふれが小さければ小さい<ruby>端子<rp>(</rp><rt>たんし</rt><rp>)</rp></ruby>に変えるんだ。<ruby>計器<rp>(</rp><rt>けいき</rt><rp>)</rp></ruby>を<ruby>壊<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>さないための大事なルールだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">回路図</span>は電気用図記号で描く。<span class="keyword">直列回路</span>=1本道、<span class="keyword">並列回路</span>=枝分かれ。電流計は<strong>直列</strong>、電圧計は<strong>並列</strong>に接続。最初は最大端子から使う',
    },
    {
      type: 'quiz',
      question: '電圧計の正しいつなぎ方はどれ？',
      options: [
        { letter: 'A', text: '測りたい部分に直列につなぐ', correct: false },
        { letter: 'B', text: '測りたい部分に並列につなぐ', correct: true },
        { letter: 'C', text: '回路の外側に置く', correct: false },
        { letter: 'D', text: '電流計と同じ場所に直列につなぐ', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>測<rp>(</rp><rt>はか</rt><rp>)</rp></ruby>りたい部分に<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>につなぐ」</strong>です。<ruby>電圧計<rp>(</rp><rt>でんあつけい</rt><rp>)</rp></ruby>は<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>に、<ruby>電流計<rp>(</rp><rt>でんりゅうけい</rt><rp>)</rp></ruby>は<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>につなぎます。',
    },
    {
      type: 'date',
      text: '電流・<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>の<ruby>規則性<rp>(</rp><rt>きそくせい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>回路と<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>回路では、電流と<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>のかかり方にそれぞれ<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まった<ruby>規則性<rp>(</rp><rt>きそくせい</rt><rp>)</rp></ruby>があります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<strong><ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>回路</strong>から。電流は道が1本だから、<strong>どこで<ruby>測<rp>(</rp><rt>はか</rt><rp>)</rp></ruby>っても同じ</strong>になるよ。式で書くと <strong>I ＝ I₁ ＝ I₂</strong> だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>はどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>回路の<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>は、各部分の<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>を<strong>足し合わせる</strong>と<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby>の<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>になるよ。つまり <strong>V ＝ V₁ ＋ V₂</strong> だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあ<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>回路はどうですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>回路は<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>と<strong><ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby></strong>のパターンになるよ！<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>は<strong>どこも同じ</strong>（<strong>V ＝ V₁ ＝ V₂</strong>）、電流は<strong>各<ruby>枝<rp>(</rp><rt>えだ</rt><rp>)</rp></ruby>の和が<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby></strong>（<strong>I ＝ I₁ ＋ I₂</strong>）になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>は「電流が同じ・<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>は和」、<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>は「<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>が同じ・電流は和」。<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>になっていて<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えやすいですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">直列回路</span>：電流はどこも同じ（I＝I₁＝I₂）、電圧の和＝全体（V＝V₁＋V₂）。<span class="keyword">並列回路</span>：電流の和＝全体（I＝I₁＋I₂）、電圧はどこも同じ（V＝V₁＝V₂）',
    },
    {
      type: 'quiz',
      question: '並列回路について正しいものはどれ？',
      options: [
        { letter: 'A', text: '電流はどこも同じで、電圧は各部分の和になる', correct: false },
        { letter: 'B', text: '電圧はどこも同じで、電流は各部分の和になる', correct: true },
        { letter: 'C', text: '電流も電圧もどこも同じになる', correct: false },
        { letter: 'D', text: '電流も電圧も各部分の和が全体になる', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>回路では<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>はどこも同じ（V＝V₁＝V₂）で、電流は各<ruby>枝<rp>(</rp><rt>えだ</rt><rp>)</rp></ruby>の和が<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby>（I＝I₁＋I₂）になります。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>回路図<rp>(</rp><rt>かいろず</rt><rp>)</rp></ruby></strong>：<ruby>電気用図記号<rp>(</rp><rt>でんきようずきごう</rt><rp>)</rp></ruby>で<ruby>描<rp>(</rp><rt>か</rt><rp>)</rp></ruby>く。<ruby>電流計<rp>(</rp><rt>でんりゅうけい</rt><rp>)</rp></ruby>は<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>、<ruby>電圧計<rp>(</rp><rt>でんあつけい</rt><rp>)</rp></ruby>は<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>に<ruby>接続<rp>(</rp><rt>せつぞく</rt><rp>)</rp></ruby>',
        '<strong><ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>回路</strong>：電流はどこも同じ（I＝I₁＝I₂）、<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>の和＝<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby>（V＝V₁＋V₂）',
        '<strong><ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>回路</strong>：電流の和＝<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby>（I＝I₁＋I₂）、<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>はどこも同じ（V＝V₁＝V₂）',
      ],
    },
  ],
};

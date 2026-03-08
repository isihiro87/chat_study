import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const evolutionChat: HistoryChat = {
  id: 'sci3-evolution',
  icon: '🦕',
  title: '生物の多様性と進化',
  subtitle: '脊椎動物の進化・化石・相同器官',
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
      text: '地球には多種多様な生物がいます。これらの生物はどのようにして現在の姿になったのでしょうか？<strong><span class="keyword"><ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby></span></strong>の歴史をたどってみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>脊椎動物<rp>(</rp><rt>せきついどうぶつ</rt><rp>)</rp></ruby></span></strong>は長い年月をかけて進化してきたんだ。最初に現れたのは<strong><ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby></strong>で、水の中で生活していたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '魚から<ruby>陸<rp>(</rp><rt>りく</rt><rp>)</rp></ruby>に上がる生物が出てきたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そう！魚類から<strong><ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby></strong>が進化して、水中と<ruby>陸上<rp>(</rp><rt>りくじょう</rt><rp>)</rp></ruby>の両方で生活するようになったんだ。その後<strong><ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby></strong>が現れて完全に陸上生活ができるようになり、さらに<strong><ruby>哺乳類<rp>(</rp><rt>ほにゅうるい</rt><rp>)</rp></ruby></strong>と<strong><ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby></strong>へと進化したんだよ',
    },
    {
      type: 'summary-point',
      text: '脊椎動物の進化：<span class="keyword">魚類</span> → <span class="keyword">両生類</span> → <span class="keyword">ハチュウ類</span> → <span class="keyword">哺乳類・鳥類</span>',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/evolution-tree.svg',
      alt: '脊椎動物の進化の道すじ',
      caption: '魚類 → 両生類 → ハチュウ類 → 哺乳類・鳥類',
    },
    {
      type: 'narrator',
      text: '進化の<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>は<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>として残されています。特に、2つの動物群の<ruby>中間的<rp>(</rp><rt>ちゅうかんてき</rt><rp>)</rp></ruby>な特徴をもつ化石は、進化のつながりを示す重要な<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="魚類の特徴（ひれの痕跡）と両生類の特徴（四肢）をもつ中間的な化石生物">イクチオステガ</span></span></strong>は、<ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby>の特徴である<ruby>ひれの<ruby>痕跡<rp>(</rp><rt>こんせき</rt><rp>)</rp></ruby></ruby>と、<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>の特徴である<strong><ruby>四肢<rp>(</rp><rt>しし</rt><rp>)</rp></ruby></strong>（4本のあし）の両方をもっていたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '魚のひれが<ruby>足<rp>(</rp><rt>あし</rt><rp>)</rp></ruby>に変わっていく途中みたいですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい表現だね！もう一つ、<strong><span class="keyword"><span data-tooltip="鳥類の特徴（羽毛）とハチュウ類の特徴（歯・つめ・長い尾）をもつ中間的な化石生物"><ruby>始祖鳥<rp>(</rp><rt>しそちょう</rt><rp>)</rp></ruby></span></span></strong>も有名だよ。<ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>の特徴である<strong><ruby>羽毛<rp>(</rp><rt>うもう</rt><rp>)</rp></ruby></strong>と、ハチュウ類の特徴である<strong>歯・つめ・長い<ruby>尾<rp>(</rp><rt>お</rt><rp>)</rp></ruby></strong>をもっていたんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/archaeopteryx.png',
      alt: '始祖鳥の復元図',
      caption: '羽毛（鳥類の特徴）と歯・翼の爪・長い尾（ハチュウ類の特徴）をもつ',
    },
    {
      type: 'quiz',
      question: '始祖鳥がもつ鳥類の特徴はどれ？',
      options: [
        { letter: 'A', text: '歯がある', correct: false },
        { letter: 'B', text: '長い尾がある', correct: false },
        { letter: 'C', text: '羽毛がある', correct: true },
        { letter: 'D', text: 'つめがある', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>羽毛<rp>(</rp><rt>うもう</rt><rp>)</rp></ruby>がある」</strong>です。歯・つめ・長い<ruby>尾<rp>(</rp><rt>お</rt><rp>)</rp></ruby>は<ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby>の特徴です。<ruby>始祖鳥<rp>(</rp><rt>しそちょう</rt><rp>)</rp></ruby>は両方の特徴をもつ<ruby>中間的<rp>(</rp><rt>ちゅうかんてき</rt><rp>)</rp></ruby>な生物です。',
    },
    {
      type: 'narrator',
      text: '進化の<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>は<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>だけではありません。今生きている生物の体にも、進化の<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>が残っています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>クジラのひれ</strong>、<strong>ヒトのうで</strong>、<strong>コウモリの<ruby>翼<rp>(</rp><rt>つばさ</rt><rp>)</rp></ruby></strong>を比べてみよう。形も使い方も全然ちがうよね？でも、<ruby>骨格<rp>(</rp><rt>こっかく</rt><rp>)</rp></ruby>の基本構造は実はよく似ているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'クジラのひれとヒトのうでが似ているんですか！？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '見た目は全然ちがうけど、骨の並び方は<strong>同じパターン</strong>なんだ。こういう<ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>を<strong><span class="keyword"><span data-tooltip="形や働きは違うが骨格の基本構造が共通している器官。共通の祖先から進化した証拠"><ruby>相同器官<rp>(</rp><rt>そうどうきかん</rt><rp>)</rp></ruby></span></span></strong>というよ。共通の<ruby>祖先<rp>(</rp><rt>そせん</rt><rp>)</rp></ruby>から進化した<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>なんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/homologous-organs.svg',
      alt: '相同器官の比較',
      caption: 'クジラのひれ・ヒトのうで・コウモリの翼の骨格比較',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '形はちがうけど「もと」は同じということですね！すごいなあ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">相同器官</span>＝形は違うけど骨の基本構造が同じ → 共通の祖先から進化した証拠！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/living-fossils.png',
      alt: '生きた化石',
      caption: 'シーラカンス（左）とカブトガニ（右）。太古の姿をほぼ保っている',
    },
    {
      type: 'quiz',
      question: '相同器官の例として正しいものは？',
      options: [
        { letter: 'A', text: 'トンボの翅とスズメの翼', correct: false },
        { letter: 'B', text: 'クジラのひれとヒトのうで', correct: true },
        { letter: 'C', text: 'イカの目とヒトの目', correct: false },
        { letter: 'D', text: 'チョウの口とカの口', correct: false },
      ],
      explanation:
        '<strong>正解はB「クジラのひれとヒトのうで」</strong>です。形や<ruby>働<rp>(</rp><rt>はたら</rt><rp>)</rp></ruby>きは<ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なりますが、<ruby>骨格<rp>(</rp><rt>こっかく</rt><rp>)</rp></ruby>の基本<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby>が共通しており、<ruby>相同器官<rp>(</rp><rt>そうどうきかん</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<ruby>脊椎動物<rp>(</rp><rt>せきついどうぶつ</rt><rp>)</rp></ruby>の<strong><ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby></strong>：<ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby> → <ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby> → <ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby> → <ruby>哺乳類<rp>(</rp><rt>ほにゅうるい</rt><rp>)</rp></ruby>・<ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>',
        '<strong>イクチオステガ</strong>（魚類＋両生類）、<strong><ruby>始祖鳥<rp>(</rp><rt>しそちょう</rt><rp>)</rp></ruby></strong>（鳥類＋ハチュウ類）が進化の<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>',
        '<strong><ruby>相同器官<rp>(</rp><rt>そうどうきかん</rt><rp>)</rp></ruby></strong>：クジラのひれ・ヒトのうで・コウモリの<ruby>翼<rp>(</rp><rt>つばさ</rt><rp>)</rp></ruby>は<ruby>骨格<rp>(</rp><rt>こっかく</rt><rp>)</rp></ruby>の基本<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby>が共通',
        '<ruby>相同器官<rp>(</rp><rt>そうどうきかん</rt><rp>)</rp></ruby>は共通の<ruby>祖先<rp>(</rp><rt>そせん</rt><rp>)</rp></ruby>から進化した<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};

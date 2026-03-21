import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const evolutionEvidenceChat: HistoryChat = {
  id: 'sci3-evolution-evidence',
  icon: '🦴',
  title: '進化の証拠と多様性',
  subtitle: '始祖鳥・相同器官・進化と多様性',
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
    // ── 学習2続き: 鳥類の出現 ──
    {
      type: 'date',
      text: '<ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>の<ruby>出現<rp>(</rp><rt>しゅつげん</rt><rp>)</rp></ruby>と<ruby>始祖鳥<rp>(</rp><rt>しそちょう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>はどこから進化したのでしょうか？約1.5<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前の<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>がその<ruby>答<rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えを教えてくれます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '約1.5<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前の<ruby>中生代<rp>(</rp><rt>ちゅうせいだい</rt><rp>)</rp></ruby>の<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>から<strong><span class="keyword"><ruby>始祖鳥<rp>(</rp><rt>しそちょう</rt><rp>)</rp></ruby></span></strong>の<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>が見つかっているんだ。これがとても<ruby>面白<rp>(</rp><rt>おもしろ</rt><rp>)</rp></ruby>い生物でね…',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どう<ruby>面白<rp>(</rp><rt>おもしろ</rt><rp>)</rp></ruby>いんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>始祖鳥<rp>(</rp><rt>しそちょう</rt><rp>)</rp></ruby>には<strong><ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>の<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby></strong>と<strong><ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby>の特徴</strong>の<strong>両方</strong>があるんだ！<br/><br/>🐦 <strong>鳥類の特徴</strong>：前あしが<ruby>つばさ<rp>(</rp><rt></rt><rp>)</rp></ruby>になっている、<ruby>羽毛<rp>(</rp><rt>うもう</rt><rp>)</rp></ruby>がある<br/>🦎 <strong>ハチュウ類の特徴</strong>：つばさに<ruby>爪<rp>(</rp><rt>つめ</rt><rp>)</rp></ruby>がある、くちばしに<ruby>歯<rp>(</rp><rt>は</rt><rp>)</rp></ruby>がある、<ruby>尾骨<rp>(</rp><rt>びこつ</rt><rp>)</rp></ruby>がある',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/archaeopteryx.png',
      alt: '始祖鳥の復元図と骨格',
      caption: '羽毛（鳥類の特徴）と歯・翼の爪・長い尾骨（ハチュウ類の特徴）をもつ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>鳥<rp>(</rp><rt>とり</rt><rp>)</rp></ruby>なのに<ruby>歯<rp>(</rp><rt>は</rt><rp>)</rp></ruby>があって<ruby>爪<rp>(</rp><rt>つめ</rt><rp>)</rp></ruby>もあるなんて！まるでトカゲみたいですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう、だから<ruby>始祖鳥<rp>(</rp><rt>しそちょう</rt><rp>)</rp></ruby>は<ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby>から<ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>へ<ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby>する<ruby>途中<rp>(</rp><rt>とちゅう</rt><rp>)</rp></ruby>にいた<ruby>中間的<rp>(</rp><rt>ちゅうかんてき</rt><rp>)</rp></ruby>な生物だと考えられているんだよ。2つのグループの<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>をもつ<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>生物は、<ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby>のつながりを<ruby>証明<rp>(</rp><rt>しょうめい</rt><rp>)</rp></ruby>する重要な<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">始祖鳥</span>＝鳥類の特徴（つばさ・羽毛）＋ハチュウ類の特徴（爪・歯・尾骨）→ ハチュウ類から鳥類への進化の証拠',
    },
    {
      type: 'quiz',
      question: '始祖鳥がもつハチュウ類の特徴として正しくないものはどれ？',
      options: [
        { letter: 'A', text: 'つばさに爪がある', correct: false },
        { letter: 'B', text: 'くちばしに歯がある', correct: false },
        { letter: 'C', text: '尾骨がある', correct: false },
        { letter: 'D', text: '羽毛がある', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>羽毛<rp>(</rp><rt>うもう</rt><rp>)</rp></ruby>がある」</strong>です。<ruby>羽毛<rp>(</rp><rt>うもう</rt><rp>)</rp></ruby>は<ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>の<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>です。<ruby>爪<rp>(</rp><rt>つめ</rt><rp>)</rp></ruby>・<ruby>歯<rp>(</rp><rt>は</rt><rp>)</rp></ruby>・<ruby>尾骨<rp>(</rp><rt>びこつ</rt><rp>)</rp></ruby>が<ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby>の特徴です。',
    },

    // ── 学習3: さまざまな進化の証拠 ──
    {
      type: 'date',
      text: '学習3: さまざまな<ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby>の<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby>の<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>は<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>だけではありません。今生きている生物の体にも、<ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby>の<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>が残っています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '実は今も<ruby>中間的<rp>(</rp><rt>ちゅうかんてき</rt><rp>)</rp></ruby>な<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>をもつ生物がいるんだ。<strong><span class="keyword" data-tooltip="魚類に分類されるが、えらだけでなく肺でも呼吸する生物">ハイギョ</span></strong>は<ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby>だけど<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>をもっているし、<strong><span class="keyword" data-tooltip="哺乳類に分類されるが卵を産む動物">カモノハシ</span></strong>は<ruby>哺乳類<rp>(</rp><rt>ほにゅうるい</rt><rp>)</rp></ruby>なのに<ruby>卵<rp>(</rp><rt>たまご</rt><rp>)</rp></ruby>を産むんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>哺乳類<rp>(</rp><rt>ほにゅうるい</rt><rp>)</rp></ruby>なのに<ruby>卵<rp>(</rp><rt>たまご</rt><rp>)</rp></ruby>を産むなんて！普通は<ruby>胎生<rp>(</rp><rt>たいせい</rt><rp>)</rp></ruby>ですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そうだね。カモノハシは<ruby>哺乳類<rp>(</rp><rt>ほにゅうるい</rt><rp>)</rp></ruby>と<ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby>の<ruby>中間的<rp>(</rp><rt>ちゅうかんてき</rt><rp>)</rp></ruby>な<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>をもっている。こういう<ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>は、進化がまっすぐ一直線ではなく複雑なことを教えてくれるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/living-fossils.png',
      alt: '中間的特徴をもつ生物',
      caption: 'ハイギョ（肺をもつ魚類）とカモノハシ（卵を産む哺乳類）',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さて、もう一つ大事な進化の<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>があるよ。<strong>クジラのひれ</strong>、<strong>ヒトのうで</strong>、<strong>コウモリの<ruby>翼<rp>(</rp><rt>つばさ</rt><rp>)</rp></ruby></strong>を比べてみよう。形も使い方も全然ちがうよね？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'クジラは泳ぐ、ヒトはつかむ、コウモリは飛ぶ…全然ちがいますね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'ところが！<ruby>骨格<rp>(</rp><rt>こっかく</rt><rp>)</rp></ruby>を比べると、骨の並び方の基本的なつくりは<strong>同じパターン</strong>なんだ。こういう<ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>を<strong><span class="keyword" data-tooltip="現在の形やはたらきは異なるが、もとは同じものであったと考えられる器官。骨格の基本的なつくりが共通"><ruby>相同器官<rp>(</rp><rt>そうどうきかん</rt><rp>)</rp></ruby></span></strong>というよ。共通の<ruby>祖先<rp>(</rp><rt>そせん</rt><rp>)</rp></ruby>から進化した<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>なんだ！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/homologous-organs.png',
      alt: '相同器官の比較',
      caption: 'クジラのひれ・ヒトのうで・コウモリの翼 ── 骨格の基本構造は同じ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '形はちがうけど「もと」は同じということですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'その通り。では最後に、なぜ同じ<ruby>祖先<rp>(</rp><rt>そせん</rt><rp>)</rp></ruby>からこんなに<ruby>多様<rp>(</rp><rt>たよう</rt><rp>)</rp></ruby>な生物が生まれたのか。それは<strong><ruby>遺伝子<rp>(</rp><rt>いでんし</rt><rp>)</rp></ruby>に変化が生じ</strong>、変化した<ruby>形質<rp>(</rp><rt>けいしつ</rt><rp>)</rp></ruby>がその生物の<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>に<ruby>適応<rp>(</rp><rt>てきおう</rt><rp>)</rp></ruby>して受け継がれた結果なんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>遺伝子<rp>(</rp><rt>いでんし</rt><rp>)</rp></ruby>の変化が<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>に合って受け<ruby>継<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>がれる…だから形が変わっていくんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">相同器官</span>＝形は違うけど骨の基本構造が同じ器官 → 共通の祖先から進化した証拠。生物の多様性は<span class="keyword">遺伝子の変化</span>が環境に適応して受け継がれた結果',
    },
    {
      type: 'quiz',
      question: '相同器官の例として正しいものは？',
      options: [
        { letter: 'A', text: 'トンボの翅とスズメの翼', correct: false },
        { letter: 'B', text: 'イカの目とヒトの目', correct: false },
        { letter: 'C', text: 'クジラのひれとヒトのうで', correct: true },
        { letter: 'D', text: 'チョウの口とカの口', correct: false },
      ],
      explanation:
        '<strong>正解はC「クジラのひれとヒトのうで」</strong>です。形や<ruby>働<rp>(</rp><rt>はたら</rt><rp>)</rp></ruby>きは<ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なりますが、<ruby>骨格<rp>(</rp><rt>こっかく</rt><rp>)</rp></ruby>の基本<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby>が共通しており、<ruby>相同器官<rp>(</rp><rt>そうどうきかん</rt><rp>)</rp></ruby>です。トンボの<ruby>翅<rp>(</rp><rt>はね</rt><rp>)</rp></ruby>とスズメの<ruby>翼<rp>(</rp><rt>つばさ</rt><rp>)</rp></ruby>は骨の構造が全く異なるので相同器官ではありません。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong><ruby>始祖鳥<rp>(</rp><rt>しそちょう</rt><rp>)</rp></ruby></strong>：<ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>の特徴（つばさ・羽毛）＋<ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby>の特徴（爪・歯・尾骨）→ ハチュウ類から鳥類への進化の証拠',
        '<ruby>現存<rp>(</rp><rt>げんそん</rt><rp>)</rp></ruby>する<ruby>中間的<rp>(</rp><rt>ちゅうかんてき</rt><rp>)</rp></ruby>生物：<strong>ハイギョ</strong>（肺をもつ魚類）、<strong>カモノハシ</strong>（卵を産む哺乳類）',
        '<strong><ruby>相同器官<rp>(</rp><rt>そうどうきかん</rt><rp>)</rp></ruby></strong>：クジラのひれ・ヒトのうで・コウモリの<ruby>翼<rp>(</rp><rt>つばさ</rt><rp>)</rp></ruby>は<ruby>骨格<rp>(</rp><rt>こっかく</rt><rp>)</rp></ruby>の基本構造が同じ → 共通の<ruby>祖先<rp>(</rp><rt>そせん</rt><rp>)</rp></ruby>から進化した<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>',
        '生物の<ruby>多様性<rp>(</rp><rt>たようせい</rt><rp>)</rp></ruby>：<ruby>遺伝子<rp>(</rp><rt>いでんし</rt><rp>)</rp></ruby>の変化が<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>に<ruby>適応<rp>(</rp><rt>てきおう</rt><rp>)</rp></ruby>して受け継がれた結果',
      ],
    },
  ],
};

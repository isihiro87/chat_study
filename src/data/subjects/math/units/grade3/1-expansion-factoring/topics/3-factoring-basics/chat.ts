import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const factoringBasicsChat: HistoryChat = {
  id: 'math-g3-factoring-basics',
  icon: '🔧',
  title: '因数分解の基本をマスターしよう',
  subtitle: '〜中3数学〜 共通因数をくくり出す',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👩‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        encouraging: '💪',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵‍💫',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>展開<rt>てんかい</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>！<ruby>式<rt>しき</rt></ruby>をかっこの<ruby>形<rt>かたち</rt></ruby>にまとめる<ruby>作業<rt>さぎょう</rt></ruby>を<strong>「<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>」</strong>と<ruby>言<rt>い</rt></ruby>うよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>展開<rt>てんかい</rt></ruby>はかっこを<ruby>外<rt>はず</rt></ruby>す<ruby>作業<rt>さぎょう</rt></ruby>だったよね。<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>はその<ruby>逆<rt>ぎゃく</rt></ruby>で、かっこに<ruby>戻<rt>もど</rt></ruby>す<ruby>作業<rt>さぎょう</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>展開<rt>てんかい</rt></ruby>と<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>',
      steps: [
        {
          formula: '$a(b + c) \\rightarrow ab + ac$',
          annotation: '← これが<ruby>展開<rt>てんかい</rt></ruby>（かっこを<ruby>外<rt>はず</rt></ruby>す）',
        },
        {
          formula: '$ab + ac \\rightarrow a(b + c)$',
          annotation: '← これが<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>（かっこに<ruby>戻<rt>もど</rt></ruby>す）',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>展開<rt>てんかい</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>！<ruby>矢印<rt>やじるし</rt></ruby>が<ruby>反対<rt>はんたい</rt></ruby>になるだけなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！じゃあ<ruby>実際<rt>じっさい</rt></ruby>にやってみよう。',
    },
    {
      type: 'summary-point',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby> = <ruby>展開<rt>てんかい</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>。<ruby>式<rt>しき</rt></ruby>をかっこの<ruby>形<rt>かたち</rt></ruby>にまとめること。',
    },
    {
      type: 'date',
      text: '<ruby>共通因数<rt>きょうつういんすう</rt></ruby>をくくり<ruby>出<rt>だ</rt></ruby>そう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>の<ruby>第一歩<rt>だいいっぽ</rt></ruby>は<strong>「<ruby>共通因数<rt>きょうつういんすう</rt></ruby>」</strong>を<ruby>見<rt>み</rt></ruby>つけること！すべての<ruby>項<rt>こう</rt></ruby>に<ruby>共通<rt>きょうつう</rt></ruby>する<ruby>数<rt>かず</rt></ruby>や<ruby>文字<rt>もじ</rt></ruby>を<ruby>探<rt>さが</rt></ruby>そう。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>共通因数<rt>きょうつういんすう</rt></ruby>のくくり<ruby>出<rt>だ</rt></ruby>し',
      steps: [
        {
          formula: '$6x + 9$',
          annotation: '6 と 9 の<ruby>共通因数<rt>きょうつういんすう</rt></ruby>は？ → <strong>3</strong>',
        },
        {
          formula: '$3 \\times 2x + 3 \\times 3$',
          animateInsert: true,
          annotation: '3 でくくれる<ruby>形<rt>かたち</rt></ruby>に<ruby>書<rt>か</rt></ruby>きかえよう',
        },
        {
          formula: '$3(2x + 3)$',
          isResult: true,
          animateInsert: true,
          annotation: '3 をかっこの<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>して<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>共通<rt>きょうつう</rt></ruby>する<ruby>数<rt>かず</rt></ruby>を<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>文字<rt>もじ</rt></ruby>も<ruby>共通因数<rt>きょうつういんすう</rt></ruby>になるパターンだよ！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>文字<rt>もじ</rt></ruby>の<ruby>共通因数<rt>きょうつういんすう</rt></ruby>',
      steps: [
        {
          formula: '$x^2 + 3x$',
          annotation: '<ruby>両方<rt>りょうほう</rt></ruby>の<ruby>項<rt>こう</rt></ruby>に <strong>x</strong> が<ruby>入<rt>はい</rt></ruby>っている！',
        },
        {
          formula: '$x \\times x + x \\times 3$',
          animateInsert: true,
          annotation: 'x でくくれる<ruby>形<rt>かたち</rt></ruby>に<ruby>分解<rt>ぶんかい</rt></ruby>',
        },
        {
          formula: '$x(x + 3)$',
          isResult: true,
          animateInsert: true,
          annotation: 'x をくくり<ruby>出<rt>だ</rt></ruby>して<ruby>完成<rt>かんせい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>数<rt>かず</rt></ruby>と<ruby>文字<rt>もじ</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>が<ruby>共通因数<rt>きょうつういんすう</rt></ruby>のときもありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！ 4x² + 8x なら<ruby>共通因数<rt>きょうつういんすう</rt></ruby>は <strong>4x</strong> で、4x(x+2) になるよ。<ruby>数<rt>かず</rt></ruby>も<ruby>文字<rt>もじ</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>にくくり<ruby>出<rt>だ</rt></ruby>そう！',
    },
    {
      type: 'quiz',
      question: '$6x^2 - 12x$ を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$6(x^2-2x)$', correct: false },
        { letter: 'B', text: '$6x(x-2)$', correct: true },
        { letter: 'C', text: '$3x(2x-4)$', correct: false },
        { letter: 'D', text: '$x(6x-12)$', correct: false },
      ],
      explanation:
        '$6x^2$ と $12x$ の<ruby>共通因数<rt>きょうつういんすう</rt></ruby>は $\\textcolor{#D97706}{6x}$。$6x$ でくくると $6x(x-2)$ だよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>の<ruby>第一歩<rt>だいいっぽ</rt></ruby>: <ruby>共通因数<rt>きょうつういんすう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけてくくり<ruby>出<rt>だ</rt></ruby>す！（<ruby>数<rt>かず</rt></ruby>も<ruby>文字<rt>もじ</rt></ruby>もチェック）',
    },
    {
      type: 'date',
      text: '<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>で<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>公式<rt>こうしき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>だよ。$a^2 - b^2$ の<ruby>形<rt>かたち</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけたら<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>が<ruby>使<rt>つか</rt></ruby>えるんだ。',
    },
    {
      type: 'whiteboard',
      title: '$a^2 - b^2 = (a+b)(a-b)$',
      steps: [
        {
          formula: '$x^2 - 25$',
          annotation: '$x^2 - 5^2$ の<ruby>形<rt>かたち</rt></ruby>！ $a=x, b=5$',
        },
        {
          formula: '$(x + 5)(x - 5)$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>一発<rt>いっぱつ</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '$4a^2 - 81$ みたいに<ruby>係数<rt>けいすう</rt></ruby>がつくとどうなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '$4a^2 = (2a)^2$、$81 = 9^2$ だから、$(2a)^2 - 9^2 = \\textcolor{#D97706}{(2a+9)(2a-9)}$ だよ！<ruby>何<rt>なに</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>かを<ruby>見抜<rt>みぬ</rt></ruby>くのがコツ。',
    },
    {
      type: 'quiz',
      question: '$9x^2 - 25$ を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$(9x+25)(9x-25)$', correct: false },
        { letter: 'B', text: '$(3x+5)(3x-5)$', correct: true },
        { letter: 'C', text: '$(3x-5)^2$', correct: false },
        { letter: 'D', text: '$(x+5)(9x-5)$', correct: false },
      ],
      explanation:
        '$9x^2 = (3x)^2$、$25 = 5^2$ なので $(3x)^2 - 5^2 = \\textcolor{#D97706}{(3x+5)(3x-5)}$',
    },
    {
      type: 'summary-point',
      text: '$a^2 - b^2 = (a+b)(a-b)$。<ruby>係数<rt>けいすう</rt></ruby>つきは「<ruby>何<rt>なに</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>か」を<ruby>見抜<rt>みぬ</rt></ruby>こう！',
    },
    {
      type: 'date',
      text: '<ruby>平方<rt>へいほう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '$a^2 + 2ab + b^2 = (a+b)^2$、$a^2 - 2ab + b^2 = (a-b)^2$ の<ruby>公式<rt>こうしき</rt></ruby>も<ruby>使<rt>つか</rt></ruby>えるよ。<ruby>見分<rt>みわ</rt></ruby>け<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えるね！',
    },
    {
      type: 'whiteboard',
      title: '<ruby>平方<rt>へいほう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>の<ruby>見分<rt>みわ</rt></ruby>け<ruby>方<rt>かた</rt></ruby>',
      steps: [
        {
          formula: '$x^2 + 12x + 36$',
          annotation: '<ruby>最後<rt>さいご</rt></ruby>の $36 = 6^2$。<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>は $2 \\times x \\times 6 = 12x$？ → ✓',
        },
        {
          formula: '$(x + 6)^2$',
          isResult: true,
          animateInsert: true,
          annotation: '$a^2+2ab+b^2 = (a+b)^2$ で $a=x, b=6$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'チェックポイントは「<ruby>最後<rt>さいご</rt></ruby>が<ruby>何<rt>なに</rt></ruby>かの2<ruby>乗<rt>じょう</rt></ruby>か」と「<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>が2abか」の2つですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！この2つが<ruby>合<rt>あ</rt></ruby>えば<ruby>平方<rt>へいほう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>で<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できるよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>平方<rt>へいほう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>チェック: ①<ruby>最後<rt>さいご</rt></ruby>が○² ②<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>が 2×○×△ なら $(△±○)^2$',
    },
    {
      type: 'date',
      text: '<ruby>係数<rt>けいすう</rt></ruby>つきの<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '$9x^2 + 6x + 1$ のように<ruby>係数<rt>けいすう</rt></ruby>がつくパターンも<ruby>同<rt>おな</rt></ruby>じ<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>だよ。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>係数<rt>けいすう</rt></ruby>つき: $9x^2 + 6x + 1$',
      steps: [
        {
          formula: '$9x^2 + 6x + 1$',
          annotation: '$9x^2 = (3x)^2$、$1 = 1^2$。<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>は $2 \\times 3x \\times 1 = 6x$？ → ✓',
        },
        {
          formula: '$(3x + 1)^2$',
          isResult: true,
          animateInsert: true,
          annotation: '$(a+b)^2$ で $a=3x, b=1$',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$9x^2$ が $(3x)^2$ だと<ruby>気<rt>き</rt></ruby>づけるかがポイントですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！<ruby>係数<rt>けいすう</rt></ruby>つきは $4x^2=(2x)^2$, $16x^2=(4x)^2$, $25b^2=(5b)^2$ のように「<ruby>何<rt>なに</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>か」を<ruby>見抜<rt>みぬ</rt></ruby>く<ruby>練習<rt>れんしゅう</rt></ruby>をしよう。',
    },
    {
      type: 'quiz',
      question: '$4a^2 - 20ab + 25b^2$ を<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>すると？',
      options: [
        { letter: 'A', text: '$(2a+5b)^2$', correct: false },
        { letter: 'B', text: '$(2a-5b)^2$', correct: true },
        { letter: 'C', text: '$(2a+5b)(2a-5b)$', correct: false },
        { letter: 'D', text: '$(4a-5b)^2$', correct: false },
      ],
      explanation:
        '$4a^2=(2a)^2$, $25b^2=(5b)^2$, <ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby> $2 \\times 2a \\times 5b = 20ab$ ✓。$\\textcolor{#D97706}{(2a-5b)^2}$',
    },
    {
      type: 'summary-point',
      text: '<ruby>係数<rt>けいすう</rt></ruby>つきは $4x^2=(2x)^2$, $9x^2=(3x)^2$ のように「<ruby>何<rt>なに</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>か」を<ruby>見抜<rt>みぬ</rt></ruby>く！',
    },
    {
      type: 'end',
      points: [
        '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby> = <ruby>展開<rt>てんかい</rt></ruby>の<ruby>逆<rt>ぎゃく</rt></ruby>（かっこにまとめる）',
        'まず<ruby>共通因数<rt>きょうつういんすう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>す！',
        '$a^2-b^2 = (a+b)(a-b)$（<ruby>和<rt>わ</rt></ruby>と<ruby>差<rt>さ</rt></ruby>の<ruby>積<rt>せき</rt></ruby>）',
        '$a^2±2ab+b^2 = (a±b)^2$（<ruby>平方<rt>へいほう</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>）',
        '<ruby>係数<rt>けいすう</rt></ruby>つきは「<ruby>何<rt>なに</rt></ruby>の2<ruby>乗<rt>じょう</rt></ruby>か」を<ruby>見抜<rt>みぬ</rt></ruby>くのがコツ',
        '<ruby>確認<rt>かくにん</rt></ruby>：<ruby>展開<rt>てんかい</rt></ruby>して<ruby>元<rt>もと</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>るか<ruby>確<rt>たし</rt></ruby>かめよう',
      ],
    },
  ],
};

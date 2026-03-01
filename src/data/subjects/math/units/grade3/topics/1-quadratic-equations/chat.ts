import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const quadraticEquationsChat: HistoryChat = {
  id: 'math-quadratic-eq',
  icon: '📊',
  title: '二次方程式をマスターしよう',
  subtitle: '〜中3数学〜 因数分解・解の公式',
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
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1の<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>、<ruby>中<rt>ちゅう</rt></ruby>2の<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>に<ruby>続<rt>つづ</rt></ruby>いて、<ruby>中<rt>ちゅう</rt></ruby>3では <strong>x²</strong> が<ruby>登場<rt>とうじょう</rt></ruby>！<ruby>解<rt>と</rt></ruby>き方は3パターンあるよ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>今日<rt>きょう</rt></ruby>はこんな<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>けるようになるよ！<br/><br/><strong>x² − 5x + 6 = 0</strong><br/><br/>x² があるね。これが<strong><ruby>二次方程式<rt>にじほうていしき</rt></ruby></strong>だよ。<ruby>一次方程式<rt>いちじほうていしき</rt></ruby>との<ruby>大<rt>おお</rt></ruby>きな<ruby>違<rt>ちが</rt></ruby>いは、<strong><ruby>解<rt>かい</rt></ruby>が2つある</strong>こと！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>解<rt>かい</rt></ruby>が2つ!? <ruby>今<rt>いま</rt></ruby>まで<ruby>答<rt>こた</rt></ruby>えは1つだったのに…。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう、x² があるからね。<ruby>例<rt>たと</rt></ruby>えば x² = 9 のとき、x = 3 も x = −3 も<ruby>正解<rt>せいかい</rt></ruby>でしょ？<br/>3² = 9 ✓<br/>(−3)² = 9 ✓<br/><br/>だから<strong>±（プラスマイナス）</strong>で2つの<ruby>解<rt>かい</rt></ruby>が出てくるんだ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>: x² をふくむ<ruby>方程式<rt>ほうていしき</rt></ruby>。<strong><ruby>解<rt>かい</rt></ruby>が2つ</strong>あることが<ruby>多<rt>おお</rt></ruby>い。',
    },
    {
      type: 'date',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>で<ruby>解<rt>と</rt></ruby>こう',
    },
    {
      type: 'narrator',
      text: '<ruby>最<rt>もっと</rt></ruby>も<ruby>基本<rt>きほん</rt></ruby>の<ruby>解<rt>と</rt></ruby>き方！<strong><ruby>因数分解<rt>いんすうぶんかい</rt></ruby></strong>を使ってサクッと<ruby>解<rt>と</rt></ruby>こう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>大事<rt>だいじ</rt></ruby>な<ruby>原則<rt>げんそく</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう！<br/><br/><strong>A × B = 0 ならば、A = 0 または B = 0</strong><br/><br/>つまり、<ruby>式<rt>しき</rt></ruby>を (　)(　) = 0 の形にできれば、それぞれを 0 とおいて<ruby>解<rt>と</rt></ruby>ける！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なるほど、だから<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>なんですね。でも x² − 5x + 6 はどうやって<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'コツは<strong>「かけて c、<ruby>足<rt>た</rt></ruby>して b」</strong>になる2つの<ruby>数<rt>かず</rt></ruby>を<ruby>探<rt>さが</rt></ruby>すこと！<br/><br/>x² − 5x + <strong>6</strong> = 0<br/><br/>かけて <strong>6</strong>、<ruby>足<rt>た</rt></ruby>して <strong>−5</strong> になる2<ruby>数<rt>すう</rt></ruby>は？<br/>→ <strong>−2</strong> と <strong>−3</strong>（−2 × −3 = 6、−2 + −3 = −5）<br/><br/>(x − 2)(x − 3) = 0<br/>x = <strong>2</strong> または x = <strong>3</strong>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'かけて c、<ruby>足<rt>た</rt></ruby>して b！<ruby>覚<rt>おぼ</rt></ruby>えやすい！',
    },
    {
      type: 'summary-point',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>: x² + bx + c = 0 → 「<strong>かけて c、<ruby>足<rt>た</rt></ruby>して b</strong>」になる2<ruby>数<rt>すう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>す',
    },
    {
      type: 'quiz',
      question: 'x² − 7x + 12 = 0 の解は？（かけて12、足して−7になる数を探そう）',
      options: [
        { letter: 'A', text: 'x = 2, x = 6', correct: false },
        { letter: 'B', text: 'x = 3, x = 4', correct: true },
        { letter: 'C', text: 'x = 1, x = 12', correct: false },
        { letter: 'D', text: 'x = −3, x = −4', correct: false },
      ],
      explanation:
        'かけて 12、<ruby>足<rt>た</rt></ruby>して −7 → <strong>−3 と −4</strong>。(x − 3)(x − 4) = 0 → x = 3, 4',
    },
    {
      type: 'date',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できないときの<strong><ruby>最終兵器<rt>さいしゅうへいき</rt></ruby></strong>！どんな<ruby>二次方程式<rt>にじほうていしき</rt></ruby>でも<ruby>解<rt>と</rt></ruby>ける<ruby>公式<rt>こうしき</rt></ruby>だ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できないとき、<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>を使うよ！<br/><br/>ax² + bx + c = 0 のとき<br/><strong>x = (−b ± √(b²−4ac)) / 2a</strong><br/><br/>これに a, b, c を<ruby>代入<rt>だいにゅう</rt></ruby>するだけ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'うわ、<ruby>複雑<rt>ふくざつ</rt></ruby>…。<ruby>覚<rt>おぼ</rt></ruby>えられるかな…？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>！やってみよう。<br/><br/>x² + 4x + 1 = 0（<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>できない！）<br/><br/>a = 1, b = 4, c = 1 を<ruby>代入<rt>だいにゅう</rt></ruby>：<br/>x = (−4 ± √(16 − 4)) / 2<br/>x = (−4 ± √12) / 2<br/>x = (−4 ± 2√3) / 2<br/>x = <strong>−2 ± √3</strong><br/><br/>a, b, c を<ruby>当<rt>あ</rt></ruby>てはめるだけだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>当<rt>あ</rt></ruby>てはめるだけなら、できそうです！',
    },
    {
      type: 'summary-point',
      text: '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>: <strong>x = (−b ± √(b²−4ac)) / 2a</strong> — どんな<ruby>二次方程式<rt>にじほうていしき</rt></ruby>でもOK！',
    },
    {
      type: 'quiz',
      question: 'x² + 3x = 0 の解は？（まず因数分解してみよう）',
      options: [
        { letter: 'A', text: 'x = 0 のみ', correct: false },
        { letter: 'B', text: 'x = 3 のみ', correct: false },
        { letter: 'C', text: 'x = 0 または x = −3', correct: true },
        { letter: 'D', text: 'x = 0 または x = 3', correct: false },
      ],
      explanation:
        'x(x + 3) = 0 → x = 0 または x + 3 = 0 → x = <strong>0, −3</strong>。x = 0 も<ruby>忘<rt>わす</rt></ruby>れないで！',
    },
    {
      type: 'end',
      points: [
        '<ruby>二次方程式<rt>にじほうていしき</rt></ruby>: x² をふくむ<ruby>方程式<rt>ほうていしき</rt></ruby>。<ruby>解<rt>かい</rt></ruby>は<ruby>通常<rt>つうじょう</rt></ruby>2つ',
        '<ruby>因数分解<rt>いんすうぶんかい</rt></ruby>: 「かけて c、<ruby>足<rt>た</rt></ruby>して b」で (x+a)(x+b)=0 の形にする',
        '<ruby>解<rt>かい</rt></ruby>の<ruby>公式<rt>こうしき</rt></ruby>: x = (−b ± √(b²−4ac)) / 2a — <ruby>困<rt>こま</rt></ruby>ったらこれ！',
        'x² = k → x = ±√k（<ruby>正<rt>せい</rt></ruby>と<ruby>負<rt>ふ</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れない）',
      ],
    },
  ],
};

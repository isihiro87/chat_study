import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const linearEquationsChat: HistoryChat = {
  id: 'math-linear-eq',
  icon: '📐',
  title: '一次方程式をマスターしよう',
  subtitle: '〜中1数学〜 方程式の解き方',
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
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>小学校<rt>しょうがっこう</rt></ruby>では □ + 3 = 7 のように □ を使っていたけど、<ruby>中学<rt>ちゅうがく</rt></ruby>では <strong>x</strong> を使って「<ruby>方程式<rt>ほうていしき</rt></ruby>」として<ruby>解<rt>と</rt></ruby>いていくよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まずこの<ruby>式<rt>しき</rt></ruby>を見てみよう！<br/><br/><strong>x + 3 = 7</strong><br/><br/>この x にどんな<ruby>数<rt>かず</rt></ruby>を入れたら<ruby>等式<rt>とうしき</rt></ruby>が<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>つかな？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えっと、4 + 3 = 7 だから… x = 4 ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>正解<rt>せいかい</rt></ruby>！この x = 4 のことを<strong>「<ruby>解<rt>かい</rt></ruby>」</strong>って言うんだ。そして x をふくむ<ruby>等式<rt>とうしき</rt></ruby>のことを<strong>「<ruby>方程式<rt>ほうていしき</rt></ruby>」</strong>って呼ぶよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'かんたんな<ruby>式<rt>しき</rt></ruby>なら<ruby>頭<rt>あたま</rt></ruby>の中で<ruby>解<rt>と</rt></ruby>けるけど、もっと<ruby>難<rt>むずか</rt></ruby>しい<ruby>式<rt>しき</rt></ruby>はどうするんですか？',
    },
    {
      type: 'summary-point',
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby> = x をふくむ<ruby>等式<rt>とうしき</rt></ruby>。<ruby>解<rt>かい</rt></ruby> = <ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>たせる x の<ruby>値<rt>あたい</rt></ruby>。',
    },
    {
      type: 'date',
      text: '<ruby>移項<rt>いこう</rt></ruby>で<ruby>解<rt>と</rt></ruby>こう',
    },
    {
      type: 'narrator',
      text: '<ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>く<ruby>最強<rt>さいきょう</rt></ruby>のテクニック、それが<strong>「<ruby>移項<rt>いこう</rt></ruby>」</strong>だ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>等式<rt>とうしき</rt></ruby>には<ruby>大事<rt>だいじ</rt></ruby>な<ruby>性質<rt>せいしつ</rt></ruby>があるよ。<br/><br/>「<ruby>両辺<rt>りょうへん</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を<ruby>足<rt>た</rt></ruby>しても引いても、等式は成り立つ」<br/><br/>x + 3 = 7 の<ruby>両辺<rt>りょうへん</rt></ruby>から 3 を引くと…<br/>x + 3 <strong>− 3</strong> = 7 <strong>− 3</strong><br/>x = 4',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！<ruby>両方<rt>りょうほう</rt></ruby>から<ruby>同<rt>おな</rt></ruby>じ<ruby>数<rt>かず</rt></ruby>を引けばいいんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！これを<ruby>簡単<rt>かんたん</rt></ruby>に書くのが<strong>「<ruby>移項<rt>いこう</rt></ruby>」</strong>だよ。<br/><br/>x + 3 = 7<br/>→ x = 7 <strong>− 3</strong>（+3 が<ruby>反対側<rt>はんたいがわ</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>って −3 になった！）<br/>→ x = 4<br/><br/><ruby>移項<rt>いこう</rt></ruby>のルール: <strong><ruby>符号<rt>ふごう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる</strong>！<br/>+ → − に、− → + に変わるよ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>移項<rt>いこう</rt></ruby>: <ruby>項<rt>こう</rt></ruby>を<ruby>反対側<rt>はんたいがわ</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>すとき、<strong><ruby>符号<rt>ふごう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる</strong>（+ → −、− → +）',
    },
    {
      type: 'quiz',
      question: 'x − 5 = 3 を解くと？',
      options: [
        { letter: 'A', text: 'x = −2', correct: false },
        { letter: 'B', text: 'x = 2', correct: false },
        { letter: 'C', text: 'x = 8', correct: true },
        { letter: 'D', text: 'x = 15', correct: false },
      ],
      explanation:
        'x − 5 = 3 → −5 を<ruby>移項<rt>いこう</rt></ruby>すると +5 になるよ。x = 3 + 5 = <strong>8</strong>',
    },
    {
      type: 'date',
      text: 'もう<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しい<ruby>方程式<rt>ほうていしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>はこんな<ruby>問題<rt>もんだい</rt></ruby>！<br/><br/><strong>3x + 2 = 11</strong><br/><br/>x の<ruby>前<rt>まえ</rt></ruby>に<ruby>数字<rt>すうじ</rt></ruby>がついているね。どうやって<ruby>解<rt>と</rt></ruby>くかな？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'まず +2 を<ruby>移項<rt>いこう</rt></ruby>して… 3x = 11 − 2 = 9 ですよね。で、3x = 9 だから…あれ、x はどうやって<ruby>出<rt>だ</rt></ruby>すんだろう？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いいぞ！<ruby>移項<rt>いこう</rt></ruby>は<ruby>完璧<rt>かんぺき</rt></ruby>！<br/><br/>3x = 9 は「x の 3<ruby>倍<rt>ばい</rt></ruby>が 9」ってこと。だから<strong><ruby>両辺<rt>りょうへん</rt></ruby>を 3 で<ruby>割<rt>わ</rt></ruby>る</strong>よ！<br/><br/>3x ÷ 3 = 9 ÷ 3<br/><strong>x = 3</strong>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！<ruby>移項<rt>いこう</rt></ruby>してから<ruby>割<rt>わ</rt></ruby>ればいいんですね！',
    },
    {
      type: 'summary-point',
      text: 'ax = b の形 → <ruby>両辺<rt>りょうへん</rt></ruby>を a で<ruby>割<rt>わ</rt></ruby>って x = b ÷ a',
    },
    {
      type: 'quiz',
      question: '4x − 8 = 12 の解は？',
      options: [
        { letter: 'A', text: 'x = 1', correct: false },
        { letter: 'B', text: 'x = 3', correct: false },
        { letter: 'C', text: 'x = 5', correct: true },
        { letter: 'D', text: 'x = 20', correct: false },
      ],
      explanation:
        '4x − 8 = 12 → 4x = 12 + 8 = 20 → x = 20 ÷ 4 = <strong>5</strong>',
    },
    {
      type: 'date',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>・<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>最後<rt>さいご</rt></ruby>に、<ruby>小数<rt>しょうすう</rt></ruby>や<ruby>分数<rt>ぶんすう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>を見てみよう！<br/><br/><strong>0.3x = 1.2</strong><br/><br/><ruby>小数<rt>しょうすう</rt></ruby>があるときはどうする？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>小数<rt>しょうすう</rt></ruby>のまま<ruby>計算<rt>けいさん</rt></ruby>するのは<ruby>大変<rt>たいへん</rt></ruby>そう…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そこで<ruby>裏技<rt>うらわざ</rt></ruby>！<strong><ruby>両辺<rt>りょうへん</rt></ruby>を10<ruby>倍<rt>ばい</rt></ruby></strong>して<ruby>整数<rt>せいすう</rt></ruby>にしちゃおう！<br/><br/>0.3x = 1.2<br/>→ <strong>10<ruby>倍<rt>ばい</rt></ruby></strong>: 3x = 12<br/>→ x = 12 ÷ 3 = <strong>4</strong><br/><br/><ruby>分数<rt>ぶんすう</rt></ruby>のときも<ruby>同<rt>おな</rt></ruby>じ！<ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>をかけて<ruby>分数<rt>ぶんすう</rt></ruby>を「はらう」んだ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>小数<rt>しょうすう</rt></ruby> → 10<ruby>倍<rt>ばい</rt></ruby>、100<ruby>倍<rt>ばい</rt></ruby>して<ruby>整数<rt>せいすう</rt></ruby>に！ <ruby>分数<rt>ぶんすう</rt></ruby> → <ruby>分母<rt>ぶんぼ</rt></ruby>の<ruby>最小公倍数<rt>さいしょうこうばいすう</rt></ruby>をかけて「はらう」！',
    },
    {
      type: 'quiz',
      question: '0.5x = 3 の解は？',
      options: [
        { letter: 'A', text: 'x = 1.5', correct: false },
        { letter: 'B', text: 'x = 6', correct: true },
        { letter: 'C', text: 'x = 15', correct: false },
        { letter: 'D', text: 'x = 0.6', correct: false },
      ],
      explanation:
        '<ruby>両辺<rt>りょうへん</rt></ruby>を10<ruby>倍<rt>ばい</rt></ruby>: 5x = 30 → x = 30 ÷ 5 = <strong>6</strong>',
    },
    {
      type: 'end',
      points: [
        '<ruby>方程式<rt>ほうていしき</rt></ruby> = x をふくむ<ruby>等式<rt>とうしき</rt></ruby>。<ruby>解<rt>かい</rt></ruby> = <ruby>方程式<rt>ほうていしき</rt></ruby>を<ruby>成<rt>な</rt></ruby>り<ruby>立<rt>た</rt></ruby>たせる x の<ruby>値<rt>あたい</rt></ruby>',
        '<ruby>移項<rt>いこう</rt></ruby>するとき<ruby>符号<rt>ふごう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる（+ → −、− → +）',
        'ax = b → <ruby>両辺<rt>りょうへん</rt></ruby>を a で<ruby>割<rt>わ</rt></ruby>る',
        '<ruby>小数<rt>しょうすう</rt></ruby>は10<ruby>倍<rt>ばい</rt></ruby>、<ruby>分数<rt>ぶんすう</rt></ruby>は<ruby>分母<rt>ぶんぼ</rt></ruby>をかけて<ruby>整数<rt>せいすう</rt></ruby>にしてから<ruby>解<rt>と</rt></ruby>こう',
      ],
    },
  ],
};

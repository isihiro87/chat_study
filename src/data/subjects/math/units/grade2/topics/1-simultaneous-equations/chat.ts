import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const simultaneousEquationsChat: HistoryChat = {
  id: 'math-simultaneous-eq',
  icon: '🔗',
  title: '連立方程式をマスターしよう',
  subtitle: '〜中2数学〜 加減法と代入法',
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
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>ってなに？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1で<ruby>習<rt>なら</rt></ruby>った<ruby>方程式<rt>ほうていしき</rt></ruby>は x <ruby>一<rt>ひと</rt></ruby>つだったけど、<ruby>今度<rt>こんど</rt></ruby>は<strong>x と y の2つ</strong>を<ruby>同時<rt>どうじ</rt></ruby>に<ruby>求<rt>もと</rt></ruby>めるよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'こんな<ruby>問題<rt>もんだい</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えてみよう。<br/><br/>「りんごとみかんを<ruby>合<rt>あ</rt></ruby>わせて 7<ruby>個<rt>こ</rt></ruby>。りんごはみかんより 3<ruby>個<rt>こ</rt></ruby><ruby>多<rt>おお</rt></ruby>い。それぞれ何<ruby>個<rt>こ</rt></ruby>？」<br/><br/>りんごを x<ruby>個<rt>こ</rt></ruby>、みかんを y<ruby>個<rt>こ</rt></ruby>とすると…<br/><strong>① x + y = 7</strong><br/><strong>② x − y = 3</strong><br/><br/>この2つの<ruby>式<rt>しき</rt></ruby>の<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせが<strong><ruby>連立方程式<rt>れんりつほうていしき</rt></ruby></strong>だよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>式<rt>しき</rt></ruby>が2つあるんですね。でも x と y が2つあったら、どうやって<ruby>解<rt>と</rt></ruby>くんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！コツは<strong>「2つの<ruby>文字<rt>もじ</rt></ruby>のうち1つを<ruby>消<rt>け</rt></ruby>す」</strong>こと。1つ<ruby>消<rt>け</rt></ruby>せば、<ruby>中<rt>ちゅう</rt></ruby>1で<ruby>習<rt>なら</rt></ruby>った<ruby>普通<rt>ふつう</rt></ruby>の<ruby>方程式<rt>ほうていしき</rt></ruby>になるでしょ？',
    },
    {
      type: 'summary-point',
      text: '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>: 2つの<ruby>式<rt>しき</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせて、<strong>2つの<ruby>文字<rt>もじ</rt></ruby>の<ruby>値<rt>あたい</rt></ruby>を<ruby>同時<rt>どうじ</rt></ruby>に<ruby>求<rt>もと</rt></ruby>める</strong>',
    },
    {
      type: 'date',
      text: '<ruby>加減法<rt>かげんほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>こう',
    },
    {
      type: 'narrator',
      text: 'まずは<strong><ruby>加減法<rt>かげんほう</rt></ruby></strong>（<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>したり引いたりする<ruby>方法<rt>ほうほう</rt></ruby>）を<ruby>覚<rt>おぼ</rt></ruby>えよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さっきの<ruby>問題<rt>もんだい</rt></ruby>をやってみよう！<br/><br/>① x + y = 7<br/>② x − y = 3<br/><br/>y に<ruby>注目<rt>ちゅうもく</rt></ruby>！①は <strong>+y</strong>、②は <strong>−y</strong> だよね。この2つの<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>すとどうなる？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'えっと… (x + y) + (x − y) = 7 + 3 だから… x + x = 10 で <strong>2x = 10</strong>！ y が<ruby>消<rt>き</rt></ruby>えた！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>完璧<rt>かんぺき</rt></ruby>！ +y と −y が<ruby>打<rt>う</rt></ruby>ち<ruby>消<rt>け</rt></ruby>し<ruby>合<rt>あ</rt></ruby>って<ruby>消<rt>き</rt></ruby>えたね！<br/><br/>2x = 10 → <strong>x = 5</strong><br/><br/>x = 5 を ① に<ruby>代入<rt>だいにゅう</rt></ruby>すると…<br/>5 + y = 7 → <strong>y = 2</strong><br/><br/><ruby>答<rt>こた</rt></ruby>え: りんご 5<ruby>個<rt>こ</rt></ruby>、みかん 2<ruby>個<rt>こ</rt></ruby>！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'おお！<ruby>足<rt>た</rt></ruby>すだけで1つの<ruby>文字<rt>もじ</rt></ruby>が<ruby>消<rt>き</rt></ruby>えるのがすごい！',
    },
    {
      type: 'summary-point',
      text: '<ruby>加減法<rt>かげんほう</rt></ruby>: <ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>の<ruby>係数<rt>けいすう</rt></ruby>が <strong>+と−</strong> なら<ruby>足<rt>た</rt></ruby>す、<strong><ruby>同<rt>おな</rt></ruby>じ<ruby>符号<rt>ふごう</rt></ruby></strong>なら引いて<ruby>消去<rt>しょうきょ</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '連立方程式 x + y = 10、x − y = 4 を加減法で解くと？',
      options: [
        { letter: 'A', text: 'x = 5, y = 5', correct: false },
        { letter: 'B', text: 'x = 7, y = 3', correct: true },
        { letter: 'C', text: 'x = 6, y = 4', correct: false },
        { letter: 'D', text: 'x = 8, y = 2', correct: false },
      ],
      explanation:
        '2<ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>すと 2x = 14 → x = 7。x + y = 10 に<ruby>代入<rt>だいにゅう</rt></ruby>して y = 3',
    },
    {
      type: 'date',
      text: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>で<ruby>解<rt>と</rt></ruby>こう',
    },
    {
      type: 'narrator',
      text: 'もう1つの<ruby>方法<rt>ほうほう</rt></ruby>が<strong><ruby>代入法<rt>だいにゅうほう</rt></ruby></strong>。「<ruby>当<rt>あ</rt></ruby>てはめて<ruby>解<rt>と</rt></ruby>く」<ruby>方法<rt>ほうほう</rt></ruby>だよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>の<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を見てみよう！<br/><br/>① y = 2x<br/>② x + y = 9<br/><br/>①を見て！もう <strong>y = 2x</strong> ってわかってるよね。これを②の y に<ruby>入<rt>い</rt></ruby>れちゃおう！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '② の y のところに 2x を入れるんですか？<br/><br/>x + <strong>2x</strong> = 9 → 3x = 9 → <strong>x = 3</strong>！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'すごい！<ruby>完璧<rt>かんぺき</rt></ruby>だよ！<br/><br/>x = 3 を ① y = 2x に<ruby>代入<rt>だいにゅう</rt></ruby>して…<br/>y = 2 × 3 = <strong>6</strong><br/><br/><ruby>答<rt>こた</rt></ruby>え: x = 3, y = 6<br/><br/><ruby>代入法<rt>だいにゅうほう</rt></ruby>は、<strong>「y = ○○」の形が<ruby>最初<rt>さいしょ</rt></ruby>からあるとき</strong>にとくに<ruby>便利<rt>べんり</rt></ruby>だよ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>代入法<rt>だいにゅうほう</rt></ruby>: 「y = ○○」をもう一方の<ruby>式<rt>しき</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>して、<ruby>文字<rt>もじ</rt></ruby>を1つに<ruby>減<rt>へ</rt></ruby>らす',
    },
    {
      type: 'quiz',
      question: 'y = x + 2、x + y = 8 を代入法で解くと、x の値は？',
      options: [
        { letter: 'A', text: 'x = 2', correct: false },
        { letter: 'B', text: 'x = 3', correct: true },
        { letter: 'C', text: 'x = 4', correct: false },
        { letter: 'D', text: 'x = 5', correct: false },
      ],
      explanation:
        'y = x + 2 を<ruby>代入<rt>だいにゅう</rt></ruby>: x + (x + 2) = 8 → 2x + 2 = 8 → 2x = 6 → <strong>x = 3</strong>',
    },
    {
      type: 'end',
      points: [
        '<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby> = 2つの<ruby>式<rt>しき</rt></ruby>で x, y の<ruby>値<rt>あたい</rt></ruby>を<ruby>同時<rt>どうじ</rt></ruby>に<ruby>求<rt>もと</rt></ruby>める',
        '<ruby>加減法<rt>かげんほう</rt></ruby>: <ruby>式<rt>しき</rt></ruby>を<ruby>足<rt>た</rt></ruby>すか引いて1つの<ruby>文字<rt>もじ</rt></ruby>を<ruby>消<rt>け</rt></ruby>す',
        '<ruby>代入法<rt>だいにゅうほう</rt></ruby>: y = ○○ の形をもう<ruby>一方<rt>いっぽう</rt></ruby>に<ruby>代入<rt>だいにゅう</rt></ruby>する',
        '<ruby>係数<rt>けいすう</rt></ruby>が<ruby>揃<rt>そろ</rt></ruby>っていないときは、<ruby>何倍<rt>なんばい</rt></ruby>かして<ruby>揃<rt>そろ</rt></ruby>えてから<ruby>加減法<rt>かげんほう</rt></ruby>！',
      ],
    },
  ],
};

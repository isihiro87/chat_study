import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const chemicalCombinationChat: HistoryChat = {
  id: 'sci2-chemical-combination',
  icon: '🧪',
  title: '物質どうしの化学変化',
  subtitle: '〜中2化学〜 化合・化合物の性質・化学反応式',
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
      text: '<ruby>化合<rp>(</rp><rt>かごう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '2種類以上の<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びついて、<ruby>別<rp>(</rp><rt>べつ</rt><rp>)</rp></ruby>の新しい<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>ができる<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>化合<rp>(</rp><rt>かごう</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>の<ruby>粉<rp>(</rp><rt>こな</rt><rp>)</rp></ruby>と<ruby>硫黄<rp>(</rp><rt>いおう</rt><rp>)</rp></ruby>の<ruby>粉<rp>(</rp><rt>こな</rt><rp>)</rp></ruby>を<ruby>混<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ぜて加熱すると、<strong>熱と光</strong>を出しながら<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しく<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>して、<strong><span class="keyword"><ruby>硫化鉄<rp>(</rp><rt>りゅうかてつ</rt><rp>)</rp></ruby></span></strong>（FeS）という<ruby>別<rp>(</rp><rt>べつ</rt><rp>)</rp></ruby>の<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>ができるんだ',
    },
    {
      type: 'image',
      src: '/images/science/iron-sulfur-reaction.svg',
      alt: '鉄と硫黄の化合',
      caption: '鉄と硫黄が化合して硫化鉄になる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>硫化鉄<rp>(</rp><rt>りゅうかてつ</rt><rp>)</rp></ruby>って<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>と同じ<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'まったく<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うんだ！<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>は<ruby>磁石<rp>(</rp><rt>じしゃく</rt><rp>)</rp></ruby>につくけど、<ruby>硫化鉄<rp>(</rp><rt>りゅうかてつ</rt><rp>)</rp></ruby>は<strong>つかない</strong>。<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>を加えると、<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>は<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>が出るけど、<ruby>硫化鉄<rp>(</rp><rt>りゅうかてつ</rt><rp>)</rp></ruby>は<strong><ruby>硫化水素<rp>(</rp><rt>りゅうかすいそ</rt><rp>)</rp></ruby></strong>（<ruby>卵<rp>(</rp><rt>たまご</rt><rp>)</rp></ruby>の<ruby>腐<rp>(</rp><rt>くさ</rt><rp>)</rp></ruby>った<ruby>臭<rp>(</rp><rt>にお</rt><rp>)</rp></ruby>い）が出るよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>化合<rp>(</rp><rt>かごう</rt><rp>)</rp></ruby>すると<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>が変わるんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">化合</span>＝2種類以上の物質が結びつく化学変化。化合物はもとの物質と<strong>異なる性質</strong>をもつ（硫化鉄は磁石につかない、塩酸で硫化水素が発生）',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '他にも<ruby>化合<rp>(</rp><rt>かごう</rt><rp>)</rp></ruby>の<ruby>例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby>があるよ。<br/>・<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>+<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby> → <strong>水</strong><br/>・<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>+<ruby>硫黄<rp>(</rp><rt>いおう</rt><rp>)</rp></ruby> → <strong><ruby>硫化銅<rp>(</rp><rt>りゅうかどう</rt><rp>)</rp></ruby></strong><br/>・<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>+<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby> → <strong><ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby></strong>',
    },
    {
      type: 'quiz',
      question: '硫化鉄に塩酸を加えたとき発生する気体は？',
      options: [
        { letter: 'A', text: '水素', correct: false },
        { letter: 'B', text: '酸素', correct: false },
        { letter: 'C', text: '硫化水素', correct: true },
        { letter: 'D', text: '二酸化炭素', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>硫化水素<rp>(</rp><rt>りゅうかすいそ</rt><rp>)</rp></ruby>」</strong>です。<ruby>硫化鉄<rp>(</rp><rt>りゅうかてつ</rt><rp>)</rp></ruby>に<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>を加えると、<ruby>卵<rp>(</rp><rt>たまご</rt><rp>)</rp></ruby>の<ruby>腐<rp>(</rp><rt>くさ</rt><rp>)</rp></ruby>った<ruby>臭<rp>(</rp><rt>にお</rt><rp>)</rp></ruby>いの<ruby>硫化水素<rp>(</rp><rt>りゅうかすいそ</rt><rp>)</rp></ruby>が発生します。<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>に<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>を加えると<ruby>水素<rp>(</rp><rt>すいそ</rt><rp>)</rp></ruby>が発生します。',
    },
    {
      type: 'date',
      text: '<ruby>化学反応式<rp>(</rp><rt>かがくはんのうしき</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>を<ruby>化学式<rp>(</rp><rt>かがくしき</rt><rp>)</rp></ruby>で表した式を<strong><span class="keyword"><ruby>化学反応式<rp>(</rp><rt>かがくはんのうしき</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>化学反応式<rp>(</rp><rt>かがくはんのうしき</rt><rp>)</rp></ruby>は3ステップで書けるよ。<br/>1. 日本語で<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>を書く<br/>2. <ruby>化学式<rp>(</rp><rt>かがくしき</rt><rp>)</rp></ruby>に<ruby>置<rp>(</rp><rt>お</rt><rp>)</rp></ruby>きかえる<br/>3. <strong><ruby>係数<rp>(</rp><rt>けいすう</rt><rp>)</rp></ruby></strong>をつけて<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の数を合わせる',
    },
    {
      type: 'image',
      src: '/images/science/chemical-equation.svg',
      alt: '化学反応式の書き方',
      caption: '3ステップで化学反応式を書く',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の数を合わせるのが<ruby>難<rp>(</rp><rt>むずか</rt><rp>)</rp></ruby>しそう…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'コツは、一番<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>い<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>から合わせていくことだよ。<br/>例：H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O<br/>→ Oが合わない → H<sub>2</sub>Oを<strong>2つ</strong>にする<br/>→ Hが合わない → H<sub>2</sub>を<strong>2つ</strong>にする<br/>→ <strong>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</strong> 完成！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！<ruby>左<rp>(</rp><rt>ひだり</rt><rp>)</rp></ruby>と<ruby>右<rp>(</rp><rt>みぎ</rt><rp>)</rp></ruby>で<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の数が<ruby>同<rp>(</rp><rt>おな</rt><rp>)</rp></ruby>じになるように調整するんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">化学反応式</span>の書き方: 日本語 → 化学式に変換 → 係数で原子数を合わせる。左辺と右辺で<strong>各原子の数が等しい</strong>のがルール',
    },
    {
      type: 'quiz',
      question: '化学反応式として正しいものはどれ？',
      options: [
        { letter: 'A', text: 'H₂ + O₂ → H₂O', correct: false },
        { letter: 'B', text: '2H₂ + O₂ → 2H₂O', correct: true },
        { letter: 'C', text: 'H₂ + O → H₂O', correct: false },
        { letter: 'D', text: '2H + O → H₂O', correct: false },
      ],
      explanation:
        '<strong>正解はB「2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O」</strong>です。<ruby>左辺<rp>(</rp><rt>さへん</rt><rp>)</rp></ruby>：H=4, O=2、<ruby>右辺<rp>(</rp><rt>うへん</rt><rp>)</rp></ruby>：H=4, O=2 で<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の数が<ruby>一致<rp>(</rp><rt>いっち</rt><rp>)</rp></ruby>しています。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>化合<rp>(</rp><rt>かごう</rt><rp>)</rp></ruby></strong>：2種類以上の<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びついて<ruby>別<rp>(</rp><rt>べつ</rt><rp>)</rp></ruby>の<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>ができる<ruby>化学変化<rp>(</rp><rt>かがくへんか</rt><rp>)</rp></ruby>',
        '<strong><ruby>化合物<rp>(</rp><rt>かごうぶつ</rt><rp>)</rp></ruby>の<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby></strong>：もとの<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>とは<ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる（<ruby>硫化鉄<rp>(</rp><rt>りゅうかてつ</rt><rp>)</rp></ruby>＝<ruby>磁石<rp>(</rp><rt>じしゃく</rt><rp>)</rp></ruby>につかない・<ruby>塩酸<rp>(</rp><rt>えんさん</rt><rp>)</rp></ruby>で<ruby>硫化水素<rp>(</rp><rt>りゅうかすいそ</rt><rp>)</rp></ruby>発生）',
        '<strong><ruby>化学反応式<rp>(</rp><rt>かがくはんのうしき</rt><rp>)</rp></ruby></strong>：<ruby>化学式<rp>(</rp><rt>かがくしき</rt><rp>)</rp></ruby>で<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>を表す。<ruby>左辺<rp>(</rp><rt>さへん</rt><rp>)</rp></ruby>と<ruby>右辺<rp>(</rp><rt>うへん</rt><rp>)</rp></ruby>で<ruby>原子<rp>(</rp><rt>げんし</rt><rp>)</rp></ruby>の数を合わせる',
        '<ruby>例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby>：Fe + S → FeS、2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O、C + O<sub>2</sub> → CO<sub>2</sub>',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../history-chat/types';

export const taikaReformChat: HistoryChat = {
  id: 'taika-reform',
  icon: '⚔️',
  title: '大化の改新',
  subtitle: '〜645年〜 天皇中心の国づくりへ',
  characters: [
    {
      id: 'naka-no-oe',
      name: '古代史の先生',
      emoji: '⚔️',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
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
      emoji: '👧',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♀️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '645年〜',
    },
    {
      type: 'narrator',
      text: '<strong>645年</strong>、<strong><span class="keyword"><ruby>中大兄皇子<rp>(</rp><rt>なかのおおえのおうじ</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>中臣鎌足<rp>(</rp><rt>なかとみのかまたり</rt><rp>)</rp></ruby></span></strong>が<ruby>蘇我氏<rp>(</rp><rt>そがし</rt><rp>)</rp></ruby>を<ruby>倒<rp>(</rp><rt>たお</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>大化<rp>(</rp><rt>たいか</rt><rp>)</rp></ruby>の<ruby>改新<rp>(</rp><rt>かいしん</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'naka-no-oe',
      expression: 'explaining',
      text: '<span data-tooltip="天皇を中心とした国づくりを目指した政治改革。645年に始まった"><ruby>大化<rp>(</rp><rt>たいか</rt><rp>)</rp></ruby>の<ruby>改新<rp>(</rp><rt>かいしん</rt><rp>)</rp></ruby></span>というのは、<ruby>蘇我氏<rp>(</rp><rt>そがし</rt><rp>)</rp></ruby>の<ruby>横暴<rp>(</rp><rt>おうぼう</rt><rp>)</rp></ruby>を止めて、天皇を中心とした国づくりを目指した改革なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '蘇我氏はそんなに権力を持っていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'naka-no-oe',
      expression: 'thinking',
      text: 'そうなんだ。蘇我氏は天皇をしのぐほどの力を持っていたんだよ。だから<strong>中大兄皇子</strong>と<strong>中臣鎌足</strong>が協力してクーデターを起こしたんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'naka-no-oe',
      expression: 'excited',
      text: 'そして土地と<ruby>人民<rp>(</rp><rt>じんみん</rt><rp>)</rp></ruby>は天皇のものとする<strong><span class="keyword"><ruby>公地<rp>(</rp><rt>こうち</rt><rp>)</rp></ruby>・<ruby>公民<rp>(</rp><rt>こうみん</rt><rp>)</rp></ruby></span></strong>の制度を進めたんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '天皇中心の国づくりに大きく動いた出来事なんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">大化の改新</span>（645年）：<span class="keyword">中大兄皇子</span>と<span class="keyword">中臣鎌足</span>が蘇我氏を倒し、<span class="keyword">公地・公民</span>で天皇中心の国づくりを目指した！',
    },
    {
      type: 'quiz',
      question: '645年に始まった政治改革は？',
      options: [
        { letter: 'A', text: '班田収授法', correct: false },
        { letter: 'B', text: '承久の乱', correct: false },
        { letter: 'C', text: '建武の新政', correct: false },
        { letter: 'D', text: '大化の改新', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>大化<rp>(</rp><rt>たいか</rt><rp>)</rp></ruby>の<ruby>改新<rp>(</rp><rt>かいしん</rt><rp>)</rp></ruby>」</strong>です。<ruby>中大兄皇子<rp>(</rp><rt>なかのおおえのおうじ</rt><rp>)</rp></ruby>と<ruby>中臣鎌足<rp>(</rp><rt>なかとみのかまたり</rt><rp>)</rp></ruby>が蘇我氏を倒し、天皇中心の政治改革を始めました。',
    },
    {
      type: 'narrator',
      text: '<strong>663年</strong>の<strong><span class="keyword"><ruby>白村江<rp>(</rp><rt>はくすきのえ</rt><rp>)</rp></ruby>の<ruby>戦<rp>(</rp><rt>たたか</rt><rp>)</rp></ruby>い</span></strong>で<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>・<ruby>新羅<rp>(</rp><rt>しらぎ</rt><rp>)</rp></ruby>に<ruby>敗<rp>(</rp><rt>やぶ</rt><rp>)</rp></ruby>れた後、国防を強化。その後<strong><span class="keyword"><ruby>壬申<rp>(</rp><rt>じんしん</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></span></strong>を経て<strong><span class="keyword"><ruby>天武天皇<rp>(</rp><rt>てんむてんのう</rt><rp>)</rp></ruby></span></strong>が<ruby>即位<rp>(</rp><rt>そくい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>白村江の戦い</strong>で負けたあと、日本はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'naka-no-oe',
      expression: 'explaining',
      text: '<ruby>敗戦<rp>(</rp><rt>はいせん</rt><rp>)</rp></ruby>をきっかけに国の守りを固めたんだ。都を<strong><ruby>近江大津宮<rp>(</rp><rt>おうみおおつのみや</rt><rp>)</rp></ruby></strong>に移して<ruby>防備<rp>(</rp><rt>ぼうび</rt><rp>)</rp></ruby>を<ruby>整<rp>(</rp><rt>ととの</rt><rp>)</rp></ruby>えたよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'naka-no-oe',
      expression: 'excited',
      text: 'そして<strong>壬申の乱</strong>の後、<strong>天武天皇</strong>が強力な天皇中心の政治を進め、<strong><span class="keyword"><ruby>藤原京<rp>(</rp><rt>ふじわらきょう</rt><rp>)</rp></ruby></span></strong>を<ruby>造営<rp>(</rp><rt>ぞうえい</rt><rp>)</rp></ruby>したんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '戦いに負けたことが、逆に国を強くするきっかけになったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">白村江の戦い</span>で唐・新羅に敗北 → 国防強化。<span class="keyword">壬申の乱</span>の後、<span class="keyword">天武天皇</span>が<span class="keyword">藤原京</span>を造営！',
    },
    {
      type: 'quiz',
      question: '壬申の乱に勝利して即位した天皇は？',
      options: [
        { letter: 'A', text: '天智天皇', correct: false },
        { letter: 'B', text: '天武天皇', correct: true },
        { letter: 'C', text: '持統天皇', correct: false },
        { letter: 'D', text: '聖武天皇', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>天武天皇<rp>(</rp><rt>てんむてんのう</rt><rp>)</rp></ruby>」</strong>です。<ruby>壬申<rp>(</rp><rt>じんしん</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby>で勝利し、天皇の権力を強めた政治を行いました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>大化<rp>(</rp><rt>たいか</rt><rp>)</rp></ruby>の<ruby>改新<rp>(</rp><rt>かいしん</rt><rp>)</rp></ruby></strong>（645年）：<strong><ruby>公地<rp>(</rp><rt>こうち</rt><rp>)</rp></ruby>・<ruby>公民<rp>(</rp><rt>こうみん</rt><rp>)</rp></ruby></strong>で天皇中心の国づくり',
        '<strong><ruby>白村江<rp>(</rp><rt>はくすきのえ</rt><rp>)</rp></ruby>の<ruby>戦<rp>(</rp><rt>たたか</rt><rp>)</rp></ruby>い</strong>：<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>・<ruby>新羅<rp>(</rp><rt>しらぎ</rt><rp>)</rp></ruby>に<ruby>敗北<rp>(</rp><rt>はいぼく</rt><rp>)</rp></ruby> → 国防強化',
        '<strong><ruby>壬申<rp>(</rp><rt>じんしん</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></strong> → <strong><ruby>天武天皇<rp>(</rp><rt>てんむてんのう</rt><rp>)</rp></ruby></strong><ruby>即位<rp>(</rp><rt>そくい</rt><rp>)</rp></ruby>、<strong><ruby>藤原京<rp>(</rp><rt>ふじわらきょう</rt><rp>)</rp></ruby></strong><ruby>造営<rp>(</rp><rt>ぞうえい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const moonVenusChat: HistoryChat = {
  id: 'sci3-moon-venus',
  icon: '🌙',
  title: '月と金星の見え方',
  subtitle: '満ち欠け・内惑星・日食と月食',
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
      type: 'date',
      text: '月の満ち欠け',
    },
    {
      type: 'narrator',
      text: '月は地球のまわりを回る<strong><span class="keyword"><span data-tooltip="惑星のまわりを回る天体のこと。月は地球の衛星"><ruby>衛星<rp>(</rp><rt>えいせい</rt><rp>)</rp></ruby></span></span></strong>です。自ら光を出さず、太陽の光を<ruby>反射<rp>(</rp><rt>はんしゃ</rt><rp>)</rp></ruby>して光っています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '月の形が変わるのは、月自体が変形しているわけじゃないよ。太陽・地球・月の<ruby>位置関係<rp>(</rp><rt>いちかんけい</rt><rp>)</rp></ruby>が変わることで、光が当たっている面の見え方が変わるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'なるほど！ じゃあ新月のときは月がなくなるわけじゃないんですね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！<strong>新月</strong>は月が太陽と同じ方向にあって、光っている面が地球側を向いていないから見えないだけだよ。約<strong>29.5日</strong>で新月→<ruby>三日月<rp>(</rp><rt>みかづき</rt><rp>)</rp></ruby>→<ruby>上弦<rp>(</rp><rt>じょうげん</rt><rp>)</rp></ruby>の月→<ruby>満月<rp>(</rp><rt>まんげつ</rt><rp>)</rp></ruby>→<ruby>下弦<rp>(</rp><rt>かげん</rt><rp>)</rp></ruby>の月→新月と<ruby>繰<rp>(</rp><rt>く</rt><rp>)</rp></ruby>り返すんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/moon-phases.svg',
      alt: '月の満ち欠けのしくみ',
      caption: '太陽・地球・月の位置関係で満ち欠けが起こる',
    },
    {
      type: 'summary-point',
      text: '月は<span class="keyword">太陽光を反射</span>して光る。位置関係の変化で<span class="keyword">約29.5日</span>の周期で<span class="keyword">満ち欠け</span>する！',
    },
    {
      type: 'quiz',
      question: '月の満ち欠けの周期は約何日か。',
      options: [
        { letter: 'A', text: '約7日', correct: false },
        { letter: 'B', text: '約15日', correct: false },
        { letter: 'C', text: '約29.5日', correct: true },
        { letter: 'D', text: '約365日', correct: false },
      ],
      explanation:
        '<strong>正解はC「約29.5日」</strong>です。月が地球のまわりを<ruby>公転<rp>(</rp><rt>こうてん</rt><rp>)</rp></ruby>することで、新月から次の新月まで約29.5日かかります。',
    },
    {
      type: 'date',
      text: '金星の見え方',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><span data-tooltip="地球より太陽に近い側を公転する惑星（水星・金星）">金星</span></span></strong>は地球より内側を<ruby>公転<rp>(</rp><rt>こうてん</rt><rp>)</rp></ruby>する<strong><ruby>内惑星<rp>(</rp><rt>ないわくせい</rt><rp>)</rp></ruby></strong>です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '金星ってすごく明るく見えますよね。夜中にも見えるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '実は金星は<strong>真夜中には絶対に見えない</strong>んだ。地球より内側を回っているから、太陽から大きく<ruby>離<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>れることがないんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'えっ、そうなんですか！ じゃあいつ見えるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '明け方の東の空に見えるときは<strong>「<ruby>明<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>けの<ruby>明星<rp>(</rp><rt>みょうじょう</rt><rp>)</rp></ruby>」</strong>、夕方の西の空に見えるときは<strong>「よいの明星」</strong>とよばれるよ。さらに金星は、地球との<ruby>距離<rp>(</rp><rt>きょり</rt><rp>)</rp></ruby>が変わるから<strong>大きさと形</strong>も変化して見えるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/venus-orbit.svg',
      alt: '金星の見え方と公転軌道',
      caption: '内惑星の金星は明け方か夕方にしか見えない',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">内惑星</span>の金星は真夜中に見えない。<span class="keyword">明けの明星</span>（明け方・東）か<span class="keyword">よいの明星</span>（夕方・西）にしか見えない！',
    },
    {
      type: 'date',
      text: '日食と月食',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '日食と月食、名前が<ruby>似<rp>(</rp><rt>に</rt><rp>)</rp></ruby>ているけど、しくみはまったく<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うんだ。整理してみよう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '日食は太陽が<ruby>隠<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>れるんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！<strong><ruby>日食<rp>(</rp><rt>にっしょく</rt><rp>)</rp></ruby></strong>は<strong>太陽−月−地球</strong>の順に並んだとき、月が太陽をかくす<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>だよ。<strong>新月</strong>のときに起こるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/solar-eclipse.svg',
      alt: '日食のしくみ',
      caption: '月が太陽の光をさえぎり、地球に影ができる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'じゃあ<ruby>月食<rp>(</rp><rt>げっしょく</rt><rp>)</rp></ruby>は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong>月食</strong>は<strong>太陽−地球−月</strong>の順に並んだとき、地球の<ruby>影<rp>(</rp><rt>かげ</rt><rp>)</rp></ruby>に月が入る現象だよ。<strong>満月</strong>のときに起こるんだ。日食＝新月、月食＝満月とセットで覚えよう！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/lunar-eclipse.svg',
      alt: '月食のしくみ',
      caption: '地球の影の中に月が入る',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/eclipse-photos.png',
      alt: '日食と月食の写真',
      caption: '左上：皆既日食、右上：金環日食、左下：皆既月食、右下：部分月食',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">日食</span>＝太陽−月−地球（新月）／ <span class="keyword">月食</span>＝太陽−地球−月（満月）',
    },
    {
      type: 'quiz',
      question: '日食が起こるときの天体の並び順はどれか。',
      options: [
        { letter: 'A', text: '太陽−地球−月', correct: false },
        { letter: 'B', text: '太陽−月−地球', correct: true },
        { letter: 'C', text: '月−太陽−地球', correct: false },
        { letter: 'D', text: '地球−太陽−月', correct: false },
      ],
      explanation:
        '<strong>正解はB「太陽−月−地球」</strong>です。<ruby>日食<rp>(</rp><rt>にっしょく</rt><rp>)</rp></ruby>は新月のとき、太陽−月−地球の順に一直線に並び、月が太陽をかくす<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '月は<strong><ruby>衛星<rp>(</rp><rt>えいせい</rt><rp>)</rp></ruby></strong>で太陽光を反射して光る。<strong>約29.5日</strong>の周期で<strong><ruby>満<rp>(</rp><rt>み</rt><rp>)</rp></ruby>ち<ruby>欠<rp>(</rp><rt>か</rt><rp>)</rp></ruby>け</strong>する',
        '<strong>金星</strong>は<strong><ruby>内惑星<rp>(</rp><rt>ないわくせい</rt><rp>)</rp></ruby></strong>で真夜中に見えない。<strong><ruby>明<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>けの<ruby>明星<rp>(</rp><rt>みょうじょう</rt><rp>)</rp></ruby></strong>か<strong>よいの明星</strong>で観測',
        '<strong><ruby>日食<rp>(</rp><rt>にっしょく</rt><rp>)</rp></ruby></strong>＝太陽−月−地球（<ruby>新月<rp>(</rp><rt>しんげつ</rt><rp>)</rp></ruby>時） ／ <strong><ruby>月食<rp>(</rp><rt>げっしょく</rt><rp>)</rp></ruby></strong>＝太陽−地球−月（<ruby>満月<rp>(</rp><rt>まんげつ</rt><rp>)</rp></ruby>時）',
      ],
    },
  ],
};

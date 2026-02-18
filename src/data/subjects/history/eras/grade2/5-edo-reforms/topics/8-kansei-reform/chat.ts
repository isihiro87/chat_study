import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kanseiReformChat: HistoryChat = {
  id: 'kansei-reform',
  icon: '📚',
  title: '寛政の改革',
  subtitle: '〜1787年〜 松平定信の引き締め政策',
  characters: [
    {
      id: 'teacher',
      name: '幕政先生',
      emoji: '📚',
      colorFrom: '#1e40af',
      colorTo: '#3b82f6',
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
      text: '天明7年（1787年）',
    },
    {
      type: 'narrator',
      text: '<ruby>田沼意次<rp>(</rp><rt>たぬまおきつぐ</rt><rp>)</rp></ruby>の<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>後、<ruby>老中<rp>(</rp><rt>ろうじゅう</rt><rp>)</rp></ruby>となった<strong><span class="keyword"><ruby>松平定信<rp>(</rp><rt>まつだいらさだのぶ</rt><rp>)</rp></ruby></span></strong>。<ruby>吉宗<rp>(</rp><rt>よしむね</rt><rp>)</rp></ruby>の孫として、祖父の政治をお手本にしました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="田沼意次のあと、幕政の立て直しを任された老中"><strong>松平定信</strong></span>は、<ruby>徳川吉宗<rp>(</rp><rt>とくがわよしむね</rt><rp>)</rp></ruby>の孫にあたる人物だよ。祖父の<ruby>享保<rp>(</rp><rt>きょうほう</rt><rp>)</rp></ruby>の改革をお手本にして、<strong><span class="keyword"><ruby>寛政<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の改革</span></strong>を始めたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どうして田沼意次のあとに改革が必要だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '田沼の時代は<ruby>賄賂<rp>(</rp><rt>わいろ</rt><rp>)</rp></ruby>が横行して政治が乱れ、<ruby>天明<rp>(</rp><rt>てんめい</rt><rp>)</rp></ruby>の<ruby>飢饉<rp>(</rp><rt>ききん</rt><rp>)</rp></ruby>で民衆も苦しんでいたからね。定信は「厳しく引き締め直す」と決意したんだよ',
    },
    {
      type: 'narrator',
      text: '定信は<strong><span class="keyword"><ruby>倹約<rp>(</rp><rt>けんやく</rt><rp>)</rp></ruby></span></strong>と<ruby>風紀<rp>(</rp><rt>ふうき</rt><rp>)</rp></ruby>の引き締めを行い、<ruby>武士<rp>(</rp><rt>ぶし</rt><rp>)</rp></ruby>や<ruby>庶民<rp>(</rp><rt>しょみん</rt><rp>)</rp></ruby>に<ruby>質素<rp>(</rp><rt>しっそ</rt><rp>)</rp></ruby>な生活を強制しました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">松平定信</span>（吉宗の孫）が<span class="keyword">寛政の改革</span>を開始。<span class="keyword">倹約</span>と風紀の引き締めが柱！',
    },
    {
      type: 'quiz',
      question: '寛政の改革を行った、吉宗の孫である老中は？',
      options: [
        { letter: 'A', text: '田沼意次', correct: false },
        { letter: 'B', text: '水野忠邦', correct: false },
        { letter: 'C', text: '新井白石', correct: false },
        { letter: 'D', text: '松平定信', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>松平定信<rp>(</rp><rt>まつだいらさだのぶ</rt><rp>)</rp></ruby>」</strong>です。<ruby>徳川吉宗<rp>(</rp><rt>とくがわよしむね</rt><rp>)</rp></ruby>の孫で、祖父の政治をお手本に厳しい改革を行いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '具体的にはどんな政策をしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<span data-tooltip="飢饉に備えて各地の大名に米を蓄えさせた制度"><strong><span class="keyword"><ruby>囲い米<rp>(</rp><rt>かこいまい</rt><rp>)</rp></ruby>の制</span></strong></span>で各地に米を蓄えさせ、飢饉に備えたんだ。さらに<span data-tooltip="旗本や御家人の借金を帳消しにした法令"><strong><span class="keyword"><ruby>棄捐令<rp>(</rp><rt>きえんれい</rt><rp>)</rp></ruby></span></strong></span>で<ruby>旗本<rp>(</rp><rt>はたもと</rt><rp>)</rp></ruby>や<ruby>御家人<rp>(</rp><rt>ごけにん</rt><rp>)</rp></ruby>の借金を帳消しにしたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '借金を帳消しにしたんですか！それはすごい！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '生活に困っていた旗本や御家人を救うための政策だったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">囲い米の制</span>で飢饉に備え、<span class="keyword">棄捐令</span>で旗本・御家人の借金を帳消しに！',
    },
    {
      type: 'quiz',
      question: '寛政の改革で、旗本や御家人の借金を帳消しにした法令は？',
      options: [
        { letter: 'A', text: '囲い米の制', correct: false },
        { letter: 'B', text: '倹約令', correct: false },
        { letter: 'C', text: '棄捐令', correct: true },
        { letter: 'D', text: '上知令', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>棄捐令<rp>(</rp><rt>きえんれい</rt><rp>)</rp></ruby>」</strong>です。生活に困る<ruby>旗本<rp>(</rp><rt>はたもと</rt><rp>)</rp></ruby>や<ruby>御家人<rp>(</rp><rt>ごけにん</rt><rp>)</rp></ruby>の借金を帳消しにして救済しました。',
    },
    {
      type: 'date',
      text: '寛政4年（1792年）',
    },
    {
      type: 'narrator',
      text: 'その頃、北の海ではロシアが<ruby>南下<rp>(</rp><rt>なんか</rt><rp>)</rp></ruby>を始めていました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ロシアが日本に近づいてきたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そうなんだ。<span data-tooltip="ロシアの使節で、1792年に蝦夷地の根室に来航し通商を求めた"><strong><span class="keyword">ラクスマン</span></strong></span>というロシアの<ruby>使節<rp>(</rp><rt>しせつ</rt><rp>)</rp></ruby>が<ruby>蝦夷地<rp>(</rp><rt>えぞち</rt><rp>)</rp></ruby>の<ruby>根室<rp>(</rp><rt>ねむろ</rt><rp>)</rp></ruby>に来航して、<ruby>通商<rp>(</rp><rt>つうしょう</rt><rp>)</rp></ruby>を要求してきたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '幕府はどう対応したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '幕府はこれを拒否したんだ。でもその後も<strong><span class="keyword">レザノフ</span></strong>が<ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby>に来航するなど、外国の影が濃くなっていったよ',
    },
    {
      type: 'narrator',
      text: '幕府は<strong><span class="keyword"><ruby>間宮林蔵<rp>(</rp><rt>まみやりんぞう</rt><rp>)</rp></ruby></span></strong>らに蝦夷地を<ruby>探検<rp>(</rp><rt>たんけん</rt><rp>)</rp></ruby>させ、北方の<ruby>防備<rp>(</rp><rt>ぼうび</rt><rp>)</rp></ruby>を固めようとしました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ラクスマン</span>が蝦夷地の根室に来航 → 幕府は拒否。<span class="keyword">間宮林蔵</span>らに北方探検を命じた！',
    },
    {
      type: 'quiz',
      question: '1792年に蝦夷地の根室に来航したロシアの使節は？',
      options: [
        { letter: 'A', text: 'レザノフ', correct: false },
        { letter: 'B', text: 'ペリー', correct: false },
        { letter: 'C', text: 'ラクスマン', correct: true },
        { letter: 'D', text: 'プチャーチン', correct: false },
      ],
      explanation:
        '<strong>正解はC「ラクスマン」</strong>です。<ruby>通商<rp>(</rp><rt>つうしょう</rt><rp>)</rp></ruby>を求めて来航しましたが、幕府は拒否しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>松平定信<rp>(</rp><rt>まつだいらさだのぶ</rt><rp>)</rp></ruby></strong>は<ruby>吉宗<rp>(</rp><rt>よしむね</rt><rp>)</rp></ruby>の孫で、<strong><ruby>寛政<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の改革</strong>を行った',
        '<strong><ruby>囲い米<rp>(</rp><rt>かこいまい</rt><rp>)</rp></ruby>の制</strong>で<ruby>飢饉<rp>(</rp><rt>ききん</rt><rp>)</rp></ruby>に備え、<strong><ruby>棄捐令<rp>(</rp><rt>きえんれい</rt><rp>)</rp></ruby></strong>で借金を帳消しに',
        '<strong>ラクスマン</strong>が<ruby>蝦夷地<rp>(</rp><rt>えぞち</rt><rp>)</rp></ruby>に来航し、<ruby>通商<rp>(</rp><rt>つうしょう</rt><rp>)</rp></ruby>を要求',
        '<strong><ruby>間宮林蔵<rp>(</rp><rt>まみやりんぞう</rt><rp>)</rp></ruby></strong>らに蝦夷地を探検させた',
      ],
    },
  ],
};

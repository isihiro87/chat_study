import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postwarConstitutionChat: HistoryChat = {
  id: 'postwar-constitution',
  icon: '📜',
  title: '日本国憲法と民主化',
  subtitle: '〜戦後〜 三大原則と社会改革',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👨‍🏫',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
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
      text: '1946年〜1947年',
    },
    {
      type: 'narrator',
      text: 'GHQの<ruby>指導<rp>(</rp><rt>しどう</rt><rp>)</rp></ruby>のもと、新しい<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby>が作られることになりました。1946年11月3日に<strong><span class="keyword"><ruby>日本国憲法<rp>(</rp><rt>にほんこくけんぽう</rt><rp>)</rp></ruby></span></strong>が<ruby>公布<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>されます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="1946年11月3日に公布、1947年5月3日に施行された日本の最高法規"><strong>日本国憲法</strong></span>には三つの大きな<ruby>原則<rp>(</rp><rt>げんそく</rt><rp>)</rp></ruby>が定められたんだよ。<strong><span class="keyword"><ruby>国民主権<rp>(</rp><rt>こくみんしゅけん</rt><rp>)</rp></ruby></span></strong>、<strong><span class="keyword"><ruby>基本的人権<rp>(</rp><rt>きほんてきじんけん</rt><rp>)</rp></ruby>の<ruby>尊重<rp>(</rp><rt>そんちょう</rt><rp>)</rp></ruby></span></strong>、そして<strong><span class="keyword"><ruby>平和主義<rp>(</rp><rt>へいわしゅぎ</rt><rp>)</rp></ruby></span></strong>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>国民主権</strong>ということは、<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>の主役は私たち<ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby>ということですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！そして<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>は「日本国および日本国民<ruby>統合<rp>(</rp><rt>とうごう</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby></span></strong>」と定められたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby>を<ruby>放棄<rp>(</rp><rt>ほうき</rt><rp>)</rp></ruby>する<ruby>条文<rp>(</rp><rt>じょうぶん</rt><rp>)</rp></ruby>もあるんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<span data-tooltip="戦争の放棄、戦力の不保持、交戦権の否認を定めた条文">第9条</span>で戦争を<ruby>永久<rp>(</rp><rt>えいきゅう</rt><rp>)</rp></ruby>に<ruby>放棄<rp>(</rp><rt>ほうき</rt><rp>)</rp></ruby>することを定めているんだ。二度と戦争を起こさないという強い<ruby>決意<rp>(</rp><rt>けつい</rt><rp>)</rp></ruby>が込められた、世界でも<ruby>類<rp>(</rp><rt>るい</rt><rp>)</rp></ruby>を見ない<ruby>平和憲法<rp>(</rp><rt>へいわけんぽう</rt><rp>)</rp></ruby>だよ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">日本国憲法</span>の三大原則：<span class="keyword">国民主権</span>・<span class="keyword">基本的人権の尊重</span>・<span class="keyword">平和主義</span>。天皇は「<span class="keyword">象徴</span>」と規定！',
    },
    {
      type: 'quiz',
      question: '日本国憲法の三大原則に含まれないものはどれ？',
      options: [
        { letter: 'A', text: '国民主権', correct: false },
        { letter: 'B', text: '富国強兵', correct: true },
        { letter: 'C', text: '基本的人権の尊重', correct: false },
        { letter: 'D', text: '平和主義', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>富国強兵<rp>(</rp><rt>ふこくきょうへい</rt><rp>)</rp></ruby>」</strong>です。<ruby>富国強兵<rp>(</rp><rt>ふこくきょうへい</rt><rp>)</rp></ruby>は<ruby>明治時代<rp>(</rp><rt>めいじじだい</rt><rp>)</rp></ruby>のスローガンで、<strong>日本国憲法</strong>の三大原則は<strong>国民主権</strong>・<strong>基本的人権の尊重</strong>・<strong>平和主義</strong>です。',
    },
    {
      type: 'narrator',
      text: '<strong>日本国憲法</strong>の<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>とともに、社会を変えるための改革も進められました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby>のほかにはどんな改革が行われたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="政府が地主の農地を買い上げ、小作人に安く売ることで自作農を増やした改革"><strong><span class="keyword"><ruby>農地改革<rp>(</rp><rt>のうちかいかく</rt><rp>)</rp></ruby></span></strong></span>で、<ruby>地主<rp>(</rp><rt>じぬし</rt><rp>)</rp></ruby>の土地を<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>が買い上げて<ruby>小作人<rp>(</rp><rt>こさくにん</rt><rp>)</rp></ruby>に安く売ったんだ。これで多くの<ruby>自作農<rp>(</rp><rt>じさくのう</rt><rp>)</rp></ruby>が生まれたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '自分の<ruby>田<rp>(</rp><rt>た</rt><rp>)</rp></ruby>んぼを持てるようになったんですね！ほかには？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<span data-tooltip="三井・三菱などの巨大な独占資本を解体し、経済の民主化を進めた改革"><strong><span class="keyword"><ruby>財閥解体<rp>(</rp><rt>ざいばつかいたい</rt><rp>)</rp></ruby></span></strong></span>で<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>の<ruby>民主化<rp>(</rp><rt>みんしゅか</rt><rp>)</rp></ruby>を進めて、<strong><span class="keyword"><ruby>労働組合法<rp>(</rp><rt>ろうどうくみあいほう</rt><rp>)</rp></ruby></span></strong>で<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>の<ruby>権利<rp>(</rp><rt>けんり</rt><rp>)</rp></ruby>を<ruby>保障<rp>(</rp><rt>ほしょう</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>教育基本法<rp>(</rp><rt>きょういくきほんほう</rt><rp>)</rp></ruby></span></strong>で<ruby>民主教育<rp>(</rp><rt>みんしゅきょういく</rt><rp>)</rp></ruby>の<ruby>土台<rp>(</rp><rt>どだい</rt><rp>)</rp></ruby>も<ruby>築<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>いたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">農地改革</span>で自作農が増加。<span class="keyword">財閥解体</span>・<span class="keyword">労働組合法</span>・<span class="keyword">教育基本法</span>で社会全体を民主化！',
    },
    {
      type: 'quiz',
      question: '政府が地主の土地を買い上げ小作人に安く売った改革は？',
      options: [
        { letter: 'A', text: '財閥解体', correct: false },
        { letter: 'B', text: '農地改革', correct: true },
        { letter: 'C', text: '地租改正', correct: false },
        { letter: 'D', text: '殖産興業', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>農地改革<rp>(</rp><rt>のうちかいかく</rt><rp>)</rp></ruby>」</strong>です。<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>が<ruby>地主<rp>(</rp><rt>じぬし</rt><rp>)</rp></ruby>の<ruby>農地<rp>(</rp><rt>のうち</rt><rp>)</rp></ruby>を買い上げ、<ruby>小作人<rp>(</rp><rt>こさくにん</rt><rp>)</rp></ruby>に安く売ることで多くの<ruby>自作農<rp>(</rp><rt>じさくのう</rt><rp>)</rp></ruby>が生まれました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>日本国憲法<rp>(</rp><rt>にほんこくけんぽう</rt><rp>)</rp></ruby></strong>：1946年<ruby>公布<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>、1947年<ruby>施行<rp>(</rp><rt>しこう</rt><rp>)</rp></ruby>',
        '三大原則：<strong><ruby>国民主権<rp>(</rp><rt>こくみんしゅけん</rt><rp>)</rp></ruby></strong>・<strong><ruby>基本的人権<rp>(</rp><rt>きほんてきじんけん</rt><rp>)</rp></ruby>の<ruby>尊重<rp>(</rp><rt>そんちょう</rt><rp>)</rp></ruby></strong>・<strong><ruby>平和主義<rp>(</rp><rt>へいわしゅぎ</rt><rp>)</rp></ruby></strong>',
        '<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>は「<strong><ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby></strong>」と規定',
        '<strong><ruby>農地改革<rp>(</rp><rt>のうちかいかく</rt><rp>)</rp></ruby></strong>・<strong><ruby>財閥解体<rp>(</rp><rt>ざいばつかいたい</rt><rp>)</rp></ruby></strong>・<strong><ruby>教育基本法<rp>(</rp><rt>きょういくきほんほう</rt><rp>)</rp></ruby></strong>などの<ruby>民主化<rp>(</rp><rt>みんしゅか</rt><rp>)</rp></ruby>改革',
      ],
    },
  ],
};

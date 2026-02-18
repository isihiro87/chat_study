import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kyohoReformChat: HistoryChat = {
  id: 'kyoho-reform',
  icon: '⚖️',
  title: '享保の改革と社会の変化',
  subtitle: '〜1716年〜 徳川吉宗の挑戦',
  characters: [
    {
      id: 'teacher',
      name: '政治の先生',
      emoji: '⚖️',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
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
      text: '享保元年（1716年）',
    },
    {
      type: 'narrator',
      text: '<ruby>綱吉<rp>(</rp><rt>つなよし</rt><rp>)</rp></ruby>の時代に傾きかけた<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>の<ruby>財政<rp>(</rp><rt>ざいせい</rt><rp>)</rp></ruby>。「このままではいけない！」と立ち上がったのが、8代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><strong><span class="keyword"><span data-tooltip="江戸幕府の8代将軍。享保の改革を行い「米将軍」とも呼ばれた"><ruby>徳川吉宗<rp>(</rp><rt>とくがわよしむね</rt><rp>)</rp></ruby></span></span></strong>でした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>徳川吉宗</strong>は<ruby>紀州藩<rp>(</rp><rt>きしゅうはん</rt><rp>)</rp></ruby>の出身で、<ruby>質素倹約<rp>(</rp><rt>しっそけんやく</rt><rp>)</rp></ruby>を<ruby>徹底<rp>(</rp><rt>てってい</rt><rp>)</rp></ruby>した人物なんだ。自ら木綿の着物を着て、おかずも一品にしたほどだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '将軍なのにそんなに質素だったんですか！どんな改革を行ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<strong><span class="keyword"><span data-tooltip="大名に米を献上させる代わりに参勤交代の江戸滞在期間を短くした制度"><ruby>上<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>げ<ruby>米<rp>(</rp><rt>まい</rt><rp>)</rp></ruby>の<ruby>制<rp>(</rp><rt>せい</rt><rp>)</rp></ruby></span></span></strong>を実施したんだ。大名に米を<ruby>献上<rp>(</rp><rt>けんじょう</rt><rp>)</rp></ruby>してもらう代わりに、<ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby>の<ruby>江戸<rp>(</rp><rt>えど</rt><rp>)</rp></ruby><ruby>滞在<rp>(</rp><rt>たいざい</rt><rp>)</rp></ruby>期間を短くしたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '大名にとっても悪くない取引だったんですね',
    },
    {
      type: 'summary-point',
      text: '8代将軍<span class="keyword">徳川吉宗</span>が<span class="keyword">享保の改革</span>を実施。<span class="keyword">上げ米の制</span>で大名に米を献上させ、参勤交代を緩和！',
    },
    {
      type: 'quiz',
      question: '享保の改革を行った8代将軍は誰？',
      options: [
        { letter: 'A', text: '徳川綱吉', correct: false },
        { letter: 'B', text: '徳川吉宗', correct: true },
        { letter: 'C', text: '徳川家斉', correct: false },
        { letter: 'D', text: '徳川慶喜', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>徳川吉宗<rp>(</rp><rt>とくがわよしむね</rt><rp>)</rp></ruby>」</strong>です。8代将軍吉宗は「<ruby>米将軍<rp>(</rp><rt>こめしょうぐん</rt><rp>)</rp></ruby>」とも呼ばれ、<ruby>享保<rp>(</rp><rt>きょうほう</rt><rp>)</rp></ruby>の<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>で幕府の立て直しを図りました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">上げ米の制</span>：大名に米を献上させる代わりに参勤交代の江戸滞在を短くした制度！',
    },
    {
      type: 'quiz',
      question: '大名に米を献上させる代わりに参勤交代の江戸滞在を短くした制度は？',
      options: [
        { letter: 'A', text: '目安箱', correct: false },
        { letter: 'B', text: '上げ米の制', correct: true },
        { letter: 'C', text: '公事方御定書', correct: false },
        { letter: 'D', text: '倹約令', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>上<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>げ<ruby>米<rp>(</rp><rt>まい</rt><rp>)</rp></ruby>の<ruby>制<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>」</strong>です。<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>の<ruby>財政難<rp>(</rp><rt>ざいせいなん</rt><rp>)</rp></ruby>を助ける代わりに、大名の<ruby>負担<rp>(</rp><rt>ふたん</rt><rp>)</rp></ruby>を軽くする制度でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '他にはどんな改革をしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>庶民<rp>(</rp><rt>しょみん</rt><rp>)</rp></ruby>の声を直接聞くために<strong><span class="keyword"><span data-tooltip="庶民が政治への意見や要望を投書できる箱。吉宗が江戸城前に設置した"><ruby>目安箱<rp>(</rp><rt>めやすばこ</rt><rp>)</rp></ruby></span></span></strong>を設置したんだ。これは画期的だったよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '庶民が直接意見を言えたんですか！何か実現したものはあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong>目安箱</strong>への<ruby>投書<rp>(</rp><rt>とうしょ</rt><rp>)</rp></ruby>がきっかけで、<span data-tooltip="江戸の小石川に作られた無料の病院。貧しい人々のための医療施設"><ruby>小石川養生所<rp>(</rp><rt>こいしかわようじょうしょ</rt><rp>)</rp></ruby></span>という無料の病院が作られたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">目安箱</span>で庶民の声を直接聞く仕組みを作り、小石川養生所（無料の病院）が生まれた！',
    },
    {
      type: 'quiz',
      question: '庶民が政治への意見を投書できるように吉宗が設置したものは？',
      options: [
        { letter: 'A', text: '訴状箱', correct: false },
        { letter: 'B', text: '意見箱', correct: false },
        { letter: 'C', text: '投書箱', correct: false },
        { letter: 'D', text: '目安箱', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>目安箱<rp>(</rp><rt>めやすばこ</rt><rp>)</rp></ruby>」</strong>です。目安箱への<ruby>投書<rp>(</rp><rt>とうしょ</rt><rp>)</rp></ruby>から<ruby>小石川養生所<rp>(</rp><rt>こいしかわようじょうしょ</rt><rp>)</rp></ruby>（病院）が作られるなど、実際に政策に<ruby>反映<rp>(</rp><rt>はんえい</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '法律の面でも改革があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'それまで<ruby>曖昧<rp>(</rp><rt>あいまい</rt><rp>)</rp></ruby>だった<ruby>裁判<rp>(</rp><rt>さいばん</rt><rp>)</rp></ruby>の基準を明確にするために、<strong><span class="keyword"><span data-tooltip="裁判の基準となる法律集。盗みの被害額による刑罰の違いなど具体的な基準を定めた"><ruby>公事方御定書<rp>(</rp><rt>くじかたおさだめがき</rt><rp>)</rp></ruby></span></span></strong>を<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>したんだ。<ruby>盗<rp>(</rp><rt>ぬす</rt><rp>)</rp></ruby>みの<ruby>被害額<rp>(</rp><rt>ひがいがく</rt><rp>)</rp></ruby>による<ruby>刑罰<rp>(</rp><rt>けいばつ</rt><rp>)</rp></ruby>の違いなど、具体的な基準が定められたよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">公事方御定書</span>で裁判の基準を明確にした！',
    },
    {
      type: 'quiz',
      question: '裁判の基準となる法律を定めたものは？',
      options: [
        { letter: 'A', text: '武家諸法度', correct: false },
        { letter: 'B', text: '公事方御定書', correct: true },
        { letter: 'C', text: '御成敗式目', correct: false },
        { letter: 'D', text: '禁中並公家諸法度', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>公事方御定書<rp>(</rp><rt>くじかたおさだめがき</rt><rp>)</rp></ruby>」</strong>です。<ruby>盗<rp>(</rp><rt>ぬす</rt><rp>)</rp></ruby>みの<ruby>被害額<rp>(</rp><rt>ひがいがく</rt><rp>)</rp></ruby>による<ruby>刑罰<rp>(</rp><rt>けいばつ</rt><rp>)</rp></ruby>の違いなど、具体的な基準が定められました。',
    },
    {
      type: 'narrator',
      text: 'この時代、<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>の形も変わっていきます。<ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby><ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>が減ったことで、<ruby>木綿<rp>(</rp><rt>もめん</rt><rp>)</rp></ruby>や<ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby>の<ruby>国産化<rp>(</rp><rt>こくさんか</rt><rp>)</rp></ruby>が進みました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どうやって国産化したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="問屋が農民に道具やお金を貸して、家で製品を作らせる生産方式"><ruby>問屋制家内工業<rp>(</rp><rt>とんやせいかないこうぎょう</rt><rp>)</rp></ruby></span></span></strong>といって、<ruby>問屋<rp>(</rp><rt>とんや</rt><rp>)</rp></ruby>が<ruby>農民<rp>(</rp><rt>のうみん</rt><rp>)</rp></ruby>に道具やお金を貸して家で<ruby>製品<rp>(</rp><rt>せいひん</rt><rp>)</rp></ruby>を作らせる仕組みが広がったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '農民も農業以外の仕事ができるようになったんですね。もっと効率的なやり方もあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'さらに<ruby>効率化<rp>(</rp><rt>こうりつか</rt><rp>)</rp></ruby>を求めて、<strong><span class="keyword"><span data-tooltip="作業場に人を集めて分業で製品を作る生産方式。マニュファクチュアとも呼ばれる"><ruby>工場制手工業<rp>(</rp><rt>こうじょうせいしゅこうぎょう</rt><rp>)</rp></ruby>（マニュファクチュア）</span></span></strong>も登場したよ。作業場に人を集めて<ruby>分業<rp>(</rp><rt>ぶんぎょう</rt><rp>)</rp></ruby>で製品を作る仕組みだね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">問屋制家内工業</span>（問屋が農民に道具を貸す）→ <span class="keyword">工場制手工業</span>（作業場で分業）へと発展！',
    },
    {
      type: 'quiz',
      question: '問屋が農民に道具やお金を貸して家で製品を作らせる仕組みを何という？',
      options: [
        { letter: 'A', text: '工場制手工業', correct: false },
        { letter: 'B', text: '株仲間', correct: false },
        { letter: 'C', text: '問屋制家内工業', correct: true },
        { letter: 'D', text: '座', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>問屋制家内工業<rp>(</rp><rt>とんやせいかないこうぎょう</rt><rp>)</rp></ruby>」</strong>です。<ruby>農民<rp>(</rp><rt>のうみん</rt><rp>)</rp></ruby>は<ruby>農業<rp>(</rp><rt>のうぎょう</rt><rp>)</rp></ruby>以外の<ruby>収入<rp>(</rp><rt>しゅうにゅう</rt><rp>)</rp></ruby>を得られるようになりました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">工場制手工業（マニュファクチュア）</span>：作業場に人を集めて分業で製品を作る仕組み！',
    },
    {
      type: 'quiz',
      question: '作業場に人を集めて分業で製品を作る仕組みを何という？',
      options: [
        { letter: 'A', text: '工場制手工業（マニュファクチュア）', correct: true },
        { letter: 'B', text: '座', correct: false },
        { letter: 'C', text: '株仲間', correct: false },
        { letter: 'D', text: '問屋制家内工業', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>工場制手工業<rp>(</rp><rt>こうじょうせいしゅこうぎょう</rt><rp>)</rp></ruby>（マニュファクチュア）」</strong>です。<ruby>分業<rp>(</rp><rt>ぶんぎょう</rt><rp>)</rp></ruby>により、より<ruby>効率的<rp>(</rp><rt>こうりつてき</rt><rp>)</rp></ruby>に生産できるようになりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>享保<rp>(</rp><rt>きょうほう</rt><rp>)</rp></ruby>の<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby></strong>は8代将軍<strong><ruby>徳川吉宗<rp>(</rp><rt>とくがわよしむね</rt><rp>)</rp></ruby></strong>が行った',
        '<strong><ruby>上<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>げ<ruby>米<rp>(</rp><rt>まい</rt><rp>)</rp></ruby>の<ruby>制<rp>(</rp><rt>せい</rt><rp>)</rp></ruby></strong>で大名に米を<ruby>献上<rp>(</rp><rt>けんじょう</rt><rp>)</rp></ruby>させ、<ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby>を<ruby>緩和<rp>(</rp><rt>かんわ</rt><rp>)</rp></ruby>',
        '<strong><ruby>目安箱<rp>(</rp><rt>めやすばこ</rt><rp>)</rp></ruby></strong>で<ruby>庶民<rp>(</rp><rt>しょみん</rt><rp>)</rp></ruby>の声を聞く仕組みを作った',
        '<strong><ruby>公事方御定書<rp>(</rp><rt>くじかたおさだめがき</rt><rp>)</rp></ruby></strong>で<ruby>裁判<rp>(</rp><rt>さいばん</rt><rp>)</rp></ruby>の基準を定めた',
        '<strong><ruby>問屋制家内工業<rp>(</rp><rt>とんやせいかないこうぎょう</rt><rp>)</rp></ruby></strong>と<strong><ruby>工場制手工業<rp>(</rp><rt>こうじょうせいしゅこうぎょう</rt><rp>)</rp></ruby></strong>が<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>した',
      ],
    },
  ],
};

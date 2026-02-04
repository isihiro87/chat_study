import type { HistoryChat } from '../../../../../../history-chat/types';

export const kyohoReformChat: HistoryChat = {
  id: 'kyoho-reform',
  icon: '⚖️',
  title: '享保の改革と社会の変化',
  subtitle: '〜1716年〜 徳川吉宗の挑戦',
  characters: [
    {
      id: 'yoshimune',
      name: '徳川吉宗',
      emoji: '👑',
      colorFrom: '#2563eb',
      colorTo: '#3b82f6',
    },
    {
      id: 'retainer',
      name: '幕臣',
      emoji: '👤',
      colorFrom: '#64748b',
      colorTo: '#94a3b8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '享保元年（1716年）',
    },
    {
      type: 'narrator',
      text: '綱吉の時代に傾きかけた幕府の財政。「このままではいけない！」と立ち上がったのが、8代将軍<strong>徳川吉宗</strong>でした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'retainer',
      text: '上様、幕府の財政が大変厳しい状況です…',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshimune',
      text: 'うむ。まずは大名たちに協力を求めよう',
    },
    {
      type: 'narrator',
      text: '吉宗は<strong>上げ米の制</strong>を実施。大名に米を献上してもらう代わりに、参勤交代の江戸滞在期間を短くしました。',
    },
    {
      type: 'quiz',
      question: '享保の改革を行った8代将軍は誰？',
      options: [
        { letter: 'A', text: '徳川綱吉', correct: false },
        { letter: 'B', text: '徳川家斉', correct: false },
        { letter: 'C', text: '徳川吉宗', correct: true },
        { letter: 'D', text: '徳川慶喜', correct: false },
      ],
      explanation:
        '<strong>正解はC「徳川吉宗」</strong>です。8代将軍吉宗は「米将軍」とも呼ばれ、享保の改革で幕府の立て直しを図りました。',
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
        '<strong>正解はB「上げ米の制」</strong>です。幕府の財政難を助ける代わりに、大名の負担を軽くする制度でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshimune',
      text: '庶民の声も聞きたい。目安箱を設置せよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'retainer',
      text: 'かしこまりました。民の訴えを直接聞くとは、画期的です',
    },
    {
      type: 'narrator',
      text: '<strong>目安箱</strong>の設置により、庶民の意見を直接聞く仕組みを作りました。ここから小石川養生所（無料の病院）が生まれました。',
    },
    {
      type: 'quiz',
      question: '庶民が政治への意見を投書できるように吉宗が設置したものは？',
      options: [
        { letter: 'A', text: '投書箱', correct: false },
        { letter: 'B', text: '意見箱', correct: false },
        { letter: 'C', text: '目安箱', correct: true },
        { letter: 'D', text: '訴状箱', correct: false },
      ],
      explanation:
        '<strong>正解はC「目安箱」</strong>です。目安箱への投書から小石川養生所（病院）が作られるなど、実際に政策に反映されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshimune',
      text: '裁判の基準も明確にせねば。法律をまとめよ',
    },
    {
      type: 'narrator',
      text: '<strong>公事方御定書</strong>を制定し、それまで曖昧だった裁判の基準を明確にしました。',
    },
    {
      type: 'quiz',
      question: '裁判の基準となる法律を定めたものは？',
      options: [
        { letter: 'A', text: '武家諸法度', correct: false },
        { letter: 'B', text: '禁中並公家諸法度', correct: false },
        { letter: 'C', text: '御成敗式目', correct: false },
        { letter: 'D', text: '公事方御定書', correct: true },
      ],
      explanation:
        '<strong>正解はD「公事方御定書」</strong>です。盗みの被害額による刑罰の違いなど、具体的な基準が定められました。',
    },
    {
      type: 'narrator',
      text: 'この時代、産業の形も変わっていきます。長崎貿易が減ったことで、木綿や生糸の国産化が進みました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'retainer',
      text: '問屋が農民に織機を貸して、家で布を織らせる仕組みが広がっております',
    },
    {
      type: 'narrator',
      text: '<strong>問屋制家内工業</strong>では、問屋が農民に道具やお金を貸して家で製品を作らせました。さらに効率化を求めて、<strong>工場制手工業（マニュファクチュア）</strong>も登場しました。',
    },
    {
      type: 'quiz',
      question: '問屋が農民に道具やお金を貸して家で製品を作らせる仕組みを何という？',
      options: [
        { letter: 'A', text: '工場制手工業', correct: false },
        { letter: 'B', text: '問屋制家内工業', correct: true },
        { letter: 'C', text: '株仲間', correct: false },
        { letter: 'D', text: '座', correct: false },
      ],
      explanation:
        '<strong>正解はB「問屋制家内工業」</strong>です。農民は農業以外の収入を得られるようになりました。',
    },
    {
      type: 'quiz',
      question: '作業場に人を集めて分業で製品を作る仕組みを何という？',
      options: [
        { letter: 'A', text: '問屋制家内工業', correct: false },
        { letter: 'B', text: '座', correct: false },
        { letter: 'C', text: '工場制手工業（マニュファクチュア）', correct: true },
        { letter: 'D', text: '株仲間', correct: false },
      ],
      explanation:
        '<strong>正解はC「工場制手工業（マニュファクチュア）」</strong>です。分業により、より効率的に生産できるようになりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>享保の改革</strong>は8代将軍徳川吉宗が行った',
        '<strong>上げ米の制</strong>で大名に米を献上させ、参勤交代を緩和',
        '<strong>目安箱</strong>で庶民の声を聞く仕組みを作った',
        '<strong>公事方御定書</strong>で裁判の基準を定めた',
        '<strong>問屋制家内工業</strong>と<strong>工場制手工業</strong>が発展した',
      ],
    },
  ],
};

import type { HistoryChat } from '../../../../../../history-chat/types';

export const kyohoReformChat: HistoryChat = {
  id: 'kyoho-reform',
  icon: '📜',
  title: '享保の改革',
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
      text: '紀州藩主から8代将軍となった<strong>徳川吉宗</strong>。幕府の財政は火の車でした。',
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
      text: 'うむ。まずは倹約から始めよう。わしも質素に暮らす',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshimune',
      text: '新田開発を進め、米の収穫を増やすのじゃ',
    },
    {
      type: 'narrator',
      text: '吉宗は<strong>倹約令</strong>を出し、自らも質素な生活を送りました。また<strong>新田開発</strong>を奨励して米の増産を図りました。',
    },
    {
      type: 'quiz',
      question: '享保の改革を行った将軍は誰？',
      options: [
        { letter: 'A', text: '徳川家康', correct: false },
        { letter: 'B', text: '徳川綱吉', correct: false },
        { letter: 'C', text: '徳川吉宗', correct: true },
        { letter: 'D', text: '徳川慶喜', correct: false },
      ],
      explanation:
        '<strong>正解はC「徳川吉宗」</strong>です。8代将軍吉宗は「米将軍」とも呼ばれ、享保の改革で幕府の立て直しを図りました。',
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
      text: '<strong>目安箱</strong>の設置により、庶民の意見を直接聞く仕組みを作りました。また、裁判の基準となる<strong>公事方御定書</strong>を定めました。',
    },
    {
      type: 'quiz',
      question: '庶民の意見を聞くために吉宗が設置したものは？',
      options: [
        { letter: 'A', text: '投書箱', correct: false },
        { letter: 'B', text: '目安箱', correct: true },
        { letter: 'C', text: '意見箱', correct: false },
        { letter: 'D', text: '訴状箱', correct: false },
      ],
      explanation:
        '<strong>正解はB「目安箱」</strong>です。目安箱への投書から小石川養生所（病院）が作られるなど、実際に政策に反映されました。',
    },
    {
      type: 'end',
      points: [
        '<strong>享保の改革</strong>は8代将軍徳川吉宗が行った',
        '<strong>倹約令</strong>と<strong>新田開発</strong>で財政再建を図った',
        '<strong>目安箱</strong>で庶民の声を聞く仕組みを作った',
        '<strong>公事方御定書</strong>で裁判の基準を定めた',
      ],
    },
  ],
};

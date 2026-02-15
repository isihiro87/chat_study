import type { HistoryChat } from '../../../../../../../history-chat/types';

export const tanumaPoliticsChat: HistoryChat = {
  id: 'tanuma-politics',
  icon: '💰',
  title: '田沼意次の政治',
  subtitle: '〜1770年代〜 商業重視の積極政策',
  characters: [
    {
      id: 'tanuma',
      name: '田沼意次',
      emoji: '💰',
      colorFrom: '#ca8a04',
      colorTo: '#eab308',
    },
    {
      id: 'merchant',
      name: '商人',
      emoji: '🏪',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
    },
  ],
  content: [
    {
      type: 'date',
      text: '安永・天明年間（1772年〜1786年）',
    },
    {
      type: 'narrator',
      text: '吉宗の改革の後、政治の担い手は将軍から老中へと移っていきます。老中<strong>田沼意次</strong>は、商人の力を積極的に利用して幕府の財政を立て直そうとしました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tanuma',
      text: '商人の力を活かせば、幕府の財政も潤う',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      text: '株仲間を認めていただければ、商売がしやすくなります',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tanuma',
      text: 'よかろう。その代わり、税金を納めよ',
    },
    {
      type: 'narrator',
      text: '田沼は<strong>株仲間の奨励</strong>を行い、商人の同業者組合を公認する代わりに税金を納めさせました。',
    },
    {
      type: 'quiz',
      question: '田沼意次が公認した商人の同業者組合を何という？',
      options: [
        { letter: 'A', text: '座', correct: false },
        { letter: 'B', text: '問屋', correct: false },
        { letter: 'C', text: '両替商', correct: false },
        { letter: 'D', text: '株仲間', correct: true },
      ],
      explanation:
        '<strong>正解はD「株仲間」</strong>です。田沼は株仲間を認める代わりに税金を徴収し、財政収入を増やそうとしました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tanuma',
      text: '長崎貿易も拡大じゃ。銅や俵物の輸出を増やせ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tanuma',
      text: '印旛沼の干拓も進めよ。新田を増やすのだ',
    },
    {
      type: 'narrator',
      text: '<strong>貿易の拡大</strong>で銅や俵物（干しアワビなど）の輸出を増やし、<strong>新田開発</strong>として印旛沼の干拓も計画しました。',
    },
    {
      type: 'quiz',
      question: '田沼意次が長崎貿易で輸出を増やした海産物を何という？',
      options: [
        { letter: 'A', text: '干鰯', correct: false },
        { letter: 'B', text: '俵物', correct: true },
        { letter: 'C', text: '昆布', correct: false },
        { letter: 'D', text: '塩', correct: false },
      ],
      explanation:
        '<strong>正解はB「俵物」</strong>です。干しアワビ、いりこ、ふかひれなどの海産物を中国へ輸出しました。',
    },
    {
      type: 'narrator',
      text: 'しかし、浅間山の噴火による<strong>天明のききん</strong>が起こり、田沼の政治はワイロが横行したこともあって人々の反感を買い、失脚してしまいました。',
    },
    {
      type: 'quiz',
      question: '田沼意次が失脚する一因となった大飢饉は？',
      options: [
        { letter: 'A', text: '享保のききん', correct: false },
        { letter: 'B', text: '天明のききん', correct: true },
        { letter: 'C', text: '天保のききん', correct: false },
        { letter: 'D', text: '寛永のききん', correct: false },
      ],
      explanation:
        '<strong>正解はB「天明のききん」</strong>です。浅間山の噴火による凶作と、ワイロ政治への批判から田沼は失脚しました。',
    },
    {
      type: 'end',
      points: [
        '老中<strong>田沼意次</strong>は商業を重視した政治を行った',
        '<strong>株仲間の奨励</strong>で税金を徴収',
        '<strong>貿易の拡大</strong>で俵物の輸出を増やした',
        '<strong>天明のききん</strong>とワイロ政治への批判で失脚',
      ],
    },
  ],
};

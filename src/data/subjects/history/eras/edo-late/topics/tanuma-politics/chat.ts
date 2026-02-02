import type { HistoryChat } from '../../../../../../history-chat/types';

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
      text: '老中<strong>田沼意次</strong>は、これまでの倹約路線を転換し、商業を重視した積極的な経済政策を打ち出しました。',
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
      text: 'よかろう。その代わり、運上金を納めよ',
    },
    {
      type: 'narrator',
      text: '田沼は<strong>株仲間</strong>を奨励し、商人から運上金を徴収しました。また、蝦夷地の開発や長崎貿易の振興も計画しました。',
    },
    {
      type: 'quiz',
      question: '幕府公認の商工業者の同業組合を何という？',
      options: [
        { letter: 'A', text: '座', correct: false },
        { letter: 'B', text: '株仲間', correct: true },
        { letter: 'C', text: '問屋', correct: false },
        { letter: 'D', text: '両替商', correct: false },
      ],
      explanation:
        '<strong>正解はB「株仲間」</strong>です。田沼は株仲間を認める代わりに運上金を徴収し、財政収入を増やそうとしました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      text: '田沼様にはお礼を…（賄賂を渡す）',
    },
    {
      type: 'narrator',
      text: 'しかし、田沼政治は<strong>賄賂政治</strong>として批判されました。さらに<strong>天明の大飢饉</strong>が起こり、田沼は失脚します。',
    },
    {
      type: 'quiz',
      question: '田沼意次が失脚する一因となった大飢饉は？',
      options: [
        { letter: 'A', text: '享保の大飢饉', correct: false },
        { letter: 'B', text: '天明の大飢饉', correct: true },
        { letter: 'C', text: '天保の大飢饉', correct: false },
        { letter: 'D', text: '寛永の大飢饉', correct: false },
      ],
      explanation:
        '<strong>正解はB「天明の大飢饉」</strong>です。1780年代の大飢饉と賄賂政治への批判から、田沼は失脚しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>田沼意次</strong>は商業を重視した積極的な経済政策を行った',
        '<strong>株仲間</strong>を奨励し、運上金を徴収した',
        '<strong>賄賂政治</strong>として批判された',
        '<strong>天明の大飢饉</strong>の後、失脚した',
      ],
    },
  ],
};

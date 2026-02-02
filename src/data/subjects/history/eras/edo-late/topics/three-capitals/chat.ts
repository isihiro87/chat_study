import type { HistoryChat } from '../../../../../../history-chat/types';

export const threeCapitalsChat: HistoryChat = {
  id: 'three-capitals',
  icon: '🏙️',
  title: '三都の繁栄',
  subtitle: '〜江戸時代〜 江戸・大阪・京都の発展',
  characters: [
    {
      id: 'edo',
      name: '江戸商人',
      emoji: '🏯',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'osaka',
      name: '大阪商人',
      emoji: '💰',
      colorFrom: '#ca8a04',
      colorTo: '#eab308',
    },
    {
      id: 'kyoto',
      name: '京都職人',
      emoji: '🎨',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '江戸時代、<strong>江戸・大阪・京都</strong>の三都市が特に発展し、「<strong>三都</strong>」と呼ばれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'edo',
      text: '江戸は将軍様のお膝元。人口100万を超える大都市だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'osaka',
      text: '大阪は「天下の台所」。全国の米や特産物が集まるんや',
    },
    {
      type: 'narrator',
      text: '<strong>江戸</strong>は政治の中心、<strong>大阪</strong>は経済の中心でした。',
    },
    {
      type: 'quiz',
      question: '「天下の台所」と呼ばれた都市はどこ？',
      options: [
        { letter: 'A', text: '江戸', correct: false },
        { letter: 'B', text: '京都', correct: false },
        { letter: 'C', text: '大阪', correct: true },
        { letter: 'D', text: '堺', correct: false },
      ],
      explanation:
        '<strong>正解はC「大阪」</strong>です。全国の米や特産物が集まり、経済の中心地として栄えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'osaka',
      text: '蔵屋敷には各藩の米や特産物が集まってくる',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kyoto',
      text: '京都は天皇様のおわす都。西陣織などの伝統工芸が盛んどす',
    },
    {
      type: 'narrator',
      text: '<strong>京都</strong>は天皇のいる都として、文化・伝統工芸の中心でした。',
    },
    {
      type: 'quiz',
      question: '大阪に置かれた、各藩の米や特産物を売る施設は？',
      options: [
        { letter: 'A', text: '問屋', correct: false },
        { letter: 'B', text: '蔵屋敷', correct: true },
        { letter: 'C', text: '株仲間', correct: false },
        { letter: 'D', text: '両替商', correct: false },
      ],
      explanation:
        '<strong>正解はB「蔵屋敷」</strong>です。各藩が大阪に設置し、米や特産物の売買を行いました。',
    },
    {
      type: 'end',
      points: [
        '<strong>三都</strong>：江戸・大阪・京都',
        '<strong>江戸</strong>：政治の中心、人口100万の大都市',
        '<strong>大阪</strong>：「天下の台所」、経済の中心、蔵屋敷',
        '<strong>京都</strong>：文化・伝統工芸の中心',
      ],
    },
  ],
};

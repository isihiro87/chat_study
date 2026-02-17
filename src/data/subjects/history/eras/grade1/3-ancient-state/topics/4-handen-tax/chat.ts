import type { HistoryChat } from '../../../../../../../history-chat/types';

export const handenTaxChat: HistoryChat = {
  id: 'handen-tax',
  icon: '🌾',
  title: '班田収授法と税制度',
  subtitle: '〜奈良時代〜 土地と税の仕組み',
  characters: [
    {
      id: 'farmer',
      name: '農民',
      emoji: '👨‍🌾',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
    {
      id: 'kokushi',
      name: '国司',
      emoji: '📋',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
  ],
  content: [
    {
      type: 'date',
      text: '奈良時代',
    },
    {
      type: 'narrator',
      text: '律令国家では、<strong>班田収授法</strong>により6歳以上のすべての人に<strong>口分田</strong>が与えられ、死後に国へ返す仕組みでした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'kokushi',
      text: '戸籍に基づいて<strong>口分田</strong>を分け与える。その代わり税を納めるのだぞ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '稲を納める<strong>租</strong>、布などの特産品を納める<strong>調</strong>、労役の代わりの布を納める<strong>庸</strong>…負担が重いなあ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '九州を守る<strong>防人</strong>にまで行かなければならない者もいるのだ',
    },
    {
      type: 'quiz',
      question: '人々に土地を与え、死後返還させる制度は？',
      options: [
        { letter: 'A', text: '墾田永年私財法', correct: false },
        { letter: 'B', text: '三世一身法', correct: false },
        { letter: 'C', text: '公地・公民', correct: false },
        { letter: 'D', text: '班田収授法', correct: true },
      ],
      explanation: '<strong>正解はD「班田収授法」</strong>です。6歳以上の人に口分田を与え、死後に国へ返させる制度です。',
    },
    {
      type: 'narrator',
      text: '重い税負担で農民が逃亡し、<strong>口分田</strong>が不足。朝廷は土地制度の見直しを迫られました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'kokushi',
      text: '開墾を奨励するため、まず<strong>三世一身法</strong>で3代までの私有を認めた',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'kokushi',
      text: '743年にはついに<strong>墾田永年私財法</strong>で永久の私有を認めたのだ。これが<strong>荘園</strong>の始まりとなった',
    },
    {
      type: 'quiz',
      question: '743年に土地の永久私有を認めた法は？',
      options: [
        { letter: 'A', text: '班田収授法', correct: false },
        { letter: 'B', text: '三世一身法', correct: false },
        { letter: 'C', text: '大宝律令', correct: false },
        { letter: 'D', text: '墾田永年私財法', correct: true },
      ],
      explanation: '<strong>正解はD「墾田永年私財法」</strong>です。開墾した土地の永久私有を認め、のちの荘園の広がりにつながりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>班田収授法</strong>：<strong>口分田</strong>を与え、<strong>租・調・庸</strong>を課す',
        '<strong>防人</strong>：九州防衛の兵役、農民の重い負担',
        '<strong>墾田永年私財法</strong>（743年）：土地の永久私有 → <strong>荘園</strong>の始まり',
      ],
    },
  ],
};

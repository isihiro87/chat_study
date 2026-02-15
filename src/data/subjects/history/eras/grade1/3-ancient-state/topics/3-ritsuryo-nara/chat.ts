import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ritsuryoNaraChat: HistoryChat = {
  id: 'ritsuryo-nara',
  icon: '🏛️',
  title: '律令国家と奈良時代',
  subtitle: '〜701年〜 法に基づく国のしくみ',
  characters: [
    {
      id: 'official',
      name: '役人',
      emoji: '👨‍💼',
      colorFrom: '#4338ca',
      colorTo: '#818cf8',
    },
    {
      id: 'commoner',
      name: '庶民',
      emoji: '🧑‍🌾',
      colorFrom: '#15803d',
      colorTo: '#4ade80',
    },
  ],
  content: [
    {
      type: 'date',
      text: '701年〜',
    },
    {
      type: 'narrator',
      text: '<strong>701年</strong>に<strong>大宝律令</strong>が完成し、唐にならった法律で国を治める<strong>律令国家</strong>の仕組みが整いました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'official',
      text: '中央には<strong>太政官</strong>を置き、地方には<strong>国司</strong>・<strong>郡司</strong>を派遣して全国を治めるのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'commoner',
      text: '<strong>和同開珎</strong>というお金が作られたそうですね。都の<strong>朱雀大路</strong>は広くて立派だなあ',
    },
    {
      type: 'quiz',
      question: '701年に完成した律令は？',
      options: [
        { letter: 'A', text: '十七条の憲法', correct: false },
        { letter: 'B', text: '大宝律令', correct: true },
        { letter: 'C', text: '御成敗式目', correct: false },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation: '<strong>正解はB「大宝律令」</strong>です。唐の律令にならい、刑罰（律）と政治の決まり（令）を定めました。',
    },
    {
      type: 'narrator',
      text: '<strong>710年</strong>、都が奈良の<strong>平城京</strong>に移されました。唐の都・長安をモデルにした壮大な都です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'official',
      text: '平城京は碁盤の目のように整備された都だ。政治の中心として栄えるぞ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'commoner',
      text: '多くの人が都に集まり、市も開かれて賑わっているんですね',
    },
    {
      type: 'quiz',
      question: '710年に奈良に置かれた都は？',
      options: [
        { letter: 'A', text: '藤原京', correct: false },
        { letter: 'B', text: '平城京', correct: true },
        { letter: 'C', text: '平安京', correct: false },
        { letter: 'D', text: '長岡京', correct: false },
      ],
      explanation: '<strong>正解はB「平城京」</strong>です。唐の長安にならって造られた、奈良時代の都です。',
    },
    {
      type: 'end',
      points: [
        '<strong>大宝律令</strong>（701年）：<strong>律令国家</strong>の仕組みが完成',
        '<strong>太政官</strong>・<strong>国司</strong>・<strong>郡司</strong>で中央と地方を統治',
        '<strong>平城京</strong>（710年）：唐の長安をモデルにした都、<strong>和同開珎</strong>',
      ],
    },
  ],
};
